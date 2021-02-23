import React, { useCallback } from 'react';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
import { useLocation, useHistory } from 'react-router-dom';
import { Container } from './styles';

function DefaultLayout() {
  const { pathname } = useLocation();
  const { goBack } = useHistory();

  const getLeftIcon = useCallback(() => {
    switch (pathname) {
      case '/availability':
        return (
          <button type="button" onClick={goBack}>
            <FiChevronLeft size={36} color="#fff" />
          </button>
        );
      default:
        return (
          <button type="button" onClick={() => null}>
            <FiMenu size={36} color="#fff" />
          </button>
        );
    }
  }, [pathname, goBack]);

  const getTitle = useCallback(() => {
    switch (pathname) {
      case '/availability':
        return 'Disponibilidade';
      case '/requests':
        return 'Solicitações';
      default:
        return '';
    }
  }, [pathname]);

  return (
    <Container>
      {getLeftIcon()}

      <h1>{getTitle()}</h1>

      <div />
    </Container>
  );
}

export default DefaultLayout;
