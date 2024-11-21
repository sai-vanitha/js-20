class Book{
    title;
    author;
    ISBN;

constructor(title,author,ISBN)
{
this.title=title;
this.author=author;
this.ISBN=ISBN;
}

checkout()
{
    console.log("this book has been grabed")
}

 returnBook()
 {
    console.log("this book has been returned to library");
 }
 updateTitle()
 {
    console.log(this.title,"book title has been changed due to some x factor reason");
 }
}

var b1= new Book("amma dairy lo konni page lu","ravi mantri","978-0061120084");
 b1.checkout();
 b1.returnBook();
 b1.updateTitle();
 console.log(b1);
 console.log("----------------------------------------------------------------------------------------------------------------")
// _______________________________________________________
 class product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }

   applydiscount(amount)
   {
    this.price=amount;
    console.log(this.price,"discount has been applied on the product");
   }
afterdiscount(amount)
{
    this.price=amount;
    console.log(this.price,"after discount");
}
 }
var person1 =new product("sunsilk","200","shampoo");
person1.applydiscount(30);
person1.afterdiscount("170");
console.log(person1);
console.log("-----------------------------------------------------------------------------------------------------------------")
 
class bank{
    accountholdername;
    accountnumber;
    balance;
    constructor(accountholdername,accountnumber,balance){
    this.accountholdername=accountholdername;
    this.accountnumber=accountnumber;
    this.balance=balance;}


    deposit(amount){
        this.amount=amount;
        console.log(this.amount,"amount has been deposited")
    }
    withdraw(amount){
        this.amount=amount;
        console.log(this.amount,"amount has been withdrawed")
    }
    getbalance(amount){
        this.amount=amount;
        console.log(this.amount,"the remaining balance")
    }
}
var person1 =new bank ("vanitha","12334567889","50000");
    person1.deposit( 100000);
    person1.withdraw(50000);
    person1.getbalance(50000);
    console.log(person1);
    console.log("----------------------------------------------------------------------------------------------------")

    class vehicle{
        model;
        licenceplate;
        mileage;
        constructor(model,licenceplate,mileage){
            this.model=model;
            this.licenceplate=licenceplate;
            this.mileage=mileage;
        }
        drive(miles){
            this.miles=miles;
            console.log(this.miles,"drive");
        }
        currentmileage(miles){
            this.miles=miles;
            console.log(this.miles,"currentmileage");
        }
    }
    var vehicle1 =new vehicle( "classic","ts076483",350);
    vehicle1.drive(500);
    vehicle1.currentmileage(200);
    console.log(vehicle1);
    console.log("----------------------------------------------------------------------------------------------------------")

    class student{
        name;
        grade;

        constructor(name,grade){
            this.name=name;
            this.grade=grade;
        }
        updategrade(cgpa){
            this.cgpa=cgpa;
            console.log(this.cgpa,"updated grade")
        }
        currentgrade(cgpa){
            this.cgpa=cgpa;
            console.log(this,cgpa,"current grade")
        }
    }
    var student1=new student("manvika","A+");
        student1.updategrade("A+");
        student1.currentgrade("A");
        console.log(student1);