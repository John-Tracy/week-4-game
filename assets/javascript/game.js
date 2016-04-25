// array of objects which holds each character, names, their hit points, attack points and counter attack points.
// starwars characters Jar Jar Binks, Darth vader, Han Solo, Luke Skywalker.
var gameObj = { 

			charArray:	[	{	name: 'Jar Jar Binks',
						health: '',
						attack: 55,
						counterAttack: 0
						},	
			
						{	name: 'Darth Vader',
						health: 0,
						attack: 0,
						counterAttack: 0
						},
					
						{	name: 'Han Solo',
						health: 0,
						attack: 00,
						counterAttack:0
						},

						{	name: 'Luke Skywalker',
						health: 0,
						attack: 0,
						counterAttack: 0
						}

			],





};
$(document).ready(function() {

	console.log(gameObj.charArray[2].name);
	console.log(gameObj.charArray[0].attack)
	$('#apic').on('click', function() {

		var example = $('#apic');
		var ex2= $('#apic2');
		var ex3= $('#apic3');
		$('#userAttack').append(example);
		$('#defenderArea').append(ex2);
		$('#defenderArea').append(ex3);

		$('#calmArea').empty();


	});

});

