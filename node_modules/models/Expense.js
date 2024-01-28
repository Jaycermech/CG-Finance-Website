class Expense {
  constructor(description, amount, user) {
    this.description = description;
    this.amount = amount;
    this.user = user;
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    this.id = timestamp + "" + random.toString().padStart(3, "0");
  }
}
module.exports = { Expense };
