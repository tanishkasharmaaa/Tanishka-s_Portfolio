import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  </div>
);


export default MenuOverlay;
