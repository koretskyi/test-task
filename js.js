var params = {

	lines:[

		{

			background: 	'#00F',
			updateTime: 	1000,



				elements:[

				{

					background: '#00F', 
					width: 		25

				},



				{
					background: '#00F',
					width: 		50


				},


				{
					background: '#00F',
					width: 25

				},

				]

		}


	]

}


var myElements 		= params.lines;
var myWidthScreen 	= screen.width;
var myHeightScreen 	= screen.height/myElements.length;


for (var i = 0; i < myElements.length; i++) {
	var myDiv = "<div style = 'background: "+myElements[i].background+"; width:"+myWidthScreen+"px; height:"+myHeightScreen+"px'>";
	
	
	for (var z = 0; z < myElements[i].elements.length; z++) {
		var tmparr = myElements[i].elements;
		var myHeight = myHeightScreen/myElements[i].elements.length;
		var tmpDiv = "<div class = 'innerBlock' style = 'background: "+tmparr[z].background+"; width:"+tmparr[z].width+"%; height:"+myHeight+"px'> </div>";
		console.log(tmpDiv);
		myDiv += tmpDiv;
		
	}
	var endDiv = "</div>";
	myDiv += endDiv;
	document.getElementsByTagName('body')[0].innerHTML+=myDiv;
}



window.onload = function () {
var getNum = function() {return Math.floor(Math.random() * 256)};
var myInnerBlock = document.getElementsByClassName('innerBlock');
setInterval(function() {
	for(i = 0; i < myInnerBlock.length; i++){
		//document.getElementsByClassName('innerBlock')
	document.getElementsByClassName('innerBlock')[i].style.backgroundColor = 'rgb(' + getNum() + ',' + getNum() + ',' + getNum() + ')';
	}
}, 1000);}

