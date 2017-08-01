/*
Navicat MariaDB Data Transfer

Source Server         : local mariadb
Source Server Version : 100122
Source Host           : localhost:3307
Source Database       : demo

Target Server Type    : MariaDB
Target Server Version : 100122
File Encoding         : 65001

Date: 2017-05-05 11:01:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bodega
-- ----------------------------
DROP TABLE IF EXISTS `bodega`;
CREATE TABLE `bodega` (
  `id_bodega` int(11) NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_bodega`,`id_proveedor`,`id_producto`),
  KEY `id_proveedor` (`id_proveedor`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `bodega_ibfk_1` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`),
  CONSTRAINT `bodega_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bodega
-- ----------------------------
INSERT INTO `bodega` VALUES ('1', '4', '1', '2');
INSERT INTO `bodega` VALUES ('2', '1', '2', '3');
INSERT INTO `bodega` VALUES ('3', '4', '3', '5');
INSERT INTO `bodega` VALUES ('4', '2', '4', '2');
INSERT INTO `bodega` VALUES ('5', '2', '5', '1');
INSERT INTO `bodega` VALUES ('6', '1', '6', '3');
INSERT INTO `bodega` VALUES ('7', '3', '7', '0');
INSERT INTO `bodega` VALUES ('8', '2', '8', '1');
INSERT INTO `bodega` VALUES ('9', '4', '9', '2');
INSERT INTO `bodega` VALUES ('10', '2', '10', '6');
INSERT INTO `bodega` VALUES ('11', '2', '11', '8');
INSERT INTO `bodega` VALUES ('12', '4', '12', '0');
INSERT INTO `bodega` VALUES ('13', '3', '12', '3');

-- ----------------------------
-- Table structure for producto
-- ----------------------------
DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of producto
-- ----------------------------
INSERT INTO `producto` VALUES ('1', 'jabon rey');
INSERT INTO `producto` VALUES ('2', 'ariel');
INSERT INTO `producto` VALUES ('3', 'fab');
INSERT INTO `producto` VALUES ('4', 'jabon coco');
INSERT INTO `producto` VALUES ('5', 'suavitel');
INSERT INTO `producto` VALUES ('6', 'palmolive');
INSERT INTO `producto` VALUES ('7', 'protex');
INSERT INTO `producto` VALUES ('8', 'rexona');
INSERT INTO `producto` VALUES ('9', 'balance');
INSERT INTO `producto` VALUES ('10', 'dove');
INSERT INTO `producto` VALUES ('11', 'nivea');
INSERT INTO `producto` VALUES ('12', 'jhonson');
INSERT INTO `producto` VALUES ('13', 'jabon liquido');

-- ----------------------------
-- Table structure for proveedor
-- ----------------------------
DROP TABLE IF EXISTS `proveedor`;
CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of proveedor
-- ----------------------------
INSERT INTO `proveedor` VALUES ('1', 'don pepe');
INSERT INTO `proveedor` VALUES ('2', 'exito');
INSERT INTO `proveedor` VALUES ('3', 'carulla');
INSERT INTO `proveedor` VALUES ('4', 'continente');
SET FOREIGN_KEY_CHECKS=1;
