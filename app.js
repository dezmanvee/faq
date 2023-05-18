//using selectors inside the element
// traversing the dom

//const questionBtns = document.querySelectorAll('.question-btn');


const questions = document.querySelectorAll('.question');


questions.forEach((question) => {

    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {

        questions.forEach((value) => {
            if (value !== question) {
                value.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })

})





// questionBtns.forEach((questionBtn) => {

//     questionBtn.addEventListener('click', (ev) => {
//         let questionEvent = ev.currentTarget.parentElement.parentElement

//         questionEvent.classList.toggle('show-text');
//     })
// })