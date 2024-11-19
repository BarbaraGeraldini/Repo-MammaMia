import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Componentes/Home";
import CustomNavBar from "./Componentes/Navbar";
import CardPizza from "./Componentes/CardPizza";
import FooterApp from "./Componentes/Footer";

function App() {
  
  return (
    <>
      {/* <h1>Construyendo web de pizzeria</h1> */}
      <CustomNavBar/>
      <Home/>
      <div className="main-container">
      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c'
        name='Pizaa Napolitana'
        ingredients= {["mozzarella",", ", "tomates", ", ", "jamón", ", ", "orégano"]}
        price='5950'
      />

      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab'
        name='Pizza Española'
        ingredients= {["mozzarella",", ", "gorgonzola", ", ", "parmesano", ", ", "provolone"]}
        price='6950'
      />

      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3'
        name='Pizza Pepperoni'
        ingredients= {["mozzarella",", ", "pepperoni", ", "  ,"orégano"]}
        price='6950'
      />
      </div>


      <FooterApp/>
    </>
  )
}

export default App
