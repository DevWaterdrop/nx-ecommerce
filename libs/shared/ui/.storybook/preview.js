import 'windi.css';
import './globals.css';

import * as nextImage from 'next/image';

// eslint-disable-next-line no-import-assign
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      alt=""
      {...props}
    />
  ),
});
