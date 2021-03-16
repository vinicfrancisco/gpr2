import React, { useCallback, useEffect, useState } from 'react';
import { FiMenu, FiChevronLeft, FiLogOut } from 'react-icons/fi';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Container, Menu } from './styles';
import api from '~/services/api';

function DefaultLayout() {
  const { pathname } = useLocation();
  const history = useHistory();

  const { push } = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const getLeftIcon = useCallback(() => {
    switch (pathname) {
      case '/':
        return <></>;
      case '/availability':
      case '/request-ride':
      case '/signup':
        return (
          <button type="button" onClick={() => history.goBack()}>
            <FiChevronLeft size={36} color="#fff" />
          </button>
        );
      default:
        return (
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <FiMenu size={36} color="#fff" />
          </button>
        );
    }
  }, [pathname, showMenu, history]);

  const handleClearToken = useCallback(async () => {
    try {
      await api.get('/users/logout', '');
      push('/');
    } catch (err) {
      console.log(err);
    } finally {
      localStorage.removeItem('TOKEN_KEY');
    }
  });

  const getTitle = useCallback(() => {
    switch (pathname) {
      case '/':
        return 'Login';
      case '/home':
        return 'Home';
      case '/signup':
        return 'Cadastro';
      case '/availability':
        return 'Disponibilidade';
      case '/requests':
        return 'Solicitações';
      case '/rides':
        return 'Caronas';
      case '/request-ride':
        return 'Solicitar carona';
      default:
        return '';
    }
  }, [pathname]);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <Menu open={showMenu}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/rides">Caronas</Link>
          </li>
          <li>
            <Link to="/requests">Solicitações</Link>
          </li>
          <li>
            <Link to="/availability">Disponibilidade</Link>
          </li>
          <li>
            <FiLogOut />
            <Link to="/" onClick={() => handleClearToken()}>
              Sair
            </Link>
          </li>
        </ul>
      </Menu>

      <Container>
        {getLeftIcon()}

        <h1>{getTitle()}</h1>

        <div />
      </Container>
    </>
  );
}

export default DefaultLayout;
