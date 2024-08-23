import "./Step.css";
import Image from "next/image";
const Step: React.FC = () => {
  return (
    <>
      <section id="rentSteps">
        <h2 id="rentStepsHeading">Rent/Lease In three easy steps</h2>
        <div id="rentStepsRow">
          <div className="rentStepCols">
            <h3 className="rentSteph3">01</h3>
            <div className="rentStepSubdiv">
              <Image src="icons/step1.svg" alt="" width={38} height={46} />
              <p className="rentDivPara">
                Select the location. Browse through our available options and
                find the perfect car to suit your needs
              </p>
            </div>
          </div>

          <div className="rentStepCols">
            <h3 className="rentSteph3">02</h3>
            <div className="rentStepSubdiv">
              <Image src="icons/step2.svg" alt="" width={38} height={46} />
              <p className="rentDivPara">
                Choose your desired Pick-Up date and time.
              </p>
            </div>
          </div>

          <div className="rentStepCols">
            <h3 className="rentSteph3">03</h3>
            <div className="rentStepSubdiv">
              <Image src="icons/step3.svg" alt="" width={38} height={46} />
              <p className="rentDivPara">
                Make payment and book the car. Select an option to either have
                the car delivered to your location or pick it up directly from
                us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;
