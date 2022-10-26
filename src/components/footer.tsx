import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Link href="/">
        <span className="cursor-pointer text-indigo-800">[Home]</span>
      </Link>
      |
      <Link href="/addChore">
        <span className="cursor-pointer text-indigo-800">[Add Chore]</span>
      </Link>
      |
      <Link href="/viewAll">
        <span className="cursor-pointer text-indigo-800">[View All]</span>
      </Link>
    </div>
  );
};

export default Footer;
