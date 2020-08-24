/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Control","sap/ui/core/ResizeHandler","sap/ui/core/delegate/ScrollEnablement","sap/ui/layout/library","sap/ui/qunit/utils/waitForThemeApplied","./DynamicSideContentRenderer"],function(t,e,i,s,n,r,o){"use strict";var a=n.SideContentPosition;var h=n.SideContentFallDown;var l=n.SideContentVisibility;var u=e.extend("sap.ui.layout.DynamicSideContent",{metadata:{library:"sap.ui.layout",properties:{showSideContent:{type:"boolean",group:"Appearance",defaultValue:true},showMainContent:{type:"boolean",group:"Appearance",defaultValue:true},sideContentVisibility:{type:"sap.ui.layout.SideContentVisibility",group:"Appearance",defaultValue:l.ShowAboveS},sideContentFallDown:{type:"sap.ui.layout.SideContentFallDown",group:"Appearance",defaultValue:h.OnMinimumWidth},equalSplit:{type:"boolean",group:"Appearance",defaultValue:false},containerQuery:{type:"boolean",group:"Behavior",defaultValue:false},sideContentPosition:{type:"sap.ui.layout.SideContentPosition",group:"Appearance",defaultValue:a.End}},defaultAggregation:"mainContent",events:{breakpointChanged:{parameters:{currentBreakpoint:{type:"string"}}}},aggregations:{mainContent:{type:"sap.ui.core.Control",multiple:true},sideContent:{type:"sap.ui.core.Control",multiple:true}},designTime:"sap/ui/layout/designtime/DynamicSideContent.designtime",dnd:{draggable:false,droppable:true}}});var d="S",C="M",p="L",S="XL",_="sapUiHidden",c="sapUiDSCSpan12",g="sapUiDSCMCFixed",f="sapUiDSCSCFixed",b=3,y=4,w=6,V=8,M=9,m=12,k="Invalid Breakpoint. Expected: S, M, L or XL",B="SCGridCell",z="MCGridCell",v=720,P=1024,D=1440;u.prototype.setSideContentVisibility=function(t,e){this.setProperty("sideContentVisibility",t,true);if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint());this._changeGridState()}return this};u.prototype.setShowSideContent=function(t,e){if(t===this.getShowSideContent()){return this}this.setProperty("showSideContent",t,true);this._SCVisible=t;if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint(),this.getEqualSplit());if(this._currentBreakpoint===d){this._MCVisible=true}this._changeGridState()}return this};u.prototype.setShowMainContent=function(t,e){if(t===this.getShowMainContent()){return this}this.setProperty("showMainContent",t,true);this._MCVisible=t;if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint(),this.getEqualSplit());if(this._currentBreakpoint===d){this._SCVisible=true}this._changeGridState()}return this};u.prototype.isSideContentVisible=function(){if(this._currentBreakpoint===d){return this._SCVisible&&this.getProperty("showSideContent")}else{return this.getProperty("showSideContent")}};u.prototype.isMainContentVisible=function(){if(this._currentBreakpoint===d){return this._MCVisible&&this.getProperty("showMainContent")}else{return this.getProperty("showMainContent")}};u.prototype.setEqualSplit=function(t){this._MCVisible=true;this._SCVisible=true;this.setProperty("equalSplit",t,true);if(this._currentBreakpoint){this._setResizeData(this._currentBreakpoint,t);this._changeGridState()}return this};u.prototype.addSideContent=function(t){this.addAggregation("sideContent",t,true);this._rerenderControl(this.getAggregation("sideContent"),this.$(B));return this};u.prototype.addMainContent=function(t){this.addAggregation("mainContent",t,true);this._rerenderControl(this.getAggregation("mainContent"),this.$(z));return this};u.prototype.toggle=function(){if(this._currentBreakpoint===d){if(!this.getProperty("showMainContent")){this.setShowMainContent(true,true);this._MCVisible=false}if(!this.getProperty("showSideContent")){this.setShowSideContent(true,true);this._SCVisible=false}if(this._MCVisible&&!this._SCVisible){this._SCVisible=true;this._MCVisible=false}else if(!this._MCVisible&&this._SCVisible){this._MCVisible=true;this._SCVisible=false}this._changeGridState()}return this};u.prototype.getCurrentBreakpoint=function(){return this._currentBreakpoint};u.prototype.onBeforeRendering=function(){this._bSuppressInitialFireBreakPointChange=true;this._detachContainerResizeListener();this._SCVisible=this._SCVisible===undefined?this.getProperty("showSideContent"):this._SCVisible;this._MCVisible=this._MCVisible===undefined?this.getProperty("showMainContent"):this._MCVisible;if(!this.getContainerQuery()){this._iWindowWidth=t(window).width();this._setBreakpointFromWidth(this._iWindowWidth);this._setResizeData(this._currentBreakpoint,this.getEqualSplit())}};u.prototype.onAfterRendering=function(){if(this.getContainerQuery()){this._attachContainerResizeListener();this._adjustToScreenSize()}else{var e=this;t(window).on("resize",function(){e._adjustToScreenSize()})}this._changeGridState();this._initScrolling()};u.prototype.exit=function(){this._detachContainerResizeListener();if(this._oSCScroller){this._oSCScroller.destroy();this._oSCScroller=null}if(this._oMCScroller){this._oMCScroller.destroy();this._oMCScroller=null}};u.prototype.getScrollDelegate=function(t){var e=t,i=this.getParent(),s=this._getBreakPointFromWidth(),n=this.getShowMainContent()&&this._MCVisible,r=this.getShowSideContent()&&this._SCVisible;if(s&&s!==p&&s!==S){if(e&&(e.sParentAggregationName==="sideContent"&&!r||e.sParentAggregationName==="mainContent"&&!n)){return}else{while(i&&(!i.getScrollDelegate||!i.getScrollDelegate())){i=i.getParent()}return i.getScrollDelegate()}}if(this._oMCScroller&&this._oSCScroller){while(e&&e.getId()!==this.getId()){if(e.sParentAggregationName==="mainContent"&&n){return this._oMCScroller}if(e.sParentAggregationName==="sideContent"&&r){return this._oSCScroller}e=e.getParent()}}return};u.prototype._rerenderControl=function(t,e){if(this.getDomRef()){var i=sap.ui.getCore().createRenderManager();this.getRenderer().renderControls(i,t);i.flush(e[0]);i.destroy()}return this};u.prototype._initScrolling=function(){var t=this.getId(),e=t+"-"+B,i=t+"-"+z;if(!this._oSCScroller&&!this._oMCScroller){var s=sap.ui.requireSync("sap/ui/core/delegate/ScrollEnablement");this._oSCScroller=new s(this,null,{scrollContainerId:e,horizontal:false,vertical:true});this._oMCScroller=new s(this,null,{scrollContainerId:i,horizontal:false,vertical:true})}};u.prototype._attachContainerResizeListener=function(){r().then(function(){if(!this._sContainerResizeListener){setTimeout(function(){this._sContainerResizeListener=i.register(this,this._adjustToScreenSize.bind(this))}.bind(this),0)}}.bind(this))};u.prototype._detachContainerResizeListener=function(){if(this._sContainerResizeListener){i.deregister(this._sContainerResizeListener);this._sContainerResizeListener=null}};u.prototype._getBreakPointFromWidth=function(t){if(t<=v&&this._currentBreakpoint!==d){return d}else if(t>v&&t<=P&&this._currentBreakpoint!==C){return C}else if(t>P&&t<=D&&this._currentBreakpoint!==p){return p}else if(t>D&&this._currentBreakpoint!==S){return S}return this._currentBreakpoint};u.prototype._setBreakpointFromWidth=function(t){this._currentBreakpoint=this._getBreakPointFromWidth(t);if(this._bSuppressInitialFireBreakPointChange){this._bSuppressInitialFireBreakPointChange=false}else{this.fireBreakpointChanged({currentBreakpoint:this._currentBreakpoint})}};u.prototype._adjustToScreenSize=function(){if(this.getContainerQuery()){this._iWindowWidth=this.$().parent().width()}else{this._iWindowWidth=t(window).width()}this._currentBreakpoint=this._getBreakPointFromWidth(this._iWindowWidth);this._setResizeData(this._currentBreakpoint,this.getEqualSplit());this._changeGridState();this._setBreakpointFromWidth(this._iWindowWidth)};u.prototype._setResizeData=function(t,e){var i=this.getSideContentVisibility(),s=this.getSideContentFallDown();if(!e){switch(t){case d:this._setSpanSize(m,m);if(this.getProperty("showSideContent")&&this.getProperty("showMainContent")&&this._MCVisible){this._SCVisible=i===l.AlwaysShow}this._bFixedSideContent=false;break;case C:var n=Math.ceil(33.333/100*this._iWindowWidth);if(s===h.BelowL||s===h.BelowXL||n<=320&&s===h.OnMinimumWidth){this._setSpanSize(m,m);this._bFixedSideContent=false}else{this._setSpanSize(y,V);this._bFixedSideContent=true}this._SCVisible=i===l.ShowAboveS||i===l.AlwaysShow;this._MCVisible=true;break;case p:if(s===h.BelowXL){this._setSpanSize(m,m)}else{this._setSpanSize(y,V)}this._SCVisible=i===l.ShowAboveS||i===l.ShowAboveM||i===l.AlwaysShow;this._MCVisible=true;this._bFixedSideContent=false;break;case S:this._setSpanSize(b,M);this._SCVisible=i!==l.NeverShow;this._MCVisible=true;this._bFixedSideContent=false;break;default:throw new Error(k)}}else{switch(t){case d:this._setSpanSize(m,m);this._SCVisible=false;break;default:this._setSpanSize(w,w);this._SCVisible=true;this._MCVisible=true}this._bFixedSideContent=false}return this};u.prototype._shouldSetHeight=function(){var t,e,i,s,n,r,o;t=this._iScSpan+this._iMcSpan===m;e=this._MCVisible&&this._SCVisible;i=!this._MCVisible&&this._SCVisible;s=this._MCVisible&&!this._SCVisible;n=i||s;r=this._fixedSideContent;o=this.getSideContentVisibility()===l.NeverShow;return t&&e||n||r||o};u.prototype._changeGridState=function(){var t=this.$(B),e=this.$(z),i=this.getProperty("showMainContent"),s=this.getProperty("showSideContent");if(this._bFixedSideContent){t.removeClass().addClass(f);e.removeClass().addClass(g)}else{t.removeClass(f);e.removeClass(g)}if(this._SCVisible&&this._MCVisible&&s&&i){if(!this._bFixedSideContent){e.removeClass().addClass("sapUiDSCSpan"+this._iMcSpan);t.removeClass().addClass("sapUiDSCSpan"+this._iScSpan)}if(this._shouldSetHeight()){t.css("height","100%").css("float","left");e.css("height","100%").css("float","left")}else{t.css("height","auto").css("float","none");e.css("height","auto").css("float","none")}}else if(!this._SCVisible&&!this._MCVisible){e.addClass(_);t.addClass(_)}else if(this._MCVisible&&i){e.removeClass().addClass(c);t.addClass(_)}else if(this._SCVisible&&s){t.removeClass().addClass(c);e.addClass(_)}else if(!i&&!s){e.addClass(_);t.addClass(_)}e.addClass("sapUiDSCM");t.addClass("sapUiDSCS")};u.prototype._setSpanSize=function(t,e){this._iScSpan=t;this._iMcSpan=e};return u});