let adviceId =  document.getElementById("advice-id");
let advice =  document.getElementById("advice");
let generate =  document.getElementById("generate");

generate.addEventListener('click',(event)=>{
  event.preventDefault();
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => showData(data))

  function showData(data){
    advice.textContent = `"${data.slip.advice}"`;
    adviceId.textContent = `#${data.slip.id}`
  }
  
})
