import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
export default class ComingSoonRoute extends Route {
  setupController() {
    later(() => {
      this.controller.showYoutubeVideo = true;
    }, 10000);
  }
}
