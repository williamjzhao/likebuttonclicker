
let clicks = 0;
let counter = document.getElementById("counter");
function myFunction() {
	clicks += click_value;
	counter.textContent = "Times Liked: " + clicks;
}

let time = 0,
	elapsed = '0.0',
	cps = '0.0';
window.setInterval(function()
{
	time += 100;
	elapsed = Math.floor(time / 100) / 10;
	if(Math.round(elapsed) === elapsed) { elapsed += '.0'; }
	document.getElementById("timer").innerHTML = "Time Spent: " + elapsed + " seconds";
	cps = Math.round((clicks/elapsed) * 10)/10;
	document.getElementById("clicks-per-second").innerHTML = "Clicks per second: " + cps;
}, 100);

let click_value = 1;
let incrementer = document.getElementById("incrementer");
console.log(incrementer);
function increment() {
	click_value += 1;
	incrementer.value = "Value of a click is " + click_value;

}