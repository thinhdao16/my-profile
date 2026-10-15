import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://github.com/thinhdao16/my-profile';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          vi: `${baseUrl}?lang=vi`,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
  ];
}
