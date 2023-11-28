import { Checkbox } from "@mui/material";
import TextInput from "../../components/shared/TextInput/TextInput";
import AppLogo from "../../components/shared/custom-icons/AppLogo";
import { Link } from "react-router-dom";
import CustomButton from "../../components/shared/Button/Button";

const Login = () => {
  return (
    <div className=" bg-primaryLight  h-screen w-screen flex items-center justify-center flex-col gap-8">
      <AppLogo />
      <form className="bg-white mx-auto py-8 px-4 w-2/6 rounded-md ">
        <h5 className="text-black text-2xl text-center">Log In</h5>
        <p className="mb-7 text-sm text-darkGray">
          Enter your credentials to access your account
        </p>

        <TextInput label="EMAIL ADDRESS" />
        <TextInput label="PASSWORD" type="password" />
        <div className="flex items-center text-xs text-black justify-between mb-5">
          <div>
            <Checkbox />
            <span>Remember for 30 days</span>
          </div>

          <Link to="/forgotPassword" className="text-primary outline-none ">
            Forgot Password?
          </Link>
        </div>
        <CustomButton
          label="Log into Account "
          bg="bg-primary hover:bg-primary/90"
        />

        <p className="text-center mt-10 text-darkGray text-xs">
          Are you new here?{" "}
          <span>
            <Link to="/register" className="text-primary outline-none ">
              Create Account
            </Link>{" "}
          </span>
        </p>
      </form>
      <p>Powered by wavyhealth</p>
    </div>
  );
};

export default Login;
