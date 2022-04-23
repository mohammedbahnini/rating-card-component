const numbers = document.querySelectorAll('.number');
const btn_submit = document.querySelector('.submit');
let current_rating = 1;

const click = (number)=>{
   
    if( number.classList.contains('active') == false )
    {
        numbers.forEach( item =>{
            item.classList.remove('active');
        });
        current_rating = number.dataset.ratingValue ;
        number.classList.add('active');
    }
    
}

const submit = ()=>{
    const card_rating = document.querySelector('.card.card-rating');
    const card_success= document.querySelector('.card.card-success');
    const reslut_text= document.querySelector('.card.card-success .result-value');
    reslut_text.textContent = current_rating;

    card_rating.classList.add('hidden');
    setTimeout(()=>{
        card_success.style.display = 'block';
        card_rating.style.display = 'none';
        
    },100);
    setTimeout(()=>{
        card_success.classList.add('visible');
    },200)
    
}


numbers.forEach( number =>{
    number.addEventListener('click' , ()=>{
        click(number);
    });
});

btn_submit.addEventListener('click', submit);

