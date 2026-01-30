import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              <strong className="text-foreground">Última actualización:</strong> Enero 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Información del Responsable</h2>
              <p>
                <strong className="text-foreground">Be Kaizen S.A.S.</strong> (en adelante, "Be Kaizen", "nosotros" o "la Empresa") 
                con domicilio en la República Argentina, es responsable del tratamiento de los datos personales 
                que usted nos proporciona a través de este sitio web.
              </p>
              <p>
                Contacto: <a href="mailto:contacto@bekaizen-ai.com" className="text-primary hover:underline">contacto@bekaizen-ai.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Datos que Recopilamos</h2>
              <p>Recopilamos los siguientes datos personales cuando usted completa nuestro formulario de solicitud de demo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico corporativo</li>
                <li>Nombre de la empresa</li>
                <li>Descripción del desafío operativo (opcional)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Finalidad del Tratamiento</h2>
              <p>Utilizamos sus datos personales para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a su solicitud de demostración del producto</li>
                <li>Contactarlo para coordinar reuniones y presentaciones</li>
                <li>Enviarle información comercial relacionada con nuestros servicios (con su consentimiento)</li>
                <li>Mejorar nuestros productos y servicios</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Base Legal</h2>
              <p>
                El tratamiento de sus datos se basa en su consentimiento expreso al completar el formulario 
                de contacto, de conformidad con la Ley N° 25.326 de Protección de Datos Personales de la 
                República Argentina y su normativa complementaria.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Conservación de Datos</h2>
              <p>
                Sus datos personales serán conservados durante el tiempo necesario para cumplir con las 
                finalidades descritas, y posteriormente durante los plazos legales aplicables. 
                En caso de no establecerse una relación comercial, los datos serán eliminados en un 
                plazo máximo de 24 meses desde su recopilación.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Derechos del Titular</h2>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong className="text-foreground">Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong className="text-foreground">Oposición:</strong> Oponerse al tratamiento de sus datos</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede contactarnos a{" "}
                <a href="mailto:contacto@bekaizen-ai.com" className="text-primary hover:underline">contacto@bekaizen-ai.com</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos 
                personales contra el acceso no autorizado, la pérdida, alteración o divulgación.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Transferencias Internacionales</h2>
              <p>
                Sus datos pueden ser procesados por proveedores de servicios ubicados fuera de Argentina. 
                En tales casos, garantizamos que dichos proveedores cumplan con estándares de protección 
                de datos equivalentes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Cambios en esta Política</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad. Cualquier cambio 
                será publicado en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Autoridad de Control</h2>
              <p>
                La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de la 
                Ley N° 25.326 en Argentina. Puede presentar reclamos ante dicha autoridad si considera 
                que sus derechos han sido vulnerados.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
