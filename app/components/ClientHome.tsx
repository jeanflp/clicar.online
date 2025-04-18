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
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Particles />
      
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
                <span className="block mt-4 text-lg text-gray-500">Mais de {activeUsers}+ usuários confiam em nossa plataforma</span>
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
                  <span className="text-sm">+{activeUsers} usuários ativos</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-yellow-400 text-4xl font-bold mb-2">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Sincronização Garantida</h3>
              <p className="text-gray-400">Sincronização precisa entre todas as suas contas em tempo real.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-yellow-400 text-4xl font-bold mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Suporte Dedicado</h3>
              <p className="text-gray-400">Equipe especializada disponível para ajudar você a qualquer momento.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-yellow-400 text-4xl font-bold mb-2">100%</div>
              <h3 className="text-xl font-semibold mb-2">Seguro</h3>
              <p className="text-gray-400">Sistema anti-detecção avançado para máxima proteção.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-yellow-400 text-4xl font-bold mb-2">{activeUsers}+</div>
              <h3 className="text-xl font-semibold mb-2">Usuários Ativos</h3>
              <p className="text-gray-400">Uma comunidade crescente que confia em nossa solução.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-4">
              <Logo className="w-24" />
              <div className="hidden md:flex items-center space-x-4">
                <Link href="#recursos" className="text-xs text-gray-400 hover:text-yellow-500 transition-colors">
                  Recursos
                </Link>
                <Link href="/precos" className="text-xs text-gray-400 hover:text-yellow-500 transition-colors">
                  Preços
                </Link>
                <Link href="/em-breve" className="text-xs text-gray-400 hover:text-yellow-500 transition-colors">
                  Contato
                </Link>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t md:border-t-0 border-white/10 text-center md:text-left w-full md:w-auto">
              <p className="text-xs text-gray-500">
                © 2024 Clicar.Online. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 