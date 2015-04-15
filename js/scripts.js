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
    //  name : "tommy",
    //  set_name: function(new_name){
    //      this.name = this.new_name;
    //  },
     //
    //  get_name: function(){
    //      return this.name;
    //  }
    return_name: function(){
        return this.name;
    }

 }

     $(function(){
         $("form#create-bank").submit(function(event){
             event.preventDefault();

         var newAccountUser = $("input#name").val();
         var newDeposit = parseInt($("input#initial-deposit").val());

         var newUser = Object.create(Person);
         newUser.name = newAccountUser;

         var newAccount = Object.create(BankAccount);
         newAccount.deposit(newDeposit);
         var balance = newAccount.balance;

         $("#balance").append("<td class='success'>"+balance + "</td>");
         $("#account-holder").append(newUser.name);
     });

     $(function(){
         $("form#money-dep-with").submit(function(event){
             event.preventDefault();
             var inputtedDeposit =  parseInt($("input#deposit-amount").val());
             var inputtedWithdraw = parseInt($("input#withdraw-amount").val());

             var new_balance = newAccount.deposit(inputtedDeposit);
             console.log(new_balance);




         })
     });
 });
