// array of objects which holds each character, names, their hit points, attack points and counter attack points.
// starwars characters Jar Jar Binks, Darth vader, Han Solo, Luke Skywalker.
var gameObj = { 
			// array of objects containing each characters info and neccessary jQuery for specific game play.
			charArray:	[	

					{	
						name: 'Jar Jar Binks',
						health: 200,
						attack: 5,
						counter: 10,
						// holds html element in a variable for use with jQuery.
						userPick: $('#jarDiv'),
						enemyDarth: $('#darthDiv'),
						enemyHan: $('#soloDiv'),
						enemyLuke: $('#lukeDiv'),

						whenClicked: function() {
					// sets up the game to be played with this character
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyLuke, this.enemyHan);
							$('#calmArea').empty();
							},
					//  the click event on darth vader
						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);
							},
					// the click event on han solo
						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);
							},
					// the click event on luke skywalker
						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
							}
						},	
			
						{	
						name: 'Darth Vader',
						health: 200,
						attack: 4,
						counter: 12,
						// holds html element in a variable for use with jQuery.
						userPick: $('#darthDiv'),
						enemyJar: $('#jarDiv'),
						enemyHan: $('#soloDiv'),
						enemyLuke: $('#lukeDiv'),

						whenClicked: function() {
						// sets up the game to be played with this character
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyJar, this.enemyLuke, this.enemyHan);
							$('#calmArea').empty();
							},
					// jar jar click event during gameplay as darth vader		
						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);
							},
					// han solo click event during gameplay as darth vader
						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);
							},
					// luke click event during gameplay as darth vader.
						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
						}
							},
						
						{	
						name: 'Han Solo',
						health: 200,
						attack: 3,
						counter: 13,
						// holds html element in a variable for use with jQuery.
						userPick: $('#soloDiv'),
						enemyJar: $('#jarDiv'),
						enemyDarth: $('#darthDiv'),
						enemyLuke: $('#lukeDiv'),					
					// sets up the game to be played with this character
						whenClicked: function() {
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyLuke, this.enemyJar);
							$('#calmArea').empty();
							},
					// click event for darth when playing as han solo
						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);
							},
					// click event for jar jar when playing as han solo
						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);
							},
					// event for luke when playing as han
						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
						}
						},

						{	
						name: 'Luke Skywalker',
						health: 200,
						attack: 2,
						counter: 14,
					// holds html element in a variable for use with jQuery
						userPick: $('#lukeDiv'),
						enemyJar: $('#jarDiv'),
						enemyHan: $('#soloDiv'),
						enemyDarth: $('#darthDiv'),						
					// sets up the game to be played with this character
						whenClicked: function() {
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyHan, this.enemyJar);
							$('#calmArea').empty();	
							},
					// click event for darth when playing as luke.
						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);
							},
					// click event for jar jar when playing as luke
						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);
							},
					// click event for han solo when playing as luke.
						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);
						}
					}					
			],
};

// all processes to be executed on DOM ready.===============================

$(document).ready(function() {

// all variables and initial jQuery defined when DOM is ready ===============================================================
		$("#jarhp").html('HP: ' + gameObj.charArray[0].health);
		$("#darthhp").html('HP: ' + gameObj.charArray[1].health);
		$("#hanhp").html('HP: ' + gameObj.charArray[2].health);
		$("#lukehp").html('HP: ' + gameObj.charArray[3].health);
		var darth = true;
		var jarjar= true;
		var solo = true;
		var luke = true;
		var timer;
		var greyBar = $('#transparent');



$('#resetGame').on('click', function() {
	
	$('#calmArea').append(greyBar);
	// puts all character Divs where they started.
	var darthRe = $('#darthDiv');
	var lukeRe = $('#lukeDiv');
	var soloRe = $('#soloDiv');
	var jarRe = $('#jarDiv');
	$('#transparent').append(darthRe, lukeRe, soloRe, jarRe);

 //resets all hit points and attacks to default.
	gameObj.charArray[0].health = 200;
	gameObj.charArray[1].health = 200;
	gameObj.charArray[2].health = 200;
	gameObj.charArray[3].health = 200;

	gameObj.charArray[0].attack = 5;
	gameObj.charArray[1].attack = 4;
	gameObj.charArray[2].attack = 3;
	gameObj.charArray[3].attack = 2;

// displays default hp in each div via HTML
	$("#jarhp").html('HP: ' + gameObj.charArray[0].health);
	$("#darthhp").html('HP: ' + gameObj.charArray[1].health);
	$("#hanhp").html('HP: ' + gameObj.charArray[2].health);
	$("#lukehp").html('HP: ' + gameObj.charArray[3].health);

		darth = true;
		jarjar= true;
		solo = true;
		luke = true;
		clearInterval(timer);

});


 


// All functions for game play, (the math) if user chooses Jar Jar as thier choice. ==========================================================
		// only if user is jarjar vs. darth vader
	var jarVSdarth = function() {
				
				// taking away user's attack from enemy's health.
				 gameObj.charArray[1].health -= gameObj.charArray[0].attack;
				// updating html for the enemy's health points.
				 $('#darthhp').html('HP: ' + gameObj.charArray[1].health);
				// minus enemy's counter attack from user's health.
				 gameObj.charArray[0].health -= gameObj.charArray[1].counter;
				// updating user's health point html.
				 $('#jarhp').html('HP ' + gameObj.charArray[0].health);
				 // incrementing the user's attack by a pre-decided amount
				 gameObj.charArray[0].attack += 4;
				 // if the user loses.
				 if (gameObj.charArray[0].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }
				 // if the user defeats the enemy.
				 else if (gameObj.charArray[1].health <= 0){
				 	alert('You have defeated Darth Vader!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			// user is jar jar against han solo
			var jarVSsolo = function() {

				 gameObj.charArray[2].health -= gameObj.charArray[0].attack;

				 $('#hanhp').html('HP: ' + gameObj.charArray[2].health);

				 gameObj.charArray[0].health -= gameObj.charArray[2].counter;

				 $('#jarhp').html('HP ' + gameObj.charArray[0].health);

				 gameObj.charArray[0].attack += 4;

				 if (gameObj.charArray[0].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[2].health <= 0){
				 	alert('You have defeated Han Solo!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			var jarVSluke = function() {

				 gameObj.charArray[3].health -= gameObj.charArray[0].attack;

				 $('#lukehp').html('HP: ' + gameObj.charArray[3].health);

				 gameObj.charArray[0].health -= gameObj.charArray[3].counter;

				 $('#jarhp').html('HP ' + gameObj.charArray[0].health);

				 gameObj.charArray[0].attack += 5;

				 if (gameObj.charArray[0].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[3].health <= 0){
				 	alert('You have defeated Luke Skywalker!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};
// All functions for game play, (the math) if user chooses Darth as thier choice. ==========================================================

			var darthVSjar = function() {
				
				// taking away user's attack from enemy's health.
				 gameObj.charArray[0].health -= gameObj.charArray[1].attack;
				// updating html for the enemy's health points.
				 $('#jarhp').html('HP: ' + gameObj.charArray[0].health);
				// minus enemy's counter attack from user's health.
				 gameObj.charArray[1].health -= gameObj.charArray[0].counter;
				// updating user's health point html.
				 $('#darthhp').html('HP ' + gameObj.charArray[1].health);
				 // incrementing the user's attack by a pre-decided amount
				 gameObj.charArray[1].attack += 4;
				 // if the user loses.
				 if (gameObj.charArray[1].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }
				 // if the user defeats the enemy.
				 else if (gameObj.charArray[0].health <= 0){
				 	alert('You have defeated Jar Jar!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			// user is darth against han solo
			var darthVSsolo = function() {

				 gameObj.charArray[2].health -= gameObj.charArray[1].attack;

				 $('#hanhp').html('HP: ' + gameObj.charArray[2].health);

				 gameObj.charArray[1].health -= gameObj.charArray[2].counter;

				 $('#darthhp').html('HP ' + gameObj.charArray[1].health);

				 gameObj.charArray[1].attack += 4;

				 if (gameObj.charArray[1].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[2].health <= 0){
				 	alert('You have defeated Han Solo!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			var darthVSluke = function() {

				 gameObj.charArray[3].health -= gameObj.charArray[1].attack;

				 $('#lukehp').html('HP: ' + gameObj.charArray[3].health);

				 gameObj.charArray[1].health -= gameObj.charArray[3].counter;

				 $('#darthhp').html('HP ' + gameObj.charArray[1].health);

				 gameObj.charArray[1].attack += 4;

				 if (gameObj.charArray[1].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[3].health <= 0){
				 	alert('You have defeated Luke Skywalker!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

// All functions for game play, (the math) if user chooses Han Solo as thier choice. ==========================================================

var soloVSdarth = function() {
				
				// taking away user's attack from enemy's health.
				 gameObj.charArray[1].health -= gameObj.charArray[2].attack;
				// updating html for the enemy's health points.
				 $('#darthhp').html('HP: ' + gameObj.charArray[1].health);
				// minus enemy's counter attack from user's health.
				 gameObj.charArray[2].health -= gameObj.charArray[1].counter;
				// updating user's health point html.
				 $('#hanhp').html('HP ' + gameObj.charArray[2].health);
				 // incrementing the user's attack by a pre-decided amount
				 gameObj.charArray[2].attack += 3;
				 // if the user loses.
				 if (gameObj.charArray[2].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }
				 // if the user defeats the enemy.
				 else if (gameObj.charArray[1].health <= 0){
				 	alert('You have defeated Darth Vader!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			// user is solo against jar
			var soloVSjar = function() {

				 gameObj.charArray[0].health -= gameObj.charArray[2].attack;

				 $('#jarhp').html('HP: ' + gameObj.charArray[0].health);

				 gameObj.charArray[2].health -= gameObj.charArray[0].counter;

				 $('#hanhp').html('HP ' + gameObj.charArray[2].health);

				 gameObj.charArray[2].attack += 3;

				 if (gameObj.charArray[2].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[0].health <= 0){
				 	alert('You have defeated Jar Jar!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			var soloVSluke = function() {

				 gameObj.charArray[3].health -= gameObj.charArray[2].attack;

				 $('#lukehp').html('HP: ' + gameObj.charArray[3].health);

				 gameObj.charArray[2].health -= gameObj.charArray[3].counter;

				 $('#hanhp').html('HP ' + gameObj.charArray[2].health);

				 gameObj.charArray[2].attack += 3;

				 if (gameObj.charArray[2].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[3].health <= 0){
				 	alert('You have defeated Luke Skywalker!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

// All functions for game play, (the math) if user chooses Luke SkyWalker as thier choice. ==========================================================

			var lukeVSdarth = function() {
				
				// taking away user's attack from enemy's health.
				 gameObj.charArray[1].health -= gameObj.charArray[3].attack;
				// updating html for the enemy's health points.
				 $('#darthhp').html('HP: ' + gameObj.charArray[1].health);
				// minus enemy's counter attack from user's health.
				 gameObj.charArray[3].health -= gameObj.charArray[1].counter;
				// updating user's health point html.
				 $('#lukehp').html('HP ' + gameObj.charArray[3].health);
				 // incrementing the user's attack by a pre-decided amount
				 gameObj.charArray[3].attack += 2;
				 // if the user loses.
				 if (gameObj.charArray[3].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }
				 // if the user defeats the enemy.
				 else if (gameObj.charArray[1].health <= 0){
				 	alert('You have defeated Darth Vader!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			// user is solo against jar
			var lukeVSjar = function() {

				 gameObj.charArray[0].health -= gameObj.charArray[3].attack;

				 $('#jarhp').html('HP: ' + gameObj.charArray[0].health);

				 gameObj.charArray[3].health -= gameObj.charArray[0].counter;

				 $('#lukehp').html('HP ' + gameObj.charArray[3].health);

				 gameObj.charArray[3].attack += 2;

				 if (gameObj.charArray[3].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[0].health <= 0){
				 	alert('You have defeated Jar Jar!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};

			var lukeVSsolo = function() {

				 gameObj.charArray[2].health -= gameObj.charArray[3].attack;

				 $('#hanhp').html('HP: ' + gameObj.charArray[2].health);

				 gameObj.charArray[3].health -= gameObj.charArray[2].counter;

				 $('#lukehp').html('HP ' + gameObj.charArray[3].health);

				 gameObj.charArray[3].attack += 2;

				 if (gameObj.charArray[3].health <= 0){
				 	alert('You Have Fallen!!!!');
				 	clearInterval(timer);
				 }

				 else if (gameObj.charArray[2].health <= 0){
				 	alert('You have defeated Han Solo!');
				 	$('#enemyAttack').empty();
				 	clearInterval(timer);
				 }

			};


// user chooses jar jar click function-------------------------

	$('#jarPic').on('click', function() {
		if(jarjar == true){
		darth = false;
		solo = false;
		luke = false;


		

		gameObj.charArray[0].whenClicked();

		$('#darthPic').on('click', function(){

			
			gameObj.charArray[0].darthClicked();

			timer = setInterval(jarVSdarth, 1500);
	
		});



		$('#soloPic').on('click', function(){

			gameObj.charArray[0].soloClicked();

				timer = setInterval(jarVSsolo, 1500);
			
		});



		$('#lukePic').on('click', function(){

			gameObj.charArray[0].lukeClicked();

			timer = setInterval(jarVSluke, 1500);

		}); 
		}
	});




// if user chooses darth vader click function------------------------------


	$('#darthPic').on('click', function() {
		if(darth == true){
		jarjar = false;
		solo = false;
		luke = false;

		gameObj.charArray[1].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[1].jarClicked();

				timer = setInterval(darthVSjar, 1500);				
			
		});



		$('#soloPic').on('click', function(){
			gameObj.charArray[1].soloClicked();

			timer = setInterval(darthVSsolo, 1500);

		});



		$('#lukePic').on('click', function(){
			gameObj.charArray[1].lukeClicked();

			timer = setInterval(darthVSluke, 1500);

		});
		}
	});

// Click function(s) in the case that Han solo is picked---------------------------------


	$('#soloPic').on('click', function() {
		if(solo == true){
			jarjar = false;
			darth = false;
			luke = false;

		gameObj.charArray[2].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[2].jarClicked();

			timer = setInterval(soloVSjar, 1500);

		});



		$('#darthPic').on('click', function(){
			gameObj.charArray[2].darthClicked();

			timer = setInterval(soloVSdarth, 1500);
		});



		$('#lukePic').on('click', function(){
			gameObj.charArray[2].lukeClicked();

			timer = setInterval(soloVSluke, 1500);

		});
		}
	});	

// if luke is picked by user------------------------------

	$('#lukePic').on('click', function() {
		if(luke == true){
		jarjar = false;
		darth = false;
		solo = false;

		gameObj.charArray[3].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[3].jarClicked();

			timer = setInterval(lukeVSjar, 1500);
			
		});



		$('#darthPic').on('click', function(){
			gameObj.charArray[3].darthClicked();

			timer = setInterval(lukeVSdarth, 1500);

		});



		$('#soloPic').on('click', function(){
			gameObj.charArray[3].soloClicked();

			timer = setInterval(lukeVSsolo, 1500);
		});
		}
	});

});



























