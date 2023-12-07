const translations = {
    es: {
        main_tilte: 'Excelencia en Servicios de Ingeniería',
        main_subtitle: 'Trabajando con equipos de profesionales altamente calificados desde nuestra sede en Toulouse, con una vasta experiencia en diferentes rubros de la industria y utilizando las mejores herramientas del mercado, acercamos soluciones eficaces a la más variada gama de necesidades.',
        main_sider_title:"Para la Industria Siderúrgica",
        destacados:"Nuestros proyectos destacados",
        slider1tit:"Rotador de block de motores",
        slider2tit:"Verificación teórica escudo muelle",
        slider3tit:"Equipo auxiliar de izaje",
        slider4tit:"Girador múltiples de escape",
        slider5tit:"evanador alambre cobre y extrusora de plástico",
        slider6tit:"Girador múltiples de escape",
},
fr: {
    main_title: 'L’Excellence des Services  D’Ingeniénierie',
     main_subtitle: 'En travaillant avec des équipes de professionnels hautement qualifiés de notre siège à Toulouse, avec une vaste expérience dans différents domaines de l’industrie et en utilisant les meilleurs outils du marché, nous apportons des solutions efficaces aux besoins les plus variés.',
     main_sider_title: "Sidérurgie",
    destacados:"le trabajó un montón",
    slider1tit:"Rotate le blocké de motoré",
    slider2tit:"la verifique  soi",
    slider3tit:"frances",
    slider4tit:"Giradre le escapé ",
    slider5tit:"francia c de plástico",
    slider6tit:"Gfransois le pifie",
},
en: {
    main_tilte: 'Excellence in Engineering Services',
    main_subtitle: 'Working with teams of highly qualified professionals from our headquarters in Toulouse, with vast experience in different areas of the industry and using the best tools on the market, we bring effective solutions to the most varied range of needs.',
    main_sider_title: "For Steelmaking",,
    destacados:"Our highlighted projects",
    slider1tit:"Engines rotator",
    slider2tit:"Verification",
    slider3tit:"English",
    slider4tit:"rotated ",
    slider5tit:"plastic girl",
    slider6tit:"yeah baby",
},

};



function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translation-id]');

    elements.forEach(element => {
        const translationId = element.getAttribute('data-translation-id');
        element.textContent = translations[language][translationId];
    });

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve selected language from localStorage on page load
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    if (selectedLanguage) {
        // Set the initial language
        changeLanguage(selectedLanguage);
    }
});










