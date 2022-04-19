function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F27617836561AE05F2A9FA5&f=1&nofb=1',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2FFbMetaImage%2F201809%2F25a532e9-a644-4a99-a5ed-fc588e5e8e2d.jpg&f=1&nofb=1',
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bonif.co.kr%2Fcmdt%2FBF102_pic_qEaV51Wr.jpg&f=1&nofb=1',
  },
  {
    name: 'Kimbap',
    image: 'https://t1.daumcdn.net/liveboard/realfood/39cc916980f841729f9f70addc469fd9.JPG',
  }
];

function App() {
  return ( 
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
