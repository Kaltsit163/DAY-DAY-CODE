var removeDuplicates = function (nums) {
  let p1 = 0;
  let p2 = 0;

  while (p2 < nums.length) {
    if (nums[p1] != nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    p2++;
  }
  return p1 + 1;
};
