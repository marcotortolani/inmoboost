import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

// Simulación de artículos del blog
const blogPosts = [
  {
    id: 1,
    title: '5 Estrategias para Aumentar tus Ventas Inmobiliarias',
    excerpt:
      'Descubre cómo impulsar tus ventas con estas tácticas probadas en el mercado inmobiliario actual.',
    date: '2023-11-15',
  },
  {
    id: 2,
    title: 'La Importancia del Marketing Digital en el Sector Inmobiliario',
    excerpt:
      'Aprende cómo el marketing digital puede transformar tu negocio inmobiliario y atraer más clientes.',
    date: '2023-11-10',
  },
  {
    id: 3,
    title: 'Optimización Financiera para Inmobiliarias: Guía Completa',
    excerpt:
      'Estrategias efectivas para mejorar la salud financiera de tu inmobiliaria y maximizar tus ganancias.',
    date: '2023-11-05',
  },
]

export default function BlogSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para manejar la suscripción
    console.log('Email suscrito:', email)
    setEmail('')
  }

  return (
    <section className=" min-h-screen bg-primary py-12 md:py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Blog InmoBoost
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg bg-white p-6 shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-primary">
                {post.title}
              </h3>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a
                  href={`/blog/${post.id}`}
                  className="flex items-center text-emerald-600 hover:underline"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Suscríbete a Nuestro Newsletter
          </h3>
          <p className="mb-6 text-gray-600">
            Recibe las últimas noticias y consejos para impulsar tu negocio
            inmobiliario.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-l-md border border-gray-300 py-2 pl-10 pr-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:rounded-r-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-3 rounded-md bg-emerald-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 sm:mt-0 sm:rounded-l-none"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
