function add(){
    let item = document.getElementById("newTask");
	let list_item = document.getElementById("todoList");

    if(item.value != ""){
	
		// Creating element and adding value to it
		let make_li = document.createElement("LI");
		make_li.appendChild(document.createTextNode(item.value));
	
		// Adding li to ul
		list_item.appendChild(make_li);
	
		// Reset the value of box
		item.value=""
		
		// Delete a li item on click
		make_li.onclick = function(){
			this.parentNode.removeChild(this);
		}
    }
    else{

    // Alert msg when value of box is "" empty.
    alert("plz add a value to item");
    }

}



    

  
    
