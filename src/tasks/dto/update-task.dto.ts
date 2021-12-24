import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateTaskDto {
    // id: string;
    @IsNotEmpty()
    name: string;

    @IsInt()
    seq_num: number;
}