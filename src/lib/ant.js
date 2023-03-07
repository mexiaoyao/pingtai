// ant design vue library
import { Row, Col, Divider, Icon, List, Space, Dropdown, Menu } from "ant-design-vue";

const importAntd = (Vue) => {
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Divider);
  Vue.use(Icon);
  Vue.use(List);
  Vue.use(Space);
  Vue.use(Dropdown);
  Vue.use(Menu);
};
export default importAntd;
