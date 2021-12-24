import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsInt()
    seq_num: number;
}