// function myFunction() {
//     document.getElementById("question-1").classList.remove("hidden")
//   }

document.getElementById('make-q1').addEventListener('click',function(){
    const accordion = document.getElementById("question-1");
    accordion.classList.toggle("hidden");


})
// function toggleDropdown(){
//     let dropdown= document.querySelector('#dropdown #make-q1');
//     dropdown.classList.toggle("hidden");
// }