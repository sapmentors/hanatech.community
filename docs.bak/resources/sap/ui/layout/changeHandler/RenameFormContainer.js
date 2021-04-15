/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/Base","sap/base/Log"],function(e,t){"use strict";var r={};var n={TARGET_ALIAS:"target"};r.applyChange=function(e,r,i){var o=i.modifier,a=e.getDefinition(),f=e.getDependentControl(n.TARGET_ALIAS,i),s=o.getAggregation(f,"title");if(a.texts&&a.texts.formText&&this._isProvided(a.texts.formText.value)){var g=a.texts.formText.value;if(typeof s==="string"){e.setRevertData(o.getProperty(f,"title"));o.setProperty(f,"title",g)}else{e.setRevertData(o.getProperty(s,"text"));o.setProperty(s,"text",g)}return true}else{t.error("Change does not contain sufficient information to be applied: ["+a.layer+"]"+a.namespace+"/"+a.fileName+"."+a.fileType)}};r.completeChangeContent=function(t,r,i){var o=t.getDefinition();if(!(r.renamedElement&&r.renamedElement.id)){throw new Error("Rename of the group cannot be executed: oSpecificChangeInfo.renamedElement attribute required")}if(!this._isProvided(r.value)){throw new Error("Rename of the group cannot be executed: oSpecificChangeInfo.value attribute required")}t.addDependentControl(r.renamedElement.id,n.TARGET_ALIAS,i);e.setTextInChange(o,"formText",r.value,"XGRP")};r.revertChange=function(e,t,r){var i=e.getRevertData(),o=r.modifier,a=e.getDependentControl(n.TARGET_ALIAS,r),f=o.getAggregation(a,"title");if(typeof f==="string"){o.setProperty(a,"title",i)}else{o.setProperty(f,"text",i)}e.resetRevertData();return true};r._isProvided=function(e){return typeof e==="string"};return r},true);