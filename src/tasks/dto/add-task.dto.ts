import { IsNotEmpty } from 'class-validator';

export class AddTaskDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    seq_num: number;
}