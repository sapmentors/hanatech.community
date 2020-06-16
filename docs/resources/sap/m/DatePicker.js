/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.getCore().loadLibrary("sap.ui.unified");sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/Device","./InputBase","./DateTimeField","./Button","./ResponsivePopover","sap/ui/core/date/UniversalDate","./library","sap/ui/core/Control","sap/ui/core/library","./DatePickerRenderer","sap/base/util/deepEqual","sap/base/assert","sap/base/Log","sap/ui/core/IconPool","./InstanceManager","sap/ui/unified/Calendar","sap/ui/unified/DateRange","sap/ui/unified/calendar/CustomMonthPicker","sap/ui/unified/calendar/CustomYearPicker","sap/ui/dom/jquery/cursorPos"],function(t,e,i,a,s,o,n,r,p,u,l,h,d,g,c,f,_,y,D,m){"use strict";var C=u.CalendarType;var v=sap.ui.getCore().getLibraryResourceBundle("sap.m");var P=a.extend("sap.m.DatePicker",{metadata:{library:"sap.m",properties:{displayFormatType:{type:"string",group:"Appearance",defaultValue:""},secondaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance",defaultValue:null},minDate:{type:"object",group:"Misc",defaultValue:null},maxDate:{type:"object",group:"Misc",defaultValue:null},showFooter:{type:"boolean",group:"Misc",defaultValue:false}},aggregations:{specialDates:{type:"sap.ui.core.Element",multiple:true,singularName:"specialDate"},_popup:{type:"sap.m.ResponsivePopover",multiple:false,visibility:"hidden"}},associations:{legend:{type:"sap.ui.core.Control",multiple:false}},events:{navigate:{parameters:{dateRange:{type:"sap.ui.unified.DateRange"},afterPopupOpened:{type:"boolean"}}}},designtime:"sap/m/designtime/DatePicker.designtime",dnd:{draggable:false,droppable:true}}});P.prototype.init=function(){a.prototype.init.apply(this,arguments);this._bIntervalSelection=false;this._bOnlyCalendar=true;this._bValid=true;this._oMinDate=new Date(1,0,1);this._oMinDate.setFullYear(1);this._oMaxDate=new Date(9999,11,31,23,59,59,999);var t=this.addEndIcon({id:this.getId()+"-icon",src:this.getIconSrc(),noTabStop:true,tooltip:v.getText("OPEN_PICKER_TEXT")});this._bShouldClosePicker=false;t.addEventDelegate({onmousedown:function(t){this._bShouldClosePicker=!!this.isOpen()}},this);t.attachPress(function(){this.toggleOpen(this._bShouldClosePicker)},this)};P.prototype.isValidValue=function(){return this._bValid};P.prototype.isOpen=function(){return this._oPopup&&this._oPopup.isOpen()};P.prototype.toggleOpen=function(t){if(this.getEditable()&&this.getEnabled()){if(t){b.call(this)}else{T.call(this)}}};P.prototype.getIconSrc=function(){return c.getIconURI("appointment-2")};P.prototype.exit=function(){i.prototype.exit.apply(this,arguments);if(this._oPopup){if(this._oPopup.isOpen()){this._oPopup.close()}delete this._oPopup}if(this._getCalendar()){this._getCalendar().destroy();delete this._getCalendar()}if(this._iInvalidateCalendar){clearTimeout(this._iInvalidateCalendar)}this._sUsedDisplayPattern=undefined;this._sUsedDisplayCalendarType=undefined;this._oDisplayFormat=undefined;this._sUsedValuePattern=undefined;this._sUsedValueCalendarType=undefined;this._oValueFormat=undefined};P.prototype.invalidate=function(t){if(!t||t!=this._getCalendar()){p.prototype.invalidate.apply(this,arguments);this._iInvalidateCalendar=setTimeout(E.bind(this),0)}};P.prototype.onBeforeRendering=function(){a.prototype.onBeforeRendering.apply(this,arguments);this._checkMinMaxDate();var t=this._getValueHelpIcon();if(t){t.setProperty("visible",this.getEditable(),true)}};P.prototype.setWidth=function(t){return i.prototype.setWidth.call(this,t||"100%")};P.prototype.getWidth=function(t){return this.getProperty("width")||"100%"};P.prototype.applyFocusInfo=function(t){this._bFocusNoPopup=true;if(!e.support.touch||e.system.desktop){i.prototype.applyFocusInfo.apply(this,arguments)}};P.prototype.onfocusin=function(e){if(!t(e.target).hasClass("sapUiIcon")){i.prototype.onfocusin.apply(this,arguments)}this._bFocusNoPopup=undefined};P.prototype.onsapshow=function(t){this.toggleOpen(this.isOpen());t.preventDefault()};P.prototype.onsaphide=P.prototype.onsapshow;P.prototype.onsappageup=function(t){var e=this._getCalendarConstructor().getMetadata().getName();t.preventDefault();if(e!="sap.ui.unified.Calendar"){return}this._increaseDate(1,"day")};P.prototype.onsappageupmodifiers=function(t){var e=this._getCalendarConstructor().getMetadata().getName();t.preventDefault();if(!t.ctrlKey&&t.shiftKey){if(e=="sap.ui.unified.internal.CustomYearPicker"){return}this._increaseDate(1,"month")}else{this._increaseDate(1,"year")}};P.prototype.onsappagedown=function(t){var e=this._getCalendarConstructor().getMetadata().getName();t.preventDefault();if(e!="sap.ui.unified.Calendar"){return}this._increaseDate(-1,"day")};P.prototype.onsappagedownmodifiers=function(t){var e=this._getCalendarConstructor().getMetadata().getName();t.preventDefault();if(!t.ctrlKey&&t.shiftKey){if(e=="sap.ui.unified.internal.CustomYearPicker"){return}this._increaseDate(-1,"month")}else{this._increaseDate(-1,"year")}};P.prototype.onkeypress=function(t){if(!t.charCode||t.metaKey||t.ctrlKey){return}var e=this._getFormatter(true);var i=String.fromCharCode(t.charCode);if(i&&e.sAllowedCharacters&&e.sAllowedCharacters.indexOf(i)<0){t.preventDefault()}};P.prototype._getValueHelpIcon=function(){var t=this.getAggregation("_endIcon");return t&&t[0]};P.prototype._dateValidation=function(t){this._bValid=true;if(t&&(t.getTime()<this._oMinDate.getTime()||t.getTime()>this._oMaxDate.getTime())){this._bValid=false;d(this._bValid,"Date must be in valid range")}this.setProperty("dateValue",t);return t};P.prototype.setMinDate=function(t){if(this._isValidDate(t)){throw new Error("Date must be a JavaScript date object; "+this)}if(h(this.getMinDate(),t)){return this}if(t){var e=t.getFullYear();if(e<1||e>9999){throw new Error("Date must be between 0001-01-01 and 9999-12-31; "+this)}this._oMinDate=new Date(t.getTime());var i=this.getDateValue();if(i&&i.getTime()<t.getTime()){this._bValid=false;g.warning("DateValue not in valid date range",this)}}else{this._oMinDate=new Date(1,0,1);this._oMinDate.setFullYear(1)}this.setProperty("minDate",t);if(this._getCalendar()){this._getCalendar().setMinDate(t)}this._oMinDate.setHours(0,0,0,0);return this};P.prototype.setMaxDate=function(t){if(this._isValidDate(t)){throw new Error("Date must be a JavaScript date object; "+this)}if(h(this.getMaxDate(),t)){return this}if(t){var e=t.getFullYear();if(e<1||e>9999){throw new Error("Date must be between 0001-01-01 and 9999-12-31; "+this)}this._oMaxDate=new Date(t.getTime());var i=this.getDateValue();if(i&&i.getTime()>t.getTime()){this._bValid=false;g.warning("DateValue not in valid date",this)}}else{this._oMaxDate=new Date(9999,11,31,23,59,59,999)}this.setProperty("maxDate",t);if(this._getCalendar()){this._getCalendar().setMaxDate(t)}this._oMaxDate.setHours(23,59,59,999);return this};P.prototype._checkMinMaxDate=function(){if(this._oMinDate.getTime()>this._oMaxDate.getTime()){g.warning("minDate > MaxDate -> dates switched",this);var t=new Date(this._oMinDate.getTime());var e=new Date(this._oMaxDate.getTime());this._oMinDate=new Date(e.getTime());this._oMaxDate=new Date(t.getTime());this.setProperty("minDate",e,true);this.setProperty("maxDate",t,true);if(this._getCalendar()){this._getCalendar().setMinDate(e);this._getCalendar().setMaxDate(t)}}var i=this.getDateValue();if(i&&(i.getTime()<this._oMinDate.getTime()||i.getTime()>this._oMaxDate.getTime())){this._bValid=false;g.error("dateValue "+i.toString()+"(value="+this.getValue()+") does not match "+"min/max date range("+this._oMinDate.toString()+" - "+this._oMaxDate.toString()+"). App. "+"developers should take care to maintain dateValue/value accordingly.",this)}};P.prototype.getDisplayFormatType=function(){return this.getProperty("displayFormatType")};P.prototype._handleDateValidation=function(t){this._bValid=true;if(!t||t.getTime()<this._oMinDate.getTime()||t.getTime()>this._oMaxDate.getTime()){this._bValid=false;g.warning("Value can not be converted to a valid date",this)}var e=this._formatValue(t,true);if(e!==this.getValue()){this.setLastValue(e)}this.setProperty("value",e);this.setProperty("dateValue",t)};P.prototype.setDisplayFormatType=function(t){if(t){var e=false;for(var i in C){if(i==t){e=true;break}}if(!e){throw new Error(t+" is not a valid calendar type"+this)}}this.setProperty("displayFormatType",t,true);this.setDisplayFormat(this.getDisplayFormat());return this};P.prototype.setSecondaryCalendarType=function(t){this._bSecondaryCalendarTypeSet=true;this.setProperty("secondaryCalendarType",t,true);if(this._getCalendar()){this._getCalendar().setSecondaryCalendarType(t)}return this};P.prototype.setShowFooter=function(t){var e=this._oPopup,i=this._getCalendar();this.setProperty("showFooter",t);if(!e||!i){return this}e._getButtonFooter().setVisible(t);return this};P.prototype.addSpecialDate=function(t){M.call(this,t);this.addAggregation("specialDates",t,true);E.call(this);return this};P.prototype.insertSpecialDate=function(t,e){M.call(this,t);this.insertAggregation("specialDates",t,e,true);E.call(this);return this};P.prototype.removeSpecialDate=function(t){var e=this.removeAggregation("specialDates",t,true);E.call(this);return e};P.prototype.removeAllSpecialDates=function(){var t=this.removeAllAggregation("specialDates",true);E.call(this);return t};P.prototype.destroySpecialDates=function(){this.destroyAggregation("specialDates",true);E.call(this);return this};P.prototype.setLegend=function(t){this.setAssociation("legend",t,true);var e=this.getLegend();if(e){var i=sap.ui.require("sap/ui/unified/CalendarLegend");t=sap.ui.getCore().byId(e);if(t&&!(typeof i=="function"&&t instanceof i)){throw new Error(t+" is not an sap.ui.unified.CalendarLegend. "+this)}}if(this._getCalendar()){this._getCalendar().setLegend(e)}return this};P.prototype.onChange=function(t){if(!this.getEditable()||!this.getEnabled()){return}var e=this._$input.val(),i=this._formatValue(this.getDateValue()),a;if(e==i&&this._bValid){return}if(this.getShowFooter()&&this._oPopup&&!e){this._oPopup.getBeginButton().setEnabled(false)}this._bValid=true;if(e!=""){a=this._parseValue(e,true);if(!a||a.getTime()<this._oMinDate.getTime()||a.getTime()>this._oMaxDate.getTime()){this._bValid=false;a=undefined}else{e=this._formatValue(a)}}if(this.getDomRef()&&this._$input.val()!==e){this._$input.val(e);this._curpos=this._$input.cursorPos()}if(a){e=this._formatValue(a,true)}if(this.getLastValue()!==e||a&&this.getDateValue()&&a.getFullYear()!==this.getDateValue().getFullYear()){this.setLastValue(e);this.setProperty("value",e,true);var s=this.getValue();if(this._bValid&&e==s){this.setProperty("dateValue",a,true)}e=s;if(this.isOpen()){if(this._bValid){a=this.getDateValue()}this._getCalendar().focusDate(a);var o=this._oDateRange.getStartDate();if(!o&&a||o&&a&&o.getTime()!=a.getTime()){this._oDateRange.setStartDate(new Date(a.getTime()))}else if(o&&!a){this._oDateRange.setStartDate(undefined)}}this.fireChangeEvent(e,{valid:this._bValid})}};P.prototype._getInputValue=function(t){t=typeof t=="undefined"?this._$input.val():t.toString();var e=this._parseValue(t,true);t=this._formatValue(e,true);return t};P.prototype.updateDomValue=function(t){if(this.isActive()&&this._$input.val()!==t){this._bCheckDomValue=true;t=typeof t=="undefined"?this._$input.val():t.toString();this._curpos=this._$input.cursorPos();var e=this._parseValue(t,true);t=this._formatValue(e);this._$input.val(t);if(document.activeElement===this._$input[0]){this._$input.cursorPos(this._curpos)}}return this};P.prototype._storeInputSelection=function(t){if((e.browser.msie||e.browser.edge)&&!e.support.touch){this._oInputSelBeforePopupOpen={iStart:t.selectionStart,iEnd:t.selectionEnd};t.selectionStart=0;t.selectionEnd=0}};P.prototype._restoreInputSelection=function(t){if((e.browser.msie||e.browser.edge)&&!e.support.touch){t.selectionStart=this._oInputSelBeforePopupOpen.iStart;t.selectionEnd=this._oInputSelBeforePopupOpen.iEnd}};function T(){this._createPopup();this._createPopupContent();var t;var e=this.getBinding("value");if(e&&e.oType&&e.oType.oOutputFormat){t=e.oType.oOutputFormat.oFormatOptions.calendarType}else if(e&&e.oType&&e.oType.oFormat){t=e.oType.oFormat.oFormatOptions.calendarType}if(!t){t=this.getDisplayFormatType()}if(t){this._getCalendar().setPrimaryCalendarType(t)}var i=this._bValid?this._formatValue(this.getDateValue()):this.getValue();if(i!=this._$input.val()){this.onChange()}this._fillDateRange();this._openPopup();this.fireNavigate({dateRange:this._getVisibleDatesRange(this._getCalendar()),afterPopupOpened:true})}P.prototype._createPopup=function(){var t,i;if(!this._oPopup){this._oPopup=new o(this.getId()+"-RP",{showCloseButton:false,showArrow:false,showHeader:false,placement:r.PlacementType.VerticalPreferedBottom}).addStyleClass("sapMRPCalendar");if(this.getShowFooter()){this._oPopup.addStyleClass("sapMLandscapePadding")}this._oPopup._getPopup().setAutoClose(true);this._oPopup.attachAfterOpen(V,this);this._oPopup.attachAfterClose(S,this);this._oPopup.setBeginButton(new s({text:v.getText("DATEPICKER_SELECTION_CONFIRM"),press:this._handleOKButton.bind(this)}));if(e.system.phone){t=this.$("inner").attr("aria-labelledby");i=t?document.getElementById(t).getAttribute("aria-label"):"";this._oPopup.setTitle(i);this._oPopup.setShowHeader(true);this._oPopup.setShowCloseButton(true)}else{this._oPopup._getPopup().setDurations(0,0);this._oPopup.getBeginButton().setType(r.ButtonType.Emphasized);this._oPopup.setEndButton(new s({text:v.getText("DATEPICKER_SELECTION_CANCEL"),press:this._handleCancelButton.bind(this)}))}this.setAggregation("_popup",this._oPopup,true)}};P.prototype._openPopup=function(){if(!this._oPopup){return}this._storeInputSelection(this._$input.get(0));this._oPopup._getPopup().setAutoCloseAreas([this.getDomRef()]);this._oPopup.openBy(this)};P.prototype._getVisibleDatesRange=function(t){var e=t._getVisibleDays();return new y({startDate:e[0].toLocalJSDate(),endDate:e[e.length-1].toLocalJSDate()})};P.prototype._createPopupContent=function(){var t=this._getCalendarConstructor();if(!this._getCalendar()){this._oCalendar=new t(this.getId()+"-cal",{intervalSelection:this._bIntervalSelection,minDate:this.getMinDate(),maxDate:this.getMaxDate(),legend:this.getLegend(),startDateChange:function(){this.fireNavigate({dateRange:this._getVisibleDatesRange(this._getCalendar())})}.bind(this)});this._oDateRange=new y;this._getCalendar().addSelectedDate(this._oDateRange);this._getCalendar()._setSpecialDatesControlOrigin(this);if(this.$().closest(".sapUiSizeCompact").length>0){this._getCalendar().addStyleClass("sapUiSizeCompact")}if(this._bSecondaryCalendarTypeSet){this._getCalendar().setSecondaryCalendarType(this.getSecondaryCalendarType())}if(this._bOnlyCalendar){this._getCalendar().attachSelect(this._handleCalendarSelect,this);this._getCalendar().attachCancel(b,this);this._getCalendar().attachEvent("_renderMonth",w,this);this._oCalendar.setPopupMode(true);this._oPopup._getButtonFooter().setVisible(this.getShowFooter());this._getCalendar()._bSkipCancelButtonRendering=true;this._oPopup.addContent(this._getCalendar());if(!this.getDateValue()){this._oPopup.getBeginButton().setEnabled(false)}}}};P.prototype._getCalendarConstructor=function(){var t=this._getFormatter(true).aFormatArray.map(function(t){return t.type.toLowerCase()}),e=t.indexOf("day")>=0,i=t.indexOf("month")>=0,a=t.indexOf("year")>=0;if(e&&i&&a){return _}else if(i&&a){return D}else if(a){return m}else{g.warning("Not valid date pattern! Default Calendar constructor function is returned",this);return _}};P.prototype._fillDateRange=function(){var t=this.getDateValue();if(t&&t.getTime()>=this._oMinDate.getTime()&&t.getTime()<=this._oMaxDate.getTime()){this._getCalendar().focusDate(new Date(t.getTime()));if(!this._oDateRange.getStartDate()||this._oDateRange.getStartDate().getTime()!=t.getTime()){this._oDateRange.setStartDate(new Date(t.getTime()))}}else{var e=this.getInitialFocusedDateValue();var i=e?e:new Date;var a=this._oMaxDate.getTime();if(i.getTime()<this._oMinDate.getTime()||i.getTime()>a){i=this._oMinDate}this._getCalendar().focusDate(i);if(this._oDateRange.getStartDate()){this._oDateRange.setStartDate(undefined)}}};P.prototype.getAccessibilityInfo=function(){var t=this.getRenderer();var e=i.prototype.getAccessibilityInfo.apply(this,arguments);var a=this.getValue()||"";if(this._bValid){var s=this.getDateValue();if(s){a=this._formatValue(s)}}e.type=v.getText("ACC_CTR_TYPE_DATEINPUT");e.description=[a,t.getLabelledByAnnouncement(this),t.getDescribedByAnnouncement(this)].join(" ").trim();return e};P.prototype._selectDate=function(){var t=this.getDateValue(),i=this._getSelectedDate(),a="";if(!h(i,t)){this.setDateValue(new Date(i.getTime()));a=this.getValue();this.fireChangeEvent(a,{valid:true});this._focusInput()}else if(!this._bValid){a=this._formatValue(i);if(a!=this._$input.val()){this._bValid=true;if(this.getDomRef()){this._$input.val(a);this.setLastValue(a)}a=this._formatValue(i,true);this.setProperty("value",a,true);this.fireChangeEvent(a,{valid:true});this._focusInput()}}else if(e.system.desktop||!e.support.touch){this.focus()}this._oPopup.close()};P.prototype._handleCalendarSelect=function(){if(this.getShowFooter()){this._oPopup.getBeginButton().setEnabled(true);return}this._selectDate()};P.prototype._focusInput=function(){if(this.getDomRef()&&(e.system.desktop||!e.support.touch)){this._curpos=this._$input.val().length;this._$input.cursorPos(this._curpos)}return this};P.prototype._getCalendar=function(){return this._oCalendar};P.prototype._getSelectedDate=function(){var t=this._getCalendar().getSelectedDates(),e;if(t.length>0){e=t[0].getStartDate()}return e};P.prototype._handleOKButton=function(){this._selectDate()};P.prototype._handleCancelButton=function(){if(!this.getDateValue()){this._oPopup.getBeginButton().setEnabled(false)}this._oPopup.close()};function b(t){if(this.isOpen()){this._oPopup.close();if(e.system.desktop||!e.support.touch){this.focus()}}}P.prototype._increaseDate=function(t,e){var i=this.getDateValue();var a=this._$input.cursorPos();if(i&&this.getEditable()&&this.getEnabled()){var s;var o=this.getBinding("value");if(o&&o.oType&&o.oType.oOutputFormat){s=o.oType.oOutputFormat.oFormatOptions.calendarType}else if(o&&o.oType&&o.oType.oFormat){s=o.oType.oFormat.oFormatOptions.calendarType}if(!s){s=this.getDisplayFormatType()}var r=n.getInstance(new Date(i.getTime()),s);i=n.getInstance(new Date(i.getTime()),s);switch(e){case"day":r.setDate(r.getDate()+t);break;case"month":r.setMonth(r.getMonth()+t);var p=(i.getMonth()+t)%12;if(p<0){p=12+p}while(r.getMonth()!=p){r.setDate(r.getDate()-1)}break;case"year":r.setFullYear(r.getFullYear()+t);while(r.getMonth()!=i.getMonth()){r.setDate(r.getDate()-1)}break;default:break}if(r.getTime()<this._oMinDate.getTime()){r=new n(this._oMinDate.getTime())}else if(r.getTime()>this._oMaxDate.getTime()){r=new n(this._oMaxDate.getTime())}if(!h(this.getDateValue(),r.getJSDate())){this.setDateValue(new Date(r.getTime()));this._curpos=a;this._$input.cursorPos(this._curpos);var u=this.getValue();this.fireChangeEvent(u,{valid:true})}}};function V(){this.addStyleClass(i.ICON_PRESSED_CSS_CLASS);this._renderedDays=this._getCalendar().$("-Month0-days").find(".sapUiCalItem").length;this.$("inner").attr("aria-owns",this.getId()+"-cal");this.$("inner").attr("aria-expanded",true);f.addPopoverInstance(this._oPopup);this._getCalendar().focus()}function S(){if(!this.getDateValue()){this._oPopup.getBeginButton().setEnabled(false)}this.removeStyleClass(i.ICON_PRESSED_CSS_CLASS);this.$("inner").attr("aria-expanded",false);this._restoreInputSelection(this._$input.get(0));this._getCalendar()._closedPickers();f.removePopoverInstance(this._oPopup)}function w(t){var e=t.getParameter("days"),i=this._oPopup._getPopup();if(e>this._renderedDays){this._renderedDays=e;i._applyPosition(i._oLastPosition)}}function M(t){var e=sap.ui.require("sap/ui/unified/DateTypeRange");if(t&&!(e&&t instanceof e)){throw new Error(t+'is not valid for aggregation "specialDates" of '+this)}}function E(){if(this.isOpen()){this._getCalendar()._bDateRangeChanged=false;this._getCalendar().invalidate()}}return P});