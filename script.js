// JavaScript Document
$ ( document ) .ready(function() {

	var magic8Ball = {};

	magic8Ball.listOfAnswers = ["Not a chance", "You better believe it", "Dunno – try back later", "The good news is – you look fantastic!"];

	magic8Ball.askQuestion = function(question) {
		var randomNumber = Math.random();
    // start with a random number between 0 and 1 (randomNumber)
    
		var randomNumberArray = randomNumber * this.listOfAnswers.length;
    //Then you make a random number between 0 and the length of your array (randomArrayNumber)
    
		var randomIndex = Math.floor(randomNumberArray);
    //Then you round that number down (randomIndex)
    
		var answer = this.listOfAnswers[randomIndex];
    //use that rounded number to select an item from the answers array
    
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    
		$("#8ball").effect( "shake" );
    
		$("#answer").text( answer );
    
		$("#answer").fadeIn(4000);
    
	};
  
	var onClick = function () {
		$("#answer").hide();
    
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    
    //wait half a second before showing prompt
	setTimeout (
		function() {
			//show prompt
			var question = prompt ("Ask a yes or no question");
			magic8Ball.askQuestion(question)
		}, 500); 
	};

	$("#questionButton").click( onClick );	

});