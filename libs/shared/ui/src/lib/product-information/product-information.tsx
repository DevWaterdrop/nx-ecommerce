import type { ComponentProductInformationSection } from '@nx-ecommerce/shared/graphql/types';
import { Item } from './local-components/item';

export interface ProductInformationProps {
  information: (Omit<ComponentProductInformationSection, 'id'> | null)[];
}

export const ProductInformation: React.FC<ProductInformationProps> = (
  props
) => {
  const { information } = props;

  return (
    <ul>
      {information.map(
        (information) =>
          information && <Item key={information.title} data={information} />
      )}
    </ul>
  );
};
