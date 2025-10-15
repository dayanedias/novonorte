// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const PrimaryHeaderBar = styled(Box)`
  background: transparent;
  padding: 10px 0;
`;

const SitePrimaryHeaderWrap = styled(Container)`
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1200px !important;
`;

const BuilderGridRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SiteHeaderSectionLeft = styled(Box)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const SiteHeaderSectionRight = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SiteBranding = styled(Box)`
  display: flex;
  align-items: center;
`;

const LogoLink = styled.a`
  display: block;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
`;

const MainNavigation = styled.nav`
  display: flex;
  flex-grow: 1;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 8px;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

const MenuLink = styled.a`
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    color: #ff4814;
    background: ${props => props.scrolled ? 'rgba(255, 72, 20, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  }
  
  ${props => props.active && `
    color: #ff4814;
  `}
`;

const MobileMenuButton = styled(IconButton)`
  color: ${props => props.scrolled ? '#2c3e50' : 'white'};
`;

const MobileDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 280px;
    padding: 20px;
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileMenuItem = styled.li`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenuLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 0;
  display: block;
  width: 100%;
  text-align: left;
  
  &:hover {
    color: #ff4814;
  }
  
  ${props => props.active && `
    color: #ff4814;
  `}
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/', active: true },
    { text: 'Quem somos', href: '/quem-somos' },
    { text: 'Serviços', href: '/servicos' },
    { text: 'Obras', href: '/obras' },
    { text: 'Contato', href: '/contato' },
  ];

  const mobileMenu = (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <SiteBranding>
          <LogoLink href="/" rel="home" aria-current="page">
            <Logo 
              src="/images/Logo_Novonort4x-208x36.png" 
              alt="Novonorte"
              width="208"
              height="36"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjA4IDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MCA2VjMwSDE2VjZINDBaTTUwIDZWMzBINTBWMTBINTBaTTYwIDZWMzBINjBWMTBINjBaTTcwIDZWMzBINzBWMTBINzBaTTgwIDZWMzBIODBWMTBIODBaTTkwIDZWMzBIOTBWMTBIOTBaTTEwMCA2VjMwSDEwMFYxMEgxMDBaTTExMCA2VjMwSDExMFYxMEgxMTBaTTEyMCA2VjMwSDEyMFYxMEgxMjBaTTEzMCA2VjMwSDEzMFYxMEgxMzBaTTE0MCA2VjMwSDE0MFYxMEgxNDBaTTE1MCA2VjMwSDE1MFYxMEgxNTBaTTE2MCA2VjMwSDE2MFYxMEgxNjBaTTE3MCA2VjMwSDE3MFYxMEgxNzBaTTE4MCA2VjMwSDE4MFYxMEgxODBaTTE5MCA2VjMwSDE5MFYxMEgxOTBaIiBmaWxsPSIjZmY0ODE0Ii8+PC9zdmc+';
              }}
            />
          </LogoLink>
        </SiteBranding>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <MobileMenuList>
        {menuItems.map((item) => (
          <MobileMenuItem key={item.text}>
            <MobileMenuLink 
              href={item.href}
              onClick={handleDrawerToggle}
              active={item.active}
            >
              {item.text}
            </MobileMenuLink>
          </MobileMenuItem>
        ))}
      </MobileMenuList>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <PrimaryHeaderBar className="ast-primary-header-bar ast-primary-header main-header-bar">
        <SitePrimaryHeaderWrap 
          className="site-primary-header-wrap ast-builder-grid-row-container ast-container"
          maxWidth={false}
          disableGutters
        >
          <BuilderGridRow className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
            <SiteHeaderSectionLeft className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
              <Box className="ast-builder-layout-element ast-flex site-header-focus-item">
                <SiteBranding className="site-branding ast-site-identity">
                  <span className="site-logo-img">
                    <LogoLink href="/" rel="home" aria-current="page">
                      <Logo 
                        src="/images/Logo_Novonort4x-208x36.png" 
                        alt="Novonorte"
                        width="208"
                        height="36"
                        className="custom-logo"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjA4IDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MCA2VjMwSDE2VjZINDBaTTUwIDZWMzBINTBWMTBINTBaTTYwIDZWMzBINjBWMTBINjBaTTcwIDZWMzBINzBWMTBINzBaTTgwIDZWMzBIODBWMTBIODBaTTkwIDZWMzBIOTBWMTBIOTBaTTEwMCA2VjMwSDEwMFYxMEgxMDBaTTExMCA2VjMwSDExMFYxMEgxMTBaTTEyMCA2VjMwSDEyMFYxMEgxMjBaTTEzMCA2VjMwSDEzMFYxMEgxMzBaTTE0MCA2VjMwSDE0MFYxMEgxNDBaTTE1MCA2VjMwSDE1MFYxMEgxNTBaTTE2MCA2VjMwSDE2MFYxMEgxNjBaTTE3MCA2VjMwSDE3MFYxMEgxNzBaTTE4MCA2VjMwSDE4MFYxMEgxODBaTTE5MCA2VjMwSDE5MFYxMEgxOTBaIiBmaWxsPSIjZmY0ODE0Ii8+PC9zdmc+';
                        }}
                      />
                    </LogoLink>
                  </span>
                </SiteBranding>
              </Box>
            </SiteHeaderSectionLeft>

            <SiteHeaderSectionRight className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
              {!isMobile ? (
                <Box className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item">
                  <Box className="ast-main-header-bar-alignment">
                    <Box className="main-header-bar-navigation">
                      <MainNavigation 
                        className="site-navigation ast-flex-grow-1 navigation-accessibility"
                        id="primary-site-navigation-desktop"
                        aria-label="Primary Site Navigation"
                      >
                        <Box className="main-navigation ast-inline-flex">
                          <MenuList className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex submenu-with-border stack-on-mobile">
                            {menuItems.map((item) => (
                              <MenuItem 
                                key={item.text}
                                className={`menu-item menu-item-type-post_type menu-item-object-page ${item.active ? 'current-menu-item page_item current_page_item' : ''}`}
                              >
                                <MenuLink 
                                  href={item.href}
                                  className="menu-link"
                                  scrolled={scrolled}
                                  active={item.active}
                                  aria-current={item.active ? "page" : null}
                                >
                                  {item.text}
                                </MenuLink>
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Box>
                      </MainNavigation>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <MobileMenuButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  scrolled={scrolled}
                >
                  <MenuIcon />
                </MobileMenuButton>
              )}
            </SiteHeaderSectionRight>
          </BuilderGridRow>
        </SitePrimaryHeaderWrap>
      </PrimaryHeaderBar>

      <MobileDrawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {mobileMenu}
      </MobileDrawer>
    </StyledAppBar>
  );
};

export default Header;