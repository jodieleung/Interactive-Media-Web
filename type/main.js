

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

var mX, mY;

$(document).ready (function() {
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).mousemove(function(e){
	mX = e.clientX;
	mY = e.clientY;
})

    $(window).keydown(function(){			//SPACEBAR
        if (event.keyCode == 32){
        $('img[src="gifs/kick.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('bassbeat').play();
    	}
    });

//808s Z - M ///

    $(window).keydown(function(){			

        if (event.keyCode == 90){			//Z
        $('img[src="gifs/waves.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('tom1').play();
    	}

    });

    $(window).keydown(function(){			//X
        if (event.keyCode == 88){
        $('img[src="gifs/semicircle.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('tom2').play();
    	}
    });

    $(window).keydown(function(){			//C
        if (event.keyCode == 67){
        $('img[src="gifs/octagon.gif"]')
        	.addClass("octagon")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('closedhihat').play();
    	}
    });

    $(window).keydown(function(){			//V
        if (event.keyCode == 86){
        $('img[src="gifs/rectoutlines.gif"]')
        	.addClass("image")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('openhihat').play();
    	}
    });

    $(window).keydown(function(){			//B
        if (event.keyCode == 66){
        $('img[src="gifs/spots.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('cowbell').play();
    	}
    });

    $(window).keydown(function(){			//N
        if (event.keyCode == 78){
        $('img[src="gifs/shapes1.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY   
        	})
            .show();
        document.getElementById('rim').play();
    	}
    });


    $(window).keydown(function(){			//M
        if (event.keyCode == 77){
        $('img[src="gifs/clap.gif"]')
        	.addClass("imagemultiply")
        	.css({
        		"left":mX,
        		"top":mY
        	})
        	.show();
        document.getElementById('clap').play();
    	}
    });
