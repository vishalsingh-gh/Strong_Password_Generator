// ===== Declaration of Variable ===== //
const btn = document.getElementById("Generate")
const newpass = document.getElementById("strong")
const slider = document.getElementById("range")
const sliderrange = document.getElementById("rangeval")
sliderrange.innerText = slider.value



const uppercasecheck = document.getElementById("capital")
const lowercasecheck = document.getElementById("small")
const symbolcheck = document.getElementById("symbol")
const numbercheck = document.getElementById("number")

const copybtn = document.getElementById("copypass")


// ===== Password Generation Logic ===== //

slider.addEventListener('input', (e) => {
  sliderrange.innerText = e.target.value
})


btn.addEventListener('click', () => {
   
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let small = 'abcdefghijklmnopqrstuvwxyz'
    let symbol = '!~#$%&*?<>/|-+.{}[]()-^_'
    let number = '0123456789'
    
    let newstr = ''; 

    if(uppercasecheck.checked){
      newstr = newstr+capital;
    }

     if(lowercasecheck.checked){
      newstr = newstr+small;
    }

     if(symbolcheck.checked){
      newstr = newstr+symbol;
    }

     if(numbercheck.checked){
      newstr = newstr+number;
    }

    if(newstr == 0){
      alert("Please Select The Option")
    }

    let latestpass = ''


    for(let i = 0; i<slider.value; i++){
      let random = Math.floor(Math.random()*newstr.length)
         latestpass = latestpass + newstr[random]
    }
    
     newpass.innerText = `${latestpass}`



})


copybtn.addEventListener('click', () => {
  window.navigator.clipboard.writeText(newpass.innerText)
  alert("Password Copied")
})





// ===== Password Strength Logic ===== //
const strengthVal = document.getElementById("strengthVal")

function showStrength() {
  let lengthScore = (slider.value / 16) * 50;  
  let variety = 0;

  if (uppercasecheck.checked) variety++;
  if (lowercasecheck.checked) variety++;
  if (numbercheck.checked) variety++;
  if (symbolcheck.checked) variety++;

  let varietyScore = (variety / 4) * 50; 
  let total = Math.round(lengthScore + varietyScore);

  updateStrength(total); 
}

function updateStrength(strength) {
  strengthVal.textContent = `Strength: ${strength}%`;

  if (strength > 75) {
    strengthVal.classList.add("strongStrength");
  } else {
    strengthVal.classList.remove("strongStrength");
  }
}


showStrength()

slider.addEventListener("input", showStrength)


document.querySelectorAll("input[type=checkbox]").forEach(cb => {
  cb.addEventListener("change", showStrength)
})
