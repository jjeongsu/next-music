export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-green-600">
      {children}
      <p>&copy;jeongsu.dev@gmail.com</p>
    </div>
  )
}
