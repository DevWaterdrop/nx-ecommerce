import { GlobalSeo } from '@nx-ecommerce/shared/graphql/types';
import type { SimplifiedImage } from '@nx-ecommerce/shared/graphql/refactored-types';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '@nx-ecommerce/shared/ui/footer';
import { Head } from './local-components/Head';
import { UserWrap } from './local-components/UserWrap';

interface Props {
  children: ReactNode;
  defaultSeo: Omit<GlobalSeo, 'metaImage'> & { metaImage: SimplifiedImage };
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const Layout: React.FC<Props> = ({ children, defaultSeo, seo }) => {
  return (
    <>
      <Head defaultSeo={defaultSeo} seo={seo} />
      <Header />
      <UserWrap>
        <main className="mx-auto min-h-screen max-w-screen-xl px-4">
          {children}
        </main>
      </UserWrap>
      <Footer />
    </>
  );
};
