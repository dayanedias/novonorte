import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

// === STYLES ===
const StyledAppBar = styled(AppBar)`
  background: transparent !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1100;
  color: inherit; 
`;

const PrimaryHeaderBar = styled(Box)`
  background: transparent !important;
  padding: 10px 0;
  box-shadow: none !important;
`;

const SitePrimaryHeaderWrap = styled(Container)`
  padding: 24px 12px;
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
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: #ff4814;
    background: rgba(255, 72, 20, 0.1);
  }

  ${({ active }) =>
    active &&
    `
    color: #ff4814;
  `}
`;

const MobileMenuButton = styled(IconButton)`
  color: #2c3e50;
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

  ${({ active }) =>
    active &&
    `
    color: #ff4814;
  `}
`;

// === COMPONENT ===
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
          <LogoLink href="/" rel="home">
            <Logo src="/novonorte-site/images/logo.webp" alt="Novonorte" />
          </LogoLink>
        </SiteBranding>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <MobileMenuList>
        {menuItems.map((item) => (
          <MobileMenuItem key={item.text}>
            <MobileMenuLink href={item.href} onClick={handleDrawerToggle} active={item.active}>
              {item.text}
            </MobileMenuLink>
          </MobileMenuItem>
        ))}
      </MobileMenuList>
    </Box>
  );

  return (
    <StyledAppBar
      color="transparent"
      position='absolute'
      elevation={0}
    >
      <PrimaryHeaderBar>
        <SitePrimaryHeaderWrap maxWidth={false} disableGutters>
          <BuilderGridRow>
            <SiteHeaderSectionLeft>
              <SiteBranding>
                <LogoLink href="/" rel="home">
                  <Logo src="/novonorte-site/images/logo.webp" alt="Novonorte" />
                </LogoLink>
              </SiteBranding>
            </SiteHeaderSectionLeft>

            <SiteHeaderSectionRight>
              {!isMobile ? (
                <MainNavigation>
                  <MenuList>
                    {menuItems.map((item) => (
                      <MenuItem key={item.text}>
                        <MenuLink href={item.href} active={item.active}>
                          {item.text}
                        </MenuLink>
                      </MenuItem>
                    ))}
                  </MenuList>
                </MainNavigation>
              ) : (
                <MobileMenuButton onClick={handleDrawerToggle}>
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
        ModalProps={{ keepMounted: true }}
      >
        {mobileMenu}
      </MobileDrawer>
    </StyledAppBar>
  );
};

export default Header;
