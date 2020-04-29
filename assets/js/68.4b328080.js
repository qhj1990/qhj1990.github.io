(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{315:function(t,e,r){"use strict";r.r(e);var a=r(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[t._v("#")]),t._v(" vue3")]),t._v(" "),r("p",[t._v("用proxy替代原来的obj.defineProperty()来进行监听")]),t._v(" "),r("p",[t._v("virtual DOM重构")]),t._v(" "),r("p",[t._v("typescript重写")]),t._v(" "),r("h2",{attrs:{id:"object-defineproperty-缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty-缺点"}},[t._v("#")]),t._v(" Object.defineProperty()缺点")]),t._v(" "),r("p",[t._v("无法监听数组的变化，")]),t._v(" "),r("p",[t._v("要对每个对象的每个属性惊喜遍历，如果属性值也是对象，那需要深度遍历。")]),t._v(" "),r("p",[t._v("Proxy直接代理整个对象，\nProxy可以直接监听数组的变化")]),t._v(" "),r("h2",{attrs:{id:"proxy和object-defineproperty-区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy和object-defineproperty-区别"}},[t._v("#")]),t._v(" proxy和Object.defineProperty()区别")]),t._v(" "),r("p",[t._v("Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象，\nObject.defineProperty对新增属性需要手动进行Observe\nProxy支持13种拦截操作，这是defineProperty所不具有的")]),t._v(" "),r("h2",{attrs:{id:"virtual-dom重构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom重构"}},[t._v("#")]),t._v(" virtual DOM重构")]),t._v(" "),r("p",[t._v("vue是模板templte, 2.0 是单个组件进行遍历, 3.0是比较动态节点。")]),t._v(" "),r("p",[t._v("react的jsx和render function中一些可优化的信息丢失了,所以做了时间分片,在16ms的会更新一次")]),t._v(" "),r("h2",{attrs:{id:"vue-composition-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-composition-api"}},[t._v("#")]),t._v(" Vue composition API")]),t._v(" "),r("p",[t._v("原有的写法，处理同个逻辑的方法分散在data method等各个地方。逻辑多了之后维护比较麻烦。")]),t._v(" "),r("p",[t._v("组件从原本的选项配置变成了函数定义，组建逻辑结构更加灵活，逻辑复用")]),t._v(" "),r("ul",[r("li",[t._v("更好的Typescript 类型推导支持")]),t._v(" "),r("li",[t._v("逻辑复用, 组件从原本的选项配置变成了函数定义，组建逻辑结构更加灵活")]),t._v(" "),r("li",[t._v("tree-shaking ? 将 引用的 动态 import 包可以更下")]),t._v(" "),r("li",[t._v("更好的压缩, 参数名可以压缩")])]),t._v(" "),r("h3",{attrs:{id:"setup-props-context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-props-context"}},[t._v("#")]),t._v(" setup(props, context)")]),t._v(" "),r("p",[t._v("compostion api 统一入口，setup 函数会在 beforeCreate 之后、created 之前执行。\n在 setup() 函数中无法访问到 this， context为上下文对象")]),t._v(" "),r("h3",{attrs:{id:"reactive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[t._v("#")]),t._v(" reactive()")]),t._v(" "),r("p",[t._v("reactive() 函数接收一个普通对象，返回一个响应式的数据对象。")]),t._v(" "),r("p",[t._v("watchEffect")]),t._v(" "),r("h3",{attrs:{id:"ref"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref()")]),t._v(" "),r("h2",{attrs:{id:"fragments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fragments"}},[t._v("#")]),t._v(" Fragments")]),t._v(" "),r("p",[t._v("根节点不需唯一, 类似 React.Fragments()")])])}),[],!1,null,null,null);e.default=s.exports}}]);