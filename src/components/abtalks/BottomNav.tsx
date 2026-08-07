import { Link, useRouterState } from "@tanstack/react-router";
import { Home, LayoutGrid, Code2, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/dashboard", label: "Dashboard", Icon: LayoutGrid },
  { to: "/day/12", label: "Today", Icon: Code2 },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-0 bg-card/95 px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur shadow-[0_-12px_40px_rgba(20,15,50,0.08)]">
      <ul className="mx-auto flex max-w-md items-center justify-around">
        {items.map(({ to, label, Icon }) => {
          const active = pathname === to;
          return (
            <li key={to}>
              <Link
                to={to}
                aria-label={label}
                className="grid h-11 w-11 place-items-center"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${
                    active ? "bg-primary" : "bg-transparent"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${active ? "text-primary-foreground" : "text-muted-foreground"}`}
                  />
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <span className="grid h-11 w-11 place-items-center" aria-hidden>
            <span className="grid h-11 w-11 place-items-center rounded-full">
              <User className="h-5 w-5 text-muted-foreground" />
            </span>
          </span>
        </li>
      </ul>
    </nav>
  );
}