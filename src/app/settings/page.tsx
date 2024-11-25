"use client";
import { UserProfile } from "@clerk/nextjs";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function SettingsPage() {
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const { user } = useUser();
  return (
    <>
      <h1 className="text-4xl font-bold mb-10 text-center">Settings</h1>
      <div className="text-center mb-10">
        Last Sign In:{" "}
        <span className="font-bold">
          {user?.lastSignInAt?.toLocaleString()}
        </span>
      </div>
      <div className="text-xl max-w-md m-auto">
        <div className="flex justify-between items-center mb-4 bg-slate-100 p-4 rounded-lg">
          <div>Show Account Details</div>
          <Switch
            checked={showAccountDetails}
            onCheckedChange={() => setShowAccountDetails(!showAccountDetails)}
          />
        </div>
        {showAccountDetails && (
          <div className="flex justify-center">
            <UserProfile routing="hash" />
          </div>
        )}
        <div className="flex justify-between items-center my-4 bg-slate-100 p-4 rounded-lg">
          <div>Dark Mode</div>
          <Switch />
        </div>
        <div></div>
      </div>
    </>
  );
}
