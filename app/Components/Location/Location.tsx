import "./Location.css";
import Image from "next/image";

const Location: React.FC = () => {
  return (
    <>
      <div className="locations">
        <h3>Locations</h3>
        <ul className="ul-locations">
          <li className="li-location">
            <Image src="/icons/locations.svg" alt="" />
            <span> Dubai</span>
          </li>
          <li className="li-location">
            <Image src="/icons/locations.svg" alt="" />
            <span>Abu Dhabi</span>
          </li>
          <li className="li-location">
            <Image src="/icons/locations.svg" alt="" />
            <span>Sharjah</span>
          </li>
          <li className="li-location">
            <Image src="/icons/locations.svg" alt="" />
            <span>Fujaira</span>
          </li>
          <li className="li-location" id="location-end">
            <Image src="/icons/locations.svg" alt="" />
            <span>Ras Al Khaimah</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Location;
