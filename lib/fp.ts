// functional programming

export const switchCase = <Case>(cases: Record<string, Case>) => (defaultCase: Case) => (key: string | number): Case =>
  cases[key] ?? defaultCase;
