import "./Location.css";
import Image from "next/image";

const Location: React.FC = () => {
  const loc = [
    {
      id: 1,
      location: "Dubai",
    },
    {
      id: 2,
      location: "Abu Dhabi",
    },
    {
      id: 3,
      location: "Sharjah",
    },
    {
      id: 4,
      location: "Fujaira",
    },
    {
      id: 5,
      location: "Ras Al Khaimah",
    },
  ];
  return (
    <>
      <div className="locations">
        <h3>Locations</h3>
        <ul className="ul-locations">
          {loc.map((item) => {
            return (
              <li className={`li-location ${item.id===5?"no-border-right":""}`} key={item.id}>
                <Image
                  src="icons/locations.svg"
                  alt=""
                  width={22}
                  height={28}
                />
                <span> {item.location}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Location;
