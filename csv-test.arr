import js-file("csv") as CSV

check "csv":
  input = "name, age\nalice, 42\nbob, 28\n"
  out = CSV.parse(input)
  out is [raw-array: [raw-array: "name", " age"], [raw-array: "alice", " 42"], [raw-array: "bob", " 28"]]
end
