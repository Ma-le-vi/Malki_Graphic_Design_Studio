(function(){
  emailjs.init("JjmRvbYv04t9TmZjI");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "יש להזין שם";
    isValid = false;
  }

  if (!/^[0-9]{9,10}$/.test(phone.value)) {
    document.getElementById("phoneError").textContent = "טלפון לא תקין";
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById("emailError").textContent = "מייל לא תקין";
    isValid = false;
  }

  if (!isValid) return;

  emailjs.send("service_j5jk5kk", "template_3z84cxu", {
    name: name.value,
    phone: phone.value,
    email: email.value,
    message: message.value
  })
  .then(() => {
    alert("נשלח בהצלחה!");
    document.getElementById("contactForm").reset();
  })
  .catch(() => {
    alert("שגיאה בשליחה");
  });

});