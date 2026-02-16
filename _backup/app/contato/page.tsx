import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Coluna de Informações */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Vamos conversar
              </h1>
              <p className="text-xl text-muted-foreground">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold">fernando@exemplo.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Localização</p>
                  <p className="text-lg font-semibold">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}