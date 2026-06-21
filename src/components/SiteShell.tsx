import { Activity, Home, Menu, Users, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { company, socials } from "../data/company";
import { isActiveRoute, routes } from "../lib/router";

interface SiteShellProps {
  children: ReactNode;
  hash: string;
}

const navigation = [
  { label: "Trang chủ", href: routes.home, page: "home" as const, icon: Home },
  { label: "Nhân sự", href: routes.people, page: "people" as const, icon: Users },
  {
    label: "Hoạt động",
    href: routes.activities,
    page: "activities" as const,
    icon: Activity,
  },
];

export function SiteShell({ children, hash }: SiteShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/82 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href={routes.home} className="flex items-center gap-2" aria-label="Sonic Group">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white">
              SG
            </span>
            <span className="text-sm font-semibold text-slate-950">{company.name}</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active =
                item.page === "people"
                  ? hash.startsWith("#/nhan-su")
                  : isActiveRoute(hash, item.page);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Mở menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Điều hướng mobile">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="inline-flex h-9 items-center gap-2 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-700"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white">
                SG
              </span>
              <span className="text-sm font-semibold text-slate-950">{company.name}</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Công ty truyền thông, MMO, thương mại điện tử, livestream, affiliate,
              banking support và phát triển automation/AI tại TP. Hồ Chí Minh.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-start gap-2 lg:justify-end">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition hover:border-teal-200 hover:text-teal-700"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
