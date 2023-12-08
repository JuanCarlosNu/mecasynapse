const translations = {
    es: {
        main_tilte: 'Excelencia en Servicios de Ingeniería',
        main_subtitle: 'Trabajando con equipos de profesionales altamente calificados desde nuestra sede en Toulouse, con una vasta experiencia en diferentes rubros de la industria y utilizando las mejores herramientas del mercado, acercamos soluciones eficaces a la más variada gama de necesidades.',
        main_sider_title:"Para la Industria Siderúrgica",

        main_sider_sub1:"Laminación en caliente ",
        main_sider_sub2:"Laminación en frío",
        main_sider_sub3:"Líneas de galvanizado",
        main_sider_sub4:"Reducción Directa",
        main_sider_sub5:"Colada contínua",
        main_sider_sub6:"Parques de tratamiento de chatarra",

        main_alim_title:"Para la Industria Alimenticia",
        main_alim_subtitle:"Equipamiento y estructuras para plantas de procesado de especias, chocolate, té, etc",
        
        main_manip_title:"En Diseño de Elementos de Manipulación",
        main_manip_subtitle:"Diseño y cálculo de elementos de izaje y manipulación para todo tipo de industrias y necesidades.",

        main_calc_title:"En Memorias de Cálculo",
        main_calc_subtitle:"Confección de memorias de cálculo para modelos físicos de situaciones reales",

        main_simu_title:"Simulaciones",
        main_simu_subtitle:"Simulaciones computacionales de modelos físicos de estática, dinámica, transferencia de calor, vibraciones, mecánica de fluidos y fatiga.",

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
     main_sider_sub1:"Lignes de LAC",
     main_sider_sub2:"Lignes de LAF",
     main_sider_sub3:"Lignes de galvanisation",
     main_sider_sub4:"Reduction directe",
     main_sider_sub5:"Coulée continue",
     main_sider_sub6:"Traitement de la ferraille",

     main_alim_title:"Alimentarire",
     main_alim_subtitle:"Équipements et structures pour les industries des épices, du chocolat, du thé, etc",

     main_manip_title:"Manutention",
     main_manip_subtitle:"Conception et calcul d’éléments de levage et manutention pour tous les types d’industries et de besoins.",

    main_calc_title:"Notes de Calcul",
    main_calc_subtitle:"Réalisation de mémoires de calcul pour des modèles physiques de situations réelles réelles",

    main_simu_title:"simulations",
    main_simu_subtitle:"Simulations numériques de modèles physiques de statique, de dynamique, de transfert de chaleur, des vibrations, de la mécanique des fluides ainsi que de fatigue",


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
    main_sider_title: "For Steelmaking",
    main_sider_sub1:"Hot Rolling",
    main_sider_sub2:"Cold Rolling",
    main_sider_sub3:"Galvanizing lines",
    main_sider_sub4:"Direct Reduction",
    main_sider_sub5:"Continuous casting",
    main_sider_sub6:"Scrap Metal Parks",

    main_alim_title:"For Food Industry",
    main_alim_subtitle:"Equipment and structures for spices processing plants, chocolate, tea, etc",

    main_manip_title:"In Handling Element Design",
    main_manip_subtitle:"Design and calculation of lifting and handling elements for all types of industries and needs",

    main_calc_title:"In Calculation Reports",
    main_calc_subtitle:"Preparation of calculation reports for physical models of real phenomena",

    main_simu_title:"Simulations",
    main_simu_subtitle:"Computational simulations of physical models of statics, dynamics, heat transfer, vibration, fluid mechanics, and fatigue",


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










