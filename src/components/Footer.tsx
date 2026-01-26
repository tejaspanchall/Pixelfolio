const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 text-center text-muted-foreground text-sm">
      {currentYear} © Tejas Panchal
    </footer>
  );
};

export default Footer;
