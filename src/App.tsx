import { useState } from 'react';
import { ShieldAlert, X, Scan, Clock, WifiOff, PenTool, ChevronDown, CheckCircle, CreditCard, BoxSelect, Gamepad2, Star, Target, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QA = [
  {
    q: "PRECISO BAIXAR ALGUM APLICATIVO?",
    a: "Sim, o Viltrum App está disponível para Android e iOS para que você tenha acesso rápido na hora da missão."
  },
  {
    q: "O ACESSO EXPIRA?",
    a: "Não. O acesso é vitalício para sempre. Uma vez Viltrumita, você nunca perde o seu arsenal."
  },
  {
    q: "FUNCIONA NO CELULAR ANTIGO?",
    a: "Sim, e conta com o modo offline incluso para quando você estiver no porão ou a internet cair."
  },
  {
    q: "É DIFÍCIL PRA QUEM NUNCA CONSERTOU NADA?",
    a: "A IA guia você como um recruta virando Thragg. Você terá o passo a passo exato na sua tela, impossível errar."
  }
];

const TESTIMONIALS = [
  "Show de bola o guia! Consertei o chuveiro e troquei o peneu facim, Agora fico mais tranquilo pra resolver as coisas aqui em casa. Recomendo demais 🫂",
  "Mano, conteudo top, agora tô me sentindo o mestre dos reparos em casa kkk, vlw chefe",
  "O conteúdo é sensacional! Agora não preciso depender de homem pra cuidar das coisas em casa",
  "Curti demais o guia! Agora tô de boa pra resolver as paradas em casa.",
  "Rapaz... bem que vc falou valeu a pena dms, ajudou bastante",
  "Salvou meu casamento irmão 🙌 muie parou de reclamar kkk 🤣🤣"
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
          <span className="font-display font-bold text-2xl tracking-widest text-tactical-red italic">VILTRUM APP</span>
        </div>
        <div className="hidden sm:block text-tactical-red font-mono text-sm tracking-widest uppercase font-bold border-b-2 border-tactical-red/50 pb-1">
          Viltrumitas não chamam técnico.
        </div>
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

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl w-full leading-[0.9] tracking-tighter uppercase mb-6 flex flex-col pt-2 text-tactical-red">
            <MaskedLine delay={0.1}>Viltrumita,</MaskedLine>
            <MaskedLine delay={0.2}>pare de ser</MaskedLine>
            <MaskedLine delay={0.3}>o fraco que</MaskedLine>
            <MaskedLine delay={0.4}>paga técnico</MaskedLine>
            <MaskedLine delay={0.5}>pra tudo.</MaskedLine>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-neutral-400 font-medium md:text-lg max-w-2xl mb-10 leading-relaxed border-l border-neutral-700 pl-4"
          >
            O app que transforma sua câmera em scanner IA + AR. Aponte, diagnostique e conquiste qualquer conserto em minutos. De Recruta inútil pra Thragg da sua casa por apenas R$ 27,90 vitalício.
          </motion.p>

          <motion.a 
            href="https://pay.cakto.com.br/32m428x_860546"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-tactical-red hover:bg-red-700 text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-5 mb-12 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.3)] hover:shadow-[0_0_40px_rgba(204,0,0,0.6)] tech-corners text-center inline-flex flex-col items-center justify-center cursor-pointer"
          >
            <span>QUERO SER VILTRUMITA AGORA – R$ 27,90 VITALÍCIO</span>
            <span className="text-[10px] font-mono mt-1 opacity-80 normal-case">(Garantia blindada de 7 dias – conquiste ou devolva)</span>
          </motion.a>

          {/* TikTok Embed / Video Placeholder */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] bg-black border-2 border-tactical-red/40 relative flex items-center justify-center mb-12 mx-auto group shadow-[0_0_30px_rgba(204,0,0,0.15)] tech-corners focus:outline-none overflow-hidden"
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
               <span className="font-mono text-[10px] text-tactical-red tracking-widest font-bold">TUDO ISSO COM O APP</span>
            </div>
          </motion.div>

          <motion.a 
            href="https://pay.cakto.com.br/32m428x_860546"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 20 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-tactical-red hover:bg-red-700 text-white font-display font-bold text-xl uppercase tracking-wider px-8 py-5 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.3)] hover:shadow-[0_0_40px_rgba(204,0,0,0.6)] tech-corners text-center inline-flex flex-col items-center justify-center cursor-pointer"
          >
            <span>QUERO SER VILTRUMITA AGORA – R$ 27,90 VITALÍCIO</span>
            <span className="text-[10px] font-mono mt-1 opacity-80 normal-case">(Garantia blindada de 7 dias – conquiste ou devolva)</span>
          </motion.a>
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
              { title: "Conta de Água Subindo", desc: "Espera dias por um técnico enquanto o vazamento destrói seu orçamento." },
              { title: "Taxas Abusivas", desc: "Paga R$ 150 só pra ele \"olhar\" e apertar um parafuso simples." },
              { title: "Sensação de Inutilidade", desc: "Se sente inútil e dependente dentro da própria casa (ou de aluguel)." },
              { title: "Tutoriais Genéricos", desc: "Perde horas em YouTube com vídeos que não resolvem o seu problema específico." }
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
            className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-6 leading-tight"
          >
            A Solução<br className="hidden md:block"/> Viltrumita
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 font-mono mb-12 max-w-2xl text-sm md:text-base border-l-2 border-tactical-red pl-4"
          >
            Imagine apontar a câmera pro vazamento, furo na parede ou chuveiro queimado e a IA te dizer exatamente o que fazer — com setas em AR na tela real.
          </motion.p>

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
              { icon: Scan, title: "Scanner AR Inteligente", desc: "Aponte → IA identifica → projeta o reparo na sua câmera em tempo real." },
              { icon: Clock, title: "Missões de 3-5 MIN", desc: "Passo a passo tático, direto e sem enrolação.", extra: "REC" },
              { icon: Gamepad2, title: "Gamificação Viltrumita", desc: "Suba de Recruta pra Thragg, ganhe XP, badges e conquiste cômodos da sua casa." },
              { icon: WifiOff, title: "Modo Offline", desc: "Funciona no porão, sótão ou quando a internet cair." },
              { icon: PenTool, title: "Arsenal Logístico", desc: "Lista exata de ferramentas baratas (links Shopee) antes de começar." }
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

        {/* Prova Social */}
        <section className="w-full max-w-full overflow-hidden py-16 bg-neutral-900/20 border-y border-neutral-800/50">
          <div className="w-full max-w-4xl mx-auto px-4 mb-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-4 text-white"
            >
              "Já conquistei 12 vazamentos e economizei mais de R$800"
            </motion.h2>
            <div className="font-mono text-tactical-red text-sm tracking-widest uppercase">— Viltrumita real do TikTok</div>
          </div>
          
          <div className="relative w-full marquee-container">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-tactical-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-tactical-dark to-transparent z-10 pointer-events-none"></div>
            
            <div className="animate-marquee flex gap-6 items-center py-4 px-4">
              {/* Duplicated content for seamless loop */}
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-6 items-center shrink-0">
                  {TESTIMONIALS.map((text, i) => (
                    <div key={i} className="flex items-end gap-3 w-72 md:w-80 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                        <User className="w-4 h-4 text-neutral-400" />
                      </div>
                      <div className="bg-[#2A2A2A] text-white rounded-2xl rounded-bl-sm px-4 py-3 text-sm font-sans shadow-lg shadow-black/20 border border-white/5">
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / CTA */}
        <section className="w-full max-w-xl mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-tactical-red p-8 md:p-12 bg-black/50 tech-corners shadow-[0_0_30px_rgba(204,0,0,0.1)] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tactical-dark px-4 font-mono text-xs tracking-widest text-neutral-500">MATEMÁTICA QUE DÓI</div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-center mb-10">
              Assuma o<br/>
              Comando Agora
            </h2>

            <div className="border border-neutral-800 bg-neutral-900/50 p-6 mb-2">
              <div className="font-mono text-neutral-500 text-xs mb-2 tracking-widest uppercase">Um conserto simples com técnico:</div>
              <div className="font-display font-bold text-2xl text-neutral-500 line-through decoration-tactical-red decoration-2">R$ 150 ~ R$ 300</div>
            </div>

            <div className="text-center font-mono text-xs text-tactical-red/80 mb-6 font-bold uppercase tracking-widest">
              Você já pagou mais que isso em um vazamento só esse ano.
            </div>

            <div className="border border-tactical-red/50 bg-tactical-red/10 p-6 mb-10">
              <div className="font-mono text-tactical-red text-xs mb-2 tracking-widest uppercase font-bold">Acesso Vitalício Viltrumita:</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-display font-bold text-5xl md:text-6xl text-white">R$ 27,90</span>
              </div>
              <div className="font-mono text-sm text-neutral-400">(Uma única vez)</div>
            </div>

            <motion.a 
              href="https://pay.cakto.com.br/32m428x_860546"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-tactical-red hover:bg-red-700 text-white font-display font-bold text-xl md:text-2xl uppercase tracking-wider px-8 py-6 mb-6 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.4)] flex items-center justify-center gap-3 cursor-pointer text-center"
            >
              <ShieldAlert className="w-6 h-6 hidden sm:block shrink-0" />
              <span>INICIAR MINHA CONQUISTA<br className="md:hidden" /> <span className="md:inline hidden">-</span> R$ 27,90</span>
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

        {/* Bonus + Urgency */}
        <section className="w-full max-w-4xl mx-auto px-4 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/40 border border-tactical-red/30 p-8 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 bg-tactical-red/20 w-32 h-32 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-tactical-red/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t-4 border-tactical-red animate-spin" style={{ animationDuration: '3s' }}></div>
                  <Target className="w-12 h-12 text-tactical-red" />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="font-display font-bold text-3xl uppercase tracking-tighter mb-4 text-white">
                  Primeiros <span className="text-tactical-red">200 Viltrumitas</span> do TikTok Ganham:
                </h3>
                <ul className="space-y-3 font-mono text-sm text-neutral-300">
                  <li className="flex items-start justify-center md:justify-start gap-2">
                    <CheckCircle className="w-5 h-5 text-tactical-red shrink-0" />
                    <span>Módulo extra "Conserto de Microondas e Geladeira"</span>
                  </li>
                  <li className="flex items-start justify-center md:justify-start gap-2">
                    <CheckCircle className="w-5 h-5 text-tactical-red shrink-0" />
                    <span>Kit digital de ferramentas essenciais</span>
                  </li>
                </ul>
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

        <p className="font-mono text-[10px] tracking-widest text-tactical-red/50 text-center uppercase">
          &copy; 2026 VILTRUMITA CONQUISTA<br/>
          <span className="text-neutral-500 lowercase italic mt-2 inline-block">"Seja invencível na sua própria casa."</span>
        </p>
      </footer>
    </div>
  );
}
