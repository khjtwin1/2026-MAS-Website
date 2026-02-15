function SocialLinksItem({ icon, url, alt }) {
  return (
    <li>
      <a href={url} target="_blank">
        <img src={icon} alt={alt} />
      </a>
    </li>
  );
}

export default SocialLinksItem;
