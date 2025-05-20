import { assertEquals } from "jsr:@std/assert";

import { squaresOf } from "./map.js";

Deno.test('squares of numbers in an array', () =>
  assertEquals([1, 4, 9], squaresOf([1, 2, 3])));