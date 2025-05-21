import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  const skills = {
    programming: ["Python", "Android", "HTML", "JavaScript"],
    frameworks: ["React.js", "Next.js", "Express.js", "TailwindCSS", "ShadcnUI"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["GitHub", "VS Code", "Postman", "Figma"],
    soft: ["Communication", "Time Management", "Teamwork", "Leadership", "Willingness to learn"],
  }

  return (
    <section id="skills" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Skills</h2>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <SkillCard title="Programming Languages" skills={skills.programming} />
  <SkillCard title="Frameworks & Libraries" skills={skills.frameworks} />
  <SkillCard title="Databases" skills={skills.databases} />
  <SkillCard title="Tools" skills={skills.tools} />
  <SkillCard title="Soft SKills" skills={skills.soft} />
</div>

    </section>

  )
}

interface SkillCardProps {
  title: string
  skills: string[]
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
<Card className="border-none bg-navy-700 shadow-lg transition-transform hover:translate-y-[-5px] min-h-[220px] p-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-purple-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
  key={skill}
  className="rounded-full bg-navy-600 px-4 py-1.5 text-sm text-gray-200 font-medium"
>
  {skill}
</span>

          ))}
        </div>
      </CardContent>
    </Card>
  )
}
