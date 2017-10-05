"use strict";!function(){function e(e){if("false"===e)return!1;var t=e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);return t&&/youtube/g.test(t[3])?"youtube":!(!t||!/vimeo/g.test(t[3]))&&"vimeo"}function t(e){if("false"===e)return!1;var t=e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);return!!t&&t[6]}function i(e,t){return"https://img.youtube.com/vi/"+e+"/"+(t||"")+"default.jpg"}function a(e,t){var i=new XMLHttpRequest;i.open("GET","https://vimeo.com/api/v2/video/"+e+".json",!0),i.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var e=JSON.parse(this.responseText);t(e[0].thumbnail_large)}},i.send(),i=null}var s=function(){var e={};return function(t){var a=$.Deferred();return t in e?e[t]?a.resolve(e[t]):a.reject("Preview image not found."):$("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var i=this.src.split("/").pop();switch(i){case"maxresdefault.jpg":this.src=this.src.replace(i,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(i,"hqdefault.jpg");break;case"hqdefault.jpg":this.src=this.src.replace(i,"default.jpg");break;default:e[t]=null,a.reject("Preview image not found.")}}else a.resolve(e[t]=this.src)}).attr("src",i(t,"maxres")),a}}();$("html").hasClass("is-builder")||$(document).on("add.cards",function(i){if($(i.target).hasClass("carousel")){var o=$("html").hasClass("desktop");$(i.target).outerFind("[data-bg-video-slide]").each(function(){var i=t($(this).attr("data-bg-video-slide"));if(i){var r=$('<div class="mbr-background-video-preview"></div>').css({display:"none",backgroundSize:"cover",backgroundPosition:"center"});$(".container-slide",this).before(r);var c=e($(this).attr("data-bg-video-slide")),n=$(this).find(".mbr-overlay");"youtube"===c?(s(i).done(function(e){r.css("background-image",'url("'+e+'")').show()}),o&&$.fn.YTPlayer&&!$(this).find(".playerBox").length&&($(".container-slide",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:i,containment:"self",showControls:!1,mute:!0}),n.length&&$(".YTPOverlay",this).css({opacity:n.css("opacity"),backgroundColor:n.css("background-color")}),$(this).find(".image_wrapper img").css("opacity","0"),$(this).find(".image_wrapper .mbr-overlay").css("opacity","0"))):(a(i,function(e){r.css("background-image",'url("'+e+'")').show()}),o&&$.fn.vimeo_player&&!$(this).find(".playerBox").length&&($(".container-slide",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:i,containment:"self",showControls:!1,mute:!0}),n.length&&$(".vimeo_player_overlay",this).css({opacity:n.css("opacity"),backgroundColor:n.css("background-color")})))}}),$(i.target).find(".carousel-item iframe").css({transitionProperty:"opacity",transitionDuration:"1000ms"}),$(this).on("slide.bs.carousel","section.carousel",function(e){$(e.target).find(".carousel-item.active .mb_YTPlayer").each(function(){$(this).YTPPause()}),$(e.target).find(".carousel-item.active .vimeo_player").each(function(){$(this).v_pause()}),$(e.target).find(".carousel-item:not(.active) iframe").css("opacity",0)}),$(this).on("slid.bs.carousel","section.carousel",function(e){$(e.target).find(".carousel-item.active .mb_YTPlayer").each(function(){$(this).YTPPlay()}),$(e.target).find(".carousel-item.active .vimeo_player").each(function(){$(this).v_play()}),$(e.target).find(".carousel-item.active iframe").resize().css("opacity",1)})}})}();