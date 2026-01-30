import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-lg">
              <strong className="text-foreground">Última actualización:</strong> Enero 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
                (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten 
                que el sitio recuerde sus acciones y preferencias durante un período de tiempo, 
                para que no tenga que volver a configurarlas cada vez que regrese al sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Cookies que Utilizamos</h2>
              <p>
                En <strong className="text-foreground">Be Kaizen S.A.S.</strong> utilizamos los siguientes tipos de cookies:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">2.1 Cookies Técnicas (Esenciales)</h3>
              <p>
                Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies, 
                el sitio no puede funcionar correctamente.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Cookies de sesión:</strong> Mantienen su sesión activa mientras navega</li>
                <li><strong className="text-foreground">Cookies de seguridad:</strong> Protegen contra ataques y fraudes</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.2 Cookies Funcionales</h3>
              <p>
                Permiten recordar sus preferencias y personalizar su experiencia en el sitio.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Preferencias de idioma:</strong> Recuerdan su idioma seleccionado</li>
                <li><strong className="text-foreground">Configuración de visualización:</strong> Recuerdan sus preferencias de interfaz</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Cookies de Terceros</h2>
              <p>
                Actualmente, no utilizamos cookies de terceros para análisis o publicidad. 
                Si en el futuro incorporamos herramientas de análisis como Google Analytics, 
                actualizaremos esta política y le informaremos debidamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Duración de las Cookies</h2>
              <p>Las cookies pueden tener diferentes duraciones:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Cookies de sesión:</strong> Se eliminan automáticamente 
                  cuando cierra su navegador
                </li>
                <li>
                  <strong className="text-foreground">Cookies persistentes:</strong> Permanecen en su dispositivo 
                  hasta que expiran o las elimina manualmente (generalmente entre 1 mes y 2 años)
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Gestión de Cookies</h2>
              <p>
                Usted puede controlar y/o eliminar las cookies según sus preferencias. 
                Puede eliminar todas las cookies que ya están en su dispositivo y puede 
                configurar la mayoría de los navegadores para que no las acepten.
              </p>
              <p>
                A continuación, le indicamos cómo gestionar las cookies en los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Safari:</strong> Preferencias → Privacidad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Nota:</strong> Si desactiva las cookies, es posible que algunas 
                funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Base Legal</h2>
              <p>
                El uso de cookies técnicas se basa en nuestro interés legítimo de garantizar 
                el funcionamiento del sitio web. Para cookies no esenciales, solicitamos su 
                consentimiento previo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Actualizaciones de esta Política</h2>
              <p>
                Podemos actualizar esta Política de Cookies periódicamente para reflejar 
                cambios en las cookies que utilizamos o por otras razones operativas, 
                legales o regulatorias. Le recomendamos revisar esta página regularmente 
                para mantenerse informado sobre nuestro uso de cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Contacto</h2>
              <p>
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos en:
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

export default Cookies;
