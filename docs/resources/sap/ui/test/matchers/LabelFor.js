/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/I18NText"],function(e,t){"use strict";var a=new t;var r=["sap.ui.comp.navpopover.SmartLink","sap.m.Link","sap.m.Label","sap.m.Text"];var i=e.extend("sap.ui.test.matchers.LabelFor",{metadata:{publicMethods:["isMatching"],properties:{text:{type:"string"},modelName:{type:"string",defaultValue:"i18n"},key:{type:"string"},parameters:{type:"any"},propertyName:{type:"string",defaultValue:"text"}}},isMatching:function(e){var t;var i=this.getModelName();var n=this.getText();var s=this.getParameters();var o=this.getPropertyName();var g=this.getKey();if(n&&g){this._oLogger.error("Combination of text and key properties is not allowed");return false}if(!n&&!g){this._oLogger.error("Text and key properties are not defined but exactly one is required");return false}if(r.indexOf(e.getMetadata().getName())>-1){this._oLogger.error("Control cannot have an associated label according to HTML standard");return false}var p=this._getApplicationWindow().sap.ui.core.Element.registry.filter(function(e){return e.getMetadata().getName()==="sap.m.Label"});a.applySettings({key:g,modelName:i,parameters:s,propertyName:o});t=p.some(function(t){if(g&&a.isMatching(t)){return e.getId()===t.getLabelForRendering()}else if(n&&t.getText()===n){return e.getId()===t.getLabelForRendering()}});if(!t){var d=g?"I18N text key "+g:"text "+n;this._oLogger.debug("Control '"+e+"' does not have an associated label with "+d)}return t}});return i});