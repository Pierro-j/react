import React from 'react';
import Card from '../src/Components/FirstComponent'
import img from '../src/assets/code.png'
import './Components/FirstComponent.css'
import Counter from './Components/Counter'


const App = () => {

  const products = [
    {
      title: 'Code',
      image: img,
      description: 'C\'est du code',
    },
    {
        title: 'Code',
        image: img,
        description: 'C\'est aussi du code',
      },
  ];
  return (
    <div className="App">
      {products.map((product) => (
        <Card
          title={product.title}
          image={product.image}
          description={product.description}
        />
      ))}
      <Counter initialCount={0} />

    </div>
  );
};

export default App;