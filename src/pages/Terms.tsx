import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-lg prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              <strong className="text-foreground">Última actualización:</strong> Enero 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Información General</h2>
              <p>
                El presente documento establece los Términos y Condiciones de uso del sitio web 
                de <strong className="text-foreground">Be Kaizen S.A.S.</strong> (en adelante, "Be Kaizen"), 
                sociedad constituida bajo las leyes de la República Argentina.
              </p>
              <p>
                Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones en su totalidad. 
                Si no está de acuerdo, le solicitamos que no utilice este sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Descripción del Servicio</h2>
              <p>
                Be Kaizen ofrece una plataforma de inteligencia artificial para la mejora continua 
                de procesos industriales. A través de este sitio web, los usuarios pueden:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conocer información sobre nuestros productos y servicios</li>
                <li>Solicitar demostraciones del producto</li>
                <li>Acceder a recursos y documentación</li>
                <li>Contactar con nuestro equipo comercial</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Uso Aceptable</h2>
              <p>El usuario se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar el sitio web de manera lícita y conforme a estos Términos</li>
                <li>No realizar actividades que puedan dañar, inutilizar o sobrecargar el sitio</li>
                <li>No intentar acceder de forma no autorizada a sistemas o redes</li>
                <li>Proporcionar información veraz y actualizada en los formularios</li>
                <li>No utilizar el sitio para fines comerciales no autorizados</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo pero no limitado a textos, gráficos, 
                logotipos, iconos, imágenes, clips de audio y video, software y su compilación, 
                son propiedad de Be Kaizen o de sus proveedores de contenido, y están protegidos 
                por las leyes argentinas e internacionales de propiedad intelectual.
              </p>
              <p>
                La marca "Be Kaizen", el logotipo y cualquier otra marca distintiva son propiedad 
                exclusiva de Be Kaizen S.A.S. Queda prohibida su reproducción sin autorización expresa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Limitación de Responsabilidad</h2>
              <p>
                Be Kaizen no garantiza que el sitio web esté libre de errores o que funcione 
                de manera ininterrumpida. El sitio y su contenido se proporcionan "tal cual" 
                sin garantías de ningún tipo.
              </p>
              <p>
                En la máxima medida permitida por la ley aplicable, Be Kaizen no será responsable 
                por daños directos, indirectos, incidentales, especiales o consecuentes que resulten 
                del uso o la imposibilidad de uso del sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Enlaces a Terceros</h2>
              <p>
                Este sitio web puede contener enlaces a sitios de terceros. Estos enlaces se 
                proporcionan únicamente para su conveniencia. Be Kaizen no tiene control sobre 
                dichos sitios y no asume responsabilidad por su contenido o políticas de privacidad.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Modificaciones</h2>
              <p>
                Be Kaizen se reserva el derecho de modificar estos Términos y Condiciones en 
                cualquier momento. Las modificaciones entrarán en vigor desde su publicación 
                en el sitio web. El uso continuado del sitio después de cualquier modificación 
                constituye la aceptación de los nuevos términos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de la República Argentina. 
                Para cualquier controversia derivada de estos términos, las partes se someten 
                a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, 
                renunciando a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos a través de:
              </p>
              <p>
                Email: <a href="mailto:contacto@bekaizen-ai.com" className="text-primary hover:underline">contacto@bekaizen-ai.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
