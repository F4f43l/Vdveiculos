export class Rental {
    private id: string;
    private userId: string;
    private carId: string;
    private startDate: Date;
    private expectedReturnDate: Date;
    private endDate: Date | null;
    private total: number | null;

    constructor(id: string, userId: string, carId: string, startDate: Date, expectedReturnDate: Date, endDate: Date | null, total: number | null){
        this.id = id;
        this.userId = userId;
        this.carId = carId;
        this.startDate = startDate;
        this.expectedReturnDate = expectedReturnDate;
        this.endDate = endDate;
        this.total = total;
    }
    getId(): string {
        return this.id;
    }

    getUserId(): string {
        return this.userId;
    }

    getCarId(): string {
        return this.carId;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getExpectedReturnDate(): Date {
        return this.expectedReturnDate;
    }

    getEndDate(): Date | null {
        return this.endDate;
    }

    getTotal(): number | null {
        return this.total;
    }

    isOpen(): boolean {
        return this.endDate === null;
    }

    close(endDate: Date = new Date(), total?: number): void {
        if (!this.isOpen()) throw new Error("Aluguel fechado!");
        this.endDate = endDate;
        if (total !== undefined) this.total = total;
    }
}