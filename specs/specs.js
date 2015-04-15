describe("BankAccount", function(){
    describe("deposit", function(){
        it("adds the amount to the balance", function(){
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.deposit(20);
            expect(testBankAccount.balance).to.equal(20);
        });
    });

    describe("withdraw", function(){
        it("subtracts the amount from the balance", function(){
            var testBankAccount = Object.create(BankAccount);
            testBankAccount.withdraw(15);
            expect(testBankAccount.balance).to.equal(-15);
        });
    });
});
