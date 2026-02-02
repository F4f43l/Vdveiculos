import { ICarRepository } from "../../domain/repositories/ICarRepository";
import { car } from "../../domain/entities/car.ts";

export class InMemoryCarRepository implements ICarRepository {
  private cars: car[] = [];
    async create(car: car): Promise<void> {
      this.cars.push(car);
    }
    async findById(id: string): Promise<car | null> {
      const car = this.cars.find((car) => car.id === id);
      return car || null;
    }
    async updtadeAvailable(id: string, available: boolean): Promise<void> {
      const carIndex = this.cars.findIndex((car) => car.id === id);
    }
}
