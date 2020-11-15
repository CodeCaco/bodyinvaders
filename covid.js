class Covid {
	constructor(col, row) {
		this.col = col;
		this.row = row;
		this.resize();
	}
	resize() {
		this.size = bi.canvas.width / 12;
		this.draw();
	}
	draw() {
		if (this.row == -1) {
			if (bi.rowFlip == 0) {
				this.accX = (this.col + (25 - bi.rowOffset) / 50) * this.size + 10;
			} else {
				this.accX = (this.col + 0.5 + bi.rowOffset / 50) * this.size + 10;
			}
		} else if (this.row % 2 == bi.rowFlip) {
			this.accX = (this.col + 0.5 + bi.rowOffset / 50) * this.size + 10;
		} else {
			this.accX = (this.col + (25 - bi.rowOffset) / 50) * this.size + 10;
		}
		this.accY = this.row * this.size + (this.size * bi.colOffset / 10) + 10;
		bi.ctx.drawImage(bi.img.covid, this.accX, this.accY, this.size - 20, this.size - 20);
	}
	kill () {
		//Remove this covid from the covids array
		bi.covids.splice(bi.covids.indexOf(this), 1);
		//Increment score
		bi.score += 1;
	}
}