// Validate Contact Form
function validateContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  alert("Thank you for contacting us!");
  return true;
}

// Validate Donation Form
function validateDonationForm() {
  const name = document.getElementById("donorName").value.trim();
  const email = document.getElementById("donorEmail").value.trim();
  const amount = parseFloat(document.getElementById("donationAmount").value);
  const payment = document.getElementById("paymentMethod").value;

  if (!name || !email || isNaN(amount) || !payment) {
    alert("Please complete all required fields.");
    return false;
  }

  if (amount < 10) {
    alert("Minimum donation amount is RM10. Please enter a valid amount.");
    return false;
  }

  alert("Thank you for your donation of RM" + amount.toFixed(2) + "!");
  return true;
}
