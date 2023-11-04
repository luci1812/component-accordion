import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="page-width__narrow">
    <div class="accordion__wrap">
      <button class="accordion__title">
        Block title
        <span class="icon icon-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.54577 12.5625H11.1412V17.1579C11.1412 17.625 11.5254 18.0167 12 18.0167C12.4746 18.0167 12.8588 17.625 12.8588 17.1579V12.5625H17.4542C17.9213 12.5625 18.3131 12.1783 18.3131 11.7037C18.3131 11.2291 17.9213 10.8449 17.4542 10.8449H12.8588V6.24944C12.8588 5.78237 12.4746 5.39062 12 5.39062C11.5254 5.39062 11.1412 5.78237 11.1412 6.24944V10.8449H6.54577C6.07869 10.8449 5.68695 11.2291 5.68695 11.7037C5.68695 12.1783 6.07869 12.5625 6.54577 12.5625Z" fill="black"/>
          </svg>
        </span>
        <span class="icon icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.16158 16.3292C5.84517 16.6456 5.8301 17.2107 6.16911 17.5421C6.50058 17.8736 7.06559 17.8661 7.382 17.5497L11.9925 12.9316L16.6105 17.5497C16.9345 17.8736 17.4919 17.8736 17.8234 17.5421C18.1473 17.2031 18.1549 16.6532 17.8234 16.3292L13.2129 11.7112L17.8234 7.10072C18.1549 6.77678 18.1549 6.2193 17.8234 5.88783C17.4844 5.56389 16.9345 5.55636 16.6105 5.8803L11.9925 10.4983L7.382 5.8803C7.06559 5.56389 6.49305 5.54882 6.16911 5.88783C5.83764 6.2193 5.84517 6.78431 6.16158 7.10072L10.7796 11.7112L6.16158 16.3292Z" fill="black"/>
          </svg>
        </span>       
      </button>
      <div class="accordion__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.</p>
      </div>
    </div>
  
    <div class="accordion__wrap">
      <button class="accordion__title">
        Block title
        <span class="icon icon-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.54577 12.5625H11.1412V17.1579C11.1412 17.625 11.5254 18.0167 12 18.0167C12.4746 18.0167 12.8588 17.625 12.8588 17.1579V12.5625H17.4542C17.9213 12.5625 18.3131 12.1783 18.3131 11.7037C18.3131 11.2291 17.9213 10.8449 17.4542 10.8449H12.8588V6.24944C12.8588 5.78237 12.4746 5.39062 12 5.39062C11.5254 5.39062 11.1412 5.78237 11.1412 6.24944V10.8449H6.54577C6.07869 10.8449 5.68695 11.2291 5.68695 11.7037C5.68695 12.1783 6.07869 12.5625 6.54577 12.5625Z" fill="black"/>
          </svg>
        </span>
        <span class="icon icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.16158 16.3292C5.84517 16.6456 5.8301 17.2107 6.16911 17.5421C6.50058 17.8736 7.06559 17.8661 7.382 17.5497L11.9925 12.9316L16.6105 17.5497C16.9345 17.8736 17.4919 17.8736 17.8234 17.5421C18.1473 17.2031 18.1549 16.6532 17.8234 16.3292L13.2129 11.7112L17.8234 7.10072C18.1549 6.77678 18.1549 6.2193 17.8234 5.88783C17.4844 5.56389 16.9345 5.55636 16.6105 5.8803L11.9925 10.4983L7.382 5.8803C7.06559 5.56389 6.49305 5.54882 6.16911 5.88783C5.83764 6.2193 5.84517 6.78431 6.16158 7.10072L10.7796 11.7112L6.16158 16.3292Z" fill="black"/>
          </svg>
        </span>   
      </button>
      <div class="accordion__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.</p>
      </div>
    </div>
  
    <div class="accordion__wrap">
      <button class="accordion__title">
        Block title
        <span class="icon icon-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.54577 12.5625H11.1412V17.1579C11.1412 17.625 11.5254 18.0167 12 18.0167C12.4746 18.0167 12.8588 17.625 12.8588 17.1579V12.5625H17.4542C17.9213 12.5625 18.3131 12.1783 18.3131 11.7037C18.3131 11.2291 17.9213 10.8449 17.4542 10.8449H12.8588V6.24944C12.8588 5.78237 12.4746 5.39062 12 5.39062C11.5254 5.39062 11.1412 5.78237 11.1412 6.24944V10.8449H6.54577C6.07869 10.8449 5.68695 11.2291 5.68695 11.7037C5.68695 12.1783 6.07869 12.5625 6.54577 12.5625Z" fill="black"/>
          </svg>
        </span>
        <span class="icon icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.16158 16.3292C5.84517 16.6456 5.8301 17.2107 6.16911 17.5421C6.50058 17.8736 7.06559 17.8661 7.382 17.5497L11.9925 12.9316L16.6105 17.5497C16.9345 17.8736 17.4919 17.8736 17.8234 17.5421C18.1473 17.2031 18.1549 16.6532 17.8234 16.3292L13.2129 11.7112L17.8234 7.10072C18.1549 6.77678 18.1549 6.2193 17.8234 5.88783C17.4844 5.56389 16.9345 5.55636 16.6105 5.8803L11.9925 10.4983L7.382 5.8803C7.06559 5.56389 6.49305 5.54882 6.16911 5.88783C5.83764 6.2193 5.84517 6.78431 6.16158 7.10072L10.7796 11.7112L6.16158 16.3292Z" fill="black"/>
          </svg>
        </span>   
      </button>
      <div class="accordion__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor sed commodo rhoncus, nulla mauris euismod neque, ac lacinia nisl nibh in mi.</p>
      </div>
    </div>
  </div>
`;

class Accordion {
  constructor(elm) {
    this.body = elm;
    this.button = elm.querySelector('.accordion__title');
    this.content = elm.querySelector('.accordion__body');

    this.init();
  }

  init() {
    this.button.addEventListener('click', () => {
      this.toggleState();
      this.hideSibling();
    });
  }

  showAccordion() {
    this.body.classList.add('open');
    this.content.style.maxHeight = this.content.scrollHeight + "px";
  }

  hideAccordion() {
    this.body.classList.remove('open');
    this.content.style.maxHeight = 0 + "px";
  }

  toggleState() {
    if(this.body.classList.contains('open')) {
      this.hideAccordion();
    } else {
      this.showAccordion();
    }
  }

  hideSibling() {
    accordions.forEach((accordion) => {
      if (accordion !== this.body) {
        accordion.classList.remove('open');
        const content = accordion.querySelector('.accordion__body');
        content.style.maxHeight = 0;
      }
    });
 }
}

const accordions = document.querySelectorAll('.accordion__wrap');
accordions.forEach((accordion) => {
  if (accordion) {
    new Accordion(accordion);    
  }
});
