import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronRight, Home, Mail, Menu } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=" w-full flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6 text-blue-900" />
          <span className="ml-2 text-lg font-bold text-blue-900">
            InmoBoost
          </span>
        </a>
        <div className="ml-auto flex items-center">
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              Sobre Nosotros
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Servicios
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#testimonials"
            >
              Testimonios
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contacto
            </a>
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-1/2 bg-white">
              <nav className="flex flex-col gap-4 ">
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotros
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#services"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#testimonials"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonios
                </a>
                <a
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="">
        {/* Call to Action */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-20 text-center">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Creamos soluciones para tu Inmobiliaria
                </h1>
                <p className="mx-auto max-w-[7500px] font-light text-gray-200 md:text-xl">
                  Transformamos tu negocio con estrategias que impulsan el
                  crecimiento y la eficiencia
                </p>
              </div>
              <div className="space-y-4 max-w-[600px]">
                <h2 className="text-2xl font-semibold">
                  ¡Empieza tu transformación hoy mismo!
                </h2>
                <Button className="bg-sky-600 text-white hover:bg-gray-100 rounded-3xl">
                  Agenda tu Diagnóstico Gratuito Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Cards Desafios y Soluciones */}
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-blue-900">
                    ¿Estás enfrentando estos desafíos?
                  </h2>
                  <ul className="space-y-2">
                    {[
                      'Poca generación de leads',
                      'Propiedades mal posicionadas',
                      'Procesos internos desorganizados',
                      'Inestabilidad financiera',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-primary/90 text-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Nuestras Soluciones
                  </h2>
                  <ul className="space-y-2">
                    {[
                      'Atraemos más clientes y propiedades rentables',
                      'Optimizamos tus finanzas y rentabilidad',
                      'Organizamos y profesionalizamos tu equipo',
                      'Definimos tu nicho y propuesta de valor única',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="h-5 w-5 text-white" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Nuestros Pilares */}
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
          id="services"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Pilares Fundamentales
            </h2>
            <div className="grid gap-6 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                  <h3 className="text-xl font-bold">
                    Generación de Oportunidades
                  </h3>
                  <p className="text-sm text-gray-600">
                    Más clientes y propiedades rentables
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                  <h3 className="text-xl font-bold">Optimización Financiera</h3>
                  <p className="text-sm text-gray-600">
                    Mayor rentabilidad y estabilidad
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                  <h3 className="text-xl font-bold">
                    Organización y Profesionalización del Equipo
                  </h3>
                  <p className="text-sm text-gray-600">
                    Equipos más eficientes y alineados
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                  <h3 className="text-xl font-bold">
                    Definición de Nicho y Propuesta de Valor
                  </h3>
                  <p className="text-sm text-gray-600">
                    Diferenciación efectiva en el mercado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        {/* <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-50"
          id="testimonials"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl md:text-5xl text-center mb-8">
              Testimonios
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="mb-4 text-lg">
                    &quot;InmoBoost ha incrementado nuestras ventas un 30% en
                    seis meses.&quot;
                  </p>
                  <p className="font-bold">— Germán, Director de Ionik</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <p className="mb-4 text-lg">
                    &quot;La optimización de procesos nos ha permitido destacar
                    en el mercado.&quot;
                  </p>
                  <p className="font-bold">
                    — Leandro, Dueño de [Nombre de la Empresa]
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Nosotros */}
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl md:text-5xl text-center mb-8">
              Sobre Nosotros
            </h2>
            <div className="h-fit grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  InmoBoost: Tu Partner Estratégico para el Crecimiento
                  Inmobiliario
                </h3>
                <p className="text-gray-600">
                  En InmoBoost, somos más que consultores: somos tus socios
                  estratégicos. Con una sólida trayectoria en el sector, Pato y
                  Pau combinan su pasión y experiencia en mejora de procesos,
                  marketing, y adopción tecnológica para llevar tu inmobiliaria
                  al siguiente nivel.
                </p>
                <p className="text-gray-600">
                  Nos especializamos en generar resultados reales: incrementamos
                  la rentabilidad, optimizamos los procesos internos y alineamos
                  a los equipos para que tu negocio no solo sea más eficiente,
                  sino también más competitivo. Sabemos que cada inmobiliaria
                  tiene desafíos únicos, por eso trabajamos de la mano contigo,
                  ofreciendo soluciones personalizadas y un acompañamiento
                  constante que garantiza que alcances tus objetivos.
                </p>
                <p className="text-gray-600">
                  En InmoBoost, nuestro éxito es el éxito de nuestros clientes.
                  Creemos en relaciones de largo plazo y en un crecimiento
                  sostenible basado en estrategias concretas y medibles. Con
                  nosotros, tu inmobiliaria no solo crecerá, sino que se
                  destacará en un mercado altamente competitivo.
                </p>
              </div>
              <div className="flex justify-center">
                {/* <img
                  alt="Equipo de InmoBoost"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                /> */}
                <div className=" w-full aspect-[4/3] max-w-[600px] overflow-hidden rounded-lg object-cover object-center bg-primary/30"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Contacto */}
        <section
          className="w-full flex justify-center bg-primary py-12 md:py-24 lg:py-32"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-white font-bold tracking-wide sm:text-4xl md:text-5xl text-center mb-8">
              Contáctanos
            </h2>
            <div className="flex flex-col items-center space-y-10">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-white">
                  <Mail className="h-6 w-6" />
                  <span>hola@inmoboost.uy</span>
                </div>

                <div className="flex items-center space-x-2 text-white">
                  <Home className="h-6 w-6" />
                  <a className="hover:underline" href="http://www.inmoboost.uy">
                    www.inmoboost.uy
                  </a>
                </div>
              </div>

              <Button className=" bg-sky-600 text-white rounded-3xl">
                Agenda tu Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 InmoBoost. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#about"
          >
            Sobre Nosotros
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#services"
          >
            Servicios
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonios
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="#contact"
          >
            Contacto
          </a>
        </nav>
      </footer>
    </div>
  )
}
