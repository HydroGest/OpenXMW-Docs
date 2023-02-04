(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{285:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"编写插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写插件"}},[t._v("#")]),t._v(" 编写插件")]),t._v(" "),s("p",[t._v("（需要一定Python基础，若无能力可使用他人插件或请人代写）")]),t._v(" "),s("h2",{attrs:{id:"插件概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件概念"}},[t._v("#")]),t._v(" 插件概念")]),t._v(" "),s("p",[t._v("插件本质上是一个Python指令集，一个插件文件内有一个或多个Python函数，且允许存在包含函数的自定义类。")]),t._v(" "),s("h2",{attrs:{id:"插件运行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件运行原理"}},[t._v("#")]),t._v(" 插件运行原理")]),t._v(" "),s("p",[t._v("当Scratch作品向OpenXMW发送指令、参数时，信息将会被监听作品的"),s("code",[t._v("core")]),t._v("接收并被解析为一条指令和一个包含参数的字典，随后指令名称对应的插件中的指定函数会被运行，同时参数将会被传递给函数，函数的返回值将会由"),s("code",[t._v("core")]),t._v("上传至作品云列表中，以供作品使用。")]),t._v(" "),s("h2",{attrs:{id:"具体编写操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体编写操作"}},[t._v("#")]),t._v(" 具体编写操作")]),t._v(" "),s("p",[t._v("新建一个"),s("code",[t._v(".py")]),t._v("文件，文件中定义一个函数，"),s("strong",[t._v("仅接收一个类型为字典的参数，并返回一个字典")]),t._v("。")]),t._v(" "),s("p",[t._v("下面是一个例子：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" 合并字符串"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"合并结果"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字符串1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字符串2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此函数需使用“插件文件名.合并字符串”调用，接收一个含有两个键（即“字符串1”和“字符串2”）的字典，返回一个仅有一个键（即“合并结果”）的字典。")]),t._v(" "),s("p",[t._v("当然，也可以在文件中定义一个类，类中包含一个或多个仅接收一个类型为字典的参数、返回一个字典的函数。")]),t._v(" "),s("p",[t._v("下面是一个例子：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("httpio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestsGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" requests "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" get\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"headers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n")])])]),s("p",[t._v("此函数需使用“文件名.httpio.requestsGet”调用。")]),t._v(" "),s("p",[t._v("编写好后，将文件置于"),s("code",[t._v(".\\plugins\\files")]),t._v("文件夹下并修改"),s("code",[t._v(".\\plugins\\__init__.py")]),t._v("即可启用插件。你可以将自己编写的插件上传至OpenXMW插件中心以分享给他人使用。")]),t._v(" "),s("p",[t._v("如果你的插件不仅仅是给自己用的，请向你的用户说明插件所包含的具体指令名称、功能、参数格式、响应格式等并解释具体使用方法。")]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("如果你希望保护插件源码使其不至于轻易泄露，请将你的插件程序从"),s("code",[t._v("*.py")]),t._v("文件编译至"),s("code",[t._v("*.pyc")]),t._v("文件，但请确保编译环境为Python 3.7，否则可能无法正常使用。")]),t._v(" "),s("p",[t._v("使用OpenXMW示例作品中的自定义积木「封装参数」时，从Scratch作品接收的字典的键和值的类型"),s("strong",[t._v("均为字符串")]),t._v("，且插件返回的字典"),s("strong",[t._v("也应如此")]),t._v("，因为自定义积木「解析响应」要求被解析的字典的键和值的类型均为字符串。")]),t._v(" "),s("p",[t._v("依赖库应在"),s("strong",[t._v("被调用的函数内")]),t._v("被导入，而不是在函数外。如果插件需要安装依赖库，应注意"),s("strong",[t._v("提醒插件用户")]),t._v("安装。")]),t._v(" "),s("p",[t._v("编写插件时应尽量防范插件文件名与其它插件文件名冲突。")]),t._v(" "),s("p",[t._v("不提倡使用OpenXMW传输隐私信息等，因为通过小码王云列表传输的信息可能会在传输时被某些人通过违规手段获取或篡改等。")]),t._v(" "),s("p",[t._v("若发现OpenXMW程序本身存在问题或漏洞，"),s("strong",[t._v("请私下反馈而不是公布")]),t._v("，我们会尽快修改。")])])}),[],!1,null,null,null);s.default=r.exports}}]);