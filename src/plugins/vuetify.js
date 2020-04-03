import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify, {
  VList,
  VSubheader,
  VListItemGroup,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VCheckbox,
  VListItemAction
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    "v-list": VList,
    "v-subheader": VSubheader,
    "v-list-item-group": VListItemGroup,
    "v-list-item": VListItem,
    "v-list-item-action": VListItemAction,
    "v-list-item-content": VListItemContent,
    "v-list-item-title": VListItemTitle,
    "v-checkbox": VCheckbox
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
