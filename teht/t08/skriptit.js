document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
function mOver(obj) {
    obj.innerHTML = "Kiitos!"
}
function mOut(obj) {
    obj.innerHTML = "Tuo hiiri päälleni"
}