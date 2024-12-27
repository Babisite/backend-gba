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
import { LocationHistoryController } from "../locationHistory.controller";
import { LocationHistoryService } from "../locationHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accuracy: 42.42,
  batteryLevel: 42.42,
  createdAt: new Date(),
  deliveryId: 42,
  heading: 42.42,
  id: "exampleId",
  location: "exampleLocation",
  speed: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: 42,
};
const CREATE_RESULT = {
  accuracy: 42.42,
  batteryLevel: 42.42,
  createdAt: new Date(),
  deliveryId: 42,
  heading: 42.42,
  id: "exampleId",
  location: "exampleLocation",
  speed: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: 42,
};
const FIND_MANY_RESULT = [
  {
    accuracy: 42.42,
    batteryLevel: 42.42,
    createdAt: new Date(),
    deliveryId: 42,
    heading: 42.42,
    id: "exampleId",
    location: "exampleLocation",
    speed: 42.42,
    timestamp: new Date(),
    updatedAt: new Date(),
    userId: 42,
  },
];
const FIND_ONE_RESULT = {
  accuracy: 42.42,
  batteryLevel: 42.42,
  createdAt: new Date(),
  deliveryId: 42,
  heading: 42.42,
  id: "exampleId",
  location: "exampleLocation",
  speed: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
  userId: 42,
};

const service = {
  createLocationHistory() {
    return CREATE_RESULT;
  },
  locationHistories: () => FIND_MANY_RESULT,
  locationHistory: ({ where }: { where: { id: string } }) => {
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

describe("LocationHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LocationHistoryService,
          useValue: service,
        },
      ],
      controllers: [LocationHistoryController],
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

  test("POST /locationHistories", async () => {
    await request(app.getHttpServer())
      .post("/locationHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /locationHistories", async () => {
    await request(app.getHttpServer())
      .get("/locationHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /locationHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/locationHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /locationHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/locationHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /locationHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/locationHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/locationHistories")
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
