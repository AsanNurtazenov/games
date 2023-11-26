import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
    return (
        <header class="" >
<nav class="level  has-background-info-dark "style={{'height':'150px'}}>
  <p class="level-item has-text-centered">
    <a class="has-text-light subtitle">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="has-text-light subtitle">Menu</a>
  </p>
  <p class="level-item has-text-centered">
    <a class=" has-text-light title is-1">Speed <br />reading</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="has-text-light subtitle">Reservations</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="has-text-light subtitle">Contact</a>
  </p>
</nav>
        </header>
    )
}
export default Navbar;