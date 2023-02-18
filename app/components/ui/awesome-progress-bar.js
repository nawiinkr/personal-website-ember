import Component from '@glimmer/component';
import { action } from '@ember/object';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default class UiAwesomeProgressBarComponent extends Component {
  @action
  async loadProgressBar(element) {
    let id = null,
      i = 0;
    clearInterval(id);
    const frame = () => {
      if (i++ == this.args.value) {
        clearInterval(id);
      } else {
        element.style.maxWidth = `${i}%`;
      }
    };
    id = setInterval(frame, 5);
  }
}
