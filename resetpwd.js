    <div class="modal fade"  id="pwdreset" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
             <h5 id="title" class='col-12 modal-title text-center'>
              Reset Password  <i class="fas fa-edit"></i>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         </h5>
        </div>
        <div id="modbody" class="modal-body justify-content-center">
             <div class="container-fluid">
                 <form id="reset" onsubmit="document.body.style.cursor='wait'; return true;"   th:action="@{/pwdreset}" method="get" target="frame"  novalidate>
                <div class="w-100 row"><div class="col-12 text-center"><small class="text-center"><span class="required"></span> Indicates a required field</small></div></div>
                     <div class="row py-5">
                         
                         <div  class='col-1'></div>
                     <div  class='col-10 text-center'>
                         <label class="required" for="oldpass">Current Password<i class="far fa-question-circle material-tooltip-smaller ml-1" data-toggle="tooltip" data-placement="right"  title=" Please enter your current password"></i></label>
                         <input name="oldpass" id="oldpass" class="form-control" type="password" placeholder="Current Password" autofocus>
                          <span style="float: left;" class="mt-1 text-primary"><input type="checkbox" id="showpwd1" ><small class="ml-2">Show Password</small></span>
    <div id="first" style="width: 96%;"class="invalid-tooltip  text-center">
      This must not be blank
        </div>

                     </div>
                         <div  class='col-1'></div>
                 </div>
                     
                     <div class="row py-1"></div> 
                      <div class="row py-1"></div> 
                     
                           <div class="row py-5">
                     <div  class='col-1'></div>
                     <div  class='col-10 text-center'>
                     <label for="pass1" class="required">New Password <i class="far fa-question-circle material-tooltip-smaller ml-1" data-toggle="tooltip" data-placement="right"  title="Must not be blank. Please enter a valid password meeting the following criteria: The password must be a minimum of 8 characters long, and it must contain at least one upper-case letter ([A-Z]), one lower-case letter ([a-z]), one number ([0-9]), and one special character ( !&quot;#$%&'()*+,-./:;<=>?@[\]^_`{|}~)."></i></label>
                         <input name="pass1" id="pass1" class="form-control" type="password" placeholder="New Password" >
                          <span style="float: left;" class="mt-1 text-primary"><input type="checkbox" id="showpwd2" ><small class="ml-2">Show Password</small></span>
                     <div id="second" style="width: 96%;"class="invalid-tooltip  text-center">
      Please enter a valid password
        </div>
                     </div>
                        <div  class='col-1'></div>        
                 </div>
                     
                   <div class="row py-1"></div> 
                      <div class="row py-1"></div> 
                     
                     <div class="row py-5">
                         <div  class='col-1'></div>
                       <div  class='col-10 text-center'>
                     <label for="pass2" class="required">Retype New Password <i class="far fa-question-circle material-tooltip-smaller ml-1" data-toggle="tooltip" data-placement="right"  title="Must not be blank. Please reenter your password. Passwords must be matching."></i></label>
                      <input name="pass2" id="pass2" class="form-control" type="password" placeholder="Confirm New Password" >
                     <div id="third" style="width: 96%;"class="invalid-tooltip  text-center">
Please make sure the passwords are matching
        </div>
                     </div>
                        <div  class='col-1'></div>    
                 </div>
                     
                  
                     <div class="row my-5"></div> 
                     
                 </form>
                  
                     </div>
           
        </div>
       
        <div id="modend" class="modal-footer text-center row justify-content-md-between">
           
            <div class="col-12 col-md-4">
          <button  type="submit" form="reset"  class="btn btn-success w-100" >Reset Password</button>
            </div>
       
           
            
            <div class="col-12 col-md-4">
             <button type="button" class="btn  btn-danger w-100" data-dismiss="modal">Close</button>
            </div>
        
      </div>
      
        </div></div>

        </div> 
       
   <script>
   var loaded = false;
   $(function () {
   	  $('[data-toggle="tooltip"]').tooltip()
   	});
 function resetpass(){
   	document.getElementById("oldpass").focus();
 }


	 $("#pwdreset").on('click', '#showpwd2', function () {
 	     var x = document.getElementById("pass1");
    	  var y = document.getElementById("pass2");
    	  if (x.type === "password" && y.type === "password") {
    	    x.type = "text";
    	    y.type = "text";
    	  } else {
    	    x.type = "password";
    	    y.type = "password";
    	  }

}); 
   $("#pwdreset").on('click', '#showpwd1', function () {
       
   	var x = document.getElementById("oldpass");

 	  if (x.type === "password") {
 	    x.type = "text";
 	    
 	  } else {
 	    x.type = "password";
 	
 	  }

	}); 

$("#pwdreset").on('keyup', '#oldpass', function () {
  
  var first = document.getElementById("oldpass").value; 
  if (first.length == 0 )
      (document.getElementById("oldpass")).classList.add("is-invalid");
  else
      (document.getElementById("oldpass")).classList.remove("is-invalid"); 

}); 
       $("#pwdreset").on('keyup', '#pass1', function () {
      
       	 var first = document.getElementById("pass1").value; 
            if (first.length == 0 )
                (document.getElementById("pass1")).classList.add("is-invalid");
            else if (((new RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$')).test(first)) == false)
                (document.getElementById("pass1")).classList.add("is-invalid");
            else
                (document.getElementById("pass1")).classList.remove("is-invalid"); 
            
            if ((document.getElementById("pass2").value) != first)
                (document.getElementById("pass2")).classList.add("is-invalid");
            else
                (document.getElementById("pass2")).classList.remove("is-invalid");  
          

   	});
       $("#pwdreset").on('keyup', '#pass2', function () {
           
       	 var first = document.getElementById("pass2").value; 
            if (first.length == 0 )
                (document.getElementById("pass2")).classList.add("is-invalid");
            else
                (document.getElementById("pass2")).classList.remove("is-invalid"); 
           
           
           
           if ((document.getElementById("pass1").value) != first)
                (document.getElementById("pass2")).classList.add("is-invalid");
            else
                (document.getElementById("pass2")).classList.remove("is-invalid"); 

         

  	});
   	
       $("#pwdreset").on('submit', '#reset', function () {
           
       	var required = false;
  	     $("#pwdreset input").each(function() {
  	            if((this.value).length == 0) {
  	              this.classList.add("is-invalid");
  	              required = true;
  	            }
  	         else{
  	            this.classList.remove("is-invalid"); 
  	         }

  	        });
  	     
  	      if(required == true){
  	          
  	      e.preventDefault();
  	          $('#reset input').each(function(){
  	               if(this.className.includes('is-invalid')){
  	            	 this.focus();
  	                  return false;
  	              }
  	             
  	             
  	 
  	});

  	      }
  	      else
  	    	  loaded = true;

 	});
      

       function frameLoad() {
       	if(loaded == true){
 		 var vals = $('#frm').contents().find('#refresh').text();
 		  if (vals.includes('err1')){
 			  document.getElementById("first").innerHTML  = "The password you entered is not correct. Please enter your password again";
 			  (document.getElementById("oldpass")).classList.add("is-invalid");	
 			  document.getElementById("oldpass").focus();
 		  }
 		  else if (vals.includes('err2')){
 			  document.getElementById("second").innerHTML  = "The password you entered is not correct. Please enter your password again";
 			  (document.getElementById("pass1")).classList.add("is-invalid");
 			  document.getElementById("third").innerHTML  = "The password you entered is not correct. Please enter your password again";
 			  (document.getElementById("pass2")).classList.add("is-invalid");	
 			  document.getElementById("pass1").focus();
 		  }
 		  else{
 			  document.getElementById("title").innerHTML = '<h5 class="col-12 modal-title text-center" style="color: #4BB543;">Password Reset Complete  <i class="far fa-check-square"></i><button type="button" class="close" data-dismiss="modal">&times;</button></h5>';
 			
 			  document.getElementById("modbody").innerHTML = "Congratulations on successfully reseting your account password. An email confirming the this change will be sent momentarily. in a moment you will be redirected back to the login page, and you will have login using your new password from here on out.";
 			 
 			  document.getElementById("modend").innerHTML = "";
 			setTimeout(function () {
 				 window.location.reload(); //will redirect to your blog page (an ex: blog.html)
 			}, 10000);
 			  
 		  }
 		  loaded = false;
 		  }
       
       }
   </script>               
