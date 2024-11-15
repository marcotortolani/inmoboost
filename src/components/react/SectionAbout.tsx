import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function SectionAbout() {
  return (
    <section
      className="w-full h-[80dvh] min-h-fit flex items-center justify-center py-12 md:py-24 lg:py-32"
      id="about"
    >
      <div className="container px-4 md:px-6">
        <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
          <div className=" md:w-2/5 lg:w-2/3 mx-auto flex justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center md:text-right mb-8">
              <span className="text-primary">InmoBoost:</span> Tu partner
              estratégico para el crecimiento inmobiliario
            </h2>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <p className="text-lg">
              En InmoBoost, somos más que consultores: somos tus socios
              estratégicos. Con una sólida trayectoria en el sector, Pato y Pau
              combinan su pasión y experiencia en mejora de procesos, marketing,
              y adopción tecnológica para llevar tu inmobiliaria al siguiente
              nivel.
            </p>
            <p className="text-lg">
              Nos especializamos en generar resultados reales: incrementamos la
              rentabilidad, optimizamos los procesos internos y alineamos a los
              equipos para que tu negocio no solo sea más eficiente, sino
              también más competitivo. Sabemos que cada inmobiliaria tiene
              desafíos únicos, por eso trabajamos de la mano contigo, ofreciendo
              soluciones personalizadas y un acompañamiento constante que
              garantiza que alcances tus objetivos.
            </p>

            {/* Leer más */}
            <input
              type="checkbox"
              id="toggle-read-more"
              className="peer hidden"
            />
            <p className="text-lg peer-checked:block hidden">
              En InmoBoost, nuestro éxito es el éxito de nuestros clientes.
              Creemos en relaciones de largo plazo y en un crecimiento
              sostenible basado en estrategias concretas y medibles. Con
              nosotros, tu inmobiliaria crecerá y se destacará en un mercado
              altamente competitivo.
            </p>
            <label
              htmlFor="toggle-read-more"
              className="text-primary font-medium cursor-pointer flex items-center gap-2 peer-checked:hidden"
            >
              <ArrowRight />
              Leer más
            </label>
            <label
              htmlFor="toggle-read-more"
              className="text-primary font-medium cursor-pointer items-center gap-2 hidden peer-checked:flex"
            >
              <ArrowLeft />
              Leer menos
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

// export default function SectionAbout() {
//   return (
//     <section
//       className="w-full flex justify-center py-12 md:py-24 lg:py-32"
//       id="about"
//     >
//       <div className="container px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="w-2/3 flex justify-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-right mb-8">
//               <span className=" text-primary">InmoBoost:</span> Tu partner
//               estratégico para el crecimiento inmobiliario
//             </h2>
//           </div>
//           <div className="space-y-4">
//             <p className="text-lg">
//               En InmoBoost, somos más que consultores: somos tus socios
//               estratégicos. Con una sólida trayectoria en el sector, Pato y Pau
//               combinan su pasión y experiencia en mejora de procesos, marketing,
//               y adopción tecnológica para llevar tu inmobiliaria al siguiente
//               nivel.
//             </p>
//             <p className="text-lg">
//               Nos especializamos en generar resultados reales: incrementamos la
//               rentabilidad, optimizamos los procesos internos y alineamos a los
//               equipos para que tu negocio no solo sea más eficiente, sino
//               también más competitivo. Sabemos que cada inmobiliaria tiene
//               desafíos únicos, por eso trabajamos de la mano contigo, ofreciendo
//               soluciones personalizadas y un acompañamiento constante que
//               garantiza que alcances tus objetivos.
//             </p>
//             <p className="text-lg">
//               En InmoBoost, nuestro éxito es el éxito de nuestros clientes.
//               Creemos en relaciones de largo plazo y en un crecimiento
//               sostenible basado en estrategias concretas y medibles. Con
//               nosotros, tu inmobiliaria crecerá y se destacará en un mercado
//               altamente competitivo.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
