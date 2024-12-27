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
import { DeliveryController } from "../delivery.controller";
import { DeliveryService } from "../delivery.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actualDeliveryTime: new Date(),
  actualPickupTime: new Date(),
  cancellationReason: "exampleCancellationReason",
  cancelledAt: new Date(),
  createdAt: new Date(),
  currency: "exampleCurrency",
  currentLocation: "exampleCurrentLocation",
  customerId: 42,
  deliveryAddress: "exampleDeliveryAddress",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryContactPhone: "exampleDeliveryContactPhone",
  deliveryCoords: "exampleDeliveryCoords",
  deliveryInstructions: "exampleDeliveryInstructions",
  discount: 42.42,
  distance: 42.42,
  driverId: 42,
  estimatedArrival: new Date(),
  estimatedTime: 42,
  feedback: "exampleFeedback",
  id: "exampleId",
  isFragile: "true",
  notes: "exampleNotes",
  orderNumber: "exampleOrderNumber",
  packageSize: "examplePackageSize",
  packageType: "examplePackageType",
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
  pickupAddress: "examplePickupAddress",
  pickupContactName: "examplePickupContactName",
  pickupContactPhone: "examplePickupContactPhone",
  pickupCoords: "examplePickupCoords",
  pickupInstructions: "examplePickupInstructions",
  price: 42.42,
  priority: 42,
  progress: 42,
  promoCode: "examplePromoCode",
  proofOfDelivery: "exampleProofOfDelivery",
  requiresRefrigeration: "true",
  routeId: 42,
  scheduledDate: new Date(),
  signature: "exampleSignature",
  status: "exampleStatus",
  trackingNumber: "exampleTrackingNumber",
  trackingUrl: "exampleTrackingUrl",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  weight: 42.42,
};
const CREATE_RESULT = {
  actualDeliveryTime: new Date(),
  actualPickupTime: new Date(),
  cancellationReason: "exampleCancellationReason",
  cancelledAt: new Date(),
  createdAt: new Date(),
  currency: "exampleCurrency",
  currentLocation: "exampleCurrentLocation",
  customerId: 42,
  deliveryAddress: "exampleDeliveryAddress",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryContactPhone: "exampleDeliveryContactPhone",
  deliveryCoords: "exampleDeliveryCoords",
  deliveryInstructions: "exampleDeliveryInstructions",
  discount: 42.42,
  distance: 42.42,
  driverId: 42,
  estimatedArrival: new Date(),
  estimatedTime: 42,
  feedback: "exampleFeedback",
  id: "exampleId",
  isFragile: "true",
  notes: "exampleNotes",
  orderNumber: "exampleOrderNumber",
  packageSize: "examplePackageSize",
  packageType: "examplePackageType",
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
  pickupAddress: "examplePickupAddress",
  pickupContactName: "examplePickupContactName",
  pickupContactPhone: "examplePickupContactPhone",
  pickupCoords: "examplePickupCoords",
  pickupInstructions: "examplePickupInstructions",
  price: 42.42,
  priority: 42,
  progress: 42,
  promoCode: "examplePromoCode",
  proofOfDelivery: "exampleProofOfDelivery",
  requiresRefrigeration: "true",
  routeId: 42,
  scheduledDate: new Date(),
  signature: "exampleSignature",
  status: "exampleStatus",
  trackingNumber: "exampleTrackingNumber",
  trackingUrl: "exampleTrackingUrl",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  weight: 42.42,
};
const FIND_MANY_RESULT = [
  {
    actualDeliveryTime: new Date(),
    actualPickupTime: new Date(),
    cancellationReason: "exampleCancellationReason",
    cancelledAt: new Date(),
    createdAt: new Date(),
    currency: "exampleCurrency",
    currentLocation: "exampleCurrentLocation",
    customerId: 42,
    deliveryAddress: "exampleDeliveryAddress",
    deliveryContactName: "exampleDeliveryContactName",
    deliveryContactPhone: "exampleDeliveryContactPhone",
    deliveryCoords: "exampleDeliveryCoords",
    deliveryInstructions: "exampleDeliveryInstructions",
    discount: 42.42,
    distance: 42.42,
    driverId: 42,
    estimatedArrival: new Date(),
    estimatedTime: 42,
    feedback: "exampleFeedback",
    id: "exampleId",
    isFragile: "true",
    notes: "exampleNotes",
    orderNumber: "exampleOrderNumber",
    packageSize: "examplePackageSize",
    packageType: "examplePackageType",
    paymentMethod: "examplePaymentMethod",
    paymentStatus: "examplePaymentStatus",
    pickupAddress: "examplePickupAddress",
    pickupContactName: "examplePickupContactName",
    pickupContactPhone: "examplePickupContactPhone",
    pickupCoords: "examplePickupCoords",
    pickupInstructions: "examplePickupInstructions",
    price: 42.42,
    priority: 42,
    progress: 42,
    promoCode: "examplePromoCode",
    proofOfDelivery: "exampleProofOfDelivery",
    requiresRefrigeration: "true",
    routeId: 42,
    scheduledDate: new Date(),
    signature: "exampleSignature",
    status: "exampleStatus",
    trackingNumber: "exampleTrackingNumber",
    trackingUrl: "exampleTrackingUrl",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
    weight: 42.42,
  },
];
const FIND_ONE_RESULT = {
  actualDeliveryTime: new Date(),
  actualPickupTime: new Date(),
  cancellationReason: "exampleCancellationReason",
  cancelledAt: new Date(),
  createdAt: new Date(),
  currency: "exampleCurrency",
  currentLocation: "exampleCurrentLocation",
  customerId: 42,
  deliveryAddress: "exampleDeliveryAddress",
  deliveryContactName: "exampleDeliveryContactName",
  deliveryContactPhone: "exampleDeliveryContactPhone",
  deliveryCoords: "exampleDeliveryCoords",
  deliveryInstructions: "exampleDeliveryInstructions",
  discount: 42.42,
  distance: 42.42,
  driverId: 42,
  estimatedArrival: new Date(),
  estimatedTime: 42,
  feedback: "exampleFeedback",
  id: "exampleId",
  isFragile: "true",
  notes: "exampleNotes",
  orderNumber: "exampleOrderNumber",
  packageSize: "examplePackageSize",
  packageType: "examplePackageType",
  paymentMethod: "examplePaymentMethod",
  paymentStatus: "examplePaymentStatus",
  pickupAddress: "examplePickupAddress",
  pickupContactName: "examplePickupContactName",
  pickupContactPhone: "examplePickupContactPhone",
  pickupCoords: "examplePickupCoords",
  pickupInstructions: "examplePickupInstructions",
  price: 42.42,
  priority: 42,
  progress: 42,
  promoCode: "examplePromoCode",
  proofOfDelivery: "exampleProofOfDelivery",
  requiresRefrigeration: "true",
  routeId: 42,
  scheduledDate: new Date(),
  signature: "exampleSignature",
  status: "exampleStatus",
  trackingNumber: "exampleTrackingNumber",
  trackingUrl: "exampleTrackingUrl",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
  weight: 42.42,
};

const service = {
  createDelivery() {
    return CREATE_RESULT;
  },
  deliveries: () => FIND_MANY_RESULT,
  delivery: ({ where }: { where: { id: string } }) => {
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

describe("Delivery", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryService,
          useValue: service,
        },
      ],
      controllers: [DeliveryController],
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

  test("POST /deliveries", async () => {
    await request(app.getHttpServer())
      .post("/deliveries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualDeliveryTime: CREATE_RESULT.actualDeliveryTime.toISOString(),
        actualPickupTime: CREATE_RESULT.actualPickupTime.toISOString(),
        cancelledAt: CREATE_RESULT.cancelledAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        estimatedArrival: CREATE_RESULT.estimatedArrival.toISOString(),
        scheduledDate: CREATE_RESULT.scheduledDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /deliveries", async () => {
    await request(app.getHttpServer())
      .get("/deliveries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          actualDeliveryTime:
            FIND_MANY_RESULT[0].actualDeliveryTime.toISOString(),
          actualPickupTime: FIND_MANY_RESULT[0].actualPickupTime.toISOString(),
          cancelledAt: FIND_MANY_RESULT[0].cancelledAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          estimatedArrival: FIND_MANY_RESULT[0].estimatedArrival.toISOString(),
          scheduledDate: FIND_MANY_RESULT[0].scheduledDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /deliveries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        actualDeliveryTime: FIND_ONE_RESULT.actualDeliveryTime.toISOString(),
        actualPickupTime: FIND_ONE_RESULT.actualPickupTime.toISOString(),
        cancelledAt: FIND_ONE_RESULT.cancelledAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        estimatedArrival: FIND_ONE_RESULT.estimatedArrival.toISOString(),
        scheduledDate: FIND_ONE_RESULT.scheduledDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /deliveries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        actualDeliveryTime: CREATE_RESULT.actualDeliveryTime.toISOString(),
        actualPickupTime: CREATE_RESULT.actualPickupTime.toISOString(),
        cancelledAt: CREATE_RESULT.cancelledAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        estimatedArrival: CREATE_RESULT.estimatedArrival.toISOString(),
        scheduledDate: CREATE_RESULT.scheduledDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/deliveries")
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
