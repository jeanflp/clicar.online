'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './components/Logo';
import { motion, useMotionValue } from 'framer-motion';

function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentCount = Math.floor(progress * end);
      setCount(Math.min(currentCount, end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return Math.min(count, end);
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: -20,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * (window.innerHeight * 0.7),
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              filter: "blur(0.5px)",
              boxShadow: "0 0 12px rgba(245, 158, 11, 0.6)"
            }}
          />
        ))}
      </div>

      {/* Top Bar */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-amber-200 shadow-lg shadow-amber-100/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Logo className="w-40" />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#recursos" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Recursos
                </Link>
                <Link href="/precos" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Preços
                </Link>
                <Link 
                  href="https://discord.gg/seu-servidor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-500 transition-colors"
                >
                  Contato
                </Link>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/em-breve" 
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                Entrar
              </Link>
              <Link href="/em-breve">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-lg shadow-yellow-200/50"
                >
                  Download
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-yellow-50/30"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -right-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.h1 
                className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2
                }}
              >
                Sincronize suas contas em um clicar
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Gerencie múltiplas contas com segurança e sincronize seus cliques automaticamente.
                <span className="block mt-4 text-lg text-gray-500">Mais de 100 usuários confiam em nossa plataforma</span>
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/em-breve">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-xl shadow-yellow-200/30 transform hover:-translate-y-1"
                  >
                    Começar Gratuitamente
                    <span className="block text-sm mt-1 font-normal opacity-90">3 dias grátis • Sem cartão</span>
                  </motion.button>
                </Link>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4 text-gray-500"
                >
                  <div className="flex -space-x-2">
                    <img 
                      src="/images/avatar-1.png" 
                      alt="Usuário ativo" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={32}
                      height={32}
                    />
                    <img 
                      src="/images/avatar-2.png" 
                      alt="Usuário ativo" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={32}
                      height={32}
                    />
                    <img 
                      src="/images/avatar-3.png" 
                      alt="Usuário ativo" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={32}
                      height={32}
                    />
                    <img 
                      src="/images/avatar-4.png" 
                      alt="Usuário ativo" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="text-sm">+100 usuários ativos</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="container mx-auto px-4 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 bg-gradient-to-br from-white via-amber-50 to-orange-50 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-2xl shadow-amber-200/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    99.9%
                  </motion.div>
                  <span className="text-sm text-gray-500 text-center">Sincronização Garantida</span>
                </div>
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-800 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    24/7
                  </motion.div>
                  <span className="text-sm text-gray-500 text-center">Suporte Dedicado</span>
                </div>
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    100%
                  </motion.div>
                  <span className="text-sm text-gray-500 text-center">Seguro</span>
                </div>
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {useCountAnimation(100)}+
                  </motion.div>
                  <span className="text-sm text-gray-500 text-center">Usuários Ativos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/30 via-white to-white"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Recursos Exclusivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que centenas de usuários escolhem nossa plataforma para gerenciar suas contas com segurança e eficiência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(245, 158, 11, 0.3)" }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200 shadow-xl shadow-amber-100/30 transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-amber-100"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">Perfis Múltiplos</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Gerencie várias contas simultaneamente com total segurança e privacidade.
              </p>
              <div className="mt-6 flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform">
                <Link href="/recursos" className="text-sm font-medium hover:underline">Saiba mais</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(245, 158, 11, 0.3)" }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200 shadow-xl shadow-amber-100/30 transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-amber-100"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">Sincronização de Cliques</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Sincronize automaticamente seus cliques entre todas as contas para maior eficiência.
              </p>
              <div className="mt-6 flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform">
                <Link href="/recursos" className="text-sm font-medium hover:underline">Saiba mais</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(245, 158, 11, 0.3)" }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200 shadow-xl shadow-amber-100/30 transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-amber-100"
            >
              <div className="relative">
                <div className="absolute -top-3 right-0">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                    NOVO
                  </span>
                </div>
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">Sincronização Remota</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Permita que seus perfis sejam sincronizados por outra pessoa, de qualquer lugar, de forma remota.
              </p>
              <div className="mt-6 flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform">
                <Link href="/recursos" className="text-sm font-medium hover:underline">Saiba mais</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(245, 158, 11, 0.3)" }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 border border-amber-200 shadow-xl shadow-amber-100/30 transition-all duration-300 hover:bg-gradient-to-b hover:from-white hover:to-amber-100"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">Segurança Total</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                Tecnologia anti-detecção avançada para manter suas contas seguras e funcionando.
              </p>
              <div className="mt-6 flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform">
                <Link href="/recursos" className="text-sm font-medium hover:underline">Saiba mais</Link>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 via-white to-yellow-50/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative"
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-br from-white via-amber-50 to-orange-50 backdrop-blur-sm rounded-3xl p-12 text-center border border-amber-200 shadow-2xl shadow-amber-200/30"
            whileHover={{ boxShadow: "0 30px 60px rgba(245, 158, 11, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Pronto para começar?
            </motion.h2>
            <motion.p 
              className="text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experimente gratuitamente por 3 dias e descubra como podemos otimizar suas apostas.
            </motion.p>
            <Link href="/em-breve">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg shadow-yellow-200/50"
              >
                Começar Teste Gratuito
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer with enhanced styling */}
      <footer className="bg-gradient-to-b from-amber-50 to-white backdrop-blur-sm border-t border-amber-200 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <Logo className="w-32" />
              <div className="flex items-center space-x-4">
                <Link href="#recursos" className="text-gray-600 hover:text-yellow-500 transition-colors text-sm">
                  Recursos
                </Link>
                <Link href="/precos" className="text-gray-600 hover:text-yellow-500 transition-colors text-sm">
                  Preços
                </Link>
                <Link href="/em-breve" className="text-gray-600 hover:text-yellow-500 transition-colors text-sm">
                  Download
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/seu-servidor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/seu-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a 
                href="mailto:contato@clicar.online" 
                className="text-gray-600 hover:text-yellow-500 transition-colors text-sm"
              >
                contato@clicar.online
              </a>
            </div>
          </div>

          <div className="border-t border-amber-100 mt-3 pt-3 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} clicar.online. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 