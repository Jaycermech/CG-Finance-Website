class Monthly_budget {
    constructor(ammenities,cost) {
        this.ammenities = ammenities; 
        this.cost = cost;
        const random = Math.floor(Math.random() * 1000);
        this.id = random.toString().padStart(3, '0');
    }
}
module.exports = { Monthly_budget };