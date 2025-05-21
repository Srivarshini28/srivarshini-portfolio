import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Certification {
  title: string
  provider: string
  description: string
  date: string
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "MERN Stack Development",
      provider: "InLustro Innovative Learning Solutions",
      description: "Full-stack web development course covering MERN technologies.",
      date: "OCT 2024",
    },
    {
      title: "Python Programming",
      provider: "Udemy",
      description: "Comprehensive course on fundamental and advanced Python programming concepts.",
      date: "JUN 2024",
    },
    {
      title: "The Joy Of Computing Using Python",
      provider: "NPTEL",
      description: "Introduction to computing concepts and problem-solving using Python.",
      date: "APR 2024",
    },
    {
      title: "Tableau for Business Intelligence",
      provider: "Bilight Solutions",
      description: "Learn to visualize and analyze data using Tableau for effective business decision-making.",
      date: "MAR 2024",
    },
    {
      title: "Advanced Android Application Development",
      provider: "ALB Multimedia",
      description: "Master advanced techniques in building and deploying Android applications.",
      date: "MAR 2023",
    },
    {
      title: "MS Office and Internet",
      provider: "SIET",
      description: "Training in Microsoft Office applications and basic internet skills.",
      date: "JUN 2022",
    },
  ]

  return (
    <section id="certifications" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Certifications</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="border-none bg-navy-700 shadow-lg transition-transform hover:translate-y-[-5px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle className="text-xl text-purple-500">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-gray-400">{cert.provider}</p>
              <p className="mt-2 text-gray-300">{cert.description}</p>
              <p className="mt-4 text-sm text-gray-400">{cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
