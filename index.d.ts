declare module 'checkdigit' {
  interface ICheckdigit {
    isValid(input: string): boolean;

    /**
     * Returns the original string with checkdigit appended
     */
    apply(input: string): string;

    /**
     * Returns only the checkdigit
     */
    create(input: string): string;
  }

  export const mod10: ICheckdigit;
  export const mod11: ICheckdigit;
}
