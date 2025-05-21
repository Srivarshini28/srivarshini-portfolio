import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="py-20 animate-fadeIn">
      <div className="flex flex-col items-start space-y-4">
        <h2 className="text-xl text-purple-500">Hello, I'm</h2>
        <h1 className="text-5xl font-bold text-white md:text-6xl">Srivarshini R</h1>
        <h3 className="text-3xl font-medium text-gray-400 md:text-4xl">MCA Student</h3>
        <p className="max-w-2xl py-4 text-gray-300">
          Motivated MCA student eager to apply academic knowledge and collaborate within a dynamic team to drive
          success. Passionate about embracing challenges and contributing to organizational growth.
        </p>
        <Link href="#contact">
          <Button className="mt-4 bg-purple-500 hover:bg-purple-600 transition-colors">Get in Touch</Button>
        </Link>
      </div>
    </section>
  )
}
