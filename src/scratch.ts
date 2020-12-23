// let x: {
//   user: {
//     name: string;
//     address?: {
//       street: string;
//       city: string;
//     };
//   };
// } = undefined as any;

// console.log(x.user.address?.city)

// class Foo {
//   #name: string;

//   constructor(rawName?: string) {
//     this.#name = rawName ?? '(no name)';
//   }

//   log() {
//     console.log(this.#name);
//   }
// }

// export * as foo from './some/module';

// Some stuff in between two booleans.
// type Foo<T extends any[]> = [boolean, ...T, boolean];

// Labelled tuple types. Makes linting a lot more fun.
// type Address = [
//   streetNumber: number,
//   city: string,
//   state: string,
//   postal: number,
// ];

// function printAddress(...address: Address) {}

// Works because this is evaluated eagerly; hackish; old; recursive type
// type JSONValue = string|number|boolean|null|JSONArray;
// interface JSONObject {
//   [k: string]: JSONValue;
// }
// interface JSONArray extends Array<JSONValue> {}

// TS 4.0 allows for recursive type alias without hacks.
// type JSONValue =
//   | string
//   | number
//   | boolean
//   | null
//   | JSONValue[] // <------
//   | { [k: string]: JSONValue }; // <------

// Generates permutations
type Corner = `${'top' |' bottom'}-${'left' | 'right'}`
