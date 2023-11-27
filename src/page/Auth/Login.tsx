import TextInput from "../../components/shared/TextInput/TextInput";
import AppLogo from "../../components/shared/custom-icons/AppLogo";

const Login = () => {
  return (
    <div className="   bg-green-300  h-screen w-screen">
      <AppLogo />
      <div className="bg-white mx-auto">
        <h5 className="text-black text-2xl">Log In</h5>
        <p>Enter your credentials to access your account</p>
        <TextInput />
      </div>
    </div>
  );
};

export default Login;
