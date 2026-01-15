export const binarySearch = {
  meta: {
    id: "binary-search",
    title: "Binary Search",
    topic: "DSA",
    difficulty: "Easy",
    learningTime: "20–25 mins",
    explanation:
      "Binary Search is a highly efficient searching algorithm that works on sorted data. Instead of checking elements one by one, it repeatedly divides the search space into two halves, eliminating half of the remaining elements at every step. This drastically reduces the number of comparisons and makes it suitable for large datasets.",
  },

  userstate: {
    completedSections: 3,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 3,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "Binary Search works only on sorted arrays or lists. The idea is simple: compare the target element with the middle element of the array. If they are equal, the search ends. If the target is smaller, continue searching in the left half; if it is larger, search in the right half. This process repeats until the element is found or the search space becomes empty.",
      },
      extraAction: {
        label: "Deep Dive →",
        action: "open_deep_dive",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of how you search for a word in a physical dictionary. You never start from the first page. You open the book somewhere in the middle, see whether the word you want comes before or after that page, and instantly discard half of the book. Binary Search applies the same logic to arrays.",
      },
      icon: "BookOpen",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Input: "Find 23 in [10, 15, 23, 30, 45]"

Step 1: Low = 0, High = 4  
Step 2: Middle index = (0 + 4) / 2 = 2  
Step 3: Middle element = 23  

Comparison:
23 == 23  

Result: "Found at index 2"`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Real-World Use Case",
      content: {
        text: "Binary Search is heavily used in database indexing (like B-Trees), leaderboard ranking systems in games, searching user records by ID, and even in system-level components such as memory address lookup. In such cases, linear search would be too slow and inefficient.",
      },
      icon: "Database",
      highlight: "bg-red-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Pattern & Signals",
      content: {
        text: `Pattern: "Divide & Conquer"

Signals:
- Data is sorted or can be sorted
- Problem asks to search, find, or locate an element
- Constraints suggest faster than O(n) solution
- Range keeps shrinking step by step`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Forgetting that Binary Search only works on sorted data.
Making off-by-one errors while updating low and high pointers.
Using incorrect middle calculation leading to infinite loops.
Ignoring edge cases like empty arrays or single-element arrays.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Interviewer's Perspective",
      content: {
        text: `Interviewers use Binary Search to evaluate your logical thinking and ability to optimize brute-force solutions.
Common follow-up questions include:
- What is the time complexity?
- Can you implement it iteratively and recursively?
- How would Binary Search behave on very large datasets?
- Can you modify it to find first or last occurrence?`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Works only on sorted data.
Repeatedly divides the search space into halves.
Time Complexity: O(log n).
Much faster than linear search for large inputs.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Take a moment to explain what you've learned in your own words...",
    message: "",
    saved: false,
  },
};
