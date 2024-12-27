import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LocationHistoryModuleBase } from "./base/locationHistory.module.base";
import { LocationHistoryService } from "./locationHistory.service";
import { LocationHistoryController } from "./locationHistory.controller";
import { LocationHistoryResolver } from "./locationHistory.resolver";

@Module({
  imports: [LocationHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [LocationHistoryController],
  providers: [LocationHistoryService, LocationHistoryResolver],
  exports: [LocationHistoryService],
})
export class LocationHistoryModule {}
