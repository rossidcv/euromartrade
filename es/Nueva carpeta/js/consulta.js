$(document).ready(function(){
 $("#form").submit(function(e){
 var url = "formulario.php"; // El script a dónde se realizará la petición.
    $.ajax({
           type: "POST",
           url: url,
           success: function(data)
           {
               $("#form").remove(); 
           }
         });
 
    return false; // Evitar ejecutar el submit del formulario.
  });
});


