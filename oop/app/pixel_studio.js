class Pixel_studio {
	constructor(config) {
		console.log("Pixel Studio starting...");

		this.canvas = new Canvas("zone_dessin", config.nb_pixel_width);
		this.color_selector = new Color_selector("colors", config.colors);
		this.drawing_tool = new Drawing_tool("tools");

		console.log("Pixel Studio ready to rock!");
	}
}
