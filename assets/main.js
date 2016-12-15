$(function() {

  // your code will go here
  // reportcard url = https://www.codeschool.com/users/2162957.json
  $.ajax({
    url: "https://www.codeschool.com/users/2162957.json",
    dataType: 'jsonp',
    success: function(response) {
      // do something else.
      data = response;

      var container = $('#badges');

      for ( var i = 0; i < response.courses.completed.length; i++ ) {
        var div = $('<div />', {
          'class' : 'course'
        }).appendTo(container);

        $('<h3 />', {
          text: response.courses.completed[i].title
        }).appendTo(div);

        $('<img />', {
          src: response.courses.completed[i].badge
        }).appendTo(div);

        $('<a />', {
          href : response.courses.completed[i].url,
          target : '_blank',
          text : 'Learn More',
          'class' : 'btn btn-primary'
        }).appendTo(div);


      } // end for loop;
    }
  });


});
