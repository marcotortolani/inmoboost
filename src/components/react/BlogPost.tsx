import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function BlogPost() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="min-h-screen  bg-primary">
      <header className="bg-white shadow-md">
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between px-4 py-6">
          <a
            href="/blog"
            className="flex items-center text-primary hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al Blog
          </a>
          <Button variant="outline" className="flex items-center">
            <Share2 className="mr-2 h-4 w-4" />
            Compartir
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-screen-xl px-4 py-12">
        <article className="rounded-lg bg-white p-6 shadow-xl md:p-8 lg:p-12">
          <h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            5 Estrategias para Aumentar tus Ventas Inmobiliarias
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>15 de Noviembre, 2023</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>10 min de lectura</span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              En el competitivo mundo inmobiliario, destacar y aumentar las
              ventas requiere estrategias efectivas y actualizadas. A
              continuación, te presentamos cinco estrategias probadas que pueden
              impulsar significativamente tus ventas inmobiliarias.
            </p>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              1. Aprovecha el Marketing Digital
            </h2>
            <p>
              El marketing digital es esencial en la era moderna. Utiliza las
              redes sociales, el email marketing y el SEO para llegar a más
              clientes potenciales. Crea contenido valioso que atraiga a tu
              audiencia y posiciónate como un experto en el sector.
            </p>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              2. Mejora tu Presencia Online
            </h2>
            <p>
              Asegúrate de que tu sitio web sea atractivo, fácil de navegar y
              optimizado para móviles. Incluye tours virtuales y fotografías de
              alta calidad de tus propiedades. Un sitio web bien diseñado puede
              ser tu mejor herramienta de ventas.
            </p>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              3. Personaliza tu Enfoque de Ventas
            </h2>
            <p>
              Cada cliente es único. Toma el tiempo para entender las
              necesidades específicas de cada cliente y adapta tu enfoque de
              ventas en consecuencia. La personalización puede marcar la
              diferencia entre una venta perdida y un cliente satisfecho.
            </p>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              4. Construye Relaciones a Largo Plazo
            </h2>
            <p>
              El negocio inmobiliario se basa en la confianza. Cultiva
              relaciones a largo plazo con tus clientes, incluso después de
              cerrar una venta. Las recomendaciones y repetición de negocios son
              invaluables en este sector.
            </p>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              5. Mantente Actualizado en Tendencias del Mercado
            </h2>
            <p>
              El mercado inmobiliario está en constante evolución. Mantente
              informado sobre las tendencias locales y globales, cambios en las
              leyes y nuevas tecnologías. Ser un agente bien informado te dará
              una ventaja competitiva.
            </p>
            <p className="mt-8">
              Implementar estas estrategias puede llevar tiempo, pero los
              resultados valen la pena. Recuerda, el éxito en las ventas
              inmobiliarias no se trata solo de cerrar tratos, sino de construir
              relaciones y proporcionar valor real a tus clientes.
            </p>
          </div>
        </article>
        <section className="mt-12 rounded-lg bg-white p-6 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Sobre el Autor
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Foto del autor"
              />
              <AvatarFallback className="bg-primary text-white font-bold text-3xl">
                AI
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Ana Inmobiliaria
              </h3>
              <p className="text-gray-600">
                Experta en estrategias de ventas inmobiliarias con más de 10
                años de experiencia en el sector. Ana comparte regularmente sus
                conocimientos para ayudar a otros profesionales a alcanzar el
                éxito.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1E2755] py-8 text-center text-white mt-12">
        <div className="container mx-auto px-4">
          <p>&copy; {currentYear} InmoBoost. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
