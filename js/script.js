document.querySelector('.menu-icon-wrapper').onclick = function() {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.log-reg').classList.toggle('show');
    document.querySelector('.home-acad').classList.toggle('hidden');
};



let tab = document.getElementsByClassName('modules-arrow'),
    svg = document.getElementsByClassName('modules-arrow-svg'),
    tabContent = document.getElementsByClassName('modules-arrow-ul');

function showTabContent(b) {
    tabContent[b].classList.toggle('hide');
    svg[b].classList.toggle('svg-reverse');
}

document.addEventListener('click', function(event) {
    let target = event.target;
    if(target.className === 'modules-arrow') {
        for(let i = 0; i < tab.length; i++) {
            if(target === tab[i]) {
                showTabContent(i);
                break;
            }
        }
    };
});


/*let slides = document.getElementsByClassName('experts-slide');

document.querySelector('.arrow-back').onclick = function() {
    for(let i = 0; i < slides.length; i++) {
        if(slides[i].style.display === 'block') {
            slides[i-1].style.display = 'block';
            for(let i = i; i < slides.length; i++) {
                if(i === slides.length) {
                    slides[i].style.display = 'none';
                    break;
                } else {
                    if(slides[i].style.display === 'none') {
                        slides[i-1].style.display = 'none';
                        break;
                    };
                }
            };
            break;
        };
    };
};

document.querySelector('.arrow-next').onclick = function() {
    for(let i = 0; i < slides.length-1; i++) {
        console.log(slides.length);
        if(slides[i].style.display === 'none') {
            slides[i].style.display = 'block';
            console.log("12345");
            break;
        };
    };
    for(let i = 0; i < slides.length; i++) {
        if(slides[i].style.display === 'block') {
            slides[i].style.display = 'none';
            break;
        };
    };
};*/

