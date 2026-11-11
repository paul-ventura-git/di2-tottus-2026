import React from 'react'

export default function Footer() {
  return (
    <>
    <div
      className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
    >
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (auto)"
      >
        <svg className="bi my-1 theme-icon-active" aria-hidden="true">
          <use href="#circle-half"></use>
        </svg>
        <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="light"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" aria-hidden="true">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg className="bi ms-auto d-none" aria-hidden="true">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg className="bi me-2 opacity-50" aria-hidden="true">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg className="bi ms-auto d-none" aria-hidden="true">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="auto"
            aria-pressed="true"
          >
            <svg className="bi me-2 opacity-50" aria-hidden="true">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg className="bi ms-auto d-none" aria-hidden="true">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">Sticky footer</h1>
        <p className="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS.
        </p>
        <p>
          Use
          <a href="../examples/sticky-footer-navbar/"
            >the sticky footer with a fixed navbar</a
          >
          if need be, too.
        </p>
      </div>
    </main>
    <footer className="footer mt-auto py-3 bg-body-tertiary">
      <div className="container">
        <span className="text-body-secondary"
          >Place sticky footer content here.</span
        >
      </div>
    </footer>
    <script
      src="../assets/dist/js/bootstrap.bundle.min.js"
      className="astro-vvvwv3sm"
    ></script>
    </>
  )
}
