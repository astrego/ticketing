import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@astrego-courses/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
