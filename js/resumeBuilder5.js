var bio = {
	"name" : "George Higbie",
	"role" : " Front-end Web Developer",
	"contacts" : {
		"mobile" : "808-838-9454",
		"email" : "gehigbie@gmail.com",
		"github" : "https://github.com/ghigbie",
		"linkedIn" : "https://www.linkedin.com/in/higbie",
		"location" : "Honolulu, HI"
	} ,
	"welcomeMessage" : "Thanks for visiting my resume!  Feel free to contact me anytime.",
	"skills" : ["Web Development", "E-Learning Development", "HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "Flexbox"],
	"picture" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAAjAAAAJDQyYWY0YmE2LTY1NWQtNGZjOC05NjNmLTY3NjNiNjY1NDQxMA.jpg",
	"display" : "Some kind of function needs to go here!"
}


var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%" , bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%" , bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedIn);
$("#topContacts").append(formattedLocation);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedIn);
$("#footerContacts").append(formmatedLocation);



//function displaySkills(){
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
	}

	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
//}
//displaySkills();




//experimental function 
//function displayBio(){
//	for(item in bio){
//		$("#topContacts").append("formatted"+bio[item]);
//		$("#fotterContacts").append("formatted"+bio[item]);
//	}
//}


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedIn);
$("#footerContacts").append(formmatedLocation);


var education = {
	"schools" : [
		{
		"name" : "Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Master of Arts",
		"majors" : "Communication Studies",	
		"dates" : "2005 - 2008",
		"url" : "http://www.txstate.edu"
	},
		{
		"name" : "Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Certification",
		"majors" : "Corporate Communication and Training",
		"dates" : "2006 - 2007",
		"url" : "http://www.txstate.edu"
	},
		{
		"name" : "University of Texas",
		"location" : "Austin, TX",
		"degree" : "Master of Arts",
		"majors" : "Hispanic Linguistics",
		"dates" : "2001 - 2004",
		"url" : "http://www.utexas.edu"
	},
		{
		"name" : "Southwest Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Bachelor of Arts",
		"majors" : "Spanish",
		"years" : "1997 - 2001",
		"url" : "http://www.txstate.edu"
	}
	],
	"onlineCourse" : [{
		"title" : "Front-end Web Developer Nano Degree",
		"school" : "Udacity.com",
		"date" : "2015 - 2016",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "Introduction to HTML and CSS",
		"school" : "Udacity.com",
		"date" : "2015",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity.com",
		"date" : "2015",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Responsive Web Images",
		"school" : "Udacity.com",
		"date" : "2015",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "JavaScript Basics",
		"school" : "Udacity.com",
		"date" : "2016",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Linux Command Line Basics",
		"school" : "Udacity.com",
		"date" : "2016",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "How to Use Git and GitHub",
		"school" : "Udacity.com",
		"date" : "2016",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Android Development for Beginners",
		"school" : "Udacity.com",
		"date" : "2016",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "AngularJS",
		"school" : "Udemy.com",
		"date" : "2016",
		"url" : "http://www.udemy.com"
	},
		{
		"title" : "The Complete Android Developer",
		"school" : "Udemy.com",
		"date" : "2016",
		"url" : "http://www.udemy.com"
	}
	],
	"display" : ["Some Function shold go here"]
};

var work = {
	"jobs": [
		{
		"employer" : "American Savings Bank",
		"title" : "E-Learning Developer",
		"location" : "Honolulu, HI",
		"dates" : "June 2015 - present",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"employer" : "Hawaiian Telcom",
		"title" : "E-Learning Developer",
		"location" : "Honolulu, HI",
		"dates" : "March 2014 - June 2015",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at Hawaiian Telcom."
	},
		{
		"employer" : "ABET",
		"title" : "Training Manager",
		"location" : "Baltimore, MD",
		"dates" : "2010 - 2014",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"employer" : "United State Census Bureau",
		"title" : "Research Support Specialist",
		"location" : "Washington, DC",
		"years" : "2008 - 2010",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"employer" : "Austin Community College",
		"title" : "Adjunct Professor",
		"location" : "Austin, TX",
		"dates" : "2005 - 2008",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"employer" : "Mattress Firm",
		"title" : "Store Manager",
		"location" : "Austin, TX",
		"dates" : "2004 - 2005",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"employer" : "University of Texas at Austin",
		"title" : "Assstant Instructor",
		"location" : "Austin, TX",
		"dates" : "2001 - 2004",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	}
],

	"display": ["some sort of function should go here"]
}


var projects = [
	{
	"image" : "http://placehold.it/350x250",
	"name" : "Bootstrap Portfolio",
	"description" : "This project made use of HTML5, CSS3, Responsive Design, and the Bootsrap Framework."
	},
	{
	"image" : "http://placehold.it/350x250",
	"name" : "Interactive Resume",
	"description" : "This project made use of JavaScript, jQuery, GitHub, HTML5, CSS3, Responsive Design."
	},
	{
	"image" : "http://placehold.it/350x250",
	"name" : "Classic Game Clone",
	"description" : "This project made use of HTML Canvas, JavaScript, jQuery, GitHub, HTML5, CSS3, Responsive Design."
	},
	{
	"image" : "http://placehold.it/350x250",
	"name" : "Project 1",
	"description" : "This project made use of Android SDK and Java"
	},
	{
	"display" : "some sort of function should go here"
	}
]