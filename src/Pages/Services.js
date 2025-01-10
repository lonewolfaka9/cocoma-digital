import React, { useEffect, useState } from "react";
import Section01 from "../components/About/section01";
import Section02 from "../components/Home/section02";
import Section03 from "../components/About/section03";
import Section07 from "../components/About/section07";
// import Section08 from "../components/About/section08";
import Section09 from "../components/About/section02";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux
import { TbShoppingBagPlus } from "react-icons/tb";

export default function Services({ HomePage, ServicesPage }) {
  const { id } = useParams(); // Get the service item id from the URL
  const itemId = parseInt(id, 10); // Convert id to integer for comparison

  const navigate = useNavigate(); // Get the navigate function for redirection

  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  // Get cart item count from Redux store
  const cartItemCount = useSelector((state) => state.cart.items.length);

  // Find the service item that contains the matching banner
  const matchingServiceItem = ServicesPage.services
    .flatMap((service) => service.service_items)
    .find((item) =>
      item.group_top_banner.some(
        (banner) => banner.explore_our_service_item_id === itemId
      )
    );

  // Immediately redirect if no matching service item found and show error message
  useEffect(() => {
    if (!matchingServiceItem) {
      setErrorMessage("Data not found. Redirecting to home page..."); // Set the error message
      setTimeout(() => {
        navigate("/"); // Redirect to the home page after the message is shown
      }, 2000); // Delay before redirecting
    }
  }, [matchingServiceItem, navigate]);

  // If no matching service item, display error message
  if (!matchingServiceItem) {
    return (
      <div className="error-message-container">
        <p>{errorMessage}</p>
      </div>
    );
  }

  // Filter banners for the matched service item
  const matchingBanners = matchingServiceItem.group_top_banner.filter(
    (banner) => banner.explore_our_service_item_id === itemId
  );

  const MatchCardsData = matchingServiceItem.group_service_category;

  return (
    <>
      {cartItemCount > 0 ? (
        <>
          <div className="cart-widget">
            <div className="cart-icon ">
              <p className="cart-text">
                <TbShoppingBagPlus size={30} />
                &nbsp;&nbsp;
                <span className="cart-count">{cartItemCount}</span> <br />
                service
              </p>
            </div>
            <Link to="/cart">
              <button className="schedule-button">Schedule Meeting</button>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}

      {/* Render the matched banner data */}
      <Section01 bannerData={matchingBanners} />
      <Section02 BrandData={HomePage} />
      <Section09 />

      {MatchCardsData && MatchCardsData.length > 0 ? (
        MatchCardsData.map((card, index) => {
          const categoryName = card.group_service_category_name;
          const items = card.group_service_item;

          // Only render Section03 if the category name and items are present
          return categoryName && items && items.length > 0 ? (
            <div key={index}>
              <Section03
                categoryDataTitle={categoryName}
                items={items} // Pass the full items array
              />
            </div>
          ) : null;
        })
      ) : (
        <p>No cards available</p>
      )}

      {/* <Section08 /> */}
      <Section07 />
    </>
  );
}
