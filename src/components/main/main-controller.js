import {controller, inject} from '../../config/decorators';

@controller
export class MainCtrl {
  @inject Weather;
  @inject XML;
  constructor() {

    this.lat = 47.00308414660523;
    this.long = 2.1278085937499425;
    this.zoom = 6;

    this.cities = [{
      name: 'Paris',
      lat: 48.833,
      long: 2.333
    }, {
      name: 'Marseille',
      lat: 43.300,
      long: 5.367
    }, {
      name: 'Lyon',
      lat: 45.767,
      long: 4.833
    }, {
      name: 'Toulouse',
      lat: 43.617,
      long: 1.450
    }, {
      name: 'Nice',
      lat: 43.700,
      long: 7.267
    }, {
      name: 'Nantes',
      lat: 47.233,
      long: -1.583
    }, {
      name: 'Strasbourg',
      lat: 48.583,
      long: 7.750
    }, {
      name: 'Montpellier',
      lat: 43.600,
      long: 3.883
    }, {
      name: 'Bordeaux',
      lat: 44.833,
      long: -0.567
    }, {
      name: 'Lille',
      lat: 50.650,
      long: 3.083
    }];
  }

  loadWeather(city) {
    this.Weather.getWeatherByLocation(city.name)
      .then(data => city.text = this.XML.getCDATA(data.description));
  }
}
