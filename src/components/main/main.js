import angular from 'angular';
import 'angular-sanitize';
import {appName} from '../../config/constants';
import './main-controller';
import MapComponent from '../map/map';
import WeatherComponent from '../weather/weather';
import UtilsComponent from '../utils/utils';

let MainComponent = angular.module(`${appName}.main`, [
  'ngSanitize',
  MapComponent.name,
  WeatherComponent.name,
  UtilsComponent.name
]);

export default MainComponent;
