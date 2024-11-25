import Landing from "@/components/Landing";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-4xl font-bold text-indigo-500">Landing</h1>
      <Landing />
    </div>
  );
}
