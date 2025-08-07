import dynamic from "next/dynamic";

const LoginForm = dynamic(
  () =>
    import("@/components/organisms/LoginForm/LoginForm").then(
      (mod) => mod.LoginForm
    ),
  {
    ssr: false,
  }
);

export default function Login() {
  return <LoginForm />;
}
