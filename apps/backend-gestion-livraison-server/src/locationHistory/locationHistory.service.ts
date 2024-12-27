import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationHistoryServiceBase } from "./base/locationHistory.service.base";

@Injectable()
export class LocationHistoryService extends LocationHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
