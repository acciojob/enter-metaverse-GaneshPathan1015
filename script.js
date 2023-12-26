//your JS code here. If required.
const para = document.getElementById("status");
const btn = document.getElementById("enterBtn");


btn.addEventListener("click",()=>{
	            
	let h1ele = document.createElement("h1");
	let text = document.createTextNode("Entered Metaverse");
	
     h1ele.appendChild(text);
	para.outerHTML = h1ele.outerHTML;
	// document.body.appendChild(h1ele);
});