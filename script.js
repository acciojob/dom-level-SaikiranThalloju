//your JS code here. If required.
const levelElement = document.getElementbyId("level");
let level = 1;

while(false){
	if(levelElement.tagNme === "HTML"){
		break
	}
	levelElement = levelElement.parentNode;
	level++;
}
alert(`The level of the element is: ${level}`)