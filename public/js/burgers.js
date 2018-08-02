
$(function() {
    $(".change-devour").on("click", function(event) {

      console.log($(this));
        var devoured = $(this).data("devoured")
        devoured = true;

        var id = $(this).data("id");

        var myObj = {
          devoured,
          id
        }

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: myObj
        }).then(
          function() {
            console.log("changed devour to", true);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
      // Send the PUT request.
  
    });
  
    $("#submit-button").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
       };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
 
  