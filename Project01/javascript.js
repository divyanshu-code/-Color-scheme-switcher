const boxes = document.querySelectorAll(".button");
console.log(boxes);
const body= document.querySelector(".big");


boxes.forEach( function( boxes) {
  
    boxes.addEventListener('click' , function (e){
     
      if( e.target.id === "grey"){
        body.style.backgroundColor = "grey" ;
      }
      if( e.target.id === "pink"){
        body.style.backgroundColor = "pink" ;
      }
      if( e.target.id === "purple"){
        body.style.backgroundColor ="purple" ;
      }
      if( e.target.id === "red"){
        body.style.backgroundColor = "red" ;
      }

    });

});


