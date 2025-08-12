// Simple placeholder JS for interactivity
document.querySelector('.search-bar button').addEventListener('click', () => {
  alert('Search functionality coming soon!');
});


document.getElementById('subscribeBtn').addEventListener('click', () => {
  const email = document.querySelector('.newsletter-form input').value;
  if (email.trim() === '') {
    alert('Please enter your email address!');
  } else {
    alert(`Subscribed successfully with ${email}`);
  }
});


// page 5
document.getElementById("applyCoupon").addEventListener("click", function () {
  const code = document.getElementById("coupon").value.trim();
  if (code.toLowerCase() === "discount60") {
    alert("Coupon applied!");
    document.querySelector(".discount").textContent = "- $60.00";
    document.querySelector(".total").textContent = "$1357.97";
  } else {
    alert("Invalid coupon!");
  }
});
