import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

export interface LocationPermissionProps {
  locationWhenInUsePermission?: string;
}

const LOCATION_WHEN_IN_USE_PERMISSION = "Allow $(PRODUCT_NAME) to access your location while you use the app";

export const withLocationPermission: ConfigPlugin<LocationPermissionProps> = (config, props = {}) => {
  return withInfoPlist(config, config => {
    config.modResults.NSLocationWhenInUseUsageDescription = 
      props.locationWhenInUsePermission || config.modResults.NSLocationWhenInUseUsageDescription || LOCATION_WHEN_IN_USE_PERMISSION;
    return config;
  });
}
