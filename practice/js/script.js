


//// Object Creation using new Object()
var company = new Object();
company.name = "fb";
company.ceo = new Object();
company.ceo.name = "mark";
company.ceo.color = "blu";

console.log(company);
console.log(company["name"]);

company["$stock of company"] = new Object();
company["$stock of company"]["last day"] = 100;
console.log(company["$stock of company"]["last day"])




////Object Creation using object literal 
var facebook = {
	name: "facebook",
	ceo: {
		firstName: "mark",
		favColor: "blue"
	},
	$stock : 100
};

console.log(facebook);




/// Whenever new Obj() gets called this inside that points to that object

/// Object Creation using function

///this keyword with function 
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	console.log(this);		//points to Circle, not windows
	return Math.PI * Math.pow(this.radius,2);
};

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());





// this keyword with object literals
var literalCircle = {	//new Object();

	radius : 10,
	getArea: function() {
		console.log(this);	//points to literalCirle , not windows


		var increaseRadius = function() {
			this.radius  = 20;		//this will point to global object ,so radius of literal circle won't get changed
		};
		increaseRadius();

		console.log(this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());

