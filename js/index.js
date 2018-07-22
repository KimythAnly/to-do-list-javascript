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
$("input[type='text']").on("keypress(13)",function(){
  alert('hey')
})
