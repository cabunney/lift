

// $(document).ready(function() {
//     $("#focus-bar-main a").click(function() {
//         event.preventDefault();
//         $("#main-inner").animate({"left":"-320px"}, "slow");
//         $("#starting").delay(500).fadeIn(500);
//          $("#starting").delay(2000).fadeOut(500);
//          $("#main-body").delay(3500).fadeIn(500);
//           $("#canvas-container").show(0,function(){
//                             $("#canvas").click(function() {
//                               // animateCircle(1);
//                               animateCircle(1);
//                             });
//                           });
//     });

//     $("#body-container-bar .left-link a").click(function() {
//         event.preventDefault();
//            // $("#starting").hide();
//         $("#main-body").fadeOut();
//         $("#main-inner").animate({"left":"0px"}, "slow");

//     });

//      $("#calibrate-bar .left-link a").click(function() {
//         event.preventDefault();
//            // $("#starting").hide();
//        event.preventDefault();
//         $("#calibrate").fadeOut();
//         $("#main-body").fadeIn();

//     });

//     $("#body-container-bar .right-link a").click(function() {
//         event.preventDefault();
//         $("#main-body").fadeOut();
//         $("#calibrate").fadeIn();
//         // $("#main-inner").animate({"left":"0px"}, "slow");
//     });
//        $("#calibrate-start a").click(function() {
//             event.preventDefault();
//               // $("#main-inner").animate({"left":"-640px"}, "slow");
//               $("#calibrate").fadeOut();
//               $("#calibrate-finish").hide();
//               $("#dots div").css("background-color","white");

//                          $("#calibrate2-instructions").show();
//                           $("#calibrate2-cancel").show();

//               $("#calibrate2").fadeIn();
//               fillDots(1);
//               function fillDots(i) {
//                  $(".dot"+i).delay(10).animate({
//                     backgroundColor:'#79c650'
//                   }, 1000, function() {
//                     i=i+1;
//                     if (i <= 5) {
//                     fillDots(i);
//                     } else {
//                         // $("#calibrate2-bar .middle-title").fadeOut();
//                         $("#calibrate2-cancel").fadeOut();
//                         $("#calibrate2-instructions").fadeOut(function() {
//                           // $("#calibrate2-instructions").html("<div>Finished Calibrating</div>").delay(500).fadeIn();
//                         $("#calibrate-finish").fadeIn();
//                          $("#calibrate2").delay(2000).fadeOut();



//                           $("#main-body").delay(2000).fadeIn();
                         
//                         });
                    
//                     }
//                   });
//                 }
//         });

//     //  $("#calibrate-start a").click(function() {
//     //     event.preventDefault();
//     //     $("#calibrate").fadeOut();
//     //     $("#body-container").fadeIn();
//     //      $("#canvas-container").delay(1000).show(0,function(){
//     //           animateCircle(1);
//     //     });
//     // });
// });

// var cloneCount = 0;
// var timeleft = 5;

// function animateCircle(number) {
//      (function() {
//           var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//                                       window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//           window.requestAnimationFrame = requestAnimationFrame;
//         })();
//         var time=60;
//         timer();
//         function timer() {

             
                   
//             }   
//         var canvas = document.getElementById('canvas'+ cloneCount);
//         var context = canvas.getContext('2d');
//         var x = canvas.width / 2;
//         var y = canvas.height / 2;
//         var radius = 75;
//         var endPercent = 0;
//         var curPerc = 60;
//         var counterClockwise = true;
//         var circ = Math.PI * 2;
//         var quart = Math.PI / 2;
//         context.lineWidth = 5;
//         context.strokeStyle = '#79c650';
//         // context.shadowOffsetX = 0;
//         // context.shadowOffsetY = 0;
//         // context.shadowBlur = 10;
//         // context.shadowColor = '#79c650';
//         context.fillStyle='#79c650';
//         var full = radius*2;
//         var amount = 0;
//         var amountToIncrease = 1;
//         var intId;

        


//         function fillDraw() {
//             context.save();
//             context.beginPath();
//             context.arc(x, y, radius, 0, 2 * Math.PI, false);
//             context.clip(); // Make a clipping region out of this path
            
//             context.fillStyle = '#79c650';
          
//             context.fillRect(x - radius, y + radius, radius * 2, -amount);
//             context.restore(); // reset clipping region

//             context.beginPath();
//             context.arc(x, y, radius, 0, 2 * Math.PI, false);
         
//             amount += amountToIncrease;
//             if (amount > full) {
//                 $("#canvas").animate({
//                     marginTop: "350px",
//                     marginLeft:"10px",
//                     height: "50px",
//                     width: "50px"
//                   }, 1000, function() {
//                     // Animation complete.
//                 });
//                 clearInterval(intId);
//                 // animateCircle(2);
//             }
            
//         }



//          function animate(current) {

//              context.clearRect(0, 0, canvas.width, canvas.height);
//              context.beginPath();
//              context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
//              context.stroke();

//              curPerc--;
//              // $("#focus-instructions").fadeOut("");
//              // $("#focus-instructions div").fadeOut("");
//              // $("#focus-instructions div").html(curPerc + " seconds");
//              if (curPerc > endPercent) {
//                  requestAnimationFrame(function () {
                   
                
                   
//                     setTimeout(function() {
//                         if (time >1) var sec = "seconds";
//                         else var sec = "second";
//                           $("#focus-instructions div").html("<div id='time-sec'>"+time+"</div>" +"" +sec).show();
//                           time--;
//                          animate(curPerc / 60);
//                     }, 100)
//                      // animate(curPerc / 60)
//                  },1000);
//              } else {
//                 context.fill();
//                 time=0;

//                 // context.stroke();
//                $('#canvas')
//                   .clone()
//                   .attr('id', 'canvas'+ cloneCount)
//                   .appendTo("#canvas-container")
//                   .css("position","absolute")
//                   .css("top","0px");
//                 var destcanvas = document.getElementById('canvas'+cloneCount);
//                 var destcontext = destcanvas.getContext('2d');
//                 destcontext.drawImage(canvas, 0, 0);
//                 context.clearRect(0, 0, canvas.width, canvas.height);

//                 // curPerc = 0;
//                 // requestAnimationFrame(function () {
//                 //      animate(curPerc / 100)
//                 //  },1000);
//                 // $( "#canvas1" ).clone().appendTo( "#canvas1" );
//                 var mL = 10+50*cloneCount;
//                 $("#focus-instructions").show();
//                    $("#focus-instructions div").html("<div id='time-sec'>"+time+"</div>" +"seconds" ).show();

//                $("#canvas"+cloneCount).animate({
//                     marginTop: "350px",
//                     marginLeft:mL+"px",
//                     height: "50px",
//                     width: "50px"
//                   }, 1000, function() {
//                 cloneCount++;


//                 if (cloneCount < 6) {
//                    $("#time-left strong").fadeOut(function(){
//                         $("#time-left strong").html(timeleft--).fadeIn();
//                          animateCircle(1);
//                    });
                 
//                 }
//                     // Animation complete.
//                 });
//                 // intId = setInterval(fillDraw, 10);


//              }
//          }

//          animate();
//     }

//   function shakeCircle(number) {
//        $("#focus-instructions").css("background","transparent");
//        $("#focus-instructions").html("<div class='straightenup'>Sit up straight!</div>");

//      $("#main-container").delay(0).animate({ 
//           backgroundColor:"#ffaf4d"
//       }, 3000, "linear");

//      $("#main-container").delay(0).animate({
//           backgroundColor:"#ffd19a"
//       }, 3000, "linear");

//      $("#main-container").delay(0).animate({
//           backgroundColor:"white"
//       }, 3000, "linear");
     
     
//        function shake(current) {

          
//        }

//        shake();
//   }



// // /////////////////////////////////////////////////////






// function drawpath( offset,canvas, pathstr, duration, attr, callback )
// {
//     var guide_path = canvas.path( pathstr ).attr( { stroke: "none", fill: "none" } );
//     var path = canvas.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
//     var total_length = guide_path.getTotalLength( guide_path );
//     var last_point = guide_path.getPointAtLength( 0 );
//     var start_time = new Date().getTime();
//     var interval_length = 1000;
//     var result = path;        

//     var interval_id = setInterval( function()
//     {
//         var elapsed_time = new Date().getTime() - start_time;
//         var this_length = elapsed_time / duration * total_length;
//         var subpathstr = guide_path.getSubpath( 0, this_length );            
//         attr.path = subpathstr;

//         path.animate( attr, interval_length );
//         if (offset>0 && offset<3) {
//             $("#body-container").delay(0).animate({
//                 marginLeft: '-=200px'
//             }, 2000, "linear");
//         }
//         else if (offset >= 3) {
//              $("#body-container").delay(0).animate({
//                 marginLeft: '-=200px',
              
//                 backgroundColor:"green"
//             }, 2000, "linear");

//         }

       
//         if ( elapsed_time >= duration )
//         {
//             clearInterval( interval_id );
//             if ( callback != undefined ) callback();
//                 guide_path.remove();
//         }                                       
//     }, interval_length );  
//     return result;
// }

// function draw(offset, paper, width) 
// {
//     var x1=200*offset;
//     var x2=100+200*offset;
//     var x3=x1+200;
//     // var x4=x2+200;
//     var points = 
//     [
//         { x: x1, y: 410 },
//         { x: x2, y: 405 },
//         { x: x3, y: 410 }
       
       
//     ];

//     var first = false;
//     var count = 0;

//     var pathstr = generateInterpolatedPath( paper, points, first );
//     drawpath( offset,paper, 
//           pathstr, 
//           2000, 
//           { stroke: 'black', 'stroke-width': 2, 'stroke-opacity': 1, fill: 'none', 'fill-opacity': 0 }, 
//           function()
//           { 
//             if (offset <= 3) {

//                 draw(offset+1, paper, width); 
//             } else {
//                 drawUp(offset+1, 0, paper,width);
//             }
//                 // trigger whatever you want here
//           } );
// }

// function drawUp(offset, offsetup, paper, width) 
// {
//     var x1=200*offset;
//     var x2=100+200*offset;
//     var x3=x1+200;
//     var y1=410-offsetup*30;
//     var y2=y1-20;
//     var y3=y1-30;
//     // var x4=x2+200;
//     var points = 
//     [
//         { x: x1, y: y1 },
//         { x: x2, y: y2 },
//         { x: x3, y: y3 }
       
       
//     ];

//     var first = false;
//     var count = 0;

//     var pathstr = generateInterpolatedPath( paper, points, first );
//     drawpath( offset,paper, 
//           pathstr, 
//           2000, 
//           { stroke: 'black', 'stroke-width': 2, 'stroke-opacity': 1, fill: 'none', 'fill-opacity': 0 }, 
//           function()
//           { 
          

//                 drawUp(offset+1, offsetup+1,paper, width); 
            
//                 // trigger whatever you want here
//           } );
// }

// function generateInterpolatedPath( paper, points, show_control_points )
// {
//     var path_sequence = [];
//     path_sequence.push( "M", points[0].x, points[0].y );
//     path_sequence.push( "R" );
//     show_control_points && paper.circle( points[0].x, points[0].y, 5 ).attr( { fill: 'black' } ).animate( { opacity: 0 }, 30000, function() { this.remove(); } );

//     for ( var i = 1; i < points.length; i++ )
//     {
//         path_sequence.push( points[i].x, points[i].y );
//         show_control_points && paper.circle( points[i].x, points[i].y, 5 ).attr( { fill: 'black' } ).animate( { opacity: 0 }, 30000, function() { this.remove(); } );
//     }
//     return path_sequence;
// }



