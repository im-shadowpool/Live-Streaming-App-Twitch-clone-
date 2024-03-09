"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightToLine } from "lucide-react";
import { Hint } from "@/store/hints";

export default function Toggle() {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {/* Sidebar false */}
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button className="h-auto p-2" variant={"ghost"} onClick={onExpand}>
              <ArrowRightToLine className="w-4 h-4" />
            </Button>
          </Hint>
        </div>
      )}

      {/* Sidebar true */}
      {!collapsed && (
        <div className="flex items-center w-full p-3 pl-6 mb-2">
          <p className="font-semibold text-primary">FOr u</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              className="h-auto ml-auto p-2"
              variant={"ghost"}
            >
              <ArrowLeftFromLine className="w-4 h-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
}
