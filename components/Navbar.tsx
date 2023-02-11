import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  let links = [
    {
      name: "الرئيسيه",
      link: "/",
    },
    {
      name: "عنا",
      link: "/about",
    },
    {
      name: "الدورات",
      link: "/courses",
    },
  ];
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Image src={Logo} alt="logo" width={45} />
        </div>
        <div className={`links ${openMenu ? "open" : ""}`}>
          <ul>
            {links.map((link, index) => (
              <li
                className={router.pathname == link.link ? "active" : ""}
                key={index}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <span
            className={`bars ${openMenu ? "open" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`auth ${openMenu ? "open" : ""}`}>
          <Link href="/" className="btn-primary">
            سجل الدخول
          </Link>
          <Link href="/" className="btn-secondary">
            انشاء حساب
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
