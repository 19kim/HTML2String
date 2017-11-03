window.addEventListener('load', function() {
   document.getElementById('btnConvert').addEventListener('click', function() {
       var textBox = document.getElementById('inputSource');

       console.log(textBox.innerText);
       document.getElementById('result').innerText = (convertSource(textBox.value));
   });
});

function convertSource(src) {
    return src
        .replace(/ /g, '&nbsp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br />')
        .replace(/\t/g, '&nbsp&nbsp&nbsp&nbsp');
}