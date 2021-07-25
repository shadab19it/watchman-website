import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { config } from "../../commons/config";
import "./Footer.scss";

const footer = () => {
  return (
    <footer className='nav-footer' id='footer'>
      <section className='sitemap'>
        <div>
          <h5 style={{ color: "#fff", fontWeight: "bold" }}>Terms</h5>
          <a href='/terms'>Terms of Service</a>
          <a href='/privacy'>Privacy Policy</a>
        </div>
        <div>
          <h5 style={{ color: "#fff", fontWeight: "bold" }}>Community</h5>
          <a href={config.githubRequests} target='_blank'>
            Feedback
          </a>
        </div>
        <div>
          <h5 style={{ color: "#fff", fontWeight: "bold" }}>Profile</h5>
          <a href=' https://github.com/shadab19it'>GitHub</a>

          {/* {config.twitterUsername && (
            <div className='social'>
              <iframe
                id='twitter-widget-0'
                scrolling='no'
                frameBorder='0'
                allowFullScreen={true}
                className='twitter-follow-button twitter-follow-button-rendered'
                style={{ position: "static", visibility: "visible", width: 210, height: 20 }}
                title='Twitter Follow Button'
                src='https://platform.twitter.com/widgets/follow_button.6a44a9d26983bbb5b04ae399f9e496fe.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=GigahexApp&amp;show_count=true&amp;show_screen_name=true&amp;size=m&amp;time=1575796574574'
                data-screen-name='GigahexApp'></iframe>
            </div>
          )} */}
        </div>
      </section>

      <section className='copyright'>{config.copyright}</section>
    </footer>
  );
};

export default footer;
