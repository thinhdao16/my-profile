'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'vi';

export const UI_TRANSLATIONS = {
  en: {
    roleSubtitle: 'Full-stack Developer',
    experienceYears: '4+ Years Exp',
    location: 'Ho Chi Minh City, VN',
    statusOpen: 'Open to Work & Senior Roles',
    seeProjects: 'See projects',
    copyEmail: 'Copy Email',
    copied: 'Copied!',
    resumePdf: 'Download CV (PDF)',
    aboutTitle: 'About Me',
    experienceTitle: 'Professional Experience',
    techTitle: 'Tech Stack',
    techSubtitle: 'Primary technologies I rely on for architecting resilient backend services, responsive interfaces, and automated cloud workflows.',
    selectedWorkTitle: 'Selected work',
    selectedWorkSubtitle: 'A few high-scale platforms and systems I have architected and built recently.',
    activityTitle: 'Engineering & GitHub Activity',
    activitySubtitle: 'Consistency in shipping: code commits, open source contributions, and architecture designs.',
    contributionsLabel: 'contributions in 2026',
    learnContributions: 'Learn how we count contributions',
    less: 'Less',
    more: 'More',
    credentialsTitle: 'Education & Certifications',
    credentialsSubtitle: 'Credentials',
    academicBackground: 'Academic Background',
    professionalCredentials: 'Professional Credentials',
    ctaTitle: 'Let’s build something remarkable.',
    ctaSubtitle: 'Whether you need high-throughput .NET backend microservices, intuitive modern React/TypeScript frontends, or full-stack architectural leadership, feel free to reach out.',
    sendEmailBtn: 'Send an Email',
    footerRights: 'All rights reserved.',
    footerBuiltWith: 'Built with Next.js 15, React 19 & Tailwind CSS',
    top: 'Top',
    navAbout: 'About',
    navExperience: 'Experience',
    navTech: 'Tech Stack',
    navProjects: 'Projects',
    navEducation: 'Education',
    modalOverview: 'Overview & Architecture',
    modalDeliverables: 'Technical Key Deliverables',
    modalTechUsed: 'Technologies Used',
    modalSourceCode: 'Source Code',
    modalLivePreview: 'Live Preview',
    modalClose: 'Close',
    langToggle: 'Tiếng Việt',
  },
  vi: {
    roleSubtitle: 'Kỹ sư Full-stack',
    experienceYears: '4+ năm kinh nghiệm',
    location: 'TP. Hồ Chí Minh, VN',
    statusOpen: 'Sẵn sàng đón nhận cơ hội mới',
    seeProjects: 'Xem các dự án',
    copyEmail: 'Sao chép email',
    copied: 'Đã sao chép!',
    resumePdf: 'Tải CV (Bản PDF)',
    aboutTitle: 'Giới thiệu',
    experienceTitle: 'Kinh nghiệm làm việc',
    techTitle: 'Công nghệ & Kỹ năng',
    techSubtitle: 'Các công nghệ chủ đạo tôi ứng dụng trong xây dựng hệ thống vi dịch vụ chịu tải cao, giao diện mượt mà và tự động hóa đám mây.',
    selectedWorkTitle: 'Dự án tiêu biểu',
    selectedWorkSubtitle: 'Các hệ thống và nền tảng quy mô lớn tôi trực tiếp thiết kế kiến trúc và triển khai gần đây.',
    activityTitle: 'Hoạt động Kỹ thuật & GitHub',
    activitySubtitle: 'Tính nhất quán và bền bỉ trong việc lập trình, đóng góp mã nguồn mở và thiết kế hệ thống.',
    contributionsLabel: 'đóng góp & commits trong năm 2026',
    learnContributions: 'Cách tính điểm đóng góp',
    less: 'Ít',
    more: 'Nhiều',
    credentialsTitle: 'Học vấn & Chứng chỉ',
    credentialsSubtitle: 'Bằng cấp & Chứng chỉ',
    academicBackground: 'Học vấn học thuật',
    professionalCredentials: 'Chứng chỉ chuyên môn quốc tế',
    ctaTitle: 'Hãy cùng tạo nên sản phẩm đột phá.',
    ctaSubtitle: 'Dù bạn cần xây dựng hệ thống vi dịch vụ .NET hiệu năng cao, ứng dụng React/TypeScript hiện đại hay dẫn dắt kiến trúc Full-stack, tôi luôn sẵn sàng trao đổi.',
    sendEmailBtn: 'Gửi email trao đổi',
    footerRights: 'Đã đăng ký bản quyền.',
    footerBuiltWith: 'Phát triển với Next.js 15, React 19 & Tailwind CSS',
    top: 'Lên đầu',
    navAbout: 'Giới thiệu',
    navExperience: 'Kinh nghiệm',
    navTech: 'Công nghệ',
    navProjects: 'Dự án',
    navEducation: 'Học vấn',
    modalOverview: 'Tổng quan & Kiến trúc giải pháp',
    modalDeliverables: 'Các giải pháp kỹ thuật cốt lõi',
    modalTechUsed: 'Công nghệ sử dụng',
    modalSourceCode: 'Mã nguồn GitHub',
    modalLivePreview: 'Xem thực tế',
    modalClose: 'Đóng',
    langToggle: 'English',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof UI_TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage first
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'en' || saved === 'vi') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const activeLanguage = isMounted ? language : 'en';

  const value: LanguageContextType = {
    language: activeLanguage,
    setLanguage,
    toggleLanguage,
    t: UI_TRANSLATIONS[activeLanguage],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: UI_TRANSLATIONS['en'],
    };
  }
  return context;
};

