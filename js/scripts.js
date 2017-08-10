$(document).ready(function() {
  $('.btn').on('click', function(e){
    e.preventDefault();
    var answer1 = $("input:radio[name=hair]:checked").val();
    var answer2 = $("input:radio[name=gender]:checked").val();
    var answer3 = $("input:radio[name=glasses]:checked").val();

    if(!answer1, !answer2, !answer3) {
       alert("Please fill out each question");
     } else {
       if(answer1 === 'red' && answer2 === 'male' && answer3 === 'no'){
         $('.character').append('Ronald Weasley!')
         $('.result').show();
         $('#ron').show();
       } else if (answer1 === 'brown' && answer2 === 'male' && answer3 === 'no'){
         $('.character').append('Neville Longbottom!')
         $('.result').show();
         $('#neville').show();
       } else if (answer1 === 'black' && answer2 === 'male' && answer3 === 'yes'){
         $('.character').append('Harry Potter!')
         $('.result').show();
         $('#harry').show();
       } else if (answer1 === 'brown' && answer2 === 'female' && answer3 === 'no'){
         $('.character').append('Hermoine Granger!')
         $('.result').show();
         $('#hermoine').show();
       } else {
         $('.character').append('a student at Hogwarts! Woohoo!')
         $('.result').show();
         $('#student').show();
       }
     }
  });
});
