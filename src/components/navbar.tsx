import Link from "next/link";
import { Button } from "./ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className="border-b-2 border-indigo-500/50">
      <div className="flex justify-between items-center my-4 px-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            Testing<span className="text-indigo-500">Stuff</span>
          </Link>
        </div>
        <div className="flex gap-4">
          {user ? (
            <div className="flex gap-4">
              <Button className="bg-indigo-700 hover:bg-indigo-700/90">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <SignOutButton>
                <Button>Sign Out</Button>
              </SignOutButton>
            </div>
          ) : (
            <Button>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
