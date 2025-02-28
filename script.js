let inputConetent = document.getElementById("inputBox").textContent

function APIcall(inputConetent){
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCS86QznFRGeukPMiYnxxejGquOVsTSp3Y", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${inputConetent}` }]
          }],
          generationConfig: {
            maxOutputTokens: 200  
          }
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
}



  




// const API_KEY = "";


const PROMPTFOO_BASE_URL= "https://api.promptfoo.dev";
const btn1=document.getElementById("light1");
const btn2=document.getElementById("light2");
const btn3=document.getElementById("light3");

let stringToTest="my ssn is 24395i30948";
let stats={
  isFlaggedInjection: false,
  isFlaggedPII: false,
  isFlaggedHarmful:false
}

async function isInjected(){
  
  const response=await fetch(`${PROMPTFOO_BASE_URL}/v1/guard`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: stringToTest
    })
  });
  let responseJson=await response.json();
  console.log(stringToTest)
  console.log(responseJson);
  return responseJson.results[0].flagged;
}
isInjected().then((response)=>{
  response?
  btn1.classList.toggle('bg-white', 'bg-red-600'): btn1.classList.toggle('bg-white','bg-green-600');
  
})


// pii detection
async function detectPII(){
  console.log(`${PROMPTFOO_BASE_URL}/v1/pii`);

  try{
    const response=await fetch(`${PROMPTFOO_BASE_URL}/v1/pii`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: stringToTest
      })
    });
    let responseJson=await response.json();
  
    btn2.classList.toggle('bg-white' ,'bg-white', 'bg-red-600');

    return {flagged: responseJson.results[0].flagged};

  }
  catch(error){
    btn2.classList.toggle('bg-white','bg-green-600');
    return {flagged: true}; 
 }
}
detectPII().then((response)=>{
  response.flagged ?
     btn1.classList.toggle('bg-white', 'bg-red-600'): btn1.classList.toggle('bg-white','bg-green-600');
  
})

// harmful content detection
async function isHarmful(){
  const response=await fetch(`${PROMPTFOO_BASE_URL}/v1/guard`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: stringToTest
    })
  });
  
  let responseJson=await response.json();
  console.log(stringToTest)
  console.log(responseJson);
  return responseJson.results[0].flagged;

}
isHarmful().then((response)=>{
  response?  btn3.classList.add('bg-white','bg-green-600'): btn3.classList.add('bg-white', 'bg-red-600');
})


