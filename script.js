///////////  function for generate pin number////////////////////////////////////
function generateCode(){
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("showGeneratedPin").value = randomNum;
    }
  
/////// function for try left section ////////
function tryLeft(){
    const tryLeftNumber = document.getElementById("tryLeft");
    const tryLeftValue = parseFloat(tryLeftNumber.innerText);
    const remainingTry = tryLeftValue - 1;
    tryLeftNumber.innerText = remainingTry;
    if(tryLeftNumber.innerText == 0){
        document.getElementById('submit-button').style.display = 'none'
    }
}
////////////// pin match/submit button funtion//////////////////////////////
function pinMatch() {
        const getGenerateCode = document.getElementById("showGeneratedPin").value
        const getInputCode = document.getElementById("inputNumber").value

        if(getGenerateCode == '' || getInputCode == ''){
            alert('Please Input Pin Number');
        }
        else if(getGenerateCode == getInputCode){
            document.getElementById("pin-matched").style.display = 'block';
            document.getElementById("pin-not-match").style.display = 'none';
        }
        else{
            document.getElementById("pin-not-match").style.display = 'block';
            document.getElementById("pin-matched").style.display = 'none';
            tryLeft()
        }   
    }