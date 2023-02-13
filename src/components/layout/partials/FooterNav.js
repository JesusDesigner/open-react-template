import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Quem somos</Link>
        </li>
        <li>
          <Link to="#0">Contato</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="/https://api.whatsapp.com/send?1=pt_BR&phone=5585988452885">WhattsApp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;