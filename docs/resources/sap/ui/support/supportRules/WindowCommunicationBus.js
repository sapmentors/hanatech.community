/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/base/Log","jquery.sap.script"],function(e,i,t){"use strict";var n=e.extend("sap.ui.support.supportRules.WindowCommunicationBus",{constructor:function(e){this.bSilentMode=false;this._channels={};this._frame={};this._oConfig=e;if(window.addEventListener){window.addEventListener("message",this._onmessage.bind(this),false)}else{window.attachEvent("onmessage",this._onmessage.bind(this))}}});n.prototype.subscribe=function(e,i,t){if(this.bSilentMode){return}this._channels[e]=this._channels[e]||[];this._channels[e].push({callback:i,context:t})};n.prototype.publish=function(e,i){if(this.bSilentMode){return}var t=this._oConfig.getReceivingWindow();var n={channelName:e,params:i,_frameIdentifier:this._getFrameIdentifier(),_origin:window.location.href};t.postMessage(n,this._oConfig.getOrigin())};n.prototype.allowFrame=function(e){this._frame={origin:e.origin,identifier:e.identifier,url:e.url}};n.prototype.destroyChannels=function(){this._channels={}};n.prototype._onmessage=function(e){if(!this._validate(e)){i.error("Message was received but failed validation");return}var t=this._channels[e.data.channelName]||[];t.forEach(function(i){i.callback.apply(i.context,[e.data.params])})};n.prototype._validate=function(e){if(t.isEmptyObject(this._frame)){return true}var i=e.origin===this._frame.origin;var n=e.data._frameIdentifier===this._frame.identifier;var r=this._frame.url.indexOf("?");var a=this._frame.url.substr(0,r).replace(/\.\.\//g,"").replace(/\.\//g,"")+this._frame.url.substr(r);var s=e.data._origin.indexOf(a)>-1;return i&&n&&s};n.prototype._getFrameIdentifier=function(){return this._frame.identifier||this._oConfig.getFrameId()};return n},true);