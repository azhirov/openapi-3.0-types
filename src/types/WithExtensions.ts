export interface WithExtensions {
  [key: `x-${string}`]: any;
}
