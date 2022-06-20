import { ConfigPlugin } from "@expo/config-plugins";
export interface LocationPermissionProps {
    locationWhenInUsePermission?: string;
}
export declare const withLocationPermission: ConfigPlugin<LocationPermissionProps>;
