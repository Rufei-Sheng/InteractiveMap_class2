$('#about-us').on('click', function() {
  $('.introduction').html('<br/> ————Continously following your pace———— <br/> <br/> Upright is a technology-based tool that aims to meet the challenges that older adults face as they age in place, more specifically maintaining safety and independence. It is a biometric shoe sole designed to collect and monitor specific walking metrics (i.e. gait) that are related to early fall risk patterns in order to determine patterns and abnormalities. By collecting these metrics, the information will be collated into actionable indicators that alert individuals when it is time to seek an intervention. <br/> <br/> <br/>');
});

$('#about-us').on('click', function() {
  $('.introduction').css("background-color", "#F1E8F7");
});

$('#submit').on('click', function(){
  val email = $('email').val();
  if (isNaN(email)) {
    $('.outputMessage').text('Ooooops, you forgot enter!')
  }else{
    $('.outputMessage').text('Thank you for your interest! We will contact you soon.')
  }
})
