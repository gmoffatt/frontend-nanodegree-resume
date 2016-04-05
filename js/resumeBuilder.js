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


var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Greg Moffatt");
$("#header").prepend(formattedName);

var bio = {
	"name": "Greg",
	"role": "Web Developer",
	"contacts": {
		"mobile": "262-422-7964",
		"email": "moffattgh@gmail.com",
		"github": "gmoffatt",
		"twitter": "@gregamoffatt",
		"location": "Germantown, WI"
	},
	"message": "Welcome",
	"bioPic": "images/fry.jpg",
	"skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub"]
};

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

var home = bio.contacts.location;
var formattedBiolocation = HTMLlocation.replace("%data%", location);
$("#header").append(formattedBiolocation);

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
		"location": "Milwaukee, WI",
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
	"shools": [
	{
		"name": "Moraine Park",
		"location": "Fond du Lac, WI",
		"degree": "Associates",
		"major": "Civil Engineering - Structural",
		"dates": "1999-2001",
		"url": "http://www.morainepark.edu"
	}
	],
	"onlineClasses": [
	{
		"name": "Udacity",
		"location": "Online",
		"degree": "Nanodegree",
		"major": "Web Developer",
		"dates": "2016-2016",
		"url": "http://www.udacity.com"
	},
	{
		"name": "Pace University",
		"location": "Online",
		"degree": "Associates",
		"major": "Telecommunications",
		"dates": "2013-2015",
		"url": "http://www.pace.edu"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Project 1",
		"link": "sample link",
		"description": "Sample description"
	},
	{
		"title": "Project 2",
		"link": "sample link",
		"description": "Sample description"
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

}

function displayWork() {
for (jobs in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
	$(".work-entry:last").append(formattedDescription);

}
}

displayWork();

/*function displaySchool() {
for (jobs in work.jobs) {
	$("#education").append(HTMLschoolStart);

	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
	$(".work-entry:last").append(formattedDescription);

}
}

displaySchool();*/


function inName(name) {
    var name = name.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
    
    return finalName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);