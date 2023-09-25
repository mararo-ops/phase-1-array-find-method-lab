function superbowlWin(records) {
    const finder = records.find(record => record.result === "W");
    return finder ? finder.year : undefined;
}
const broncosRecords = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
   
  ];
  
  console.log(superbowlWin(broncosRecords));
