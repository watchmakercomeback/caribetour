const participants = [
    {
        imageLink: '/assets/ELCERVECERO.png',
        instagram: '@elcervecerobaq',
        direccion: 'carrera 53#79-279 plz 5',
        telefono: '315 8903349 - 3045540653',
        horario: [
            'Martes y Miércoles: 4:30pm - 10:00pm',
            'Jueves: 4:00pm - 12:00am',
            'Viernes y Sábado: 4:00pm - 2:00pm',
            'Domingo: 4:00pm - 10:00pm',
        ],
        googleMapsLink: 'https://maps.app.goo.gl/nLNJMrqL9VsS7bJr8',
        burger:"La cervecero Burger",
        descripcion:"120gr de carne artesanal, Tocineta ahumada caramelizada, Queso amarillo, Queso mozzarella, Tomate milano, Lechuga romana, Salsa BBQ de cerveza de la casa",
        burgerImage:"/assets/burgers/EL_CERVECERO.JPG"
    },
    {
        imageLink: '/assets/Logo-URBAN-BISTRO.png',
        instagram: '@urban.bistro',
        direccion: 'Carrera 53 #82-86 local 6',
        telefono: 'N/A',
        horario: [
            'Lunes a Viernes de 12:00pm-10:00pm',
            'Sábados 4:00-11:00pm',
            'Domingos 3:00-10:00pm',
        ],
        googleMapsLink: 'https://maps.app.goo.gl/4nWkGAmBjCT3rxA6A?g_st=iwb',
        burger:"Truffle burger",
        descripcion:"150 gramos de Carne Angus, exquisita Mayonesa de Trufas, queso mozarella, cebollas caramelizadas, tocineta y lechuga",
        burgerImage:"/assets/burgers/URBAN_BISTRO.jpg"
    },
    {
        imageLink: '/assets/yonas.png',
        instagram: '@yonasbh',
        direccion: 'Calle 82#44-44',
        telefono: '3006970630',
        horario: [
            'Domingos a miércoles de 11:30am-10:30pm',
            'Jueves a Sabados de 11:30am-11:30pm '
        ],
        googleMapsLink: 'https://maps.app.goo.gl/txUe6vPC3tP1ViSg6',
        burger:"LA PASSION De Yona's",
        descripcion:"El toque maravilloso entre dulce y acido de una reducción de maracuyá caramelizada, que es la fruta de LA PASSION, la misma pasión con la que hacemos todas nuestras exquisitas recetas y esta no podía ser la excepción, Con 140grs de Carne Angus, queso cheddar tajado, chorizo santarrosano asado, cebollas crispy apanadas, queso crema untado en nuestro suave y esponjoso pan artellano hecho en casa. Sin duda alguna una combinación de texturas y sabores que no puedes dejar de probar.",
        burgerImage:"/assets/burgers/YONAS.jpg"
    },
    {
        imageLink: '/assets/logo_killer.png',
        instagram: '@killerburgerbq',
        direccion: 'calle 74#55-34',
        telefono: '3001437382',
        horario: [
            'Lunes a Domingo de 5pm - 11:59pm'
        ],
        googleMapsLink: 'https://maps.app.goo.gl/dfQsj6ceHNnU7RBV6?g_st=iwb',
        burger:"LA ESCOBAR",
        descripcion:"Desde la cultura antioqueña fusión encontramos a la hamburguesa ESCOBAR, la cual trae un pan brioche, carne Angus certiificada 130gr, queso cheddar, carne de molida de cerdo al pomodoro, huevo frito, delicioso chorizo antioqueño, típica tajadita madura, vegetales frescos y salsas de la casa.",
        burgerImage:"/assets/burgers/KILLER_BURGER.png"
    },
    {
        imageLink: '/assets/majestic_burgers.png',
        instagram: '@Majestic_burgers',
        direccion: 'Cra 44 #84-29',
        telefono: '3004214155',
        horario: [
            'lunes a jueves y domingo 04:00 pm a 10:30 pm',
            'viernes 04:30 pm a 11:00 pm',
            'sábado 04:30 pm a 12:00 am'
        ],
        googleMapsLink: 'https://maps.app.goo.gl/iKbp56xEKKx5gjqq5',
        burger:"LA 10 DE MESSI",
        descripcion:"Si señores la 10 de Messi 🍔 Nuestro delicioso pan de papa, 125 gr de carne Angus , Queso Monster, piña caramelizada, tocineta ahumada, cebolla Crispy, salsa Majestic y lo mejor de todo Chorizo argentino. En serio está burger tiene un 10.",
        burgerImage:"/assets/burgers/MAJESTIC.jpg"
    },
    {
        imageLink: '/assets/careme.png',
        instagram: '@careme.restobar',
        direccion: 'Cll. 80 No. 68 - 23',
        telefono: '3046595573',
        horario: [''],
        googleMapsLink: 'https://maps.app.goo.gl/dg4FSBBHvgdpe1Cz9',
        burger:"Crispy Onion",
        descripcion:"Déjate envolver por las notas esponjosas de nuestro pan artellano que fusionado con nuestra emulsión de queso azul, el mágico toque de la cebolla caramelizada y los aros de cebolla crocante explotarán tus sentidos. ¿Que esperas para probarla?",
        burgerImage:"/assets/burgers/CAREME.jpg"
    },
    {
        imageLink: '/assets/tropique.png',
        instagram: '@tropiquefoodclub',
        direccion: 'Cl. 133 #53 – 115',
        telefono: '3105026341',
        horario: ['Lunes a domingo: 5:30pm - 11:30pm'],
        googleMapsLink: 'https://maps.app.goo.gl/FLQAQi4VM3hptfFX7',
        burger:"LA RANCHERA",
        descripcion:"Pan artesanal, 125gr de Carne de res Angus, queso cheddar americano, tocineta crocante, dip ranchero (combina queso crema, salchicha ranchera, tocineta, maíz tierno y cebollín), Rugula del huerto de la casa y salsa de la casa.",
        burgerImage:"/assets/burgers/TROPIQUE.JPG"
    },
    {
        imageLink: '/assets/machete.jpg',
        instagram: '@Macheteburger',
        direccion: 'carrera 52 # 98 esquina',
        telefono: '3053868251',
        horario: ['12pm - 11pm'],
        googleMapsLink: 'https://g.co/kgs/LfSLGZ',
        burger:"Dorian Burger",
        descripcion:"Pan tipo brioche, blend de carne madurada y chorizo argentino, tocineta ahumada, Cebolla caramelizada en panela, chimichurri, chips de plátano, y salsa de ajo.",
        burgerImage:"/assets/burgers/MACHETE.jpg"
    },
    {
        imageLink: '/assets/magdalena.jpg',
        instagram: '@cerveveriamagdalena',
        direccion: 'carrera 64 # 84 - 182',
        telefono: 'NA', 
        horario: ['4pm - 12am'], 
        googleMapsLink: 'https://g.co/kgs/fnSHRA',
        burger:"La Albina",
        descripcion:"Pan artellano, Carne madurada, lechuga romana, salsa de quesos madurados, cebolla caramelizada en vino tinto.",
        burgerImage:"/assets/burgers/MAGDALENA.jpg"
    },
    {
        imageLink: '/assets/big_bites.png', 
        instagram: '@bigbitesco',
        direccion: 'Calle 84 # 54-21 L4',
        telefono: '3007200027',
        horario: ['11am - 10pm', 'Viernes y Sábado: 11am - 11pm'], 
        googleMapsLink: 'https://g.co/kgs/xSdYfC',
        burger:"Burger Fusión Mediterránea",
        descripcion:"150gr carne artesanal, pan nube, queso mozzarella, cebolla roja caramelizada al vino, aros de cebolla, salsa de queso y salsa de tomates secos.",
        burgerImage:"/assets/burgers/BIG_BITE.jpg"
    },
    {
        imageLink: "/assets/cabron.jpg",
        instagram: "CABRON.BISTRO",
        direccion: "CRA 43B#87-127 CRA43#84-80",
        telefono: "3045204456",
        horario: ["12:00 pm - 1:00 am"],
        googleMapsLink: "https://www.google.com/maps/dir//Cra.+43b,+Nte.+Centro+Historico,+Barranquilla,+Atlántico/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8ef42d0797955db9:0x14d40f7786824224?entry=s&sa=X&ved=2ahUKEwieivyps7WCAxVSTjABHbcDCuwQlDt6BAgHEAA",
        burger:"CABRON BURGUER", 
        descripcion:"CON 150 GR DE CARNE ANGUS, PAN ARTELLANO, CARAMELIZADO SWEET PEPPER GREEN Y NUESTRA HAPPY ONION EN REDUCCIÓN DE JACK DANIEL’S, QUESO SUIZO, SALSA SECRETA CABRON & VEGETALES FRESCOS!",
        burgerImage:"/assets/burgers/URBAN__BISTRO .jpeg"
    },
    {
        imageLink: "/assets/gril_master.png",
        instagram: "@grillmasterburguerbq",
        direccion: "Carrera 21b #61 esquina",
        telefono: "N/A",
        horario: [
            "Lunes a Viernes: 4pm - 11pm",
            "Sábado, Domingo y Festivos: 4pm - 11:30pm"
        ],
        googleMapsLink: "https://maps.app.goo.gl/49ZkCX625j2VdyqS6",
        burger:"Hamburguesa La Épica", 
        descripcion:"es mucho más que una hamburguesa, es una experiencia gastronómica que eleva el arte de combinar sabores. Su corazón es una jugosa carne asada a la parrilla, bañada en los aromas del chorizo y el chicharrón de cerdo crujiente. El pan de papa, suave y esponjoso, abraza este festín. En cada bocado, descubrirás la fusión de sabores: la frescura del tomate y la crujiente armonía de los aros de cebolla crispy. Es como un toque auténtico, que aporta una textura única a este deleite. Para completar esta sinfonía de sabores, la cebolla caramelizada y una selección de salsas cuidadosamente orquestadas se entrelazan, creando una experiencia épica digna de la épica. ¡Prepárate para un viaje sensorial que despierta los sentidos y redefine la esencia de la hamburguesa",
        burgerImage:"/assets/burgers/GRILL_MASTER.png"
    },
    {
        imageLink: "/assets/industry.png",
        instagram: "@industryburgerbaq",
        direccion: "cra 14 e 45 e 3 cevillar",
        telefono: "3504198947",
        horario: ["3pm a 11:30pm"],
        googleMapsLink: "https://www.google.com/search?q=industry+burger&oq=ind&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxjjAhiKBTIMCAAQIxgnGOMCGIoFMg8IARAuGCcYrwEYxwEYigUyBggCEEUYPTIGCAMQRRg9MgYIBBBFGD0yBggFEEUYQTIGCAYQRRhBMgYIBxBFGDkyBwgIEAAYgAQyDQgJEAAYgwEYsQMYigXSAQgyNDc2ajBqNKgCALACAA&client=ms-android-xiaomi-rvo3&sourceid=chrome-mobile&ie=UTF-8#trex=m_t:lcl_akp,rc_f:rln,rc_ludocids:13429455396912456955,ru_gwp:0%252C7,ru_lqi:Cg9pbmR1c3RyeSBidXJnZXJI2_aP3Lu4gIAIWiEQABABGAAYASIPaW5kdXN0cnkgYnVyZ2VyKgYIAhAAEAGSAQpyZXN0YXVyYW50qgE4EAEyHxABIhtYMocZol9PwmuJnSLc841uEe2fl717_wfqJIUyExACIg9pbmR1c3RyeSBidXJnZXI,ru_phdesc:eUMD0BUGqUQ,trex_id:lRqLDb&lpg=cid:CgIgAQ%3D%3D",
        burger:"Burger Imperial", 
        descripcion:"Pan tipo brioche, 150g de certified Angus beef, costillas BBQ ahumadas por 16 horas, cebolla caramelizada en reducción de Jack Daniels, tocineta ahumada, cebolla Frita, exclusiva salsa Extreme, salsa chipotle, tomate y lechuga frescos.",
        burgerImage:"/assets/burgers/INDUSTRY_BURGER.jpg"
    },
    {
        imageLink: "/assets/chori.png",
        instagram: "@somoschori",
        direccion: "Carrera 46 #85-12 local 101",
        telefono: "3044475868",
        horario: [
            "Domingo a Jueves: 12:00pm - 10:00pm",
            "Viernes y Sábados: 12:00pm - 12:00am"
        ],
        googleMapsLink: "https://www.google.com/maps/place/CHORI/@11.0026325,-74.8210732,15z/data=!4m6!3m5!1s0x8ef42d1ebdecafb5:0x59d2d2a9e8b4615f!8m2!3d11.0026325!4d-74.8210732!16s%2Fg%2F11j4msww0m?entry=ttu",
        burger:"Jolly Burger", 
        descripcion:"¡El sabor de la navidad en un mordisco! Pan tipo brioche, jamón artesanal, manzanas confitadas, jugosa carne seleccionada, salsa mayo - humo, queso mozarela, cebolla, tomate y lechuga fresca.",
        burgerImage:"/assets/burgers/CHORI.JPG"
    },
    {
        imageLink: "/assets/jr.jpg",
        instagram: "JrburgerbqQ_",
        direccion: "cra41E#78c-59",
        telefono: "3107718938 solo WhatsApp",
        horario: ["De lunes a domingo 5:30 pm - 11:59 pm"],
        googleMapsLink: "https://g.co/kgs/nYRGYJ",
        burger:"PULLED PORK", 
        descripcion:"Pan artesanal, 130 gr de carne seleccionada, queso cheddar, tocineta, aros de cebolla y el delicioso pulled pork de la casa en reducción de Coca-Cola y panela.",
        burgerImage:"/assets/burgers/JR_BURGER.jpg"
    },
    {
        imageLink: "/assets/dominic.png",
        instagram: "@dominicbq",
        direccion: "calle 88# 72-05",
        telefono: "(312) 564-6834",
        horario: [
            "Lunes a Jueves: 4:00pm a 11:30pm",
            "Viernes y Sábado: 4:00pm a 12:00am",
            "Domingo: 4:00pm a 11:30pm"
        ],
        googleMapsLink: "https://maps.app.goo.gl/PtYYKcLP4R3PpnxW9",
        burger:"Angelita burguer", 
        descripcion:"150gr carne artesanal, pan nube, queso mozzarella, cebolla roja caramelizada al vino, aros de cebolla, salsa de queso y salsa de tomates secos.",
        burgerImage:"/assets/burgers/DOMINIC.jpg"
    },
    {
        imageLink: "/assets/kobe.jpg",
        instagram: "@kobebarranquilla",
        direccion: "calle 96#46-32 local 6, barrio el poblado",
        telefono: "3003648970 - 3043592658",
        horario: ["De 3 pm a 11 pm"],
        googleMapsLink: "https://maps.app.goo.gl/YHdW2tbRLTJjU6jy9",
        burger:"Burger blue", 
        descripcion:"descripción de la hamburguesa: pan de la casa,130 gramos de carne tipo Angus, maduro, cebolla crispy ,bañada una salsa a base de queso azul. Nuestro establecimiento se basa en una fusión asiática-caribeña. Que abarca una variedad de platos especiales para el deleite de toda la familia",
        burgerImage:"/assets/burgers/KOBE.jpg"
    },
    {
        imageLink: "/assets/gaia.png",
        instagram: "@probarparacreer",
        direccion: "Cl 79 #51-49",
        telefono: "3146757657",
        horario: ["4 pm - 11 pm"],
        googleMapsLink: "https://maps.app.goo.gl/TCYWTXdctFMxKsav9?g_st=ic",
        burger:"CABRERA", 
        descripcion:"Les presento la hamburguesa Cabrera, con 150 gramos de cortes selectos de carne angus, cebolla caramelizada en miel de panela, queso philadelphia y cebolla crispy será un deleite para cualquier paladar!",
        burgerImage:"/assets/burgers/gaia.jpg"
    },
    {
        imageLink: "/assets/deleite_gourmet.png",
        instagram: "@deleitegourmet_restaurantebar",
        direccion: "Cra. 50 #82-253",
        telefono: "3022995483",
        horario: [
            "Domingo a Jueves: 10 am - 9 pm",
            "Viernes y Sábado: 10 am - 10 pm"
        ],
        googleMapsLink: "https://maps.app.goo.gl/B1KjZ86dmhMiaR4DA?g_st=ic",
        burger:"Delight burger", 
        descripcion:"Nuestra Burger consiste en un pan brioche, un mix de carne de res y carne de cerdo, pulled pork en reducción de tamarindo, un fondue de quesos mozzarella y cheddar, chicharrón crocante, una deliciosa reducción de cebolla caramelizada en salsa de mora, una cama de lechuga crespa y finalizamos con el toque especial LA SALSA DE LA CASA.",
        burgerImage:"/assets/burgers/DELEITE_GOURMET.jpg"
    },
    {
        imageLink: "/assets/raval.jpg",
        instagram: "@weare.raval",
        direccion: "Cl 85 #53-52",
        telefono: "3164780044",
        horario: [
            "Martes a Domingo y Festivos: 5 pm - 1 am"
        ],
        googleMapsLink: "https://maps.app.goo.gl/1hLG7GgTAFbeWcvb8?g_st=ic",
        burger:"Burger Raval", 
        descripcion:"Pan Brioche, Carne de Res, Cogollo Europeo de lechuga, Queso Suizo, Salsa Raval, Tocineta, Pimentones dulces",
        burgerImage:"/assets/burgers/RAVAL.jpg"
    }
]
export default participants