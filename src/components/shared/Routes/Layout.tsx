import { Route, Routes } from "react-router-dom";
import DashbordLayout from "../DashboardLayout/DashbordLayout";
import Dashboard from "../../../page/Dashboard/Dashboard";

const Layout = () => {
  const privateRoute: Array<{
    path: string;
    component: React.ReactNode;
  }> = [
    {
      path: "/dashboard",
      component: <Dashboard />,
    },
  ];

  // const navigate = useNavigate();

  return (
    <Routes>
      {privateRoute?.map(({ path, component }, idx) => {
        return (
          <Route
            key={idx}
            path={path}
            element={<DashbordLayout children={component} />}
          />
        );
      })}
    </Routes>
  );
};

export default Layout;
