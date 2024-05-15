document.getElementById("submitBtn").addEventListener("click", function() {
    var rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
      var ratingValue = rating.value;
      document.getElementById("selectedRating").innerText = "You selected " + ratingValue + " out of 5.";
      document.getElementById("confirmationMessage").style.display = "block";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("confirmationMessage").style.display = "none";
  });
  