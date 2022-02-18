let modal = document.querySelector('.modal'),
    choose = document.querySelector('#choose'),
    main_title = document.querySelector('.main_title'),
    wow = document.querySelector('.wow'),
    btnclose = document.querySelector('.close'),
    contactform_name = document.querySelector('.contactform_name');
    massage = document.getElementsByName('message')[0];


    contactform_name.addEventListener('input',function(){
        massage.value = `mening ismim ${contactform_name.value}`;
    })


    choose.addEventListener('click',function(){
        modal.style.display = 'block';
    })


    btnclose.addEventListener('click',function(){
        modal.style.display = "none";
    })

  

    // wow.addEventListener('mouseenter', function(){
    //     wow.ntent = "Assalomu Aleykum";
    // });

    // wow.addEventListener('mouseleave',function(){
    //     wow.textContent = ('Все включено');
    // });


    
    // main_title.addEventListener('mouseenter',function(){
    //              main_title.textContent = "Hello Nima Gap Dostim"; 
    // });

    // main_title.addEventListener('mouseleave',function(){
    //     main_title.textContent = "Мы знаем как правильно отдохнуть душой и телом"; 
    // })


