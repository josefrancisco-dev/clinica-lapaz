import { Link } from "react-router-dom"
import { Button } from "@/src/components/ui/button"
import { Calendar, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    id: 1,
    badge: "Bem-vindo à Clínica Lá Paz",
    title: "Sua saúde em",
    highlight: "boas mãos",
    description: "Há mais de 20 anos cuidando da saúde e bem-estar das famílias. Nossa equipe de especialistas está pronta para oferecer o melhor atendimento com carinho e profissionalismo.",
    image: "/images/1.png",
    imageAlt: "Equipe médica da Clínica Lá Paz"
  },
  {
    id: 2,
    badge: "Tecnologia Avançada",
    title: "Equipamentos",
    highlight: "modernos",
    description: "Investimos constantemente em tecnologia de ponta para garantir diagnósticos precisos e tratamentos eficazes para nossos pacientes.",
    image: "/images/slide-2.jpg",
    imageAlt: "Equipamentos médicos modernos"
  },
  {
    id: 3,
    badge: "Atendimento Humanizado",
    title: "Cuidado com",
    highlight: "amor",
    description: "Acreditamos que o melhor tratamento vai além da medicina. Oferecemos um ambiente acolhedor onde você se sente em casa.",
    image: "/images/3.png",
    imageAlt: "Atendimento humanizado com paciente"
  },
  {
    id: 4,
    badge: "Excelência em Diagnósticos",
    title: "Profissionais de",
    highlight: "excelência",
    description: "Contamos com médicos altamente qualificados e laboratório próprio para garantir resultados rápidos e confiáveis.",
    image: "/images/slide-4.jpg",
    imageAlt: "Laboratório de diagnósticos"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <section id="inicio" className="relative pt-20 lg:pt-24 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span 
              key={`badge-${slide.id}`}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {slide.badge}
            </span>
            <h1 
              key={`title-${slide.id}`}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: '100ms' }}
            >
              {slide.title}{" "}
              <span className="text-primary">{slide.highlight}</span>
            </h1>
            <p 
              key={`desc-${slide.id}`}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: '200ms' }}
            >
              {slide.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base">
                <Link to="/agendar">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="#servicos">Nossos Serviços</a>
              </Button>
            </div>

            {/* Slider Controls */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">5+</span>
                <span className="text-sm text-muted-foreground">Anos de experiência</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">50k+</span>
                <span className="text-sm text-muted-foreground">Pacientes atendidos</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">15+</span>
                <span className="text-sm text-muted-foreground">Especialidades</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-3" />
              <div className="absolute inset-2 bg-card rounded-3xl overflow-hidden shadow-2xl">
                <img
                  key={`image-${slide.id}`}
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-2xl" aria-hidden="true">&#9733;</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">4.9/5</p>
                    <p className="text-sm text-muted-foreground">+2.000 avaliações</p>
                  </div>
                </div>
              </div>

              {/* Slide Counter */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold">{currentSlide + 1}/{slides.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
