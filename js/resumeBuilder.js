var bio = {
	"name" : "Naga Dandibhotla",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "815-572-1214",
		"email" : "nag.bharadwaja@gmail.com",
		"github" : "nagbharadwaja",
		"location" : "DeKalb"
	},
	"image" : "images/naga.jpg",
	"welcomeMsg" : "Hello people",
	"skills" : [
		"awesomeness", "programming", "delivering things"
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Foodie For All LLC",
			"title" : "Unpaid Web Developer Intern",
			"dates" : "June 2014 - August 2014",
			"location" : "New York",
			"description" : "Developed an application to access the restaurant details located in the New York City and store them in the database. Developed an application to monitor the menu pages of websites of the restaurants located in the New York City and notify the application user once there is a change in the menu."
		}
	]
	
};

var education = {
	"schools" : [
		{
			"name" : "Brilliant Institute of Engineering and Technology",
			"city" : "Hayathnagar",
			"major" : ["Information Technology"],
			"dates" : "2012"
		},
		{
			"name" : "Northern Illinois University",
			"city" : "DeKalb",
			"major" : ["Computer Science"],
			"dates" : "2015",
			"url" : "http://www.niu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Responsive Web Design",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Shaping up with Angular JS",
			"school" : "Code School",
			"dates" : "2015",
			"url" : "http://www.codeschool.com"
		}
	]
};

var projects = {
	"projects" : [
		{
			"name" : "Responsive Web Design",
			"type" : "Web Application",
			"description" : "A sample one page responsive website (for desktops, tablets, mobile phones) showing one of my works dealing with the front end technologies.",
			"dates" : "2015"
			
		},
		{
			"name" : "Concert Management System",
			"type" : "Web Application",
			"description" : "A web application automates the tasks of a concert management firm.",
			"dates" : "2013"
		},
		{
			"name" : "Physical Therapy Clinic",
			"type" : "Web Application",
			"description" : "A web application that automates the processes of therapists regarding their appointments and patient history.",
			"dates" : "2013"
		},
		{
			"name" : "Toys for Tots",
			"type" : "Web Application",
			"description" : "A web application that automates the manual functions performed by the coordinator(s) of Toys for Tots.",
			"dates" : "2014"
		}
	]
};



bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var bioPic = HTMLbioPic.replace("%data%", bio.image);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").prepend(formattedRole, formattedName).append(bioPic, formattedMsg);
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};

work.display = function(){	
	for(var job in work.jobs){
		// Create new div for work experience
		$("#workExperience").append(HTMLworkStart);	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkDesc);
	}
};

projects.display = function(){
	for(var item in projects.projects){
		// Create new div for projects
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].name);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDesc);
	}
};

education.display = function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolName, formattedDates, formattedMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
	}
};

//$("#main").append(internationalizeButton);

function inName(name){
	var internationalName;
	var nameArr = name.trim().split(" ");
	var lowName = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
	var capName = nameArr[1].toUpperCase();
	internationalName = lowName + ' ' + capName;
	return internationalName;
}

bio.display();
work.display();
education.display();
projects.display();

// Map showing locations I lived
$("#mapDiv").append(googleMap);
