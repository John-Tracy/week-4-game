// array of objects which holds each character, names, their hit points, attack points and counter attack points.
// starwars characters Jar Jar Binks, Darth vader, Han Solo, Luke Skywalker.
var gameObj = { 

			charArray:	[	{	
						name: 'Jar Jar Binks',
						health: 200,
						attack: 5,
						counter: 20,
						userPick: $('#jarDiv'),
						enemyDarth: $('#darthDiv'),
						enemyHan: $('#soloDiv'),
						enemyLuke: $('#lukeDiv'),

						whenClicked: function() {
							
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyLuke, this.enemyHan);
							$('#calmArea').empty();
							
							},

						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);

							},

						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);

							},

						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
						}

							

						},	
			
						{	
						name: 'Darth Vader',
						health: 200,
						attack: 4,
						counter: 15,
						userPick: $('#darthDiv'),
						enemyJar: $('#jarDiv'),
						enemyHan: $('#soloDiv'),
						enemyLuke: $('#lukeDiv'),
						whenClicked: function() {
							
							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyJar, this.enemyLuke, this.enemyHan);
							$('#calmArea').empty();
							
							},

						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);

							},

						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);

							},

						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
						}
							},
						
					
						{	
						name: 'Han Solo',
						health: 200,
						attack: 3,
						counter: 20,
						userPick: $('#soloDiv'),
						enemyJar: $('#jarDiv'),
						enemyDarth: $('#darthDiv'),
						enemyLuke: $('#lukeDiv'),					

						whenClicked: function() {

							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyLuke, this.enemyJar);
							$('#calmArea').empty();
							
							},

						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);

							},

						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);

							},

						lukeClicked: function() {
							$('#enemyAttack').html(this.enemyLuke);
						}

							
						},

						{	
						name: 'Luke Skywalker',
						health: 200,
						attack: 2,
						counter: 30,
						userPick: $('#lukeDiv'),
						enemyJar: $('#jarDiv'),
						enemyHan: $('#soloDiv'),
						enemyDarth: $('#darthDiv'),						

						whenClicked: function() {

							$('#userAttack').append(this.userPick);
							$('#defenderArea').append(this.enemyDarth, this.enemyHan, this.enemyJar);
							$('#calmArea').empty();
							
							},

						darthClicked: function() {
							$('#enemyAttack').html(this.enemyDarth);

							},

						jarClicked: function() {
							$('#enemyAttack').html(this.enemyJar);

							},

						soloClicked: function() {
							$('#enemyAttack').html(this.enemyHan);
						}

					}
							
							
						
			],


		// only if user is jarjar vs. darth vader	
			jarVSdarth: function() {
				 this.charArray[1].health -= this.charArray[0].attack;
				 $('#darthhp').html('HP: ' + this.charArray[1].health);
				 this.charArray[0].health -= this.charArray[0].counter;
				 $('#jarhp').html('HP ' + this.charArray[0].health);
				 this.charArray[0].attack += 5;
				 if (this.charArray[0].health <= 0){
				 	alert('You Have Fallen!!!!');
				 }
				 else if (this.charArray[1].health <= 0){
				 	alert('You have defeated Darth Vader! Choose your next opponent wisely.');
				 	$('#enemyAttack').empty();
				 }
			},

		// only if user is darth vader vs jarjar	
			darthVSjar: function() {
				 this.charArray[0].health -= this.charArray[1].attack;
				 $('#jarhp').html('HP: ' + this.charArray[0].health);
				 this.charArray[1].health -= this.charArray[1].counter;
				 $('#darthhp').html('HP ' + this.charArray[1].health);
				 this.charArray[1].attack += 4;
				 if (this.charArray[1].health <= 0){
				 	alert('You Have Fallen!!!!');
				 }
				 else if (this.charArray[0].health <= 0){
				 	alert('You have defeated Jar Jar Binks! Choose your next opponent wisely.');
				 	$('#enemyAttack').empty();	
				}
			}
};




$(document).ready(function() {

		$("#jarhp").html('HP: ' + gameObj.charArray[0].health);
		$("#darthhp").html('HP: ' + gameObj.charArray[1].health);
		$("#hanhp").html('HP: ' + gameObj.charArray[2].health);
		$("#lukehp").html('HP: ' + gameObj.charArray[3].health);
		var darth = true;
		var jarjar= true;
		var solo = true;
		var luke = true;
		

// user chooses jar jar click function

	$('#jarPic').on('click', function() {
		if(jarjar == true){
		darth = false;
		solo = false;
		luke = false;

		gameObj.charArray[0].whenClicked();

		$('#darthPic').on('click', function(){
			gameObj.charArray[0].darthClicked();

			$('#theHit').on('click', function(){
				gameObj.jarVSdarth();
			});
		});



		$('#soloPic').on('click', function(){
			gameObj.charArray[0].soloClicked();
		});



		$('#lukePic').on('click', function(){
			gameObj.charArray[0].lukeClicked();
		}); 
		}
	});




// if user chooses darth vader click function


	$('#darthPic').on('click', function() {
		if(darth == true){
		jarjar = false;
		solo = false;
		luke = false;

		gameObj.charArray[1].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[1].jarClicked();

			$('#theHit').on('click', function(){
				gameObj.darthVSjar();					// need to fix these and add more
			});
		});



		$('#soloPic').on('click', function(){
			gameObj.charArray[1].soloClicked();
		});



		$('#lukePic').on('click', function(){
			gameObj.charArray[1].lukeClicked();
		});
		}
	});

// Click function(s) in the case that Han solo is picked	
	$('#soloPic').on('click', function() {
		if(solo == true){
		jarjar = false;
		darth = false;
		luke = false;

		gameObj.charArray[2].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[2].jarClicked();

			$('#theHit').on('click', function(){
				gameObj.darthVSjar();				// need to fix these and add more
			});
		});



		$('#darthPic').on('click', function(){
			gameObj.charArray[2].darthClicked();
		});



		$('#lukePic').on('click', function(){
			gameObj.charArray[2].lukeClicked();
		});
		}
	});	

// if luke is picked by user
	$('#lukePic').on('click', function() {
		if(luke == true){
		jarjar = false;
		darth = false;
		solo = false;

		gameObj.charArray[3].whenClicked();

		$('#jarPic').on('click', function(){
			gameObj.charArray[3].jarClicked();

			$('#theHit').on('click', function(){
				gameObj.darthVSjar();				// need to fix these and add more
			});
		});



		$('#darthPic').on('click', function(){
			gameObj.charArray[3].darthClicked();
		});



		$('#soloPic').on('click', function(){
			gameObj.charArray[3].soloClicked();
		});
		}
	});






});



























