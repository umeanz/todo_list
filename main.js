const btn = document.getElementById('btn');



btn.addEventListener('click', hello);

function hello(){
var item = document.getElementById('item').value;
 var li = document.createElement("li");
 var t = document.createTextNode(item); //html에 문자 생성 
 li.appendChild(t);

 if(item === ''){
    alert("typing word");
 }else {   
    document.getElementById("todolist").appendChild(li); 
 }

}