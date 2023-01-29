import { module, test } from 'qunit';
import { setupTest } from 'personal-website-ember/tests/helpers';

module('Unit | Route | coming-soon', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:coming-soon');
    assert.ok(route);
  });
});
