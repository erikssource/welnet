import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import winbash from '../assets/images/winbash.jpg'

const Articles = (props) => (
    <Layout>
        <Helmet>
            <title>Erik Larson | Articles</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Articles</h1>
              </header>
          </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>
                      I didn't want to call it a blog because I'm not planning on regular posts. It's just some opinions and tips and that sort of stuff.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div>
                        <img src={winbash} alt="Bash commands in Windows." />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Bash Commands in Windows</h3>
                            </header>
                            <p>
                              I really missed my bash commands when my work computer went from Mac/Linux to Windows. Using the Windows Linux subsystem is great if your IT department allows it, but that's not always the case. However, if you are doing development, there's a really good chance that you have Git, and if you have Git...
                            </p>
                            <a href="https://www.linkedin.com/pulse/make-windows-more-friendly-bash-users-erik-larson/" target="_blank" rel="noopener noreferrer" className="button">Read the Article</a>
                        </div>
                    </div>
                </section>                   
            </section>      
        </div>

    </Layout>
)

export default Articles
