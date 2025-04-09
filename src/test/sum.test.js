test("sum", () => {
  expect(1+1).toBe(2)
})
test("get li els", () => {
  const lis = document.querySelectorAll("li");
  expect(lis.length).toBe(3)
})