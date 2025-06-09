'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Heart, 
  Lightbulb, 
  Camera, 
  Music, 
  Book, 
  Globe,
  Trophy,
  Star,
  Plane,
  Mountain,
  Coffee,
  Target,
  Brain,
  Code,
  Database,
  Cpu,
  Stethoscope,
  Sprout,
  Eye,
  Building,
  Zap,
  ChefHat,
  Gamepad2,
  Users,
  Paintbrush
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Activities() {
  const [floatingElements, setFloatingElements] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
  }>>([])

  useEffect(() => {
    // Generate floating elements only on client side to avoid hydration mismatch
    const elements = Array.from({ length: 6 }, () => ({
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const hobbies = [
    {
      title: "Drawing",
      description: "I love to pencil sketch and create detailed artwork in my free time.",
      icon: Paintbrush,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Sports",
      description: "I love to play football and cricket, staying active and competitive.",
      icon: Target,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Gardening",
      description: "Every year I love to make my own garden at home, growing various vegetables and flowers throughout the summer!",
      icon: Sprout,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Volunteering",
      description: "I love to volunteer at my local temple, food shelters, and libraries during my breaks from school.",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Graphic Design",
      description: "I currently volunteer as the marketing lead for the Sri Saibaba temple society of Ohio, working on graphic design and curating marketing strategies.",
      icon: Palette,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Cooking",
      description: "I love to find new recipes and experiment with them. Also grilling with my dad!",
      icon: ChefHat,
      color: "from-orange-500 to-red-500"
    }
  ]

  const interests = [
    {
      title: "Medical Technology",
      description: "Exploring innovations in healthcare and medical devices",
      icon: Stethoscope,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Agricultural Technology",
      description: "Interested in sustainable farming and agtech solutions",
      icon: Sprout,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI/ML",
      description: "Passionate about artificial intelligence and machine learning applications",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Virtual Reality",
      description: "Fascinated by immersive technologies and VR experiences",
      icon: Eye,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Robotics",
      description: "Building intelligent systems and autonomous robots",
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Business Technology",
      description: "Intersection of technology and business intelligence",
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Databases",
      description: "Data management and database optimization",
      icon: Database,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      description: "Server-side architecture and API development",
      icon: Code,
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Activities & Interests
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond coding and academics, here's what fuels my creativity and passion for life.
          </p>
        </motion.div>

        {/* Hobbies & Passions Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Hobbies & Passions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-12 -mt-12" />
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${hobby.color} mb-4`}>
                    <hobby.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Interest Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${interest.color}`}>
                    <interest.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating decorative elements - only render after client hydration */}
        {floatingElements.length > 0 && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {floatingElements.map((element, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                style={{
                  width: element.width,
                  height: element.height,
                  left: element.left,
                  top: element.top,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: element.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
} 