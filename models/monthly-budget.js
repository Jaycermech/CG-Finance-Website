class Monthly_budget {
    constructor(ammenities,budget,owner) {
        this.ammenities = ammenities; 
        this.budget = budget;
        this.owner = owner;
        const random = Math.floor(Math.random() * 1000);
        this.id = random.toString().padStart(3, '0');
    }
}
module.exports = { Monthly_budget };