import Link from "next/link";

const NavLink = ({ href, title }) => (
  <Link href={href} className="text-white hover:underline">
    {title}
  </Link>
);



export default NavLink;
