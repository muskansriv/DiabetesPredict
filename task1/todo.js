function add(){
    let item = document.getElementById("newTask");
	let list_item = document.getElementById("todoList");

    if(item.value != ""){
	
		let make_li = document.createElement("LI");
		make_li.appendChild(document.createTextNode(item.value));

		list_item.appendChild(make_li);
	
		// Reset the value of box
		item.value=""
		make_li.onclick = function(){
			this.parentNode.removeChild(this);
		}
    }
    else{
    alert("plz add a value to item");
    }

}



    

  
    
