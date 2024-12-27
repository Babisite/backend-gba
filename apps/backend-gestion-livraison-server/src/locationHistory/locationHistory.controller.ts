import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LocationHistoryService } from "./locationHistory.service";
import { LocationHistoryControllerBase } from "./base/locationHistory.controller.base";

@swagger.ApiTags("locationHistories")
@common.Controller("locationHistories")
export class LocationHistoryController extends LocationHistoryControllerBase {
  constructor(
    protected readonly service: LocationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
