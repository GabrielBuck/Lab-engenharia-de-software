import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateProgressDto {
  @ApiPropertyOptional({
    example: 120,
    description: 'Absolute page. Use for goToPage/go_to_page flows.',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  currentPage?: number;

  @ApiPropertyOptional({
    example: 20,
    description:
      'Pages read in this session. Use for addPages/add_pages flows.',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  pagesRead?: number;

  @ApiPropertyOptional({ nullable: true, example: 35 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(1440)
  durationMinutes?: number | null;

  @ApiPropertyOptional({ default: 'pages' })
  @IsOptional()
  @IsString()
  mode?: string;

  @ApiPropertyOptional({ default: 'manual' })
  @IsOptional()
  @IsString()
  source?: string;
}
