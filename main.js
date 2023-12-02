
let m=parseInt(prompt("Enter the deposit amount"))
let n=parseInt(prompt("Enter the withdraw amount"))

class Bankaccount{
    constructor(accountNo,balance){
        this.accountNo=accountNo
        this.balance=balance
    }
    
    deposit(m){
        let a=this.balance+m
        document.write("Your balance is "+this.balance+"<br>")
        document.write("You are deposited Rs"+m+"and your balance is "+a+"<br>")
    }
    
    widthdraw(n,a){
        
        let b=this.balance+m-n
        document.write("You are withdraw Rs"+n+"and your balance is "+b+"<br>")
       
    }
   
}
let bank=new Bankaccount(123,1000)
bank.deposit(m)
bank.widthdraw(n)

