import { module, test } from 'qunit';
import { setupRenderingTest } from 'personal-website-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | projects', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Projects />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Projects>
        template block text
      </Projects>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
