
// To increase the counter dynamically 
const ctr = document.querySelectorAll('.token');
    let scrollStarted = false;
    scrollPage();
    function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 140 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  }
 
}




function countUp() {
ctr.forEach((token) => {
token.innerText = '0';

const updateCounter = () => {
  // Get count target
  const target = +token.getAttribute('data-target');
  // Get current counter value
  const c = +token.innerText;
console.log("hii")
  // Create an increment
  const increment = target / 100;

  // If counter is less than target, add increment
  if (c < target) {
    // Round up and set counter value
    token.innerText = `${Math.ceil(c + increment)}`;

    setTimeout(updateCounter, 200);
  } else {
    token.innerText = target;
  }
};

updateCounter();
});
}
