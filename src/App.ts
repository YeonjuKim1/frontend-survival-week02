import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

const rc = React.createElement;

function Image({ src, alt = '', width }: ImageProps) {
  return rc('img', { src, alt, width: width ?? 'auto' });
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return rc(
    'div'
    , null
    , rc(Greeting, { name: 'wholeman' })
    , rc(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 })
    , rc('p', null, 'Count:', ' ', count)
    , [1, 2, 3, 4, 5].map(
      (i) => rc(
        'button'
        , {
          key: i,
          type: 'button',
          onClick: () => handleClick(i),
        }
        , '+',
        i,
      ),
    ),
  );
}
