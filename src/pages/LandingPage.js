import React, { Component } from "react";
import { connect } from "react-redux";

import landingPage from "json/landingPage.json";
import { Categories, Footer, Header, Hero, MostPicked, Testimony } from "parts";
import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}api/v1/member/landing-page`,
        "landingPage"
      );
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;
    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
