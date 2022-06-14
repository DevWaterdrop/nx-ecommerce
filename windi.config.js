import { defineConfig } from 'windicss/helpers';

export function createConfig(includeOptions = []) {
  const include = ['**/*.{jsx,tsx,css}'];

  includeOptions.forEach((option) => {
    switch (option) {
      case 'INCLUDE: shared/ui TO: nx-ecommerce':
        include.push('../../libs/shared/ui/**/*.{jsx,tsx,css}');
        break;
    }
  });

  return defineConfig({
    extract: {
      include,
      exclude: ['node_modules', '.git', '.next'],
    },
  });
}

export default createConfig();
