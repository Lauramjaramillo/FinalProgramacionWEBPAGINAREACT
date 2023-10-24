import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React, { useState, useEffect } from 'react';
import { NavHomeU } from '../Navbar/Navbar';



function Cardc({ product, onAddToCart }) {
  return product ? (
    <div className="col" style={{ padding: "3rem" }}>
      <div className="card text-center h-100" style={{ width: "13rem" }}>
        <img src={product.images[0]} className="card-img-top w-100 h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Precio: ${product.price.toFixed(2)}</p>
          <button className="btn btn-dark btn-sm" onClick={() => onAddToCart(product)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  ) : null;
}


function Appc() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    // Verifico si el producto está ya en el carrito
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto existe actualizó la cantidad
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      // Si el producto no existe lo agrego con cantidad igual a 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };



useEffect(() => {
  fetch('https://dummyjson.com/products/')
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se logró la conexión");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.error("Error obyeniendo la data:", error);
     
    });
}, []);

const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);


return data ? (
<div className="App">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.products && data.products.map((item) => (
          <Cardc key={item.id} product={item} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} totalCost={totalCost} />
    </div>
  ) : 
 
null;
}



function Cart({ cart, removeFromCart, emptyCart, totalCost }) {
  const [purchaseInfo, setPurchaseInfo] = useState(null);

  const handlePurchase = () => {
    const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

    const purchaseData = {
      totalProducts,
      items: cart.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        total: (item.price * item.quantity).toFixed(2),
      })),
      totalCost: totalCost.toFixed(2),
    };

    // Convierte el objeto en formato JSON
    const purchaseJSON = JSON.stringify(purchaseData);

    fetch('http://localhost:5000/comprar', {
      method: 'POST',
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: purchaseJSON,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al realizar la compra carrito');
        }
        return response.json();
      })
      .then((data) => {
        
        console.log(data);
      })
      .catch((error) => {
        console.error('Error en la compra:', error);
      });

    
    setPurchaseInfo(purchaseData);
  };

  return (
    <div className="cart">
      <h2 className="titulo2">Carrito de compras</h2>
      <ul>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <li key={item.id}>
              {item.title} - Precio: ${item.price.toFixed(2)} - Cantidad: {item.quantity} - Total: ${(
                item.price * item.quantity
              ).toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <div>
          <p>Precio total: ${totalCost.toFixed(2)}</p>
          <div className="d-flex justify-content-around">
            <button className="purchase-button" onClick={handlePurchase}>
              Comprar
            </button>
            <button onClick={emptyCart}>Vaciar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}



function Homec(props) {
  return (
    <>
      <NavHomeU title1 ="Perfil"   title2="Historial de compras" title3="Configuración" title4="Cerrar sesión"></NavHomeU>
      <div className="titulos">
        <h1>ISIS SHOP</h1>
      </div>
      <Appc />

    </>
  );
}

export { Homec };
