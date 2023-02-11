import { action } from '@ember/object';
import Component from '@glimmer/component';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class IntroComponent extends Component {
  @action
  initiateDynamicText(element) {
    let index = 0, strIndex = 0;
    let xTime = false;
    const message = [
      'I am a web developer and a software engineer.',
      'I like solving real world problems using engineering and logical skills.',
      'I am trained in latest web tech and i enjoy every bit of it.',
    ];
    setInterval(() => {
      if(!xTime){
        element.textContent = message[strIndex].substring(0, index++);
        if (index > message[strIndex].length) {
          index = 0;
          xTime = new Date().getTime();
          strIndex++;
        }
        if(strIndex === message.length){
          strIndex = 0;
        }
      }else if(new Date().getTime() - xTime > 2000){
        xTime = false;
      }
    }, 100);
  }
}
