﻿/*
 * jQuery JavaScript Library v1.3.2
 *
 * Copyright (c) 2009 John Resig, http://jquery.com/
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  More information: http://sizzlejs.com/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();
(function(i,b){var h={},e=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,d=/\{\{([\/]?[\w]*)(?:[ ]*)([^#=]*)\}\}/g,c=/\<\{([\/]?[\w]*)(?:[ ]*)([^#=]*)\}\>/g,f=c;function g(l,m,k){var j=l(i,m,k).join("");if(typeof k=="number"&&k){j=$(j)}return j}i.fn.extend({tmpl:function(k,j){return i.tmpl(this[0],k,j)},template:function(j){return i.template(j,this[0])}});i.extend({tmpl:function(j,l,k){j=i.template[j]||(typeof j!=="string"?i.template(null,j):i.template(j,i("#"+j)));return g(j,l,k)},renderPartial:function(j,l,k){return this.tmpl(j,l,k)},template:function(k,j){if(j){if(typeof j==="string"){j=a(j)}else{if(j instanceof i){j=j[0]||{}}}if(j.nodeType){j=i.data(j,"tmpl")||i.data(j,"tmpl",a(j.innerHTML))}return typeof k==="string"?(i.template[k]=j):j}return k?(typeof k!=="string"?i.template(null,k):(i.template[k]||i.template(null,e.test(k)?k:i("#"+k)))):null},encode:function(j){return encodeURIComponent(j)}});i.extend(i.tmpl,{tag:{"=":{_default:{$1:"$data"},open:function(j){return"if(typeof "+j+" !== 'undefined'){_.push( "+j+");}"}},"if":{open:function(j){return"if "+j+"{"}},"/if":{open:function(j){return"}"}},loop:{open:function(k){var j=i.trim(k).split(/\s=>\s|\s/);if(j.length<1){return"{"}return"for( var "+(j[2]?j[1]:"tkey")+" in "+j[0]+") { "+(j[2]||j[1]||"$item")+" = "+j[0]+"["+(j[2]?j[1]:"tkey")+"];"}},"/loop":{open:function(j){return"}"}}},complete:function(j){h={}}});function a(j){return new Function("jQuery","$data","var $=jQuery,call,_=[],$Model=$data;with($data){_.push('"+i.trim(j).replace(/([\\'])/g,"\\$1").replace(/<!--(.*)-->/g,"<$1>").replace(/[\n\t\r]/g," ").replace(/([ ]{2,})/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\<\#([=]?)([^#]*)\#\>/g,function(m,l,n){var k=typeof l!=="undefined"&&l!=""?i.tmpl.tag[l]["open"](n):n;return"');"+k+"_.push('"}).replace(/\<\{(=|[\/]?[\w]*)(?:[ ]*)([^}]*)\}\>/g,function(m,l,n){var k=typeof l!=="undefined"&&l!=""?i.tmpl.tag[l]["open"](n):n;return"');"+k+"_.push('"})+"');}return _;")}})(jQuery);

//=============================================================================
// 文件名:		system.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.luo
// 创建日期:	2009-8-17
// 描述:		此文件修改请通知作者
// 备注:       String, Object，Event, Globals, StringBuilder, Template, elongAjax类扩展和实现
// *************常用代码示例: ***********
//            var bool = Object.isNull(obj); // 空对象?
//            var obj2 = Object.clone(obj); //克隆对象
//            var bool = String.isNullOrEmpty(input); // 空字符串?
//            var str = "test  "; 
//            str.trim(); // 去掉前后空格
//            str.startsWith("t");
//            str.isJSON();

//            var sb = new StringBuilder();
//            sb.append(String.format("你好，{0}", "luozhi"));
//            var str = sb.toString();

//            var listTemplate = new Template("<li class=\"li_q\" method=\"select\" value=\"#{Value}\">#{Name}</li>");
//            var sb = new StringBuilder();
//            for (var i = 0; i < this.data.length; i++) {
//                sb.append(listTemplate.eval({
//                    Name: this.data[i].Name,
//                    Value: i
//                }));
//            }

//            延时多少毫秒执行函数
//            this.showTimer = FunctionExt.defer(function() {
//                // ...执行逻辑
//                clearTimeout(this.showTimer);
//                this.showTimer = null;
//            }, 600, this);

//            异步调用
//            elongAjax.callBack(requestUrl, args, clientCallBack, enabledCache, httpmethod, submitButton, dataType) 
//            如：
//            elongAjax.callBack("/getuserinfo.aspx", {userid: 2342, code:22342}, function(res){
//                if(res.success){
//                    alert(res.value);
//                }
//            }.bind(this));

//            //参数： uid登陆名，pwd密码，vcode需要验证码时传入验证码
//            //返回res: {"CardNoList":常用卡号集,"IsShowVCode":是否需要输入验证码,
//            //           "MemberLoginCode":登陆结果码,SelectedCardNo:多个卡号时用户选择的卡号}
//            Elong.login(uid, pwd, vcode, function(res) {
//                if (res.MemberLoginCode != 1 && res.IsShowVCode) {
//                    //显示验证码输入框
//                }
//                switch (res.MemberLoginCode) {
//                    case 1: break;
//                    case 100: break; // 登录名不存
//                    case 101: break; // 登录密码错误
//                    case 102: break; // 匹配了多个用户名,而且用户没有选择卡号
//                    case 103: break; // 用户已经被冻结或取消
//                    case 104: break; // 验证码错误
//                    default: break; //未知错误
//                }
//            } .bind(this));
//=============================================================================

//记录js开始加载的时间
if (typeof (tj_jsStartTime) == "undefined" || tj_jsStartTime == null) {
    var tj_jsStartTime = new Date().getTime();
}
///////////////////// Class Begin /////////////////////////////////
Function.prototype.bind = function () {
    var __method = this, args = Array.from(arguments), object = args.shift();
    return function () {
        if (typeof Array.from == 'function') {
            return __method.apply(object, args.concat(Array.from(arguments)));
        }
    }
};

Function.prototype.bindAsEventListener = function (object) {
    var __method = this, args = Array.from(arguments), object = args.shift();
    return function (event) {
        if (typeof Array.from == 'function') {
            return __method.apply(object, [event || window.event].concat(args));
        }
    }
};

var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments);
        };
    }
};

Object.extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};

Object.clone = function (obj) {
    var objClone;
    if (Object.isNull(obj)) { return null; }
    if (obj.constructor == Object) { objClone = new obj.constructor(); }
    else { objClone = new obj.constructor(obj.valueOf()); }
    for (var key in obj) {
        if (objClone[key] != obj[key]) {
            if (typeof (obj[key]) == 'object') {
                objClone[key] = Object.clone(obj[key]);
            }
            else {
                objClone[key] = obj[key];
            }
        }
    }
    objClone.toString = obj.toString;
    objClone.valueOf = obj.valueOf;
    return objClone;
};

Object.isNull = function (obj) {
    return typeof (obj) == "undefined" || obj == null;
};

Array.from = function (iterable) {
    if (!iterable) return [];
    if (iterable.toArray) {
        return iterable.toArray();
    } else {
        var results = [];
        for (var i = 0, length = iterable.length; i < length; i++)
            results.push(iterable[i]);
        return results;
    }
};

////////////////////////////////////////// string ext/////////////////////////////////
Object.extend(String, {
    interpret: function (value) {
        return value == null ? '' : String(value);
    },
    specialChar: {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '\\': '\\\\'
    }
});

Object.extend(String.prototype, {
    trim: function () {
        return this.replace(/(^[\s　]*)|([\s　]*$)/g, "");
    },

    lTrim: function () {
        return this.replace(/(^[\s　]*)/g, "");
    },

    rTrim: function () {
        return this.replace(/([\s　]*$)/g, "");
    },

    bytelength: function () {
        var doubleByteChars = this.match(/[^\x00-\xff]/ig);
        return this.length + (doubleByteChars == null ? 0 : doubleByteChars.length);
    },

    cut: function (n) {
        if (n > this.length) {
            return this;
        }
        return this.substring(0, n);
    },

    formatWithWBR: function () {
        var args = arguments, size = 10;
        if (args.length > 0) {
            var argument = parseInt(args[0]);
            if (!isNaN(argument) && argument > 0) {
                size = argument;
            }
        }
        var text = this, output = [], start = 0, rowStart = 0, nextChar;
        for (var i = 1, count = text.length; i < count; i++) {
            nextChar = text.charAt(i);
            if (/\s/.test(nextChar)) {
                rowStart = i;
            } else {
                if ((i - rowStart) == size) {
                    output.push(text.substring(start, i));
                    output.push("<wbr>");
                    start = rowStart = i;
                }
            }
        }
        output.push(text.substr(start));
        return output.join("");
    },

    gsub: function (pattern, replacement) {
        var result = '', source = this, match;
        replacement = arguments.callee.prepareReplacement(replacement);

        while (source.length > 0) {
            if (match = source.match(pattern)) {
                result += source.slice(0, match.index);
                result += String.interpret(replacement(match));
                source = source.slice(match.index + match[0].length);
            } else {
                result += source, source = '';
            }
        }
        return result;
    },

    sub: function (pattern, replacement, count) {
        replacement = this.gsub.prepareReplacement(replacement);
        count = count === undefined ? 1 : count;

        return this.gsub(pattern, function (match) {
            if (--count < 0) return match[0];
            return replacement(match);
        });
    },

    scan: function (pattern, iterator) {
        this.gsub(pattern, iterator);
        return this;
    },

    truncate: function (length, truncation) {
        length = length || 30;
        truncation = truncation === undefined ? '...' : truncation;
        return this.length > length ?
      this.slice(0, length - truncation.length) + truncation : this;
    },

    strip: function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    },

    stripTags: function () {
        return this.replace(/<\/?[^>]+>/gi, '');
    },

    stripScripts: function () {
        return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
    },

    extractScripts: function () {
        var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
        var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
        return (this.match(matchAll) || []).map(function (scriptTag) {
            return (scriptTag.match(matchOne) || ['', ''])[1];
        });
    },

    evalScripts: function () {
        return this.extractScripts().map(function (script) { return eval(script) });
    },

    escapeHTML: function () {
        var self = arguments.callee;
        self.text.data = this;
        return self.div.innerHTML;
    },

    unescapeHTML: function () {
        var div = document.createElement('div');
        div.innerHTML = this.stripTags();
        return div.childNodes[0] ? (div.childNodes.length > 1 ?
      $A(div.childNodes).inject('', function (memo, node) { return memo + node.nodeValue }) :
      div.childNodes[0].nodeValue) : '';
    },

    toQueryParams: function (separator) {
        var match = this.strip().match(/([^?#]*)(#.*)?$/);
        if (!match) return {};

        return match[1].split(separator || '&').inject({}, function (hash, pair) {
            if ((pair = pair.split('='))[0]) {
                var key = decodeURIComponent(pair.shift());
                var value = pair.length > 1 ? pair.join('=') : pair[0];
                if (value != undefined) value = decodeURIComponent(value);

                if (key in hash) {
                    if (hash[key].constructor != Array) hash[key] = [hash[key]];
                    hash[key].push(value);
                }
                else hash[key] = value;
            }
            return hash;
        });
    },

    toArray: function () {
        return this.split('');
    },

    toDate: function () {
        var re = /-?\d+/;
        try {
            var m = re.exec(this);
            var d = new Date(parseInt(m[0]));
            return d;
        }
        catch (e) {
            return null;
        }
    },

    succ: function () {
        return this.slice(0, this.length - 1) +
      String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
    },

    times: function (count) {
        var result = '';
        for (var i = 0; i < count; i++) result += this;
        return result;
    },

    camelize: function () {
        var parts = this.split('-'), len = parts.length;
        if (len == 1) return parts[0];

        var camelized = this.charAt(0) == '-'
      ? parts[0].charAt(0).toUpperCase() + parts[0].substring(1)
      : parts[0];

        for (var i = 1; i < len; i++)
            camelized += parts[i].charAt(0).toUpperCase() + parts[i].substring(1);

        return camelized;
    },

    capitalize: function () {
        return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
    },

    underscore: function () {
        return this.gsub(/::/, '/').gsub(/([A-Z]+)([A-Z][a-z])/, '#{1}_#{2}').gsub(/([a-z\d])([A-Z])/, '#{1}_#{2}').gsub(/-/, '_').toLowerCase();
    },

    dasherize: function () {
        return this.gsub(/_/, '-');
    },

    inspect: function (useDoubleQuotes) {
        var escapedString = this.gsub(/[\x00-\x1f\\]/, function (match) {
            var character = String.specialChar[match[0]];
            return character ? character : '\\u00' + match[0].charCodeAt().toPaddedString(2, 16);
        });
        if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
        return "'" + escapedString.replace(/'/g, '\\\'') + "'";
    },

    toJSON: function () {
        return this.inspect(true);
    },

    unfilterJSON: function (filter) {
        return this.sub(filter || Prototype.JSONFilter, '#{1}');
    },

    isJSON: function () {
        var str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
        return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
    },

    evalJSON: function (sanitize) {
        var json = this.unfilterJSON();
        try {
            if (!sanitize || json.isJSON()) return eval('(' + json + ')');
        } catch (e) { }
        throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
    },

    include: function (pattern) {
        return this.indexOf(pattern) > -1;
    },

    startsWith: function (pattern) {
        return this.indexOf(pattern) === 0;
    },

    endsWith: function (pattern) {
        var d = this.length - pattern.length;
        return d >= 0 && this.lastIndexOf(pattern) === d;
    },

    empty: function () {
        return this.trim() == '';
    },

    blank: function () {
        return /^\s*$/.test(this);
    }
});

String.isNullOrEmpty = function (str) {
    return str == undefined || str == null || str.empty();
};

String.format = function () {
    var args = arguments, argsCount = args.length;
    if (argsCount == 0) {
        return "";
    }
    if (argsCount == 1) {
        return args[0];
    }
    var reg = /{(\d+)?}/g, arg, result;
    if (args[1] instanceof Array) {
        arg = args[1];
        result = args[0].replace(reg, function ($0, $1) {
            return arg[parseInt($1)];
        });
    } else {
        arg = args;
        result = args[0].replace(reg, function ($0, $1) {
            return arg[parseInt($1) + 1];
        });
    }
    return result;
};

String.prototype.gsub.prepareReplacement = function (replacement) {
    if (typeof replacement == 'function') return replacement;
    var template = new Template(replacement);
    return function (match) { return template.evaluate(match) };
};

var Template = Class.create();
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
Template.prototype = {
    initialize: function (template, pattern) {
        this.template = template.toString();
        this.pattern = pattern || Template.Pattern;
    },

    eval: function (object) {
        return this.template.gsub(this.pattern, function (match) {
            var before = match[1];
            if (before == '\\') return match[2];
            return before + String.interpret(object[match[3]]);
        });
    }
};

/**
  SafetyUrl:用户检测url是否有注入的非法字符。
  var s = new SafetyUrl();
  s.checkUrl(url); //如果正常的url返回true，含有非法字符的返回fasle
  var tempUrl= s.replaceUrl(url); //将所有非法字符替换为空格
**/
var SafetyUrl = Class.create();

SafetyUrl.prototype = {

    checkUrl: function (url) {
        var reg = /.*<.*>.*/g;
        return !reg.test(url);
    }
    ,
    replaceUrl: function (url) {
        if (!String.isNullOrEmpty(url)) {
            var reg = /[<|>]/g;
            return url.replace(reg, "");
        }
        return "";
    }
};

/***
* StringBuilder
***/
function StringBuilder() {
    this.strings = [];
}

StringBuilder.prototype.append = function (text) {
    this.strings.push(text);
};

StringBuilder.prototype.toString = function () {
    if (arguments.length == 0) {
        return this.strings.join("");
    }
    else {
        return this.strings.join(arguments[0]);
    }
};

StringBuilder.prototype.clear = function () {
    this.strings.clear();
};

StringBuilder.prototype.backspace = function () {
    this.strings.pop();
};
/////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// Event ext/////////////////////////////////
if (!window.Event) {
    var Event = new Object();
}
Object.extend(Event, {
    KEY_BACKSPACE: 8,
    KEY_TAB: 9,
    KEY_RETURN: 13,
    KEY_ESC: 27,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    KEY_DELETE: 46,
    KEY_HOME: 36,
    KEY_END: 35,
    KEY_PAGEUP: 33,
    KEY_PAGEDOWN: 34,

    element: function (event) {
        return $(event.target || event.srcElement);
    },

    isLeftClick: function (event) {
        return (((event.which) && (event.which == 1)) ||
            ((event.button) && (event.button == 1)));
    },

    pointerX: function (event) {
        return event.pageX || (event.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft));
    },

    pointerY: function (event) {
        return event.pageY || (event.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop));
    },

    stop: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.returnValue = false;
            event.cancelBubble = true;
        }
    },

    // find the first node with the given tagName, starting from the
    // node the event was triggered on; traverses the DOM upwards
    findElement: function (event, tagName) {
        var element = Event.element(event);
        while (element.parentNode && (!element.tagName ||
        (element.tagName.toUpperCase() != tagName.toUpperCase())))
            element = element.parentNode;
        return element;
    },

    observers: false,

    _observeAndCache: function (element, name, observer, useCapture) {
        if (!this.observers) this.observers = [];
        if (element.addEventListener) {
            this.observers.push([element, name, observer, useCapture]);
            element.addEventListener(name, observer, useCapture);
        } else if (element.attachEvent) {
            this.observers.push([element, name, observer, useCapture]);
            element.attachEvent('on' + name, observer);
        }
    },

    unloadCache: function () {
        if (!Event.observers) return;
        for (var i = 0, length = Event.observers.length; i < length; i++) {
            Event.stopObserving.apply(this, Event.observers[i]);
            Event.observers[i][0] = null;
        }
        Event.observers = false;
    },

    observe: function (element, name, observer, useCapture) {
        element = $(element);
        useCapture = useCapture || false;

        if (name == 'keypress' &&
      (Prototype.Browser.WebKit || element.attachEvent))
            name = 'keydown';

        Event._observeAndCache(element, name, observer, useCapture);
    },

    stopObserving: function (element, name, observer, useCapture) {
        element = $(element);
        useCapture = useCapture || false;

        if (name == 'keypress' &&
        (Prototype.Browser.WebKit || element.attachEvent))
            name = 'keydown';

        if (element.removeEventListener) {
            element.removeEventListener(name, observer, useCapture);
        } else if (element.detachEvent) {
            try {
                element.detachEvent('on' + name, observer);
            } catch (e) { }
        }
    }
});
/////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// Globals function//////////////////////////
var Globals = {
    //Add By Andy
    //For ManageHeader
    ScriptContentFragment: '<script.*?>((\n|\r|.)*?)<\/script>',
    //<script.*?src=\"((\n|\r|.)*?)\"><\/script>
    ScriptSrcFragment: '<script.*?src=\"([\?=\/\.A-Za-z0-9_]*)\".*?><\/script>',

    //取得样式内容的正则表达式
    StyleContentFragment: '<style.*?>((\n|\r|.)*?)<\/style>',
    StyleHrefFragment: '<link.*?href=\"([\/\.A-Za-z0-9_]*)\".*?><\/link>',

    // 用于遮蔽IE6下弹出层下出现下拉框的情况, 返回添加的iframe元素；以便调用closeIE6Fliter
    addIE6Filter: function (width, height, left, top, zindex, isVisable) {
        var isVisb = Object.isNull(isVisable) ? false : isVisable;
        if (isVisb || $.browser.msie && $.browser.version < 7) {
            var filterTemplate = new Template("<iframe style=\"position: absolute; z-index: #{zindex}; width:#{width}px;height:#{height}px; top: #{top}px; left: #{left}px;border:0px solid #000;filter:alpha(opacity=0);-moz-opacity:0\" src=\"http://tj.elongstatic.com/t.gif\"></iframe>");
            return $(filterTemplate.eval({
                width: width + 2,
                height: height + 2,
                left: left,
                top: top,
                zindex: Object.isNull(zindex) ? 1 : zindex
            })).appendTo($("#m_contentend"));
        }
    },
    // 移除IE6的层遮蔽
    closeIE6Fliter: function (iframe) {
        if (!Object.isNull(iframe)) {
            iframe.remove();
            iframe = null;
        }
    },

    // 解决IE下下拉列表的bug：下拉列表内容超长时，下拉框自动伸缩
    registerSelectFixIE: function (selects) {
        if (!$.browser.msie) { return; }
        var show = function (evt) {
            var element = Event.element(evt);
            var isOpen = element.data("isOpen");
            if (!Object.isNull(isOpen) || isOpen) {
                return;
            }
            element.data("isOpen", true);

            var position = element.position();
            var oldWidth = element.width();

            var clone_selection = element.data("clone");
            if (clone_selection == null) {
                clone_selection = $("<select style='visibility:hidden'></select>").insertBefore(element);
                clone_selection.addClass(element[0].className);
                element.data("clone", clone_selection);
            }

            element.css("width", "auto");
            var newWidth = element.width();
            if (oldWidth >= newWidth) {
                element.css("width", oldWidth);
            }
            element.css("top", position.top + "px");
            element.css("left", position.left + "px");
            element.css("position", "absolute");
            element.css("z-index", "1000");
        };
        var close = function (evt) {
            var element = Event.element(evt);
            var isOpen = element.data("isOpen");
            if (isOpen) {
                var oldData = element.data("clone");
                element.css("position", "");
                element.css("width", oldData.css("width"));
                element.css("top", "");
                element.css("left", "");
                element.css("z-index", oldData.css("z-index"));
                element.data("isOpen", null);
                element.data("clone", null);
                oldData.remove();
            }
        };

        for (var i = 0; i < arguments.length; i++) {
            var select = arguments[i];
            select.bind("mousedown", function (evt) { show(evt); });
            select.bind("blur", function (evt) { close(evt); });
            select.bind("change", function (evt) { close(evt); });
        }
    },

    // 获取浏览器滚动条坐标
    getScrollPosition: function () {
        var pagePosition = { x: 0, y: 0 };
        if (typeof (window.pageYOffset) == 'number') {
            pagePosition.x = window.pageXOffset;
            pagePosition.y = window.pageYOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            pagePosition.x = document.body.scrollLeft;
            pagePosition.y = document.body.scrollTop;
        } else if (document.documentElement) {
            pagePosition.x = document.documentElement.scrollLeft;
            pagePosition.y = document.documentElement.scrollTop;
        }
        return pagePosition;
    },
    // 获取浏览器窗口大小
    browserDimensions: function () {
        var dimensions = { width: 0, height: 0 };
        if ($.browser.msie) {
            dimensions.height = document.documentElement.clientHeight;
            dimensions.width = document.documentElement.clientWidth;
        } else {
            dimensions.height = window.innerHeight;
            dimensions.width = document.width || document.body.offsetWidth;
        }
        return dimensions;
    },

    //获取请求参数
    getParam: function (paramName) {
        var params = this._getParams();
        if (Object.isNull(params)) {
            return "";
        }
        return params[paramName];
    },

    _getParams: function () {
        var o = {};
        var params = document.location.search.substr(1).split("&");
        if (String.isNullOrEmpty(params)) {
            return null;
        }
        for (var i = 0, count = params.length; i < count; i++) {
            try {
                var param = params[i].split("=");
                if (param.length < 2)
                    continue;
                o[param[0]] = param[1].Trim();

            }
            catch (e) { }
        }
        return o;
    },

    //拷贝到剪切板
    copyToClipboard: function (txt) {
        if (window.clipboardData) {
            window.clipboardData.clearData();
            window.clipboardData.setData("Text", txt);
            return true;
        }
        else if ($.browser.opera) {
            window.location = txt;
            return true;
        }
        else if ($.browser.mozilla) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

            }
            catch (e) {
                alert("你的firefox安全限制限制您进行剪贴板操作，请在地址栏输入: about:config 将signed.applets.codebase_principal_support设置为true之后重试");
                return false;
            }
            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if (!clip)
                return false;
            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if (!trans)
                return false;
            trans.addDataFlavor('text/unicode');
            var len = {};
            var str = Components.classes['@mozilla.org/supports-string;1'].createInstance(Components.interfaces.nsISupportsString);
            var copytext = txt;
            str.data = copytext;
            trans.setTransferData('text/unicode', str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip) //Should be clipid, RobertUn 080130
                return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
        //return true;
        return false;
    },

    //隐藏选择框
    hideSelect: function () {
        if ($.browser.msie) {
            var selectors = document.getElementsByTagName("SELECT");
            for (var i = 0, count = selectors.length; i < count; i++) {
                selectors[i].style.visibility = "hidden";
            }
        }
    },

    //显示选择框
    showSelect: function () {
        if ($.browser.msie) {
            var selectors = document.getElementsByTagName("SELECT");
            for (var i = 0, count = selectors.length; i < count; i++) {
                selectors[i].style.visibility = 'visible';
            }
        }
    },

    //动态加载Script文件，check参数表示是否检查重复，默认为true，相同url的js文件不会被重复加载
    loadScript: function (url, check) {
        if (arguments.length <= 1) {
            check = true;
        }
        var head = document.getElementsByTagName("head")[0];
        var hasCreated = false;
        var script = document.createElement("script");

        if (check) {
            script.type = "text/javascript";
            script.src = url;
            url = script.src;
            var old = jQuery("script[src='" + url + "']", head);
            if (old && old.size() > 0) {
                hasCreated = true;
            }
        }

        if (!hasCreated) {
            head.appendChild(script);
        }
        else {
            script = null;
        }
    },

    //动态加载Css文件，check参数表示是否检查重复，默认为true，相同url的css文件不会被重复加载
    loadCss: function (url, check) {
        if (arguments.length <= 1) {
            check = true;
        }
        var head = document.getElementsByTagName("head")[0];
        var hasCreated = false;

        if (check) {
            var oldCss = jQuery("link[href='" + url + "']", head);
            if (oldCss && oldCss.size() > 0) {
                hasCreated = true;
            }
        }

        if (!hasCreated) {
            var css = document.createElement("link");
            css.type = "text/css";
            css.rel = "stylesheet";
            css.href = url;
            head.appendChild(css);
        }
    },
    cookie: function (name, subName, value, options) {// Globals.cookie start
        /**
        * Cookie plugin
        *
        * Copyright (c) 2006 ziqiu.zhang 
        * Dual licensed under the MIT and GPL licenses:
        * http://www.opensource.org/licenses/mit-license.php
        * http://www.gnu.org/licenses/gpl.html
        *
        *修改历史:
        修改前: 读取时,如果没有子键对应的cookie，返回主键对应的cookie.
        修改后：读取时,如果没有子键对应的cookie, 返回"".
        修改人: jianbo.liu
        时  间: 2011/02/14

        修改前: 存cookie时，不支持按子键存cookie.
        修改后：存cookie时，按主键，子键存cookie都支持.
        修改人: jianbo.liu
        时  间: 2011/03/18


        * 使用举例：
        //注： 写入时，subName参数请传递空值或null
        //写入Cookies-值为字符串，即不包含子键
        Globals.cookie("singleKey", "", "singleKey-value", { expires: 1, path: "/", secure: false })
        //读取Cookies-根据主键
        alert("singleKey:" + Globals.cookie("singleKey"));

        //写入Cookies-值为对象，则每个属性名为子键的名称，属性值为子键值
        var subNameObj = { subName1: "aaa", subName2: "bbb", subName3: "ccc" };
        Globals.cookie("multiKey", "", subNameObj, { expires: 1, path: "/", secure: false });
        //读取Cookies-根据主键
        alert("multiKey:" + Globals.cookie("multiKey"));
        //读取Cookies-根据主键和子键
        alert("multiKey,subName1:" + Globals.cookie("multiKey", "subName1"));
        *
        */
        if (typeof value != 'undefined') { // name and value given, set cookie
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            // CAUTION: Needed to parenthesize options.path and options.domain
            // in the following expressions, otherwise they evaluate to undefined
            // in the packed version for some reason...
            var hostStr = window.location.host.split(".");
            var hostName = hostStr.length == 2 || hostStr.length == 3 ? String.format(";domain={0}.{1}", hostStr[hostStr.length - 2], hostStr[hostStr.length - 1]) : "";

            var path = options.path ? '; path=' + (options.path) : ';path=/';
            var domain = options.domain ? '; domain=' + (options.domain) : hostName;
            var secure = options.secure ? '; secure' : '';

            //获取要更新的cookie了键名称及值
            var newCookies = new Array();
            if (typeof value == "object" && String.isNullOrEmpty(subName)) {

                //If value is an object, each property will be a sub key;
                for (var tempValue in value) {
                    eval("var obj = {" + String.format("\"name\":\"{0}\",\"value\":\"{1}\"", tempValue, value[tempValue]) + "};");
                    newCookies.push(obj);
                }

            } else if (!String.isNullOrEmpty(subName)) {
                eval("var obj = {" + String.format("\"name\":\"{0}\",\"value\":\"{1}\"", subName, value) + "};");
                newCookies.push(obj);

            }

            //获取没更新前的cookie值
            var nowCookies = String.isNullOrEmpty(this.cookie(name)) ? "" : this.cookie(name);
            nowCookies = nowCookies.replace(/=.*?(&|$)/ig, function (word) {
                word = word.replace(/(=|&)/ig, "");
                return "=" + encodeURIComponent(word) + "&";
            });
            //循环每个键值，如果cookie中已经存在，那么用新值更新它 ，如果不存在那么添加一个新的cookie
            if (typeof value != "object" && String.isNullOrEmpty(subName)) {
                nowCookies = encodeURIComponent(value);
            } else {
                while (1) {
                    var newCookie = newCookies.pop();
                    if (newCookie == null || newCookie == "undefined") break;

                    var pattern = new RegExp(String.format("(^|&){0}=.*?(&|$)", newCookie.name), "gi");

                    if (pattern.test(nowCookies)) {
                        //cookie已经存在
                        if (!nowCookies.startsWith(newCookie.name + "=")) {
                            nowCookies = nowCookies.replace(pattern, "&" + String.format("{0}={1}", newCookie.name, encodeURIComponent(newCookie.value) + "&"));  //这里把&符也替换了，需要加上
                        } else {
                            nowCookies = nowCookies.replace(pattern, String.format("{0}={1}", newCookie.name, encodeURIComponent(newCookie.value) + "&"));  //这里把&符也替换了，需要加上
                        }
                    } else {
                        //cookie未存在
                        if (!nowCookies.endsWith("&") && !String.isNullOrEmpty(nowCookies))
                            nowCookies += "&";
                        nowCookies += String.format("{0}={1}", newCookie.name, encodeURIComponent(newCookie.value));
                    }
                }
            }
    
            nowCookies = SafetyUrl.prototype.replaceUrl(nowCookies);
            document.cookie = [name, '=', nowCookies, expires, path, domain, secure].join('');

        } else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                        //Search sub key
                        if (typeof subName != 'undefined' && subName != null && subName != "") {
                            var subCookies = cookieValue.toString().split('&');
                            var tmpCookies = "";
                            for (var j = 0; j < subCookies.length; j++) {
                                var subCookie = jQuery.trim(subCookies[j]);
                                if (subCookie.substring(0, subName.length + 1) == (subName + '=')) {
                                    tmpCookies = decodeURIComponent(subCookie.substring(subName.length + 1));
                                    break;
                                }
                            }
                            cookieValue = tmpCookies;
                        }

                        break;
                    }

                }
            }
            return cookieValue;
        }

    }, // Globals.cookie end
    searchObj: function (patternField, patternValue, searchData) {// Globals.searchObj start
        /* 
        patternField: string类型,匹配的字段名称
        patternValue: 任意类型,匹配的值，现在只支持字符串和数字。
        searchData:   数据源,一个集合对象。 
        使用举例： 
        var result = Globals.searchObj("CityThreeSign", "BJS", cityData);
        alert(result[0].CityNameEn);
        上面的例子。在cityData（城市数据对象）上查找CityThreeSign属性是BJS的对象，并以集合的形式返回。
        */
        var result = [];
        if (searchData) {
            var pat = patternField.split("|");
            for (var k = 0; k < pat.length; k++) {
                for (var i = 0; i < searchData.length; i++) {
                    var tempValue = null;
                    eval("tempValue = searchData[i]." + pat[k]);
                    patternValue = patternValue.replace(/[\s,\']+/g, "");

                    if (tempValue != null) {
                        tempValue = tempValue.replace(/[\s,\']+/g, "");
                        if (tempValue.toLowerCase() == encodeURIComponent(patternValue).toLowerCase() || tempValue.toLowerCase() == patternValue.toLowerCase())  // ||  tempValue.replace(/\s+/g, "").toLowerCase() == encodeURIComponent(patternValue.replace(/\s+/g, "")).toLowerCase())
                        {
                            result.push(searchData[i]);
                            continue;
                        }
                        if (decodeURIComponent(tempValue).indexOf("(") >= 0 || decodeURIComponent(tempValue).indexOf("（") >= 0) {
                            var tempLeft = decodeURIComponent(tempValue).replace(/\s+/g, "").replace(/[(,),（,）]/g, "|").split("|");
                            for (var j = 0; j < tempLeft.length; j++) {
                                if (!String.isNullOrEmpty(tempLeft[j]) && tempLeft[j].toLowerCase() == (patternValue).toLowerCase()) {
                                    //result.push(searchData[i]);
                                    break;
                                }
                            }
                            continue;
                        }

                    }
                }

            }
        }
        else {
            alert("Globals.searchObj方法没有检测到数据源参数：searchObj");
        }
        return result;
    }, // Globals.searchObj end

    /* 功能：时间比较函数，判断大于等于关系 */
    time_compare_head: function (time_h, time_m, str_time) {
        if (this.str_format(time_h) + ":" + this.str_format(time_m) >= str_time.toString()) {
            return true;
        }
        else {
            return false;
        }
    },

    /* 功能：时间比较函数，判断小于等于关系 */
    time_compare_tail: function (time_h, time_m, str_time) {
        if (this.str_format(time_h) + ":" + this.str_format(time_m) <= str_time.toString()) {
            return true;
        }
        else {
            return false;
        }
    },

    /* 功能：字符串不足两位在前面补0 */
    str_format: function (cStr) {
        if (new String(cStr).length <= 0) {
            return "";
        }

        if (new String(cStr).length == 1) {
            return "0" + cStr;
        }
        else {
            return cStr;
        }
    }
};

//扩展Globals对象，添加JSON解析的相关方法。可以使用Globals.toJSON将javascript对象格式化成JSON字符串。
//ziqiu.zhang 2009.12.10
(function ($) {
    function toIntegersAtLease(n)
    // Format integers to have at least two digits.
    {
        return n < 10 ? '0' + n : n;
    }

    Date.prototype.toJSON = function (date)
    // Yes, it polutes the Date namespace, but we'll allow it here, as
    // it's damned usefull.
    {
        return this.getUTCFullYear() + '-' +
             toIntegersAtLease(this.getUTCMonth()) + '-' +
             toIntegersAtLease(this.getUTCDate());
    };

    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
    var meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    };

    $.quoteString = function (string)
    // Places quotes around a string, inteligently.
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    {
        if (escapeable.test(string)) {
            return '"' + string.replace(escapeable, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };

    $.toJSON = function (o, compact) {
        var type = typeof (o);

        if (type == "undefined")
            return "undefined";
        else if (type == "number" || type == "boolean")
            return o + "";
        else if (o === null)
            return "null";

        // Is it a string?
        if (type == "string") {
            return $.quoteString(o);
        }

        // Does it have a .toJSON function?
        if (type == "object" && typeof o.toJSON == "function")
            return o.toJSON(compact);

        // Is it an array?
        if (type != "function" && typeof (o.length) == "number") {
            var ret = [];
            for (var i = 0; i < o.length; i++) {
                ret.push($.toJSON(o[i], compact));
            }
            if (compact)
                return "[" + ret.join(",") + "]";
            else
                return "[" + ret.join(", ") + "]";
        }

        // If it's a function, we have to warn somebody!
        if (type == "function") {
            throw new TypeError("Unable to convert object of type 'function' to json.");
        }

        // It's probably an object, then.
        var ret = [];
        for (var k in o) {
            var name;
            type = typeof (k);

            if (type == "number")
                name = '"' + k + '"';
            else if (type == "string")
                name = $.quoteString(k);
            else
                continue;  //skip non-string or number keys

            var val = $.toJSON(o[k], compact);
            if (typeof (val) != "string") {
                // skip non-serializable values
                continue;
            }

            if (compact)
                ret.push(name + ":" + val);
            else
                ret.push(name + ": " + val);
        }
        return "{" + ret.join(", ") + "}";
    };

    $.compactJSON = function (o) {
        return $.toJSON(o, true);
    };

    $.evalJSON = function (src)
    // Evals JSON that we know to be safe.
    {
        return eval("(" + src + ")");
    };

    $.secureEvalJSON = function (src)
    // Evals JSON in a way that is *more* secure.
    {
        var filtered = src;
        filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
        filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered))
            return eval("(" + src + ")");
        else
            throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
})(Globals);
/////////////////////////////////////////////////////////////////////////////////////
FunctionExt = {
    createCallback: function (functionObj/*args...*/) {
        // make args available, in function below
        var args = arguments;
        var method = functionObj;
        return function () {
            return method.apply(window, args);
        };
    },

    createDelegate: function (functionObj, obj, args, appendArgs) {
        var method = functionObj;
        return function () {
            var callArgs = args || arguments;
            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            } else if (typeof appendArgs == "number") {
                callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
                var applyArgs = [appendArgs, 0].concat(args); // create method call params
                Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
            }
            return method.apply(obj || window, callArgs);
        };
    },

    defer: function (functionObj, millis, obj, args, appendArgs) {
        var fn = this.createDelegate(functionObj, obj, args, appendArgs);
        if (millis) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    }
};
////////////////////////////////////////// Ajax function/////////////////////////////
var simpleAjax = {
 Max_Cache_Size: 10,
 cacheConent:
		{
		    data: {},
		    index: []
		},
 cache_key: null,
 callBack: function (requestUrl, args, clientCallBack, enabledCache, httpmethod, dataType) {
        var async = true;
        if (!clientCallBack || clientCallBack == null) {
            async = false;
        }
        var requestObj = {
            args: args,
            url: requestUrl,
            clientCallBack: clientCallBack,
            method: httpmethod
        };
        this.cache_key = requestUrl + args;
        //如果存在Cahche
        if (enabledCache) {
            if (!Object.isNull(this.cacheConent.data[this.cache_key])) {
                FunctionExt.defer(requestObj.clientCallBack, 1, null, [this.cacheConent.data[this.cache_key]]);
                return;
            }
        }
        requestObj.xmlhttp = jQuery.ajax({
            type: Object.isNull(httpmethod) ? "GET" : httpmethod,
            url: requestUrl,
            cache: Object.isNull(enabledCache) ? false : enabledCache,
            data: args,
            requestObj: requestObj,
            error: this.onError,
            //success: this.onSuccess,
            complete: this.onComplete,
            dataType: Object.isNull(dataType) ? "json" : dataType,
            timeout: 60000,
            success: function (data, textStatus) {
                this.cacheConent.data[this.cache_key] = data;
                this.cacheConent.index.unshift(this.cache_key);
                if (this.cacheConent.index.length > this.Max_Cache_Size) {
                    var del_cahce_key = this.cacheConent.index.pop();
                    delete this.cacheConent.data[del_cahce_key];
                }
                FunctionExt.defer(requestObj.clientCallBack, 1, null, [data]);
            } .bind(this)
        });
    },
      onError: function (XMLHttpRequest, textStatus, errorThrown) {
        FunctionExt.defer(this.requestObj.clientCallBack, 1, null, [{ success: false, status: textStatus, value: XMLHttpRequest.responseText}]);
    },

//    onSuccess: function (data, textStatus) {
//        FunctionExt.defer(this.requestObj.clientCallBack, 1, null, [data]);
//    },

    onComplete: function (XMLHttpRequest, textStatus) {
        if (!Object.isNull(this.requestObj)) {
            this.requestObj = null;
            delete this.requestObj;
        }
    }

};
var elongAjax = {
    requestQueue: [],
    /*Ajax请求
    *@args:对象{}
    *@clientCallBack:客户端回调的方法
    *@requestUrl:请求的URL
    *@enabledCache: true,false;
    *@isPipeFrist: ajax请求管道，值true:先发起请求有效后发起请求丢弃，false：先发起请求丢弃后发起有效
    */
    callBack: function (requestUrl, args, clientCallBack, enabledCache, httpmethod, isPipeFrist, dataType, timeout) {
        // 处理参数
        var m = requestUrl.indexOf("?");
        if (m > -1) {
            var queryString = requestUrl.substring(m + 1);
            var queryArray = queryString.split("&");
            var queryArgs;
            for (var i = 0; i < queryArray.length; i++) {
                var strArray = queryArray[i].split("=");
                if (strArray.length > 1) {
                    var isExist = false;
                    for (var arg in args) {
                        if (arg.toLowerCase() == strArray[0].toLowerCase()) {
                            isExist = true;
                        }
                    }
                    if (!isExist) {
                        args[strArray[0]] = strArray[1];
                    }
                }
            }
            requestUrl = requestUrl.substring(0, m);
        }

        // this.addOverlay(submitButton);
        isPipeFrist = Object.isNull(isPipeFrist) ? true : isPipeFrist;
        args = this.buildArgObject(Object.clone(args));
        
        //args = this.buildArgObject(args);
        var async = true;
        if (!clientCallBack || clientCallBack == null) {
            async = false;
        }
        var requestObj = {
            args: args,
            url: requestUrl,
            clientCallBack: clientCallBack,
            isPipeFrist: isPipeFrist,
            method: httpmethod,
            dequeue: this.dequeue.bind(this)
        };
        if (async) {
            if (isPipeFrist) {
                if (this.inQueue(requestObj)) { return; }
            } else {
                for (var i = this.requestQueue.length - 1; i >= 0; i--) {
                    if (requestObj.url == this.requestQueue[i].url && !Object.isNull(this.requestQueue[i].xmlhttp)) {
                        this.requestQueue[i].xmlhttp.abort();
                        this.dequeue(this.requestQueue[i]);
                        break;
                    }
                }
            }

            this.requestQueue.push(requestObj);
        }

        requestObj.xmlhttp = jQuery.ajax({
            type: Object.isNull(httpmethod) ? "GET" : httpmethod,
            url: requestUrl,
            cache: Object.isNull(enabledCache) ? false : enabledCache,
            data: args,
            requestObj: requestObj,
            error: this.onError,
            success: this.onSuccess,
            complete: this.onComplete,
            dataType: Object.isNull(dataType) ? "json" : dataType,
            timeout: Object.isNull(timeout) ? 30000 : timeout
        });
    },

    buildArgObject: function (obj, sourceObj, sourcekey) {
        if (sourceObj == null) { sourceObj = obj; }
        if (sourcekey == null) { sourcekey = ""; }

        for (var key in obj) {
            // 子function舍弃
            if ($.isFunction(obj[key])) {
                obj[key] = null;
                delete obj[key];
                // break;
                continue;
            }
            // 处理数组
            if ($.isArray(obj[key])) {
                for (var i = 0; i < obj[key].length; i++) {
                    if (typeof (obj[key][i]) == 'object') {
                        this.buildArgObject(obj[key][i], sourceObj, sourcekey + key + "[" + i + "].");
                    }
                    else {
                        var name = sourcekey + key + "[" + i + "]";
                        sourceObj[name] = obj[key][i];
                    }
                }
                obj[key] = null;
                delete obj[key];
            }
            // 处理子对象
            else if (typeof (obj[key]) == 'object') {
                this.buildArgObject(obj[key], sourceObj, sourcekey + key + ".");
                obj[key] = null;
                delete obj[key];
            }
            else {
                var name = isNaN(parseInt(key, 10)) ? sourcekey + key : sourcekey.substr(0, sourcekey.length - 1);
                sourceObj[name] = obj[key];
            }
        }
        return obj;
    },



    toQueryString: function (args) {
        if (Object.isNull(args)) { return ""; }

        var queryString = "";
        var parms = [];
        for (var key in args) {
            parms.push(key);
            parms.push("=");
            parms.push(encodeURIComponent(args[key]));
            parms.push("&");
        }
        queryString = parms.join("");
        return queryString;

        //        var queryString = "";
        //        if (args) {
        //            var parms = [];
        //            for (var i = 0, count = args.length; i < count; i++) {
        //                parms.push("&Ajax_CallBackArgument");
        //                parms.push(i);
        //                parms.push("=");
        //                parms.push(encodeURIComponent(args[i]));
        //            }
        //            queryString = parms.join("");
        //        }
        //        return queryString;
    },

    inQueue: function (requestObj) {
        if (this.requestQueue.length > 0) {
            var requestQueue = this.requestQueue, request = null;
            for (var i = 0, count = requestQueue.length; i < count; i++) {
                request = requestQueue[i];
                if (request == requestObj) {
                    return true;
                } else {
                    if (this.equal(request, requestObj)) {
                        return true;
                    }
                }
            }
        }

        return false;
    },

    dequeue: function (requestObj) {
        if (this.requestQueue.length > 0) {
            var requestQueue = this.requestQueue, request = null, index = -1;
            for (var i = 0, count = requestQueue.length; i < count; i++) {
                request = requestQueue[i];
                if (request == requestObj) {
                    index = i;
                    break;
                } else {
                    if (this.equal(request, requestObj)) {
                        index = i;
                        break;
                    }
                }
            }
            if (index >= 0) {
                requestQueue.splice(index, 1);
            }
        }
    },

    equal: function (request, requestObj) {
        if (request.url == requestObj.url && this.toQueryString(request.args) == this.toQueryString(requestObj.args)) {
            return true;
        }
        return false;
    },

    onError: function (XMLHttpRequest, textStatus, errorThrown) {
        FunctionExt.defer(this.requestObj.clientCallBack, 1, null, [{ success: false, status: textStatus, value: XMLHttpRequest.responseText}]);
    },

    onSuccess: function (data, textStatus) {
        FunctionExt.defer(this.requestObj.clientCallBack, 1, null, [data]);
    },

    onComplete: function (XMLHttpRequest, textStatus) {
        //this.removeOverlay(requestObj.submitButton);
        if (!Object.isNull(this.requestObj)) {
            this.requestObj.dequeue(this.requestObj);
            this.requestObj = null;
            delete this.requestObj;
        }
    },

    addOverlay: function (submitButton) {
        if (Object.isNull(submitButton)) {
            return;
        }
        var uniqueId = new Date().getTime();
        var overlayId = "submitOverlay_" + uniqueId;
        var container = submitButton.parentNode;
        var overlay = Element.extend(document.createElement("div"));
        overlay.id = overlayId;
        overlay.className = "submiting";
        $("contentEnd").appendChild(overlay);
        Position.clone(submitButton, overlay);
        submitButton._overlay = overlay;
    },

    removeOverlay: function (submitButton) {
        if (typeof submitButton === "undefined" || submitButton === null) {
            return;
        }
        if (submitButton._overlay) {
            $("contentEnd").removeChild(submitButton._overlay);
            submitButton._overlay = null;
        }
    }
}; 
/////////////////////////////////////////////////////////////////////////////////////
// 假Domready方法，即在调用时就会执行而不会等待到Dom加载完毕
function $ready(callback) {
    if (!Object.isNull(callback)) { callback(); }

}



/////////////////////////////////////////////////////////////////////////////////////
//==================================================================
// 文件名:		ElongCommon.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.Luo
// 创建日期:	2009-12-10
// 描述:		Elong整站业务公共脚本类
// 备注: 
// 示例代码：
//      tj发送请求：
//            Elong.sendTJ({
//                "DBItemName": "WebMSConnectionString",    // DaoConfig.config中相应数据库连接的Item名称，如果数据库为Log_Web，则不用传
//                "TableName": "FlowStatiData", // 数据库表名，必传
//                 "SessionGuid": Globals.cookie("SessionGuid") // 数据库字段名-值，有多个字段，则需传多次
//            });
////===================================================================

//给安全部门添加的神秘代码
var hex_chr = "0123456789abcdef";
function rhex(num) { str = ""; for (j = 0; j <= 3; j++) str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F); return str; } function str2blks_MD5(str) { nblk = ((str.length + 8) >> 6) + 1; blks = new Array(nblk * 16); for (i = 0; i < nblk * 16; i++) blks[i] = 0; for (i = 0; i < str.length; i++) blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8); blks[i >> 2] |= 0x80 << ((i % 4) * 8); blks[nblk * 16 - 2] = str.length * 8; return blks; } function add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF); } function rol(num, cnt) { return (num << cnt) | (num >>> (32 - cnt)); } function cmn(q, a, b, x, s, t) { return add(rol(add(add(a, q), add(x, t)), s), b); } function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); } function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); } function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); } function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); } function MD5(str) { x = str2blks_MD5(str); var a = 1732584193; var b = -271733879; var c = -1732584194; var d = 271733878; for (i = 0; i < x.length; i += 16) { var olda = a; var oldb = b; var oldc = c; var oldd = d; a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330); a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983); a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162); a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329); a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302); a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848); a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501); a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734); a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556); a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640); a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189); a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651); a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055); a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799); a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649); a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551); a = add(a, olda); b = add(b, oldb); c = add(c, oldc); d = add(d, oldd); } return rhex(b); }
function es() { var _0xb63bl0l8 = "\x41\x71\x75\x69\x63\x6b\x62\x72\x6f\x77\x6e\x66\x6f\x78\x6a\x75\x6d\x70\x6f\x76\x65\x72\x74\x68\x65\x6c\x61\x7a\x79\x64\x6f\x67"; var _0xf368907f = new \u0041\u0072\u0072\u0061\u0079(); var _Ox25e806c7 = ""; var _Ox5f6ce809 = ""; var _Ox22cd658f = 0; var _Ox22cd6590 = 0; var _Ox22cd659f = 0; var _0x6c89077f = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0xb); var _0x6c89078f = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0xb); for (_Ox25e806c5 = _Ox22cd6590; _Ox25e806c5 < 0x7; _Ox25e806c5++) _0x6c89077f += _0x6c89078f; _0xf368907f[_Ox22cd658f] = _0x6c89077f; _Ox22cd658f = _Ox22cd658f + 1; _Ox25e806c7 += "0001"; var _0xb63bl0l9 = "\x41\x71\x75\x69\x63\x6b\x62\x72\x6f\x77\x6e\x66\x6f\x78\x6a\x75\x6d\x70\x6f\x76\x65\x72\x74\x68\x65\x6c\x61\x7a\x79\x64\x6f\x67"; var _0x25e806c8 = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xa); _0x25e806c8 += "\x61"; var _0x25e806c9 = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x13); _0x25e806c9 += _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x3); _0x25e806c8 = _0x25e806c8 + _0x25e806c9; var _0xb63bl0lA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; _0x25e806c9 = _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x6); _0x25e806c9 += "at"; var _0x25e806ca = "\x74\x6f\x72\x6a\x75\x6d\x70\x6f\x76\x65"; _0x25e806ca = _0x25e806ca.\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006e\u0067(0x1, 0x3); _0x25e806c8 += _0x25e806c9 + _0x25e806ca; _0xf368907f[_Ox22cd658f] = _0x25e806c8; _Ox22cd658f = _Ox22cd658f + 1; var _0xa00fafef = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(26); _0xa00fafef += _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x11); _0xa00fafef += _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x11); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(39); _0xa00fafef += "am"; _0xa00fafef += _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x14); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0xc) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1e); _0xa00fafef += _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x5) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x3) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x18); _0xf368907f[_Ox22cd658f] = "\x45\x6e\x61\x62\x6c\x65\x64"; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef += _0xf368907f[_Ox22cd658f - 1]; _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0xf); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x1c) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xb) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x0) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x19) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1a) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x16); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x5) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xe) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xc); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x14) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x11); _0xa00fafef += _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x0) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1f) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x18) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xa) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x16); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xe) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1a) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x13) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x1a); _0xa00fafef += _0xf368907f[0x3]; _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x6) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x7) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x8) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x9); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x11); _0xa00fafff = "\x4c\x61\x6e\x67\x75\x61\x67\x65"; _0xa00fafef += _0xa00fafff; _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x14) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x11); _0xa00fafef += _0xa00fafff; _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x2) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xd); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x9) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x3) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x1d) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x16) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x17); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x17) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x14) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x3) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1f) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x17) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x16); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x3) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xd) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x14) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x19); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x1d) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xf) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x13) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x7); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x11) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x19) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xf) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1f); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x8) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xd) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x12); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x19) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x18) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0xa) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1f) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x16) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x17); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xd) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x0) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xc) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0xc) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1e); _0xa00fafef += _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x5) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x3) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x18); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _0xa00fafef = _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1d) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x1e) + _0xb63bl0l8.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0l9.\u0063\u0068\u0061\u0072\u0041\u0074(0x2); _0xa00fafef += _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xc) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x4) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0xd) + _0xb63bl0lA.\u0063\u0068\u0061\u0072\u0041\u0074(0x13); _0xf368907f[_Ox22cd658f] = _0xa00fafef; _Ox22cd658f = _Ox22cd658f + 1; _Ox22cd659f += 1; var _0x7680ff3c = \u0077\u0069\u006e\u0064\u006f\u0077[_0xf368907f[_Ox22cd659f]]; _Ox22cd659f += 1; var _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 2; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf != "\x55\x6e\x64\x65\x66\x69\x6e\x65\x64") { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]](); if (_0x7680ff3c[_0xf368907f[0x2]] == "\x4d\x69\x63\x72\x6f\x73\x6f\x66\x74 \x49\x6e\x74\x65\x72\x6e\x65\x74 \x45\x78\x70\x6c\x6f\x72\x65\x72") { var _0xc5b124af = new \u0041\u0063\u0074\u0069\u0076\u0065\u0058\u004f\u0062\u006a\u0065\u0063\u0074('\x53\x68\x6f\x63\x6b\x77\x61\x76\x65\x46\x6c\x61\x73\x68\x2e\x53\x68\x6f\x63\x6b\x77\x61\x76\x65\x46\x6c\x61\x73\x68'); } else { var _0xc5b124af = _0x7680ff3c[_0xf368907f[0xf]]["\x53\x68\x6f\x63\x6b\x77\x61\x76\x65 \x46\x6c\x61\x73\x68"]; } if (_0xc5b124af) _0x0105ecbf += "\x74\x72\x75\x65"; else _0x0105ecbf += "\x66\x61\x6c\x73\x65"; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; _Ox22cd659f += 1; _0x0105ecbf += _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 1; var _0x0105eaaf = \u0077\u0069\u006e\u0064\u006f\u0077[_0xf368907f[_Ox22cd659f]]; _0x0105ecbf = _0x0105eaaf[_0xf368907f[_Ox22cd659f + 1]] + ""; _0x0105ecbf += _0x0105eaaf[_0xf368907f[_Ox22cd659f + 2]] + ""; _0x0105ecbf += _0x0105eaaf[_0xf368907f[_Ox22cd659f + 3]] + ""; _0x0105ecbf += _0x0105eaaf["\x64\x65\x76\x69\x63\x65\x58\x44\x50\x49"] + ""; _0x0105ecbf += _0x0105eaaf["\x64\x65\x76\x69\x63\x65\x59\x44\x50\x49"] + ""; if (_0x0105ecbf) { _Ox5f6ce809 = MD5(_0x0105ecbf); } else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; var _0xf32776d1 = new \u0044\u0061\u0074\u0065(); var _0xf32776d2 = _0xf32776d1.\u0067\u0065\u0074\u0054\u0069\u006d\u0065\u007a\u006f\u006e\u0065\u004f\u0066\u0066\u0073\u0065\u0074(); if (_0xf32776d2) _Ox5f6ce809 = MD5(_0xf32776d2); else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; _Ox22cd659f += 4; _0x0105ecbf = _0x7680ff3c[_0xf368907f[_Ox22cd659f]]; var _0xa0cc320e = _0x0105ecbf[_0xf368907f[_Ox22cd659f + 1]]; var _Oxaa46875f = ""; for (_Ox25e806c8 = 0; _Ox25e806c8 < _0x0105ecbf[_0xf368907f[_Ox22cd659f + 1]]; _Ox25e806c8++) _Oxaa46875f += _0x0105ecbf[_Ox25e806c8][_0xf368907f[_Ox22cd659f + 2]]; if (_Oxaa46875f) _Ox5f6ce809 = MD5(_Oxaa46875f); else _Ox5f6ce809 = _0xf368907f[_Ox22cd6590]; _Ox25e806c7 += _Ox5f6ce809; var _0x77ea5c6f = _0xf32776d1.\u0067\u0065\u0074\u0054\u0069\u006d\u0065(); _0x77ea5c6f += ""; _0x77ea5c6f = _0x77ea5c6f.\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006e\u0067(_0x77ea5c6f.\u006c\u0065\u006e\u0067\u0074\u0068 - 8); _Ox25e806c7 += _0x77ea5c6f; var _Ox578edcf = MD5(_Ox25e806c7); _Ox22cd659f += 4; _0x7680ff3c = \u0077\u0069\u006e\u0064\u006f\u0077[_0xf368907f[_Ox22cd659f]]; _0x7680ff3c[_0xf368907f[_Ox22cd659f - 1]] = "es_s=" + MD5(_Ox578edcf); _Ox22cd659f += 1; _0xf368907f[_Ox22cd659f] = _Ox25e806c7 + _Ox578edcf; return (_0xf368907f[0x14]); }


var Elong = {
    version: '0.1',
    author: "zhi.luo",

    renderAds: function () {
        var region = $("#m_adsContainer");
        if (region.length == 0) return;

        var reg = /<script.*>(.|\n)*<\/script>/i;
        for (var i = 0; i < region.children().length; i++) {
            var adsNode = region.children().eq(i);
            var adsName = adsNode.attr("name");
            if (String.isNullOrEmpty(adsName) || $("#" + adsName).length == 0)
                continue;

            var content = adsNode.html();
            adsNode.find(":descendant").each(function () {
                if (!$(this).is("script"))
                { $(this).remove(); }
            });
            var adsContent = content.replace(reg, "");

            if (String.isNullOrEmpty(adsContent))
                $("#" + adsName).hide();
            else
                $("#" + adsName).html(adsContent);
        }
    },

    // 流量统计
    flowStatiData: function () {
        if (location.href.length > 5) {
            if (location.href.substring(0, 5) == "https") { return; }
        }
        // referHost、referQueryString、referPage
        var referHost = "";
        var referQueryString = "";
        var referrer = document.referrer.toLowerCase();
        var referPage = referrer;
        var m = referrer.indexOf("?");
        if (m > -1) {
            referPage = referrer.substring(0, m);
            referQueryString = referrer.substring(m + 1);
        }
        if (referPage.length > 7) {
            referHost = referPage.substring(7);
            var n = referHost.indexOf("/");
            if (n > -1) { referHost = referHost.substring(0, n); }
            referPage = referPage.substring(7 + referHost.length);
        }
        var currentPage = location.pathname.toLowerCase();
        var currentQueryString = location.search.toLowerCase();
        if (currentQueryString.length > 1) { currentQueryString = currentQueryString.substr(1); }
        if (currentQueryString.indexOf("flowstati") == -1 && referHost.indexOf(".elong.") > -1) {
            return;
        }

        // ReferType类型
        var eReferType = {
            seo: "seo", sem: "sem", campaign: "campaign", other: "other",
            redirect_edm: "redirect_edm", redirect_other: "redirect_other", elong: "elong"
        };
        // 七大搜索引擎
        var searchEngineArray = ".google.,.baidu.,.soso.,.sogou.,.youdao.,.bing.,.yahoo.".split(",");

        // referType、statiData
        var referType = "";
        var statiData = "";
        if (currentQueryString.indexOf("flowstati") > -1) {
            // 记录经过redirect.aspx页面的数据
            var flowStatiArray = Elong.getQueryStringParams(currentQueryString, "flowstati").split("_");
            referType = eReferType.redirect_other;
            if (flowStatiArray[0] == "edm") { referType = eReferType.redirect_edm; }
            if (flowStatiArray.length > 1) { statiData = flowStatiArray[1]; }
        }
        else if (referHost.indexOf(".elong.") == -1) {
            // refer不是elong的记下
            if (currentQueryString.indexOf("campaign_id") > -1) {
                statiData = Elong.getQueryStringParams(currentQueryString, "campaign_id");
                referType = eReferType.campaign;
            }
            else if (String.isNullOrEmpty(referHost)) {
                statiData = "elong";
                referType = eReferType.elong;
            }
            else {
                statiData = referHost;
                referType = eReferType.other;
                for (var i = 0; i < searchEngineArray.length; i++) {
                    if (referHost.indexOf(searchEngineArray[i]) > -1) {
                        referType = eReferType.seo;
                        if (currentQueryString.indexOf("semid") > -1) { referType = eReferType.sem; }
                        break;
                    }
                }
            }
        }

        Elong.sendTJ({
            "TableName": "FlowStatiData",
            "SessionGuid": Globals.cookie("SessionGuid"),
            "ReferType": referType,
            "StatiData": statiData,
            "ReferHost": referHost,
            "ReferPage": referPage,
            "CurrentHost": location.hostname,
            "CurrentPage": currentPage,
            "CookieGuid": Globals.cookie("CookieGuid"),
            "ReferQueryString": encodeURIComponent(referQueryString),
            "CurrentQueryString": encodeURIComponent(currentQueryString)
        });
    },

    // 获取QueryString的参数
    getQueryStringParams: function (queryString, paramName) {
        var paramValue = "";
        var qsArray = queryString.split("&");
        for (var i = 0; i < qsArray.length; i++) {
            var paramArray = qsArray[i].split("=");
            if (paramArray[0] == paramName && paramArray.length > 1) {
                paramValue = paramArray[1];
                break;
            }
        }
        return paramValue;
    },

    // 页面加载后的Elong用户行为统计代码方法
    tj: function (isHttps) {
        //onload事件之后发送tj请求，以便准确收集html5 performance.timing中的属性值 
        window.onload = function () {
            this.sendTjDefer(isHttps);
        } .bind(this);
    },

    sendTjDefer: function (isHttps) {

        // 页面参数自定义变量mapping
        var parmsTJ = {
            channel: "ch",
            pagetype: "pt",
            orderfrom: "p1",

            //Html5 Resource.Timing属性
            re_startTime: "p70",
            re_domainLookupEnd: "p71",
            re_domainLookupStart: "p72",
            re_duration: "p73",
            re_fetchStart: "p74",
            re_initiatorType: "p75",
            re_urlName: "p76",
            re_redirectEnd: "p77",
            re_redirectStart: "p78",
            re_requestStart: "p79",
            re_responseEnd: "p80",
            re_responseStart: "p81",
            re_connectEnd: "p82",
            re_connectStart: "p83",
            re_secureConnectionStart: "p84",

            //用于记录CDN的IP
            cdnIp: "p85",

            //Html5 Performance.timing属性
            fetchStart: "p88",
            domainLookupStart: "p89",
            domainLookupEnd: "p90",
            connectStart: "p91",
            connectEnd: "p92",
            requestStart: "p93",
            responseStart: "p94",
            responseEnd: "p95",
            domLoading: "p96",
            domContentLoadedEventEnd: "p97",
            tj_jsStartTime: "p98",
            loadEventStart: "p99",
            browserInfoStr: "p100"
        };

        var args = this.createTJArgs();

        // render time
        if (typeof (tjObj_rt) != "undefined" && !Object.isNull(tjObj_rt) &&
            typeof (tjObj_rt2) != "undefined" && !Object.isNull(tjObj_rt2)) {
            var rendTime = tjObj_rt2 - tjObj_rt;
            args.rt = rendTime;
            rendTime = new Date() - tjObj_rt2;
            args.jst = rendTime;
        }

        //Html5 Performance.timing属性 赋值
        if (typeof (tjObj) != "undefined" && !Object.isNull(tjObj)) {
            if (!Object.isNull(window.performance) && !Object.isNull(window.performance.timing)) {
                tjObj.fetchStart = window.performance.timing.fetchStart;
                tjObj.domainLookupStart = window.performance.timing.domainLookupStart;
                tjObj.domainLookupEnd = window.performance.timing.domainLookupEnd;
                tjObj.connectStart = window.performance.timing.connectStart;
                tjObj.connectEnd = window.performance.timing.connectEnd;
                tjObj.requestStart = window.performance.timing.requestStart;
                tjObj.responseStart = window.performance.timing.responseStart;
                tjObj.responseEnd = window.performance.timing.responseEnd;
                tjObj.domLoading = window.performance.timing.domLoading;
                tjObj.domContentLoadedEventEnd = window.performance.timing.domContentLoadedEventEnd;
                tjObj.tj_jsStartTime = tj_jsStartTime;
                tjObj.loadEventStart = window.performance.timing.loadEventStart;
                tjObj.browserInfoStr = es();
            }

            //add by chengxiang 收集页面静态资源响应信息 先只收集El_common.css的信息
            this.collectStaResInfo();

        }

        // 页面自定义参数p1-p100
        if (typeof (tjObj) != "undefined" && !Object.isNull(tjObj)) {
            for (var key in tjObj) {
                // 将在自定义参数申明的值，赋值到args
                var p = parmsTJ[key];
                if (!Object.isNull(p)) {
                    args[p] = tjObj[key];
                }
                else if (key.toString().substr(0, 1) == "m") {
                    args[key] = tjObj[key];
                }
                else if ($.browser.mozilla) {
                    window.console.warn(String.format("Elong行为统计警告：页面统计参数{0}未注册！", key));
                }
            }
        }

        this.sendNewTJ(args, isHttps);
    },

    // Elong页面事件统计方法
    evTJ: function (eventName, args, isHttps) {
        var parmsTJ = {
            webjserror: { host: "e1", errline: "e2", errurl: "e3", errmsg: "e4", browser: "e5" },
            hotelsearchcn: { keyword: "e1", length: "e2" },
            securepay: { pagename: "e1", channeltype: "e2", clientguid: "e3", sessionid: "e4", orderfromid: "e5", orderid: "e6", paytoken: "e7", eventsource: "e8", eventid: "e10", logtime: "e11", businesscode: "e12", clientip: "e13", serverip: "e14" },
            //搜索条件采集 pagetype=index-酒店首页；list-列表页；detail-详细,poitype=1-商业区，2-行政区，3-poi，clickobject:1-点击搜索；2-点击价格；3-点击位置，4-点击星级，5-点击品牌，6-点击翻页，7-自动翻页 
            searchgather: { pagetype: "e1", cityid: "e2", cityname: "e3", checkindate: "e4", checkoutdate: "e5", keyword: "e6", pageindex1: "e7", pageindex2: "e8", poitype: "e9", poiid: "e10", poiname: "e11", lowprice: "e12", highprice: "e3", starlevel: "e14", brandid: "e15", brandname: "e16", clickobject: "e17", hotelid: "e18", hotelname: "e19" },
            //收藏酒店点击采集，pagetype:list-列表页；detail-详细页 
            favaritegather: { pagetype: "e1", hotelid: "e2", hotelname: "e3" },
            //点击预订按钮数据采集 
            bookgather: { hotelid: "e1", hotelname: "e2", shotelid: "e3", roomid: "e4", roomname: "e5", sroomid: "e6", rpid: "e7", price: "e8", checkindate: "e9", checkoutdate: "e10" },
            //浏览地图和点评数据采集，browsertype=1-地图;2-点评；3-看了**酒店的人也看了；m1-对应点评页码（看了的酒店id）,m2-备用 
            browsergather: { hotelid: "e1", hotelname: "e2", browsertype: "e3", m1: "e4", m2: "e5", checkindate: "e6", checkoutdate: "e7" },
            //预订页面点击行为采集，clicktype=1:继续或完成；2-关闭退出 
            bookpagegather: { hotelid: "e1", hotelname: "e2", roomid: "e3", roomname: "e4", rpid: "e5", clicktype: "e6", checkindate: "e7", checkoutdate: "e8" },
            //预订完成采集
            bookfinishgather: { hotelid: "e1", hotelname: "e2", roomid: "e3", roomname: "e4", rpid: "e5", checkindate: "e6", checkoutdate: "e7", orderid: "e8", orderfromid: "e9" },
            //pagetype myelong_order_list,myelong_order_detail 
            cancelorder: { orderid: "e1", reason: "e2", checkindate: "e3", hotelid: "e4", pagetype: "e5", paymenttype: "e6", checkoutdate: "e7" },
            hotelClickDot: { action: "e1", pt: "e2", pageno: "e3", area: "e4", spot: "e5", extended: "e6" },
            hotelShowDot: { action: "e1", pt: "e2", pageno: "e3", area: "e4", spots: "e5", extended: "e6" }
        };
        if (Object.isNull(parmsTJ[eventName]) && window.console) {
            window.console.warn(String.format("Elong行为统计警告：事件统计名{0}类未注册！", eventName));
            return;
        }
        var evArgs = this.createTJArgs();
        evArgs.ev = eventName;

        // 事件自定义参数e1-e100
        if (!Object.isNull(args)) {
            for (var key in args) {
                // 将在自定义参数申明的值，赋值到args
                var e = parmsTJ[eventName][key];
                if (!Object.isNull(e)) {
                    evArgs[e] = args[key];
                }
                else if ($.browser.mozilla) {
                    window.console.warn(String.format("Elong行为统计警告：事件统计{0}类参数{1}未注册！", eventName, key));
                }
            }
        }

        this.sendNewTJ(evArgs, isHttps);
    },

    // 公共统计参数初始化
    createTJArgs: function () {
        var refUrl = document.referrer;
        if (!String.isNullOrEmpty(refUrl)) {
            refUrl = refUrl.length > 300 ? refUrl.substr(0, 300) : refUrl;
            refUrl = encodeURIComponent(refUrl.toLowerCase());
        }
        var args = {
            g: Math.random().toString().substr(2, 5),
            cid: Globals.cookie("CookieGuid"),
            sid: Globals.cookie("SessionGuid"),
            rf: refUrl,
            bs: String.format("{0}*{1}", screen.width, screen.height)
        };
        return args;
    },

    // 统一发送tj请求
    sendNewTJ: function (args, isHttps) {
        var queryString = "";
        for (var key in args) {
            queryString = queryString + "&" + key + "=" + args[key];
        }
        if (!String.isNullOrEmpty(queryString)) {
            queryString = queryString.substring(1);
        }

        var img = document.createElement("img");
        var strUrl = Object.isNull(isHttps) ? "http://tj.elongstatic.com/t.gif?" : "https://secure.elong.com/t.gif?";
        img.setAttribute("src", strUrl + queryString);
        img.setAttribute("style", "display:none;");
        if ($("#m_contentend").length > 0) {
            $("#m_contentend").append(img);
        }
        else {
            $("body").append(img);
        }
    },

    // 统一发送tj请求
    sendTJ: function (args) {
        var queryString = "";
        for (var key in args) {
            queryString = queryString + "&" + key + "=" + args[key];
        }
        if (!String.isNullOrEmpty(queryString)) {
            queryString = queryString.substring(1);
        }

        var img = document.createElement("img");
        img.setAttribute("src", "http://tj.elong.com/statistics.gif?" + queryString);
        if ($("#m_contentend").length > 0) {
            $("#m_contentend").append(img);
        }
        else {
            $("body").append(img);
        }
    },

    //统一获取用户信息方法
    GetUserInfo: function (callback) {
        var params = {
            actiondo: "GetMemberNameInfo",
            loginname: "",
            pwd: "",
            vcode: "",
            isrememberme: false
        };

        var host = "my.elong.com";
        var arr = window.location.host.split(".");
        if (arr.length >= 2) { host = String.format("my.{0}.{1}", arr[arr.length - 2], arr[arr.length - 1]); }
        var language = window.location.host.toLowerCase().indexOf(".net") >= 0 ? "en" : "cn";
        var loginUrl = String.format("http://{0}/loginproxy_{1}.html", host, language);
        if (window.location.host.toLowerCase().indexOf("travel.elong") >= 0 || window.location.host.toLowerCase().indexOf("travel.net") >= 0) {
            loginUrl = String.format("http://{0}/my/loginproxy_{1}.html", window.location.host, language);
        }
        elongAjax.callBack(loginUrl, params, function (res) {
            callback(res);
        } .bind(this), false, "GET", null, "jsonp");
    },
    // 统一登录方法
    login: function (uid, pwd, vcode, callback, cardno, isEn, isrememberme) {
        var params = { actiondo: String.isNullOrEmpty(cardno) ? String.isNullOrEmpty(uid) && String.isNullOrEmpty(pwd) ? "nocardbooking" : "login" : "cardLogin",
            loginname: uid,
            pwd: pwd,
            vcode: vcode,
            cardno: cardno,
            isrememberme: isrememberme,
            sguid: Globals.cookie("SessionGuid"),
            cguid: Globals.cookie("CookieGuid")
        };

        var host = "secure.elong.com";
        var language = window.location.host.toLowerCase().indexOf(".net") >= 0 ? "en" : "cn";
        var loginUrl = String.format("https://{0}/epay/my/sloginproxy_{1}.html", host, language);
        elongAjax.callBack(loginUrl, params, function (res) {
            // 登录操作后把状态为清0
            Globals.cookie("SessionSub", "LoginRefresh", "0");
            //匹配了多个用户名，表示多张艺龙卡号，需要用户选择
            if (res.MemberLoginCode == 102 && !Object.isNull(res.MemberCardList) && res.MemberCardList.length > 0) {
                var sb = new StringBuilder();
                var temp = !isEn ? new Template("<div>我们查找到了您的会员记录，请选择一张您常用的卡，我们将把订单记在此卡号下，可享受艺龙积分换礼品。</div><div  class='com_dialog-content com_widget-content'><div class='UserInfo'><table width='100%' border='0' cellspacing='0' cellpadding='0' class='n_table'><tr> <th width='49%'>艺龙卡号</th><th width='30%'>会员等级</th><th width='21%'>积分</th></tr>#{list}<tr><td colspan='3' class='tc'><input type='button'  mtd='ok' class='com_search75'  value='设为常用卡' />&nbsp;<a href='#?' class='' mtd='cancel'>取消</a></td></tr></table></div></div>") :
                                new Template("<div>We find you have several accounts, please choose the one you want to use from below. </div><div  class='com_dialog-content com_widget-content'><div class='UserInfo'><table width='100%' border='0' cellspacing='0' cellpadding='0' class='n_table'><tr> <th width='49%'>Card</th><th width='30%'>Member Level</th><th width='21%'>Member Points</th></tr>#{list}<tr><td colspan='3' class='tc'><input type='button'  mtd='ok' class='com_search75'  value='Save' />&nbsp;<a href='#?' class='' mtd='cancel'>Cancel</a></td></tr></table></div></div>");
                for (var i = 0; i < res.CardNoList.length; i++) {
                    sb.append(String.format("<tr><td><input type='radio' value='{0}' name='cd'>{0}</td><td>{1}</td> <td>{2}</td></tr>", res.MemberCardList[i].CardNo, res.MemberCardList[i].Memlevel, res.MemberCardList[i].MemberPoints));
                }
                $("#header span[method='login'] input").show();
                $("#header span[method='login'] input").attr("disabled", true);
                $("#header span[method='wait']").hide();

                var wind = new Dialog({
                    title: !isEn ? "设置常用卡" : "Set Default Card",
                    htmlContent: temp.eval({ list: sb.toString() }),
                    width: 525,
                    closeEvent: function (window) {
                        $("#header span[method='login'] input").removeAttr("disabled");
                        callback(res);
                    },
                    initEvent: function (window) {
                        window.bind("click", function (evt) {

                            var element = Event.element(evt);
                            var method = element.attr("mtd");
                            switch (method) {
                                case "ok":
                                    if (window.find("input[checked]").length == 0) {
                                        return;
                                    }
                                    Elong.login(uid, pwd, vcode, callback, window.find("input[checked]").val(), isEn, isrememberme);
                                    wind.close();
                                    break;
                                case "cancel":
                                    wind.close();
                                    callback(res);
                                    //$("#header span[method='login'] input").show();
                                    //$("#header span[method='wait']").hide();
                                    $("#header span[method='login'] input").removeAttr("disabled");
                                    break;
                            }

                        } .bind(this));
                    } .bind(this)
                });
                wind.show();
            }
            else {
                res.SelectedCardNo = cardno;
                callback(res);
            }
        }, false, "GET", null, "jsonp");
    },

    //弹出登录框函数 loginUrl:登录页url  isCn:是否中文
    //    loginDialog: function (loginUrl, isCn) {
    //        //内嵌iframe对象
    //        isCn = Object.isNull(isCn) ? true : isCn;
    //        var wind = new Dialog({
    //            title: isCn ? "登录提示" : "Sign In",
    //            htmlContent: String.format("<div><iframe frameborder='0'  src='{0}' width='480px' height='280px' ></iframe></div>", loginUrl),
    //            width: 500,
    //            height: 320,
    //            initEvent: function (windowElement) {
    //                // 这里绑定窗口内元素的事件处理
    //            } .bind(this)
    //        });
    //        wind.show();
    //    },

    namespace: function () {
        var a = arguments, o = null, i, j, d;
        for (i = 0; i < a.length; i = i + 1) {
            d = a[i].split(".");
            o = Elong;
            for (j = (d[0] == "Elong") ? 1 : 0; j < d.length; j = j + 1) {
                o[d[j]] = o[d[j]] || {};
                o = o[d[j]];
            }
        }
        return o;
    },
    //收集静态资源信息
    collectStaResInfo: function () {
        if (('performance' in window) && ('getEntriesByType' in window.performance) &&
            (window.performance.getEntriesByType('resource') instanceof Array)) {
            var resourceList = window.performance.getEntriesByType("resource");
            for (i = 0; i < resourceList.length; i++) {
                var temp = resourceList[i];
                var urlName = temp.name.toLowerCase();
                if (temp.initiatorType == "link" && urlName.indexOf("el_common.css") > 0) {
                    tjObj.re_startTime = parseInt(temp.startTime);
                    tjObj.re_domainLookupEnd = parseInt(temp.domainLookupEnd);
                    tjObj.re_domainLookupStart = parseInt(temp.domainLookupStart);
                    tjObj.re_duration = parseInt(temp.duration);
                    tjObj.re_fetchStart = parseInt(temp.fetchStart);
                    tjObj.re_initiatorType = temp.initiatorType;
                    tjObj.re_urlName = temp.name;
                    tjObj.re_redirectEnd = parseInt(temp.redirectEnd);
                    tjObj.re_redirectStart = parseInt(temp.redirectStart);
                    tjObj.re_requestStart = parseInt(temp.requestStart);
                    tjObj.re_responseEnd = parseInt(temp.responseEnd);
                    tjObj.re_responseStart = parseInt(temp.responseStart);
                    tjObj.re_connectEnd = parseInt(temp.connectEnd);
                    tjObj.re_connectStart = parseInt(temp.connectStart);
                    tjObj.re_secureConnectionStart = parseInt(temp.secureConnectionStart);
                    break;
                } //end if
            } //end for
        } //end if
    } //end function
};


Elong.namespace("Elong.Control", "Elong.Page", "Elong.Utility");

var ElongHeaderControl = Elong.Control.ElongHeaderControl;
ElongHeaderControl = Class.create();

Object.extend(ElongHeaderControl.prototype, {
    QQCaibei: new Template(" <div class=\"topNav\" method=\"qqCaibei\"><div class=\"con\"><span class=\"ri\">#{ShowMsg}，您好！<a href=\"#{JifenUrl}\">| 我的彩贝积分</a></span>#{HeadShow}</div></div>"),
    name: "ElongHeaderControl",
    CachePage: [
    //       { Url: "http://www.elong.com" }, { Url: "http://www.elong.net" },
      {Url: "http://iflight.elong.com" }, { Url: "http://iflight.elong.net" },
      { Url: "http://hotel.elong.net" }, { Url: "http://hotel.elong.net/index_en.html" },
      { Url: "http://iflight.elong.com/index_cn.html" }, { Url: "http://iflight.elong.net/index_en.html" }
    ],

    CachePagePart: [

         { Url: "http://big5.elong.com/gate/big5/www.elong.com/" }, { Url: "http://big5.elong.com/gate/big5/hotel.elong.com/" }
    ],
    //初始化
    initialize: function (options) {
        this.IFlightCn = "iflight.elong.com";
        this.IFlightEn = "iflight.elong.net";
        this.IFlightOnLineCn = "travel.elong.com/iflight";
        this.IFlightOnLineEn = "travel.elong.net/iflight";
        this.initializeDOM();

        this.initializeEvent();

        this.checkBig5();

        //------------------
        this.InitLanguage();
        this.render();
        //初始化新增的点评头尾
        this.initNewMemberMenu();
    },




    initializeDOM: function () {
        //--国际电话
        this.telMain = $(".tel");
        this.telPanel = this.telMain.parent().find("ul");
        this.closeFlag = false;
        //--国际电话end

        this.appWrap = $(".finger-guessing a");

        //this.divLogin = $("#elongheader_login");
        this.elongheader_langs = $("#elongheader_langs");
        //--------
        this.header = $("#header");
        this.divLang = this.header.find("div[method='divLang']");
        this.ulLang = this.header.find("ul[method='ulLang']");
        this.myAccount = this.header.find("div[method='myaccount']");
        //新版首页
        this.newPhoneNo = this.header.find("b[method='newPhoneNo']");
        this.newLang = this.header.find("span[method='newSpanLang']");
        this.newPromotion = this.header.find("em[method='newPromotion']");
        this.newWeixinHelp = this.header.find("span[method='newWeixin']");
        this.mcontent = $("#m_contentend");
    },

    //--国际电话
    showTelPanel: function () {
        this.closeFlag = false;
        this.telMain.addClass("telOn");
        this.telPanel.show();
    },
    hideTelPanel: function () {
        this.closeFlag = true;
        setTimeout(function () {
            if (!this.closeFlag)
                return;
            this.telMain.removeClass("telOn");
            this.telPanel.hide();
        } .bind(this), 100);
    },
    //新版首页
    newShowTelPanel: function () {
        this.closeFlag = false;
        this.header.find("div[method='newPhoneDiv']").show();
    },
    newHideTelPanel: function () {
        this.closeFlag = true;
        setTimeout(function () {
            if (!this.closeFlag)
                return;
            this.header.find("div[method='newPhoneDiv']").hide();
        } .bind(this), 100);
    },
    newShowPromotion: function () {
        this.closeFlag2 = false;
        this.header.find("div[method='onlyPhoneDiv']").show();
    },
    newShowWeixinHelp: function () {
        this.closeFlag3 = false;
        this.header.find("div[method='weixinHelp']").show();
    },
    newHideWeixinHelp: function () {
        this.closeFlag3 = true;
        setTimeout(function () {
            if (!this.closeFlag3)
                return;
            this.header.find("div[method='weixinHelp']").hide();
        } .bind(this), 100
        );
    },
    newHidePromotion: function () {
        this.closeFlag2 = true;
        setTimeout(function () {
            if (!this.closeFlag2)
                return;
            this.header.find("div[method='onlyPhoneDiv']").hide();
        } .bind(this), 100);
    },

    //--国际电话end
    initializeEvent: function () {
        var that = this;
        //--国际电话
        if (!this.telMain.attr("title")) {
            this.telMain.bind("mouseover", this.showTelPanel.bindAsEventListener(this));
            this.telPanel.bind("mouseover", this.showTelPanel.bindAsEventListener(this));
            this.telMain.bind("mouseout", this.hideTelPanel.bindAsEventListener(this));
            this.telPanel.bind("mouseout", this.hideTelPanel.bindAsEventListener(this));
            //新版首页
            this.newPhoneNo.bind("mouseover", this.newShowTelPanel.bindAsEventListener(this));
            this.newPhoneNo.bind("mouseout", this.newHideTelPanel.bindAsEventListener(this));
            this.newPromotion.bind("mouseover", this.newShowPromotion.bindAsEventListener(this));
            this.newPromotion.bind("mouseout", this.newHidePromotion.bindAsEventListener(this));
            this.newWeixinHelp.bind("mouseover", this.newShowWeixinHelp.bindAsEventListener(this));
            this.newWeixinHelp.bind("mouseout", this.newHideWeixinHelp.bindAsEventListener(this));
        }

        this.appWrap.click(function () {
            var IframeHeight = $(window).height();
            $("#m_contentend").css({ "position": "fixed", "top": "0", "width": "100%", "z-index": "5000", "height": IframeHeight, "overflow": "hidden" });
            $("#m_contentend").html("<iframe src='http://my.elong.com/PromotionActivities/SpringFestivalGame.html?channelId=onlineweb&gamename=chunjie_caiquan_20150218' width='100%' height='" + IframeHeight + "px' frameborder='no' scrolling='no' ></iframe>");
            $("#m_contentend").append("<span id='closeGame' style='width: 100%;height: 100%;width: 64px;height: 64px;background: url(http://img.elongstatic.com/other/game/icon.png) no-repeat -732px -4px;position: absolute;top: 80px;right:20%;cursor: pointer;z-index: 8;' method='closeGame'></span>");
            $("#closeGame").click(function () {
                $("#m_contentend").html("");
                $("#m_contentend").css({ "position": "static", "top": "0", "width": "0", "z-index": "200", "height": "0", "overflow": "auto" });
            });
        } .bind(this));
        //--------------
        this.header.bind("click", this.onheaderClick.bindAsEventListener(this));
        this.ulLang.bind("mouseover", this.ondivLangMouseOver.bindAsEventListener(this));
        this.divLang.bind("mouseover", this.ondivLangMouseOver.bindAsEventListener(this));
        this.divLang.bind("mouseout", this.ondivLangMouseOut.bindAsEventListener(this));
        this.divLang.find("a").bind("mouseover", this.ondivLangMouseOver.bindAsEventListener(this));
        this.divLang.find("a").bind("mouseout", this.ondivLangMouseOut.bindAsEventListener(this));
        this.myAccount.bind("mouseover", this.onmyAccountMouseOver.bindAsEventListener(this));
        this.myAccount.bind("mouseout", this.onmyAccountMouseOut.bindAsEventListener(this));

        this.newLang.bind("mouseover", this.newdivLangMouseOver.bindAsEventListener(this));
        this.newLang.bind("mouseout", this.newdivLangMouseOut.bindAsEventListener(this));

        //change language
        $("div[method='divLang']").find("a").click(function () {
            var langTxt = $(this).text();
            if (langTxt != "繁體版") {
                that.SetLang(langTxt == "English" ? "en" : "cn");
            }

        });

    },

    onOutClick: function (evt) {

        this.onOutClickHandler = function (evt) {
            var element = Event.element(evt);
            if (this.myLogin.find(":descendant").index(element) >= 0) {
                FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
            }
            else {
                this.myLogin.find("span[method='mylogin']").removeClass("on");
                $("#m_contentend").find("div[class='com_bug']").remove();
                this.tempErrorWindow = null;
                this.header.find("div[method='here']").hide();
                Globals.closeIE6Fliter(this.ie6FilterIFrame);
                $("#m_contentend iframe").remove();
            }

        } .bindAsEventListener(this);
        $(document).one("click", this.onOutClickHandler.bind(this));
    },


    IsIFlight: function () {
        var url = window.location.href.toLowerCase();
        var isHome = false;
        if ($("#nav_home").attr("class") == "action") {
            isHome = true;
        }
        if (url.indexOf(this.IFlightCn) != -1 || url.indexOf(this.IFlightEn) != -1 || url.indexOf(this.IFlightOnLineEn) != -1 || url.indexOf(this.IFlightOnLineCn) != -1 || url.indexOf("hotel.elong.com/index") != -1 || isHome || url.indexOf("hotel.elong.net/index") != -1 || url == "http://hotel.elong.com/" || url == "http://hotel.elong.net/" || (url.indexOf("hotelweb") > -1 && url.indexOf("ab.elong.com") > -1)) {
            return true;
        }
        return false;
    },
    GetRequest: function (strName) {
        var strHref = window.location.href.toLowerCase();
        var intPos = strHref.indexOf("?");
        var strRight = strHref.substr(intPos + 1);
        var arrTmp = strRight.split("&");
        for (var i = 0; i < arrTmp.length; i++) {
            var arrTemp = arrTmp[i].split("=");
            if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
        }
        return "";
    },


    // 取用户登录信息
    GetUserLogin: function () {
        var params = {
            actiondo: "GetMemberNameInfo",
            loginname: "",
            pwd: "",
            vcode: "",
            isrememberme: false
        };

        var host = "my.elong.com";
        var arr = window.location.host.split(".");
        if (arr.length >= 2) { host = String.format("my.{0}.{1}", arr[arr.length - 2], arr[arr.length - 1]); }
        var language = window.location.host.toLowerCase().indexOf(".net") >= 0 ? "en" : "cn";
        var loginUrl = String.format("http://{0}/loginproxy_{1}.html", host, language);
        if (window.location.host.toLowerCase().indexOf("travel.elong") >= 0 || window.location.host.toLowerCase().indexOf("travel.net") >= 0) {
            loginUrl = String.format("http://{0}/my/loginproxy_{1}.html", window.location.host, language);
        }
        elongAjax.callBack(loginUrl, params, function (res) {
            if (!Object.isNull(res)) {
                if (res.isLogin == "true") {
                    var divUserLoginInfo = $("#divUserLoginInfo_elongheader");
                    var UserLoginInfo_Cn = new Template("<b>欢迎您, #{UserName}</b><span class='ml5 mr5'>[<a href='http://my.elong.com/logout_cn.html" + this.GetLogOutUrl("?") + "'>退出</a>]</span><a href='http://my.elong.com/index_cn.html'>我的帐户</a>|<a href='http://my.elong.com/index_cn.html'>订单管理</a>");
                    var UserLoginInfo_En = new Template(" <b>Welcome,#{UserName}</b> <span class='ml5 mr5'>[<a href='http://my.elong.net/logout_en.html" + this.GetLogOutUrl("?") + "' class='link'>Sign Out</a>]</span><a href='http://my.elong.net/index_en.html'>My Account</a>");
                    var UserLoginInfo_OnLine = new Template("<b>欢迎您, #{UserName}</b><span class='ml5 mr5'>[<a href='http://travel.elong.com/my/logout_cn.html?campaign_id=#{CampaignId}" + this.GetLogOutUrl("&") + "'>退出</a>]</span><a href='http://travel.elong.com/my/index_cn.html?campaign_id=#{CampaignId}'>我的帐户</a>|<a href='http://travel.elong.com/my/index_cn.html?campaign_id=#{CampaignId}'>订单管理</a>");
                    var UserLoginInfo_OnLineEn = new Template(" <b>Welcome,#{UserName}</b> <span class='ml5 mr5'>[<a href='http://travel.elong.net/my/logout_en.html?campaign_id=#{CampaignId}" + this.GetLogOutUrl("&") + "' class='link'>Sign Out</a>]</span><a href='http://travel.elong.net/my/index_en.html?campaign_id=#{CampaignId}'>My Account</a>");
                    var WebSiteType = "Cn";
                    var url = window.location.toString().toLowerCase();
                    var UserLoginInfo = "";
                    var CampaignId = "";
                    if (url.indexOf(this.IFlightCn) != -1 || url.indexOf("hotel.elong.com") != -1 || (url.indexOf("elong.com") > 0 && $("#nav_home").attr("class") == "action")) {
                        WebSiteType = "Cn";
                        UserLoginInfo = UserLoginInfo_Cn;
                    }
                    if (url.indexOf(this.IFlightEn) != -1 || (url.indexOf("elong.net") > 0)) {
                        WebSiteType = "En";
                        UserLoginInfo = UserLoginInfo_En;
                    }
                    if (url.indexOf(this.IFlightOnLineEn) != -1) {
                        WebSiteType = "OnLineEn";
                        UserLoginInfo = UserLoginInfo_OnLineEn;
                        CampaignId = this.GetRequest("campaign_id")
                    }
                    if (url.indexOf(this.IFlightOnLineCn) != -1) {
                        WebSiteType = "OnLineCn";
                        UserLoginInfo = UserLoginInfo_OnLine;
                        CampaignId = this.GetRequest("campaign_id")
                    }
                    var msg = res.MemberName;
                    if (!String.isNullOrEmpty(WebSiteType)) {
                        UserLoginInfo = UserLoginInfo.eval({
                            UserName: msg,
                            CampaignId: CampaignId
                        });
                    }
                    this.divLogin.html(UserLoginInfo);
                    this.divLogin.show();
                }
                else {
                    this.divLogin.show();
                }
            }
            else {
                this.divLogin.show();
            }
        } .bind(this), false, "GET", null, "jsonp");
    },

    destroyDOM: function () {
        this.divLogin = null;
        this.elongheader_langs = null;
    },
    destroyEvent: function () {
        //this.divLogin.unbind("click");
        //this.elongheader_langs.unbind("click");
        //this.divLogin.unbind("keydown");
    },

    render: function () {
    },
    getRandNum: function () {
        var num = "";
        for (var i = 0; i < 3; i++) {
            num += Math.floor(Math.random() * 10);
        }
        num += new Date().getTime().toString();
        return num;
    },

    GetRndUrl: function (url) {
        url = url.toLowerCase();
        var isNeedAdd = false;
        if (url.substring(0, 15) == "http://my.elong" || url.substring(0, 19) == "http://travel.elong") {
            isNeedAdd = true;
        }
        else if (url.indexOf("http://") == -1 && url.indexOf(".html") != -1) {
            isNeedAdd = true;
        }
        if (isNeedAdd && url.indexOf("rnd=") == -1) {
            var num = this.getRandNum();

            if (url.indexOf("?") != -1) {
                url = url + "&rnd=" + num;
            }
            else {
                url = url + "?rnd=" + num;

            }

        }
        return url;
    },
    onheaderClick: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        var language = window.location.host.toLowerCase().indexOf(".net") >= 0 ? "en" : "cn";
        var uinfo = this.header.find("div[method='uinfo']");
        switch (method) {
            case "savesite":
                {
                    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'Ctrl';
                    if (document.all) {
                        window.external.addFavorite("http://www.elong.com", "艺龙旅行网");
                    }
                    else if (window.sidebar) {
                        window.sidebar.addPanel("艺龙旅行网", "http://www.elong.com", "艺龙旅行网");
                    }
                    else {
                        alert('添加失败，请用Ctrl+D进行添加');
                    }
                }
                break;
            //在线客服的处理                
            case "olservice":
                {
                    window.open("http://www.elong.com/chat.html?g=31878", "", "height=460,width=690,left=200,top=100,resizable=yes");
                }
                break;

            case "langtag":
                {
                    var lang = element.attr("lang");
                    this.SetLang(lang);
                }
                break;
            //英文语言跳转                
            case "eng":
                this.SetLang("en");
                break;
            //中文语言跳转                
            case "chg":
                this.SetLang("cn");
                break;
            case "imgCode":
                var url = language == "en" ? String.format("http://my.elong.net/Validate.html?timespan={0}", new Date().getTime()) :
                    String.format("http://my.elong.com/Validate.html?timespan={0}", new Date().getTime());
                if (window.location.host.toLowerCase().indexOf("travel.elong") >= 0 || window.location.host.toLowerCase().indexOf("travel.net") >= 0) {
                    url = language == "en" ? String.format("http://travel.elong.net/my/Validate.html?timespan={0}", new Date().getTime()) :
                        String.format("http://travel.elong.com/my/Validate.html?timespan={0}", new Date().getTime());
                }
                $("#loginDiv").find("img").attr("src", this.GetRndUrl(url));
                break;


        }
    },

    onNewLoginOutClick: function () {
        this.onNewLoginOutHandler = function (evt) {
            var element = Event.element(evt);
            if ($("#loginDiv").find(":descendant").index(element) == -1 && $("#loginDiv").index(element) < 0 &&
            $(".log_on").find(":descendant").index(element) == -1 && $(".log_on").index(element) < 0) {
                this.closeLoginDailog();
            }
            else {
                FunctionExt.defer(this.onNewLoginOutClick.bindAsEventListener(this), 50);
            }
        } .bindAsEventListener(this);
        $(document).one("click", this.onNewLoginOutHandler);
    },

    closeLoginDailog: function () {
        $("#loginDiv").addClass("none");
        this.myLogin.find("span[method='mylogin']").removeClass("log_on").addClass("log");
        Globals.closeIE6Fliter(this.ie6FilterIFrame);
    },

    ondivLangMouseOut: function () {
        this.ulLang.hide();
        this.divLang.find("span[method='langtag']").removeClass("on");
    },
    ondivLangMouseOver: function () {
        this.ulLang.show();
        this.divLang.find("span[method='langtag']").addClass("on");
    },
    //新版首页
    newdivLangMouseOut: function () {
        this.newLang.find("p").hide();
        this.newLang.removeClass("languaget");
    },
    newdivLangMouseOver: function () {
        this.newLang.find("p").show();
        this.newLang.addClass("languaget");
    },


    onmyAccountMouseOver: function () {
        this.closeLoginDailog();
        this.myAccount.find("div").removeClass("none");
        this.myAccount.find("span").addClass("on");
    },
    onmyAccountMouseOut: function () {
        this.myAccount.find("div").addClass("none");
        this.myAccount.find("span").removeClass("on");
    },

    InitLanguage: function () {
        var isBig5 = false;
        if (window.location.href.indexOf("big5.elong.com") > -1) {
            isBig5 = true;
        }

        var url = window.location.href;
        if (isBig5) {
            url = url.substr(32);
            this.divLang.find("a[method='langtag']").text("繁體版");
            this.ulLang.find("li[method='libig5']").remove();
            this.ulLang.find("li[method!='libig5']").show();
        }
        else {
            var host = window.location.host.toLowerCase();
            if (host.indexOf("elong.net") != -1) {

                this.divLang.find("a[method='langtag']").text("简体版").attr("lang", "cn");
                this.ulLang.find("li[method='licn']").remove();
                this.ulLang.find("li[method!='licn']").show();
                url = "http://big5.elong.com/gate/big5/www.elong.com";
            }
            else {

                this.divLang.find("a[method='langtag']").text("English").attr("lang", "en");
                this.ulLang.find("li[method='lien']").remove();
                this.ulLang.find("li[method!='lien']").show();
                url = "http://big5.elong.com/gate/big5/" + url.substr(7);
            }
            this.ulLang.find("li[method='libig5'] a").attr("href", url);
        }
    },
    bindMouseEvnt: function () {
        this.myAccount.bind("mouseover", this.onmyAccountMouseOver.bindAsEventListener(this));
        this.myAccount.bind("mouseout", this.onmyAccountMouseOut.bindAsEventListener(this));
        //this.myLogin.bind("mouseover", this.onmyLoginMouseOver.bindAsEventListener(this));
        //this.myLogin.bind("mouseout", this.onmyLoginMouseOut.bindAsEventListener(this));
    },

    SetLang: function (lang) {
        if (lang == "en") {
            var host = window.location.host.toLowerCase();
            var url = window.location.href.substring(host.length + 7); //.toLowerCase();
            switch (host.substring(0, host.indexOf(".elong"))) {
                case "hotel":
                    window.location = "http://" + host.replace(/\.com/, ".net") + url.replace(/_cn/, "_en");
                    return;
                case "flight":
                    var furl = url.replace(/_cn/, "_en").replace(/cn_/, "en_");
                    window.location = "http://" + host.replace(/\.com/, ".net") + furl;
                    return;
                case "iflight":
                    var furl = url.replace(/_cn/, "_en").replace(/cn_/, "en_");
                    window.location = "http://" + host.replace(/\.com/, ".net") + furl;
                    return;
                case "globalhotel":
                    window.location = "http://globalhotel.elong.net";
                    return;
                case "dianping":
                    break;

            }
            if (url.indexOf("/iflight/") == 0) {
                var ifurl = url.replace(/\/cn\//, "/en/").replace(/cn_/, "en_");
                window.location = "http://" + host.replace(/\.com/, ".net") + ifurl;
                return;
            }
            else if (url.indexOf("/square/") == 0) {
                window.location = "http://" + host.replace(/\.com/, ".net") + url.replace(/\/cn\//, "/en/");
                return;
            }
            window.location = "http://www.elong.net";
        }
        else {
            var host = window.location.host.toLowerCase();
            var url = window.location.href.substring(host.length + 7); //.toLowerCase();
            switch (host.substring(0, host.indexOf(".elong"))) {
                case "hotel":
                    window.location = "http://" + host.replace(/\.net/, ".com") + url.replace(/_en/, "_cn");
                    return;
                case "flight":
                    var furl = url.replace(/_en/, "_cn").replace(/en_/, "cn_");
                    window.location = "http://" + host.replace(/\.net/, ".com") + furl;
                    return;
                case "iflight":
                    var furl = url.replace(/_en/, "_cn").replace(/en_/, "cn_");
                    window.location = "http://" + host.replace(/\.net/, ".com") + furl;
                    return;
                case "globalhotel":
                    window.location = "http://globalhotel.elong.com";
                    return;
                case "dianping":
                    break;
                case "big5":
                    if (window.location.href.length > 32) {
                        var htturl = "http";
                        var surl = htturl + ":/" + "/" + window.location.href.substr(32);
                        if (surl.indexOf("#?")) {
                            surl = surl.replace("#?", "");
                        }
                        window.location = surl;
                        return;
                    }
                    break;
            }
            if (url.indexOf("/iflight/") == 0) {
                var ifurl = url.replace(/\/en\//, "/cn/").replace(/en_/, "cn_");
                window.location = "http://" + host.replace(/\.net/, ".com") + ifurl;
                return;
            }
            else if (url.indexOf("/square/") == 0) {
                window.location = "http://" + host.replace(/\.net/, ".com") + url.replace(/\/en\//, "/cn/");
                return;
            }
            window.location = "http://www.elong.com";
        }
    },

    GetLogOutUrl: function (splitChar) {
        var url = "";
        if (typeof (PageSwitch) != "undefined") {
            if (PageSwitch.IsLogOutDIY == "1") {
                url = splitChar + "nexturl=" + encodeURIComponent(PageSwitch.LogOutUrl)
            }
        }
        return url;
    },

    RefreshUser: function () {
        var params = {
            actiondo: "GetMemberNameInfo",
            loginname: "",
            pwd: "",
            vcode: "",
            isrememberme: false
        };
        var checkhost = window.location.host;
        if (checkhost.indexOf("elong") < 0)
            return;

        var host = "my.elong.com";
        var arr = window.location.host.split(".");
        if (arr.length >= 2) { host = String.format("my.{0}.{1}", arr[arr.length - 2], arr[arr.length - 1]); }
        var language = window.location.host.toLowerCase().indexOf(".net") >= 0 ? "en" : "cn";
        var loginUrl = String.format("http://{0}/loginproxy_{1}.html", host, language);

        elongAjax.callBack(loginUrl, params, function (res) {
            if (!Object.isNull(res)) {
                if (res.isLogin == "true") {
                    var divUserLoginInfo = $("#header div[method='dvAccount']");
                    divUserLoginInfo.find("div[method='reg']").remove();
                    divUserLoginInfo.find("div[method='mylogin']").remove();
                    divUserLoginInfo.find("div[method='uinfo']").remove();

                    var UserLoginInfo_Cn = new Template(" <div class=\"box\" method=\"uinfo\"><span class=\"name normal\"><span class=\"pr15\">欢迎您，#{UserName}</span><a href=\"http://my.elong.com/logout_cn.html\" title=\"安全退出艺龙帐户\">退出</a></span></div>");
                    var UserLoginInfo_En = new Template(" <div class=\"box en\" method=\"uinfo\"><span class=\"name normal\"><span class=\"pr15\">Welcome，#{UserName}</span><a href=\"http://my.elong.net/logout_en.html\" title=\"Sign Out\">Sign Out</a></span></div>");
                    var WebSiteType = "Cn";
                    var UserLoginInfo = ""
                    var url = window.location.toString().toLowerCase();
                    if (url.indexOf("elong.com") != -1 && url.indexOf("travel") < 0) {
                        WebSiteType = "Cn";
                        UserLoginInfo = UserLoginInfo_Cn;
                    }
                    if (url.indexOf("elong.net") != -1 && url.indexOf("travel") < 0) {
                        WebSiteType = "En";
                        UserLoginInfo = UserLoginInfo_En;
                    }

                    var msg = res.MemberName;
                    if (!String.isNullOrEmpty(WebSiteType)) {
                        UserLoginInfo = UserLoginInfo.eval({
                            UserName: msg
                        });
                    }
                    $(UserLoginInfo).appendTo(divUserLoginInfo);

                }
                else {
                    var divUserLoginInfo = $("#header div[method='dvAccount']");
                    divUserLoginInfo.find("div[method='uinfo']").remove();
                    divUserLoginInfo.find("div[method='reg']").show();
                    divUserLoginInfo.find("div[method='mylogin']").show();
                }
            }
            else {
                this.divLogin.show();
            }
        } .bind(this), false, "GET", null, "jsonp");

    },

    GetOrderFromId: function () {
        var pkid = "";
        var orderfrom = Globals.cookie("com.eLong.CommonService.OrderFromCookieInfo");
        if (orderfrom != null & orderfrom != "") {
            pkid = Globals.cookie("com.eLong.CommonService.OrderFromCookieInfo", "Pkid")
        }
        return pkid;

    },
    //判断是否彩贝登录状态
    CheckCaibeiState: function () {

        var pkid = this.GetOrderFromId();

        var caibei = "";
        var ssLogin = Globals.cookie("SsoLogin");
        if (ssLogin != null & ssLogin != "") {
            caibei = Globals.cookie("SsoLogin", "SsoConfig")
        }
        if (pkid == "5226") {//caibei == "caibei" ||
            return true;
        }
        return false;
    },
    //判断是否万里通登录状态
    CheckWLTState: function () {

        var pkid = this.GetOrderFromId();
        if (pkid == "5067") {
            return true;
        }
        return false;
    },
    //检测万里通
    CheckWLT: function () {
        var checkhost = window.location.host;
        if (checkhost.indexOf("travel") >= 0 || checkhost.indexOf("elong") < 0)
            return;
        if (!this.CheckCahcePage()) {
            return;
        }
        if (this.CheckWLTState()) {
            this.header.find("div[method='menuBar']").hide();
        }
    },


    //检测彩贝
    CheckQQ: function () {
        var params = {

    };
    var checkhost = window.location.host;
    if (checkhost.indexOf("travel") >= 0 || checkhost.indexOf("elong") < 0)
        return;
    if (!this.CheckCahcePage()) {
        return;
    }

    if (this.CheckCaibeiState()) {

        var qqUrl = "http://my.elong.com/qq/caibei.html";
        elongAjax.callBack(qqUrl, params, function (res) {
            if (!Object.isNull(res)) {
                var dvCaibei = $("div[method='qqCaibei']");
                if (dvCaibei.length == 0) {
                    var html = this.QQCaibei.eval({ ShowMsg: res.ShowMsg, JifenUrl: res.JifenUrl, HeadShow: res.HeadShow });
                    $(html).insertBefore(this.header);
                }
                this.header.find("div[method='menuBar']").hide();
                this.header.find("div[method='uinfo']").hide();
                this.header.find("div[method='reg']").hide();
                this.header.find("div[method='mylogin']").hide();
                this.header.find("a[method='cash']").parent("li").hide();
                this.header.find("a[method='coupon']").parent("li").hide();
                this.header.find("a[method='self']").parent("li").hide();
            }
        } .bind(this), false, "GET", null, "jsonp");
    }
},



checkBig5: function () {
    var isBig5 = false;
    if (window.location.href.indexOf("big5.elong.com") > -1) {
        isBig5 = true;
    }
    if (this.elongheader_langs.length <= 0) {
        return;
    }
    var url = window.location.href;
    if (isBig5) {
        url = url.substr(32);
        this.elongheader_langs[0].innerHTML += '<a href="#?" mth="chg" id="mimg_bg_cn"   ></a>';
    }
    else {
        var host = window.location.host.toLowerCase();
        if (host.indexOf("elong.net") != -1) {
            url = "http://big5.elong.com/gate/big5/www.elong.com";
        }
        else {
            url = "http://big5.elong.com/gate/big5/" + url.substr(7);
        }
        this.elongheader_langs[0].innerHTML += '<a href="' + url + '" id="mimg_bg_big5"   ></a>';
    }
},

dispose: function () {
    this.destroyEvent();
    this.destroyDOM();
},
//登录后跟账号myelong相关的事件及数据获取
initNewMemberMenu: function () {
    //未登录 用户 mouseover
    $("#user_display_login").mouseover(function () {
        $("#div_user_center").show();
    }).mouseout(function () {
        $("#div_user_center").hide();
    });

    $("#user_display_login").mouseout(function () {
        $("#div_user_center").hide();
    }).mouseover(function () {
        $("#div_user_center").show();
    });

    //登录后的用户中心 mouseover
    $("#user_display_div").mouseover(function () {
        $("#div_user_center").show();
    }).mouseout(function () {
        $("#div_user_center").hide();
    });

    $("#div_user_center").mouseout(function () {
        $("#div_user_center").hide();
    }).mouseover(function () {
        $("#div_user_center").show();
    });

    //登录用户异步加载个人中心内容，目前只有点评信息
    if ($("#hidden_memberid_user").length > 0 && $("#hidden_memberid_user").val() != "") {
        var user_id = $("#hidden_memberid_user").val();
        var url = "http://my.elong.com/api/GetMemberToCommentOrderCount.html";
        $.ajax({
            type: "GET",
            url: String.format('{0}?memberid={1}&businesstype={2}', url, user_id, "H"),
            cache: false,
            error: function () {
                //alert("异步获取点评出错！");
            },
            dataType: "jsonp",
            jsonp: 'JsonPCallBack',
            success: function (result) {
                if (result.orderCount > 0) {
                    //设置我的艺龙后面红点和我的点评红点 ,设置url为待点评订单
                    $("#user_notice").css("display", '');
                    $("#comment_notice").css("display", 'block');
                    var roundTime = new Date().getTime();
                    var comUrl = "http://my.elong.com/Hotel/NotReviewOrderList_cn.html?rnd=".concat(roundTime);
                    $("#n_comment_a").attr("href", comUrl);
                }
            },
            timeout: 3000
        });
    }
    // 用户名称过长处理 ：6个中文 12英文 最后...
    if ($("#hidden_user_name").length > 0 && $("#hidden_user_name").val() != "") {
        var u_name = $("#hidden_user_name").val();
        $("#n_user_name").attr("title", u_name);
        var dis_na = u_name;
        var D = u_name, B = D.length, A = 0, _ = 12, E;
        for (E = 0; E < B && A < _; E = E + 1)
            if (/[^\x00-\xff]/g.test(D[E]))
                A += 2;
            else
                A += 1;
        if (E != B) {
            dis_na = D.substr(0, E) + "...";
        }
        $("#n_user_name").text(dis_na);

    }
    //龙萃会员 中心有龙萃特权标识，差号可以删除掉，不能影响其他功能
    //    $("#closelongcui_tip_span").click(function () {
    //        $("#closelongcui_tip_div").remove();
    //    });
}

});

//==================================================================
// 文件名:		iframeLoginDialog.js
// 版权:		Copyright (C) 2014 Elong
// 创建人:		xiaoyu.wang
// 创建日期:	2014-5-22
// 描述:		Elong整站业务公共脚本类
// 备注:		
// 示例代码：
// var  dialog=new iframeLoginDialog({
//                     
//		                  language:"cn", // cn|en
//						  isRemember:false //是否记住我 ture|fasle
//						  nexturl:null,//登录或注册的后的NextURl,当传入NextUrL时，登录、注册完成后会自动跳转到下一个NextUrl
//                        callback:function(){登录后回调函数，无需传参数。需要注意的是当调用此回调方法时，登录完成后,不会再跳转NextUrL,需要在回调中自己跳转
//				            
//				                //登录成功后处理代码
//				                var rn = Math.random();
//                                document.PackageForm.action = nextPage + "?rn=" + Math.random();
//                                document.PackageForm.submit();
 
//			              }
//			           });
//
//
//===================================================================

var iframeLoginDialog = Elong.iframeLoginDialog;
iframeLoginDialog = Class.create();
Object.extend(iframeLoginDialog.prototype, {
    name: "loginRegDialog",
    diaglog: null,
    validateUrl: null,
    popWindow: null,
    options: {

        language: "cn",
        nexturl: null,
        callback: null,
        isRemember: false,
        defaultTab: "login",
        ishttps: true

    },

    initialize: function (options) {

        Object.extend(Object.extend(this, this.options), options);
        var httpStr = options.ishttps ? "https" : "http";
        //var jsonpCallback = options.callback;
        window["jsonpCallback"] = options.callback;

        var callback = options.callback == null ? "?callback=" : "?callback=jsonpCallback"; // +options.callback;
        var defaultTab = options.defaultTab == "login" ? "" : "&isreg=1";
        var isRemember = options.isRemember == false ? "" : "&isRemember=1";
        var nexturl = options.nexturl == null ? "" : "&nexturl=" + encodeURIComponent(options.nexturl);
        var logUrl = httpStr + "://secure.elong.com/passport/loginBox_" + options.language + ".html" + callback + isRemember + defaultTab + nexturl;

        document.domain = options.language.toLowerCase() == "cn" ? "elong.com" : "elong.net";

        this.dialog = new Dialog({
            title: "",
            htmlContent: "<a class='com_dialog-titlebar-close com_corner-all' href='#?' method='close'><span class='com_icon com_icon-closethick'>close</span></a><style>.com_widget-content{background: transparent; border: none;}.com_dialog{border:none;}.com_dialog .com_dialog-titlebar-close{top: 12px;right: 27px;}.com_dialog-content iframe{_width:402px;height:454px;overflow:hidden;}</style><iframe name='passportIframe' width='402' height='454' frameBorder='0' src='" + logUrl + "' style='height:500px; !important'></iframe>",
            width: 402,
            height: 500,
            initEvent: function (windowElement) {
                // 这里绑定窗口内元素的事件处理
                this.popWindow = windowElement;
            } .bind(this)
        });
        this.dialog.show();



    },
    closeWindow: function () {
        if (this.dialog != null) {

            this.dialog.close();
        }
        //this.popWindow.close();
    }
});

function iframeParentGo(url) {
    window.location.href = url;

}




//==================================================================
// 文件名:		smallLoginDialog.js
// 版权:		Copyright (C) 2011 Elong
// 创建人:		kui.chen
// 创建日期:	2011-3-1
// 描述:		Elong整站业务公共脚本类
// 备注:		
// 示例代码：
// var  dialog=new smallLoginDialog({
//                        isShowNoCardButton:true,//是否显示直接预订按钮，True显示，False不显示
//		                  language:"cn", // cn|en
//						  isRemember:false //是否记住我 ture|fasle
//						  nexturl:null,//登录或注册的后的NextURl,当传入NextUrL时，登录、注册完成后会自动跳转到下一个NextUrl
//                        callback:function(res){登录后回调函数，res==1登录成功，res==2直接预订登录成功，其他登录失败。需要注意的是当调用此回调方法时，登录完成后,不会再跳转NextUrL,需要在回调中自己跳转
//				            if(res=="1"||res=="2")
//				            {
//				                //登录成功后处理代码
//				                var rn = Math.random();
//                                document.PackageForm.action = nextPage + "?rn=" + Math.random();
//                                document.PackageForm.submit();
//				            }
//			              }
//			           });
//
//
//===================================================================
var smallLoginDialog = Elong.smallLoginDialog;
smallLoginDialog = Class.create();
Object.extend(smallLoginDialog.prototype, {
    name: "loginDialog",
    m_Container_cn: new Template("<div id='SmallLonginContain' style='z-index: 1001; position: fixed;_position: absolute; display: block; left: 50%; top: 50%; margin-top: -157.5px; margin-left: -200px; ' class='com_dialog com_widget com_widget-content com_corner-all com_draggable logon_popup2'><h3><a class='right close' href='#?' method='close'>关闭</a>登录</h3><div class='left main' id='smallDialog_login'><div style='color:#F90; font-size:14px;'><em style='font-weight:700'>√</em> 预订更快捷 <em class='pl10' style='font-weight:700'>√</em> 可使用消费券</div><div class='tip t12' style='display:none'><span></span>您的手机/邮箱或密码错误</div><ul><li class='t14'>邮箱或手机号</li><li><input type='text' default='' value='' class='text l_black' method='uid'></li><li class='t14'>密&#12288;码</li><li><input type='password' default='' value=''  method='psw' class='text l_black'></li><!--获取焦点时type='password'--><li style='display:none' class='t14' method='valCode'>验证码</li><li style='display:none' method='valCode'><input type='text' method='Code' value='' class='text code'>&nbsp;<img align='absmiddle' title='看不清可点击图片更换图片。' alt='看不清可点击图片更换图片。' src='http://www.elongstatic.com/common/pic/404-1.gif' method='imgRefresh'>&nbsp;<a method='refreshCode' class='t12' href='#'>换一张</a></li><li><label title='(保存2个月)' class='reme t12'><input type='checkbox' id='inputRememberMe' method='remberMe' name='checkbox'>下次自动登录</label></li><li class='clx'><span method='realLogin' class='left'><input type='button' method='login' value='登录' class='btn'></span><a class='right t12' href='#?' method='forgetpwd'>忘记密码?</a><span method='wait' style='display:none' id='loading'><input  type='button' value='登录...' class='btn logining'></span></li></ul></div><div class='left ml20 side'><p>还不是会员？</p><p><a title='注册艺龙帐号可快速预订并享受积分回赠' href='#?' method='reg'>马上注册</a></p><p class='mt20' id='showNoCard'><a title='点击按钮直接预订' class='reg_now' method='nocardbooking' href='#?'>直接预订</a></p></div><div class='clear'></div></div>"),
    m_Container_en: new Template("<div id='SmallLonginContain'><div  class='com_dialog-content com_widget-content'><div class='package_login' ><div id='smallDialog_login'><dl class='bdr'><dt class='t14 bold pb15'> Already a registered user  </dt><dd class='errorBox none'></dd><dd>User name / Card number / Email:</dd><dd><input type='text' class='w207'  method='uid'/></dd><dd class='mt10'>Password:</dd><dd><input type='password' class='w134' method='psw'/><a href='#?' #{findPsd} method='forgetpwd'>Forgot your password?</a></dd><dl style='display:none; margin:0; padding:0;' id='valCode'><dd class='mt20'>verification code:<input class='w40' type='text' method='Code'><img  class='middle mr5' method='imgRefresh' /><a href='#?' method='refreshCode'>refresh the codes?</a></dd></dl><dd class='pt10'  method='remberDiv'><input name='' type='checkbox' value=''  method='remberMe'/> Login automatically next time<span class='l_black'>(save two months)</span></dd><dd class='mt20'><input type='button' value='Sign&nbsp;in' onfocus='this.blur()'  class='search_bt' method='login'></dd></dl><dl class='noMember' id='RegDiv'><dt class='t14 bold'> New user?  </dt><dd class='tc mt20 pt20'><a href='#?'  method='reg' class='t14 bold ml10'>Sign up now</a> <br /><br /><span id='showNoCard'><input type='button' value='Book as guest'  method='nocardbooking' onfocus='this.blur()'  class='btn_book'></span></dd></dl><div class='clear'></div></div><div class='loadingBox '  id='loading' style='display:none;'>Loading...<div class='loading'></div></div></div></div></div>"),
    loginEmpty_cn: "登录名不能为空",
    loginEmpty_en: "Please enter your login name.",
    passwordEmpty_cn: "密码不能为空",
    passwordEmpty_en: "Please enter your password.",
    loginError_100_cn: "用户名或密码不匹配！",
    loginError_100_en: "Username or password does not match!",
    loginError_101_cn: "登录密码错误",
    loginError_101_en: "You have entered an incorrect password.",
    loginError_103_cn: "用户已经被冻结或取消",
    loginError_103_en: "This account has been cancelled or frozen.",
    loginError_104_cn: "验证码错误",
    loginError_104_en: "You have entered an incorrect verification code.",
    loginDefaultError_cn: "未知错误",
    loginDefaultError_en: "There is an unknown error.",
    diaglog: null,
    validateUrl: null,
    isRememberMe: false,


    options: {
        isShowNoCardButton: true,
        language: "cn",
        isRemember: false,
        nexturl: null,
        campaign_id: null,
        RegShow: true,
        title: "",
        width: 1,
        callback: null

    },
    initializeDOM: function () {
        this.SmallLonginContain = $("#SmallLonginContain");
        this.smallDialog_login = $("#smallDialog_login");
        this.showNocard = $("#showNoCard");
        this.RegDiv = $("#RegDiv");
        this.uid = $("#SmallLonginContain").find("input[method='uid']");
        this.pwd = $("#SmallLonginContain").find("input[method='psw']");
        this.vcode = $("#SmallLonginContain").find("input[method='Code']");
        this.btnLogin = $("#SmallLonginContain").find("input[method='login']");
        this.loading = $("#loading");
        this.valCodeDiv = this.language.toLowerCase() == "cn" ? $("#SmallLonginContain").find("li[method='valCode']") : $("#valCode");
        this.RememberInput = $("#SmallLonginContain").find("input[method='remberMe']");
        this.UserIdText = $("#SmallLonginContain").find("input[method='uid']");
        this.realLogin = $("span[method='realLogin']");
    },

    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);

        this.options.title = this.language.toLowerCase() == "cn" ? "" : "Login";
        this.options.width = this.language.toLowerCase() == "cn" ? 1 : 550;
        var m_TenyPayLogin = String.format("http://www.elong.com/redirect/bdlogin.aspx?islogin=1&bdfrom=503&Iswindow=0&nextUrl=http://my.elong.com/index_cn.html?bdfrom=503");


        if (window.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
            this.validateUrl = String.format("http://{0}/my/Validate.html?timespan={1}", window.location.host, new Date().getTime());

            m_TenyPayLogin = String.format("http://www.elong.com/redirect/bdlogin.aspx?islogin=1&bdfrom=503&Iswindow=0&nextUrl=http://my.elong.com/index_cn.html?bdfrom=503");

        }

        this.diaglog = new Dialog(Object.extend(this.options, { htmlContent: this.language.toLowerCase() == "cn" ? this.m_Container_cn.eval({ TenyPayLogin: m_TenyPayLogin }) : this.m_Container_en.eval({ findPsd: "" }),
            initEvent: function (window) {
                this.initializeDOM();
                if (this.isRemember) {
                    this.RememberInput.attr("checked", true);
                    this.isRememberMe = true;
                    Elong.GetUserInfo(function (res) {
                        if (!Object.isNull(res)) {
                            if (res.isLogin == "true") {
                                if (res.Mobile.trim() != '-1') {
                                    this.UserIdText.attr("value", res.Mobile);
                                    this.UserIdText.attr("readonly", true);
                                }
                                else {
                                    if (res.Email.trim() != '-1') {
                                        this.UserIdText.attr("value", res.Email);
                                        this.UserIdText.attr("readonly", true);
                                    }
                                    else {
                                        this.UserIdText.attr("value", res.CardNo);
                                        this.UserIdText.attr("readonly", true);
                                    }
                                }
                            }
                        }
                    } .bind(this));
                }
                if (!this.RegShow) {
                    this.RegDiv.hide();
                } else {
                    this.RegDiv.show();
                }
                if (!this.isShowNoCardButton) {
                    this.showNocard.hide();
                } else {
                    this.showNocard.show();
                }
                //联盟不展示记住我，不展示财富通登录
                if (!String.isNullOrEmpty(this.campaign_id)) {
                    this.SmallLonginContain.find("dd[method='remberDiv']").hide();
                    this.SmallLonginContain.find("dd[method='QQDiv']").hide();
                } else {
                    this.SmallLonginContain.find("dd[method='remberDiv']").show();
                    this.SmallLonginContain.find("dd[method='QQDiv']").show();
                }
                window.bind("keydown", function (evt) {
                    if (evt.keyCode == 13) {
                        this.login();
                        return false;
                    }
                } .bind(this));
                window.bind("click", function (evt) {
                    var element = Event.element(evt);
                    var method = element.attr("method");
                    switch (method) {
                        case "close":
                            window.close();
                            break;
                        case "forgetpwd":
                            var userName = this.UserIdText.val();
                            var m_ForgetPwdUrl = '';
                            //http://my.elong.com/ForgetPass_cn.html?longinname=#{Name}
                            if (!Object.isNull(userName) && userName.trim() != '') {

                                m_ForgetPwdUrl = String.format("http://{0}/ForgetPass_{1}.html?loginname={2}", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", this.language.toLowerCase() == "cn" ? "cn" : "en", encodeURIComponent(userName));
                                if (document.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
                                    m_ForgetPwdUrl = String.format("http://{0}/my/ForgetPass_{1}_{2}.html?Campaign_id={3}", document.location.host, this.language.toLowerCase() == "cn" ? "cn" : "en", encodeURIComponent(userName), this.campaign_id);
                                }
                            }
                            else {
                                m_ForgetPwdUrl = String.format("http://{0}/ForgetPass_{1}.html", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", this.language.toLowerCase() == "cn" ? "cn" : "en");
                                if (document.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
                                    m_ForgetPwdUrl = String.format("http://{0}/my/ForgetPass_{1}.html?Campaign_id={2}", document.location.host, this.language.toLowerCase() == "cn" ? "cn" : "en", this.campaign_id);
                                }
                            }
                            document.location.href = m_ForgetPwdUrl;
                            break;
                        case "login":
                            this.login();
                            break;
                        case "nocardbooking":
                            this.NoCardBooking();
                            break;
                        case "reg":
                            this.RegClick();
                            break;
                        case "Code":
                            //  var imgSrc = String.format("http://{0}/Validate.html?timespan={1}", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", new Date().getTime());
                            // this.SmallLonginContain.find("img").attr("src", imgSrc);
                            break;
                        case "imgRefresh":
                            var imgSrc = String.format("http://{0}/Validate.html?timespan={1}", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", new Date().getTime());
                            if (document.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
                                imgSrc = String.format("http://{0}/my/Validate.html?timespan={1}", document.location.host, new Date().getTime());
                            }

                            this.SmallLonginContain.find("img").attr("src", imgSrc);
                            break;
                        case "refreshCode":
                            var refreshUrl = String.format("http://{0}/Validate.html?timespan={1}", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", new Date().getTime());
                            if (document.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
                                refreshUrl = String.format("http://{0}/my/Validate.html?timespan={1}", document.location.host, new Date().getTime());
                            }

                            this.SmallLonginContain.find("img").attr("src", refreshUrl);
                            break;
                        case "remberMe":
                            if (element.attr("checked") == true) {
                                this.isRememberMe = true;
                            } else {
                                this.isRememberMe = false;
                            }
                            break;
                        case "close":
                            this.dispose();
                            break;
                    }
                } .bind(this));
            } .bind(this)
        }));
        this.render();
    },
    RegClick: function () {
        // var m_TenyPayLogin = String.format("http://www.elong.com/redirect/bdlogin.aspx?islogin=1&bdfrom=503&Iswindow=0&nextUrl=http://my.elong.com/index_cn.html?bdfrom=503");
        var m_RegUrl = String.format("http://{0}/register_{1}.html", "my.elong.com", this.language.toLowerCase() == "cn" ? "cn" : "en");

        if (window.location.host.toLowerCase().indexOf("travel.elong") >= 0) {
            //this.validateUrl = String.format("http://{0}/my/Validate.html?timespan={1}", window.location.host, new Date().getTime());

            //  m_TenyPayLogin = String.format("http://www.elong.com/redirect/bdlogin.aspx?islogin=1&bdfrom=503&Iswindow=0&nextUrl=http://my.elong.com/index_cn.html?bdfrom=503");
            m_RegUrl = String.format("http://{0}/my/register_{1}.html?Campaign_id={2}", window.location.host, this.language.toLowerCase() == "cn" ? "cn" : "en", this.campaign_id);
        }
        if (!Object.isNull(this.nexturl)) {
            if (m_RegUrl.indexOf("?") >= 0) {
                m_RegUrl = String.format(m_RegUrl + "&nexturl={0}", this.nexturl);
            } else {
                m_RegUrl = String.format(m_RegUrl + "?nexturl={0}", this.nexturl);
            }

        }
        document.location.href = m_RegUrl;
    },

    login: function () {
        if (!validator.valid(this.uid.val().trim(), "notEmpty & loginName")) {
            $error(this.uid, this.language.toLowerCase() == "cn" ? this.loginEmpty_cn : this.loginEmpty_en);
            return;
        }
        if (!validator.valid(this.pwd.val(), "notEmpty")) {
            $error(this.pwd, this.language.toLowerCase() == "cn" ? this.passwordEmpty_cn : this.passwordEmpty_en);
            return;
        }
        //btnLogin[0].className = "Login_loding";
        this.showLoading();
        Elong.login(encodeURIComponent(this.uid.val().trim()), this.pwd.val(), this.vcode.val(), function (res) {
            if (res.MemberLoginCode != 1 && res.IsShowVCode) {
                //显示验证码输入框
                this.valCodeDiv.show();
                var validateUrl = String.format("http://{0}/Validate.html?timespan={1}", this.language.toLowerCase() == "cn" ? "my.elong.com" : "my.elong.net", new Date().getTime());
                this.SmallLonginContain.find("img").attr("src", validateUrl);
            }
            else {
                this.valCodeDiv.hide();
            }
            switch (res.MemberLoginCode) {
                case 1:
                    $("div[class^='com_dialog-titlebar']").remove();
                    $("div[class^='com_dialog-content']").remove();
                    $("div[class^='com_dialog com_widget com_widget-content com_corner-all com_draggable']").remove();
                    Object.isNull(this.callback) ? window.location.href = this.nexturl : this.callback(res.MemberLoginCode);

                    return;
                case 100:
                    this.hideLoading();
                    $error(this.uid, this.language.toLowerCase() == "cn" ? this.loginError_100_cn : this.loginError_100_en);
                    break; // 登录名不存在
                case 101:
                    this.hideLoading();
                    $error(this.pwd, this.language.toLowerCase() == "cn" ? this.loginError_101_cn : this.loginError_101_en);
                    break; // 登录密码错误
                case 102:
                    //this.hideLoading();
                    //$error(this.iptUserID, this.HotelRes.login_err3);
                    break; // 匹配了多个用户名,而且用户没有选择卡号
                case 103:
                    this.hideLoading();
                    $error(this.uid, this.language.toLowerCase() == "cn" ? this.loginError_103_cn : this.loginError_103_en);
                    break; // 用户已经被冻结或取消
                case 104:
                    this.hideLoading();
                    $error(this.vcode, this.language.toLowerCase() == "cn" ? this.loginError_104_cn : this.loginError_104_en);
                    break; // 验证码错误
                case 105:
                    this.hideLoading();
                    alert(res.MemberCardList);
                    break; //限制email登录
                default:
                    this.hideLoading();
                    $error(this.uid, this.language.toLowerCase() == "cn" ? this.loginDefaultError_cn : this.loginDefaultError_en);
                    break; //未知错误
            }
        } .bind(this), null, this.language.toLowerCase() == "cn" ? false : true, this.isRememberMe);
        this.dispose();

    },
    NoCardBooking: function () {
        //this.showLoading();
        Elong.login("", "", "", function (res) {
            var isEn = false;
            switch (res.MemberLoginCode) {
                case 2:
                    $("div[class^='com_dialog-titlebar']").remove();
                    $("div[class^='com_dialog-content']").remove();
                    $("div[class^='com_dialog com_widget com_widget-content com_corner-all com_draggable']").remove();
                    Object.isNull(this.callback) ? window.location.href = this.nexturl : this.callback(res.MemberLoginCode);

                    this.diaglog.close();
                    return;
                default:
                    //this.hideLoading();
                    //$error(this.uid, isEn ? "There is an unknown error." : "未知错误");
                    break; //未知错误
            }

            //} .bind(this), null, isEn, isrememberme);
        } .bind(this), null, this.language.toLowerCase() == "cn" ? false : true, false);
        // this.dispose();

    },
    showLoading: function () {
        this.btnLogin.attr("disabled", "disabled");
        this.loading.show();
        if (this.language.toLowerCase() == "cn") {
            this.realLogin.hide();
        }
        else {
            this.smallDialog_login.hide();
        }
    },
    hideLoading: function () {
        this.loading.hide();
        this.btnLogin.removeAttr("disabled");
        if (this.language.toLowerCase() == "cn") {
            this.realLogin.show();
        }
        else {
            this.smallDialog_login.show();
        }
    },


    destroyDOM: function () {

    },

    initializeEvent: function () {


    },

    destroyEvent: function () {


    },

    render: function () {

        this.diaglog.show();

    },
    dispose: function () {
        this.diaglog = null;
    }
});
// 尽快刷新登录状态
$ready(function () {
    var client = new ElongHeaderControl();
});
//页面结束后执行
$(document).ready(function () {
    // 后加载elong广告呈现
    Elong.renderAds();
    Elong.flowStatiData();
});
//弹出框登录函数
//                        isShowNoCardButton:true,//是否显示直接预订按钮，True显示，False不显示
//		                  language:"cn", // cn|en
//						  isRemember:false //是否记住我 ture|fasle       
//						  nexturl:null,//登录或注册的后的NextURl,当传入NextUrL时，登录、注册完成后会自动跳转到下一个NextUrl
//                        campaign_id:"4209079",联盟的campaign_id值，主站默认传""即可
//                        callback:function(res){登录后回调函数，res==1登录成功，res==2直接预订登录成功，其他登录失败。需要注意的是当调用此回调方法时，登录完成后,不会再跳转NextUrL,需要在回调中自己跳转
//                        RegShow:ture,   是否展示注册链接ture|false
function $loginDialog(language, isShowNoCardButton, isRememberMe, nexturl, campaign_id, callback, RegShow) {
    var dialog = new smallLoginDialog({
        isShowNoCardButton: Object.isNull(isShowNoCardButton) ? true : isShowNoCardButton, //是否显示直接预订按钮，True显示，False不显示
        language: language, // cn|en
        isRemember: Object.isNull(isRememberMe) ? false : isRememberMe,
        nexturl: nexturl,
        campaign_id: String.isNullOrEmpty(campaign_id) ? null : campaign_id,
        callback: callback,
        RegShow: Object.isNull(RegShow) ? true : RegShow
    });
}

//===============================登录注册组合框组件=====================================//
//By Xiaoyu.wang

//	language:"cn", // cn|en
//	isRemember:false //是否记住我 true|fasle     如果不填，默认false ，如果不需要记住密码请不传此参数
//	nexturl:null,//登录或注册的后的NextURl,当传入NextUrL时，登录、注册完成后会自动跳转到下一个NextUrl
//  callback:function(){登录后回调函数，无回传参数res，默认就是登录成功后要做的操作。需要注意的是当调用此回调方法时，登录完成后,不会再跳转NextUrL,需要在回调中自己跳转
//  defaultTab:"login"    login:展示登录tab  reg:展示注册tab   无此参数默认展示login 
//  ishttps : true     是否为https协议，本机无法调试https 可以传false 则是http协议
function $loginRegDialog(language, nexturl, callback, isRememberMe ,defaultTab,ishttps) {

    var dialog = new iframeLoginDialog({
        language: language,
        nexturl: nexturl,
        callback: callback,
        isremember: Object.isNull(isRememberMe) ? false : isRememberMe,
        defaultTab: Object.isNull(defaultTab) ? "login" : defaultTab,
        ishttps: Object.isNull(ishttps) ? true : ishttps
    });
    return dialog;

}


window.onerror = function (errMsg, errUrl, errLine) {
    try {
        if (!Object.isNull(document.location) && document.location.host.indexOf("flight.elong.") >= 0) {
            Elong.evTJ("webjserror", {
                host: document.location.host,
                errline: errLine,
                errurl: errUrl,
                errmsg: errMsg,
                browser: navigator.userAgent
            });
        }

        //        if (typeof (PageSwitch) != "undefined" && document.location.host.indexOf("eb.elong.") >= 0) {
        //                    if (PageSwitch.JsErrorMonitor == "1") {
        //                        var browser = navigator.userAgent;
        //                        //获取浏览器信息
        //                        var now = new Date();
        //                        var strNow = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        //                        Elong.sendTJ({
        //                            "DBItemName": "LogErrorConnectionString",
        //                            "TableName": "Log_OnlineWeb",
        //                            "ProductLine": "OnlineWeb",
        //                            "AppName": "JavaScript",
        //                            "LogLevel": "Error",
        //                            "LogTime": strNow,
        //                            "PageUrl": encodeURIComponent(errUrl),
        //                            "LogMsg": encodeURIComponent(errMsg),
        //                            "LogContent": encodeURIComponent(errMsg) + encodeURIComponent(";行号：") + errLine + encodeURIComponent(";浏览器信息：") + browser
        //                        });

        //                    }
        //                }
    }
    catch (e) {
    }
    return false;
}
function SendAppSMS(mobile, valCode, func) {
    elongAjax.callBack("http://www.elong.com/home/isajax/ElongNewIndex/SendAppSMSjsonp", { mobile: mobile, valCode : valCode }, func.bind(this), false, "GET", false, "jsonp");
}
//===================================================================
// 文件名:		validator09.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.Luo
// 创建日期:	2009-10-14
// 描述:		Js通用校验类库
// 备注:		此文件修改请通知作者

// 示例代码:
//            不需要new ValidatorClass类，validator对象可直接使用
//            validator.valid(txtInput.value, "notEmpty & real");
//            validator.valid(txtInput.value, "notEmpty & textRange", 5, 20);
//            validator.valid(txtInput.value, "notEmpty & dateRange", "2001-1-1", "2009-1-1");

//            validator.getTodayString()  //  获取今天yyyy-mm-dd
//            validator.reFormatDateString(value)  格式化日期，将2009-1-1或12/31/2009都格式化成yyyy-mm-dd
//            validator.reFormatDateStringEn(value)格式化日期，将2009-1-1都格式化成mm/dd/yyyy
//			   validator.convertDate(dateString) 传入2009-1-1或1/1/2009转化成Date对象
//===================================================================

var ValidatorClass = Elong.Utility.ValidatorClass = Class.create();
Object.extend(ValidatorClass.prototype, {
    name: "ValidatorClass",
    //初始化
    initialize: function () {
    },

    validType: {
        notEmpty: null,
        email: /^\w+((-\w+)|(\.\w+))*\@{1}\w+((-\w+)|(\.\w+))*\.{1}\w{2,4}(\.{0,1}\w{2,4}){0,4}$/,
        // 字符串
        textRange: 20, // 校验字符长度，validator.valid(txtInput.value, "textRange", 5, 20);
        loginName: /[^@]+@{1}[^@\.]+\.+[^@]+|[0-9a-zA-Z\u4e00-\u9fa5]*/,
        passengerName: /^[a-zA-Z]{1,20}\/[a-zA-Z]{1,20}((| )[a-zA-Z]{1,20}){0,20}$/,  // 乘机人姓名Luo/zhi或者Luoz/asf sdf或者asfd/asd/ad
        nickName: /^([a-zA-Z]|[\u4e00-\u9fa5]|\/| )+$/,   // 联系人姓名不能包含数字与符号
        enString: /^[a-zA-Z]+$/, // 验证是否只包含英文字符
        cnString: /^[\u4e00-\u9fa5]+$/, // 验证是否全部包含中文字符
        nonSpecialSign: /^[^~!@#$%^&*！￥…\s，。]*$/, // 不包含特殊字符
        // 日期
        date: null,  // 判断是否是日期格式yyyy-mm-dd
        dateEn: null, // 判断是否是日期格式mm/dd/yyyy
        dateRange: null,   // 判断是否在日前区间内，validator.valid(txtInput.value, "dateRange", "2001-1-1", "2009-1-1");
        //文件名
        fileName: /^[a-z]:(\\[^\\\/:\*\?"><|]+)*\\?$/i,
        directoryName: /^[a-z]:(\\[^\\\/:\*\?"><|]+)+$/i,
        picFileName: /\.(jpg)|(jpeg)|(png)|(gif)$/i,
        attachFileName: /\.(doc)|(xls)|(txt)|(zip)|(rar)$/i,
        enName: /^[a-zA-Z\s]+$/, // 验证是否只包含英文字符和空格
        // 数字
        number: /^\d+$/,  // 数字
        zipCode: /^\d{6}$/, // 邮编
        idCard: null,    // 验证身份证有效性
        year: /^[1-2][0-9]{3}$/, // 年代
        integer: /^-?[0-9]{1,9}$/, // 整数
        //positiveInteger: /^[1-9][0-9]{0,10}$/,
        //notNegativeInteger: /^(0|([1-9][0-9]{0,10}))$/,
        real: /^-?[0-9]{1,28}(\.[0-9]*)?$/,
        //positiveReal: /^\d+(\.\d+)?$/,
        //notNegativeReal: /^(0|(\d+(\.\d+)?))$/,
        phone: /^\d{3,4}-\d{7,8}((\s|;)+\d{3,4}-\d{7,8})*$/,
        //mobile: /^1[0-9]{10}$/, //以13|15|18开头的11数字
        //mobile: /^1[0-9]{10}$|86[0-9]{11}$|852[0-9]{8}$|853[0-9]{8}$|886[0-9]{9}$/, ////以13|15|18开头的11数字 新增加支持港澳台区号
        mobile: /^1[0-9]{10}$|^86[0-9]{11}$|852[0-9]{8}$|853[0-9]{8}$|886[0-9]{9}$/, ////以13|15|18开头的11数字 新增加支持港澳台区号
        money: /^[0-9]{1,11}(\.[0-9]{1,2})?$/,  //钱
        password: null
    },

    /////////////////////////////////////////////////////
    // 说明：校验通用方法
    // 参数：value：   需要校验的值
    //        validTyp: 需要校验的类型，格式如："notEmpty & real"
    //        params:   其他参数
    // 示例：validator.valid(txtInput.value, "notEmpty & real");
    /////////////////////////////////////////////////////
    valid: function (value, validType, params) {
        if (arguments.length < 2) { alert("validator.valid()缺少参数"); }

        var result = true;

        var arrValidateType = validType.trim().split("&");
        for (var i = 0; i < arrValidateType.length; i++) {
            if (!result) return false;

            var type = arrValidateType[i].trim();
            switch (type) {
                case "notEmpty":
                    result = !String.isNullOrEmpty(value);
                    break;
                case "textRange":
                    if (arguments.length < 4) { return false; }
                    result = this.validateTextLength(value, arguments[2], arguments[3]);
                    break;
                case "idCard":
                    result = this.validateIDCard(value);
                    break;
                case "date":
                    result = this.validateDate(value);
                    break;
                case "dateEn":
                    result = this.validateDate(this.reFormatDateString(value));
                    break;
                case "dateRange":
                    if (arguments.length < 4 && !this.validateDate(value)) { return false; }
                    result = this.validateDateRange(value, arguments[2], arguments[3]);
                    break;
                case "password":
                    if (value.indexOf("<") != -1 || value.indexOf(">") != -1) { return false; }
                    result = this.validateTextLength(value, arguments[2], arguments[3]);
                    break;
                default:
                    result = this.regularValidate(value, this.validType[type]);
                    break;
            }
        }

        return result;
    },

    validateIDCard: function (sNo) {
        sNo = sNo.toString()
        if (sNo.length == 18) {
            var a, b, c
            if (!this.valid(sNo.substr(0, 17), "number")) { return false }
            a = parseInt(sNo.substr(0, 1)) * 7 + parseInt(sNo.substr(1, 1)) * 9 + parseInt(sNo.substr(2, 1)) * 10;
            a = a + parseInt(sNo.substr(3, 1)) * 5 + parseInt(sNo.substr(4, 1)) * 8 + parseInt(sNo.substr(5, 1)) * 4;
            a = a + parseInt(sNo.substr(6, 1)) * 2 + parseInt(sNo.substr(7, 1)) * 1 + parseInt(sNo.substr(8, 1)) * 6;
            a = a + parseInt(sNo.substr(9, 1)) * 3 + parseInt(sNo.substr(10, 1)) * 7 + parseInt(sNo.substr(11, 1)) * 9;
            a = a + parseInt(sNo.substr(12, 1)) * 10 + parseInt(sNo.substr(13, 1)) * 5 + parseInt(sNo.substr(14, 1)) * 8;
            a = a + parseInt(sNo.substr(15, 1)) * 4 + parseInt(sNo.substr(16, 1)) * 2;
            b = a % 11;
            if (b == 2) {
                c = sNo.substr(17, 1).toUpperCase();
            }
            else {
                c = parseInt(sNo.substr(17, 1));
            }

            switch (b) {
                case 0: if (c != 1) { return false; } break;
                case 1: if (c != 0) { return false; } break;
                case 2: if (c != "X") { return false; } break;
                case 3: if (c != 9) { return false; } break;
                case 4: if (c != 8) { return false; } break;
                case 5: if (c != 7) { return false; } break;
                case 6: if (c != 6) { return false; } break;
                case 7: if (c != 5) { return false; } break;
                case 8: if (c != 4) { return false; } break;
                case 9: if (c != 3) { return false; } break;
                case 10: if (c != 2) { return false }
            }
        }
        else {
            if (!this.valid(sNo, "number")) { return false }
        }

        switch (sNo.length) {
            case 15:
                var date = "19" + sNo.substr(6, 2) + "-" + sNo.substr(8, 2) + "-" + sNo.substr(10, 2);
                return this.valid(date, "date");
            case 18:
                var str = sNo.substr(6, 4) + "-" + sNo.substr(10, 2) + "-" + sNo.substr(12, 2);
                return this.valid(str, "date");
        }
        return false
    },

    validateTextLength: function (value, minLen, maxLen) {
        var len = value.trim().bytelength();
        if (Object.isNull(minLen)) { minLen = 0; }
        if (Object.isNull(maxLen)) { maxLen = 9999999; }

        return (len >= minLen) && (len <= maxLen);
    },

    validateDateRange: function (value, minDate, maxDate) {
        if (Object.isNull(minDate)) { minDate = "0001-01-01"; }
        if (Object.isNull(maxDate)) { maxDate = "9999-12-31"; }

        return this.reFormatDateString(value) >= this.reFormatDateString(minDate) &&
            this.reFormatDateString(value) <= this.reFormatDateString(maxDate);
    },

    regularValidate: function (value, reg) {
        reg.lastIndex = -1;
        if (value.length > 0) {
            return reg.test(value);
        }

        return true;
    },

    /*验证为正确的日期格式*/
    validateDate: function (value) {
        if (!this.regularValidate(value, /^\d{4}-\d{1,2}-\d{1,2}$/)) {
            return false;
        }

        var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        var iaDate = new Array(3)
        var year, month, day

        var result = true;
        var strValue = value;
        if (strValue.length != 0) {
            iaDate = strValue.split("-")
            if (iaDate.length != 3 || iaDate[1].length > 2 || iaDate[2].length > 2 || iaDate[1].length < 1 || iaDate[2].length < 1) {
                result = false;
            }

            year = parseInt(iaDate[0], 10);
            month = parseInt(iaDate[1], 10);
            day = parseInt(iaDate[2], 10);

            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                result = false;
            }

            if (year < 1900 || year > 2100) {
                result = false;
            }

            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
            if (month < 1 || month > 12 || day < 1 || day > iaMonthDays[month - 1]) {
                result = false;
            }
        }
        else
            result = false;


        return result;
    },

    /*把日期字符串格式化成 yyyy-mm-dd格式 ，便于比较大小*/
    reFormatDateString: function (dateStr) {
        var dateArray = new Array(3);
        var year, month, day;

        if (dateStr.length == 0)
            return '';


        if (dateStr.indexOf("-") > -1) {
            dateArray = dateStr.split("-");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[0];
            month = dateArray[1];
            day = dateArray[2];
        }
        else {
            dateArray = dateStr.split("/");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[2];
            month = dateArray[0];
            day = dateArray[1];
        }

        if (year.length <= 2) year = '19' + year;
        if (month.length == 1) month = '0' + month;
        if (day.length == 1) day = '0' + day;
        return year + '-' + month + '-' + day;
    },

    /*把日期yyyy-mm-dd字符串格式化成 mm/dd/yyyy格式*/
    reFormatDateStringEn: function (dateStr) {
        var dateArray = new Array(3);
        var year, month, day;

        if (dateStr.length == 0)
            return "";

        if (dateStr.indexOf("-") > -1) {
            dateArray = dateStr.split("-");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[0];
            month = dateArray[1];
            day = dateArray[2];


        }

        if (year.length <= 2) year = '20' + year;
        if (month.length == 1) month = '0' + month;
        if (day.length == 1) day = '0' + day;
        return month + "/" + day + "/" + year;
    },

    // 获得当前日期，用于比较
    getTodayString: function () {
        var d = new Date();
        return this.getDateString(d);
    },

    getDateString: function (dateObj) {
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var monthStr = month > 9 ? month.toString() : '0' + month.toString();
        var dayStr = day > 9 ? day.toString() : '0' + day.toString();
        var result = dateObj.getFullYear().toString() + '-' +
		monthStr + '-' + dayStr;
        return result;
    },
    // 传入2009-1-1或1/1/2009转化成Date对象
    convertDate: function (dateString) {
        if (dateString.length == 0) return null;
        var str = this.reFormatDateString(dateString);
        var year, month, day;

        if (str.indexOf("-") > -1) {
            var dateArray = str.split("-");
            if (dateArray.length != 3) { return null; }
            year = dateArray[0];
            month = dateArray[1];
            day = dateArray[2];
        }
        return new Date(year, parseInt(month, 10) - 1, day);
    },

    /*把日期字符串格式化成 yyyy-mm-dd HH:MM:ss格式 ，便于比较大小*/
    reFormatDateTimeString: function (dateStr) {
        var dateArray = new Array(3);
        var timeArray = new Array(3)
        var year, month, day
        var hour = "00", minute = "00", second = "00";
        var date = "";
        var time = "";

        if (dateStr.length == 0)
            return '';

        if (dateStr.indexOf(":") > -1) {
            date = dateStr.substring(0, dateStr.indexOf(" "));
            time = dateStr.substring(dateStr.indexOf(" ") + 1, dateStr.length);
        }
        else {
            date = dateStr;
            time = "";
        }

        if (date.indexOf("-") > -1) {
            dateArray = date.split("-");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[0];
            month = dateArray[1];
            day = dateArray[2];
        }
        else {
            dateArray = date.split("/");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[2];
            month = dateArray[0];
            day = dateArray[1];
        }
        if (time.indexOf(":") > -1) {
            timeArray = time.split(":");
            hour = timeArray[0];
            minute = timeArray[1];
            second = timeArray[2];
        }

        if (year.length <= 2) year = '19' + year;
        if (month.length == 1) month = '0' + month;
        if (day.length == 1) day = '0' + day;
        return new Date(year, parseInt(month, 10) - 1, day, hour, minute, second);
    },


    // 传入2009-1-1 10:00:05或1/1/2009 2:00:06转化成Date对象
    convertDateTime: function (dateString) {
        if (dateString.length == 0) return null;
        return this.reFormatDateTimeString(dateString);
    }


});




var validator = new ValidatorClass();



//=============================================================================
// 文件名:		TipWindow.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.luo
// 创建日期:	2009-8-25
// 描述:		TipWindow
// 备注:        1. onmouseover弹出带角提示框、2. 提供$error(element, msg)方法，弹出错误提示框
// 示例代码:
//            if (this.showChildTip == null || this.showChildTip.windowElement == null) {
//                this.showChildTip = new TipWindow({
//                    htmlContent: "<div>testest</div>",
//                    eventElement: $(input),
//                    initEvent: function(window){
//                                   window.bind("change", this.onMouseOutElement.bindAsEventListener(this));
//                                   window.bind("click", this.onMouseOutElement.bindAsEventListener(this));
//                               }.bind(this),
//                    width: 400
//                });
//            }
//            this.showChildTip = new TipWindow({
//                htmlContent: "<div>testest</div>",
//                buildHtmlContent: function(currWindow) {
//                    // 这里异步获取数据或html
//                    //...
//                    currWindow.htmlContent = html;
//                    currWindow.show();
//                } .bind(this),
//                width: 400,
//                height: 170
//            });
//             // 错误提示框
//             $error($(input), "请输入名称");
//             $error($(input), "请输入名称", "left"); //提示框靠左
//=============================================================================
var TipWindow = Elong.Control.TipWindow;
TipWindow = Class.create();

Object.extend(TipWindow.prototype, {
    name: "TipWindow",
    //template: new Template("<div class=\"com_way\" style=\"display:none; position: absolute; z-index: 2010;width: #{width}px;#{height}\"><div m=\"z\" class=\"z\" style=\"width: #{twidth}px;\"></div><div m=\"bj\" class=\"bj\"></div><div class=\"clear\"></div><div class=\"bk\" style=\"width: #{cwidth}px;#{cheight}\"><div class=\"bk_1\" style=\"width: #{bwidth}px; #{bheight}\">#{content}</div></div><div m=\"nz\" class=\"none\" style=\"width: #{twidth}px;\"></div><div m=\"nbj\" class=\"none\"></div><div class=\"clear\"></div></div>"),
    template: new Template("<div class=\"com_way el-poptip\" style=\"display:none; position: absolute; z-index: 2010;width: #{width}px;#{height}\"><div class=\"el-poptip-shadow\"><div class=\"el-poptip-container\" style=\"width: #{cwidth}px;#{cheight}\"><div class=\"el-poptip-arrow\"><em>◆</em><span>◆</span></div><div class=\"el-poptip-content\" style=\"width: #{bwidth}px; #{bheight}\">#{content}</div></div></div></div>"),
    options: {
        htmlContent: "",              // 呈现html内容
        eventElement: null,           // 触发事件object
        buildHtmlContent: null,       // 构造显示内容事件，用于异步获得显示内容时
        width: 381,                   // 窗口宽度
        height: 0,                     //  窗口高度，不设置则为自适应
        defer: false,                  // 是否延迟出现
        autoClose: true,            // 是否鼠标移开自动关闭
        floatType: null,            // 是否固定位置：leftTop， leftBottom，rightTop，rightBottom，null(自动判断位置)
        initEvent: function () { }             // bind窗口内元素的事件, 参数windowElement为窗口父元素: function(windowElement){}
    },

    //初始化
    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);

        // mouseover时鼠标停留一定时间才弹出
        this.eventElement.bind("mouseout", this.onMouseOutElement.bindAsEventListener(this));
        if (this.defer) {
            this.showTimer = FunctionExt.defer(function () {
                if (!Object.isNull(this.buildHtmlContent)) { this.buildHtmlContent(this); }
                else { this.show(); }
                clearTimeout(this.showTimer);
                this.showTimer = null;
            }, 300, this);
        }
        else {
            if (!Object.isNull(this.buildHtmlContent)) { this.buildHtmlContent(this); }
            else { this.show(); }
        }
    },

    show: function () {
        this.initializeDOM();
        this.initializeEvent();
        this.render();
        this.initEvent(this.windowElement);
    },

    initializeDOM: function () {
        this.contentEndRegion = $("#m_contentend");
        var content = this.template.eval({
            //width: 260,
            width: this.width,
            height: this.height == 0 ? "" : String.format("height:{0}px;", this.height),
            //twidth: this.width - 29,
            cwidth: this.width - 22,
            cheight: this.height == 0 ? "" : String.format("height:{0}px;", this.height - 6),
            bwidth: this.width - 26,
            bheight: this.height == 0 ? "" : String.format("height:{0}px;", this.height - 26),
            content: this.htmlContent
        });
        this.windowElement = $(content).appendTo(this.contentEndRegion);
    },

    destroyDOM: function () {
        this.htmlContent = "";
        this.windowElement = null;
        this.eventElement = null;
        this.contentEndRegion = null;
    },

    initializeEvent: function () {
        this.windowElement.bind("mouseout", this.onMouseOutRegion.bindAsEventListener(this));
        this.windowElement.bind("mouseover", this.onMouseOverRegion.bindAsEventListener(this));
        FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
    },

    destroyEvent: function () {
        $(document).unbind("click", this.onOutClickHandler);
        this.windowElement.unbind("mouseout");
        this.windowElement.unbind("mouseover");
        this.eventElement.unbind("mouseout");
    },

    onMouseOutElement: function () {
        if (this.showTimer != null) {
            clearTimeout(this.showTimer);
            this.showTimer = null;
            this.eventElement.unbind("mouseout");
            //this.dispose();
        }
        // 自动消失
        this.setOutTimer();
    },

    onMouseOverRegion: function (evt) {
        if (this.outTimer != null) {
            clearTimeout(this.outTimer);
            this.outTimer = null;
        }
    },

    onMouseOutRegion: function (evt) {
        this.setOutTimer();
    },
    //消失时间改为一秒
    setOutTimer: function () {
        this.outTimer = FunctionExt.defer(function () {
            if (this.autoClose) { this.close(); }
        } .bind(this), 1000, this);
    },

    onOutClick: function () {
        this.onOutClickHandler = function (evt) {
            var element = Event.element(evt);
            if (element.index(this.eventElement) == 0)
            { $(document).one("click", this.onOutClickHandler); }
            else if (this.windowElement.find(":descendant").index(element) == -1) { if (this.autoClose) { this.close(); } }
        } .bindAsEventListener(this);
        $(document).one("click", this.onOutClickHandler);
    },

    render: function () {
        // 设置大小位置
        var top, left;
        var showZone = this.getWindowZone(this.eventElement, this.windowElement);
        showZone = Object.isNull(this.floatType) ? showZone : this.floatType;
        switch (showZone) {
            case "leftTop":
                //top = this.eventElement.offset().top - this.windowElement.height();
                //left = this.eventElement.offset().left - this.width + this.eventElement.width() / 2 + 24;
                top = this.eventElement.offset().top - this.windowElement.height() - 10;
                left = this.eventElement.offset().left - this.width + this.eventElement.width() / 2 + 33;
                /*
                this.windowElement.find("div[m='z']").attr("class", "none");
                this.windowElement.find("div[m='bj']").attr("class", "none");
                this.windowElement.find("div[m='nz']").attr("class", "z_br");
                this.windowElement.find("div[m='nbj']").attr("class", "bj_br");
                this.windowElement.find("div.bk").attr("class", "bk_top");
                this.windowElement.find("div.bk_1").attr("class", "bk_top_1");
                */
                this.windowElement.find("div.el-poptip-arrow").attr("class", "el-poptip-arrow el-poptip-arrow-5");

                break;
            case "leftBottom":
                top = this.eventElement.offset().top + this.eventElement.height() + 3 + 10;
                left = this.eventElement.offset().left - this.width + this.eventElement.width() / 2 + 33;
                this.windowElement.find("div.el-poptip-arrow").attr("class", "el-poptip-arrow el-poptip-arrow-1");
                break;
            case "rightTop":
                //top = this.eventElement.offset().top - this.windowElement.height();
                //left = this.eventElement.offset().left + this.eventElement.outerWidth() / 2 - 24;
                top = this.eventElement.offset().top - this.windowElement.height() - 10;
                left = this.eventElement.offset().left + this.eventElement.outerWidth() / 2 - 52;
                /*
                this.windowElement.find("div[m='z']").attr("class", "none");
                this.windowElement.find("div[m='bj']").attr("class", "none");
                this.windowElement.find("div[m='nz']").attr("class", "z_bl");
                this.windowElement.find("div[m='nbj']").attr("class", "bj_bl");
                this.windowElement.find("div.bk").attr("class", "bk_top");
                this.windowElement.find("div.bk_1").attr("class", "bk_top_1");
                */
                this.windowElement.find("div.el-poptip-arrow").attr("class", "el-poptip-arrow el-poptip-arrow-7");
                break;
            case "rightBottom":
                top = this.eventElement.offset().top + this.eventElement.height() + 3 + 10;
                //left = this.eventElement.offset().left + this.eventElement.outerWidth() / 2 - 24;
                left = this.eventElement.offset().left + this.eventElement.outerWidth() / 2 - 52;
                /*
                this.windowElement.find("div[m='z']").attr("class", "z_tl");
                this.windowElement.find("div[m='bj']").attr("class", "bj_tl");
                this.windowElement.find("div[m='nz']").attr("class", "none");
                this.windowElement.find("div[m='nbj']").attr("class", "none");
                */
                this.windowElement.find("div.el-poptip-arrow").attr("class", "el-poptip-arrow el-poptip-arrow-11");
                break;
        }

        this.windowElement[0].style.top = top + "px";
        this.windowElement[0].style.left = left + "px";
        this.ie6FilterIFrame = Globals.addIE6Filter(this.windowElement.width() + 10, this.windowElement.height(), left, top);
        //this.windowElement.fadeIn("normal");
        if (navigator.appName == "Microsoft Internet Explorer") {
            this.windowElement.show();
        }
        else {
            this.windowElement.fadeIn("normal");
        }

    },

    getWindowZone: function (eventElement, windowElement) {
        var zone = { leftTop: "leftTop", leftBottom: "leftBottom", rightTop: "rightTop", rightBottom: "rightBottom" };
        var scroll = Globals.getScrollPosition();
        var browserRegion = Globals.browserDimensions();
        var isRight = true;
        if (browserRegion.width - (eventElement.offset().left - scroll.x) < windowElement.width() &&
			eventElement.offset().left - scroll.x > windowElement.width()) { isRight = false; }

        if (isRight) {
            if (browserRegion.height - (eventElement.offset().top - scroll.y) > windowElement.height())
            { return zone.rightBottom }
            else if (eventElement.offset().top - scroll.y > windowElement.height()) { return zone.rightTop; }
            else { return zone.rightBottom }
        }
        else {
            if (browserRegion.height - (eventElement.offset().top - scroll.y) > windowElement.height())
            { return zone.leftBottom }
            else if (eventElement.offset().top - scroll.y > windowElement.height()) { return zone.leftTop; }
            else { return zone.leftBottom }
        }
    },

    //    getPageDimensions: function() {
    //        var pageDimensions = { width: 0, height: 0 };
    //        var xScroll, yScroll;
    //        if (window.innerHeight && window.scrollMaxY) {
    //            xScroll = document.body.scrollWidth;
    //            yScroll = window.innerHeight + window.scrollMaxY;
    //        } else if (document.body.scrollHeight > document.body.offsetHeight) {
    //            xScroll = document.body.scrollWidth;
    //            yScroll = document.body.scrollHeight;
    //        } else {
    //            xScroll = document.body.offsetWidth;
    //            yScroll = document.body.offsetHeight;
    //        }

    //        var windowWidth, windowHeight;
    //        if (self.innerHeight) {
    //            windowWidth = self.innerWidth;
    //            windowHeight = self.innerHeight;
    //        } else if (document.documentElement && document.documentElement.clientHeight) {
    //            windowWidth = document.documentElement.clientWidth;
    //            windowHeight = document.documentElement.clientHeight;
    //        } else if (document.body) {
    //            windowWidth = document.body.clientWidth;
    //            windowHeight = document.body.clientHeight;
    //        }

    //        if (yScroll < windowHeight) {
    //            pageDimensions.height = windowHeight;
    //        } else {
    //            pageDimensions.height = yScroll;
    //        }

    //        if (xScroll < windowWidth) {
    //            pageDimensions.width = windowWidth;
    //        } else {
    //            pageDimensions.width = xScroll;
    //        }
    //        return pageDimensions;
    //    },

    close: function () {
        this.dispose();
    },

    dispose: function () {
        if (this.windowElement) {
            //this.windowElement.fadeOut("normal");
            if (navigator.appName == "Microsoft Internet Explorer") {
                this.windowElement.hide();
            }
            else {
                this.windowElement.fadeOut("normal");
            }
            FunctionExt.defer(function () {
                if (this.windowElement) {
                    Globals.closeIE6Fliter(this.ie6FilterIFrame);
                    this.windowElement.remove();
                    this.destroyEvent();
                    this.destroyDOM();
                }
            } .bind(this), 500);
        }
    }
});

var ErrorTipWindow = Elong.Control.ErrorTipWindow;
ErrorTipWindow = Class.create();

Object.extend(ErrorTipWindow.prototype, {
    name: "ErrorTipWindow",
    templateRegion: "<div style=\"display:none; position: absolute; z-index: 5000; \" class=\"com_bug\"><div class=\"w\">{0}</div></div>",

    options: {
        errorMsg: "",              // 错误信息
        align: "right",            // 布局：right,left
        eventElement: null,         // 触发事件object
        isSelect:true
    },

    //初始化
    initialize: function(options) {
        Object.extend(Object.extend(this, this.options), options);
        this.align = String.isNullOrEmpty(this.align) ? "right" : this.align;
        this.initializeDOM();
        this.initializeEvent();

        this.render();
    },

    initializeDOM: function() {
        this.contentEndRegion = $("#m_contentend");
        this.windowElement = $(String.format(this.templateRegion, this.errorMsg)).appendTo(this.contentEndRegion);
    },

    destroyDOM: function() {
        this.errorMsg = "";
        this.windowElement = null;
        this.eventElement = null;
        this.contentEndRegion = null;
    },

    initializeEvent: function() {
        //        this.windowElement.bind("mouseout", this.onMouseOutRegion.bindAsEventListener(this));
        //        this.windowElement.bind("mouseover", this.onMouseOverRegion.bindAsEventListener(this));
        FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
    },

    destroyEvent: function() {
        $(document).unbind("click", this.onOutClickHandler);
        this.windowElement.unbind("mouseout");
        this.windowElement.unbind("mouseover");
    },

    onOutClick: function() {
        this.onOutClickHandler = function(evt) {
            var element = Event.element(evt);
            if (this.windowElement.find(":descendant").index(element) == -1) { this.dispose(); }
            else { $(document).one("click", this.onOutClickHandler); }
        } .bindAsEventListener(this);
        $(document).one("click", this.onOutClickHandler);
    },

    onMouseOverRegion: function(evt) {
        var element = Event.element(evt);
        if (this.outTimer != null) {
            clearTimeout(this.outTimer);
            this.outTimer = null;
        }
    },

    onMouseOutRegion: function(evt) {
        var element = Event.element(evt);
        this.outTimer = FunctionExt.defer(function() {
            this.dispose();
        }, 10, this);
    },

    render: function() {
        // 设置大小位置
        var top = this.eventElement.offset().top + this.eventElement.height() - 17;
        var left = this.eventElement.offset().left + this.eventElement.width() + 5;
        this.windowElement[0].style.top = top + "px";
        if (this.align.toLowerCase() == "right") {
            this.windowElement[0].style.left = left + "px";
        }
        else {
            left = this.eventElement.offset().left - this.windowElement.width() - 5;
            this.windowElement[0].style.left = left + "px";
        }
        this.ie6FilterIFrame = Globals.addIE6Filter(this.windowElement.width(), this.windowElement.height(), left, top);
        this.windowElement.show();
        this.scrollToCenter(this.eventElement);

        this.eventElement.addClass("com_ErrorBox");
        if (this.eventElement.is("input") && this.isSelect) { this.eventElement.select(); }
    },
    // 滚动到屏幕中间
    scrollToCenter: function(element) {
        var scroll = Globals.getScrollPosition();
        var browserSize = Globals.browserDimensions();
        if (element.offset().top < scroll.y) {
            window.scrollTo(scroll.x, element.offset().top - browserSize.height / 2);
        }
    },

    dispose: function() {
        if (this.windowElement) {
            this.windowElement.hide();
            this.eventElement.removeClass("com_ErrorBox");
            FunctionExt.defer(function() {
                if (this.windowElement) {
                    Globals.closeIE6Fliter(this.ie6FilterIFrame);
                    this.windowElement.remove();
                    this.destroyEvent();
                    this.destroyDOM();
                }
            } .bind(this), 500);
        }
    }
});

function $error(element, msg, align, isSelect) {
    var inputselect = true;
    if (!Object.isNull(isSelect) && typeof (isSelect) != "undefined")
        inputselect = isSelect;
      
    if (Object.isNull(this.tempErrorWindow) || Object.isNull(this.tempErrorWindow.windowElement)) {
        this.tempErrorWindow = new ErrorTipWindow({
            errorMsg: msg,
            align: align,
            eventElement: element,
            isSelect:inputselect
        });
    }
    else {
        element.addClass("com_ErrorBox");
        element.one("click", function(evt) {
            FunctionExt.defer(function() {
                if (Object.isNull(msg)) return;
                if (Object.isNull(this.tempErrorWindow) || Object.isNull(this.tempErrorWindow.windowElement)) {
                    this.tempErrorWindow = new ErrorTipWindow({
                        errorMsg: msg,
                        align: align,
                        eventElement: element,
                        isSelect: inputselect
                    });
                }
            } .bind(this), 600);
        } .bind(this));
    }
}
//===================================================================
// 文件名:		CitySuggests.js
// 版权:		Copyright (C) 2010 Elong
// 创建人:		weiliang.li
// 创建日期:	2011-1-13
// 描述:		城市输入框
// 备注:		
// 示例代码：
//
//    基本用法
//	  var city = new CityWindow({
//	                                 eventElement:$("#txtCity"),
//		                             cityType:"flightsrc",
//                                   lang:"cn",
//									 resultNextId:"txtTime1",
//									 onSelect:function(evt,data){
//										 //处理选中后的事件
//										  alert(data.CityNameCn);
//								       }
//							    }); 
//
//    所有参数说明： 
//             
// 		eventElement: 弹出城市输入框的元素; 
//		lang: 当前语言， 值： cn,en  ;
//		resultNextId:  选中后焦点需要移动的元素Id,
//		cityType: 城市输入框的搜索类型，值： flightsrc,flightdest,flightall,iflightdest,iflightsrc,iflightall,hotel,ihotel,hotelall,packagesrc,packagedest,packageall,iflightcountry;
//		hotType: 热门城市搜索类型，默认与cityType相同 ；
//		onSelect: null,  当选中城市的时候执行的操作，默认传入参数为 （eventElement,selectCity）
//		onClose:null,  当搜索窗口关闭的时候的执行的时间   默认传入参数为（eventElement，windowElement）
//		hotWidth: 320,热门城市框的宽度
//		hotHeight: 138,  热门城市框的高度
//		delay:50,    搜索延迟的时间，默认是50ms
//		maxLen: 搜索返回的结果数，默认为10
//		enableSearch:true, 是否支持搜索，默认为True
//	    isJsonp:0,  是否支持Jsonp  0，不支持，1，支持
//      searchUrl:"http://hotel.elong.com/city/"   支持Jsonp的时候，请求的服务地址。
//
//
//   对eventElement 的附加信息：
//
//      eventElement.attr("cityid");  获取选中城市的城市ID
//      eventElement.attr("citythreesign");  获取选中城市的三字码
//      eventElement.get(0).City  获取选中城市的所有信息。
//===================================================================
var CityPad = Elong.Control.CityPad;
CityPad = Class.create();
Object.extend(CityPad.prototype, {
    name: "CityPad",
    timeout: null,
    errtimeout: null,
    selectCity: null,
    KeyCode: {
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        Del: 46,
        Tab: 9,
        Return: 13,
        Esc: 27,
        Command: 188,
        PageUp: 33,
        PageDown: 34,
        BackSpace: 8,
        Tab: 9,
        newStyle: false
    },
    m_Container: new Template("<div style=\"width:#{HotWidth}px;display:block \" class=\"#{ContainerClass}\"><div style=\"width:100%;\">#{HotTitle}<ul method=\"hotTab\" class=\"#{AbcSearch} clx\">#{HotTab}</ul><ul method=\"hotData\" class=\"#{Popcitylist}#{Language}\" style=\"#{PopcitylistStyle}\">#{HotData}</ul><div id=\"hotCityCMS\">#{Cms}</div></div><div class=\"clear\"></div><div class=\"clear\"></div></div>"),
    m_Result: new Template("<div style=\"width: #{Width}px;position:relative;\" class=\"com_results\"><div style=\"width: 100%;\">#{ResultTitleHtml}<ul method=\"cityData\" style=\"#{ULStyle}\">#{ResultDataHtml}</ul></div><div class=\"clear\"></div><div class=\"clear\"></div></div>"),
    m_ResultTitleCn: "<span class=\"l_black\">{0}, 按照拼音排序 <a method=\"close\" class=\"ac_close\" href=\"#?\" title=\"关闭\"></a></span>",
    m_ResultTitleEn: "  <span class=\"l_black\">{0}, sort by spelling <a method=\"close\" class=\"ac_close\" href=\"#?\" title=\"close\"></a></span>",
    m_TitleCn: "<div class=\"ac_title\"><span>拼音支持首字母输入, 或<span style=\"font-family: simsun;\">&nbsp;←↑↓→&nbsp;</span>选择</span><a class=\"ac_close\" href=\"#?\" method=\"close\"  title=\"关闭\"></a></div>",
    m_TitleEn: "<div class=\"ac_title\"><span>Please enter or select from below</span><a class=\"ac_close\" href=\"#?\"   method=\"close\" title=\"close\"></a></div>",
    m_Error: new Template("<div class=\"com_error\" style=\"width: #{ErrorWidth}px;position:relative;\"><div style=\"width:100%;\"><ul><li>#{Error}</li></ul></div><div class=\"clear\"></div><div class=\"clear\"></div></div>"),
    m_ErrorCn: "对不起，找不到<span class=\"ml5\">{0}</span>",
    m_ErrorEn: "No matches!",
    isHotelStyle: false,
    cms: "",
    options: {
        eventElement: null,
        lang: "cn",
        cityType: "",
        hotType: "",
        onSelect: null,
        onClose: null,
        onBeforClick: null,
        hotWidth: 340,
        hotHeight: 138,
        hotData: null,
        cityData: null,
        colLen: 4,          //一排的个数
        maxLen: 10,          //搜索最大显示个数
        enableSearch: true,
        isAutoSelect: false,
        isJsonp: 0,
        resultNextId: "",
        searchField: "",
        searchType: "",
        searchUrl: "http://hotel.elong.com/city/",
        containerClass: "com_hotresults",
        abcSearch: "AbcSearch",
        popcitylist: "popcitylist",
        popcitylistStyle: "overflow: auto; max-height: 260px;",
        errorWidth: 230
    },
    searchHistoryCookie: "CitySearchHistory",
    //初始化
    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        if (typeof (options.isHotelStyle) == "undefined") {
            this.isHotelStyle =
                (this.lang == "cn" && this.cityType == "hotel" && this.hotType == "hotel") ||
                document.domain == "hotel.elong.com";
        }
        this.prepareData();
        if (this.isHotelStyle) {
            this.hotWidth = 430;
            this.colLen = 5;
            this.m_TitleCn = new Template("<div class=\"ac_title\"><span>支持中文/拼音/简拼输入</span>#{searchHistory}</div>");
            this.containerClass = "com_hotrenew";
            this.abcSearch = "AbcSearchnew";
            this.popcitylist = "popcitylistnew";
            this.popcitylistStyle = "";
            this.errorWidth = 280;
            var url = "http://travel.elong.com/hotel/hotcitycms/true.html";
            elongAjax.callBack(url, {}, function (data) {
                CityPad.prototype.cms = data;
                $("#emptyCMS").html(data);
            } .bind(this), true, "GET", false, "jsonp");
        }
        if (this.lang == "en" && this.hotWidth < 425) {
            this.hotWidth = 425;
        }
        this.eventElement.attr("datacheck", "");
        this.eventElement.unbind("click");
        this.eventElement.unbind("keyup");
        this.eventElement.unbind("keydown");
        this.eventElement.bind("click", this.onInputClick.bindAsEventListener(this));
        this.eventElement.bind("keyup", this.onInputKeyUp.bindAsEventListener(this));
        if (!this.isHotelStyle)
            this.eventElement.bind("keydown", this.onInputKeyDown.bindAsEventListener(this));
        this.eventElement.bind("blur", this.onInputBlur.bindAsEventListener(this));
    },

    getSelect: function () {
        return this.selectCity;
    },
    onInputBlur: function () {
        if (this.onSelect && !Object.isNull(this.selectCity)) {
            var cityName = (this.lang.toLowerCase() == "cn") ? this.selectCity.CityNameCn : this.selectCity.CityNameEn;
            this.eventElement.val(cityName);
            if (this.isAutoSelect)
                this.onSelect(this.eventElement, this.selectCity);
        }
    },

    prepareData: function () {
        if (!String.isNullOrEmpty(this.cityType)) {
            //初始化
            if (this.eventElement != null) {
                var city = {
                    "CityId": this.eventElement.attr("CityId"),
                    "CityThreeSign": this.eventElement.attr("CityThreeSign"),
                    "CityNameCn": (this.lang.toLowerCase() == "cn") ? this.eventElement.val() : this.eventElement.attr("CityName"),
                    "CityNameEn": (this.lang.toLowerCase() == "en") ? this.eventElement.val() : this.eventElement.attr("CityName")
                };
                this.eventElement[0]["City"] = city;
            }

            var _checkHotData = false, _checkDataId = false;
            _checkHotData = !((typeof CityHot) == "undefined")
            if (_checkHotData) {
                var typeStr = !String.isNullOrEmpty(this.hotType) ? this.hotType : this.cityType;
                for (var i = 0; i < CityHot.length; i++) {
                    if (CityHot[i].CityType == typeStr) {
                        this.hotData = CityHot[i].TabList;
                    }
                }
            }
        }
    },

    destroyDOM: function () {
        this.windowElement = null;
        this.contentEndRegion = null;
        this.options = null;
    },

    initializeEvent: function () {
        if (this.windowElement) {
            this.windowElement.bind("click", this.onClickRegion.bindAsEventListener(this));
            this.windowElement.bind("mouseout", this.onMouseOutRegion.bindAsEventListener(this));
            this.windowElement.bind("mouseover", this.onMouseOverRegion.bindAsEventListener(this));
            FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
        }
    },

    destroyEvent: function () {
        this.windowElement.unbind("click");
        this.windowElement.unbind("mouseout");
        this.windowElement.unbind("mouseover");
    },
    UnicodeChr: function () {
        return '00A4,00A7,00A8,00B0,00B1,00B7,00D7,00E0,00E1,00E8,00E9,00EA,00EC,00ED,00F2,00F3,00F7,00F9,00FA,00FC,0101,0113,011B,012B,014D,016B,01CE,01D0,01D2,01D4,01D6,01D8,01DA,01DC,02C7,02C9,0391,0392,0393,0394,0395,0396,0397,0398,0399,039A,039B,039C,039D,039E,039F,03A0,03A1,03A3,03A4,03A5,03A6,03A7,03A8,03A9,03B1,03B2,03B3,03B4,03B5,03B6,03B7,03B8,03B9,03BA,03BB,03BC,03BD,03BE,03BF,03C0,03C1,03C3,03C4,03C5,03C6,03C7,03C8,03C9,0401,0410,0411,0412,0413,0414,0415,0416,0417,0418,0419,041A,041B,041C,041D,041E,041F,0420,0421,0422,0423,0424,0425,0426,0427,0428,0429,042A,042B,042C,042D,042E,042F,0430,0431,0432,0433,0434,0435,0436,0437,0438,0439,043A,043B,043C,043D,043E,043F,0440,0441,0442,0443,0444,0445,0446,0447,0448,0449,044A,044B,044C,044D,044E,044F,0451,2014,2016,2018,2019,201C,201D,2026,2030,2032,2033,203B,2103,2116,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,216A,216B,2190,2191,2192,2193,2208,220F,2211,221A,221D,221E,2220,2225,2227,2228,2229,222A,222B,222E,2234,2235,2236,2237,223D,2248,224C,2260,2261,2264,2265,226E,226F,2299,22A5,2312,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2474,2475,2476,2477,2478,2479,247A,247B,247C,247D,247E,247F,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,248A,248B,248C,248D,248E,248F,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,249A,249B,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,250A,250B,250C,250D,250E,250F,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,251A,251B,251C,251D,251E,251F,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,252A,252B,252C,252D,252E,252F,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,253A,253B,253C,253D,253E,253F,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,254A,254B,25A0,25A1,25B2,25B3,25C6,25C7,25CB,25CE,25CF,2605,2606,2640,2642,3000,3001,3002,3003,3005,3008,3009,300A,300B,300C,300D,300E,300F,3010,3011,3013,3014,3015,3016,3017,3041,3042,3043,3044,3045,3046,3047,3048,3049,304A,304B,304C,304D,304E,304F,3050,3051,3052,3053,3054,3055,3056,3057,3058,3059,305A,305B,305C,305D,305E,305F,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,306A,306B,306C,306D,306E,306F,3070,3071,3072,3073,3074,3075,3076,3077,3078,3079,307A,307B,307C,307D,307E,307F,3080,3081,3082,3083,3084,3085,3086,3087,3088,3089,308A,308B,308C,308D,308E,308F,3090,3091,3092,3093,30A1,30A2,30A3,30A4,30A5,30A6,30A7,30A8,30A9,30AA,30AB,30AC,30AD,30AE,30AF,30B0,30B1,30B2,30B3,30B4,30B5,30B6,30B7,30B8,30B9,30BA,30BB,30BC,30BD,30BE,30BF,30C0,30C1,30C2,30C3,30C4,30C5,30C6,30C7,30C8,30C9,30CA,30CB,30CC,30CD,30CE,30CF,30D0,30D1,30D2,30D3,30D4,30D5,30D6,30D7,30D8,30D9,30DA,30DB,30DC,30DD,30DE,30DF,30E0,30E1,30E2,30E3,30E4,30E5,30E6,30E7,30E8,30E9,30EA,30EB,30EC,30ED,30EE,30EF,30F0,30F1,30F2,30F3,30F4,30F5,30F6,3105,3106,3107,3108,3109,310A,310B,310C,310D,310E,310F,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,311A,311B,311C,311D,311E,311F,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,4E00,4E01,4E03,4E07,4E08,4E09,4E0A,4E0B,4E0C,4E0D,4E0E,4E10,4E11,4E13,4E14,4E15,4E16,4E18,4E19,4E1A,4E1B,4E1C,4E1D,4E1E,4E22,4E24,4E25,4E27,4E28,4E2A,4E2B,4E2C,4E2D,4E30,4E32,4E34,4E36,4E38,4E39,4E3A,4E3B,4E3D,4E3E,4E3F,4E43,4E45,4E47,4E48,4E49,4E4B,4E4C,4E4D,4E4E,4E4F,4E50,4E52,4E53,4E54,4E56,4E58,4E59,4E5C,4E5D,4E5E,4E5F,4E60,4E61,4E66,4E69,4E70,4E71,4E73,4E7E,4E86,4E88,4E89,4E8B,4E8C,4E8D,4E8E,4E8F,4E91,4E92,4E93,4E94,4E95,4E98,4E9A,4E9B,4E9F,4EA0,4EA1,4EA2,4EA4,4EA5,4EA6,4EA7,4EA8,4EA9,4EAB,4EAC,4EAD,4EAE,4EB2,4EB3,4EB5,4EBA,4EBB,4EBF,4EC0,4EC1,4EC2,4EC3,4EC4,4EC5,4EC6,4EC7,4EC9,4ECA,4ECB,4ECD,4ECE,4ED1,4ED3,4ED4,4ED5,4ED6,4ED7,4ED8,4ED9,4EDD,4EDE,4EDF,4EE1,4EE3,4EE4,4EE5,4EE8,4EEA,4EEB,4EEC,4EF0,4EF2,4EF3,4EF5,4EF6,4EF7,4EFB,4EFD,4EFF,4F01,4F09,4F0A,4F0D,4F0E,4F0F,4F10,4F11,4F17,4F18,4F19,4F1A,4F1B,4F1E,4F1F,4F20,4F22,4F24,4F25,4F26,4F27,4F2A,4F2B,4F2F,4F30,4F32,4F34,4F36,4F38,4F3A,4F3C,4F3D,4F43,4F46,4F4D,4F4E,4F4F,4F50,4F51,4F53,4F55,4F57,4F58,4F59,4F5A,4F5B,4F5C,4F5D,4F5E,4F5F,4F60,4F63,4F64,4F65,4F67,4F69,4F6C,4F6F,4F70,4F73,4F74,4F76,4F7B,4F7C,4F7E,4F7F,4F83,4F84,4F88,4F89,4F8B,4F8D,4F8F,4F91,4F94,4F97,4F9B,4F9D,4FA0,4FA3,4FA5,4FA6,4FA7,4FA8,4FA9,4FAA,4FAC,4FAE,4FAF,4FB5,4FBF,4FC3,4FC4,4FC5,4FCA,4FCE,4FCF,4FD0,4FD1,4FD7,4FD8,4FDA,4FDC,4FDD,4FDE,4FDF,4FE1,4FE3,4FE6,4FE8,4FE9,4FEA,4FED,4FEE,4FEF,4FF1,4FF3,4FF8,4FFA,4FFE,500C,500D,500F,5012,5014,5018,5019,501A,501C,501F,5021,5025,5026,5028,5029,502A,502C,502D,502E,503A,503C,503E,5043,5047,5048,504C,504E,504F,5055,505A,505C,5065,506C,5076,5077,507B,507E,507F,5080,5085,5088,508D,50A3,50A5,50A7,50A8,50A9,50AC,50B2,50BA,50BB,50CF,50D6,50DA,50E6,50E7,50EC,50ED,50EE,50F3,50F5,50FB,5106,5107,510B,5112,5121,513F,5140,5141,5143,5144,5145,5146,5148,5149,514B,514D,5151,5154,5155,5156,515A,515C,5162,5165,5168,516B,516C,516D,516E,5170,5171,5173,5174,5175,5176,5177,5178,5179,517B,517C,517D,5180,5181,5182,5185,5188,5189,518C,518D,5192,5195,5196,5197,5199,519B,519C,51A0,51A2,51A4,51A5,51AB,51AC,51AF,51B0,51B1,51B2,51B3,51B5,51B6,51B7,51BB,51BC,51BD,51C0,51C4,51C6,51C7,51C9,51CB,51CC,51CF,51D1,51DB,51DD,51E0,51E1,51E4,51EB,51ED,51EF,51F0,51F3,51F5,51F6,51F8,51F9,51FA,51FB,51FC,51FD,51FF,5200,5201,5202,5203,5206,5207,5208,520A,520D,520E,5211,5212,5216,5217,5218,5219,521A,521B,521D,5220,5224,5228,5229,522B,522D,522E,5230,5233,5236,5237,5238,5239,523A,523B,523D,523F,5240,5241,5242,5243,524A,524C,524D,5250,5251,5254,5256,525C,525E,5261,5265,5267,5269,526A,526F,5272,527D,527F,5281,5282,5288,5290,5293,529B,529D,529E,529F,52A0,52A1,52A2,52A3,52A8,52A9,52AA,52AB,52AC,52AD,52B1,52B2,52B3,52BE,52BF,52C3,52C7,52C9,52CB,52D0,52D2,52D6,52D8,52DF,52E4,52F0,52F9,52FA,52FE,52FF,5300,5305,5306,5308,530D,530F,5310,5315,5316,5317,5319,531A,531D,5320,5321,5323,5326,532A,532E,5339,533A,533B,533E,533F,5341,5343,5345,5347,5348,5349,534A,534E,534F,5351,5352,5353,5355,5356,5357,535A,535C,535E,535F,5360,5361,5362,5363,5364,5366,5367,5369,536B,536E,536F,5370,5371,5373,5374,5375,5377,5378,537A,537F,5382,5384,5385,5386,5389,538B,538C,538D,5395,5398,539A,539D,539F,53A2,53A3,53A5,53A6,53A8,53A9,53AE,53B6,53BB,53BF,53C1,53C2,53C8,53C9,53CA,53CB,53CC,53CD,53D1,53D4,53D6,53D7,53D8,53D9,53DB,53DF,53E0,53E3,53E4,53E5,53E6,53E8,53E9,53EA,53EB,53EC,53ED,53EE,53EF,53F0,53F1,53F2,53F3,53F5,53F6,53F7,53F8,53F9,53FB,53FC,53FD,5401,5403,5404,5406,5408,5409,540A,540C,540D,540E,540F,5410,5411,5412,5413,5415,5416,5417,541B,541D,541E,541F,5420,5421,5423,5426,5427,5428,5429,542B,542C,542D,542E,542F,5431,5432,5434,5435,5438,5439,543B,543C,543E,5440,5443,5446,5448,544A,544B,5450,5452,5453,5454,5455,5456,5457,5458,5459,545B,545C,5462,5464,5466,5468,5471,5472,5473,5475,5476,5477,5478,547B,547C,547D,5480,5482,5484,5486,548B,548C,548E,548F,5490,5492,5494,5495,5496,5499,549A,549B,549D,54A3,54A4,54A6,54A7,54A8,54A9,54AA,54AB,54AC,54AD,54AF,54B1,54B3,54B4,54B8,54BB,54BD,54BF,54C0,54C1,54C2,54C4,54C6,54C7,54C8,54C9,54CC,54CD,54CE,54CF,54D0,54D1,54D2,54D3,54D4,54D5,54D7,54D9,54DA,54DC,54DD,54DE,54DF,54E5,54E6,54E7,54E8,54E9,54EA,54ED,54EE,54F2,54F3,54FA,54FC,54FD,54FF,5501,5506,5507,5509,550F,5510,5511,5514,551B,5520,5522,5523,5524,5527,552A,552C,552E,552F,5530,5531,5533,5537,553C,553E,553F,5541,5543,5544,5546,5549,554A,5550,5555,5556,555C,5561,5564,5565,5566,5567,556A,556C,556D,556E,5575,5576,5577,5578,557B,557C,557E,5580,5581,5582,5583,5584,5587,5588,5589,558A,558B,558F,5591,5594,5598,5599,559C,559D,559F,55A7,55B1,55B3,55B5,55B7,55B9,55BB,55BD,55BE,55C4,55C5,55C9,55CC,55CD,55D1,55D2,55D3,55D4,55D6,55DC,55DD,55DF,55E1,55E3,55E4,55E5,55E6,55E8,55EA,55EB,55EC,55EF,55F2,55F3,55F5,55F7,55FD,55FE,5600,5601,5608,5609,560C,560E,560F,5618,561B,561E,561F,5623,5624,5627,562C,562D,5631,5632,5634,5636,5639,563B,563F,564C,564D,564E,5654,5657,5658,5659,565C,5662,5664,5668,5669,566A,566B,566C,5671,5676,567B,567C,5685,5686,568E,568F,5693,56A3,56AF,56B7,56BC,56CA,56D4,56D7,56DA,56DB,56DD,56DE,56DF,56E0,56E1,56E2,56E4,56EB,56ED,56F0,56F1,56F4,56F5,56F9,56FA,56FD,56FE,56FF,5703,5704,5706,5708,5709,570A,571C,571F,5723,5728,5729,572A,572C,572D,572E,572F,5730,5733,5739,573A,573B,573E,5740,5742,5747,574A,574C,574D,574E,574F,5750,5751,5757,575A,575B,575C,575D,575E,575F,5760,5761,5764,5766,5768,5769,576A,576B,576D,576F,5773,5776,5777,577B,577C,5782,5783,5784,5785,5786,578B,578C,5792,5793,579B,57A0,57A1,57A2,57A3,57A4,57A6,57A7,57A9,57AB,57AD,57AE,57B2,57B4,57B8,57C2,57C3,57CB,57CE,57CF,57D2,57D4,57D5,57D8,57D9,57DA,57DD,57DF,57E0,57E4,57ED,57EF,57F4,57F8,57F9,57FA,57FD,5800,5802,5806,5807,580B,580D,5811,5815,5819,581E,5820,5821,5824,582A,5830,5835,5844,584C,584D,5851,5854,5858,585E,5865,586B,586C,587E,5880,5881,5883,5885,5889,5892,5893,5899,589A,589E,589F,58A8,58A9,58BC,58C1,58C5,58D1,58D5,58E4,58EB,58EC,58EE,58F0,58F3,58F6,58F9,5902,5904,5907,590D,590F,5914,5915,5916,5919,591A,591C,591F,5924,5925,5927,5929,592A,592B,592D,592E,592F,5931,5934,5937,5938,5939,593A,593C,5941,5942,5944,5947,5948,5949,594B,594E,594F,5951,5954,5955,5956,5957,5958,595A,5960,5962,5965,5973,5974,5976,5978,5979,597D,5981,5982,5983,5984,5986,5987,5988,598A,598D,5992,5993,5996,5997,5999,599E,59A3,59A4,59A5,59A8,59A9,59AA,59AB,59AE,59AF,59B2,59B9,59BB,59BE,59C6,59CA,59CB,59D0,59D1,59D2,59D3,59D4,59D7,59D8,59DA,59DC,59DD,59E3,59E5,59E8,59EC,59F9,59FB,59FF,5A01,5A03,5A04,5A05,5A06,5A07,5A08,5A09,5A0C,5A11,5A13,5A18,5A1C,5A1F,5A20,5A23,5A25,5A29,5A31,5A32,5A34,5A36,5A3C,5A40,5A46,5A49,5A4A,5A55,5A5A,5A62,5A67,5A6A,5A74,5A75,5A76,5A77,5A7A,5A7F,5A92,5A9A,5A9B,5AAA,5AB2,5AB3,5AB5,5AB8,5ABE,5AC1,5AC2,5AC9,5ACC,5AD2,5AD4,5AD6,5AD8,5ADC,5AE0,5AE1,5AE3,5AE6,5AE9,5AEB,5AF1,5B09,5B16,5B17,5B32,5B34,5B37,5B40,5B50,5B51,5B53,5B54,5B55,5B57,5B58,5B59,5B5A,5B5B,5B5C,5B5D,5B5F,5B62,5B63,5B64,5B65,5B66,5B69,5B6A,5B6C,5B70,5B71,5B73,5B75,5B7A,5B7D,5B80,5B81,5B83,5B84,5B85,5B87,5B88,5B89,5B8B,5B8C,5B8F,5B93,5B95,5B97,5B98,5B99,5B9A,5B9B,5B9C,5B9D,5B9E,5BA0,5BA1,5BA2,5BA3,5BA4,5BA5,5BA6,5BAA,5BAB,5BB0,5BB3,5BB4,5BB5,5BB6,5BB8,5BB9,5BBD,5BBE,5BBF,5BC2,5BC4,5BC5,5BC6,5BC7,5BCC,5BD0,5BD2,5BD3,5BDD,5BDE,5BDF,5BE1,5BE4,5BE5,5BE8,5BEE,5BF0,5BF8,5BF9,5BFA,5BFB,5BFC,5BFF,5C01,5C04,5C06,5C09,5C0A,5C0F,5C11,5C14,5C15,5C16,5C18,5C1A,5C1C,5C1D,5C22,5C24,5C25,5C27,5C2C,5C31,5C34,5C38,5C39,5C3A,5C3B,5C3C,5C3D,5C3E,5C3F,5C40,5C41,5C42,5C45,5C48,5C49,5C4A,5C4B,5C4E,5C4F,5C50,5C51,5C55,5C59,5C5E,5C60,5C61,5C63,5C65,5C66,5C6E,5C6F,5C71,5C79,5C7A,5C7F,5C81,5C82,5C88,5C8C,5C8D,5C90,5C91,5C94,5C96,5C97,5C98,5C99,5C9A,5C9B,5C9C,5CA2,5CA3,5CA9,5CAB,5CAC,5CAD,5CB1,5CB3,5CB5,5CB7,5CB8,5CBD,5CBF,5CC1,5CC4,5CCB,5CD2,5CD9,5CE1,5CE4,5CE5,5CE6,5CE8,5CEA,5CED,5CF0,5CFB,5D02,5D03,5D06,5D07,5D0E,5D14,5D16,5D1B,5D1E,5D24,5D26,5D27,5D29,5D2D,5D2E,5D34,5D3D,5D3E,5D47,5D4A,5D4B,5D4C,5D58,5D5B,5D5D,5D69,5D6B,5D6C,5D6F,5D74,5D82,5D99,5D9D,5DB7,5DC5,5DCD,5DDB,5DDD,5DDE,5DE1,5DE2,5DE5,5DE6,5DE7,5DE8,5DE9,5DEB,5DEE,5DEF,5DF1,5DF2,5DF3,5DF4,5DF7,5DFD,5DFE,5E01,5E02,5E03,5E05,5E06,5E08,5E0C,5E0F,5E10,5E11,5E14,5E15,5E16,5E18,5E19,5E1A,5E1B,5E1C,5E1D,5E26,5E27,5E2D,5E2E,5E31,5E37,5E38,5E3B,5E3C,5E3D,5E42,5E44,5E45,5E4C,5E54,5E55,5E5B,5E5E,5E61,5E62,5E72,5E73,5E74,5E76,5E78,5E7A,5E7B,5E7C,5E7D,5E7F,5E80,5E84,5E86,5E87,5E8A,5E8B,5E8F,5E90,5E91,5E93,5E94,5E95,5E96,5E97,5E99,5E9A,5E9C,5E9E,5E9F,5EA0,5EA5,5EA6,5EA7,5EAD,5EB3,5EB5,5EB6,5EB7,5EB8,5EB9,5EBE,5EC9,5ECA,5ED1,5ED2,5ED3,5ED6,5EDB,5EE8,5EEA,5EF4,5EF6,5EF7,5EFA,5EFE,5EFF,5F00,5F01,5F02,5F03,5F04,5F08,5F0A,5F0B,5F0F,5F11,5F13,5F15,5F17,5F18,5F1B,5F1F,5F20,5F25,5F26,5F27,5F29,5F2A,5F2D,5F2F,5F31,5F39,5F3A,5F3C,5F40,5F50,5F52,5F53,5F55,5F56,5F57,5F58,5F5D,5F61,5F62,5F64,5F66,5F69,5F6A,5F6C,5F6D,5F70,5F71,5F73,5F77,5F79,5F7B,5F7C,5F80,5F81,5F82,5F84,5F85,5F87,5F88,5F89,5F8A,5F8B,5F8C,5F90,5F92,5F95,5F97,5F98,5F99,5F9C,5FA1,5FA8,5FAA,5FAD,5FAE,5FB5,5FB7,5FBC,5FBD,5FC3,5FC4,5FC5,5FC6,5FC9,5FCC,5FCD,5FCF,5FD0,5FD1,5FD2,5FD6,5FD7,5FD8,5FD9,5FDD,5FE0,5FE1,5FE4,5FE7,5FEA,5FEB,5FED,5FEE,5FF1,5FF5,5FF8,5FFB,5FFD,5FFE,5FFF,6000,6001,6002,6003,6004,6005,6006,600A,600D,600E,600F,6012,6014,6015,6016,6019,601B,601C,601D,6020,6021,6025,6026,6027,6028,6029,602A,602B,602F,6035,603B,603C,603F,6041,6042,6043,604B,604D,6050,6052,6055,6059,605A,605D,6062,6063,6064,6067,6068,6069,606A,606B,606C,606D,606F,6070,6073,6076,6078,6079,607A,607B,607C,607D,607F,6083,6084,6089,608C,608D,6092,6094,6096,609A,609B,609D,609F,60A0,60A3,60A6,60A8,60AB,60AC,60AD,60AF,60B1,60B2,60B4,60B8,60BB,60BC,60C5,60C6,60CA,60CB,60D1,60D5,60D8,60DA,60DC,60DD,60DF,60E0,60E6,60E7,60E8,60E9,60EB,60EC,60ED,60EE,60EF,60F0,60F3,60F4,60F6,60F9,60FA,6100,6101,6106,6108,6109,610D,610E,610F,6115,611A,611F,6120,6123,6124,6126,6127,612B,613F,6148,614A,614C,614E,6151,6155,615D,6162,6167,6168,6170,6175,6177,618B,618E,6194,619D,61A7,61A8,61A9,61AC,61B7,61BE,61C2,61C8,61CA,61CB,61D1,61D2,61D4,61E6,61F5,61FF,6206,6208,620A,620B,620C,620D,620E,620F,6210,6211,6212,6215,6216,6217,6218,621A,621B,621F,6221,6222,6224,6225,622A,622C,622E,6233,6234,6237,623D,623E,623F,6240,6241,6243,6247,6248,6249,624B,624C,624D,624E,6251,6252,6253,6254,6258,625B,6263,6266,6267,6269,626A,626B,626C,626D,626E,626F,6270,6273,6276,6279,627C,627E,627F,6280,6284,6289,628A,6291,6292,6293,6295,6296,6297,6298,629A,629B,629F,62A0,62A1,62A2,62A4,62A5,62A8,62AB,62AC,62B1,62B5,62B9,62BB,62BC,62BD,62BF,62C2,62C4,62C5,62C6,62C7,62C8,62C9,62CA,62CC,62CD,62CE,62D0,62D2,62D3,62D4,62D6,62D7,62D8,62D9,62DA,62DB,62DC,62DF,62E2,62E3,62E5,62E6,62E7,62E8,62E9,62EC,62ED,62EE,62EF,62F1,62F3,62F4,62F6,62F7,62FC,62FD,62FE,62FF,6301,6302,6307,6308,6309,630E,6311,6316,631A,631B,631D,631E,631F,6320,6321,6322,6323,6324,6325,6328,632A,632B,632F,6332,6339,633A,633D,6342,6343,6345,6346,6349,634B,634C,634D,634E,634F,6350,6355,635E,635F,6361,6362,6363,6367,6369,636D,636E,6371,6376,6377,637A,637B,6380,6382,6387,6388,6389,638A,638C,638E,638F,6390,6392,6396,6398,63A0,63A2,63A3,63A5,63A7,63A8,63A9,63AA,63AC,63AD,63AE,63B0,63B3,63B4,63B7,63B8,63BA,63BC,63BE,63C4,63C6,63C9,63CD,63CE,63CF,63D0,63D2,63D6,63DE,63E0,63E1,63E3,63E9,63EA,63ED,63F2,63F4,63F6,63F8,63FD,63FF,6400,6401,6402,6405,640B,640C,640F,6410,6413,6414,641B,641C,641E,6420,6421,6426,642A,642C,642D,6434,643A,643D,643F,6441,6444,6445,6446,6447,6448,644A,6452,6454,6458,645E,6467,6469,646D,6478,6479,647A,6482,6484,6485,6487,6491,6492,6495,6496,6499,649E,64A4,64A9,64AC,64AD,64AE,64B0,64B5,64B7,64B8,64BA,64BC,64C0,64C2,64C5,64CD,64CE,64D0,64D2,64D7,64D8,64DE,64E2,64E4,64E6,6500,6509,6512,6518,6525,652B,652E,652F,6534,6535,6536,6538,6539,653B,653E,653F,6545,6548,6549,654C,654F,6551,6555,6556,6559,655B,655D,655E,6562,6563,6566,656B,656C,6570,6572,6574,6577,6587,658B,658C,6590,6591,6593,6597,6599,659B,659C,659F,65A1,65A4,65A5,65A7,65A9,65AB,65AD,65AF,65B0,65B9,65BC,65BD,65C1,65C3,65C4,65C5,65C6,65CB,65CC,65CE,65CF,65D2,65D6,65D7,65E0,65E2,65E5,65E6,65E7,65E8,65E9,65EC,65ED,65EE,65EF,65F0,65F1,65F6,65F7,65FA,6600,6602,6603,6606,660A,660C,660E,660F,6613,6614,6615,6619,661D,661F,6620,6625,6627,6628,662D,662F,6631,6634,6635,6636,663C,663E,6641,6643,664B,664C,664F,6652,6653,6654,6655,6656,6657,665A,665F,6661,6664,6666,6668,666E,666F,6670,6674,6676,6677,667A,667E,6682,6684,6687,668C,6691,6696,6697,669D,66A7,66A8,66AE,66B4,66B9,66BE,66D9,66DB,66DC,66DD,66E6,66E9,66F0,66F2,66F3,66F4,66F7,66F9,66FC,66FE,66FF,6700,6708,6709,670A,670B,670D,6710,6714,6715,6717,671B,671D,671F,6726,6728,672A,672B,672C,672D,672F,6731,6734,6735,673A,673D,6740,6742,6743,6746,6748,6749,674C,674E,674F,6750,6751,6753,6756,675C,675E,675F,6760,6761,6765,6768,6769,676A,676D,676F,6770,6772,6773,6775,6777,677C,677E,677F,6781,6784,6787,6789,678B,6790,6795,6797,6798,679A,679C,679D,679E,67A2,67A3,67A5,67A7,67A8,67AA,67AB,67AD,67AF,67B0,67B3,67B5,67B6,67B7,67B8,67C1,67C3,67C4,67CF,67D0,67D1,67D2,67D3,67D4,67D8,67D9,67DA,67DC,67DD,67DE,67E0,67E2,67E5,67E9,67EC,67EF,67F0,67F1,67F3,67F4,67FD,67FF,6800,6805,6807,6808,6809,680A,680B,680C,680E,680F,6811,6813,6816,6817,681D,6821,6829,682A,6832,6833,6837,6838,6839,683C,683D,683E,6840,6841,6842,6843,6844,6845,6846,6848,6849,684A,684C,684E,6850,6851,6853,6854,6855,6860,6861,6862,6863,6864,6865,6866,6867,6868,6869,686B,6874,6876,6877,6881,6883,6885,6886,688F,6893,6897,68A2,68A6,68A7,68A8,68AD,68AF,68B0,68B3,68B5,68C0,68C2,68C9,68CB,68CD,68D2,68D5,68D8,68DA,68E0,68E3,68EE,68F0,68F1,68F5,68F9,68FA,68FC,6901,6905,690B,690D,690E,6910,6912,691F,6920,6924,692D,6930,6934,6939,693D,693F,6942,6954,6957,695A,695D,695E,6960,6963,6966,696B,696E,6971,6977,6978,6979,697C,6980,6982,6984,6986,6987,6988,6989,698D,6994,6995,6998,699B,699C,69A7,69A8,69AB,69AD,69B1,69B4,69B7,69BB,69C1,69CA,69CC,69CE,69D0,69D4,69DB,69DF,69E0,69ED,69F2,69FD,69FF,6A0A,6A17,6A18,6A1F,6A21,6A28,6A2A,6A2F,6A31,6A35,6A3D,6A3E,6A44,6A47,6A50,6A58,6A59,6A5B,6A61,6A65,6A71,6A79,6A7C,6A80,6A84,6A8E,6A90,6A91,6A97,6AA0,6AA9,6AAB,6AAC,6B20,6B21,6B22,6B23,6B24,6B27,6B32,6B37,6B39,6B3A,6B3E,6B43,6B46,6B47,6B49,6B4C,6B59,6B62,6B63,6B64,6B65,6B66,6B67,6B6A,6B79,6B7B,6B7C,6B81,6B82,6B83,6B84,6B86,6B87,6B89,6B8A,6B8B,6B8D,6B92,6B93,6B96,6B9A,6B9B,6BA1,6BAA,6BB3,6BB4,6BB5,6BB7,6BBF,6BC1,6BC2,6BC5,6BCB,6BCD,6BCF,6BD2,6BD3,6BD4,6BD5,6BD6,6BD7,6BD9,6BDB,6BE1,6BEA,6BEB,6BEF,6BF3,6BF5,6BF9,6BFD,6C05,6C06,6C07,6C0D,6C0F,6C10,6C11,6C13,6C14,6C15,6C16,6C18,6C19,6C1A,6C1B,6C1F,6C21,6C22,6C24,6C26,6C27,6C28,6C29,6C2A,6C2E,6C2F,6C30,6C32,6C34,6C35,6C38,6C3D,6C40,6C41,6C42,6C46,6C47,6C49,6C4A,6C50,6C54,6C55,6C57,6C5B,6C5C,6C5D,6C5E,6C5F,6C60,6C61,6C64,6C68,6C69,6C6A,6C70,6C72,6C74,6C76,6C79,6C7D,6C7E,6C81,6C82,6C83,6C85,6C86,6C88,6C89,6C8C,6C8F,6C90,6C93,6C94,6C99,6C9B,6C9F,6CA1,6CA3,6CA4,6CA5,6CA6,6CA7,6CA9,6CAA,6CAB,6CAD,6CAE,6CB1,6CB2,6CB3,6CB8,6CB9,6CBB,6CBC,6CBD,6CBE,6CBF,6CC4,6CC5,6CC9,6CCA,6CCC,6CD0,6CD3,6CD4,6CD5,6CD6,6CD7,6CDB,6CDE,6CE0,6CE1,6CE2,6CE3,6CE5,6CE8,6CEA,6CEB,6CEE,6CEF,6CF0,6CF1,6CF3,6CF5,6CF6,6CF7,6CF8,6CFA,6CFB,6CFC,6CFD,6CFE,6D01,6D04,6D07,6D0B,6D0C,6D0E,6D12,6D17,6D19,6D1A,6D1B,6D1E,6D25,6D27,6D2A,6D2B,6D2E,6D31,6D32,6D33,6D35,6D39,6D3B,6D3C,6D3D,6D3E,6D41,6D43,6D45,6D46,6D47,6D48,6D4A,6D4B,6D4D,6D4E,6D4F,6D51,6D52,6D53,6D54,6D59,6D5A,6D5C,6D5E,6D60,6D63,6D66,6D69,6D6A,6D6E,6D6F,6D74,6D77,6D78,6D7C,6D82,6D85,6D88,6D89,6D8C,6D8E,6D91,6D93,6D94,6D95,6D9B,6D9D,6D9E,6D9F,6DA0,6DA1,6DA3,6DA4,6DA6,6DA7,6DA8,6DA9,6DAA,6DAB,6DAE,6DAF,6DB2,6DB5,6DB8,6DBF,6DC0,6DC4,6DC5,6DC6,6DC7,6DCB,6DCC,6DD1,6DD6,6DD8,6DD9,6DDD,6DDE,6DE0,6DE1,6DE4,6DE6,6DEB,6DEC,6DEE,6DF1,6DF3,6DF7,6DF9,6DFB,6DFC,6E05,6E0A,6E0C,6E0D,6E0E,6E10,6E11,6E14,6E16,6E17,6E1A,6E1D,6E20,6E21,6E23,6E24,6E25,6E29,6E2B,6E2D,6E2F,6E32,6E34,6E38,6E3A,6E43,6E44,6E4D,6E4E,6E53,6E54,6E56,6E58,6E5B,6E5F,6E6B,6E6E,6E7E,6E7F,6E83,6E85,6E86,6E89,6E8F,6E90,6E98,6E9C,6E9F,6EA2,6EA5,6EA7,6EAA,6EAF,6EB1,6EB2,6EB4,6EB6,6EB7,6EBA,6EBB,6EBD,6EC1,6EC2,6EC7,6ECB,6ECF,6ED1,6ED3,6ED4,6ED5,6ED7,6EDA,6EDE,6EDF,6EE0,6EE1,6EE2,6EE4,6EE5,6EE6,6EE8,6EE9,6EF4,6EF9,6F02,6F06,6F09,6F0F,6F13,6F14,6F15,6F20,6F24,6F29,6F2A,6F2B,6F2D,6F2F,6F31,6F33,6F36,6F3E,6F46,6F47,6F4B,6F4D,6F58,6F5C,6F5E,6F62,6F66,6F6D,6F6E,6F72,6F74,6F78,6F7A,6F7C,6F84,6F88,6F89,6F8C,6F8D,6F8E,6F9C,6FA1,6FA7,6FB3,6FB6,6FB9,6FC0,6FC2,6FC9,6FD1,6FD2,6FDE,6FE0,6FE1,6FEE,6FEF,7011,701A,701B,7023,7035,7039,704C,704F,705E,706B,706C,706D,706F,7070,7075,7076,7078,707C,707E,707F,7080,7085,7089,708A,708E,7092,7094,7095,7096,7099,709C,709D,70AB,70AC,70AD,70AE,70AF,70B1,70B3,70B7,70B8,70B9,70BB,70BC,70BD,70C0,70C1,70C2,70C3,70C8,70CA,70D8,70D9,70DB,70DF,70E4,70E6,70E7,70E8,70E9,70EB,70EC,70ED,70EF,70F7,70F9,70FD,7109,710A,7110,7113,7115,7116,7118,7119,711A,7126,712F,7130,7131,7136,7145,714A,714C,714E,715C,715E,7164,7166,7167,7168,716E,7172,7173,7178,717A,717D,7184,718A,718F,7194,7198,7199,719F,71A0,71A8,71AC,71B3,71B5,71B9,71C3,71CE,71D4,71D5,71E0,71E5,71E7,71EE,71F9,7206,721D,7228,722A,722C,7230,7231,7235,7236,7237,7238,7239,723B,723D,723F,7247,7248,724C,724D,7252,7256,7259,725B,725D,725F,7261,7262,7266,7267,7269,726E,726F,7272,7275,7279,727A,727E,727F,7280,7281,7284,728A,728B,728D,728F,7292,729F,72AC,72AD,72AF,72B0,72B4,72B6,72B7,72B8,72B9,72C1,72C2,72C3,72C4,72C8,72CD,72CE,72D0,72D2,72D7,72D9,72DE,72E0,72E1,72E8,72E9,72EC,72ED,72EE,72EF,72F0,72F1,72F2,72F3,72F4,72F7,72F8,72FA,72FB,72FC,7301,7303,730A,730E,7313,7315,7316,7317,731B,731C,731D,731E,7321,7322,7325,7329,732A,732B,732C,732E,7331,7334,7337,7338,7339,733E,733F,734D,7350,7352,7357,7360,736C,736D,736F,737E,7384,7387,7389,738B,738E,7391,7396,739B,739F,73A2,73A9,73AB,73AE,73AF,73B0,73B2,73B3,73B7,73BA,73BB,73C0,73C2,73C8,73C9,73CA,73CD,73CF,73D0,73D1,73D9,73DE,73E0,73E5,73E7,73E9,73ED,73F2,7403,7405,7406,7409,740A,740F,7410,741A,741B,7422,7425,7426,7428,742A,742C,742E,7430,7433,7434,7435,7436,743C,7441,7455,7457,7459,745A,745B,745C,745E,745F,746D,7470,7476,7477,747E,7480,7481,7483,7487,748B,748E,7490,749C,749E,74A7,74A8,74A9,74BA,74D2,74DC,74DE,74E0,74E2,74E3,74E4,74E6,74EE,74EF,74F4,74F6,74F7,74FF,7504,750D,750F,7511,7513,7518,7519,751A,751C,751F,7525,7528,7529,752B,752C,752D,752F,7530,7531,7532,7533,7535,7537,7538,753A,753B,753E,7540,7545,7548,754B,754C,754E,754F,7554,7559,755A,755B,755C,7565,7566,756A,7572,7574,7578,7579,757F,7583,7586,758B,758F,7591,7592,7594,7596,7597,7599,759A,759D,759F,75A0,75A1,75A3,75A4,75A5,75AB,75AC,75AE,75AF,75B0,75B1,75B2,75B3,75B4,75B5,75B8,75B9,75BC,75BD,75BE,75C2,75C3,75C4,75C5,75C7,75C8,75C9,75CA,75CD,75D2,75D4,75D5,75D6,75D8,75DB,75DE,75E2,75E3,75E4,75E6,75E7,75E8,75EA,75EB,75F0,75F1,75F4,75F9,75FC,75FF,7600,7601,7603,7605,760A,760C,7610,7615,7617,7618,7619,761B,761F,7620,7622,7624,7625,7626,7629,762A,762B,762D,7630,7633,7634,7635,7638,763C,763E,763F,7640,7643,764C,764D,7654,7656,765C,765E,7663,766B,766F,7678,767B,767D,767E,7682,7684,7686,7687,7688,768B,768E,7691,7693,7696,7699,76A4,76AE,76B1,76B2,76B4,76BF,76C2,76C5,76C6,76C8,76CA,76CD,76CE,76CF,76D0,76D1,76D2,76D4,76D6,76D7,76D8,76DB,76DF,76E5,76EE,76EF,76F1,76F2,76F4,76F8,76F9,76FC,76FE,7701,7704,7707,7708,7709,770B,770D,7719,771A,771F,7720,7722,7726,7728,7729,772D,772F,7735,7736,7737,7738,773A,773C,7740,7741,7743,7747,7750,7751,775A,775B,7761,7762,7763,7765,7766,7768,776B,776C,7779,777D,777E,777F,7780,7784,7785,778C,778D,778E,7791,7792,779F,77A0,77A2,77A5,77A7,77A9,77AA,77AC,77B0,77B3,77B5,77BB,77BD,77BF,77CD,77D7,77DB,77DC,77E2,77E3,77E5,77E7,77E9,77EB,77EC,77ED,77EE,77F3,77F6,77F8,77FD,77FE,77FF,7800,7801,7802,7809,780C,780D,7811,7812,7814,7816,7817,7818,781A,781C,781D,781F,7823,7825,7826,7827,7829,782C,782D,7830,7834,7837,7838,7839,783A,783B,783C,783E,7840,7845,7847,784C,784E,7850,7852,7855,7856,7857,785D,786A,786B,786C,786D,786E,7877,787C,7887,7889,788C,788D,788E,7891,7893,7897,7898,789A,789B,789C,789F,78A1,78A3,78A5,78A7,78B0,78B1,78B2,78B3,78B4,78B9,78BE,78C1,78C5,78C9,78CA,78CB,78D0,78D4,78D5,78D9,78E8,78EC,78F2,78F4,78F7,78FA,7901,7905,7913,791E,7924,7934,793A,793B,793C,793E,7940,7941,7946,7948,7949,7953,7956,7957,795A,795B,795C,795D,795E,795F,7960,7962,7965,7967,7968,796D,796F,7977,7978,797A,7980,7981,7984,7985,798A,798F,799A,79A7,79B3,79B9,79BA,79BB,79BD,79BE,79C0,79C1,79C3,79C6,79C9,79CB,79CD,79D1,79D2,79D5,79D8,79DF,79E3,79E4,79E6,79E7,79E9,79EB,79ED,79EF,79F0,79F8,79FB,79FD,7A00,7A02,7A03,7A06,7A0B,7A0D,7A0E,7A14,7A17,7A1A,7A1E,7A20,7A23,7A33,7A37,7A39,7A3B,7A3C,7A3D,7A3F,7A46,7A51,7A57,7A70,7A74,7A76,7A77,7A78,7A79,7A7A,7A7F,7A80,7A81,7A83,7A84,7A86,7A88,7A8D,7A91,7A92,7A95,7A96,7A97,7A98,7A9C,7A9D,7A9F,7AA0,7AA5,7AA6,7AA8,7AAC,7AAD,7AB3,7ABF,7ACB,7AD6,7AD9,7ADE,7ADF,7AE0,7AE3,7AE5,7AE6,7AED,7AEF,7AF9,7AFA,7AFD,7AFF,7B03,7B04,7B06,7B08,7B0A,7B0B,7B0F,7B11,7B14,7B15,7B19,7B1B,7B1E,7B20,7B24,7B25,7B26,7B28,7B2A,7B2B,7B2C,7B2E,7B31,7B33,7B38,7B3A,7B3C,7B3E,7B45,7B47,7B49,7B4B,7B4C,7B4F,7B50,7B51,7B52,7B54,7B56,7B58,7B5A,7B5B,7B5D,7B60,7B62,7B6E,7B71,7B72,7B75,7B77,7B79,7B7B,7B7E,7B80,7B85,7B8D,7B90,7B94,7B95,7B97,7B9C,7B9D,7BA1,7BA2,7BA6,7BA7,7BA8,7BA9,7BAA,7BAB,7BAC,7BAD,7BB1,7BB4,7BB8,7BC1,7BC6,7BC7,7BCC,7BD1,7BD3,7BD9,7BDA,7BDD,7BE1,7BE5,7BE6,7BEA,7BEE,7BF1,7BF7,7BFC,7BFE,7C07,7C0B,7C0C,7C0F,7C16,7C1F,7C26,7C27,7C2A,7C38,7C3F,7C40,7C41,7C4D,7C73,7C74,7C7B,7C7C,7C7D,7C89,7C91,7C92,7C95,7C97,7C98,7C9C,7C9D,7C9E,7C9F,7CA2,7CA4,7CA5,7CAA,7CAE,7CB1,7CB2,7CB3,7CB9,7CBC,7CBD,7CBE,7CC1,7CC5,7CC7,7CC8,7CCA,7CCC,7CCD,7CD5,7CD6,7CD7,7CD9,7CDC,7CDF,7CE0,7CE8,7CEF,7CF8,7CFB,7D0A,7D20,7D22,7D27,7D2B,7D2F,7D6E,7D77,7DA6,7DAE,7E3B,7E41,7E47,7E82,7E9B,7E9F,7EA0,7EA1,7EA2,7EA3,7EA4,7EA5,7EA6,7EA7,7EA8,7EA9,7EAA,7EAB,7EAC,7EAD,7EAF,7EB0,7EB1,7EB2,7EB3,7EB5,7EB6,7EB7,7EB8,7EB9,7EBA,7EBD,7EBE,7EBF,7EC0,7EC1,7EC2,7EC3,7EC4,7EC5,7EC6,7EC7,7EC8,7EC9,7ECA,7ECB,7ECC,7ECD,7ECE,7ECF,7ED0,7ED1,7ED2,7ED3,7ED4,7ED5,7ED7,7ED8,7ED9,7EDA,7EDB,7EDC,7EDD,7EDE,7EDF,7EE0,7EE1,7EE2,7EE3,7EE5,7EE6,7EE7,7EE8,7EE9,7EEA,7EEB,7EED,7EEE,7EEF,7EF0,7EF1,7EF2,7EF3,7EF4,7EF5,7EF6,7EF7,7EF8,7EFA,7EFB,7EFC,7EFD,7EFE,7EFF,7F00,7F01,7F02,7F03,7F04,7F05,7F06,7F07,7F08,7F09,7F0B,7F0C,7F0D,7F0E,7F0F,7F11,7F12,7F13,7F14,7F15,7F16,7F17,7F18,7F19,7F1A,7F1B,7F1C,7F1D,7F1F,7F20,7F21,7F22,7F23,7F24,7F25,7F26,7F27,7F28,7F29,7F2A,7F2B,7F2C,7F2D,7F2E,7F2F,7F30,7F31,7F32,7F33,7F34,7F35,7F36,7F38,7F3A,7F42,7F44,7F45,7F50,7F51,7F54,7F55,7F57,7F58,7F5A,7F5F,7F61,7F62,7F68,7F69,7F6A,7F6E,7F71,7F72,7F74,7F79,7F7E,7F81,7F8A,7F8C,7F8E,7F94,7F9A,7F9D,7F9E,7F9F,7FA1,7FA4,7FA7,7FAF,7FB0,7FB2,7FB8,7FB9,7FBC,7FBD,7FBF,7FC1,7FC5,7FCA,7FCC,7FCE,7FD4,7FD5,7FD8,7FDF,7FE0,7FE1,7FE5,7FE6,7FE9,7FEE,7FF0,7FF1,7FF3,7FFB,7FFC,8000,8001,8003,8004,8005,8006,800B,800C,800D,8010,8012,8014,8015,8016,8017,8018,8019,801C,8020,8022,8025,8026,8027,8028,8029,802A,8031,8033,8035,8036,8037,8038,803B,803D,803F,8042,8043,8046,804A,804B,804C,804D,8052,8054,8058,805A,8069,806A,8071,807F,8080,8083,8084,8086,8087,8089,808B,808C,8093,8096,8098,809A,809B,809C,809D,809F,80A0,80A1,80A2,80A4,80A5,80A9,80AA,80AB,80AD,80AE,80AF,80B1,80B2,80B4,80B7,80BA,80BC,80BD,80BE,80BF,80C0,80C1,80C2,80C3,80C4,80C6,80CC,80CD,80CE,80D6,80D7,80D9,80DA,80DB,80DC,80DD,80DE,80E1,80E4,80E5,80E7,80E8,80E9,80EA,80EB,80EC,80ED,80EF,80F0,80F1,80F2,80F3,80F4,80F6,80F8,80FA,80FC,80FD,8102,8106,8109,810A,810D,810E,810F,8110,8111,8112,8113,8114,8116,8118,811A,811E,812C,812F,8131,8132,8136,8138,813E,8146,8148,814A,814B,814C,8150,8151,8153,8154,8155,8159,815A,8160,8165,8167,8169,816D,816E,8170,8171,8174,8179,817A,817B,817C,817D,817E,817F,8180,8182,8188,818A,818F,8191,8198,819B,819C,819D,81A3,81A6,81A8,81AA,81B3,81BA,81BB,81C0,81C1,81C2,81C3,81C6,81CA,81CC,81E3,81E7,81EA,81EC,81ED,81F3,81F4,81FB,81FC,81FE,8200,8201,8202,8204,8205,8206,820C,820D,8210,8212,8214,821B,821C,821E,821F,8221,8222,8223,8228,822A,822B,822C,822D,822F,8230,8231,8233,8234,8235,8236,8237,8238,8239,823B,823E,8244,8247,8249,824B,824F,8258,825A,825F,8268,826E,826F,8270,8272,8273,8274,8279,827A,827D,827E,827F,8282,8284,8288,828A,828B,828D,828E,828F,8291,8292,8297,8298,8299,829C,829D,829F,82A1,82A4,82A5,82A6,82A8,82A9,82AA,82AB,82AC,82AD,82AE,82AF,82B0,82B1,82B3,82B4,82B7,82B8,82B9,82BD,82BE,82C1,82C4,82C7,82C8,82CA,82CB,82CC,82CD,82CE,82CF,82D1,82D2,82D3,82D4,82D5,82D7,82D8,82DB,82DC,82DE,82DF,82E0,82E1,82E3,82E4,82E5,82E6,82EB,82EF,82F1,82F4,82F7,82F9,82FB,8301,8302,8303,8304,8305,8306,8307,8308,8309,830C,830E,830F,8311,8314,8315,8317,831A,831B,831C,8327,8328,832B,832C,832D,832F,8331,8333,8334,8335,8336,8338,8339,833A,833C,8340,8343,8346,8347,8349,834F,8350,8351,8352,8354,835A,835B,835C,835E,835F,8360,8361,8363,8364,8365,8366,8367,8368,8369,836A,836B,836C,836D,836E,836F,8377,8378,837B,837C,837D,8385,8386,8389,838E,8392,8393,8398,839B,839C,839E,83A0,83A8,83A9,83AA,83AB,83B0,83B1,83B2,83B3,83B4,83B6,83B7,83B8,83B9,83BA,83BC,83BD,83C0,83C1,83C5,83C7,83CA,83CC,83CF,83D4,83D6,83D8,83DC,83DD,83DF,83E0,83E1,83E5,83E9,83EA,83F0,83F1,83F2,83F8,83F9,83FD,8401,8403,8404,8406,840B,840C,840D,840E,840F,8411,8418,841C,841D,8424,8425,8426,8427,8428,8431,8438,843C,843D,8446,8451,8457,8459,845A,845B,845C,8461,8463,8469,846B,846C,846D,8471,8473,8475,8476,8478,847A,8482,8487,8488,8489,848B,848C,848E,8497,8499,849C,84A1,84AF,84B2,84B4,84B8,84B9,84BA,84BD,84BF,84C1,84C4,84C9,84CA,84CD,84D0,84D1,84D3,84D6,84DD,84DF,84E0,84E3,84E5,84E6,84EC,84F0,84FC,84FF,850C,8511,8513,8517,851A,851F,8521,852B,852C,8537,8538,8539,853A,853B,853C,853D,8543,8548,8549,854A,8556,8559,855E,8564,8568,8572,8574,8579,857A,857B,857E,8584,8585,8587,858F,859B,859C,85A4,85A8,85AA,85AE,85AF,85B0,85B7,85B9,85C1,85C9,85CF,85D0,85D3,85D5,85DC,85E4,85E9,85FB,85FF,8605,8611,8616,8627,8629,8638,863C,864D,864E,864F,8650,8651,8654,865A,865E,8662,866B,866C,866E,8671,8679,867A,867B,867C,867D,867E,867F,8680,8681,8682,868A,868B,868C,868D,8693,8695,869C,869D,86A3,86A4,86A7,86A8,86A9,86AA,86AC,86AF,86B0,86B1,86B4,86B5,86B6,86BA,86C0,86C4,86C6,86C7,86C9,86CA,86CB,86CE,86CF,86D0,86D1,86D4,86D8,86D9,86DB,86DE,86DF,86E4,86E9,86ED,86EE,86F0,86F1,86F2,86F3,86F4,86F8,86F9,86FE,8700,8702,8703,8707,8708,8709,870A,870D,8712,8713,8715,8717,8718,871A,871C,871E,8721,8722,8723,8725,8729,872E,8731,8734,8737,873B,873E,873F,8747,8748,8749,874C,874E,8753,8757,8759,8760,8763,8764,8765,876E,8770,8774,8776,877B,877C,877D,877E,8782,8783,8785,8788,878B,878D,8793,8797,879F,87A8,87AB,87AC,87AD,87AF,87B3,87B5,87BA,87BD,87C0,87C6,87CA,87CB,87D1,87D2,87D3,87DB,87E0,87E5,87EA,87EE,87F9,87FE,8803,880A,8813,8815,8816,881B,8821,8822,8832,8839,883C,8840,8844,8845,884C,884D,8854,8857,8859,8861,8862,8863,8864,8865,8868,8869,886B,886C,886E,8870,8872,8877,887D,887E,887F,8881,8882,8884,8885,8888,888B,888D,8892,8896,889C,88A2,88A4,88AB,88AD,88B1,88B7,88BC,88C1,88C2,88C5,88C6,88C9,88CE,88D2,88D4,88D5,88D8,88D9,88DF,88E2,88E3,88E4,88E5,88E8,88F0,88F1,88F3,88F4,88F8,88F9,88FC,88FE,8902,890A,8910,8912,8913,8919,891A,891B,8921,8925,892A,892B,8930,8934,8936,8941,8944,895E,895F,8966,897B,897F,8981,8983,8986,89C1,89C2,89C4,89C5,89C6,89C7,89C8,89C9,89CA,89CB,89CC,89CE,89CF,89D0,89D1,89D2,89D6,89DA,89DC,89DE,89E3,89E5,89E6,89EB,89EF,89F3,8A00,8A07,8A3E,8A48,8A79,8A89,8A8A,8A93,8B07,8B26,8B66,8B6C,8BA0,8BA1,8BA2,8BA3,8BA4,8BA5,8BA6,8BA7,8BA8,8BA9,8BAA,8BAB,8BAD,8BAE,8BAF,8BB0,8BB2,8BB3,8BB4,8BB5,8BB6,8BB7,8BB8,8BB9,8BBA,8BBC,8BBD,8BBE,8BBF,8BC0,8BC1,8BC2,8BC3,8BC4,8BC5,8BC6,8BC8,8BC9,8BCA,8BCB,8BCC,8BCD,8BCE,8BCF,8BD1,8BD2,8BD3,8BD4,8BD5,8BD6,8BD7,8BD8,8BD9,8BDA,8BDB,8BDC,8BDD,8BDE,8BDF,8BE0,8BE1,8BE2,8BE3,8BE4,8BE5,8BE6,8BE7,8BE8,8BE9,8BEB,8BEC,8BED,8BEE,8BEF,8BF0,8BF1,8BF2,8BF3,8BF4,8BF5,8BF6,8BF7,8BF8,8BF9,8BFA,8BFB,8BFC,8BFD,8BFE,8BFF,8C00,8C01,8C02,8C03,8C04,8C05,8C06,8C07,8C08,8C0A,8C0B,8C0C,8C0D,8C0E,8C0F,8C10,8C11,8C12,8C13,8C14,8C15,8C16,8C17,8C18,8C19,8C1A,8C1B,8C1C,8C1D,8C1F,8C20,8C21,8C22,8C23,8C24,8C25,8C26,8C27,8C28,8C29,8C2A,8C2B,8C2C,8C2D,8C2E,8C2F,8C30,8C31,8C32,8C33,8C34,8C35,8C36,8C37,8C41,8C46,8C47,8C49,8C4C,8C55,8C5A,8C61,8C62,8C6A,8C6B,8C73,8C78,8C79,8C7A,8C82,8C85,8C89,8C8A,8C8C,8C94,8C98,8D1D,8D1E,8D1F,8D21,8D22,8D23,8D24,8D25,8D26,8D27,8D28,8D29,8D2A,8D2B,8D2C,8D2D,8D2E,8D2F,8D30,8D31,8D32,8D33,8D34,8D35,8D36,8D37,8D38,8D39,8D3A,8D3B,8D3C,8D3D,8D3E,8D3F,8D40,8D41,8D42,8D43,8D44,8D45,8D46,8D47,8D48,8D49,8D4A,8D4B,8D4C,8D4D,8D4E,8D4F,8D50,8D53,8D54,8D55,8D56,8D58,8D59,8D5A,8D5B,8D5C,8D5D,8D5E,8D60,8D61,8D62,8D63,8D64,8D66,8D67,8D6B,8D6D,8D70,8D73,8D74,8D75,8D76,8D77,8D81,8D84,8D85,8D8A,8D8B,8D91,8D94,8D9F,8DA3,8DB1,8DB3,8DB4,8DB5,8DB8,8DBA,8DBC,8DBE,8DBF,8DC3,8DC4,8DC6,8DCB,8DCC,8DCE,8DCF,8DD1,8DD6,8DD7,8DDA,8DDB,8DDD,8DDE,8DDF,8DE3,8DE4,8DE8,8DEA,8DEB,8DEC,8DEF,8DF3,8DF5,8DF7,8DF8,8DF9,8DFA,8DFB,8DFD,8E05,8E09,8E0A,8E0C,8E0F,8E14,8E1D,8E1E,8E1F,8E22,8E23,8E29,8E2A,8E2C,8E2E,8E2F,8E31,8E35,8E39,8E3A,8E3D,8E40,8E41,8E42,8E44,8E47,8E48,8E49,8E4A,8E4B,8E51,8E52,8E59,8E66,8E69,8E6C,8E6D,8E6F,8E70,8E72,8E74,8E76,8E7C,8E7F,8E81,8E85,8E87,8E8F,8E90,8E94,8E9C,8E9E,8EAB,8EAC,8EAF,8EB2,8EBA,8ECE,8F66,8F67,8F68,8F69,8F6B,8F6C,8F6D,8F6E,8F6F,8F70,8F71,8F72,8F73,8F74,8F75,8F76,8F77,8F78,8F79,8F7A,8F7B,8F7C,8F7D,8F7E,8F7F,8F81,8F82,8F83,8F84,8F85,8F86,8F87,8F88,8F89,8F8A,8F8B,8F8D,8F8E,8F8F,8F90,8F91,8F93,8F94,8F95,8F96,8F97,8F98,8F99,8F9A,8F9B,8F9C,8F9E,8F9F,8FA3,8FA8,8FA9,8FAB,8FB0,8FB1,8FB6,8FB9,8FBD,8FBE,8FC1,8FC2,8FC4,8FC5,8FC7,8FC8,8FCE,8FD0,8FD1,8FD3,8FD4,8FD5,8FD8,8FD9,8FDB,8FDC,8FDD,8FDE,8FDF,8FE2,8FE4,8FE5,8FE6,8FE8,8FE9,8FEA,8FEB,8FED,8FEE,8FF0,8FF3,8FF7,8FF8,8FF9,8FFD,9000,9001,9002,9003,9004,9005,9006,9009,900A,900B,900D,900F,9010,9011,9012,9014,9016,9017,901A,901B,901D,901E,901F,9020,9021,9022,9026,902D,902E,902F,9035,9036,9038,903B,903C,903E,9041,9042,9044,9047,904D,904F,9050,9051,9052,9053,9057,9058,905B,9062,9063,9065,9068,906D,906E,9074,9075,907D,907F,9080,9082,9083,9088,908B,9091,9093,9095,9097,9099,909B,909D,90A1,90A2,90A3,90A6,90AA,90AC,90AE,90AF,90B0,90B1,90B3,90B4,90B5,90B6,90B8,90B9,90BA,90BB,90BE,90C1,90C4,90C5,90C7,90CA,90CE,90CF,90D0,90D1,90D3,90D7,90DB,90DC,90DD,90E1,90E2,90E6,90E7,90E8,90EB,90ED,90EF,90F4,90F8,90FD,90FE,9102,9104,9119,911E,9122,9123,912F,9131,9139,9143,9146,9149,914A,914B,914C,914D,914E,914F,9150,9152,9157,915A,915D,915E,9161,9162,9163,9164,9165,9169,916A,916C,916E,916F,9170,9171,9172,9174,9175,9176,9177,9178,9179,917D,917E,917F,9185,9187,9189,918B,918C,918D,9190,9191,9192,919A,919B,91A2,91A3,91AA,91AD,91AE,91AF,91B4,91B5,91BA,91C7,91C9,91CA,91CC,91CD,91CE,91CF,91D1,91DC,9274,928E,92AE,92C8,933E,936A,938F,93CA,93D6,943E,946B,9485,9486,9487,9488,9489,948A,948B,948C,948D,948E,948F,9490,9492,9493,9494,9495,9497,9499,949A,949B,949C,949D,949E,949F,94A0,94A1,94A2,94A3,94A4,94A5,94A6,94A7,94A8,94A9,94AA,94AB,94AC,94AD,94AE,94AF,94B0,94B1,94B2,94B3,94B4,94B5,94B6,94B7,94B8,94B9,94BA,94BB,94BC,94BD,94BE,94BF,94C0,94C1,94C2,94C3,94C4,94C5,94C6,94C8,94C9,94CA,94CB,94CC,94CD,94CE,94D0,94D1,94D2,94D5,94D6,94D7,94D8,94D9,94DB,94DC,94DD,94DE,94DF,94E0,94E1,94E2,94E3,94E4,94E5,94E7,94E8,94E9,94EA,94EB,94EC,94ED,94EE,94EF,94F0,94F1,94F2,94F3,94F4,94F5,94F6,94F7,94F8,94F9,94FA,94FC,94FD,94FE,94FF,9500,9501,9502,9503,9504,9505,9506,9507,9508,9509,950A,950B,950C,950D,950E,950F,9510,9511,9512,9513,9514,9515,9516,9517,9518,9519,951A,951B,951D,951E,951F,9521,9522,9523,9524,9525,9526,9528,9529,952A,952B,952C,952D,952E,952F,9530,9531,9532,9534,9535,9536,9537,9538,9539,953A,953B,953C,953E,953F,9540,9541,9542,9544,9545,9546,9547,9549,954A,954C,954D,954E,954F,9550,9551,9552,9553,9554,9556,9557,9558,9559,955B,955C,955D,955E,955F,9561,9562,9563,9564,9565,9566,9567,9568,9569,956A,956B,956C,956D,956F,9570,9571,9572,9573,9576,957F,95E8,95E9,95EA,95EB,95ED,95EE,95EF,95F0,95F1,95F2,95F3,95F4,95F5,95F6,95F7,95F8,95F9,95FA,95FB,95FC,95FD,95FE,9600,9601,9602,9603,9604,9605,9606,9608,9609,960A,960B,960C,960D,960E,960F,9610,9611,9612,9614,9615,9616,9617,9619,961A,961C,961D,961F,9621,9622,962A,962E,9631,9632,9633,9634,9635,9636,963B,963C,963D,963F,9640,9642,9644,9645,9646,9647,9648,9649,964B,964C,964D,9650,9654,9655,965B,965F,9661,9662,9664,9667,9668,9669,966A,966C,9672,9674,9675,9676,9677,9685,9686,9688,968B,968D,968F,9690,9694,9697,9698,9699,969C,96A7,96B0,96B3,96B6,96B9,96BC,96BD,96BE,96C0,96C1,96C4,96C5,96C6,96C7,96C9,96CC,96CD,96CE,96CF,96D2,96D5,96E0,96E8,96E9,96EA,96EF,96F3,96F6,96F7,96F9,96FE,9700,9701,9704,9706,9707,9708,9709,970D,970E,970F,9713,9716,971C,971E,972A,972D,9730,9732,9738,9739,973E,9752,9753,9756,9759,975B,975E,9760,9761,9762,9765,9769,9773,9774,9776,977C,9785,978B,978D,9791,9792,9794,9798,97A0,97A3,97AB,97AD,97AF,97B2,97B4,97E6,97E7,97E9,97EA,97EB,97EC,97ED,97F3,97F5,97F6,9875,9876,9877,9878,9879,987A,987B,987C,987D,987E,987F,9880,9881,9882,9883,9884,9885,9886,9887,9888,9889,988A,988C,988D,988F,9890,9891,9893,9894,9896,9897,9898,989A,989B,989C,989D,989E,989F,98A0,98A1,98A2,98A4,98A5,98A6,98A7,98CE,98D1,98D2,98D3,98D5,98D8,98D9,98DA,98DE,98DF,98E7,98E8,990D,9910,992E,9954,9955,9963,9965,9967,9968,9969,996A,996B,996C,996D,996E,996F,9970,9971,9972,9974,9975,9976,9977,997A,997C,997D,997F,9980,9981,9984,9985,9986,9987,9988,998A,998B,998D,998F,9990,9991,9992,9993,9994,9995,9996,9997,9998,9999,99A5,99A8,9A6C,9A6D,9A6E,9A6F,9A70,9A71,9A73,9A74,9A75,9A76,9A77,9A78,9A79,9A7A,9A7B,9A7C,9A7D,9A7E,9A7F,9A80,9A81,9A82,9A84,9A85,9A86,9A87,9A88,9A8A,9A8B,9A8C,9A8F,9A90,9A91,9A92,9A93,9A96,9A97,9A98,9A9A,9A9B,9A9C,9A9D,9A9E,9A9F,9AA0,9AA1,9AA2,9AA3,9AA4,9AA5,9AA7,9AA8,9AB0,9AB1,9AB6,9AB7,9AB8,9ABA,9ABC,9AC0,9AC1,9AC2,9AC5,9ACB,9ACC,9AD1,9AD3,9AD8,9ADF,9AE1,9AE6,9AEB,9AED,9AEF,9AF9,9AFB,9B03,9B08,9B0F,9B13,9B1F,9B23,9B2F,9B32,9B3B,9B3C,9B41,9B42,9B43,9B44,9B45,9B47,9B48,9B49,9B4D,9B4F,9B51,9B54,9C7C,9C7F,9C81,9C82,9C85,9C86,9C87,9C88,9C8B,9C8D,9C8E,9C90,9C91,9C92,9C94,9C95,9C9A,9C9B,9C9C,9C9E,9C9F,9CA0,9CA1,9CA2,9CA3,9CA4,9CA5,9CA6,9CA7,9CA8,9CA9,9CAB,9CAD,9CAE,9CB0,9CB1,9CB2,9CB3,9CB4,9CB5,9CB6,9CB7,9CB8,9CBA,9CBB,9CBC,9CBD,9CC3,9CC4,9CC5,9CC6,9CC7,9CCA,9CCB,9CCC,9CCD,9CCE,9CCF,9CD0,9CD3,9CD4,9CD5,9CD6,9CD7,9CD8,9CD9,9CDC,9CDD,9CDE,9CDF,9CE2,9E1F,9E20,9E21,9E22,9E23,9E25,9E26,9E28,9E29,9E2A,9E2B,9E2C,9E2D,9E2F,9E31,9E32,9E33,9E35,9E36,9E37,9E38,9E39,9E3A,9E3D,9E3E,9E3F,9E41,9E42,9E43,9E44,9E45,9E46,9E47,9E48,9E49,9E4A,9E4B,9E4C,9E4E,9E4F,9E51,9E55,9E57,9E58,9E5A,9E5B,9E5C,9E5E,9E63,9E64,9E66,9E67,9E68,9E69,9E6A,9E6B,9E6C,9E6D,9E70,9E71,9E73,9E7E,9E7F,9E82,9E87,9E88,9E8B,9E92,9E93,9E9D,9E9F,9EA6,9EB4,9EB8,9EBB,9EBD,9EBE,9EC4,9EC9,9ECD,9ECE,9ECF,9ED1,9ED4,9ED8,9EDB,9EDC,9EDD,9EDF,9EE0,9EE2,9EE5,9EE7,9EE9,9EEA,9EEF,9EF9,9EFB,9EFC,9EFE,9F0B,9F0D,9F0E,9F10,9F13,9F17,9F19,9F20,9F22,9F2C,9F2F,9F37,9F39,9F3B,9F3D,9F3E,9F44,9F50,9F51,9F7F,9F80,9F83,9F84,9F85,9F86,9F87,9F88,9F89,9F8A,9F8B,9F8C,9F99,9F9A,9F9B,9F9F,9FA0,FF01,FF02,FF03,FF04,FF05,FF06,FF07,FF08,FF09,FF0A,FF0B,FF0C,FF0D,FF0E,FF0F,FF10,FF11,FF12,FF13,FF14,FF15,FF16,FF17,FF18,FF19,FF1A,FF1B,FF1C,FF1D,FF1E,FF1F,FF20,FF21,FF22,FF23,FF24,FF25,FF26,FF27,FF28,FF29,FF2A,FF2B,FF2C,FF2D,FF2E,FF2F,FF30,FF31,FF32,FF33,FF34,FF35,FF36,FF37,FF38,FF39,FF3A,FF3B,FF3C,FF3D,FF3E,FF3F,FF40,FF41,FF42,FF43,FF44,FF45,FF46,FF47,FF48,FF49,FF4A,FF4B,FF4C,FF4D,FF4E,FF4F,FF50,FF51,FF52,FF53,FF54,FF55,FF56,FF57,FF58,FF59,FF5A,FF5B,FF5C,FF5D,FF5E,FFE0,FFE1,FFE3,FFE5';
    },

    AnsicodeChr: function () {
        return 'A1E8,A1EC,A1A7,A1E3,A1C0,A1A4,A1C1,A8A4,A8A2,A8A8,A8A6,A8BA,A8AC,A8AA,A8B0,A8AE,A1C2,A8B4,A8B2,A8B9,A8A1,A8A5,A8A7,A8A9,A8AD,A8B1,A8A3,A8AB,A8AF,A8B3,A8B5,A8B6,A8B7,A8B8,A1A6,A1A5,A6A1,A6A2,A6A3,A6A4,A6A5,A6A6,A6A7,A6A8,A6A9,A6AA,A6AB,A6AC,A6AD,A6AE,A6AF,A6B0,A6B1,A6B2,A6B3,A6B4,A6B5,A6B6,A6B7,A6B8,A6C1,A6C2,A6C3,A6C4,A6C5,A6C6,A6C7,A6C8,A6C9,A6CA,A6CB,A6CC,A6CD,A6CE,A6CF,A6D0,A6D1,A6D2,A6D3,A6D4,A6D5,A6D6,A6D7,A6D8,A7A7,A7A1,A7A2,A7A3,A7A4,A7A5,A7A6,A7A8,A7A9,A7AA,A7AB,A7AC,A7AD,A7AE,A7AF,A7B0,A7B1,A7B2,A7B3,A7B4,A7B5,A7B6,A7B7,A7B8,A7B9,A7BA,A7BB,A7BC,A7BD,A7BE,A7BF,A7C0,A7C1,A7D1,A7D2,A7D3,A7D4,A7D5,A7D6,A7D8,A7D9,A7DA,A7DB,A7DC,A7DD,A7DE,A7DF,A7E0,A7E1,A7E2,A7E3,A7E4,A7E5,A7E6,A7E7,A7E8,A7E9,A7EA,A7EB,A7EC,A7ED,A7EE,A7EF,A7F0,A7F1,A7D7,A1AA,A1AC,A1AE,A1AF,A1B0,A1B1,A1AD,A1EB,A1E4,A1E5,A1F9,A1E6,A1ED,A2F1,A2F2,A2F3,A2F4,A2F5,A2F6,A2F7,A2F8,A2F9,A2FA,A2FB,A2FC,A1FB,A1FC,A1FA,A1FD,A1CA,A1C7,A1C6,A1CC,A1D8,A1DE,A1CF,A1CE,A1C4,A1C5,A1C9,A1C8,A1D2,A1D3,A1E0,A1DF,A1C3,A1CB,A1D7,A1D6,A1D5,A1D9,A1D4,A1DC,A1DD,A1DA,A1DB,A1D1,A1CD,A1D0,A2D9,A2DA,A2DB,A2DC,A2DD,A2DE,A2DF,A2E0,A2E1,A2E2,A2C5,A2C6,A2C7,A2C8,A2C9,A2CA,A2CB,A2CC,A2CD,A2CE,A2CF,A2D0,A2D1,A2D2,A2D3,A2D4,A2D5,A2D6,A2D7,A2D8,A2B1,A2B2,A2B3,A2B4,A2B5,A2B6,A2B7,A2B8,A2B9,A2BA,A2BB,A2BC,A2BD,A2BE,A2BF,A2C0,A2C1,A2C2,A2C3,A2C4,A9A4,A9A5,A9A6,A9A7,A9A8,A9A9,A9AA,A9AB,A9AC,A9AD,A9AE,A9AF,A9B0,A9B1,A9B2,A9B3,A9B4,A9B5,A9B6,A9B7,A9B8,A9B9,A9BA,A9BB,A9BC,A9BD,A9BE,A9BF,A9C0,A9C1,A9C2,A9C3,A9C4,A9C5,A9C6,A9C7,A9C8,A9C9,A9CA,A9CB,A9CC,A9CD,A9CE,A9CF,A9D0,A9D1,A9D2,A9D3,A9D4,A9D5,A9D6,A9D7,A9D8,A9D9,A9DA,A9DB,A9DC,A9DD,A9DE,A9DF,A9E0,A9E1,A9E2,A9E3,A9E4,A9E5,A9E6,A9E7,A9E8,A9E9,A9EA,A9EB,A9EC,A9ED,A9EE,A9EF,A1F6,A1F5,A1F8,A1F7,A1F4,A1F3,A1F0,A1F2,A1F1,A1EF,A1EE,A1E2,A1E1,A1A1,A1A2,A1A3,A1A8,A1A9,A1B4,A1B5,A1B6,A1B7,A1B8,A1B9,A1BA,A1BB,A1BE,A1BF,A1FE,A1B2,A1B3,A1BC,A1BD,A4A1,A4A2,A4A3,A4A4,A4A5,A4A6,A4A7,A4A8,A4A9,A4AA,A4AB,A4AC,A4AD,A4AE,A4AF,A4B0,A4B1,A4B2,A4B3,A4B4,A4B5,A4B6,A4B7,A4B8,A4B9,A4BA,A4BB,A4BC,A4BD,A4BE,A4BF,A4C0,A4C1,A4C2,A4C3,A4C4,A4C5,A4C6,A4C7,A4C8,A4C9,A4CA,A4CB,A4CC,A4CD,A4CE,A4CF,A4D0,A4D1,A4D2,A4D3,A4D4,A4D5,A4D6,A4D7,A4D8,A4D9,A4DA,A4DB,A4DC,A4DD,A4DE,A4DF,A4E0,A4E1,A4E2,A4E3,A4E4,A4E5,A4E6,A4E7,A4E8,A4E9,A4EA,A4EB,A4EC,A4ED,A4EE,A4EF,A4F0,A4F1,A4F2,A4F3,A5A1,A5A2,A5A3,A5A4,A5A5,A5A6,A5A7,A5A8,A5A9,A5AA,A5AB,A5AC,A5AD,A5AE,A5AF,A5B0,A5B1,A5B2,A5B3,A5B4,A5B5,A5B6,A5B7,A5B8,A5B9,A5BA,A5BB,A5BC,A5BD,A5BE,A5BF,A5C0,A5C1,A5C2,A5C3,A5C4,A5C5,A5C6,A5C7,A5C8,A5C9,A5CA,A5CB,A5CC,A5CD,A5CE,A5CF,A5D0,A5D1,A5D2,A5D3,A5D4,A5D5,A5D6,A5D7,A5D8,A5D9,A5DA,A5DB,A5DC,A5DD,A5DE,A5DF,A5E0,A5E1,A5E2,A5E3,A5E4,A5E5,A5E6,A5E7,A5E8,A5E9,A5EA,A5EB,A5EC,A5ED,A5EE,A5EF,A5F0,A5F1,A5F2,A5F3,A5F4,A5F5,A5F6,A8C5,A8C6,A8C7,A8C8,A8C9,A8CA,A8CB,A8CC,A8CD,A8CE,A8CF,A8D0,A8D1,A8D2,A8D3,A8D4,A8D5,A8D6,A8D7,A8D8,A8D9,A8DA,A8DB,A8DC,A8DD,A8DE,A8DF,A8E0,A8E1,A8E2,A8E3,A8E4,A8E5,A8E6,A8E7,A8E8,A8E9,A2E5,A2E6,A2E7,A2E8,A2E9,A2EA,A2EB,A2EC,A2ED,A2EE,D2BB,B6A1,C6DF,CDF2,D5C9,C8FD,C9CF,CFC2,D8A2,B2BB,D3EB,D8A4,B3F3,D7A8,C7D2,D8A7,CAC0,C7F0,B1FB,D2B5,B4D4,B6AB,CBBF,D8A9,B6AA,C1BD,D1CF,C9A5,D8AD,B8F6,D1BE,E3DC,D6D0,B7E1,B4AE,C1D9,D8BC,CDE8,B5A4,CEAA,D6F7,C0F6,BED9,D8AF,C4CB,BEC3,D8B1,C3B4,D2E5,D6AE,CEDA,D5A7,BAF5,B7A6,C0D6,C6B9,C5D2,C7C7,B9D4,B3CB,D2D2,D8BF,BEC5,C6F2,D2B2,CFB0,CFE7,CAE9,D8C0,C2F2,C2D2,C8E9,C7AC,C1CB,D3E8,D5F9,CAC2,B6FE,D8A1,D3DA,BFF7,D4C6,BBA5,D8C1,CEE5,BEAE,D8A8,D1C7,D0A9,D8BD,D9EF,CDF6,BFBA,BDBB,BAA5,D2E0,B2FA,BAE0,C4B6,CFED,BEA9,CDA4,C1C1,C7D7,D9F1,D9F4,C8CB,D8E9,D2DA,CAB2,C8CA,D8EC,D8EA,D8C6,BDF6,C6CD,B3F0,D8EB,BDF1,BDE9,C8D4,B4D3,C2D8,B2D6,D7D0,CACB,CBFB,D5CC,B8B6,CFC9,D9DA,D8F0,C7AA,D8EE,B4FA,C1EE,D2D4,D8ED,D2C7,D8EF,C3C7,D1F6,D6D9,D8F2,D8F5,BCFE,BCDB,C8CE,B7DD,B7C2,C6F3,D8F8,D2C1,CEE9,BCBF,B7FC,B7A5,D0DD,D6DA,D3C5,BBEF,BBE1,D8F1,C9A1,CEB0,B4AB,D8F3,C9CB,D8F6,C2D7,D8F7,CEB1,D8F9,B2AE,B9C0,D9A3,B0E9,C1E6,C9EC,CBC5,CBC6,D9A4,B5E8,B5AB,CEBB,B5CD,D7A1,D7F4,D3D3,CCE5,BACE,D9A2,D9DC,D3E0,D8FD,B7F0,D7F7,D8FE,D8FA,D9A1,C4E3,D3B6,D8F4,D9DD,D8FB,C5E5,C0D0,D1F0,B0DB,BCD1,D9A6,D9A5,D9AC,D9AE,D9AB,CAB9,D9A9,D6B6,B3DE,D9A8,C0FD,CACC,D9AA,D9A7,D9B0,B6B1,B9A9,D2C0,CFC0,C2C2,BDC4,D5EC,B2E0,C7C8,BFEB,D9AD,D9AF,CEEA,BAEE,C7D6,B1E3,B4D9,B6ED,D9B4,BFA1,D9DE,C7CE,C0FE,D9B8,CBD7,B7FD,D9B5,D9B7,B1A3,D3E1,D9B9,D0C5,D9B6,D9B1,D9B2,C1A9,D9B3,BCF3,D0DE,B8A9,BEE3,D9BD,D9BA,B0B3,D9C2,D9C4,B1B6,D9BF,B5B9,BEF3,CCC8,BAF2,D2D0,D9C3,BDE8,B3AB,D9C5,BEEB,D9C6,D9BB,C4DF,D9BE,D9C1,D9C0,D5AE,D6B5,C7E3,D9C8,BCD9,D9CA,D9BC,D9CB,C6AB,D9C9,D7F6,CDA3,BDA1,D9CC,C5BC,CDB5,D9CD,D9C7,B3A5,BFFE,B8B5,C0FC,B0F8,B4F6,D9CE,D9CF,B4A2,D9D0,B4DF,B0C1,D9D1,C9B5,CFF1,D9D2,C1C5,D9D6,C9AE,D9D5,D9D4,D9D7,CBDB,BDA9,C6A7,D9D3,D9D8,D9D9,C8E5,C0DC,B6F9,D8A3,D4CA,D4AA,D0D6,B3E4,D5D7,CFC8,B9E2,BFCB,C3E2,B6D2,CDC3,D9EE,D9F0,B5B3,B6B5,BEA4,C8EB,C8AB,B0CB,B9AB,C1F9,D9E2,C0BC,B9B2,B9D8,D0CB,B1F8,C6E4,BEDF,B5E4,D7C8,D1F8,BCE6,CADE,BCBD,D9E6,D8E7,C4DA,B8D4,C8BD,B2E1,D4D9,C3B0,C3E1,DAA2,C8DF,D0B4,BEFC,C5A9,B9DA,DAA3,D4A9,DAA4,D9FB,B6AC,B7EB,B1F9,D9FC,B3E5,BEF6,BFF6,D2B1,C0E4,B6B3,D9FE,D9FD,BEBB,C6E0,D7BC,DAA1,C1B9,B5F2,C1E8,BCF5,B4D5,C1DD,C4FD,BCB8,B7B2,B7EF,D9EC,C6BE,BFAD,BBCB,B5CA,DBC9,D0D7,CDB9,B0BC,B3F6,BBF7,DBCA,BAAF,D4E4,B5B6,B5F3,D8D6,C8D0,B7D6,C7D0,D8D7,BFAF,DBBB,D8D8,D0CC,BBAE,EBBE,C1D0,C1F5,D4F2,B8D5,B4B4,B3F5,C9BE,C5D0,C5D9,C0FB,B1F0,D8D9,B9CE,B5BD,D8DA,D6C6,CBA2,C8AF,C9B2,B4CC,BFCC,B9F4,D8DB,D8DC,B6E7,BCC1,CCEA,CFF7,D8DD,C7B0,B9D0,BDA3,CCDE,C6CA,D8E0,D8DE,D8DF,B0FE,BEE7,CAA3,BCF4,B8B1,B8EE,D8E2,BDCB,D8E4,D8E3,C5FC,D8E5,D8E6,C1A6,C8B0,B0EC,B9A6,BCD3,CEF1,DBBD,C1D3,B6AF,D6FA,C5AC,BDD9,DBBE,DBBF,C0F8,BEA2,C0CD,DBC0,CAC6,B2AA,D3C2,C3E3,D1AB,DBC2,C0D5,DBC3,BFB1,C4BC,C7DA,DBC4,D9E8,C9D7,B9B4,CEF0,D4C8,B0FC,B4D2,D0D9,D9E9,DECB,D9EB,D8B0,BBAF,B1B1,B3D7,D8CE,D4D1,BDB3,BFEF,CFBB,D8D0,B7CB,D8D1,C6A5,C7F8,D2BD,D8D2,C4E4,CAAE,C7A7,D8A6,C9FD,CEE7,BBDC,B0EB,BBAA,D0AD,B1B0,D7E4,D7BF,B5A5,C2F4,C4CF,B2A9,B2B7,B1E5,DFB2,D5BC,BFA8,C2AC,D8D5,C2B1,D8D4,CED4,DAE0,CEC0,D8B4,C3AE,D3A1,CEA3,BCB4,C8B4,C2D1,BEED,D0B6,DAE1,C7E4,B3A7,B6F2,CCFC,C0FA,C0F7,D1B9,D1E1,D8C7,B2DE,C0E5,BAF1,D8C8,D4AD,CFE1,D8C9,D8CA,CFC3,B3F8,BEC7,D8CB,DBCC,C8A5,CFD8,C8FE,B2CE,D3D6,B2E6,BCB0,D3D1,CBAB,B7B4,B7A2,CAE5,C8A1,CADC,B1E4,D0F0,C5D1,DBC5,B5FE,BFDA,B9C5,BEE4,C1ED,DFB6,DFB5,D6BB,BDD0,D5D9,B0C8,B6A3,BFC9,CCA8,DFB3,CAB7,D3D2,D8CF,D2B6,BAC5,CBBE,CCBE,DFB7,B5F0,DFB4,D3F5,B3D4,B8F7,DFBA,BACF,BCAA,B5F5,CDAC,C3FB,BAF3,C0F4,CDC2,CFF2,DFB8,CFC5,C2C0,DFB9,C2F0,BEFD,C1DF,CDCC,D2F7,B7CD,DFC1,DFC4,B7F1,B0C9,B6D6,B7D4,BAAC,CCFD,BFD4,CBB1,C6F4,D6A8,DFC5,CEE2,B3B3,CEFC,B4B5,CEC7,BAF0,CEE1,D1BD,DFC0,B4F4,B3CA,B8E6,DFBB,C4C5,DFBC,DFBD,DFBE,C5BB,DFBF,DFC2,D4B1,DFC3,C7BA,CED8,C4D8,DFCA,DFCF,D6DC,DFC9,DFDA,CEB6,BAC7,DFCE,DFC8,C5DE,C9EB,BAF4,C3FC,BED7,DFC6,DFCD,C5D8,D5A6,BACD,BECC,D3BD,B8C0,D6E4,DFC7,B9BE,BFA7,C1FC,DFCB,DFCC,DFD0,DFDB,DFE5,DFD7,DFD6,D7C9,DFE3,DFE4,E5EB,D2A7,DFD2,BFA9,D4DB,BFC8,DFD4,CFCC,DFDD,D1CA,DFDE,B0A7,C6B7,DFD3,BAE5,B6DF,CDDB,B9FE,D4D5,DFDF,CFEC,B0A5,DFE7,DFD1,D1C6,DFD5,DFD8,DFD9,DFDC,BBA9,DFE0,DFE1,DFE2,DFE6,DFE8,D3B4,B8E7,C5B6,DFEA,C9DA,C1A8,C4C4,BFDE,CFF8,D5DC,DFEE,B2B8,BADF,DFEC,DBC1,D1E4,CBF4,B4BD,B0A6,DFF1,CCC6,DFF2,DFED,DFE9,DFEB,DFEF,DFF0,BBBD,DFF3,DFF4,BBA3,CADB,CEA8,E0A7,B3AA,E0A6,E0A1,DFFE,CDD9,DFFC,DFFA,BFD0,D7C4,C9CC,DFF8,B0A1,DFFD,DFFB,E0A2,E0A8,B7C8,C6A1,C9B6,C0B2,DFF5,C5BE,D8C4,DFF9,C4F6,E0A3,E0A4,E0A5,D0A5,E0B4,CCE4,E0B1,BFA6,E0AF,CEB9,E0AB,C9C6,C0AE,E0AE,BAED,BAB0,E0A9,DFF6,E0B3,E0B8,B4AD,E0B9,CFB2,BAC8,E0B0,D0FA,E0AC,D4FB,DFF7,C5E7,E0AD,D3F7,E0B6,E0B7,E0C4,D0E1,E0BC,E0C9,E0CA,E0BE,E0AA,C9A4,E0C1,E0B2,CAC8,E0C3,E0B5,CECB,CBC3,E0CD,E0C6,E0C2,E0CB,E0BA,E0BF,E0C0,E0C5,E0C7,E0C8,E0CC,E0BB,CBD4,E0D5,E0D6,E0D2,E0D0,BCCE,E0D1,B8C2,D8C5,D0EA,C2EF,E0CF,E0BD,E0D4,E0D3,E0D7,E0DC,E0D8,D6F6,B3B0,D7EC,CBBB,E0DA,CEFB,BAD9,E0E1,E0DD,D2AD,E0E2,E0DB,E0D9,E0DF,E0E0,E0DE,E0E4,C6F7,D8AC,D4EB,E0E6,CAC9,E0E5,B8C1,E0E7,E0E8,E0E9,E0E3,BABF,CCE7,E0EA,CFF9,E0EB,C8C2,BDC0,C4D2,E0EC,E0ED,C7F4,CBC4,E0EE,BBD8,D8B6,D2F2,E0EF,CDC5,B6DA,E0F1,D4B0,C0A7,B4D1,CEA7,E0F0,E0F2,B9CC,B9FA,CDBC,E0F3,C6D4,E0F4,D4B2,C8A6,E0F6,E0F5,E0F7,CDC1,CAA5,D4DA,DBD7,DBD9,DBD8,B9E7,DBDC,DBDD,B5D8,DBDA,DBDB,B3A1,DBDF,BBF8,D6B7,DBE0,BEF9,B7BB,DBD0,CCAE,BFB2,BBB5,D7F8,BFD3,BFE9,BCE1,CCB3,DBDE,B0D3,CEEB,B7D8,D7B9,C6C2,C0A4,CCB9,DBE7,DBE1,C6BA,DBE3,DBE8,C5F7,DBEA,DBE9,BFC0,DBE6,DBE5,B4B9,C0AC,C2A2,DBE2,DBE4,D0CD,DBED,C0DD,DBF2,B6E2,DBF3,DBD2,B9B8,D4AB,DBEC,BFD1,DBF0,DBD1,B5E6,DBEB,BFE5,DBEE,DBF1,DBF9,B9A1,B0A3,C2F1,B3C7,DBEF,DBF8,C6D2,DBF4,DBF5,DBF7,DBF6,DBFE,D3F2,B2BA,DBFD,DCA4,DBFB,DBFA,DBFC,C5E0,BBF9,DCA3,DCA5,CCC3,B6D1,DDC0,DCA1,DCA2,C7B5,B6E9,DCA7,DCA6,DCA9,B1A4,B5CC,BFB0,D1DF,B6C2,DCA8,CBFA,EBF3,CBDC,CBFE,CCC1,C8FB,DCAA,CCEE,DCAB,DBD3,DCAF,DCAC,BEB3,CAFB,DCAD,C9CA,C4B9,C7BD,DCAE,D4F6,D0E6,C4AB,B6D5,DBD4,B1DA,DBD5,DBD6,BABE,C8C0,CABF,C8C9,D7B3,C9F9,BFC7,BAF8,D2BC,E2BA,B4A6,B1B8,B8B4,CFC4,D9E7,CFA6,CDE2,D9ED,B6E0,D2B9,B9BB,E2B9,E2B7,B4F3,CCEC,CCAB,B7F2,D8B2,D1EB,BABB,CAA7,CDB7,D2C4,BFE4,BCD0,B6E1,DEC5,DEC6,DBBC,D1D9,C6E6,C4CE,B7EE,B7DC,BFFC,D7E0,C6F5,B1BC,DEC8,BDB1,CCD7,DECA,DEC9,B5EC,C9DD,B0C2,C5AE,C5AB,C4CC,BCE9,CBFD,BAC3,E5F9,C8E7,E5FA,CDFD,D7B1,B8BE,C2E8,C8D1,E5FB,B6CA,BCCB,D1FD,E6A1,C3EE,E6A4,E5FE,E6A5,CDD7,B7C1,E5FC,E5FD,E6A3,C4DD,E6A8,E6A7,C3C3,C6DE,E6AA,C4B7,E6A2,CABC,BDE3,B9C3,E6A6,D0D5,CEAF,E6A9,E6B0,D2A6,BDAA,E6AD,E6AF,C0D1,D2CC,BCA7,E6B1,D2F6,D7CB,CDFE,CDDE,C2A6,E6AB,E6AC,BDBF,E6AE,E6B3,E6B2,E6B6,E6B8,C4EF,C4C8,BEEA,C9EF,E6B7,B6F0,C3E4,D3E9,E6B4,E6B5,C8A2,E6BD,E6B9,C6C5,CDF1,E6BB,E6BC,BBE9,E6BE,E6BA,C0B7,D3A4,E6BF,C9F4,E6C3,E6C4,D0F6,C3BD,C3C4,E6C2,E6C1,E6C7,CFB1,EBF4,E6CA,E6C5,BCDE,C9A9,BCB5,CFD3,E6C8,E6C9,E6CE,E6D0,E6D1,E6CB,B5D5,E6CC,E6CF,C4DB,E6C6,E6CD,E6D2,E6D4,E6D3,E6D5,D9F8,E6D6,E6D7,D7D3,E6DD,E6DE,BFD7,D4D0,D7D6,B4E6,CBEF,E6DA,D8C3,D7CE,D0A2,C3CF,E6DF,BCBE,B9C2,E6DB,D1A7,BAA2,C2CF,D8AB,CAEB,E5EE,E6DC,B7F5,C8E6,C4F5,E5B2,C4FE,CBFC,E5B3,D5AC,D3EE,CAD8,B0B2,CBCE,CDEA,BAEA,E5B5,E5B4,D7DA,B9D9,D6E6,B6A8,CDF0,D2CB,B1A6,CAB5,B3E8,C9F3,BFCD,D0FB,CAD2,E5B6,BBC2,CFDC,B9AC,D4D7,BAA6,D1E7,CFFC,BCD2,E5B7,C8DD,BFED,B1F6,CBDE,BCC5,BCC4,D2FA,C3DC,BFDC,B8BB,C3C2,BAAE,D4A2,C7DE,C4AF,B2EC,B9D1,E5BB,C1C8,D5AF,E5BC,E5BE,B4E7,B6D4,CBC2,D1B0,B5BC,CAD9,B7E2,C9E4,BDAB,CEBE,D7F0,D0A1,C9D9,B6FB,E6D8,BCE2,B3BE,C9D0,E6D9,B3A2,DECC,D3C8,DECD,D2A2,DECE,BECD,DECF,CAAC,D2FC,B3DF,E5EA,C4E1,BEA1,CEB2,C4F2,BED6,C6A8,B2E3,BED3,C7FC,CCEB,BDEC,CEDD,CABA,C6C1,E5EC,D0BC,D5B9,E5ED,CAF4,CDC0,C2C5,E5EF,C2C4,E5F0,E5F8,CDCD,C9BD,D2D9,E1A8,D3EC,CBEA,C6F1,E1AC,E1A7,E1A9,E1AA,E1AF,B2ED,E1AB,B8DA,E1AD,E1AE,E1B0,B5BA,E1B1,E1B3,E1B8,D1D2,E1B6,E1B5,C1EB,E1B7,D4C0,E1B2,E1BA,B0B6,E1B4,BFF9,E1B9,E1BB,E1BE,E1BC,D6C5,CFBF,E1BD,E1BF,C2CD,B6EB,D3F8,C7CD,B7E5,BEFE,E1C0,E1C1,E1C7,B3E7,C6E9,B4DE,D1C2,E1C8,E1C6,E1C5,E1C3,E1C2,B1C0,D5B8,E1C4,E1CB,E1CC,E1CA,EFFA,E1D3,E1D2,C7B6,E1C9,E1CE,E1D0,E1D4,E1D1,E1CD,E1CF,E1D5,E1D6,E1D7,E1D8,E1DA,E1DB,CEA1,E7DD,B4A8,D6DD,D1B2,B3B2,B9A4,D7F3,C7C9,BEDE,B9AE,CED7,B2EE,DBCF,BCBA,D2D1,CBC8,B0CD,CFEF,D9E3,BDED,B1D2,CAD0,B2BC,CBA7,B7AB,CAA6,CFA3,E0F8,D5CA,E0FB,E0FA,C5C1,CCFB,C1B1,E0F9,D6E3,B2AF,D6C4,B5DB,B4F8,D6A1,CFAF,B0EF,E0FC,E1A1,B3A3,E0FD,E0FE,C3B1,C3DD,E1A2,B7F9,BBCF,E1A3,C4BB,E1A4,E1A5,E1A6,B4B1,B8C9,C6BD,C4EA,B2A2,D0D2,E7DB,BBC3,D3D7,D3C4,B9E3,E2CF,D7AF,C7EC,B1D3,B4B2,E2D1,D0F2,C2AE,E2D0,BFE2,D3A6,B5D7,E2D2,B5EA,C3ED,B8FD,B8AE,C5D3,B7CF,E2D4,E2D3,B6C8,D7F9,CDA5,E2D8,E2D6,CAFC,BFB5,D3B9,E2D5,E2D7,C1AE,C0C8,E2DB,E2DA,C0AA,C1CE,E2DC,E2DD,E2DE,DBC8,D1D3,CDA2,BDA8,DEC3,D8A5,BFAA,DBCD,D2EC,C6FA,C5AA,DEC4,B1D7,DFAE,CABD,DFB1,B9AD,D2FD,B8A5,BAEB,B3DA,B5DC,D5C5,C3D6,CFD2,BBA1,E5F3,E5F2,E5F4,CDE4,C8F5,B5AF,C7BF,E5F6,ECB0,E5E6,B9E9,B5B1,C2BC,E5E8,E5E7,E5E9,D2CD,E1EA,D0CE,CDAE,D1E5,B2CA,B1EB,B1F2,C5ED,D5C3,D3B0,E1DC,E1DD,D2DB,B3B9,B1CB,CDF9,D5F7,E1DE,BEB6,B4FD,E1DF,BADC,E1E0,BBB2,C2C9,E1E1,D0EC,CDBD,E1E2,B5C3,C5C7,E1E3,E1E4,D3F9,E1E5,D1AD,E1E6,CEA2,E1E7,B5C2,E1E8,BBD5,D0C4,E2E0,B1D8,D2E4,E2E1,BCC9,C8CC,E2E3,ECFE,ECFD,DFAF,E2E2,D6BE,CDFC,C3A6,E3C3,D6D2,E2E7,E2E8,D3C7,E2EC,BFEC,E2ED,E2E5,B3C0,C4EE,E2EE,D0C3,BAF6,E2E9,B7DE,BBB3,CCAC,CBCB,E2E4,E2E6,E2EA,E2EB,E2F7,E2F4,D4F5,E2F3,C5AD,D5FA,C5C2,B2C0,E2EF,E2F2,C1AF,CBBC,B5A1,E2F9,BCB1,E2F1,D0D4,D4B9,E2F5,B9D6,E2F6,C7D3,E2F0,D7DC,EDA1,E2F8,EDA5,E2FE,CAD1,C1B5,BBD0,BFD6,BAE3,CBA1,EDA6,EDA3,EDA2,BBD6,EDA7,D0F4,EDA4,BADE,B6F7,E3A1,B6B2,CCF1,B9A7,CFA2,C7A1,BFD2,B6F1,E2FA,E2FB,E2FD,E2FC,C4D5,E3A2,D3C1,E3A7,C7C4,CFA4,E3A9,BAB7,E3A8,BBDA,E3A3,E3A4,E3AA,E3A6,CEF2,D3C6,BBBC,D4C3,C4FA,EDA8,D0FC,E3A5,C3F5,E3AD,B1AF,E3B2,BCC2,E3AC,B5BF,C7E9,E3B0,BEAA,CDEF,BBF3,CCE8,E3AF,E3B1,CFA7,E3AE,CEA9,BBDD,B5EB,BEE5,B2D2,B3CD,B1B9,E3AB,B2D1,B5AC,B9DF,B6E8,CFEB,E3B7,BBCC,C8C7,D0CA,E3B8,B3EE,EDA9,D3FA,D3E4,EDAA,E3B9,D2E2,E3B5,D3DE,B8D0,E3B3,E3B6,B7DF,E3B4,C0A2,E3BA,D4B8,B4C8,E3BB,BBC5,C9F7,C9E5,C4BD,EDAB,C2FD,BBDB,BFAE,CEBF,E3BC,BFB6,B1EF,D4F7,E3BE,EDAD,E3BF,BAA9,EDAC,E3BD,E3C0,BAB6,B6AE,D0B8,B0C3,EDAE,EDAF,C0C1,E3C1,C5B3,E3C2,DCB2,EDB0,B8EA,CEEC,EAA7,D0E7,CAF9,C8D6,CFB7,B3C9,CED2,BDE4,E3DE,BBF2,EAA8,D5BD,C6DD,EAA9,EAAA,EAAC,EAAB,EAAE,EAAD,BDD8,EAAF,C2BE,B4C1,B4F7,BBA7,ECE6,ECE5,B7BF,CBF9,B1E2,ECE7,C9C8,ECE8,ECE9,CAD6,DED0,B2C5,D4FA,C6CB,B0C7,B4F2,C8D3,CDD0,BFB8,BFDB,C7A4,D6B4,C0A9,DED1,C9A8,D1EF,C5A4,B0E7,B3B6,C8C5,B0E2,B7F6,C5FA,B6F3,D5D2,B3D0,BCBC,B3AD,BEF1,B0D1,D2D6,CAE3,D7A5,CDB6,B6B6,BFB9,D5DB,B8A7,C5D7,DED2,BFD9,C2D5,C7C0,BBA4,B1A8,C5EA,C5FB,CCA7,B1A7,B5D6,C4A8,DED3,D1BA,B3E9,C3F2,B7F7,D6F4,B5A3,B2F0,C4B4,C4E9,C0AD,DED4,B0E8,C5C4,C1E0,B9D5,BEDC,CDD8,B0CE,CDCF,DED6,BED0,D7BE,DED5,D5D0,B0DD,C4E2,C2A3,BCF0,D3B5,C0B9,C5A1,B2A6,D4F1,C0A8,CAC3,DED7,D5FC,B9B0,C8AD,CBA9,DED9,BFBD,C6B4,D7A7,CAB0,C4C3,B3D6,B9D2,D6B8,EAFC,B0B4,BFE6,CCF4,CDDA,D6BF,C2CE,CECE,CCA2,D0AE,C4D3,B5B2,DED8,D5F5,BCB7,BBD3,B0A4,C5B2,B4EC,D5F1,EAFD,DEDA,CDA6,CDEC,CEE6,DEDC,CDB1,C0A6,D7BD,DEDB,B0C6,BAB4,C9D3,C4F3,BEE8,B2B6,C0CC,CBF0,BCF1,BBBB,B5B7,C5F5,DEE6,DEE3,BEDD,DEDF,B4B7,BDDD,DEE0,C4ED,CFC6,B5E0,B6DE,CADA,B5F4,DEE5,D5C6,DEE1,CCCD,C6FE,C5C5,D2B4,BEF2,C2D3,CCBD,B3B8,BDD3,BFD8,CDC6,D1DA,B4EB,DEE4,DEDD,DEE7,EAFE,C2B0,DEE2,D6C0,B5A7,B2F4,DEE8,DEF2,DEED,DEF1,C8E0,D7E1,DEEF,C3E8,CCE1,B2E5,D2BE,DEEE,DEEB,CED5,B4A7,BFAB,BEBE,BDD2,DEE9,D4AE,DEDE,DEEA,C0BF,DEEC,B2F3,B8E9,C2A7,BDC1,DEF5,DEF8,B2AB,B4A4,B4EA,C9A6,DEF6,CBD1,B8E3,DEF7,DEFA,DEF9,CCC2,B0E1,B4EE,E5BA,D0AF,B2EB,EBA1,DEF4,C9E3,DEF3,B0DA,D2A1,B1F7,CCAF,DEF0,CBA4,D5AA,DEFB,B4DD,C4A6,DEFD,C3FE,C4A1,DFA1,C1CC,DEFC,BEEF,C6B2,B3C5,C8F6,CBBA,DEFE,DFA4,D7B2,B3B7,C1C3,C7CB,B2A5,B4E9,D7AB,C4EC,DFA2,DFA3,DFA5,BAB3,DFA6,C0DE,C9C3,B2D9,C7E6,DFA7,C7DC,DFA8,EBA2,CBD3,DFAA,DFA9,B2C1,C5CA,DFAB,D4DC,C8C1,DFAC,BEF0,DFAD,D6A7,EAB7,EBB6,CAD5,D8FC,B8C4,B9A5,B7C5,D5FE,B9CA,D0A7,F4CD,B5D0,C3F4,BEC8,EBB7,B0BD,BDCC,C1B2,B1D6,B3A8,B8D2,C9A2,B6D8,EBB8,BEB4,CAFD,C7C3,D5FB,B7F3,CEC4,D5AB,B1F3,ECB3,B0DF,ECB5,B6B7,C1CF,F5FA,D0B1,D5E5,CED3,BDEF,B3E2,B8AB,D5B6,EDBD,B6CF,CBB9,D0C2,B7BD,ECB6,CAA9,C5D4,ECB9,ECB8,C2C3,ECB7,D0FD,ECBA,ECBB,D7E5,ECBC,ECBD,C6EC,CEDE,BCC8,C8D5,B5A9,BEC9,D6BC,D4E7,D1AE,D0F1,EAB8,EAB9,EABA,BAB5,CAB1,BFF5,CDFA,EAC0,B0BA,EABE,C0A5,EABB,B2FD,C3F7,BBE8,D2D7,CEF4,EABF,EABC,EAC3,D0C7,D3B3,B4BA,C3C1,D7F2,D5D1,CAC7,EAC5,EAC4,EAC7,EAC6,D6E7,CFD4,EACB,BBCE,BDFA,C9CE,EACC,C9B9,CFFE,EACA,D4CE,EACD,EACF,CDED,EAC9,EACE,CEEE,BBDE,B3BF,C6D5,BEB0,CEFA,C7E7,BEA7,EAD0,D6C7,C1C0,D4DD,EAD1,CFBE,EAD2,CAEE,C5AF,B0B5,EAD4,EAD3,F4DF,C4BA,B1A9,E5DF,EAD5,CAEF,EAD6,EAD7,C6D8,EAD8,EAD9,D4BB,C7FA,D2B7,B8FC,EAC2,B2DC,C2FC,D4F8,CCE6,D7EE,D4C2,D3D0,EBC3,C5F3,B7FE,EBD4,CBB7,EBDE,C0CA,CDFB,B3AF,C6DA,EBFC,C4BE,CEB4,C4A9,B1BE,D4FD,CAF5,D6EC,C6D3,B6E4,BBFA,D0E0,C9B1,D4D3,C8A8,B8CB,E8BE,C9BC,E8BB,C0EE,D0D3,B2C4,B4E5,E8BC,D5C8,B6C5,E8BD,CAF8,B8DC,CCF5,C0B4,D1EE,E8BF,E8C2,BABC,B1AD,BDDC,EABD,E8C3,E8C6,E8CB,E8CC,CBC9,B0E5,BCAB,B9B9,E8C1,CDF7,E8CA,CEF6,D5ED,C1D6,E8C4,C3B6,B9FB,D6A6,E8C8,CAE0,D4E6,E8C0,E8C5,E8C7,C7B9,B7E3,E8C9,BFDD,E8D2,E8D7,E8D5,BCDC,BCCF,E8DB,E8DE,E8DA,B1FA,B0D8,C4B3,B8CC,C6E2,C8BE,C8E1,E8CF,E8D4,E8D6,B9F1,E8D8,D7F5,C4FB,E8DC,B2E9,E8D1,BCED,BFC2,E8CD,D6F9,C1F8,B2F1,E8DF,CAC1,E8D9,D5A4,B1EA,D5BB,E8CE,E8D0,B6B0,E8D3,E8DD,C0B8,CAF7,CBA8,C6DC,C0F5,E8E9,D0A3,E8F2,D6EA,E8E0,E8E1,D1F9,BACB,B8F9,B8F1,D4D4,E8EF,E8EE,E8EC,B9F0,CCD2,E8E6,CEA6,BFF2,B0B8,E8F1,E8F0,D7C0,E8E4,CDA9,C9A3,BBB8,BDDB,E8EA,E8E2,E8E3,E8E5,B5B5,E8E7,C7C5,E8EB,E8ED,BDB0,D7AE,E8F8,E8F5,CDB0,E8F6,C1BA,E8E8,C3B7,B0F0,E8F4,E8F7,B9A3,C9D2,C3CE,CEE0,C0E6,CBF3,CCDD,D0B5,CAE1,E8F3,BCEC,E8F9,C3DE,C6E5,B9F7,B0F4,D7D8,BCAC,C5EF,CCC4,E9A6,C9AD,E9A2,C0E2,BFC3,E8FE,B9D7,E8FB,E9A4,D2CE,E9A3,D6B2,D7B5,E9A7,BDB7,E8FC,E8FD,E9A1,CDD6,D2AC,E9B2,E9A9,B4AA,B4BB,E9AB,D0A8,E9A5,B3FE,E9AC,C0E3,E9AA,E9B9,E9B8,E9AE,E8FA,E9A8,BFAC,E9B1,E9BA,C2A5,E9AF,B8C5,E9AD,D3DC,E9B4,E9B5,E9B7,E9C7,C0C6,E9C5,E9B0,E9BB,B0F1,E9BC,D5A5,E9BE,E9BF,E9C1,C1F1,C8B6,E9BD,E9C2,E9C3,E9B3,E9B6,BBB1,E9C0,BCF7,E9C4,E9C6,E9CA,E9CE,B2DB,E9C8,B7AE,E9CB,E9CC,D5C1,C4A3,E9D8,BAE1,E9C9,D3A3,E9D4,E9D7,E9D0,E9CF,C7C1,E9D2,E9D9,B3C8,E9D3,CFF0,E9CD,B3F7,E9D6,E9DA,CCB4,CFAD,E9D5,E9DC,E9DB,E9DE,E9D1,E9DD,E9DF,C3CA,C7B7,B4CE,BBB6,D0C0,ECA3,C5B7,D3FB,ECA4,ECA5,C6DB,BFEE,ECA6,ECA7,D0AA,C7B8,B8E8,ECA8,D6B9,D5FD,B4CB,B2BD,CEE4,C6E7,CDE1,B4F5,CBC0,BCDF,E9E2,E9E3,D1EA,E9E5,B4F9,E9E4,D1B3,CAE2,B2D0,E9E8,E9E6,E9E7,D6B3,E9E9,E9EA,E9EB,E9EC,ECAF,C5B9,B6CE,D2F3,B5EE,BBD9,ECB1,D2E3,CEE3,C4B8,C3BF,B6BE,D8B9,B1C8,B1CF,B1D1,C5FE,B1D0,C3AB,D5B1,EBA4,BAC1,CCBA,EBA5,EBA7,EBA8,EBA6,EBA9,EBAB,EBAA,EBAC,CACF,D8B5,C3F1,C3A5,C6F8,EBAD,C4CA,EBAE,EBAF,EBB0,B7D5,B7FA,EBB1,C7E2,EBB3,BAA4,D1F5,B0B1,EBB2,EBB4,B5AA,C2C8,C7E8,EBB5,CBAE,E3DF,D3C0,D9DB,CDA1,D6AD,C7F3,D9E0,BBE3,BABA,E3E2,CFAB,E3E0,C9C7,BAB9,D1B4,E3E1,C8EA,B9AF,BDAD,B3D8,CEDB,CCC0,E3E8,E3E9,CDF4,CCAD,BCB3,E3EA,E3EB,D0DA,C6FB,B7DA,C7DF,D2CA,CED6,E3E4,E3EC,C9F2,B3C1,E3E7,C6E3,E3E5,EDB3,E3E6,C9B3,C5E6,B9B5,C3BB,E3E3,C5BD,C1A4,C2D9,B2D7,E3ED,BBA6,C4AD,E3F0,BEDA,E3FB,E3F5,BAD3,B7D0,D3CD,D6CE,D5D3,B9C1,D5B4,D1D8,D0B9,C7F6,C8AA,B2B4,C3DA,E3EE,E3FC,E3EF,B7A8,E3F7,E3F4,B7BA,C5A2,E3F6,C5DD,B2A8,C6FC,C4E0,D7A2,C0E1,E3F9,E3FA,E3FD,CCA9,E3F3,D3BE,B1C3,EDB4,E3F1,E3F2,E3F8,D0BA,C6C3,D4F3,E3FE,BDE0,E4A7,E4A6,D1F3,E4A3,E4A9,C8F7,CFB4,E4A8,E4AE,C2E5,B6B4,BDF2,E4A2,BAE9,E4AA,E4AC,B6FD,D6DE,E4B2,E4AD,E4A1,BBEE,CDDD,C7A2,C5C9,C1F7,E4A4,C7B3,BDAC,BDBD,E4A5,D7C7,B2E2,E4AB,BCC3,E4AF,BBEB,E4B0,C5A8,E4B1,D5E3,BFA3,E4BA,E4B7,E4BB,E4BD,C6D6,BAC6,C0CB,B8A1,E4B4,D4A1,BAA3,BDFE,E4BC,CDBF,C4F9,CFFB,C9E6,D3BF,CFD1,E4B3,E4B8,E4B9,CCE9,CCCE,C0D4,E4B5,C1B0,E4B6,CED0,BBC1,B5D3,C8F3,BDA7,D5C7,C9AC,B8A2,E4CA,E4CC,D1C4,D2BA,BAAD,BAD4,E4C3,B5ED,D7CD,E4C0,CFFD,E4BF,C1DC,CCCA,CAE7,C4D7,CCD4,E4C8,E4C7,E4C1,E4C4,B5AD,D3D9,E4C6,D2F9,B4E3,BBB4,C9EE,B4BE,BBEC,D1CD,CCED,EDB5,C7E5,D4A8,E4CB,D7D5,E4C2,BDA5,E4C5,D3E6,E4C9,C9F8,E4BE,D3E5,C7FE,B6C9,D4FC,B2B3,E4D7,CEC2,E4CD,CEBC,B8DB,E4D6,BFCA,D3CE,C3EC,C5C8,E4D8,CDC4,E4CF,E4D4,E4D5,BAFE,CFE6,D5BF,E4D2,E4D0,E4CE,CDE5,CAAA,C0A3,BDA6,E4D3,B8C8,E4E7,D4B4,E4DB,C1EF,E4E9,D2E7,E4DF,E4E0,CFAA,CBDD,E4DA,E4D1,E4E5,C8DC,E4E3,C4E7,E4E2,E4E1,B3FC,E4E8,B5E1,D7CC,E4E6,BBAC,D7D2,CCCF,EBF8,E4E4,B9F6,D6CD,E4D9,E4DC,C2FA,E4DE,C2CB,C0C4,C2D0,B1F5,CCB2,B5CE,E4EF,C6AF,C6E1,E4F5,C2A9,C0EC,D1DD,E4EE,C4AE,E4ED,E4F6,E4F4,C2FE,E4DD,E4F0,CAFE,D5C4,E4F1,D1FA,E4EB,E4EC,E4F2,CEAB,C5CB,C7B1,C2BA,E4EA,C1CA,CCB6,B3B1,E4FB,E4F3,E4FA,E4FD,E4FC,B3CE,B3BA,E4F7,E4F9,E4F8,C5EC,C0BD,D4E8,E5A2,B0C4,E5A4,E5A3,BCA4,E5A5,E5A1,E4FE,B1F4,E5A8,E5A9,E5A6,E5A7,E5AA,C6D9,E5AB,E5AD,E5AC,E5AF,E5AE,B9E0,E5B0,E5B1,BBF0,ECE1,C3F0,B5C6,BBD2,C1E9,D4EE,BEC4,D7C6,D4D6,B2D3,ECBE,EAC1,C2AF,B4B6,D1D7,B3B4,C8B2,BFBB,ECC0,D6CB,ECBF,ECC1,ECC5,BEE6,CCBF,C5DA,BEBC,ECC6,B1FE,ECC4,D5A8,B5E3,ECC2,C1B6,B3E3,ECC3,CBB8,C0C3,CCFE,C1D2,ECC8,BAE6,C0D3,D6F2,D1CC,BFBE,B7B3,C9D5,ECC7,BBE2,CCCC,BDFD,C8C8,CFA9,CDE9,C5EB,B7E9,D1C9,BAB8,ECC9,ECCA,BBC0,ECCB,ECE2,B1BA,B7D9,BDB9,ECCC,D1E6,ECCD,C8BB,ECD1,ECD3,BBCD,BCE5,ECCF,C9B7,C3BA,ECE3,D5D5,ECD0,D6F3,ECD2,ECCE,ECD4,ECD5,C9BF,CFA8,D0DC,D1AC,C8DB,ECD6,CEF5,CAEC,ECDA,ECD9,B0BE,ECD7,ECD8,ECE4,C8BC,C1C7,ECDC,D1E0,ECDB,D4EF,ECDD,DBC6,ECDE,B1AC,ECDF,ECE0,D7A6,C5C0,EBBC,B0AE,BEF4,B8B8,D2AF,B0D6,B5F9,D8B3,CBAC,E3DD,C6AC,B0E6,C5C6,EBB9,EBBA,EBBB,D1C0,C5A3,EAF2,C4B2,C4B5,C0CE,EAF3,C4C1,CEEF,EAF0,EAF4,C9FC,C7A3,CCD8,CEFE,EAF5,EAF6,CFAC,C0E7,EAF7,B6BF,EAF8,EAF9,EAFA,EAFB,EAF1,C8AE,E1EB,B7B8,E1EC,E1ED,D7B4,E1EE,E1EF,D3CC,E1F1,BFF1,E1F0,B5D2,B1B7,E1F3,E1F2,BAFC,E1F4,B9B7,BED1,C4FC,BADD,BDC6,E1F5,E1F7,B6C0,CFC1,CAA8,E1F6,D5F8,D3FC,E1F8,E1FC,E1F9,E1FA,C0EA,E1FE,E2A1,C0C7,E1FB,E1FD,E2A5,C1D4,E2A3,E2A8,B2FE,E2A2,C3CD,B2C2,E2A7,E2A6,E2A4,E2A9,E2AB,D0C9,D6ED,C3A8,E2AC,CFD7,E2AE,BAEF,E9E0,E2AD,E2AA,BBAB,D4B3,E2B0,E2AF,E9E1,E2B1,E2B2,E2B3,CCA1,E2B4,E2B5,D0FE,C2CA,D3F1,CDF5,E7E0,E7E1,BEC1,C2EA,E7E4,E7E3,CDE6,C3B5,E7E2,BBB7,CFD6,C1E1,E7E9,E7E8,E7F4,B2A3,E7EA,E7E6,E7EC,E7EB,C9BA,D5E4,E7E5,B7A9,E7E7,E7EE,E7F3,D6E9,E7ED,E7F2,E7F1,B0E0,E7F5,C7F2,C0C5,C0ED,C1F0,E7F0,E7F6,CBF6,E8A2,E8A1,D7C1,E7FA,E7F9,E7FB,E7F7,E7FE,E7FD,E7FC,C1D5,C7D9,C5FD,C5C3,C7ED,E8A3,E8A6,E8A5,E8A7,BAF7,E7F8,E8A4,C8F0,C9AA,E8A9,B9E5,D1FE,E8A8,E8AA,E8AD,E8AE,C1A7,E8AF,E8B0,E8AC,E8B4,E8AB,E8B1,E8B5,E8B2,E8B3,E8B7,E8B6,B9CF,F0AC,F0AD,C6B0,B0EA,C8BF,CDDF,CECD,EAB1,EAB2,C6BF,B4C9,EAB3,D5E7,DDF9,EAB4,EAB5,EAB6,B8CA,DFB0,C9F5,CCF0,C9FA,C9FB,D3C3,CBA6,B8A6,F0AE,B1C2,E5B8,CCEF,D3C9,BCD7,C9EA,B5E7,C4D0,B5E9,EEAE,BBAD,E7DE,EEAF,B3A9,EEB2,EEB1,BDE7,EEB0,CEB7,C5CF,C1F4,DBCE,EEB3,D0F3,C2D4,C6E8,B7AC,EEB4,B3EB,BBFB,EEB5,E7DC,EEB6,BDAE,F1E2,CAE8,D2C9,F0DA,F0DB,F0DC,C1C6,B8ED,BECE,F0DE,C5B1,F0DD,D1F1,F0E0,B0CC,BDEA,D2DF,F0DF,B4AF,B7E8,F0E6,F0E5,C6A3,F0E1,F0E2,B4C3,F0E3,D5EE,CCDB,BED2,BCB2,F0E8,F0E7,F0E4,B2A1,D6A2,D3B8,BEB7,C8AC,F0EA,D1F7,D6CC,BADB,F0E9,B6BB,CDB4,C6A6,C1A1,F0EB,F0EE,F0ED,F0F0,F0EC,BBBE,F0EF,CCB5,F0F2,B3D5,B1D4,F0F3,F0F4,F0F6,B4E1,F0F1,F0F7,F0FA,F0F8,F0F5,F0FD,F0F9,F0FC,F0FE,F1A1,CEC1,F1A4,F1A3,C1F6,F0FB,CADD,B4F1,B1F1,CCB1,F1A6,F1A7,F1AC,D5CE,F1A9,C8B3,F1A2,F1AB,F1A8,F1A5,F1AA,B0A9,F1AD,F1AF,F1B1,F1B0,F1AE,D1A2,F1B2,F1B3,B9EF,B5C7,B0D7,B0D9,D4ED,B5C4,BDD4,BBCA,F0A7,B8DE,F0A8,B0A8,F0A9,CDEE,F0AA,F0AB,C6A4,D6E5,F1E4,F1E5,C3F3,D3DB,D6D1,C5E8,D3AF,D2E6,EEC1,B0BB,D5B5,D1CE,BCE0,BAD0,BFF8,B8C7,B5C1,C5CC,CAA2,C3CB,EEC2,C4BF,B6A2,EDEC,C3A4,D6B1,CFE0,EDEF,C5CE,B6DC,CAA1,EDED,EDF0,EDF1,C3BC,BFB4,EDEE,EDF4,EDF2,D5E6,C3DF,EDF3,EDF6,D5A3,D1A3,EDF5,C3D0,EDF7,BFF4,BEEC,EDF8,CCF7,D1DB,D7C5,D5F6,EDFC,EDFB,EDF9,EDFA,EDFD,BEA6,CBAF,EEA1,B6BD,EEA2,C4C0,EDFE,BDDE,B2C7,B6C3,EEA5,D8BA,EEA3,EEA6,C3E9,B3F2,EEA7,EEA4,CFB9,EEA8,C2F7,EEA9,EEAA,DEAB,C6B3,C7C6,D6F5,B5C9,CBB2,EEAB,CDAB,EEAC,D5B0,EEAD,F6C4,DBC7,B4A3,C3AC,F1E6,CAB8,D2D3,D6AA,EFF2,BED8,BDC3,EFF3,B6CC,B0AB,CAAF,EDB6,EDB7,CEF9,B7AF,BFF3,EDB8,C2EB,C9B0,EDB9,C6F6,BFB3,EDBC,C5F8,D1D0,D7A9,EDBA,EDBB,D1E2,EDBF,EDC0,EDC4,EDC8,EDC6,EDCE,D5E8,EDC9,EDC7,EDBE,C5E9,C6C6,C9E9,D4D2,EDC1,EDC2,EDC3,EDC5,C0F9,B4A1,B9E8,EDD0,EDD1,EDCA,EDCF,CEF8,CBB6,EDCC,EDCD,CFF5,EDD2,C1F2,D3B2,EDCB,C8B7,BCEF,C5F0,EDD6,B5EF,C2B5,B0AD,CBE9,B1AE,EDD4,CDEB,B5E2,EDD5,EDD3,EDD7,B5FA,EDD8,EDD9,EDDC,B1CC,C5F6,BCEE,EDDA,CCBC,B2EA,EDDB,C4EB,B4C5,B0F5,EDDF,C0DA,B4E8,C5CD,EDDD,BFC4,EDDE,C4A5,EDE0,EDE1,EDE3,C1D7,BBC7,BDB8,EDE2,EDE4,EDE6,EDE5,EDE7,CABE,ECEA,C0F1,C9E7,ECEB,C6EE,ECEC,C6ED,ECED,ECF0,D7E6,ECF3,ECF1,ECEE,ECEF,D7A3,C9F1,CBEE,ECF4,ECF2,CFE9,ECF6,C6B1,BCC0,ECF5,B5BB,BBF6,ECF7,D9F7,BDFB,C2BB,ECF8,ECF9,B8A3,ECFA,ECFB,ECFC,D3ED,D8AE,C0EB,C7DD,BACC,D0E3,CBBD,CDBA,B8D1,B1FC,C7EF,D6D6,BFC6,C3EB,EFF5,C3D8,D7E2,EFF7,B3D3,C7D8,D1ED,D6C8,EFF8,EFF6,BBFD,B3C6,BDD5,D2C6,BBE0,CFA1,EFFC,EFFB,EFF9,B3CC,C9D4,CBB0,EFFE,B0DE,D6C9,EFFD,B3ED,F6D5,CEC8,F0A2,F0A1,B5BE,BCDA,BBFC,B8E5,C4C2,F0A3,CBEB,F0A6,D1A8,BEBF,C7EE,F1B6,F1B7,BFD5,B4A9,F1B8,CDBB,C7D4,D5AD,F1B9,F1BA,C7CF,D2A4,D6CF,F1BB,BDD1,B4B0,BEBD,B4DC,CED1,BFDF,F1BD,BFFA,F1BC,F1BF,F1BE,F1C0,F1C1,C1FE,C1A2,CAFA,D5BE,BEBA,BEB9,D5C2,BFA2,CDAF,F1B5,BDDF,B6CB,D6F1,F3C3,F3C4,B8CD,F3C6,F3C7,B0CA,F3C5,F3C9,CBF1,F3CB,D0A6,B1CA,F3C8,F3CF,B5D1,F3D7,F3D2,F3D4,F3D3,B7FB,B1BF,F3CE,F3CA,B5DA,F3D0,F3D1,F3D5,F3CD,BCE3,C1FD,F3D6,F3DA,F3CC,B5C8,BDEE,F3DC,B7A4,BFF0,D6FE,CDB2,B4F0,B2DF,F3D8,F3D9,C9B8,F3DD,F3DE,F3E1,F3DF,F3E3,F3E2,F3DB,BFEA,B3EF,F3E0,C7A9,BCF2,F3EB,B9BF,F3E4,B2AD,BBFE,CBE3,F3ED,F3E9,B9DC,F3EE,F3E5,F3E6,F3EA,C2E1,F3EC,F3EF,F3E8,BCFD,CFE4,F3F0,F3E7,F3F2,D7AD,C6AA,F3F3,F3F1,C2A8,B8DD,F3F5,F3F4,B4DB,F3F6,F3F7,F3F8,C0BA,C0E9,C5F1,F3FB,F3FA,B4D8,F3FE,F3F9,F3FC,F3FD,F4A1,F4A3,BBC9,F4A2,F4A4,B2BE,F4A6,F4A5,BCAE,C3D7,D9E1,C0E0,F4CC,D7D1,B7DB,F4CE,C1A3,C6C9,B4D6,D5B3,F4D0,F4CF,F4D1,CBDA,F4D2,D4C1,D6E0,B7E0,C1B8,C1BB,F4D3,BEAC,B4E2,F4D4,F4D5,BEAB,F4D6,F4DB,F4D7,F4DA,BAFD,F4D8,F4D9,B8E2,CCC7,F4DC,B2DA,C3D3,D4E3,BFB7,F4DD,C5B4,F4E9,CFB5,CEC9,CBD8,CBF7,BDF4,D7CF,C0DB,D0F5,F4EA,F4EB,F4EC,F7E3,B7B1,F4ED,D7EB,F4EE,E6F9,BEC0,E6FA,BAEC,E6FB,CFCB,E6FC,D4BC,BCB6,E6FD,E6FE,BCCD,C8D2,CEB3,E7A1,B4BF,E7A2,C9B4,B8D9,C4C9,D7DD,C2DA,B7D7,D6BD,CEC6,B7C4,C5A6,E7A3,CFDF,E7A4,E7A5,E7A6,C1B7,D7E9,C9F0,CFB8,D6AF,D6D5,E7A7,B0ED,E7A8,E7A9,C9DC,D2EF,BEAD,E7AA,B0F3,C8DE,BDE1,E7AB,C8C6,E7AC,BBE6,B8F8,D1A4,E7AD,C2E7,BEF8,BDCA,CDB3,E7AE,E7AF,BEEE,D0E5,CBE7,CCD0,BCCC,E7B0,BCA8,D0F7,E7B1,D0F8,E7B2,E7B3,B4C2,E7B4,E7B5,C9FE,CEAC,C3E0,E7B7,B1C1,B3F1,E7B8,E7B9,D7DB,D5C0,E7BA,C2CC,D7BA,E7BB,E7BC,E7BD,BCEA,C3E5,C0C2,E7BE,E7BF,BCA9,E7C0,E7C1,E7B6,B6D0,E7C2,E7C3,E7C4,BBBA,B5DE,C2C6,B1E0,E7C5,D4B5,E7C6,B8BF,E7C8,E7C7,B7EC,E7C9,B2F8,E7CA,E7CB,E7CC,E7CD,E7CE,E7CF,E7D0,D3A7,CBF5,E7D1,E7D2,E7D3,E7D4,C9C9,E7D5,E7D6,E7D7,E7D8,E7D9,BDC9,E7DA,F3BE,B8D7,C8B1,F3BF,F3C0,F3C1,B9DE,CDF8,D8E8,BAB1,C2DE,EEB7,B7A3,EEB9,EEB8,B0D5,EEBB,D5D6,D7EF,D6C3,EEBD,CAF0,EEBC,EEBE,EEC0,EEBF,D1F2,C7BC,C3C0,B8E1,C1E7,F4C6,D0DF,F4C7,CFDB,C8BA,F4C8,F4C9,F4CA,F4CB,D9FA,B8FE,E5F1,D3F0,F4E0,CECC,B3E1,F1B4,D2EE,F4E1,CFE8,F4E2,C7CC,B5D4,B4E4,F4E4,F4E3,F4E5,F4E6,F4E7,BAB2,B0BF,F4E8,B7AD,D2ED,D2AB,C0CF,BFBC,EBA3,D5DF,EAC8,F1F3,B6F8,CBA3,C4CD,F1E7,F1E8,B8FB,F1E9,BAC4,D4C5,B0D2,F1EA,F1EB,F1EC,F1ED,F1EE,F1EF,F1F1,F1F0,C5D5,F1F2,B6FA,F1F4,D2AE,DEC7,CBCA,B3DC,B5A2,B9A2,C4F4,F1F5,F1F6,C1C4,C1FB,D6B0,F1F7,F1F8,C1AA,C6B8,BEDB,F1F9,B4CF,F1FA,EDB2,EDB1,CBE0,D2DE,CBC1,D5D8,C8E2,C0DF,BCA1,EBC1,D0A4,D6E2,B6C7,B8D8,EBC0,B8CE,EBBF,B3A6,B9C9,D6AB,B7F4,B7CA,BCE7,B7BE,EBC6,EBC7,B0B9,BFCF,EBC5,D3FD,EBC8,EBC9,B7CE,EBC2,EBC4,C9F6,D6D7,D5CD,D0B2,EBCF,CEB8,EBD0,B5A8,B1B3,EBD2,CCA5,C5D6,EBD3,EBD1,C5DF,EBCE,CAA4,EBD5,B0FB,BAFA,D8B7,F1E3,EBCA,EBCB,EBCC,EBCD,EBD6,E6C0,EBD9,BFE8,D2C8,EBD7,EBDC,B8EC,EBD8,BDBA,D0D8,B0B7,EBDD,C4DC,D6AC,B4E0,C2F6,BCB9,EBDA,EBDB,D4E0,C6EA,C4D4,EBDF,C5A7,D9F5,B2B1,EBE4,BDC5,EBE2,EBE3,B8AC,CDD1,EBE5,EBE1,C1B3,C6A2,CCF3,EBE6,C0B0,D2B8,EBE7,B8AF,B8AD,EBE8,C7BB,CDF3,EBEA,EBEB,EBED,D0C8,EBF2,EBEE,EBF1,C8F9,D1FC,EBEC,EBE9,B8B9,CFD9,C4E5,EBEF,EBF0,CCDA,CDC8,B0F2,EBF6,EBF5,B2B2,B8E0,EBF7,B1EC,CCC5,C4A4,CFA5,EBF9,ECA2,C5F2,EBFA,C9C5,E2DF,EBFE,CDCE,ECA1,B1DB,D3B7,D2DC,EBFD,EBFB,B3BC,EAB0,D7D4,F4AB,B3F4,D6C1,D6C2,D5E9,BECA,F4A7,D2A8,F4A8,F4A9,F4AA,BECB,D3DF,C9E0,C9E1,F3C2,CAE6,CCF2,E2B6,CBB4,CEE8,D6DB,F4AD,F4AE,F4AF,F4B2,BABD,F4B3,B0E3,F4B0,F4B1,BDA2,B2D5,F4B6,F4B7,B6E6,B2B0,CFCF,F4B4,B4AC,F4B5,F4B8,F4B9,CDA7,F4BA,F4BB,F4BC,CBD2,F4BD,F4BE,F4BF,F4DE,C1BC,BCE8,C9AB,D1DE,E5F5,DCB3,D2D5,DCB4,B0AC,DCB5,BDDA,DCB9,D8C2,DCB7,D3F3,C9D6,DCBA,DCB6,DCBB,C3A2,DCBC,DCC5,DCBD,CEDF,D6A5,DCCF,DCCD,DCD2,BDE6,C2AB,DCB8,DCCB,DCCE,DCBE,B7D2,B0C5,DCC7,D0BE,DCC1,BBA8,B7BC,DCCC,DCC6,DCBF,C7DB,D1BF,DCC0,DCCA,DCD0,CEAD,DCC2,DCC3,DCC8,DCC9,B2D4,DCD1,CBD5,D4B7,DCDB,DCDF,CCA6,DCE6,C3E7,DCDC,BFC1,DCD9,B0FA,B9B6,DCE5,DCD3,DCC4,DCD6,C8F4,BFE0,C9BB,B1BD,D3A2,DCDA,DCD5,C6BB,DCDE,D7C2,C3AF,B7B6,C7D1,C3A9,DCE2,DCD8,DCEB,DCD4,DCDD,BEA5,DCD7,DCE0,DCE3,DCE4,DCF8,DCE1,DDA2,DCE7,BCEB,B4C4,C3A3,B2E7,DCFA,DCF2,DCEF,DCFC,DCEE,D2F0,B2E8,C8D7,C8E3,DCFB,DCED,DCF7,DCF5,BEA3,DCF4,B2DD,DCF3,BCF6,DCE8,BBC4,C0F3,BCD4,DCE9,DCEA,DCF1,DCF6,DCF9,B5B4,C8D9,BBE7,DCFE,DCFD,D3AB,DDA1,DDA3,DDA5,D2F1,DDA4,DDA6,DDA7,D2A9,BAC9,DDA9,DDB6,DDB1,DDB4,DDB0,C6CE,C0F2,C9AF,DCEC,DDAE,DDB7,DCF0,DDAF,DDB8,DDAC,DDB9,DDB3,DDAD,C4AA,DDA8,C0B3,C1AB,DDAA,DDAB,DDB2,BBF1,DDB5,D3A8,DDBA,DDBB,C3A7,DDD2,DDBC,DDD1,B9BD,BED5,BEFA,BACA,DDCA,DDC5,DDBF,B2CB,DDC3,DDCB,B2A4,DDD5,DDBE,C6D0,DDD0,DDD4,C1E2,B7C6,DDCE,DDCF,DDC4,DDBD,DDCD,CCD1,DDC9,DDC2,C3C8,C6BC,CEAE,DDCC,DDC8,DDC1,DDC6,C2DC,D3A9,D3AA,DDD3,CFF4,C8F8,DDE6,DDC7,DDE0,C2E4,DDE1,DDD7,D6F8,DDD9,DDD8,B8F0,DDD6,C6CF,B6AD,DDE2,BAF9,D4E1,DDE7,B4D0,DDDA,BFFB,DDE3,DDDF,DDDD,B5D9,DDDB,DDDC,DDDE,BDAF,DDE4,DDE5,DDF5,C3C9,CBE2,DDF2,D8E1,C6D1,DDF4,D5F4,DDF3,DDF0,DDEC,DDEF,DDE8,D0EE,C8D8,DDEE,DDE9,DDEA,CBF2,DDED,B1CD,C0B6,BCBB,DDF1,DDF7,DDF6,DDEB,C5EE,DDFB,DEA4,DEA3,DDF8,C3EF,C2FB,D5E1,CEB5,DDFD,B2CC,C4E8,CADF,C7BE,DDFA,DDFC,DDFE,DEA2,B0AA,B1CE,DEAC,DEA6,BDB6,C8EF,DEA1,DEA5,DEA9,DEA8,DEA7,DEAD,D4CC,DEB3,DEAA,DEAE,C0D9,B1A1,DEB6,DEB1,DEB2,D1A6,DEB5,DEAF,DEB0,D0BD,DEB4,CAED,DEB9,DEB8,DEB7,DEBB,BDE5,B2D8,C3EA,DEBA,C5BA,DEBC,CCD9,B7AA,D4E5,DEBD,DEBF,C4A2,DEC1,DEBE,DEC0,D5BA,DEC2,F2AE,BBA2,C2B2,C5B0,C2C7,F2AF,D0E9,D3DD,EBBD,B3E6,F2B0,F2B1,CAAD,BAE7,F2B3,F2B5,F2B4,CBE4,CFBA,F2B2,CAB4,D2CF,C2EC,CEC3,F2B8,B0F6,F2B7,F2BE,B2CF,D1C1,F2BA,F2BC,D4E9,F2BB,F2B6,F2BF,F2BD,F2B9,F2C7,F2C4,F2C6,F2CA,F2C2,F2C0,F2C5,D6FB,F2C1,C7F9,C9DF,F2C8,B9C6,B5B0,F2C3,F2C9,F2D0,F2D6,BBD7,F2D5,CDDC,D6EB,F2D2,F2D4,B8F2,F2CB,F2CE,C2F9,D5DD,F2CC,F2CD,F2CF,F2D3,F2D9,D3BC,B6EA,CAF1,B7E4,F2D7,F2D8,F2DA,F2DD,F2DB,F2DC,D1D1,F2D1,CDC9,CECF,D6A9,F2E3,C3DB,F2E0,C0AF,F2EC,F2DE,F2E1,F2E8,F2E2,F2E7,F2E6,F2E9,F2DF,F2E4,F2EA,D3AC,F2E5,B2F5,F2F2,D0AB,F2F5,BBC8,F2F9,F2F0,F2F6,F2F8,F2FA,F2F3,F2F1,BAFB,B5FB,F2EF,F2F7,F2ED,F2EE,F2EB,F3A6,F3A3,F3A2,F2F4,C8DA,F2FB,F3A5,C3F8,F2FD,F3A7,F3A9,F3A4,F2FC,F3AB,F3AA,C2DD,F3AE,F3B0,F3A1,F3B1,F3AC,F3AF,F2FE,F3AD,F3B2,F3B4,F3A8,F3B3,F3B5,D0B7,F3B8,D9F9,F3B9,F3B7,C8E4,F3B6,F3BA,F3BB,B4C0,EEC3,F3BC,F3BD,D1AA,F4AC,D0C6,D0D0,D1DC,CFCE,BDD6,D1C3,BAE2,E1E9,D2C2,F1C2,B2B9,B1ED,F1C3,C9C0,B3C4,D9F2,CBA5,F1C4,D6D4,F1C5,F4C0,F1C6,D4AC,F1C7,B0C0,F4C1,F4C2,B4FC,C5DB,CCBB,D0E4,CDE0,F1C8,D9F3,B1BB,CFAE,B8A4,F1CA,F1CB,B2C3,C1D1,D7B0,F1C9,F1CC,F1CE,D9F6,D2E1,D4A3,F4C3,C8B9,F4C4,F1CD,F1CF,BFE3,F1D0,F1D4,F1D6,F1D1,C9D1,C5E1,C2E3,B9FC,F1D3,F1D5,B9D3,F1DB,BAD6,B0FD,F1D9,F1D8,F1D2,F1DA,F1D7,C8EC,CDCA,F1DD,E5BD,F1DC,F1DE,F1DF,CFE5,F4C5,BDF3,F1E0,F1E1,CEF7,D2AA,F1FB,B8B2,BCFB,B9DB,B9E6,C3D9,CAD3,EAE8,C0C0,BEF5,EAE9,EAEA,EAEB,EAEC,EAED,EAEE,EAEF,BDC7,F5FB,F5FD,F5FE,F5FC,BDE2,F6A1,B4A5,F6A2,F6A3,ECB2,D1D4,D9EA,F6A4,EEBA,D5B2,D3FE,CCDC,CAC4,E5C0,F6A5,BEAF,C6A9,DAA5,BCC6,B6A9,B8BC,C8CF,BCA5,DAA6,DAA7,CCD6,C8C3,DAA8,C6FD,D1B5,D2E9,D1B6,BCC7,BDB2,BBE4,DAA9,DAAA,D1C8,DAAB,D0ED,B6EF,C2DB,CBCF,B7ED,C9E8,B7C3,BEF7,D6A4,DAAC,DAAD,C6C0,D7E7,CAB6,D5A9,CBDF,D5EF,DAAE,D6DF,B4CA,DAB0,DAAF,D2EB,DAB1,DAB2,DAB3,CAD4,DAB4,CAAB,DAB5,DAB6,B3CF,D6EF,DAB7,BBB0,B5AE,DAB8,DAB9,B9EE,D1AF,D2E8,DABA,B8C3,CFEA,B2EF,DABB,DABC,BDEB,CEDC,D3EF,DABD,CEF3,DABE,D3D5,BBE5,DABF,CBB5,CBD0,DAC0,C7EB,D6EE,DAC1,C5B5,B6C1,DAC2,B7CC,BFCE,DAC3,DAC4,CBAD,DAC5,B5F7,DAC6,C1C2,D7BB,DAC7,CCB8,D2EA,C4B1,DAC8,B5FD,BBD1,DAC9,D0B3,DACA,DACB,CEBD,DACC,DACD,DACE,B2F7,DAD1,DACF,D1E8,DAD0,C3D5,DAD2,DAD3,DAD4,DAD5,D0BB,D2A5,B0F9,DAD6,C7AB,DAD7,BDF7,C3A1,DAD8,DAD9,C3FD,CCB7,DADA,DADB,C0BE,C6D7,DADC,DADD,C7B4,DADE,DADF,B9C8,BBED,B6B9,F4F8,F4F9,CDE3,F5B9,EBE0,CFF3,BBBF,BAC0,D4A5,E1D9,F5F4,B1AA,B2F2,F5F5,F5F7,BAD1,F5F6,C3B2,F5F9,F5F8,B1B4,D5EA,B8BA,B9B1,B2C6,D4F0,CFCD,B0DC,D5CB,BBF5,D6CA,B7B7,CCB0,C6B6,B1E1,B9BA,D6FC,B9E1,B7A1,BCFA,EADA,EADB,CCF9,B9F3,EADC,B4FB,C3B3,B7D1,BAD8,EADD,D4F4,EADE,BCD6,BBDF,EADF,C1DE,C2B8,D4DF,D7CA,EAE0,EAE1,EAE4,EAE2,EAE3,C9DE,B8B3,B6C4,EAE5,CAEA,C9CD,B4CD,E2D9,C5E2,EAE6,C0B5,D7B8,EAE7,D7AC,C8FC,D8D3,D8CD,D4DE,D4F9,C9C4,D3AE,B8D3,B3E0,C9E2,F4F6,BAD5,F4F7,D7DF,F4F1,B8B0,D5D4,B8CF,C6F0,B3C3,F4F2,B3AC,D4BD,C7F7,F4F4,F4F3,CCCB,C8A4,F4F5,D7E3,C5BF,F5C0,F5BB,F5C3,F5C2,D6BA,F5C1,D4BE,F5C4,F5CC,B0CF,B5F8,F5C9,F5CA,C5DC,F5C5,F5C6,F5C7,F5CB,BEE0,F5C8,B8FA,F5D0,F5D3,BFE7,B9F2,F5BC,F5CD,C2B7,CCF8,BCF9,F5CE,F5CF,F5D1,B6E5,F5D2,F5D5,F5BD,F5D4,D3BB,B3EC,CCA4,F5D6,F5D7,BEE1,F5D8,CCDF,F5DB,B2C8,D7D9,F5D9,F5DA,F5DC,F5E2,F5E0,F5DF,F5DD,F5E1,F5DE,F5E4,F5E5,CCE3,E5BF,B5B8,F5E3,F5E8,CCA3,F5E6,F5E7,F5BE,B1C4,F5BF,B5C5,B2E4,F5EC,F5E9,B6D7,F5ED,F5EA,F5EB,B4DA,D4EA,F5EE,B3F9,F5EF,F5F1,F5F0,F5F2,F5F3,C9ED,B9AA,C7FB,B6E3,CCC9,EAA6,B3B5,D4FE,B9EC,D0F9,E9ED,D7AA,E9EE,C2D6,C8ED,BAE4,E9EF,E9F0,E9F1,D6E1,E9F2,E9F3,E9F5,E9F4,E9F6,E9F7,C7E1,E9F8,D4D8,E9F9,BDCE,E9FA,E9FB,BDCF,E9FC,B8A8,C1BE,E9FD,B1B2,BBD4,B9F5,E9FE,EAA1,EAA2,EAA3,B7F8,BCAD,CAE4,E0CE,D4AF,CFBD,D5B7,EAA4,D5DE,EAA5,D0C1,B9BC,B4C7,B1D9,C0B1,B1E6,B1E7,B1E8,B3BD,C8E8,E5C1,B1DF,C1C9,B4EF,C7A8,D3D8,C6F9,D1B8,B9FD,C2F5,D3AD,D4CB,BDFC,E5C2,B7B5,E5C3,BBB9,D5E2,BDF8,D4B6,CEA5,C1AC,B3D9,CCF6,E5C6,E5C4,E5C8,E5CA,E5C7,B5CF,C6C8,B5FC,E5C5,CAF6,E5C9,C3D4,B1C5,BCA3,D7B7,CDCB,CBCD,CACA,CCD3,E5CC,E5CB,C4E6,D1A1,D1B7,E5CD,E5D0,CDB8,D6F0,E5CF,B5DD,CDBE,E5D1,B6BA,CDA8,B9E4,CAC5,B3D1,CBD9,D4EC,E5D2,B7EA,E5CE,E5D5,B4FE,E5D6,E5D3,E5D4,D2DD,C2DF,B1C6,D3E2,B6DD,CBEC,E5D7,D3F6,B1E9,B6F4,E5DA,E5D8,E5D9,B5C0,D2C5,E5DC,E5DE,E5DD,C7B2,D2A3,E5DB,D4E2,D5DA,E5E0,D7F1,E5E1,B1DC,D1FB,E5E2,E5E4,E5E3,E5E5,D2D8,B5CB,E7DF,DAF5,DAF8,DAF6,DAF7,DAFA,D0CF,C4C7,B0EE,D0B0,DAF9,D3CA,BAAA,DBA2,C7F1,DAFC,DAFB,C9DB,DAFD,DBA1,D7DE,DAFE,C1DA,DBA5,D3F4,DBA7,DBA4,DBA8,BDBC,C0C9,DBA3,DBA6,D6A3,DBA9,DBAD,DBAE,DBAC,BAC2,BFA4,DBAB,DBAA,D4C7,B2BF,DBAF,B9F9,DBB0,B3BB,B5A6,B6BC,DBB1,B6F5,DBB2,B1C9,DBB4,DBB3,DBB5,DBB7,DBB6,DBB8,DBB9,DBBA,D3CF,F4FA,C7F5,D7C3,C5E4,F4FC,F4FD,F4FB,BEC6,D0EF,B7D3,D4CD,CCAA,F5A2,F5A1,BAA8,F4FE,CBD6,F5A4,C0D2,B3EA,CDAA,F5A5,F5A3,BDB4,F5A8,F5A9,BDCD,C3B8,BFE1,CBE1,F5AA,F5A6,F5A7,C4F0,F5AC,B4BC,D7ED,B4D7,F5AB,F5AE,F5AD,F5AF,D0D1,C3D1,C8A9,F5B0,F5B1,F5B2,F5B3,F5B4,F5B5,F5B7,F5B6,F5B8,B2C9,D3D4,CACD,C0EF,D6D8,D2B0,C1BF,BDF0,B8AA,BCF8,F6C6,F6C7,F6C8,F6C9,F6CA,F6CC,F6CB,F7E9,F6CD,F6CE,EEC4,EEC5,EEC6,D5EB,B6A4,EEC8,EEC7,EEC9,EECA,C7A5,EECB,EECC,B7B0,B5F6,EECD,EECF,EECE,B8C6,EED0,EED1,EED2,B6DB,B3AE,D6D3,C4C6,B1B5,B8D6,EED3,EED4,D4BF,C7D5,BEFB,CED9,B9B3,EED6,EED5,EED8,EED7,C5A5,EED9,EEDA,C7AE,EEDB,C7AF,EEDC,B2A7,EEDD,EEDE,EEDF,EEE0,EEE1,D7EA,EEE2,EEE3,BCD8,EEE4,D3CB,CCFA,B2AC,C1E5,EEE5,C7A6,C3AD,EEE6,EEE7,EEE8,EEE9,EEEA,EEEB,EEEC,EEED,EEEE,EEEF,EEF0,EEF1,EEF2,EEF4,EEF3,EEF5,CDAD,C2C1,EEF6,EEF7,EEF8,D5A1,EEF9,CFB3,EEFA,EEFB,EEFC,EEFD,EFA1,EEFE,EFA2,B8F5,C3FA,EFA3,EFA4,BDC2,D2BF,B2F9,EFA5,EFA6,EFA7,D2F8,EFA8,D6FD,EFA9,C6CC,EFAA,EFAB,C1B4,EFAC,CFFA,CBF8,EFAE,EFAD,B3FA,B9F8,EFAF,EFB0,D0E2,EFB1,EFB2,B7E6,D0BF,EFB3,EFB4,EFB5,C8F1,CCE0,EFB6,EFB7,EFB8,EFB9,EFBA,D5E0,EFBB,B4ED,C3AA,EFBC,EFBD,EFBE,EFBF,CEFD,EFC0,C2E0,B4B8,D7B6,BDF5,CFC7,EFC3,EFC1,EFC2,EFC4,B6A7,BCFC,BEE2,C3CC,EFC5,EFC6,EFC7,EFCF,EFC8,EFC9,EFCA,C7C2,EFF1,B6CD,EFCB,EFCC,EFCD,B6C6,C3BE,EFCE,EFD0,EFD1,EFD2,D5F2,EFD3,C4F7,EFD4,C4F8,EFD5,EFD6,B8E4,B0F7,EFD7,EFD8,EFD9,EFDA,EFDB,EFDC,EFDD,EFDE,BEB5,EFE1,EFDF,EFE0,EFE2,EFE3,C1CD,EFE4,EFE5,EFE6,EFE7,EFE8,EFE9,EFEA,EFEB,EFEC,C0D8,EFED,C1AD,EFEE,EFEF,EFF0,CFE2,B3A4,C3C5,E3C5,C9C1,E3C6,B1D5,CECA,B4B3,C8F2,E3C7,CFD0,E3C8,BCE4,E3C9,E3CA,C3C6,D5A2,C4D6,B9EB,CEC5,E3CB,C3F6,E3CC,B7A7,B8F3,BAD2,E3CD,E3CE,D4C4,E3CF,E3D0,D1CB,E3D1,E3D2,E3D3,E3D4,D1D6,E3D5,B2FB,C0BB,E3D6,C0AB,E3D7,E3D8,E3D9,E3DA,E3DB,B8B7,DAE2,B6D3,DAE4,DAE3,DAE6,C8EE,DAE5,B7C0,D1F4,D2F5,D5F3,BDD7,D7E8,DAE8,DAE7,B0A2,CDD3,DAE9,B8BD,BCCA,C2BD,C2A4,B3C2,DAEA,C2AA,C4B0,BDB5,CFDE,DAEB,C9C2,B1DD,DAEC,B6B8,D4BA,B3FD,DAED,D4C9,CFD5,C5E3,DAEE,DAEF,DAF0,C1EA,CCD5,CFDD,D3E7,C2A1,DAF1,CBE5,DAF2,CBE6,D2FE,B8F4,DAF3,B0AF,CFB6,D5CF,CBED,DAF4,E3C4,C1A5,F6BF,F6C0,F6C1,C4D1,C8B8,D1E3,D0DB,D1C5,BCAF,B9CD,EFF4,B4C6,D3BA,F6C2,B3FB,F6C3,B5F1,F6C5,D3EA,F6A7,D1A9,F6A9,F6A8,C1E3,C0D7,B1A2,CEED,D0E8,F6AB,CFF6,F6AA,D5F0,F6AC,C3B9,BBF4,F6AE,F6AD,C4DE,C1D8,CBAA,CFBC,F6AF,F6B0,F6B1,C2B6,B0D4,C5F9,F6B2,C7E0,F6A6,BEB8,BEB2,B5E5,B7C7,BFBF,C3D2,C3E6,D8CC,B8EF,BDF9,D1A5,B0D0,F7B0,F7B1,D0AC,B0B0,F7B2,F7B3,F7B4,C7CA,BECF,F7B7,F7B6,B1DE,F7B5,F7B8,F7B9,CEA4,C8CD,BAAB,E8B8,E8B9,E8BA,BEC2,D2F4,D4CF,C9D8,D2B3,B6A5,C7EA,F1FC,CFEE,CBB3,D0EB,E7EF,CDE7,B9CB,B6D9,F1FD,B0E4,CBCC,F1FE,D4A4,C2AD,C1EC,C6C4,BEB1,F2A1,BCD5,F2A2,F2A3,F2A4,D2C3,C6B5,CDC7,F2A5,D3B1,BFC5,CCE2,F2A6,F2A7,D1D5,B6EE,F2A8,F2A9,B5DF,F2AA,F2AB,B2FC,F2AC,F2AD,C8A7,B7E7,ECA9,ECAA,ECAB,ECAC,C6AE,ECAD,ECAE,B7C9,CAB3,E2B8,F7CF,F7D0,B2CD,F7D1,F7D3,F7D2,E2BB,BCA2,E2BC,E2BD,E2BE,E2BF,E2C0,E2C1,B7B9,D2FB,BDA4,CACE,B1A5,CBC7,E2C2,B6FC,C8C4,E2C3,BDC8,B1FD,E2C4,B6F6,E2C5,C4D9,E2C6,CFDA,B9DD,E2C7,C0A1,E2C8,B2F6,E2C9,C1F3,E2CA,E2CB,C2F8,E2CC,E2CD,E2CE,CAD7,D8B8,D9E5,CFE3,F0A5,DCB0,C2ED,D4A6,CDD4,D1B1,B3DB,C7FD,B2B5,C2BF,E6E0,CABB,E6E1,E6E2,BED4,E6E3,D7A4,CDD5,E6E5,BCDD,E6E4,E6E6,E6E7,C2EE,BDBE,E6E8,C2E6,BAA7,E6E9,E6EA,B3D2,D1E9,BFA5,E6EB,C6EF,E6EC,E6ED,E6EE,C6AD,E6EF,C9A7,E6F0,E6F1,E6F2,E5B9,E6F3,E6F4,C2E2,E6F5,E6F6,D6E8,E6F7,E6F8,B9C7,F7BB,F7BA,F7BE,F7BC,BAA1,F7BF,F7C0,F7C2,F7C1,F7C4,F7C3,F7C5,F7C6,F7C7,CBE8,B8DF,F7D4,F7D5,F7D6,F7D8,F7DA,F7D7,F7DB,F7D9,D7D7,F7DC,F7DD,F7DE,F7DF,F7E0,DBCB,D8AA,E5F7,B9ED,BFFD,BBEA,F7C9,C6C7,F7C8,F7CA,F7CC,F7CB,F7CD,CEBA,F7CE,C4A7,D3E3,F6CF,C2B3,F6D0,F6D1,F6D2,F6D3,F6D4,F6D6,B1AB,F6D7,F6D8,F6D9,F6DA,F6DB,F6DC,F6DD,F6DE,CFCA,F6DF,F6E0,F6E1,F6E2,F6E3,F6E4,C0F0,F6E5,F6E6,F6E7,F6E8,F6E9,F6EA,F6EB,F6EC,F6ED,F6EE,F6EF,F6F0,F6F1,F6F2,F6F3,F6F4,BEA8,F6F5,F6F6,F6F7,F6F8,C8FA,F6F9,F6FA,F6FB,F6FC,F6FD,F6FE,F7A1,F7A2,F7A3,F7A4,F7A5,F7A6,F7A7,F7A8,B1EE,F7A9,F7AA,F7AB,F7AC,F7AD,C1DB,F7AE,F7AF,C4F1,F0AF,BCA6,F0B0,C3F9,C5B8,D1BB,F0B1,F0B2,F0B3,F0B4,F0B5,D1BC,D1EC,F0B7,F0B6,D4A7,CDD2,F0B8,F0BA,F0B9,F0BB,F0BC,B8EB,F0BD,BAE8,F0BE,F0BF,BEE9,F0C0,B6EC,F0C1,F0C2,F0C3,F0C4,C8B5,F0C5,F0C6,F0C7,C5F4,F0C8,F0C9,F0CA,F7BD,F0CB,F0CC,F0CD,F0CE,F0CF,BAD7,F0D0,F0D1,F0D2,F0D3,F0D4,F0D5,F0D6,F0D8,D3A5,F0D7,F0D9,F5BA,C2B9,F7E4,F7E5,F7E6,F7E7,F7E8,C2B4,F7EA,F7EB,C2F3,F4F0,F4EF,C2E9,F7E1,F7E2,BBC6,D9E4,CAF2,C0E8,F0A4,BADA,C7AD,C4AC,F7EC,F7ED,F7EE,F7F0,F7EF,F7F1,F7F4,F7F3,F7F2,F7F5,F7F6,EDE9,EDEA,EDEB,F6BC,F6BD,F6BE,B6A6,D8BE,B9C4,D8BB,DCB1,CAF3,F7F7,F7F8,F7F9,F7FB,F7FA,B1C7,F7FC,F7FD,F7FE,C6EB,ECB4,B3DD,F6B3,F6B4,C1E4,F6B5,F6B6,F6B7,F6B8,F6B9,F6BA,C8A3,F6BB,C1FA,B9A8,EDE8,B9EA,D9DF,A3A1,A3A2,A3A3,A1E7,A3A5,A3A6,A3A7,A3A8,A3A9,A3AA,A3AB,A3AC,A3AD,A3AE,A3AF,A3B0,A3B1,A3B2,A3B3,A3B4,A3B5,A3B6,A3B7,A3B8,A3B9,A3BA,A3BB,A3BC,A3BD,A3BE,A3BF,A3C0,A3C1,A3C2,A3C3,A3C4,A3C5,A3C6,A3C7,A3C8,A3C9,A3CA,A3CB,A3CC,A3CD,A3CE,A3CF,A3D0,A3D1,A3D2,A3D3,A3D4,A3D5,A3D6,A3D7,A3D8,A3D9,A3DA,A3DB,A3DC,A3DD,A3DE,A3DF,A3E0,A3E1,A3E2,A3E3,A3E4,A3E5,A3E6,A3E7,A3E8,A3E9,A3EA,A3EB,A3EC,A3ED,A3EE,A3EF,A3F0,A3F1,A3F2,A3F3,A3F4,A3F5,A3F6,A3F7,A3F8,A3F9,A3FA,A3FB,A3FC,A3FD,A1AB,A1E9,A1EA,A3FE,A3A4';
    },

    AnsiToUnicode: function (chrCode) {
        var chrHex = chrCode.toString(16);
        chrHex = "000" + chrHex.toUpperCase();
        chrHex = chrHex.substr(chrHex.length - 4);
        var i = this.AnsicodeChr().indexOf(chrHex);
        if (i != -1) {
            chrHex = this.UnicodeChr().substr(i, 4);
        }
        return parseInt(chrHex, 16)
    },

    UnicodeToAnsi: function (chrCode) {
        var chrHex = chrCode.toString(16);
        chrHex = "000" + chrHex.toUpperCase();
        chrHex = chrHex.substr(chrHex.length - 4);
        var i = this.UnicodeChr().indexOf(chrHex);
        if (i != -1) {
            chrHex = this.AnsicodeChr().substr(i, 4);
        }
        return parseInt(chrHex, 16);
    },

    getPY: function (ch) {
        if (ch != '') {
            var code = this.UnicodeToAnsi(ch.charCodeAt(0));
            var py = '';
            if (code >= 45217 && code <= 45252) {
                py = "A"
            } else if (code >= 45253 && code <= 45760) {
                py = "B"
            } else if (code >= 45761 && code <= 46317) {
                py = "C"
            } else if (code >= 46318 && code <= 46825) {
                py = "D"
            } else if (code >= 46826 && code <= 47009) {
                py = "E"
            } else if (code >= 47010 && code <= 47296) {
                py = "F"
            } else if ((code >= 47297 && code <= 47613) || (code == 63193)) {
                py = "G"
            } else if (code >= 47614 && code <= 48118) {
                py = "H"
            } else if (code >= 48119 && code <= 49061) {
                py = "J"
            } else if (code >= 49062 && code <= 49323) {
                py = "K"
            } else if (code >= 49324 && code <= 49895) {
                py = "L"
            } else if (code >= 49896 && code <= 50370) {
                py = "M"
            } else if (code >= 50371 && code <= 50613) {
                py = "N"
            } else if (code >= 50614 && code <= 50621) {
                py = "O"
            } else if (code >= 50622 && code <= 50905) {
                py = "P"
            } else if (code >= 50906 && code <= 51386) {
                py = "Q"
            } else if (code >= 51387 && code <= 51445) {
                py = "R"
            } else if (code >= 51446 && code <= 52217) {
                py = "S"
            } else if (code >= 52218 && code <= 52697) {
                py = "T"
            } else if (code >= 52698 && code <= 52979) {
                py = "W"
            } else if (code >= 52980 && code <= 53688) {
                py = "X"
            } else if (code >= 53689 && code <= 54480) {
                py = "Y"
            } else if (code >= 54481 && code <= 62289) {
                py = "Z"
            } else {
                py = ch;
            }
            return py;
        } else {
            return '';
        }
    },
    getAreaPY: function (hanzi) {
        if (hanzi == '重庆')
            return 'C';
        else if (hanzi == '泸州')
            return 'L';
        else if (hanzi == '衢州')
            return 'Q';
        else if (hanzi == '溧阳天目湖（常州）')
            return 'L';
        else if (hanzi == '泸沽湖')
            return 'L';
        else if (hanzi == '阆中（南充）')
            return 'L';
        else if (hanzi == '婺源')
            return 'W';
        else {
            return this.getPY(hanzi.substr(0, 1));
        }
    },
    buildHotDataHtml: function (dataDiv, index) {
        if (this.ie6FilterIFrame != null) {
            Globals.closeIE6Fliter(this.ie6FilterIFrame);
        }
        if (this.hotData.length > 0) {
            var hotDataSb = new StringBuilder();
            if (this.isHotelStyle && index != 0) {
                var lastChar = '';
                var rowCol = -1;
                for (var i = 0; i < this.hotData[index].CityList.length; i++) {
                    var m_CityData = decodeURIComponent(this.hotData[index].CityList[i].CityNameCn);
                    var firstPY = this.getAreaPY(m_CityData);
                    if (rowCol == 0 && firstPY == lastChar) {
                        hotDataSb.append("<li class=\"letter\"></li>");
                    }
                    if (firstPY != lastChar) {
                        if (lastChar != '') {
                            hotDataSb.append("<li class=\"let_line\"/>");
                        }
                        lastChar = firstPY;
                        hotDataSb.append("<li class=\"letter\">" + firstPY + "</li>");
                        rowCol = 0;
                    }
                    hotDataSb.append("<li title=\"" + m_CityData + "\" method=\"liHotData\" data=\"" + index + "|" + i + "\">" + m_CityData + "</li>");
                    rowCol = (rowCol + 1) % this.colLen;
                }
            }
            else {
                for (var i = 0; i < this.hotData[index].CityList.length; i++) {
                    var liclass = (i % 2 == 0) ? "ac_even" : "ac_odd";
                    var m_CityData = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.hotData[index].CityList[i].CityNameCn) : this.hotData[index].CityList[i].CityNameEn;
                    var firstPY = this.getAreaPY(m_CityData);
                    hotDataSb.append("<li method=\"liHotData\" data=\"" + index + "|" + i + "\"  title=\"" + m_CityData + "\" class=\"" + liclass + " " + (i == 0 ? "ac_over" : "") + "\">" + m_CityData + "</li>");
                }
            }
            dataDiv.html(hotDataSb.toString());
            if (this.isHotelStyle && index == 0) {
                var cmsContent = this.cms ? this.cms : "<div id=\"emptyCMS\"></div>";
                this.windowElement.find("#hotCityCMS").html(cmsContent);
            }
            else {
                this.windowElement.find("#hotCityCMS").html("");
            }
            FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
        }
    },

    buildHtml: function (keyword) {
        var temp = encodeURIComponent(keyword.replace(/[\s,\']+/g, "").toLowerCase());
        var url = this.searchUrl;
        if (this.isJsonp == 0) {
            var appPath = "";
            var host = window.location.host;
            if (host.toLowerCase().indexOf("travel.elong") > -1 || host.toLowerCase().indexOf("elong") < 0) {
                var path = window.location.pathname;
                var pathtemp = path.split("/");
                if (pathtemp.length > 1)
                    appPath = "/" + pathtemp[1];
            }
            url = appPath + "/city/" + this.cityType + "/" + this.maxLen + ".html";
        }
        else if (this.isJsonp == 99) {
            url = "http://h.elong.com/city/" + this.cityType + "/" + this.maxLen + ".html";
        }
        else {
            url += this.cityType + "/" + this.maxLen + ".html";
        }

        //替换hotel.elong.com
        urlcity = "http://hotel.elong.com/city/hotel";
        urlflightsrc = "http://hotel.elong.com/city/flightsrc";
        urlflightdest = "http://hotel.elong.com/city/flightdest";
        urliflight = "http://hotel.elong.com/city/iflightall";

        if (url.indexOf(urlcity) >= 0 || url.indexOf(urlflightsrc) >= 0 || url.indexOf(urlflightdest) >= 0 || url.indexOf(urliflight) >= 0) {
            url = url.replace("hotel.elong.com", "travel.elong.com/hotel");
        }

        elongAjax.callBack(url, { keyword: temp }, function (data) {


            this.eventElement.attr("CityId", "");
            this.eventElement.attr("CityThreeSign", "");

            var m_Title = "<div class=\"ac_title\">" + (this.lang.toLowerCase() == "cn" ? String.format(this.m_ResultTitleCn, keyword) : String.format(this.m_ResultTitleEn, keyword)) + "</div>";
            var width = 230;
            var ulStyle = "overflow: auto; max-height: 260px;";
            if (this.isHotelStyle) {
                m_Title = "";
                width = 300;
                ulStyle = "";
            }
            this.contentEndRegion = $("#m_contentend");
            this.contentEndRegion.html("");
            this.windowElement = $("<div  style=\"display:none; position: absolute; z-index: 2000;\"></div>").appendTo(this.contentEndRegion);
            this.cityData = data || [];
            this.selectCity = this.cityData[0];
            this.eventElement[0]["City"] = this.cityData[0];

            this.windowElement.html(this.m_Result.eval({
                Width: width,
                ResultTitleHtml: m_Title,
                ULStyle: ulStyle,
                ResultDataHtml: ""
            }));

            if (this.ie6FilterIFrame != null) {
                Globals.closeIE6Fliter(this.ie6FilterIFrame);
            }
            var ulCity = this.windowElement.find("ul[method='cityData']");
            for (var i = 0; i < this.cityData.length; i++) {
                var tempHtml = "";
                var m_CityData = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.cityData[i].CityNameCn) : this.cityData[i].CityNameEn;
                if (this.isHotelStyle) {
                    var typeClass = "";
                    var areaType = this.cityData[i].Type ? this.cityData[i].Type.toLowerCase() : "";
                    if (areaType == "city")
                        typeClass = "hotel";
                    else if (areaType == "poi")
                        typeClass = "grass";
                    else if (areaType == "division")
                        typeClass = "district";
                    var jdsl = this.cityData[i].HotelCount == 0 ? "" : "约" + this.cityData[i].HotelCount + "家酒店";
                    tempHtml = "<li title=\"" + m_CityData + "\" method=\"liData\" data=\"" + i + "\"><i class=\"" + typeClass + "\"></i><span method=\"spanData\">" + m_CityData.replace(keyword, "<b>" + keyword + "</b>") + "</span>" + jdsl + "</li>";
                }
                else {
                    var liclass = (i % 2 == 0) ? "ac_even" : "ac_odd";
                    if (String.isNullOrEmpty(this.searchField) && this.searchType != this.cityData[i].CityType) {
                        tempHtml = "<li method=\"liData\" data=\"" + i + "\" title=\"" + m_CityData + "\" ><span method=\"spanData\">" + this.cityData[i].CityNameEn + "</span>" + (this.lang.toLowerCase() == "cn" ? m_CityData : "") + "</li>";
                    }
                    else {
                        if (this.searchType == this.cityData[i].CityType) {
                            tempHtml = "<li method=\"liData\" data=\"" + i + "\" title=\"" + m_CityData + "\" ><span method=\"spanData\">" + this.cityData[i][this.searchField].replace(/_/g, ',') + "</span>" + (this.lang.toLowerCase() == "cn" ? m_CityData : "") + "</li>";
                        }
                        else {
                            tempHtml = "<li method=\"liData\" data=\"" + i + "\" title=\"" + m_CityData + "\" ><span method=\"spanData\">" + this.cityData[i].CityNameEn + "</span>" + (this.lang.toLowerCase() == "cn" ? m_CityData : "") + "</li>";
                        }
                    }
                }

                $(tempHtml).appendTo(ulCity);
            }
            if (this.cityData.length > 0) {
                this.windowElement.find("ul[method='cityData'] li:first").addClass("ac_over");
            }
            else {
                var m_ErrorTitle = this.lang.toLowerCase() == "cn" ? String.format(this.m_ErrorCn, keyword.replace(/\</g, "").replace(/\>/g, "")) : String.format(this.m_ErrorEn, keyword);
                this.windowElement.html(this.m_Error.eval({
                    Error: m_ErrorTitle,
                    ErrorWidth: this.errorWidth
                }));
            }
            this.windowElement.attr("winstyle", "data");
            this.initializeEvent();
            this.render();
            //add by Liang.Qiu
            __sendSearchTj({ keyword: escape(keyword), length: data.length });

        } .bind(this), true, "GET", false, "jsonp");
    },
    //从cookie中获取热门城市搜索的历史记录
    getSearchHistoryCity: function () {
        try {
            var tmpl = new Template("<dl><dt>最近搜索记录：</dt>#{hisList}</dl>");
            var cityHisArr = [];
            var citySearchList = Globals.cookie(this.searchHistoryCookie);
            if (citySearchList && citySearchList != "") {
                cityHisArr = citySearchList.split("@");
            }
            var dlCity = "";
            var ddTmpl = new Template("<dd ><a method='historyData' data='#{dataPosition}' data-cid='#{cityId}' data-citynameen='#{cityNameEn}' href='#'>#{cityName}</a></dd>");
            //"<dd ><a method='historyData' data='"+cityHisArr[i].split("#")[3]+"' data-cid='" + cityHisArr[] + "' href='#'>" + cityHisArr[i].split("#")[1] + "</a></dd>";
            for (var i = cityHisArr.length - 1; i > -1; i--) {
                var cityPropertyArr = cityHisArr[i].split("#");
                dlCity += ddTmpl.eval({

                    cityId: cityPropertyArr[0],
                    cityName: cityPropertyArr[1],
                    cityNameEn: cityPropertyArr[2],
                    dataPosition: cityPropertyArr[3]
                });
            }
            return dlCity == "" ? "" : tmpl.eval({ hisList: dlCity });
        }
        catch (e) {
            console.log(e.message);
            return "";
        }
    },

    buildHotHtml: function () {
        this.reloadData();
        //与语言相关的参数的处理
        var cityHistoryHtml = this.getSearchHistoryCity();
        var m_Title = "";
        if (this.m_TitleCn.eval) {
            var m_Title = this.lang.toLowerCase() == "cn" ? this.m_TitleCn.eval({ searchHistory: cityHistoryHtml }) : this.m_TitleEn;
        }
        else {
            var m_Title = this.lang.toLowerCase() == "cn" ? this.m_TitleCn : this.m_TitleEn;
        }
        if (this.windowElement) {
            this.windowElement.remove();
        }
        this.contentEndRegion = $("#m_contentend");
        this.windowElement = $("<div style=\"display:none; position: absolute; z-index: 2000;\"></div>").appendTo(this.contentEndRegion);
        var hotTabSb = new StringBuilder();
        var hotDataSb = new StringBuilder();
        var defaultTab = 0, defaultIndex = 0;
        if (!String.isNullOrEmpty(this.eventElement.attr("datacheck"))) {
            var pos = this.eventElement.attr("datacheck").split("|");
            if (pos.length == 2) {
                defaultTab = pos[0];
                defaultIndex = pos[1];
            }
            else {
                for (var i = 0; i < this.hotData.length; i++) {
                    for (var j = 0; j < this.hotData[i].CityList.length; j++) {
                        if (this.hotData[i].CityList[j].CityId == this.cityData[pos[0]].CityId) {
                            defaultTab = i;
                            defaultIndex = j;
                            break;
                        }
                    }
                }
            }
        }
        if (this.hotData != null) {
            for (var i = 0; i < this.hotData.length; i++) {
                var m_hotTab = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.hotData[i].Name) : this.hotData[i].NameEn;
                hotTabSb.append("<li method=\"liHotTab\" index=\"" + i + "\" " + (i == defaultTab ? "class=\"action\"" : "") + ">" + m_hotTab + "</li>");
            }

            if (this.isHotelStyle && defaultTab != 0) {
                var lastChar = '';
                var rowCol = -1;
                for (var j = 0; j < this.hotData[defaultTab].CityList.length; j++) {
                    var m_CityData = decodeURIComponent(this.hotData[defaultTab].CityList[j].CityNameCn);
                    var firstPY = this.getAreaPY(m_CityData);
                    if (rowCol == 0 && firstPY == lastChar) {
                        hotDataSb.append("<li class=\"letter\"></li>");
                    }
                    if (firstPY != lastChar) {
                        if (lastChar != '') {
                            hotDataSb.append("<li class=\"let_line\"/>");
                        }
                        lastChar = firstPY;
                        hotDataSb.append("<li class=\"letter\">" + firstPY + "</li>");
                        rowCol = 0;
                    }
                    hotDataSb.append("<li title=\"" + m_CityData + "\" method=\"liHotData\" data=\"" + defaultTab + "|" + j + "\">" + m_CityData + "</li>");
                    rowCol = (rowCol + 1) % this.colLen;
                }
            }
            else {
                for (var j = 0; j < this.hotData[defaultTab].CityList.length; j++) {
                    var m_CityData = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.hotData[defaultTab].CityList[j].CityNameCn) : this.hotData[defaultTab].CityList[j].CityNameEn;
                    var liclass = (j % 2 == 0) ? "ac_even" : "ac_odd";
                    hotDataSb.append("<li method=\"liHotData\" data=\"" + defaultTab + "|" + j + "\" title=\"" + m_CityData + "\" class=\"" + liclass + (j == defaultIndex ? " ac_over" : "") + "\">" + m_CityData + "</li>");
                }
            }
            var cms = ((this.isHotelStyle && defaultTab == 0) ?
                        (this.cms ? this.cms : "<div id=\"emptyCMS\"></div>") :
                        "");
            var hotContent = this.m_Container.eval({
                Language: (this.lang.toLowerCase() == "cn") ? "" : "_en",
                HotTitle: m_Title,
                HotTab: hotTabSb.toString(),
                HotData: hotDataSb.toString(),
                HotWidth: this.hotWidth,
                Cms: cms,
                ContainerClass: this.containerClass,
                AbcSearch: this.abcSearch,
                Popcitylist: this.popcitylist,
                PopcitylistStyle: this.popcitylistStyle
            })
            this.windowElement[0].innerHTML = hotContent;
        }
        this.windowElement.attr("winstyle", "hot");
    },

    reloadData: function () {
        if (this.windowElement) {
            this.windowElement.remove();
            if (this.ie6FilterIFrame != null) {
                Globals.closeIE6Fliter(this.ie6FilterIFrame);
            }
        }

        if (!String.isNullOrEmpty(this.cityType)) {
            var _checkHotData = false, _checkDataId = false;
            _checkHotData = !((typeof CityHot) == "undefined")
            if (_checkHotData) {

                var citytype = String.isNullOrEmpty(this.hotType) ? this.cityType : this.hotType;
                for (var i = 0; i < CityHot.length; i++) {
                    if (CityHot[i].CityType == citytype) {
                        this.hotData = CityHot[i].TabList;
                    }
                }
            }
        }
    },
    onInputClick: function (evt) {
        if (this.onBeforClick) {
            this.onBeforClick(this.eventElement);
        }
        if (!Object.isNull(this.hotData) && this.windowElement == null) {
            this.buildHotHtml();
            this.initializeEvent();
            this.render();
            this.eventElement.select();
        }
    },
    onInputKeyUp: function (evt) {
        if (!this.enableSearch)
            return;
        var element = Event.element(evt);
        if (this.windowElement && this.windowElement.attr("winstyle") == "data") {
            var ulData = this.windowElement.find("ul[method='cityData']");
            var select = this.windowElement.find("ul[method='cityData'] li[class*='ac_over']");
            switch (evt.keyCode) {
                case this.KeyCode.Up:
                    {
                        select.removeClass("ac_over");
                        if (select.prev("li").length > 0)
                            select.prev("li").addClass("ac_over");
                        else
                            this.windowElement.find("ul[method='cityData'] li:last").addClass("ac_over");
                        ulData.scrollTop((select.offset().top - ulData.offset().top) < ulData.height() - 30 && (select.offset().top - ulData.offset().top) > 0 ? (select.offset().top - ulData.offset().top) : select.offset().top);
                    }
                    break;
                case this.KeyCode.Down:
                    {
                        select.removeClass("ac_over");
                        if (select.next("li").length > 0)
                            select.next("li").addClass("ac_over");
                        else
                            this.windowElement.find("ul[method='cityData'] li:first").addClass("ac_over");
                        ulData.scrollTop((select.offset().top - ulData.offset().top) > ulData.height() - 30 ? 0 : (select.offset().top - ulData.offset().top));
                    }
                    break;
                case this.KeyCode.Return:
                    {
                        var select = this.windowElement.find("ul[method='cityData'] li[class*='ac_over']");
                        this.selectData(select);
                    }
                    return;
                default:
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(function () { this.reBuildData(element); } .bind(this), this.delay);
            }
        }
        else {
            switch (evt.keyCode) {
                case this.KeyCode.Up:
                case this.KeyCode.Down:
                case this.KeyCode.Left:
                case this.KeyCode.Right:
                case this.KeyCode.Return: { }
                    break;
                default:
                    {
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(function () { this.reBuildData(element); } .bind(this), this.delay);
                    }
            }
        }
        evt.stopPropagation();
    },

    reBuildData: function (evt) {
        var element = evt;
        if (!String.isNullOrEmpty(this.cityType)) {
            if (String.isNullOrEmpty(element.val())) {
                this.buildHotHtml();
                this.initializeEvent();
                this.render();
            }
            else {
                this.buildHtml(element.val());
            }
        }
    },
    onInputKeyDown: function (evt) {
        if (this.windowElement && this.windowElement.attr("winstyle") == "hot") {
            var select = this.windowElement.find("ul[method='hotData'] li[class*='ac_over']");
            var step = this.colLen - 1;
            switch (evt.keyCode) {
                case this.KeyCode.Right:
                    {
                        select.removeClass("ac_over");
                        if (select.next("li").length > 0)
                            select.next("li").addClass("ac_over");
                        else
                            this.windowElement.find("ul[method='hotData'] li:first").addClass("ac_over");
                    }
                    break;
                case this.KeyCode.Left:
                    {
                        select.removeClass("ac_over");
                        if (select.prev("li").length > 0)
                            select.prev("li").addClass("ac_over");
                        else
                            this.windowElement.find("ul[method='hotData'] li:last").addClass("ac_over");
                    }
                    break;
                case this.KeyCode.Down:
                    {
                        var nextSelect = select.nextAll(":eq(" + step + ")");
                        if (nextSelect.length == 0) {
                            var last = select.prevAll("li").length % this.colLen;
                            nextSelect = this.windowElement.find("ul[method='hotData'] li:eq(" + last + ")");
                        }
                        nextSelect.addClass("ac_over");
                        select.removeClass("ac_over");
                    }
                    break;
                case this.KeyCode.Up:
                    {
                        var prevSelect = select.prevAll(":eq(" + step + ")");
                        if (prevSelect.length == 0) {
                            var last = select.prevAll("li").length + Math.floor(this.windowElement.find("ul[method='hotData'] li").length / this.colLen) * this.colLen;
                            prevSelect = this.windowElement.find("ul[method='hotData'] li:eq(" + last + ")");
                        }
                        prevSelect.addClass("ac_over");
                        select.removeClass("ac_over");
                    }
                    break;
                case this.KeyCode.Return:
                    {
                        var select = this.windowElement.find("ul[method='hotData'] li[class*='ac_over']");
                        this.selectData(select);
                    }
                    return;
                default:
                    break;
            }
            this.eventElement.focus();
        }
        evt.stopPropagation();
    },

    onOutClick: function () {
        $(document).one("click", function (evt) {
            var element = Event.element(evt);
            if (this.windowElement != null && this.windowElement.find("*").index(element) == -1 && this.eventElement[0] != element[0] &&
               (element.attr("method") != "liHotTab")) {
                this.dispose();
            }
        } .bindAsEventListener(this));
    },

    selectData: function (elem, isHistory) {
        if (!String.isNullOrEmpty(elem.attr("data"))) {
            var selectCityData;
            if (this.windowElement.attr("winstyle") == "hot") {
                if (isHistory) {
                    this.eventElement.val(elem.text());
                    this.eventElement.attr("datacheck", "0|0");
                    selectCityData = {
                        ProvinceId: null,
                        CityId: elem.attr("data-cid"),
                        CityCode: elem.attr("data-cid"),
                        CityNameCn: elem.text(),
                        CityNameEn: elem.attr("data-citynameen"),
                        CityThreeSign: ""

                    };
                }
                else {
                    var pos = elem.attr("data").split("|");
                    var m_CityData = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.hotData[pos[0]].CityList[pos[1]].CityNameCn) : this.hotData[pos[0]].CityList[pos[1]].CityNameEn;
                    this.eventElement.val(m_CityData);
                    this.eventElement.attr("datacheck", elem.attr("data"));
                    selectCityData = this.hotData[pos[0]].CityList[pos[1]];
                }
            }
            else {
                var pos = elem.attr("data");
                var m_CityData = this.lang.toLowerCase() == "cn" ? decodeURIComponent(this.cityData[pos].CityNameCn) : this.cityData[pos].CityNameEn;
                this.eventElement.val(m_CityData);
                this.eventElement.attr("datacheck", pos);
                selectCityData = this.cityData[pos];
            }

            this.selectCity = selectCityData;
            this.eventElement[0]["City"] = selectCityData;
            this.eventElement.attr("CityId", selectCityData.CityId);
            this.eventElement.attr("CityThreeSign", selectCityData.CityThreeSign);
            this.eventElement.attr("CityNameEn", selectCityData.CityNameEn);
            if (this.onSelect) {
                this.onSelect(this.eventElement, selectCityData);
            }
            if (!String.isNullOrEmpty(this.resultNextId)) {
                $("#" + this.resultNextId).focus();
            }
            this.dispose();
        }
    },

    HotCityLoad: function (dataDiv, index) {
        if (this.hotData.length > 0) {
            var isAjax = false;
            if (this.hotData[index].CityList.length == 0) {
                isAjax = true;

            } else {
                this.buildHotDataHtml(dataDiv, index);
                this.render();
            }
            if (isAjax) {
                var tabId = this.hotData[index].TabId;
                var typeStr = !String.isNullOrEmpty(this.hotType) ? this.hotType : this.cityType;
                var url = "http://hotel.elong.com/hotcity/";
                if (this.isJsonp == 0) {
                    var appPath = "";
                    var host = window.location.host;
                    if (host.toLowerCase().indexOf("travel.elong") > -1 || host.toLowerCase().indexOf("elong") < 0) {
                        var path = window.location.pathname;
                        var pathtemp = path.split("/");
                        if (pathtemp.length > 1)
                            appPath = "/" + pathtemp[1];
                    }
                    url = appPath + "/hotcity/" + typeStr + "/" + tabId + ".html";
                }
                else if (this.isJsonp == 99) {
                    url = "http://f.elong.com/hotcity/" + typeStr + "/" + tabId + ".html";
                }
                else {
                    url += typeStr + "/" + tabId + ".html";
                }

                //divData.append("<li><p class=\"p20\">获取数据中，请稍后...... </p></li>");


                urlcity = "hotel.elong.com/hotcity/hotel";
                urlflightsrc = "hotel.elong.com/hotcity/flightsrc";
                urlflightdest = "hotel.elong.com/hotcity/flightdest";
                urliflightdest = "hotel.elong.com/hotcity/iflightdest";

                if (url.indexOf(urlcity) >= 0)
                    url = url.replace("hotel.elong.com", "openapi.elong.com/suggest");
                if (url.indexOf(urlflightsrc) >= 0 || url.indexOf(urlflightdest) >= 0 || url.indexOf(urliflightdest))
                    url = url.replace("hotel.elong.com", "travel.elong.com/hotel");

                elongAjax.callBack(url, {}, function (data) {
                    this.hotData[index] = data;
                    this.buildHotDataHtml(dataDiv, index);
                    this.render();
                } .bind(this), true, "GET", false, "jsonp");

            }

        }

    },



    onClickRegion: function (evt) {
        var elem = Event.element(evt);
        var method = elem.attr("method");
        switch (method) {
            case "liHotTab":
                this.windowElement.find("ul[method='hotTab'] li").removeClass("action");
                elem.addClass("action");
                //this.buildHotDataHtml(this.windowElement.find("ul[method='hotData']"), elem.attr("index"));
                //this.render();

                this.HotCityLoad(this.windowElement.find("ul[method='hotData']"), elem.attr("index"));
                this.eventElement.focus();
                return;
            case "liHotData":
                this.selectData(elem);
                return;
            case "liData":
            case "spanData":
                this.selectData((method == "liData") ? elem : elem.parent());
                return;
            case "close":
                this.dispose();
                return;
            case "historyData":
                this.selectData(elem, true);
                return;
            default:
                this.dispose();
                return;
        }
    },

    onMouseOverRegion: function (evt) {
        var element = Event.element(evt);
        if (this.outTimer != null) {
            clearTimeout(this.outTimer);
            this.outTimer = null;
        }
        if (element.is("li") || element.parent().is("li")) {
            var focus = element.is("li") ? element : element.parent();
            focus.addClass("ac_over");
            //focus.siblings("li[class*=ac_over]").removeClass("ac_over");
        }
    },

    onMouseOutRegion: function (evt) {
        var element = Event.element(evt);
        var method = element.attr("method");
        if (element.is("li") || element.parent().is("li")) {
            var focus = element.is("li") ? element : element.parent();
            focus.removeClass("ac_over");
        }
    },

    render: function () {
        // 设置大小位置    
        if (this.windowElement) {
            var top = this.eventElement.offset().top + this.eventElement.height() + 6;
            var left = this.eventElement.offset().left;

            var scroll = Globals.getScrollPosition();
            var browserRegion = Globals.browserDimensions();
            if (browserRegion.width - (this.eventElement.offset().left - scroll.x) > this.windowElement.width()) {
                this.windowElement[0].style.top = top + "px";
                this.windowElement[0].style.left = left + "px";
            }
            else {
                this.windowElement[0].style.top = top + "px";
                left = left - this.windowElement.width() + this.eventElement.width();
                this.windowElement[0].style.left = left + "px";
            }
            this.ie6FilterIFrame = Globals.addIE6Filter(this.windowElement.width(), this.windowElement.height(), left, top, 1999);
            this.windowElement.show();
        }
    },
    dispose: function () {
        if (this.windowElement) {
            //this.windowElement.fadeOut("normal");
            this.windowElement.hide();
            FunctionExt.defer(function () {
                if (this.windowElement) {
                    Globals.closeIE6Fliter(this.ie6FilterIFrame);

                    if (this.windowElement.attr("winstyle") == "data") {
                        if (this.onClose != null) {
                            this.onClose(this.eventElement, this.windowElement);
                        }
                    }
                    this.windowElement.remove();
                    this.destroyEvent();
                    this.destroyDOM();

                }
            } .bind(this), 500);
        }
    }
});

var CityWindow = Elong.Control.CityWindow;
CityWindow = Class.create();
Object.extend(CityWindow.prototype, {
    name: "CityWindow",
    city: null,
    options: {
        eventElement: null,
        lang: "cn",
        resultNextId: "",
        cityType: "",
        hotType: "",
        onSelect: null,
        onClose: null,
        onBeforClick: null,
        hotWidth: 340,
        hotHeight: 138,
        delay: 200,
        maxLen: 10,          //搜索最大显示个数
        enableSearch: true,
        isAutoSelect: false,
        isJsonp: 0,
        searchField: "",
        searchType: "",
        searchUrl: "http://hotel.elong.com/city/"
    },
    //初始化
    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        this.city = new CityPad(options);
    },
    getSelect: function () {
        return this.city.getSelect();
    }
});

//add by Liang.Qiu
///obj : {keyword:"",length:""}
//延迟执行事件统计的函数ID
var __searchTjId;
var __sendSearchTj = function (obj) {
    if (__searchTjId) {
        clearTimeout(__searchTjId);
    }

    //延迟执行
    __searchTjId = setTimeout(function () {
        Elong.evTJ("hotelsearchcn", obj);
    }, 300);

};

//===================================================================
// 文件名:		CalendarWindow.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.Luo
// 创建日期:	2009-10-16
// 描述:		双栏日历弹出对话框，日期是否可选状态支持任意设置（通过isDisabledDay:function()）
// 备注:		
// 示例代码：
//                new CalendarWindow({
//                    eventElement: $(input),
//                    selectedDate: $(input).value,
//                    language: "en",
//                    enabledFrom: "2009-1-1",
//                    enabledTo: "2009-1-5",
//                    onSelected: function(date) {
//                        alert(date);
//                    } .bind(this)
//                });
//                new CalendarWindow({
//                    eventElement: $(input),
//                    selectedDate: $(input).value,
//                    isDisabledDay: function(year, month, day) {
//                        if (day == 5) return true; //每月5日不可选状态
//                    }.bind(this),
//                    onSelected: function(date) {
//                        alert(date);
//                    } .bind(this)
//                });
//===================================================================

//日期操作公共类
var CalendarHelper = Elong.Control.CanlendarHelper;
CalendarHelper = Class.create();
Object.extend(CalendarHelper.prototype, {
    // 节假日时间
    FestivalDate: { yd: "2015-01-01", cx: "2015-02-18", cj: "2015-02-19", yx: "2015-03-05", qm: "2015-04-05", wy: "2015-05-01", dw: "2015-06-20", zq: "2015-09-27", gq: "2015-10-01" },
    TodayClassName: { jt: "jt", mt: "mt", ht: "ht" },
    WeekClassName: new Array("Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"),

    initialize: function (options) {
    },
    //每个月的日期数
    getDayCount: function (year, month) {
        var dayCount = 0;
        var days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if (month == 0) {
            dayCount = 31;
        }
        else if (month == 2) {
            if ((year % 400 == 0) || (year % 4 == 0 && year % 100 > 0)) {
                dayCount = 29;  //闰年
            }
            else {
                dayCount = 28;
            }
        }
        else {
            dayCount = days[month - 1];
        }
        return dayCount;
    },

    validateDateRange: function (value, minDate, maxDate) {
        if (Object.isNull(minDate)) { minDate = "0001-01-01"; }
        if (Object.isNull(maxDate)) { maxDate = "9999-12-31"; }

        return this.reFormatDateString(value) >= this.reFormatDateString(minDate) &&
				this.reFormatDateString(value) <= this.reFormatDateString(maxDate);
    },

    /*把日期字符串格式化成 yyyy-mm-dd格式 ，便于比较大小*/
    reFormatDateString: function (dateStr, isCn) {
        var dateArray = new Array(3);
        var year, month, day;

        if (String.isNullOrEmpty(dateStr))
            return '';

        if (dateStr.indexOf("-") > -1) {
            dateArray = dateStr.split("-");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[0];
            month = dateArray[1];
            day = dateArray[2];
        }
        else {
            dateArray = dateStr.split("/");
            if (dateArray.length != 3) { return ""; }
            year = dateArray[2];
            month = dateArray[0];
            day = dateArray[1];
        }

        if (year.length <= 2) year = '19' + year;
        if (month.length == 1) month = '0' + month;
        if (day.length == 1) day = '0' + day;
        return Object.isNull(isCn) || isCn ? year + '-' + month + '-' + day : month + '/' + day + "/" + year;
    },
    // 获得当前日期，用于比较
    getTodayString: function () {
        var d = new Date();
        return this.getDateString(d);
    },

    // 获取日期字符串2009-01-12
    getDateString: function (dateObj) {
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var monthStr = month > 9 ? month.toString() : '0' + month.toString();
        var dayStr = day > 9 ? day.toString() : '0' + day.toString();
        var result = dateObj.getFullYear().toString() + '-' +
			monthStr + '-' + dayStr;
        return result;
    },
    /*验证为正确的日期格式*/
    validateDate: function (value) {
        var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        var iaDate = new Array(3)
        var year, month, day

        var result = true;
        var strValue = value;
        if (strValue.length != 0) {
            iaDate = strValue.split("-")
            if (iaDate.length != 3 || iaDate[1].length > 2 || iaDate[2].length > 2 || iaDate[1].length < 1 || iaDate[2].length < 1) {
                result = false;
            }

            year = parseInt(iaDate[0], 10);
            month = parseInt(iaDate[1], 10);
            day = parseInt(iaDate[2], 10);

            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                result = false;
            }

            if (year < 1900 || year > 2100) {
                result = false;
            }

            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1] = 29;
            if (month < 1 || month > 12 || day < 1 || day > iaMonthDays[month - 1]) {
                result = false;
            }
        }
        return result;
    },

    // 根据当前日期获取ClassName
    getFestivalClassName: function (currday) {
        var className = "";
        for (var key in this.FestivalDate) {
            if (currday == this.FestivalDate[key]) {
                className = key;
            }
        }
        return className;
    },

    // 增加节假日、今明后、星期的样式
    addElementClass: function (element, currday) {
        // 获取目前日期的节假日、今明后、星期样式
        var className = "";
        for (var key in this.FestivalDate) {
            if (this.FestivalDate[key] == currday) {
                className = key;
            }
        }
        if (className == "") {
            var date = new Date();
            var date1 = new Date();
            var date2 = new Date();
            date1.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            date2.setFullYear(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            switch (currday) {
                case this.getDateString(date):
                    className = this.TodayClassName.jt;
                    break;
                case this.getDateString(date1):
                    className = this.TodayClassName.mt;
                    break;
                case this.getDateString(date2):
                    className = this.TodayClassName.ht;
                    break;
            }
        }
        if (className == "") {
            var day = validator.convertDate(currday).getDay();
            className = this.WeekClassName[day];
        }

        // 判断原来样式中是否有节假日、今明后、星期的样式
        var oldName = "";
        var oldClass = element.attr("class");
        for (var key in this.FestivalDate) {
            if (oldClass.indexOf(key) > -1) { oldName = key; }
        }
        for (var key in this.TodayClassName) {
            if (oldClass.indexOf(key) > -1) { oldName = key; }
        }
        for (var i = 0; i < this.WeekClassName.length; i++) {
            if (oldClass.indexOf(this.WeekClassName[i]) > -1) { oldName = this.WeekClassName[i]; }
        }
        if (oldName != "") {
            oldClass = oldClass.replace(oldName, "");
        }
        element.attr("class", oldClass + " " + className);
    }
});

//单屏日历框
var SingleCalendar = Elong.Control.SingleCalendar;
SingleCalendar = Class.create();
Object.extend(SingleCalendar.prototype, {

    popRegion: new Template("<div class=\"com_cbox com_select_YM\"><div class=\"calendar_year\" align=\"center\"><div class=\"year\"><a class=\"mf_lr_t cu_n\" href=\"#?\"  method=\"btnPre\" title=\"上一月\">&nbsp;</a></div>#{MonthSPAN}<div class=\"month_1\"><a class=\"mf_rr_a\" href=\"#?\" method=\"btnNext\" title=\"下一月\">&nbsp;</a></div></div><div class=\"date_box\">#{MonthHTML}</div><div class=\"clear\"></div><div class=\"com_cbox_b com_cbox_lt\"></div><div class=\"com_cbox_b com_cbox_rt\"></div><div class=\"com_cbox_b com_cbox_lb\"></div><div class=\"com_cbox_b com_cbox_rb\"></div><div class=\"clear\"></div></div>"),
    weakHTML_cn: "<tr class=\"family\"><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class=\"or\">六</th><th class=\"or\">日</th></tr>",
    weakHTML_en: "<tr class=\"family\"><th class=\"or\">S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th class=\"or\">S</th></tr>",
    monthSPAN_cn: "<span><select method=\"selMonth\"><option value=\"1\">一月</option><option value=\"2\">二月</option><option value=\"3\">三月</option><option value=\"4\">四月</option><option value=\"5\">五月</option><option value=\"6\">六月</option><option value=\"7\">七月</option><option value=\"8\">八月</option><option value=\"9\">九月</option><option value=\"10\">十月</option><option value=\"11\">十一月</option><option value=\"12\">十二月</option></select></span><span><select method=\"selYear\"></select></span>",
    monthSPAN_en: "<span><select method=\"selMonth\"><option value=\"1\">Jan</option><option value=\"2\">Feb</option><option value=\"3\">Mar</option><option value=\"4\">Apr</option><option value=\"5\">May</option><option value=\"6\">Jun</option><option value=\"7\">Jul</option><option value=\"8\">Aug</option><option value=\"9\">Sep</option><option value=\"10\">Oct</option><option value=\"11\">Nov</option><option value=\"12\">Dec</option></select></span><span><select method=\"selYear\"></select></span>",
    options: {
        eventElement: null,                     // 触发事件object
        selectedDate: null,                     // 显示已选中的日期"2009-01-01"，默认为今日
        language: "cn",                         // 中文: cn, en
        enabledFrom: null,                      // 设置可选日期开始时间："2009-01-01",默认为今日
        enabledTo: null,                        // 设置可选日期结束时间: "9999-12-12", 默认不限制
        onSelected: null,                        // 用户选择后回调函数: onSelected(date),  date为yyyy/mm/dd或者mm/dd/yyyy
        winStyle: "s",                            // d:双日历  s: 单日历
        windowElement: null,
        startMonth: 1,
        startYear: 1990,
        yearOrder: "a"
    },

    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        this.weakHTML = this.language.toLowerCase() == "cn" ? this.weakHTML_cn : this.weakHTML_en;
        this.helper = new CalendarHelper();
    },

    refreshMonth: function (year, month) {
        var spanHTML = this.language.toLowerCase() == "cn" ? this.monthSPAN_cn : this.monthSPAN_en;
        var contentHTML = this.popRegion.eval({
            MonthSPAN: spanHTML,
            MonthHTML: this.getDateHTML(year, month)
        });

        this.windowElement.html(contentHTML);
        var selMonth = this.windowElement.find("select[method='selMonth']");
        var selYear = this.windowElement.find("select[method='selYear']");

        if (selMonth != null) {
            selMonth.val(month);
            selMonth.bind("change", this.onSelectChange.bindAsEventListener(this));
        }
        if (selYear != null) {

            var selBeginYear = this.startYear - 100;
            var selEndYear = parseInt(this.startYear) + 10;
            if (!Object.isNull(this.enabledFrom) && !String.isNullOrEmpty(this.enabledFrom)) {
                var enableFromDay = this.helper.reFormatDateString(this.enabledFrom, true);
                selBeginYear = parseInt(enableFromDay.substring(0, 4));
            }
            if (!Object.isNull(this.enabledTo) && !String.isNullOrEmpty(this.enabledTo)) {
                var enableToDay = this.helper.reFormatDateString(this.enabledTo, true);
                selEndYear = parseInt(enableToDay.substring(0, 4));
            }
            switch (this.yearOrder.toLowerCase()) {
                case "a":
                    {
                        for (var i = selBeginYear; i <= selEndYear; i++)
                            selYear.append("<option value=\"" + i + "\">" + i + "</option>")
                    }
                    break;
                case "d":
                    {
                        for (var i = selEndYear; i >= selBeginYear; i--)
                            selYear.append("<option value=\"" + i + "\">" + i + "</option>")
                    }
                    break;
            }
            selYear.val(year);
            selYear.bind("change", this.onSelectChange.bindAsEventListener(this));
        }
    },
    onSelectChange: function (evt) {
        var selMonth = this.windowElement.find("select[method='selMonth']");
        var selYear = this.windowElement.find("select[method='selYear']");
        this.refreshMonth(selYear.val(), selMonth.val());
    },

    //获取日期列表
    getDateHTML: function (year, month) {
        var li = "<td onmouseover=\"$(this).toggleClass('hover')\" onmouseout=\"$(this).toggleClass('hover')\" class=\"{1}\">{0}</td>";
        var disableLi = "<td class=\"Close\">{0}</td>";
        var grayLi = "<td onmouseover=\"$(this).toggleClass('hover')\" onmouseout=\"$(this).toggleClass('hover')\" class=\"{1}\">{0}</td>";
        var dateSb = new StringBuilder();
        dateSb.append(String.format("<table date=\"{0}-{1}-\" width=\"140\" height=\"115\" cellspacing=\"0\" cellpadding=\"0\">", year, month));
        dateSb.append(this.weakHTML);
        var dayCount = this.helper.getDayCount(year, month);
        var firstDate = new Date(year, month - 1, 1);
        var beginDay = firstDate.getDay();         //1号是星期几：0-6
        var liStyle = "";
        var lineCount = 1;
        var count1 = dayCount + beginDay;
        if (this.language.toLowerCase() == "cn" && beginDay == 0) { count1 = count1 + 7; }
        var j = 1;
        for (var i = 0; i < count1; i++) {
            if (this.language.toLowerCase() == "cn") {
                if (i % 7 == 1) { dateSb.append("<tr>") };
            }
            else {
                if (i % 7 == 0) { dateSb.append("<tr>") };
            }
            if (this.isDisabledDay(year, month, j)) {
                liStyle = disableLi; // 不可选
            }
            else if ((this.language.toLowerCase() == "cn" && (i % 7 == 1 || (i + 1) % 7 == 1)) || (this.language.toLowerCase() == "en" && (i % 7 == 0 || (i + 1) % 7 == 0))) {
                liStyle = grayLi;
            }
            else {
                liStyle = li;
            }

            var className = "";
            var isFestival = false;
            var currday = this.helper.reFormatDateString(year + "-" + month + "-" + j);
            if (i % 7 == 6 || i % 7 == 0) { className = "bold or"; }
            if (currday == this.helper.reFormatDateString(this.selectedDate, true)) { className = "selected"; }
            if (currday == this.helper.getTodayString()) { className = "newdate"; }
            if (this.language.toLowerCase() == "cn") {
                var festivalClass = this.helper.getFestivalClassName(currday);
                if (festivalClass != "") {
                    className = festivalClass;
                    if (currday == this.selectedDate) { className = className + "t"; }
                    isFestival = true;
                }
            }

            if (i < beginDay || (this.language.toLowerCase() == "cn" && beginDay == 0 && i < 7)) {
                dateSb.append(String.format(liStyle, "", ""));
            }
            else {
                if (this.language.toLowerCase() == "cn" && isFestival && !this.isDisabledDay(year, month, j)) {
                    dateSb.append(String.format(liStyle, "&nbsp;", className));
                }
                else {
                    dateSb.append(String.format(liStyle, j, className));
                }
                j++;
            }
            if (this.language.toLowerCase() == "cn") {
                if (i % 7 == 0) { dateSb.append("</tr>"); }
            }
            else {
                if (i % 7 == 6) { dateSb.append("</tr>"); }
            }
        }
        var lastDate = new Date(year, month - 1, dayCount);
        var endDay = lastDate.getDay(); //最后一天是星期几
        var count2 = 6 - endDay;
        for (var i = 0; i < count2; i++) {
            if ((i + 1) % 7 != 0) {
                dateSb.append(String.format(li, "", ""));
            }
            else {
                dateSb.append(String.format(grayLi, "", ""));
            }
        }
        dateSb.append("</tr></table>");
        return dateSb.toString();
    },

    isDisabledDay: function (year, month, day) {
        if (Object.isNull(this.enabledFrom)) { this.enabledFrom = this.helper.getTodayString(); }
        var curr = year + "-" + month + "-" + day;
        return !this.helper.validateDateRange(curr, this.enabledFrom, this.enabledTo);
    },
    onClickRegion: function (method) {
        var selYear = this.windowElement.find("select[method='selYear']").val();
        switch (method) {
            case "btnPre":
                {
                    if (this.startMonth == 1) { selYear--; }
                    if (this.startMonth == 1) { this.startMonth += 12; }
                    this.startMonth -= 1;
                    this.refreshMonth(selYear, this.startMonth);
                }
                break;
            case "btnNext":
                {
                    if (this.startMonth == 12) { selYear++; }
                    if (this.startMonth == 12) { this.startMonth -= 12; }
                    this.startMonth += 1;
                    this.refreshMonth(selYear, this.startMonth);
                }
                break;
        }
    }
});

//双屏输入框
var DoubleCalendar = Elong.Control.DoubleCalendar;
DoubleCalendar = Class.create();
Object.extend(DoubleCalendar.prototype, {

    popRegion: new Template("<div class=\"com_cbox\" >  <div class=\"calendar_year\"><div class=\"year\"><a method=\"btnPre\" href=\"#?\" title=\"上一月\" class=\"mf_lr_t cu_n\">&nbsp;</a></div>#{MonthSPAN}	<div class=\"month_1\"><a  method=\"btnNext\" title=\"下一月\" href=\"#?\" class=\"mf_rr_a cu_n\">&nbsp;</a></div></div>  <div class=\"date_box\">	#{MonthHTML}	<div class=\"hr\"></div>	#{nextMonthHTML}  </div>  <div class=\"clear\"></div>  <div class=\"com_cbox_b com_cbox_lt\"></div>  <div class=\"com_cbox_b com_cbox_rt\"></div>  <div class=\"com_cbox_b com_cbox_lb\"></div>  <div class=\"com_cbox_b com_cbox_rb\"></div><div class=\"clear\"></div></div>"),
    weakHTML_cn: "<tr class=\"family\"><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class=\"or\">六</th><th class=\"or\">日</th></tr>",
    weakHTML_en: "<tr class=\"family\"><th class=\"or\">S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th class=\"or\">S</th></tr>",
    monthSPAN_cn: "<span class=\"h\">{0}年{1}月</span><span class=\"m\">{2}年{3}月</span>",
    monthSPAN_en: "<span class=\"h\">{0}.{1}</span><span class=\"m\">{2}.{3}</span>",
    options: {
        eventElement: null,                     // 触发事件object
        selectedDate: null,                     // 显示已选中的日期"2009-01-01"，默认为今日
        language: "cn",                         // 中文: cn, en
        enabledFrom: null,                      // 设置可选日期开始时间："2009-01-01",默认为今日
        enabledTo: null,                        // 设置可选日期结束时间: "9999-12-12", 默认不限制
        onSelected: null,                        // 用户选择后回调函数: onSelected(date),  date为yyyy/mm/dd或者mm/dd/yyyy
        winStyle: "d",                             // d:双日历  s: 单日历
        windowElement: null,
        startMonth: 1,
        startYear: 1990,
        yearOrder: "a"
    },

    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        this.weakHTML = this.language.toLowerCase() == "cn" ? this.weakHTML_cn : this.weakHTML_en;
        this.helper = new CalendarHelper();

    },

    refreshMonth: function (year, month) {
        var nextYear = month == 12 ? year + 1 : year;
        var nextMonth = month == 12 ? 1 : month + 1;
        var spanHTML = this.language.toLowerCase() == "cn" ? this.monthSPAN_cn : this.monthSPAN_en;
        spanHTML = String.format(spanHTML, year, month, nextYear, nextMonth);
        var contentHTML = this.popRegion.eval({
            MonthSPAN: spanHTML,
            MonthHTML: this.getDateHTML(year, month),
            nextMonthHTML: this.getDateHTML(nextYear, nextMonth)
        });
        this.windowElement.html(contentHTML);
    },
    //获取日期列表
    getDateHTML: function (year, month) {
        var li = "<td onmouseover=\"$(this).toggleClass('hover')\" onmouseout=\"$(this).toggleClass('hover')\" class=\"{1}\">{0}</td>";
        var disableLi = "<td class=\"Close\">{0}</td>";
        var grayLi = "<td onmouseover=\"$(this).toggleClass('hover')\" onmouseout=\"$(this).toggleClass('hover')\" class=\"{1}\">{0}</td>";
        var dateSb = new StringBuilder();
        dateSb.append(String.format("<table date=\"{0}-{1}-\" width=\"180\" height=\"115\" cellspacing=\"0\" cellpadding=\"0\">", year, month));
        dateSb.append(this.weakHTML);
        var dayCount = this.helper.getDayCount(year, month);
        var firstDate = new Date(year, month - 1, 1);
        var beginDay = firstDate.getDay();         //1号是星期几：0-6
        var liStyle = "";
        var lineCount = 1;
        var count1 = dayCount + beginDay;
        if (this.language.toLowerCase() == "cn" && beginDay == 0) { count1 = count1 + 7; }
        var j = 1;
        for (var i = 0; i < count1; i++) {
            if (this.language.toLowerCase() == "cn") {
                if (i % 7 == 1) { dateSb.append("<tr>") };
            }
            else {
                if (i % 7 == 0) { dateSb.append("<tr>") };
            }
            if (this.isDisabledDay(year, month, j)) {
                liStyle = disableLi; // 不可选
            }
            else if ((this.language.toLowerCase() == "cn" && (i % 7 == 1 || (i + 1) % 7 == 1)) || (this.language.toLowerCase() == "en" && (i % 7 == 0 || (i + 1) % 7 == 0))) {
                liStyle = grayLi;
            }
            else {
                liStyle = li;
            }

            var className = "";
            var isFestival = false;
            var currday = this.helper.reFormatDateString(year + "-" + month + "-" + j);
            if (i % 7 == 6 || i % 7 == 0) { className = "bold or"; }
            if (currday == this.helper.reFormatDateString(this.selectedDate, true)) { className = "selected"; }
            if (currday == this.helper.getTodayString()) { className = "newdate"; }
            if (this.language.toLowerCase() == "cn") {
                var festivalClass = this.helper.getFestivalClassName(currday);
                if (festivalClass != "") {
                    className = festivalClass;
                    if (currday == this.selectedDate) { className = className + "t"; }
                    isFestival = true;
                }
            }

            if (i < beginDay || (this.language.toLowerCase() == "cn" && beginDay == 0 && i < 7)) {
                dateSb.append(String.format(liStyle, "", ""));
            }
            else {
                if (this.language.toLowerCase() == "cn" && isFestival && !this.isDisabledDay(year, month, j)) {
                    dateSb.append(String.format(liStyle, "&nbsp;", className));
                }
                else {
                    dateSb.append(String.format(liStyle, j, className));
                }
                j++;
            }
            if (this.language.toLowerCase() == "cn") {
                if (i % 7 == 0) { dateSb.append("</tr>"); }
            }
            else {
                if (i % 7 == 6) { dateSb.append("</tr>"); }
            }
        }
        var lastDate = new Date(year, month - 1, dayCount);
        var endDay = lastDate.getDay(); //最后一天是星期几
        var count2 = 6 - endDay;
        for (var i = 0; i < count2; i++) {
            if ((i + 1) % 7 != 0) {
                dateSb.append(String.format(li, "", ""));
            }
            else {
                dateSb.append(String.format(grayLi, "", ""));
            }
        }
        dateSb.append("</tr></table>");
        return dateSb.toString();
    },

    isDisabledDay: function (year, month, day) {
        if (Object.isNull(this.enabledFrom)) { this.enabledFrom = this.helper.getTodayString(); }

        var curr = year + "-" + month + "-" + day;
        return !this.helper.validateDateRange(curr, this.enabledFrom, this.enabledTo);
    },
    onClickRegion: function (method) {
        switch (method) {
            case "btnPre":
                if (this.startMonth < 3) { this.startYear--; }
                if (this.startMonth < 3) { this.startMonth += 12; }
                this.startMonth -= 2;
                this.refreshMonth(this.startYear, this.startMonth);
                return;
            case "btnNext":
                if (this.startMonth > 10) { this.startYear++; }
                if (this.startMonth > 10) { this.startMonth -= 12; }
                this.startMonth += 2;
                this.refreshMonth(this.startYear, this.startMonth);
                return;
        }
    }
});

//日历操作公共类
var Calendar = Elong.Control.Calendar;
Calendar = Class.create();
Object.extend(Calendar.prototype,{
  options: {
        eventElement: null,                     // 触发事件object
        selectedDate: null,                     // 显示已选中的日期"2009-01-01"，默认为今日
        language: "cn",                         // 中文: cn, en
        enabledFrom: null,                      // 设置可选日期开始时间："2009-01-01",默认为今日
        enabledTo: null,                        // 设置可选日期结束时间: "9999-12-12", 默认不限制
        onSelected: null,                        // 用户选择后回调函数: onSelected(date),  date为yyyy/mm/dd或者mm/dd/yyyy
		winStyle:"d",                           // d:双日历  s: 单日历
		windowElement:null,
		yearOrder:"a"
    },  
  initialize: function(options) {
      Object.extend(Object.extend(this, this.options), options);
      switch(this.winStyle.toLowerCase())
	  {
		  case "d":{
		              this.prototype= new DoubleCalendar(options);
		           }
		           break;
		  case "s":{
			          this.prototype= new SingleCalendar(options);
		           }
				   break;
           default:
			    this.prototype= new DoubleCalendar(options); 
	  }
    }
});
 
var CalendarWindow = Elong.Control.CalendarWindow;
CalendarWindow = Class.create();
Object.extend(CalendarWindow.prototype, {
    name: "CalendarWindow",
    options: {
        eventElement: null,                     // 触发事件object
        selectedDate: null,                     // 显示已选中的日期"2009-01-01"，默认为今日
        language: "cn",                         // 中文: cn, en
        enabledFrom: null,                      // 设置可选日期开始时间："2009-01-01",默认为今日
        enabledTo: null,                        // 设置可选日期结束时间: "9999-12-12", 默认不限制
        onSelected: null,                        // 用户选择后回调函数: onSelected(date),  date为yyyy/mm/dd或者mm/dd/yyyy
        winStyle: "d",
        yearOrder: "a"
        // isDisabledDay判断是否是可选的日期派生方法:function(year, month, day)
    },

    //初始化
    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        this.helper = new CalendarHelper();
        this.initializeDOM();
        this.initializeEvent();

        var d = new Date();
        // 格式化初始参数
        if (Object.isNull(this.selectedDate) || String.isNullOrEmpty(this.selectedDate) || !this.helper.validateDate(this.helper.reFormatDateString(this.selectedDate, true))) { this.selectedDate = this.helper.getTodayString(); }
        else { this.selectedDate = this.helper.reFormatDateString(this.selectedDate); }
        this.startYear = parseInt(this.selectedDate.split("-")[0], 10) || d.getFullYear();
        this.startMonth = parseInt(this.selectedDate.split("-")[1], 10) || d.getMonth() + 1;
        this.calendar = new Calendar($.extend(options, { windowElement: this.windowElement, startYear: this.startYear, startMonth: this.startMonth }));
        this.calendar.prototype.refreshMonth(this.startYear, this.startMonth)
        this.render();
    },

    initializeDOM: function () {
        this.contentEndRegion = $("#m_contentend");
        this.windowElement = $("<div style=\"display:none; position: absolute; z-index: 20000;\"></div>").appendTo(this.contentEndRegion);
    },

    destroyDOM: function () {
        this.windowElement = null;
        this.contentEndRegion = null;
        this.options = null;
    },

    initializeEvent: function () {
        this.windowElement.bind("click", this.onClickRegion.bindAsEventListener(this));
        FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
    },

    destroyEvent: function () {
        this.windowElement.unbind("click");
    },

    onOutClick: function () {
        $(document).bind("click", function (evt) {
            var element = Event.element(evt);
            if (this.windowElement != null) {
                if (this.windowElement.find("*").index(element) == -1 &&
                  (element.attr("method") != "btnPre" && element.attr("method") != "selMonth" && element.attr("method") != "selYear" && element.attr("method") != "btnNext")) { this.dispose(); }
            }
        } .bindAsEventListener(this));
    },

    onClickRegion: function (evt) {
        var elem = Event.element(evt);
        var method = elem.attr("method");
        this.calendar.prototype.onClickRegion(method);
        if (elem.is("td") && !elem.hasClass("Close") && (parseInt(elem.text(), 10) > 0 || elem.attr("class") != "hover")) {
            if (!Object.isNull(this.onSelected)) {
                var dateStr = elem.parents("table").attr("date") + elem.text();
                var isFestival = false;
                for (var key in this.helper.FestivalDate) {
                    if (elem.attr("class").substring(0, 2) == key) {
                        isFestival = true;
                    }
                }
                if (isFestival) { dateStr = this.helper.FestivalDate[elem.attr("class").substring(0, 2)]; }
                this.onSelected(this.helper.reFormatDateString(dateStr, this.language.toLowerCase() == "cn"));
            }
            this.dispose();
        }
    },

    render: function () {
        // 设置大小位置
        var top = this.eventElement.offset().top + this.eventElement.height() + 6;
        var left = this.eventElement.offset().left;

        var scroll = Globals.getScrollPosition();
        var browserRegion = Globals.browserDimensions();
        if (browserRegion.width - (this.eventElement.offset().left - scroll.x) > this.windowElement.width()) {
            this.windowElement[0].style.top = top + "px";
            this.windowElement[0].style.left = left + "px";
        }
        else {
            this.windowElement[0].style.top = top + "px";
            left = left - this.windowElement.width() + this.eventElement.width();
            this.windowElement[0].style.left = left + "px";
        }
        this.ie6FilterIFrame = Globals.addIE6Filter(this.windowElement.width(), this.windowElement.height(), left, top, 1999);
        this.windowElement.show();

    },
    dispose: function () {
        if (this.windowElement) {
            this.windowElement.fadeOut("normal");
            FunctionExt.defer(function () {
                if (this.windowElement) {
                    Globals.closeIE6Fliter(this.ie6FilterIFrame);
                    this.windowElement.remove();
                    this.destroyEvent();
                    this.destroyDOM();
                }
            } .bind(this), 500);
        }
    }
});
//=============================================================================
// 文件名:		Dialog.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.luo
// 创建日期:	2010-1-27
// 描述:		DialogWindow
// 备注:        
// 示例代码:
//        var wind = new Dialog({
//            title: "对话框的标题",
//            htmlContent: "<div>content</div>",
//            width: 480,
//            height: 240,
//            initEvent: function(windowElement) {
//               // 这里绑定窗口内元素的事件处理
//            } .bind(this)
//        });
//        wind.show();
//
//
//       Elong登陆框方法：$loginDialog(loginUrl, isCn)
//============================================================================= 

var Dialog = Elong.Control.Dialog;
Dialog = Class.create();

Object.extend(Dialog.prototype, {
    name: "Dialog",
    windowTemplate: new Template("<div class=\"com_dialog com_widget com_widget-content com_corner-all com_draggable\" style=\"#{width};#{height};\">#{titleRegion}<div class=\"com_dialog-content com_widget-content\">#{content}</div></div>"),
    titleTemplate: "<div class=\"com_dialog-titlebar com_widget-header com_corner-all com_helper-clearfix\"><span class=\"com_dialog-title\">{0}</span><a class=\"com_dialog-titlebar-close com_corner-all\" href=\"#?\" method=\"close\">	<span class=\"com_icon com_icon-closethick\">close</span></a></div>",

    options: {
        title: "对话框",                    // 标题, 标题为空就不会出现标题栏
        htmlContent: "",              // 呈现html内容
        initEvent: null,              // bind窗口内元素的事件, 参数windowElement为窗口父元素: function(windowElement){}
        width: 380,
        height: 0,
        closeEvent: null,
        isCover: true
    },

    // *********************************所有设置说明*******************************
    //    窗口的背景层设置
    //    layerOptions: {
    //        Color: "#fff", //背景色
    //        Opacity: 50, //透明度(0-100)
    //        zIndex: 1000//层叠顺序
    //    },
    //    窗口的设置
    //    WindowOptions: {
    //        Fixed: true, //是否固定定位
    //        Over: true, //是否显示覆盖层
    //        Center: true, //是否居中
    //        onShow: function() { } //显示时执行
    //    },
    //    窗口的拖动设置
    //    DragOptions: {
    //        Limit: true, //是否设置限制(为true时下面参数有用,可以是负数)
    //        mxLeft: 0, //左边限制
    //        mxRight: 0, //右边限制
    //        mxTop: 0, //上边限制
    //        mxBottom: 0, //下边限制
    //        mxContainer: document.documentElement, //指定限制在容器内
    //        onMove: function() { }, //移动时执行
    //        Lock: false//是否锁定
    //    },

    //初始化
    initialize: function (options) {
        Object.extend(Object.extend(this, this.options), options);
        this.initializeDOM();

        this.window = new LightBox(this.windowElement, this.overlayer, { isCover: this.isCover });
        if ($.browser.msie && $.browser.version <= 6) {
            this.window.Fixed = false;
        }
        if (this.windowElement.find("div.com_dialog-titlebar:eq(0)").length > 0) { // 是否有标题栏
            this.drag = new Drag(this.windowElement, this.windowElement.find("div.com_dialog-titlebar:eq(0)"));
        }
        this.overLay = this.window.OverLay;
        this.overLay.Color = "#cccccc";

        // 处理内部事件
        this.windowElement.find("[method='close']").bind("click", function (evt) { this.close(); if (this.closeEvent != null) this.closeEvent(this.windowElement); } .bindAsEventListener(this));
        this.initEvent(this.windowElement);
    },

    initializeDOM: function () {
        this.contentEndRegion = $("#m_contentend");
        var content = this.windowTemplate.eval({
            titleRegion: String.isNullOrEmpty(this.title) ? "<div></div>" : String.format(this.titleTemplate, this.title),
            content: this.htmlContent,
            width: "width:" + this.width + "px",
            height: this.height > 0 ? "height:" + this.height + "px" : ""
        });
        this.windowElement = $(content).appendTo(this.contentEndRegion);
        this.overlayer = $("<div></div>").appendTo(this.contentEndRegion);
    },

    destroyDOM: function () {
        this.htmlContent = "";
        this.windowElement.remove();
        this.overlayer.remove();
        this.windowElement = null;
        this.contentEndRegion = null;
    },

    show: function () {
        this.window.Show();
    },

    close: function () {
        this.window.Close();
        this.destroyDOM();
    }
});

var OverLay = Class.create();
OverLay.prototype = {
    initialize: function (overlay, options) {
        this.Lay = overlay.get(0); //覆盖层

        //ie6设置覆盖层大小程序
        this._size = function () { };

        this.SetOptions(options);

        this.Color = this.options.Color;
        this.Opacity = parseInt(this.options.Opacity);
        this.zIndex = parseInt(this.options.zIndex);

        this.Set();
    },
    //设置默认属性
    SetOptions: function (options) {
        this.options = {//默认值
            Color: "#fff", //背景色
            Opacity: 75, //透明度(0-100)
            zIndex: 1000//层叠顺序
        };
        Object.extend(this.options, options || {});
    },
    //创建
    Set: function () {
        this.Lay.style.display = "none";
        this.Lay.style.zIndex = this.zIndex;
        this.Lay.style.left = this.Lay.style.top = 0;

        if (this.isIE6()) {
            this.Lay.style.position = "absolute";
            this._size = function () {
                this.Lay.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
                this.Lay.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
            } .bind(this);
            //遮盖select
            this.Lay.innerHTML = '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;filter:alpha(opacity=0);" src="/favicon.ico"></iframe>';
        } else {
            this.Lay.style.position = "fixed";
            this.Lay.style.width = this.Lay.style.height = "100%";
        }
    },
    //显示
    Show: function () {
        //设置样式
        this.Lay.style.backgroundColor = this.Color;
        //设置透明度
        if ($.browser.msie) {
            this.Lay.style.filter = "alpha(opacity:" + this.Opacity + ")";
        } else {
            this.Lay.style.opacity = this.Opacity / 100;
        }
        //兼容ie6
        if (this.isIE6()) { this._size(); window.attachEvent("onresize", this._size); }

        this.Lay.style.display = "block";
    },

    isIE6: function () {
        return $.browser.msie && $.browser.version == 6;
    },

    //关闭
    Close: function () {
        this.Lay.style.display = "none";
        if (this.isIE6()) { window.detachEvent("onresize", this._size); }
    }
};



var LightBox = Class.create();
LightBox.prototype = {
    initialize: function (box, overlay, options) {

        this.Box = box.get(0); //显示层

        this.OverLay = new OverLay(overlay, options); //覆盖层

        this.SetOptions(options);

        this.Fixed = !!this.options.Fixed;
        this.Over = !!this.options.Over;
        this.Center = !!this.options.Center;
        this.onShow = this.options.onShow;
        this.isCover = this.options.isCover;

        this.Box.style.zIndex = this.OverLay.zIndex + 1;
        this.Box.style.display = "none";

        //兼容ie6用的属性
        if (this.isIE6()) { this._top = this._left = 0; this._select = []; }
    },
    //设置默认属性
    SetOptions: function (options) {
        this.options = {//默认值
            Fixed: true, //是否固定定位
            Over: true, //是否显示覆盖层
            Center: true, //是否居中
            isCover: true,
            onShow: function () { } //显示时执行
        };
        Object.extend(this.options, options || {});
    },
    //兼容ie6的固定定位程序
    _fixed: function () {
        var iTop = document.documentElement.scrollTop - this._top + this.Box.offsetTop, iLeft = document.documentElement.scrollLeft - this._left + this.Box.offsetLeft;
        //居中时需要修正
        if (this.Center) { iTop += this.Box.offsetHeight / 2; iLeft += this.Box.offsetWidth / 2; }

        this.Box.style.top = iTop + "px"; this.Box.style.left = iLeft + "px";

        this._top = document.documentElement.scrollTop; this._left = document.documentElement.scrollLeft;
    },
    //显示
    Show: function (options) {
        //固定定位
        if (this.Fixed) {
            if (this.isIE6()) {
                //兼容ie6
                this.Box.style.position = "absolute";
                this._top = document.documentElement.scrollTop; this._left = document.documentElement.scrollLeft;
                window.attachEvent("onscroll", this._fixed.bind(this));
            } else {
                this.Box.style.position = "fixed";
            }
        } else {
            this.Box.style.position = "absolute";
        }
        //覆盖层
        if (this.Over) {
            //显示覆盖层，覆盖层自带select隐藏
            if (this.isCover || (!this.isCover && !this.isIE6()))
                this.OverLay.Show();
        } else {
            //ie6需要把不在Box上的select隐藏
            if (this.isIE6()) {
                this._select = [];
                var oThis = this;
                Each(document.getElementsByTagName("select"), function (o) {
                    if (oThis.Box.contains ? !oThis.Box.contains(o) : !(oThis.Box.compareDocumentPosition(o) & 16)) {
                        o.style.visibility = "hidden"; oThis._select.push(o);
                    }
                })
            }
        }

        this.Box.style.display = "block";

        //居中
        if (this.Center) {
            this.Box.style.top = this.Box.style.left = "50%";
            //显示后才能获取
            var iTop = -this.Box.offsetHeight / 2, iLeft = -this.Box.offsetWidth / 2;
            //ie6或不是固定定位要修正
            if (!this.Fixed || this.isIE6()) { iTop += document.documentElement.scrollTop; iLeft += document.documentElement.scrollLeft; }
            this.Box.style.marginTop = iTop + "px"; this.Box.style.marginLeft = iLeft + "px";
        }

        this.onShow();
    },

    isIE6: function () {
        return $.browser.msie && $.browser.version == 6;
    },

    //关闭
    Close: function () {
        this.Box.style.display = "none";
        this.OverLay.Close();
        // if (this.isIE6()) { window.detachEvent("onscroll", this._fixed); Each(this._select, function(o) { o.style.visibility = "visible"; }); }
    }
};



function addEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};

function removeEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = null;
    }
};

if (!$.browser.msie) {
    HTMLElement.prototype.__defineGetter__("currentStyle", function() {
        return this.ownerDocument.defaultView.getComputedStyle(this, null);
    });
}

//拖放程序
var Drag = Class.create();
Drag.prototype = {
    //拖放对象,触发对象
    initialize: function(obj, drag, options) {
        var oThis = this;

        this._obj = obj.get(0); //拖放对象
        this.Drag = drag.get(0); //触发对象
        this._x = this._y = 0; //记录鼠标相对拖放对象的位置
        //事件对象(用于移除事件)
        this._fM = function(e) { oThis.Move(window.event || e); }
        this._fS = function() { oThis.Stop(); }

        this.SetOptions(options);

        this.Limit = !!this.options.Limit;
        this.mxLeft = parseInt(this.options.mxLeft);
        this.mxRight = parseInt(this.options.mxRight);
        this.mxTop = parseInt(this.options.mxTop);
        this.mxBottom = parseInt(this.options.mxBottom);
        this.mxContainer = this.options.mxContainer;

        this.onMove = this.options.onMove;
        this.Lock = !!this.options.Lock;

        this._obj.style.position = "absolute";
        addEventHandler(this.Drag, "mousedown", function(e) { oThis.Start(window.event || e); });
    },
    //设置默认属性
    SetOptions: function(options) {
        this.options = {//默认值
            Limit: true, //是否设置限制(为true时下面参数有用,可以是负数)
            mxLeft: 0, //左边限制
            mxRight: 0, //右边限制
            mxTop: 0, //上边限制
            mxBottom: 0, //下边限制
            mxContainer: document.documentElement, //指定限制在容器内
            onMove: function() { }, //移动时执行
            Lock: false//是否锁定
        };
        Object.extend(this.options, options || {});
    },
    //准备拖动
    Start: function(oEvent) {
        if (this.Lock) { return; }
        //记录鼠标相对拖放对象的位置
        this._x = oEvent.clientX - this._obj.offsetLeft;
        this._y = oEvent.clientY - this._obj.offsetTop;
        //mousemove时移动 mouseup时停止
        addEventHandler(document, "mousemove", this._fM);
        addEventHandler(document, "mouseup", this._fS);
        //使鼠标移到窗口外也能释放
        if ($.browser.msie) {
            addEventHandler(this.Drag, "losecapture", this._fS);
            this.Drag.setCapture();
        } else {
            addEventHandler(window, "blur", this._fS);
        }
    },
    //拖动
    Move: function(oEvent) {
        //判断是否锁定
        if (this.Lock) { this.Stop(); return; }
        //清除选择(ie设置捕获后默认带这个)
        window.getSelection && window.getSelection().removeAllRanges();
        //当前鼠标位置减去相对拖放对象的位置得到offset位置
        var iLeft = oEvent.clientX - this._x, iTop = oEvent.clientY - this._y;
        //设置范围限制
        if (this.Limit) {
            //如果设置了容器,因为容器大小可能会变化所以每次都要设
            if (!!this.mxContainer) {
                this.mxLeft = this.mxTop = 0;
                this.mxRight = this.mxContainer.clientWidth;
                this.mxBottom = this.mxContainer.clientHeight;
            }
            //获取超出长度
            var iRight = iLeft + this._obj.offsetWidth - this.mxRight, iBottom = iTop + this._obj.offsetHeight - this.mxBottom;
            //这里是先设置右边下边再设置左边上边,可能会不准确
            if (iRight > 0) iLeft -= iRight;
            if (iBottom > 0) iTop -= iBottom;
            if (this.mxLeft > iLeft) iLeft = this.mxLeft;
            if (this.mxTop > iTop) iTop = this.mxTop;
        }
        //设置位置
        //由于offset是把margin也算进去的所以要减去
        this._obj.style.left = iLeft - (parseInt(this._obj.currentStyle.marginLeft) || 0) + "px";
        this._obj.style.top = iTop - (parseInt(this._obj.currentStyle.marginTop) || 0) + "px";
        //附加程序
        this.onMove();
    },
    //停止拖动
    Stop: function() {
        //移除事件
        removeEventHandler(document, "mousemove", this._fM);
        removeEventHandler(document, "mouseup", this._fS);
        if ($.browser.msie) {
            removeEventHandler(this.Drag, "losecapture", this._fS);
            this.Drag.releaseCapture();
        } else {
            removeEventHandler(window, "blur", this._fS);
        }
    }
};
//===================================================================
// 文件名:		SelectDropListWindow.js
// 版权:		Copyright (C) 2009 Elong
// 创建人:		zhi.Luot
// 创建日期:	2009-10-16
// 描述:		弹出选择下拉列表控件，例如：弹出选择下拉乘机人
// 备注:		
// 示例代码：
//            new SelectDropListWindow({
//                data: [{ Name: "luozhi", value: 3 }, { Name: "test", value: 332 }, { Name: "zhang", value: 443}],
//                eventElement: $(input),
//                fieldName: "Name",
//                onSelected: function(index) {
//                    alert(index);
//                } .bind(this)
//            });
//===================================================================

var SelectDropListWindow = Elong.Control.SelectDropListWindow;
SelectDropListWindow = Class.create();

Object.extend(SelectDropListWindow.prototype, {
    name: "SelectDropListWindow",
    popRegion: "<div class=\"com_cbox_p\" style=\"display:none; position: absolute; z-index: 10;\"><ul></ul><div class=\"com_cbox_b com_cbox_lt\"></div><div class=\"com_cbox_b com_cbox_rt\"></div><div class=\"com_cbox_b com_cbox_lb\"></div><div class=\"com_cbox_b com_cbox_rb\"></div><div class=\"clear\"></div></div>",
    listTemplate: new Template("<li class=\"li_q\" method=\"select\" value=\"#{Value}\">#{Name}</li>"),

    options: {
        eventElement: null,         // 触发事件object
        data: null,                 // 显示数据的Jnos对象list
        onSelected: null,           // 选择后回调函数onSelected(index),index:参数表示用户点击选择的下标
        fieldName: "Name",           // 用于列表显示的字段名称
        singleColumn: false          // 单列
    },

    //初始化
    initialize: function(options) {
        Object.extend(Object.extend(this, this.options), options);
        if (Object.isNull(this.data) || this.data.length == 0) return;

        this.initializeDOM();
        this.initializeEvent();

        this.render();
    },

    initializeDOM: function() {
        this.contentEndRegion = $("#m_contentend");
        this.windowElement = $(this.popRegion).appendTo(this.contentEndRegion);
        if (this.singleColumn) { this.windowElement.addClass("com_cbox_p1"); }
    },

    destroyDOM: function() {
        this.data = null;
        this.windowElement = null;
        this.contentEndRegion = null;
    },

    initializeEvent: function() {
        this.windowElement.bind("click", this.onClickRegion.bindAsEventListener(this));
        this.windowElement.bind("mouseout", this.onMouseOutRegion.bindAsEventListener(this));
        this.windowElement.bind("mouseover", this.onMouseOverRegion.bindAsEventListener(this));
        FunctionExt.defer(this.onOutClick.bindAsEventListener(this), 100);
    },

    destroyEvent: function() {
        this.windowElement.unbind("click");
        $(document).unbind("click", this.onOutClickHandler);
        this.windowElement.unbind("mouseout");
        this.windowElement.unbind("mouseover");
    },

    onOutClick: function() {
        this.onOutClickHandler = function(evt) {
            var element = Event.element(evt);
            if (this.windowElement.find(":descendant").index(element) == -1) { this.dispose(); }
        } .bindAsEventListener(this);
        $(document).one("click", this.onOutClickHandler);
    },

    onClickRegion: function(evt) {
        var elem = Event.element(evt);
        var method = elem.attr("method");
        switch (method) {
            case "select":
                if (!Object.isNull(this.onSelected)) { this.onSelected(elem.attr("value")); }
                this.dispose();
                break;
            case "close":
                this.dispose();
                break;
        }
    },

    onMouseOverRegion: function(evt) {
        var element = Event.element(evt);
        if (this.outTimer != null) {
            clearTimeout(this.outTimer);
            this.outTimer = null;
        }

        if (element.is("li") && !element.hasClass("hr_w")) { element.addClass("li_cur"); }
    },

    onMouseOutRegion: function(evt) {
        var element = Event.element(evt);
        this.outTimer = FunctionExt.defer(function() {
            this.dispose();
        }, 0.01, this);

        if (element.is("li")) { element.removeClass("li_cur"); }
    },

    render: function() {
        
        var region = this.windowElement.find("ul");
        var sb = new StringBuilder();
        
        for (var i = 0; i < this.data.length; i++) {

            if (Object.isNull(this.data[i]))
                continue;
            sb.append(this.listTemplate.eval({
                Name: this.data[i][this.fieldName],
                Value: i
            }));
            if (!this.singleColumn && i % 3 == 2 && i != this.data.length - 1) { sb.append("<li class=\"clear hr_w\"></li>"); }
        }
        region.html(sb.toString());

        // 设置大小位置
        var top = this.eventElement.offset().top + this.eventElement.height() + 6;
        var left = this.eventElement.offset().left;

        this.windowElement[0].style.top = top + "px";
        this.windowElement[0].style.left = left + "px";
        this.ie6FilterIFrame = Globals.addIE6Filter(this.windowElement.width(), this.windowElement.height(), left, top);
        this.windowElement.show();
    },

    dispose: function() {
        if (this.windowElement) {
            this.windowElement.fadeOut("normal");
            FunctionExt.defer(function() {
                if (this.windowElement) {
                    Globals.closeIE6Fliter(this.ie6FilterIFrame);
                    this.windowElement.remove();
                    this.destroyEvent();
                    this.destroyDOM();
                }
            } .bind(this), 500);
        }
    }
});
