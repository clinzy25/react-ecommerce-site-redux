import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
// import { useProductsContext } from '../context/products_context';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
// import { useUserContext } from '../context/user_context';
import { closeSidebar } from '../actions';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);
  const [myUser, setMyUser] = useState(null);
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='comfy sloth' />
          <button className='close-btn' type='button'>
            <FaTimes onClick={() => dispatch(closeSidebar())} />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link key={id} to={url} onClick={() => dispatch(closeSidebar())}>
                {text}
              </Link>
            </li>
          ))}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={() => dispatch(closeSidebar())}>
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    /**Hide sidebar */
    z-index: -1;
  }
  /**Show sidebar */
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
