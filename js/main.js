$(document).ready(function(){ 
        console.log('fasj');
        var myFBR = new Firebase("https://trackingmvhs.firebaseio.com/");
      
      $('#sub2').click(function(){
            $('.lg').addClass("view");
        $('.view2').slideDown("slow");
          $('body').removeClass('backimg');
    
    });
                
myFBR.child('assign').on('child_added', function(snapshot) {});
    
        $("#form").submit(function (e) {
            e.preventDefault();

          var classs = $('#class').val();
            var asname = $('#asname').val();
            var det = $('#textar').val();
            var date = $('#datee').val();
            var homework = {
                classs: classs,
                asname: asname,
                det: det,
                date: date
                }
                 var login = $('#nameform').val();
               

                myFBR.child(login).child(classs).push(homework);
                
                            $('#asname').val('');
            $('#textar').val('');
            $('#datee').val('');
        });
             $("#forms").submit(function (e) {  
        e.preventDefault();
         var login = $('#nameform').val();
        console.log(login);


    myFBR.child(login).child('math').on('child_added', function(snapshot) {

                            
            $('#math-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            		
        $('#math-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('math').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();


		});

       
       
                      });
        myFBR.child(login).child('science').on('child_added', function(snapshot) {

                            
            $('#science-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#science-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('science').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
           });
                      });
        myFBR.child(login).child('english').on('child_added', function(snapshot) {

                            
            $('#english-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#english-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('english').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
           });
       
                      });
        myFBR.child(login).child('worldlang').on('child_added', function(snapshot) {

                            
            $('#worldlang-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
               $('#worldlang-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('worldlang').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
           });
                      });
        myFBR.child(login).child('elective1').on('child_added', function(snapshot) {

                            
            $('#ele').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
            
               $('#ele #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('elective1').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
                      });
        });
        myFBR.child(login).child('elective2').on('child_added', function(snapshot) {

                            
            $('#elect2-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
            
               $('#elect2-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('elective2').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
                      });
        });
        myFBR.child(login).child('history').on('child_added', function(snapshot) {

                            
            $('#history-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#history-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child(login).child('history').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
       
                      });
    
      });
        });
});
        
    
            
  
