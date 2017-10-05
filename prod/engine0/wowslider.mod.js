"use strict";!function(e){var s=e.fn.wowSlider;e.fn.wowSlider=function(a){function n(){var s=e(".ws_prev"),a=e(".ws_next");try{0==w?s.css("display","none"):s.css("display","block"),w==l-1?a.css("display","none"):a.css("display","block")}catch(e){}}var t,i=a.autoPlay,o=e(".ws_images ul")[0].children,l=o.length,r=null,c=!0;if(this.hasClass("delays")){a.autoPlay=!1;for(var d=new Array,u=0;u<l;u++)d[u]=e(o[u]).data("delay")||a.delay;!function e(){clearTimeout(r),r=setTimeout(function(){i&&t&&!c?t[0].wsStart():c=!1,e()},d[w]+a.duration)}()}var p=a.onBeforeStep,h=a.onStep;e.extend(a,{onBeforeStep:function(e,s){return!i&&t?(t[0].wsStop(),e):p?p.apply(this,[e,s]):e+1},onStep:function(s,a){h&&h.apply(this,[s,a]),w=s,f&&(f.hasClass("delays")&&v(),f.hasClass("stoptitles")&&e(".ws-title, .ws-title>").stop(1,1).stop(1,1),f.hasClass("hidecontrolls")&&n())}}),t=s.apply(this,[a]);var w=a.startSlide||0,f=this,m=(a.duration,!1);if(f.hasClass("hidecontrolls")&&n(),f.hasClass("fullscreen")){var y=function(e,s,a){e.addEventListener?e.addEventListener(s,a,!1):e.attachEvent("on"+s,a)},g=function(e,s,a){e.removeEventListener?e.removeEventListener(s,a):e.detachEvent("on"+s,a)},C=function(s){if(_){var n=a.width/(a.height+100),t=window.screen.availWidth;return e(s).css({width:t}),e(s).children().css({top:(window.screen.availHeight-t/n)/2}),""===x?s.requestFullScreen():s[x+"RequestFullScreen"]()}if(s){F&&S(F);var n=a.width/(a.height+100),t=e(window).width(),i=e("<div id='viewfullscreen'/>").css({position:"absolute",width:"100%",height:"100%","background-color":"#000",top:0,left:0,"z-index":9999999});i.appendTo("body"),A=e(s).children().css("max-width"),i.append(e("<div id='container'/>").css({"margin-top":(e(window).height()-t/n)/2}).append(e(s).children().css({width:t,"max-width":"95%"}))),function(){var s=e(".ws_shadow").css("background-image");s=s.replace("url(","").replace(")","").replace(/\/$/,""),e(".ws_shadow").css("background-image","none").append(e("<img src="+s+"></img>").css("width","100%"))}(),y(document.body,"keydown",b),e("body").focus(),m=!m}},S=function(s){if(_)return""===x?document.cancelFullScreen():document[x+"CancelFullScreen"]();s&&(function(){var s="url("+e(".ws_shadow>img").attr("src")+")";e(".ws_shadow").css("background-image",s).empty()}(),e("#viewfullscreen>#container").children().css({width:"","max-width":A}).appendTo(e(s)),e("#viewfullscreen").remove(),g(document.body,"keydown",b),F=0,m=!m)},b=function(e){27==e.keyCode&&k(!0)},k=function(s){if(s)S(document),f.css({top:0}),e("#fullscreen").parent().append(f),e("#fullscreen").remove(),I.removeClass("max"),I.addClass("min");else{var a=e("<div id='fullscreen'/>");a.appendTo(f.parent()),a.append(f),C(e("#fullscreen")[0]),I.removeClass("min"),I.addClass("max")}setTimeout(function(){e(".ws_thumbs").trigger("mousemove")},100)},_=0,x="";if(void 0!==document.cancelFullScreen)_=!0;else for(var E="webkit moz o ms khtml".split(" "),u=0,T=E.length;u<T;u++)if(x=E[u],void 0!==document[x+"CancelFullScreen"]){_=!0;break}var F=0,A=0;e(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){m=!m,e(""),m||k(!0)});var I=e('<a href="#" class="min ws_fulscreen" style="display: block;"></a>');I.click(function(){k(m)}),f.append(I)}if(f.hasClass("playpause")){var L=e('<a href="#" class="ws_playpause" style="display: block;"></a>');i?L.addClass("pause"):L.addClass("play"),L.click(function(){(i=!i)?(t.hasClass("delays")||t[0].wsStart(),L.removeClass("play"),L.addClass("pause")):(t.hasClass("delays")||t[0].wsStop(),L.removeClass("pause"),L.addClass("play"))}),f.append(L)}if(f.hasClass("hidetitles")&&(e(".ws-title").addClass("ws_hovershow"),e(".ws_playpause").addClass("ws_hovershow"),"Microsoft Internet Explorer"==navigator.appName)){var M=-1,z=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(z)&&(M=parseFloat(RegExp.$1)),-1!=M&&M<=8&&f.hover(function(){e(".ws_hovershow").animate({opacity:1},{step:function(s,a){e(this).css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity="'+s+')"')},duration:200},200)},function(){e(".ws_hovershow").animate({opacity:0},{step:function(s,a){e(this).css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity="'+s+')"')},duration:200},200)})}return t}}(jQuery),function(e){var s=e.fn.wowSlider;e.fn.wowSlider=function(a){function n(){var s=e(".ws_prev"),a=e(".ws_next");try{0==w?s.css("display","none"):s.css("display","block"),w==l-1?a.css("display","none"):a.css("display","block")}catch(e){}}var t,i=a.autoPlay,o=e(".ws_images ul")[0].children,l=o.length,r=null,c=!0;if(this.hasClass("delays")){a.autoPlay=!1;for(var d=new Array,u=0;u<l;u++)d[u]=e(o[u]).data("delay")||a.delay;!function e(){clearTimeout(r),r=setTimeout(function(){i&&t&&!c?t[0].wsStart():c=!1,e()},d[w]+a.duration)}()}var p=a.onBeforeStep,h=a.onStep;e.extend(a,{onBeforeStep:function(e,s){return!i&&t?(t[0].wsStop(),e):p?p.apply(this,[e,s]):e+1},onStep:function(s,a){h&&h.apply(this,[s,a]),w=s,f&&(f.hasClass("delays")&&v(),f.hasClass("stoptitles")&&e(".ws-title, .ws-title>").stop(1,1).stop(1,1),f.hasClass("hidecontrolls")&&n())}}),t=s.apply(this,[a]);var w=a.startSlide||0,f=this,m=(a.duration,!1);if(f.hasClass("hidecontrolls")&&n(),f.hasClass("fullscreen")){var y=function(e,s,a){e.addEventListener?e.addEventListener(s,a,!1):e.attachEvent("on"+s,a)},g=function(e,s,a){e.removeEventListener?e.removeEventListener(s,a):e.detachEvent("on"+s,a)},C=function(s){if(_){var n=a.width/(a.height+100),t=window.screen.availWidth;return e(s).css({width:t}),e(s).children().css({top:(window.screen.availHeight-t/n)/2}),""===x?s.requestFullScreen():s[x+"RequestFullScreen"]()}if(s){F&&S(F);var n=a.width/(a.height+100),t=e(window).width(),i=e("<div id='viewfullscreen'/>").css({position:"absolute",width:"100%",height:"100%","background-color":"#000",top:0,left:0,"z-index":9999999});i.appendTo("body"),A=e(s).children().css("max-width"),i.append(e("<div id='container'/>").css({"margin-top":(e(window).height()-t/n)/2}).append(e(s).children().css({width:t,"max-width":"95%"}))),function(){var s=e(".ws_shadow").css("background-image");s=s.replace("url(","").replace(")","").replace(/\/$/,""),e(".ws_shadow").css("background-image","none").append(e("<img src="+s+"></img>").css("width","100%"))}(),y(document.body,"keydown",b),e("body").focus(),m=!m}},S=function(s){if(_)return""===x?document.cancelFullScreen():document[x+"CancelFullScreen"]();s&&(function(){var s="url("+e(".ws_shadow>img").attr("src")+")";e(".ws_shadow").css("background-image",s).empty()}(),e("#viewfullscreen>#container").children().css({width:"","max-width":A}).appendTo(e(s)),e("#viewfullscreen").remove(),g(document.body,"keydown",b),F=0,m=!m)},b=function(e){27==e.keyCode&&k(!0)},k=function(s){if(s)S(document),f.css({top:0}),e("#ws_fullscreen").parent().append(f),e("#ws_fullscreen").remove();else{var a=e("<div id='ws_fullscreen'/>");a.appendTo(f.parent()),a.append(f),C(e("#ws_fullscreen")[0])}setTimeout(function(){e(".ws_thumbs").trigger("mousemove")},100)},_=0,x="";if(void 0!==document.cancelFullScreen)_=!0;else for(var E="webkit moz o ms khtml".split(" "),u=0,T=E.length;u<T;u++)if(x=E[u],void 0!==document[x+"CancelFullScreen"]){_=!0;break}var F=0,A=0;e(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){m=!m,e(""),m||k(!0)});var I=e('<a href="#" class="min ws_fullscreen" style="display: block;"></a>');I.click(function(){k(m)}),f.append(I)}if(f.hasClass("playpause")){var L=e('<a href="#" class="ws_playpause ws_hovershow" style="display: block;"></a>');i?L.addClass("pause"):L.addClass("play"),L.click(function(){(i=!i)?(t.hasClass("delays")||t[0].wsStart(),L.removeClass("play"),L.addClass("pause")):(t.hasClass("delays")||t[0].wsStop(),L.removeClass("pause"),L.addClass("play"))}),f.append(L)}if(f.hasClass("hidetitles")&&(e(".ws-title").addClass("ws_hovershow"),"Microsoft Internet Explorer"==navigator.appName)){var M=-1,z=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(z)&&(M=parseFloat(RegExp.$1)),-1!=M&&M<=8&&f.hover(function(){e(".ws_hovershow").animate({opacity:1},{step:function(s,a){e(this).css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity="'+s+')"')},duration:200},200)},function(){e(".ws_hovershow").animate({opacity:0},{step:function(s,a){e(this).css("-ms-filter",'"progid:DXImageTransform.Microsoft.Alpha(Opacity="'+s+')"')},duration:200},200)})}return t}}(jQuery);