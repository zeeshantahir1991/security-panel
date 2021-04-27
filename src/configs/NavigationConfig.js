import {
  PlusCircleOutlined,
  SecurityScanTwoTone
} from "@ant-design/icons";





const securityNavTree = [
  {
    key: "security",
    path: "/app/pages",
    title: "Security Company",
    icon: SecurityScanTwoTone,
    breadcrumb: true,
    submenu: [
      {
        key: "security-pages",
        path: "/app/pages",
        title: "Security Company",
        icon: "/img/sidebar/company.png",
        breadcrumb: true,
        submenu: [
          {
            key: "security-pages-manageDetails",
            path: "/app/pages/manage-details",
            title: "Manage Details",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "security-pages-letterHeadSettings",
            path: "/app/pages/letter-head-settings",
            title: "Payment Options",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "security-pages-docs",
            path: "/app/pages/docs",
            title: "Docs",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ],
      }
    ],
  },
];

const staffNavTree = [
  {
    key: "staff",
    path: "/app/pages",
    title: "Staff",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "staff-pages",
        path: "/app/pages",
        title: "Staff",
        icon: "/img/sidebar/security-man.png",
        breadcrumb: true,
        submenu: [
          {
            key: "staff-pages-guards",
            path: "/app/dashboards/default",
            title: "Guards",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "staff-pages-addguard",
            path: "/app/pages/add-guard",
            title: "Add Guard",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ],
      },
    ],
  },
];

const clientNavTree = [
  {
    key: "client",
    path: "/app/pages",
    title: "Client",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "client-pages",
        path: "/app/pages",
        title: "Client",
        icon: "/img/sidebar/customer-review.png",
        breadcrumb: true,
        submenu: [
          {
            key: "client-pages-clients",
            path: "/app/pages/clients",
            title: "Clients",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "client-pages-addclient",
            path: "/app/pages/add-client",
            title: "Add Client",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ],
      },
    ],
  },
];

const siteNavTree = [
  {
    key: "site",
    path: "/app/pages",
    title: "Site",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "site-pages",
        path: "/app/pages",
        title: "Site",
        icon: "/img/sidebar/internet.png",
        breadcrumb: true,
        submenu: [
          {
            key: "site-pages-sites",
            path: "/app/pages/static-sites",
            title: "Sites",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "client-pages-addsgsite",
            path: "/app/pages/add-sg-site",
            title: "Add Site",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          // {
          //   key: "client-pages-adddssite",
          //   path: "/app/pages/add-ds-site",
          //   title: "Add DS Site",
          //   icon: "",
          //   breadcrumb: true,
          //   submenu: [],
          // },
          // {
          //   key: "client-pages-addcctvsite",
          //   path: "/app/pages/add-cctv-site",
          //   title: "Add CCTV Site",
          //   icon: "",
          //   breadcrumb: true,
          //   submenu: [],
          // }
        ],
      },
    ],
  },
];

const subcontractorNavTree = [
  {
    key: "subcontractor",
    path: "/app/pages",
    title: "Sub Contractor",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "subcontractor-pages",
        path: "/app/pages",
        title: "Sub Contractor",
        icon: "/img/sidebar/carpenter.png",
        breadcrumb: true,
        submenu: [
          {
            key: "subcontractor-pages-subcontractors",
            path: "/app/pages/sub-contractors",
            title: "Sub Contractors",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "subcontractor-pages-addsubcontractor",
            path: "/app/pages/add-sub-contractor",
            title: "Add Sub Contractor",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ],
      },
    ],
  },
];

const optNavTree = [
  {
    key: "opt",
    path: "/app/pages",
    title: "Operations Centre",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "opt-pages",
        path: "/app/pages",
        title: "Operations Centre",
        icon: "/img/sidebar/operating-system.png",
        breadcrumb: true,
        submenu: [
          {
            key: "opt-pages",
            path: "/app/pages/operations",
            title: "Operations",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const schedulingNavTree = [
  {
    key: "scheduling",
    path: "/app/pages",
    title: "Scheduling",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "scheduling-pages",
        path: "/app/pages",
        title: "Scheduling",
        icon: "/img/sidebar/calendar.png",
        breadcrumb: true,
        submenu: [
          {
            key: "scheduling-pages-new-shift",
            path: "/app/pages/new-shift",
            title: "New Shift",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "scheduling-pages-calendar",
            path: "/app/pages/calendar",
            title: "Calendar",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "scheduling-pages-shift-list",
            path: "/app/pages/shift-list",
            title: "Shift List",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "scheduling-pages-cancelled-shifts",
            path: "/app/pages/cancelled-shifts",
            title: "Cancelled Shifts",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ]
      }
    ],
  },
];

const mobilepatrolNavTree = [
  {
    key: "mobile",
    path: "/app/pages",
    title: "Mobile Patrol",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "mobile-pages",
        path: "/app/pages",
        title: "Mobile Patrol",
        icon: "/img/sidebar/police-car.png",
        breadcrumb: true,
        submenu: [
          {
            key: "mobile-pages-sites",
            path: "/app/pages/mobile-patrol-sites",
            title: "View Master Sites",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "mobile-pages-add-sites",
            path: "/app/pages/add-mobile-patrol-site",
            title: "Add Master Site",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const keyholdingNavTree = [
  {
    key: "keyHolding",
    path: "/app/pages",
    title: "Key Holding",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "keyHolding-pages",
        path: "/app/pages",
        title: "Key Holding",
        icon: "/img/sidebar/wallet.png",
        breadcrumb: true,
        submenu: [
          {
            key: "keyHolding-pages-key-holding-sites",
            path: "/app/pages/key-holding-sites",
            title: "Key Holding Sites",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "keyHolding-pages-add-key-holding",
            path: "/app/pages/add-key-holding",
            title: "Add Key Holding Site",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "keyHolding-pages-dispatch-calls",
            path: "/app/pages/dispatch-calls",
            title: "Dispatch Calls",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "keyHolding-pages-new-dispatch-call",
            path: "/app/pages/new-dispatch-call",
            title: "New Dispatch Call",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const complianceNavTree = [
  {
    key: "compliance",
    path: "/app/pages",
    title: "compliance",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "compliance-pages",
        path: "/app/pages",
        title: "compliance",
        icon: "/img/sidebar/data.png",
        breadcrumb: true,
        submenu: [
          // {
          //   key: "compliance-pages-complianceTemplates",
          //   path: "/app/pages/compliance-templates",
          //   title: "Compliance Templates",
          //   icon: "",
          //   breadcrumb: true,
          //   submenu: [],
          // },
          {
            key: "compliance-pages-interviews",
            path: "/app/pages/compliance-interviews",
            title: "Interviews",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-vetting",
            path: "/app/pages/compliance-vetting",
            title: "Vetting",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-trainings",
            path: "/app/pages/compliance-trainings",
            title: "Trainings",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-siaRecords",
            path: "/app/pages/compliance-sia-records",
            title: "Sia Records",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-site-survey",
            path: "/app/pages/site-survey",
            title: "Site Survey",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-key-receipts",
            path: "/app/pages/key-receipts",
            title: "Key Receipts",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compliance-pages-key-log-register",
            path: "/app/pages/key-log-register",
            title: "Key Log Register",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ],
      },
    ],
  },
];

const backOfficeNavTree = [
  {
    key: "backOffice",
    path: "/app/pages",
    title: "Backoffice",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "backOffice-pages",
        path: "/app/pages",
        title: "Backoffice",
        icon: "/img/sidebar/challenges.png",
        breadcrumb: true,
        submenu: [
          {
            key: "backOffice-pages-vehicles",
            path: "/app/pages/vehicles",
            title: "Vehicles",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "backOffice-pages-add-vehicle",
            path: "/app/pages/add-vehicle",
            title: "Add Vehicle",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "backOffice-pages-client-invoices",
            path: "/app/pages/client-invoices",
            title: "Client Invoices",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "backOffice-pages-payroll",
            path: "/app/pages/payroll",
            title: "Payroll",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];


const subAndBillingNavTree = [
  {
    key: "subscription-and-billing",
    path: "/app/pages",
    title: "Subscription and Billing",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "subscription-and-billing-pages",
        path: "/app/pages",
        title: "Subscription and Billing",
        icon: "/img/sidebar/receipt.png",
        breadcrumb: true,
        submenu: [
          {
            key: "subscription-and-billing-pages-billing-details",
            path: "/app/pages/billing-details",
            title: "Billing Details",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "subscription-and-billing-pages-manage-payment-info",
            path: "/app/pages/manage-payment-info",
            title: "Manage Payment info",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "subscription-and-billing-pages-change-package",
            path: "/app/pages/change-package",
            title: "Change Package",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const reportsNavTree = [
  {
    key: "reports",
    path: "/app/pages",
    title: "Reports",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "reports-pages",
        path: "/app/pages",
        title: "Reports",
        icon: "/img/sidebar/document.png",
        breadcrumb: true,
        submenu: [
          {
            key: "reports-pages",
            path: "/app/pages",
            title: "Reports",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const settingsNavTree = [
  {
    key: "settings",
    path: "/app/pages",
    title: "Settings",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "settings-pages",
        path: "/app/pages",
        title: "Settings",
        icon: "/img/sidebar/mechanical-gears.png",
        breadcrumb: true,
        submenu: [
          {
            key: "settings-pages-trainings",
            path: "/app/pages/trainings",
            title: "Trainings",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "settings-pages-system-users",
            path: "/app/pages/system-users",
            title: "System Users",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "settings-pages-guard-positions",
            path: "/app/pages/guard-positions",
            title: "Guard Positions",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "settings-pages-security-services",
            path: "/app/pages/security-services",
            title: "Security Services",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "settings-pages-expense-types",
            path: "/app/pages/expense-types",
            title: "Expense Types",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "settings-pages-roles-and-permission",
            path: "/app/pages/roles-and-permission",
            title: "Roles And Permission",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
        ]
      }
    ],
  },
];

const navigationConfig = [
  // ...dashBoardNavTree,
  // ...appsNavTree,
  // ...componentsNavTree,
  ...securityNavTree,
  ...staffNavTree,
  ...clientNavTree,
  ...siteNavTree,
  ...mobilepatrolNavTree,
  // ...subcontractorNavTree,
  ...optNavTree,
  ...schedulingNavTree,
  ...complianceNavTree,
  ...keyholdingNavTree,
  ...backOfficeNavTree,
  ...subAndBillingNavTree,
  ...reportsNavTree,
  ...settingsNavTree
  // ...docsNavTree
];

export default navigationConfig;
