// Display Resume
// get references of form and generatedResume
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resumeDisplay");
var buttonSection = document.getElementById("ButtonSection");
// Get references to buttons (initially hidden)
var editBtn = document.getElementById("editBtn");
var printBtn = document.getElementById("printBtn");
var shareBtn = document.getElementById("shareBtn");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect data
    // Personal Information`
    var fullName = document.getElementById("fullName")
        .value; // stored outside the data collection due to creation or unique url because we need to declare fullname in that but when it is local scope at copy url section fullname not accessible
    var profession = document.getElementById("profession")
        .value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedIn = document.getElementById("linkedin")
        .value;
    // Education
    var educationInputs = document.querySelectorAll("#educationInputs .input-rows");
    var education = [];
    educationInputs.forEach(function (row) {
        var institution = row.querySelector('input[placeholder="Institution"]').value;
        var course = row.querySelector('input[placeholder="Course/Degree"]').value;
        if (institution && course) {
            education.push({ institution: institution, course: course });
        }
    });
    // Projects
    var projectInputs = document.querySelectorAll("#projectInputs .input-rows");
    var projects = [];
    projectInputs.forEach(function (row) {
        var name = row.querySelector('input[placeholder="Project Name"]').value;
        var url = row.querySelector('input[placeholder="Project URL"]').value;
        if (name && url) {
            projects.push({ name: name, url: url });
        }
    });
    // Skills
    var skillInputs = document.querySelectorAll("#skillInputs input");
    var skills = [];
    skillInputs.forEach(function (input) {
        var skill = input.value;
        if (skill) {
            skills.push(skill);
        }
    });
    var summary = document.getElementById("summary")
        .value;
    document.getElementById("resumeFormContainer").style.display = "none";
    // Generate the resume and content dynamically
    var resume = "\n    <h2>Resume</h2>\n    <div class=\"formsection\">\n      <h3>Personal Information</h3>\n      <div class=\"input-group\">\n        <p><b>Name:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">".concat(fullName, "</span></p>\n        <p><b>Profession:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(profession, "</span></p>\n        <p><b>Phone Number:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(phone, "</span></p>\n        <p><b>Email Address:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(email, "</span></p>\n        <p><b>LinkedIn:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(linkedIn, "</span></p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Education</h3>\n      ").concat(education
        .map(function (_a) {
        var institution = _a.institution, course = _a.course;
        return "\n        <div class=\"input-rows\">\n          <p><b>Institution:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\"> ".concat(institution, "</span></p>\n          <p><b>Course/Degree:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(course, "</span></p>\n        </div>\n      ");
    })
        .join(""), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Professional Summary</h3>\n      <div class=\"input-group\">\n        <p contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(summary, "</p>\n      </div>\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Projects</h3>\n      ").concat(projects
        .map(function (_a) {
        var name = _a.name, url = _a.url;
        return "\n        <div class=\"input-rows\">\n          <p><b>Project Name:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\"> ".concat(name, "</span></p>\n          <p><b>Project URL:</b><span contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">").concat(url, "</span></p>\n        </div>\n      ");
    })
        .join(""), "\n    </div>\n\n    <div class=\"formsection\">\n      <h3>Skills</h3>\n      <div class=\"input-rows\">\n        ").concat(skills
        .map(function (skill) {
        return "<p contenteditable=\"false\" class=\"editable-field\" spellcheck=\"false\">".concat(skill, "</p>");
    })
        .join(""), "\n      </div>\n    </div>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.style.display = "block";
        resumeDisplayElement.innerHTML = resume;
        buttonSection.style.display = "block";
    }
});
// Button Functionalities
// Edit Resume
var anc = document.getElementById("anc");
editBtn === null || editBtn === void 0 ? void 0 : editBtn.addEventListener("click", function () {
    var editableFields = document.querySelectorAll(".editable-field");
    editableFields.forEach(function (field) {
        field.setAttribute("contenteditable", "true");
    });
});
// Print Resume
printBtn === null || printBtn === void 0 ? void 0 : printBtn.addEventListener("click", function () {
    window.print();
});
