window.addEventListener('DOMContentLoaded', function() {


// CREATE DIV PAINT BLOC


function  createSurface(line, column, size, bg_color)
{
  let i = 1;
  while(i <= line)
  {
    $(".paint_div").append("<div class = \"paint_line , paint_line_num"+i+"\"></div>"); //create bloc colomn
    let y = 1;
    while(y <= column)
    {
      $(".paint_line_num"+i).append("<div style></div>"); //create bloc colomn
      $(".paint_line_num"+i+" div").css('background-color', "#" + bg_color);
      $(".paint_line_num"+i+" div").css('width', size + "rem");
      $(".paint_line_num"+i+" div").css('height', size + "rem");
      y++;
    }
    i++;
  }
}
createSurface(22, 41, 2.2, 'e5e5e5');



});//END READY
