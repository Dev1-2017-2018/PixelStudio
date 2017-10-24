class Color_selector {
	constructor(div_id, colors) {
		this.$el = $('#' + div_id);
		this.colors = colors;
		this.color_selected = '';

		this.create_colors();
		this.$el.on("click", "li", this.on_click_color);

		setTimeout(function() {
			pixel_studio.color_selector.default_color();
		}, 1);
	}

	create_colors() {
		let list = "";

		for(let i = 0 ; i < this.colors.length ; i++) {
			list += `<li style="background-color: ${this.colors[i]}"></li>`;
		}

		this.$el.html(list);
		console.log(`Color_selector.create_colors() : ${this.colors.length} couleurs crées`);
	}

	default_color(indice = 0) {
		this.$el
				.children('li')
				.eq(indice)
				.trigger('click');
	}

	on_click_color() {
		let cs = pixel_studio.color_selector;
		cs.color_selected = $(this).css("background-color");
		cs.$el.children("li").removeClass("selected");
		$(this).addClass("selected");
		console.log(
			`color_selector.on_click() Couleur séléctionnée : ${cs.color_selected}`
		);
	}
}
