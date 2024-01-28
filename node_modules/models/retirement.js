class Retirement {
  constructor(
    title,
    current_age,
    retirement_age,
    fund_goal,
    annual_saving_goal,
    user
  ) {
    this.title = title;
    this.current_age = current_age;
    this.retirement_age = retirement_age;
    this.fund_goal = fund_goal;
    this.annual_saving_goal = annual_saving_goal;
    this.user = user;
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    this.id = timestamp + "" + random.toString().padStart(3, "0");
  }
}
module.exports = { Retirement };
