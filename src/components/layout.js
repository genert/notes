/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useRef } from 'react';
import { Global } from '@emotion/core';
import { Styled, Container, useThemeUI } from 'theme-ui';
import Header from './header';
import Sidenav from './sidenav';

export default ({ children }) => {
  const {
    theme: { colors = {} },
  } = useThemeUI();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);

  const bodyStyles = {
    body: {
      margin: 0,
      color: colors.text,
      backgroundColor: colors.background,
    },
  };

  return (
    <Styled.root>
      <Global styles={bodyStyles} />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main
          sx={{
            minWidth: 0,
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          <Container py={0} px={3} sx={{ maxWidth: '1024px' }}>
            <div
              ref={nav}
              sx={{
                display: ['block', 'flex'],
                mx: -3,
              }}
            >
              <Sidenav
                open={menuOpen}
                sx={{ display: [null, 'block'] }}
                onFocus={() => setMenuOpen(true)}
                onBlur={() => setMenuOpen(false)}
                onClick={() => setMenuOpen(false)}
              />
              <div
                sx={{
                  overflow: 'hidden',
                  px: 3,
                }}
              >
                {children}
              </div>
            </div>
          </Container>
        </main>
      </div>
    </Styled.root>
  );
};
