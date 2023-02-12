import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const messages = [
  'I am a web developer and a software engineer.',
  'I like solving real world problems using engineering and logical skills.',
  'I am trained in latest web tech and i enjoy every bit of it.',
];

export default class IntroComponent extends Component {
  @tracked message = '';

  async #writeMessage(msg, ms) {
    let i = 0;
    while (i < msg.length) {
      await delay(ms);
      this.message = this.message.concat(msg.charAt(i++));
    }
  }

  async #eraseMessage(ms) {
    while (this.message.length) {
      await delay(ms);
      this.message = this.message.slice(0, -1);
    }
  }

  @action
  async initiateDynamicText() {
    let index = 0;
    while (true) {
      this.message = '';
      await this.#writeMessage(messages[index], 70);
      await delay(5000);
      await this.#eraseMessage(30);
      if (++index >= messages.length) {
        index = 0;
      }
    }
  }

  @action
  navigateToAboutMe() {
    const section = document.querySelector('#about');
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
