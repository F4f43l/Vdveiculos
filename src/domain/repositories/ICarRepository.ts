import { Car } from '../entities/car';

export interface ICarRepository {
    create(car: Car): Promise<void>;
    findId(id: string): Promise<Car | null>;
    findPlaca(placa: string): Promise<Car | null>;
    save(car: Car): Promise<void>;
    atualizarDispo(id: string, disponibilidade: boolean): Promise<void>;
}