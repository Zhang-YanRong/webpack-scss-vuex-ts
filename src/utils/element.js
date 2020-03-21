import Vue from "vue";
import {
  // 基础
  Button,

  // 表单
  Input,
  Select,
  Option,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Form,
  FormItem,

  // 数据
  Tag,
  Badge,
  Table,
  TableColumn,
  Pagination,

  // 通知
  Loading,
  Tooltip,
  Message,
  MessageBox,
  Notification,

  // 导航
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Breadcrumb,
  BreadcrumbItem,

  // 其他
  Dialog,
  Drawer,
  Scrollbar
} from "element-ui";

// import "element-ui/lib/theme-chalk/display.css";
import "element-ui/lib/theme-chalk/index.css";
// 基础
Vue.use(Button);

// 表单
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);

Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Form);
Vue.use(FormItem);

// 数据
Vue.use(Badge);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

// 通知
Vue.use(Tooltip);
Vue.use(Loading.directive);

// 导航
Vue.use(Tag);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

// 其他
Vue.use(Dialog);
Vue.use(Drawer);
Vue.use(Scrollbar);

Vue.prototype.$ELEMENT = { size: "medium", zIndex: 99999 };

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
// https://github.com/PanJiaChen/vue-element-admin/issues/2168
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = Vue.prototype.$msgbox.alert;
Vue.prototype.$confirm = Vue.prototype.$msgbox.confirm;
Vue.prototype.$prompt = Vue.prototype.$msgbox.prompt;
