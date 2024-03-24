document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("email-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form data
      var formData = new FormData(form);
  
      // Optional: Perform client-side validation if needed
      var firstName = formData.get("First-Name");
      var lastName = formData.get("Last-Name");
      var email = formData.get("email");
      var message = formData.get("field");
  
      if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Submit the form data asynchronously
      fetch("/submit-form", {
        method: "POST",
        body: formData
      })
      .then(function(response) {
        if (response.ok) {
          // Display success message
          document.querySelector(".w-form-done").style.display = "block";
          // Reset the form
          form.reset();
        } else {
          // Display error message
          document.querySelector(".w-form-fail").style.display = "block";
        }
      })
      .catch(function(error) {
        console.error("Error:", error);
        // Display error message
        document.querySelector(".w-form-fail").style.display = "block";
      });
    });
  });
  