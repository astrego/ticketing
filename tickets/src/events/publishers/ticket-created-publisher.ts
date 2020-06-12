import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@astrego-courses/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
