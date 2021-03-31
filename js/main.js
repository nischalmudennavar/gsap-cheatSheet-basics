var copyTextareaBtn = document.querySelector('.copy-btn');




function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("cdn");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");



    /* Alert the copied text */
    alert(" CDN copied 😉🕺 " );

    // var tooltip = document.getElementById("myTooltip");
    //    tooltip.innerHTML = "Copied cdn ";
}


document.querySelector('#effect-1').onclick = function(){

    gsap.to('.subject-translatex',{
        x:100,
        duration:1,
        
    })
}

// ffect-1-2

document.querySelector('#effect-1-2').onclick = function(){

    gsap.to('.subject-translatex',{
        x:-100,
        duration:1,
        
    })
}

document.querySelector('#effect-2').onclick = function(){

    gsap.to('.subject-translatey',{
        y:100,
        duration:1,
        
    })
}
document.querySelector('#effect-2-2').onclick = function(){

    gsap.to('.subject-translatey',{
        y:-100,
        duration:1,
        
    })
}

document.querySelector('#effect-3').onclick = function(){

    gsap.to('.subject-translatexs',{
        x:100,
        duration:0.5,
        stagger:0.4
        
    })
}
document.querySelector('#effect-3-2').onclick = function(){

    gsap.to('.subject-translatexs',{
        x:-100,
        duration:0.5,
       
        
    })
}

document.querySelector('#effect-4').onclick = function(){

    gsap.to('.subject-rotate',{
        x:100,
        duration:0.5,
        rotate:90,
 
       
        
    })
}
document.querySelector('#effect-4-2').onclick = function(){

    gsap.to('.subject-rotate ',{
        x:-100,
        duration:0.5,
        rotate:-90
        
        
    })
}
let colors = ['red','blue','green','yellow','orange']

document.querySelectorAll('.language-javascript').forEach(block => {
    // then highlight each
    hljs.highlightBlock(block);
    // block.style.color =colors[Math.random()*3];
  });