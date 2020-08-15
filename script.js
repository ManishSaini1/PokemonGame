var marginLeft=10;
var marginTop=10;
let ball= document.getElementById("ball");
var pokemon=document.getElementById("pokemon"); 
// console.log(window.innerWidth);
// console.log(window.innerHeight);


    // var position =$(ball[i]).position();
// console.log("Ball position", position);
 
    setTimeout(() => {
        ball.style.marginTop= Math.random(0-10)*650 + "px";
        ball.style.marginLeft =Math.random(0-10)*1300 + "px";
    }, 1000);
        


// var pokemonPosition=$(pokemon).position();
// console.log("pokemon Positio", pokemonPosition);

function movePokemon(event)
{
    const pokemonBottom=pokemon.getBoundingClientRect().bottom;
    const pokemonHeight=pokemon.getBoundingClientRect().height;
    const pokemonTop=pokemon.getBoundingClientRect().top;
    const pokemonWidth=pokemon.getBoundingClientRect().width;
    const pokemonLeft=pokemon.getBoundingClientRect().left;
    const ballBottom=ball.getBoundingClientRect().bottom;
    const ballLeft=ball.getBoundingClientRect().left;
    const ballHeight=ball.getBoundingClientRect().height;
    const ballWidth=ball.getBoundingClientRect().width;
    const ballRight=ball.getBoundingClientRect().right;
    const ballTop=ball.getBoundingClientRect().top;
    if(pokemonLeft + pokemonWidth>=
    (Math.floor(ballLeft)))
    // &&
    // ((pokemon.getBoundingClientRect().bottom + pokemon.getClientRects().height)>=(ball.getBoundingClientRect().bottom + ball.getClientRects().height))) 
{
    if((pokemonBottom + pokemonHeight)>=(ballBottom + ballHeight))
    {
                // window.alert("caught");
                    if(pokemonLeft  <= ballRight )
                    {
                        if((pokemonTop) <=( ballTop  + ballHeight))
                console.log("true in vertical also************");
                      }
}
    
}
     

    var x=event.keyCode;
    

    if(x==39 && marginLeft  < 1450)
    {
      var value=  pokemon.offsetLeft
    //   console.log(value);
    var pokemonPosition=(pokemon).offsetLeft;
 

   
        pokemon.style.marginLeft= marginLeft + "px";
        marginLeft+=10;     
    }
    else if(x==37 && marginLeft >0)
    {
        marginLeft-=10;
        
        pokemon.style.marginLeft= marginLeft + "px";
       
    }
    else if(x==38 && marginTop  >0)
    {
        marginTop-=10;
        pokemon.style.marginTop=marginTop +"px";
           
    }
        else if(x==40 &&  (pokemon.offsetTop+ pokemon.offsetHeight +19)< window.innerHeight)
    {
        console.log("offTop",pokemon.offsetTop);
        console.log("offheight",pokemon.offsetHeight);
        console.log("ineerHeigfht",window.innerHeight)
        pokemon.style.marginTop=marginTop +"px";
            marginTop+=10;
       
    }
    
}

// // collision detection
// function hitTest(a, b){
//     var aPos =$(a).position();
//     var bPos = $(b).position();

//     var aLeft = aPos.left;
//     var aRight = aPos.left + a.width;
//     var aTop = aPos.top;
//     var aBottom = aPos.top + a.height;

//     var bLeft = bPos.left;
//     var bRight = bPos.left + b.width;
//     var bTop = bPos.top;
//     var bBottom = bPos.top + b.height;

//     // http://tekpool.wordpress.com/2006/10/11/rectangle-intersection-determine-if-two-given-rectangles-intersect-each-other-or-not/
//     return !( bLeft > aRight
//         || bRight < aLeft
//         || bTop > aBottom
//         || bBottom < aTop
//         );
// }

// var collision=hitTest(pokemon, ball);
// console.log("collison is" ,collision);
