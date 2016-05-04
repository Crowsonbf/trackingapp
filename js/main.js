$(document).ready(function(){ 
        console.log('fasj');
        var myFBR = new Firebase("https://trackingmvhs.firebaseio.com/");
    
                
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
               

                myFBR.child(classs).push(homework);
                
                            $('#asname').val('');
            $('#textar').val('');
            $('#datee').val('');
        });
            
    myFBR.child('math').on('child_added', function(snapshot) {

                            
            $('#math-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br> <button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            		
        $('#math-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('math').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();


		});

       
       
                      });
        myFBR.child('science').on('child_added', function(snapshot) {

                            
            $('#science-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>);
            
                    $('#science-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('science').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
           });
                      });
        myFBR.child('english').on('child_added', function(snapshot) {

                            
            $('#english-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#english-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('english').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
           });
       
                      });
        myFBR.child('worldlang').on('child_added', function(snapshot) {

                            
            $('#worldlang-assignments').append('<li class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
               $('#worldlang-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('worldlang').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
           });
                      });
        myFBR.child('elective').on('child_added', function(snapshot) {

                            
            $('elect1-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#elect1-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('elective').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
                    });
       
       
                      });
        myFBR.child('elective2').on('child_added', function(snapshot) {

                            
            $('#elect2-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
            
               $('#elect2-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('elective2').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
                      });
        });
        myFBR.child('history').on('child_added', function(snapshot) {

                            
            $('#history-assignments').append('<li id="'+ snapshot.key()+'" class="slideclick">'+  snapshot.val().asname +'<div class="slide">'+ snapshot.val().det +'<span>    || Due date: '+ snapshot.val().date +'</span><br><button id="'+ snapshot.key()+'" class="remove">Mark As complete</button></div></li>');
            
                    $('#history-assignments #' + snapshot.key() + '.remove').click(function(){
			myFBR.child('history').child(snapshot.key()).remove();
            $('#' + snapshot.key() + '').remove();
       
       
                      });
    
      });
        });
            
        
    
            
        
