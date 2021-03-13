/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, useColorMode } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';

import MenuButton from './menu-button';
import NavLink from './nav-link';
import Content from '../header.mdx';
import Button from './button';

const modes = ['light', 'dark'];

const components = {
  a: NavLink,
};

const styles = {
  alignItems: 'center',
  width: '100%',
  h1: {
    m: 0,
  },
  ul: {
    ml: 'auto',
    display: 'flex',
    listStyleType: 'none',
  },
  li: {
    ml: 3,
  },
};

export default ({ menuOpen, setMenuOpen, nav }) => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  return (
    <header>
      <Container sx={{ maxWidth: '1024px' }}>
        <Flex
          sx={{ justifyContent: 'space-between' }}
          sx={{ maxWidth: '1024px' }}
        >
          <Flex sx={styles}>
            <MDXProvider components={components}>
              <Content />
            </MDXProvider>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
