//Toggle mobile menu
const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mobile');

menuToggleOpen.addEventListener('click', () => navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click', () => navMobileElement.classList.remove('active'));

//Toggle theme
const bodyElement = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if( currentTheme){
    bodyElement.classList.add('theme-light');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('theme-light');
    if ( bodyElement.classList.contains('theme-light')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme', 'themeActive');
    }
});

//Show dropdown menu
document.addEventListener('click', element => {
    const dropdown = document.querySelector('.dropdown');
    if (element.target.classList.contains('dropdown-btn')){
        dropdown.classList.add('active');
    }else{
        dropdown.classList.remove('active');
    }
});


// sidebar
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
  const pageWrapper = document.querySelector(".pageWrapper");
  const toggleBtn = document.getElementById("btn"); 
  const header = document.querySelector('.header');

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
     pageWrapper.classList.toggle("open"); 
    menuBtnChange();
     // Adjust other layout parts if sidebar is open
    if (sidebar.classList.contains("open")) {
      pageWrapper.classList.add("open");
    } else {
      pageWrapper.classList.remove("open");
      
    }
})
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-x");
    } else {
        closeBtn.classList.replace("bx-x","bx-menu");
    }
}

// Get side panel and buttons
const sidePanel = document.getElementById("sidePanel");
const openPanelBtn = document.getElementById("openPanelBtn");
const closePanelBtn = document.getElementById("closePanelBtn");

// Open side panel when the gear button is clicked
openPanelBtn.addEventListener("click", function() {
    // Rotate the gear button and open the side panel
    sidePanel.classList.add("open");
    openPanelBtn.classList.add("rotate");
    openPanelBtn.style.display = "none";
});

// Close side panel when the close button (X) is clicked
closePanelBtn.addEventListener("click", function() {
    // Rotate the gear button back and close the side panel
    sidePanel.classList.remove("open");
    openPanelBtn.classList.remove("rotate");
    openPanelBtn.style.display = "block";
});

// Close the side panel if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (event.target === sidePanel) {
        sidePanel.classList.remove("open");
        openPanelBtn.classList.remove("rotate");
        
    }
});

// search-btn
document.getElementById("search-btn").addEventListener("click", function() {
  const searchTerm = document.getElementById("search-input").value;
  if (searchTerm) {
    console.log("Searching for:", searchTerm);
  }
});
// chart

const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Total Orders',
            data: [45, 40, 55, 85, 55, 55, 70, 45, 30, 50, 75, 35],
            backgroundColor: '#00cba9' // Green
          },
          {
            label: 'Total Sales',
            data: [30, 25, 35, 60, 35, 30, 60, 35, 55, 75, 85, 50],
            backgroundColor: '#d6d6d6' // Light gray
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Growth'
            },
            beginAtZero: true,
            max: 90
          }
        }
      }
    });