"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLocationPermission = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const LOCATION_WHEN_IN_USE_PERMISSION = "Allow $(PRODUCT_NAME) to access your location while you use the app";
const withLocationPermission = (config, props = {}) => {
    return (0, config_plugins_1.withInfoPlist)(config, config => {
        config.modResults.NSLocationWhenInUseUsageDescription =
            props.locationWhenInUsePermission || config.modResults.NSLocationWhenInUseUsageDescription || LOCATION_WHEN_IN_USE_PERMISSION;
        return config;
    });
};
exports.withLocationPermission = withLocationPermission;
