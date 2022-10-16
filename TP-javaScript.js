




let vroug = document.getElementById('vroug');
let vnoir = document.getElementById('vnoir');
let vblanc = document.getElementById('vblanc');
let vbleu = document.getElementById('vbleu');
let grandvoitu = document.getElementById('grandvoitu');
let cercle =   document.getElementById('cercle');


vroug.addEventListener('click' , () =>{
    grandvoitu.src ='Image_TP-js/voitrouge.png';
cercle.style.backgroundColor = 'red';
})


vnoir.addEventListener('click' , () =>{
    grandvoitu.src ='Image_TP-js/voitunoir1.png';
    cercle.style.backgroundColor = 'black';
})



vblanc.addEventListener('click' , () =>{
    grandvoitu.src ='Image_TP-js/voitublanc.png';
    cercle.style.backgroundColor = 'white';
})




vbleu.addEventListener('click' , () =>{
    grandvoitu.src ='Image_TP-js/voitubleu.png';
    cercle.style.backgroundColor = 'aquamarine';
})



















































