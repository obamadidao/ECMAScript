import React from "react";

const CoreType = () => {
  // string
  const name = "John Doe";
  // number
  const age = 30;
  // boolean
  const isStudent = false;
  // any (JavaScript tự hiểu)
  const variableAny = "Hello";
  // Tuple → xử lý như mảng
  const variableTuple = ["John", 30];
  // Array
  const variableArr = [1, 2, 3, 4, 5];
  const favoriteFoods = ["noddle", "pizza", "rice"];

  // Enum → dùng object giả lập enum
  const Role = {
    ADMIN: "ADMIN",
    USER: "USER",
  };
  const role = Role.ADMIN;

  // literal & union type: không cần khai báo type, JS sẽ hiểu theo giá trị
  const greeting = "Hello";
  const productId = "12345";

  // unknown: xử lý tương tự với typeof check
  const print = (value) => {
    if (typeof value === "string") {
      console.log(value.toLowerCase());
    }
  };
  print("Hello");

  // Object person (bỏ interface, viết trực tiếp)
  const person = {
    name: "John",
    age: 30,
    description: "This is a person",
    getInfo: () => {
      console.log(`Name: ${person.name}, Age: ${person.age}`);
    },
  };

  return (
    <>
      <div>
        {name} {age} {isStudent.toString()} {variableAny} {greeting}{" "}
        {productId}
      </div>
      <div>
        {variableTuple[0]} {variableTuple[1]}
      </div>
      <h2>Món Ăn Yêu Thích</h2>
      <ul>
        {favoriteFoods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </>
  );
};

export default CoreType;
