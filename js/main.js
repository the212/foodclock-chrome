$(function() {

	var breakfast = [

		{
			image: 'images/1-breakfast/foodishfetish-tres-leches-doughnut-plant.jpg',
			food: 'Tres Leches Doughnut',
			restaurant: 'Doughnut Plant',
			restaurant_url: 'http://doughnutplant.com/',
			city: 'New York City',
			photographer: 'Jocelyn and Cathy',
			photographer_url: 'http://foodishfetish.blogspot.com/'
		}

	];

	var coffee = [

		{
			image: 'images/2-coffee/buvette-ny-cap-croissant.jpg',
			food: 'Cappuccino & Croissant',
			restaurant: 'Buvette',
			restaurant_url: 'http://newyork.ilovebuvette.com/',
			city: 'New York City',
			photographer: 'Gentl and Hyers',
			photographer_url: 'http://www.gentlandhyers.com/'
		},
		{
			image: 'images/2-coffee/daniel-krieger-veselka.jpg',
			food: 'Coffee',
			restaurant: 'Veselka',
			restaurant_url: 'http://www.veselka.com/',
			city: 'New York City',
			photographer: 'Daniel Krieger',
			photographer_url: 'http://instagram.com/danielkrieger'
		}

	];

	var lunch = [

		{
			image: 'images/3-lunch/Harris-Ueng-eisenbergs-corned-beef-matzo-ball-soup.jpg',
			food: 'Corned Beef & Matzo Ball Soup',
			restaurant: "Eisenberg's Sandwich Shop",
			restaurant_url: 'http://eisenbergsnyc.com/',
			city: 'New York City',
			photographer: 'Harris Ueng',
			photographer_url: 'https://www.flickr.com/photos/spektrograf/'
		},
		{
			image: 'images/3-lunch/robyn-lee-russ-daughters-lunch.jpg',
			food: 'Lunch',
			restaurant: 'Russ & Daughters Cafe',
			restaurant_url: 'http://www.russanddaughterscafe.com/',
			city: 'New York City',
			photographer: 'Robyn Lee',
			photographer_url: 'https://www.flickr.com/photos/roboppy/'
		}

	];

	var dinner = [

		{
			image: 'images/4-dinner/robyn-lee-robataya-fried-chicken.jpg',
			food: 'Fried Chicken',
			restaurant: "Robataya",
			restaurant_url: 'http://www.robataya-ny.com/',
			city: 'New York City',
			photographer: 'Robyn Lee',
			photographer_url: 'https://www.flickr.com/photos/roboppy/'
		}

	];

  // Handler for .ready() called.
  // Create two variable with the names of the months and days in an array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year   
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

	/* setInterval( function() {
		// Create a newDate() object and extract the seconds of the current time on the visitor's
		var seconds = new Date().getSeconds();
		// Add a leading zero to seconds value
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		},1000);
	*/
		
	setInterval( function() {
		// Create a newDate() object and extract the minutes of the current time on the visitor's
		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes value
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		},1000);


	var main_pic = 'images/3-lunch/Harris-Ueng-eisenbergs-corned-beef-matzo-ball-soup.jpg';
	/****** dynamic pic **************/
	var hour = new Date().getHours();

	if (hour > 12) {
		switch(hour) {

			case 12:
			case 13:
			case 14:
				//lunch
				main_pic = lunch[Math.floor(Math.random()*coffee.length)];
			break;

			case 15:
			case 16:
			case 17:
				// afternoon snack
			break;

			case 18:
			case 19:
			case 20:
			case 21:
				// dinner
			break;

			case 22:
			case 23:
			case 24:
				// late night
			break;

		}

		hour -= 12;
	} else if (hour === 0) {
		hour = 12;
	} else {
		switch(hour) {

			case 1:
			case 2:
			case 3:
			case 4:
				// sleep time
				//var item = items[Math.floor(Math.random()*items.length)];
				//lunch
				main_pic = lunch[Math.floor(Math.random()*lunch.length)];
			break;

			case 5:
			case 6:
			case 7:
				//coffee
				main_pic = coffee[Math.floor(Math.random()*coffee.length)];
			break;

			case 8:
			case 9:
			case 10:
				// breakfast
				main_pic = breakfast[Math.floor(Math.random()*breakfast.length)];
			break;

			case 12:
			case 11:
				//lunch
				main_pic = lunch[Math.floor(Math.random()*lunch.length)];
			break;

		}

	}

	changePic(main_pic);

	setInterval( function() {
		// Create a newDate() object and extract the hours of the current time on the visitor's
		var hours = new Date().getHours();
		var ampm = "am";

		if (hours > 12) {
			hours -= 12;
			ampm = "pm";
		} else if (hours === 0) {
			hours = 12;
		}
		// Add a leading zero to the hours value
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
		$("#ampm").html(ampm);

		}, 1000);
});

function changePic(main_pic) {
	console.log("main pic: ", main_pic);

	$(".bg-container").css('background', "url(" + main_pic.image + ") no-repeat center center fixed");

	$(".food").html(main_pic.food);

	$(".restaurant").html(main_pic.restaurant);
	$(".restaurant").attr('href', main_pic.restaurant_url);

	$(".photographer").html(main_pic.photographer);
	$(".photographer_url").attr('href', main_pic.photographer_url);

	$(".city").html(main_pic.city);
}
