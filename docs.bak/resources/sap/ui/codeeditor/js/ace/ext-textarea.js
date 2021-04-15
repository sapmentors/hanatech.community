ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,a){"use strict";t.isDark=false;t.cssClass="ace-tm";t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';t.$id="ace/theme/textmate";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)});ace.define("ace/ext/textarea",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/net","ace/ace","ace/theme/textmate"],function(e,t,a){"use strict";var r=e("../lib/event");var o=e("../lib/useragent");var c=e("../lib/net");var i=e("../ace");e("../theme/textmate");a.exports=t=i;var n=function(e,t,a){var r=e.style[a];if(!r){if(window.getComputedStyle){r=window.getComputedStyle(e,"").getPropertyValue(a)}else{r=e.currentStyle[a]}}if(!r||r=="auto"||r=="intrinsic"){r=t.style[a]}return r};function s(e,t){for(var a in t){e.style[a]=t[a]}}function l(e,t){if(e.type!="textarea"){throw new Error("Textarea required!")}var a=e.parentNode;var o=document.createElement("div");var c=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach(function(a){t+=a+":"+n(e,o,a)+";"});var a=n(e,o,"width")||e.clientWidth+"px";var r=n(e,o,"height")||e.clientHeight+"px";t+="height:"+r+";width:"+a+";";t+="display:inline-block;";o.setAttribute("style",t)};r.addListener(window,"resize",c);c();a.insertBefore(o,e.nextSibling);while(a!==document){if(a.tagName.toUpperCase()==="FORM"){var i=a.onsubmit;a.onsubmit=function(a){e.value=t();if(i){i.call(this,a)}};break}a=a.parentNode}return o}t.transformTextarea=function(e,a){var c=e.autofocus||document.activeElement==e;var n;var u=l(e,function(){return n.getValue()});e.style.display="none";u.style.background="white";var p=document.createElement("div");s(p,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"});u.appendChild(p);var g=document.createElement("div");s(g,{position:"absolute",right:"0px",bottom:"0px",cursor:"nw-resize",border:"solid 9px",borderColor:"lightblue gray gray #ceade6",zIndex:101});var b=document.createElement("div");var f={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};if(!o.isOldIE){f.backgroundColor="rgba(0, 0, 0, 0.6)"}else{f.backgroundColor="#333"}s(b,f);u.appendChild(b);a=a||t.defaultOptions;var h=i.edit(p);n=h.getSession();n.setValue(e.value||e.innerHTML);if(c)h.focus();u.appendChild(g);d(h,p,b,i,a);m(b,g,h);var v="";r.addListener(g,"mousemove",function(e){var t=this.getBoundingClientRect();var a=e.clientX-t.left,r=e.clientY-t.top;if(a+r<(t.width+t.height)/2){this.style.cursor="pointer";v="toggle"}else{v="resize";this.style.cursor="nw-resize"}});r.addListener(g,"mousedown",function(e){e.preventDefault();if(v=="toggle"){h.setDisplaySettings();return}u.style.zIndex=1e5;var t=u.getBoundingClientRect();var a=t.width+t.left-e.clientX;var o=t.height+t.top-e.clientY;r.capture(g,function(e){u.style.width=e.clientX-t.left+a+"px";u.style.height=e.clientY-t.top+o+"px";h.resize()},function(){})});return h};function u(t,a,r){c.loadScript(t,function(){e([a],r)})}function d(e,t,a,r,o){var c=e.getSession();var i=e.renderer;function n(e){return e==="true"||e==true}e.setDisplaySettings=function(t){if(t==null)t=a.style.display=="none";if(t){a.style.display="block";a.hideButton.focus();e.on("focus",function t(){e.removeListener("focus",t);a.style.display="none"})}else{e.focus()}};e.$setOption=e.setOption;e.$getOption=e.getOption;e.setOption=function(t,a){switch(t){case"mode":e.$setOption("mode","ace/mode/"+a);break;case"theme":e.$setOption("theme","ace/theme/"+a);break;case"keybindings":switch(a){case"vim":e.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":e.setKeyboardHandler("ace/keyboard/emacs");break;default:e.setKeyboardHandler(null)}break;case"wrap":case"fontSize":e.$setOption(t,a);break;default:e.$setOption(t,n(a))}};e.getOption=function(t){switch(t){case"mode":return e.$getOption("mode").substr("ace/mode/".length);break;case"theme":return e.$getOption("theme").substr("ace/theme/".length);break;case"keybindings":var a=e.getKeyboardHandler();switch(a&&a.$id){case"ace/keyboard/vim":return"vim";case"ace/keyboard/emacs":return"emacs";default:return"ace"}break;default:return e.$getOption(t)}};e.setOptions(o);return e}function m(e,a,o){var c=null;var i={mode:"Mode:",wrap:"Soft Wrap:",theme:"Theme:",fontSize:"Font Size:",showGutter:"Display Gutter:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"};var n={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",gob:"Green on Black",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},showGutter:c,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},wrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:c,useSoftTabs:c,showInvisibles:c};var s=[];s.push("<table><tr><th>Setting</th><th>Value</th></tr>");function l(e,t,a,r){if(!a){e.push("<input type='checkbox' title='",t,"' ",r+""=="true"?"checked='true'":"","'></input>");return}e.push("<select title='"+t+"'>");for(var o in a){e.push("<option value='"+o+"' ");if(r==o){e.push(" selected ")}e.push(">",a[o],"</option>")}e.push("</select>")}for(var u in t.defaultOptions){s.push("<tr><td>",i[u],"</td>");s.push("<td>");l(s,u,n[u],o.getOption(u));s.push("</td></tr>")}s.push("</table>");e.innerHTML=s.join("");var d=function(e){var t=e.currentTarget;o.setOption(t.title,t.value)};var m=function(e){var t=e.currentTarget;o.setOption(t.title,t.checked)};var p=e.getElementsByTagName("select");for(var g=0;g<p.length;g++)p[g].onchange=d;var b=e.getElementsByTagName("input");for(var g=0;g<b.length;g++)b[g].onclick=m;var f=document.createElement("input");f.type="button";f.value="Hide";r.addListener(f,"click",function(){o.setDisplaySettings(false)});e.appendChild(f);e.hideButton=f}t.defaultOptions={mode:"javascript",theme:"textmate",wrap:"off",fontSize:"12px",showGutter:"false",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}});(function(){ace.require(["ace/ext/textarea"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();