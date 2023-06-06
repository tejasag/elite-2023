let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  // stop form submission
  event.preventDefault();
  alert(`Name: ${form.elements["name"].value}
  Email: ${form.elements["email"].value}
  Date of birth: ${form.elements["dob"].value}
  About: ${form.elements["about"].value}
  Achievements: ${form.elements["achievements"].value}
  Grade: ${form.elements["grade"].value}
  Notifications: ${form.elements["notif"].value}`);
});
