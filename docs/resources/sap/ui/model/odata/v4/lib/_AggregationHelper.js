/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_Helper","sap/ui/model/Filter"],function(e,t){"use strict";var r={grandTotal:"boolean",max:"boolean",min:"boolean",name:"string",subtotals:"boolean",with:"string"},n={aggregate:"object",group:"object",groupLevels:"array"},i;function a(e,t,r){var n;function i(e){if(r){e+=" at property: "+r}throw new Error(e)}function a(e){return Array.isArray(e)?"array":typeof e}for(n in e){if(!(t&&n in t)){i("Unsupported '"+n+"'")}else if(a(e[n])!==t[n]){i("Not a "+t[n]+" value for '"+n+"'")}}}function o(e,t){var r;for(r in e){a(e[r],t,r)}}i={buildApply:function(e,t,i,u){var f,s="",g=[],l,c,p;function d(r){var n=e.aggregate[r],i=n.name||r,a=r,o=n.with;if(o){if((o==="average"||o==="countdistinct")&&(n.grandTotal||n.subtotals)){throw new Error("Cannot aggregate totals with '"+o+"'")}i+=" with "+o+" as "+r}else if(n.name){i+=" as "+r}if(!u){if(n.min){$(r,"min")}if(n.max){$(r,"max")}}if(n.grandTotal){c=true;if(!t.$skip){if(o){a+=" with "+o+" as UI5grand__"+r}g.push(a)}}return i}function h(t){return e.groupLevels.indexOf(t)<0}function $(e,t){var r="UI5"+t+"__"+e;g.push(e+" with "+t+" as "+r);if(i){i[r]={measure:e,method:t}}}function m(){var e="";if(t.$skip){e="skip("+t.$skip+")"}delete t.$skip;if(t.$top<Infinity){if(e){e+="/"}e+="top("+t.$top+")"}delete t.$top;return e}t=Object.assign({},t);a(e,n);e.groupLevels=e.groupLevels||[];e.aggregate=e.aggregate||{};o(e.aggregate,r);f=Object.keys(e.aggregate).sort().map(d);if(c&&e.groupLevels.length){throw new Error("Cannot combine visual grouping with grand total")}if(f.length){s="aggregate("+f.join(",")+")"}e.group=e.group||{};o(e.group);l=e.groupLevels.concat(Object.keys(e.group).sort().filter(h));if(l.length){s="groupby(("+l.join(",")+(s?"),"+s+")":"))")}if(u){delete t.$count}else if(t.$count){g.push("$count as UI5__count");delete t.$count}if(t.$$filterBeforeAggregate){s="filter("+t.$$filterBeforeAggregate+")/"+s;delete t.$$filterBeforeAggregate}if(t.$filter){s+="/filter("+t.$filter+")";delete t.$filter}if(t.$orderby){s+="/orderby("+t.$orderby+")";delete t.$orderby}if(c){if(t.$skip){t.$skip-=1}else{t.$top-=1}}p=m();if(g.length){s+="/concat(aggregate("+g.join(",")+"),"+(p||"identity")+")"}else if(p){s+="/"+p}if(s){t.$apply=s}return t},hasGrandTotal:function(e){return!!e&&Object.keys(e).some(function(t){return e[t].grandTotal})},hasMinOrMax:function(e){return!!e&&Object.keys(e).some(function(t){var r=e[t];return r.min||r.max})},isAffected:function(t,r,n){function i(t,r){if(t.endsWith("/*")){t=t.slice(0,-2)}return e.hasPathPrefix(r,t)||e.hasPathPrefix(t,r)}function a(e,t){return t.some(function(t){return t.aFilters?a(e,t.aFilters):i(e,t.sPath)})}return n.some(function(e){var n=i.bind(null,e);return e===""||e==="*"||Object.keys(t.aggregate).some(function(r){var n=t.aggregate[r];return i(e,n.name||r)})||Object.keys(t.group).some(n)||t.groupLevels.some(n)||a(e,r)})},splitFilter:function(e,r){var n=[],i=[];function a(e){return e.aFilters?e.aFilters.some(a):e.sPath in r.aggregate}function o(e){if(e.aFilters&&e.bAnd){e.aFilters.forEach(o)}else{(a(e)?n:i).push(e)}}function u(e){return e.length>1?new t(e,true):e[0]}if(!r||!r.aggregate){return[e]}o(e);return[u(n),u(i)]}};return i},false);