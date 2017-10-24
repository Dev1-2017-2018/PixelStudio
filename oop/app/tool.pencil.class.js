class Pencil extends Tool {
  constructor() {
    super("pencil");
  }

  on_mousedown(pixel) {
    let color = pixel_studio.color_selector.color_selected;
    $(pixel).css("background-color", color);
  }
}
