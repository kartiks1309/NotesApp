import react from "react";

function Footer() {
  
  let yr = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Keeper App © {yr}</p>
      </footer>
    </div>
  );
}

export default Footer;
