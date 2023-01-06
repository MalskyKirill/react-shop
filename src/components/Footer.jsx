function Footer() {
  return (
    <footer className='page-footer green lighten-3'>
      <div className='footer-copyright'>
        <div className='container container-footer'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='https://malskykirill.github.io/react-shop/'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
