parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"91zb":[function(require,module,exports) {

},{"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.3eb76cc7.woff","jXGh"],"jXGh"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.2279e2ee.svg","1OE9"],"1OE9"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.3b1f1857.eot","KWka"],"KWka"]}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./style.scss"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("sound_effect_beep"),o=document.getElementById("body"),a=document.getElementById("header"),r=document.getElementById("h1"),l=document.getElementById("h2"),s=document.getElementById("h3"),i=document.getElementById("h4"),d=document.getElementById("h5"),u=document.getElementById("h6"),c=!0,g={data:{route:0},wordpress:{}},p=function(){null!=o&&(o.addEventListener("scroll",function(e){}),o.addEventListener("keydown",function(e){w()}),o.addEventListener("keyup",function(e){}),o.addEventListener("mousemove",function(e){}),o.addEventListener("mouseenter",function(e){}),o.addEventListener("mouseleave",function(e){}),o.addEventListener("mouseup",function(e){}),o.addEventListener("mousedown",function(e){}),o.addEventListener("click",function(e){}),o.addEventListener("touchmove",function(e){}),o.addEventListener("touchstart",function(e){}),o.addEventListener("touchend",function(e){}))},m=function e(){g.data.route+=1,console.log(g.data.route),1==g.data.route&&w(),g.data.route,g.data.route,g.data.route,g.data.route,g.data.route,g.data.route,g.data.route,g.data.route,g.data.route,11==g.data.route&&n.play(),g.data.route<12&&setTimeout(function(){e()},1e3)},f=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="json",n.onload=function(){var e=n.status;t(200===e?null:e,n.response)},n.send()},w=function(){f("https://antenuh.com/feed/json",function(e,t){if(console.log("wp_json"),null!==e)console.log("Something went wrong: "+e);else{console.log("wp count: "+t.items),g.data.wordpress=t.items;for(var n=0;n<g.data.wordpress.length;n++){var o=g.data.wordpress[n];console.log(o)}E=!0}})},h=!0,y=[],v=[],L=function(){setTimeout(function(){if(document.getElementById("wp_library_ol").innerHTML="",document.getElementById("filtered_wp_library_by_title_ol").innerHTML="",y=[],v=[],null!=g.data.wordpress&&null!=document.getElementById("wp_library_ol")){for(var e=0;e<g.data.wordpress.length;e++)y.push(g.data.wordpress[e]);for(e=0;e<y.length;e++)document.getElementById("wp_library_ol").innerHTML+="\n                        <li>\n                            <p>".concat(y[e].title,"</p>\n                        </li>")}},0)},E=!1,T=setInterval(function(){if(1==E&&null!=g.data.wordpress){E=!1;var e=Object.keys(g.data.wordpress).map(function(e){return g.data.wordpress[e]});if(g.data.wordpress=e,console.log("wp_validation(): has updated -> state.data.wordpress"),console.log(g.data.wordpress),0==E){if(setTimeout(function(){L(),h&&alert("connected!")},0),"local_user"==localStorage.username&&h&&alert("this is a new local user: "+localStorage.username),"local_user"!=localStorage.username&&h&&alert("this is a not new local user: "+localStorage.username),1==c)return c=!1,void(h&&alert("first firebase load"));if(0==c)return void(h&&alert("not first firebase load"))}}},1e3/24);document.addEventListener("DOMContentLoaded",function(){var e=location.pathname.split("/");window.scrollTo(0,0),console.log(e[1]),null!=e[1]&&(""==e[1]&&console.log("just stay at the home page"),"p"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2]),document.getElementsByTagName("meta").description.content="fortnite description",document.title="fortnite is here!",r.innerHTML='<a href="https://www.nownigel.com">fortnite</a>',l.innerHTML="UI / UX engineer, motion artist and graphic designer",s.innerHTML="Videos, Graphics and Interactables",i.innerHTML="Desktop, Mobile & VR",d.innerHTML="Made with Javascript, HTML & CSS",u.innerHTML="New all original content everyday"),"x"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2]),document.getElementsByTagName("meta").description.content="taylor description",document.title="taylor is here!",r.innerHTML='<a href="https://www.nownigel.com">taylor</a>',l.innerHTML="UI / UX engineer, motion artist and graphic designer",s.innerHTML="Videos, Graphics and Interactables",i.innerHTML="Desktop, Mobile & VR",d.innerHTML="Made with Javascript, HTML & CSS",u.innerHTML="New all original content everyday"),"p"!=e[1]&&""!=e[1]&&(console.log("going to user page"),null!=e[1]&&console.log("user id: "+e[1])))}),window.addEventListener("load",function(){p();var e=location.pathname.split("/");window.scrollTo(0,0),console.log(e[1]),null!=e[1]&&(""==e[1]&&(console.log("just stay at the home page"),m()),"p"==e[1]&&(console.log("going to post page"),null!=e[2]&&console.log("post id: "+e[2])),"p"!=e[1]&&""!=e[1]&&(console.log("going to user page"),null!=e[1]&&console.log("user id: "+e[1])))});
},{"./style.scss":"91zb"}]},{},["Focm"], null)
//# sourceMappingURL=an_app.a0b7d0ff.map