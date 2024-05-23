import React from "react";

export function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
