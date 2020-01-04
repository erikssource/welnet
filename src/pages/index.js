import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import smcode from '../assets/images/smcode.jpg'
import smwork from '../assets/images/smwork.jpg'
import smcogcv from '../assets/images/smcogcv.jpg'
import smarticle from '../assets/images/smarticle.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Erik Larson"
                    meta={[
                        { name: 'description', content: 'Erik Larson Developer' },
                        { name: 'keywords', content: 'personal, developer' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${smcode})`}}>
                            <header className="major">
                                <h3>Software</h3>
                                <p>Personal Software Projects</p>
                            </header>
                            <Link to="/software" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${smwork})`}}>
                            <header className="major">
                                <h3>Work Experience</h3>
                                <p>Professional Software Engineering Experience</p>
                            </header>
                            <Link to="/work" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${smcogcv})`}}>
                            <header className="major">
                                <h3>Writing</h3>
                                <p>I Also Like To Do Some Writing</p>
                            </header>
                            <Link to="/writing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${smarticle})`}}>
                            <header className="major">
                                <h3>Articles</h3>
                                <p>Interests And Opinions</p>
                            </header>
                            <Link to="/articles" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>
                                William Erik Larson was born in Manhattan -- the Kansas one -- and raised mostly in Topeka Kansas. He went
                                to college in San Antonio at Trinity University where he earned a degree in Physics. After the
                                cancellation of the Superconducting Super Collider, he decided to seek his fortune with software
                                engineering instead. He has worked as a software engineer at a variety of companies, carefully avoiding
                                ones that have a big IPO that makes all the employees rich.
                            </p>
                            <p>
                                An interest in programming started back in middle school where he wasted time in computer lab writing video
                                games on one of the school's Apple IIe, learning a lot more than the class was teaching. He still has the
                                Atari 400 he parents got him back then. With that kind of nerd potential he naturally gravitated to reading
                                lots of science fiction and fantasy.
                            </p>
                            <p>
                                Eventually, he gained an interest in writing his own fantastical tales and has written three fantasy novels.
                                Cog and the Steel Tower is the first one ready for public consumption. Nowadays, he's splitting his time between
                                writing code and lies in the form of fiction.
                            </p>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex