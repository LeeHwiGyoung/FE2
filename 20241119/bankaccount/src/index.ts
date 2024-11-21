/* 기본 동작
 
 입금, 출금, 계좌간 송금, 잔액조회(잔액은 최소한의 금액이 필요합니다.)
이자 확인
 
 이자는 최대값에 제한이 있습니다. (예를 들어 이자가 1%이고, 최대값이 100만원일때, 120만원이 게좌에 있어도 여전히 100만원의 1%만 이자로 받습니다. 돈이 너무 많아서 이자가 무한대로 커지는 것을 막기 위함입니다.)
즐겨찾기 계좌 관리하기
 
 내가 즐겨찾는 계좌 리스트를 볼 수 있고, 계좌를 추가할 수 있으며, 게좌를 제거할 수 있습니다. 
 */

 class BankAccount {
    private balance : number;
    private interestRate : number;
    private maxInterest : number;
    private id : number;
    private FavoriteAccount : BankAccount[];

    constructor(balance:number , interestRate : number , maxInterest : number , id : number) {
        this.balance = balance;
        this.interestRate = interestRate;
        this.maxInterest = maxInterest;
        this.id = id;
    }

    getBalance():number {
        return this.balance;
    }

    printBalance():void {
        console.log(`현재 통장 잔고는 ${this.balance} 입니다.`)
    }

    deposit(amount : number) : void{
        if(amount < 1) { //잘못된 금액
            throw new Error('알맞은 금액을 입력해주세요, 최소 : 1')
        } 
        this.balance += amount;
    }

    withDraw(amount : number) : void {
        if(amount < 1 ){
            throw new Error('알맞은 금액을 입력해주세요 최소 : 1');
        }
        if(amount > this.balance){
            throw new Error('계좌에 금액이 부족합니다.')
         
        }
        this.balance -= amount;
    }

    getMonthlyInterest():number {
        const mInterest = this.balance *this.interestRate / 100;
        if(mInterest > this.maxInterest){
            return this.maxInterest;
        }

        return mInterest;
    }

    transferMoney( account : BankAccount , amount : number) {
        if(amount > this.balance) {
            throw new Error('잔액이 부족합니다.')
        }

        this.withDraw(amount);
        account.deposit(amount);
    }

    addAccountToFavorites(account : BankAccount) {
        this.FavoriteAccount[this.FavoriteAccount.length] = account;
    }

    getFavoriteAccounts() {
        return this.FavoriteAccount;
    }

    removeFavoriteAccountById(id : number) {
        this.FavoriteAccount = this.FavoriteAccount.filter((account)=> account.id !== id )
    }
}