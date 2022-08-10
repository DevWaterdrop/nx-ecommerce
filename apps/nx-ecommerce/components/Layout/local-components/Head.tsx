import { GlobalSeo } from '@nx-ecommerce/shared/graphql/types';
import type { SimplifiedImage } from '@nx-ecommerce/shared/graphql/refactored-types';
import { getStrapiImageURL } from '@nx-ecommerce/shared/utils/get-strapi-image-url';
import NextHead from 'next/head';

interface Props {
  defaultSeo: Omit<GlobalSeo, 'metaImage'> & { metaImage: SimplifiedImage };
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const Head: React.FC<Props> = (props) => {
  const { defaultSeo, seo } = props;
  const { metaTitle, metaDescription, meta } = defaultSeo;

  const title = seo?.title || metaTitle;
  const description = seo?.description || metaDescription;
  const image =
    seo?.image || getStrapiImageURL(defaultSeo.metaImage.data?.attributes?.url);

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {meta &&
        meta.map(
          (m) => m && <meta key={m.id} name={m.name} content={m.content} />
        )}
    </NextHead>
  );
};
