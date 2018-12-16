// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http/http'
import urls from './components/CommonUrls'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import { Button, Select , MessageBox,Tree ,Row,
  Col,Message} from 'element-ui';
 Vue.use(Button)
 Vue.use(Select)
 Vue.use(Tree)
 Vue.use(Row)
 Vue.use(Col)



Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.URL = urls;
Vue.prototype.$message = Message;
// Vue.prototype.$msgbox = MessageBox;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
