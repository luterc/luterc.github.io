(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{739:function(t,v,_){"use strict";_.r(v);var a=_(104),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"实现基本增删改查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现基本增删改查"}},[t._v("#")]),t._v(" 实现基本增删改查")]),t._v(" "),_("p",[t._v("在上一章，我们建立一个基础的 SpringBoot 项目并且引入了依赖。本章开始，我们将逐步实现基础增删改查功能和 RBAC 权限体系。")]),t._v(" "),_("h2",{attrs:{id:"实现系统管理模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现系统管理模块"}},[t._v("#")]),t._v(" 实现系统管理模块")]),t._v(" "),_("p",[t._v("系统管理模块，包括：用户、角色、权限的管理，结构如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/heimdall/2.png",alt:""}})]),t._v(" "),_("p",[t._v("本例中，模块的基本结构如图所示，其中：")]),t._v(" "),_("ul",[_("li",[t._v("entity: JPA 实体类，与数据库表一一对应。")]),t._v(" "),_("li",[t._v("dto:用到持久层与前端之间的数据交互。")]),t._v(" "),_("li",[t._v("vo: 用作前端与后台之间的参数交互。")]),t._v(" "),_("li",[t._v("mapper :mapStruct 的实体转换接口定义。")])]),t._v(" "),_("blockquote",[_("p",[t._v("篇幅有限，此处就不详细说明增删改查的具体实现了。\n具体实现，请参考:"),_("a",{attrs:{target:"_blank",href:"https://github.com/luterc/heimdall-petstore"}},[t._v("源码")])])]),t._v(" "),_("h2",{attrs:{id:"实现猫咪管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现猫咪管理"}},[t._v("#")]),t._v(" 实现猫咪管理")]),t._v(" "),_("blockquote",[_("p",[t._v("本例中，我们将以猫咪管理作为授权资源实现 Restful 风格资源的权限管理，所以，猫咪管理只实现了控制器。")])]),t._v(" "),_("p",[t._v("权限资源端点如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("name")]),t._v(" "),_("th",[t._v("Method")]),t._v(" "),_("th",[t._v("Uri")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("新增")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/pet/cats")])]),t._v(" "),_("tr",[_("td",[t._v("删除")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/pet/cats/*")])]),t._v(" "),_("tr",[_("td",[t._v("修改")]),t._v(" "),_("td",[t._v("PUT")]),t._v(" "),_("td",[t._v("/pet/cats")])]),t._v(" "),_("tr",[_("td",[t._v("查看详情")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/pet/cats/*")])]),t._v(" "),_("tr",[_("td",[t._v("列表查询")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/pet/cats")])])])]),t._v(" "),_("p",[t._v("具体实现，请参考:"),_("a",{attrs:{href:""}},[t._v("源码")])]),t._v(" "),_("h2",{attrs:{id:"初始化数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据"}},[t._v("#")]),t._v(" 初始化数据")]),t._v(" "),_("p",[t._v("为了后续权限管理功能引入，需要首先对系统资源用户角色等数据进行初始化。")]),t._v(" "),_("p",[t._v("参考序言中的场景约定说明，我们需要初始化的数据如下：")]),t._v(" "),_("ul",[_("li",[t._v("添加系统资源:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("name")]),t._v(" "),_("th",[t._v("Method")]),t._v(" "),_("th",[t._v("Uri")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("新增")]),t._v(" "),_("td",[t._v("POST")]),t._v(" "),_("td",[t._v("/pet/cats")])]),t._v(" "),_("tr",[_("td",[t._v("删除")]),t._v(" "),_("td",[t._v("DELETE")]),t._v(" "),_("td",[t._v("/pet/cats/*")])]),t._v(" "),_("tr",[_("td",[t._v("修改")]),t._v(" "),_("td",[t._v("PUT")]),t._v(" "),_("td",[t._v("/pet/cats")])]),t._v(" "),_("tr",[_("td",[t._v("查看详情")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/pet/cats/*")])]),t._v(" "),_("tr",[_("td",[t._v("列表查询")]),t._v(" "),_("td",[t._v("GET")]),t._v(" "),_("td",[t._v("/pet/cats")])])])]),t._v(" "),_("p",[t._v("可通过 API DOC 界面直接添加。访问:http://localhost:1000/doc.html,如下所示：\n"),_("img",{attrs:{src:"/heimdall/3.png",alt:""}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("添加角色\n分别添加角色:ADMIN 、USER")]),t._v(" "),_("ul",[_("li",[t._v("ADMIN 权限: 具备所有资源权限。")]),t._v(" "),_("li",[t._v("USER 权限: 查看详情、列表查询")])])]),t._v(" "),_("li",[_("p",[t._v("添加用户\n分别添加用户: Tom 、Lucy")]),t._v(" "),_("ul",[_("li",[t._v("Tom 具备角色: ADMIN,USER")]),t._v(" "),_("li",[t._v("Lucy 具备角色: USER")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);