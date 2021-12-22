import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterです。</h1>
      <p>Urlパラメーターは{id}です</p>
      <p>Queryパラメーターは{query.get("name")}です</p>
    </div>
  );
};