// ant design vue library
import { Row, Col, Divider, Icon, List } from "ant-design-vue";

const importAntd = (Vue) => {
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Divider);
  Vue.use(Icon);
  Vue.use(List);
};
export default importAntd;
