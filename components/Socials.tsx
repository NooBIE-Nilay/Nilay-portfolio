import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];
//@ts-ignore
export function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
