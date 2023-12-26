//your JS code here. If required.
const para = document.getElementById("status");
const btn = document.getElementById("enterBtn");

function updat() {
	let h1ele = document.createElement("h1");
	let text = document.createTextNode("Entered Metaverse");
	h1ele.appendChild(text);
	para.outerHTML = h1ele.outerHTML;
}

btn.addEventListener("click",updat);