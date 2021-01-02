import * as React from 'react';

interface Props {
  message: string;
  children?: any;
}

const Loading: React.FC<Props> = ({ message = 'Loading...', children, }) => (
  <h1>
    {message}...
    {children}
  </h1>
);
export default Loading;
