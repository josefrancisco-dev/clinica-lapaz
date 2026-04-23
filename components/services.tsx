import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Stethoscope,
  Syringe,
  Activity
} from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cardiologia",
    description: "Diagnóstico e tratamento de doenças do coração com tecnologia avançada."
  },
  {
    icon: Brain,
    title: "Neurologia",
    description: "Especialistas em distúrbios do sistema nervoso e neurológicos."
  },
  {
    icon: Bone,
    title: "Ortopedia",
    description: "Cuidados com ossos, articulações e sistema musculoesquelético."
  },
  {
    icon: Eye,
    title: "Oftalmologia",
    description: "Exames de visão e tratamentos para saúde ocular completa."
  },
  {
    icon: Baby,
    title: "Pediatria",
    description: "Atendimento especializado para crianças e adolescentes."
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Consultas de rotina, check-ups e acompanhamento da saúde."
  },
  {
    icon: Syringe,
    title: "Vacinas",
    description: "Imunização completa para todas as idades com vacinas atualizadas."
  },
  {
    icon: Activity,
    title: "Exames",
    description: "Laboratório completo com resultados rápidos e precisos."
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Especialidades médicas para cuidar de você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Oferecemos uma ampla gama de serviços médicos com profissionais 
            qualificados e equipamentos de última geração.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
