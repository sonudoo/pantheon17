"use strict";function validate1(){var e=0,t=document.getElementById("name").value,r=document.getElementById("email").value,a=document.getElementById("phoneNumber").value,n=document.getElementById("gender").value,o=document.getElementById("collegeName").value,s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return""==t?(e=1,$("#name").css({border:"2px solid red",opacity:"0.6"})):$("#name").css({border:""}),""==r||0==s.test(r)?(e=1,$("#email").css({border:"2px solid red",opacity:"0.6"})):$("#email").css("border",""),"Male"!=n&&"Female"!=n&&"Others"!=n?(e=1,$("#gender").css({border:"2px solid red",opacity:"0.6"})):$("#gender").css("border",""),""==a||isNaN(a)||10!=a.length?(e=1,$("#phoneNumber").css({border:"2px solid red",opacity:"0.6"})):$("#phoneNumber").css("border",""),""==o?(e=1,$("#collegeName").css({border:"2px solid red",opacity:"0.6"})):$("#collegeName").css("border",""),0==e&&$("#cont1").click(),!1}function validate2(){var e=0,t=document.getElementById("answer1").value,r=document.getElementById("answer2").value,a=document.getElementById("answer3").value;""==t?(e=1,$("#answer1").css({border:"2px solid red",opacity:"0.6"})):$("#answer1").css({border:""}),""==r?(e=1,$("#answer2").css({border:"2px solid red",opacity:"0.6"})):$("#answer2").css({border:""}),""==a?(e=1,$("#answer3").css({border:"2px solid red",opacity:"0.6"})):$("#answer3").css({border:""}),0==e&&$("#cont2").click()}function validateFinal(){var e=0,t=document.getElementById("name").value,r=document.getElementById("email").value,a=document.getElementById("phoneNumber").value,n=document.getElementById("gender").value,o=document.getElementById("collegeName").value,s=document.getElementById("answer1").value,l=document.getElementById("answer2").value,i=document.getElementById("answer3").value,c=document.getElementById("answer4").value,d=document.getElementById("answer5").value;if(""==c?(e=1,$("#answer4").css({border:"2px solid red",opacity:"0.6"})):$("#answer4").css({border:""}),""==d?(e=1,$("#answer5").css({border:"2px solid red",opacity:"0.6"})):$("#answer5").css({border:""}),0==e){$("#submitButton").html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Submitting..');var u={name:t,email:r,phoneNumber:a,gender:n,collegeName:o,answer1:s,answer2:l,answer3:i,answer4:c,answer5:d};$.post("https://www.pantheon17.in/api/saps/register",u).done(function(e){if(e.success){var t=e.id;document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("phoneNumber").value="",document.getElementById("collegeName").value="",document.getElementById("answer1").value="",document.getElementById("answer2").value="",document.getElementById("answer3").value="",document.getElementById("answer4").value="",document.getElementById("answer5").value="",$("#cont3").click(),$("#regSuccessMsg").html('<div class="text-area-label" style="text-transform: none; font-size: 14px;">Thank you! We have received your application.<br><br> Your SAP ID is: <b>'+t+"</b>.<br><br> A confirmation mail has also been sent to <b>"+r+'</b>. <br><br>Our team will be contacting you soon regarding your application.</div><br><br><div class="btn btn-success" style="font-size:12px;padding:3%;margin-left:-10px;" onclick="window.location.href=\'https://www.pantheon17.in/\'">Back to Home</div><br>')}else $("#submitButton").html("Submit My Application"),$("#myModal").modal("show")})}}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$("#register").click(),$("input").focus(function(){$(this).css("opacity","0.6")}),$("input,select,textarea").focusout(function(){""==$(this).val()?$(this).css("opacity","0.6"):$(this).css("opacity","0.8")}),$(document).ready(function(){$("input,select,textarea").tooltip({trigger:"focus"})}),$("#email").tooltip({trigger:"focus",title:"Please enter a valid Email"}),$("#name").tooltip({trigger:"focus",title:"Name is required"}),$("#gender").tooltip({trigger:"focus",title:"Please select your Gender"}),$("#phoneNumber").tooltip({trigger:"focus",title:"Please enter a valid phone number without +91"}),$("#collegeName").tooltip({trigger:"focus",title:"Please enter your School/College name"}),$("#answer1").tooltip({trigger:"focus",title:"Max. 500 characters"}),$("#answer2").tooltip({trigger:"focus",title:"Max. 500 characters"}),$("#answer3").tooltip({trigger:"focus",title:"Max. 500 characters"}),$("#answer4").tooltip({trigger:"focus",title:"Max. 500 characters"}),$("#answer5").tooltip({trigger:"focus",title:"Max. 500 characters"});