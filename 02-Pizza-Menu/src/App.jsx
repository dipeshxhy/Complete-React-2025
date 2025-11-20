import PizzaData from './data.js';
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = PizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <PizzaList pizzas={pizzas} />
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function PizzaList({ pizzas }) {
  return (
    <ul className="pizzas">
      {pizzas.map(pizza => (
        <Pizza pizza={pizza} />
      ))}
    </ul>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={`${pizza.photoName}`} alt={pizza.name} />
      <div className="">
        <h1>{pizza.name} </h1>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 and {closeHour}
            :00.
          </p>
        )}
      </div>
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order Now</button>
    </div>
  );
}
