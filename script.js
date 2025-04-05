function makeid(l) {
  // write your code here
	 let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	for(let i=0;i<l;i++){
		let randomIndex = Math.floor(Math.random()*chars.length);
		result+= chars[randomIndex];
	}
	return result;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
