// Display Resume

// get references of form and generatedresume

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resumeDisplay"
) as HTMLDivElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // prevent page reload

  // Collect data

  // Personal Information`
  const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
  const profession = (document.getElementById("profession") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;

  // Education
  const educationInputs = document.querySelectorAll('#educationInputs .input-rows');
  const education: { institution: string; course: string }[] = [];
  educationInputs.forEach((row) => {
    const institution = (row.querySelector('input[placeholder="Institution"]') as HTMLInputElement).value;
    const course = (row.querySelector('input[placeholder="Course/Degree"]') as HTMLInputElement).value;
    if (institution && course) {
      education.push({ institution, course });
    }
  });

  // Projects
  const projectInputs = document.querySelectorAll('#projectInputs .input-rows');
  const projects: { name: string; url: string }[] = [];
  projectInputs.forEach((row) => {
    const name = (row.querySelector('input[placeholder="Project Name"]') as HTMLInputElement).value;
    const url = (row.querySelector('input[placeholder="Project URL"]') as HTMLInputElement).value;
    if (name && url) {
      projects.push({ name, url });
    }
  });

  // Skills
  const skillInputs = document.querySelectorAll('#skillInputs input');
  const skills: string[] = [];
  skillInputs.forEach((input) => {
    const skill = (input as HTMLInputElement).value;
    if (skill) {
      skills.push(skill);
    }
  });

  const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;

  // Generate the resume and content dynamically
  const resume = `
    <h2>Resume</h2>
    <div class="formsection">
      <h3>Personal Information</h3>
      <div class="input-group">
        <p><b>Name:</b><span contenteditable="true" spellcheck="false">${fullName}</span></p>
        <p><b>Profession:</b><span contenteditable="true" spellcheck="false">${profession}</span</p>
        <p><b>Phone Number:</b><span contenteditable="true" spellcheck="false">${phone}</span></p>
        <p><b>Email Address:</b><span contenteditable="true" spellcheck="false">${email}</span></p>
        <p><b>LinkedIn:</b><span contenteditable="true" spellcheck="false">${linkedIn}</span></p>
      </div>
    </div>

    <div class="formsection">
      <h3>Education</h3>
      ${education.map(({ institution, course }) => `
        <div class="input-rows">
          <p><b>Institution:</b><span contenteditable="true" spellcheck="false"> ${institution}</span></p>
          <p><b>Course/Degree:</b><span contenteditable="true" spellcheck="false">${course}</span></p>
        </div>
      `).join('')}
    </div>

    <div class="formsection">
      <h3>Professional Summary</h3>
      <div class="input-group">
        <p contenteditable="true" spellcheck="false">${summary}</p>
      </div>
    </div>

    <div class="formsection">
      <h3>Projects</h3>
      ${projects.map(({ name, url }) => `
        <div class="input-rows">
          <p><b>Project Name:</b><span contenteditable="true" spellcheck="false"> ${name}</span></p>
          <p><b>Project URL:</b> ${url}</p>
        </div>
      `).join('')}
    </div>

    <div class="formsection">
      <h3>Skills</h3>
      <div class="input-rows">
        ${skills.map((skill) => `<p contenteditable="true" spellcheck="false">${skill}</p>`).join('')}
      </div>
    </div>
  `;

  // Display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resume;
  }
});