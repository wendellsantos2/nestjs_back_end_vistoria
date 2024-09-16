/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user123', description: 'Nome de usuário' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
  password: string;
}
