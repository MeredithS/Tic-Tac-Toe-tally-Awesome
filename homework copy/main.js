console.log('linked');
var resetButton = document.getElementById('reset');
var exTurn = document.getElementById('ex-turn');
var ohTurn = document.getElementById('oh-turn');



var i=0
var play = function(){
	var target = event.target;
	if(i%2===0){
		exTurn.classList.add('hidden');
		ohTurn.classList.remove('hidden');
		if(target.classList.contains('ex')){
				alert('X has already played this square');
				console.log(target);
			}else if(target.classList.contains('oh')){
				alert('O has already played this square');
				console.log(target);
		}else if(!target.classList.contains('oh')){
				target.classList.add('ex');
				i++;
			}
		}else if(i%2!==0){
			ohTurn.classList.add('hidden');
			exTurn.classList.remove('hidden');
			if(target.classList.contains('ex')){
				alert('X has already played this square');
				console.log(target);
			}else if(target.classList.contains('oh')){
				alert('O has already played this square');
				console.log(target);
			}else if(!target.classList.contains('ex')){
				target.classList.add('oh');
				i++
			}
		}
	};


document.addEventListener('click', play);

var reset = function(){
	location.reload(true);

}

resetButton.addEventListener('click', reset);

