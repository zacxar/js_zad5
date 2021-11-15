const kolory = ['Tomato', 'Cyan', 'DarkMagenta', 'Gold', 'Maroon'];

var elements = document.getElementsByTagName('p');

for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = kolory[i];
  elements[i].title = elements[i].textContent.length;

  elements[i].onclick = function () {
    this.style.border = 'solid green';

    if ((i + 1) % 2 === 0) {
      elements[i].style.backgroundColor = 'LightGray';
    } else {
      elements[i].style.backgroundColor = 'DarkGray';
    }

    for (let j = 0; j < elements.length; j++) {
      if (j > 0 && j <= elements.length - 1) {
        if (j == i - 1) elements[j].style.border = 'solid blue';
        else if (j == i + 1) elements[j].style.border = 'solid orange';
      }
      if (j < i - 1 && j > i + 1) {
        elements[j].removeAttribute('border');
      }
    }
  };
}