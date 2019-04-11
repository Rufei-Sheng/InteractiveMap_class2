$('#about-us').on('click', function() {
  $('.introduction').html('<br/> ————Continously following your pace———— <br/> <br/> Upright is a technology-based tool that aims to meet the challenges that older adults face as they age in place, more specifically maintaining safety and independence. It is a biometric shoe sole designed to collect and monitor specific walking metrics (i.e. gait) that are related to early fall risk patterns in order to determine patterns and abnormalities. By collecting these metrics, the information will be collated into actionable indicators that alert individuals when it is time to seek an intervention. <br/> <br/> <br/>');
});

$('#about-us').on('click', function() {
  $('.introduction').css("background-color", "#F1E8F7");
});

// $('#emailSubmit').on('click', function(){
//   // var email = $('#emailInput').val();
//   $('.outputMessage').html(`Thank you for your interest! We will contact you soon.`);
// })
$(document).ready(function() {
$('.popup-with-zoom-anim').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  overflowY: 'auto',
  closeBtnInside: true,
  preloader: false,
  midClick: true,
  removalDelay: 300,
  mainClass: 'my-mfp-zoom-in'
});




// $('#form-group').on('click', function()
// {
//     function after_form_submitted(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#reused_form').hide();
//             $('#success_message').show();
//             $('#error_message').hide();
//         }
//         else
//         {
//             $('#error_message').append('<ul></ul>');
//
//             jQuery.each(data.errors,function(key,val)
//             {
//                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
//             });
//             $('#success_message').hide();
//             $('#error_message').show();
//
//             //reverse the response on the button
//             $('button[type="button"]', $form).each(function()
//             {
//                 $btn = $(this);
//                 label = $btn.prop('orig_label');
//                 if(label)
//                 {
//                     $btn.prop('type','submit' );
//                     $btn.text(label);
//                     $btn.prop('orig_label','');
//                 }
//             });
//
//         }//else
//     }
//
// 	$('#reused_form').submit(function(e)
//       {
//         e.preventDefault();
//
//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//         });
//
//
//                     $.ajax({
//                 type: "POST",
//                 url: 'handler.php',
//                 data: $form.serialize(),
//                 success: after_form_submitted,
//                 dataType: 'json'
//             });
//
//       });
// });
