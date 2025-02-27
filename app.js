const API_KEY = "AIzaSyCS86QznFRGeukPMiYnxxejGquOVsTSp3Y";  

fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    contents: [{ parts: [{ text: "Tell me a fun fact about space." }] }]
  })
})
  .then(response => response.json())
  .then(data => console.log(data.candidates[0].content.parts[0].text)) 
  .catch(error => console.error("Error:", error));
