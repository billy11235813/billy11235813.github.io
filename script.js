var fadeInDuration = 2000; 
var a = 3; 
var b = 0; 
var c = 5; 
var i = 0; 
var turningSpeed = 100; 
var endingSpeed = 1000; 
var buttonIsStop = false;
var intervalId;
var intervalId2;
var rollSymbolNr1;
var rollSymbolNr2;
var rollSymbolNr3;
var rollsLeft = 2;
var win = 0; 
var bet = 1; 
var money = 100;
var slotSound;

function main(){
fadeBodyIn();
$("#bet1").text(bet);
$("#value1").text(200*bet);
$("#value2").text(100*bet);
$("#value3").text(50*bet);
$("#value4").text(30*bet);
$("#value5").text(20*bet);
$("#value6").text(8*bet);
$("#value7").text(5*bet);
$("#value8").text(3*bet);
$("#value9").text(2*bet);
$("#value10").text(bet);
$("#money1").text(money);
 $("#startButton").click(function(){
	    if((bet<=money&&buttonIsStop==false)||buttonIsStop){
	    slotSound = document.getElementById("myAudio"); 
		stopRolls();
		console.log(rollSymbolNr1);
		console.log(rollSymbolNr2);
		console.log(rollSymbolNr3);
		getWin();
		console.log(win);
		}		
    });
	
$("#buttonMore").click(function(){
		if(bet<=money){
			bet++;
			$("#bet1").text(bet);
			$("#value1").text(200*bet);
			$("#value2").text(100*bet);
			$("#value3").text(50*bet);
			$("#value4").text(30*bet);
			$("#value5").text(20*bet);
			$("#value6").text(8*bet);
			$("#value7").text(5*bet);
			$("#value8").text(3*bet);
			$("#value9").text(2*bet);
			$("#value10").text(bet);
			}
    });

$("#buttonLess").click(function(){
	    if(bet>=2){
			bet--; 
			$("#bet1").text(bet);
			$("#value1").text(200*bet);
			$("#value2").text(100*bet);
			$("#value3").text(50*bet);
			$("#value4").text(30*bet);
			$("#value5").text(20*bet);
			$("#value6").text(8*bet);
			$("#value7").text(5*bet);
			$("#value8").text(3*bet);
			$("#value9").text(2*bet);
			$("#value10").text(bet);
		}
    });
}




function fadeBodyIn(){
	$("#body").hide();
	$("#body").css("visibility","visible");
	$("#background").css("background-image","url('background1.jpg')");
	$("#background").css("border","1px solid black");
	$("#body").fadeIn(fadeInDuration);
}

function roll(){
	console.log("Roll"); 
	rollSymbolNr1 = Math.round(Math.random()*7);
	
	rollSymbolNr2 = Math.round(Math.random()*7);
	
	rollSymbolNr3 = Math.round(Math.random()*7);
	
}


function getWin(){
	win=0;
	
	if(rollSymbolNr1%8 == rollSymbolNr2%8 || rollSymbolNr1 == rollSymbolNr3%8){
		switch(rollSymbolNr1%8){
			case 0: win = 1;
					break;
			case 1: win = 1;
					break;
			case 2: win = 1;
					break;
			case 3: win = 1;
					break;
			case 4: win = 2;
					break;
			case 5: win = 3;	
					break;
			case 6: win = 5;
					break;
			case 7: win = 8;	
					break;
		}
	}
	
	if(rollSymbolNr2%8 == rollSymbolNr3%8){
		switch(rollSymbolNr2%8){
			case 0: win = 1;
					break;
			case 1: win = 1;
					break;
			case 2: win = 1;
					break;
			case 3: win = 1;
					break;
			case 4: win = 2;
					break;
			case 5: win = 3;	
					break;
			case 6: win = 5;
					break;
			case 7: win = 8;	
					break;
		}
	}
	
	if(rollSymbolNr1%8 == rollSymbolNr2%8 && rollSymbolNr1%8 == rollSymbolNr3%8){
		switch(rollSymbolNr1%8){
			case 0: win = 20;
					break;
			case 1: win = 20;	
					break;
			case 2: win = 20;
					break;
			case 3: win = 20;	
					break;
			case 4: win = 30;
					break;
			case 5: win = 50;	
					break;
			case 6: win = 100;
					break;
			case 7: win = 200;	
					break;
		}
	}
}



//These are all the animations

function play(){
	slotSound.play();
	console.log("hallo");
}

function stopRolls(){
	i++;
		if(i==1){
			clearInterval(intervalId);
			intervalId = setInterval(play3,turningSpeed);
			console.log("Win="+win);
			play();
			intervalId2 = setInterval(play,37300);
			money-=bet;
			$("#money1").text(money);
			$("#buttonMore").prop('disabled','true'); 
			$("#buttonLess").prop('disabled','true');
		}
		if(i==2){
			$("#startButton").prop('disabled','true');  
			clearInterval(intervalId);
			intervalId = setInterval(play2,turningSpeed);
			$("#startButton").text("Play");
			buttonIsStop = false; 
			i=0; 
			roll(); 
			/*setTimeout(end, endingSpeed);
			setTimeout(end, endingSpeed*1.5);
			setTimeout(end, endingSpeed*2);
			setTimeout(end, endingSpeed*2.5);
			setTimeout(end, endingSpeed*3);
			setTimeout(end, endingSpeed*3.5);*/
			
			
			setTimeout(endRolling1, 250);
			setTimeout(endRolling1, 500);
			setTimeout(endRolling1, 750);
			setTimeout(endRolling1, 1000);
			setTimeout(endRolling1, 1250);
			setTimeout(endRolling1, 1500);
			setTimeout(endRolling1, 1750);
			setTimeout(clearInterval1, 1751);
			setTimeout(clearInterval1, 3450);
			
		}
}

function clearInterval1(){
	clearInterval(intervalId);
	if(rollsLeft==2){
	intervalId = setInterval(play1,turningSpeed);
	setTimeout(endRolling2, 250);
	setTimeout(endRolling2, 500);
	setTimeout(endRolling2, 750);
	setTimeout(endRolling2, 1000);
	setTimeout(endRolling2, 1250);
	setTimeout(endRolling2, 1500);
	setTimeout(endRolling2, 1750);
	rollsLeft--;
	}
	else{//rollsLeft==1
		setTimeout(endRolling3, 250);
		setTimeout(endRolling3, 500);
		setTimeout(endRolling3, 750);
		setTimeout(endRolling3, 1000);
		setTimeout(endRolling3, 1250);
		setTimeout(endRolling3, 1500);
		setTimeout(endRolling3, 1750);
		setTimeout(showWin,1800)
		rollsLeft=2; 
	}
}

function play3(){
	if(buttonIsStop==false){
		$("#startButton").text("Stop");
		$("#win1").text("");
		buttonIsStop = true; 
	}	
	
	a++;
	switch(a%8){
		case 0: $("#rollNr1").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr1").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr1").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr1").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr1").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr1").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr1").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr1").css("background-image", "url(seven.png)");	
					break;
	}
	
	b++;
	switch(b%8){
		case 0: $("#rollNr2").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr2").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr2").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr2").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr2").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr2").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr2").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr2").css("background-image", "url(seven.png)");	
					break;
	}
	
	c++;
	switch(c%8){
		case 0: $("#rollNr3").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr3").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr3").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr3").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr3").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr3").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr3").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr3").css("background-image", "url(seven.png)");	
					break;
	}
}

function play2(){	
	
	b++;
	switch(b%8){
		case 0: $("#rollNr2").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr2").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr2").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr2").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr2").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr2").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr2").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr2").css("background-image", "url(seven.png)");	
					break;
	}
	
	
	c++;
	switch(c%8){
		case 0: $("#rollNr3").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr3").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr3").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr3").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr3").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr3").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr3").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr3").css("background-image", "url(seven.png)");	
					break;
	}
}

function play1(){	
	
	c++;
	switch(c%8){
		case 0: $("#rollNr3").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr3").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr3").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr3").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr3").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr3").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr3").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr3").css("background-image", "url(seven.png)");	
					break;
	}
}


function endRolling1(){
	if(a%8!= rollSymbolNr1){
	a++;
	switch(a%8){
		case 0: $("#rollNr1").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr1").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr1").css("background-image", "url(cherry.png)");
					break;
		case 3: $("#rollNr1").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr1").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr1").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr1").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr1").css("background-image", "url(seven.png)");	
					break;
	}
	}
	
}

function endRolling2(){
	if(b%8!= rollSymbolNr2){
	b++;
	switch(b%8){
		case 0: $("#rollNr2").css("background-image", "url(bell.png)");
					break;
		case 1: $("#rollNr2").css("background-image", "url(grapes.png)");	
					break;
		case 2: $("#rollNr2").css("background-image", "url(cherry.png)");
					break
		case 3: $("#rollNr2").css("background-image", "url(gold.png)");	
					break;
		case 4: $("#rollNr2").css("background-image", "url(bar1.png)");
					break;
		case 5: $("#rollNr2").css("background-image", "url(bar2.png)");	
					break;
		case 6: $("#rollNr2").css("background-image", "url(bar3.png)");
					break;
		case 7: $("#rollNr2").css("background-image", "url(seven.png)");	
					break;
	}
	}
	
}

function endRolling3(){
	if(c%8!= rollSymbolNr3){
		c++;
		switch(c%8){
			case 0: $("#rollNr3").css("background-image", "url(bell.png)");
					break;
			case 1: $("#rollNr3").css("background-image", "url(grapes.png)");	
					break;
			case 2: $("#rollNr3").css("background-image", "url(cherry.png)");
					break;
			case 3: $("#rollNr3").css("background-image", "url(gold.png)");	
					break;
			case 4: $("#rollNr3").css("background-image", "url(bar1.png)");
					break;
			case 5: $("#rollNr3").css("background-image", "url(bar2.png)");	
					break;
			case 6: $("#rollNr3").css("background-image", "url(bar3.png)");
					break;
			case 7: $("#rollNr3").css("background-image", "url(seven.png)");	
					break;
		}
	}
	else{
		
	}
	
}
 

function showWin(){
	win = win*bet;
	clearInterval(intervalId2);
	$("#win1").text(win);
	money+=win;
	$("#money1").text(money);
	slotSound.pause();
	slotSound.currentTime = 0;
	$("#startButton").prop('disabled',null); 
	$("#buttonMore").prop('disabled',null);  
	$("#buttonLess").prop('disabled',null); 
}
 $(document).ready(main);