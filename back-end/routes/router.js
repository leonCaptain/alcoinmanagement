let express = require('express');
let holderCoins= require('../controls/holderCoins');
let coinInfo= require('../controls/coinInfo');
let api = require('../api');

let router =  express.Router();

router.get(api.holderCoinList, holderCoins.fetchByUserId);
router.post(api.holderCoinAdd, holderCoins.addOne);
router.post(api.holderCoinUpdate, holderCoins.updateOne);
router.post(api.holderCoinDelete, holderCoins.deleteOne);
router.post(api.holderCoinDelete, holderCoins.deleteOne);
router.get(api.coinInfoList, coinInfo.fetchCoinList);

module.exports = router;