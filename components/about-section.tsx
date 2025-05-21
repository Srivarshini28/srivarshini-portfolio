import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 animate-fadeIn">
      <h2 className="mb-6 text-3xl font-bold text-white section-title">About</h2>

      <Card className="border-none bg-navy-700 shadow-lg transition-transform hover:translate-y-[-5px]">
        <CardContent className="p-6">
          <p className="text-gray-300">
            Motivated MCA student eager to apply academic knowledge and collaborate within a dynamic team to drive
            success. Passionate about embracing challenges and contributing to organizational growth while seeking
            mentorship for career advancement.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-purple-500">Contact Details</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">Email:</span> srivarshini0228@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> 7010054866
                </li>
                <li>
                  <span className="font-medium">Location:</span> Chennai
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-purple-500">Social Profiles</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">GitHub:</span>{" "}
                  <a
                    href="https://github.com/Srivarshini28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline"
                  >
                    github.com/Srivarshini28
                  </a>
                </li>
                <li>
                  <span className="font-medium">LinkedIn:</span>{" "}
                  <a
                    href="https://linkedin.com/SrivarshiniRamesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline"
                  >
                    linkedin.com/SrivarshiniRamesh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
