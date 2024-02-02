import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const location = useLocation();

  console.log(location);

  return <div>Products detail - {params.productId}</div>;
}
