const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const repl = document.getElementById('replay');

runAnimation();

function reset() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
    
  nums.forEach(num => {
    num.classList.value = '';
  });

    nums[0].classList.add('in');

  runAnimation()
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const penultimate = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if(e.animationName === 'goIn' && idx !== penultimate){
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling){
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });

  generateRandomPicture();

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomPicture() {

  images = [
    "../../content/images/food/almond.png",
    "../../content/images/food/bacon.png",
    "../../content/images/food/brocolli.png",
    "../../content/images/food/cheese.png",
    "../../content/images/food/chicken.png",
    "../../content/images/food/cream.png",
    "../../content/images/food/fish.png",
    "../../content/images/food/milk.png",
    "../../content/images/food/peach.png",
    "../../content/images/food/rice.png",
    
  ];


    const index = getRandomInt(images.length);
    const randomImage = images[index];
    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage;
}
