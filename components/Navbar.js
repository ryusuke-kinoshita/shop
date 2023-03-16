import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className="flex">
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/">
          <li>product</li>
        </Link>
        <Link href="/">
          <li>cart</li>
        </Link>
      </ul>
    </div>
  );
}
