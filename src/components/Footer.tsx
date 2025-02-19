import { useEffect } from 'react';
//@ts-expect-error
import setScrollBarWidth from 'set-scrollbar-width';
const Footer = () => {
  useEffect(() => {
    setScrollBarWidth();
  }, []);
  return <div>Footer</div>;
};

export default Footer;
