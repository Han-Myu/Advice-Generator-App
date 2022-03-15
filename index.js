const getApi = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    document.getElementById("title").innerText = `ADVICE #${res.data.slip.id}`;
    document.getElementById("text").innerText = `"${res.data.slip.advice}"`;
    document.getElementById("text").style.color = "hsl(193, 38%, 86%)";
    document.getElementById("text").style.fontSize = "28px";
    document.getElementById("text").style.fontWeight = "800";
    document.getElementById("text").style.textAlign = "center";
    document.getElementById("title").style.letterSpacing = "3px"; 
    document.getElementById("title").style.textAlign = "center" 
  } catch (e) {
    console.log(e);
  }
};
