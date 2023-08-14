class Side extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      </style>

            <div width="100%" style="float:center; padding:1rem 1rem 1rem 1rem; clear:both;">

              <div style="float: left; height="100%"">
                <img style="float: left; width: 200px; border-radius: 50%; margin:1rem 2rem 0rem 0.5rem" src="images/m_s_blue.jpg" />
              </div>

              <div style="float:left; margin:0rem 0rem 0rem 0rem">
                <h1> Maria Glenski, PhD </h1>
                <h3>
                  Research Group Manager <br> & Senior Data Scientist 
                </h3>
                <h4> 
                  Pacific Northwest National Laboratory
                </h4>
 
      <div width="100%" style="float:center;   clear:both;">
 
          
        <h1> 
        <a href="mailto:maria.glenski@pnnl.gov" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://twitter.com/MariaGlenski" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="http://www.linkedin.com/in/mariaglenski" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href="https://scholar.google.com/citations?user=gASdXl8AAAAJ&hl=en" target="_blank"><i class="ai ai-google-scholar-square" aria-hidden="true"></i></a>
        </h1>

      </div>

 
    `;
  }
}

customElements.define('side-intro', Side);
