bi.inputs = {
	left: false,
	right: false
};

document.addEventListener("keydown", (e) => {
	if (bi.gameOver == false) {
		//A or left arrow key
		if (e.keyCode == 65 || e.keyCode == 37) {
			bi.inputs.left = true;
		}
		//D or right arrow key
		if (e.keyCode == 68 || e.keyCode == 39) {
			bi.inputs.right = true;
		}
		//Space key or W or up arrow
		if (e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 38) {
			bi.player.shoot();
		}
	}
});

document.addEventListener("keyup", (e) => {
	if (bi.gameOver == false) {
		//A or left arrow key
		if (e.keyCode == 65 || e.keyCode == 37) {
			bi.inputs.left = false;
		}
		//D or right arrow key
		if (e.keyCode == 68 || e.keyCode == 39) {
			bi.inputs.right = false;
		}
	}
});