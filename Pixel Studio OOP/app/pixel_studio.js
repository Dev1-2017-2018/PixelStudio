class Pixel_studio {
	constructor(config){

		console.log('Pixel Sudio is starting...');

		this.canvas = new Canvas("zone_dessin", config.nb_pixel_width);

		this.color_selector = new Color_selector("colors", config.colors);

		this.drawing_tools = new Drawing_tools();

		console.log("Pixel studio is ready to rock!");

	}

}
