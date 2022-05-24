import img from "../img/prismatic-todos.png";
function Navbar() {
  return (
    <nav>
      <ul>
        <li className="img">
          <a href="/">
            <img
              src={img}
              style={{ height: 75, margin: -30, padding: 0 }}
              alt="Prismatic Todos"
            />
          </a>
        </li>
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
    </nav>
  );
}

export default Navbar;