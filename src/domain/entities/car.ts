export class Car {
    private id: string;
    private datas:string;
    private disponibilidade:string;

    constructor(id: string, datas: string, disponibilidade: string) {
        this.id = id;
        this.datas = datas;
        this.disponibilidade = disponibilidade;
    } 
    getId(): string {
        return this.id;
    }
    getDatas(): string {
        return this.datas;
    }
    getDisponibilidade(): string {
        return this.disponibilidade;
    }
}