import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  /** ============================
   * 🔹 CREATE USER
   * ============================ */
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Vérifier si l'email existe déjà
    const existing = await this.usersRepository.findOne({
      where: { mail: createUserDto.mail },
    });

    if (existing) {
      throw new ConflictException('Cet email est déjà utilisé.');
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return await this.usersRepository.save(user);
  }

  /** ============================
   * 🔹 FIND ALL USERS
   * ============================ */
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  /** ============================
   * 🔹 FIND ONE USER
   * ============================ */
  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${id} introuvable.`);
    }

    return user;
  }

  /** ============================
   * 🔹 UPDATE USER
   * ============================ */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    // Vérif email unique
    if (updateUserDto.mail) {
      const emailExists = await this.usersRepository.findOne({
        where: { mail: updateUserDto.mail },
      });

      if (emailExists && emailExists.id !== id) {
        throw new ConflictException(
          'Cet email est déjà utilisé par un autre utilisateur.',
        );
      }
    }

    // Re-hash du mot de passe si modification
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    Object.assign(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  /** ============================
   * 🔹 DELETE USER
   * ============================ */
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }
}
