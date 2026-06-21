import type { RouteState } from "../types";

export const routes = {
  home: "#/",
  people: "#/nhan-su",
  employee: (id: string) => `#/nhan-su/${id}`,
  activities: "#/hoat-dong",
};

export function parseHash(hash: string): RouteState {
  const normalized = hash.replace(/^#\/?/, "");

  if (normalized.startsWith("nhan-su/")) {
    return {
      page: "employee",
      employeeId: normalized.replace("nhan-su/", ""),
    };
  }

  if (normalized === "nhan-su") {
    return { page: "people" };
  }

  if (normalized === "hoat-dong") {
    return { page: "activities" };
  }

  return { page: "home" };
}

export function isActiveRoute(hash: string, page: RouteState["page"]) {
  return parseHash(hash).page === page;
}
