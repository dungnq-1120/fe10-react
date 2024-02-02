import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateLayout() {
  const isLogin = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("login", { state: { key: "value" } });
    }
  }, []);

  return (
    <div>
      <div>Sidebar</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}
