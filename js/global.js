$('#converter').submit(function(event) {
	event.preventDefault();

	var number = $('#inuptNumber').val()

	alert(numberToWord(number));
});