// ─── Services Data ────────────────────────────────────────────────────────────

export const KIDNEY_CARE_LINKS = [
  {
    label: "Chronic Kidney Disease (CKD)",
    href: "/kidney-care/ckd",
    desc: "Stages 1–5 management & slowing progression",
  },
  {
    label: "Dialysis Care",
    href: "/kidney-care/dialysis",
    desc: "Hemodialysis & peritoneal dialysis",
  },
  {
    label: "Kidney Failure",
    href: "/kidney-care/kidney-failure",
    desc: "End-stage renal disease treatment",
  },
  {
    label: "Kidney Infection",
    href: "/kidney-care/kidney-infection",
    desc: "Pyelonephritis diagnosis & treatment",
  },
  {
    label: "Hypertension & Kidney Disease",
    href: "/kidney-care/hypertension",
    desc: "BP control to protect kidney function",
  },
  {
    label: "Diabetic Kidney Disease",
    href: "/kidney-care/diabetic-kidney-disease",
    desc: "Diabetic nephropathy management",
  },
  {
    label: "Acute Kidney Injury",
    href: "/kidney-care/acute-kidney-injury",
    desc: "Emergency kidney care",
  },
  {
    label: "Electrolyte Disorders",
    href: "/kidney-care/electrolyte-disorders",
    desc: "Sodium, potassium & fluid balance",
  },
];

export const UROLOGY_ANDROLOGY_LINKS = [
  {
    label: "Male Infertility",
    href: "/andrology/male-infertility",
    desc: "Semen analysis, hormones & treatment",
  },
  {
    label: "Erectile Dysfunction",
    href: "/andrology/erectile-dysfunction",
    desc: "Evidence-based ED evaluation & therapy",
  },
  {
    label: "Premature Ejaculation",
    href: "/andrology/premature-ejaculation",
    desc: "Behavioural & medical management",
  },
  {
    label: "Low Testosterone",
    href: "/andrology/low-testosterone",
    desc: "Hypogonadism diagnosis & TRT",
  },
  {
    label: "Prostate Problems",
    href: "/andrology/prostate-problems",
    desc: "BPH, prostatitis & prostate cancer screening",
  },
  {
    label: "Varicocele",
    href: "/andrology/varicocele",
    desc: "Varicocele repair & fertility impact",
  },
  {
    label: "Male Sexual Health",
    href: "/andrology/male-sexual-health",
    desc: "Comprehensive men's sexual wellness",
  },
  {
    label: "Men's Wellness Program",
    href: "/andrology/mens-wellness",
    desc: "Preventive health for men",
  },
];

export const KIDNEY_STONE_LINKS = [
  {
    label: "Kidney Stone Diagnosis",
    href: "/kidney-stone-center/diagnosis",
    desc: "Imaging, urinalysis & stone analysis",
  },
  {
    label: "Laser Stone Removal (RIRS/PCNL)",
    href: "/kidney-stone-center/laser-treatment",
    desc: "Minimally invasive stone removal",
  },
  {
    label: "Kidney Stone Prevention",
    href: "/kidney-stone-center/prevention",
    desc: "Dietary & medical prevention plans",
  },
  {
    label: "Stone Diet Counseling",
    href: "/kidney-stone-center/diet-plan",
    desc: "Personalised nutrition for stone prevention",
  },
];

export const UTI_AND_OTHER_LINKS = [
  {
    label: "Urinary Tract Infections (UTI)",
    href: "/urology/uti",
    desc: "Acute, recurrent & complicated UTI",
  },
  {
    label: "Urinary Incontinence",
    href: "/urology/urinary-incontinence",
    desc: "Stress, urge & overflow incontinence",
  },
  {
    label: "Kidney & Bladder Cancer",
    href: "/urology/kidney-bladder-cancer",
    desc: "Onco-urology screening & management",
  },
];

export const PEDIATRIC_LINKS = [
  {
    label: "Pediatric Urology",
    href: "/pediatrics",
    desc: "Urological conditions in children",
  },
  {
    label: "Newborn Care",
    href: "/newborn-care",
    desc: "Neonatal urological evaluation",
  },
  {
    label: "Vaccination Clinic",
    href: "/vaccination-clinic",
    desc: "Immunisation schedules for children",
  },
];

// ─── Resources Dropdown ───────────────────────────────────────────────────────

export const RESOURCES_LINKS = [
  {
    label: "Patient Resources",
    href: "/resources",
    icon: "FileText",
    desc: "Downloadable guides & diet charts",
  },
  {
    label: "FAQs",
    href: "/faq",
    icon: "HelpCircle",
    desc: "Common questions answered",
  },
  {
    label: "Kidney Risk Calculator",
    href: "/tools/kidney-risk",
    icon: "Calculator",
    desc: "Assess your kidney health risk",
  },
  {
    label: "Fertility Assessment",
    href: "/tools/fertility",
    icon: "ClipboardList",
    desc: "Male fertility self-assessment quiz",
  },
  {
    label: "Symptom Checker",
    href: "/tools/symptom-checker",
    icon: "Stethoscope",
    desc: "Find the right specialist for you",
  },
];

// ─── Public Navbar Links ──────────────────────────────────────────────────────

export const PUBLIC_NAV = [
  { label: "Home", href: "/" },
  { label: "About Doctor", href: "/about" },
  { label: "Treatments", href: "/treatments", hasMegaMenu: true },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Departments ──────────────────────────────────────────────────────────────

export const DEPARTMENTS = [
  {
    name: "Urology & Andrology",
    href: "/urology",
    description: "Comprehensive male urological & andrological care",
    icon: "Activity",
  },
  {
    name: "Pediatrics",
    href: "/pediatrics",
    description: "Urological care for infants, children & adolescents",
    icon: "Baby",
  },
];

// ─── Doctors ─────────────────────────────────────────────────────────────────

export const DOCTORS = [
  {
    name: "Dr. Gopikanth",
    specialty: "Nephrologist & Andrologist",
    href: "/about",
    image: "/images/dr-gopikanth.jpg",
  },
  {
    name: "Dr. Sireesha",
    specialty: "Pediatric Specialist",
    href: "/doctors/sireesha",
    image: "/images/dr-sireesha.jpg",
  },
];

// ─── Role-Based Sidebar Configs ───────────────────────────────────────────────

export type NavItem = {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  children?: NavItem[];
};

export const PATIENT_SIDEBAR: NavItem[] = [
  { label: "Dashboard", href: "/patient/dashboard", icon: "LayoutDashboard" },
  {
    label: "Appointments",
    href: "/patient/appointments",
    icon: "Calendar",
    badge: "2",
  },
  { label: "Doctors", href: "/patient/doctors", icon: "UserCheck" },
  { label: "Medical Reports", href: "/patient/records", icon: "FileText" },
  { label: "Prescriptions", href: "/patient/prescriptions", icon: "Pill" },
  { label: "Video Consultations", href: "/patient/video", icon: "Video" },
  { label: "Resources", href: "/patient/resources", icon: "BookOpen" },
  {
    label: "Notifications",
    href: "/patient/notifications",
    icon: "Bell",
    badge: "3",
  },
  { label: "Settings", href: "/patient/settings", icon: "Settings" },
];

export const DOCTOR_SIDEBAR: NavItem[] = [
  { label: "Dashboard", href: "/doctor/dashboard", icon: "LayoutDashboard" },
  {
    label: "Today's Appointments",
    href: "/doctor/appointments/today",
    icon: "CalendarClock",
    badge: "5",
  },
  {
    label: "All Appointments",
    href: "/doctor/appointments",
    icon: "Calendar",
  },
  { label: "Patients", href: "/doctor/patients", icon: "Users" },
  { label: "Medical Records", href: "/doctor/records", icon: "FolderHeart" },
  { label: "Prescriptions", href: "/doctor/prescriptions", icon: "Pill" },
  { label: "Reports", href: "/doctor/reports", icon: "BarChart3" },
  { label: "Video Consultations", href: "/doctor/video", icon: "Video" },
  {
    label: "Messages",
    href: "/doctor/messages",
    icon: "MessageSquare",
    badge: "7",
  },
  { label: "Analytics", href: "/doctor/analytics", icon: "TrendingUp" },
  { label: "Settings", href: "/doctor/settings", icon: "Settings" },
];

export const ADMIN_SIDEBAR: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "LayoutDashboard" },
  {
    label: "Patient Management",
    href: "/admin/patients",
    icon: "Users",
    children: [
      { label: "All Patients", href: "/admin/patients", icon: "Users" },
      {
        label: "New Registrations",
        href: "/admin/patients/new",
        icon: "UserPlus",
      },
    ],
  },
  {
    label: "Doctor Management",
    href: "/admin/doctors",
    icon: "Stethoscope",
    children: [
      {
        label: "All Doctors",
        href: "/admin/doctors",
        icon: "Stethoscope",
      },
      { label: "Add Doctor", href: "/admin/doctors/new", icon: "UserPlus" },
      {
        label: "Schedules",
        href: "/admin/doctors/schedules",
        icon: "CalendarCheck",
      },
    ],
  },
  {
    label: "Appointments",
    href: "/admin/appointments",
    icon: "Calendar",
    children: [
      {
        label: "All Appointments",
        href: "/admin/appointments",
        icon: "Calendar",
      },
      {
        label: "Today",
        href: "/admin/appointments/today",
        icon: "CalendarClock",
      },
      {
        label: "Pending",
        href: "/admin/appointments/pending",
        icon: "Clock",
        badge: "12",
      },
    ],
  },
  { label: "Consultations", href: "/admin/consultations", icon: "Video" },
  {
    label: "Content",
    href: "#",
    icon: "FileEdit",
    children: [
      { label: "Blogs", href: "/admin/blogs", icon: "BookOpen" },
      { label: "Testimonials", href: "/admin/testimonials", icon: "Star" },
      { label: "FAQs", href: "/admin/faqs", icon: "HelpCircle" },
      { label: "Resources", href: "/admin/resources", icon: "Download" },
      { label: "Treatments", href: "/admin/treatments", icon: "Activity" },
    ],
  },
  { label: "SEO Management", href: "/admin/seo", icon: "Search" },
  { label: "Analytics", href: "/admin/analytics", icon: "BarChart3" },
  { label: "Media Library", href: "/admin/media", icon: "Image" },
  { label: "System Settings", href: "/admin/settings", icon: "Settings" },
];

export const EDITOR_SIDEBAR: NavItem[] = [
  { label: "Dashboard", href: "/editor/dashboard", icon: "LayoutDashboard" },
  {
    label: "Blogs",
    href: "/editor/blogs",
    icon: "BookOpen",
    children: [
      { label: "All Posts", href: "/editor/blogs", icon: "List" },
      { label: "New Post", href: "/editor/blogs/new", icon: "Plus" },
      {
        label: "Categories",
        href: "/editor/blogs/categories",
        icon: "Tag",
      },
    ],
  },
  { label: "Resources", href: "/editor/resources", icon: "Download" },
  { label: "Testimonials", href: "/editor/testimonials", icon: "Star" },
  { label: "FAQs", href: "/editor/faqs", icon: "HelpCircle" },
  { label: "Media Library", href: "/editor/media", icon: "Image" },
  { label: "SEO Pages", href: "/editor/seo", icon: "Search" },
];
