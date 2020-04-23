import React from "react";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import EmailSignup from "../components/EmailSignup";

import AppMockupImage from "../assets/images/mockup-app_immune.png";
import IconArrowLargeRed from "../assets/images/icon-arrow-large_red.svg";

// import Img from "gatsby-image";

import "../styles/styles.scss";

import "../styles/pages/index.scss";

class RootIndex extends React.Component {
  render() {
    return (
      <Layout showHome={true} showNav={false} location={this.props.location}>
        <Navigation />
        <header className="header--container">
          <div className="information">
            <h1>Keer veilig terug naar de samenleving</h1>
            <p>
              ImmunePass is een digitale pas waarmee je kunt aantonen dat je
              immuun bent voor het coronavirus. Tijdens de MIT COVID19 hackathon
              hebben wij een prototype ontwikkeld dat via blockchain je medische
              test resultaten verifieert en als anonieme data naar je telefoon
              stuurt. Hierdoor kun je aantonen dat je immuun bent, terwijl je
              privacy wordt gewaarborgd. Met ImmunePass kunnen wij stapsgewijs
              terugkeren naar een gezonde samenleving. Juist na de crisis is het
              van belang om slimme technologie inzetten om samen veilig te
              blijven. Dit kan alleen als de data anoniem en versleuteld blijft.
              Op dit moment ontwikkelen wij ons prototype met steun van (…)
            </p>
          </div>
          <div className="cta">
            <a
              href="https://www.linkedin.com/pulse/immunepass-decentralized-digital-identity-verify-daan-van-der-zwaag/"
              target="_blank"
              className="info-modal--button"
            >
              <img src={IconArrowLargeRed} alt="Icon Arrow Large Red" />
              Lees artikel (Engels)
            </a>
          </div>
          <div className="mockup">
            <img alt="Fides Mockup V0.8" src={AppMockupImage} />
          </div>
        </header>
        {/* <footer className="header--footer">
          <h2>Welcome to the future of healthcare</h2>
          <p>
            Subscribe our the newsletter to receive the latest updates on our
            quest to fight incorrect medical data
          </p>
          <EmailSignup />
        </footer> */}
      </Layout>
    );
  }
}

export default RootIndex;
