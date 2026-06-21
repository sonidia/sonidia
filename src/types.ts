export type Department =
  | "Ban lãnh đạo"
  | "Phòng Kĩ thuật"
  | "Phòng Content"
  | "Phòng E-commerce"
  | "Phòng Kinh doanh"
  | "Phòng Livestream & Social"
  | "Phòng Affiliate & Banking"
  | "Phòng Vận hành Nguyên liệu MMO"
  | "Tài chính - Kế toán"
  | "Hành chính nhân sự";

export type AvatarTone =
  | "teal"
  | "coral"
  | "gold"
  | "indigo"
  | "emerald"
  | "rose"
  | "slate";

export interface Employee {
  id: string;
  name: string;
  avatar: {
    initials: string;
    tone: AvatarTone;
  };
  position: string;
  department: Department;
  joinedAt: string;
  location: string;
  focus: string;
  bio: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  category: string;
  location: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface RouteState {
  page: "home" | "people" | "employee" | "activities";
  employeeId?: string;
}
