import { useEffect } from 'react';

/**
 * Hook personalizado para hacer scroll hacia arriba
 * Puedes usarlo en cualquier componente llamando: useScrollToTop()
 */
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
