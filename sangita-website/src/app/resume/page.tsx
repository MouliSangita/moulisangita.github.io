'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Monitor, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  MapPin,
  Trophy,
  Cpu,
  BarChart3,
  Smartphone,
  Download
} from 'lucide-react'

export default function Resume() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "C++", "Java", "SQL", "R", "SwiftUI", "Objective-C", "TypeScript", "JavaScript", "Rust", "Scala"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Supabase", "Firebase", "PostgreSQL", "AWS", "EC2"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Operating Systems & VCS",
      icon: Monitor,
      skills: ["Unix", "Linux", "Windows", "GitHub", "Git"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Cpu,
      skills: ["Pandas", "React", "scikit-learn", "Langchain", "HuggingFace", "TensorFlow", "Flask", "Jupyter Notebook", "MindsDB", "Unity", ".NET"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart3,
      skills: ["Microsoft Office Suite", "PowerBI", "Tableau", "Snowflake", "Chart.js", "D3.js", "Bokeh"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const workExperience = [
    {
      title: "Development and Product Intern",
      company: "Syval",
      location: "Remote",
      period: "May 2025 - August 2025",
      type: "Internship",
      description: [
        "Engineering a comprehensive internal dashboard using React, PostgreSQL, and Supabase to display analytical graphs and manage user analytics, featuring sortable user tables, activity tracking widgets, and automated CSV export scripts for weekly feedback analysis and user outreach campaigns.",
        "Contributing to iOS application development by working on new features, debugging existing code, and managing deployment workflows using Swift and the Apple Development Environment, gaining hands-on experience with App Store deployment processes.",
        "Exploring the business side of the company, gathering product insights, and providing feedback recommendations to refine product features and optimize the overall user experience."
      ],
      skills: ["React", "PostgreSQL", "Supabase", "Swift", "iOS Development", "Data Analytics"]
    },
    {
      title: "Software Engineering Intern/Co-Op",
      company: "JRC Integrated Systems, NSWC - Crane",
      location: "Crane, IN",
      period: "June 2024 - December 2024",
      type: "Co-Op",
      description: [
        "Worked with Microsoft HoloLens 2, HoloLens Emulator, and SRT3D/ICG Open-Source software with a US Navy Software Team to optimize the streaming quality of the hardware.",
        "Assisted in scripting and planning algorithms for software designed to aid technicians in task execution on US Naval Ships, utilizing C++, .NET, Unity, and Universal Windows Platform Solutions.",
        "Ported open-source code bases from an x86 platform to ARM64 in C++.",
        "Developed a full-stack application to extract and analyze complex logistics data related to the AN/SLQ-32 EW System. Utilized Pandas, Numpy, and Tkinter, later pipelining the output into PowerBI software to prepare reports for readiness reviews on Naval Ships.",
        "Collaborated with JRC's IT Team to initiate and configure Amazon Web Services for various internal projects, gaining experience in AWS Cloud, EC2, and Governmental AWS."
      ],
      skills: ["C++", ".NET", "Unity", "Python", "Pandas", "PowerBI", "AWS", "HoloLens", "ARM64"]
    },
    {
      title: "Administrative Assistant",
      company: "Bechtel Innovation Design Center",
      location: "West Lafayette, Indiana, United States",
      period: "Nov 2022 - Present",
      type: "Part-time",
      description: [
        "In this role, I am engaged in analyzing student project data, identifying trends in student interests, and handling various analytical tasks. I provide support in clerical and organizational responsibilities both in the center and through Discord, managing project proposals and handling shipments.",
        "Additionally, I assist new members and individuals interested in business by conducting tours and directing them to the appropriate staff members based on their specific requirements."
      ],
      skills: ["Data Analysis", "Project Management", "Customer Service", "Administrative Support"]
    }
  ]

  const projects = [
    {
      title: "Curry Junction Full Stack iOS Application",
      period: "August 2024 - Present",
      description: "Engineering a full-stack iOS application for a small family business called Curry Junction, enabling users to order food, access special deals, and choose delivery or takeout. Utilizing Objective-C, SwiftUI, in addition to Firebase for backend integration. Implementing Stripe API for secure payment processing, with plans for launch on the App Store later this year.",
      technologies: ["Objective-C", "SwiftUI", "Firebase", "Stripe API", "iOS Development"],
      type: "Mobile Application",
      status: "In Development",
      icon: Smartphone
    },
    {
      title: "Anomaly Detection Using Claude",
      period: "November 2024 - Present",
      description: "Developing an AI-powered system that utilizes Claude API for health data analysis. Leveraging NLP and machine learning, the project aims to automate clinical note summarization, patient risk assessment, and trend analysis to support healthcare decision-making. Using datasets from the US Department of Health & Human Services for diagnostic accuracy and efficiency while ensuring compliance with data privacy regulations.",
      technologies: ["Claude API", "NLP", "Machine Learning", "Python", "Healthcare Data"],
      type: "AI/ML Project",
      status: "In Development",
      icon: Cpu
    },
    {
      title: "J.P. Morgan Chase - Code For Good Hackathon",
      period: "November 2023",
      description: "In my team, crafted and utilized a unique tech stack combining Python, MongoDB, React.js, Tailwind, Express.js, Mongoose, and JavaScript to develop an application to tackle issues of Internal Company Communication, Educational Gaps, and Data Management/Visualization, placing 2nd place. I led the Backend Development, focused on MongoDB integration and chat log storage, as well as Data Visualization via interactive graphs such as Force-directed and Circle Packing Graphs using softwares like Chart.js and D3.js.",
      technologies: ["Python", "MongoDB", "React.js", "Tailwind", "Express.js", "Chart.js", "D3.js"],
      type: "Hackathon Project",
      status: "2nd Place Winner",
      icon: Trophy
    },
    {
      title: "EV Charging Station Analysis Project",
      period: "June 2023 - December 2023",
      description: "Conducted historical data analysis to predict ideal locations for charging station placement with commonly overlooked conditions. Implemented data manipulation frameworks to Pandas, Scikit-Learn, and Bokeh to display statistical models. Found the optimal conditions for a 5-12% initial decrease in charging time, tackling the issue of having an average 30 minute wait time for charging an electric vehicle.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Bokeh", "Data Analysis"],
      type: "Data Science Project",
      status: "Completed",
      icon: BarChart3
    }
  ]

  const leadership = [
    {
      title: "Vice President",
      organization: "Autonomous Robotics Club of Purdue",
      period: "January 2023 - Present",
      description: [
        "Managed multiple technical projects, making sure goals are achieved. Additionally working on technical onboarding guidelines to be deployed in the future. In charge of providing validation of project and organization funding.",
        "Helped plan and execute the new leadership/organization structure, adding in the general board, and executive board. Started as the Operations Director, then moved to Vice President."
      ]
    },
    {
      title: "Co-Founder for Robotics and Intelligent Systems Expo (RISE)",
      organization: "Autonomous Robotics Club of Purdue",
      period: "",
      description: [
        "Co-founded the first robotics conference on Purdue's campus, with over 250 attendance the first year. Expanded to a national conference the year after with universities from around the country and companies from around the world.",
        "Currently helping plan the 3rd edition of the conference, slated to happen in September 2025, as an advisor."
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      major: "Computer Science",
      track: "Machine Learning Track",
      minor: "Philosophy",
      certificate: "Entrepreneurship and Leadership",
      school: "Purdue University West Lafayette",
      location: "West Lafayette, Indiana",
      period: "2022 - 2025",
      status: "Expected Graduation: 2025",
      organizations: ["Autonomous Robotics Club of Purdue (ARC)", "Hindu Yuva", "Bechtel Innovation Design Center", "BoilerMake"]
    },
    {
      degree: "High School Diploma",
      school: "Olentangy Orange High School",
      location: "Lewis Center, Ohio",
      period: "2018 - 2022",
      status: "Graduated: 2022",
      activities: [
        "Founder of Digital Art and Animation Club",
        "National Honor Society (Committee Member)",
        "National French Honor Society",
        "National Art Honor Society",
        "French Club",
        "Art Club",
        "Pioneer Ambassadors (Planning Committee)"
      ]
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
            Resume & Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            My professional experience, technical skills, and project portfolio in software engineering, AI, and data science.
          </p>
          <motion.a
            href="https://drive.google.com/file/d/1Vtx47Sq-PX4WC-Uc0HzPjuKL2XnY5Kbi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            Download Full Resume
          </motion.a>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.school}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    {edu.major && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 mb-4">
                        <div>
                          <p><strong>Major:</strong> {edu.major}</p>
                          <p><strong>Track:</strong> {edu.track && edu.track.replace("'", "&apos;")}</p>
                        </div>
                        <div>
                          <p><strong>Minor:</strong> {edu.minor}</p>
                          <p><strong>Certificate:</strong> {edu.certificate}</p>
                        </div>
                      </div>
                    )}
                    {edu.organizations && (
                      <div className="mb-4">
                        <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Active Organizations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.organizations.map((org) => (
                            <span
                              key={org}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                            >
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.activities && (
                      <div className="mb-4">
                        <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Activities and Societies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity) => (
                            <span
                              key={activity}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      {edu.status && edu.status.replace("'", "&apos;")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item.replace("'", "&apos;")}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Leadership Experience
          </h2>
          <div className="space-y-8">
            {leadership.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {role.title}
                        </h3>
                        <p className="text-lg text-orange-600 dark:text-orange-400 font-semibold">
                          {role.organization}
                        </p>
                      </div>
                      {role.period && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4" />
                          <span>{role.period}</span>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {role.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item.replace("'", "&apos;")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {project.period}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                        {project.type}
                      </span>
                      <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                        {project.status}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 