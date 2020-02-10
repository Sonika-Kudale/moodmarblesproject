import React from "react";

const FooterPage = () => (
    <div className="footer-copyright">
        <div fluid="true">
          &copy; {new Date().getFullYear()} Copyright: <a href="www.ibm.com"> IBM </a>
        </div>
      </div>
  );

export default FooterPage;