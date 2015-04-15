var BankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance = this.balance + amount;
    },
    withdraw: function(amount) {
        this.balance = this.balance - amount;
    }
};

 var Person = {
     name : "tommy",
     set_name: function(new_name){
         this.name = this.new_name;
     },

     get_name: function(){
         return this.name;
     }


 }
