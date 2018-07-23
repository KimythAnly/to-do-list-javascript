$("li").on("click",function(){
  $(this).toggleClass("completed")
})

//click on x to elete todolist

$('span').on('click',function(event){
  $(this).parent().fadeOut(500,function(){ //fadeOut on li
    $(this).remove(); //all removed
  });
  event.stopPropagation();
})

var input = document.querySelectorAll("input[type='text'].textContent()");
$("#btn1").on("click",function(){
  $('ul').append(input.textContent());
})
/* to append , first we have to get the text from the textbox */
/* how to ? */
