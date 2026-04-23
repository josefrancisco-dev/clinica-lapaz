import { Card, CardContent } from "@/components/ui/card"

const doctors = [
  {
    name: "Dra. Maria Santos",
    specialty: "Cardiologista",
    crm: "CRM 12345",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Carlos Oliveira",
    specialty: "Neurologista",
    crm: "CRM 23456",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dra. Ana Paula Lima",
    specialty: "Pediatra",
    crm: "CRM 34567",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Dr. Roberto Almeida",
    specialty: "Ortopedista",
    crm: "CRM 45678",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop"
  }
]

export function Team() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
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
            <Card 
              key={doctor.name} 
              className="group overflow-hidden border-border/50"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="font-semibold text-lg text-foreground">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium mt-1">
                  {doctor.specialty}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {doctor.crm}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
