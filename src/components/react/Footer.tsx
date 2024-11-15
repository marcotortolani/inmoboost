export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=" bg-white h-fit  py-6 w-full  px-4 md:px-6 border-t">
      <div className=" container mx-auto flex flex-col gap-2 sm:flex-row shrink-0 items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} InmoBoost. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="/">
            Inicio
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/#about"
          >
            Sobre Nosotros
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/#services"
          >
            Servicios
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/booking-diagnosis"
          >
            Agenda tu Diagnóstico
          </a>
          <a
            className="text-xs hover:underline underline-offset-4"
            href="/#contact"
          >
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  )
}
