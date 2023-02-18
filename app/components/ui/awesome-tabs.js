import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { guidFor } from '@ember/object/internals';

export default class UiAwesomeTabsComponent extends Component {
  //collection = [];

  @action
  register({ title }) {
    // this.collection = [...this.tabs, {title, id: 10000*Math.random()}];
  }

  @tracked activeTab = this.args.tabs[0];

  get activeId() {
    return this.activeTab.id;
  }

  @action
  setActiveTab(id) {
    this.activeTab = this.args.tabs.find((tab) => tab.id === id);
  }
}
