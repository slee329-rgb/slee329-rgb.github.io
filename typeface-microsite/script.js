let isLowercase = false; 

document.addEventListener('click', () => {
  const circles = document.querySelectorAll('.circle'); 

  circles.forEach(circle => {
    const text = circle.textContent;
    circle.textContent = isLowercase ? text.toUpperCase() : text.toLowerCase();
  });

  isLowercase = !isLowercase; 
});