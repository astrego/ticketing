import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@astrego-courses/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
