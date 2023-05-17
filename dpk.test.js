const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("dpk should returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("dpk should return crypto empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    const result = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    expect(trivialKey).toBe(result);
  });
  it("dpk should returns crypto partitionKey string", () => {
    const partitionKey = 'c1802e6b9670927ebfddb7f67b38c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
    const trivialKey = deterministicPartitionKey({
      partitionKey
    });
    expect(trivialKey).toBe(partitionKey);
  });
  it("dpk should returns crypto partitionKey empty object", () => {
    const partitionKey = {}
    const result = "{}"
    const trivialKey = deterministicPartitionKey({
      partitionKey
    });
    expect(trivialKey).toBe(result);
  });
  it("dpk should returns crypto partitionKey empty object", () => {
    const partitionKey = {}
    const result = "{}"
    const trivialKey = deterministicPartitionKey({
      partitionKey
    });
    expect(trivialKey).toBe(result);
  });
  it("dpk should returns crypto partitionKey string max to 256", () => {
    const partitionKey = 'c1802e6b96709asd9f8as90df809asd8f09a8sd09f80as9d8f09as8d90f8asd098f90asd8f90a8sd09f8as0d9f809asd8f09asd8f09a8sd09f8as09df809asd8f09asd8f09das8f098asd09f8asd09f8a0s9d8f09sda8f09asd8f27ebfddb7faasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsdafasdf798asd7f98asd797f8dsa67b38c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
    const result = "14842e9ed4602d56ee6eff84762026eac8a47b8b0a6a5e830b3d8cf9ec4615d075a88648cd38639ec255748581edf344dff812fbc9d28c1907386947cf207069"
    const trivialKey = deterministicPartitionKey({
      partitionKey
    });
    expect(trivialKey).toBe(result);
  });
});
