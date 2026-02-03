export class Car {
    private id: string;
    private placa:string;
    private disponibilidade: boolean;

    constructor(id: string, placa: string, disponibilidade: boolean) {
        this.id = id;
        this.placa = placa;
        this.disponibilidade = disponibilidade;
    } 
    getId(): string {
        return this.id;
    }
    getPlaca(): string {
        return this.placa;
    }
    getDisponibilidade(): boolean {
        return this.disponibilidade;
    }
    markSeIndisponivel(): void { //não disponível
        this.disponibilidade = false;
    }
    markSeDisponivel(): void { //disponível
        this.disponibilidade = true;
    }
}