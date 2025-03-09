export const menuOptions = [
  {
    key: "coaches",
    title: "Coaches",
    icon: "/assets/typcn_user.png",
    children: [],
  },
  {
    key: "thinkleCreator",
    title: "Thinkle Creator",
    icon: "/assets/healthicons_magic-wand.png",
    children: [],
  },
  {
    key: "admin",
    title: "Admin",
    icon: "/assets/admin.png",
    children: [
      {
        key: "dashboard",
        title: "Dashboard",
        type: "Link",
        icon: "/assets/majesticons_home.png",
        path: "/dashboard",
      },
      {
        key: "userMgmnt",
        title: "User Management",
        type: "Link",
        icon: "/assets/heroicons_users-20-solid.png",
        path: "/userMgmnt",
      },
      {
        key: "coachMgmnt",
        title: "Coach Management",
        type: "Link",
        icon: "/assets/typcn_user.png",
        path: "/coachMgmnt",
      },
      {
        key: "creatorMgmnt",
        title: "Creator Management",
        type: "Link",
        icon: "/assets/healthicons_magic-wand.png",
        path: "/creatorMgmnt",
      },
      {
        key: "wallet&Transactions",
        title: "Wallet & Transactions",
        type: "Link",
        icon: "/assets/iconoir_wallet-solid.png",
        path: "/walletTransactions",
      },
      {
        key: "contentLib",
        title: "Content Library",
        type: "Link",
        icon: "/assets/icon-park-solid_play.png",
        path: "/contentLib",
      },
      {
        key: "analytics",
        title: "Analytics",
        type: "Link",
        icon: "/assets/ion_analytics.png",
        path: "/analytics",
      },
      {
        key: "settings",
        title: "Settings",
        type: "Link",
        icon: "/assets/material-symbols_settings-rounded.png",
        path: "/settings",
      },
    ],
  },
];

export const sidebarFooterOptions = [
  {
    key: "contactSupport",
    title: "Contact Support",
    icon: "/assets/material-symbols-light_help.png",
  },
  {
    key: "logout",
    title: "Logout",
    icon: "/assets/material-symbols_logout-rounded.png",
  },
];

export const contentLibTableHeader = [
  {
    key: "creatorName",
    value: "Creator Name",
  },
  {
    key: "contentId",
    value: "Content ID",
  },
  {
    key: "contentType",
    value: "Content Type",
  },
  {
    key: "title",
    value: "Title",
  },
  {
    key: "desc",
    value: "Description",
  },
  {
    key: "submittedAt",
    value: "Submitted At",
  },
  {
    key: "status",
    value: "Status",
  },
  {
    key: "actions",
    value: "Actions",
  },
];

export const contentLibTableData = [
  {
    key: "8F2D-A9C4-7B3E-5G1H",
    creatorName: "Vishal Suvarna",
    contentId: "#fdyvc57vc",
    contentType: "Video",
    title: "Stop Chasing Money, Start Chasing Impact - A Quick Guide",
    desc: "This topic offers a concise roadmap to shifting your focus from financial gain to creating meaningful change. Discover how prioritizing impact can lead to greater fulfillment and unexpected success.",
    submittedAt: "05/02/2025",
    status: "Accepted",
    statusCode: 1,
  },
  {
    key: "X6Y2-Z8W9-V3T4-K1M7",
    creatorName: "Dipankar Datta",
    contentId: "#fdyvc57vc",
    contentType: "Video",
    title: "Stop Chasing Money, Start Chasing Impact - A Quick Guide",
    desc: "This topic offers a concise roadmap to shifting your focus from financial gain to creating meaningful change. Discover how prioritizing impact can lead to greater fulfillment and unexpected success.",
    submittedAt: "05/02/2025",
    status: "Rejected",
    statusCode: 0,
  },
  {
    key: "P5Q1-R9S3-T8U2-N4L6",
    creatorName: "Divyanshu Gupta",
    contentId: "#fdyvc57vc",
    contentType: "Video",
    title: "Stop Chasing Money, Start Chasing Impact - A Quick Guide",
    desc: "This topic offers a concise roadmap to shifting your focus from financial gain to creating meaningful change. Discover how prioritizing impact can lead to greater fulfillment and unexpected success.",
    submittedAt: "05/02/2025",
    status: "In-review",
    statusCode: 2,
  },
  {
    key: "J7B2-C6D9-M1F3-X5Z8",
    creatorName: "Divyanshu Gupta",
    contentId: "#fdyvc57vc",
    contentType: "Video",
    title: "Stop Chasing Money, Start Chasing Impact - A Quick Guide",
    desc: "This topic offers a concise roadmap to shifting your focus from financial gain to creating meaningful change. Discover how prioritizing impact can lead to greater fulfillment and unexpected success.",
    submittedAt: "05/02/2025",
    status: "In-review",
    statusCode: 2,
  },
];
