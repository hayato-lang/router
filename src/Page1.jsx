import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です。</h1>
      <Link to="/Page1/detailA">Page1DetailA</Link>
      <br />
      <Link to="/Page1/detailB">Page1DetailB</Link>
    </div>
  );
};