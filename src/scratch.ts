let x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

console.log(x.user.address?.city)

class Foo1 {
  #name: string;

  constructor(rawName?: string) {
    this.#name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.#name);
  }
}

// export * as foo from './some/module';

// Some stuff in between two booleans.
type Foo<T extends any[]> = [boolean, ...T, boolean];

// Labelled tuple types. Makes linting a lot more fun.
type Address = [
  streetNumber: number,
  city: string,
  state: string,
  postal: number,
];

// function printAddress(...address: Address) {}

// Works because this is evaluated eagerly; hackish; old; recursive type
// type JSONValue = string|number|boolean|null|JSONArray;
interface JSONObject {
  [k: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

// TS 4.0 allows for recursive type alias without hacks.
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[] // <------
  | { [k: string]: JSONValue }; // <------

// Generates permutations
type Corner = `${'top' |' bottom'}-${'left' | 'right'}`;

// '@ts-expect-error'; better option than @ts-ignore becaue if there's no error
// it will flag this as an unused directive.

function somethingRisky() {}

// Type assertions; no need to conditionals anymore.
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`);
}

function isError(err: any): err is Error {
  return err instanceof Error;
}


// Difference between `unknown` and `any` is it is up to the developer to
// determine what the type is
try {
  somethingRisky();
} catch (err: unknown) {
  // Type guard
  // if (err instanceof Error) {
  //   console.log(err.stack);
  // } else {
  //   console.log(err);
  // }

  // if (isError(err)) {
  //   console.log(err.stack);
  // } else {
  //   console.log(err);
  // }

  // If the error is not an instance of error, a string was probably thrown.
  assertIsError(err);
  console.log(err.stack);
}

// Simply want the type information; cannot invoke; refer to type without
// getting value first. Won't trigger additional code since it's just type
// information.
import type { useAsyncDataEffect } from '../src/utils/api';

/**
 * App vs Lib concerns
 *  Does not cure all runtime errors; catches subset of errors related to types
 *    Disappears after build
 *  Does encourage writing code to decrease disk of code deoptimization but
 *    does not guarentee to make it faster
 *  More formal contracts
 *  Surfaces information about what is used
 *  Refactoring
 * 
 * App-specific concerns
 *  More richness with data
 *  Better encapsulation tools to facilitate maintaining lazy loading boundaries
 *  Improve major version update
 * 
 * Lib-specific concerns
 *  Creates and maintain deliberate public API surface while still being able to
 *    create a private API surface to use between modules and components
 *  Keep users on track (enums)
 *  SemVer
 *  API Docs
 */