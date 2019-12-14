console.log("TODO");

function addItem(id, title_text, description_text){
	var container = document.getElementById("container");
	
	var item = document.createElement("div");
	item.setAttribute("class", "item");
	item.setAttribute("id", id);
	
	var title = document.createElement("div");
	title.setAttribute("class", "item_title");
	title.innerHTML = title_text;
	
	var checkboxHolder = document.createElement("div");
	checkboxHolder.setAttribute("class", "item_checkbox");
	
	/*
	var tick = document.createElement("span");
	tick.innerHTML = "&nbsp&nbsp&nbsp";
	tick.setAttribute("class", "tick");
	checkboxHolder.appendChild(tick);
	*/
	
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkboxHolder.appendChild(checkbox);	
	
	checkbox.addEventListener("change", (e) => {
		//hide(id);
	});
	
	var decription = document.createElement("div");
	decription.setAttribute("class", "item_decription");
	decription.innerHTML = description_text;
	
	item.appendChild(title);
	item.appendChild(checkboxHolder);
	item.appendChild(decription);
	
	container.appendChild(item);
	
}

function hide(id){
	item = document.getElementById(id);
	if(item){
		//item.setAttribute("class", "hide");
		//item.style.width =  "0%";
		//item.style.height =  "0%";
		//item.style.display =  "none";
		
		item.classList.add("hide");
		item.addEventListener( "animationend", () => {
			item.style.display =  "none";
			//item.style.visibility =  "collapse";
		});
		/*
		var computedStyle = window.getComputedStyle(item);
		var currentRadius = computedStyle.getPropertyValue('border-radius');
		
		item.style.borderRadius = "100px";
		
		console.log(currentRadius);
		*/
	}
}

window.addEventListener("load", (e) => {
	addItem("0", "Feed the goldfish.", "<ol><li>Get food.</li><li>Open food.</li><li>Tip in food.</li><li>Done!</li></ol>");
	addItem("1", "Feed the dog.", "<ol><li>Get bone.</li><li>Give dog bone.</li></ol>");
	addItem("2", "Feed the cat.", "<ol><li>Get food.</li><li>Open food.</li><li>Tip food in bowl.</li></ol>");
	addItem("3", "Test", "Test Desc.");
	addItem("4", "Test", "Test Desc.");
	addItem("5", "Test", "Test Desc.");
	addItem("6", "Test", "Test Desc.");
	addItem("7", "Test", "Test Desc.");
	addItem("8", "Test", "Test Desc.");
	addItem("9", "Test", "Test Desc.");
	
	//hide("1");
});


/*
window.addEventListener("load", (e) => {
	var container = document.createElement("div");
	container.setAttribute("id", "container");
	document.body.appendChild(container);
	
	var list = document.createElement("ul");
	list.setAttribute("id", "display");
	document.getElementById("container").appendChild(list);
	
	var editor = document.createElement("div");
	editor.setAttribute("id", "editor");
	document.getElementById("container").appendChild(editor);
	
	var title = document.createElement("input");
	title.setAttribute("id", "title");
	title.setAttribute("type", "text");
	title.setAttribute("autocomplete", "off");
	document.getElementById("editor").appendChild(title);
	
	var description = document.createElement("textarea");
	description.setAttribute("id", "description");
	document.getElementById("editor").appendChild(description);
	
	var add = document.createElement("input");
	add.setAttribute("id", "add");
	add.setAttribute("type", "submit");
	add.setAttribute("value", "+");
	document.getElementById("editor").appendChild(add);
});
*/