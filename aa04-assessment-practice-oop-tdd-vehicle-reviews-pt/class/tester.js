const Bicycle = require("./bicycle")
const ElectricBicycle = require("./electric-bicycle")
const Review = require("./review")
const Vehicle = require("./vehicle")

class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
        this.bikeTester = false;
        this.ebikeTester = false;
    }

    submitReview(vehicle, starRating, text) {
        if (!vehicle.validate()) throw new Error("Cannot submit review for invalid vehicle.")

        let newReview = new Review(vehicle, this, starRating, text)
        this.reviews.push(newReview)
        vehicle.reviews.push(newReview)


        if (vehicle instanceof ElectricBicycle) {
            this.eBikeTester = true
        } else if (vehicle instanceof Bicycle) {
            this.bikeTester = true
        }

        return newReview


    }
}

module.exports = Tester;