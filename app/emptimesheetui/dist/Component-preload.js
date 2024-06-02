//@ui5-bundle emptimesheetui/emptimesheetui/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"emptimesheetui/emptimesheetui/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","emptimesheetui/emptimesheetui/model/models"],function(e,t,i){"use strict";return e.extend("emptimesheetui.emptimesheetui.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"emptimesheetui/emptimesheetui/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("emptimesheetui.emptimesheetui.controller.App",{onInit:function(){}})});
},
	"emptimesheetui/emptimesheetui/controller/Main.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("emptimesheetui.emptimesheetui.controller.Main",{onInit:function(){}})});
},
	"emptimesheetui/emptimesheetui/i18n/i18n.properties":'# This is the resource bundle for emptimesheetui.emptimesheetui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Demo App\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=Demo App',
	"emptimesheetui/emptimesheetui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"emptimesheetui.emptimesheetui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.4","toolsId":"a6e419f9-b80c-46e6-82c3-58d0e18ebffb"},"dataSources":{"mainService":{"uri":"employeemanagement/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"emptimesheetui.emptimesheetui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"emptimesheetui.emptimesheetui.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":":?query:","target":["TargetMain"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"}}},"rootView":{"viewName":"emptimesheetui.emptimesheetui.view.App","type":"XML","async":true,"id":"App"}}}',
	"emptimesheetui/emptimesheetui/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"emptimesheetui/emptimesheetui/view/App.view.xml":'<mvc:View controllerName="emptimesheetui.emptimesheetui.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"emptimesheetui/emptimesheetui/view/Main.view.xml":'<mvc:View controllerName="emptimesheetui.emptimesheetui.controller.Main"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
}});
