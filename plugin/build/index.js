"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withLocationPermission_1 = require("./withLocationPermission");
const pkg = require('react-native-beacons-manager/package.json');
const withBeaconsManager = (config, props = {}) => {
    return (0, withLocationPermission_1.withLocationPermission)(config, props);
};
exports.default = (0, config_plugins_1.createRunOncePlugin)(withBeaconsManager, pkg.name, pkg.version);
