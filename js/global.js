window.addEventListener('DOMContentLoaded', function() {


// INITIALISATION

let  nb_column = 0;
// CREATE DIV PAINT BLOC
function  createSurface(line, column, size, bg_color)
{
  let i = 1;
  let j = 1;
  while(i <= line)
  {
    $(".paint_div").append("<div class = \"paint_line\" id = \"paint_line_num"+i+"\"></div>"); //create bloc colomn
    let y = 1;
    while(y <= column)
    {
      $("#paint_line_num"+i).append("<div class = \"paint_column\" id = \""+j+"\"></div>"); //create bloc colomn
      $("#paint_line_num"+i+" div").css('background-color', "#" + bg_color);
      $("#paint_line_num"+i+" div").css('width', size + "rem");
      $("#paint_line_num"+i+" div").css('height', size + "rem");
      y++;
      j++;
    }
    i++;
  }
  nb_column = column;
}
createSurface(22, 41, 2.2, 'fff');
// SELECTION DU PEN1 DEFAULT
pen1();
// COLOR DEFAULT
let color = "#E91E63";

// COLOR
$( ".nav_choose_color li:nth-child(1)" )
  .click(function()
  {
    return color = "#E91E63";
  })
$( ".nav_choose_color li:nth-child(2)" )
  .click(function()
  {
    return color = "#F44336";
  })
$( ".nav_choose_color li:nth-child(3)" )
  .click(function()
  {
    return color = "#9b59b6";
  })
$( ".nav_choose_color li:nth-child(4)" )
  .click(function()
  {
    return color = "#03A9F4";
  })
$( ".nav_choose_color li:nth-child(5)" )
  .click(function()
  {
    return color = "#009688";
  })


// EVENT CLICK IN PAINT ZONE
function pen1()
{
  $( '.paint_column' ).unbind('mouseover');
  $( ".paint_line" )
    .mouseup(function() {
      $( '.paint_column' ).unbind('mouseover');
    })
    .mousedown(function() {
      $( ".paint_column" ).mouseover(function() {
        $( this ).css('background-color', color);
      })
    .click(function() {
        $( this ).css('background-color', color);
      })
    })
}
function pen2()
{
  $( ".paint_line" )
    .mouseup(function() {
      $( '.paint_column' ).unbind('mouseover');
    })
    .mousedown(function() {
      $( ".paint_column" ).mouseover(function() {
        let i = 0;
        while(i < 2)
        {
          let n_hover = (parseInt(this.id) + i) .toString();
          console.log(n_hover);
          $("#"+ n_hover).css('background-color', color);
          i++;
        }
        i = 0;
        while(i < 2)
        {
          n_hover = (parseInt(this.id) + i + nb_column) .toString();
          console.log(n_hover);
          $("#"+ n_hover).css('background-color', color);
          i++;
        }
      })
    .click(function() {
        let i = 0;
        while(i < 2)
        {
          let n_hover = (parseInt(this.id) + i) .toString();
          console.log(n_hover);
          $("#"+ n_hover).css('background-color', color);
          i++;
        }
        i = 0;
        while(i < 2)
        {
          n_hover = (parseInt(this.id) + i + nb_column) .toString();
          console.log(n_hover);
          $("#"+ n_hover).css('background-color', color);
          i++;
        }

      })

    })
}

// OPTION BUTTON
function trash(){
  $(".paint_column").css('background-color', "white");
}
$( "#icon_trash" ).click(function() { trash(); })
function rubber(){
  color = "white";
}
$( "#icon_rubber" ).click(function() { rubber(); })

$( "#icon_pen1" ).click(function(){
  color = "#E91E63";
  pen1();
})
$( "#icon_pen2" ).click(function(){
  color = "#E91E63";
  pen2();
})







// BONUS
$( ".logo" ).click(function(){
  $("#217").css('background-color', "#E91E63");
  $("#218").css('background-color', "#E91E63");
  $("#219").css('background-color', "#E91E63");
  $("#220").css('background-color', "#E91E63");
  $("#221").css('background-color', "#E91E63");
  $("#257").css('background-color', "#E91E63");
  $("#258").css('background-color', "#E91E63");
  $("#259").css('background-color', "#E91E63");
  $("#260").css('background-color', "#E91E63");
  $("#261").css('background-color', "#E91E63");
  $("#262").css('background-color', "#E91E63");
  $("#263").css('background-color', "#E91E63");
  $("#264").css('background-color', "#E91E63");
  $("#265").css('background-color', "#E91E63");

  $("#298").css('background-color', "#F44336");
  $("#299").css('background-color', "#F44336");
  $("#300").css('background-color', "#F44336");
  $("#301").css('background-color', "#9b59b6");
  $("#302").css('background-color', "#009688");
  $("#303").css('background-color', "#9b59b6");

  $("#338").css('background-color', "#F44336");
  $("#339").css('background-color', "#9b59b6");
  $("#340").css('background-color', "#F44336");
  $("#341").css('background-color', "#9b59b6");
  $("#342").css('background-color', "#9b59b6");
  $("#343").css('background-color', "#009688");
  $("#344").css('background-color', "#9b59b6");
  $("#344").css('background-color', "#9b59b6");
  $("#344").css('background-color', "#9b59b6");
  $("#345").css('background-color', "#9b59b6");

  $("#379").css('background-color', "#F44336");
  $("#380").css('background-color', "#9b59b6");
  $("#381").css('background-color', "#F44336");
  $("#382").css('background-color', "#F44336");
  $("#383").css('background-color', "#9b59b6");
  $("#384").css('background-color', "#9b59b6");
  $("#385").css('background-color', "#9b59b6");
  $("#386").css('background-color', "#F44336");
  $("#387").css('background-color', "#9b59b6");
  $("#388").css('background-color', "#9b59b6");
  $("#389").css('background-color', "#9b59b6");




  pen2();
})




























});//END READY
