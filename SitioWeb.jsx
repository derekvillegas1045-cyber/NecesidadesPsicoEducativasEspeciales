import React, { useState } from 'react';
import { BookOpen, Users, Brain, MapPin, ChevronRight, Menu, X, Heart, GraduationCap, Info } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('definicion');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Definición', href: '#definicion' },
    { name: 'Contexto México', href: '#mexico' },
    { name: 'Rol del Psicólogo', href: '#rol' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">PsicoEduca MX</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="inicio" className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Necesidades Psicoeducativas Especiales
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl">
              Una mirada inclusiva desde la psicología para transformar barreras en oportunidades de aprendizaje en el contexto mexicano.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#definicion" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors flex items-center shadow-lg">
                Leer Introducción <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#mexico" className="bg-indigo-700 bg-opacity-50 text-white border border-indigo-400 px-6 py-3 rounded-lg font-bold hover:bg-opacity-70 transition-colors">
                Contexto Legal
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </div>

      {/* Introduction Section */}
      <section id="definicion" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Introducción</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Qué son las NPE?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Más allá de la discapacidad: un enfoque centrado en las barreras del entorno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Info className="mr-2 text-indigo-500" /> Definición Conceptual
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Las <strong>Necesidades Psicoeducativas Especiales (NPE)</strong>, a menudo referidas como Barreras para el Aprendizaje y la Participación (BAP), no son una característica intrínseca del alumno.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Surgen de la interacción entre el estudiante y su contexto (escolar, familiar, social). Un alumno tiene una NPE cuando presenta dificultades mayores que el resto de sus compañeros para acceder a los aprendizajes, requiriendo <strong>ajustes razonables</strong> o recursos adicionales para progresar.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-slate-900">No es solo "Discapacidad"</h4>
                <p className="mt-2 text-base text-slate-500">
                  Incluye discapacidad (motriz, intelectual, sensorial), pero también trastornos del desarrollo, aptitudes sobresalientes, o situaciones psicosociales y emocionales.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-slate-900">Enfoque Humanista</h4>
                <p className="mt-2 text-base text-slate-500">
                  Desde la psicología, nos enfocamos en el potencial de desarrollo y en la salud emocional, no en la etiqueta diagnóstica como limitante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mexico Context Section */}
      <section id="mexico" className="bg-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contexto Nacional</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Las NPE en México
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              Marco institucional y la transición de la integración a la inclusión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Art. 3° Constitucional</h3>
                <p className="text-slate-600 text-sm">
                  Establece que la educación debe ser <strong>inclusiva</strong>. El sistema educativo mexicano está obligado a eliminar las barreras para el aprendizaje y la participación.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">USAER y CAM</h3>
                <p className="text-slate-600 text-sm">
                  <strong>USAER:</strong> Unidades de apoyo que asisten dentro de escuelas regulares.<br/>
                  <strong>CAM:</strong> Centros de Atención Múltiple para formación laboral y educativa en casos que requieren ajustes significativos.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Nueva Escuela Mexicana</h3>
                <p className="text-slate-600 text-sm">
                  El modelo actual promueve el reconocimiento de la diversidad no como un problema, sino como una característica inherente a la humanidad que enriquece el aula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Role Section */}
      <section id="rol" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-6">El Rol del Psicólogo</h2>
              <p className="text-indigo-200 text-lg mb-8">
                Nuestra intervención no es solo "diagnosticar", sino construir puentes entre las necesidades del alumno y las metodologías de enseñanza.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="ml-4 text-indigo-100"><strong>Evaluación Psicopedagógica:</strong> Identificar fortalezas, estilos de aprendizaje y barreras.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="ml-4 text-indigo-100"><strong>Acompañamiento Emocional:</strong> Trabajar la autoestima, autoconcepto y habilidades sociales del alumno.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="ml-4 text-indigo-100"><strong>Orientación Familiar:</strong> Brindar herramientas a padres y cuidadores para el manejo conductual y emocional.</p>
                </li>
              </ul>
            </div>
            
            <div className="relative h-64 lg:h-auto bg-indigo-800 flex items-center justify-center">
              {/* Abstract representation of psychology */}
              <Brain className="h-48 w-48 text-indigo-400 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2" /> PsicoEduca MX
            </h3>
            <p className="text-sm text-slate-400">
              Proyecto Institucional sobre Necesidades Psicoeducativas Especiales.
              Licenciatura en Psicología.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#definicion" className="hover:text-white transition-colors">Definición</a></li>
              <li><a href="#mexico" className="hover:text-white transition-colors">Marco Legal MX</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <p className="text-sm text-slate-400">
              Facultad de Psicología<br />
              México<br />
              contacto@psicoeducamx.edu
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; 2024 Proyecto Institucional NPE. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}