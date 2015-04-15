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

    return_name: function(){
        return this.name;
    }

 }

 var newUser = Object.create(Person);
 var newAccount = Object.create(BankAccount);


     $(document).ready(function(){
         $("form#create-bank").submit(function(event){
             event.preventDefault();

         var newAccountUser = $("input#name").val();
         var newDeposit = parseInt($("input#initial-deposit").val());

        //  var newUser = Object.create(Person);
         newUser.name = newAccountUser;

        //  var newAccount = Object.create(BankAccount);
         newAccount.deposit(newDeposit);
         var balance = newAccount.balance;

         $(".success").text(balance);
         $("#account-holder").append(newUser.name);
     });




     $(function(){
         $("form#money-dep-with").submit(function(event){
             event.preventDefault();
             var inputtedDeposit =  parseInt($("input#deposit-amount").val());
             var inputtedWithdraw = parseInt($("input#withdraw-amount").val());

             newAccount.deposit(inputtedDeposit);
             var new_balance = newAccount.balance;
             $(".success").text(new_balance);

              newAccount.withdraw(inputtedWithdraw);
              var withdrawAccount = newAccount.balance;
              $(".success").text(new_balance);



         });
       })
    });
