var list = document.getElementById('list');
var submit = document.getElementById('submit');
var del = document.getElementById('delete');
var input = document.getElementById('todo');

submit.addEventListener('click', clicksubmit);
del.addEventListener('click', clickdelete);

function clicksubmit(){
    var temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
}

function clickdelete(event){
}