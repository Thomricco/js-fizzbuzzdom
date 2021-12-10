
const boxingHtml = document.querySelector(`.boxing`);

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0 && i!=0) {
        // divisibile per 5 o 3
        boxingHtml.innerHTML += '<div class="box box-bianco">FizBuz</div>'
    }
    else if (i % 5 === 0 && 1 !== 0) {
        // divisibile per 5
        boxingHtml.innerHTML += '<div class="box box-verde">Buz</div>'
    }
    else if (i % 3 === 0 && 1 !== 0) {
        // divisibile per 3
        boxingHtml.innerHTML += '<div class="box box-rosso">Fizz</div>'
    }
    else {
        boxingHtml.innerHTML += `<div class="box">${i}</div>`
    }
} 