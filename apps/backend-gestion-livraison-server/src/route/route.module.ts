import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RouteModuleBase } from "./base/route.module.base";
import { RouteService } from "./route.service";
import { RouteController } from "./route.controller";
import { RouteResolver } from "./route.resolver";

@Module({
  imports: [RouteModuleBase, forwardRef(() => AuthModule)],
  controllers: [RouteController],
  providers: [RouteService, RouteResolver],
  exports: [RouteService],
})
export class RouteModule {}
