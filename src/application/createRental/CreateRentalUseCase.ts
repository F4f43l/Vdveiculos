import { Rental } from "../../domain/entities/rental";
import { IRentalRepository } from "../../domain/repositories/IRentalRepository";
import { ICarRepository } from "../../domain/repositories/ICarRepository";
import { ICreateRentalDTO } from "./CreateRentalDTO";
import { randomUUID } from "crypto";

export class CreateRentalUseCase {
  constructor(
    private rentalRepository: IRentalRepository,
    private carRepository: ICarRepository
  ) {}

  async execute({ userId, carId, expectedReturnDate }: ICreateRentalDTO): Promise<Rental> {
    const now = new Date(); 
    const diffMs = expectedReturnDate.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60); 

    if (diffHours < 24) { 
      throw new Error("Data prevista de retorno deve ser de no mínimo 24 horas.");
    }
    const car = await this.carRepository.findId(carId); 
    if (!car) {
      throw new Error("Carro não foi encontrado.");
    }
    if (!car.getDisponibilidade()) {
      throw new Error("Carro está indisponível.");
    }
    const openRentalByCar = await this.rentalRepository.findOpenRentalByCarId(carId);
    if (openRentalByCar) {
      throw new Error("Carro já tem um aluguel em aberto");
    }
    const openRentalByUser = await this.rentalRepository.findOpenRentalByUserId(userId);
    if (openRentalByUser) {
      throw new Error("Usuário já possui um aluguel em aberto.");
    }

    const rental = new Rental(
      randomUUID(),         
      userId,               
      carId,                
      now,                  
      expectedReturnDate,   
      null,                 
      null                  
    );

    await this.rentalRepository.create(rental);

    car.markSeIndisponivel();
    await this.carRepository.save(car);

    return rental;
  }
}