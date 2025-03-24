function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  }
  function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const nav = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");
    
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove("show");
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");

  function checkScroll() {
      const scrollThreshold = heroSection ? heroSection.offsetHeight : 100;

      if (window.scrollY > scrollThreshold) {
          header.classList.add("glassmorphed");
      } else {
          header.classList.remove("glassmorphed");
      }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run once on load
});

// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
}






document.querySelector('.category-container').addEventListener('click', function (e) {
  const categoryItem = e.target.closest('.category-item');
  if (categoryItem) {
    const category = categoryItem.getAttribute('data-category');
    window.location.href = `product.html?category=${category}`;
  }
});





// ✅ Make both image and "Shop Now" clickable
document.querySelectorAll('.dual-banner-item').forEach(banner => {
  banner.addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    window.location.href = `product.html?category=${category}`;
  });
});


document.querySelectorAll('.clickable-hero').forEach(hero => {
  hero.addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    window.location.href = `product.html?category=${category}`;
  });
});




// Show popup after 5 seconds
window.onload = function() {
  setTimeout(() => {
    document.getElementById('subscribePopup').style.display = 'flex';
  }, 5000);
};

// Open popup manually
function openPopup() {
  document.getElementById('subscribePopup').style.display = 'flex';
  document.getElementById('subscribeBtn').style.display = 'none';
}

// Close popup and show sticky Subscribe button
function closePopup() {
  document.getElementById('subscribePopup').style.display = 'none';
  document.getElementById('subscribeBtn').style.display = 'block';
}

// Handle Subscription
function submitSubscription() {
  const email = document.getElementById('subscriberEmail').value;
  if (!email.trim()) {
    alert("Please enter your email");
    return;
  }

  fetch('http://localhost:5500/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    closePopup();
    document.getElementById('subscribeBtn').style.display = 'none';
  })
  .catch(() => alert('Subscription failed'));
}



function openContactPopup() {
  document.getElementById('contactPopup').style.display = 'flex';
}

function closeContactPopup() {
  document.getElementById('contactPopup').style.display = 'none';
}



function submitPopup(event) {
  event.preventDefault();
  const userEmail = document.getElementById('userEmail').value;

  fetch('http://localhost:5500/submit-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: userEmail })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    closeContactPopup();
    document.getElementById('popupForm').reset();
  })
  .catch(err => {
    console.error('❌ Error:', err);
    alert('❌ Failed to submit. Try again.');
  });
}
