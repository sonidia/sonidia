import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Coffee,
  Facebook,
  GlassWater,
  Globe2,
  Mail,
  MapPin,
  Microwave,
  Music2,
  Network,
  PackageCheck,
  Radio,
  Snowflake,
  Sparkles,
  Store,
  Twitter,
  Utensils,
  Video,
  WalletCards,
} from "lucide-react";

export const company = {
  name: "Sonic Group",
  foundedAt: "20/10/2025",
  openingHours: "8:00 - 17:30, thứ 2 đến thứ 7",
  scale: "30 - 80 nhân sự",
  branches: [
    {
      name: "Chi nhánh 1",
      address:
        "568/18/2 Lê Trọng Tấn, Phường Tây Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
    },
    {
      name: "Chi nhánh 2",
      address:
        "239 Đ. Tôn Thất Tùng, Đông Hòa, Hồ Chí Minh 70000, Việt Nam",
    },
  ],
  organization: [
    "1 Chủ tịch",
    "1 Giám đốc",
    "7 Trưởng phòng",
    "1 Kế toán",
    "1 Hành chính nhân sự",
  ],
};

export const capabilities = [
  {
    title: "Media Content",
    description:
      "Sản xuất short video, kịch bản social, nội dung thương mại và lịch đăng đa nền tảng.",
    icon: Video,
    tone: "bg-teal-50 text-teal-700 ring-teal-100",
  },
  {
    title: "MMO & Social",
    description:
      "Vận hành TikTok, TikTok Beta, TikTok Lite, Facebook, Twitter và các tài nguyên tăng trưởng.",
    icon: Network,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    title: "E-commerce",
    description:
      "Phát triển shop Shopify, Etsy, TikTok Shop, nghiên cứu sản phẩm và tối ưu listing.",
    icon: Store,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "Livestream",
    description:
      "Thiết kế phiên live, điều phối host, setup studio và đo hiệu suất tương tác.",
    icon: Radio,
    tone: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  },
  {
    title: "Affiliate & Banking",
    description:
      "Theo dõi affiliate, payout, đối soát banking và dữ liệu thanh toán nội bộ.",
    icon: WalletCards,
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "Automation & AI",
    description:
      "Xây tool automation, dashboard vận hành, trợ lý AI và workflow giảm thao tác lặp.",
    icon: Bot,
    tone: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    title: "Nguyên liệu MMO",
    description:
      "Quản lý hotmail, sock proxy, phone number và kiểm soát chất lượng tài nguyên.",
    icon: PackageCheck,
    tone: "bg-slate-100 text-slate-700 ring-slate-200",
  },
];

export const departments = [
  {
    name: "Phòng Kĩ thuật",
    summary: "Phát triển tool automation, AI workflow, dashboard và hạ tầng vận hành.",
    icon: Bot,
  },
  {
    name: "Phòng Content",
    summary: "Lên ý tưởng, kịch bản, dựng video và đo hiệu suất nội dung social.",
    icon: Sparkles,
  },
  {
    name: "Phòng E-commerce",
    summary: "Vận hành Shopify, Etsy, TikTok Shop, research sản phẩm và chăm sóc đơn.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Phòng Kinh doanh",
    summary: "Mở rộng đối tác, affiliate, doanh thu và phân tích cơ hội thị trường.",
    icon: WalletCards,
  },
];

export const amenities = [
  { label: "Tủ lạnh", icon: Snowflake },
  { label: "Nước uống", icon: GlassWater },
  { label: "Trà", icon: Sparkles },
  { label: "Cafe", icon: Coffee },
  { label: "Lò vi sóng", icon: Microwave },
  { label: "Bàn ăn", icon: Utensils },
];

export const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/", icon: Music2 },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { label: "Website", href: "#/", icon: Globe2 },
  { label: "Email", href: "mailto:hello@sonicgroup.vn", icon: Mail },
];

export const faqs = [
  {
    question: "Sonic Group hoạt động trong những mảng nào?",
    answer:
      "Sonic Group tập trung vào media content, MMO, thương mại điện tử, social, livestream, affiliate, banking support, nguyên liệu MMO và phát triển tool automation/AI.",
  },
  {
    question: "Công ty làm việc vào thời gian nào?",
    answer:
      "Thời gian làm việc là 8:00 - 17:30 từ thứ 2 đến thứ 7 tại hai chi nhánh ở TP. Hồ Chí Minh.",
  },
  {
    question: "Quy mô nhân sự hiện tại là bao nhiêu?",
    answer:
      "Định hướng quy mô vận hành của Sonic Group là 30 - 80 người, tổ chức theo các phòng ban chuyên môn và đội vận hành liên phòng.",
  },
  {
    question: "Dữ liệu nhân viên có dễ cập nhật không?",
    answer:
      "Có. Danh sách nhân viên được lưu trong file JSON, gồm họ tên, avatar, chức vụ, phòng ban, ngày gia nhập và thông tin mô tả.",
  },
];

export const branchIcon = MapPin;
export const officeIcon = Building2;
