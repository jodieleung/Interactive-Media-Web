$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "first"})
		// Line to 'description' element
		.lineTo(-770, 550, {name: "second"})
		// JL Line to third
		.lineTo(500, 1740, {name: "third"})
		//JL Arc to fourth
		.lineTo(500, 2240, {name: "fourth"})
		.arc(500, 2740, 500, -Math.PI/2, Math.PI/2, true)
		.arc(500, 3740, 500, -Math.PI/2, Math.PI/2, false)
		.lineTo(500, 4740, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "fourth"
		})
		// JL Line to fifth
		.lineTo(2500, 6740, {name: "fifth"})
		// JL Line to sixth
		.lineTo(4500, 6740, {name: "sixth"})
		// JL Line to seventh
		.lineTo(6000, 6740, {name: "seventh"})
		// JL Line to eighth
		.lineTo(7535, 6740, {name: "eighth"})
		// JL Line to ninth
		.lineTo(8500, 5940, {name: "ninth"})
		// JL Line to tenth
		.lineTo(9200, 4240, {name: "tenth"})
		// JL Line to eleventh
		.lineTo(9200, 2840, {name: "eleventh"})
		// JL Line to twelfth
		.lineTo(7500, 2840, {name: "twelfth"})
		// JL Line to thirteenth
		.lineTo(8800, 1540, {name: "thirteenth"})
		// JL Line to fourteenth
		.lineTo(7400, 1540, {name: "fourteenth"})
		// JL Line to fifteenth
		.lineTo(9200, 50, {name: "fifteenth"})
		// JL Line to sixteenth
		.lineTo(7200, 50, {name: "sixteenth"})
		// JL Line to seventeenth
		.lineTo(5200, 50, {name: "seventeenth"})
		// JL Line to eighteenth
		.lineTo(3200, 50, {name: "eighteenth"})

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
