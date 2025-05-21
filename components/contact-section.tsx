"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">Contact</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="border-none bg-navy-700 shadow-lg transition-transform hover:translate-y-[-5px]">
          <CardContent className="p-6">
            <h3 className="mb-6 text-2xl font-semibold text-purple-500">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-purple-500" />
                <p className="text-gray-300">srivarshini0228@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-purple-500" />
                <p className="text-gray-300">7010054866</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-purple-500" />
                <p className="text-gray-300">Chennai</p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-xl font-semibold text-purple-500">Social Profiles</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Srivarshini28"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy-600 p-3 text-white transition-colors hover:bg-purple-500"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/SrivarshiniRamesh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy-600 p-3 text-white transition-colors hover:bg-purple-500"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-navy-700 shadow-lg">
          <CardContent className="p-6">
            <h3 className="mb-6 text-2xl font-semibold text-purple-500">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-navy-600 bg-navy-800 text-white focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-navy-600 bg-navy-800 text-white focus:border-purple-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-navy-600 bg-navy-800 text-white focus:border-purple-500"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 transition-colors">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
