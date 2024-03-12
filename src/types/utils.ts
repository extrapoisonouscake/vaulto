export type StringsOnlyRecord<T extends string> = Record<T,string>
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }