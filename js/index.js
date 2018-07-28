$("ul").on("click","li",function(){ // any time the ul is added , and the li is clicked inside this ul , only for the li clicked
  $(this).toggleClass("completed")
})

//click on x to elete todolist

$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){ //fadeOut on li
    $(this).remove(); //all removed
  });
  event.stopPropagation();
})
$("input[type='text']").on('keypress',function(enter_key){


  if(enter_key.which === 13)
  {
    var text = $(this).val(); // extract the text
    $(this).val("");
    $('ul').append("<li><span>X</span> "+text+"</li>"); // this dont work when added new li's
  }

})
/* to append , first we have to get the text from the textbox */
/* how to ? */
