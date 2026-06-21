import { useEffect, useState } from "react";
import { SiteShell } from "./components/SiteShell";
import { parseHash } from "./lib/router";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { EmployeeDetailPage } from "./pages/EmployeeDetailPage";
import { HomePage } from "./pages/HomePage";
import { PeoplePage } from "./pages/PeoplePage";
import type { RouteState } from "./types";

function getRoute(): RouteState {
  return parseHash(window.location.hash || "#/");
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  const route = getRoute();

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "/";
    }

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <SiteShell hash={hash}>
      {route.page === "home" ? <HomePage /> : null}
      {route.page === "people" ? <PeoplePage /> : null}
      {route.page === "employee" ? (
        <EmployeeDetailPage employeeId={route.employeeId} />
      ) : null}
      {route.page === "activities" ? <ActivitiesPage /> : null}
    </SiteShell>
  );
}
