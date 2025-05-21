export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-purple-900/20 bg-[#0a0f1a] py-6 text-center text-gray-400">
      <div className="container mx-auto px-4">
        <p>© {currentYear} Srivarshini R. All rights reserved.</p>
      </div>
    </footer>
  )
}
