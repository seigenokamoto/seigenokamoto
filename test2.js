const unclear1 = document.getElementById('anser1');
const unclear3 = document.getElementById('anser3');
const unclear4 = document.getElementById('anser4');
const clear2 = document.getElementById('anser2');

const resultArea = document.getElementById('resultArea');

function batsu() {
    const ng = document.createElement('h3');
    ng.innerText = '不正解';
    while (resultArea.firstChild) {
    resultArea.removeChild(resultArea.firstChild);
  }
  resultArea.appendChild(ng);
}

unclear1.onclick = batsu

unclear3.onclick = batsu

unclear4.onclick = batsu

clear2.onclick = function() {
    const ok = document.createElement('h3');
    ok.innerText = '正解';
    const next = document.createElement('a')
    next.innerText = '次へ';
    next.setAttribute('href','test3.html')
    while (resultArea.firstChild) {
    resultArea.removeChild(resultArea.firstChild);
  }
  resultArea.appendChild(ok);
  resultArea.appendChild(next);
}

