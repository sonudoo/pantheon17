"use strict";$(function(){$.get("https://pantheon17.in/api/announcements/getAnnouncements",function(n){for(var t=0;t<n.length;t++)$(".list-group").append('\n        <h4 align="center">'+n[t].title+"</h4>\n        <p>"+n[t].message+'</p>\n        <h6 align="right">'+moment(n[t].date).format("Do MMM, h:mm a")+"</h6>\n        <hr>\n      ")})});