import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@astrego-courses/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
