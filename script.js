
var ul=document.getElementById("list")
var li;

var addButton=document.getElementById("add");
addButton.addEventListener("click",addItem);
var removeButton=document.getElementById("remove");
removeButton.addEventListener("click",removeItem);
var removeAllButton=document.getElementById("removeall");
removeAllButton.addEventListener("click",()=>{ ul.remove(); });

var getlist=document.getElementsByClassName("mycheck")[0];
var getinput=document.getElementById("check")



function addItem(){
    /* var newTodo=document.getElementById("input").value
    var newTodoData=document.createTextNode(newTodo);
    var newLabel=document.createElement("label").appendChild(newTodoData)
    document.querySelector("ul").appendChild(getlist).appendChild(getinput).appendChild(newLabel); */
    var input=document.getElementById("input");
    var inputValue=input.value;
    if(inputValue===""){
        setTimeout(()=>{
            var p=document.querySelector("p")
            p.className="visual";
            p.textContent='please add some data first'
            
        },30)
     
    }else{
        //create li
    li=document.createElement("li");
    
    //create checkbox
    var checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.setAttribute('id',"check");
    //create label
    var label=document.createElement("label");
    
    var labelData=document.createTextNode(inputValue)
    label.appendChild(labelData)
    //add these elements on web page
     ul.appendChild(li);
     li.appendChild(checkbox);
     li.appendChild(label);
     ul.insertBefore(li,ul.childNodes[0])//to insert your new todo at top
     
     //for delay so that could clearly see todos getting added to list
     setTimeout(()=>{
        li.setAttribute("class","visual");
     },3)
     input.value='';

    }

}
//remove all checked boxes
 function removeItem() {
    li=ul.children;
   // console.log(li);
  for(index=0;index<li.length;index++){
      while(li[index] && li[index].children[0].checked){
          ul.removeChild(li[index])
      }
  }
}

