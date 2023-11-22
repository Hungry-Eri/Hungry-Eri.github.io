// s1 outfit
let s1 = document.getElementById("s1");
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	document.getElementById("body").style.display = "none";
	hideOutfits()	
	document.getElementById("o1").style.display = "block";
}

// s2 outfit
/* get #s2 outfit */
let s2 = document.getElementById("s2");
/* repeat process */
s2.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits()	
	document.getElementById("o2").style.display = "block";
}

// s3 outfit
let s3 = document.getElementById("s3");
/* repeat process */
s3.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits()	
	document.getElementById("o3").style.display = "block";
}

// s4 outfit
/* get #s4 outfit */
let s4 = document.getElementById("s4");
/* repeat process */
s4.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits()	
	document.getElementById("o4").style.display = "block";
}

// s5 outfit
/* get #s5 outfit */
let s5 = document.getElementById("s5");
/* repeat process */
s5.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits()	
	document.getElementById("o5").style.display = "block";
}

// strip outfit
let strip = document.getElementById("strip-button")
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	hideOutfits()
	/* show #body */
	document.getElementById("body").style.display = "block";
};

function hideOutfits() {
	let outfitList = document.getElementsByClassName("outfit");

	for (let i = 0; i < outfitList.length; i++) {
		outfitList[i].style.display = "none";
	}
}

hideOutfits();