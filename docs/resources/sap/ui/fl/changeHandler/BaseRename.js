/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/Base","sap/base/Log"],function(e,r){"use strict";var t={createRenameChangeHandler:function(t){t.changePropertyName=t.changePropertyName||"newText";return{applyChange:function(e,n,a){var o=a.modifier;var i=t.propertyName;var p=e.getDefinition();var f=p.texts[t.changePropertyName];var g=f.value;if(p.texts&&f&&typeof g==="string"){e.setRevertData(o.getPropertyBindingOrProperty(n,i));o.setPropertyBindingOrProperty(n,i,g);return true}r.error("Change does not contain sufficient information to be applied: ["+p.layer+"]"+p.namespace+"/"+p.fileName+"."+p.fileType)},revertChange:function(e,n,a){var o=a.modifier;var i=t.propertyName;var p=e.getRevertData();if(p||p===""){o.setPropertyBindingOrProperty(n,i,p);e.resetRevertData();return true}r.error("Change doesn't contain sufficient information to be reverted. Most Likely the Change didn't go through applyChange.")},completeChangeContent:function(r,n,a){var o=r.getDefinition();var i=t.changePropertyName;var p=t.translationTextType;var f=a.modifier.bySelector(r.getSelector(),a.appComponent);o.content.originalControlType=a.modifier.getControlType(f);if(typeof n.value==="string"){e.setTextInChange(o,i,n.value,p)}else{throw new Error("oSpecificChangeInfo.value attribute required")}},getCondenserInfo:function(e){return{affectedControl:e.getSelector(),classification:sap.ui.fl.condenser.Classification.LastOneWins,uniqueKey:t.propertyName||t.changePropertyName}}}}};return t},true);