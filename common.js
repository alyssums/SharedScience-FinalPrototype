$(document).ready(function() {
  $(".upload-container").on("change", function() {
    var fileInput = $("#file-input").val();
    if (fileInput) {
      $(".submit").addClass("submit-enabled").removeClass("submit-disabled");
    } else {
      $(".submit").addClass("submit-disabled").removeClass("submit-enabled");
    }
  });

  $(".submit").on("click", function() {
    $("#upload-bar").show();
    $("#upload-bar").animate({width: '600px'}, 2000);
    setTimeout(function() {
      $("#submit-message").html("Congrats! Your video has been successfully uploaded!");
      $("#upload-bar").animate({width: '600px'}, 2000);
      $(".upload-container").hide();
    }, 2500)
  });
});
