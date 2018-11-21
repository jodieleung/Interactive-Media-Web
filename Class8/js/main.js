
// $speed = 500

// $("#section1").click(function(){
// 	$(window).scrollTo("#section2",$speed);
// })

// $("#section2").click(function(){
// 	$(window).scrollTo("#section3",$speed);
// })

// $("#section3").click(function(){
// 	$(window).scrollTo("#section1",$speed);
// })

$apiURL="https://api.openweathermap.org/data/2.5/weather?q=TORONTO,CA&appid=a42a9f3570d4118bff4f6f139705b57e"



$.ajax({
	url: $apiURL,
	success: function(cData){
		celsius = (cData.main.temp - 273.15).toFixed(2);
		$("#temp").html("It is currently " + celsius + "&#8451;")
		visbility = (cData.visibility / 100000)
		$("#visbility").css("opacity", visibility)
	}

})


