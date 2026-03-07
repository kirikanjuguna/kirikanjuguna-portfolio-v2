export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-white/40 border-t border-white/5">
      <p>© {new Date().getFullYear()}  Kirika Njuguna</p>
      <p className="mt-2">Built with Next.js</p>
    </footer>
  )
}