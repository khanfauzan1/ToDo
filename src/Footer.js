import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒMd Kaif Rezwee {year}</p>
    </footer>
  );
}

export default Footer;
