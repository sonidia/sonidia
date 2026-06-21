import {
  Activity,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPinned,
  MessageSquareQuote,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { AvatarBadge } from "../components/AvatarBadge";
import { ButtonLink } from "../components/ButtonLink";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import {
  amenities,
  branchIcon,
  company,
  officeIcon,
  socials,
} from "../data/company";
import {
  caseStudies,
  channelStack,
  painPoints,
  processSteps,
  proofMetrics,
  landingFaqs,
  serviceHighlights,
  solutions,
  testimonials,
  whyChooseUs,
} from "../data/landing";
import employees from "../data/employees.json";
import { routes } from "../lib/router";

const heroSignals = [
  { label: "Production", value: "MMO content, social, shop, livestream" },
  { label: "Operation", value: "Tài nguyên, banking, affiliate, account flow" },
  { label: "Automation", value: "Tool nội bộ, dashboard, AI workflow" },
];

const stats = [
  { label: "Quy mô", value: company.scale, icon: Users },
  { label: "Chi nhánh", value: "2 địa điểm", icon: MapPinned },
  { label: "Thành lập", value: company.foundedAt, icon: CalendarDays },
  { label: "Lịch làm việc", value: company.openingHours, icon: Clock3 },
];

const serviceTones = [
  "border-teal-200 bg-teal-50/70 text-teal-800",
  "border-rose-200 bg-rose-50/70 text-rose-800",
  "border-amber-200 bg-amber-50/70 text-amber-800",
  "border-indigo-200 bg-indigo-50/70 text-indigo-800",
];

export function HomePageEnhanced() {
  const OfficeIcon = officeIcon;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <img
          src="/assets/sonic-hero.png"
          alt="Không gian vận hành sáng tạo của Sonic Group"
          className="sonic-hero-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(15,23,42,0.72)_48%,rgba(15,23,42,0.22)_100%)]" />
        <div className="sonic-grid absolute inset-0 opacity-45" />

        <div className="relative mx-auto flex min-h-[76svh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="hero-motion inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-white/15 backdrop-blur">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              MMO production, media, commerce, automation
            </p>
            <h1 className="hero-motion hero-delay-1 mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Sonic Group
            </h1>
            <p className="hero-motion hero-delay-2 mt-5 max-w-3xl text-sm leading-6 text-slate-100 sm:text-base">
              Công ty MMO production vận hành nội bộ các mảng content, social account,
              e-commerce, livestream, affiliate, banking, nguyên liệu MMO và tool
              automation/AI để tạo ra một production engine có nhịp, có dữ liệu và có tốc độ.
            </p>

            <div className="hero-motion hero-delay-3 mt-7 flex flex-wrap gap-2">
              <ButtonLink href={routes.activities} icon={Activity} variant="light">
                Xem hoạt động
              </ButtonLink>
              <ButtonLink href={routes.people} icon={Users} variant="ghost">
                Đội ngũ production
              </ButtonLink>
            </div>
          </div>

          <div className="hero-motion hero-delay-4 mt-10 grid max-w-5xl gap-3 sm:grid-cols-3">
            {heroSignals.map((signal, index) => (
              <div
                key={signal.label}
                className="sonic-glass-tile border-l border-teal-300/70 bg-white/[0.05] px-3 py-3 backdrop-blur-sm"
                style={{ animationDelay: `${900 + index * 120}ms` }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  {signal.label}
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-white">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>

          <div className="hero-motion hero-delay-5 mt-6 flex max-w-5xl flex-wrap gap-2">
            {["TikTok Shop", "Shopify", "Etsy", "Livestream", "Hotmail", "Sock proxy", "Phone number", "AI tool"].map(
              (item, index) => (
                <span
                  key={item}
                  className="sonic-floating-chip inline-flex h-8 items-center rounded-full bg-slate-950/50 px-3 text-xs font-semibold text-slate-100 ring-1 ring-white/10 backdrop-blur"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-white">
        <div className="sonic-marquee flex gap-2 py-3">
          {[...channelStack, ...channelStack].map((channel, index) => (
            <span
              key={`${channel}-${index}`}
              className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-stone-50 px-3 text-xs font-semibold text-slate-600"
            >
              <Sparkles className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
              {channel}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-10">
        <Reveal className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="motion-card flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-3 shadow-sm"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-950">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quy mô vận hành"
            title="Một production team gọn, rõ owner, chạy được nhiều kênh"
            description="Sonic không phải đơn vị outsource. Đây là hệ vận hành nội bộ cho các mảng MMO, content, commerce, livestream, affiliate, banking và automation."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {proofMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.label}
                  className="motion-card rounded-lg border border-slate-200 bg-stone-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-4xl font-semibold text-slate-950">
                      {metric.value}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-950">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <Reveal className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Vấn đề"
              title="Khi tăng trưởng đa kênh, điểm nghẽn thường nằm giữa các đội"
              description={
                <span className="text-slate-300">
                  Content, shop, livestream, affiliate, banking và nguyên liệu MMO có thể
                  chạy tốt riêng lẻ, nhưng rất dễ mất tốc độ khi dữ liệu không nối với nhau.
                </span>
              }
            />
            <div className="mt-8 grid gap-3">
              {painPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="motion-card rounded-lg border border-white/10 bg-white/[0.06] p-4"
                  >
                    <Icon className="h-5 w-5 text-rose-200" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="lg:pt-16">
            <SectionHeader
              eyebrow="Giải pháp"
              title="Sonic biến vận hành thành một hệ thống có tín hiệu"
              description={
                <span className="text-slate-300">
                  Không chỉ làm nội dung hay làm tool riêng lẻ, Sonic nối chúng thành
                  workflow để đội ngũ biết cần làm gì tiếp theo.
                </span>
              }
            />
            <div className="mt-8 grid gap-3">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="motion-card rounded-lg border border-teal-300/20 bg-teal-300/[0.08] p-4"
                  >
                    <Icon className="h-5 w-5 text-teal-200" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-stone-50 py-16">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Năng lực production"
            title="Bốn lớp vận hành của một MMO production engine"
            description="Các mảng được tổ chức như dây chuyền sản xuất: tạo tín hiệu, vận hành tài khoản, bán hàng đa kênh và tự động hóa thao tác lặp."
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-4">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`motion-card rounded-lg border p-4 shadow-sm ${serviceTones[index]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] opacity-75">
                    {service.kicker}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Quy trình"
            title="Từ tín hiệu đến hệ thống vận hành"
            description="Một quy trình ngắn, dễ theo dõi, phù hợp các đội cần thử nghiệm nhanh nhưng vẫn kiểm soát được chất lượng."
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.step}
                  className="motion-card relative rounded-lg border border-slate-200 bg-stone-50 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-teal-700">{step.step}</span>
                    <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-sm font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-stone-50 py-16">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Nhật ký sản xuất"
              title="Hoạt động nội bộ, workshop và ngày vận hành đã thực hiện"
              description="Mỗi hoạt động là một lát cắt production: đội nào chạy, chạy để làm gì, và kết quả vận hành cần cải thiện."
            />
            <ButtonLink href={routes.activities} icon={ArrowRight} variant="dark">
              Xem tất cả
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="motion-card overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-slate-950 backdrop-blur">
                    {study.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-950">{study.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.summary}</p>
                  <div className="mt-4 grid gap-2">
                    {study.results.map((result) => (
                      <div
                        key={result}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-100 text-teal-700">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="DNA vận hành"
              title="Điểm mạnh nằm ở cách nối các mảng tưởng như rời nhau"
              description="Sonic vận hành như một production house: content, account, commerce, live, tài nguyên và tool cùng chạy trong một nhịp nội bộ."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {company.organization.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Dữ liệu hiện có {employees.length} hồ sơ nhân sự trong JSON.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="motion-card rounded-lg border border-slate-200 bg-stone-50 p-4"
                >
                  <Icon className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Góc nhìn nội bộ"
            title="Góc nhìn từ đội vận hành"
            description={
              <span className="text-slate-300">
                Những ghi chú này phản ánh cách các owner nội bộ nhìn về nhịp production
                và cách Sonic vận hành hằng ngày.
              </span>
            }
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="motion-card rounded-lg border border-white/10 bg-white/[0.06] p-4"
              >
                <MessageSquareQuote className="h-5 w-5 text-amber-200" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-slate-200">“{item.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <AvatarBadge
                    initials={item.name
                      .split(" ")
                      .slice(-2)
                      .map((word) => word[0])
                      .join("")}
                    tone={item.tone}
                    size="sm"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Văn phòng"
            title="Không gian làm việc có đủ nhịp vận hành và tiện ích"
            description={`Lịch mở cửa ${company.openingHours}. Hai chi nhánh tại TP. Hồ Chí Minh, phù hợp mô hình đội nhóm cần họp nhanh, sản xuất nội dung và vận hành liên tục.`}
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {company.branches.map((branch) => {
              const Icon = branchIcon;
              return (
                <article
                  key={branch.name}
                  className="motion-card rounded-lg border border-slate-200 bg-stone-50 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold text-slate-950">{branch.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{branch.address}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <span
                  key={amenity.label}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-slate-100 px-3 text-xs font-semibold text-slate-700"
                >
                  <Icon className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                  {amenity.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-stone-50 py-16">
        <Reveal className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Thông tin nhanh"
              description="Các câu hỏi thường gặp được viết theo hướng giúp ứng viên, đối tác hoặc nhân sự mới hiểu Sonic trong vài phút."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="grid gap-3">
            {landingFaqs.map((faq) => (
              <details
                key={faq.question}
                className="motion-card group rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">
                  <span className="inline-flex items-center gap-2">
                    <OfficeIcon className="h-4 w-4 text-teal-700" aria-hidden="true" />
                    {faq.question}
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-slate-950 p-6 text-white sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Nhịp tiếp theo
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Xem cách Sonic tổ chức đội ngũ và các hoạt động production
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Nếu muốn hiểu công ty nhanh nhất, bắt đầu từ danh sách nhân sự, phòng ban
                và các hoạt động nội bộ đã thực hiện.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <ButtonLink href={routes.activities} icon={Activity} variant="light">
                Xem hoạt động
              </ButtonLink>
              <ButtonLink href={routes.people} icon={Users} variant="ghost">
                Xem đội ngũ
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
