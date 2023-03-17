import Link from "next/link";

export default function Header({ children }) {
  return (
    <div className="">
      <h1>{children}</h1>
    </div>
  );
}
