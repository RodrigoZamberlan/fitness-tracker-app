import { getFoods } from "../lib/api";

const FoodsPage: React.FC = async () => {
  const { foods, error } = await getFoods();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {foods && foods.map((food, index) => 
        <div className="py-2" key={index}>
            <h2 className="text-2xl">{food.title}</h2>
            <p>{food.description}</p>
            
        </div>)}
    </div>
  );
};

export default FoodsPage;
