// Display Resume

// get references of form and generatedResume
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resumeDisplay"
) as HTMLDivElement;
const buttonSection = document.getElementById(
  "ButtonSection"
) as HTMLDivElement;

// Get references to buttons (initially hidden)
const editBtn = document.getElementById("editBtn") as HTMLButtonElement;
const printBtn = document.getElementById("printBtn") as HTMLButtonElement;
const shareBtn = document.getElementById("shareBtn") as HTMLButtonElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // prevent page reload

  // Collect data

  // Personal Information`
  const fullName = (document.getElementById("fullName") as HTMLInputElement)
    .value; // stored outside the data collection due to creation or unique url because we need to declare fullname in that but when it is local scope at copy url section fullname not accessible
  const profession = (document.getElementById("profession") as HTMLInputElement)
    .value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedIn = (document.getElementById("linkedin") as HTMLInputElement)
    .value;

  // Education
  const educationInputs = document.querySelectorAll(
    "#educationInputs .input-rows"
  );
  const education: { institution: string; course: string }[] = [];
  educationInputs.forEach((row) => {
    const institution = (
      row.querySelector('input[placeholder="Institution"]') as HTMLInputElement
    ).value;
    const course = (
      row.querySelector(
        'input[placeholder="Course/Degree"]'
      ) as HTMLInputElement
    ).value;
    if (institution && course) {
      education.push({ institution, course });
    }
  });

  // Projects
  const projectInputs = document.querySelectorAll("#projectInputs .input-rows");
  const projects: { name: string; url: string }[] = [];
  projectInputs.forEach((row) => {
    const name = (
      row.querySelector('input[placeholder="Project Name"]') as HTMLInputElement
    ).value;
    const url = (
      row.querySelector('input[placeholder="Project URL"]') as HTMLInputElement
    ).value;
    if (name && url) {
      projects.push({ name, url });
    }
  });

  // Skills
  const skillInputs = document.querySelectorAll("#skillInputs input");
  const skills: string[] = [];
  skillInputs.forEach((input) => {
    const skill = (input as HTMLInputElement).value;
    if (skill) {
      skills.push(skill);
    }
  });

  const summary = (document.getElementById("summary") as HTMLTextAreaElement)
    .value;

  document.getElementById("resumeFormContainer")!.style.display = "none";

  // Generate the resume and content dynamically
  const resume = `
    <h2>Resume</h2>
    <div class="formsection">
      <h3>Personal Information</h3>
      <div class="input-group">
        <p><b>Name:</b><span contenteditable="false" class="editable-field" spellcheck="false">${fullName}</span></p>
        <p><b>Profession:</b><span contenteditable="false" class="editable-field" spellcheck="false">${profession}</span></p>
        <p><b>Phone Number:</b><span contenteditable="false" class="editable-field" spellcheck="false">${phone}</span></p>
        <p><b>Email Address:</b><span contenteditable="false" class="editable-field" spellcheck="false">${email}</span></p>
        <p><b>LinkedIn:</b><span contenteditable="false" class="editable-field" spellcheck="false">${linkedIn}</span></p>
      </div>
    </div>

    <div class="formsection">
      <h3>Education</h3>
      ${education
        .map(
          ({ institution, course }) => `
        <div class="input-rows">
          <p><b>Institution:</b><span contenteditable="false" class="editable-field" spellcheck="false"> ${institution}</span></p>
          <p><b>Course/Degree:</b><span contenteditable="false" class="editable-field" spellcheck="false">${course}</span></p>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="formsection">
      <h3>Professional Summary</h3>
      <div class="input-group">
        <p contenteditable="false" class="editable-field" spellcheck="false">${summary}</p>
      </div>
    </div>

    <div class="formsection">
      <h3>Projects</h3>
      ${projects
        .map(
          ({ name, url }) => `
        <div class="input-rows">
          <p><b>Project Name:</b><span contenteditable="false" class="editable-field" spellcheck="false"> ${name}</span></p>
          <p><b>Project URL:</b><span contenteditable="false" class="editable-field" spellcheck="false">${url}</span></p>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="formsection">
      <h3>Skills</h3>
      <div class="input-rows">
        ${skills
          .map(
            (skill) =>
              `<p contenteditable="false" class="editable-field" spellcheck="false">${skill}</p>`
          )
          .join("")}
      </div>
    </div>
  `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.style.display = "block";
    resumeDisplayElement.innerHTML = resume;
    buttonSection.style.display = "block";
  }
});

// Button Functionalities

// Edit Resume
let anc = document.getElementById("anc");

editBtn?.addEventListener("click", () => {
  const editableFields = document.querySelectorAll(".editable-field");
  editableFields.forEach((field) => {
    (field as HTMLElement).setAttribute("contenteditable", "true");
  });
});

// Print Resume
  printBtn?.addEventListener("click", () => {
    window.print();

  });