const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

let currentFaq = 0;
while(currentFaq < faqData.length){
  createFaq();
  currentFaq++;
}

function createFaq() {
  const currentFaqData = faqData[currentFaq]
  const faq = document.createElement('div');
accordianBody.appendChild(faq).className = 'faq'
  const faqHeader = document.createElement('div');
  faq.appendChild(faqHeader).className = 'faq_header'
  let query = document.createElement('h3')
  query.textContent = currentFaqData.question;
  faqHeader.appendChild(query)
  let showBtn = document.createElement('button')
  showBtn.textContent = '+'
  faqHeader.appendChild(showBtn).className= 'show_btn'
  const faqAns = document.createElement('p')
  faqAns.textContent = currentFaqData.answer;
  faq.appendChild(faqAns).className='hidden';
  
}

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq =>{
  faq.childNodes[0].childNodes[1].addEventListener('click',() => {
    if (faq.childNodes[0].childNodes[1].innerHTML == '+'){
      faq.childNodes[0].childNodes[1].innerHTML = '-';
      faq.childNodes[1].style.display = 'block'
    }
    else{
      faq.childNodes[0].childNodes[1].innerHTML = '+'
      faq.childNodes[1].style.display = 'none'
    }
  })
})



