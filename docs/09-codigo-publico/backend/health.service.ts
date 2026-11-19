import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { HealthResponseDto } from './dto/health-response.dto';

@Injectable()
export class HealthService {
  constructor(private readonly configService: ConfigService) {}

  getHealth(): HealthResponseDto {
    return {
      status: 'ok',
      service: this.configService.get<string>('app.name', 'booklog-backend'),
      timestamp: new Date().toISOString(),
    };
  }
}
