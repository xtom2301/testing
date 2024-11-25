import Link from "next/link";
import { Button } from "./ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className="border-b-2 border-gray-500/50">
      <div className="flex justify-between items-center my-4 px-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={56}
              height={56}
            />
            <h1 className="text-4xl font-bold">
              Tweet<span className="text-indigo-500">zy</span>
            </h1>
          </Link>
        </div>
        <div className="flex gap-4">
          {user ? (
            <div className="flex gap-4 items-center">
              <Link href="/settings">
                <Button className="flex gap-2 items-center">
                  <Image
                    className=""
                    src={user?.imageUrl}
                    alt="user"
                    width={24}
                    height={24}
                  />
                  <h1>Settings</h1>
                </Button>
              </Link>
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
