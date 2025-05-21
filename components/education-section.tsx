import { Card, CardContent } from "@/components/ui/card"

interface Education {
  degree: string
  institution: string
  period: string
  cgpa: string
}

export default function EducationSection() {
  const educations: Education[] = [
    {
      degree: "Master of Computer Application",
      institution: "D.G. Vaishnav College",
      period: "2023 - 2025",
      cgpa: "8.82",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Justice Basheer Ahmed Sayeed College for Women",
      period: "2020 - 2023",
      cgpa: "8.767",
    },
  ]

  return (
    <section id="education" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Education</h2>

      <div className="relative ml-4 pl-8 md:ml-0">
        <div className="timeline-line"></div>
        {educations.map((edu, index) => (
          <div key={index} className="mb-12 relative animate-slideUp" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <Card className="border-none bg-navy-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-purple-500">{edu.degree}</h3>
                <p className="mt-2 text-gray-300">{edu.institution}</p>
                <div className="mt-4 flex flex-col justify-between gap-2 text-gray-400 md:flex-row md:items-center">
                  <p>{edu.period}</p>
                  <p>CGPA: {edu.cgpa}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
