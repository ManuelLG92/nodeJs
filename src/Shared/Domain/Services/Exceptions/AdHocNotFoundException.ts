export class AdHocNotFoundException extends Error {
  constructor(message?: string) {
    super(message ?? 'Resource not found');
  }
}
