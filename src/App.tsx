import { useState } from 'react';
import { ShieldAlert, X, Scan, Clock, WifiOff, PenTool, ChevronDown, CheckCircle, CreditCard, BoxSelect } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QA = [
  {
    q: "PRECISO BAIXAR ALGUM APLICATIVO?",
    a: "Negativo. O acesso é imediato via navegador web. Sem instalações demoradas que consomem espaço no seu dispositivo."
  },
  {
    q: "O ACESSO EXPIRA?",
    a: "Seu acesso é VITALÍCIO. Uma vez adquirido, o scanner e os manuais ficam disponíveis para sempre, com todas as atualizações inclusas."
  },
  {
    q: "FUNCIONA NO MEU CELULAR ANTIGO?",
    a: "Afirmativo. Desenvolvido para máxima eficiência e baixo consumo de recursos. Funciona perfeitamente em qualquer smartphone com câmera e navegador web."
  }
];

const MaskedLine = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <span className="overflow-hidden block">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-tactical-grid flex flex-col font-sans selection:bg-red-900/50 relative overflow-x-hidden">
      
      {/* Global Boot Scanline Effect */}
      <motion.div
        initial={{ top: "-10%", opacity: 1 }}
        animate={{ top: "110%", opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut", times: [0, 0.9, 1] }}
        className="fixed left-0 w-full h-1 bg-tactical-red shadow-[0_0_40px_10px_rgba(204,0,0,0.6)] z-[9999] pointer-events-none mix-blend-screen"
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-center px-4 md:px-8 py-6 border-b border-white/5 relative z-10 bg-tactical-dark/80 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <BoxSelect className="w-6 h-6 text-tactical-red" />
          <span className="font-display font-bold text-2xl tracking-widest text-tactical-red italic">VILTRUM</span>
        </div>
        <button className="hidden sm:block border border-tactical-red/50 hover:bg-tactical-red/10 text-white font-mono text-xs tracking-wider px-4 py-2 transition-colors relative tech-corners">
          ACESSO VETERANOS
        </button>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center">
        
        {/* Header Tech Stat */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="w-full max-w-4xl flex justify-end px-4 py-4"
        >
          <span className="font-mono text-neutral-500 text-xs tracking-widest">[45.009 // 02]</span>
        </motion.div>

        {/* Hero Section */}
        <section className="w-full max-w-4xl px-4 flex flex-col items-start mt-8 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            className="border border-tactical-red border-l-4 px-3 py-1 mb-8 bg-tactical-red/10"
          >
            <span className="font-mono text-tactical-red text-xs font-bold tracking-widest uppercase">Protocolo Viltrum de Autonomia</span>
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl w-full leading-[0.9] tracking-tighter uppercase mb-8 flex flex-col pt-2">
            <MaskedLine delay={0.1}>Pare de</MaskedLine>
            <MaskedLine delay={0.2}>pagar para</MaskedLine>
            <MaskedLine delay={0.3}>outros homens</MaskedLine>
            <MaskedLine delay={0.4}>consertarem</MaskedLine>
            <MaskedLine delay={0.5}>a sua casa.</MaskedLine>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-neutral-400 font-medium md:text-lg max-w-2xl mb-12 leading-relaxed border-l border-neutral-700 pl-4"
          >
            O primeiro Scanner Tático com IA que te ensina a dominar hidráulica, elétrica e alvenaria na hora da emergência.
          </motion.p>

          <motion.a 
            href="https://pay.cakto.com.br/32m428x_860546"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-tactical-red hover:bg-red-700 text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-5 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.3)] hover:shadow-[0_0_40px_rgba(204,0,0,0.6)] tech-corners text-center inline-block cursor-pointer"
          >
            Quero Meu Acesso Vitalício<br className="md:hidden" /> <span className="md:inline hidden">-</span> (R$ 27,90)
          </motion.a>
        </section>

        {/* Scanner UI Visuaization */}
        <section className="w-full max-w-4xl px-4 mt-16 md:mt-24 mb-16 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.5, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-tactical-red text-sm md:text-base tracking-widest mb-6 uppercase text-center flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-tactical-red animate-pulse"></span>
            Veja na prática como nosso app funciona
            <span className="w-2 h-2 bg-tactical-red animate-pulse"></span>
          </motion.div>

          {/* Mini VSL (Vertical) Placeholder */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] bg-black border-2 border-tactical-red/40 relative flex items-center justify-center mb-8 mx-auto group shadow-[0_0_30px_rgba(204,0,0,0.15)] tech-corners focus:outline-none overflow-hidden"
          >
            <iframe 
              src="https://player.vimeo.com/video/1186019932?badge=0&autopause=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              className="absolute top-0 left-0 w-full h-full z-10"
              title="VEJA COMO FUNCIONA O NOSSO APP"
            ></iframe>

            <div className="absolute top-4 left-4 flex items-center gap-2 z-20 pointer-events-none">
               <span className="w-2 h-2 bg-tactical-red rounded-full animate-pulse shadow-[0_0_8px_rgba(204,0,0,1)]"></span>
               <span className="font-mono text-[10px] text-tactical-red tracking-widest font-bold">REC</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(50% 50% 50% 50%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full border border-neutral-800 bg-neutral-900/50 p-4 relative overflow-hidden backdrop-blur-sm min-h-[400px] flex items-center justify-center"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10 w-64 h-64 border border-tactical-red/30 flex items-center justify-center tech-corners">
              <div className="w-48 h-48 border border-tactical-red flex items-center justify-center tech-corners-tr-bl relative overflow-hidden">
                 <div className="scan-line"></div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-xs tracking-wider space-y-1 text-tactical-red z-20">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}><span className="opacity-70">&gt;</span> ALVO IDENTIFICADO: VAZAMENTO VÁLVULA P.</motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}><span className="opacity-70">&gt;</span> NÍVEL AMEAÇA: <span className="text-yellow-500">MODERADO</span></motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }} className="animate-pulse"><span className="opacity-70">&gt;</span> PROTOCOLO REPARO: INICIAR...</motion.div>
            </div>
            
            <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-500">
              CAM_01_FEED_ACTIVE
            </div>
          </motion.div>
        </section>

        {/* Pain Points */}
        <section className="w-full max-w-4xl px-4 py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-12 border-b border-neutral-800 pb-6 shadow-[0_4px_24px_-10px_rgba(0,0,0,1)]"
          >
            Até quando você vai pagar um estranho para fazer o seu papel?
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-6"
          >
            {[
              { title: "Espera Interminável", desc: "Dias esperando um técnico enquanto o problema piora." },
              { title: "Taxas Abusivas", desc: "Pagar R$ 150 só pela \"visita\" para apertar um parafuso." },
              { title: "Incapacidade", desc: "Sentir-se inútil e dependente sob o seu próprio teto." },
              { title: "Tutoriais Inúteis", desc: "Perder horas em vídeos do YouTube que não resolvem seu problema específico." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.4 } }
                }}
                className="flex gap-4 items-start bg-neutral-900/30 border border-neutral-800/80 p-5 hover:border-tactical-red/30 transition-colors"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(204,0,0,0.05)" }}
              >
                <motion.div
                  variants={{
                    hidden: { scale: 3, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.2 + (i * 0.1) } }
                  }}
                >
                  <X className="w-6 h-6 shrink-0 text-tactical-red mt-1" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-neutral-400 font-mono text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features */}
        <section className="w-full max-w-4xl px-4 py-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="font-mono text-tactical-red text-xs tracking-widest mb-4"
          >
            [SISTEMA_ATIVO]
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-16 leading-tight"
          >
            O seu PDA de<br/>
            sobrevivência<br className="hidden md:block"/> doméstica.
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
          >
             {/* Center decorative element */}
             <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-neutral-800/50"></div>
             <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full bg-neutral-800/50"></div>

            {[
              { icon: Scan, title: "Scanner AR Inteligente", desc: "Aponte a câmera. A IA identifica o problema e projeta a solução na sua tela em tempo real." },
              { icon: Clock, title: "Missões de 3-5 MIN", desc: "Instruções táticas diretas. Sem enrolação.", extra: "REC" },
              { icon: WifiOff, title: "Operação Offline", desc: "Manuais críticos baixados. Funciona sem internet no porão ou sótão." },
              { icon: PenTool, title: "Arsenal Logístico", desc: "Inventário exato de ferramentas necessárias antes de iniciar a missão." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="bg-neutral-900/40 p-8 border border-neutral-800/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-tactical-red flex items-center gap-2">
                  {feature.extra && (
                    <>
                      <div className="w-2 h-2 rounded-full bg-tactical-red animate-pulse"></div>
                      <span>{feature.extra}</span>
                    </>
                  )}
                </div>
                <feature.icon className="w-8 h-8 text-tactical-red mb-6" />
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-3 group-hover:text-tactical-red transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
                
                {/* Background watermark icon */}
                <feature.icon className="absolute -right-8 -bottom-8 w-40 h-40 text-white/[0.02] -rotate-12 group-hover:text-tactical-red/[0.02] transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pricing / CTA */}
        <section className="w-full max-w-xl mx-auto px-4 py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-tactical-red p-8 md:p-12 bg-black/50 tech-corners shadow-[0_0_30px_rgba(204,0,0,0.1)] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tactical-dark px-4 font-mono text-xs tracking-widest text-neutral-500">AUTORIZAÇÃO_REQUERIDA</div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-center mb-10">
              Assuma o<br/>
              Comando Agora
            </h2>

            <div className="border border-neutral-800 bg-neutral-900/50 p-6 mb-6">
              <div className="font-mono text-neutral-500 text-xs mb-2 tracking-widest uppercase">Custo Civil Padrão:</div>
              <div className="font-display font-bold text-2xl text-neutral-500 line-through decoration-tactical-red decoration-2">R$ 197,00 / visita</div>
            </div>

            <div className="border border-tactical-red/50 bg-tactical-red/10 p-6 mb-10">
              <div className="font-mono text-tactical-red text-xs mb-2 tracking-widest uppercase font-bold">Acesso Tático Viltrum:</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-display font-bold text-5xl md:text-6xl text-white">R$ 27,90</span>
              </div>
              <div className="font-mono text-sm text-neutral-400">(Vitalício)</div>
            </div>

            <motion.a 
              href="https://pay.cakto.com.br/32m428x_860546"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-tactical-red hover:bg-red-700 text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-6 mb-6 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.4)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <ShieldAlert className="w-6 h-6 hidden sm:block" />
              Iniciar Conquista Tática Agora
            </motion.a>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Cartão</span>
                <span className="flex items-center gap-1 font-bold"><CheckCircle className="w-4 h-4 text-[#32BCAD]" /> Pix</span>
              </div>
              <div className="flex items-center gap-2 text-white font-bold bg-neutral-900 px-3 py-1.5 border border-neutral-800">
                <ShieldAlert className="w-4 h-4 text-tactical-red" />
                Garantia Blindada 7 Dias
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-4xl px-4 py-16 border-t border-neutral-800/50">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl uppercase tracking-tighter mb-10 text-center"
          >
            Intel (FAQ)
          </motion.h2>
          
          <div className="space-y-4">
            {QA.map((faq, i) => (
              <div key={i} className="border border-neutral-800 hover:border-neutral-600 transition-colors bg-neutral-900/30 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-display font-bold text-lg uppercase tracking-wider pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <ChevronDown className="w-5 h-5 shrink-0 text-tactical-red" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-neutral-400 font-mono text-sm leading-relaxed border-t border-neutral-800/50 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-neutral-900 mt-12 bg-black/60 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8 mix-blend-screen opacity-50">
           <BoxSelect className="w-5 h-5" />
           <span className="font-display font-bold text-xl tracking-widest italic">VILTRUM</span>
        </div>
        
        <div className="flex gap-6 mb-8 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
          <a href="#" className="hover:text-tactical-red transition-colors">INTEL</a>
          <a href="#" className="hover:text-tactical-red transition-colors">OPERATIONS</a>
          <a href="#" className="hover:text-tactical-red transition-colors">SECURITY</a>
          <a href="#" className="hover:text-tactical-red transition-colors">SUPPORT</a>
        </div>

        <p className="font-mono text-[9px] tracking-widest text-tactical-red/50 text-center uppercase">
          &copy; {new Date().getFullYear()} VILTRUM TACTICAL SYSTEMS [45.009 // 02]<br/>
          - ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}
