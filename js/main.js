
document.querySelector('#effect-1').onclick = function(){

    gsap.to('.subject-translatex',{
        x:100,
        duration:1,
        
    })
}

document.querySelector('#effect-2').onclick = function(){

    gsap.to('.subject-translatey',{
        y:100,
        duration:1,
        
    })
}

document.querySelectorAll('.language-javascript').forEach(block => {
    // then highlight each
    hljs.highlightBlock(block);
  });