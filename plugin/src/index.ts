import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';

const pkg = require('react-native-beacons-manager/package.json');

const withBeaconsManager: ConfigPlugin = config => config;

export default createRunOncePlugin(
  withBeaconsManager,
  pkg.name,
  pkg.version
);