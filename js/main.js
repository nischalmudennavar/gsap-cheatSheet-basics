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
    alert("cdn copied 😉🕺" );

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
        stagger:0.4
        
    })
}

document.querySelectorAll('.language-javascript').forEach(block => {
    // then highlight each
    hljs.highlightBlock(block);
  });