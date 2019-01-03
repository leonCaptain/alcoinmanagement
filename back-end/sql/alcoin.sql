/*
 Navicat MySQL Data Transfer

 Source Server         : localdb
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : alcoin

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 03/01/2019 11:28:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for coin_holder
-- ----------------------------
DROP TABLE IF EXISTS `coin_holder`;
CREATE TABLE `coin_holder` (
  `coin_id` int(255) NOT NULL AUTO_INCREMENT,
  `coin_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `average_price` double(255,0) NOT NULL,
  `current_price` double(255,0) DEFAULT NULL,
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `yield` double(255,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`coin_id`) USING BTREE,
  UNIQUE KEY `on_record` (`user_id`,`coin_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of coin_holder
-- ----------------------------
BEGIN;
INSERT INTO `coin_holder` VALUES (1, 'eos', 100, 2000, '2019-01-02 22:15:05.000000', NULL, 10001, 20);
INSERT INTO `coin_holder` VALUES (3, 'btc', 14000, 23000, '2019-01-03 09:07:24.000000', '2019-01-03 11:26:44.000000', 10001, 150);
INSERT INTO `coin_holder` VALUES (4, 'aion', 100, 200, '2019-01-03 09:25:00.000000', NULL, 10001, 100);
INSERT INTO `coin_holder` VALUES (5, 'etc', 50, 100, '2019-01-03 11:24:45.000000', NULL, 10001, 100);
COMMIT;

-- ----------------------------
-- Table structure for coin_info
-- ----------------------------
DROP TABLE IF EXISTS `coin_info`;
CREATE TABLE `coin_info` (
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for user_profile
-- ----------------------------
DROP TABLE IF EXISTS `user_profile`;
CREATE TABLE `user_profile` (
  `user_key` int(255) NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int(255) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for user_trading_record
-- ----------------------------
DROP TABLE IF EXISTS `user_trading_record`;
CREATE TABLE `user_trading_record` (
  `user_price_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `price` double(10,2) NOT NULL DEFAULT '0.00',
  `user_coin_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`user_price_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET FOREIGN_KEY_CHECKS = 1;
