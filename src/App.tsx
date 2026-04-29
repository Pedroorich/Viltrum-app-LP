import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Zap, 
  Crown, 
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Search
, Copy, Lock} from 'lucide-react';

type Page = 'cover' | 'intro' | 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4' | 'chapter5' | 'chapter6' | 'workbook_intro' | 'workbook_ex1' | 'workbook_ex2' | 'workbook_ex3' | 'workbook_ex4' | 'workbook_ex5' | 'workbook_ex6' | 'workbook_ex7' | 'workbook_ex8' | 'workbook_ex9' | 'workbook_ex10' | 'workbook_ex11' | 'workbook_ex12' | 'workbook_ex13' | 'conclusion' | 'bonus_dossie' | 'bonus_detox' | 'certificado';


function InteractiveQuiz({ title, scenario, options, onPrev, onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <div className="flex items-center gap-4 text-brand-accent">
          <div className="h-px w-12 bg-brand-accent" />
          <span className="eyebrow mb-0">Dinâmica Prática</span>
        </div>
        <h2 className="display-title !text-4xl lg:!text-5xl">{title}</h2>
      </header>

      <section className="space-y-8">
        <div className="glass-card !bg-[var(--color-brand-bg)] border-brand-accent/20">
          <p className="text-xl text-white font-serif italic leading-relaxed">
            "{scenario}"
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-normal uppercase tracking-[0.3em] text-brand-secondary mb-6">Como você reage?</h4>
          {options.map((opt, i) => (
            <button 
              key={i}
              onClick={() => setSelected(opt)}
              disabled={!!selected}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                selected?.id === opt.id 
                  ? opt.type === 'acerto' ? '!border-brand-accent/50 na-pratica' : '!border-[#8A3A3A] erro-comum'
                  : selected ? 'opacity-30 border-white/5 cursor-not-allowed' : 'border-white/10 hover:border-brand-accent/30 hover:bg-white/5'
              }`}
            >
              <span className="text-sm text-white/80 leading-relaxed">{opt.text}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`mt-8 ${selected.type === 'acerto' ? 'na-pratica' : 'erro-comum'}`}
            >
              <h4 className={`font-normal uppercase tracking-[0.3em] text-xs mb-4 ${selected.type === 'acerto' ? 'text-brand-accent' : 'text-[#8A3A3A]'}`}>
                {selected.type === 'acerto' ? '✨ Aura Magnética' : '🚨 Erro Comum'}
              </h4>
              <p className="text-sm leading-relaxed">{selected.feedback}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-12 border-t border-white/10 flex justify-between items-center">
          <button onClick={onPrev} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-normal">
            <ChevronLeft className="w-5 h-5" /> Voltar
          </button>
          <button 
            onClick={onNext} 
            className={`btn-reader !px-8 !py-4 ${!selected ? 'opacity-50 pointer-events-none' : ''}`}
          >
            Avançar <ArrowRight className="w-4 h-4 ml-2 inline"/>
          </button>
        </div>
      </section>
    </div>
  );
}


function DossierMessage({ title, scenario, content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card !bg-[#0A0A0A] border-white/5 mb-8">
      <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{title}</h4>
      <p className="text-white/40 text-sm italic mb-6">"{scenario}"</p>
      
      <div className="bg-brand-bg rounded-2xl p-6 border border-white/10 relative group">
        <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">{content}</p>
        <button 
          onClick={handleCopy}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-all ${copied ? 'bg-brand-accent/20 text-brand-accent' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
        >
          {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      {copied && <span className="text-[10px] text-brand-accent uppercase tracking-widest font-bold block text-right mt-2">Copiado para a área de transferência!</span>}
    </div>
  );
}

function DetoxChallenge({ onComplete }) {
  const [checkedDays, setCheckedDays] = useState([false, false, false, false, false, false, false]);
  const days = [
    { title: "Dia 1: Bloqueio Sensorial", desc: "Arquivar o chat dele no WhatsApp e mutar os stories. O que não é visto não drena energia." },
    { title: "Dia 2: Foco Redirecionado", desc: "Sair de casa para algo seu (academia, café, caminhar) e não pegar no celular por 1 hora completa." },
    { title: "Dia 3: Zero Indiretas", desc: "Postar um story mostrando sua rotina sem nenhuma mensagem oculta ou foto de isca." },
    { title: "Dia 4: O Atraso do Trono", desc: "Demorar exatamente o triplo do tempo de costume para responder qualquer mensagem masculina." },
    { title: "Dia 5: A Elegância da Recusa", desc: "Dizer um educadíssimo 'não, obrigada' se surgir algum convite de última hora hoje." },
    { title: "Dia 6: O Ritual Clandestino", desc: "Tomar uma taça de vinho ou fazer um SPA sozinha no banheiro com o celular desligado." },
    { title: "Dia 7: A Coroação Mental", desc: "Aceitar conscientemente que o poder nunca saiu das suas mãos. Você dita a regra." }
  ];

  const toggleDay = (index) => {
    const next = [...checkedDays];
    next[index] = !next[index];
    setCheckedDays(next);
  };

  const allDone = checkedDays.every(d => d);

  return (
    <div className="space-y-4">
      {days.map((day, i) => (
        <label 
          key={i} 
          className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${checkedDays[i] ? 'bg-brand-accent/5 border-brand-accent/30' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
        >
          <div className="pt-1">
            <input 
              type="checkbox" 
              className="hidden" 
              checked={checkedDays[i]} 
              onChange={() => toggleDay(i)} 
            />
            <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${checkedDays[i] ? 'bg-brand-accent border-brand-accent' : 'border-white/30'}`}>
              {checkedDays[i] && <CheckCircle2 className="w-4 h-4 text-brand-bg" />}
            </div>
          </div>
          <div>
            <h4 className={`font-bold text-sm uppercase tracking-widest ${checkedDays[i] ? 'text-brand-accent' : 'text-white/80'}`}>{day.title}</h4>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">{day.desc}</p>
          </div>
        </label>
      ))}

      <div className="pt-8">
        <button 
          onClick={onComplete}
          disabled={!allDone}
          className={`w-full btn-reader !py-5 ${!allDone ? 'opacity-30 pointer-events-none' : ''}`}
        >
          {allDone ? 'Concluir Desafio e Receber Coroa' : 'Complete os 7 Dias para Finalizar'}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('cover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pages: Page[] = ['cover', 'intro', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'workbook_intro', 'workbook_ex1', 'workbook_ex2', 'workbook_ex3', 'workbook_ex4', 'workbook_ex5', 'workbook_ex6', 'workbook_ex7', 'workbook_ex8', 'workbook_ex9', 'workbook_ex10', 'workbook_ex11', 'workbook_ex12', 'workbook_ex13', 'conclusion', 'bonus_dossie', 'bonus_detox', 'certificado'];
  const currentIndex = pages.indexOf(currentPage);

  const nextPage = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentPage(pages[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-bg bg-brand-bg text-brand-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/10 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-serif italic font-bold text-xl text-brand-accent">
          <Heart className="w-5 h-5 fill-brand-accent" />
          <span>Viciada em Você</span>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-8"
          >
            <div className="flex flex-col gap-6 text-4xl font-serif italic">
              <button 
                onClick={() => { setCurrentPage('cover'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'cover' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capa
              </button>
              <button 
                onClick={() => { setCurrentPage('intro'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'intro' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Introdução
              </button>
              <button 
                onClick={() => { setCurrentPage('chapter1'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter1' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 1
              </button>
              <button 
                onClick={() => { setCurrentPage('chapter2'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter2' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 2
              </button>
              <button 
                onClick={() => { setCurrentPage('chapter3'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter3' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 3
              </button>
              <button 
                onClick={() => { setCurrentPage('chapter4'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter4' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 4
              </button>
              <button 
                onClick={() => { setCurrentPage('chapter5'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter5' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 5
              </button>
              
              <button 
                onClick={() => { setCurrentPage('chapter6'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage === 'chapter6' ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Capítulo 6
              </button>
              <button 
                onClick={() => { setCurrentPage('workbook_intro'); setIsMenuOpen(false); }}
                className={`text-left ${currentPage.startsWith('workbook') ? 'text-brand-accent' : 'text-white/40'}`}
              >
                Workbook
              </button>
              <button onClick={() => { setCurrentPage('conclusion'); setIsMenuOpen(false); }} className={`text-left ${currentPage === 'conclusion' ? 'text-brand-accent' : 'text-white/40'}`}>Conclusão</button>
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-6 text-2xl">
                <button 
                  onClick={() => { setCurrentPage('bonus_dossie'); setIsMenuOpen(false); }}
                  className={`text-left ${currentPage === 'bonus_dossie' ? 'text-[#8A3A3A]' : 'text-white/30'}`}
                >
                  Arquivo Secreto
                </button>
                <button 
                  onClick={() => { setCurrentPage('bonus_detox'); setIsMenuOpen(false); }}
                  className={`text-left ${currentPage === 'bonus_detox' ? 'text-brand-secondary' : 'text-white/30'}`}
                >
                  Detox de 7 Dias
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {currentPage === 'cover' && (
            <motion.div
              key="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] min-h-screen pt-24"
            >
              <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center border-r border-white/10">
                <p className="eyebrow">Guia Premium de Atitude</p>
                <h1 className="display-title">
                  Como Deixar 
                  <span className="display-title-span">Ele Viciado</span> 
                  Em Você
                </h1>
                <p className="subtitle-accent">
                  Os segredos de comportamento, energia e atitude que despertam desejo e fazem ele pensar em você o tempo todo.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <button onClick={nextPage} className="btn-reader">Iniciar Leitura <ArrowRight className="w-4 h-4 ml-2 inline" /></button>
                  
                </div>
              </div>

              <div className="p-8 md:p-16 lg:p-24 bg-gradient-to-br from-white/5 to-transparent flex flex-col justify-center relative overflow-hidden">
                

                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card relative z-10"
                >
                  <div className="font-serif italic text-4xl text-brand-secondary/50 mb-4">Cap. 01</div>
                  <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">A Energia que Atrai</h2>
                  <p className="italic text-white/80 text-lg leading-relaxed mb-8 border-b border-white/10 pb-8">
                    "Homens não se conectam só com aparência. Eles se conectam com a sensação que você transmite."
                  </p>
                  <ul className="space-y-4">
                    {[
                      "A regra de ouro: Quem precisa menos, atrai mais.",
                      "Diferença entre atrair e implorar atenção.",
                      "Como criar presença sem estar disponível.",
                      "O erro que afasta (e quase todas cometem)."
                    ].map((rule, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                        <ArrowRight className="w-4 h-4 text-brand-accent" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="mt-auto pt-12 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-white/30">
                  <div>Direto • Moderno • Envolvente</div>
                  <div>© 2024 Femme Power</div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage !== 'cover' && (
            <motion.div
              key="reader"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 max-w-3xl mx-auto w-full px-6 py-24"
            >
              {currentPage === 'intro' && (
                <div className="space-y-12">
                  <div className="flex items-center gap-4 text-brand-accent">
                    <div className="h-px w-12 bg-brand-accent" />
                    <span className="eyebrow mb-0">Introdução</span>
                  </div>

                  <h2 className="display-title !text-5xl">
                    Você não precisa <br />
                    <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">ser perfeita.</span>
                  </h2>

                  <div className="space-y-8 text-xl text-white/70 font-light leading-relaxed">
                    <p>
                      Não precisa ter o corpo ideal, nem fazer coisas mirabolantes.
                    </p>
                    
                    <div className="glass-card !p-8 border-l-4 border-l-brand-accent rounded-l-none">
                      <p className="text-brand-accent font-serif italic text-2xl">
                        "O que realmente faz um homem ficar viciado em uma mulher é algo que poucas entendem… E menos ainda sabem aplicar."
                      </p>
                    </div>

                    <p>
                      Esse guia vai te mostrar exatamente como ativar desejo, conexão e interesse — de forma natural, poderosa e impossível de ignorar.
                    </p>
                  </div>

                  <div className="pt-12 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 1
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 'chapter1' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 01</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      A Energia que faz ele <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">se viciar em 10 segundos</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Antes de qualquer mensagem, encontro ou toque… Existe uma frequência invisível que dita se ele vai te ignorar ou se tornar <span className="text-brand-accent font-serif italic text-3xl">obcecado por você.</span>
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        Sabe aquela mulher que não é necessariamente o "padrão de capa de revista", mas onde ela chega, o ar parece mudar? Todos os olhares se voltam para ela com uma mistura de respeito e desejo. Isso não é sorte. É <strong>energia magnética</strong>.
                      </p>
                      <p>
                        A maioria das mulheres opera na energia da <em>necessidade</em>. Elas agem como se estivessem em uma entrevista de emprego perpétua, tentando provar ao cara que são "prendadas", "boas o suficiente" ou "a melhor opção". Mas entenda uma coisa: toda vez que você tenta provar seu valor, você está automaticamente dizendo que ele é superior. E o desejo morre na superioridade.
                      </p>
                      <p>
                        Homens são caçadores por instinto biológico. Eles não valorizam o que é dado de bandeja. Eles valorizam o que precisam conquistar, suar e merecer. Se você se entrega emocionalmente antes mesmo dele provar que é digno, você mata o jogo.
                      </p>
                    </div>

                    <div className="na-pratica">
                      <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">🧠 A Psicologia do Desejo</h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        O cérebro masculino é programado para focar no que é <strong>raro</strong>. Se você está sempre disponível, você não é rara. Se você responde em segundos, você não tem uma vida interessante. O vício começa quando ele percebe que você tem um mundo próprio onde ele é um convidado, não o proprietário.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="glass-card !p-8 border-white/5 border-l-red-500 border-l-4">
                        <div className="eyebrow !text-red-400 !mb-4 flex items-center gap-2">
                          <X className="w-4 h-4" /> Aura de Escassez (O Repelente)
                        </div>
                        <ul className="space-y-3 text-white/40 text-sm">
                          <li className="flex items-start gap-2">• Ansiedade que transparece em mensagens longas</li>
                          <li className="flex items-start gap-2">• Postar stories apenas para ele ver e reagir</li>
                          <li className="flex items-start gap-2">• Cobrar satisfação sem ter um compromisso real</li>
                          <li className="flex items-start gap-2">• Mudar seus planos de última hora por ele</li>
                        </ul>
                      </div>

                      <div className="na-pratica border-l-brand-accent border-l-4">
                        <div className="eyebrow !mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Aura Magnética (O Vício)
                        </div>
                        <ul className="space-y-3 text-brand-accent text-sm font-bold">
                          <li className="flex items-start gap-2">• Autossuficiência: sua felicidade não depende dele</li>
                          <li className="flex items-start gap-2">• Mistério: você compartilha apenas 30% da sua vida</li>
                          <li className="flex items-start gap-2">• Desapego: se ele for embora, sua vida continua épica</li>
                          <li className="flex items-start gap-2">• Presença Alfas: você sabe o seu valor e não o negocia</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div className="erro-comum">
                        <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: O "Download" de Aprovação</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          Ele visualiza e não responde na hora. O que você faz? Entra 50 vezes no perfil dele, olha se ele seguiu alguém e começa a postar fotos "uau" só para atraí-lo de volta. <strong>Isso é desespero disfarçado.</strong> Ele sente isso no seu tom de voz e na forma como você responde quando ele finalmente aparece.
                        </p>
                      </div>

                      <div className="na-pratica">
                        <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: O Reequilíbrio de Energia</h4>
                        <p className="text-sm text-white/80 leading-relaxed mb-4">
                          Seja a mulher que tem uma vida tão incrível que ele é apenas a <em>cereja do bolo</em>, não o bolo inteiro. 
                        </p>
                        <div className="space-y-4">
                          <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                            <span className="text-brand-accent font-bold uppercase">Situação Real:</span> Ele demora 5 horas para responder um "Oi" sem motivo aparente. <br /><br />
                            <span className="text-white/80"><strong>Sua Atitude:</strong> Ocupar-se de verdade. Não responda em 5 segundos quando ele aparecer. Responda apenas quando você Realmente estiver livre e relaxada. Não questione a demora. Ao agir como se você nem tivesse notado o tempo passar, você tira o pedestal dele e coloca em você.</span>
                          </div>
                          <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                            <span className="text-brand-accent font-bold uppercase">Exemplo do Dia a Dia:</span> Ele envia uma mensagem vaga tipo "E aí?".<br /><br />
                            <span className="text-white/80"><strong>Sua Atitude:</strong> Não dê uma resposta de 5 linhas. Use a lei do espelhamento sutil: "Trabalhando muito aqui, mas sobrevivi à segunda rs. E você?". Curto, leve e focado em VOCÊ.</span>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card border-none bg-[#050505]">
                        <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                        <ul className="text-sm text-white/40 space-y-3">
                          <li className="flex gap-2"><span>•</span> Curtir fotos antigas dele enquanto ele te ignora</li>
                          <li className="flex gap-2"><span>•</span> Mandar mensagens de "boa noite" todos os dias sem reciprocidade</li>
                          <li className="flex gap-2"><span>•</span> Ser a primeira a sugerir todos os encontros</li>
                          <li className="flex gap-2"><span>•</span> Falar sobre "como você é difícil" (quem é difícil de verdade não precisa dizer)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-accent !text-brand-bg !p-12 text-center relative overflow-hidden group">
                      <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <Crown className="w-48 h-48" />
                      </div>
                      <p className="text-3xl font-serif italic leading-tight relative z-10">
                        "O vício nasce no momento em que ele percebe que você é o prêmio, não a caçadora. Se ele sentir que já te ganhou, ele para de jogar."
                      </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-white/10">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white">O Poder da Mulher Sol: Atraindo sem Correr</h3>
                      <p className="text-white/60 text-lg leading-relaxed">
                        Imagine o Sol. Ele não corre atrás de nenhum planeta para que eles girem ao seu redor. Ele simplesmente <strong>é</strong>. Ele emite calor, luz e gravidade apenas existindo. Seja o sol da sua própria vida. Quando você brilha para si mesma, os outros orbitam você naturalmente.
                      </p>
                      <div className="p-10 text-center glass-card border-brand-accent/30">
                        <p className="text-2xl font-serif italic text-brand-accent">"Nunca force uma conexão. O que é seu te encontra na sua melhor versão, não na sua versão mais desesperada."</p>
                      </div>
                    </div>
                  </section>

                  <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 2
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 'chapter2' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 02</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      O Poder do Olhar: <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">Sedução Não-Verbal</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Você pode falar pouco… Mas se souber usar o olhar e a presença da forma certa… <span className="text-brand-accent font-serif italic text-3xl">Você fala tudo.</span> E mais do que isso: Você faz ele sentir sem pronunciar uma única frase.
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        A comunicação humana é 93% não-verbal. Isso significa que antes mesmo de você abrir a boca para dizer "oi", ele já tomou uma decisão subconsciente sobre o seu valor. 
                      </p>
                      <p>
                        O olhar não é apenas para enxergar; é para <strong>conectar e dominar</strong>. Uma mulher que sustenta o olhar com confiança cria um vácuo de tensão onde o homem se sente compelido a entrar para provar seu valor. Se você desvia o olhar primeiro, você entrega o comando do jogo para ele.
                      </p>
                      <p>
                        Além do olhar, sua <strong>postura</strong> comunica seu status. Uma rainha não se senta como se quisesse desaparecer. Ela ocupa espaço, mantém os ombros relaxados e a coluna ereta — não por rigidez, mas por autoconfiança pura.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">O Olhar Triangular (Técnica Hipnótica)</h3>
                      <p className="text-white/60 leading-relaxed text-lg">
                        Existe uma sequência rítmica que ativa os receptores de dopamina no cérebro dele. Em vez de apenas olhar nos olhos dele como uma amiga, use o movimento triangular: olhe para o olho esquerdo, desça suavemente para os lábios e suba para o olho direito. 
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass-card !p-6 text-center border-white/5 bg-white/2">
                          <div className="text-brand-accent mb-3 flex justify-center"><Search className="w-8 h-8" /></div>
                          <div className="text-xs font-bold uppercase tracking-widest leading-relaxed">Fase 1: Intenção<br/>Sutil</div>
                        </div>
                        <div className="glass-card !p-6 text-center border-white/5 bg-white/2">
                          <div className="text-brand-accent mb-3 flex justify-center"><Heart className="w-8 h-8" /></div>
                          <div className="text-xs font-bold uppercase tracking-widest leading-relaxed">Fase 2: Conexão<br/>Emocional</div>
                        </div>
                        <div className="glass-card !p-6 text-center border-white/5 bg-white/2">
                          <div className="text-brand-accent mb-3 flex justify-center"><Zap className="w-8 h-8" /></div>
                          <div className="text-xs font-bold uppercase tracking-widest leading-relaxed">Fase 3: Faísca<br/>de Desejo</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">O Poder da Pausa Vocal</h3>
                      <p className="text-white/60 leading-relaxed text-lg">
                        Muitas mulheres falam rápido demais porque têm medo de perder a atenção dele. O diferencial é falar devagar, com um tom de voz mais baixo e profundo (o famoso "voz de travesseiro"). As pausas entre as frases criam antecipação.
                      </p>
                    </div>

                    <div className="space-y-12">
                      <div className="erro-comum">
                        <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: O "Olhar de Esquiva"</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          Muitas mulheres, por timidez, interrompem o contato visual rápido demais (olhando para baixo). Na linguagem corporal, isso é um sinal de submissão. Outro erro é a inquietação motora — ficar mexendo no cabelo sem parar ou batendo o pé. Isso comunica ansiedade, não fascínio.
                        </p>
                      </div>

                      <div className="na-pratica">
                        <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: O Jogo do Jantar</h4>
                        <div className="space-y-4">
                          <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                            <span className="text-brand-accent font-bold uppercase">Situação Real:</span> Ele está te contando algo sério ou algo que ele se orgulha muito. <br /><br />
                            <span className="text-white/80"><strong>Sua Atitude:</strong> Incline-se levemente para frente (proximidade). Use o olhar triangular enquanto ele fala. Quando ele terminar de falar, não responda imediatamente. Sustente o olhar em silêncio por 3 segundos com um sorriso "enigmático". Somente depois, faça um comentário inteligente. <strong>Esse silêncio é onde o vício emocional dele se consolida.</strong></span>
                          </div>
                          <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                            <span className="text-brand-accent font-bold uppercase">No Encontro Casual:</span> Encontrou ele num bar ou festa.<br /><br />
                            <span className="text-white/80"><strong>Sua Atitude:</strong> Não vá até ele. Olhe para ele de longe, sustente por 2 segundos, dê um sorrisinho e volte a conversar com suas amigas. Espere ele vir até você. Deixe o magnetismo físico fazer o trabalho pesado.</span>
                          </div>
                        </div>
                      </div>

                      <div className="glass-card border-none bg-[#050505]">
                        <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                        <ul className="text-sm text-white/40 space-y-3">
                          <li className="flex gap-2"><span>•</span> Cruzar os braços (barreira física)</li>
                          <li className="flex gap-2"><span>•</span> Olhar ao redor do restaurante procurando alguém mais interessante</li>
                          <li className="flex gap-2"><span>•</span> Inclinar-se demais (parecendo desesperada por atenção)</li>
                          <li className="flex gap-2"><span>•</span> Rir alto demais de todas as piadas dele (validação exagerada)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-secondary !text-brand-bg !p-10 rounded-3xl relative overflow-hidden">
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4">A Lei da Presença Silenciosa</h4>
                      <p className="text-xl font-serif italic leading-snug">
                        "Presença não é ser notado. É ser lembrado por dias. E o olhar é a âncora que prende sua imagem na mente dele quando as luzes se apagam."
                      </p>
                    </div>

                    <div className="pt-12 border-t border-white/10 text-center">
                      <p className="text-brand-accent font-serif italic text-2xl">"O homem certo fica hipnotizado pela mulher que sabe o poder do seu próprio silêncio."</p>
                    </div>
                  </section>

                  <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 3
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 'chapter3' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 03</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      Mistério e Desejo: <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">O Gatilho da Antecipação</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Se tem algo que faz um homem ficar pensando em uma mulher… Não é o que ela conta. <span className="text-brand-accent font-serif italic text-3xl">É o que ela deixa no ar.</span>
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        Desejo não é fruto da <em>satisfação</em>; é fruto da <em>expectativa</em>. No momento em que um homem sente que já te desvendou por completo, o interesse dele entra em modo de repouso. A mente masculina corre atrás do que ainda não conquistou totalmente.
                      </p>
                      <p>
                        Se ele sabe exatamente onde você está, o que almoçou e o que está planejando para o próximo mês através dos seus stories, o mistério morre. E sem mistério, a mente dele para de trabalhar por você. O vício emocional só acontece quando ele tem que investir tempo e pensamento para "ganhar" você.
                      </p>
                      <p>
                        Aprenda a deixar <strong>círculos incompletos</strong>. Em filmes, isso se chama <em>cliffhanger</em> — aquele momento de tensão que te faz querer ver o próximo episódio imediatamente. Nas suas interações, você deve ser o "próximo episódio" que ele mal pode esperar para ver.
                      </p>
                    </div>

                    <div className="erro-comum">
                      <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: O Relatório Diário</h4>
                      <p className="text-white/60 leading-relaxed italic">
                        No começo de uma relação, você envia fotos de tudo o que faz, conta dos seus problemas no trabalho e detalha cada sonho seu. <strong>O que acontece:</strong> Você vira um livro lido. Não há nada novo pelo que ansiar. Pior que isso é postar indiretas ou reclamações nas redes sociais — isso mata o brilho do mistério instantaneamente.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">O Segredo do Ponto Final Estratégico</h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Comece a terminar as conversas quando elas estiverem no <strong>ápice da empolgação</strong>. A maioria das mulheres espera o assunto "esfriar" para se despedir. Se você sai no auge, a sensação positiva e a vontade de falar mais ficam grudadas na mente dele.
                      </p>

                      <div className="space-y-12">
                        <div className="na-pratica">
                          <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: O "Bônus" de Curiosidade</h4>
                          <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Situação Real:</span> Vocês estão num papo super divertido pelo WhatsApp à noite. <br /><br />
                              <span className="text-white/80"><strong>Sua Atitude:</strong> Mande: "Nossa, tá ótimo o papo, mas surgiu uma coisa aqui que eu preciso resolver agora e vou ter que sumir. Amanhã te conto uma coisa..." E saia. Não responda mais. O que acontece na cabeça dele? "Que coisa surgiu?", "O que ele vai me contar amanhã?". Ele vai dormir pensando em você.</span>
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Nas Redes Sociais:</span> Postou uma foto incrível num lugar novo.<br /><br />
                              <span className="text-white/80"><strong>Sua Atitude:</strong> Não marque a localização exata no story na hora. Deixe para postar "later" ou sem localização. Quando ele te perguntar onde é, responda: "Um lugar mágico que descobri... talvez um dia te leve lá rs". Mistério + Desafio.</span>
                            </div>
                          </div>
                        </div>

                        <div className="glass-card border-none bg-[#050505]">
                          <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                          <ul className="text-sm text-white/40 space-y-3">
                            <li className="flex gap-2"><span>•</span> Explicar detalhadamente por que você não pôde responder na hora</li>
                            <li className="flex gap-2"><span>•</span> Tentar "provar" que sua vida é agitada (deixe sua ausência provar isso)</li>
                            <li className="flex gap-2"><span>•</span> Falar sobre seus relacionamentos passados (guarde isso para quando houver muita intimidade)</li>
                            <li className="flex gap-2"><span>•</span> Mostrar ansiedade para o próximo encontro</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-accent !text-brand-bg !p-10 rounded-3xl text-center">
                      <p className="text-xl font-black uppercase leading-tight mb-4 text-center">Gatilho de Vício: O Cérebro odeia o que não está concluído.</p>
                      <p className="text-lg font-serif italic text-center">"Seja o quebra-cabeça que ele quer montar, não a foto pronta que ele já viu mil vezes."</p>
                    </div>

                   <div className="pt-12 border-t border-white/10 text-center">
                      <p className="text-brand-accent font-serif italic text-2xl">"Quem muito se mostra, pouco se valoriza. O ouro é escondido, o cascalho está em todo lugar."</p>
                    </div>

                  </section>

                  <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 4
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 'chapter4' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 04</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      Comunicação de Alto Impacto: <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">Conexão e Desafio</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Não é sobre o que você fala. É sobre o que ele sente enquanto você fala. Porque no final das contas… <span className="text-brand-accent font-serif italic text-3xl">Ele não se conecta às suas informações, ele se conecta à experiência de estar com você.</span>
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        A conversa é o campo de batalha onde você planta as sementes do vício mental. A maioria das mulheres foca em ser "agradável", o que acaba se tornando <em>chato</em>. Uma mulher magnética sabe como temperar a doçura com um pouco de sal: <strong>o desafio</strong>.
                      </p>
                      <p>
                        Homens de alto valor são testados o dia todo. Eles estão acostumados com pessoas dizendo "sim" para eles. Quando você aparece e, com um sorriso, diz "talvez" ou "prove que você merece", você se torna um enigma fascinante. 
                      </p>
                      <p>
                        O segredo é a <strong>Comunicação Emocional</strong>. Não conte apenas o que aconteceu no seu dia. Conte como você se sentiu, os cheiros que sentiu, as pequenas curiosidades. Isso cria imagens mentais na cabeça dele e o transporta para dentro do seu mundo.
                      </p>
                    </div>

                    <div className="erro-comum">
                      <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: A Resposta "Google"</h4>
                      <p className="text-white/60 leading-relaxed italic">
                        Ele pergunta: "Como foi seu dia?". Você responde: "Foi bom, trabalhei bastante e agora tô em casa". <strong>Fim.</strong> Você acabou de dar uma resposta puramente informativa e sem vida. Você não deu nenhum gancho para ele continuar ou se interessar mais.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">A Técnica do Desafio Lúdico</h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Use o humor para testá-lo. Isso remove a pressão e cria uma dinâmica de "nós contra o mundo". Quando você o desafia com leveza, você ativa o instinto de conquista dele de forma imediata.
                      </p>

                      <div className="space-y-12">
                        <div className="na-pratica">
                          <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: Transformando o Óbvio</h4>
                          <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Situação Real (Transformação de Mensagem):</span> <br /><br />
                              <span className="text-white/40">Antes:</span> "O que você tá fazendo?" <br />
                              <span className="text-brand-accent">Sua Atitude (Nova):</span> "Tô aqui pensando se você é realmente essa pessoa legal que parece ou se é só marketing rs. O que tem a dizer em sua defesa?" <br />
                              <span className="text-white/40 italic">Pense: você tirou ele da zona de conforto e agora ele vai ter que se "vender" para você.</span>
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Situação Real (Elogio Estratégico):</span> <br /><br />
                              <span className="text-white/80">Se ele fizer algo legal, não diga apenas "Obrigada". Diga: "Nossa, você ganhou pontos hoje comigo. Mas não se acostuma não, sou exigente rs". Você valida, mas não se entrega por completo.</span>
                            </div>
                          </div>
                        </div>

                        <div className="glass-card border-none bg-[#050505]">
                          <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                          <ul className="text-sm text-white/40 space-y-3">
                            <li className="flex gap-2"><span>•</span> Reclamar de ex-atitudes ou homens em geral (amargura é o oposto de magnetismo)</li>
                            <li className="flex gap-2"><span>•</span> Ser a "resolvedora de problemas" dele antes de ter um compromisso</li>
                            <li className="flex gap-2"><span>•</span> Responder com excesso de emojis quando ele é econômico</li>
                            <li className="flex gap-2"><span>•</span> Ter medo de discordar dele. Mulheres com opinião própria viciam.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-secondary !text-brand-bg !p-10 rounded-3xl text-center">
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4">A Mágica da Conexão</h4>
                      <p className="text-3xl font-black uppercase leading-tight">"A mente dele é o seu palco. Use as palavras para criar o cenário onde você é a protagonista absoluta."</p>
                    </div>

                    <div className="pt-12 border-t border-white/10 text-center space-y-4">
                      <p className="text-brand-accent font-serif italic text-2xl">"Conversas superficiais criam contatos. Conversas emocionais criam destinos."</p>
                    </div>
                  </section>

                  <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 5
                    </button>
                  </div>
                </div>
              )}

              {currentPage === 'chapter5' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 05</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      A Ciência da Ausência: <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">Fazendo Ele Pedir Pela Sua Atenção</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Existe um momento em que tudo muda. Não é quando você fala mais. Não é quando você aparece mais. <span className="text-brand-accent font-serif italic text-3xl">É quando você permite o espaço para a falta.</span>
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        A ausência não é um "jogo" para punir ninguém; é uma ferramenta de <strong>valorização</strong>. Tudo o que é abundante perde valor. Se o ar que respiramos fosse vendido em garrafas, seria o bem mais caro do mundo. Como ele é abundante e está em todo lugar, ninguém nota sua existência até que ele falte.
                      </p>
                      <p>
                        Quando um homem sente que você está sempre ali, pronta para responder, pronta para sair, pronta para agradar… ele entra na zona de conforto. E na zona de conforto não há paixão, há apenas rotina. O vício emocional nasce da falta súbita de um estímulo prazeroso.
                      </p>
                      <p>
                        Muitas mulheres têm medo de se afastar um pouco por medo de "perder" o cara. Mas a verdade é: você só perde o que nunca foi seu. Se ele se afastar quando você começar a focar mais em você, ele nunca teria ficado de qualquer maneira. Mas se ele tiver interesse, sua ausência vai fazê-lo perceber o quanto ele valoriza sua presença.
                      </p>
                    </div>

                    <div className="erro-comum">
                      <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: O "Afrouxamento" de Padrões</h4>
                      <p className="text-white/60 leading-relaxed italic">
                        Mudar seus horários de academia, deixar de ver suas amigas ou abrir mão do seu momento de leitura só porque ele mandou uma mensagem de última hora dizendo "quer vir aqui?". <strong>O que você comunica:</strong> "Minha vida é vazia e eu estava apenas esperando por você para ela ter sentido". Isso mata o respeito e, consequentemente, o vício.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">O Reequilíbrio de Poder</h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Se você percebe que está investindo 80% e ele apenas 20%, pare. Recue para os 20% dele ou até menos. Deixe ele sentir o vácuo emocional. É nesse vácuo que o homem percebe que precisa trabalhar para ter você de volta.
                      </p>

                      <div className="space-y-12">
                        <div className="na-pratica">
                          <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: O Detox Estratégico</h4>
                          <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Situação Real:</span> Ele começou a demorar mais para responder e ser mais seco. <br /><br />
                              <span className="text-white/80"><strong>Sua Atitude:</strong> Não cobre! Simplesmente espelhe a energia dele. No final de semana, não mande nada. Saia, tire uma foto linda (não para ele, para você) e poste discretamente nos stories. Quando ele mandar um "E aí", demore o dobro do tempo dele para responder. Quando responder, seja educada, curta e brilhante. Deixe-o confuso: "Por que ela não está correndo atrás?". A confusão gera curiosidade, que gera vício.</span>
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">No WhatsApp:</span> <br /><br />
                              <span className="text-white/80">Tire o "visto por último" e as confirmações de leitura. Deixe-o sem saber se você viu ou não. O controle da informação sobre você deve ser sempre SEU.</span>
                            </div>
                          </div>
                        </div>

                        <div className="glass-card border-none bg-[#050505]">
                          <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                          <ul className="text-sm text-white/40 space-y-3">
                            <li className="flex gap-2"><span>•</span> Mandar mensagens para "checar" se ele está bem sem motivo real e constante</li>
                            <li className="flex gap-2"><span>•</span> Visualizar os stories dele imediatamente após ele postar</li>
                            <li className="flex gap-2"><span>•</span> Postar indiretas de "quem não valoriza perde" (isso é infantil e mostra que você se importa demais)</li>
                            <li className="flex gap-2"><span>•</span> Pedir para os amigos dele perguntarem dele para você</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-accent !text-brand-bg !p-10 rounded-3xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                        <Crown className="w-16 h-16" />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-center">A Regra de Ouro do Vício</h4>
                      <p className="text-xl font-serif italic leading-snug text-center">
                        "Quem é onipresente é comum. Quem é escasso é luxo. E o homem sempre vai lutar pelo luxo enquanto ignora o que é comum."
                      </p>
                    </div>

                    <div className="pt-12 border-t border-white/10 text-center">
                      <p className="text-brand-accent font-serif italic text-2xl">"Sua ausência deve ser tão memorável quanto o seu melhor perfume."</p>
                    </div>
                  </section>

                  <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                    <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      <ChevronLeft className="w-5 h-5" />
                      Voltar
                    </button>
                    <button 
                      onClick={nextPage}
                      className="btn-reader !px-8 !py-4"
                    >
                      Capítulo 6
                    </button>
                  </div>
                </div>
              )}

              {/* Chapter 6 */}
              {currentPage === 'chapter6' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Capítulo 06</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      A Âncora Final: <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">O Diferencial Inesquecível</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Você pode fazer tudo certo. Pode ter presença, saber conversar, criar desejo… Mas existe algo que separa as mulheres que são apenas "passagens" na vida dele… <span className="text-brand-accent font-serif italic text-3xl">das que se tornam o destino final.</span>
                    </p>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        Ser inesquecível não é sobre ser perfeita. Aliás, a perfeição é chata e gera distanciamento. O que realmente marca um homem é a <strong>Experiência Sensorial e Emocional</strong> que ele vive ao seu lado.
                      </p>
                      <p>
                        Homens podem esquecer o que você disse, mas jamais esquecerão <em>como se sentiram</em> quando estavam com você. Uma mulher que traz leveza, autenticidade e uma pitada de imprevisibilidade cria uma âncora emocional tão forte que ele vai comparar todas as outras com você — e nenhuma vai chegar aos seus pés.
                      </p>
                      <p>
                        O diferencial está nos <strong>pequenos contrastes</strong>. Seja a mulher que consegue ser elegante em um jantar e totalmente descontraída comendo um sanduíche na calçada. Seja a mulher que é forte e independente, mas que sabe ser acolhedora e doce nos momentos de intimidade. Esse contraste é o que gera o verdadeiro vício.
                      </p>
                    </div>

                    <div className="erro-comum">
                      <h4 className="text-[#8A3A3A] font-normal uppercase tracking-[0.3em] text-xs mb-4">🚨 Erro Comum: O "Personagem"</h4>
                      <p className="text-white/60 leading-relaxed italic">
                        Tentar ser a mulher que você <em>acha</em> que ele quer. Se ele gosta de futebol, você finge que ama. Se ele é sério, você abafa sua risada. <strong>O problema:</strong> Personagens não sustentam vício longo. Ele vai sentir que algo está "fora do lugar" e a conexão será superficial. Além disso, você vai se cansar de fingir. A autenticidade é o perfume mais caro que você pode usar.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">O Poder da Vulnerabilidade Seletiva</h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        Mostrar que você tem camadas. Você não é apenas uma "mulher fatal" ou uma "mulher de negócios". Mostrar uma pequena vulnerabilidade ou um hobby bobo cria uma conexão de "protetorado" no homem que é extremamente viciante para o instinto masculino.
                      </p>

                      <div className="space-y-12">
                        <div className="na-pratica">
                          <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">✨ Na Prática: Criando Memória Afetiva</h4>
                          <div className="space-y-4">
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">Situação Real:</span> O encontro está chegando ao fim. <br /><br />
                              <span className="text-white/80"><strong>Sua Atitude:</strong> Não seja a primeira a pedir para ir embora, mas quando decidir ir, vá com leveza. Antes de sair do carro ou se despedir, dê um abraço que dure 2 segundos a mais do que o normal. Sinta o perfume dele. Sussurre algo trivial como: "Adorei a sua companhia hoje, de verdade". E saia. Esse "gosto de quero mais" combinado com uma validação sincera é a âncora que vai fazer ele te mandar mensagem antes mesmo de você chegar em casa.</span>
                            </div>
                            <div className="p-5 bg-white/5 rounded-xl text-sm border border-white/10">
                              <span className="text-brand-accent font-bold uppercase">No Dia a Dia:</span> <br /><br />
                              <span className="text-white/80">Tenha um "cheiro próprio". Use sempre o mesmo perfume em encontros. O cérebro dele vai associar aquele cheiro ao prazer de estar com você. Quando ele sentir esse cheiro em qualquer outro lugar, a imagem sua vai surgir instantaneamente na mente dele. <strong>Isso é biologia pura.</strong></span>
                            </div>
                          </div>
                        </div>

                        <div className="glass-card border-none bg-[#050505]">
                          <h4 className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4">🚫 O Que Evitar</h4>
                          <ul className="text-sm text-white/40 space-y-3">
                            <li className="flex gap-2"><span>•</span> Tentar ser perfeita demais (o medo de errar te trava e te torna comum)</li>
                            <li className="flex gap-2"><span>•</span> Falar sobre o futuro do relacionamento cedo demais (viva o agora)</li>
                            <li className="flex gap-2"><span>•</span> Competir com ele para ver quem é mais "foda"</li>
                            <li className="flex gap-2"><span>•</span> Perder sua própria essência para se encaixar no mundo dele</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card !bg-brand-secondary !text-brand-bg !p-10 rounded-3xl relative overflow-hidden text-center">
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-center">A Sentença Final do Vício</h4>
                      <p className="text-2xl font-black uppercase leading-tight text-center">"O vício não é sobre o que você faz por ele. É sobre quem você se torna quando ele não está por perto, e como isso o faz querer estar sempre ao seu lado."</p>
                    </div>

                    <div className="pt-12 border-t border-white/10 text-center">
                       <p className="text-brand-accent font-serif italic text-2xl">"Para ser inesquecível, você só precisa ser a melhor versão de si mesma. O resto… é consequência do seu magnetismo."</p>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                      <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                        <ChevronLeft className="w-5 h-5" />
                        Voltar
                      </button>
                      <button 
                        onClick={nextPage}
                        className="btn-reader !px-8 !py-4"
                      >
                        Próximo <ArrowRight className="w-4 h-4 ml-2 inline"/>
                      </button>
                    </div>
                  </section>
                </div>
              )}

              
              {currentPage === 'workbook_intro' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Workbook Interativo</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      O Teste <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">De Fogo</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Ler sobre magnetismo é fácil. Aplicar sob pressão é o que separa as mulheres inesquecíveis das comuns.
                    </p>

                    <div className="glass-card border-brand-accent/20">
                      <p className="text-lg text-white/70 leading-relaxed mb-6">
                        Nas próximas páginas, você será colocada em 3 cenários reais. Escolha como você agiria. O resultado com minha análise detalhada será mostrado na hora.
                      </p>
                      <ul className="space-y-4 text-sm text-white/60">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Seja brutalmente honesta nas suas escolhas.</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-brand-accent" /> Confie nos seus novos instintos magnéticos.</li>
                      </ul>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex justify-between items-center">
                      <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-normal">
                        <ChevronLeft className="w-5 h-5" /> Voltar
                      </button>
                      <button onClick={nextPage} className="btn-reader !px-8 !py-4">
                        Iniciar Teste <ArrowRight className="w-4 h-4 ml-2 inline"/>
                      </button>
                    </div>
                  </section>
                </div>
              )}

              {currentPage === 'workbook_ex1' && (
                <InteractiveQuiz 
                  title="A Auditoria de Mensagens" 
                  scenario="Ele visualizou sua mensagem ontem à noite. Só respondeu agora, 14h do dia seguinte, com um 'Coreria absurda aqui. Tudo bem?'"
                  options={[
                    { id: 'a', text: 'Responder em 5 minutos: "Que pena! Tá trabalhando muito? Tudo bem aqui e vc?"', type: 'erro', feedback: 'O desespero disfarçado! Responder rápido para justificar a ausência dele mostra que você estava agoniada aguardando. Ele sente sua disponibilidade emocional.' },
                    { id: 'b', text: 'Responder secamente logo em seguida: "Tudo."', type: 'erro', feedback: 'Passivo-agressiva! Ser seca apenas comunica amargura e mostra que o atraso dele abalou emocionalmente você.' },
                    { id: 'c', text: 'Ler, terminar suas tarefas, e só responder às 18h+, quando de fato estiver livre: "Dias assim são intensos! Tudo ótimo por aqui, relaxando agora."', type: 'acerto', feedback: 'Você não cobrou, não puniu e não correu atrás. Respondeu quando teve tempo de verdade de forma iluminada. Reverteu o pedestal!' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}

              {currentPage === 'workbook_ex2' && (
                <InteractiveQuiz 
                  title="O Encontro Surpresa" 
                  scenario="Vocês estão em um encontro ou bar e ele te solta um desafio brincando: 'Você parece ser daquelas que dá muito trabalho...'."
                  options={[
                    { id: 'a', text: 'Ficar na defensiva: "Claro que não! Sou super de boa, odeio brigar."', type: 'erro', feedback: 'Você tentou se provar e se validar! Convencer ele de que você é "fácil de lidar" destruiu o mistério instantaneamente.' },
                    { id: 'b', text: 'Rir, sustentar o olhar por 3s e dizer num tom baixo: "Você não faz ideia... Mas não acho que você aguentaria o tranco."', type: 'acerto', feedback: 'Você aceitou o desafio, devolveu a provocação de forma lúdica e acendeu o instinto caçador dele. O vício começa no jogo de cintura!' },
                    { id: 'c', text: 'Ficar ofendida: "Como assim? Não gostei do comentário. O que vc quis dizer?"', type: 'erro', feedback: 'Militância desnecessária! A incapacidade de lidar com provocações divertidas mata a tensão sexual. Você pesou o clima sem necessidade real.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}

              {currentPage === 'workbook_ex3' && (
                <InteractiveQuiz 
                  title="O Limite do Detox" 
                  scenario="Sexta ele sumiu completamente. Sábado 20h da noite, ele manda do nada: 'O que vai fazer hj à noite?'"
                  options={[
                    { id: 'a', text: 'Desmarcar a série que ia ver ou cancelar os planos para ir ver ele.', type: 'erro', feedback: 'Plano de Resgate! Aceitar encontros de última hora como conveniente ensina a ele que seu tempo não tem nenhum valor.' },
                    { id: 'b', text: 'Cobrar: "Nossa, você sumiu ontem inteiro e me chama agora? Hoje vou sair com as amigas, desculpa."', type: 'erro', feedback: 'Carência Disfarçada! Cobrar satisfação sem compromisso só afasta. Reclamar mostra que você esteve pensando nisso o tempo todo.' },
                    { id: 'c', text: 'Não responder na hora, depois responder gentil: "Programação fechada por aqui! rs. Mas aproveite seu sábado!"', type: 'acerto', feedback: 'Inacessível, resolvida e fina. Delicadamente você disse NÃO sem drama. Na mente dele: "Putz, por que não chamei ela antes?"' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}

                            {currentPage === 'workbook_ex4' && (
                <InteractiveQuiz 
                  title="O Elogio Físico" 
                  scenario="Vocês ainda estão se conhecendo. Você posta uma foto arrumada e ele responde o story dizendo: 'Que corpo maravilhoso, delícia'."
                  options={[
                    { id: 'a', text: 'Tentar disfarçar o desconforto e responder fofa: "Obrigada rsrs 🙈"', type: 'erro', feedback: 'O Erro da Passividade! Você aceitou ser sexualizada antes do tempo só para não criar atrito. Ele já viu que pode cruzar a linha do respeito e vc não vai se impor.' },
                    { id: 'b', text: 'Ser moralista: "Que falta de respeito. Não te dei essa intimidade."', type: 'erro', feedback: 'Dramática e Reativa! Fez um escândalo e agiu de forma pesada. Você perde a leveza e passa a energia de "difícil de lidar".' },
                    { id: 'c', text: 'Ignorar a mensagem ou responder quebrando o clima: "Hahaha as luzes desse restaurante operam milagres."', type: 'acerto', feedback: 'Aura Magnética! Vc desconsiderou completamente o elogio barato. Ao não recompensar a fala sexual com validação, vc ensina como ele DEVE se comunicar com você.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex5' && (
                <InteractiveQuiz 
                  title="A Exposição no Story" 
                  scenario="Vocês saíram, foi bom, e depois ele não mandou mensagem. Mas ele visualiza TODOS os seus stories. E hoje curtiu um deles com um 🔥."
                  options={[
                    { id: 'a', text: 'Aproveitar a brecha para conversar: "E aí sumido, tudo bem? 🔥"', type: 'erro', feedback: 'A Ganhadora da Migalha! Mulheres comuns pegam qualque migalha de atenção como desculpa pra correr atrás. Vc validou que ele não precisa de esforço para te ter.' },
                    { id: 'b', text: 'Postar uma indireta no próximo story sobre homens que só enrolam.', type: 'erro', feedback: 'Erro Crasso! Indiretas sempre gritam "eu me importo DEMAIS com o fato de você não me escolher".' },
                    { id: 'c', text: 'Nenhuma ação. Curtir a curtida e continuar postando a vida incrível que vc tem.', type: 'acerto', feedback: 'A Cura pela Omissão! Curtida de story não é conversa. Se ele quer seu tempo, ele precisa articular frases e montar um encontro. Fica o vácuo.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex6' && (
                <InteractiveQuiz 
                  title="O Cancelamento" 
                  scenario="Faltam 2 horas para o encontro. Ele manda: 'Surgiu um imprevisto tenso no trabalho, não vou conseguir ir hoje... desculpa!'."
                  options={[
                    { id: 'a', text: 'Cobrar e dramatizar: "Poxa, eu já tava toda arrumada, vc não podia ter avisado antes?"', type: 'erro', feedback: 'Reatividade Total. Vc demonstrou que seu dia arruinou porque ele desmarcou, entregando um poder absurdo nas mãos dele.' },
                    { id: 'b', text: 'Acertar rápido demais: "Sem problemas, a gente marca amanhã então? Que dia vc pode?"', type: 'erro', feedback: 'Ansiedade por Reagendamento. Ele acabou de errar com você, não é sua função facilitar a vida dele pra ele te ver de novo.' },
                    { id: 'c', text: 'Atrasar e esfriar: Duas horas depois responder: "Sem problemas! Bons trabalhos por aí ✨"', type: 'acerto', feedback: 'Indiferença Brutal (e Elegante). Vc mostrou que vc tem vida. Não tentou remarcar. O peso de recalcular tudo volta totalmente para o colo dele.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex7' && (
                <InteractiveQuiz 
                  title="O Retorno do Fantasma" 
                  scenario="Ele sumiu por 1 mês (ghosting). No domingo à noite chuvoso, a notificação aparece: 'Oi... lembrei de vc hoje, como estão as coisas?'."
                  options={[
                    { id: 'a', text: 'Ignorar totalmente a mensagem (Deixar no Visto).', type: 'acerto', feedback: 'Aura Magnética Puríssima! A melhor mensagem para quem SOME é o silêncio. Vc bloqueia as energias sugadoras da sua vida e protege sua paz mental.' },
                    { id: 'b', text: 'Tentar inflar o ego dando o troco: "Quem é? Esqueci de salvar o número."', type: 'erro', feedback: 'A vingancinha barata. Quem esquece o nome não faz piada com isso. Na mente dele tá claro: vc tentou fingir desinteresse pq ficou machucada.' },
                    { id: 'c', text: 'Cair e testar: "Nossa o desaparecido apareceu... tudo e vc?"', type: 'erro', feedback: 'O Troféu da Carência! Aceitou quem não te valorizou na primeira, provando que ele pode fazer o mesmo sempre que quiser.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex8' && (
                <InteractiveQuiz 
                  title="O Convite Precoce" 
                  scenario="Primeiro encontro num barzinho. O clima tá incrível. Às 23h ele fala: 'Vamos ali pra minha casa tomar um vinho e ver algo... Mais calmo'."
                  options={[
                    { id: 'a', text: 'Ir, porque está com medo de ele "esfriar" se não tiver sexo no primeiro encontro.', type: 'erro', feedback: 'Insegurança Crítica. Ceder seus princípios por terror de rejeição é a forma mais fácil de um homem decifrar e enjoar do que era "conquistável".' },
                    { id: 'b', text: 'Ficar moralista: "Tá louco? No primeiro dia? Eu não sou essas mulheres qq coisa."', type: 'erro', feedback: 'Dramatizando Limites. Precisa mesmo de um discurso? Mostra que vc não tá acostumada a impor limites.' },
                    { id: 'c', text: 'Sorrir, pegar a bolsa e falar: "Poxa a minha cota de diversão foi ótima hoje, vou indo. Chama o uber?"', type: 'acerto', feedback: 'A Recusa que Vicia! Ele toma o "não" mais charmoso da vida. Vc não critica ele, apenas dita a sua regra. E de repente, ele PRECISA ter um 2º encontro com vc.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex9' && (
                <InteractiveQuiz 
                  title="Ciúmes Sem Status" 
                  scenario="Vocês só ficam (sem compromisso). Ele te vê cumprimentando outro cara de longe, e solta: 'Epa, quem é o bonitão ali? Já me trocou?'"
                  options={[
                    { id: 'a', text: 'Explicar rapidamente com medo: "Não, imagina! É só um colega antigo de trabalho."', type: 'erro', feedback: 'Se Desesperando pra Dar Satisfação! Vcs nem namoram e vc já tá operando como submissa de exclusividade. Vc abaixa seu valor.' },
                    { id: 'b', text: 'Rir charmosamente e responder: "É, eu tenho os meus contatos... rs."', type: 'acerto', feedback: 'Tiro de Tensão Sexual! Você não negou nem afirmou. Essa pequena "pulga atrás da orelha" ativa o estado de competição territorial da biologia masculina.' },
                    { id: 'c', text: 'Cobrar exclusividade na hora: "Ih ciúmes? A gente nem tem nada ainda!"', type: 'erro', feedback: 'Forçar Checkpoint! Usar o momento lúdico pra cobrar o lance da relação... Você pesou o ambiente sem precisar.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex10' && (
                <InteractiveQuiz 
                  title="O Bom Dia Automático" 
                  scenario="É quarta-feira. Ele manda só um: 'Bom diaaa ☀️' solto, pelo zap. Sem puxar um assunto de verdade há 3 dias."
                  options={[
                    { id: 'a', text: 'Responder em looping: "Bom diaaa ☀️ tudo bem por aí também?"', type: 'erro', feedback: 'A Manutenção da Banalidade. Vc acaba sendo apenas "O robô de carinho" da rotina dele. Nada de novo, nada de desejo, zero vício criado.' },
                    { id: 'b', text: 'Visualizar, não responder por 8h, depois falar: "Foi mal, dia corrido".', type: 'erro', feedback: 'Falso Detox Espiritual. Jogar pra demorar só por demorar é imaturo, e ele quase sempre percebe o teatrinho.' },
                    { id: 'c', text: 'Nenhuma curtição debaixo de teto. "Bom dia! Como tá sua Quarta? Aqui começou uma correria bizarra, depois nos falamos!"', type: 'acerto', feedback: 'O Ponto Final Proposto! Vc foi educada, finalizou a prosa antes que rolasse tédio e estabeleceu que seu tempo vale ouro.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex11' && (
                <InteractiveQuiz 
                  title="A Observação Clandestina" 
                  scenario="Ele não puxa assunto no WhatsApp há uma semana. Mas está sempre online lá e vê absolutamente TUDO que você posta nos stories no minuto que sai."
                  options={[
                    { id: 'a', text: 'Parar de postar nos stories pra ele parar de ver e sentir curiosidade.', type: 'erro', feedback: 'Adaptando a sua vida a ele? Errado! Restringir quem você é para mexer com o relógio de um cara indica fraqueza grave de prioridades.' },
                    { id: 'b', text: 'Postar uma foto muito insinuante (uma "isca") propositalmente só para forçar uma quebra do gelo.', type: 'erro', feedback: 'O Desespero Tático. Se vc não atrai sem usar o corpo descaradamente pra forçar um diálogo, vc perde totalmente o respeito de longo prazo dele.' },
                    { id: 'c', text: 'Continuar a sua vida épica. Fazer zero contato e ignorar completamente as estatísticas de quem olhou o seu story.', type: 'acerto', feedback: 'Magnético de Berço. Assistidor não é jogador. Quem vê story não tem mérito para conversar. Deixe a confusão instalar na mente dele!' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex12' && (
                <InteractiveQuiz 
                  title="A Síndrome da Psicóloga" 
                  scenario="Num vinho legal, do nada ele emburra numa memória e fala de como a Ex dele destruiu a auto-estima dele no passado. Fica monossilábico."
                  options={[
                    { id: 'a', text: 'Tentar animá-lo, sendo fofa e se esforçando: "Nossa que horror... vc é tão legal, ela não sabia o que perdia."', type: 'erro', feedback: 'A Competição Tóxica. Vc se diminuiu a conselheira, e virou um "Ombro amigo" comparativo. Ele não tem libido com a analista dele.' },
                    { id: 'b', text: 'Criticar e cobrar postura: "Estamos num date super legal e você vai falar dela aqui?"', type: 'erro', feedback: 'Excesso de peso. Agir como mãe dando bronca em público causa repulsa e mata a fluidez da noite.' },
                    { id: 'c', text: 'Se afastar emocionalmente e deixar morrer: "Putz, complicado." Levantar e ir ao banheiro ou ver uma música no celular.', type: 'acerto', feedback: 'Retirada de Energia Estratégica! Vc pune comportamentos ruins no date retirando a sua PRESENÇA. Ele vai notar a quebra e voltar a focar em vc para reconquistar a luz.' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'workbook_ex13' && (
                <InteractiveQuiz 
                  title="A Pressa Biológica (D.R precoce)" 
                  scenario="Vocês estão saindo há 3 meses. Tudo perfeito, mas NADA dele pedir o namoro sério. Hoje as amigas começaram a te botar no terror querendo que vc aja."
                  options={[
                    { id: 'a', text: 'Ter aquela D.R (Discutir Relação): "A gente tá num rolo, me sinto desvalorizada... O que nós somos?"', type: 'erro', feedback: 'A Bomba de Carência. Colocar um homem contra a parede forçando definições destrói o desejo de longo prazo dele querer pedir orgulhosamente.' },
                    { id: 'b', text: 'Ficar fria sem motivo e começar a parar de abraçá-lo ou tratá-lo bem como punição oculta.', type: 'erro', feedback: 'O Gelo Imaturo. Ele não é adivinho, só vai achar q vc é desequilibrada ou perdeu de vez o interesse, e vai sumir de vez.' },
                    { id: 'c', text: 'Recuar TUDO discretamente. Demorar mais, tirar ele da sua Sexta-feira sagrada e começar a dar brechas para você existir lá fora.', type: 'acerto', feedback: 'Espaço Estrutural Pleno! Se não há exclusividade de compromisso verbalizada, não há exclusosividade de tempo da sua parte. O medo real de te perder sem rótulos fará ele agilizar o próprio lado!' }
                  ]}
                  onPrev={prevPage}
                  onNext={nextPage}
                />
              )}
              {currentPage === 'conclusion' && (

                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-accent">
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="eyebrow mb-0">Recapitulando</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      Agora é <br />
                      <span className="text-brand-secondary font-serif italic font-normal text-5xl md:text-6xl text-brand-accent mt-2 block">Com Você</span>
                    </h2>
                  </header>

                  <section className="space-y-10">
                    <p className="text-2xl text-white/80 font-light leading-relaxed">
                      Se você chegou até aqui, já entendeu algo que muitas nunca percebem: <span className="text-brand-accent font-serif italic text-3xl">Não é sobre fazer mais. É sobre fazer diferente.</span>
                    </p>

                    <div className="na-pratica !p-10 text-center space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-brand-accent font-black uppercase tracking-widest text-sm">O Manifesto da Mulher Magnética</h4>
                        <p className="text-xl text-white/80 leading-relaxed italic">
                          "Eu não imploro por atenção. Eu ocupo o centro do meu mundo. Onde eu passo, deixo rastro, não apenas pegadas. O desejo é o reflexo da minha própria valorização."
                        </p>
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <Crown className="w-16 h-16 text-brand-accent mx-auto mb-6" />
                        <h3 className="text-4xl font-serif italic text-white mb-4">Você é a Dona do Jogo.</h3>
                        <p className="text-white/40 max-w-md mx-auto mb-10">
                          Todo o conhecimento que você adquiriu nestes capítulos agora faz parte da sua aura. Aplique com calma, com intenção e, acima de tudo, para o seu próprio prazer de ser quem você é.
                        </p>
                        <button 
                          onClick={() => nextPage()}
                          className="btn-reader !px-12 !py-5 shadow-premium"
                        >
                          Acessar Bônus Especiais <ArrowRight className="w-4 h-4 ml-2 inline"/>
                        </button>
                      </div>
                    </div>
                  </section>


                  <div className="pt-12 flex justify-between items-center text-white/20 uppercase tracking-widest text-[10px] font-bold">
                    <span>© {new Date().getFullYear()} Magnetismo Feminino</span>
                  </div>
                </div>
              )}

              {currentPage === 'bonus_dossie' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-[#8A3A3A]">
                      <Lock className="w-5 h-5" />
                      <span className="eyebrow !text-[#8A3A3A] mb-0">Acesso Restrito</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      O Arquivo <br />
                      <span className="text-white/40 font-serif italic text-5xl md:text-6xl mt-2 block">Secreto</span>
                    </h2>
                  </header>

                  <section className="space-y-8">
                    <p className="text-xl text-white/80 font-light leading-relaxed">
                      Mensagens prontas, desenhadas pela psicologia do magnetismo. Use apenas quando precisar de um resgate cirúrgico.
                    </p>

                    <DossierMessage 
                      title="O Descarte Lúdico (Pós Ghosting)"
                      scenario="Ele sumiu por dias e mandou uma mensagem querendo puxar assunto de forma normal."
                      content={"Que surpresa rs! Achei que você tivesse se mudado de país. \\nTudo ótimo por aqui e com vc?"}
                    />

                    <DossierMessage 
                      title="A Recusa Premium"
                      scenario="Ele te convida para sair na sexta-feira às 19h (na mesma noite de última hora)."
                      content={"Poxa que pena, adoro esse lugar! Mas a minha sexta já está completamente fechada. Quem sabe organizando antes a gente não consegue na próxima? Aproveita a noite!"}
                    />

                    <DossierMessage 
                      title="O Balde de Água Fria"
                      scenario="Ele começou a mandar mensagens sexuais ou quentes antes de ter intimidade para isso."
                      content={"Você tem uma vibe super legal, mas eu sou beeeem mais analógica pra essas coisas. Zero clima por texto hahaha."}
                    />

                    <DossierMessage 
                      title="Saindo por Cima (Sem Briga)"
                      scenario="Vocês ficaram, foi ruim ou ele mancou feio e você quer cortar contato sem fazer textão."
                      content={"Oii! Esses dias foram super legais e você é incrível, mas refleti aqui e nossas dinâmicas não combinam muito na prática. De qualquer forma, torço super pelo seu sucesso ! Te cuida ❤️"}
                    />

                    <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                      <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-normal">
                        <ChevronLeft className="w-5 h-5" /> Voltar
                      </button>
                      <button onClick={nextPage} className="btn-reader !px-8 !py-4">
                        Próximo <ArrowRight className="w-4 h-4 ml-2 inline"/>
                      </button>
                    </div>
                  </section>
                </div>
              )}

              {currentPage === 'bonus_detox' && (
                <div className="space-y-12">
                  <header className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-secondary">
                      <Zap className="w-5 h-5" />
                      <span className="eyebrow !text-brand-secondary mb-0">Missão de Choque</span>
                    </div>
                    <h2 className="display-title !text-5xl">
                      Detox de <br />
                      <span className="text-brand-accent font-serif italic text-5xl md:text-6xl mt-2 block">7 Dias</span>
                    </h2>
                  </header>

                  <section className="space-y-8">
                    <p className="text-xl text-white/80 font-light leading-relaxed">
                      Sua dose de abstinência para recuperar a coroa. Marque os requisitos de cada dia conforme for vencendo as etapas.
                    </p>

                    <DetoxChallenge onComplete={nextPage} />
                    
                    <div className="pt-8 flex justify-between items-center">
                      <button onClick={prevPage} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors uppercase tracking-widest text-xs font-normal">
                        <ChevronLeft className="w-5 h-5" /> Voltar
                      </button>
                    </div>
                  </section>
                </div>
              )}

              {currentPage === 'certificado' && (
                <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-10 py-12">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full" />
                    <Crown className="w-32 h-32 md:w-48 md:h-48 text-brand-accent relative z-10 mx-auto" />
                  </motion.div>

                  <div className="space-y-6 max-w-xl mx-auto">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-sm mb-4">Ascensão Concluída</h4>
                      <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-6">Você é Soberana.</h2>
                      <p className="text-xl text-white/60 leading-relaxed font-light">
                        Você concluiu todos os capítulos, superou o Teste de Fogo e sobreviveu ao Detox de 7 dias. Seu magnetismo agora não é sorte, é <strong className="text-brand-accent">Design</strong>.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                    className="pt-12 w-full max-w-sm mx-auto"
                  >
                    <button 
                      onClick={() => setCurrentPage('cover')}
                      className="w-full py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-white/60 hover:text-white uppercase tracking-widest text-xs font-bold"
                    >
                      Voltar ao Início
                    </button>
                  </motion.div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-bg/80 backdrop-blur-md border-t border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-6">
          <div className="flex-1 h-px bg-white/10 relative">
            <motion.div 
              initial={false}
              animate={{ width: `${((currentIndex + 1) / pages.length) * 100}%` }}
              className="absolute top-0 left-0 h-full bg-brand-accent shadow-premium"
            />
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
            {currentIndex + 1} / {pages.length}
          </span>
        </div>
      </div>
    </div>
  );
}
