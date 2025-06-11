'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [particles, setParticles] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
  }>>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 5 }, () => ({
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 3,
    }))
    setParticles(newParticles)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MouliSangita', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/moulisangita/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:moulinageswar04@gmail.com', label: 'Email' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  M
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mouli
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I&apos;m a passionate Computer Science student and software engineer dedicated to building 
          innovative solutions in AI, robotics, and full-stack development.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Welcome to my digital space where technology meets innovation. 
          Explore my projects, experience, and journey in software engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/resume">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300 group"
              >
                <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Floating particles effect - only render after client hydration */}
        {particles.length > 0 && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/10 dark:bg-blue-400/10"
                style={{
                  width: particle.width,
                  height: particle.height,
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
