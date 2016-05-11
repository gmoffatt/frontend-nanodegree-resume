/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Greg Moffatt");

 //var awesomeThoughts = "I am Greg and I am AWESOME!";
 //console.log(awesomeThoughts);

 //var funThoughts = 
 //	awesomeThoughts.replace("AWESOME", "FUN");

 //console.log(awesomeThoughts);
// console.log(funThoughts);

 //$("#main").append(funThoughts);

var bio = {
	"name": "Greg Moffatt",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "262-422-7964",
		"email": "moffattgh@gmail.com",
		"github": "gmoffatt",
		"twitter": "@gregamoffatt",
		"location": "Germantown, WI"
	},
	"message": "Thank you for viewing my resume",
	"bioPic": "images/fry.jpg",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "GitHub"]
};


function displayBio() {
var bioRole = bio.role
var formattedRole = HTMLheaderRole.replace("%data%", bioRole);
$("#header").prepend(formattedRole);

var bioName = bio.name
var formattedName = HTMLheaderName.replace("%data%", bioName);
$("#header").prepend(formattedName);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var mobile = bio.contacts.mobile;
var formattedBiomobile = HTMLmobile.replace("%data%", mobile);
$("#header").append(formattedBiomobile);

var email = bio.contacts.email;
var formattedBioemail = HTMLemail.replace("%data%", email);
$("#header").append(formattedBioemail);

var github = bio.contacts.github;
var formattedBiogithub = HTMLgithub.replace("%data%", github);
$("#header").append(formattedBiogithub);

var twitter = bio.contacts.twitter;
var formattedBiotwitter = HTMLtwitter.replace("%data%", twitter);
$("#header").append(formattedBiotwitter);

var homeLocation = bio.contacts.location;
var formattedBiolocation = HTMLlocation.replace("%data%", homeLocation);
$("#header").append(formattedBiolocation);

var message = bio.message;
var formattedBiomessage = HTMLwelcomeMsg.replace("%data%", message);
$("#header").append(formattedBiomessage);
}

displayBio();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Technical Support Representative II",
		"dates": "September 2008 - present",
		"location": "Milwaukee, WI",
		"description": "Helping customers with U-verse related technical issues - TV, VoIP, and internet"
	},
	{
		"employer": "Merge Healthcare",
		"title": "Technical Support Representative I",
		"dates": "January 2008 - September 2008",
		"location": "West Allis, WI",
		"description": "Provided software support to clinics and hospitals on their imaging archive systems"
	},
	{
		"employer": "Spancrete",
		"title": "Project Drafter",
		"dates": "September 2006 - January 2008",
		"location": "Waukesha, WI",
		"description": "Created construction plans, details, and elevations for precast components of parking structures, condos, and sports stadiums"
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Moraine Park",
		"location": "Fond du Lac, WI",
		"degree": "Associates Degree",
		"major": "Civil Engineering - Structural",
		"dates": "1999-2001",
		"url": "http://www.morainepark.edu"
	}
	],
	"onlineClasses": [
	{
		"title": "Front End Nanodegree",
		"school": "Udacity",
		"dates": "2016-2016",
		"url": "www.udacity.com"
	},
	{
		"title": "Associates Degree - Mobile Telecommunications",
		"school": "Pace University",
		"location": "Online",
		"dates": "2013-2015",
		"url": "www.pace.edu"
	}
	]
};

var projects = {
	"project": [
	{
		"title": "Project 1",
		"dates": "2016-2016",
		"description": "Fantastic Project 1",
		"image": "images/project1.jpg"
	},
	{
		"title": "Project 2",
		"dates": "2016-2016",
		"description": "Amazing Project 2",
		"image": "images/project2.jpg"
	}
	]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
$("#skills").append(formattedSkill);

}

function displayWork() {
for (jobs in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);

	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
	$(".work-entry:last").append(formattedDescription);

}
}

displayWork();


function displayProjects() {
for (project in projects.project) {
	$("#projects").append(HTMLprojectStart);

	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
	$(".project-entry:last").append(formattedprojectTitle);

	var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
	$(".project-entry:last").append(formattedprojectDates);

	var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
	$(".project-entry:last").append(formattedprojectDescription);

	var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[project].image);
	$(".project-entry:last").append(formattedprojectImage);

}
}

displayProjects();


function displaySchool() {
for (schools in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);

	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);

	var formattedSchoolTitle = formattedschoolName + formattedschoolDegree;
	$(".education-entry:last").append(formattedSchoolTitle);

	var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
	$(".education-entry:last").append(formattedschoolDates);

	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
	$(".education-entry:last").append(formattedschoolLocation);

	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
	$(".education-entry:last").append(formattedschoolMajor);

}
}

displaySchool();

function displayOnline() {
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
for (onlineClasses in education.onlineClasses) {

	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClasses].title);

	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClasses].school);

	var formattedOnlineName = formattedonlineTitle + formattedonlineSchool;
	$(".education-entry:last").append(formattedOnlineName);

	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClasses].dates);
	$(".education-entry:last").append(formattedonlineDates);

	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClasses].url);
	$(".education-entry:last").append(formattedonlineURL);

}
}

displayOnline();


function inName(name) {
    var name = name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
    
    return finalName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);