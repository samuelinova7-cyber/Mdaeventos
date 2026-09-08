import React from 'react';
import { ShieldCheck, Target, Clock, Sparkles, FileText, Network } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-amber-400" />,
      title: 'Planejamento Estratégico & ROI',
      desc: 'Não fazemos apenas eventos bonitos: desenhamos cada momento para gerar autoridade de marca, novos negócios e satisfação dos patrocinadores.',
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Pontualidade Britânica & 0 Imprevistos',
      desc: 'Cronograma mestre de montagem, passagens de som e alinhamento de palestrantes executados com rigor militar.',
    },
    {
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      title: 'Rede de Fornecedores Homologados',
      desc: 'Parcerias consolidadas em Alagoas com as melhores empresas de sonorização, painéis de LED, iluminação cênica, buffet e cenografia.',
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      title: 'Compliance, Contrato & Nota Fiscal',
      desc: 'Segurança contábil e jurídica total para grandes corporações, associações, entidades de classe e órgãos governamentais.',
    },
  ];

  return (
    <section className="relative py-20 bg-[#090d18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por Que a MDE Eventos</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Metodologia Comprovada em Produção Corporativa
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A tranquilidade que a sua diretoria precisa para brilhar no palco enquanto cuidamos de absolutamente tudo nos bastidores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-['Outfit'] text-lg font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
