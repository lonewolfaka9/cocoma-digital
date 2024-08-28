import { Image } from "react-bootstrap";
import AppImages from "../../utils/images";

const Brand = ({ cardsrc }) => (
  <Image src={AppImages[cardsrc]} className="brand-image" />
);
export default Brand;
