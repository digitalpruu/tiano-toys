const title = "Tiano.Toys";
const email = "Tianotoyst@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573142270040";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Somos TianoToys, la marca fabricante y distribuidora de muñecos bebes que alegra el corazón y el alma de nuestros niños a través del juego sano, con valores, amor e inclusión.  Bebes rellenitos de ternura, cariño y tela, para que nuestros niños vuelvan a ser niños y  nosotros como adultos rescatemos nuestra infancia, compartiendo y disfrutando momentos inolvidables.",
        description2: "Ofrecemos accesorios, vestuario,  lencería  para muñecos únicos con trabajo artesanal y mano de obra 100% Colombiana que asegura la calidad de nuestros productos. Personalizamos la ropita de tus mejores amigos de juego, consiguiendo diseños exclusivos. Nuestros niños merecen soñar, crear, imaginar, socializar; ¡asegura que vivan esta experiencia en compañía de Tiano, ¡Bienvenidos!."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "…que los niños vuelvan a ser niños!",
            p2: "" // Información no proporcionada
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61564082835146",
        instagram: "https://www.instagram.com/tianotoys",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
