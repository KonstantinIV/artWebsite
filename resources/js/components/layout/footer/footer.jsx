import React from 'react';

export default function Footer() {
  
  const currentYear = new Date().getFullYear();
  const websiteName = 'Kostaartist';

  return (
    <footer className="footerContainer">
      <div className="footerCopyrightContainer">

        <p>&copy; {currentYear} {websiteName}. All rights reserved.</p>

      </div>
    </footer>

  );
}
