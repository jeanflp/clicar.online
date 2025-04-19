'use client';

import Link from 'next/link';
import { Logo } from '../components/Logo';
import { motion } from 'framer-motion';
import { Particles } from '../components/Particles';

export default function Precos() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Particles />
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Top Bar */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b border-yellow-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Logo className="w-40" />
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/#recursos" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Recursos
                </Link>
                <Link href="/precos" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Preços
                </Link>
                <Link 
                  href="https://discord.gg/8P2y9JhUdh" 
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

      {/* Pricing Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl leading-tight px-2 sm:px-0"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">Planos Simples</span> <span className="inline-block">e Transparentes</span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Escolha o plano que melhor se adapta às suas necessidades
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Trial Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-100 shadow-xl shadow-yellow-100/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Teste Gratuito</h3>
                  <p className="text-gray-600">Experimente por 3 dias</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-800">R$ 0</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso a 2 perfis simultâneos
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sincronização de cliques
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte básico
                </li>
              </ul>
              <Link href="/em-breve">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-yellow-200/50"
                >
                  Começar Agora
                </motion.button>
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-gradient-to-b from-yellow-50/50 to-white/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200 shadow-xl shadow-yellow-100/20 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Profissional</h3>
                  <p className="text-gray-600">Para bons apostadores</p>
                </div>
                <div className="text-right">
                  <motion.p 
                    className="text-lg text-red-400 line-through decoration-red-400 decoration-2 mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    R$ 69,90/mês
                  </motion.p>
                  <div className="flex items-center justify-end">
                    <motion.div 
                      className="flex items-baseline"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <span className="text-3xl font-bold text-gray-800">R$ 35,90</span>
                      <span className="text-gray-600 ml-1">/mês</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso a 10 perfis simultâneos
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sincronização remota de cliques
                    <span className="ml-2 bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">NOVO</span>
                  </div>
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sincronização de cliques
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte prioritário 24/7
                </li>
              </ul>
              <Link href="/em-breve">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-yellow-200/50"
                >
                  Assinar Agora
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-yellow-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
          >
            Perguntas Frequentes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 shadow-xl shadow-yellow-100/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Como funciona a sincronização remota?</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa tecnologia permite sincronizar cliques entre diferentes dispositivos de forma segura e eficiente, 
                mantendo todas as suas contas perfeitamente alinhadas em tempo real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 shadow-xl shadow-yellow-100/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600 leading-relaxed">
                Sim, você pode cancelar sua assinatura a qualquer momento. Não há contratos de longo prazo 
                ou taxas de cancelamento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 shadow-xl shadow-yellow-100/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">O software é seguro?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutamente. Utilizamos tecnologia anti-detecção avançada e criptografia de ponta a ponta 
                para garantir a segurança de suas contas e dados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-100 shadow-xl shadow-yellow-100/20"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Preciso de conhecimento técnico?</h3>
              <p className="text-gray-600 leading-relaxed">
                Não. Nossa interface é intuitiva e fácil de usar. Você receberá todas as instruções 
                necessárias para começar rapidamente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 