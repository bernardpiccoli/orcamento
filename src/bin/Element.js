import Vue from 'vue'
import Element from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
import ElementLocaleLang from 'element-ui/lib/locale/lang/pt-br'

import 'element-ui/lib/theme-chalk/index.css'

ElementLocale.use(ElementLocaleLang)

Vue.use(Element)