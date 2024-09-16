/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'newuser', description: 'Nome de usuário' })
  username: string;

  @ApiProperty({ example: 'strongPassword123', description: 'Senha do usuário' })
  password: string;
}
