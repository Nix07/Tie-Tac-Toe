$(document).ready(function() {
	var x = "x";
	var o = "o";
	var player1 = 0;
	var player2 = 0;
	var turns = 0;

	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	$('#board li').on('click', function() {

		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
			){
				alert('Winner: PLAYER1');
				player1++;
				$('#board li').text('+');
				$('#board li').removeClass('disabled');
				$('#board li').removeClass('o');
				$('#board li').removeClass('x');
			}
		else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') 
			){
				alert('Winner: PLAYER2');
				player2++;
				$('#board li').text('+');
				$('#board li').removeClass('disabled');
				$('#board li').removeClass('o');
				$('#board li').removeClass('x');
			}
		else if(turns == 9){
			alert('Tie Game');
				$('#board li').text('+');
				$('#board li').removeClass('disabled');
				$('#board li').removeClass('o');
				$('#board li').removeClass('x');
				turns = 0;
			}
		else if($(this).hasClass('disabled')) {
			//alert('This is already filled');
		}
		else if(turns%2 == 0 ) {
			turns++;
			$(this).text(o);
			$(this).addClass('disabled o');
			if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
			){
				 alert('Winner: PLAYER1');
				player1++;
				turns = 0;
			} 
		}
			else{
				turns++;
			$(this).text(x);
			$(this).addClass('disabled x');
			if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') 
			){
				 alert('Winner: PLAYER2');
				player2++;
				turns = 0;
			}
		}
	});
	$('#reset').click(function() {
		if(player1 > player2){
			$('#count').html("<h1>Player 1 : " + player1 + "</h1>" + "<h2>Player 2: " + player2 + "</h2>");
		}
		else if(player1 < player2){
			$('#count').html("<h2>Player 1 : " + player1 + "</h2>" + "<h1>Player 2: " + player2 + "</h1>");
		}
		else {
			$('#count').html("<h2>Player 1 : " + player1 + "</h2>" + "<h2>Player 2: " + player2 + "</h2>");
		}
		$("#board li").text("+");
		$("#board li").removeClass('disabled');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
		turns = 0;
	})
});
