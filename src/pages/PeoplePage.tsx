import { Filter, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { EmployeeCard } from "../components/EmployeeCard";
import { SectionHeader } from "../components/SectionHeader";
import employeesJson from "../data/employees.json";
import type { Department, Employee } from "../types";

const employees = employeesJson as Employee[];

const departmentOrder: Department[] = [
  "Ban lãnh đạo",
  "Phòng Kĩ thuật",
  "Phòng Content",
  "Phòng E-commerce",
  "Phòng Kinh doanh",
  "Phòng Livestream & Social",
  "Phòng Affiliate & Banking",
  "Phòng Vận hành Nguyên liệu MMO",
  "Tài chính - Kế toán",
  "Hành chính nhân sự",
];

export function PeoplePage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState<Department | "Tất cả">("Tất cả");

  const filteredEmployees = useMemo(() => {
    const search = query.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchDepartment =
        department === "Tất cả" || employee.department === department;
      const matchSearch =
        !search ||
        employee.name.toLowerCase().includes(search) ||
        employee.position.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search);

      return matchDepartment && matchSearch;
    });
  }, [department, query]);

  const grouped = departmentOrder
    .map((departmentName) => ({
      department: departmentName,
      people: filteredEmployees.filter(
        (employee) => employee.department === departmentName,
      ),
    }))
    .filter((group) => group.people.length > 0);

  return (
    <>
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeader
            eyebrow="Nhân sự"
            title="Danh sách đội ngũ Sonic Group"
            description="Thông tin nhân sự được lấy trực tiếp từ file JSON, gồm họ tên, avatar, chức vụ, phòng ban, chi nhánh và thời gian gia nhập."
          />
          <div className="rounded-lg border border-slate-200 bg-stone-50 p-4">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-white">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Quy mô mẫu
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {employees.length} nhân sự đang hiển thị
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Bạn có thể chỉnh danh sách tại file{" "}
              <span className="font-semibold text-slate-950">employees.json</span> để cập nhật
              nhân sự mới, chuyển phòng ban hoặc thay avatar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:grid-cols-[1fr_auto]">
            <label className="flex h-9 items-center gap-2 rounded-full bg-slate-100 px-3 text-sm text-slate-600">
              <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm theo tên, chức vụ, phòng ban"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {["Tất cả", ...departmentOrder].map((departmentName) => {
                const active = department === departmentName;

                return (
                  <button
                    key={departmentName}
                    type="button"
                    onClick={() => setDepartment(departmentName as Department | "Tất cả")}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition ${
                      active
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                    }`}
                  >
                    <Filter className="h-3.5 w-3.5" aria-hidden="true" />
                    {departmentName}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-8">
            {grouped.map((group) => (
              <section key={group.department}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="text-base font-semibold text-slate-950">
                    {group.department}
                  </h2>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                    {group.people.length} người
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {group.people.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} />
                  ))}
                </div>
              </section>
            ))}

            {grouped.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="text-sm font-semibold text-slate-950">
                  Không có nhân sự phù hợp
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Hãy thử từ khóa khác hoặc chọn lại phòng ban.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
