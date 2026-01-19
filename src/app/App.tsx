import { useState } from 'react';
import { Mail, Phone, Facebook, Instagram, Code2, Smartphone, Zap, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'sq' | 'mk';

const translations = {
  en: {
    enter: "Enter",
    role: "Web Developer",
    hero_sub: "Building fast, modern websites that make an impact",
    start_project: "Start a Project",
    call_me: "Give Me a Call",
    what_i_do: "What I Do",
    custom_title: "Custom Development",
    custom_desc: "Websites built from scratch to match your exact requirements. We use the latest technologies to ensure your site is scalable, secure, and tailored to your specific business needs.",
    custom_short: "Websites built from scratch to match your exact requirements",
    resp_title: "Responsive Design",
    resp_desc: "Perfect experience on mobile, tablet, and desktop. Your website will adapt seamlessly to any screen size, ensuring a consistent and engaging user experience across all devices.",
    resp_short: "Perfect experience on mobile, tablet, and desktop",
    perf_title: "Performance",
    perf_desc: "Fast loading times and optimized for search engines. We prioritize speed and efficiency, helping your site rank higher and keep visitors engaged with lightning-fast interactions.",
    perf_short: "Fast loading times and optimized for search engines",
    get_in_touch: "Get In Touch",
    email: "Email",
    phone: "Phone",
    copyright: "© 2025 Sabri Ibrahimi"
  },
  sq: {
    enter: "Hyni",
    role: "Zhvillues Web",
    hero_sub: "Ndërtimi i faqeve të shpejta dhe moderne që lënë mbresa",
    start_project: "Fillo një Projekt",
    call_me: "Më Telefono",
    what_i_do: "Çfarë Bëj",
    custom_title: "Zhvillim i Personalizuar",
    custom_desc: "Faqe të ndërtuara nga e para për t'iu përshtatur kërkesave tuaja. Ne përdorim teknologjitë më të fundit për të siguruar që faqja juaj të jetë e shkallëzueshme, e sigurt dhe e përshtatur për nevojat tuaja.",
    custom_short: "Faqe të ndërtuara nga e para për t'iu përshtatur kërkesave tuaja",
    resp_title: "Dizajn Reagues",
    resp_desc: "Përvojë e përkryer në celular, tablet dhe desktop. Faqja juaj do të përshtatet pa probleme në çdo madhësi ekrani, duke siguruar një përvojë të qëndrueshme.",
    resp_short: "Përvojë e përkryer në celular, tablet dhe desktop",
    perf_title: "Performanca",
    perf_desc: "Kohë të shpejta ngarkimi dhe optimizim për motorët e kërkimit. Ne i japim përparësi shpejtësisë, duke ndihmuar faqen tuaj të renditet më lart.",
    perf_short: "Kohë të shpejta ngarkimi dhe optimizim për motorët e kërkimit",
    get_in_touch: "Më Kontaktoni",
    email: "Email",
    phone: "Telefon",
    copyright: "© 2025 Sabri Ibrahimi"
  },
  mk: {
    enter: "Влези",
    role: "Веб Дизајнер",
    hero_sub: "Изработка на брзи, модерни веб-сајтови кои оставаат впечаток",
    start_project: "Започни Проект",
    call_me: "Јави ми се",
    what_i_do: "Што работам",
    custom_title: "Прилагоден Развој",
    custom_desc: "Веб-сајтови изградени од нула за да одговараат на вашите барања. Користиме најнови технологии за да обезбедиме вашиот сајт да биде скалабилен и безбеден.",
    custom_short: "Веб-сајтови изградени од нула за да одговараат на вашите барања",
    resp_title: "Респонзивен Дизајн",
    resp_desc: "Совршено искуство на мобилен, таблет и десктоп. Вашиот веб-сајт ќе се прилагоди беспрекорно на секоја големина на екран.",
    resp_short: "Совршено искуство на мобилен, таблет и десктоп",
    perf_title: "Перформанси",
    perf_desc: "Брзо вчитување и оптимизација за пребарувачи. Даваме приоритет на брзината, помагајќи му на вашиот сајт да се рангира повисоко.",
    perf_short: "Брзо вчитување и оптимизација за пребарувачи",
    get_in_touch: "Контактирај ме",
    email: "Е-маил",
    phone: "Телефон",
    copyright: "© 2025 Sabri Ibrahimi"
  }
};

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  const services = [
    {
      Icon: Code2,
      title: t.custom_title,
      desc: t.custom_desc,
      shortDesc: t.custom_short
    },
    {
      Icon: Smartphone,
      title: t.resp_title,
      desc: t.resp_desc,
      shortDesc: t.resp_short
    },
    {
      Icon: Zap,
      title: t.perf_title,
      desc: t.perf_desc,
      shortDesc: t.perf_short
    }
  ];

  const handleEnter = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsEntered(true);
      setIsGlitching(false);
    }, 800);
  };

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${isGlitching ? 'animate-glitch' : ''}`}>
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0) }
          10% { transform: translate(-5px, 5px) }
          20% { transform: translate(-5px, -5px) }
          30% { transform: translate(5px, 5px) }
          40% { transform: translate(5px, -5px) }
          50% { transform: translate(-5px, 5px) }
          60% { transform: translate(-5px, -5px) }
          70% { transform: translate(5px, 5px) }
          80% { transform: translate(5px, -5px) }
        }
        .animate-glitch {
          animation: glitch 0.8s ease-in-out;
        }
      `}</style>

      {/* Language Switcher - Only show after entering */}
      {isEntered && (
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4 text-sm md:text-base">
          <button
            onClick={() => setLang('en')}
            className={`font-semibold hover:text-white transition-colors ${lang === 'en' ? 'text-white' : 'text-gray-500'}`}
          >
            EN
          </button>
          <span className="text-gray-700">|</span>
          <button
            onClick={() => setLang('sq')}
            className={`font-semibold hover:text-white transition-colors ${lang === 'sq' ? 'text-white' : 'text-gray-500'}`}
          >
            SQ
          </button>
          <span className="text-gray-700">|</span>
          <button
            onClick={() => setLang('mk')}
            className={`font-semibold hover:text-white transition-colors ${lang === 'mk' ? 'text-white' : 'text-gray-500'}`}
          >
            MK
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="welcome"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
            className="h-screen flex items-center justify-center px-6"
          >
            <div className="text-center space-y-12">
              <div>
                <h1 className="text-7xl md:text-9xl font-bold mb-4">SI</h1>
                <p className="text-xl text-gray-400">Sabri Ibrahimi</p>
              </div>

              <button
                onClick={handleEnter}
                className="group relative px-12 py-5 bg-white text-slate-950 rounded-lg font-semibold text-xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">{t.enter}</span>
              </button>
            </div>
          </motion.div>
        ) : selectedService === null ? (
          <motion.div
            key="main"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)", transition: { duration: 0.5 } }}
            variants={containerVariants}
            className="min-h-screen"
          >
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-32">

              {/* Hero Section */}
              <motion.div variants={itemVariants} className="space-y-12 flex flex-col items-center text-center">
                <div className="space-y-6 w-full flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-0.5 bg-white"></div>
                    <span className="text-sm tracking-widest uppercase text-gray-400">{t.role}</span>
                    <div className="w-12 h-0.5 bg-white"></div>
                  </div>

                  <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                    Sabri<br />Ibrahimi
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                    {t.hero_sub}
                  </p>
                </div>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:sabriibrahimi73@gmail.com"
                    className="px-8 py-4 bg-white text-slate-950 rounded font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {t.start_project}
                  </a>

                  <a
                    href="tel:+38970954316"
                    className="px-8 py-4 border border-gray-700 rounded font-semibold hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    {t.call_me}
                  </a>
                </motion.div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-12 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold">{t.what_i_do}</h2>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      onClick={() => handleServiceClick(index)}
                      className="space-y-4 group flex flex-col items-center text-center cursor-pointer p-6 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-colors">
                        <service.Icon size={32} strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold">{t.get_in_touch}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <a
                    href="mailto:sabriibrahimi73@gmail.com"
                    className="group p-8 border border-gray-800 rounded hover:border-white transition-colors flex flex-col items-center"
                  >
                    <Mail size={32} className="mb-4" />
                    <div className="text-xl font-semibold mb-2">{t.email}</div>
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      sabriibrahimi73@gmail.com
                    </div>
                  </a>

                  <a
                    href="tel:+38970954316"
                    className="group p-8 border border-gray-800 rounded hover:border-white transition-colors flex flex-col items-center"
                  >
                    <Phone size={32} className="mb-4" />
                    <div className="text-xl font-semibold mb-2">{t.phone}</div>
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      +389 70 954 316
                    </div>
                  </a>
                </div>

                <div className="flex gap-6 justify-center">
                  <a
                    href="https://www.facebook.com/sabriibrahimii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-gray-800 rounded flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/sabri.ibrahimii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-gray-800 rounded flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </motion.div>

              {/* Footer */}
              <div className="pt-12 border-t border-gray-800 text-gray-500 text-center">
                {t.copyright}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="service-detail"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="max-w-4xl mx-auto space-y-12 text-center relative w-full">
              <button
                onClick={handleBack}
                className="absolute top-0 left-0 p-4 rounded-full border border-gray-800 hover:bg-white hover:text-slate-950 transition-colors z-10"
              >
                <ArrowLeft size={24} />
              </button>

              <div className="pt-24 md:pt-0 space-y-8 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center mb-4"
                >
                  {(() => {
                    const Icon = services[selectedService].Icon;
                    return <Icon size={64} className="text-white" strokeWidth={1.5} />;
                  })()}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold"
                >
                  {services[selectedService].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
                >
                  {services[selectedService].desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
