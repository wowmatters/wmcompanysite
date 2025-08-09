'use client';
import React, { useState, useEffect } from 'react';
import { Code, Database, Mail, Linkedin, Sun, Moon, Play, Pause, ExternalLink, GlobeLock, Handshake } from 'lucide-react';
import Image from 'next/image';
import { SiteMetaInformation } from '../config/site.meta';

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const headlines = SiteMetaInformation.headlines || [
    'Innovative IT Solutions',
    'Digital Transformation',
    'Technology Excellence',
    'Future-Ready Systems'
  ];

  // Animated typing effect
  useEffect(() => {
    const currentHeadline = headlines[currentTextIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentHeadline.length) {
        setTypingText(currentHeadline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % headlines.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const services = SiteMetaInformation.services ?? [
        {
            title: 'Custom Software Development',
            description: 'Tailored software solutions to meet unique business needs.',
            icon: <Code className="w-8 h-8" />
        }, {
            title: 'Technology Enablement',
            description: 'Embrace the latest in cloud, AI, automation, and more',
            icon: <GlobeLock className="w-8 h-8" />
        }, {
            title: 'Database Management & Analytics',
            description: 'Build Insight-driven decisions, clean data, data monetization for business growth',
            icon: <Database className="w-8 h-8" />
        }, {
            title: 'Managed Services',
            description: 'Comprehensive IT support and management services to ensure smooth operations with proactive monitoring and support',
            icon: <Handshake className="w-8 h-8" />
        }
    ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Healthcare Management System",
      description: "Patient management system with real-time data synchronization",
      tech: "Vue.js, Python, PostgreSQL"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and reporting platform",
      tech: "Angular, .NET Core, SQL Server"
    },
    {
      title: "IoT Monitoring System",
      description: "Industrial IoT sensors monitoring with predictive analytics",
      tech: "React, Python, InfluxDB"
    }
  ];

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-br from-orange-50 to-amber-50 text-gray-800';

  const cardClasses = darkMode
    ? 'bg-gray-800 border-violet-400/30'
    : 'bg-white border-orange-200';

  const accentColor = darkMode ? 'text-violet-400' : 'text-orange-600';
  const buttonClasses = darkMode
    ? 'bg-violet-600 hover:bg-violet-700'
    : 'bg-orange-600 hover:bg-orange-700';

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center justify-start gap-4">
              <Image
                className='hidden md:block'
                style={{ maxHeight: '80px' }}
                src="./assets/wm-logo-ulir-rect.svg"
                alt="Wowmatters Logo"
                width={120}
                height={80}
              />
              <div className={`text-2xl font-bold ${accentColor}`}>
                Wowmatters
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#home" className="hover:text-violet-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-violet-400 transition-colors">Services</a>
              <a href="#case-studies" className="hover:text-violet-400 transition-colors">Case Studies</a>
              <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${buttonClasses} transition-all duration-300`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className={`text-6xl font-bold mb-4 ${accentColor}`}>
              {typingText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Transforming businesses through cutting-edge technology solutions. 
              We deliver innovative IT consulting services that drive growth and efficiency.
            </p>
          </div>

          {/* Animated floating elements */}
          <div className="relative mb-12">
            <div className={`absolute -top-10 -left-10 w-20 h-20 ${darkMode ? 'bg-violet-500' : 'bg-orange-500'} rounded-full opacity-20 animate-bounce`}></div>
            <div className={`absolute -top-5 -right-15 w-16 h-16 ${darkMode ? 'bg-purple-500' : 'bg-amber-500'} rounded-full opacity-30 animate-pulse`}></div>
            <div className={`absolute top-10 left-20 w-12 h-12 ${darkMode ? 'bg-indigo-500' : 'bg-yellow-500'} rounded-full opacity-25 animate-ping`}></div>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 ${darkMode ? 'border-violet-400/30' : 'border-orange-300'} shadow-2xl`}>
              <div className={`aspect-video ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center relative group`}>
                <div className="text-center">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className={`${buttonClasses} text-white p-6 rounded-full transform transition-all duration-300 hover:scale-110 mb-4`}
                  >
                    {isVideoPlaying ? <Pause className="w-12 h-12" /> : <Play className="w-12 h-12" />}
                  </button>
                  <p className="text-lg font-semibold">Company Profile Video</p>
                  <p className="text-sm opacity-70">Discover our innovative solutions</p>
                </div>
                {isVideoPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-4"></div>
                      <p>Loading video content...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${accentColor}`}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${cardClasses} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className={`${accentColor} mb-4 transform transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* case-studies Section */}
      <section id="case-studies" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${accentColor}`}>
            Case Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${cardClasses} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{
                  animation: `slideInLeft 0.8s ease-out ${index * 0.3}s both`
                }}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${accentColor}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className={`inline-block px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-violet-600/20 text-violet-300' : 'bg-orange-100 text-orange-800'}`}>
                  {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${accentColor}`}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to transform your business with innovative IT solutions? 
            Let&apos;s discuss your project requirements.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:contact@wowmatters.id"
              className={`flex items-center space-x-3 px-8 py-4 ${buttonClasses} text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
            <a
              href="https://www.linkedin.com/company/wowmatters"
              className={`flex items-center space-x-3 px-8 py-4 border-2 ${darkMode ? 'border-violet-400 text-violet-400 hover:bg-violet-400' : 'border-orange-600 text-orange-600 hover:bg-orange-600'} hover:text-white rounded-full transform transition-all duration-300 hover:scale-105`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className={`p-8 rounded-2xl border ${cardClasses} max-w-2xl mx-auto`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-left">
              <p><strong>Email:</strong> contact@wowmatters.id</p>
              <p><strong>Phone:</strong> +62 85222406115</p>
              <p><strong>Location:</strong> Indonesia</p>
              <p><strong>Business Hours:</strong> Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-700/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`text-2xl font-bold mb-4 ${accentColor}`}>
            Wowmatters Consulting
          </div>
          <p className="text-gray-400 mb-6">
            Empowering businesses through innovative technology solutions
          </p>
          <div className="flex justify-center space-x-6">
            <ExternalLink className="w-6 h-6 hover:text-violet-400 cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-violet-400 cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 hover:text-violet-400 cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-gray-500 mt-8">
            © {new Date().getFullYear()} Wowmatters. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;