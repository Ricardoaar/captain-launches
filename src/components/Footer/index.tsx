import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-custom ">
      <div>
        <ul className="flex justify-center text-blue-200 py-1 items-center">
          <li>
            Made by
            <a
              className="text-blue-400"
              href="https://github.com/captainrun"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;@CaptainRun
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
