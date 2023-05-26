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

  let total=0;
  let calctax=0;
  if (burger=="Plain Burger") 
  {
    //console.log("Plain Burger1") 
    let plainBurger = 4.00
    if (toppings=="1 Topping")
    {
      let onetopping
      onetopping = 0.50
      total = plainBurger + onetopping
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 1 topping"
    }  
    if (toppings=="2 Topping")
    {
      let twotoppings
      twotoppings = 1.00
      total = plainBurger + twotoppings
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 2 toppings"
    } 
    if (toppings=="3 Topping")
    {
      let threetoppings
      threetoppings = 1.50
      total = plainBurger + threetoppings
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 3 toppings"
    }
  } 
  else 
  {    
    //console.log("Cheeseburger") 
    let chburger = 5.00    
    if (toppings=="1 Topping")
    {
      let onetopping
      onetopping = 0.50
      total = chburger + onetopping
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 1 topping"
    }  
    if (toppings=="2 Topping")
    {
      let twotoppings
      twotoppings = 1.00
      total = chburger + twotoppings
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 2 toppings"
    } 
    if (toppings=="3 Topping")
    {
      let threetoppings
      threetoppings = 1.50
      total = chburger + threetoppings
      calctax = total * 0.13    
      total = total + calctax
      document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2) + " for a " + burger + " with 3 toppings"
    }
  }
  //console.log(total)
  //document.getElementById('answer').innerHTML = "The cost is $" + total.toFixed(2)
}