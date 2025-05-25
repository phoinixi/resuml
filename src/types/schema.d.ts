declare module '@jsonresume/schema' {
  export function validate(
    data: unknown,
    callback: (errors: unknown[], isValid: boolean) => void
  ): void;
}
