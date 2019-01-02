let express = require('express');
let holderCoins= require('../controls/holderCoins');
let api = require('../api');

let router =  express.Router();

router.get(api.holderCoinList, holderCoins.fetchByUserId);
router.post(api.holderCoinAdd, holderCoins.addOne);
router.post(api.holderCoinUpdate, holderCoins.updateOne);
router.post(api.holderCoinDelete, holderCoins.deleteOne);

module.exports =  router;