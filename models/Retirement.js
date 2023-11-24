class Retirement {
  constructor(current_age, retirement_age, fund_goal, id) {
    this.current_age = current_age;
    this.retirement_age = retirement_age;
    this.fund_goal = fund_goal;

    var timestamp = new Date().getTime();
    var random = Math.floor(Math.random() * 1000);
    this.id = timestamp + "" + random.toString().padStart(3, "0");
  }
}
module.exports = { Retirement };
