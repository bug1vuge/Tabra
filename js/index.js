const filterModule = () => {

    const filter = document.querySelector('.filter'),
          openFilter = document.querySelector('.hobbies__filter-button'),
          body = document.querySelector('body'),
          filterForm = document.querySelector('.filter__form'),
          filterResultCount = openFilter.querySelector('span'),
          filterCheckboxes = filter.querySelectorAll('input[type = "checkbox"]');
    

    const closeFilterFunc = () => {
        filter.classList.remove('visible'); 
        body.style.overflow = 'visible';
        filterForm.reset();

        if (filterResultCount.classList.contains('visible')) {
            filterResultCount.classList.remove('visible');
        };
    }

    filter.addEventListener('click', (e) => {
        const target = e.target;
        let flag = false;

        if (target.classList.contains('filter__checkbox')) { 
            
            filterCheckboxes.forEach(el => {
                if (el.checked == true) {
                    flag = true; 
                };
            });

            if (flag == true) {
                filterResultCount.classList.add('visible');
            } else {
                filterResultCount.classList.remove('visible');
            }
        };

        if (target.closest('.filter__close-button')) { closeFilterFunc() };
    });

    openFilter.addEventListener('click', (e) => { 
        filter.classList.add('visible'); 
        body.style.overflow = 'hidden';
    });

};


const showTransparencyModule = () => {

    const hobbyCards = document.querySelectorAll('.hobbies__item');
    let isVisible = false;

    hobbyCards.forEach(el => {
        el.addEventListener('click', (e) => {
            const transparencyBlock = el.querySelector('.hobbies__item-transparency');
            const target = e.target;

            if (target.closest('.hobbies__item-button')) {

                if (isVisible) {
                    transparencyBlock.classList.remove('visible');
                    target.setAttribute('src', './images/hobby-block/closed-eye.png');
                    isVisible = false;
                } else {
                    transparencyBlock.classList.add('visible');
                    target.setAttribute('src', './images/hobby-block/opened-eye.png');
                    isVisible = true;
                };
            };
        });
    });
};

const smoothScrollModule = (obj) => {
    const scrollToBtn = document.querySelector(obj.button);
    const scrollToSection = document.querySelector(obj.block);

    const scrollTo = (el) => {
        window.scroll({
            left: 0,
            top: el.offsetTop,
            behavior: 'smooth'
        });
    };

    scrollToBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo(scrollToSection);
    });
};

try {
    smoothScrollModule({
        button: '.hobby__info-button',
        block: '#discussion-block'
    });

    smoothScrollModule({
        button: '.up-button',
        block: '#up'
    });
} catch (error) {
    
}

try {
    showTransparencyModule();
} catch (error) {
    
}

try {
    filterModule();
} catch (error) { }

