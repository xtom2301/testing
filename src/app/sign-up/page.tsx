import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const user = await currentUser();

  if (user) {
    redirect("/");
  }

  return <SignUp routing="hash" signInUrl="/sign-in" />;
}
