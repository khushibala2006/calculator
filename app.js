function append(value) {
    const display = document.getElementById('result');
    display.value += value;
}
function clearResult(value){
    document.getElementById('result').value = " ";

}
function calculate(value){
    const display = document.getElementById('result');
    try{
        display.value = eval(display.value);

    }catch(e){
       display.value= "error";
    }
   

}