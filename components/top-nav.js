class TopNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      </style>
 
      <div width="100%" style="float:right; margin:0rem 3rem 0rem 0rem; clear:both;">
            <h3> <a href="./index.html">About Me</a>
            <!--- | <a href="./projects.html">Projects</a> --->
            | <a href="./publications.html">Publications</a>
            | <a href="./demos.html"> Open Source (<i class="fa fa-code" aria-hidden="true"></i> & Demos)

<!-----Code <i class="fa fa-code" aria-hidden="true"></i> & Demos </a> --->
            <!-----| <a href="./cv.html">CV</a>---->
            <!--- <i class="fa fa-code" aria-hidden="true"></i> --->
            </h3>
      </div>

 
    `;
  }
}

customElements.define('top-nav', TopNav);


