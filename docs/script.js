/* Navigationsleiste */
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/* Skills */
const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Copy & Paste', 'Deutsch', 'Englisch', 'Französisch'],
        datasets: [{
            label: 'Punkte von 1-10',
            data: [8, 7, 3, 4, 10, 9, 7, 7],
            borderWidth: 2,
            backgroundColor: '#6581b16b',
            borderColor: '#6581b1',
            pointBackgroundColor: '#4080ca',
            pointBorderColor: '#4080ca',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#284a7a',
            pointHoverBorderColor: '#284a7a',
            }]
          },
    options: {
        scales: {
            r: {
              angleLines: {
                color: '#0a1d3d'
              },
              grid: {
                color: '#0a1d3d86'
              },
              pointLabels: {
                font: {
                  size: 15,
                  family: 'Poppins',
                },
                color: 'black'   
              },
                min: 0,
                max: 10,
                ticks: {
                    stepsize: 1,
                    display: false,
                }
            },
        },
    },
});

/* Lebenslauf */
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el){
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || documentElement.clientWidth)
  );
}

function callbackFunc() {
  for(var i = 0; i < items.length; i++){
    if (isElementInViewport(items[i])){
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")){
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);