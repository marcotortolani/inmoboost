import { Card, CardContent } from '@/components/ui/card'

export default function Testimonials() {
  return (
    <section
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
                &quot;InmoBoost ha incrementado nuestras ventas un 30% en seis
                meses.&quot;
              </p>
              <p className="font-bold">— Germán, Director de Ionik</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="mb-4 text-lg">
                &quot;La optimización de procesos nos ha permitido destacar en
                el mercado.&quot;
              </p>
              <p className="font-bold">
                — Leandro, Dueño de [Nombre de la Empresa]
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
