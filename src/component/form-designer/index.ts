import FormDesigner from './src/FormDesigner.vue';
// 为组件添加 install 方法，用于按需引入
// eslint-disable-next-line func-names
FormDesigner.install = function (Vue, options) {
  if (options) {
    Vue.prototype.$PROCRUD = options;
  }
  Vue.component(FormDesigner.name, FormDesigner);
};

export default FormDesigner;
