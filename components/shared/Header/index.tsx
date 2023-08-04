import { IconGoPeakSMBlack } from "../../../shared/icons/common-icons";
import Link from "next/link";
import React, { useState } from "react";
import useResizer from "hooks/useResizer";
import { TFunction } from "next-i18next";

interface HeaderProps {
  t: TFunction;
}

const Header: React.FC<HeaderProps> = ({ t }) => {
  const [showNav, setShowNav] = useState(false);
  const [hideGetStarted, setHideGetStarted] = useState(false);

  const handleNavToggle = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  const handleWindowResize = () => {
    if (window.innerWidth >= 768) {
      setShowNav(false);
    }
    if (window.innerWidth <= 600) {
      setHideGetStarted(true);
    } else {
      setHideGetStarted(false);
    }
  };

  useResizer(handleWindowResize);

  return (
    <header className="header py-9">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <IconGoPeakSMBlack />
          </Link>
          {!showNav && (
            <div
              className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    href={"/how-we-work"}
                    className="nav-link text-sm fw-600"
                  >
                    {t("layout.header.how_it_works")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/pricing"} className="nav-link text-sm fw-600">
                    {t("layout.header.pricing")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/about"} className="nav-link text-sm fw-600">
                    {t("layout.header.about_us")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/blog"} className="nav-link text-sm fw-600">
                    {t("layout.header.blog")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="d-flex align-items-center">
            {!hideGetStarted && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    href="/order"
                    type="button"
                    className="btn btn-secondary me-2"
                  >
                    {t("btn.get_started")}
                  </Link>
                </li>
              </ul>
            )}
            <button
              type="button"
              className="navbar-toggler"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      {showNav && (
        <div className="bg-light p-3">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={"/how-we-work"} className="nav-link text-sm fw-600 ">
                {t("layout.header.how_it_works")}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/pricing"} className="nav-link text-sm fw-600 ">
                {t("layout.header.pricing")}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/about"} className="nav-link text-sm fw-600 ">
                {t("layout.header.about_us")}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/blog"} className="nav-link text-sm fw-600 ">
                {t("layout.header.blog")}
              </Link>
            </li>
            {hideGetStarted && (
              <li className="nav-item text-center">
                <Link
                  href="/order"
                  type="button"
                  className="btn btn-secondary me-2"
                >
                  {t("btn.get_started")}
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
