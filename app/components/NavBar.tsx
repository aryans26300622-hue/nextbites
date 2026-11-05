// app/components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <span className="logo">🍽️ NextBites</span>
      <Link href="/">Home</Link>
    </nav>
  );
}