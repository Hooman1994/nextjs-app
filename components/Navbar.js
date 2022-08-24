import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "200px",
          height: "50px",
          justifyContent: "space-evenly",
        }}
      >
        <img src="./logo.webp" />
        <span style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>
          NextJs
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/chart">
            <a>Chart</a>
          </Link>
        </div>
        <div>
          <Link href="/role">
            <a>Roles</a>
          </Link>
        </div>
        <div>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
