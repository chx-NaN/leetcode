var removeElement = function(nums, val) {
    // 1.暴力破解
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        if(nums[i] == val) {
            for(let j = i + 1; j < size; j++) {
                nums[j - 1] = nums[j];
            }
            i--;
            size--;
        }
   }
   return size;

   // 2.双指针
   
};