const panels = document.querySelectorAll('.panel');

// function to remove active class
let removeActiveClass = () => {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}

// change active class when clicked
panels.forEach(panel => {
  panel.addEventListener('click', function() {
    removeActiveClass();
    panel.classList.add('active');
  });
})

