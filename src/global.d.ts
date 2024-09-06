// custom-types.d.ts
import 'express';

declare global {
  namespace Express {
    interface User {
      id: string;
      email?: string;
      name?: string;
      // any other user properties
    }
  }
}
