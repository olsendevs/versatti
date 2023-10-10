'use client';

import {
  styled,
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLogout } from '../../hooks/auth/useLogout';
import { useLoading } from '@/components/ui/is-loading';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== 'open',
})<AppBarProps>(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(
    ['width', 'margin'],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    },
  ),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(
      ['width', 'margin'],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      },
    ),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    backgroundColor: '#FF8800',
    color: 'white',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout } = useLogout();
  const [open, setOpen] = React.useState(true);
  const { isLoading } = useLoading();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        open={open}
        sx={{ backgroundColor: '#FF8800' }}
      >
        <Toolbar
          sx={{
            pr: '24px',
            backgroundColor: 'white',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon color="action" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className="bg-orange-500"
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: [1],
          }}
        >
          <div className="ml-auto flex items-center font-extralight">
            <Image
              src="/versatti-logo-branco.png"
              width={50}
              height={100}
              alt="Versatti logo"
            />
            <h1 className="text-white">VERSATTI</h1>
          </div>
          <IconButton
            onClick={toggleDrawer}
            className="ml-auto"
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <React.Fragment>
            <ListItemButton
              onClick={() => {
                router.push('/admin/service-order');
              }}
            >
              <Image
                src="/ordem-servico-logo-menu.png"
                width={30}
                height={30}
                className="mr-6"
                alt="ordem de serviço icon"
              />
              <ListItemText primary="Ordem de serviço" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push('/admin/service-order');
              }}
            >
              <RequestQuoteIcon className="mr-8" />
              <ListItemText primary="Orçamento" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push('/admin/planing');
              }}
            >
              <Image
                src="/planejamento-logo-menu.png"
                width={30}
                height={30}
                className="mr-6"
                alt="planejamento icon"
              />
              <ListItemText primary="Planejamento" />
            </ListItemButton>
          </React.Fragment>
          <Divider sx={{ my: 1 }} />
        </List>
        <Link
          onClick={() => {
            console.log('aa');
            logout();
            window.location.href = '/auth';
          }}
          href="/auth"
          passHref
          className="mt-auto"
        >
          <div className="mt-auto mb-5 ml-5 flex items-center cursor-pointer">
            <Image
              src="/sair-icone.png"
              width={30}
              height={30}
              alt="sair icone"
              className="mr-5"
            />
            Sair
          </div>
        </Link>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: '#F3F6FE',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <div className="mt-[100px] ml-[3vw] text-2xl text-black">
          {children}
        </div>
      </Box>
      <LoadingSpinner visible={isLoading} />
    </Box>
  );
}
