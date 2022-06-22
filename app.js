const correctAnswers = ['A', 'A', 'D', 'D', 'D'];        // stored correct answers into array
const form = document.querySelector('.quiz-form');
const displayResult = document.querySelector('.result');

form.addEventListener('submit', event => {
    event.preventDefault();             // prevent browser from refreshing once submitted

    let score = 0;                      
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];       // store user answers into an array by using value to access the answer

    // check answers
    for (i = 0; i < correctAnswers.length; i++){
        if(userAnswers[i] === correctAnswers[i]){
            score += 20;
        }
    };

    // display result
    
    displayResult.classList.remove('d-none');
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        displayResult.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})
