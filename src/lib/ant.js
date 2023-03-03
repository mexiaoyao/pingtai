// ant design vue library
import { Row, Col, Divider, Icon, List, Space } from "ant-design-vue";

const importAntd = (Vue) => {
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Divider);
  Vue.use(Icon);
  Vue.use(List);
  Vue.use(Space);
};
export default importAntd;
