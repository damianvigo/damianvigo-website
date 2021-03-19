const d = document;

export default class TextAnimated {
  constructor(elementAnimateText, objective) {
    this.text = d.querySelector(elementAnimateText),
    this.objective = d.querySelector(objective);
    this.letters = this.text.textContent.split(''); // string a array.
  // console.log(letters);
  // Un array por cada letra
 
  this.text.textContent = '';

  this.letters.forEach((letter) => {
    let character = letter === ' ' ? '&nbsp;' : letter;

    this.text.innerHTML =
      this.text.innerHTML +
      `
      <div>
        <span>${character}</span>
        <span class='second-line'>${character}</span>
      </div>
    `;
  });

  this.objective.addEventListener('mouseenter', () => {
    let count = 0;

    const interval = setInterval(() => {
      if(count < this.text.children.length) {
          this.text.children[count].classList.add('animation');
          count += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });

  this.objective.addEventListener('mouseleave', () => {
    let count = 0;

    const interval = setInterval(() => {
      if(count < this.text.children.length) {
          this.text.children[count].classList.remove('animation');
          count += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });

 }
}


/* export default function textAnimation(id) {
  const text = d.getElementById(id),
    letters = text.textContent.split(''); // string a array.
  // console.log(letters);
  // Un array por cada letra
  text.textContent = '';

  letters.forEach((letter) => {
    let character = letter === ' ' ? '&nbsp;' : letter;

    text.innerHTML =
      text.innerHTML +
      `
      <div>
        <span>${character}</span>
        <span class='second-line'>${character}</span>
      </div>
    `;
  });

  text.addEventListener('mouseenter', () => {
    let count = 0;

    const interval = setInterval(() => {
      if(count < text.children.length) {
          text.children[count].classList.add('animation');
          count += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });

  text.addEventListener('mouseleave', () => {
    let count = 0;

    const interval = setInterval(() => {
      if(count < text.children.length) {
          text.children[count].classList.remove('animation');
          count += 1;
      } else {
        clearInterval(interval);
      }
    }, 30);
  });
}
 */