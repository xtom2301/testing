import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="text-4xl font-bold text-indigo-500">Dashboard</div>
      <div className="text-2xl text-indigo-500 w-full">
        Hello, {user && <div>{user.username}</div>}
      </div>
    </div>
  );
}
