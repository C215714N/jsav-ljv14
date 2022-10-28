export class ClientID {
    constructor(){
        this.client = Math.random();
    }
    getID(){
        if (this.client == undefined){
            this.client = Math.random();
            return this.client;
        }
        return this.client;
    }
}