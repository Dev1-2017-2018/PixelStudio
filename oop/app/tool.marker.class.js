class Marker extends Tool {
  constructor() {
    super("marker");
    this.draw = false;
  }

  on_mousedown(pixel) {
    let color = pixel_studio.color_selector.color_selected;
    $(pixel).css("background-color", color);
    pixel_studio.drawing_tool.tool_selected.draw = true;
  }

  on_mousemove(pixel) {
    if (pixel_studio.drawing_tool.tool_selected.draw == true) {
      let color = pixel_studio.color_selector.color_selected;
      $(pixel).css("background-color", color);
    }
  }

  on_mouseup(pixel) {
    pixel_studio.drawing_tool.tool_selected.draw = false;
  }
}
