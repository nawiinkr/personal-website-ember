import { module, test } from 'qunit';
import { setupRenderingTest } from 'personal-website-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/awesome-tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ui::AwesomeTabs />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Ui::AwesomeTabs>
        template block text
      </Ui::AwesomeTabs>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
