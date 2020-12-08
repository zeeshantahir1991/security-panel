import {
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
  SecurityScanTwoTone
} from "@ant-design/icons";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: "/app/dashboards",
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "dashboards-default",
        path: "/app/dashboards/default",
        title: "sidenav.dashboard.default",
        icon: '/img/sidebar/default.png',
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "dashboards-analytic",
        path: "/app/dashboards/analytic",
        title: "sidenav.dashboard.analytic",
        icon: '/img/sidebar/doughnut.png',
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "dashboards-sales",
        path: "/app/dashboards/sales",
        title: "sidenav.dashboard.sales",
        icon: '/img/sidebar/shopping-bag.png',
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const appsNavTree = [
  {
    key: "apps",
    path: "/app/apps",
    title: "sidenav.apps",
    icon: AppstoreOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'apps-mail',
        path: '/app/apps/mail/inbox',
        title: 'sidenav.apps.mail',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'apps-chat',
        path: '/app/apps/chat',
        title: 'sidenav.apps.chat',
        icon: MessageOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: "apps-calendar",
        path: "/app/apps/calendar",
        title: "sidenav.apps.calendar",
        icon: CalendarOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: 'apps-project',
        path: '/app/apps/project',
        title: 'sidenav.apps.project',
        icon: BulbOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-project-list',
            path: '/app/apps/project/list',
            title: 'sidenav.apps.project.list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-project-scrumboard',
            path: '/app/apps/project/scrumboard',
            title: 'sidenav.apps.project.scrumboard',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'apps-ecommerce',
        path: '/app/apps/ecommerce',
        title: 'sidenav.apps.ecommerce',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'apps-ecommerce-productList',
            path: '/app/apps/ecommerce/product-list',
            title: 'sidenav.apps.ecommerce.productList',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'apps-ecommerce-addProduct',
            path: '/app/apps/ecommerce/add-product',
            title: 'sidenav.apps.ecommerce.addProduct',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-ecommerce-editProduct',
            path: '/app/apps/ecommerce/edit-product/12',
            title: 'sidenav.apps.ecommerce.editProduct',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'apps-ecommerce-orders',
            path: '/app/apps/ecommerce/orders',
            title: 'sidenav.apps.ecommerce.orders',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      }
    ],
  },
];

const componentsNavTree = [
  {
    key: "components",
    path: "/app/components",
    title: "sidenav.components",
    icon: AntDesignOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "components-general",
        path: "/app/components/general",
        title: "sidenav.components.general",
        icon: InfoCircleOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-general-button",
            path: "/app/components/general/button",
            title: "sidenav.components.general.button",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-general-icon",
            path: "/app/components/general/icon",
            title: "sidenav.components.general.icon",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-general-typography",
            path: "/app/components/general/typography",
            title: "sidenav.components.general.typography",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-layout",
        path: "/app/components/layout",
        title: "sidenav.components.layout",
        icon: LayoutOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-layout-grid",
            path: "/app/components/layout/grid",
            title: "sidenav.components.layout.grid",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-layout-layout",
            path: "/app/components/layout/layout",
            title: "sidenav.components.layout.layout",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-navigation",
        path: "/app/components/navigation",
        title: "sidenav.components.navigation",
        icon: CompassOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-navigation-affix",
            path: "/app/components/navigation/affix",
            title: "sidenav.components.navigation.affix",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-breadcrumb",
            path: "/app/components/navigation/breadcrumb",
            title: "sidenav.components.navigation.breadcrumb",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-dropdown",
            path: "/app/components/navigation/dropdown",
            title: "sidenav.components.navigation.dropdown",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-menu",
            path: "/app/components/navigation/menu",
            title: "sidenav.components.navigation.menu",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-pagination",
            path: "/app/components/navigation/pagination",
            title: "sidenav.components.navigation.pagination",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-page-header",
            path: "/app/components/navigation/page-header",
            title: "sidenav.components.navigation.pageHeader",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-navigation-steps",
            path: "/app/components/navigation/steps",
            title: "sidenav.components.navigation.steps",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-data-entry",
        path: "/app/components/data-entry",
        title: "sidenav.components.dataEntry",
        icon: FileDoneOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-data-entry-auto-complete",
            path: "/app/components/data-entry/auto-complete",
            title: "sidenav.components.dataEntry.autoComplete",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-checkbox",
            path: "/app/components/data-entry/checkbox",
            title: "sidenav.components.dataEntry.checkbox",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-cascader",
            path: "/app/components/data-entry/cascader",
            title: "sidenav.components.dataEntry.cascader",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-date-picker",
            path: "/app/components/data-entry/date-picker",
            title: "sidenav.components.dataEntry.datePicker",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-form",
            path: "/app/components/data-entry/form",
            title: "sidenav.components.dataEntry.form",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-input-number",
            path: "/app/components/data-entry/input-number",
            title: "sidenav.components.dataEntry.inputNumber",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-input",
            path: "/app/components/data-entry/input",
            title: "sidenav.components.dataEntry.input",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-mentions",
            path: "/app/components/data-entry/mentions",
            title: "sidenav.components.dataEntry.mentions",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-rate",
            path: "/app/components/data-entry/rate",
            title: "sidenav.components.dataEntry.rate",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-radio",
            path: "/app/components/data-entry/radio",
            title: "sidenav.components.dataEntry.radio",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-switch",
            path: "/app/components/data-entry/switch",
            title: "sidenav.components.dataEntry.switch",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-slider",
            path: "/app/components/data-entry/slider",
            title: "sidenav.components.dataEntry.slider",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-select",
            path: "/app/components/data-entry/select",
            title: "sidenav.components.dataEntry.select",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-tree-select",
            path: "/app/components/data-entry/tree-select",
            title: "sidenav.components.dataEntry.treeSelect",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-transfer",
            path: "/app/components/data-entry/transfer",
            title: "sidenav.components.dataEntry.transfer",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-time-picker",
            path: "/app/components/data-entry/time-picker",
            title: "sidenav.components.dataEntry.timePicker",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-entry-upload",
            path: "/app/components/data-entry/upload",
            title: "sidenav.components.dataEntry.upload",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-data-display",
        path: "/app/components/data-display",
        title: "sidenav.components.dataDisplay",
        icon: DesktopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-data-display-avatar",
            path: "/app/components/data-display/avatar",
            title: "sidenav.components.dataDisplay.avatar",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-badge",
            path: "/app/components/data-display/badge",
            title: "sidenav.components.dataDisplay.badge",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-comment",
            path: "/app/components/data-display/comment",
            title: "sidenav.components.dataDisplay.comment",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-collapse",
            path: "/app/components/data-display/collapse",
            title: "sidenav.components.dataDisplay.collapse",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-carousel",
            path: "/app/components/data-display/carousel",
            title: "sidenav.components.dataDisplay.carousel",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-card",
            path: "/app/components/data-display/card",
            title: "sidenav.components.dataDisplay.card",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-calendar",
            path: "/app/components/data-display/calendar",
            title: "sidenav.components.dataDisplay.calendar",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-descriptions",
            path: "/app/components/data-display/descriptions",
            title: "sidenav.components.dataDisplay.descriptions",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-empty",
            path: "/app/components/data-display/empty",
            title: "sidenav.components.dataDisplay.empty",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-list",
            path: "/app/components/data-display/list",
            title: "sidenav.components.dataDisplay.list",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-popover",
            path: "/app/components/data-display/popover",
            title: "sidenav.components.dataDisplay.popover",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-statistic",
            path: "/app/components/data-display/statistic",
            title: "sidenav.components.dataDisplay.statistic",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-tree",
            path: "/app/components/data-display/tree",
            title: "sidenav.components.dataDisplay.tree",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-tooltip",
            path: "/app/components/data-display/tooltip",
            title: "sidenav.components.dataDisplay.tooltip",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-timeline",
            path: "/app/components/data-display/timeline",
            title: "sidenav.components.dataDisplay.timeline",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-tag",
            path: "/app/components/data-display/tag",
            title: "sidenav.components.dataDisplay.tag",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-tabs",
            path: "/app/components/data-display/tabs",
            title: "sidenav.components.dataDisplay.tabs",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-data-display-table",
            path: "/app/components/data-display/table",
            title: "sidenav.components.dataDisplay.table",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-feedback",
        path: "/app/components/feedback",
        title: "sidenav.components.feedback",
        icon: CommentOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-feedback-alert",
            path: "/app/components/feedback/alert",
            title: "sidenav.components.feedback.alert",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-drawer",
            path: "/app/components/feedback/drawer",
            title: "sidenav.components.feedback.drawer",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-modal",
            path: "/app/components/feedback/modal",
            title: "sidenav.components.feedback.modal",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-message",
            path: "/app/components/feedback/message",
            title: "sidenav.components.feedback.message",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-notification",
            path: "/app/components/feedback/notification",
            title: "sidenav.components.feedback.notification",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-progress",
            path: "/app/components/feedback/progress",
            title: "sidenav.components.feedback.progress",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-popconfirm",
            path: "/app/components/feedback/popconfirm",
            title: "sidenav.components.feedback.popconfirm",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-result",
            path: "/app/components/feedback/result",
            title: "sidenav.components.feedback.result",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-spin",
            path: "/app/components/feedback/spin",
            title: "sidenav.components.feedback.spin",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-feedback-skeleton",
            path: "/app/components/feedback/skeleton",
            title: "sidenav.components.feedback.skeleton",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-other",
        path: "/app/components/other",
        title: "sidenav.components.other",
        icon: RobotOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-other-anchor",
            path: "/app/components/other/anchor",
            title: "sidenav.components.other.anchor",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-other-backtop",
            path: "/app/components/other/backtop",
            title: "sidenav.components.other.backtop",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-other-config-provider",
            path: "/app/components/other/config-provider",
            title: "sidenav.components.other.configProvider",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-other-divider",
            path: "/app/components/other/divider",
            title: "sidenav.components.other.divider",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-charts",
        path: "/app/components/charts",
        title: "sidenav.charts",
        icon: PieChartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-charts-apex",
            path: "/app/components/charts/apex-charts",
            title: "sidenav.charts.apex",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-charts-chartjs",
            path: "/app/components/charts/chartjs",
            title: "sidenav.charts.chartjs",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components-maps",
        path: "/app/components/maps",
        title: "sidenav.maps",
        icon: EnvironmentOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "components-maps-google",
            path: "/app/components/maps/google-map",
            title: "sidenav.maps.google",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "components-maps-simple",
            path: "/app/components/maps/simple-map",
            title: "sidenav.maps.simple",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const docsNavTree = [
  {
    key: "docs",
    path: "/app/docs",
    title: "sidenav.docs",
    icon: BookOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "docs-documentation",
        path: "/app/docs/documentation",
        title: "sidenav.docs.documentation",
        icon: FileUnknownOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "docs-changelog",
        path: "/app/docs/documentation/changelog",
        title: "sidenav.docs.changelog",
        icon: ProfileOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

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
            title: "Letter Head Settings",
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
            title: "View Sites",
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
            path: "/app/pages",
            title: "Operations Centre",
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
            key: "scheduling-pages-shift-list",
            path: "/app/pages/shift-list",
            title: "Shift List",
            icon: "",
            breadcrumb: true,
            submenu: [],
          }
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
            title: "View Mobile Patrol Sites",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "mobile-pages-add-sites",
            path: "/app/pages/add-mobile-patrol-site",
            title: "Add Mobile Patrol Site",
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

const compilanceNavTree = [
  {
    key: "compilance",
    path: "/app/pages",
    title: "Compilance",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "compilance-pages",
        path: "/app/pages",
        title: "Compilance",
        icon: "/img/sidebar/data.png",
        breadcrumb: true,
        submenu: [
          {
            key: "compilance-pages-compilanceTemplates",
            path: "/app/pages/compilance-templates",
            title: "Compilance Templates",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-interviews",
            path: "/app/pages/compilance-interviews",
            title: "Interviews",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-vetting",
            path: "/app/pages/compilance-vetting",
            title: "Vetting",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-trainings",
            path: "/app/pages/compilance-trainings",
            title: "Trainings",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-siaRecords",
            path: "/app/pages/compilance-sia-records",
            title: "Sia Records",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-site-survey",
            path: "/app/pages/site-survey",
            title: "Site Survey",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-key-receipts",
            path: "/app/pages/key-receipts",
            title: "Key Receipts",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "compilance-pages-key-log-register",
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
            key: "backOffice-pages",
            path: "/app/pages",
            title: "Backoffice",
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
  ...subcontractorNavTree,
  ...optNavTree,
  ...schedulingNavTree,
  ...compilanceNavTree,
  ...keyholdingNavTree,
  ...backOfficeNavTree,
  ...subAndBillingNavTree,
  ...reportsNavTree,
  ...settingsNavTree
  // ...docsNavTree
];

export default navigationConfig;
