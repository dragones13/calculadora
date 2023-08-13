let outPutsScreen = document.getElementById("outPutsScreen")
function display(num){
    outPutsScreen.value += num
}
function Calculate()
try{
    outPutsScreen.value = eval
    (outPutsScreen.value);
}
catch(err){
    alert(Invalid)
}
function clear(){
    outPutsScreen.value = outPutsScreen.value
    .slice(0.-1)
}