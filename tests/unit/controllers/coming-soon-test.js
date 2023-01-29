import { module, test } from 'qunit';
import { setupTest } from 'personal-website-ember/tests/helpers';

module('Unit | Controller | coming-soon', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:coming-soon');
    assert.ok(controller);
  });
});
