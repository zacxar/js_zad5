kolory = ['Tomato', 'Cyan', 'DarkMagenta', 'Gold', 'Maroon', 'Chartreuse', 'Coral', 'DarkGoldenRod', 'Olive'];
kolory = kolory.sort(() => Math.random() - Math.random());

var pelements = document.getElementsByTagName('p');
var helements = document.getElementsByTagName('h3');

function zad_1_2_3() {
    for (let i = 0; i < pelements.length; i++) {
        pelements[i].style.color = kolory[i];
        pelements[i].title = pelements[i].textContent.length;

        pelements[i].onclick = function () {
            pelements[i].style.border = 'solid green';

            if ((i + 1) % 2 === 0) {
                pelements[i].style.backgroundColor = 'LightGray';
            } else {
                pelements[i].style.backgroundColor = 'DarkGray';
            }

            for (let j = 0; j < pelements.length; j++) {
                if (j == i - 1) {
                    pelements[j].style.border = 'solid blue';
                    pelements[j].style.backgroundColor = '';
                }
                else if (j == i + 1) {
                    pelements[j].style.border = 'solid orange'
                    pelements[j].style.backgroundColor = '';
                }
                else if (j != i) pelements[j].removeAttribute('style');
            }
        };
    }
}

function zad_4() {
    let paragrafy = document.getElementById('paragrafy');
    let el = paragrafy.firstElementChild;
    let nr = 1
    while(el) {
        let header = document.createElement('h3');
        header.textContent = "Paragraf " + (nr);
        paragrafy.insertBefore(header, el);
        nr++;
        el = el.nextElementSibling;
    }
}

function zad_5() {
    for (let i = 0; i < helements.length; i++) {
        helements[i].onclick = function() {
            if (pelements[i].hidden === true)
                pelements[i].hidden = false;
            else pelements[i].hidden = true;
        }
    }
}

function zad_6() {
    let input = document.getElementById('nowy');
    let button = document.getElementById('klik');

    button.onclick = function () {
        let helements2 = document.getElementsByTagName('h3');
        let nowyh = document.createElement('h3');
        nowyh.textContent = 'nagłówek ' + (helements2.length + 1);

        let nowyp = document.createElement('p');
        nowyp.textContent = input.value;

        let pelements2 = document.getElementById("paragrafy");
        pelements2.appendChild(nowyh);
        pelements2.appendChild(nowyp);

        zad_1_2_3();
        zad4();
    }
}

zad_1_2_3();
zad_4();
zad_5();
zad_6();
