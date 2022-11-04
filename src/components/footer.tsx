import Link from 'next/link';

const Footer = () => {
  const links = [
    { text: 'Home', destination: '/' },
    { text: 'Add Chore', destination: '/addChore' },
    { text: 'View All', destination: '/viewAll' },
  ];

  return (
    <div className="flex w-full items-center justify-center p-4 pt-6 text-2xl text-blue-500">
      {links.map((link, index) => (
        <div key={index}>
          <Link href={link.destination}>
            <span className="cursor-pointer text-indigo-800">
              [{link.text}]
            </span>
          </Link>
          {index < links.length - 1 && <>|</>}
        </div>
      ))}
    </div>
  );
};

export default Footer;
