import angular from 'angular';
import {appName} from '../../config/constants';
import './weather-service';

let WeatherComponent = angular.module(`${appName}.weather`, []);

export default WeatherComponent;
