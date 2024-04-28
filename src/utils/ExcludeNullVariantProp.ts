import { VariantProps } from 'class-variance-authority';

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };

export type ExcludeNullVariantProp<Comp extends (...args: any[]) => string> =
  ExcludeNull<VariantProps<Comp>>;
