import Header from "./Header";

function App() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Header />
    </div>
  );
}

export default App;

/*import Button from "./Button.js";

function App() {
  let appStyle = {
    backgroundColor: "#ccc",
    width: "500px",
    height: "500px",
    display: "block",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <h1> The App Component</h1>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>Contact</Button>
      <Button>Products</Button>
    </div>
  );
}

export default App;*/

/*
import SquareImage from "./SquareImage";
<div>
  <h1>The App Component</h1>
  <SquareImage
    pictureSource="https://images.unsplash.com/photo-1604397852861-2c1555f08852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
    alt="Sample Image One"
  />
  <SquareImage
    pictureSource="https://images.unsplash.com/photo-1531777992189-ad52457fbe93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGR1YmFpfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    alt="Sample Image Two"
  />
  <SquareImage
    pictureSource="https://images.unsplash.com/photo-1562828709-8bfac37d1140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGR1YmFpfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    alt="Sample Image Three"
  />
</div>
*/

/*
import Card from "./Card";

let data = [
  {
    title: "Title 1",
    description: "Description lorem ipsum dolar sit amet.",
    btnLabel: "Read more",
  },
  {
    title: "Title 2",
    description: "Description lorem ipsum dolar sit amet.",
    btnLabel: "Read more",
  },
  {
    title: "Title 3",
    description: "Description lorem ipsum dolar sit amet.",
    btnLabel: "Read more",
  },
];

const compList = Object.values(data).map((items, index) => (
  <Card
    title={items.title}
    description={items.description}
    btnLabel={items.btnLabel}
  />
));

<div className="d-flex justify-content-evenly container">{compList}</div>
  <div className="d-flex justify-content-evenly container">
    {Object.values(data).map((items, index) => (
      <Card
        title={items.title}
        description={items.description}
        btnLabel={items.btnLabel}
      />
    ))}
  </div>
</div>
 */

/*
import ColorButton from "./ColorButton";
<ColorButton />
*/

/*
import CounterButton from "./CounterButton";
<h1>The App Component</h1>
<div className="d-flex justify-content-evenly container">
  <CounterButton />
</div>
*/

/*
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";
----------------------------------
<Hero />
<Features />
<Footer />
*/
