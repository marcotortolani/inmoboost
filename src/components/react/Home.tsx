import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  BarChart2,
  Building2,
  CheckCircle,
  DollarSign,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react'
import Footer from './Footer'
import SectionKeyElements from './SectionKeyElements'
import SectionSteps from './SectionSteps'
import SectionAbout from './SectionAbout'

export default function Component() {
  const handleRedirect = (href: string) => {
    window.location.href = href
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-white"
          id="home"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Creamos soluciones para tu Inmobiliaria
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Transformamos tu inmobiliaria con estrategias que impulsan el
                  crecimiento y la eficiencia
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => handleRedirect('/booking-diagnosis')}
                >
                  Agenda tu Diagnóstico Gratuito Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Retos */}
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100"
          id="challenges"
        >
          <div className="max-w-screen-xl container px-4 md:px-6">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Los retos que detienen tu crecimiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                <CardHeader>
                  <CardTitle>Poca generación de leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart2 className="h-12 w-12 text-blue-900 mb-2" />
                  <p>Dificultad para atraer nuevos clientes potenciales.</p>
                </CardContent>
              </Card>
              <Card className=" bg-white hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                <CardHeader>
                  <CardTitle>Propiedades mal posicionadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <MapPin className="h-12 w-12 text-blue-900 mb-2" />
                  <p>Falta de visibilidad en el mercado inmobiliario.</p>
                </CardContent>
              </Card>
              <Card className=" bg-white hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                <CardHeader>
                  <CardTitle>Procesos internos desorganizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <Users className="h-12 w-12 text-blue-900 mb-2" />
                  <p>Ineficiencias que afectan la productividad del equipo.</p>
                </CardContent>
              </Card>
              <Card className=" bg-white hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                <CardHeader>
                  <CardTitle>Inestabilidad financiera</CardTitle>
                </CardHeader>
                <CardContent>
                  <DollarSign className="h-12 w-12 text-blue-900 mb-2" />
                  <p>Dificultades para mantener un flujo de caja estable.</p>
                </CardContent>
              </Card>
            </div>
            <p className=" px-2 md:px-20 mt-8 text-center text-xl">
              En InmoBoost, entendemos el impacto que estos desafíos pueden
              tener en tu negocio. Por eso nos convertimos en el aliado que
              necesitas: un socio estratégico con un plan claro para transformar
              cada obstáculo en una oportunidad de crecimiento real y
              sostenible.
            </p>
          </div>
        </section>
        {/* Proceso */}
        <SectionSteps />

        <section className="w-full px-4 py-12 md:py-24 lg:py-20 bg-gray-100">
          <p className="text-xl h-fit  uppercase font-thin tracking-wide sm:text-2xl md:text-3xl text-center">
            Transformamos tu inmobiliaria con estrategias que impulsan el
            crecimiento y la eficiencia
          </p>
        </section>

        {/* Elementos clave */}
        <SectionKeyElements />
        {/* Nosotros */}
        <SectionAbout />
        {/* Contacto */}
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-blue-900 text-white"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contáctanos
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6" />
                <a
                  href="mailto:hola@inmoboost.uy"
                  className="text-lg hover:underline"
                >
                  hola@inmoboost.uy
                </a>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span className="text-lg">+598 12345678</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Uruguay</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
