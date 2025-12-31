export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Array • Binary Search",
  description: {
    text: "Given a sorted array of integers nums and a target value, return the index if found.",
    notes: ["If target does not exist, return -1."],
  },
  examples: [
    { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
    { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁴"],
  starterCode: {
    javascript: `function search(nums, target) {\n  // Write your solution here\n}`,
    python: `def search(nums, target):\n    pass`,
    java: `class Solution {\n    public int search(int[] nums, int target) {\n        return -1;\n    }\n}`,
  },
  expectedOutput: {
    javascript: "4\n-1",
    python: "4\n-1",
    java: "4\n-1",
  },
},

"merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.",
    notes: ["nums1 has enough space to hold nums2."],
  },
  examples: [
    {
      input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]",
      output: "[1,2,2,3,5,6]",
    },
  ],
  constraints: ["nums1.length == m + n"],
  starterCode: {
    javascript: `function merge(nums1, m, nums2, n) {\n  // Write your solution here\n}`,
    python: `def merge(nums1, m, nums2, n):\n    pass`,
    java: `class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {}\n}`,
  },
  expectedOutput: {
    javascript: "[1,2,2,3,5,6]",
    python: "[1,2,2,3,5,6]",
    java: "[1,2,2,3,5,6]",
  },
},


"linked-list-cycle": {
  id: "linked-list-cycle",
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked List • Two Pointers",
  description: {
    text: "Determine if a linked list has a cycle.",
    notes: ["Use constant memory if possible."],
  },
  examples: [
    { input: "head = [3,2,0,-4], pos = 1", output: "true" },
    { input: "head = [1], pos = -1", output: "false" },
  ],
  constraints: ["Number of nodes ≤ 10⁴"],
  starterCode: {
    javascript: `function hasCycle(head) {\n  // Write your solution here\n}`,
    python: `def hasCycle(head):\n    pass`,
    java: `class Solution {\n    public boolean hasCycle(ListNode head) { return false; }\n}`,
  },
  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
  },
},


"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: {
    text: "Each time you can climb 1 or 2 steps. How many distinct ways to reach the top?",
    notes: [],
  },
  examples: [
    { input: "n = 3", output: "3" },
    { input: "n = 5", output: "8" },
  ],
  constraints: ["1 ≤ n ≤ 45"],
  starterCode: {
    javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
    python: `def climbStairs(n):\n    pass`,
    java: `class Solution {\n    public int climbStairs(int n) { return 0; }\n}`,
  },
  expectedOutput: {
    javascript: "3\n8",
    python: "3\n8",
    java: "3\n8",
  },
},


"longest-substring-without-repeating": {
  id: "longest-substring-without-repeating",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "Sliding Window",
  description: {
    text: "Return the length of the longest substring without repeating characters.",
    notes: [],
  },
  examples: [
    { input: 's = "abcabcbb"', output: "3" },
    { input: 's = "bbbbb"', output: "1" },
  ],
  constraints: ["0 ≤ s.length ≤ 5 * 10⁴"],
  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
    python: `def lengthOfLongestSubstring(s):\n    pass`,
    java: `class Solution {\n    public int lengthOfLongestSubstring(String s) { return 0; }\n}`,
  },
  expectedOutput: {
    javascript: "3\n1",
    python: "3\n1",
    java: "3\n1",
  },
},


"three-sum": {
  id: "three-sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Find all unique triplets that sum to zero.",
    notes: ["Result must not contain duplicates."],
  },
  examples: [
    { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
  ],
  constraints: ["3 ≤ nums.length ≤ 3000"],
  starterCode: {
    javascript: `function threeSum(nums) {\n  // Write your solution here\n}`,
    python: `def threeSum(nums):\n    pass`,
    java: `class Solution {\n    public List<List<Integer>> threeSum(int[] nums) { return new ArrayList<>(); }\n}`,
  },
  expectedOutput: {
    javascript: "[[-1,-1,2],[-1,0,1]]",
    python: "[[-1,-1,2],[-1,0,1]]",
    java: "[[-1,-1,2],[-1,0,1]]",
  },
},


"product-of-array-except-self": {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array • Prefix Sum",
  description: {
    text: "Return an array where each element is the product of all elements except itself.",
    notes: ["Do not use division."],
  },
  examples: [
    { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
  ],
  constraints: ["2 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    javascript: `function productExceptSelf(nums) {\n  // Write your solution here\n}`,
    python: `def productExceptSelf(nums):\n    pass`,
    java: `class Solution {\n    public int[] productExceptSelf(int[] nums) { return new int[0]; }\n}`,
  },
  expectedOutput: {
    javascript: "[24,12,8,6]",
    python: "[24,12,8,6]",
    java: "[24,12,8,6]",
  },
},


"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  description: {
    text: "Determine if the input string of brackets is valid.",
    notes: ["Every opening bracket must have a matching closing bracket."],
  },
  examples: [
    { input: 's = "()"', output: "true" },
    { input: 's = "(]"', output: "false" },
  ],
  constraints: ["1 ≤ s.length ≤ 10⁴"],
  starterCode: {
    javascript: `function isValid(s) {\n  // Write your solution here\n}`,
    python: `def isValid(s):\n    pass`,
    java: `class Solution {\n    public boolean isValid(String s) { return false; }\n}`,
  },
  expectedOutput: {
    javascript: "true\nfalse",
    python: "True\nFalse",
    java: "true\nfalse",
  },
},


"majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array • Boyer-Moore",
  description: {
    text: "Find the element that appears more than ⌊n/2⌋ times.",
    notes: ["The majority element always exists."],
  },
  examples: [
    { input: "nums = [3,2,3]", output: "3" },
    { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
  ],
  constraints: ["1 ≤ nums.length ≤ 5 * 10⁴"],
  starterCode: {
    javascript: `function majorityElement(nums) {\n  // Write your solution here\n}`,
    python: `def majorityElement(nums):\n    pass`,
    java: `class Solution {\n    public int majorityElement(int[] nums) { return 0; }\n}`,
  },
  expectedOutput: {
    javascript: "3\n2",
    python: "3\n2",
    java: "3\n2",
  },
},

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
