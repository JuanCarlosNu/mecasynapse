const translations = {
    es: {
        slogan1: 'INGENIERÍA',
        slogan2: 'DE EXCELENCIA',
        frase: "Trabajando con equipos de profesionales altamente calificados desde nuestra sede en Toulouse, con una vasta experiencia en diferentes rubros de la industria y utilizando las mejores herramientas del mercado, acercamos soluciones eficaces a la más variada gama de necesidades.",
        destacados:"Nuestros proyectos destacados",
        slider1tit:"Rotador de block de motores",
        slider2tit:"Verificación teórica escudo muelle",
        slider3tit:"Equipo auxiliar de izaje",
        slider4tit:"Girador múltiples de escape",
        slider5tit:"evanador alambre cobre y extrusora de plástico",
        slider6tit:"Girador múltiples de escape",
},
fr: {
    slogan1: 'allo, vienvenid le sitio we!',
    slogan2: 'Ette hh una puerbá.',
    frase: "le trabajee fuertemente tode el tiempe musse de chocolate  de la industria y utilizando las mejores herramientas del mercado, acercamos soluciones eficaces a la más variada gama de necesidades.",
    destacados:"le trabajó un montón",
    slider1tit:"Rotate le blocké de motoré",
    slider2tit:"la verifique  soi",
    slider3tit:"frances",
    slider4tit:"Giradre le escapé ",
    slider5tit:"francia c de plástico",
    slider6tit:"Gfransois le pifie",
},
en: {
    slogan1: 'MAJOR',
    slogan2: 'INGENIERING',
    frase: "Working with teams of highly qualified professionals from our headquarters in Toulouse, with extensive experience in various industry sectors and using the best tools in the market, we provide effective solutions to a wide range of needs.",
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
};











