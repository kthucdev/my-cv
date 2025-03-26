"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Download,
  Code,
  Edit,
  Save,
  Plus,
  Trash,
  Upload,
  User,
  Calendar,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CVTemplate() {
  const [isEditing, setIsEditing] = useState(false)
  const cvRef = useRef(null)
  const fileInputRef = useRef(null)

  // Avatar
  const [avatar, setAvatar] = useState(null)

  // Header information
  const [name, setName] = useState("Tran Doan Kien Thuc")
  const [title, setTitle] = useState("Software Engineer Fresher")
  const [tagline, setTagline] = useState("A developer enthusiasms, responsibilities and learn to expert!")
  const [birthday, setBirthday] = useState("04/07/2001")
  const [phone, setPhone] = useState("+84 834 545 725")
  const [email, setEmail] = useState("kienthuc4701.work@gmail.com")
  const [location, setLocation] = useState("Ho Chi Minh")
  const [linkedin, setLinkedin] = useState("linkedin.com/in/kienthuc4701")

  // Education
  const [education, setEducation] = useState({
    degree: "Bachelor of Software Engineer",
    school: "Nong Lam University",
    period: "Sep 2019 - Nov 2023",
    gpa: "3.07",
    english: "English B1 Level",
  })

  // Experience entries
  const [experiences, setExperiences] = useState([
    {
      title: "Software Engineer Intern",
      company: "ISB VIETNAM CO.,LTD",
      period: "Jan 2025 - Apr 2025",
      technologies: "Java 11, Spring Core, MyBatis, PostgreSQL 14, Gradle, Mockito, Postman",
      description: `NEC - Hotel System Management
• Developed and documented API specifications based on VB.NET source code, detailing the workflow from user request to server response.
• Implemented Java 11 code using Spring Core framework, leveraging MyBatis as ORM and PostgreSQL 14 for database management.
• Debugged and resolved issues by analyzing Tomcat logs, MyBatis, and Log4J logs.
• Migrated and optimized raw SQL queries from Oracle to PostgreSQL within MyBatis mapper files.
• Utilized Gradle for build automation and executed commands for code quality checks (e.g., Checkstyle, SpotBugs).
• Conducted unit testing with Mockito and performed manual testing using Postman, capturing evidence for client deliverables.`,
    },
    {
      title: "Web Developer",
      company: "Global Liaison",
      period: "Jul 2023 - Aug 2024",
      technologies: "HTML, CSS, JavaScript, Divi, Photoshop, Figma",
      description: `• Created and maintained reusable website templates for an organization's template library
• Integrated third-party APIs to enable customer booking appointments
• Effectively communicated with team members to manage tasks and resolve issues`,
    },
  ])

  // Projects
  const [projects, setProjects] = useState([
    {
      title: "CSE - Culture & Skill Environment",
      period: "Dec 2025 - Mar 2025",
      technologies: "NextJs, Tanstack Query, Next-intl, NestJs",
      description: `An non-profit project create a platform to anyone who want sharing, learning to anyone else.
• Team size: 5
• Responsibility: Frontend developer - Implemented Figma design to UI by NextJs, Tailwind, Tanstack Query and responsive, multilangue
• Result: Home page, header, footer, chatbox UI`,
    },
    {
      title: "GreenSys",
      period: "",
      technologies: "ReactJs, Golang, Sqlc, Goose, Redis, Docker",
      description: `A SaaS for transportation management system
• Responsibility: Apprenticeship software developer
• Build some pet project using Golang framework like Gin, Echo to learn how Golang work`,
    },
    {
      title: "Pathfinding Visualization",
      period: "",
      technologies: "React, TypeScript, Vite, Git",
      description: `A project that helps users visualize how pathfinding algorithms (Dijkstra, BFS, DFS, A*, etc) work step by step
• GitHub: github.com/kienthuc4701/Pathfinding-Visualization
• Deployed: pathfinding-visualization-one.vercel.app`,
    },
  ])

  // Technical skills based on experience and projects
  const [technicalSkills, setTechnicalSkills] =
    useState(`• Frontend: React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS
• Backend: Java, Spring Core, Golang, NestJs
• Database: PostgreSQL, Oracle
• Tools: Gradle, Git, Docker, Postman, Mockito
• Others: MyBatis, Tanstack Query, Next-intl, Figma, Photoshop`)

  // Environment detection
  const [isVercel, setIsVercel] = useState(false)

  // Check if running on Vercel
  useEffect(() => {
    // VERCEL environment variable is automatically set on Vercel deployments
    setIsVercel(process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined)
  }, [])

  const handlePrint = () => {
    setIsEditing(false)
    setTimeout(() => {
      window.print()
    }, 100)
  }

  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatar(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "New Position",
        company: "Company Name",
        period: "MM/YYYY - MM/YYYY",
        technologies: "Technologies used",
        description: "• Responsibility or achievement\n• Another responsibility or achievement",
      },
    ])
  }

  const updateExperience = (index, field, value) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    }
    setExperiences(updatedExperiences)
  }

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index))
  }

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "New Project",
        period: "MM/YYYY - MM/YYYY",
        technologies: "Technologies used",
        description: "• Project description\n• Responsibilities",
      },
    ])
  }

  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects]
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    }
    setProjects(updatedProjects)
  }

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  const handleRoleChange = (value) => {
    if (value === "fresher") {
      setTitle("Software Engineer Fresher")
    } else if (value === "intern") {
      setTitle("Software Engineer Intern")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 print:p-0 print:bg-white">
      <div className="fixed top-4 right-4 print:hidden z-10 flex gap-2 items-center">
        {isVercel && (
          <div className="bg-white rounded-md border border-input px-2 py-1 flex items-center">
            <span className="text-sm mr-2 text-gray-700">Role:</span>
            <Select onValueChange={handleRoleChange} defaultValue="fresher">
              <SelectTrigger className="w-[120px] h-8 text-sm border-amber-200">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fresher">Fresher</SelectItem>
                <SelectItem value="intern">Intern</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        {!isVercel && (
          <Button onClick={() => setIsEditing(!isEditing)} variant="outline" className="bg-white">
            {isEditing ? (
              <>
                <Save className="mr-2 h-4 w-4" /> Save
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </>
            )}
          </Button>
        )}
        <Button onClick={handlePrint} className="bg-amber-700 hover:bg-amber-800">
          <Download className="mr-2 h-4 w-4" /> Print/Save PDF
        </Button>
      </div>

      <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" className="hidden" />

      <div
        ref={cvRef}
        className="max-w-4xl mx-auto bg-white shadow-md print:shadow-none"
        style={{
          width: "210mm",
          height: "297mm",
          padding: "8mm",
        }}
      >
        {/* Header */}
        <header className="border-b border-amber-700 pb-3 mb-3">
          <div className="flex flex-row justify-between items-start">
            <div className="flex items-start">
              {/* Avatar */}
              <div className="mr-3 cursor-pointer" onClick={handleAvatarClick}>
                {avatar ? (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-amber-700">
                    <img src={avatar || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                    {isEditing && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Upload className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                    {isEditing ? (
                      <div className="flex flex-col items-center text-amber-700">
                        <Upload className="h-5 w-5" />
                        <span className="text-xs mt-1">Add Photo</span>
                      </div>
                    ) : (
                      <User className="h-10 w-10 text-amber-300" />
                    )}
                  </div>
                )}
              </div>

              {/* Name and title */}
              <div className="flex-1">
                {isEditing && !isVercel ? (
                  <>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-2xl font-bold text-amber-800 border-amber-200 mb-1 h-8 py-0"
                    />
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-base text-gray-600 border-amber-200 mb-1 h-7 py-0"
                    />
                    <Input
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      className="text-xs text-gray-700 border-amber-200 max-w-md h-6 py-0"
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-amber-800">{name}</h1>
                    <p className="text-base text-gray-600">{title}</p>
                    <p className="text-xs text-gray-700 max-w-md">{tagline}</p>
                  </>
                )}
              </div>
            </div>

            {/* Contact information */}
            <div className="grid grid-cols-1 gap-0.5 text-xs">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1 text-amber-700" />
                {isEditing ? (
                  <Input
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="text-xs p-1 h-6 border-amber-200"
                    placeholder="DD/MM/YYYY"
                  />
                ) : (
                  <span>{birthday}</span>
                )}
              </div>
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-1 text-amber-700" />
                {isEditing ? (
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-xs p-1 h-6 border-amber-200"
                  />
                ) : (
                  <span>{phone}</span>
                )}
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-1 text-amber-700" />
                {isEditing ? (
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-xs p-1 h-6 border-amber-200"
                  />
                ) : (
                  <span>{email}</span>
                )}
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1 text-amber-700" />
                {isEditing ? (
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-xs p-1 h-6 border-amber-200"
                  />
                ) : (
                  <span>{location}</span>
                )}
              </div>
              <div className="flex items-center">
                <Linkedin className="h-3 w-3 mr-1 text-amber-700" />
                {isEditing ? (
                  <Input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="text-xs p-1 h-6 border-amber-200"
                  />
                ) : (
                  <span>{linkedin}</span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-1 text-amber-700" />
              <h2 className="text-base font-semibold text-amber-800 border-b border-gray-200 pb-0.5">Experience</h2>
            </div>
            {isEditing && (
              <Button onClick={addExperience} size="sm" variant="outline" className="h-6 text-xs border-amber-200">
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            )}
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-2 relative">
              {isEditing && (
                <Button
                  onClick={() => removeExperience(index)}
                  size="sm"
                  variant="ghost"
                  className="absolute right-0 top-0 h-5 w-5 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash className="h-3 w-3" />
                </Button>
              )}

              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800 text-sm">
                  {isEditing ? (
                    <Input
                      value={exp.title}
                      onChange={(e) => updateExperience(index, "title", e.target.value)}
                      className="font-medium text-gray-800 border-amber-200 text-sm h-6 py-0"
                    />
                  ) : (
                    exp.title
                  )}
                </h3>
                <span className="text-amber-700 font-medium text-xs">
                  {isEditing ? (
                    <Input
                      value={exp.period}
                      onChange={(e) => updateExperience(index, "period", e.target.value)}
                      className="text-amber-700 font-medium text-right w-36 border-amber-200 text-xs h-6 py-0"
                    />
                  ) : (
                    exp.period
                  )}
                </span>
              </div>

              <p className="text-gray-600 font-medium text-xs">
                {isEditing ? (
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(index, "company", e.target.value)}
                    className="text-gray-600 font-medium border-amber-200 text-xs h-6 py-0"
                  />
                ) : (
                  exp.company
                )}
              </p>

              <p className="text-xs text-gray-500 italic">
                <span className="text-xs font-medium">Technologies:</span>{" "}
                {isEditing ? (
                  <Input
                    value={exp.technologies}
                    onChange={(e) => updateExperience(index, "technologies", e.target.value)}
                    className="text-xs text-gray-500 italic mt-0.5 border-amber-200 h-6 py-0"
                  />
                ) : (
                  exp.technologies
                )}
              </p>

              <div className="text-xs text-gray-700 mt-0.5 font-light">
                {isEditing ? (
                  <Textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(index, "description", e.target.value)}
                    className="text-xs text-gray-700 min-h-[80px] border-amber-200"
                  />
                ) : (
                  <div className="whitespace-pre-line leading-normal">{exp.description}</div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1 text-amber-700"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <h2 className="text-base font-semibold text-amber-800 border-b border-gray-200 pb-0.5">Projects</h2>
            </div>
            {isEditing && (
              <Button onClick={addProject} size="sm" variant="outline" className="h-6 text-xs border-amber-200">
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            )}
          </div>

          {projects.map((project, index) => (
            <div key={index} className="mb-2 relative">
              {isEditing && (
                <Button
                  onClick={() => removeProject(index)}
                  size="sm"
                  variant="ghost"
                  className="absolute right-0 top-0 h-5 w-5 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash className="h-3 w-3" />
                </Button>
              )}

              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800 text-sm">
                  {isEditing ? (
                    <Input
                      value={project.title}
                      onChange={(e) => updateProject(index, "title", e.target.value)}
                      className="font-medium text-gray-800 border-amber-200 text-sm h-6 py-0"
                    />
                  ) : (
                    project.title
                  )}
                </h3>
                {project.period && (
                  <span className="text-amber-700 font-medium text-xs">
                    {isEditing ? (
                      <Input
                        value={project.period}
                        onChange={(e) => updateProject(index, "period", e.target.value)}
                        className="text-amber-700 font-medium text-right w-36 border-amber-200 text-xs h-6 py-0"
                      />
                    ) : (
                      project.period
                    )}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 italic">
                <span className="text-xs font-medium">Technologies:</span>{" "}
                {isEditing ? (
                  <Input
                    value={project.technologies}
                    onChange={(e) => updateProject(index, "technologies", e.target.value)}
                    className="text-xs text-gray-500 italic mt-0.5 border-amber-200 h-6 py-0"
                  />
                ) : (
                  project.technologies
                )}
              </p>

              <div className="text-xs text-gray-700 mt-0.5 font-light">
                {isEditing ? (
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(index, "description", e.target.value)}
                    className="text-xs text-gray-700 min-h-[70px] border-amber-200"
                  />
                ) : (
                  <div className="whitespace-pre-line leading-normal">{project.description}</div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-3">
          <div className="flex items-center mb-1">
            <GraduationCap className="h-4 w-4 mr-1 text-amber-700" />
            <h2 className="text-base font-semibold text-amber-800 border-b border-gray-200 pb-0.5 flex-1">Education</h2>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800 text-sm">
                {isEditing ? (
                  <Input
                    value={education.degree}
                    onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                    className="font-medium text-gray-800 border-amber-200 text-sm h-6 py-0"
                  />
                ) : (
                  education.degree
                )}
              </h3>
              <span className="text-amber-700 font-medium text-xs">
                {isEditing ? (
                  <Input
                    value={education.period}
                    onChange={(e) => setEducation({ ...education, period: e.target.value })}
                    className="text-amber-700 font-medium text-right w-36 border-amber-200 text-xs h-6 py-0"
                  />
                ) : (
                  education.period
                )}
              </span>
            </div>

            <p className="text-gray-600 text-xs">
              {isEditing ? (
                <Input
                  value={education.school}
                  onChange={(e) => setEducation({ ...education, school: e.target.value })}
                  className="text-gray-600 border-amber-200 text-xs h-6 py-0"
                />
              ) : (
                education.school
              )}
            </p>

            <p className="text-xs text-gray-700">
              GPA:{" "}
              {isEditing ? (
                <Input
                  value={education.gpa}
                  onChange={(e) => setEducation({ ...education, gpa: e.target.value })}
                  className="text-xs text-gray-700 w-16 inline-block border-amber-200 h-6 py-0"
                />
              ) : (
                education.gpa
              )}
            </p>

            <p className="text-xs text-gray-700">
              {isEditing ? (
                <Input
                  value={education.english}
                  onChange={(e) => setEducation({ ...education, english: e.target.value })}
                  className="text-xs text-gray-700 w-full border-amber-200 h-6 py-0 mt-1"
                />
              ) : (
                education.english
              )}
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-3">
          <div className="flex items-center mb-1">
            <Code className="h-4 w-4 mr-1 text-amber-700" />
            <h2 className="text-base font-semibold text-amber-800 border-b border-gray-200 pb-0.5 flex-1">
              Technical Skills
            </h2>
          </div>

          <div className="text-xs text-gray-700 font-light">
            {isEditing ? (
              <Textarea
                value={technicalSkills}
                onChange={(e) => setTechnicalSkills(e.target.value)}
                className="text-xs min-h-[80px] border-amber-200"
              />
            ) : (
              <div className="whitespace-pre-line leading-normal">{technicalSkills}</div>
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

