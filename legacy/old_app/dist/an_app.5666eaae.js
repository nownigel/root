parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"91zb":[function(require,module,exports) {

},{"./assets/gui/gui_link_grid_white.svg":[["gui_link_grid_white.031c04eb.svg","OlIU"],"OlIU"],"./assets/gui/gui_link_menu_white.svg":[["gui_link_menu_white.6d3f7364.svg","wbRc"],"wbRc"],"./assets/gui/gui_link_sign_up_white.svg":[["gui_link_sign_up_white.3e97c97a.svg","tOG8"],"tOG8"],"./assets/gui/gui_link_sign_in_white.svg":[["gui_link_sign_in_white.d13b4ad5.svg","hRQK"],"hRQK"],"./assets/gui/gui_link_post_white.svg":[["gui_link_post_white.74c0e530.svg","nNP9"],"nNP9"],"./assets/gui/gui_link_message_white.svg":[["gui_link_message_white.c3cad2ca.svg","R7u5"],"R7u5"],"./assets/gui/gui_link_home_white.svg":[["gui_link_home_white.bfebe96b.svg","9Cbi"],"9Cbi"],"./assets/gui/gui_link_gear_white.svg":[["gui_link_gear_white.29036cf1.svg","LGX4"],"LGX4"],"./assets/gui/gui_link_house_white.svg":[["gui_link_house_white.86db955e.svg","j6Kz"],"j6Kz"],"./assets/gui/gui_link_close_white.svg":[["gui_link_close_white.0132b8f7.svg","nhli"],"nhli"],"./assets/gui/gui_link_min_white.svg":[["gui_link_min_white.2cd5bef4.svg","KYOg"],"KYOg"],"./assets/gui/gui_link_max_white.svg":[["gui_link_max_white.6fd29f10.svg","+87j"],"+87j"],"./assets/gui/gui_link_dots_white.svg":[["gui_link_dots_white.5f839c31.svg","6BAJ"],"6BAJ"],"./assets/gui/gui_interaction_button_1.svg":[["gui_interaction_button_1.42f65f13.svg","/MhS"],"/MhS"],"./assets/gui/gui_interaction_button_start.svg":[["gui_interaction_button_start.2153de6c.svg","ofcC"],"ofcC"],"./assets/gui/gui_interaction_button_learn.svg":[["gui_interaction_button_learn.65f20bd8.svg","lBkp"],"lBkp"],"./assets/gui/gui_interaction_text_or.svg":[["gui_interaction_text_or.7e7189e2.svg","QqO9"],"QqO9"],"./assets/gui/gui_interaction_text_press.svg":[["gui_interaction_text_press.9ead253d.svg","vCh9"],"vCh9"],"./assets/gui/gui_stage_tv.svg":[["gui_stage_tv.d04d0799.svg","NFrx"],"NFrx"],"./assets/gui/gui_stage_lights.svg":[["gui_stage_lights.f6908658.svg","SDCU"],"SDCU"],"./assets/gui/gui_stage_desk.svg":[["gui_stage_desk.15917156.svg","2nMF"],"2nMF"],"./assets/gui/gui_character_message_box.svg":[["gui_character_message_box.bc234b44.svg","Oi3o"],"Oi3o"],"./assets/gui/gui_character_right_1.svg":[["gui_character_right_1.beb91280.svg","QsBu"],"QsBu"],"./assets/gui/gui_character_right_2.svg":[["gui_character_right_2.41916e6b.svg","ENhG"],"ENhG"],"./assets/gui/gui_character_right_3.svg":[["gui_character_right_3.320b110e.svg","+9Bd"],"+9Bd"],"./assets/gui/gui_character_right_4.svg":[["gui_character_right_4.85dd1afc.svg","14PM"],"14PM"],"./assets/gui/gui_character_left_1.svg":[["gui_character_left_1.75a779e3.svg","k8lP"],"k8lP"],"./assets/gui/gui_character_left_2.svg":[["gui_character_left_2.b396a749.svg","XKcx"],"XKcx"],"./assets/gui/gui_character_left_3.svg":[["gui_character_left_3.75a779e3.svg","zyKU"],"zyKU"],"./assets/gui/gui_character_left_4.svg":[["gui_character_left_4.83125dda.svg","adzS"],"adzS"],"./assets/gui/gui_character_right_face.svg":[["gui_character_right_face.6cff5cb0.svg","7e5/"],"7e5/"],"./assets/gui/gui_character_left_face.svg":[["gui_character_left_face.d8a20c63.svg","ZhMq"],"ZhMq"],"./assets/gui/gui_input_1.svg":[["gui_input_1.17d5b8aa.svg","JzRj"],"JzRj"],"./assets/gui/gui_input_2.svg":[["gui_input_2.c603a97e.svg","OjqT"],"OjqT"],"./assets/gui/gui_logo_mark.svg":[["gui_logo_mark.050e710b.svg","Vmy7"],"Vmy7"],"./assets/gui/gui_logo_mark_1.svg":[["gui_logo_mark_1.59dabe7a.svg","uQHO"],"uQHO"],"./assets/gui/gui_logo_mark_2.svg":[["gui_logo_mark_2.270c9f0e.svg","lDli"],"lDli"],"./assets/gui/gui_logo_mark_3.svg":[["gui_logo_mark_3.f6db15ef.svg","H1/T"],"H1/T"],"./assets/gui/gui_logo_mark_4.svg":[["gui_logo_mark_4.81b6e977.svg","KkjD"],"KkjD"],"./assets/gui/gui_logo_type.svg":[["gui_logo_type.f275f24d.svg","3m6e"],"3m6e"],"./assets/gui/gui_logo_white_mark_1.svg":[["gui_logo_white_mark_1.d28b0e8e.svg","dkld"],"dkld"],"./assets/gui/gui_logo_white_mark_2.svg":[["gui_logo_white_mark_2.aa736afd.svg","CD8O"],"CD8O"],"./assets/gui/gui_logo_white_mark_3.svg":[["gui_logo_white_mark_3.c725f019.svg","oMrZ"],"oMrZ"],"./assets/gui/gui_logo_white_mark_4.svg":[["gui_logo_white_mark_4.034265e1.svg","npIx"],"npIx"],"./assets/gui/gui_logo_white_type.svg":[["gui_logo_white_type.13d306ff.svg","vqYW"],"vqYW"],"./assets/gui/gui_nav_logo_type.svg":[["gui_nav_logo_type.feda40ae.svg","4WI4"],"4WI4"],"./assets/gui/gui_nav_logo_white_type.svg":[["gui_nav_logo_white_type.5b7cecb7.svg","T5IN"],"T5IN"],"./assets/accent/noise_1.svg":[["noise_1.e9838707.svg","Em37"],"Em37"],"./assets/accent/noise_2.svg":[["noise_2.9d5a7b70.svg","big2"],"big2"],"./assets/accent/noise_3.svg":[["noise_3.f6dab7ba.svg","T/GA"],"T/GA"],"./assets/accent/noise_4.svg":[["noise_4.d4a1c8b9.svg","O/OT"],"O/OT"],"./assets/accent/noise_white_1.svg":[["noise_white_1.cbf9d11a.svg","C1BG"],"C1BG"],"./assets/accent/noise_white_2.svg":[["noise_white_2.d7493366.svg","pszI"],"pszI"],"./assets/accent/noise_white_3.svg":[["noise_white_3.39472642.svg","p+8k"],"p+8k"],"./assets/accent/noise_white_4.svg":[["noise_white_4.32e200f0.svg","uldX"],"uldX"],"./assets/socials/twitter_handdrawn.svg":[["twitter_handdrawn.3f39cbad.svg","ghGI"],"ghGI"],"./assets/socials/twitch_handdrawn.svg":[["twitch_handdrawn.98ec63cc.svg","K1YH"],"K1YH"],"./assets/socials/youtube_handdrawn.svg":[["youtube_handdrawn.ecc9a640.svg","oPoU"],"oPoU"],"./assets/socials/instagram_handdrawn.svg":[["instagram_handdrawn.0d25f874.svg","Ho9H"],"Ho9H"],"./assets/socials/facebook_handdrawn.svg":[["facebook_handdrawn.8da9815e.svg","/PjC"],"/PjC"],"./assets/gradient/grey_top.svg":[["grey_top.55c86d70.svg","+CRD"],"+CRD"],"./assets/gradient/white_top.svg":[["white_top.319188dd.svg","yPRv"],"yPRv"],"./assets/fonts/Silkscreen.ttf.woff":[["Silkscreen.ttf.3eb76cc7.woff","jXGh"],"jXGh"],"./assets/fonts/Silkscreen.ttf.svg":[["Silkscreen.ttf.2279e2ee.svg","1OE9"],"1OE9"],"./assets/fonts/Silkscreen.ttf.eot":[["Silkscreen.ttf.3b1f1857.eot","KWka"],"KWka"]}],"lIrd":[function(require,module,exports) {
"use strict";var i;function t(i,t,n){return t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={url:"/",data:{firebase:{},wordpress:{},validated_user_is_logged:"",validated_user:"",returning_user:"",url:"",routes:"null, ",route:0,newly_created_ID:0},motion:{duration:0,frame:1,framerate:24,rate:1e3,sequence_game:0},events:{mouse:{current:{clientX:0,clientY:0},status:{enter:!0,leave:!1,up:!0,down:!1},history:[],timer:0},mouse_enter:{history:[],timer:0},mouse_leave:{history:[],timer:0},mouse_up:{history:[],timer:0},mouse_down:{history:[],timer:0},mouse_up_move:{history:[],timer:0},mouse_down_move:{history:[],timer:0},mouse_drag_drop:{history:[],timer:0},touch:{history:[],timer:0},touch_start:{history:[],timer:0},touch_end:{history:[],timer:0},touch_drag_drop:{history:[],timer:0},scroll:{history:[],timer:0},key:{history:[],timer:0},key_up:{history:[],timer:0},motion:{event_accelerationIncludingGravity_x:0,event_accelerationIncludingGravity_y:0,event_accelerationIncludingGravity_z:0,orientation_string:"",event_alpha:"",event_beta:"",event_gamma:""}},ux:(i={platform:{is_Desktop:!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),is_Mobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)},orientation:{is_Landscape:window.innerHeight<window.innerWidth,is_Portrait:window.innerHeight>window.innerWidth},browser:{height:window.outerHeight,width:window.outerWidth},window:{height:window.innerHeight,width:window.innerWidth},screen:{height:window.screen.height,width:window.screen.width,orientation:window.screen.orientation},dimensions:{current:8,height:window.innerHeight,width:window.innerWidth,height8:window.innerHeight/8,width8:window.innerWidth/8,height16:window.innerHeight/16,width16:window.innerWidth/16,height32:window.innerHeight/32,width32:window.innerWidth/32,height64:window.innerHeight/64,width64:window.innerWidth/64,height128:window.innerHeight/128,width128:window.innerWidth/128,height256:window.innerHeight/256,width256:window.innerWidth/256}},t(i,"platform",{is_Desktop:!1,is_Mobile:!1}),t(i,"browser",{height:window.outerHeight,width:window.outerWidth}),t(i,"window",{height:window.innerHeight,width:window.innerWidth}),t(i,"screen",{height:window.screen.height,width:window.screen.width,orientation:window.screen.orientation}),t(i,"dimensions",{current:8,height:window.innerHeight,width:window.innerWidth,height8:window.innerHeight/8,width8:window.innerWidth/8,height16:window.innerHeight/16,width16:window.innerWidth/16,height32:window.innerHeight/32,width32:window.innerWidth/32,height64:window.innerHeight/64,width64:window.innerWidth/64,height128:window.innerHeight/128,width128:window.innerWidth/128,height256:window.innerHeight/256,width256:window.innerWidth/256}),i),interaction:{root:{clientHeight:0,clientWidth:0,scrollHeight:0,scrollWidth:0,scrollTop:0,scrollLeft:0,component_app_gui_scroll_y_position:0,wheel:"still",wheels:0,isWheeling:!1},key:{transform:!1,opacity:!1,display:!1,xaxis:1,yaxis:1,height:2,width:2,action:{breathing:!1,blinking:!0,standing:!1,walking:!1,sitting:!1,left:!0,right:!1}},keyhole:{transform:!1,opacity:!1,display:!1,xaxis:5,yaxis:4,height:2,width:2,action:{breathing:!1,blinking:!0,walking:!1,sitting:!1,left:!0,right:!1}},playable:{frame:0,stance:0,angle:0,transform:!1,opacity:!1,display:!1,clientX:6,clientY:4,height:4,width:1,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!1,running:!1,stunned:!1}},player_1:{frame:0,stance:0,angle:0,transform:!1,opacity:!1,display:!1,clientX:6,clientY:4,height:4,width:1,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!0,running:!1,stunned:!1}},player_2:{frame:0,stance:0,angle:0,transform:!1,opacity:!1,display:!1,clientX:6,clientY:4,height:4,width:1,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!0,running:!1,stunned:!1}},enemy:{frame:0,stance:0,angle:0,transform:!1,opacity:!1,display:!1,clientX:6,clientY:4,height:4,width:1,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!0,running:!1,stunned:!1}},vr:{transform:!1,opacity:!1,display:!1,clientX:-1,clientY:-1,height:4,width:1,stance:5,clientX_increase:!1,clientY_increase:!1,clientX_auto:!0,clientY_auto:!1,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!1,running:!1,stunned:!1}},bridge:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:1,width:1,stance:5,idle:{floating:!1,sneak:!1,standing:!0,lean:!1,deep_lean:!1,squat:!1,sitting:!1,bend:!1,deep_squat:!1,crawl:!1,prone:!1,dead:!1},action:{jumping:!1,punching:!1,kicking:!1,shooting:!1,grabing:!1,blocking:!1},status:{jumped:!1,punched:!1,kicked:!1,shot:!1,grabbed:!1,blocked:!1},weapon:{hands:!1,paint:!1,shoes:!0,gun:!0},cycles:{growth:!1,shrink:!1,walking:!0,running:!1,stunned:!1}},logo:{transform:!1,opacity:!1,display:!1,xaxis:-1,yaxis:-4,height:8,width:4},helper:{transform:!1,opacity:!1,display:!1,xaxis:-1,yaxis:-4,height:8,width:4},pen:[],pencil:[],dice:Math.floor(6*Math.random())+1,random:Math.floor(100*Math.random())+1,bullets:[],hands:{transform:!1,opacity:!1,display:!1,speed:1,xaxis:3,xaxisascending:!0,yaxis:1,yaxisascending:!0},track_x:{transform:!1,opacity:!1,display:!1,speed:1,xaxis:3,xaxisascending:!0,yaxis:1,yaxisascending:!0},track_y:{transform:!1,opacity:!1,display:!1,speed:1,xaxis:3,xaxisascending:!0,yaxis:1,yaxisascending:!0},ball:{transform:!1,opacity:!1,display:!1,speed:1,xaxis:3,xaxisascending:!0,yaxis:1,yaxisascending:!0},bounce:{transform:!1,opacity:!1,display:!1,speed:1,xaxis:3,xaxisascending:!0,yaxis:1,yaxisascending:!0},snake:{create:!1,direction:"up",snakes:[{clientX:0,clientY:0,clientXGrow:!1,clientYGrow:!1}]},parallax:{xaxis:0,yaxis:0}},gui:{top:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},top_left:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},top_right:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},bottom:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},bottom_left:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},bottom_right:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},left:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0},right:{transform:!1,opacity:!1,display:!1,xaxis:0,yaxis:0,height:0,width:0}},modal:{pip:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},pop:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},page:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},fade:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},gradient:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},morph:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},menu:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},overlay:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},nav:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}},corner:{top:{transform:!1,opacity:!1,display:!1},bottom:{transform:!1,opacity:!1,display:!1},left:{transform:!1,opacity:!1,display:!1},right:{transform:!1,opacity:!1,display:!1}}}},e={default_state:n};exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var i=e(require("./style.scss")),t=e(require("./imports/state"));function e(i){return i&&i.__esModule?i:{default:i}}function n(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var o,d,h,w,r,a,s,u,g=function(i,t,e){var n=document.createElement("div");return null!=i&&n.setAttribute("id",i),null!=i&&t&&(n.classList=t),null!=e&&(n.innerHTML="\n            ".concat(e,"\n        ")),n},l=document.getElementById("load_bar_container"),_=document.getElementById("load_bar_container_border"),c=document.getElementById("load_bar_container_size"),m=document.getElementById("footer_top"),f=document.getElementById("footer_bottom"),b=document.getElementById("footer_left"),p=document.getElementById("footer_right");o=t.default.default_state,d=!0,h=document.getElementById("buffer"),w=document.getElementById("root"),r=document.getElementById("header"),a=document.getElementById("footer"),s=function(){null!=h&&(h.style="height: "+o.ux.dimensions.height+"px;width: "+o.ux.dimensions.width+"px;"),null!=w&&(w.style="height: "+o.ux.dimensions.height+"px;width: "+o.ux.dimensions.width+"px;"),null!=a&&(a.style="height: "+o.ux.dimensions.height+"px;width: "+o.ux.dimensions.width+"px;")},d&&console.log("index.js"),u=function(){o.data.route+=1,console.log(o.data.route),1==o.data.route&&setTimeout(function(){u()},1e3),2==o.data.route&&setTimeout(function(){u()},1e3),3==o.data.route&&setTimeout(function(){u()},1e3),4==o.data.route&&setTimeout(function(){u()},1e3),5==o.data.route&&setTimeout(function(){u()},1e3),6==o.data.route&&setTimeout(function(){u()},1e3),7==o.data.route&&(l.classList="animated1 fadeOut delay1 position_fixed bottom_0 margin_auto width_100 height_1vh float_left z_index_1",_.classList="position_relative margin_auto width_100 height_1vh float_left easing_1",setTimeout(function(){u()},1e3)),8==o.data.route&&(h.classList="display_none position_relative float_left width_100vw height_100 bg_white",m.classList="position_absolute bg_grey float_left height_1vw width_100 top_0 left_0 right_0 margin_auto z_index_2",f.classList="position_absolute bg_grey float_left height_1vw width_100 bottom_0 left_0 right_0 margin_auto z_index_2",b.classList="position_absolute bg_grey float_left width_1vw height_100 top_0 left_0 margin_auto z_index_2",p.classList="position_absolute bg_grey float_left width_1vw height_100 bottom_0 right_0 margin_auto z_index_2",setTimeout(function(){u()},1e3))},window.onload=function(){u(),s()},window.onresize=function(){var i;o.ux=(n(i={platform:{is_Desktop:!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),is_Mobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)},orientation:{is_Landscape:window.innerHeight<window.innerWidth,is_Portrait:window.innerHeight>window.innerWidth},browser:{height:window.outerHeight,width:window.outerWidth},window:{height:window.innerHeight,width:window.innerWidth},screen:{height:window.screen.height,width:window.screen.width,orientation:window.screen.orientation},dimensions:{current:8,height:window.innerHeight,width:window.innerWidth,height8:window.innerHeight/8,width8:window.innerWidth/8,height16:window.innerHeight/16,width16:window.innerWidth/16,height32:window.innerHeight/32,width32:window.innerWidth/32,height64:window.innerHeight/64,width64:window.innerWidth/64,height128:window.innerHeight/128,width128:window.innerWidth/128,height256:window.innerHeight/256,width256:window.innerWidth/256}},"platform",{is_Desktop:!1,is_Mobile:!1}),n(i,"browser",{height:window.outerHeight,width:window.outerWidth}),n(i,"window",{height:window.innerHeight,width:window.innerWidth}),n(i,"screen",{height:window.screen.height,width:window.screen.width,orientation:window.screen.orientation}),n(i,"dimensions",{current:8,height:window.innerHeight,width:window.innerWidth,height8:window.innerHeight/8,width8:window.innerWidth/8,height16:window.innerHeight/16,width16:window.innerWidth/16,height32:window.innerHeight/32,width32:window.innerWidth/32,height64:window.innerHeight/64,width64:window.innerWidth/64,height128:window.innerHeight/128,width128:window.innerWidth/128,height256:window.innerHeight/256,width256:window.innerWidth/256}),i),console.log("resize"),s()},window.ondevicemotion=function(i){},window.ondeviceorientation=function(i){},window.onorientationchange=function(){},window.onbeforeunload=function(){};
},{"./style.scss":"91zb","./imports/state":"lIrd"}]},{},["Focm"], null)
//# sourceMappingURL=an_app.5666eaae.map