const moment = require('moment');
const confluence = require('../common/confluence');
const {createNewCard} = require('../api-clients/trello');

class DailyPageController {
    async duplicate(parentPageId = '428310577', fromPageId = '428802049'){
      const now = moment();

      const title = now.format('D MMM');
      const search = now.subtract(1, 'days').format('D MMM');
      const res = await confluence.post(`/wiki/rest/api/content/${fromPageId}/pagehierarchy/copy`, {
        "copyAttachments": true,
        "copyPermissions": true,
        "copyProperties": true,
        "copyLabels": true,
        "copyCustomContents": true,
        "copyDescendants": true,
        "destinationPageId": parentPageId,
        "titleOptions": {
          "replace": title,
          "search": search
        }
      });
      const task = res.data;
      let counter = 0;
      const intVal = setInterval(async () => {
        if (counter > 10) {
          clearInterval(intVal);
          return;
        }
        const result = await confluence.get(`/wiki/rest/api/longtask/${task.id}`);
        if (result?.data?.additionalDetails?.destinationUrl) {
          const url = result?.data?.additionalDetails?.destinationUrl;
          await createNewCard({
            name: title,
            desc: `https://propine.atlassian.net/wiki${url}`
          });
          clearInterval(intVal);
        }
      }, 5000);
      return 'OK';
    }
}

module.exports = DailyPageController;