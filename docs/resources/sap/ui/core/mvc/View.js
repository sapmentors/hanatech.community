/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject","sap/ui/core/Control","sap/ui/core/mvc/Controller","sap/base/util/merge","./ViewType","./ViewRenderer","sap/base/assert","sap/base/Log","sap/base/util/extend","sap/ui/core/Core"],function(e,r,t,o,n,i,s,a,c){"use strict";var u=r.extend("sap.ui.core.mvc.View",{metadata:{interfaces:["sap.ui.core.IDScope"],abstract:true,library:"sap.ui.core",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},viewName:{type:"string",group:"Misc",defaultValue:null},displayBlock:{type:"boolean",group:"Appearance",defaultValue:false}},aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},events:{afterInit:{},beforeExit:{},afterRendering:{},beforeRendering:{}},specialSettings:{controller:"sap.ui.core.mvc.Controller",controllerName:"string",preprocessors:"Object",resourceBundleName:"string",resourceBundleUrl:"sap.ui.core.URI",resourceBundleLocale:"string",resourceBundleAlias:"string",type:"string",definition:"any",viewContent:{type:"any",deprecated:true},viewData:"any",async:{type:"boolean",defaultValue:false}},designtime:"sap/ui/core/designtime/mvc/View.designtime"},renderer:i});u._mPreprocessors={};function p(e){e._settings={};for(var r in e){if(r.indexOf("_")!==0){e._settings[r]=e[r]}}}function f(e,r){var t;if(typeof e.preprocessor==="string"){var o=e.preprocessor.replace(/\./g,"/");if(r){return new Promise(function(e,r){sap.ui.require([o],function(r){e(r)},r)})}else{return sap.ui.requireSync(o)}}else if(typeof e.preprocessor==="function"&&!e.preprocessor.process){t={process:e.preprocessor}}else{t=e.preprocessor}if(r){return Promise.resolve(t)}else{return t}}function l(e,r){var t=this.mPreprocessors[r]||[],o=[],n,i,s,a=[];if(u._mPreprocessors[e]&&u._mPreprocessors[e][r]){o=u._mPreprocessors[e][r].map(function(e){return Object.assign({},e)})}for(n=0,i=o.length;n<i;n++){if(o[n]._onDemand){s=o[n]}else{a.push(o[n])}}for(n=0,i=t.length;n<i;n++){var p=!t[n].preprocessor;if(p&&s){a.unshift(c(t[n],s))}else if(!p){a.push(t[n])}}return a}function d(e,r){var t=e.getMetadata().getClass();function o(e){e.preprocessor=f(e,r.async)}e.mPreprocessors=Object.assign({},r.preprocessors);for(var n in t.PreprocessorType){var i=t.PreprocessorType[n];if(e.mPreprocessors[i]&&!Array.isArray(e.mPreprocessors[i])){e.mPreprocessors[i]=[e.mPreprocessors[i]]}else if(!e.mPreprocessors[i]){e.mPreprocessors[i]=[]}e.mPreprocessors[i].forEach(p);e.mPreprocessors[i]=l.call(e,t._sType,i);e.mPreprocessors[i].forEach(o)}}function g(e){e.oAsyncState={};e.oAsyncState.promise=null}var m=function(r,o){if(!sap.ui.getCore().getConfiguration().getControllerCodeDeactivated()){var n=o.controller,i=n&&typeof n.getMetadata==="function"&&n.getMetadata().getName(),s=o.async;if(!n&&r.getControllerName){var a=r.getControllerName();if(a){var c=sap.ui.require("sap/ui/core/CustomizingConfiguration");var u=c&&c.getControllerReplacement(a,e._sOwnerId);if(u){a=typeof u==="string"?u:u.controllerName}if(s){n=t.create({name:a})}else{n=sap.ui.controller(a,true)}}}else if(n){var p=e._sOwnerId;if(!n._isExtended()){if(s){n=t.extendByCustomizing(n,i,p,s).then(function(e){return t.extendByProvider(e,i,p,s)})}else{n=t.extendByCustomizing(n,i,p,s);n=t.extendByProvider(n,i,p,s)}}else if(s){n=Promise.resolve(n)}}if(n){var f=function(e){r.oController=e;e.oView=r};if(s){if(!r.oAsyncState){throw new Error("The view "+r.sViewName+" runs in sync mode and therefore cannot use async controller extensions!")}return n.then(f)}else{f(n)}}}else{sap.ui.controller("sap.ui.core.mvc.EmptyControllerImpl",{"_sap.ui.core.mvc.EmptyControllerImpl":true});r.oController=sap.ui.controller("sap.ui.core.mvc.EmptyControllerImpl")}};u.prototype._initCompositeSupport=function(e){e=e||{};s(!e.preprocessors||this.getMetadata().getName().indexOf("XMLView"),"Preprocessors only available for XMLView");this.oViewData=e.viewData;this.sViewName=e.viewName;var r=this;d(this,e);if(e.async){g(this)}var t=sap.ui.require("sap/ui/core/CustomizingConfiguration");if(t&&t.hasCustomProperties(this.sViewName,this)){this._fnSettingsPreprocessor=function(e){var o=this.getId();if(t&&o){if(r.isPrefixedId(o)){o=o.substring((r.getId()+"--").length)}var n=t.getCustomProperties(r.sViewName,o,r);if(n){e=c(e,n)}}}}var o=function(e,t){s(typeof e==="function","fn must be a function");var o=sap.ui.require("sap/ui/core/Component");var n=o&&o.getOwnerComponentFor(r);if(n){if(t){r.fnScopedRunWithOwner=r.fnScopedRunWithOwner||function(e){return n.runAsOwner(e)}}return n.runAsOwner(e)}return e()};var n=function(e){if(e.oController&&e.oController.connectToView){return e.oController.connectToView(e)}};var i=function(e){if(r.onControllerConnected){return r.onControllerConnected(r.oController,e)}};if(e.async){this.oAsyncState.promise=this.initViewSettings(e).then(function(){return o(m.bind(null,r,e),true)}).then(function(){return o(i.bind(null,e),true)}).then(function(){return n(r)}).then(function(){return r.runPreprocessor("controls",r,false)}).then(function(){return o(r.fireAfterInit.bind(r),true)}).then(function(){return r}).catch(function(e){this.deregister();throw e}.bind(this))}else{this.initViewSettings(e);m(this,e);i(e);n(this);this.runPreprocessor("controls",this,true);this.fireAfterInit()}};u.prototype.getController=function(){return this.oController};u.prototype.byId=function(e){return sap.ui.getCore().byId(this.createId(e))};u.prototype.createId=function(e){if(!this.isPrefixedId(e)){e=this.getId()+"--"+e}return e};u.prototype.getLocalId=function(e){var r=this.getId()+"--";return e&&e.indexOf(r)===0?e.slice(r.length):null};u.prototype.isPrefixedId=function(e){return!!(e&&e.indexOf(this.getId()+"--")===0)};u.prototype.getViewData=function(){return this.oViewData};function h(){this.oAsyncState=null}u.prototype.exit=function(){this.fireBeforeExit();delete this.oController;delete this.oPreprocessorInfo;if(this.oAsyncState){var e=h.bind(this);this.oAsyncState.promise.then(e,e)}};u.prototype.onAfterRendering=function(){this.fireAfterRendering()};u.prototype.onBeforeRendering=function(){this.fireBeforeRendering()};u.prototype.clone=function(e,t){var o={},n,i;for(n in this.mProperties&&!(this.isBound&&this.isBound(n))){if(this.mProperties.hasOwnProperty(n)){o[n]=this.mProperties[n]}}i=r.prototype.clone.call(this,e,t,{cloneChildren:false,cloneBindings:true});var s,a,c;for(s in i.mEventRegistry){a=i.mEventRegistry[s];for(c=a.length-1;c>=0;c--){if(a[c].oListener===this.getController()){a[c]={oListener:i.getController(),fFunction:a[c].fFunction,oData:a[c].oData}}}}i.applySettings(o);return i};u.prototype.getPreprocessors=function(){return this.mPreprocessors};u.prototype.getPreprocessorInfo=function(e){if(!this.oPreprocessorInfo){this.oPreprocessorInfo={name:this.sViewName,componentId:this._sOwnerId,id:this.getId(),caller:this+" ("+this.sViewName+")",sync:!!e}}if(u._supportInfo){this.oPreprocessorInfo._supportInfo=u._supportInfo}return this.oPreprocessorInfo};u.prototype.runPreprocessor=function(e,r,t){var o=this.getPreprocessorInfo(t),n=this.mPreprocessors&&this.mPreprocessors[e]||[],i,s,c;if(!t){s=function(e,r){return function(t){return r.preprocessor.then(function(o){return o.process(t,e,r._settings)})}};c=Promise.resolve(r)}for(var u=0,p=n.length;u<p;u++){if(t&&n[u]._syncSupport===true){i=n[u].preprocessor.process;r=i(r,o,n[u]._settings)}else if(!t){c=c.then(s(o,n[u]))}else{a.debug('Async "'+e+'"-preprocessor was skipped in sync view execution for '+this.getMetadata().getClass()._sType+"View",this.getId())}}return t?r:c};function y(e,r){if(!u._mPreprocessors[r]){u._mPreprocessors[r]={}}if(!u._mPreprocessors[r][e]){u._mPreprocessors[r][e]=[]}}function v(e,r,t){u._mPreprocessors[r][t].forEach(function(r){if(r._onDemand){a.error('Registration for "'+t+'" failed, only one on-demand-preprocessor allowed',e.getMetadata().getName());return false}});return true}u.registerPreprocessor=function(e,r,t,o,n,i){if(typeof n!=="boolean"){i=n;n=false}if(r){y(e,t);if(n&&!v(this,t,e)){return}u._mPreprocessors[t][e].push({preprocessor:r,_onDemand:n,_syncSupport:o,_settings:i});a.debug("Registered "+(n?"on-demand-":"")+'preprocessor for "'+e+'"'+(o?" with syncSupport":""),this.getMetadata().getName())}else{a.error('Registration for "'+e+'" failed, no preprocessor specified',this.getMetadata().getName())}};u.prototype.hasPreprocessor=function(e){return!!this.mPreprocessors[e].length};u.create=function(r){var t=o({},r);t.async=true;t.viewContent=t.definition;var n=sap.ui.require("sap/ui/core/Component");var i;if(n&&e._sOwnerId){i=n.get(e._sOwnerId)}function s(){return w(t.id,t,t.type).loaded()}return new Promise(function(e,r){var o=P(t);sap.ui.require([o],function(r){e(r)},r)}).then(function(e){if(e.getMetadata().isA("sap.ui.core.mvc.XMLView")){t.processingMode="sequential"}if(i){return i.runAsOwner(s)}else{return s()}})};u._legacyCreate=w;sap.ui.view=function(e,r,t){var o=function(t){var o="";if(typeof e=="object"){o=e.viewName}o=o||r&&r.name;a[t]("Do not use deprecated view factory functions ("+o+"). "+"Use the static create function on the view module instead: [XML|JS|HTML|JSON|]View.create().","sap.ui.view",null,function(){return{type:"sap.ui.view",name:o}})};if(r&&r.async){o("info")}else{o("warning")}return w(e,r,t)};function w(r,t,o){var n=null,i={};if(typeof r==="object"||typeof r==="string"&&t===undefined){t=r;r=undefined}if(t){if(typeof t==="string"){i.viewName=t}else{i=t}}s(!i.async||typeof i.async==="boolean","sap.ui.view factory: Special setting async has to be of the type 'boolean'!");if(r){i.id=r}if(o){i.type=o}var u=sap.ui.require("sap/ui/core/CustomizingConfiguration");if(u){var p=u.getViewReplacement(i.viewName,e._sOwnerId);if(p){a.info("Customizing: View replacement for view '"+i.viewName+"' found and applied: "+p.viewName+" (type: "+p.type+")");c(i,p)}else{a.debug("Customizing: no View replacement found for view '"+i.viewName+"'.")}}var f=P(i);n=C(f,i);return n}function P(e){var r=u._getModuleName(e);if(r){return r}if(!e.type){throw new Error("No view type specified.")}else if(e.type===n.JS){r="sap/ui/core/mvc/JSView"}else if(e.type===n.JSON){r="sap/ui/core/mvc/JSONView"}else if(e.type===n.XML){r="sap/ui/core/mvc/XMLView"}else if(e.type===n.HTML){r="sap/ui/core/mvc/HTMLView"}else if(e.type===n.Template){r="sap/ui/core/mvc/TemplateView"}else{throw new Error("Unknown view type "+e.type+" specified.")}return r}function C(e,r){var t=sap.ui.require(e);if(!t){t=sap.ui.requireSync(e);if(r.async){a.warning("sap.ui.view was called without requiring the according view class.")}}return new t(r)}u.prototype.loaded=function(){if(this.oAsyncState&&this.oAsyncState.promise){return this.oAsyncState.promise}else{return Promise.resolve(this)}};u._getModuleName=function(e){var r;if(e.viewName&&e.viewName.startsWith("module:")){r=e.viewName.slice("module:".length)}return r};u.prototype.getAutoPrefixId=function(){return false};u.prototype.onControllerConnected=function(r,t){if(!this.createContent&&typeof this.createContent!=="function"){return}var o={id:this.getAutoPrefixId()?this.createId.bind(this):undefined,settings:this._fnSettingsPreprocessor};return e.runWithPreprocessors(function(){if(t.async){return this.createContent(r).then(function(e){this.applySettings({content:e})}.bind(this))}else{this.applySettings({content:this.createContent(r)})}}.bind(this),o)};u.prototype.initViewSettings=function(e){if(!this.getMetadata()._oRenderer){this.getMetadata().getRenderer=function(){return u.getMetadata().getRenderer()};this.getMetadata().getRendererName=function(){return u.getMetadata().getRendererName()}}if(e.async){return Promise.resolve()}};return u});