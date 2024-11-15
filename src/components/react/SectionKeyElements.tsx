import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Target, PiggyBank, Users, Lightbulb } from 'lucide-react'

export default function SectionKeyElements() {
  const elements = [
    {
      icon: Target,
      title: 'Generación de Oportunidades',
      description:
        'Atraemos más clientes y propiedades que venden. Diseñamos estrategias de captación y marketing para asegurar clientes de calidad y propiedades adecuadas.',
    },
    {
      icon: PiggyBank,
      title: 'Optimización Financiera',
      description:
        'Lográ la estabilidad financiera que tu negocio necesita para crecer sin límites. Aseguramos la salud financiera de tu inmobiliaria con procesos claros.',
    },
    {
      icon: Users,
      title: ['Organización y Profesionalización', 'del Equipo'],
      description:
        'Equipos eficientes para un crecimiento constante. Ayudamos a estructurar equipos que estén preparados para crecer.',
    },
    {
      icon: Lightbulb,
      title: ['Definición de Nicho y', 'Propuesta de Valor'],
      description:
        'Diferenciate y destacá en el mercado. Definimos tu nicho y fortalecemos tu propuesta de valor para atraer a los clientes ideales.',
    },
  ]

  return (
    <section
      className="w-full flex justify-center bg-primary py-12 text-white md:py-24 lg:py-32"
      id="key-elements"
    >
      <div className=" container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Elementos Clave para Transformar tu Inmobiliaria
        </h2>
        <div className="  place-items-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {elements.map((element, index) => (
            <CardElement
              key={index}
              Icon={element.icon}
              title={element.title}
              description={element.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CardElement({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType
  title: string | string[]
  description: string
}) {
  return (
    <Card className=" max-w-[500px] relative overflow-hidden border-none shadow-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 opacity-0"></div>
      <div className="relative">
        <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100/20 backdrop-blur-sm">
          <Icon className="h-10 w-10 text-blue-100" />
        </div>
        <CardHeader>
          <h3 className="text-center text-2xl font-semibold tracking-wide text-white">
            {Array.isArray(title)
              ? title.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))
              : title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className=" max-w-[400px] mx-auto  text-center text-gray-300">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
