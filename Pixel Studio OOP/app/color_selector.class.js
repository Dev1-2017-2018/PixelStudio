class Color_selector {
	constructor(div_id, colors){

		this.$el = $('#'+div_id);
		this.colors = colors;
		this.color_selected = "";
		this.create_colors(colors);
		this.select_color();
	}

		select_color()
		{
			$("#colors li").click() //mauvaise methode
			this.$el.on("click", "li", this.on_click_color); //bonne methode
		}


	create_colors(colors){
		let list = "";
		for (let j = 0; j < this.colors.length; j++) {
			list+= `<li style='background-color: ${colors[j]}'></li>`;
		}
		this.$el.html(list);
//		console.log(
//			`color_selector.create_colors() : ${this.color.length} coul`
//		);
	}
}
