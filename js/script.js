// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: april 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  const burger = document.getElementById('burger').value
  const toppings = document.getElementById('toppings').value
  //console.log(burger)
  //console.log(toppings)

  let calctax=0;
  let topping
  let total
  let burgerType
  //let toppingNumber = 0

  if (burger=="Plain Burger") 
  {
    //console.log("Plain Burger1") 
    burgerType = 4.00
    if (toppings=="1 Topping")
    {
      topping = 0.50
      //toppingNumber = 1
    }  
    else if (toppings=="2 Topping")
    {
      topping = 1.00
      //toppingNumber = 2
    } 
    else if (toppings=="3 Topping")
    {
      topping = 1.50
      //toppingNumber = 3
    }
  } 
  else
  {
    burgerType = 5.00
    //console.log("Cheeseburger") 
    if (toppings=="1 Topping")
    {
      topping = 0.50
      //toppingNumber = 1
    }  
    else if (toppings=="2 Topping")
    {
      topping = 1.00 
      //toppingNumber = 2
    } 
    else if (toppings=="3 Topping")
    {
      topping = 1.50
      //toppingNumber = 3
    }
  }
  //console.log(total)
  total = burgerType + topping
  calctax = total * 1.13

  document.getElementById('answer').innerHTML = "The cost is $" + calctax.toFixed(2) + " for a " + burger + " with " + toppings
}
