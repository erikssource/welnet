import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import cogfm from '../assets/images/cogfm.jpg'

const Writing = (props) => (
    <Layout>
        <Helmet>
            <title>Erik Larson | Writing</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Writing</h1>
              </header>
          </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>
                      I also like to write things besides code. I dabble a bit writing some science fiction and fantasy. 
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div>
                        <img src={cogfm} alt="Cog Cover" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Cog and the Steel Tower</h3>
                            </header>
                            <h5>A middle-grade steampunk adventure</h5>
                            <p>
                              Thirteen-year-old Cog loved getting her hands greasy in her Uncle's workshop and building the occasional mud-cannon before the return of her mother knocked her life completely off its rails. Before long she's stowing away on a royal airship and tricking her way into a dream apprenticeship with the Queen's master engineer by pretending to be a boy. But her situation takes a dangerous turn when she discovers a plot to assassinate the Queen and throw the kingdom into war. 
                            </p>
                            <a href="https://www.goodreads.com/book/show/30117032-cog-and-the-steel-tower" target="_blank" rel="noopener noreferrer" className="button">Find out more</a>
                        </div>
                    </div>
                </section>
            </section>      
        </div>

    </Layout>
)

export default Writing
