import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { LayoutTemplate } from "lucide-react";
import Link from "next/link";

export default async function Actions() {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button

          size={"sm"}
          variant={'primary'}
          
          >Login</Button>
        </SignInButton>
      )}

      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground"
            asChild
          >
            <Link
                href={`/u/${user.username}`}
            >
              <LayoutTemplate className=" h-5 w-5 text-muted-foreground lg:mr-1" />
              <span className="hidden lg:block text-muted-foreground">
                Dashboard
              </span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />

        </div>
      )}
    </div>
  );
}
