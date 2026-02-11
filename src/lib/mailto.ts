const CONTACT_EMAIL = "contacto@bekaizen-ai.com";

export const openDemoMailto = () => {
  const subject = encodeURIComponent("Solicitud de Demo - Be Kaizen");
  const body = encodeURIComponent(
    "Hola, me gustaría agendar una demo de Be Kaizen.\n\n" +
    "Nombre:\nEmpresa:\nTeléfono:\n\nComentarios:\n"
  );
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  const link = document.createElement("a");
  link.href = mailtoUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};

export const openSalesMailto = () => {
  const subject = encodeURIComponent("Consulta Comercial - Be Kaizen");
  const body = encodeURIComponent(
    "Hola, me gustaría recibir más información sobre los planes Enterprise de Be Kaizen.\n\n" +
    "Nombre:\nEmpresa:\nTeléfono:\n\nComentarios:\n"
  );
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  const link = document.createElement("a");
  link.href = mailtoUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
};
