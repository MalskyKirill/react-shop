function Header() {
  return (
    <nav className='#43a047 green darken-1'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          React shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://malskykirill.github.io/react-shop/'
              target='_blank'
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
