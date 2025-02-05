export default function PricingCard({
  title,
  monthlyPrice,
  yearlyPrice,
  toggle,
  children,
  className,
}) {
  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      <h1>
        <span>$</span>
        {!toggle ? monthlyPrice : yearlyPrice}
      </h1>
      {children}
      <button>Learn More</button>
    </div>
  );
}
