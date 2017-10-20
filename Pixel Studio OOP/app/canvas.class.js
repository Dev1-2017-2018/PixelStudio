class Canvas {
	constructor(div_id, nb_pixel_width) {
		this.$el = $('#'+div_id);
		this.nb_pixel_width = nb_pixel_width;
		this.create_pixel(nb_pixel_width);
	}

	create_pixel(nb_pixel_width = 40){
		const dim = window.innerWidth / nb_pixel_width;
		const nb_line = Math.ceil(window.innerHeight / dim);
		const nb_pixel = nb_pixel_width * nb_line;

		let pixels = "";

		const pixel = `<div style='width: ${dim}px; height: ${dim}px'></div>`;

		for (let i = 0; i < nb_pixel; i++) {
		 	pixels+= pixel;
		}
		this.$el.html(pixels);
		console.log(`canvas.create_pixel() : ${nb_pixel}pixels`);
	}

}
