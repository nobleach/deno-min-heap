import {
  assertEquals,
} from "./deps.ts";
import {
  MinHeap,
} from '../src/min-heap.ts';

Deno.test({
  name: "It creates a min heap",
  fn(): void {
    const heap = new MinHeap();
    assertEquals(heap.getMin(), undefined);
  }
});

Deno.test({
  name: "Inserting a single value will be the min",
  fn(): void {
    const heap = new MinHeap();
    heap.insert(9);
    assertEquals(heap.getMin(), 9);
  }
});

Deno.test({
  name: "Peeks at the min value",
  fn(): void {
    const heap = new MinHeap();
    heap.insert(9);
    heap.insert(4);
    heap.insert(1);
    heap.insert(7);

    assertEquals(heap.getMin(), 1);
  }
});

Deno.test(function example(): void {
  assertEquals("hello", "hello");
});

await Deno.runTests;
