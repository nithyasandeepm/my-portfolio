import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center py-6 md:h-16">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Nithya Raveendran
        </p>
      </div>
    </footer>
  );
}
