import "./Footer.scss";

const Footer = () => {
  return (
    <footer className={"footer"}>
      created by &nbsp;
      <a
        href="https://github.com/BrandonSdvl"
        target="_blank"
        rel="noreferrer"
        className="footer__username"
      >
        BrandonSdvl
      </a>
      &nbsp;-&nbsp;
      <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
        devchallenges.io
      </a>
    </footer>
  );
};

export default Footer;
