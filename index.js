const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const templateParams = {
    to_name: 'Mark',
    from_name: name,
    from_email: email,
    message: message,
  };

  console.log(templateParams)

//   try {
//     const response = await fetch('https://api.emailjs.com/api/v1.1/YOUR_USER_ID/YOUR_TEMPLATE_ID', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'YOUR_EMAILJS_API_KEY',
//       },
//       body: JSON.stringify(templateParams),
//     });

//     if (response.ok) {
//       // Form submission was successful
//       alert('Your message has been sent successfully!');
//       form.reset(); // Clear the form fields
//     } else {
//       // Handle errors here
//       console.error('Email failed to send:', response.status);
//       alert('There was an error sending your message. Please try again later.');
//     }
//   } catch (error) {
//     // Handle network errors here
//     console.error('Network error:', error);
//     alert('There was an error sending your message. Please check your internet connection and try again.');
//   }
// });

})

submitButton.disabled = false;



// scrolll button to top 

// JavaScript for Scroll to Top Button

document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function() {
        // Calculate distance from the bottom
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

        // Show button if user is close to the bottom
        if (distanceFromBottom < 600) { // Adjust the value as needed
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll to top on button click
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// side menu 

  // JavaScript for opening and closing the sidebar menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const body = document.body;

  hamburgerBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open-sidebar');
      body.classList.toggle('blur-background');
  });

  closeSidebarBtn.addEventListener('click', function () {
      sidebar.classList.remove('open-sidebar');
      body.classList.remove('blur-background');
  });

  // Close the sidebar when clicking outside
  document.addEventListener('click', function (event) {
      if (!event.target.closest('#sidebar') && !event.target.closest('#hamburgerBtn')) {
          sidebar.classList.remove('open-sidebar');
          body.classList.remove('blur-background');
      }
  });