const correctAnswers = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const succesMessage = document.querySelector('#succesMassage');
const button = document.querySelector('.btn');





form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    result.classList.remove('d-none');
    let puan = 0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastir);
        }
        else {
            puan++;


        }
        if(score==100)
        {
            succesMessage.classList.remove('d-none');
            button.setAttribute('disabled','');
            
        }


    }, 10);
});