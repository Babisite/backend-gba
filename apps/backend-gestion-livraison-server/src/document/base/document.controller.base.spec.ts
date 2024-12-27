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
import { DocumentController } from "../document.controller";
import { DocumentService } from "../document.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  expiryDate: new Date(),
  fileSize: 42,
  fileType: "exampleFileType",
  id: "exampleId",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  uploadDate: new Date(),
  url: "exampleUrl",
  userId: 42,
  verificationDate: new Date(),
  verificationNotes: "exampleVerificationNotes",
  verified: "true",
  verifiedBy: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  expiryDate: new Date(),
  fileSize: 42,
  fileType: "exampleFileType",
  id: "exampleId",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  uploadDate: new Date(),
  url: "exampleUrl",
  userId: 42,
  verificationDate: new Date(),
  verificationNotes: "exampleVerificationNotes",
  verified: "true",
  verifiedBy: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    expiryDate: new Date(),
    fileSize: 42,
    fileType: "exampleFileType",
    id: "exampleId",
    status: "exampleStatus",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
    uploadDate: new Date(),
    url: "exampleUrl",
    userId: 42,
    verificationDate: new Date(),
    verificationNotes: "exampleVerificationNotes",
    verified: "true",
    verifiedBy: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  expiryDate: new Date(),
  fileSize: 42,
  fileType: "exampleFileType",
  id: "exampleId",
  status: "exampleStatus",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  uploadDate: new Date(),
  url: "exampleUrl",
  userId: 42,
  verificationDate: new Date(),
  verificationNotes: "exampleVerificationNotes",
  verified: "true",
  verifiedBy: 42,
};

const service = {
  createDocument() {
    return CREATE_RESULT;
  },
  documents: () => FIND_MANY_RESULT,
  document: ({ where }: { where: { id: string } }) => {
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

describe("Document", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocumentService,
          useValue: service,
        },
      ],
      controllers: [DocumentController],
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

  test("POST /documents", async () => {
    await request(app.getHttpServer())
      .post("/documents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
        verificationDate: CREATE_RESULT.verificationDate.toISOString(),
      });
  });

  test("GET /documents", async () => {
    await request(app.getHttpServer())
      .get("/documents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          uploadDate: FIND_MANY_RESULT[0].uploadDate.toISOString(),
          verificationDate: FIND_MANY_RESULT[0].verificationDate.toISOString(),
        },
      ]);
  });

  test("GET /documents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/documents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /documents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/documents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        uploadDate: FIND_ONE_RESULT.uploadDate.toISOString(),
        verificationDate: FIND_ONE_RESULT.verificationDate.toISOString(),
      });
  });

  test("POST /documents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/documents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
        verificationDate: CREATE_RESULT.verificationDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/documents")
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
