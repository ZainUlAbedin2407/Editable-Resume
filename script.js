// Display Resume
// get references of form and generatedresume
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resumeDisplay");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect data
    // Personal Information`
    var fullName = document.getElementById("fullName").value;
    var profession = document.getElementById("profession").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedIn = document.getElementById("linkedin").value;
    // Education
    var educationInputs = document.querySelectorAll('#educationInputs .input-rows');
    var education = [];
    educationInputs.forEach(function (row) {
        var institution = row.querySelector('input[placeholder="Institution"]').value;
        var course = row.querySelector('input[placeholder="Course/Degree"]').value;
        if (institution && course) {
            education.push({ institution: institution, course: course });
        }
    });
    // Projects
    var projectInputs = document.querySelectorAll('#projectInputs .input-rows');
    var projects = [];
    projectInputs.forEach(function (row) {
        var name = row.querySelector('input[placeholder="Project Name"]').value;
        var url = row.querySelector('input[placeholder="Project URL"]').value;
        if (name && url) {
            projects.push({ name: name, url: url });
        }
    });
    // Skills
    var skillInputs = document.querySelectorAll('#skillInputs input');
    var skills = [];
    skillInputs.forEach(function (input) {
        var skill = input.value;
        if (skill) {
            skills.push(skill);
        }
    });
    var summary = document.getElementById("summary").value;
    // Generate the resume and content dynamically
    var resume = "\n    <h2>Resume</h2>\n    <div class=\"formsection\">\n      <h3>Personal Information</h3>\n      <div class=\"input-group\">\n        <p><b>Name:</b><span contenteditable=\"true\" spellcheck=\"false\">".concat(fullName, "</span></p>\n        <p><b>Profession:</b><span contenteditable=\"true\" spellcheck=\"false\">").concat(profession, "\n</span</p>\n        <p><b>Phone Number:</b><span contenteditable=\"true\" spellcheck=\"false\">").concat(phone, "</span></p>\n        <p><b>Email Address:</b><span contenteditable=\"true\" spellcheck=\"false\">").concat(email, "</span></p>\n        <p><b>LinkedIn:</b><span contenteditable=\"true\" spellcheck=\"false\">").concat(linkedIn, "</span></p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Education</h3>\n      ").concat(education.map(function (_a) {
        var institution = _a.institution, course = _a.course;
        return "\n        <div class=\"input-rows\">\n          <p><b>Institution:</b><span contenteditable=\"true\" spellcheck=\"false\"> ".concat(institution, "</span></p>\n          <p><b>Course/Degree:</b><span contenteditable=\"true\" spellcheck=\"false\">").concat(course, "</span></p>\n        </div>\n      ");
    }).join(''), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Professional Summary</h3>\n      <div class=\"input-group\">\n        <p contenteditable=\"true\" spellcheck=\"false\">").concat(summary, "</p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Projects</h3>\n      ").concat(projects.map(function (_a) {
        var name = _a.name, url = _a.url;
        return "\n        <div class=\"input-rows\">\n          <p><b>Project Name:</b><span contenteditable=\"true\" spellcheck=\"false\"> ".concat(name, "</span></p>\n          <p><b>Project URL:</b> ").concat(url, "</p>\n        </div>\n      ");
    }).join(''), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Skills</h3>\n      <div class=\"input-rows\">\n        ").concat(skills.map(function (skill) { return "<p contenteditable=\"true\" spellcheck=\"false\">".concat(skill, "</p>"); }).join(''), "\n      </div>\n    </div>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
});
