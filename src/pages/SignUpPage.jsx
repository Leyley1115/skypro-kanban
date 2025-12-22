import { AuthForm } from "../components/AuthForm/AuthForm";

const SignUpPage = ({ setIsAuth }) => {
  return <AuthForm isSignUp setIsAuth={setIsAuth} />;
};

export default SignUpPage;