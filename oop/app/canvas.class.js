class Canvas {
  constructor(div_id, nb_pixel_width = 40) {
    this.$el = $("#" + div_id);
    this.nb_pixel_width = nb_pixel_width;
    this.create_pixels(nb_pixel_width);

    this.$el.on("mousedown", "div", this.on_mousedown);
    this.$el.on("mouseup", "div", this.on_mouseup);
    this.$el.on("mousemove", "div", this.on_mousemove);
  }

  on_mousedown(event) {
    pixel_studio.drawing_tool.tool_selected.on_mousedown(this);
  }

  on_mouseup(event) {
    pixel_studio.drawing_tool.tool_selected.on_mouseup(this);
  }

  on_mousemove(event) {
    pixel_studio.drawing_tool.tool_selected.on_mousemove(this);
  }

  create_pixels() {
    const dim = window.innerWidth / this.nb_pixel_width;
    const nb_line = Math.ceil(window.innerHeight / dim);
    const nb_pixels = this.nb_pixel_width * nb_line;
    let pixels = "";

    const pixel = `<div style='width: ${dim}px; height:${dim}px'></div>`;

    for (let j = 0; j < nb_pixels; j++) {
      pixels += pixel;
    }

    this.$el.html(pixels);
    console.log(`canvas.create_pixels() : ${nb_pixels} pixels créés`);
  }
}
