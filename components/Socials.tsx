import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/NooBIE-Nilay/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/nilay-banerjee/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/nilaystwt",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/nilay__banerjee/",
  },
];
//@ts-ignore
export function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
