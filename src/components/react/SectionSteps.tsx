import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

/* ACTUAL DISEÑO */
export default function SectionSteps() {
  const handleRedirect = (href: string) => {
    window.location.href = href
  }
  return (
    <section className="relative min-h-[600px] w-full bg-white px-4 py-12 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        <div className=" hidden lg:flex  items-center justify-center relative">
          <div className="absolute left-0 top-0 translate-x-[-50%] translate-y-[10%] h-[500px] w-[500px] xl:translate-x-[-100%] xl:translate-y-0 xl:h-[500px] xl:w-[500px] rounded-full bg-primary/90"></div>
        </div>
        <div className="flex flex-col justify-center space-y-6 text-primary">
          <h2 className="text-4xl font-bold">
            Cómo lo hacemos <br /> Realidad!
          </h2>
          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Diagnóstico Inicial',
                desc: 'Analizamos a fondo tu negocio para identificar fortalezas y áreas de oportunidad.',
              },
              {
                number: '2',
                title: 'Definición de Estrategia',
                desc: 'Desarrollamos un plan de acción personalizado enfocado en maximizar tus fortalezas.',
              },
              {
                number: '3',
                title: 'Implementación',
                desc: 'Llevamos las estrategias a la práctica, optimizando procesos y capacitando a tu equipo.',
              },
              {
                number: '4',
                title: 'Acompañamiento y Seguimiento',
                desc: 'Te acompañamos a lo largo de todo el proceso, garantizando resultados tangibles.',
              },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <span className="flex h-14 aspect-square items-center justify-center rounded-full bg-primary text-white text-lg font-semibold">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-base text-black">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/80 "
              onClick={() => handleRedirect('/booking-diagnosis')}
            >
              Agenda tu Diagnóstico Gratuito Ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* NUEVO DISEÑO */
// export default function SectionSteps() {
//   return (
//     <section
//       className="relative min-h-[600px] w-full h-[85vh] bg-white pb-0"
//       id="steps"
//     >
//       <div className="h-full mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
//         <div className=" w-full pb-10 pt-24 pl-10 flex flex-col justify-center space-y-20 text-primary">
//           {/* <h2 className="text-4xl font-bold">Cómo Lo Hacemos Realidad!</h2> */}
//           <div className="space-y-14 flex flex-col items-end">
//             {[
//               {
//                 number: '1',
//                 title: 'Diagnóstico Inicial',
//                 desc: 'Analizamos a fondo tu negocio para identificar fortalezas y áreas de oportunidad.',
//               },
//               {
//                 number: '2',
//                 title: 'Definición de Estrategia',
//                 desc: 'Desarrollamos un plan de acción personalizado enfocado en maximizar tus fortalezas.',
//               },
//               {
//                 number: '3',
//                 title: 'Implementación',
//                 desc: 'Llevamos las estrategias a la práctica, optimizando procesos y capacitando a tu equipo.',
//               },
//               {
//                 number: '4',
//                 title: 'Acompañamiento y Seguimiento',
//                 desc: 'Te acompañamos a lo largo de todo el proceso, garantizando resultados tangibles.',
//               },
//             ].map((item) => (
//               <div key={item.number} className="flex items-start gap-4">
//                 <div className=" flex flex-col items-center gap-1 ">
//                   <h3 className="font-bold text-xl">{item.title}</h3>
//                   <div className=" w-1/4 h-[1px] bg-primary/60"></div>
//                   <p className=" max-w-[400px] text-center text-base text-black">
//                     {item.desc}
//                   </p>
//                 </div>
//                 <span className="flex h-14 aspect-square items-center justify-center rounded-full textprimary text-4xl font-extrabold font-mono">
//                   0{item.number}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative right-0 h-full grid grid-cols-3 bg-primary">
//           <div className=" h-full flex items-center justify-end bg-white px-2">
//             {/* <p className=" mb-14 text-primary text-5xl font-bold text-left ">
//               Cómo lo <br /> hacemos
//             </p> */}
//           </div>
//           <div className=" h-full flex items-center justify-start px-2">
//             <p className=" mb-60 text-white text-5xl font-bold ">
//               Cómo <br /> lo <br /> hacemos <br /> Realidad!
//             </p>
//           </div>
//         </div>
//         <div className=" absolute bottom-0 w-full z-50 flex justify-center items-center gap-4 py-10 ">
//           <Button
//             size="lg"
//             className="bg-primary text-white hover:bg-primary/80 "
//           >
//             Agenda tu Diagnóstico Gratuito Ahora
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
