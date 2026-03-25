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


export const codingDecoding = {
  meta: {
    id: "coding-decoding",
    title: "Coding–Decoding",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "25–30 mins",
    explanation:
      "Coding–Decoding is a logical reasoning topic where words, letters, or numbers are transformed using a specific hidden rule. The goal is to identify this rule by observing patterns and then apply it to decode or encode the given input. It tests pattern recognition, logical deduction, and attention to detail.",
  },

  userstate: {
    completedSections: 2,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Coding–Decoding questions, a word, letter sequence, or number is converted into another form based on a rule. The rule can involve shifting letters (alphabet positions), reversing order, substituting letters, mathematical operations on numbers, or a mix of these. Your task is to detect the logic used and apply it consistently.",
      },
      extraAction: {
        label: "Explore Patterns →",
        action: "open_patterns",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Imagine a secret language where every letter moves two steps ahead in the alphabet. If A becomes C and B becomes D, the entire word follows the same rule. Coding–Decoding works the same way—once you crack the language rule, everything becomes predictable.",
      },
      icon: "Lightbulb",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
If CAT is coded as DBU, how is DOG coded?

Step 1: Identify letter positions
C→D (+1), A→B (+1), T→U (+1)

Step 2: Apply same rule to DOG
D→E, O→P, G→H

Result: DOG is coded as EPH`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Coding–Decoding is frequently asked in competitive exams like SSC, Banking, Railways, and campus placement aptitude rounds. It is also used in logical screening tests to quickly assess analytical thinking under time pressure.",
      },
      icon: "Target",
      highlight: "bg-blue-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Common Patterns & Signals",
      content: {
        text: `Typical Patterns:
- Alphabet shifting (+1, -2, alternate shifts)
- Reverse order of letters
- Letter-to-number mapping (A=1, B=2, ...)
- Pairing or grouping letters
- Mathematical operations on positions

Signals:
- Words look similar but slightly changed
- Repeated transformations across examples
- Alphabet or number sequence involvement`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Jumping to conclusions after checking only one letter.
Ignoring reverse or alternating patterns.
Forgetting alphabet position values.
Overcomplicating when a simple shift works.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners use Coding–Decoding to test:
- Pattern recognition speed
- Logical consistency
- Ability to work under time constraints

They expect you to:
- Verify the rule with all letters
- Choose the simplest valid logic
- Avoid assumptions without confirmation`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Identify the hidden pattern.
Check the rule across all elements.
Apply the same logic consistently.
Practice improves speed and accuracy.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Write the pattern you found most interesting and why...",
    message: "",
    saved: false,
  },
};


export const bloodRelations = {
  meta: {
    id: "blood-relations",
    title: "Blood Relations",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "20–30 mins",
    explanation:
      "Blood Relations problems test your ability to understand family relationships described in words and logically deduce how two people are related. These questions require careful interpretation of statements involving parents, siblings, spouses, generations, and gender clues.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Blood Relations questions, relationships are given in a statement form like ‘A is the brother of B’ or ‘C is the mother of D’. You must decode these relations step by step and finally determine how two specific people are related. Accuracy depends on tracking gender, generation level, and direction of relations.",
      },
      extraAction: {
        label: "Visualize Relations →",
        action: "open_family_tree",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of drawing a small family tree in your mind (or on paper). Every time a new relation is introduced, place that person correctly on the tree. Once the structure is clear, the final relationship becomes obvious.",
      },
      icon: "Users",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
A is the father of B.
B is the sister of C.
How is A related to C?

Step 1: A is father of B  
Step 2: B is sister of C → B and C share same parents  

Conclusion:
A is also the father of C  

Answer: A is the father of C`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Blood Relations questions are common in SSC, Banking, Railway exams, and campus placement aptitude tests. They are often used as quick logic filters because they test clarity of thought rather than formulas.",
      },
      icon: "Briefcase",
      highlight: "bg-green-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Patterns & Signals",
      content: {
        text: `Key Signals:
- Words like father, mother, son, daughter, brother, sister
- Gender indicators (husband/wife, he/she)
- Multi-generation clues (grandfather, uncle, cousin)

Patterns:
- Drawing a family tree
- Tracking generations level by level
- Eliminating impossible relations`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Ignoring gender clues.
Mixing up generations (father vs grandfather).
Assuming relations without mapping them.
Not rechecking the final relation carefully.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners look for:
- Step-by-step logical deduction
- Ability to handle complex multi-line statements
- Accuracy under time pressure

Tip:
Always validate the final relation with the entire family structure.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Read statements carefully.
Track gender and generations.
Draw or imagine a family tree.
Verify before answering.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Explain this relation problem in your own words...",
    message: "",
    saved: false,
  },
};


export const directionSense = {
  meta: {
    id: "direction-sense",
    title: "Direction Sense",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "20–25 mins",
    explanation:
      "Direction Sense problems evaluate your ability to track movement and orientation based on directions like north, south, east, and west. You are required to mentally (or visually) follow a sequence of moves and finally determine distance, direction, or relative position.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Direction Sense questions, a person starts from a point and moves in different directions with specified distances or turns. Your task is to carefully follow each move and determine the final position, distance from the starting point, or direction faced.",
      },
      extraAction: {
        label: "Learn Direction Tricks →",
        action: "open_direction_tricks",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Imagine yourself standing on a map. Every instruction like ‘turn left’ or ‘move east’ changes your orientation. If you treat north as upward and track movements like coordinates, Direction Sense becomes simple and mechanical.",
      },
      icon: "Compass",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
A person walks 10 m north, then 5 m right, then 10 m south.
How far is he from the starting point?

Step 1: Move 10 m north  
Step 2: Right turn → East → 5 m  
Step 3: Move 10 m south  

Observation:
North and south movements cancel out.

Result:
Distance from start = 5 m (East)`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Direction Sense problems are common in SSC, Banking, Defence exams, and placement aptitude tests. They test spatial reasoning and the ability to stay focused while processing multiple instructions.",
      },
      icon: "Map",
      highlight: "bg-purple-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Patterns & Signals",
      content: {
        text: `Common Patterns:
- Left/right turns (90°, 180°)
- Net displacement calculation
- Opposite directions cancelling out
- Final facing direction questions

Signals:
- Words like turns left/right
- Facing north/south initially
- Distance-based movement`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Forgetting the initial facing direction.
Confusing left and right after multiple turns.
Ignoring cancellation of opposite movements.
Rushing through long statements.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners want to see:
- Clear step-by-step tracking
- Spatial awareness
- Accuracy over speed

Tip:
Use rough diagrams or coordinate logic to avoid confusion.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Fix a reference direction (North).
Track every move carefully.
Cancel opposite movements.
Answer using final position or facing direction.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Describe how you tracked the movements in this problem...",
    message: "",
    saved: false,
  },
};


export const ratioAndProportion = {
  meta: {
    id: "ratio-and-proportion",
    title: "Ratio and Proportion",
    topic: "Mathematics",
    difficulty: "Easy",
    learningTime: "50 mins",
    explanation:
      "Learn how to compare quantities using ratios and solve proportional relationships, including direct and inverse variations, with shortcuts for aptitude problems.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 13,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What is Ratio?",
      content: {
        text: "A ratio is a comparison of two quantities expressed as a:b or a/b.",
      },
      icon: "info",
      highlight: "Comparison of quantities",
    },

    {
      id: 2,
      type: "intuition",
      title: "Real-Life Intuition",
      content: {
        text: "If there are 10 boys and 5 girls, the ratio is 10:5 = 2:1. This shows boys are twice the number of girls.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "concept",
      title: "Simplifying Ratio",
      content: {
        text: "Divide both terms by their greatest common divisor (GCD). Example: 10:5 → 2:1.",
      },
      icon: "layers",
    },

    {
      id: 4,
      type: "concept",
      title: "What is Proportion?",
      content: {
        text: "A proportion states that two ratios are equal: a:b = c:d.",
      },
      highlight: "Equality of ratios",
    },

    {
      id: 5,
      type: "formula",
      title: "Cross Multiplication Rule",
      content: {
        text: "If a:b = c:d, then a × d = b × c.",
      },
      highlight: "Most used rule",
    },

    {
      id: 6,
      type: "concept",
      title: "Direct Proportion",
      content: {
        text: "If one quantity increases, the other also increases in the same ratio. Example: more workers → more work done.",
      },
      highlight: "Increase → Increase",
    },

    {
      id: 7,
      type: "concept",
      title: "Inverse Proportion",
      content: {
        text: "If one quantity increases, the other decreases. Example: more workers → less time required.",
      },
      highlight: "Increase → Decrease",
    },

    {
      id: 8,
      type: "concept",
      title: "Dividing in a Given Ratio",
      content: {
        text: "If a quantity is divided in ratio x:y, parts = (x / (x+y)) × total and (y / (x+y)) × total.",
      },
    },

    {
      id: 9,
      type: "concept",
      title: "Compound Ratio",
      content: {
        text: "Multiply corresponding terms: (a:b) × (c:d) = ac : bd.",
      },
      highlight: "Multiply ratios",
    },

    {
      id: 10,
      type: "example",
      title: "Example Problem",
      content: {
        text: "Divide 60 in ratio 2:1 → parts = 40 and 20.",
      },
      extraAction: {
        label: "Practice Ratio Questions",
        action: "practice_ratio_basic",
      },
    },

    {
      id: 11,
      type: "example",
      title: "Proportion Example",
      content: {
        text: "If 2:x = 4:8 → x = 4 using cross multiplication.",
      },
    },

    {
      id: 12,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Not simplifying ratios, mixing direct and inverse proportion, and incorrect cross multiplication.",
      },
      icon: "warning",
    },

    {
      id: 13,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in mixing problems, scaling recipes, finance, business distribution, and data interpretation.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut for solving ratio problems...",
    message: "",
    saved: false,
  },
};

export const profitAndLoss = {
  meta: {
    id: "profit-and-loss",
    title: "Profit and Loss",
    topic: "Mathematics",
    difficulty: "Easy",
    learningTime: "60 mins",
    explanation:
      "Learn how to calculate profit, loss, discounts, marked price, and apply percentage-based shortcuts to solve aptitude problems efficiently.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 14,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "Basic Definitions",
      content: {
        text: "Cost Price (CP) is the buying price, Selling Price (SP) is the selling price. Profit = SP - CP, Loss = CP - SP.",
      },
      icon: "info",
      highlight: "Profit = SP - CP",
    },

    {
      id: 2,
      type: "formula",
      title: "Profit Percentage",
      content: {
        text: "Profit% = (Profit / CP) × 100",
      },
    },

    {
      id: 3,
      type: "formula",
      title: "Loss Percentage",
      content: {
        text: "Loss% = (Loss / CP) × 100",
      },
    },

    {
      id: 4,
      type: "concept",
      title: "Selling Price Formulas",
      content: {
        text: "SP = CP × (1 + Profit%/100), SP = CP × (1 - Loss%/100)",
      },
      highlight: "Important shortcut",
    },

    {
      id: 5,
      type: "concept",
      title: "Marked Price (MP) and Discount",
      content: {
        text: "Marked Price is the labeled price. Discount = MP - SP. Discount% = (Discount / MP) × 100.",
      },
      icon: "tag",
    },

    {
      id: 6,
      type: "formula",
      title: "Successive Discounts",
      content: {
        text: "Net discount = a + b - (ab/100)",
      },
      highlight: "Shortcut formula",
    },

    {
      id: 7,
      type: "concept",
      title: "Dishonest Dealer (Weight Trick)",
      content: {
        text: "If a seller uses less weight but charges full price, profit% = (error / correct weight) × 100.",
      },
      icon: "alert",
    },

    {
      id: 8,
      type: "concept",
      title: "Profit Based on Selling Price",
      content: {
        text: "If profit% is given on SP, convert it to CP-based before solving.",
      },
      highlight: "Always use CP as base",
    },

    {
      id: 9,
      type: "example",
      title: "Basic Example",
      content: {
        text: "CP = 100, SP = 120 → Profit = 20 → Profit% = 20%.",
      },
      extraAction: {
        label: "Practice Profit Basics",
        action: "practice_profit_loss_basic",
      },
    },

    {
      id: 10,
      type: "example",
      title: "Discount Example",
      content: {
        text: "MP = 500, Discount = 10% → SP = 450.",
      },
    },

    {
      id: 11,
      type: "example",
      title: "Successive Discount Example",
      content: {
        text: "10% and 20% discount → Net = 28% discount.",
      },
    },

    {
      id: 12,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Using SP as base instead of CP, ignoring successive discount formula, and calculation mistakes in percentage.",
      },
      icon: "warning",
    },

    {
      id: 13,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in business pricing, e-commerce discounts, retail margins, and financial analysis.",
      },
      icon: "rocket",
    },

    {
      id: 14,
      type: "intuition",
      title: "Quick Trick",
      content: {
        text: "Assume CP = 100 to simplify percentage-based problems quickly.",
      },
      highlight: "Most powerful shortcut",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut for solving profit & loss problems...",
    message: "",
    saved: false,
  },
};


export const percentages = {
  meta: {
    id: "percentages",
    title: "Percentages",
    topic: "Mathematics",
    difficulty: "Easy",
    learningTime: "45 mins",
    explanation:
      "Learn how to work with percentages, including conversions, increase/decrease, successive changes, and shortcuts for solving aptitude problems.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 12,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What is Percentage?",
      content: {
        text: "Percentage means 'per hundred'. It represents a number as a fraction of 100.",
      },
      icon: "info",
      highlight: "x% = x/100",
    },

    {
      id: 2,
      type: "intuition",
      title: "Real-Life Intuition",
      content: {
        text: "If you score 80 out of 100 marks, your percentage is 80%. It shows how much you achieved out of total.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "formula",
      title: "Basic Formula",
      content: {
        text: "Percentage = (Part / Whole) × 100",
      },
      highlight: "Core formula",
    },

    {
      id: 4,
      type: "concept",
      title: "Conversions",
      content: {
        text: "Fraction to %: multiply by 100. % to decimal: divide by 100. Example: 50% = 0.5, 1/4 = 25%.",
      },
      icon: "layers",
    },

    {
      id: 5,
      type: "formula",
      title: "Percentage Increase",
      content: {
        text: "Increase% = (Increase / Original Value) × 100",
      },
    },

    {
      id: 6,
      type: "formula",
      title: "Percentage Decrease",
      content: {
        text: "Decrease% = (Decrease / Original Value) × 100",
      },
    },

    {
      id: 7,
      type: "concept",
      title: "Successive Percentage Change",
      content: {
        text: "Net change = a + b + (ab/100). Example: 10% increase then 20% increase → 32% net increase.",
      },
      highlight: "Shortcut formula",
    },

    {
      id: 8,
      type: "concept",
      title: "Population / Value Change",
      content: {
        text: "New Value = Original × (1 ± x/100). Used in growth and decay problems.",
      },
      highlight: "Multiplication trick",
    },

    {
      id: 9,
      type: "example",
      title: "Example Problem",
      content: {
        text: "Find 20% of 200 → (20/100) × 200 = 40.",
      },
      extraAction: {
        label: "Practice Percentage Basics",
        action: "practice_percentages_basic",
      },
    },

    {
      id: 10,
      type: "example",
      title: "Successive Change Example",
      content: {
        text: "Increase by 10% then decrease by 10% → net change = -1% (not zero).",
      },
    },

    {
      id: 11,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Assuming equal increase and decrease cancel out, wrong base value selection, and calculation errors in successive changes.",
      },
      icon: "warning",
    },

    {
      id: 12,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in profit & loss, interest, statistics, data analysis, discounts, and exam scoring.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut for solving percentage problems...",
    message: "",
    saved: false,
  },
};


export const timeAndDistance = {
  meta: {
    id: "time-and-distance",
    title: "Time and Distance",
    topic: "Mathematics",
    difficulty: "Medium",
    learningTime: "60 mins",
    explanation:
      "Learn how to solve problems involving speed, time, and distance, including relative motion, trains, boats and streams, and shortcuts used in aptitude exams.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 12,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "Basic Concept",
      content: {
        text: "Time, Distance, and Speed are related by the formula: Speed = Distance / Time.",
      },
      icon: "info",
      highlight: "S = D / T",
    },

    {
      id: 2,
      type: "intuition",
      title: "Real-Life Intuition",
      content: {
        text: "If you travel 60 km in 1 hour, your speed is 60 km/h. Increasing speed reduces time for the same distance.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "formula",
      title: "Core Formulas",
      content: {
        text: "Distance = Speed × Time, Time = Distance / Speed",
      },
      highlight: "Fundamental relationships",
    },

    {
      id: 4,
      type: "concept",
      title: "Unit Conversion",
      content: {
        text: "1 m/s = 3.6 km/h and 1 km/h = 5/18 m/s. Always convert units before solving.",
      },
      icon: "layers",
    },

    {
      id: 5,
      type: "concept",
      title: "Relative Speed",
      content: {
        text: "When two objects move in the same direction, relative speed = difference of speeds. In opposite directions, relative speed = sum of speeds.",
      },
      highlight: "Same → subtract, Opposite → add",
    },

    {
      id: 6,
      type: "concept",
      title: "Trains Concept",
      content: {
        text: "For trains, distance includes train length + object length (if crossing). Time = total distance / speed.",
      },
      icon: "train",
    },

    {
      id: 7,
      type: "concept",
      title: "Boats and Streams",
      content: {
        text: "Downstream speed = (u + v), Upstream speed = (u - v), where u = boat speed in still water and v = stream speed.",
      },
      highlight: "u ± v concept",
    },

    {
      id: 8,
      type: "formula",
      title: "Average Speed",
      content: {
        text: "Average Speed = Total Distance / Total Time. For equal distances: Avg speed = (2xy)/(x+y)",
      },
      highlight: "Important shortcut",
    },

    {
      id: 9,
      type: "example",
      title: "Example Problem",
      content: {
        text: "A car travels 120 km in 2 hours → Speed = 120/2 = 60 km/h.",
      },
      extraAction: {
        label: "Practice Speed Questions",
        action: "practice_time_distance_basic",
      },
    },

    {
      id: 10,
      type: "example",
      title: "Relative Speed Example",
      content: {
        text: "Two trains moving opposite at 40 km/h and 60 km/h → relative speed = 100 km/h.",
      },
    },

    {
      id: 11,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Forgetting unit conversion, mixing up relative speed rules, ignoring train lengths, and incorrect average speed calculation.",
      },
      icon: "warning",
    },

    {
      id: 12,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in navigation systems, traffic analysis, logistics, physics problems, and competitive exams.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut for solving time & distance questions...",
    message: "",
    saved: false,
  },
};



export const progressions = {
  meta: {
    id: "progressions-ap-gp-hp",
    title: "Progressions (AP, GP, HP)",
    topic: "Mathematics",
    difficulty: "Medium",
    learningTime: "60 mins",
    explanation:
      "Understand Arithmetic, Geometric, and Harmonic Progressions, their formulas, properties, differences, and applications in problem solving.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 12,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What are Progressions?",
      content: {
        text: "A progression is a sequence of numbers following a specific pattern or rule. The most common types are AP, GP, and HP.",
      },
      icon: "info",
      highlight: "Sequence with a pattern",
    },

    {
      id: 2,
      type: "concept",
      title: "Arithmetic Progression (AP)",
      content: {
        text: "In AP, the difference between consecutive terms is constant. This constant is called the common difference (d).",
      },
      highlight: "Constant difference",
    },

    {
      id: 3,
      type: "formula",
      title: "nth Term of AP",
      content: {
        text: "aₙ = a + (n - 1)d",
      },
    },

    {
      id: 4,
      type: "formula",
      title: "Sum of AP",
      content: {
        text: "Sₙ = n/2 [2a + (n - 1)d]",
      },
    },

    {
      id: 5,
      type: "concept",
      title: "Geometric Progression (GP)",
      content: {
        text: "In GP, each term is obtained by multiplying the previous term by a constant ratio (r).",
      },
      highlight: "Constant ratio",
    },

    {
      id: 6,
      type: "formula",
      title: "nth Term of GP",
      content: {
        text: "aₙ = a × r^(n - 1)",
      },
    },

    {
      id: 7,
      type: "formula",
      title: "Sum of GP",
      content: {
        text: "Sₙ = a(1 - rⁿ) / (1 - r), for r ≠ 1",
      },
    },

    {
      id: 8,
      type: "formula",
      title: "Sum of Infinite GP",
      content: {
        text: "S = a / (1 - r), when |r| < 1",
      },
      highlight: "Only for converging GP",
    },

    {
      id: 9,
      type: "concept",
      title: "Harmonic Progression (HP)",
      content: {
        text: "A sequence is in HP if the reciprocals of its terms form an AP.",
      },
      highlight: "HP = Reciprocal of AP",
    },

    {
      id: 10,
      type: "example",
      title: "Example Problem",
      content: {
        text: "AP: Find 5th term of 2, 4, 6... → a = 2, d = 2 → a₅ = 2 + 4×2 = 10. GP: 2, 4, 8... → r = 2 → a₅ = 2×2⁴ = 32.",
      },
      extraAction: {
        label: "Practice Progression Questions",
        action: "practice_progressions_basic",
      },
    },

    {
      id: 11,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Confusing AP and GP, using wrong formula for sum, ignoring condition |r| < 1 in infinite GP, and incorrect identification of sequence type.",
      },
      icon: "warning",
    },

    {
      id: 12,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in finance (interest, investments), population growth, physics, computer algorithms, and data modeling.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your trick to identify AP vs GP instantly...",
    message: "",
    saved: false,
  },
};


export const quadraticEquations = {
  meta: {
    id: "quadratic-equations",
    title: "Quadratic Equations",
    topic: "Mathematics",
    difficulty: "Medium",
    learningTime: "45 mins",
    explanation:
      "Learn how to solve quadratic equations using different methods, understand the discriminant, nature of roots, and practical applications.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 10,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What is a Quadratic Equation?",
      content: {
        text: "A quadratic equation is a polynomial equation of degree 2 in the form ax² + bx + c = 0, where a ≠ 0.",
      },
      icon: "info",
      highlight: "Degree = 2",
    },

    {
      id: 2,
      type: "intuition",
      title: "Graph Intuition",
      content: {
        text: "The graph of a quadratic equation is a parabola. It can open upwards or downwards depending on the value of 'a'.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "formula",
      title: "Standard Form",
      content: {
        text: "ax² + bx + c = 0",
      },
      highlight: "General representation",
    },

    {
      id: 4,
      type: "formula",
      title: "Quadratic Formula",
      content: {
        text: "x = [-b ± √(b² - 4ac)] / (2a)",
      },
      highlight: "Universal solving method",
    },

    {
      id: 5,
      type: "concept",
      title: "Discriminant (D)",
      content: {
        text: "D = b² - 4ac. It determines the nature of the roots of the equation.",
      },
      icon: "layers",
    },

    {
      id: 6,
      type: "edge-case",
      title: "Nature of Roots",
      content: {
        text: "If D > 0 → two distinct real roots. If D = 0 → equal roots. If D < 0 → complex roots.",
      },
      icon: "alert",
    },

    {
      id: 7,
      type: "formula",
      title: "Sum and Product of Roots",
      content: {
        text: "Sum = -b/a, Product = c/a",
      },
      highlight: "Useful for shortcuts",
    },

    {
      id: 8,
      type: "example",
      title: "Example Problem",
      content: {
        text: "Solve x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → roots are 2 and 3.",
      },
      extraAction: {
        label: "Practice Factorization",
        action: "practice_quadratic_factorization",
      },
    },

    {
      id: 9,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Forgetting to divide by 2a in quadratic formula, sign errors in b² - 4ac, and incorrect factorization.",
      },
      icon: "warning",
    },

    {
      id: 10,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in physics (projectile motion), optimization problems, economics, and computer graphics.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut for solving quadratics...",
    message: "",
    saved: false,
  },
};


export const probability = {
  meta: {
    id: "probability",
    title: "Probability",
    topic: "Mathematics",
    difficulty: "Medium",
    learningTime: "50 mins",
    explanation:
      "Understand how to measure uncertainty using probability, including formulas, types of events, conditional probability, and real-world applications.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 10,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What is Probability?",
      content: {
        text: "Probability measures the likelihood of an event occurring. It ranges from 0 (impossible) to 1 (certain).",
      },
      icon: "info",
      highlight: "0 ≤ P(E) ≤ 1",
    },

    {
      id: 2,
      type: "intuition",
      title: "Real-Life Intuition",
      content: {
        text: "If you toss a fair coin, the chance of getting heads is 1 out of 2 → probability = 0.5.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "formula",
      title: "Basic Probability Formula",
      content: {
        text: "P(E) = Number of favorable outcomes / Total number of outcomes",
      },
      highlight: "Classical probability formula",
    },

    {
      id: 4,
      type: "concept",
      title: "Types of Events",
      content: {
        text: "Events can be independent (one does not affect the other), dependent (one affects the other), mutually exclusive (cannot happen together), or exhaustive (cover all possibilities).",
      },
      icon: "layers",
    },

    {
      id: 5,
      type: "formula",
      title: "Addition Rule",
      content: {
        text: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      },
      highlight: "Used when finding probability of A OR B",
    },

    {
      id: 6,
      type: "formula",
      title: "Multiplication Rule",
      content: {
        text: "P(A ∩ B) = P(A) × P(B) (for independent events)",
      },
      highlight: "Used when events are independent",
    },

    {
      id: 7,
      type: "formula",
      title: "Conditional Probability",
      content: {
        text: "P(A|B) = P(A ∩ B) / P(B)",
      },
      highlight: "Probability of A given B has occurred",
    },

    {
      id: 8,
      type: "example",
      title: "Example Problem",
      content: {
        text: "A die is rolled. Probability of getting an even number = 3/6 = 1/2. (2, 4, 6 are favorable outcomes)",
      },
      extraAction: {
        label: "Try Dice Problems",
        action: "practice_probability_dice",
      },
    },

    {
      id: 9,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Confusing independent and dependent events, forgetting to subtract intersection in addition rule, and miscounting total outcomes.",
      },
      icon: "warning",
    },

    {
      id: 10,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in machine learning, risk analysis, finance, game theory, and decision-making systems.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your shortcut to solve probability questions...",
    message: "",
    saved: false,
  },
};


export const permutationsAndCombinations = {
  meta: {
    id: "permutations-and-combinations",
    title: "Permutations and Combinations",
    topic: "Mathematics",
    difficulty: "Medium",
    learningTime: "45 mins",
    explanation:
      "Learn how to count arrangements and selections efficiently using permutations and combinations, along with formulas, edge cases, and problem-solving strategies.",
  },

  userstate: {
    completedSections: 0,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 0,
  },

  sections: [
    {
      id: 1,
      type: "concept",
      title: "What are Permutations and Combinations?",
      content: {
        text: "Permutations deal with arrangements where order matters, while combinations deal with selections where order does not matter.",
      },
      icon: "info",
      highlight: "Order matters vs Order doesn't matter",
    },

    {
      id: 2,
      type: "intuition",
      title: "Real-Life Intuition",
      content: {
        text: "If you are selecting a team of 3 people from 10, order does not matter → combination. But if you are assigning ranks (1st, 2nd, 3rd), order matters → permutation.",
      },
      icon: "lightbulb",
    },

    {
      id: 3,
      type: "formula",
      title: "Permutation Formula",
      content: {
        text: "nPr = n! / (n - r)! where n is total items and r is items selected.",
      },
      highlight: "Used when order matters",
    },

    {
      id: 4,
      type: "formula",
      title: "Combination Formula",
      content: {
        text: "nCr = n! / (r! * (n - r)!)",
      },
      highlight: "Used when order does NOT matter",
    },

    {
      id: 5,
      type: "edge-case",
      title: "Important Edge Cases",
      content: {
        text: "nC0 = 1, nCn = 1, nC1 = n, nP0 = 1. Also, nCr = nC(n-r).",
      },
      icon: "alert",
    },

    {
      id: 6,
      type: "example",
      title: "Example Problem",
      content: {
        text: "How many ways to choose 2 students from 5? Answer: 5C2 = 10. If arranging them → 5P2 = 20.",
      },
      extraAction: {
        label: "Try Similar Problem",
        action: "practice_combination_basic",
      },
    },

    {
      id: 7,
      type: "mistake",
      title: "Common Mistakes",
      content: {
        text: "Students often confuse when to use permutation vs combination. Always check if order matters.",
      },
      icon: "warning",
    },

    {
      id: 8,
      type: "application",
      title: "Applications in Real World",
      content: {
        text: "Used in probability, data science, cryptography, scheduling problems, and competitive programming.",
      },
      icon: "rocket",
    },
  ],

  personalInsight: {
    placeholder: "Write your own trick to remember nCr vs nPr...",
    message: "",
    saved: false,
  },
};


export const seriesAlphabetsNumbers = {
  meta: {
    id: "series-alphabets-numbers",
    title: "Series (Alphabets & Numbers)",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "25–30 mins",
    explanation:
      "Series problems involve identifying a hidden pattern in a sequence of numbers, alphabets, or a combination of both. The objective is to find the missing term or the next term by analyzing logical, mathematical, or positional relationships within the series.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Series questions, elements follow a specific rule such as addition, subtraction, multiplication, alternating patterns, or alphabet position logic. The key is to observe differences, ratios, or positional changes rather than individual values.",
      },
      extraAction: {
        label: "See Pattern Types →",
        action: "open_series_patterns",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of a series like footsteps—each step depends on the previous one. Sometimes the steps are equal, sometimes they alternate, and sometimes they grow faster. Once you sense the rhythm, predicting the next step becomes easy.",
      },
      icon: "TrendingUp",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Number Series Example:
2, 4, 8, 16, ?

Observation:
Each number is multiplied by 2

Answer:
32

Alphabet Series Example:
A, C, E, G, ?

Positions:
A(1), C(3), E(5), G(7)

Pattern:
+2 positions each time

Answer:
I`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Series questions are extremely common in SSC, Banking, Railways, Defence exams, and campus placement aptitude tests. They are often used to test quick analytical thinking and pattern recognition skills.",
      },
      icon: "ClipboardList",
      highlight: "bg-yellow-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Common Patterns & Signals",
      content: {
        text: `Common Number Patterns:
- Arithmetic progression (+2, -3)
- Geometric progression (×2, ÷3)
- Alternating operations
- Squares, cubes, prime numbers

Common Alphabet Patterns:
- Forward/backward shifts
- Alternate letter skipping
- Position-based math (A=1, Z=26)
- Mixed letter-number series

Signals:
- Repetition of operations
- Increasing gaps
- Alternation between two rules`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Checking only one difference and finalizing too early.
Ignoring alternate patterns.
Forgetting alphabet positions.
Overlooking simple arithmetic progressions.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners use Series questions to test:
- Observation skills
- Speed of pattern detection
- Logical consistency

They expect candidates to:
- Test the rule on all elements
- Prefer the simplest valid logic
- Avoid guesswork`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Observe differences or ratios.
Check for alternation.
Use alphabet positions when needed.
Confirm the rule across the full series.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Which pattern was easiest for you to spot and why?",
    message: "",
    saved: false,
  },
};


export const analogy = {
  meta: {
    id: "analogy",
    title: "Analogy",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "20–25 mins",
    explanation:
      "Analogy questions test your ability to identify relationships between pairs of words, numbers, or symbols and apply the same relationship to another pair. The focus is not on the items themselves, but on how they are connected logically.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Analogy problems, a relationship is given in the form A : B :: C : ?. You must first understand how A is related to B, then apply the same logic to C to find the correct answer.",
      },
      extraAction: {
        label: "Explore Relation Types →",
        action: "open_analogy_types",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of analogy like a comparison mirror. If one object changes in a certain way to become another, the same type of change must be applied to the next object. The trick is to focus on the relation, not the words.",
      },
      icon: "Shuffle",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
Bird : Fly :: Fish : ?

Relation:
Bird moves by flying

Apply same logic:
Fish moves by swimming

Answer:
Swim`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Analogy questions are common in SSC, Banking, Defence exams, and campus placement aptitude rounds. They are used to test conceptual clarity and the ability to see abstract relationships.",
      },
      icon: "Link",
      highlight: "bg-indigo-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Common Patterns & Signals",
      content: {
        text: `Common Analogy Types:
- Object : Function (Pen : Write)
- Cause : Effect (Fire : Smoke)
- Part : Whole (Wheel : Car)
- Synonym / Antonym
- Degree or intensity (Warm : Hot)

Signals:
- Meaning-based connections
- Functional or logical dependence
- Similar grammatical categories`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Focusing on surface meaning only.
Ignoring the direction of relation.
Choosing options based on familiarity rather than logic.
Missing multiple possible relations and not selecting the best one.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners expect:
- Clear identification of the relation
- Logical consistency
- Ability to eliminate wrong options

Tip:
Always verbalize the relation in words before selecting an answer.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Identify the exact relationship.
Apply the same logic to the new pair.
Eliminate weak or partial matches.
Choose the most precise analogy.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Describe the relationship you identified in this analogy...",
    message: "",
    saved: false,
  },
};


export const classificationOddOneOut = {
  meta: {
    id: "classification-odd-one-out",
    title: "Classification (Odd One Out)",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "15–20 mins",
    explanation:
      "Classification (Odd One Out) questions test your ability to group items based on a common property and identify the one item that does not belong. The challenge lies in spotting the most logical and consistent basis of classification.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Classification problems, you are given a set of words, numbers, letters, or figures. All except one share a common feature such as meaning, function, structure, numerical property, or position. Your task is to identify the item that breaks this pattern.",
      },
      extraAction: {
        label: "See Classification Logic →",
        action: "open_classification_logic",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of arranging items into buckets. If three items naturally fall into one bucket and one doesn’t fit anywhere cleanly, that item is your odd one out. Always ask: ‘On what single rule do most of these agree?’",
      },
      icon: "Filter",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
Apple, Mango, Banana, Carrot

Observation:
Apple, Mango, Banana → Fruits
Carrot → Vegetable

Answer:
Carrot (Odd One Out)`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Classification questions are commonly asked in SSC, Banking, Railways, Defence exams, and placement aptitude tests. They are quick to attempt but effective in testing logical grouping ability.",
      },
      icon: "CheckSquare",
      highlight: "bg-orange-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Common Patterns & Signals",
      content: {
        text: `Common Bases of Classification:
- Meaning or category (animal, fruit, tool)
- Function or usage
- Alphabetical order or letter count
- Numerical properties (prime, even, square)
- Structural similarity

Signals:
- One item feels conceptually different
- Three follow one clean rule
- One requires a forced explanation`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Choosing based on personal interpretation instead of logic.
Missing a deeper or hidden rule.
Selecting an option just because it looks different.
Ignoring alternate valid groupings.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners check:
- Ability to form logical groups
- Precision in reasoning
- Speed and clarity of thought

Tip:
Always justify your choice with one clear rule.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Identify a common rule.
Group the majority items.
Spot the exception.
Confirm no better rule exists.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "What rule did you use to find the odd one out?",
    message: "",
    saved: false,
  },
};



export const orderingRanking = {
  meta: {
    id: "ordering-ranking",
    title: "Ordering & Ranking",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "25–30 mins",
    explanation:
      "Ordering & Ranking questions test your ability to arrange people or objects based on given conditions such as height, age, marks, position, or rank. These problems require systematic thinking to correctly interpret relative positions and determine exact rankings.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Ordering & Ranking problems, information is given in relative terms like ‘A is taller than B’, ‘C is ranked 5th from the top’, or ‘D is between E and F’. You must combine all clues logically to determine final order or rank.",
      },
      extraAction: {
        label: "Learn Ranking Techniques →",
        action: "open_ranking_tricks",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Imagine lining people up in a straight row. Every new statement shifts someone left or right in that line. If you update the line carefully after each clue, the final order becomes clear without confusion.",
      },
      icon: "AlignCenter",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
In a class of 10 students, Rohan is 3rd from the top.
What is his rank from the bottom?

Logic:
Total students = 10
Rank from bottom = (Total - Rank from top + 1)
= 10 - 3 + 1 = 8

Answer:
Rohan is 8th from the bottom`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Ordering & Ranking questions are frequently asked in SSC, Banking, Railways, Defence exams, and campus placement aptitude rounds. They are used to evaluate clarity in handling relative data.",
      },
      icon: "ListOrdered",
      highlight: "bg-teal-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Patterns & Signals",
      content: {
        text: `Common Patterns:
- Rank from top/bottom
- Left/right or ahead/behind positions
- Taller/shorter, older/younger comparisons
- Between two persons

Key Formula:
Rank from opposite side = Total - Given Rank + 1

Signals:
- Words like above, below, between
- Total number given
- Relative comparison statements`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Forgetting to add +1 in rank conversion.
Mixing ordering direction (top vs bottom).
Ignoring one of the given conditions.
Assuming positions without mapping them.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners look for:
- Step-by-step logical arrangement
- Correct use of rank formulas
- Ability to manage multiple conditions

Tip:
Always draw a rough line or table to track positions.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Read all conditions carefully.
Use a line or table to arrange.
Apply rank conversion formula correctly.
Recheck with all clues.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Explain how you determined the final ranking in this problem...",
    message: "",
    saved: false,
  },
};


export const syllogismBasic = {
  meta: {
    id: "syllogism-basic",
    title: "Syllogism (Basic)",
    topic: "Aptitude",
    difficulty: "Easy",
    learningTime: "20–25 mins",
    explanation:
      "Syllogism questions test your ability to draw logical conclusions from given statements. You must judge whether certain conclusions follow, do not follow, or are possibly true based only on the provided information—without using real-world knowledge.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: false,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Basic Syllogism problems, you are given two or more statements followed by conclusions. The task is to analyze the logical relationship between sets (usually represented by circles) and decide which conclusions logically follow.",
      },
      extraAction: {
        label: "Learn Venn Diagram Method →",
        action: "open_venn_method",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of syllogism as overlapping groups. If one group partially or fully overlaps with another, only those overlaps are guaranteed truths. Anything outside the overlap cannot be assumed unless explicitly stated.",
      },
      icon: "CircleDot",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Statements:
All cats are animals.
Some animals are pets.

Conclusion:
Some cats are pets.

Analysis:
There is no direct overlap given between cats and pets.

Answer:
Conclusion does NOT follow`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Basic Syllogism questions are commonly asked in SSC, Banking, Insurance exams, and campus placement aptitude tests. They assess pure logical reasoning without relying on factual knowledge.",
      },
      icon: "Layers",
      highlight: "bg-pink-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Rules & Signals",
      content: {
        text: `Key Rules:
- All → Complete inclusion
- Some → Partial inclusion
- No → Complete exclusion

Important Signals:
- Conclusions using 'some' are often tricky
- 'All' does not mean 'only'
- Real-world truth is irrelevant`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Using real-life assumptions.
Confusing 'some' with 'all'.
Assuming reverse relations.
Forcing overlap where none is given.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners test:
- Logical discipline
- Ability to follow rules strictly
- Diagrammatic reasoning

Tip:
If a conclusion is not 100% guaranteed, it does not follow.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Rely only on given statements.
Use Venn diagrams.
Avoid real-world logic.
Check certainty, not possibility.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Which rule helped you most while solving this syllogism?",
    message: "",
    saved: false,
  },
};


export const vennDiagram = {
  meta: {
    id: "venn-diagram-2-3-set",
    title: "Venn Diagram (2-Set & 3-Set)",
    topic: "Aptitude",
    difficulty: "Easy–Medium",
    learningTime: "25–30 mins",
    explanation:
      "Venn Diagram problems involve representing relationships between different groups (sets) using overlapping circles. They help visualize logical connections and are commonly used in syllogism, data interpretation, and classification questions.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "In Venn Diagram questions, sets are represented by circles. Overlapping areas show common elements, while non-overlapping areas show exclusive elements. Two-set diagrams are simpler, while three-set diagrams require careful attention to multiple overlaps.",
      },
      extraAction: {
        label: "Visualize Set Relations →",
        action: "open_venn_visuals",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Think of circles as groups of people. Where two circles overlap, those people belong to both groups. For three sets, the central overlap is the group common to all three. Filling values step by step avoids confusion.",
      },
      icon: "Circle",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `2-Set Example:
In a class, 30 students like Maths, 20 like Science, and 10 like both.
Total students who like at least one = 30 + 20 − 10 = 40

3-Set Example:
Out of 100 students:
40 like Cricket,
35 like Football,
25 like Basketball,
10 like all three.

Start by filling the center (10), then distribute remaining values carefully.`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Venn Diagram questions appear in SSC, Banking, CAT, NMAT, and placement aptitude tests. They are essential for solving syllogism and set-based data interpretation problems.",
      },
      icon: "PieChart",
      highlight: "bg-cyan-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Rules & Signals",
      content: {
        text: `Key Rules:
- Fill the innermost (common) region first
- Use subtraction to avoid double counting
- Total = Sum of all individual regions

Signals:
- Words like both, only, at least, none
- Given totals of sets
- Overlapping categories`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Double counting common elements.
Skipping the central overlap in 3-set problems.
Not matching totals at the end.
Placing values randomly without logic.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners expect:
- Clean diagram construction
- Logical placement of values
- Accuracy in calculations

Tip:
Always cross-check the final total with given data.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Draw the diagram clearly.
Fill common regions first.
Avoid double counting.
Verify totals before answering.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Which step helped you most while solving this Venn diagram?",
    message: "",
    saved: false,
  },
};


export const logicalPuzzlesEasy = {
  meta: {
    id: "logical-puzzles-easy",
    title: "Logical Puzzles (Easy)",
    topic: "Aptitude",
    difficulty: "Easy",
    learningTime: "30–35 mins",
    explanation:
      "Logical Puzzles involve short problem statements where multiple conditions are given and you must deduce correct answers through step-by-step reasoning. Easy-level puzzles focus on clarity of thought, sequencing, and basic constraint handling rather than heavy complexity.",
  },

  userstate: {
    completedSections: 1,
    totalSections: 8,
    isCompleted: false,
    isBookmarked: true,
    confidenceRating: 2,
  },

  sections: [
    {
      id: 1,
      type: "text",
      title: "Concept Explanation",
      content: {
        text: "Easy Logical Puzzles usually involve a small number of people or objects with simple conditions such as ordering, matching, or grouping. The key is to convert verbal information into a structured form like a table, list, or diagram.",
      },
      extraAction: {
        label: "Puzzle Solving Steps →",
        action: "open_puzzle_steps",
      },
    },
    {
      id: 2,
      type: "intuition",
      title: "Build Your Intuition",
      content: {
        text: "Treat a puzzle like a mini-detective case. Each statement is a clue. Individually, clues may seem weak, but when combined, they point to only one valid arrangement.",
      },
      icon: "Search",
    },
    {
      id: 3,
      type: "example",
      title: "Worked Example",
      content: {
        text: `Example:
Three friends A, B, and C are sitting in a row.
A is not at the left end.
B is to the right of C.

Step 1: Possible positions → _ _ _
Step 2: A cannot be at position 1
Step 3: C must be left of B

Valid arrangement:
C A B

Answer:
A is sitting in the middle`,
      },
    },
    {
      id: 4,
      type: "usecase",
      title: "Where It Appears",
      content: {
        text: "Easy Logical Puzzles are asked in SSC, Banking, Railways, Defence exams, and early rounds of campus placement aptitude tests. They help examiners judge structured thinking and patience.",
      },
      icon: "Puzzle",
      highlight: "bg-lime-200",
    },
    {
      id: 5,
      type: "pattern",
      title: "Common Puzzle Types & Signals",
      content: {
        text: `Common Types:
- Seating in a row
- Simple ordering
- Matching people with items
- True/false based clues

Signals:
- Small number of variables
- Clear constraints
- One correct arrangement`,
      },
    },
    {
      id: 6,
      type: "mistakes",
      title: "Common Mistakes & Traps",
      content: {
        text: `Trying to solve mentally without writing.
Ignoring one condition.
Locking an arrangement too early.
Not checking all clues together.`,
      },
      icon: "AlertTriangle",
      highlight: "danger",
    },
    {
      id: 7,
      type: "interview",
      title: "Examiner’s Perspective",
      content: {
        text: `Examiners expect:
- Systematic arrangement
- Logical elimination
- Final answer backed by all clues

Tip:
If an arrangement violates even one condition, discard it immediately.`,
      },
      icon: "MessageSquare",
    },
    {
      id: 8,
      type: "summary",
      title: "Quick Summary",
      content: {
        text: `Read all clues carefully.
Convert text into structure.
Eliminate invalid cases.
Verify with every condition.`,
      },
    },
  ],

  personalInsight: {
    placeholder:
      "Which clue helped you crack this puzzle first?",
    message: "",
    saved: false,
  },
};
