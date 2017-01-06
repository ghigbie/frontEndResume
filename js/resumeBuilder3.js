
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
 

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome= HTMLwelcomeMsg.replace("%data%", bio.welcome);

//Basic Information
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);

//Contact Information
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedIn);
$("#topContacts").append(formattedLocation);


//Skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
  	$("#skills").append(formattedSkill);
  	var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
  	$("#skills").append(formattedSkill);
}

/*for(skill in bio.skills[skill]){
	var formattedSkill[skill] = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill[skill]);
}






/*var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var HTMLtwitter
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); 
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#main").prepend(formattedContact);
$("#main").prepend(formattedMobile);
$("#main").prepend(formattedEmail);
$("#main").prepend(formattedGithub);
$("#main").prepend(formattedWelcome);
$("#main").prepend(formattedPic);
$("#main").append(formattedSkills);
*/
var work = [
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

/*
for (job in work){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].company);
	var formattedTitle = HTMLworkTitle.replace("%data%", work[job].position);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

  	$(".work-entry:last").append(formattedEmployerTitle);

  	var formattedYears = HTMLworkDates.replace("%data%" , work[job].years);
  	$(".work-entry:last").append(formattedYears);

  	var formattedLocation = HTMLworkLocation.replace("%data%", work[job].city);
  	$(".work-entry:last").append(formattedLocation);

  	var formattedDescription = HTMLworkDescription.replace("%data%", work[job].description);
  	$(".work-entry:last").append(formattedDescription);
	}
*/



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
/*
var work1 = {};
work1.company = "American Savings Bank";
work1.position = "e-Learning Developer";
work1.years = "June 2015 - present";
work1.city = "Honolulu, HI";

var work2 = {}
work2.company = "Hawaiian Telcom";
work2.position = "e-Learning Developer";
work2.years = "March 2014 - June 2015";
work2.city = "Honolulu, HI";

$("#main").append(work2.company);
$("#main").append(work2.position);
$("#main").append(work2.years);
$("#main").append(work2.city);

$("#main").append(work1.company);
$("#main").append(work1.position);
$("#main").append(work1.years);
$("#main").append(work1.city);
*/

var education = {
	"schools" : [
		{
		"school" : "Texas State University",
		"city" : "San Marcos, TX",
		"years" : "2005 - 2008",
		"degree" : "M.A., Communication Studies"
	},
		{
		"school" : "University of Texas",
		"city" : "Austin, TX",
		"years" : "2001 - 2004",
		"degree" : "M.A., Hispanic Linguistics"
	},
		{
		"school" : "Southwest Texas State University",
		"city" : "San Marcos, TX",
		"years" : "1997 - 2001",
		"degree" : "B.A. Spanish"
	}
	],
	"onlineSchools" : [
		{
		"school" : "Udacity.com",
		"years" : "2015 - 2016",
		"degree" : "Front-end Web Developer",
		"courses" : ["HTML & CSS", "JavaScript", "jQuery", "GitHub", "Linux Command Line"]
	},
	{
		"school" : "Udemy.com",	
		"years" : "2014 - 2016",
		"courses" : ["Web Development", "HTML5", "Node.JS", "Angular.JS", "JavaScript", "PHP", "Ruby on Rails"]
	}
	]
}

//Internationalize
/*
$(#main).append("<input type="button" value="Internationalize" onclick="inName()"/>");

function inName(x){
	x = bio.name.split(" ");
	return newName[1].toUpperCase();
}