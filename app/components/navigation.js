import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavigationComponent extends Component {
  @service screen;

  @tracked
  menuVisible = false;

  willDestroy() {
    super.willDestroy(...arguments);
    window.removeEventListener('scroll', this.onScroll);
  }

  @action
  handleMount(element) {
    this.navigationBar = element;
    window.addEventListener('scroll', this.onScroll);
  }

  @action
  onScroll() {
    if (this.isDesktop) {
      this.navigationBar.classList.toggle('bg-slate-300', window.scrollY > 10);
    }
    this.navigationBar.classList.toggle('opacity-30', window.scrollY > 10);
  }

  get isDesktop() {
    return this.screen.width > 640;
  }

  @action
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @action
  closeMenu() {
    this.menuVisible = false;
  }
}
