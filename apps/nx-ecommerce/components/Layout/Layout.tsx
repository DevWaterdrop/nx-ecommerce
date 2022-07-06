import { GlobalSeo } from '@nx-ecommerce/shared/graphql/types';
import type { SimplifiedImage } from '@nx-ecommerce/shared/graphql/refactored-types';
import { getBaseURL } from '../../utils/get-base-url';
import Head from 'next/head';
import { ReactNode, useEffect } from 'react';
import { Nav } from '../Nav';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../lib/storage';
import Cookies from 'js-cookie';
import { getStrapiURL } from '@nx-ecommerce/shared/utils/get-strapi-url';

interface Props {
  children: ReactNode;
  defaultSeo: Omit<GlobalSeo, 'metaImage'> & { metaImage: SimplifiedImage };
  seo?: {
    title: string;
    description: string;
    image: string;
  };
}

const Layout: React.FC<Props> = ({ children, defaultSeo, seo }) => {
  const { metaTitle, metaDescription, meta } = defaultSeo;
  const updateUser = useSetAtom(userAtom);

  const title = seo?.title || metaTitle;
  const description = seo?.description || metaDescription;
  const image =
    seo?.image || getStrapiURL(defaultSeo.metaImage.data?.attributes?.url);

  useEffect(() => {
    fetch(getBaseURL('/api/user'))
      .then((res) => res.json())
      .then(({ token }) => {
        Cookies.set('userToken', token);
        updateUser(token);
      });
  }, [updateUser]);

  return (
    <>
      <Head>
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
      </Head>
      <Nav />
      <main className="mx-auto max-w-screen-xl px-4">{children}</main>
    </>
  );
};

export { Layout };
