import { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Siderbar from "../Sidebar/Siderbar";

const DashbordLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Siderbar />
      <div>
        <Header />

        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashbordLayout;
