var breakfast = [];
var coffee = [];
var lunch = [];
var dinner = [];
var latenight = [];
var hour = 0;
var main_pic = 'images/3-lunch/Harris-Ueng-eisenbergs-corned-beef-matzo-ball-soup.jpg';

function addImgs(data) {

	$.each(data, function( index, value ) {

		var foodImg = value.content.split('src="')[1].split('" alt="')[0];
		var foodName = value.excerpt.split('<p>')[1].split('@')[0];
		var foodPlace = value.content.split('@')[1].split('</p>')[0];

		var foodObj = {
			image: foodImg,
			food: foodName,
			restaurant: foodPlace,
			restaurant_url: 'http://doughnutplant.com/',
			city: 'New York City',
			photographer: 'Jocelyn and Cathy',
			photographer_url: 'http://foodishfetish.blogspot.com/'
		};

		switch(value.terms.category[0].slug) {
			case "late-night":
				latenight.push(foodObj);
			break;

			case "dinner":
				dinner.push(foodObj);
			break;

			case "lunch":
				lunch.push(foodObj);
			break;

			case "coffee":
				coffee.push(foodObj);
			break;

			case "breakfast":
				breakfast.push(foodObj);
			break;

		}

		switch(value.terms.category[1].slug) {
			case "late-night":
				latenight.push(foodObj);
			break;

			case "dinner":
				dinner.push(foodObj);
			break;

			case "lunch":
				lunch.push(foodObj);
			break;

			case "coffee":
				coffee.push(foodObj);
			break;

			case "breakfast":
				breakfast.push(foodObj);
			break;

		}

	});

	setImage();
}

function setImage() {
	hour = new Date().getHours();

	if (hour > 12) {
		switch(hour) {

			case 12:
			case 13:
			case 14:
				//lunch
				main_pic = lunch[Math.floor(Math.random()*lunch.length)];
			break;

			case 15:
			case 16:
			case 17:
				// afternoon snack
				main_pic = coffee[Math.floor(Math.random()*coffee.length)];
			break;

			case 18:
			case 19:
			case 20:
			case 21:
				// dinner
				main_pic = dinner[Math.floor(Math.random()*dinner.length)];
			break;

			case 22:
			case 23:
			case 24:
				// late night
				main_pic = latenight[Math.floor(Math.random()*latenight.length)];
			break;

		}

		hour -= 12;
	} else if (hour === 0) {
		hour = 12;
		// late night
		main_pic = latenight[Math.floor(Math.random()*latenight.length)];
	} else {
		switch(hour) {

			case 1:
			case 2:
			case 3:
			case 4:
				//sleep time
				main_pic = latenight[Math.floor(Math.random()*lunch.length)];
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
}


/*********************************
****** foodblog GET request ************/
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://foodclock.co/blog/wp-json/posts", true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		// JSON.parse does not evaluate the attacker's scripts.
		var resp = JSON.parse(xhr.responseText);
		addImgs(resp);
	}
};
xhr.send();


/***********************************
****** Clock & Date ****************/
$(function() {

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

	$(".bg-container").css('background', "url(" + main_pic.image + ") no-repeat center center fixed");

	$(".food").html(main_pic.food);

	$(".restaurant").html(main_pic.restaurant);
	$(".restaurant").attr('href', main_pic.restaurant_url);

	$(".photographer").html(main_pic.photographer);
	$(".photographer").attr('href', main_pic.photographer_url);

	$(".city").html(main_pic.city);
}
