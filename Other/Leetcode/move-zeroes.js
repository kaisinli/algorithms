const moveZeroes = (nums) => {
    let i = 0,
        counter = 1;
    
    while (counter <= nums.length){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } else {
            i++;
        }
        
        counter++
    }
};