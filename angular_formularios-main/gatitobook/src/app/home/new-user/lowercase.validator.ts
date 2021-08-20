import { AbstractControl } from "@angular/forms";

export function toLowerCase(control: AbstractControl) {
  const value = control.value as string
  if(value !== value.toLowerCase()) {
    return { lowercase: true }
  }
  return null
}
