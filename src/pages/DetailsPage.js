import { FeaturedImage, Header, PageDetailTitle } from "parts";
import React, { Component } from "react";
import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Detail Pages";
    window.scrollTo(0, 0);
  }
  render() {
    // const { page, match } = this.props;
    // if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrls} />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

// export default connect(mapStateToProps)(DetailsPage);
