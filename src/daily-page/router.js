const express = require('express');
const router = express.Router();
const DailyPageController = require('./controller');

const controller = new DailyPageController();
router.post('/', async (req, res, next) => {
    try {
        const {parentPageId, fromPageId} = req.body;
        const result = await controller.duplicate(parentPageId, fromPageId);
        return res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;