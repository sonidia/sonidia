import { ArrowRight, CalendarDays, Image, MapPin, Sparkles } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import activitiesJson from "../data/activities.json";
import { routes } from "../lib/router";
import type { Activity } from "../types";

const activities = activitiesJson as Activity[];

const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00`));
}

export function ActivitiesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Hoạt động"
            title="Ảnh và thông tin các hoạt động đã thực hiện"
            description="Các hoạt động nội bộ được lưu thành dữ liệu có cấu trúc, gồm ảnh, thời gian, địa điểm, phân loại và điểm nổi bật."
          />
          <div className="rounded-lg border border-slate-200 bg-stone-50 p-4">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-white">
                <Image className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Thư viện
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {activities.length} hoạt động đang hiển thị
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Ảnh được đặt trong thư mục public/assets, còn nội dung được quản lý trong
              activities.json.
            </p>
            <div className="mt-5">
              <ButtonLink href={routes.home} icon={ArrowRight} variant="dark">
                Về Sonic Group
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:px-8">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div
                className={`relative min-h-[260px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3 inline-flex h-8 items-center gap-1.5 rounded-full bg-white/92 px-3 text-xs font-semibold text-slate-950 shadow-sm backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                  {activity.category}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-950">{activity.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(activity.date)}
                  </span>
                  <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-600">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {activity.location}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{activity.summary}</p>
                <div className="mt-5 grid gap-2">
                  {activity.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 rounded-lg bg-stone-50 p-3 text-sm leading-6 text-slate-600 ring-1 ring-slate-100"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
