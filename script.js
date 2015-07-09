var template = function(comment) {
  return '<ul class="comments"><li>' + comment + '</li></ul>';
  };

var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
   	

    if(comment !== "") {
      var html = template(comment);
      $(html).prependTo('.comments');
      $('#comment').val("");
      
    }

    return false;
  });
};

$(document).ready(main);