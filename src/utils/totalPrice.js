export const totalPrice = (items) =>
  items.reduce((acc, item) => (acc += item.price), 0);
