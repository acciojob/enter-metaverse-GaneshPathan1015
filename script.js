//your JS code here. If required.
const para = document.getElementById("status");
const btn = document.getElementById("enterBtn");


function updat() {
	let h1ele = document.createElement("h1");
	    para.innerText = "Entered Metaverse"
	h1ele.innerHTML = para.innerHTML;
	para.parentNode.replaceChild(h1ele,para);
}

btn.addEventListener("click",updat);