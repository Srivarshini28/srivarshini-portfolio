import { Card, CardContent } from "@/components/ui/card"

interface Experience {
  position: string
  company: string
  period: string
  responsibilities: string[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      position: "Software Engineer Intern",
      company: "InLustro",
      period: "JAN 2025 - MAY 2025",
      responsibilities: [
        "Designed an AI-powered Personalized Learning Plan (PLP) for a Simulated Work Environment, adapting to individual learning needs.",
        "Developed dynamic progress tracking to optimize learner engagement and career growth.",
      ],
    },
    {
      position: "Robotics Intern",
      company: "Evolve Robot Lab",
      period: "SEP 2022 - OCT 2022",
      responsibilities: [
        "Developed an obstacle-avoiding robot using Arduino/Raspberry Pi, integrating ultrasonic sensors for real-time navigation.",
        "Worked on motor control algorithms and hardware-software integration to enhance efficiency.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Experience</h2>

      <div className="relative ml-4 pl-8 md:ml-0">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative animate-slideUp" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <Card className="border-none bg-navy-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-purple-500">{exp.position}</h3>
                <p className="mt-1 text-xl text-gray-300">{exp.company}</p>
                <p className="mt-2 text-gray-400">{exp.period}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
