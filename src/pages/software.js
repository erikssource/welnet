import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import csimgfm from '../assets/images/csimgfm.jpg'
import bwimgfm from '../assets/images/bwimgfm.jpg'
import smimgfm from '../assets/images/smimgfm.png'
import nplogofm from '../assets/images/nplogofm.jpg'
import rustlogo140 from '../assets/images/rustlogo140.png'
import jslogo120 from '../assets/images/jslogo120.jpg'
import reactlg120 from '../assets/images/reactlg120.png'
import websitefm from '../assets/images/websitefm.jpg'
import gatsby120 from '../assets/images/gb120.png'

const Software = (props) => (
    <Layout>
        <Helmet>
            <title>Erik Larson | Software</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Software Projects</h1>
              </header>
          </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>
                      Work isn't the only time I like to code. These are a few of my personal software projects.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div>
                        <img src={csimgfm} alt="Command Line Solitaire Screenshot" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Command Line Solitaire</h3>
                            </header>
                            <p>
                              <span class="image left">
                                <img src={rustlogo140} alt="Rust" />
                              </span>
                              Why? Well, I wanted a little project to help learn Rust. Turns out Rust is pretty cool. I'll definitely be using it more. Thanks to web assembly, I also made a web app using the same rust code. Web assembly is a really interesting new technology.
                            </p>
                            <a href="https://github.com/erikssource/clsol" target="_blank" rel="noopener noreferrer" className="button">GitHub <i className="fa fa-github fa-lg"></i></a> <a href="http://sol.welarson.net" target="_blank" rel="noopener noreferrer" className="button">Try It Out On The Web</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={bwimgfm} alt="Battle of Word Screenshot" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Battle of Words</h3>
                            </header>
                            <p>
                              <span class="image right">
                                <img src={reactlg120} alt="React Logo" />
                              </span>
                              A word-making game written with ReactJS using the Material-UI library. My wife likes word games, and I thought she might enjoy this. I like the game too, and I'm thinking about doing more with it.
                            </p>
                            <a href="http://bow.welarson.net" target="_blank" rel="noopener noreferrer" className="button">Try It Out</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={smimgfm} alt="Sagamatic" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sagamatic</h3>
                            </header>
                            <p>
                              <span class="image right">
                                <img src={jslogo120} alt="Javascript Logo" />
                              </span>
                              A javascript package to reduce some of the boilerplate of using Sagas in your React-Redux applications.
                            </p>
                            <a href="https://github.com/erikssource/sagamatic" target="_blank" rel="noopener noreferrer" className="button">GitHub <i className="fa fa-github fa-lg"></i></a> <a href="https://www.npmjs.com/package/sagamatic" target="_blank" rel="noopener noreferrer" className="button">NPM JS </a>
                        </div>
                    </div>
                </section>
                <section>
                  <div>
                      <img src={nplogofm} alt="NPM Logo" />
                  </div>
                  <div className="content">
                      <div className="inner">
                          <header className="major">
                              <h3>Linkedlistpup and Enumpup</h3>
                          </header>
                          <p>
                            <span class="image right">
                                <img src={jslogo120} alt="Javascript Logo" />
                            </span>
                            A couple of utilities available as javascript packages.
                          </p>
                          <a href="https://www.npmjs.com/package/linkedlistpup" target="_blank" rel="noopener noreferrer" className="button">Linkedlistpup</a> <a href="https://www.npmjs.com/package/enumpup" target="_blank" rel="noopener noreferrer" className="button">Enumpup</a>
                      </div>
                  </div>
              </section> 
              <section>
                  <div>
                      <img src={websitefm} alt="This website" />
                  </div>
                  <div className="content">
                      <div className="inner">
                          <header className="major">
                              <h3>This Website</h3>
                          </header>
                          <p>
                            <span class="image left">
                                <img src={gatsby120} alt="Gatsby Logo" />
                            </span>
                            I guess this is a project too. I created this website using Gatsby to try out Gatsby and to make sure it was fast. I've done some Wordpress sites as well.
                          </p>
                          <a href="https://github.com/erikssource/welnet" target="_blank" rel="noopener noreferrer" className="button">GitHub <i className="fa fa-github fa-lg"></i></a>
                      </div>
                  </div>
              </section> 
            </section>      
        </div>

    </Layout>
)

export default Software
