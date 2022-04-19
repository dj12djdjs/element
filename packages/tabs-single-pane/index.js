import TabsSinglePane from './src/tabs-single-pane';

/* istanbul ignore next */
TabsSinglePane.install = function(Vue) {
  Vue.component(TabsSinglePane.name, TabsSinglePane);
};

export default TabsSinglePane;
