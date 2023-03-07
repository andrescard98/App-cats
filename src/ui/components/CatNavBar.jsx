import { Link } from "react-router-dom";

export const CatNavBar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>App Cats</h1>
      </div>

      <div>
        <Link to="/">Subir gatos</Link>
        <Link to="/favoritos">Gatos favoritos</Link>
      </div>
    </div>
  )
}