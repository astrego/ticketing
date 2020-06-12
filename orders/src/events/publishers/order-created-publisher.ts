import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@astrego-courses/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
