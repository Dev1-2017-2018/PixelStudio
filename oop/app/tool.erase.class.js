class Erase extends Tool {
  constructor() {
    super("erase");
    this.draw = false;
  }

  on_mousedown(pixel) {
    $(pixel).css("background-color", "");
    pixel_studio.drawing_tool.tool_selected.draw = true;
  }

  on_mousemove(pixel) {
    if (pixel_studio.drawing_tool.tool_selected.draw) {
      $(pixel).css("background-color", "");
    }
  }

  on_mouseup(pixel) {
    pixel_studio.drawing_tool.tool_selected.draw = false;
  }
}
