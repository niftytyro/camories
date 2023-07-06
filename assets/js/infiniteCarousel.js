let noop = () => {};

let carouselContainer = document.getElementById("carousel-container");
let carouselCards = document.querySelectorAll(".carousel-card");
let cardWidth = carouselCards[0].getBoundingClientRect().width;
let previous = document.getElementById("previous");
let next = document.getElementById("next");

let currentIndex = 0;
let initialTotalCards = carouselCards.length;

next.addEventListener("click", onNext);
previous.addEventListener("click", onPrevious);

let isScrolling = false;
let scrollTimeout;
let fixCardPosition = noop;

carouselContainer.addEventListener("scroll", function (_) {
  isScrolling = true;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    isScrolling = false;
    fixCardPosition();
    fixCardPosition = noop;
  }, 100);
});

function onNext(_) {
  if (!isScrolling) {
    jumpToIndex(currentIndex + 1);
  }
}

function onPrevious(_) {
  if (!isScrolling) {
    jumpToIndex(currentIndex - 1);
  }
}

export default function init() {
  // Here we duplicate the cards twice.
  duplicateCards();

  carouselCards = document.querySelectorAll(".carousel-card");

  jumpToIndex(initialTotalCards);
}

function jumpTo(pos, behavior = "smooth") {
  carouselContainer.scrollTo({
    left: pos,
    behavior,
  });
}

function jumpToIndex(idx) {
  function calculatePos(idx) {
    let cardPos =
      carouselContainer.scrollLeft +
      carouselCards[idx].getBoundingClientRect().left -
      window.innerWidth / 2 +
      cardWidth / 2;
    let targetPos = cardPos;

    return Math.min(carouselContainer.scrollWidth, Math.max(0, targetPos));
  }

  jumpTo(calculatePos(idx));
  currentIndex = idx;

  if (idx < initialTotalCards) {
    idx = initialTotalCards + idx;
    fixCardPosition = () => {
      jumpTo(calculatePos(idx), "auto");
      currentIndex = idx;
    };
  } else if (idx > 2 * initialTotalCards - 1) {
    idx -= initialTotalCards;
    fixCardPosition = () => {
      jumpTo(calculatePos(idx), "auto");
      currentIndex = idx;
      console.log({ pos: calculatePos(idx), idx, currentIndex });
    };
  }
}

function duplicateCards() {
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = carouselContainer.children;

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < initialTotalCards; i++) {
      const clonedNode = children[i].cloneNode(true);
      carouselContainer.appendChild(clonedNode);
    }
  }
}
