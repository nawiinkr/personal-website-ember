import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavigationComponent extends Component {

    @service screen;

    @tracked
    menuVisible=false;

    get isDesktop(){
        return this.screen.width > 640;
    }

    @action
    toggleMenu(){
        this.menuVisible = !this.menuVisible;
    }
}
