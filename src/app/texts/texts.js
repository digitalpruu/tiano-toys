const title = "Tiano.Toys";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Tiano.Toys se especializa en la creación de muñecos para bebés, diseñados para proporcionar a los más pequeños juguetes seguros y divertidos que fomentan su desarrollo y felicidad.",
        description2: "Con un enfoque en la calidad y la seguridad, nuestros muñecos están elaborados con materiales suaves y amigables para los bebés, asegurando que cada juguete sea un compañero perfecto para la infancia."
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
        facebook: "", // Información no proporcionada
        instagram: "", // Información no proporcionada
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
