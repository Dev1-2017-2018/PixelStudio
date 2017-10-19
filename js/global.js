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
      $(".paint_line_num"+i).append("<div class = \"paint_column , paint_column_num"+y+"\"></div>"); //create bloc colomn
      $(".paint_line_num"+i+" div").css('background-color', "#" + bg_color);
      $(".paint_line_num"+i+" div").css('width', size + "rem");
      $(".paint_line_num"+i+" div").css('height', size + "rem");
      y++;
    }
    i++;
  }
}
createSurface(22, 41, 2.2, 'fff');


// ALGO


// EVENT CLICK IN PAINT ZONE
$( ".paint_line" )
  .mouseup(function() {
    $( '.paint_column' ).unbind('mouseover');
  })
  .mousedown(function() {
    $( ".paint_column" ).mouseover(function() {
    $( this ).css('background-color', "blue");
  })
  .click(function() {
    $( this ).css('background-color', "blue");
  })
})
































});//END READY
