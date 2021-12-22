import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1です。</h1>
      <Link to={{ pathname: "/Page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/Page1/detailB">Page1DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};