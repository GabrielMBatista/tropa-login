export function authenticate(email: string, password: string): boolean {
  return (
    email === process.env.NEXT_PUBLIC_AUTH_EMAIL &&
    password === process.env.NEXT_PUBLIC_AUTH_PASSWORD
  );
}
