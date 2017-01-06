var bio = {
	"name" : "George Higbie",
	"role" : " Front-end Web Developer",
	"contacts" : {
		"mobile" : "808-838-9454",
		"email" : "gehigbie@gmail.com",
		"github" : "https://wwww.github.com/ghigbie",
		"linkedIn" : "https://www.linkedin.com/in/higbie",
		"location" : "New York, NY"
	} ,
	"welcomeMessage" : "Thanks for visiting!  Feel free to contact me anytime.",
	"skills" : ["Mobile Development", "Java", "Web Development", "Android SDK", "XML", "HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "Flexbox"],
	"picture" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkPAAAAJGVmMjZkMzhhLTBhMDgtNDY1ZC1hYjM5LTM1ZDcwMDk0NTk3Nw.jpg",
}

bio.display = function(){

	//creates variables for items in bio object
	var formattedName = HTMLheaderName.replace("%data%" , bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
	var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
	var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%" , bio.picture);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	//appends or prepends items to header
	$("#header").prepend(formattedRole).prepend(formattedName);
	$("#header").append(formattedPic).append(formattedWelcome);

	//appends contacts to header
	$("#topContacts").append(formattedMobile).append(formattedEmail);
	$("#topContacts").append(formattedGithub).append(formattedLinkedIn);
	$("#topContacts").append(formattedLocation);

	//appends contacts to footer
	$('#footerContacts').append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLinkedIn).append(formattedLocation);

	//appends skills section to header and formattedSkills to skills section
	function displaySkills(){
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);

		for(var skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);
			$("#skills").append(formattedSkill);
			}
		}
	}
displaySkills();
};
bio.display();


var education = {
	"schools" : [
		{
		"name" : "Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Master of Arts",
		"majors" : "Communication Studies",	
		"dates" : "2005 - 2008 ",
		"url" : "http://www.txstate.edu"
	},
		{
		"name" : "Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Certification",
		"majors" : "Corporate Communication and Training",
		"dates" : "2006 - 2007 ",
		"url" : "http://www.txstate.edu"
	},
		{
		"name" : "University of Texas",
		"location" : "Austin, TX",
		"degree" : "Master of Arts",
		"majors" : "Hispanic Linguistics",
		"dates" : "2001 - 2004 ",
		"url" : "http://www.utexas.edu"
	},
		{
		"name" : "Southwest Texas State University",
		"location" : "San Marcos, TX",
		"degree" : "Bachelor of Arts",
		"majors" : "Spanish",
		"dates" : "1997 - 2001 ",
		"url" : "http://www.txstate.edu"
	}
	],
	"onlineCourses" : [{
		"title" : "Front-end Web Developer Nano Degree",
		"school" : "Udacity.com",
		"date" : "2015 - 2016 ",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "Introduction to HTML and CSS",
		"school" : "Udacity.com",
		"date" : "2015 ",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity.com",
		"date" : "2015 - to present ",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Responsive Web Images",
		"school" : "Udacity.com",
		"date" : "2015 ",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "JavaScript Basics",
		"school" : "Udacity.com",
		"date" : "2016 ",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Linux Command Line Basics",
		"school" : "Udacity.com",
		"date" : "2016 ",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "How to Use Git and GitHub",
		"school" : "Udacity.com",
		"date" : "2016 ",
		"url" : "http://www.udacity.com"
	},
			{
		"title" : "Android Development for Beginners",
		"school" : "Udacity.com",
		"date" : "2016 ",
		"url" : "http://www.udacity.com"
	},
		{
		"title" : "AngularJS",
		"school" : "Udemy.com",
		"date" : "2016 ",
		"url" : "http://www.udemy.com"
	},
		{
		"title" : "The Complete Android Developer",
		"school" : "Udemy.com",
		"date" : "2016 ",
		"url" : "http://www.udemy.com"
	}
	]
}

education.display = function(){

	//appends Education sub section to the page
	if(education.schools.length > 0){
		$("#education").append(HTMLschoolStart);
	}

	//creates variables to education objects and appends them to the page
	for(var school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%" , education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%" , education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%" , education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	//appends online classes <h3> sub section to the page
	if(education.onlineCourses.length > 0){
		$("#online").append(HTMLonlineClasses);
	}

	//creates variables for online education objects and appends to page
	for(var course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[course].title);
		$(".education-entry2:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[course].school);
		$(".education-entry2:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[course].date);
		$(".education-entry2:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%" , education.onlineCourses[course].url);
		$(".education-entry2:last").append(formattedOnlineURL +"<br>");
	}
};
education.display();



var work = {
	"jobs": [
		{
		"employer" : "American Savings Bank",
		"title" : "E-Learning Developer",
		"location" : "Honolulu, HI",
		"dates" : "June 2015 - present",
		"description" : "Uses multiple web developer tools, rapid development tools, and other technology to create and deploy highly engaging and interactive e-learning solutions for all team members at American Savings Bank."
	},
		{
		"employer" : "Hawaiian Telcom",
		"title" : "E-Learning Developer",
		"location" : "Honolulu, HI",
		"dates" : "March 2014 - June 2015",
		"description" : "Provided in-depth consultation and analysis to stakeholders and organizational units, determined intervention types, and developed leadership-focused ILT courses and highly interactive e-learning courses."
	},
		{
		"employer" : "ABET",
		"title" : "Training Manager",
		"location" : "Baltimore, MD",
		"dates" : "2010 - 2014",
		"description" : "Led and managed all core business training for over 1,500 volunteers worldwide and ensured quality by developing leaders and by building systems of continuous quality improvement and organizational assessment."
	},
		{
		"employer" : "United State Census Bureau",
		"title" : "Research Support Specialist",
		"location" : "Washington, DC",
		"dates" : "2008 - 2010",
		"description" : "Conducted qualitative survey assessments (in Spanish and English) and enthogrphic observations for the 2010 Census, the 2010 Census Group Quarters Enumeration, the Census Coverage Measurement, and the American Community Survey."
	},
		{
		"employer" : "Austin Community College",
		"title" : "Adjunct Professor",
		"location" : "Austin, TX",
		"dates" : "2005 - 2008",
		"description" : "Designed, developed, and delivered needs-centered face-to-face and internet-based Spanish language training courses to meet student needs and institutional objectives."
	},
		{
		"employer" : "Mattress Firm",
		"title" : "Store Manager",
		"location" : "Austin, TX",
		"dates" : "2004 - 2005",
		"description" : "Managed all store operations, customer service, sales, and inventory."
	},
		{
		"employer" : "University of Texas at Austin",
		"title" : "Assstant Instructor",
		"location" : "Austin, TX",
		"dates" : "2001 - 2004",
		"description" : "Designed, developed, and delivered needs-centered face-to-face and internet-based Spanish language training courses to meet student needs and institutional objectives."
	}
	]
}

work.display = function(){

	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription + "<br>");

	}
};
work.display();


var projects = {
	"web" : [
		{
		"name" : "Bootstrap Portfolio",
		"dates" : "2015",
		"description" : "This project made use of HTML5, CSS3, Responsive Design, and the Bootsrap Framework.",
		"image" : "images/portforlio-sample.png"
	},
		{
		"name" : "Information Security E-Learning",
		"dates" : "2014",
		"description" : "This project is an interactive, sceanrio-based e-learning that uses complex branching to imerse learners in situations that simulate the actual problems of protecting company informaiton.",
		"image" : "images/info-sec-ht.png"
	},
		{
		"name" : "Code of Business Conduct E-Learning",
		"dates" : "2015", 
		"description" : "This e-learning makes use of tabs and branching to immerse learners in situations that simulate the actual problems that address the company code of business conduct.",
		"image" : "images/code-of-conduct.png"
	},
		{
		"name" : "Court Counter Android App",
		"dates" : "2016",
		"description" : "This Android app project is simple app that keeps track of the scores of two oposing teams at a basketball game. In creating this app, I made use of Android SDK, XML, and Java.",
		"image" : "images/courtcounter.png"
	}
]}


projects.display = function(){
	$("#projects").append(HTMLprojectStart);

	for(var project in projects.web){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%" , projects.web[project].name);
		var formattedProjectDates = HTMLprojectDates.replace("%data%" , projects.web[project].dates);
		var formattedProjectImage = HTMLprojectImage.replace("%data%" , projects.web[project].image);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.web[project].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectImage);
		$(".project-entry:last").append(formattedProjectDescription);
	}
};

projects.display();

$("#mapDiv").append(googleMap);
