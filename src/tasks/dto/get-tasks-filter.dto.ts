import { IsBoolean, IsOptional, IsString } from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsBoolean()
    done?: boolean;

    @IsOptional()
    @IsString()
    search?: string;
}