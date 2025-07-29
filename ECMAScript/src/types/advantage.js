// Partial (dùng object thông thường thôi)
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = {
  description: "clear clutter", // không có title cũng được, vì JS không ép kiểu
};

// Omit (bỏ trường đơn giản bằng destructuring)
const book = {
  id: 1,
  title: "Book title",
  author: "Author name",
  price: 100,
};

const { id, title, ...bookWithoutTitleAndId } = book;
// bookWithoutTitleAndId: { author: ..., price: ... }

// Pick (lấy vài trường cũng dùng destructuring)
const { author, price } = book;
const pickedBook = { author, price };

// Generic – chỉ cần function nhận và trả về data
const printVariable = (data) => {
  return data;
};

printVariable("ssss");

// keyof – không dùng được, nhưng có thể làm như sau:
const person = {
  name: "John",
  age: 30,
};

const keys = Object.keys(person); // ['name', 'age']
const key = keys[0]; // ví dụ: "name"

// typeof – JS đã có typeof nhưng trả về string kiểu "string", "number"
const person2 = {
  name: "John",
  age: 30,
};

const person2Type = typeof person2; // object

// Mapped type – phải làm thủ công
const mapType = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key]; // hoặc xử lý tùy ý
  }
  return newObj;
};

const optionalPerson = mapType(person); // tương đương { name: ..., age: ... }
