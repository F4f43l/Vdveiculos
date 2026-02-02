import { Car } from '../entities/car';

export interface ICarRepository {
    create(car: Car): Promise<void>;
    findId(id: string): Promise<Car | null>;
    findLicensePlate(licensePlate: string): Promise<Car | null>;
    save(car: Car): Promise<void>;
}
export interface ICarRepository {
    updateAvailable(id: string, available: boolean): Promise<void>;
}
