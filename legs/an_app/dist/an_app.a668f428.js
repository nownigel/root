parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"91zb":[function(require,module,exports) {

},{"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.3eb76cc7.woff","jXGh"],"jXGh"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.2279e2ee.svg","1OE9"],"1OE9"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.3b1f1857.eot","KWka"],"KWka"]}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./style.scss"));function t(e){return e&&e.__esModule?e:{default:e}}var o=document.getElementById("sound_effect_beep"),n=document.getElementById("body"),d=document.getElementById("header"),s=document.getElementById("h1"),a=document.getElementById("h2"),l=document.getElementById("h3"),u=document.getElementById("h4"),c=document.getElementById("h5"),r=document.getElementById("h6"),i={data:{route:0},wordpress:{}},g=function(){null!=n&&(n.addEventListener("scroll",function(e){}),n.addEventListener("keydown",function(e){document.getElementsByTagName("meta").keywords.content="My new page keywords!!",document.getElementsByTagName("meta").description.content="My new page description!!",document.title="My new Document Title!!"}),n.addEventListener("keyup",function(e){}),n.addEventListener("mousemove",function(e){}),n.addEventListener("mouseenter",function(e){}),n.addEventListener("mouseleave",function(e){}),n.addEventListener("mouseup",function(e){}),n.addEventListener("mousedown",function(e){}),n.addEventListener("click",function(e){}),n.addEventListener("touchmove",function(e){}),n.addEventListener("touchstart",function(e){}),n.addEventListener("touchend",function(e){}))},m=function e(){i.data.route+=1,console.log(i.data.route),1==i.data.route&&f(),i.data.route,i.data.route,i.data.route,i.data.route,i.data.route,i.data.route,i.data.route,i.data.route,i.data.route,11==i.data.route&&o.play(),i.data.route<12&&setTimeout(function(){e()},1e3)},p=function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="json",o.onload=function(){var e=o.status;t(200===e?null:e,o.response)},o.send()},f=function(){p("https://antenuh.com/feed/json",function(e,t){if(console.log("wp_json"),null!==e)console.log("Something went wrong: "+e);else{console.log("wp count: "+t.items),i.data.wordpress=t.items;for(var o=0;o<i.data.wordpress.length;o++){var n=i.data.wordpress[o];console.log(n)}}})};document.addEventListener("DOMContentLoaded",function(){var e=location.pathname.split("/");window.scrollTo(0,0),console.log(e[1]),null!=e[1]&&(""==e[1]&&console.log("just stay at the home page"),"p"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2])),"x"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2])),"p"!=e[1]&&""!=e[1]&&(console.log("going to user page"),null!=e[1]&&console.log("user id: "+e[1])))}),window.addEventListener("load",function(){g();var e=location.pathname.split("/");window.scrollTo(0,0),console.log(e[1]),null!=e[1]&&(""==e[1]&&(console.log("just stay at the home page"),m()),"p"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2])),"p"!=e[1]&&""!=e[1]&&(console.log("going to user page"),null!=e[1]&&console.log("user id: "+e[1])))});
},{"./style.scss":"91zb"}]},{},["Focm"], null)
//# sourceMappingURL=an_app.a668f428.map