    {
    const clasesAccordion = document.querySelectorAll('.gs-faq__question');
    for(let = i; i<clasesAccordion.length; i++){
document.querySelectorAll("[id^="tab"]").addEventListener("click", function(event) {
}

    clasesAccordion.forEach((item) => item.addEventListener
             ("click", event))
        if(clasesAccordion[i].style.display == 'block'){
            continue;
        }else{
document.clasesAccordion[i].style.display = 'none';
        }


}           
event.preventDefault();
}, false);
    }

    
    //             //  
let AccordionEl = document.querySelectorAll('.gs-faq__answer');
let accordionBtn = document.querySelectorAll('[id*="tab"]');
for (let i = 0; i < accordionBtn.length; i++) {



    accordionBtn[i].addEventListener('click', () => {
        for (let i = 0; i < accordionBtn.length; i++) {
            if (accordionEl[i].style.display = "block") {
                continue;
            } else {
                accordionEl[i].style.sisplay = "block";
            }
        }
    });

}
