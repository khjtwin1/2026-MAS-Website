import "../styles/SocialLinks.css";
import SocialLinksItem from "../components/SocialLinksItem";

const ask = "/ask.svg";
const instagram = "/instagram.svg";
const github = "/github.svg";

const socialLinks = [
  { icon: ask, url: "https://asked.kr/Mas_Mirim", alt: "에스크" },
  {
    icon: instagram,
    url: "https://www.instagram.com/mas_mirim",
    alt: "인스타",
  },
  { icon: github, url: "https://github.com/MAS-MIRIM", alt: "깃허브" },
];

function SocialLinks() {
  return (
    <>
      <ul className="nav_links">
        {socialLinks.map((item) => (
          <SocialLinksItem
            key={item.alt}
            icon={item.icon}
            url={item.url}
            alt={item.alt}
          />
        ))}
      </ul>
    </>
  );
}

export default SocialLinks;
