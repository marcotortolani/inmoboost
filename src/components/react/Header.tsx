import { useState, useEffect } from 'react'
import { Building2, Home, Mail, MapPin, Menu, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Oculta el header al hacer scroll hacia abajo
        setIsVisible(false)
      } else {
        // Muestra el header al hacer scroll hacia arriba
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-50 bg-white px-4 lg:px-6 shadow-sm shadow-black/50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${lastScrollY > 10 ? ' backdrop-blur-md bg-white/70 ' : ''}`}
    >
      <div className="max-w-screen-2xl mx-auto h-16 flex items-center">
        <a className="flex items-start justify-center gap-2  " href="/">
          <Building2 className="h-6 w-6" />
          <span className=" lg:text-lg font-bold ">InmoBoost</span>
        </a>
        <div className="ml-auto flex items-center">
          <nav className="hidden md:flex gap-4 sm:gap-6 lg:gap-8">
            <a
              className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
              href="/#home"
            >
              Inicio
            </a>
            <a
              className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
              href="/#steps"
            >
              Lo Hacemos Realidad
            </a>
            <a
              className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
              href="/#key-elements"
            >
              Elementos Clave
            </a>
            <a
              className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
              href="/#about"
            >
              Sobre Nosotros
            </a>
            <a
              className="text-sm lg:text-base font-medium hover:underline underline-offset-4"
              href="/#contact"
            >
              Contacto
            </a>
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className=" bg-white ">
              <a
                className="flex items-center justify-center gap-2 mb-8 "
                href="/#home"
              >
                <Building2 className="h-6 w-6" />
                <span className="text-lg font-bold ">InmoBoost</span>
              </a>
              <nav className="flex flex-col gap-4 ">
                <a
                  className="text-base font-medium hover:underline underline-offset-4"
                  href="/#home"
                >
                  Inicio
                </a>
                <div className="w-full bg-primary h-[1px]"></div>
                <a
                  className="text-base font-medium hover:underline underline-offset-4"
                  href="/#steps"
                >
                  Lo Hacemos Realidad
                </a>
                <div className="w-full bg-primary h-[1px]"></div>
                <a
                  className="text-base font-medium hover:underline underline-offset-4"
                  href="/#key-elements"
                >
                  Elementos Clave
                </a>
                <div className="w-full bg-primary h-[1px]"></div>
                <a
                  className="text-base font-medium hover:underline underline-offset-4"
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotros
                </a>
                <div className="w-full bg-primary h-[1px]"></div>
                <a
                  className="text-base font-medium hover:underline underline-offset-4"
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
              </nav>
              <div className="absolute bottom-6 w-full flex flex-col items-start gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6" />
                  <a
                    href="mailto:hola@inmoboost.uy"
                    className="text-sm hover:underline"
                  >
                    hola@inmoboost.uy
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-6 w-6" />
                  <span className="text-sm">+598 12345678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <span className="text-sm">Montevideo, Uruguay</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
