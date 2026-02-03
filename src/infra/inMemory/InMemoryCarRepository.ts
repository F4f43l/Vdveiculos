import { ICarRepository } from "../../domain/repositories/ICarRepository";
import { Car } from "../../domain/entities/car";

export class InMemoryCarRepository implements ICarRepository {
  private cars: Car[] = [];
    async create(car: Car): Promise<void> {
      this.cars.push(car);
    }
    async findId(id: string): Promise<Car | null> {
      const car = this.cars.findIndex((car) => car.getId() === id);
      return car || null;
    }
    async atualizarDispo(id: string, disponibilidade: boolean): Promise<void> {
      const carIndex = this.cars.findIndex((car) => car.getId() === id);
    }
}