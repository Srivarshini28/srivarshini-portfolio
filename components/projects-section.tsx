import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string[]
  technologies: string[]
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Morphospace",
      description: [
        "Developed a web-based platform for interior designers to customize furniture with real-time cost estimation.",
        "Enabled users to adjust dimensions, materials, and colors while placing and tracking orders.",
        "Implemented a feedback system for seamless collaboration between designers and clients.",
      ],
      technologies: ["MERN Stack", "React.js", "Node.js"],
    },
    {
      title: "Smart Shopping Cart",
      description: [
        "Built an interactive shopping app that facilitates smooth communication between customers and employers.",
        "Integrated features to enhance the shopping experience and streamline purchasing processes.",
      ],
      technologies: ["Android", "Java", "XML"],
    },
    {
      title: "Tune Trek",
      description: [
        "Developed a music application providing a seamless and enjoyable listening experience for Android users.",
        "Implemented intuitive UI/UX for smooth navigation and enhanced user engagement.",
      ],
      technologies: ["Android", "Java", "XML"],
    },
    {
      title: "Jbas College App",
      description: [
        "Designed an application containing course details, contact information, and admission-related data for Jbas College.",
        "Ensured a user-friendly interface for easy access to essential college information.",
      ],
      technologies: ["Android", "Java", "XML"],
    },
  ]

  return (
    <section id="projects" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border-none bg-navy-700 shadow-lg transition-transform hover:translate-y-[-5px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-purple-500">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded-full bg-navy-600 px-3 py-1 text-sm text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-gray-300">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
