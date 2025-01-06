import RecentlyWorkedWith from "../../components/Services/RecentWork";
import Portfolio from "../../components/Services/ServicePortfolio";
import SingleServiceSlider from "../../components/Services/SingleServiceSlider";
import VideoEditingServices from "../../components/Services/VideoEditingServices";
import "./service.css";
import { useParams } from "react-router-dom";

export default function SingleService({ ServicesPage }) {
  const { id } = useParams(); // Get the item id from the URL

  // Find the service item that matches the ID
  const matchingServiceItem = ServicesPage.services
    .flatMap((service) => service.service_items)
    .find((item) => item.id === parseInt(id, 10));

  if (!matchingServiceItem) {
    return <p>No service item found.</p>; // Fallback if no matching item is found
  }

  // Loop through each category and check for matching group_service_item ids
  let matchingGroupServiceItem = null;

  matchingServiceItem.group_service_category?.forEach((category) => {
    category.group_service_item?.forEach((item) => {
      if (item.id === parseInt(id, 10)) {
        // If the item's id matches the URL id
        matchingGroupServiceItem = item;
      }
    });
  });

  if (!matchingGroupServiceItem) {
    return <p>No matching group service item found.</p>;
  }
  return (
    <>
      <SingleServiceSlider matchingItem={matchingGroupServiceItem} />
      <VideoEditingServices />
      <RecentlyWorkedWith RecentWorkData={matchingGroupServiceItem} />
      <Portfolio PortfolioData={matchingGroupServiceItem} />
    </>
  );
}
