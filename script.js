
fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCS86QznFRGeukPMiYnxxejGquOVsTSp3Y", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: "Explain how AI works" }]
      }],
      generationConfig: {
        maxOutputTokens: 200  
      }
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  