'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { motion } from 'framer-motion';
import { Particles } from './Particles';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

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

export function ClientHome() {
  const { width, height } = useWindowSize();
  const activeUsers = useCountAnimation(100);

  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <Particles />
      
      {/* Top Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Logo className="w-40" />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#recursos" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Recursos
                </Link>
                <Link href="/precos" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Preços
                </Link>
                <Link 
                  href="https://discord.gg/seu-servidor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  Contato
                </Link>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/em-breve" 
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                Entrar
              </Link>
              <Link href="/em-breve">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-lg"
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
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-white to-white"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -right-24 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
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
                className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"
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
                className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Gerencie múltiplas contas com segurança e sincronize seus cliques automaticamente.
                <span className="block mt-4 text-lg text-gray-600">Mais de {activeUsers}+ usuários confiam em nossa plataforma</span>
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/em-breve">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                  >
                    Começar Gratuitamente
                    <span className="block text-sm mt-1 font-normal opacity-90">3 dias grátis • Sem cartão</span>
                  </motion.button>
                </Link>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4 bg-gray-50 shadow-sm px-4 py-2 rounded-full"
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
                  <span className="text-sm font-medium text-gray-700">+{activeUsers} usuários ativos</span>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-yellow-600 text-2xl font-bold">99.9%</div>
                  <p className="text-sm text-gray-600">Sincronização Garantida</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-yellow-600 text-2xl font-bold">24/7</div>
                  <p className="text-sm text-gray-600">Suporte Dedicado</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="text-yellow-600 text-2xl font-bold">100%</div>
                  <p className="text-sm text-gray-600">Seguro</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-700"
          >
            Recursos Exclusivos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Multiperfis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex flex-col transform transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Perfis Múltiplos</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Gerencie várias contas simultaneamente com nossa tecnologia avançada de perfis independentes.</p>
              <div className="mt-auto">
                <Link 
                  href="/recursos" 
                  className="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Sincronização de Cliques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex flex-col transform transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sincronização de Cliques</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Sincronize suas ações em tempo real entre todas as contas com precisão milimétrica.</p>
              <div className="mt-auto">
                <Link 
                  href="/recursos" 
                  className="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Sincronização Remota */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(234, 179, 8, 0.25)",
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-6 border border-yellow-200 shadow-xl flex flex-col transform transition-all duration-200 relative"
            >
              <span className="absolute -top-3 right-6 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">NOVO</span>
              <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-yellow-100 rounded-full opacity-40 blur-xl"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-200 rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-yellow-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Sincronização Remota</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">Permita que outra pessoa gerencie suas contas de qualquer lugar do mundo com total segurança.</p>
              <div className="mt-auto">
                <Link 
                  href="/recursos" 
                  className="text-yellow-700 hover:text-yellow-800 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Segurança Total */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex flex-col transform transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <svg className="w-6 h-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Segurança Total</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Sistema avançado de proteção para manter suas contas seguras e funcionando perfeitamente.</p>
              <div className="mt-auto">
                <Link 
                  href="/recursos" 
                  className="text-yellow-600 hover:text-yellow-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-48 -right-24 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-[400px] h-[400px] -bottom-32 -left-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-700 leading-relaxed py-2">
              Comece a sincronizar agora
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Experimente gratuitamente por 3 dias e descubra como podemos otimizar sua gestão de contas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/em-breve">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Começar Gratuitamente
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
              
              <Link href="/precos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-medium py-4 px-8 rounded-full text-lg transition-colors hover:text-yellow-600 flex items-center gap-2"
                >
                  Ver preços
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Configure em minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-4">
              <Logo className="w-24" />
              <div className="hidden md:flex items-center space-x-4">
                <Link href="#recursos" className="text-xs text-gray-600 hover:text-yellow-600 transition-colors">
                  Recursos
                </Link>
                <Link href="/precos" className="text-xs text-gray-600 hover:text-yellow-600 transition-colors">
                  Preços
                </Link>
                <Link href="/em-breve" className="text-xs text-gray-600 hover:text-yellow-600 transition-colors">
                  Contato
                </Link>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t md:border-t-0 border-gray-200 text-center md:text-left w-full md:w-auto">
              <p className="text-xs text-gray-600">
                © 2024 Clicar.Online. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 