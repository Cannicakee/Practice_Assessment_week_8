class Vehicle {
    constructor(modelName, year, price) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    validate() {
        if (!this.modelName || !this.year || !this.price) {
            return false;
        }

        if (this.year < 1950 || this.year > 2100) {
            return false;
        }
        return true;
    }

    update(modelName, year, price) {
        if (year < 1950 || year > 2100) {
            throw new Error("Year must be between 1950 and 2100.")
        }
        if (price <= 0) {
            throw new Error("Price must be greater than 0")
        }
        this.modelName = modelName || this.modelName
        this.year = year || this.year
        this.price = price || this.price
    }

    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
    }

    findReviewByTester(tester) {
        return this.reviews.filter(review => review.tester.name === tester)[0]
    }
}

module.exports = Vehicle;