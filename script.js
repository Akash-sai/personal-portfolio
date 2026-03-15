function showMessage() {
  alert("Thank you for visiting my portfolio!");
}

function submitForm() {
  const name = document.getElementById("name").value;
  const formMessage = document.getElementById("formMessage");

  formMessage.innerText = "Thank you, " + name + "! Your message has been sent successfully.";
  
  document.querySelector("form").reset();
  return false;
}