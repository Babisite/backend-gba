import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RouteController } from "../route.controller";
import { RouteService } from "../route.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualDuration: 42,
  breakTime: 42,
  completionRate: 42.42,
  createdAt: new Date(),
  currentLocation: "exampleCurrentLocation",
  currentStatus: "exampleCurrentStatus",
  date: new Date(),
  driverId: 42,
  endAddress: "exampleEndAddress",
  endTime: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  isOptimized: "true",
  notes: "exampleNotes",
  startAddress: "exampleStartAddress",
  startTime: new Date(),
  status: "exampleStatus",
  totalDistance: 42.42,
  trafficConditions: "exampleTrafficConditions",
  updatedAt: new Date(),
  weather: "exampleWeather",
};
const CREATE_RESULT = {
  actualDuration: 42,
  breakTime: 42,
  completionRate: 42.42,
  createdAt: new Date(),
  currentLocation: "exampleCurrentLocation",
  currentStatus: "exampleCurrentStatus",
  date: new Date(),
  driverId: 42,
  endAddress: "exampleEndAddress",
  endTime: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  isOptimized: "true",
  notes: "exampleNotes",
  startAddress: "exampleStartAddress",
  startTime: new Date(),
  status: "exampleStatus",
  totalDistance: 42.42,
  trafficConditions: "exampleTrafficConditions",
  updatedAt: new Date(),
  weather: "exampleWeather",
};
const FIND_MANY_RESULT = [
  {
    actualDuration: 42,
    breakTime: 42,
    completionRate: 42.42,
    createdAt: new Date(),
    currentLocation: "exampleCurrentLocation",
    currentStatus: "exampleCurrentStatus",
    date: new Date(),
    driverId: 42,
    endAddress: "exampleEndAddress",
    endTime: new Date(),
    estimatedDuration: 42,
    id: "exampleId",
    isOptimized: "true",
    notes: "exampleNotes",
    startAddress: "exampleStartAddress",
    startTime: new Date(),
    status: "exampleStatus",
    totalDistance: 42.42,
    trafficConditions: "exampleTrafficConditions",
    updatedAt: new Date(),
    weather: "exampleWeather",
  },
];
const FIND_ONE_RESULT = {
  actualDuration: 42,
  breakTime: 42,
  completionRate: 42.42,
  createdAt: new Date(),
  currentLocation: "exampleCurrentLocation",
  currentStatus: "exampleCurrentStatus",
  date: new Date(),
  driverId: 42,
  endAddress: "exampleEndAddress",
  endTime: new Date(),
  estimatedDuration: 42,
  id: "exampleId",
  isOptimized: "true",
  notes: "exampleNotes",
  startAddress: "exampleStartAddress",
  startTime: new Date(),
  status: "exampleStatus",
  totalDistance: 42.42,
  trafficConditions: "exampleTrafficConditions",
  updatedAt: new Date(),
  weather: "exampleWeather",
};

const service = {
  createRoute() {
    return CREATE_RESULT;
  },
  routes: () => FIND_MANY_RESULT,
  route: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Route", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RouteService,
          useValue: service,
        },
      ],
      controllers: [RouteController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /routes", async () => {
    await request(app.getHttpServer())
      .post("/routes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /routes", async () => {
    await request(app.getHttpServer())
      .get("/routes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /routes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/routes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /routes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/routes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /routes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/routes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        startTime: CREATE_RESULT.startTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/routes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
