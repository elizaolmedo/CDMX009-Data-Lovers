// importamos la función `example`
import { bankData } from "../src/data";

describe('bankData', () => {

  it('debería ser una función', () => {
    expect(typeof bankData).toBe('function');
  });

  //describe('example', () => {
    // escribe aquí tu test
  //});
});
