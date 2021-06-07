let paragraphs = document.querySelectorAll('p');

const regex = /\W+/gm;

for(let i = 0; i < paragraphs.length; i++){
   const words = paragraphs[i].innerText.replaceAll(regex,' ').split(' ');
   for(word of words) {
     if(word.length >= 5) {
      paragraphs[i] = paragraphs[i].innerText.replaceAll(word, `<u>${word}</u>`);
     }
}
}

