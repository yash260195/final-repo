$(function() {
    $.getJSON('apinews', updateNews);


//To save the news entered
$('.feedback-form').submit(function(e) {
    e.preventDefault();  
      $.post('apinews', {
      title: $('#feedback-form-title').val(),
      category:$('#feedback-form-category').val(),
      message:$('#feedback-form-message').val()
    }, updateNews);
    clearArticle();
  });

  //To clear input fields
  function clearArticle()
  {
    document.querySelector('#feedback-form-title').value='';
    document.querySelector('#feedback-form-category').value='';
    document.querySelector('#feedback-form-message').value=''
  }
});