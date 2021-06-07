const paragraphs = document.querySelectorAll('p');

const regex = !/[^a-zA-Z0-9]/;

for(let i = 0; i < paragraphs.length; i++){
  const words = paragraphs[i].innerText;
  if(words !== regex) {
   words.replace('') 
  }else {
    words.join('');
  }
}

console.log(words);
