import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "15px",
      background: "#1976d2"
    }}>
      <Link to="/" style={{color:"white"}}>Home</Link>
      <Link to="/symptoms" style={{color:"white"}}>Symptoms</Link>
      <Link to="/medicine" style={{color:"white"}}>Medicine</Link>
      <Link to="/pharmacy" style={{color:"white"}}>Pharmacy</Link>
      <Link to="/skin" style={{color:"white"}}>Skin AI</Link>
      <Link to="/history" style={{ color: "white" }}>History</Link>
      <Link to="/chatbot" style={{ color: "white" }}>Chatbot</Link>
    </nav>
  );
}

export default Navbar;