import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProjectsComponent extends Component {
  user = 'nawiinkr';
  @tracked
  projects = [];

  constructor() {
    super(...arguments);
    this.loadProjects();
  }

  async loadProjects() {
    const response = await fetch(
      `https://api.github.com/users/${this.user}/repos?sort=updated&direction=desc`
    );
    this.projects = await response.json();
  }
}
