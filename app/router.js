import EmberRouter from '@ember/routing/router';
import config from 'personal-website-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/', {
    redirectsTo: 'home',
  });
  this.route('home');
  this.route('coming-soon');
});
