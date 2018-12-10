	var temp = document.querySelector('.time');
 	var button = document.querySelector("button");
 	var words = document.querySelector(".words");
 	var timerDiv = document.querySelector(".time");
	var scoreDiv = document.querySelector(".score");
	var child = document.getElementById('wordsDiv'); 
 	var points = 0;
 	var spans;
 	var typed;
	 var seconds = 3000;
	 var speed = 10;
	 var ptop =20;

 	function countdown() {
 		points = 0;
 		var timer = setInterval(function(){
 			button.disabled = true;
    		seconds--;
				temp.innerHTML = seconds;
				var x = Math.floor(Math.random() * (700 - 30)) + 30;
				
			ptop = ptop + speed;
			child.style.paddingTop = ptop + 'px';
			child.style.paddingLeft = x +'px;'
			
			console.log(x);
			// console.log(parent.style.max-height);
			
			if(ptop == 500){
				speed = speed * (-1);
			}
			
			if(ptop == 20){
				speed = speed * (-1);
			}
			
				// xx +=x;
				// child.style.top = xx + 'px';
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
    			scoreDiv.innerHTML = "0";
    			words.innerHTML = "";
    			button.disabled = false;
    			clearInterval(timer);
    			seconds = 3000;
    			timerDiv.innerHTML = "3000";
    			button.disabled = false;	
    		}
 		}, 20);
  	}

  	function random() {
  		words.innerHTML = "";
  		var random = Math.floor(Math.random() * (13 - 0 + 1)) + 0;
  		var wordArray = list[random].split("");
  		for (var i = 0; i < wordArray.length; i++) {
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}


		const list = ['STEPHEN','CURRY','KEVIN','DURANT','KLAY','THOMPSON','DRAYMOND','GREEN','DEMARCUS','COUSINS','ANDRE','IGUODALA','SHAUN','LIVINGSTON',
									'QUINN','COOK','JORDAN','BELL','ALFONZO','MCKINNIE','KEVON','LOONEY','DAMIAN','JONES','DAMION','LEE'];

  	button.addEventListener("click", function(e){
  		countdown();
  		random();
  		button.disabled = true;	
  	});


  	function typing(e) {
  			typed = String.fromCharCode(e.which);
  			for (var i = 0; i < spans.length; i++) {
  				if (spans[i].innerHTML === typed) { 
  					if (spans[i].classList.contains("bg")) { 
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
  						spans[i].classList.add("bg");
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) { 
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) {
  					points++; 
  					scoreDiv.innerHTML = points;
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words"; 
  						random(); 
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}

		document.addEventListener("keydown", typing, false);
		
