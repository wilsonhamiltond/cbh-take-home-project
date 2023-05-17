const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  const { partitionKey } = event;
  if (!partitionKey) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }
  let candidate = partitionKey;
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate
};
