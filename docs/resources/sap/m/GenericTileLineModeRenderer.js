/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS","sap/ui/thirdparty/jquery"],function(e,t,i){"use strict";var s=e.GenericTileScope;var r=e.LoadState;var a=sap.ui.getCore().getLibraryResourceBundle("sap.m");var n={apiVersion:2};n.render=function(e,i){var n=i._getTooltipText(),o=i._isScreenLarge(),l=i._getAriaText(),c=i.getScope(),p,d=false,S=i.hasListeners("press"),f=i.getState(),_=i.getAriaRoleDescription(),g=i.getAriaRole();var u=i.getUrl()&&!i._isInActionScope()&&f!==r.Disabled;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();if(c===s.Actions){if(f!==r.Disabled){p=t("sapMGTScopeActions")}}else if(c===s.ActionMore||c===s.ActionRemove){d=true;if(f!==r.Disabled){p=t("sapMGTScopeSingleAction")}}else{p=t("sapMGTScopeDisplay")}if(u){e.openStart("a",i);e.attr("href",i.getUrl());e.attr("rel","noopener noreferrer");e.attr("draggable","false")}else{e.openStart("span",i)}e.attr("aria-label",l);if(_){e.attr("aria-roledescription",_)}else{e.attr("aria-roledescription",a.getText("GENERIC_TILE_ROLE_DESCRIPTION"))}if(g){e.attr("role",g)}else if(!u){e.attr("role",S?"button":"presentation")}else{e.attr("role","link")}e.class("sapMGT");e.class(p);e.class("sapMGTLineMode");this._writeDirection(e);if(n){e.attr("title",n)}if(f!==r.Disabled){if(!i.isInActionRemoveScope()){e.class("sapMPointer");e.style("pointer-events","auto")}e.attr("tabindex","0")}else{e.class("sapMGTDisabled")}if(f===r.Failed){e.class("sapMGTFailed")}e.openEnd();if(i.getState()!==r.Disabled){this._renderFocusDiv(e,i)}if(o){e.openStart("div",i.getId()+"-startMarker");e.class("sapMGTStartMarker");e.openEnd();e.close("div");this._renderFailedIcon(e,i);this._renderHeader(e,i);if(i.getSubheader()){this._renderSubheader(e,i)}e.openStart("div",i.getId()+"-endMarker");e.class("sapMGTEndMarker");e.openEnd();if(i._isInActionScope()){this._renderActionsScope(e,i,d)}e.close("div");e.openStart("div",i.getId()+"-styleHelper");e.class("sapMGTStyleHelper");e.openEnd();e.close("div")}else{e.openStart("div",i.getId()+"-touchArea");e.class("sapMGTTouchArea");e.openEnd();this._renderFailedIcon(e,i);e.openStart("span",i.getId()+"-lineModeHelpContainer");e.class("sapMGTLineModeHelpContainer");e.openEnd();this._renderHeader(e,i);if(i.getSubheader()){this._renderSubheader(e,i)}e.close("span");if(i._isInActionScope()){this._renderActionsScope(e,i,d)}e.close("div")}if(u){e.close("a")}else{e.close("span")}};n._writeDirection=function(e){if(this._bRTL){e.attr("dir","rtl")}};n._renderFailedIcon=function(e,t){if(t.getState()===r.Failed){if(t._isCompact()){t._oWarningIcon.setSize("1.25rem")}else{t._oWarningIcon.setSize("1.375rem")}e.renderControl(t._oWarningIcon.addStyleClass("sapMGTLineModeFailedIcon"))}};n._renderHeader=function(e,t){e.openStart("span",t.getId()+"-hdr-text");this._writeDirection(e);e.class("sapMGTHdrTxt");e.openEnd();e.text(t._oTitle.getText());e.close("span")};n._renderSubheader=function(e,t){e.openStart("span",t.getId()+"-subHdr-text");this._writeDirection(e);e.class("sapMGTSubHdrTxt");e.openEnd();e.text(t._oSubTitle.getText());e.close("span")};n._renderActionsScope=function(e,t,i){if(t.getState()!==r.Disabled){e.openStart("span",t.getId()+"-actions");e.class("sapMGTActionsContainer");if(i){e.class("sapMGTScopeSingleActionContainer")}e.openEnd();e.renderControl(t._oMoreIcon);e.renderControl(t._oRemoveButton);e.close("span")}};n._updateHoverStyle=function(){var e=this.$("styleHelper"),t,s=0,r="";e.empty();if(!this._oStyleData||this.$().is(":hidden")){return}if(this._oStyleData.rtl){e.css("right",-this._oStyleData.positionRight)}else{e.css("left",-this._oStyleData.positionLeft)}for(s;s<this._oStyleData.lines.length;s++){t=this._oStyleData.lines[s];var a=i("<div class='sapMGTLineStyleHelper'><div class='sapMGTLineStyleHelperInner'></div></div>");if(this._oStyleData.rtl){a.css("right",t.offset.x+"px")}else{a.css("left",t.offset.x+"px")}a.css({top:t.offset.y+"px",width:t.width+"px"});r+=a.get(0).outerHTML.trim()}e.html(r)};n._renderFocusDiv=function(e,t){e.openStart("div",t.getId()+"-focus");e.class("sapMGTFocusDiv");e.openEnd();e.close("div")};n._getCSSPixelValue=function(e,t){var s=e instanceof i?e:e.$(),r=(s.css(t)||"").match(/([^a-zA-Z\%]*)(.*)/),a=parseFloat(r[1]),n=r[2];return n==="px"?a:a*16};return n},true);