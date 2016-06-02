import {service, inject} from '../../config/decorators';

@service
export class Weather {
  @inject $http;

  getWeatherByLocation(location) {
    const yql = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${location}')`;

    return this.$http.jsonp(
      `https://query.yahooapis.com/v1/public/yql?q=${yql}&format=json&callback=JSON_CALLBACK`)
    .then(res => res.data.query.results.channel.item);
  }
}
