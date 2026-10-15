import { ExperienceItem, ProjectItem, TechItem, EducationItem, CertificateItem } from '../types';

export const PERSONAL_INFO = {
  name: "Đào Đức Thịnh",
  title: "Full-stack Developer (.NET 8 & React)",
  titleVi: "Kỹ sư Lập trình Full-stack (.NET 8 & React)",
  email: "daoducthinh.work@gmail.com",
  phone: "0347 114 430",
  location: "TP. Hồ Chí Minh, Việt Nam",
  locationEn: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/thinhdao16",
  linkedin: "https://www.linkedin.com/in/daoducthinh1105",
  website: "https://github.com/thinhdao16/my-profile",
  summary: "Kỹ sư Full-stack với hơn 4 năm kinh nghiệm thiết kế kiến trúc và phát triển hệ thống web, ứng dụng di động hiệu năng cao với .NET 8, React, TypeScript, Next.js và AWS.",
  summaryEn: "Full-stack Developer with over 4 years of experience architecting and delivering scalable web and mobile applications with .NET 8, React, TypeScript, Next.js, and AWS.",
  fullSummary: "Tôi là kỹ sư Full-stack với hơn 4 năm kinh nghiệm thực chiến trong việc thiết kế kiến trúc và phát triển các hệ thống web và ứng dụng di động chịu tải cao. Thế mạnh nòng cốt nằm ở việc xây dựng vi dịch vụ Backend trên .NET 8 / C# theo chuẩn Clean Architecture, DDD, CQRS kết hợp với giao diện Frontend hiện đại trên React, Next.js và TypeScript. Có kinh nghiệm sâu sắc trong việc tối ưu cơ sở dữ liệu lớn (PostgreSQL, SQL Server), truyền dữ liệu thời gian thực (WebSockets, SignalR) và tự động hóa triển khai hạ tầng trên AWS & Docker.",
  fullSummaryEn: "Full-stack Developer with over 4 years of experience architecting and delivering scalable web and mobile applications. Proven track record in building high-throughput .NET 8 / C# backend microservices using Clean Architecture, DDD, and CQRS, seamlessly integrated with modern React, Next.js, and TypeScript frontends. Deep experience in high-performance database optimization, low-latency WebSocket systems, and automated CI/CD container deployments across AWS and Docker.",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hongthai",
    company: "HONGTHAI Technical Service Co., Ltd",
    role: "Lead Full-stack Developer",
    roleVi: "Trưởng nhóm Kỹ sư Full-stack",
    period: "09/2023 – Hiện tại",
    periodVi: "09/2023 – Hiện tại",
    location: "TP. Hồ Chí Minh",
    logoText: "HT",
    logoBg: "from-emerald-700 to-teal-950",
    summary: "Dẫn dắt kiến trúc và phát triển hệ thống quản lý công nghiệp, tự động hóa kiểm định và giám sát vận hành thời gian thực.",
    summaryVi: "Dẫn dắt kiến trúc và phát triển hệ thống quản lý công nghiệp, tự động hóa kiểm định và giám sát vận hành thời gian thực.",
    stack: [".NET 8", "C#", "React", "Ionic", "PostgreSQL", "Docker", "AWS (EC2, S3)", "Clean Architecture"],
    projects: [
      {
        title: "Industrial Operations & Inspection Platform",
        titleVi: "Hệ thống Quản lý Vận hành & Kiểm định Công nghiệp",
        description: "Thiết kế kiến trúc hệ thống trên .NET 8 & React/Ionic. Xây dựng cơ chế xác thực JWT kết hợp phân quyền RBAC đa cấp độ, đồng bộ dữ liệu ngoại tuyến (offline-first) và tối ưu hóa truy vấn cơ sở dữ liệu xử lý hàng triệu bản ghi.",
        descriptionVi: "Thiết kế kiến trúc hệ thống trên .NET 8 & React/Ionic. Xây dựng cơ chế xác thực JWT kết hợp phân quyền RBAC đa cấp độ, đồng bộ dữ liệu ngoại tuyến (offline-first) và tối ưu hóa truy vấn cơ sở dữ liệu xử lý hàng triệu bản ghi.",
      },
      {
        title: "High-Throughput RESTful APIs & Reporting",
        titleVi: "Hệ thống API Vi dịch vụ Hiệu năng cao & Báo cáo Realtime",
        description: "Xây dựng các RESTful API phục vụ ứng dụng web và thiết bị di động kiểm định hiện trường. Tích hợp Docker container hóa quy trình triển khai lên AWS EC2 và lưu trữ đám mây S3, giảm thiểu 40% thời gian triển khai.",
        descriptionVi: "Xây dựng các RESTful API phục vụ ứng dụng web và thiết bị di động kiểm định hiện trường. Tích hợp Docker container hóa quy trình triển khai lên AWS EC2 và lưu trữ đám mây S3, giảm thiểu 40% thời gian triển khai.",
      }
    ]
  },
  {
    id: "fpt-software-fs",
    company: "FPT Software",
    role: "Full-stack Developer",
    roleVi: "Kỹ sư Lập trình Full-stack",
    period: "01/2023 – 09/2023",
    periodVi: "01/2023 – 09/2023",
    location: "TP. Hồ Chí Minh",
    logoText: "FPT",
    logoBg: "from-blue-700 to-indigo-950",
    summary: "Tham gia phát triển các phân hệ lõi của cổng đặt vé và dịch vụ khách hàng cho hãng hàng không Singapore Airlines & Scoot.",
    summaryVi: "Tham gia phát triển các phân hệ lõi của cổng đặt vé và dịch vụ khách hàng cho hãng hàng không Singapore Airlines & Scoot.",
    stack: ["React", "TypeScript", "Node.js", "Angular", ".NET Core", "RESTful APIs", "Docker"],
    projects: [
      {
        title: "Singapore Airlines (OLSP) Portal",
        titleVi: "Cổng thông tin Hàng không Singapore Airlines (OLSP)",
        description: "Phát triển các component giao diện React và microservices Node.js xử lý nghiệp vụ đặt vé trực tuyến, tra cứu lịch trình và thanh toán quốc tế cho hàng triệu lượt người dùng toàn cầu.",
        descriptionVi: "Phát triển các component giao diện React và microservices Node.js xử lý nghiệp vụ đặt vé trực tuyến, tra cứu lịch trình và thanh toán quốc tế cho hàng triệu lượt người dùng toàn cầu.",
      },
      {
        title: "Scoot E-Commerce & Loyalty Experience",
        titleVi: "Nền tảng Thương mại Điện tử & Khách hàng Thân thiết Scoot",
        description: "Xây dựng và bảo trì các module Angular tối ưu hiệu năng trang web, giảm 35% thời gian tải trang ban đầu và nâng cao tỷ lệ chuyển đổi đặt vé thành công.",
        descriptionVi: "Xây dựng và bảo trì các module Angular tối ưu hiệu năng trang web, giảm 35% thời gian tải trang ban đầu và nâng cao tỷ lệ chuyển đổi đặt vé thành công.",
      }
    ]
  },
  {
    id: "fpt-internship",
    company: "FPT Software (Internship & Transition)",
    role: "Software Engineering Intern",
    roleVi: "Thực tập sinh Kỹ thuật Phần mềm",
    period: "09/2022 – 12/2022",
    periodVi: "09/2022 – 12/2022",
    location: "TP. Hồ Chí Minh",
    logoText: "FPT",
    logoBg: "from-orange-700 to-amber-950",
    summary: "Nghiên cứu công nghệ, xây dựng quy trình tự động hóa kiểm thử và phát triển các tiện ích nội bộ.",
    summaryVi: "Nghiên cứu công nghệ, xây dựng quy trình tự động hóa kiểm thử và phát triển các tiện ích nội bộ.",
    stack: ["React", "JavaScript", ".NET", "SQL Server", "Git", "Agile/Scrum"],
    projects: [
      {
        title: "Enterprise Web Modules & Unit Testing",
        titleVi: "Phát triển Module Doanh nghiệp & Viết Unit Test",
        description: "Được đào tạo chuyên sâu về Clean Code, quy trình Agile/Scrum. Đóng góp trực tiếp vào các module nghiệp vụ và nâng cao độ phủ test tự động lên trên 85%.",
        descriptionVi: "Được đào tạo chuyên sâu về Clean Code, quy trình Agile/Scrum. Đóng góp trực tiếp vào các module nghiệp vụ và nâng cao độ phủ test tự động lên trên 85%.",
      }
    ]
  },
  {
    id: "freelance-lead",
    company: "Freelance & Technical Architecture Consulting",
    role: "Full-stack Lead & Technical Consultant",
    roleVi: "Trưởng nhóm Kỹ thuật & Tư vấn Kiến trúc",
    period: "2021 – 2023",
    periodVi: "2021 – 2023",
    location: "Remote / HCMC",
    logoText: "FL",
    logoBg: "from-purple-800 to-neutral-950",
    summary: "Tư vấn kiến trúc giải pháp, thiết kế và bàn giao trọn gói các hệ thống phần mềm doanh nghiệp và công cộng theo yêu cầu khắt khe.",
    summaryVi: "Tư vấn kiến trúc giải pháp, thiết kế và bàn giao trọn gói các hệ thống phần mềm doanh nghiệp và công cộng theo yêu cầu khắt khe.",
    stack: ["Next.js", "NestJS", "Vue.js", "Ruby on Rails", "PostgreSQL", "Redis", "WebSockets"],
    projects: [
      {
        title: "Vinfire & Nexa Municipal Solutions",
        titleVi: "Giải pháp Phần mềm Quản trị Vinfire & Nexa",
        description: "Kiến trúc hệ thống quản lý nhật ký kiểm tra và điều hành tác chiến cho cơ quan công an địa phương. Tích hợp audit logging chống can thiệp và phân quyền ma trận bảo mật cao.",
        descriptionVi: "Kiến trúc hệ thống quản lý nhật ký kiểm tra và điều hành tác chiến cho cơ quan công an địa phương. Tích hợp audit logging chống can thiệp và phân quyền ma trận bảo mật cao.",
      },
      {
        title: "WiseChat Real-Time Collaboration",
        titleVi: "Nền tảng Nhắn tin Thời gian thực WiseChat",
        description: "Xây dựng hệ thống chat thời gian thực độ trễ thấp với Vue.js, Ruby on Rails và WebSockets. Tích hợp gửi file đa phương tiện, tìm kiếm tin nhắn toàn văn và hiển thị mượt mà danh sách tin nhắn lớn.",
        descriptionVi: "Xây dựng hệ thống chat thời gian thực độ trễ thấp với Vue.js, Ruby on Rails và WebSockets. Tích hợp gửi file đa phương tiện, tìm kiếm tin nhắn toàn văn và hiển thị mượt mà danh sách tin nhắn lớn.",
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "hongthai-suite",
    number: "01",
    title: "Enterprise Industrial Management & Inspection Suite",
    titleVi: "Hệ thống Quản lý Vận hành & Giám sát Kiểm định Công nghiệp",
    tagline: "Scalable hybrid web/mobile applications with virtualized UI and robust RBAC.",
    taglineVi: "Ứng dụng đa nền tảng web/mobile xử lý dữ liệu kiểm định lớn với kiến trúc Clean Architecture và phân quyền RBAC.",
    description: "Hệ thống quản lý vận hành công nghiệp quy mô doanh nghiệp phục vụ kiểm định hiện trường và điều phối trung tâm. Tích hợp cơ chế đồng bộ ngoại tuyến khi mất mạng (offline-first), xác thực JWT/RBAC chặt chẽ và tối ưu hóa hiển thị danh sách lớn (virtualization).",
    descriptionVi: "Hệ thống quản lý vận hành công nghiệp quy mô doanh nghiệp phục vụ kiểm định hiện trường và điều phối trung tâm. Tích hợp cơ chế đồng bộ ngoại tuyến khi mất mạng (offline-first), xác thực JWT/RBAC chặt chẽ và tối ưu hóa hiển thị danh sách lớn (virtualization).",
    tags: ["React", "Ionic", ".NET 8", "AWS", "Docker", "JWT / RBAC", "Clean Architecture"],
    role: "Lead Full-stack Developer",
    roleVi: "Trưởng nhóm Kỹ sư Full-stack",
    link: "https://github.com/thinhdao16",
    github: "https://github.com/thinhdao16",
    highlights: [
      "Modular micro-component architecture with reusable UI primitives",
      "Offline cache synchronization and background state restoration",
      "Sub-100ms API response latency on AWS EC2 containerized infrastructure"
    ],
    highlightsVi: [
      "Kiến trúc component module tái sử dụng cao, tối ưu dung lượng gói ứng dụng",
      "Cơ chế đồng bộ hàng đợi ngoại tuyến khi có kết nối mạng trở lại",
      "Thời gian phản hồi API dưới 100ms trên hạ tầng container AWS EC2"
    ]
  },
  {
    id: "singapore-airlines",
    number: "02",
    title: "Singapore Airlines (OLSP) & Scoot E-Commerce",
    titleVi: "Cổng Đặt vé Hàng không Singapore Airlines & Scoot",
    tagline: "Mission-critical airline booking & loyalty portal components for tier-1 carriers.",
    taglineVi: "Phân hệ đặt vé và chăm sóc khách hàng trực tuyến cho các hãng hàng không hàng đầu châu Á.",
    description: "Phát triển các phân hệ Frontend và Microservices phục vụ hàng triệu hành khách quốc tế. Xây dựng các widget đặt vé trên React, cổng chăm sóc khách hàng thân thiết Scoot trên Angular, tích hợp thanh toán bảo mật cao.",
    descriptionVi: "Phát triển các phân hệ Frontend và Microservices phục vụ hàng triệu hành khách quốc tế. Xây dựng các widget đặt vé trên React, cổng chăm sóc khách hàng thân thiết Scoot trên Angular, tích hợp thanh toán bảo mật cao.",
    tags: ["React", "Node.js", "Angular", ".NET Core", "Docker", "AWS"],
    role: "Full-stack Developer @ FPT Software",
    roleVi: "Kỹ sư Full-stack @ FPT Software",
    link: "https://www.singaporeair.com",
    highlights: [
      "Rigorous unit testing and UI regression workflows for high-reliability ticketing",
      "Optimized bundle size and code-splitting reducing initial page load by 35%",
      "Seamless integration with international payment gateways and seat selection APIs"
    ],
    highlightsVi: [
      "Quy trình kiểm thử nghiêm ngặt đảm bảo hệ thống vận hành chính xác 99.99%",
      "Tối ưu chia nhỏ mã nguồn giúp giảm 35% thời gian tải trang ban đầu",
      "Tích hợp trơn tru với các cổng thanh toán và API bản đồ chỗ ngồi máy bay"
    ]
  },
  {
    id: "wisechat",
    number: "03",
    title: "WiseChat Real-Time Messaging Platform",
    titleVi: "Nền tảng Nhắn tin Trực tuyến Thời gian thực WiseChat",
    tagline: "Low-latency WebSocket messaging system with infinite feed & multimedia sharing.",
    taglineVi: "Hệ thống tin nhắn tức thời độ trễ cực thấp với WebSockets, Redis Pub/Sub và danh sách cuộn vô tận.",
    description: "Nền tảng giao tiếp cộng tác thời gian thực được xây dựng bằng Vue.js, Ruby on Rails và WebSockets. Tích hợp trạng thái gõ phím, biên lai đã xem, tìm kiếm tin nhắn toàn văn và chia sẻ file đa phương tiện.",
    descriptionVi: "Nền tảng giao tiếp cộng tác thời gian thực được xây dựng bằng Vue.js, Ruby on Rails và WebSockets. Tích hợp trạng thái gõ phím, biên lai đã xem, tìm kiếm tin nhắn toàn văn và chia sẻ file đa phương tiện.",
    tags: ["Vue.js", "Ruby", "WebSocket", "Redis", "Docker", "Nginx"],
    role: "Full-stack Developer",
    roleVi: "Kỹ sư Full-stack",
    link: "https://github.com/thinhdao16",
    github: "https://github.com/thinhdao16",
    highlights: [
      "Real-time bidirectional message dispatching via Redis Pub/Sub",
      "Optimized infinite scrolling viewport handling 10,000+ cached chat items smoothly",
      "Instant media thumbnail generation and secure presigned upload tokens"
    ],
    highlightsVi: [
      "Định tuyến tin nhắn hai chiều độ trễ <50ms thông qua Redis Pub/Sub",
      "Tối ưu viewport cuộn vô tận hiển thị mượt mà hơn 10.000 tin nhắn",
      "Tạo ảnh thu nhỏ tự động và cấp token tải lên bảo mật presigned S3"
    ]
  },
  {
    id: "vinfire-nexa",
    number: "04",
    title: "Vinfire & Nexa Municipal Security Solutions",
    titleVi: "Hệ thống Quản trị & Điều hành Tác chiến An ninh Vinfire & Nexa",
    tagline: "Secure operational dashboards and audit logging for municipal departments.",
    taglineVi: "Phần mềm quản lý nhật ký kiểm tra và điều phối tác chiến với chuẩn bảo mật và truy vết nghiêm ngặt.",
    description: "Hệ thống quản lý hành chính chuyên dụng đáp ứng các tiêu chuẩn bảo mật khắt khe. Tích hợp ghi nhật ký kiểm toán không thể can thiệp, phân quyền ma trận truy cập linh hoạt và quản lý sự cố thời gian thực.",
    descriptionVi: "Hệ thống quản lý hành chính chuyên dụng đáp ứng các tiêu chuẩn bảo mật khắt khe. Tích hợp ghi nhật ký kiểm toán không thể can thiệp, phân quyền ma trận truy cập linh hoạt và quản lý sự cố thời gian thực.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RBAC", "Docker", "CI/CD"],
    role: "Full-stack Architect & Lead",
    roleVi: "Trưởng nhóm Kiến trúc & Full-stack",
    link: "https://github.com/thinhdao16",
    github: "https://github.com/thinhdao16",
    highlights: [
      "Strict data protection compliance with cryptographically signed audit logs",
      "Dynamic permission matrices with real-time access revocation",
      "High-availability PostgreSQL replication and automated backup pipelines"
    ],
    highlightsVi: [
      "Ký số nhật ký kiểm toán chống gian lận dữ liệu",
      "Phân quyền động với cơ chế thu hồi quyền tức thì",
      "Cấu hình sao lưu nhân bản dữ liệu PostgreSQL tự động định kỳ"
    ]
  },
  {
    id: "aicolors-logistics",
    number: "05",
    title: "Logistics Tracking & AIColors Workflow Suite",
    titleVi: "Bộ Giải pháp Quản lý Đội xe Vận tải & Màu sắc Công nghiệp AIColors",
    tagline: "Real-time delivery fleet tracking, proof-of-delivery & digital color management.",
    taglineVi: "Theo dõi định vị tài xế thời gian thực, ký nhận điện tử và quản lý công thức màu công nghiệp.",
    description: "Bộ ứng dụng web và di động cho logistics: theo dõi vị trí GPS tài xế, tính toán lộ trình tối ưu, chữ ký điện tử xác nhận giao hàng và quản lý danh mục công thức màu kỹ thuật số.",
    descriptionVi: "Bộ ứng dụng web và di động cho logistics: theo dõi vị trí GPS tài xế, tính toán lộ trình tối ưu, chữ ký điện tử xác nhận giao hàng và quản lý danh mục công thức màu kỹ thuật số.",
    tags: ["React Native", "Next.js", "MongoDB", "WebSocket", "Python", "Docker"],
    role: "Full-stack Engineer",
    roleVi: "Kỹ sư Full-stack",
    link: "https://github.com/thinhdao16",
    github: "https://github.com/thinhdao16",
    highlights: [
      "Live GPS telematics streaming with background geolocation polling",
      "Offline signature capture with resilient queue-and-retry synchronizer",
      "Rich web analytics dashboard with route replay and ETA predictions"
    ],
    highlightsVi: [
      "Truyền dữ liệu định vị GPS liên tục cả khi ứng dụng chạy ngầm",
      "Lưu chữ ký điện tử ngoại tuyến với hàng đợi tự động gửi lại khi có mạng",
      "Bảng điều khiển phân tích lịch sử lộ trình và ước tính thời gian đến chính xác"
    ]
  },
  {
    id: "python-crawler",
    number: "06",
    title: "Enterprise Scraping & Distributed Data Pipeline",
    titleVi: "Hệ thống Thu thập & Xử lý Dữ liệu Phân tán Quy mô lớn",
    tagline: "Automated distributed crawler pipelines with proxy rotation and database export.",
    taglineVi: "Đường ống tự động hóa cào và chuẩn hóa dữ liệu lớn với cơ chế xoay vòng proxy và chống chặn.",
    description: "Kiến trúc thu thập dữ liệu tự động với Scrapy, Requests và BeautifulSoup. Tích hợp lập lịch tác vụ tự động, khử trùng lặp dữ liệu bằng thuật toán băm (hash), xoay vòng proxy và đẩy dữ liệu chuẩn hóa vào PostgreSQL.",
    descriptionVi: "Kiến trúc thu thập dữ liệu tự động với Scrapy, Requests và BeautifulSoup. Tích hợp lập lịch tác vụ tự động, khử trùng lặp dữ liệu bằng thuật toán băm (hash), xoay vòng proxy và đẩy dữ liệu chuẩn hóa vào PostgreSQL.",
    tags: ["Python", "Scrapy", "BeautifulSoup", "PostgreSQL", "Redis", "Docker"],
    role: "Backend & Automation Engineer",
    roleVi: "Kỹ sư Backend & Tự động hóa",
    link: "https://github.com/thinhdao16",
    github: "https://github.com/thinhdao16",
    highlights: [
      "Overcoming anti-bot mechanisms using rotating headers and headless browser fallbacks",
      "Ingesting over 500,000+ records daily with automated data normalization",
      "Instant WPGraphQL / REST export feeds for downstream consumption"
    ],
    highlightsVi: [
      "Vượt qua các cơ chế chống bot bằng kỹ thuật xoay vòng header và headless browser",
      "Xử lý và chuẩn hóa hơn 500.000 bản ghi mỗi ngày không nghẽn",
      "Cung cấp luồng dữ liệu REST API và GraphQL cho các hệ thống downstream"
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  // Backend & Architecture
  { name: ".NET 8 / Core", category: "backend", icon: "dotnet" },
  { name: "C#", category: "backend", icon: "csharp" },
  { name: "Node.js", category: "backend", icon: "nodedotjs" },
  { name: "NestJS", category: "backend", icon: "nestjs" },
  { name: "RESTful APIs", category: "backend", icon: "api" },
  { name: "GraphQL", category: "backend", icon: "graphql" },
  { name: "SignalR / WebSocket", category: "backend", icon: "websocket" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "Scrapy", category: "backend", icon: "scrapy" },

  // Frontend
  { name: "React 19", category: "frontend", icon: "react" },
  { name: "Next.js 15", category: "frontend", icon: "nextdotjs" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
  { name: "Angular", category: "frontend", icon: "angular" },
  { name: "Vue.js", category: "frontend", icon: "vuedotjs" },
  { name: "Ionic", category: "frontend", icon: "ionic" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
  { name: "Redux / Zustand", category: "frontend", icon: "redux" },

  // Databases
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "SQL Server", category: "database", icon: "sqlserver" },
  { name: "MySQL", category: "database", icon: "mysql" },
  { name: "Redis", category: "database", icon: "redis" },
  { name: "MongoDB", category: "database", icon: "mongodb" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", category: "devops", icon: "aws" },
  { name: "Docker", category: "devops", icon: "docker" },
  { name: "Nginx", category: "devops", icon: "nginx" },
  { name: "GitHub Actions", category: "devops", icon: "githubactions" },
  { name: "Linux", category: "devops", icon: "linux" },
  { name: "Git", category: "devops", icon: "git" },

  // Architecture
  { name: "Clean Architecture", category: "architecture", icon: "architecture" },
  { name: "CQRS & DDD", category: "architecture", icon: "cqrs" },
  { name: "SOLID Principles", category: "architecture", icon: "solid" },
  { name: "AI Integration (Copilot/LLM)", category: "architecture", icon: "ai" }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Đại học FPT TP. Hồ Chí Minh",
    schoolVi: "Đại học FPT TP. Hồ Chí Minh",
    degree: "Bachelor of Software Engineering",
    degreeVi: "Cử nhân Kỹ thuật Phần mềm (Software Engineering)",
    period: "2019 – 2023",
    gpa: "GPA: 7.2 / 10",
    status: "Graduated",
    statusVi: "Đã tốt nghiệp"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    name: "Google Project Management",
    year: "2023",
    issuer: "Google"
  },
  {
    name: "IBM Front-End Developer Professional Certificate",
    year: "2023",
    issuer: "IBM"
  },
  {
    name: "User Experience (UX) Research & Design",
    year: "2023",
    issuer: "Coursera / HCMC"
  },
  {
    name: "Software Development Lifecycle (SDLC) Specialization",
    year: "2022",
    issuer: "University of Minnesota / Coursera"
  }
];
