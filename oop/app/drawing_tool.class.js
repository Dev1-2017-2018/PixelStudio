class Drawing_tool {
	constructor(div_id) {
		this.$el = $('#' + div_id);
		this.tool_selected = '';

		this.all_tools = [
			new Pencil(),
			new Marker(),
			new Erase()
		]

		this.create_tools();
		this.$el.on("click", "li", this.on_click_tool);

		setTimeout(function() {
			pixel_studio.drawing_tool.default_tool();
		}, 1);
	}

	create_tools() {
		let list = "";

		for(let i = 0 ; i < this.all_tools.length ; i++) {
			list += `<li data-id="${[i]}" style="background-image:url(images/icon_${this.all_tools[i].name}.svg)"></li>`;
		}

		this.$el.html(list);
		console.log(`Tool_selector.create_tools() : ${this.all_tools.length} outils crées`);
	}

	default_tool(indice = 0) {
		this.$el
				.children('li')
				.eq(indice)
				.trigger('click');
	}

	on_click_tool() {
		let cs = pixel_studio.drawing_tool;
		cs.tool_selected = cs.all_tools[parseInt($(this).data("id"))];
		cs.$el.children("li").removeClass("selected");
		$(this).addClass("selected");
		console.log(
			`drawing_tool.on_click() Outil séléctionnée : ${cs.tool_selected.name}`
		);
	}
}
