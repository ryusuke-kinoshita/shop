import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-2">
      <ul>
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/">
          <li>product</li>
        </Link>
        <Link href="/cart">
          <li>cart</li>
        </Link>
      </ul>
    </div>
  );
}
