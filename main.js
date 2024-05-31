document.getElementById('checkVowels').addEventListener('click', checkVowels);
function checkVowels(){
  let text = document.getElementById('textarea').value.toLowerCase();
  let vowelCount = 0;
  

   for(let i = 0; i<text.length; i++) {
    let char = text.charAt(i);
    if(isVowel(char)) {
vowelCount++;
    }

   }
   const result = document.getElementById('result');
   result.textContent = 'Total vowels: ' + vowelCount;
}

function isVowel(char){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}