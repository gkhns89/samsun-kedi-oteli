import React from "react";

function header() {
  return (
    <header className="bg-header-color">
      <div
        aria-label="header-content"
        className="w-full h-32 flex flex-row items-center justify-between px-12"
      >
        <div aria-label="header-logo" className="min-w-48 h-full">
          <img
            src="./images/logo-1.png"
            alt="logo"
            className="h-full w-full object-contain"
          />
        </div>
        <nav aria-label="header-nav" className="w-full h-full  text-txt-2">
          <ul className="w-full h-full flex flex-row items-center justify-end space-x-10">
            <li>Hakkımızda</li>
            <li>Hizmetlerimiz</li>
            <li>S.S.S.</li>
            <li>İletişim</li>
            <li>
              <button className="btn-primary">Randevu Al</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default header;
