const CONTACT_EMAIL = "contacto@bekaizen-ai.com";

export const openDemoMailto = () => {
  const subject = encodeURIComponent("Solicitud de Demo - Be Kaizen");
  const body = encodeURIComponent(
    "Hola, me gustaría agendar una demo de Be Kaizen.\n\n" +
    "Nombre:\nEmpresa:\nTeléfono:\n\nComentarios:\n"
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

export const openSalesMailto = () => {
  const subject = encodeURIComponent("Consulta Comercial - Be Kaizen");
  const body = encodeURIComponent(
    "Hola, me gustaría recibir más información sobre los planes Enterprise de Be Kaizen.\n\n" +
    "Nombre:\nEmpresa:\nTeléfono:\n\nComentarios:\n"
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};
