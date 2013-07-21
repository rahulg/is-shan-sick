'use strict';

var colourThief = new ColourThief();

function areSimilar(a,b) {
	return Math.abs(a-b) < 5;
}

$(document).ready(function() {
	$('#shansProfilePic').load(function() {
		var theImage = $(this)[0];
		var colour = colourThief.getColour(theImage, 4);
		var bgColour, textColour;
		if (areSimilar(colour[0], 37) && areSimilar(colour[1], 82) && areSimilar(colour[2], 19)) {
			$('#isHe').html('Yes! Poor Shan!');
			bgColour = [130,30,20];
			textColour = [220,180,180];
		} else {
			$('#isHe').html('No, all is well.');
			bgColour = [20,70,100];
			textColour = [180,200,220];
		}
		$('body').animate({backgroundColor: 'rgb('+bgColour[0]+','+bgColour[1]+','+bgColour[2]+')'}, 'slow');
		$('body').animate({color: 'rgb('+textColour[0]+','+textColour[1]+','+textColour[2]+')'},'slow');
		$(this).animate({borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb('+textColour[0]+','+textColour[1]+','+textColour[2]+')'},'slow');
	});
});
