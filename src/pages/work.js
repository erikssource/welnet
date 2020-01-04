import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import tnlogofm from '../assets/images/tnlogofm.jpg'
import lwlogofm from '../assets/images/lwlogofm.jpg'
import ellogofm from '../assets/images/ellogofm.jpg'
import mmlogofm from '../assets/images/mmlogofm.jpg'
import aclogofm from '../assets/images/aclogofm.jpg'

const WorkExp = (props) => (
    <Layout>
        <Helmet>
            <title>Erik Larson | Work</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Work Experience</h1>
              </header>
              <div className="content">
                  <p>Many years of software development and product creation at independent software vendors</p>
              </div>
          </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technologies</h2>
                    </header>
                    <p>In my work experience, I've used Java the most with frameworks like Spring, Hibernate, Guice, Netty and others. On the frontend, I've used HTML, CSS, and Javascript with Bootstrap, Webpack, ReactJS, ExtJS, and more. To a lesser extent I also have experience with C#, C++, Python, and Ruby.</p>
                    <p>Aside from languages and frameworks, I also have experience with Agile Methodology, JIRA, Linux, Gradle, Maven, Docker, Git, Subversion, Jenkins, and Bamboo.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div>
                        <img src={tnlogofm} alt="Touchnet Information Systems Logo" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Touchnet Information Systems</h3>
                            </header>
                            <h4>April 2019 - Present</h4>
                            <p>
                               I work as a full-stack developer. On the backend, I work with Java and the Spring
                               Framework to create a RESTful API using data from SQL Server and other REST services.
                               On the frontend, I work with Javascript, HTML, CSS, and React to create the user
                               experience.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={lwlogofm} alt="Iris by Lowe's Logo" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Lowe's Companies</h3>
                            </header>
                            <h4>November 2014 - February 2019</h4>
                            <p>
                              I performed a variety of tasks in developing Lowe’s second generation Iris smart home
                              platform. I joined the team before a single line of code had been written and have been
                              involved in most parts of the cloud platform.
                            </p>
                            <ul className="alt">
                              <li>
                                Created micro-services written in Java and communicating over an Apache Kafka based message bus.
                              </li>
                              <li>
                                Created edge services communicating to external clients via REST interface and web-sockets using Java with the Netty library
                              </li>
                              <li>
                                Made extensive use of Google Guice for dependency injection.
                              </li>
                              <li>
                                Created data access objects for Apache Cassandra NoSQL database using Java with Cassandra SDK.
                              </li>
                              <li>
                                Worked on generating graphical invoices from JSON information returned from payment service on customer support web portal.
                              </li>
                              <li>
                                Created ETL software in Java to extract, analyze, and transform large amounts of data from Cassandra database and JSON data dumped from Apache Kafka message bus. The data was pulled from Azure blob storage and the transformed data was encrypted and written back to Azure.
                              </li>
                              <li>
                                The ETL software utilized a web interface constructed with Jboss Undertow, the pebble template engine (same syntax as Twig) and Bootstrap.
                              </li>
                              <li>
                                Created Zigbee protocol bindings for a Groovy based DSL to control IoT devices along with proprietary protocol bindings for IP-based IoT devices.
                              </li>
                              <li>
                                Worked with Java in embedded application on an Arm-based device to handle communication with Zigbee and Z-Wave radios for low-powered mesh networking.
                              </li>
                              <li>
                                Created a low resource web service for embedded diagnostics using Jetty, a simple template engine of my own design, and Vue Js to stream live diagnostic information.
                              </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={ellogofm} alt="Eluminate Health Logo" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Eluminate Health</h3>
                            </header>
                            <h4>April 2013 - October 2014</h4>
                            <p>
                              I worked with C# and Javascript (JQuery and Knockout) to create MVC web applications hosted on Amazon Web Services to connect healthcare providers and patients.
                            </p>
                            <ul className="alt">
                              <li>
                                Created REST backend services using C# .Net and connecting to SQL Server database.
                              </li>
                              <li>
                                Created responsive Web application frontend using HTML, CSS, Kendo CSS library, JQuery, and Knockout. Data was retrieved from the backend using AJAX via JQuery.
                              </li>
                              <li>
                                Used AWS to deploy test environment for services.
                              </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                  <div>
                      <img src={mmlogofm} alt="Motorola Mobility Logo" />
                  </div>
                  <div className="content">
                      <div className="inner">
                          <header className="major">
                              <h3>Motorola Mobility</h3>
                          </header>
                          <h4>June 2011 - April 2013</h4>
                          <p>
                            <strong>Network Visualizer Web Application Development</strong><br />
                            I worked with Java utilizing Spring, Hibernate, and Javascript utilizing
                            ExtJS to develop a web application for customers and support agents of Swisscom in Europe. This involved collecting data from
                            routers in XML and displaying network topologies as well as changing network settings on the router in the customer’s home.
                          </p>
                          <ul className="alt">
                            <li>
                              Created REST backend services with Java utilizing Spring Framework deployed with Resin application container in test and JBoss application container in production.
                            </li>
                            <li>
                              Persisted data using Hibernate-based JPA to Postgres in test and Oracle in production.
                            </li>
                            <li>
                              Worked on web-based frontend using HTML, CSS, SVG, and ExtJS Javascript library as well as JQuery.
                            </li>
                            <li>
                              Used server-side Javascript hosted on proprietary Motorola software to send and receive messages from customer routers in XML.
                            </li>
                          </ul>
                          <p>
                            <strong>Dreamgallery Development</strong><br />
                            I worked with Java and Javascript in creating HTML 5 based set-top box software. This involved a
                            web application communicating with video services on the backend and a Spring-like framework to manage Javascript and SVG
                            for producing the TV user-interface experience.
                          </p>
                          <ul className="alt">
                            <li>
                              Created single-page Web interface using Javascript with internally-developed framework and SVG.
                            </li>
                            <li>
                              Worked at delivering streaming video via Web.
                            </li>
                            <li>
                              Spring-based Java backend to deliver data to the interface via REST interface.
                            </li>
                          </ul>
                      </div>
                  </div>
              </section>
              <section>
                  <div>
                    <img src={aclogofm} alt="Actuate Corporation Logo" />
                  </div>
                  <div className="content">
                      <div className="inner">
                          <header className="major">
                              <h3>Actuate Corporation</h3>
                          </header>
                          <h4>June 2011 - April 2013</h4>
                          <p>
                            I worked on Actuate e.Spreadsheet and e.Spreadsheet Designer—used for the designing reports for automatic generation of
                            full-featured Excel spreadsheets pulling data from a variety of data sources. Used Java with Swing GUI and JDBC and XML for
                            importing data.
                          </p>
                          <ul className="alt">
                            <li>
                              Created desktop UI using Java Swing.
                            </li>
                            <li>
                              Created a GUI SQL editor in Java, generated SQL, and used JDBC to access data from SQL Server, Oracle, IBM DB2, Informix, and Sybase databases.
                            </li>
                            <li>
                              Created a Web spreadsheet UI using GWT.
                            </li>
                          </ul>
                      </div>
                  </div>
              </section>   
            </section>      
        </div>

    </Layout>
)

export default WorkExp
