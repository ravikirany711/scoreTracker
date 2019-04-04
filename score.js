var p1=document.getElementById('p1')
var p2=document.getElementById('p2')
var reset=document.getElementById('reset')
var p1_display=document.getElementById('player1')
var p2_display=document.getElementById('player2')
var input=document.querySelector('input')
var p=document.querySelector('p')
var winningScoreDisplay=document.querySelector('p span')
var p1Score=0
var p2Score=0
var gameover=false
var winningScore=5

p1.addEventListener('click',function(){
	if(!gameover){
		p1Score++
		if (p1Score===winningScore) {
			p1_display.classList.add('winner')

		

			console.log('gameover')
			gameover=true
		}
		document.getElementById('player1').textContent=p1Score
	}
	
	})

p2.addEventListener('click',function(){
	if(!gameover){
		p2Score++
		if (p2Score===winningScore) {
			p2_display.classList.add('winner')

			console.log('gameover')
			gameover=true
		}
	
	document.getElementById('player2').textContent=p2Score
}

})


function reset_ing(){
	document.getElementById('player1').textContent=0
	document.getElementById('player2').textContent=0
	p1_display.classList.remove('winner')
	p2_display.classList.remove('winner')

	p1Score=0
	p2Score=0
	gameover=false
}


reset.addEventListener('click',function(){
   reset_ing();
	
})

input.addEventListener('change',function(){
	winningScoreDisplay.textContent=this.value
	winningScore=Number(this.value)
	reset_ing()

})