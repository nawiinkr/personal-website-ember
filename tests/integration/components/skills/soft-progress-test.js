import { module, test } from 'qunit';
import { setupRenderingTest } from 'personal-website-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | skills/soft-progress', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Skills::SoftProgress />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Skills::SoftProgress>
        template block text
      </Skills::SoftProgress>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
