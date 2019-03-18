function simulateMouseEvents(element, eventName) 
{ 
	var mouseEvent = document.createEvent('MouseEvents'); 
	mouseEvent.initEvent(eventName, true, true); 
	element.dispatchEvent(mouseEvent); 
}

let name = "testedetrolada"
let message = "birl! "; // Replace My Message with your message 
let counter = 0; // Replace 5 with the number of times you want to send your message 
let interval = false;
let timer = 1000;
simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 

var eventFire = (MyElement, ElementType) => { 
	var MyEvent = document.createEvent("MouseEvents"); 
	MyEvent.initMouseEvent 
	(ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
	MyElement.dispatchEvent(MyEvent); 
}; 

function start() 
{ 
	inteval = setInterval(function() {
		simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown'); 
		messageBox = document.querySelectorAll("[contenteditable='true']")[0]; 
	 	counter++;
	 	event = document.createEvent("UIEvents"); 
		messageBox.innerHTML = message+counter; // test it 
		event.initUIEvent("input", true, true, window, 1); 
		messageBox.dispatchEvent(event);
		eventFire(document.querySelector('span[data-icon="send"]'), 'click'); 
	},timer)
}	 
function stop(){
	clearInterval(inteval);
}
function changeVictim(arg) {
	name = arg;
}
function newInterval(ni){
	timer = ni;
}
function changeText(nm){
	name = nm;
}