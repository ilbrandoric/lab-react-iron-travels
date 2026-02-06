function TravelCard({ plan }) {
  return (
    <div className="travel-card-container">
  <img src={plan.image} alt={plan.destination} />

  <div className="travel-card-content">
    <h3>
      {plan.destination} ({plan.days} Days)
    </h3>

    <p>{plan.description}</p>

    <p>
      <strong>Price:</strong> {plan.totalCost} €
    </p>

    <button onClick={() => deletePlan(plan.id)}>
      Delete
    </button>
  </div>
</div>

)}

export default TravelCard;
