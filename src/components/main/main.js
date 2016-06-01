import angular from 'angular';
import {appName} from '../../config/constants';
import MainController from './main-controller';
import MapComponent from '../map/map';

let MainComponent = angular.module(`${appName}.main`, [MapComponent.name]);

export default MainComponent;
