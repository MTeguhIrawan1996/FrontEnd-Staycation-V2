import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Activity,
  BookingForm,
  FeaturedImage,
  Footer,
  Header,
  PageDetailDescription,
  PageDetailTitle,
  Testimony,
} from "parts";
import itemDetails from "json/itemDetails.json";
import { checkoutBooking } from "store/actions/checkout";

class DetailsPage extends Component {
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
        <section className="container">
          <div className="row">
            <div className="col-12 col-lg-7 pr-0 pr-lg-5 mb-5 mb-lg-0">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-12 col-lg-5">
              <BookingForm
                itemDetails={itemDetails}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <Activity data={itemDetails.activities} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

export default connect(null, { checkoutBooking })(DetailsPage);
