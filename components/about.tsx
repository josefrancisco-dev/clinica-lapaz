import { CheckCircle } from "lucide-react"

const features = [
  "Atendimento humanizado e personalizado",
  "Profissionais altamente qualificados",
  "Equipamentos de última geração",
  "Ambiente acolhedor e confortável",
  "Agendamento online prático",
  "Convênios com principais planos de saúde"
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Interior moderno da Clínica Lá Paz"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm opacity-90">Anos de história</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Uma história de cuidado e dedicação
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              A Clínica Lá Paz nasceu do sonho de oferecer atendimento médico 
              de excelência com acolhimento e humanização. Desde 2004, 
              trabalhamos incansavelmente para proporcionar a melhor 
              experiência em saúde para nossos pacientes.
            </p>
            <p className="mt-4 text-muted-foreground text-pretty">
              Nossa missão é promover saúde e bem-estar, tratando cada 
              paciente com respeito, ética e profissionalismo. Investimos 
              constantemente em tecnologia e capacitação para oferecer 
              diagnósticos precisos e tratamentos eficazes.
            </p>

            {/* Features List */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
