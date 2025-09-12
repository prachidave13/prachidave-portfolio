import { Button } from "@/components/ui/button";
import SkillBadge from "@/components/ui/skill-badge";
import Navigation from "@/components/Navigation";
import { 
  MapPin, Mail, Download, Linkedin, BookOpen, Github, GraduationCap, 
  Calendar, Building, Users, Code, ExternalLink, Award, Brain, Database, 
  BarChart, Phone, Briefcase, Zap, Book 
} from "lucide-react";
import profileImage from "@/assets/prachi.jpeg"

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Prachi Dave - CV.pdf'; // Path to your resume in public folder
  link.download = 'PrachiDave_Resume.pdf'; // Name for downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold">
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                      Prachi Dave
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    AI Engineer & Computer Science Graduate Student
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Passionate about AI, Machine Learning, and innovative technology solutions. 
                  Currently pursuing MS in Computer Science at USC with expertise in generative 
                  AI, web development, and automation frameworks.
                </p>
                
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>prdave@usc.edu</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Me
                  </Button>
                 <Button 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={handleDownloadResume}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5"
                    onClick={() => window.open('https://www.linkedin.com/in/prachidave13', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-card">
                      <img 
                        src={profileImage} 
                        alt="Prachi Dave profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm a passionate AI Engineer and Computer Science graduate student with extensive experience 
                in artificial intelligence, machine learning, and web development. My journey spans from 
                automation frameworks to cutting-edge AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">My Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently pursuing my Master's in Computer Science at USC, I bring a unique blend of 
                    academic excellence and practical industry experience. My journey in technology began 
                    with a diploma in Computer Science Engineering, where I achieved a GPA of 3.74/4.
                  </p>
                  <p>
                    During my tenure as an AI Engineer at Nexasprint Technologies, I specialized in building 
                    AI-driven workflow management platforms and deploying industry-specific solutions 
                    across BFSI, logistics, and FinTech sectors. My expertise spans from generative AI and 
                    LLMs to full-stack web development.
                  </p>
                  <p>
                    I'm passionate about leveraging technology to solve real-world problems, whether it's 
                    creating autonomous systems, developing conversational AI, or building platforms that 
                    enhance productivity and user experience.
                  </p>
                </div>
              </div>

              

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Education</h2>
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-primary pl-6 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <GraduationCap className="w-5 h-5" />
                      <h3 className="font-semibold">Master of Science in Computer Science</h3>
                    </div>
                    <p className="font-medium text-foreground">University of Southern California</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>January 2025 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Los Angeles</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <GraduationCap className="w-5 h-5" />
                      <h3 className="font-semibold">Bachelor of Technology</h3>
                    </div>
                    <p className="font-medium text-foreground">SVKM's Mukesh Patel School of Technology Management</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>January 2022 - December 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Mumbai</span>
                      </div>
                      <span>GPA: 3.74/4</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <GraduationCap className="w-5 h-5" />
                      <h3 className="font-semibold">Diploma in Computer Science Engineering</h3>
                    </div>
                    <p className="font-medium text-foreground">SVKM's Mukesh Patel School of Technology Management</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>January 2019 - December 2021</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Mumbai</span>
                      </div>
                      <span>GPA: 3.70/4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Professional Experience
              </h1>
              <p className="text-lg text-muted-foreground">
                My professional journey in AI engineering and software development, focusing on innovative 
                solutions and automation frameworks.
              </p>
            </div>

            <div className="space-y-8">
              
              <div className="border-l-4 border-primary pl-8 pb-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    AI Engineer | GenAI Department | Intern
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">Nexasprint Technologies Pvt. Ltd</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>June 2024 - October 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Mumbai</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Constructed and Deployed AI-Driven Workflow Management Platform:</strong> Utilized the PERN stack (PostgreSQL, Express.js, React, 
                        Node.js) to create a comprehensive application for AI agent conception and workflow management
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>Customized AI Solutions for Industry Applications:</strong> Deployed pre-built templates for AI agents and workflows to accelerate 
                        customer onboarding in BFSI, optimize route planning in Logistics, and automate fraud detection workflows in FinTech
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <SkillBadge variant="primary">PERN Stack</SkillBadge>
                    <SkillBadge variant="primary">PostgreSQL</SkillBadge>
                    <SkillBadge variant="primary">Express.js</SkillBadge>
                    <SkillBadge variant="primary">React</SkillBadge>
                    <SkillBadge variant="primary">Node.js</SkillBadge>
                    <SkillBadge variant="primary">AI Agents</SkillBadge>
                    <SkillBadge variant="primary">Workflow Management</SkillBadge>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-8 pb-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Python Developer | Insured Tech Department | Intern
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">GODJN Solutions</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>January 2022 - June 2022</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Mumbai</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Automated web apps to extract FIR data on road accidents from official state websites in India, streamlining access for 
                        insurance claim processing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Automated Android applications using Android Studio and Appium, developing scripts to streamline file downloads, process 
                        Excel inputs, and ensure reliability through robust error handling
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <SkillBadge variant="primary">Python</SkillBadge>
                    <SkillBadge variant="primary">Android Studio</SkillBadge>
                    <SkillBadge variant="primary">Appium</SkillBadge>
                    <SkillBadge variant="primary">Web Scraping</SkillBadge>
                    <SkillBadge variant="primary">Automation</SkillBadge>
                    <SkillBadge variant="primary">Excel Processing</SkillBadge>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-6 py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Academic Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of innovative projects spanning AI, machine learning, computer vision, and web 
                development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="success">Full-Stack AI</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">OMNI.ai</h3>
                  <p className="text-sm text-primary font-medium">AI-Powered Website Generator</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>November 2024 - March 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Team of 4</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Built a full-stack application that converts natural language prompts into live websites using multiple LLMs, 
                  with real-time in-browser execution via WebAssembly-powered WebContainer, eliminating server dependencies
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>Node.js</SkillBadge>
                  <SkillBadge>Vite</SkillBadge>
                  <SkillBadge>WebContainer</SkillBadge>
                  <SkillBadge>WebAssembly</SkillBadge>
                  <SkillBadge>GPT</SkillBadge>
                  <SkillBadge>Claude</SkillBadge>
                  <SkillBadge>Groq</SkillBadge>
                  <SkillBadge>Ollama</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open('https://drive.google.com/file/d/1ikQS_efMTBtczdI70U9cSGGCqTG6B0Md/view?usp=drive_link', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="primary">AI Platform</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">AI Agent Monitoring Platform</h3>
                  <p className="text-sm text-primary font-medium">AI Agent Monitoring Platform</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>June 2024 - September 2024</span>
                    </div>
                    <span>Nexasprint Technologies</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Developed and deployed an AI-driven workflow management platform for agent conception and monitoring. 
                  Features include real-time monitoring, multi-agent integration, and comprehensive troubleshooting capabilities
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>PERN Stack</SkillBadge>
                  <SkillBadge>PostgreSQL</SkillBadge>
                  <SkillBadge>Express.js</SkillBadge>
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>Node.js</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                 
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open('https://drive.google.com/drive/folders/1VBV7iXrDmAV9LxAY-z6M00tJ3H4FKC0G?usp=sharing', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="warning">Conversational AI</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Industry-Specific Conversational AI</h3>
                  <p className="text-sm text-primary font-medium">Multi-Industry AI Bot Platform</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>August 2024</span>
                    </div>
                    <span>Nexasprint Technologies</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Created advanced conversational AI bots for logistics, FMCG, banking, finance, automotive, legal, and insurance industries. 
                  Automated customer responses and delivered seamless real-time support across multiple sectors
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>Rasa</SkillBadge>
                  <SkillBadge>Dialogflow</SkillBadge>
                  <SkillBadge>OpenAI API</SkillBadge>
                  <SkillBadge>Microsoft Bot Framework</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                  
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="success">Computer Vision</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Child Lock System Using GANs</h3>
                  <p className="text-sm text-primary font-medium">Computer Vision & Real-time Processing</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>May 2024 - July 2024</span>
                    </div>
                    <span>Solo Project</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Devised a real-time parental control system that restricts access to inappropriate content. Features automatic 
                  device locking based on facial recognition when a child is detected via live camera feed
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>GANs</SkillBadge>
                  <SkillBadge>OpenCV</SkillBadge>
                  <SkillBadge>Dlib</SkillBadge>
                  <SkillBadge>Real-time Processing</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  
                  
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="warning">Autonomous Systems</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Autonomous Lane Detection System</h3>
                  <p className="text-sm text-primary font-medium">Computer Vision & Self-Driving Systems</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>June 2024</span>
                    </div>
                    <span>Solo Project</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Designed a self-driving vehicle system that detects lanes and calculates steering angles by applying OpenCV-based 
                  computer vision algorithms on real-time dashboard camera footage to maintain accurate lane positioning
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>OpenCV</SkillBadge>
                  <SkillBadge>Auto-Encoder Models</SkillBadge>
                  <SkillBadge>ROS</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                  
                 <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open('https://github.com/prachidave13/NeuroDrive', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <SkillBadge variant="primary">Deep Learning</SkillBadge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Authentify</h3>
                  <p className="text-sm text-primary font-medium">AI-Powered Image Verification</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>April 2024 - May 2024</span>
                    </div>
                    <span>Solo Project</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Developed an image authenticity verification system using GANs to detect manipulated content, implementing 
                  convolutional neural networks for forgery localization and creating synthetic datasets for robust model training
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <SkillBadge>TensorFlow</SkillBadge>
                  <SkillBadge>PyTorch</SkillBadge>
                  <SkillBadge>OpenCV</SkillBadge>
                  <SkillBadge>GANs</SkillBadge>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(' https://github.com/prachidave13/Authentify', '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                 
                </div>
              </div>

            </div>

            <div className="bg-gradient-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <SkillBadge variant="warning">🏆 Award</SkillBadge>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">StudyIt</h3>
                  <p className="text-primary font-medium">Collaborative Learning Platform</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>August 2021 - October 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Team of 4</span>
                    </div>
                  </div>
                </div>

                
                
                <p className="text-muted-foreground">
                  Built a comprehensive study platform featuring secure file storage, task management, and community collaboration. 
                  Integrated shared notes functionality and collaborative study tools for enhanced student experiences. Won 1st 
                  Prize at Implementation of Technology Hackathon
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium">
                    🏆 1st Prize - Implementation of Technology Hackathon
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Mukesh Patel School of Technology Management & Engineering
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>Firebase</SkillBadge>
                  <SkillBadge>Firestore</SkillBadge>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Latest Article Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Latest Technical Article
                </h2>
                
                <h3 className="text-2xl font-semibold text-foreground">
                  Supercharging AI with Retrieval-Augmented Generation: A Deep Dive into RAG
                </h3>
                
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explore how RAG is revolutionizing AI applications by combining retrieval mechanisms with 
                  generative models for more accurate and contextually aware responses.
                </p>
                
                <Button 
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
                  onClick={() => window.open('https://medium.com/@daveprachi13/supercharging-ai-with-retrieval-augmented-generation-a-deep-dive-into-rag-15d0191ba115', '_blank')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read My Latest Article on RAG
                </Button>
              </div>
            </div>
          </div>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Skills & Achievements
              </h1>
              <p className="text-lg text-muted-foreground">
                My technical expertise, certifications, and contributions to the community.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Programming Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge variant="primary">Python</SkillBadge>
                    <SkillBadge variant="primary">C</SkillBadge>
                    <SkillBadge variant="primary">C++</SkillBadge>
                    <SkillBadge variant="primary">Java</SkillBadge>
                    <SkillBadge variant="primary">JavaScript</SkillBadge>
                    <SkillBadge variant="primary">HTML</SkillBadge>
                    <SkillBadge variant="primary">CSS</SkillBadge>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Generative AI & LLMs</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge variant="primary">LLM Studio</SkillBadge>
                    <SkillBadge variant="primary">Vertex AI</SkillBadge>
                    <SkillBadge variant="primary">Hugging Face</SkillBadge>
                    <SkillBadge variant="primary">LangChain</SkillBadge>
                    <SkillBadge variant="primary">LlamaIndex</SkillBadge>
                    <SkillBadge variant="primary">OpenAI</SkillBadge>
                    <SkillBadge variant="primary">Anthropic</SkillBadge>
                    <SkillBadge variant="primary">xAI</SkillBadge>
                    <SkillBadge variant="primary">Gemini</SkillBadge>
                    <SkillBadge variant="primary">Llama 3</SkillBadge>
                    <SkillBadge variant="primary">Mistral</SkillBadge>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Frameworks & Libraries</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge variant="primary">Scikit-learn</SkillBadge>
                    <SkillBadge variant="primary">Keras</SkillBadge>
                    <SkillBadge variant="primary">Hugging Face Transformers</SkillBadge>
                    <SkillBadge variant="primary">OpenCV</SkillBadge>
                    <SkillBadge variant="primary">React</SkillBadge>
                    <SkillBadge variant="primary">Node.js</SkillBadge>
                    <SkillBadge variant="primary">Express.js</SkillBadge>
                    <SkillBadge variant="primary">WebContainer</SkillBadge>
                    <SkillBadge variant="primary">Vite</SkillBadge>
                    <SkillBadge variant="primary">Yarn</SkillBadge>
                    <SkillBadge variant="primary">Nextra</SkillBadge>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Databases & Cloud</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge variant="primary">SQL</SkillBadge>
                    <SkillBadge variant="primary">PostgreSQL</SkillBadge>
                    <SkillBadge variant="primary">AWS</SkillBadge>
                    <SkillBadge variant="primary">Google Cloud</SkillBadge>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Statistics & Analysis</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge variant="primary">Hypothesis Testing</SkillBadge>
                    <SkillBadge variant="primary">Regression</SkillBadge>
                    <SkillBadge variant="primary">Inference</SkillBadge>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>
              
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <div className="border-l-4 border-primary pl-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Advanced Certificate in Artificial Intelligence and Machine Learning
                    </h3>
                  </div>
                  <p className="text-primary font-medium">Electronics & ICT Academy, IIT Guwahati</p>
                  <p className="text-muted-foreground text-sm">January 28, 2023 - August 30, 2024</p>
                  <p className="text-muted-foreground">
                    Completed a distinguished certification program supported by the Ministry of Electronics and Information Technology (MeitY), 
                    Government of India.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Awards</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="border-l-4 border-yellow-500 pl-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">1st Prize – Implementation of Technology Hackathon</h3>
                    </div>
                    <p className="text-sm text-yellow-700">October 2021 • Mukesh Patel School of Technology Management & Engineering</p>
                    <p className="text-yellow-800">
                      Awarded for development of StudyIt, a collaborative learning platform addressing educational needs with technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Community Service</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="border-l-4 border-green-500 pl-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">🌱</span>
                      <h3 className="font-semibold text-green-800">Environmental Volunteer</h3>
                    </div>
                    <p className="text-sm text-green-700 font-medium">Sahyadri Devrai NGO</p>
                    <p className="text-sm text-green-700">September 2021 - September 2024 • Mumbai</p>
                    <p className="text-green-800">
                      Organized and participated in tree plantation drives, restoring native forests and enhancing ecological balance and air quality 
                      in Satara and Sanjay Gandhi National Park
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Publications & Current Focus</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Book Title: "AI Agents and Agentic Frameworks" (ongoing)</h3>
                    <p className="text-muted-foreground">Supervisor: Prof. Archana Nanade</p>
                    <p className="text-muted-foreground mt-2">
                      Working on "AI Agents and Agentic Frameworks" publication and exploring cutting-edge AI technologies. 
                      My thesis involves evolving understanding of how AI Agents can be utilized in real-world scenarios to enhance AI-driven solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, and innovative projects. Let's 
                connect and explore how we can work together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-foreground">Let's Connect</h2>
                <p className="text-muted-foreground">
                  Whether you're looking for an AI engineer, interested in collaborating on research, or just 
                  want to discuss the latest in artificial intelligence and technology, I'd love to hear from 
                  you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:prdave@usc.edu" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        prdave@usc.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:(213) 298-8405" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (213) 298-8405
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Los Angeles, CA 90007</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/prachidave13" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/prachidave13
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <a 
                        href="https://github.com/prachidave13" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/prachidave13
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 
                  <Button 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={handleDownloadResume}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Current Status</h2>
                
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">🎓 Education</h3>
                        <p className="text-muted-foreground">
                          Currently pursuing MS in Computer Science at University of Southern California
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">💼 Availability</h3>
                        <p className="text-muted-foreground">
                          Open to internship opportunities, research collaborations, and exciting projects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">🔬 Interests</h3>
                        <p className="text-muted-foreground">
                          Generative AI, Machine Learning, Computer Vision, Web Development, and 
                          Automation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">📚 Current Focus</h3>
                        <p className="text-muted-foreground">
                          Working on "AI Agents and Agentic Frameworks" publication and exploring 
                          cutting-edge AI technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;