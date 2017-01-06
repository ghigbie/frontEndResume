
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
	"picture" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAAjAAAAJDQyYWY0YmE2LTY1NWQtNGZjOC05NjNmLTY3NjNiNjY1NDQxMA.jpg",
	"welcome" : "Thanks for visiting my resume!",
	"skills" : ["Web Development", "E-Learning Development", "HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "Flexbox"]
}

var schools = {
	"schools" : [
		{
		"name" : "Texas State University",
		"city" : "San Marcos, TX",
		"years" : "2005 - 2008",
		"degree" : "M.A., Communication Studies"
	},
		{
		"name" : "University of Texas",
		"city" : "Austin, TX",
		"years" : "2001 - 2004",
		"degree" : "M.A., Hispanic Linguistics"
	},
		{
		"name" : "Southwest Texas State University",
		"city" : "San Marcos, TX",
		"years" : "1997 - 2001",
		"degree" : "B.A. Spanish"
	}
	],
	"onlineCourse" : [
		{
		"name" : "Udacity.com",
		"years" : "2015 - 2016",
		"degree" : "Front-end Web Developer",
		"courses" : ["HTML & CSS", "JavaScript", "jQuery", "GitHub", "Linux Command Line"]
	},
	{
		"name" : "Udemy.com",	
		"years" : "2014 - 2016",
		"courses" : ["Web Development", "HTML5", "Node.JS", "Angular.JS", "JavaScript", "PHP", "Ruby on Rails"]
	}
	]
}

var work = {
	"jobs": [
		{
		"company" : "American Savings Bank",
		"position" : "e-Learning Developer",
		"years" : "June 2015 - present",
		"city" : "Honolulu, HI",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"company" : "Hawaiin Telcom",
		"position" : "e-Learning Developer",
		"years" : "March 2014 - June 2015",
		"city" : "Honolulu, HI",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at Hawaiian Telcom."
	},
		{
		"company" : "ABET",
		"position" : "Training Manager",
		"years" : "2010 - 2014",
		"city" : "Baltimore, MD",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{"company" : "United State Census Bureau",
		"position" : "Research Support Specialist",
		"years" : "2008 - 2010",
		"city" : "Washington, DC",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"company" : "Austin Community College",
		"position" : "Adjunct Professor",
		"years" : "2005 - 2008",
		"city" : "Austin, TX",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"company" : "Mattress Firm",
		"position" : "Store Manager",
		"years" : "2004 - 2005",
		"city" : "Austin, TX",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	},
		{
		"company" : "University of Texas at Austin",
		"position" : "Assstant Instructor",
		"years" : "2001 - 2004",
		"city" : "Austin, TX",
		"description" : "Designed, developed, launched and managed all e-learning projects for team member development at American Savings bank."
	}
]
}

var projects = {
	"projectBasic" : [
		{
		"name" : "Bootstrap Portfolio",
		"technology" : ["HTML5", "CSS3", "Responsive Design", "Bootsrap Framework"]
	},
		{
		"name" : "Interactive Resume",
		"technology" : ["JavaScript", "jQuery", "GitHub", "HTML5", "CSS3", "Responsive Design"]
	},
	{
		"name" : "Classic Game Clone",
		"technology" : ["HTML Canvas", "JavaScript", "jQuery", "GitHub", "HTML5", "CSS3", "Responsive Design"]
	}
	],
	"android" :[
		{
		"name" : "Project 1",
		"technology" : ["Android SDK", "Java"]
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%" , bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%" , bio.skills);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedIn);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formatted)


var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLlinkedIn = '<li class="flex-item"><span class="orange-text">linkedIn</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg