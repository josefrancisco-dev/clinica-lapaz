import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  ArrowLeft,
  CheckCircle,
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Activity,
  Shield
} from "lucide-react"

// ─── Schema ───────────────────────────────────────────────────────────────────

const schema = z.object({
  specialty: z.string().min(1, "Selecione uma especialidade"),
  date: z.string().min(1, "Selecione uma data"),
  time: z.string().min(1, "Selecione um horário"),
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

// ─── Constants ────────────────────────────────────────────────────────────────

const specialties = [
  { value: "cardiologia",   label: "Cardiologia",  icon: Heart },
  { value: "neurologia",    label: "Neurologia",   icon: Brain },
  { value: "ortopedia",     label: "Ortopedia",    icon: Bone },
  { value: "pediatria",     label: "Pediatria",    icon: Baby },
  { value: "oftalmologia",  label: "Oftalmologia", icon: Eye },
  { value: "clinica-geral", label: "Clínica Geral",icon: Activity },
  { value: "dermatologia",  label: "Dermatologia", icon: Shield },
  { value: "ginecologia",   label: "Ginecologia",  icon: Stethoscope },
]

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function AgendarPage() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    control,
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      specialty: searchParams.get("especialidade") || "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  const watchedValues = watch()

  // Avança o step validando apenas os campos do step atual
  const handleNextStep = async (fields: (keyof FormData)[]) => {
    const valid = await trigger(fields)
    if (valid) setStep((s) => s + 1)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsSubmitted(true)
  }

  // ─── Tela de Sucesso ────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <section className="pt-24 lg:pt-28 pb-20 min-h-screen bg-gradient-to-br from-secondary via-background to-accent/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Consulta Agendada com Sucesso!
            </h1>
            <p className="text-muted-foreground mb-6">
              Sua consulta foi agendada para o dia <strong>{watchedValues.date}</strong> às <strong>{watchedValues.time}</strong>.
              <br />
              Enviamos uma confirmação para <strong>{watchedValues.email}</strong>.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-8 text-left">
              <h3 className="font-semibold text-foreground mb-2">Detalhes da Consulta:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong>Especialidade:</strong> {specialties.find(s => s.value === watchedValues.specialty)?.label}</li>
                <li><strong>Data:</strong> {watchedValues.date}</li>
                <li><strong>Horário:</strong> {watchedValues.time}</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Início
                </Link>
              </Button>
              <Button onClick={() => {
                reset()
                setStep(1)
                setIsSubmitted(false)
              }}>
                Agendar Nova Consulta
              </Button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  // ─── Formulário ─────────────────────────────────────────────────────────────

  return (
    <section className="pt-24 lg:pt-28 pb-20 min-h-screen bg-gradient-to-br from-secondary via-background to-accent/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Agendar <span className="text-primary">Consulta</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Preencha os dados abaixo para agendar sua consulta na Clínica Lá Paz.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8 max-w-md">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-16 h-1 mx-2 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* ── Step 1: Especialidade ── */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  Escolha a Especialidade
                </h2>

                <Controller
                  name="specialty"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {specialties.map((spec) => {
                          const Icon = spec.icon
                          return (
                            <button
                              key={spec.value}
                              type="button"
                              onClick={() => field.onChange(spec.value)}
                              className={`p-4 rounded-lg border-2 text-left transition-all ${
                                field.value === spec.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  field.value === spec.value
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-foreground">{spec.label}</span>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                      {errors.specialty && (
                        <p className="text-sm text-destructive">{errors.specialty.message}</p>
                      )}
                    </div>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button
                    type="button"
                    onClick={() => handleNextStep(["specialty"])}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 2: Data e Hora ── */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Escolha a Data e Horário
                </h2>

                {/* Data */}
                <div className="space-y-2">
                  <Label htmlFor="date">Data da Consulta</Label>
                  <Input
                    id="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("date")}
                  />
                  {errors.date && (
                    <p className="text-sm text-destructive">{errors.date.message}</p>
                  )}
                </div>

                {/* Horário */}
                {watchedValues.date && (
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2">
                        <Label>Horário Disponível</Label>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => field.onChange(slot)}
                              className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                                field.value === slot
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                        {errors.time && (
                          <p className="text-sm text-destructive">{errors.time.message}</p>
                        )}
                      </div>
                    )}
                  />
                )}

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleNextStep(["date", "time"])}
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            )}

            {/* ── Step 3: Dados Pessoais ── */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Seus Dados
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        className="pl-10"
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        className="pl-10"
                        {...register("phone")}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <Label htmlFor="message">Observações (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente o motivo da consulta..."
                    rows={3}
                    {...register("message")}
                  />
                </div>

                {/* Resumo */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Resumo do Agendamento:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4" />
                      <strong>Especialidade:</strong> {specialties.find(s => s.value === watchedValues.specialty)?.label}
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <strong>Data:</strong> {watchedValues.date}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <strong>Horário:</strong> {watchedValues.time}
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Voltar
                  </Button>
                  <Button type="submit">
                    Confirmar Agendamento
                  </Button>
                </div>
              </div>
            )}

          </form>
        </Card>
      </div>
    </section>
  )
}