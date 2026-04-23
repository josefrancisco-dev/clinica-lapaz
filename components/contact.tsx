import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua da Liberdade 71, Vila Alice, Luanda",
    link: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(+244) 928 938 157",
    link: "tel: +244 928 938 157"
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "geral@cmlapaz.com",
    link: "mailto:geral@cmlapaz.com"
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 7h às 19h | Sáb: 8h às 13h",
    link: null
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Agende sua consulta
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Entre em contato conosco para agendar sua consulta ou tirar suas dúvidas. 
            Estamos prontos para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(+244) 928 938 157"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Como podemos ajudá-lo?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full mt-2">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[200px] rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976902465644!2d-46.65512922359857!3d-23.563405161666096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Lá Paz"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
