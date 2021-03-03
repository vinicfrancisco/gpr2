import React, { useCallback, useEffect, useState } from 'react';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Container, Menu } from './styles';

function DefaultLayout() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const getLeftIcon = useCallback(() => {
    switch (pathname) {
      case '/availability':
        return (
          <button type="button" onClick={() => history.goBack()}>
            <FiChevronLeft size={36} color="#fff" />
          </button>
        );
      case '/signin':
        return <></>;
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

  const getTitle = useCallback(() => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/signin':
        return 'Login';
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
            <Link to="/">Home</Link>
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
