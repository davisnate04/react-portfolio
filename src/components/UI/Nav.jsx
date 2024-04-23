import { Link } from "react-router-dom";
import Navbar from "./Navigation";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} to="/">
          About
        </Link>,
        <Link key={2} to="/contact">
          Contact
        </Link>,
        <Link key={3} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
