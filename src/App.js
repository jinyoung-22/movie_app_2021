import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F27617836561AE05F2A9FA5&f=1&nofb=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2FFbMetaImage%2F201809%2F25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bonif.co.kr%2Fcmdt%2FBF102_pic_qEaV51Wr.jpg&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/liveboard/realfood/39cc916980f841729f9f70addc469fd9.JPG',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffunshop.akamaized.net%2Fproducts%2F0000076768%2Fvs_image800.jpg%3F1627674240&f=1&nofb=1',
    rating: 5
  }
];

function App() {
  return ( 
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
