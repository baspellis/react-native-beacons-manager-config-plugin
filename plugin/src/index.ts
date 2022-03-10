import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';
import { withLocationPermission, LocationPermissionProps } from './withLocationPermission';

const pkg = require('react-native-beacons-manager/package.json');

interface Props extends LocationPermissionProps {}

const withBeaconsManager: ConfigPlugin<Props> = (config, props = {}) => {
  return withLocationPermission(config, props);
};

export default createRunOncePlugin(
  withBeaconsManager,
  pkg.name,
  pkg.version
);