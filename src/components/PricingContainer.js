import PricingCard from "./PricingCard.js";

export default function PricingContainer({ toggle }) {
  return (
    <div className="pricingContainer">
      <PricingCard
        className="primaryCard basicCard"
        title="Basic"
        monthlyPrice="19.99"
        yearlyPrice="199.99"
        toggle={toggle}
      >
        <div className="pricing-benefit">
          <hr />
          <p>500 GB Storage</p>
          <hr />
          <p>2 Users Allowed</p>
          <hr />
          <p>Send up to 3 GB</p>
          <hr />
        </div>
      </PricingCard>
      <PricingCard
        className="secondaryCard"
        title="Professional"
        monthlyPrice="24.99"
        yearlyPrice="249.99"
        toggle={toggle}
      >
        <div className="pricing-benefit secondaryPricingBenefit">
          <hr />
          <p>1 TB Storage</p>
          <hr />
          <p>5 Users Allowed</p>
          <hr />
          <p>Send up to 10 GB</p>
          <hr />
        </div>
      </PricingCard>
      <PricingCard
        className="primaryCard masterCard"
        title="Master"
        monthlyPrice="39.99"
        yearlyPrice="399.99"
        toggle={toggle}
      >
        <div className="pricing-benefit">
          <hr />
          <p>2 TB Storage</p>
          <hr />
          <p>10 Users Allowed</p>
          <hr />
          <p>Send up to 20 GB</p>
          <hr />
        </div>
      </PricingCard>
    </div>
  );
}
