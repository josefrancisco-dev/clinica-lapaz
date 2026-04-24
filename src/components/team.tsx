import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Phone, Mail, Award, Clock } from "lucide-react"

interface Doctor {
  name: string
  specialty: string
  specialtySlug: string
  crm: string
  image: string
  experience: string
  schedule: string
  phone: string
  email: string
}

const doctors: Doctor[] = [
  {
    name: "Dra. Marlenis",
    specialty: "Ginecologista",
    specialtySlug: "cardiologia",
    crm: "CRM 12345",
    image: "/images/1.png",
    experience: "15 anos",
    schedule: "Seg - Sex",
    phone: "(11) 99999-0001",
    email: "marlenis@lapaz.com"
  },
  {
    name: "Dr. Leonardo",
    specialty: "Ortopedista",
    specialtySlug: "neurologia",
    crm: "CRM 23456",
    image: "/images/1.png",
    experience: "12 anos",
    schedule: "Seg - Qui",
    phone: "(11) 99999-0002",
    email: "leonardo@lapaz.com"
  },
 {
    name: "Dra. Marlenis",
    specialty: "Cardiologista",
    specialtySlug: "cardiologia",
    crm: "CRM 12345",
    image: "/images/1.png",
    experience: "15 anos",
    schedule: "Seg - Sex",
    phone: "(11) 99999-0001",
    email: "marlenis@lapaz.com"
  },
  {
    name: "Dr. Orlis",
    specialty: "Ortopedista",
    specialtySlug: "ortopedia",
    crm: "CRM 45678",
    image: "/images/1.png",
    experience: "18 anos",
    schedule: "Seg - Sex",
    phone: "(11) 99999-0004",
    email: "orlis@lapaz.com"
  }
]

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-80 cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${doctor.name}`}
    >
      {/* Card Container with flip animation */}
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <Card 
          className="absolute inset-0 w-full h-full overflow-hidden border-border/50 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {doctor.specialty}
                </span>
              </div>
              <h3 className="font-semibold text-lg">
                {doctor.name}
              </h3>
              <p className="text-sm text-card/70 mt-0.5">
                {doctor.crm}
              </p>
              
              {/* Hover hint */}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-card/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Clique para ver mais
              </div>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card 
          className="absolute inset-0 w-full h-full overflow-hidden border-border/50 bg-card backface-hidden rotate-y-180"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full p-5 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <h3 className="font-semibold text-foreground">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 py-4 space-y-3">
              <div className="flex items-center gap-2.5 text-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Experiência:</span>
                <span className="text-foreground font-medium">{doctor.experience}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Atendimento:</span>
                <span className="text-foreground font-medium">{doctor.schedule}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">{doctor.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium text-xs">{doctor.email}</span>
              </div>
            </div>

            {/* Action */}
            
            {/* <Button 
              className="w-full gap-2"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <Link to={`/agendar?especialidade=${doctor.specialtySlug}&medico=${encodeURIComponent(doctor.name)}`}>
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </Link>
            </Button> */}
          </div>
        </Card>
      </div>
    </div>
  )
}

export function Team() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Profissionais dedicados à sua saúde
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Contamos com uma equipe multidisciplinar de médicos especialistas, 
            comprometidos com a excelência no atendimento.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        {/* Hint */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Clique nos cards para ver mais informações sobre nossos profissionais
        </p>
      </div>
    </section>
  )
}
