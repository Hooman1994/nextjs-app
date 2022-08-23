import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>NextJs</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: "10px" }}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link href="/chart">
            <a>Chart</a>
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </div>
        <div style={{ margin: "10px" }}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
