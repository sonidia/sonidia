import { ArrowRight } from "lucide-react";
import { AvatarBadge } from "./AvatarBadge";
import { routes } from "../lib/router";
import type { Employee } from "../types";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <a
      href={routes.employee(employee.id)}
      className="group flex min-h-[132px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-soft"
    >
      <div className="flex items-start gap-3">
        <AvatarBadge
          initials={employee.avatar.initials}
          tone={employee.avatar.tone}
          size="md"
        />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-950">{employee.name}</h3>
          <p className="mt-1 text-xs font-medium text-teal-700">{employee.position}</p>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
            {employee.focus}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        <span className="truncate rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">
          {employee.department}
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-teal-700" />
      </div>
    </a>
  );
}
