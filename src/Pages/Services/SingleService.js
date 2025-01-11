import RecentlyWorkedWith from "../../components/Services/RecentWork";
import Portfolio from "../../components/Services/ServicePortfolio";
import SingleServiceSlider from "../../components/Services/SingleServiceSlider";
import VideoEditingServices from "../../components/Services/VideoEditingServices";
import "./service.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux
import { TbShoppingBagPlus } from "react-icons/tb";
export default function SingleService({ ServicesPage }) {
  const { id } = useParams(); // Get the item id from the URL
  const itemId = parseInt(id, 10); // Convert id to integer for comparison
  const cartItemCount = useSelector((state) => state.cart.items.length);

  // Find the service item that matches the ID
  const matchingServiceItem = ServicesPage.services.flatMap(
    (service) => service.service_items
  );

  if (!matchingServiceItem) {
    return <p>No service item found.</p>; // Fallback if no matching item is found
  }

  // Loop through each service item to find a matching group_service_item id
  let matchingGroupServiceItem = null;
  let groupServiceItems = null; // To store the group_service_item

  // Iterate through each service item
  for (const service of matchingServiceItem) {
    // Check for group_service_category in the service item
    if (service.group_service_category) {
      // Loop through each category within the service item
      for (const category of service.group_service_category) {
        // Check for group_service_item within the category
        if (category.group_service_item) {
          // Access the entire group_service_item
          groupServiceItems = category.group_service_item;

          // Look for the item that matches the id
          matchingGroupServiceItem = groupServiceItems.find(
            (item) => item.id === itemId
          );

          // Exit if a match is found
          if (matchingGroupServiceItem) break;
        }
      }
    }
    if (matchingGroupServiceItem) break; // Exit if a match is found
  }

  if (!matchingGroupServiceItem) {
    return <p>No matching group service item found.</p>;
  }

  console.log(groupServiceItems);

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
      <SingleServiceSlider matchingItem={matchingGroupServiceItem} />
      <VideoEditingServices groupServiceItems={groupServiceItems} />
      <RecentlyWorkedWith RecentWorkData={matchingGroupServiceItem} />
      <Portfolio PortfolioData={matchingGroupServiceItem} />
    </>
  );
}
