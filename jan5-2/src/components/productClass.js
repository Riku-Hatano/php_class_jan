class productClass {
    constructor(name, price, amount, discount = 100, tax = 10) {
        this.name = name,
        this.price = price,
        this.amount = amount,
        this.discount = discount / 100,
        this.tax = tax / 100
    }
    calDiscount() {
        let total = this.price + this.amount
        return total * this.discount;
    }
    calTotal() {
        let total = (this.price + this.amount) * this.tax
        if(this.discount > 0) {
            return total - this.calDiscount();
        }
        return total;
    }
    toJSON() {
        return {
            name: this.name,
            price: this.price, 
            amount: this.amount,
            discount: this.discount
        }
    }
}


export default productClass;