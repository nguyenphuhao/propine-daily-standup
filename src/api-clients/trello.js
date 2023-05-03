const trelloAPI = require('../common/trello');
const defaultBoardId = 'p2ivxZ6E';

const getCards = (boardId = defaultBoardId) => {
    return trelloAPI(`1/boards/${boardId}/cards`);
}

const createNewCard = (params = {}) => {
    const {
        name = 'Test',
        desc = 'Test',
        idList = '6451fbf37248445542d2d75d'
    } = params;
    return trelloAPI(`1/cards`, {
        name,
        desc,
        idList
    },'post');
}

module.exports = {
    getCards,
    createNewCard
}