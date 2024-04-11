const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const list = document.getElementById('item-list');
  const dotsContainer = document.getElementById('dots-container');

  const itemWidth = 200;
  const padding = 20;
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.item').length;
  const itemsPerDot = 3;
  const totalDots = Math.ceil(totalItems / itemsPerDot);

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - itemsPerDot + totalItems) % totalItems;
    scrollToIndex(currentIndex);
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex + itemsPerDot) % totalItems;
    scrollToIndex(currentIndex);
  });

  function scrollToIndex(index) {
    list.scrollLeft = index * (itemWidth + padding);
    updateDots(index);
  }

  function updateDots(index) {
    const activeDotIndex = Math.floor(index / itemsPerDot);
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeDotIndex);
    });
  }

  function createDots() {
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        const newIndex = i * itemsPerDot;
        scrollToIndex(newIndex);
      });
      dotsContainer.appendChild(dot);
    }
    updateDots(0); 
  }

  createDots();


  /* ========CAROUSEL FOR MOBILE=========== */
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const h4Elements = document.querySelectorAll('.col h4');
  
    h4Elements.forEach(function (h4) {
      h4.addEventListener('click', function () {
        const ulElement = h4.nextElementSibling;
        ulElement.classList.toggle('active');
      });
    });
  });

  

  
