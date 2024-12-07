import { LinkedList } from "./llv1.js";

test("the show method: 1 -> 2 -> 3", () => {
  const list = new LinkedList();
  const writeSpy = jest
    .spyOn(process.stdout, "write")
    .mockImplementation(() => {});

  list.append(1);
  list.append(2);
  list.append(3);

  list.show();

  expect(writeSpy).toHaveBeenCalledWith("1 -> 2 -> 3");

  writeSpy.mockRestore();
});

test("the reverse method: 4 -> 3 -> 2 -> 1", () => {
  const list = new LinkedList();
  const writeSpy = jest
    .spyOn(process.stdout, "write")
    .mockImplementation(() => {});

  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.reverse();
  list.show();

  expect(writeSpy).toHaveBeenCalledWith("4 -> 3 -> 2 -> 1");

  writeSpy.mockRestore();
});

test("the delete method", () => {
  const list = new LinkedList();
  const writeSpy = jest
    .spyOn(process.stdout, "write")
    .mockImplementation(() => {});

  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.delete(4);
  list.show();

  expect(writeSpy).toHaveBeenCalledWith("1 -> 2 -> 3");
  expect(list.tail.value).toBe(3);
  writeSpy.mockRestore();
});
