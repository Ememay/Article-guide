/*
    1 : get all head tag in the document ,1-1 : another neseccery elements
    2 : make an li and insert it to ul for every head tag
    3 : when btn clicked, "storyguidetoggle" class toggle for ul
*/
// 1
let heads = document.querySelectorAll('body h2 , h3 ,h4');
// 1-1
let ul = document.querySelector('.story-guid');
const storyguidbtn = document.querySelector('.story-guid-btn');
// 2
for (let i = 0; i < heads.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = heads[i].textContent;
    ul.appendChild(li);
    li.addEventListener('click', () => {
        heads[i].scrollIntoView()
    })
}
// 3
storyguidbtn.addEventListener('click', () => {
    ul.classList.toggle('storyguidetoggle');
})