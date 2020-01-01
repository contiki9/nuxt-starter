import {storiesOf} from '@storybook/vue'

storiesOf('Components', module).add('btn', () => ({
  template: `<div>
    <v-btn depressed color="primary">Primary</v-btn>
    <v-btn class="mx-2" fab dark small color="primary">
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
    <v-icon>mdi-anchor</v-icon>
    <v-checkbox
      label="check"
    ></v-checkbox>
    </div>
`,
}));
