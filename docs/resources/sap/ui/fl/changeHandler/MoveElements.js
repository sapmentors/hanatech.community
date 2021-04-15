/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var t={};t.CHANGE_TYPE="moveElements";t.applyChange=function(t,r,o){function n(e,t,r,o){if(!e){throw new Error("No change instance")}var n=e.getContent();if(!n||!n.movedElements||n.movedElements.length===0){throw new Error("Change format invalid")}if(!e.getSelector().aggregation){throw new Error("No source aggregation supplied via selector for move")}if(!n.target||!n.target.selector){throw new Error("No target supplied for move")}if(!t.bySelector(n.target.selector,o,r)){throw new Error("Move target parent not found")}if(!n.target.selector.aggregation){throw new Error("No target aggregation supplied for move")}}function a(e,t,r,o){if(!e.selector&&!e.id){throw new Error("Change format invalid - moveElements element has no id attribute")}if(typeof e.targetIndex!=="number"){throw new Error("Missing targetIndex for element with id '"+e.selector.id+"' in movedElements supplied")}return t.bySelector(e.selector||e.id,r,o)}var g=o.modifier;var i=o.view;var s=o.appComponent;n(t,g,i,s);var l=t.getContent();var c=g.bySelector(l.target.selector,s,i);var d=t.getSelector().aggregation;var v=l.target.selector.aggregation;l.movedElements.forEach(function(t){var o=a(t,g,s,i);if(!o){e.warning("Element to move not found");return}g.removeAggregation(r,d,o);g.insertAggregation(c,v,o,t.targetIndex,i)});return true};t.completeChangeContent=function(){throw new Error("Using deprecated change handler. Please consider of using 'MoveControls' instead")};t.getSpecificChangeInfo=function(e,t){var r=t.source.parent||e.bySelector(t.source.id);var o=t.target.parent||e.bySelector(t.target.id);var n=t.source.aggregation;var a=t.target.aggregation;var g={source:{id:r.getId(),aggregation:n,type:e.getControlType(r)},target:{id:o.getId(),aggregation:a,type:e.getControlType(o)},movedElements:t.movedElements};return g};return t},true);