import Component from '@glimmer/component';
import { action } from '@ember/object';
const url = "https://docs.google.com/document/d/1CoP2yXcv-UzPFEaUo62Fc0JliUgMhlsr/edit?usp=sharing&ouid=108425550835988899853&rtpof=true&sd=true";
export default class AboutComponent extends Component {
    @action
    openResume(){
        window.open(url, "_blank")
    }
}
