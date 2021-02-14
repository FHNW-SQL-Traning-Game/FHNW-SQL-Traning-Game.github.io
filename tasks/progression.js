progression = [
  {
    id: "A",
    tasks: ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012"],
    requires: [],
  },
  {
    id: "B",
    tasks: ["013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024"],
    requires: ["A"],
  },
  {
    id: "C",
    tasks: ["025", "026", "027", "028", "029", "030", "031", "032", "033"],
    requires: ["B"],
  },
  {
    id: "D",
    tasks: ["034", "035", "036", "037", "038", "039", "040", "041"],
    requires: ["C"],
  },
];
