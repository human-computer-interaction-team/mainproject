$(function() {

	$("#hot-item li").mouseenter(function() {
		$(this).find(".subject-item-title").css({bottom:"130px"});
		$(this).find(".subject-item-title").animate({bottom:"66px"},300);
	});

	$("#hot-item li").mouseenter(function() {
		$(this).find(".subject-item-text").css({top:"130px"});
		$(this).find(".subject-item-text").animate({top:"85px"},300);
	});

	$("#hot-item li").mouseenter(function() {
		$(this).find(".subject-item-rush").css({right:"-100px"});
		$(this).find(".subject-item-rush").animate({right:"10px"},300);
	});

	/*关于中青旅*/
	$('.aside-box-about li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	/*桂林酒店*/
	$('#hotelLevel li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	/*包车旅游*/
	$('.car-nav-list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});


	$("#hotelFive").click(function() {
		$("#modHotelFive").css({"display": "block"});
		$("#modHotelFour").css({"display": "none"});
		$("#modHotelThree").css({"display": "none"});
		$("#modHotelOther").css({"display": "none"});
	});
	$("#hotelFour").click(function() {
		$("#modHotelFive").css({"display": "none"});
		$("#modHotelFour").css({"display": "block"});
		$("#modHotelThree").css({"display": "none"});
		$("#modHotelOther").css({"display": "none"});
	});
	$("#hotelThree").click(function() {
		$("#modHotelFive").css({"display": "none"});
		$("#modHotelFour").css({"display": "none"});
		$("#modHotelThree").css({"display": "block"});
		$("#modHotelOther").css({"display": "none"});
	});
	$("#hotelOther").click(function() {
		$("#modHotelFive").css({"display": "none"});
		$("#modHotelFour").css({"display": "none"});
		$("#modHotelThree").css({"display": "none"});
		$("#modHotelOther").css({"display": "block"});
	});

	/**/
	$('.nav-scenic li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$("#scenic1").click(function() {

		$("#modHitScenicOne").css({"display": "block"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic2").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "block"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic3").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "block"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic4").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "block"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic5").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "block"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic6").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "block"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic7").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "block"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic8").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "block"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic9").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "block"});
		$("#modHitScenicTen").css({"display": "none"});
	});
	$("#scenic10").click(function() {
		$("#modHitScenicOne").css({"display": "none"});
		$("#modHitScenicTwo").css({"display": "none"});
		$("#modHitScenicThree").css({"display": "none"});
		$("#modHitScenicFour").css({"display": "none"});
		$("#modHitScenicFive").css({"display": "none"});
		$("#modHitScenicSix").css({"display": "none"});
		$("#modHitScenicSeven").css({"display": "none"});
		$("#modHitScenicEight").css({"display": "none"});
		$("#modHitScenicNine").css({"display": "none"});
		$("#modHitScenicTen").css({"display": "block"});
	});

	$("#aboutTextClick1").click(function() {
		$("#aboutText1").css({"display": "block"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick2").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "block"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick3").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "block"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick4").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "block"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick5").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "block"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick6").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "block"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick7").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "block"});
		$("#aboutText8").css({"display": "none"});
	});
	$("#aboutTextClick8").click(function() {
		$("#aboutText1").css({"display": "none"});
		$("#aboutText2").css({"display": "none"});
		$("#aboutText3").css({"display": "none"});
		$("#aboutText4").css({"display": "none"});
		$("#aboutText5").css({"display": "none"});
		$("#aboutText6").css({"display": "none"});
		$("#aboutText7").css({"display": "none"});
		$("#aboutText8").css({"display": "block"});
	});

});