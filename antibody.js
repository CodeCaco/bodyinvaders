class Antibody {
	constructor (x) {
		this.x = x;
		this.y = 85;
		this.resize();
	}
	resize () {
		this.size = bi.canvas.width / 12;
		this.draw();
	}
	draw () {
		bi.ctx.drawImage(
			bi.img.antibody,
			this.x / 100 * (bi.canvas.width + 1) - this.size / 4,
			this.y / 100 * bi.canvas.height,
			this.size / 2,
			this.size / 2
		);
		this.y -= 1;
		//Kill if it goes off screen
		if (this.y / 100 * bi.canvas.height < -this.size) {
			this.kill();
		}
		//Check if it collides with a covid
		let killedCovid = false;
		for (let covid of bi.covids) {
			let s = covid.size - 20;
			let x = this.x / 100 * (bi.canvas.width + 1) - this.size / 4;
			//If colliding in the x-axis
			if (x < covid.accX + s && x > covid.accX - s) {
				let y = this.y / 100 * bi.canvas.height;
				//If colliding in the y-axis
				if (y < covid.accY + s && y > covid.accY - s) {
					covid.kill();
					killedCovid = true;
				}
			}
		}
		//Self-destruct if collied with covid
		if (killedCovid) {
			this.kill();
		}
	}
	kill () {
		//Remove this antibody from the antibodies array
		bi.antibodies.splice(bi.antibodies.indexOf(this), 1);
	}
}