import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const username = useAppSelector(state => state.user.username);
  const userType = useAppSelector(state => state.user.userType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const displayedUserType = userType === 'administrator' ? 'Administrator' : 'Member';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="app-header" style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      background: '#20b2aa',
      color: '#fff',
      minHeight: '3.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      boxSizing: 'border-box',
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px' }}>Book Favorites</span>
      {username && (
        <div className="app-header-controls" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <nav className="app-header-nav" style={{ display: 'flex', gap: '1rem' }}>
            <a
              id="books-link"
              href="/books"
              onClick={e => { e.preventDefault(); navigate('/books'); }}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                transition: 'background 0.2s',
                background: window.location.pathname === '/books' ? 'rgba(255,255,255,0.18)' : 'none',
              }}
            >
              Books
            </a>
            <a
              id="favorites-link"
              href="/favorites"
              onClick={e => { e.preventDefault(); navigate('/favorites'); }}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                transition: 'background 0.2s',
                background: window.location.pathname === '/favorites' ? 'rgba(255,255,255,0.18)' : 'none',
              }}
            >
              Favorites
            </a>
          </nav>
          <span className="app-header-user" style={{ color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', display: 'inline-flex', gap: '0.35rem' }}>
            <span>Hi, {username}</span>
            <span aria-label="User type">({displayedUserType})</span>
          </span>
          <button id="logout" onClick={handleLogout} style={{ display: 'inline-block', width: 'auto', margin: 0, padding: '0.3rem 1rem', fontSize: '1rem', background: '#fff', color: '#20b2aa', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
