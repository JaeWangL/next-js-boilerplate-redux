export function addWhen(condition: boolean, element: any): any[] {
  return condition ? [element] : [];
}
