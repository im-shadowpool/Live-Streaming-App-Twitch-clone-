import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-red-800">Hello there</h1>
      <div >
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
