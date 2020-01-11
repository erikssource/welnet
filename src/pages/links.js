import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import amazon from '../assets/images/amazon.jpg';
import bbc_news from '../assets/images/bbc_news.jpg';
import bootstrap from '../assets/images/bootstrap.jpg';
import cnn from '../assets/images/cnn.jpg';
import dologo from '../assets/images/do.jpg';
import github from '../assets/images/github.png';
import gitlab from '../assets/images/gitlab.jpg';
import gmail from '../assets/images/gmail.png';
import java from '../assets/images/java.jpg';
import maps from '../assets/images/mh_mapgs.jpg';
import nasb from '../assets/images/nasb.jpg';
import netflix from '../assets/images/netflix.jpg';
import nextcloud from '../assets/images/nextcloud.jpg';
import twitter from '../assets/images/twitter.jpg';
import vc from '../assets/images/vc.jpg';
import vox from '../assets/images/vox.jpg';
import youtube from '../assets/images/youtube.jpg';

const Links = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Links</h1>
          </header>
          <div className="grid-wrapper">
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Gmail</h4></div>
                  <div className="centered-div"><img src={gmail} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://smile.amazon.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Amazon</h4></div>
                  <div className="centered-div"><img src={amazon} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Twitter</h4></div>
                  <div className="centered-div"><img src={twitter} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://cloud.polklarson.xyz" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Nextcloud</h4></div>
                  <div className="centered-div"><img src={nextcloud} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Github</h4></div>
                  <div className="centered-div"><img src={github} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.bbc.com/news" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>BBC News</h4></div>
                  <div className="centered-div"><img src={bbc_news} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.cnn.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>CNN</h4></div>
                  <div className="centered-div"><img src={cnn} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.vox.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Vox</h4></div>
                  <div className="centered-div"><img src={vox} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.nasb.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>NASB</h4></div>
                  <div className="centered-div"><img src={nasb} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Maps</h4></div>
                  <div className="centered-div"><img src={maps} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.vitaliscounseling.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Vitalis</h4></div>
                  <div className="centered-div"><img src={vc} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>YouTube</h4></div>
                  <div className="centered-div"><img src={youtube} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.gitlab.com" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Gitlab</h4></div>
                  <div className="centered-div"><img src={gitlab} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Digital Ocean</h4></div>
                  <div className="centered-div"><img src={dologo} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://docs.oracle.com/en/java/javase/11/docs/api/index.html" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Java</h4></div>
                  <div className="centered-div"><img src={java} width="180" height="120"/></div>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="box tight">
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                  <div className="align-center"><h4>Bootstrap</h4></div>
                  <div className="centered-div"><img src={bootstrap} width="180" height="120"/></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Links
