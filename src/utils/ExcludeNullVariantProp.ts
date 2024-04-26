import { VariantProps } from 'class-variance-authority';

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };

/* eslint-disable  @typescript-eslint/no-explicit-any */
export type ExcludeNullVariantProp<Comp extends (...args: any) => any> =
  ExcludeNull<VariantProps<Comp>>;
