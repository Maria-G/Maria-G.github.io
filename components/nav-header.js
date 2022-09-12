class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      </style>

      <div width="100%" style="float:right; margin:1rem 3rem 1rem 1rem; clear:both;">

        <h1>
        <a href="mailto:maria.glenski@pnnl.gov" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://twitter.com/MariaGlenski" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="http://www.linkedin.com/in/mariaglenski" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href="https://scholar.google.com/citations?user=gASdXl8AAAAJ&hl=en" target="_blank"><i class="ai ai-google-scholar-square" aria-hidden="true"></i></a>
        </h1>

      </div>




            <div width="100%" style="float:left; margin:1rem 1rem 1rem 6rem; clear:both;">

              <div style="float: left; height="100%"">
                <img style="float: left; width: 200px; border-radius: 50%; margin:1rem 2rem 0rem 0.5rem" src="images/m_s_blue.jpg" />
              </div>

              <div style="float:left; margin:0rem 0rem 0rem 0rem">
                <h1> Maria Glenski, PhD </h1>
                <h2>
                  Senior Data Scientist & Team Lead
                </h2>
                <h3>
                  Pacific Northwest National Laboratory
                </h3>


      <!---<div width="100%" style="float:left; margin:0rem 8rem 1rem 8rem;"> --->
            <h2> <a href="./index.html">About Me</a>
            <!--- | <a href="./projects.html">Projects</a> --->
            | <a href="./publications.html">Publications</a>
            | <a href="./demos.html">Code & Demos </a>
            <!-----| <a href="./cv.html">CV</a>---->
            <!--- <i class="fa fa-code" aria-hidden="true"></i> --->
            </h2>
      </div>
    `;
  }
}

customElements.define('nav-header', Header);
