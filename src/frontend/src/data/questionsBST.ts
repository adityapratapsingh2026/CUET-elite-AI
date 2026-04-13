import type { QuizQuestion } from "../types/index";

export const bstQuestions: QuizQuestion[] = [
  // ─── Management Fundamentals (25 questions) ───────────────────────────────
  {
    id: "bst_001",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Management is defined as the process of:",
    options: [
      "Getting things done through and with people",
      "Making profit for shareholders",
      "Producing goods and services",
      "Allocating physical resources only",
    ],
    correctIndex: 0,
    explanation:
      "Management involves getting things done through and with people by coordinating their efforts toward common goals.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_002",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Which of the following is NOT a characteristic of management?",
    options: [
      "Goal-oriented process",
      "Pervasive in nature",
      "Static in nature",
      "Multidimensional",
    ],
    correctIndex: 2,
    explanation:
      "Management is dynamic, not static — it adapts to changing environments and circumstances.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_003",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "At which level of management is the greatest number of employees found?",
    options: [
      "Top-level management",
      "Middle-level management",
      "Lower/Supervisory-level management",
      "Both top and middle equally",
    ],
    correctIndex: 2,
    explanation:
      "Supervisory/lower-level management is the largest group; it directly oversees operative workers and handles day-to-day operations.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_004",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which of the following functions of management involves determining what to do and how to do it?",
    options: ["Organising", "Staffing", "Planning", "Controlling"],
    correctIndex: 2,
    explanation:
      "Planning is the primary function of management that involves setting objectives and deciding how to achieve them.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_005",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Management is said to be a "group activity" because:',
    options: [
      "It is practiced only in large groups",
      "It coordinates efforts of individuals working together to achieve common goals",
      "Managers always work in teams",
      "It requires committee decisions",
    ],
    correctIndex: 1,
    explanation:
      "Management coordinates human efforts so that individuals can achieve common organisational goals — making it inherently a group activity.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_006",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "Which concept states that management is universally applicable across all types of organisations?",
    options: [
      "Continuity of management",
      "Pervasiveness of management",
      "Dynamism of management",
      "Intangibility of management",
    ],
    correctIndex: 1,
    explanation:
      "The pervasiveness of management means that managerial functions are performed in all organisations — business, government, NGOs, etc.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_007",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      '"Setting objectives and determining the course of action" — which function of management does this describe?',
    options: ["Controlling", "Planning", "Staffing", "Directing"],
    correctIndex: 1,
    explanation:
      "Planning involves setting goals and charting the course of action needed to reach those goals.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_008",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Which of the following best describes management as a profession?",
    options: [
      "It has a well-defined body of knowledge, ethical code, but entry is not restricted by an exam",
      "It is exactly like medicine or law in every respect",
      "There is no formal body of knowledge",
      "Membership of a professional body is compulsory",
    ],
    correctIndex: 0,
    explanation:
      "Management has a systematic body of knowledge and an ethical code, but unlike medicine or law, it does not require a compulsory qualifying examination for entry.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_009",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      'Who is credited with the saying "Management is what managers do"?',
    options: ["Peter Drucker", "Henry Fayol", "F.W. Taylor", "Harold Koontz"],
    correctIndex: 3,
    explanation:
      'Harold Koontz is credited with the succinct definition "Management is what managers do."',
    topic: "Management Fundamentals",
  },
  {
    id: "bst_010",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Which of the following is an objective of management related to employees?",
    options: [
      "Earning profit for owners",
      "Providing good quality products to consumers",
      "Providing fair wages and good working conditions",
      "Paying taxes on time",
    ],
    correctIndex: 2,
    explanation:
      "One of the social/employee objectives of management is to ensure fair wages, safe working conditions, and employee welfare.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_011",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'The concept that "without management, resources remain resources and never become production" highlights which characteristic?',
    options: [
      "Management is goal-oriented",
      "Management is a group activity",
      "Management is intangible",
      "Management is a dynamic function",
    ],
    correctIndex: 2,
    explanation:
      "Management is intangible — it cannot be seen physically but its results (efficient use of resources, production) can be felt.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_012",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which managerial level is responsible for formulating overall organisational policy?",
    options: [
      "Supervisory level",
      "Middle level",
      "Top level",
      "Operative level",
    ],
    correctIndex: 2,
    explanation:
      "Top-level managers (CEO, Board of Directors) formulate organisational policies, set objectives, and are accountable to owners.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_013",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Middle-level management is primarily responsible for:",
    options: [
      "Framing long-term policy",
      "Interpreting policies and supervising lower-level managers",
      "Directly supervising workers on the shop floor",
      "Meeting shareholders",
    ],
    correctIndex: 1,
    explanation:
      "Middle managers interpret top management policies, co-ordinate departmental activities, and supervise first-line managers.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_014",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Which of the following is a social objective of management?",
    options: [
      "Maximising return on investment",
      "Ensuring quality products at fair prices",
      "Training and developing employees",
      "Increasing productivity",
    ],
    correctIndex: 1,
    explanation:
      "Providing quality goods at fair prices to consumers is a social objective of management, serving the wider community.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_015",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'Management is a "continuous process" means:',
    options: [
      "Managers never take holidays",
      "Managerial functions are performed without pause as long as the organisation exists",
      "All decisions are made daily",
      "Management meetings happen every day",
    ],
    correctIndex: 1,
    explanation:
      "Management is an ongoing, never-ending process — planning, organising, directing, and controlling happen continuously throughout the life of an organisation.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_016",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Effectiveness in management refers to:",
    options: [
      "Doing things at minimum cost",
      "Completing tasks on time",
      "Achieving desired results regardless of cost",
      "Maximising output with given resources",
    ],
    correctIndex: 2,
    explanation:
      "Effectiveness means achieving the set objectives (doing the right things), whereas efficiency focuses on cost-minimisation.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_017",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Efficiency in management means:",
    options: [
      "Achieving goals at minimum cost with optimum utilisation of resources",
      "Achieving goals regardless of resource use",
      "Making maximum profit",
      "Reaching goals faster than competitors",
    ],
    correctIndex: 0,
    explanation:
      "Efficiency is about doing things in the best way — achieving objectives with minimum wastage of resources (cost, time, effort).",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_018",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "Which of the following statements about management as a science is CORRECT?",
    options: [
      "Management principles have universal validity like natural sciences",
      "Management principles are based on experimental verification",
      "Management principles are flexible guidelines, not absolute laws",
      "Management follows the same procedure every time without variation",
    ],
    correctIndex: 2,
    explanation:
      "Management is a social science — its principles are guidelines that must be adapted to situation, not universal absolute laws like physics.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_019",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "The function of management that involves assigning tasks and establishing authority relationships is:",
    options: ["Planning", "Organising", "Controlling", "Directing"],
    correctIndex: 1,
    explanation:
      "Organising involves dividing work, assigning responsibilities, and creating authority relationships to achieve goals.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_020",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Which of the following is NOT a managerial role according to Henry Mintzberg?",
    options: [
      "Interpersonal role",
      "Informational role",
      "Decisional role",
      "Technical role",
    ],
    correctIndex: 3,
    explanation:
      "Mintzberg identified Interpersonal, Informational, and Decisional roles. Technical role is not in his classification.",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_021",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Directing as a management function includes:",
    options: [
      "Setting targets and standards",
      "Motivating, communicating and leading employees",
      "Hiring and placing employees",
      "Comparing actual with planned performance",
    ],
    correctIndex: 1,
    explanation:
      "Directing involves guiding employees through motivation, communication, and leadership to achieve objectives.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_022",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'Management is a "multi-dimensional" concept because:',
    options: [
      "It deals with many departments at once",
      "It involves management of work, people, and operations simultaneously",
      "It uses multiple management theories",
      "It operates across multiple countries",
    ],
    correctIndex: 1,
    explanation:
      "Management is multidimensional because it encompasses management of work, people, and operations — all three dimensions simultaneously.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_023",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "The controlling function of management involves:",
    options: [
      "Recruiting the right people",
      "Motivating employees",
      "Comparing actual performance with planned performance",
      "Designing the organisation structure",
    ],
    correctIndex: 2,
    explanation:
      "Controlling means measuring actual performance, comparing it against standards, and taking corrective action if needed.",
    topic: "Management Fundamentals",
  },
  {
    id: "bst_024",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Which of the following is an organisational objective of management?",
    options: [
      "Providing employment",
      "Survival, profit, and growth of the organisation",
      "Protecting the environment",
      "Paying taxes",
    ],
    correctIndex: 1,
    explanation:
      "Organisational objectives include survival (long-term existence), profit (sufficient to cover risk), and growth (increasing market share or operations).",
    topic: "Management Fundamentals",
    isPYQ: true,
  },
  {
    id: "bst_025",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "Peter Drucker is known for which key contribution to management?",
    options: [
      "Scientific Management principles",
      "14 Principles of Management",
      "Concept of Management by Objectives (MBO)",
      "Hawthorne Experiments",
    ],
    correctIndex: 2,
    explanation:
      "Peter Drucker popularised Management by Objectives (MBO) — a participative goal-setting and performance appraisal approach.",
    topic: "Management Fundamentals",
  },

  // ─── Fayol's 14 Principles (25 questions) ────────────────────────────────
  {
    id: "bst_026",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which of Fayol's principles states that there should be one boss for each employee?",
    options: [
      "Unity of Direction",
      "Unity of Command",
      "Division of Work",
      "Scalar Chain",
    ],
    correctIndex: 1,
    explanation:
      "Unity of Command means an employee should receive orders from only one superior to avoid confusion and conflict.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_027",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'Fayol\'s principle of "Division of Work" leads to:',
    options: [
      "Confusion",
      "Specialisation and efficiency",
      "Too many bosses",
      "Reduced output",
    ],
    correctIndex: 1,
    explanation:
      "Division of work leads to specialisation, reduces learning time, and increases output and efficiency.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_028",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'What does Fayol\'s principle of "Equity" require from managers?',
    options: [
      "Paying all employees equally",
      "Treating employees with kindness and justice",
      "Providing equal promotion opportunities",
      "Giving equal work to all",
    ],
    correctIndex: 1,
    explanation:
      "Equity demands that managers treat employees with a combination of kindness (benevolence) and justice — fair treatment, not necessarily identical treatment.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_029",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'The principle that "every group of activities with the same objective should have one head and one plan" is:',
    options: [
      "Unity of Command",
      "Unity of Direction",
      "Scalar Chain",
      "Esprit de Corps",
    ],
    correctIndex: 1,
    explanation:
      "Unity of Direction means one head and one plan for all activities directed at the same objective — ensuring coordinated effort.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_030",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'Fayol\'s "Scalar Chain" principle and the "Gang Plank" concept allows:',
    options: [
      "Workers to bypass the chain of command entirely",
      "Horizontal communication between employees of the same level in emergencies with superior approval",
      "Middle managers to communicate directly with owners",
      "Employees to form unions",
    ],
    correctIndex: 1,
    explanation:
      "The Gang Plank (bridge) allows direct horizontal communication between employees at the same hierarchical level in urgent situations, provided both superiors approve.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_031",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      'Which principle of management suggests "a place for everything and everything in its place"?',
    options: ["Discipline", "Order", "Equity", "Stability of Tenure"],
    correctIndex: 1,
    explanation:
      "The principle of Order states there should be a place for every person and every material — and each should be in its right place.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_032",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'According to Fayol, "Remuneration of Personnel" should be:',
    options: [
      "As low as possible to reduce costs",
      "Fair and satisfactory to both employees and employers",
      "Based purely on seniority",
      "Uniform for all employees regardless of role",
    ],
    correctIndex: 1,
    explanation:
      "Remuneration should be fair and satisfying — enough to motivate employees while not unreasonably burdening the organisation.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_033",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'The principle of "Centralisation and Decentralisation" according to Fayol implies:',
    options: [
      "All authority should always be centralised",
      "All authority should always be decentralised",
      "The degree of centralisation should depend on the situation — there is no absolute rule",
      "Centralisation is better for large organisations",
    ],
    correctIndex: 2,
    explanation:
      "Fayol recognised that neither extreme centralisation nor decentralisation is ideal; the right balance depends on the organisation's size, nature, and circumstances.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_034",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Esprit de Corps" as a management principle means:',
    options: [
      "Strict discipline in the workplace",
      "Team spirit and harmony among workers",
      "Fair wages for all",
      "Unity of command",
    ],
    correctIndex: 1,
    explanation:
      '"Esprit de Corps" emphasises team spirit and unity — "union is strength" — encouraging harmony and morale among staff.',
    topic: "Fayol's Principles",
  },
  {
    id: "bst_035",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'The principle of "Stability of Tenure of Personnel" suggests that:',
    options: [
      "Employees should be promoted frequently",
      "High employee turnover is beneficial",
      "Employees should be given time to settle into their roles and gain efficiency",
      "Only senior employees should have job security",
    ],
    correctIndex: 2,
    explanation:
      "Frequent turnover is harmful — employees need time to settle into their roles and develop competence. Stability of tenure improves efficiency.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_036",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Which Fayol principle is violated when a manager gives two different instructions to the same employee?",
    options: [
      "Division of Work",
      "Unity of Direction",
      "Unity of Command",
      "Authority and Responsibility",
    ],
    correctIndex: 2,
    explanation:
      "Unity of Command is violated — the employee is receiving orders from more than one boss, creating confusion and reducing accountability.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_037",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'The principle of "Authority and Responsibility" states that:',
    options: [
      "Authority should exceed responsibility",
      "Authority and responsibility should be co-equal and linked",
      "Responsibility should always exceed authority",
      "Authority can be delegated but not responsibility",
    ],
    correctIndex: 1,
    explanation:
      "Fayol stressed that authority and responsibility must be commensurate — if authority is given, equal responsibility must accompany it.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_038",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which principle emphasises that employees should be encouraged to contribute ideas and use initiative?",
    options: ["Discipline", "Initiative", "Esprit de Corps", "Equity"],
    correctIndex: 1,
    explanation:
      "The principle of Initiative states employees should be encouraged to develop and execute plans — it boosts zeal and energy.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_039",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Fayol\'s principle of "Discipline" means:',
    options: [
      "Strict punishment for all errors",
      "Obedience, respect for authority, and adherence to established rules",
      "Uniform procedures for all staff",
      "No deviation from the plan",
    ],
    correctIndex: 1,
    explanation:
      "Discipline means obedience to authority, respect for rules, and application of penalties for violations — essential for smooth functioning.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_040",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'Fayol\'s "Subordination of Individual Interest to General Interest" principle means:',
    options: [
      "Managers can ignore employee needs",
      "The interest of the organisation should prevail over personal interests when they conflict",
      "Individual goals must be identical to organisational goals",
      "Employee interests are never considered",
    ],
    correctIndex: 1,
    explanation:
      "When individual and organisational interests clash, the organisation's interest should prevail — but good management prevents such conflicts.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_041",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Henry Fayol proposed how many principles of management?",
    options: ["10", "12", "14", "16"],
    correctIndex: 2,
    explanation:
      'Fayol proposed 14 principles of management in his classic work "General and Industrial Management" (1916).',
    topic: "Fayol's Principles",
  },
  {
    id: "bst_042",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'Which of the following situations violates the principle of "Unity of Direction"?',
    options: [
      "Sales and marketing both report to the Marketing Director with a single plan",
      "Production and Quality Assurance each have separate plans with separate heads",
      "HR and Finance both follow one plan under the CFO",
      "Two employees in one department have different supervisors",
    ],
    correctIndex: 1,
    explanation:
      "Unity of Direction requires one head and one plan per group of activities with the same objective. Separate departments with separate plans working toward the same organisational goal violates this when they should be unified.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_043",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "In what respect do Fayol's principles differ from Taylor's principles?",
    options: [
      "Fayol focused on shop-floor workers; Taylor focused on top management",
      "Fayol focused on overall management; Taylor focused on production efficiency at the shop floor",
      "Fayol's principles are quantitative; Taylor's are qualitative",
      "There is no real difference between the two",
    ],
    correctIndex: 1,
    explanation:
      "Fayol's principles address the entire organisation (top to bottom), while Taylor's focus on improving production efficiency at the operative/shop-floor level.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_044",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Fayol belonged to which country and what was his background?",
    options: [
      "American, engineer",
      "French, mining engineer and manager",
      "German, economist",
      "British, industrial chemist",
    ],
    correctIndex: 1,
    explanation:
      "Henry Fayol was a French mining engineer and manager who developed his 14 principles from practical experience running a large mining company.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_045",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'The principle of "Order" covers which two types of order?',
    options: [
      "Social and Physical",
      "Financial and Material",
      "Personal and Professional",
      "Moral and Practical",
    ],
    correctIndex: 0,
    explanation:
      "Order has two dimensions: Material order (right place for every material thing) and Social order (right person in the right position).",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_046",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "When a company gives its middle managers additional authority to take decisions without referring to top management, which principle is being applied?",
    options: [
      "Unity of Command",
      "Scalar Chain",
      "Decentralisation",
      "Division of Work",
    ],
    correctIndex: 2,
    explanation:
      "Delegating more authority downward is decentralisation — middle managers gain autonomy for faster decision-making.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },
  {
    id: "bst_047",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      'Which Fayol principle is reflected in the statement: "Employees who are content and feel secure tend to work better"?',
    options: [
      "Equity",
      "Stability of Tenure",
      "Esprit de Corps",
      "Remuneration",
    ],
    correctIndex: 1,
    explanation:
      "Stability of Tenure means that job security and settled employment leads to higher efficiency and better morale.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_048",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "The scalar chain in Fayol's principles refers to:",
    options: [
      "A chain of suppliers and buyers",
      "The line of authority from top management to the lowest rank",
      "A series of production steps",
      "Financial reporting hierarchy",
    ],
    correctIndex: 1,
    explanation:
      "Scalar chain is the unbroken line of authority from the highest to the lowest level — communication normally flows through this chain.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_049",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "Which of the following correctly pairs a Fayol principle with its implication?",
    options: [
      "Discipline → Employees need not follow rules if they disagree",
      "Initiative → Employees should only follow orders, never suggest ideas",
      "Unity of Command → One employee, one boss",
      "Equity → All employees must receive equal pay",
    ],
    correctIndex: 2,
    explanation:
      "Unity of Command correctly implies that every employee should receive orders from and be accountable to one superior only.",
    topic: "Fayol's Principles",
  },
  {
    id: "bst_050",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'Fayol\'s principles are described as "flexible guidelines" rather than rigid rules because:',
    options: [
      "They were written a long time ago",
      "They can be adapted to the needs, size, and situation of the organisation",
      "They apply only to French companies",
      "They were never tested in practice",
    ],
    correctIndex: 1,
    explanation:
      "Fayol himself stressed that principles are guidelines to be applied with judgment and adapted to the specific situation — not mechanical rules.",
    topic: "Fayol's Principles",
    isPYQ: true,
  },

  // ─── Taylor's Scientific Management (15 questions) ───────────────────────
  {
    id: "bst_051",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'Who is known as the "Father of Scientific Management"?',
    options: ["Henry Fayol", "Elton Mayo", "F.W. Taylor", "Peter Drucker"],
    correctIndex: 2,
    explanation:
      "Frederick Winslow Taylor is called the Father of Scientific Management for his systematic study of work methods at the shop-floor level.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },
  {
    id: "bst_052",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Taylor\'s "Science, not rule of thumb" principle means:',
    options: [
      "Managers should avoid using any guidelines",
      "Decision-making should be based on scientific study, not tradition or guesswork",
      "Scientific instruments should replace workers",
      "All work should be done by machines",
    ],
    correctIndex: 1,
    explanation:
      "Taylor argued that the best method of doing work should be determined through scientific study and experimentation, not by old habits or guesswork.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_053",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Under Taylor\'s "Differential Piece Wage System":',
    options: [
      "All workers receive the same wage regardless of output",
      "Efficient workers receive a higher rate; inefficient workers a lower rate per piece",
      "Workers are paid only bonuses",
      "Wages are based purely on years of experience",
    ],
    correctIndex: 1,
    explanation:
      "Efficient workers who meet or exceed the standard output receive a higher piece rate; those who fall below standard get a lower rate — incentivising efficiency.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },
  {
    id: "bst_054",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Time Study" in Taylor\'s scientific management involves:',
    options: [
      "Studying employee attendance",
      "Determining the standard time for each task through observation",
      "Recording when employees arrive and leave",
      "Setting overtime hours",
    ],
    correctIndex: 1,
    explanation:
      "Time Study involves observing and recording the time each element of a job takes to establish the standard time for a task.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_055",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Motion Study" in scientific management aims to:',
    options: [
      "Track employee movement on CCTV",
      "Eliminate wasteful motions and find the best way to perform a task",
      "Study the movement of goods in the warehouse",
      "Monitor machine vibrations",
    ],
    correctIndex: 1,
    explanation:
      "Motion Study analyses the movements required for a job to eliminate unnecessary motions and standardise the most efficient approach.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_056",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'Taylor\'s principle of "Harmony, not Discord" addresses:',
    options: [
      "Musical activities in the workplace",
      "A mental revolution requiring mutual understanding between management and workers",
      "Settling supplier disputes",
      "Designing harmonious office layouts",
    ],
    correctIndex: 1,
    explanation:
      "Harmony, not Discord requires a complete mental revolution in attitude — both management and workers must view each other as partners rather than opponents.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },
  {
    id: "bst_057",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which of the following is a technique of Taylor's Scientific Management?",
    options: [
      "Gang Plank",
      "Esprit de Corps",
      "Functional Foremanship",
      "Scalar Chain",
    ],
    correctIndex: 2,
    explanation:
      "Functional Foremanship is a technique introduced by Taylor where 8 specialists oversee different aspects of work (planning and execution).",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_058",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Functional Foremanship as proposed by Taylor involves:",
    options: [
      "2 supervisors per worker",
      "4 functional specialists each managing the entire workforce",
      "8 specialists divided between planning and execution functions",
      "One foreman responsible for all functions",
    ],
    correctIndex: 2,
    explanation:
      "Taylor proposed 8 functional foremen — 4 for planning (Route Clerk, Instruction Card Clerk, Time & Cost Clerk, Disciplinarian) and 4 for execution.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_059",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'The concept of "Soldiering" in Taylor\'s work refers to:',
    options: [
      "Military-style management",
      "Deliberate restriction of output by workers to protect their jobs",
      "Soldiers taking over factory management",
      "Workers being disciplined like soldiers",
    ],
    correctIndex: 1,
    explanation:
      "Soldiering means workers deliberately working below their capacity to protect jobs and prevent piece-rate cuts — Taylor saw this as a major problem.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },
  {
    id: "bst_060",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      '"Standardisation and Simplification of Work" as a technique means:',
    options: [
      "Making all products identical with no variation",
      "Setting standards for tools, equipment, processes, and conditions to improve consistency and efficiency",
      "Reducing the product range to one item",
      "Replacing all workers with machines",
    ],
    correctIndex: 1,
    explanation:
      "Standardisation involves setting standards for every element of work to ensure consistent quality and efficiency; simplification reduces unnecessary variety.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_061",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      'Taylor\'s principle of "Maximum output, not restricted output" suggests:',
    options: [
      "Management should keep cutting costs",
      "Both management and workers should try to maximise production to create prosperity",
      "Only workers should maximise output",
      "Maximum output always requires maximum inputs",
    ],
    correctIndex: 1,
    explanation:
      "Taylor believed large production benefits everyone — both employer and employee — and opposed artificial restriction of output.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_062",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'Taylor\'s principle "Development of each and every person to their greatest efficiency and prosperity" means:',
    options: [
      "Each worker should be trained and placed in a role that suits their abilities",
      "Workers should compete against each other",
      "Management determines workers' potential with no input from workers",
      "Only efficient workers deserve prosperity",
    ],
    correctIndex: 0,
    explanation:
      "Taylor stressed scientific selection, training, and placement so each worker is developed to their highest potential — benefiting both the individual and the organisation.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },
  {
    id: "bst_063",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Which one is NOT a technique of Taylor's Scientific Management?",
    options: [
      "Time and Motion Study",
      "Differential Piece Wage System",
      "Functional Foremanship",
      "Gang Plank",
    ],
    correctIndex: 3,
    explanation:
      "Gang Plank is Fayol's concept (a special case of the Scalar Chain principle). It is not a technique of Taylor's Scientific Management.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_064",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Fatigue Study" in Scientific Management analyses:',
    options: [
      "How tired managers feel in meetings",
      "The frequency and duration of rest intervals to reduce worker fatigue",
      "The physical weight of products",
      "Machine downtime",
    ],
    correctIndex: 1,
    explanation:
      "Fatigue Study determines how long and how often workers should rest to reduce fatigue and maintain optimum productivity.",
    topic: "Taylor's Scientific Management",
  },
  {
    id: "bst_065",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: "A key criticism of Taylor's Scientific Management is:",
    options: [
      "It paid workers too much",
      "It gave too much initiative to workers",
      "It treated workers as machines, ignoring their human social needs",
      "It was too expensive to implement",
    ],
    correctIndex: 2,
    explanation:
      "Critics argue Taylor's approach was dehumanising — it viewed workers as economic machines to be optimised, ignoring social and psychological needs.",
    topic: "Taylor's Scientific Management",
    isPYQ: true,
  },

  // ─── Planning & Organising (20 questions) ─────────────────────────────────
  {
    id: "bst_066",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Which of the following is the FIRST step in the planning process?",
    options: [
      "Identifying alternative courses of action",
      "Setting objectives",
      "Evaluating alternatives",
      "Implementing the plan",
    ],
    correctIndex: 1,
    explanation:
      "Planning starts with setting objectives — defining what the organisation wants to achieve.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_067",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'A "Strategy" in management is best described as:',
    options: [
      "A day-to-day routine task list",
      "A comprehensive plan that encompasses objectives, policies, and programmes for a long period",
      "A specific budget for a department",
      "A single-use plan for a one-time event",
    ],
    correctIndex: 1,
    explanation:
      "Strategy is a comprehensive, long-term plan that sets direction, resource allocation priorities, and competitive positioning.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_068",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Which of the following is a "standing plan"?',
    options: ["Budget", "Programme", "Policy", "Project"],
    correctIndex: 2,
    explanation:
      "Policies are standing plans — they guide recurring decisions and remain in use over an extended period, unlike single-use plans like budgets or programmes.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_069",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'Planning is said to be "pervasive" because:',
    options: [
      "Only top managers plan",
      "It is required at every level and in every department of the organisation",
      "It covers every product line",
      "It is an international concept",
    ],
    correctIndex: 1,
    explanation:
      "Planning is pervasive — required at all levels (top, middle, lower) and in all functional areas, though its scope and nature differ by level.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_070",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'Planning is called a "mental exercise" because:',
    options: [
      "Planners must be physically fit",
      "It requires intellectual thinking, imagination, foresight, and sound judgment",
      "Meetings tire the brain",
      "It involves complex mathematics",
    ],
    correctIndex: 1,
    explanation:
      "Planning requires intellectual thought — thinking ahead, imagining scenarios, weighing options, and applying foresight and judgment.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_071",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'A "Budget" is classified as which type of plan?',
    options: [
      "Standing plan",
      "Single-use plan",
      "Contingency plan",
      "Tactical plan",
    ],
    correctIndex: 1,
    explanation:
      "A budget is a single-use plan — a numerical statement of expected results for a specific future period that is discarded once that period passes.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_072",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Delegation of authority means:",
    options: [
      "Transferring ultimate accountability to subordinates",
      "Assigning duties, granting authority, and creating responsibility",
      "Promoting employees",
      "Giving salary increments",
    ],
    correctIndex: 1,
    explanation:
      "Delegation involves assigning tasks to a subordinate, granting sufficient authority, and creating accountability — though ultimate responsibility stays with the delegator.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_073",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Which of the following is NOT a feature of delegation?",
    options: [
      "Responsibility is absolute and cannot be delegated",
      "Authority is partially transferred",
      "Accountability is created",
      "The subordinate can further sub-delegate if permitted",
    ],
    correctIndex: 0,
    explanation:
      "Responsibility is not absolute with delegation — while accountability (answerability) cannot be fully delegated, responsibility can be partially passed on. The key point is that ultimate accountability stays with the delegator.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_074",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "Decentralisation is an extension of delegation. The key difference is:",
    options: [
      "Decentralisation is between two individuals; delegation is across the whole organisation",
      "Decentralisation is a systematic dispersal of authority throughout the organisation; delegation can be between two individuals",
      "Delegation is always permanent; decentralisation is temporary",
      "They are identical concepts",
    ],
    correctIndex: 1,
    explanation:
      "Delegation can be between two individuals (superior–subordinate). Decentralisation is a broader philosophy of distributing authority throughout all levels of the organisation.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_075",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'A "Formal Organisation" is one where:',
    options: [
      "Employees wear formal dress",
      "Relationships and procedures are clearly defined and officially recognised",
      "Only senior employees belong",
      "All communication is in writing",
    ],
    correctIndex: 1,
    explanation:
      "A formal organisation has officially defined positions, authority, responsibilities, and communication channels.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_076",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'An "Informal Organisation" arises from:',
    options: [
      "Management directives",
      "Natural social interaction and personal relationships among employees",
      "Trade union regulations",
      "Government policies",
    ],
    correctIndex: 1,
    explanation:
      "Informal organisations emerge spontaneously from social interactions, shared interests, and personal relationships — not from official design.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_077",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Span of Management" refers to:',
    options: [
      "The duration of a manager's term",
      "The number of subordinates a manager can directly and effectively supervise",
      "The geographic area a manager is responsible for",
      "The number of products in a manager's portfolio",
    ],
    correctIndex: 1,
    explanation:
      "Span of management (span of control) is the number of subordinates who can be effectively supervised by one manager.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_078",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'In a "Functional Organisation Structure", departments are created based on:',
    options: [
      "Geographical regions",
      "Product lines",
      "Business functions (production, marketing, finance, HR)",
      "Customer segments",
    ],
    correctIndex: 2,
    explanation:
      "A functional structure groups activities by business function — a separate department for each major function such as production, marketing, finance, and HR.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_079",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Which is a limitation of planning?",
    options: [
      "It provides direction",
      "It reduces uncertainty",
      "It may not work in dynamic environments because the future is uncertain",
      "It facilitates decision-making",
    ],
    correctIndex: 2,
    explanation:
      "A key limitation of planning is that forecasts about the future may prove incorrect — environmental changes can quickly make plans obsolete.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_080",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Rules" as a type of plan specify:',
    options: [
      "General guidelines for decision-making",
      "Specific required or prohibited actions with no discretion",
      "A sequence of steps for a routine activity",
      "Financial limits for spending",
    ],
    correctIndex: 1,
    explanation:
      "Rules are the most specific type of plan — they state exactly what must or must not be done in specific situations, leaving no room for interpretation.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_081",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'The principle of "Parity of Authority and Responsibility" in organising means:',
    options: [
      "All managers should have the same authority",
      "The authority granted should be equal to the responsibility assigned",
      "Responsibility can be delegated but not authority",
      "Senior managers always have more authority",
    ],
    correctIndex: 1,
    explanation:
      "For effective performance, the authority given to a person must match the responsibility assigned — too little authority or too much responsibility creates problems.",
    topic: "Planning & Organising",
    isPYQ: true,
  },
  {
    id: "bst_082",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Procedures" in management planning refer to:',
    options: [
      "Financial rules",
      "Customary sequence of steps for handling recurring situations",
      "Long-term strategic goals",
      "Sales targets",
    ],
    correctIndex: 1,
    explanation:
      "Procedures are chronological sequences of steps that prescribe how recurring activities should be handled.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_083",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'A "Divisional Organisation Structure" is most suitable for:',
    options: [
      "Small businesses with a single product",
      "Large companies with multiple product lines or markets",
      "Government departments",
      "Start-ups",
    ],
    correctIndex: 1,
    explanation:
      "Divisional structure groups all activities related to a product or market into a self-contained division — ideal for large, diversified organisations.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_084",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'Planning "reduces creativity" is considered a limitation because:',
    options: [
      "Planners are not creative people",
      "Rigid adherence to plans discourages initiative and spontaneous responses to opportunities",
      "Plans are always wrong",
      "Creativity is not needed in business",
    ],
    correctIndex: 1,
    explanation:
      "Strict adherence to predetermined plans can suppress innovative thinking and prevent employees from responding creatively to new situations.",
    topic: "Planning & Organising",
  },
  {
    id: "bst_085",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "The formal communication that flows from a higher level to a lower level is called:",
    options: [
      "Upward communication",
      "Downward communication",
      "Horizontal communication",
      "Diagonal communication",
    ],
    correctIndex: 1,
    explanation:
      "Downward communication flows from superiors to subordinates — instructions, policies, performance feedback, and directives.",
    topic: "Planning & Organising",
    isPYQ: true,
  },

  // ─── Staffing & Directing (20 questions) ──────────────────────────────────
  {
    id: "bst_086",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Staffing involves:",
    options: [
      "Planning the budget",
      "Filling and keeping filled positions in the organisation structure",
      "Designing the organisational chart",
      "Setting sales targets",
    ],
    correctIndex: 1,
    explanation:
      "Staffing fills and keeps filled the positions in the organisation — from manpower planning and recruitment to training, appraisal, and retention.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_087",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Internal Recruitment" refers to:',
    options: [
      "Hiring candidates from outside the organisation",
      "Filling vacancies from within the existing employees of the organisation",
      "Using a recruitment agency",
      "Online recruitment portals",
    ],
    correctIndex: 1,
    explanation:
      "Internal recruitment means sourcing candidates from existing employees through promotions, transfers, or internal job postings.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_088",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "The process of searching for prospective employees and stimulating them to apply for jobs is called:",
    options: ["Selection", "Recruitment", "Induction", "Training"],
    correctIndex: 1,
    explanation:
      "Recruitment is the process of finding and attracting potential candidates to apply for available positions.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_089",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Selection differs from recruitment in that selection is a:",
    options: [
      "Positive process of attracting applicants",
      "Negative process of rejecting unsuitable candidates",
      "Process of determining training needs",
      "Process of assigning work",
    ],
    correctIndex: 1,
    explanation:
      "Selection is a negative/elimination process — it screens applicants and rejects those who do not meet the job requirements, keeping only the best fit.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_090",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Maslow's Hierarchy of Needs places which need at the LOWEST level?",
    options: [
      "Safety needs",
      "Social needs",
      "Physiological needs",
      "Esteem needs",
    ],
    correctIndex: 2,
    explanation:
      "Physiological needs (food, shelter, water) are at the base of Maslow's hierarchy — they must be satisfied before higher-order needs become motivating.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_091",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'In Maslow\'s hierarchy, "Self-Actualisation" refers to:',
    options: [
      "The need for job security",
      "The need for belonging and friendship",
      "The desire to achieve one's full potential and realise one's capabilities",
      "The need for recognition and status",
    ],
    correctIndex: 2,
    explanation:
      "Self-actualisation is the highest need — the desire to become everything one is capable of becoming, fulfilling one's full potential.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_092",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'Herzberg\'s "Hygiene Factors" (also called maintenance factors) include:',
    options: [
      "Achievement, recognition, advancement",
      "Work itself, growth, responsibility",
      "Salary, company policy, supervision, working conditions",
      "Self-actualisation, esteem, social needs",
    ],
    correctIndex: 2,
    explanation:
      "Hygiene factors (e.g., salary, job security, working conditions, company policy) prevent dissatisfaction but do not by themselves create motivation.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_093",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: "According to Herzberg, which factors truly motivate employees?",
    options: [
      "Hygiene factors like salary and fringe benefits",
      "Motivators like achievement, recognition, responsibility, and growth",
      "Physical working conditions",
      "Company policies and procedures",
    ],
    correctIndex: 1,
    explanation:
      "Herzberg's motivators (achievement, recognition, the work itself, responsibility, advancement) intrinsically satisfy and genuinely motivate employees.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_094",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Directing as a function includes all EXCEPT:",
    options: ["Supervision", "Motivation", "Leadership", "Budgeting"],
    correctIndex: 3,
    explanation:
      "Directing involves supervision, motivation, leadership, and communication. Budgeting is a planning and controlling tool, not a directing activity.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_095",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"On-the-job training" includes which of the following methods?',
    options: [
      "Vestibule training",
      "Apprenticeship programmes",
      "Classroom lectures",
      "Sensitivity training",
    ],
    correctIndex: 1,
    explanation:
      "Apprenticeship (working under a skilled mentor) is an on-the-job method. Vestibule training, lectures, and sensitivity training are off-the-job methods.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_096",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Leadership is BEST described as:",
    options: [
      "The process of influencing people to work willingly towards goal achievement",
      "Strict enforcement of rules",
      "Managing budgets and finances",
      "Monitoring employee performance",
    ],
    correctIndex: 0,
    explanation:
      "Leadership is the ability to influence and guide others towards achieving the organisational goals through inspiration rather than coercion.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_097",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'An "autocratic" leader:',
    options: [
      "Consults all employees before making decisions",
      "Makes all decisions themselves without consulting subordinates",
      "Delegates all authority to subordinates",
      "Has no formal authority",
    ],
    correctIndex: 1,
    explanation:
      "An autocratic leader centralises authority and makes unilateral decisions — directives go downward with little or no employee participation.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_098",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'A "Laissez-faire" leadership style is characterised by:',
    options: [
      "Total control by the leader",
      "Full freedom given to subordinates to make decisions with minimum intervention",
      "Democratic consultation at all times",
      "Strict enforcement of company policy",
    ],
    correctIndex: 1,
    explanation:
      "Laissez-faire (free-rein) leadership grants maximum autonomy to employees — the leader provides resources and support but interferes minimally.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_099",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Formal communication that travels between employees of the same hierarchical level is:",
    options: [
      "Downward communication",
      "Upward communication",
      "Lateral / Horizontal communication",
      "Diagonal communication",
    ],
    correctIndex: 2,
    explanation:
      "Lateral or horizontal communication flows between employees or departments at the same level — essential for coordination.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_100",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Grapevine" refers to:',
    options: [
      "A formal reporting system",
      "The informal communication network in an organisation",
      "A computer network",
      "A type of organisational chart",
    ],
    correctIndex: 1,
    explanation:
      "Grapevine is informal communication — unofficial channels of communication that carry information (often rumours) rapidly through the organisation.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_101",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'In Maslow\'s hierarchy, "Esteem Needs" include:',
    options: [
      "Food and sleep",
      "Job security and protection from hazards",
      "Self-respect, status, recognition, and prestige",
      "Belongingness and friendship",
    ],
    correctIndex: 2,
    explanation:
      "Esteem needs (fourth level) include self-esteem (confidence, achievement) and external esteem (recognition, respect from others).",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_102",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "Which of the following is an advantage of internal recruitment?",
    options: [
      "Fresh perspectives from outside",
      "No training required and employees are already familiar with the organisation",
      "Access to a larger talent pool",
      "Introduces new skills",
    ],
    correctIndex: 1,
    explanation:
      "Internal candidates already know the organisation's culture and processes, require less orientation, and their capabilities are known to management.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_103",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'A "Job Description" document contains:',
    options: [
      "Details about the candidate's qualifications",
      "Details about the job: title, duties, responsibilities, and working conditions",
      "The salary offered to the candidate",
      "Performance appraisal criteria",
    ],
    correctIndex: 1,
    explanation:
      "Job description specifies what the job involves — title, duties, responsibilities, relationships, and working conditions.",
    topic: "Staffing & Directing",
  },
  {
    id: "bst_104",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      'The concept of "Span of Control" directly affects which aspect of organisation design?',
    options: [
      "Salary structures",
      "The number of hierarchical levels — a wider span creates a flat structure",
      "Product pricing",
      "Supplier relationships",
    ],
    correctIndex: 1,
    explanation:
      "A wider span of control (more subordinates per manager) results in fewer levels — a flat organisation. A narrower span creates a tall, multi-level hierarchy.",
    topic: "Staffing & Directing",
    isPYQ: true,
  },
  {
    id: "bst_105",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Training differs from development in that training is:",
    options: [
      "Long-term and prepares for future roles",
      "Short-term and job-specific, focused on improving current performance",
      "Only for top executives",
      "Only delivered in classrooms",
    ],
    correctIndex: 1,
    explanation:
      "Training is short-term and focuses on improving specific skills for the current job. Development is a broader, long-term process preparing employees for future responsibilities.",
    topic: "Staffing & Directing",
  },

  // ─── Controlling (10 questions) ───────────────────────────────────────────
  {
    id: "bst_106",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "The FIRST step in the controlling process is:",
    options: [
      "Measuring actual performance",
      "Taking corrective action",
      "Setting performance standards",
      "Comparing performance against standards",
    ],
    correctIndex: 2,
    explanation:
      "Controlling starts with setting standards — benchmarks against which actual performance will be measured.",
    topic: "Controlling",
    isPYQ: true,
  },
  {
    id: "bst_107",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Critical Point Control" means:',
    options: [
      "Controlling every single activity in the organisation",
      "Focusing control on key factors that significantly affect overall performance",
      "Crisis management only",
      "Controlling the most profitable products",
    ],
    correctIndex: 1,
    explanation:
      "It is impractical to control everything — management focuses on critical/key result areas (CRAs) that have the greatest impact on goals.",
    topic: "Controlling",
  },
  {
    id: "bst_108",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'What is "Management by Exception" (MBE)?',
    options: [
      "Managing only the exceptional employees",
      "Paying attention only to significant deviations from standards, not routine variances",
      "A training method for senior managers",
      "Managing the exception cases in HR",
    ],
    correctIndex: 1,
    explanation:
      "MBE (Principle of Exception) states that managers should focus only on significant deviations from standards — minor variations can be ignored.",
    topic: "Controlling",
    isPYQ: true,
  },
  {
    id: "bst_109",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'Controlling and planning are described as "twins" or "inseparable" because:',
    options: [
      "Both require the same skills",
      "Planning sets the standards that controlling uses; deviations found in controlling feed back into planning",
      "They are both performed by the same manager",
      "Both functions cost money",
    ],
    correctIndex: 1,
    explanation:
      "Planning creates targets; controlling measures performance against them. Corrective information from controlling feeds back into revised plans — forming a continuous cycle.",
    topic: "Controlling",
  },
  {
    id: "bst_110",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      '"Management by Objectives" (MBO) as a control technique involves:',
    options: [
      "Only management setting goals with no employee input",
      "Joint goal-setting by managers and subordinates, followed by periodic review of progress",
      "Setting objectives only annually",
      "Objectives set by shareholders",
    ],
    correctIndex: 1,
    explanation:
      "MBO is participative — managers and subordinates together set objectives, individual roles are clarified, and progress is periodically reviewed to ensure alignment.",
    topic: "Controlling",
    isPYQ: true,
  },
  {
    id: "bst_111",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Budgetary Control" involves:',
    options: [
      "Preparing the annual budget only",
      "Establishing budgets, and continuously comparing actual figures with budgeted figures to control performance",
      "Controlling expenses in the finance department only",
      "Approving all expenditures by the Board",
    ],
    correctIndex: 1,
    explanation:
      "Budgetary control uses budgets as standards, then compares actual income/expenditure against these standards and takes action on variances.",
    topic: "Controlling",
  },
  {
    id: "bst_112",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "A limitation of controlling is:",
    options: [
      "It helps in achieving goals",
      "It may be difficult to set quantitative standards for qualitative activities",
      "It reduces wastage",
      "It motivates employees",
    ],
    correctIndex: 1,
    explanation:
      "Controlling is difficult for activities like employee morale, job satisfaction, and customer loyalty — these are qualitative and hard to measure precisely.",
    topic: "Controlling",
    isPYQ: true,
  },
  {
    id: "bst_113",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: '"Feed-forward control" refers to:',
    options: [
      "Control that occurs after the task is completed",
      "Anticipatory control that identifies and addresses potential problems before they occur",
      "Measuring results and reporting to top management",
      "Continuous monitoring during execution",
    ],
    correctIndex: 1,
    explanation:
      "Feed-forward (preventive) control monitors inputs and processes in advance to prevent problems from occurring — contrasted with feedback control which acts after the fact.",
    topic: "Controlling",
  },
  {
    id: "bst_114",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      'The step that follows "comparing actual performance with standards" in the controlling process is:',
    options: [
      "Setting new standards",
      "Recruiting new employees",
      "Analysing deviations and taking corrective action",
      "Reducing the budget",
    ],
    correctIndex: 2,
    explanation:
      "After comparing actual with planned, the manager analyses significant deviations and takes corrective action — the final step in the control cycle.",
    topic: "Controlling",
    isPYQ: true,
  },
  {
    id: "bst_115",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "An example of a quantitative performance standard is:",
    options: [
      "Improve employee morale",
      "Increase customer satisfaction",
      "Achieve sales of ₹10 lakhs per month",
      "Build a positive work culture",
    ],
    correctIndex: 2,
    explanation:
      "Quantitative standards are measurable numerical targets — ₹10 lakhs in sales is precise and measurable; the others are qualitative.",
    topic: "Controlling",
  },

  // ─── Financial Management & Markets (20 questions) ────────────────────────
  {
    id: "bst_116",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "The primary objective of financial management is:",
    options: [
      "Maximising sales revenue",
      "Wealth maximisation (maximising shareholder value)",
      "Maximising number of employees",
      "Minimising tax liability",
    ],
    correctIndex: 1,
    explanation:
      "The primary goal of financial management is wealth maximisation — maximising the market value of shares, which reflects long-term profitability and sustainability.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_117",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Capital Structure" refers to:',
    options: [
      "The physical layout of the office building",
      "The mix of long-term debt and equity used to finance the firm",
      "The organisation chart",
      "The number of shares issued",
    ],
    correctIndex: 1,
    explanation:
      "Capital structure is the proportion of debt (borrowed funds) and equity (owners' funds) used to finance a company's long-term assets.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_118",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "SEBI stands for:",
    options: [
      "Securities Exchange Board of India",
      "Stock Exchange Bureau of India",
      "Share Exchange Board of India",
      "Securities and Exchange Bank of India",
    ],
    correctIndex: 0,
    explanation:
      "SEBI — Securities and Exchange Board of India — was established in 1988 (statutory power 1992) to regulate the securities market and protect investors.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_119",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'A "Debenture" is best described as:',
    options: [
      "A certificate of ownership in a company",
      "A long-term debt instrument that carries a fixed rate of interest",
      "A short-term promissory note",
      "A type of preference share",
    ],
    correctIndex: 1,
    explanation:
      "A debenture is a long-term debt instrument — the holder is a creditor (not owner), receives fixed interest, and is repaid at maturity.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_120",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: '"Financial Leverage" or "Trading on Equity" refers to:',
    options: [
      "Using only equity to finance the business",
      "Increasing EPS by using debt (fixed-cost capital) to finance assets when ROI > interest rate",
      "Converting debt into equity shares",
      "Paying dividends from borrowed money",
    ],
    correctIndex: 1,
    explanation:
      "Financial leverage/trading on equity means using cheaper debt capital to amplify returns to equity shareholders — only works when return on investment exceeds the cost of debt.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_121",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "BSE stands for:",
    options: [
      "Bombay Stock Exchange",
      "British Stock Exchange",
      "Business Securities Exchange",
      "Broad Stock Exchange",
    ],
    correctIndex: 0,
    explanation:
      "BSE — Bombay Stock Exchange — is the oldest stock exchange in Asia, established in 1875.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_122",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'The "Primary Market" in capital markets deals with:',
    options: [
      "Trading of previously issued securities between investors",
      "Issue of new securities for the first time to raise fresh capital",
      "Government bond trading",
      "Foreign exchange transactions",
    ],
    correctIndex: 1,
    explanation:
      "The primary market is where companies issue new securities (via IPO, FPO, rights issue) directly to investors to raise capital — also called the New Issue Market.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_123",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'The "Secondary Market" (Stock Exchange) facilitates:',
    options: [
      "Fresh issue of shares to the public",
      "Trading of already issued/existing securities between investors",
      "Government borrowing",
      "Foreign direct investment",
    ],
    correctIndex: 1,
    explanation:
      "The secondary market provides liquidity by allowing investors to buy and sell previously issued securities — the company does not receive fresh capital here.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_124",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: "SEBI was given statutory powers under which Act?",
    options: [
      "Companies Act 1956",
      "SEBI Act 1992",
      "Securities Contract Regulation Act 1956",
      "Reserve Bank of India Act",
    ],
    correctIndex: 1,
    explanation:
      "SEBI was established in 1988 but gained full statutory powers through the SEBI Act 1992, making it an autonomous regulatory body.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_125",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Working Capital" is defined as:',
    options: [
      "Long-term funds used to purchase fixed assets",
      "The difference between current assets and current liabilities",
      "Total equity of the firm",
      "Funds raised from borrowing",
    ],
    correctIndex: 1,
    explanation:
      "Working capital = Current Assets − Current Liabilities. It represents the funds available for day-to-day operations.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_126",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Which of the following is a money market instrument?",
    options: [
      "Equity shares",
      "Debentures",
      "Treasury Bills",
      "Preference shares",
    ],
    correctIndex: 2,
    explanation:
      "Money markets deal in short-term instruments (up to 1 year). Treasury Bills, Commercial Paper, and Call Money are money market instruments.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_127",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: "NSEI (NSE) began operations in:",
    options: ["1875", "1948", "1994", "2000"],
    correctIndex: 2,
    explanation:
      "NSE (National Stock Exchange) began operations in 1994 and quickly became India's largest stock exchange by trading volume.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_128",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: 'An "Initial Public Offering" (IPO) is when:',
    options: [
      "A company buys back its own shares",
      "A company offers its shares to the public for the first time",
      "Shares are traded on the stock exchange between existing holders",
      "The government issues bonds",
    ],
    correctIndex: 1,
    explanation:
      "An IPO is the first time a private company issues shares to the general public to raise capital — transitioning from private to public ownership.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_129",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question:
      "Preference shares differ from equity shares in that preference shareholders:",
    options: [
      "Have voting rights",
      "Receive dividends at a fixed rate before equity shareholders",
      "Get more voting power than equity holders",
      "Do not have any claim on company assets",
    ],
    correctIndex: 1,
    explanation:
      "Preference shareholders receive dividends at a predetermined fixed rate and have prior claim on assets in liquidation — but typically have no voting rights.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_130",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'The "Dividend Decision" in financial management refers to:',
    options: [
      "Whether to issue new shares",
      "How much of earnings to distribute as dividends versus retain in the business",
      "How to minimise tax on dividends",
      "The timing of issuing bonus shares",
    ],
    correctIndex: 1,
    explanation:
      "The dividend decision determines what portion of net earnings is paid out to shareholders (dividend) and what is ploughed back (retained earnings) for reinvestment.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_131",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "Fixed capital refers to funds invested in:",
    options: [
      "Stock/inventory and debtors",
      "Long-term assets like plant, machinery, and land",
      "Short-term borrowings",
      "Cash and bank balances",
    ],
    correctIndex: 1,
    explanation:
      "Fixed capital is invested in long-term, non-current assets (plant, equipment, buildings) that remain in use over many accounting periods.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_132",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'A "Commercial Paper" is a money market instrument issued by:',
    options: [
      "The Reserve Bank of India",
      "The Government of India",
      "Large creditworthy corporations for short-term funding",
      "Commercial banks for deposits",
    ],
    correctIndex: 2,
    explanation:
      "Commercial Paper is an unsecured short-term promissory note issued by large, creditworthy companies to meet short-term obligations.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_133",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: 'The "Sensex" is the index of:',
    options: [
      "NSE's top 50 companies",
      "BSE's 30 most actively traded stocks representing various sectors",
      "Foreign exchange rates",
      "Government bond prices",
    ],
    correctIndex: 1,
    explanation:
      "Sensex (Sensitive Index) tracks 30 large, well-established, financially sound companies listed on BSE across key sectors.",
    topic: "Financial Management & Markets",
  },
  {
    id: "bst_134",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: "SEBI's main objective is to:",
    options: [
      "Manage the foreign exchange reserves of India",
      "Regulate and protect investor interests in the securities market",
      "Provide loans to small businesses",
      "Control banking operations",
    ],
    correctIndex: 1,
    explanation:
      "SEBI's primary objectives are to protect investor interests, promote development of the securities market, and regulate its operations.",
    topic: "Financial Management & Markets",
    isPYQ: true,
  },
  {
    id: "bst_135",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Nifty 50" is the index of which stock exchange?',
    options: ["BSE", "MCX", "NSE", "SEBI"],
    correctIndex: 2,
    explanation:
      "Nifty 50 is NSE's benchmark index tracking 50 large-cap stocks representing key sectors of the Indian economy.",
    topic: "Financial Management & Markets",
  },

  // ─── Marketing & Consumer Protection (15 questions) ──────────────────────
  {
    id: "bst_136",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: 'The "4 Ps" of the marketing mix are:',
    options: [
      "Price, People, Place, Promotion",
      "Product, Price, Place, Promotion",
      "Product, Profit, Place, Publicity",
      "Plan, Product, Place, Promotion",
    ],
    correctIndex: 1,
    explanation:
      "The 4 Ps of the marketing mix are Product, Price, Place (distribution), and Promotion — the key decision areas for any marketer.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_137",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Branding" in marketing means:',
    options: [
      "Burning a logo on products",
      "Giving a name, sign, or symbol to identify a product and differentiate it from competitors",
      "Packaging a product attractively",
      "Setting the price of a product",
    ],
    correctIndex: 1,
    explanation:
      "Branding assigns a unique name, mark, or design to a product to distinguish it from competitors and build consumer recognition and loyalty.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_138",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "COPRA stands for:",
    options: [
      "Consumer Ownership Protection Rights Act",
      "Consumer Protection Act",
      "Commercial Practice Regulation Act",
      "Consumer Organisation Protection and Redressal Act",
    ],
    correctIndex: 1,
    explanation:
      "COPRA — Consumer Protection Act (originally 1986, updated 2019) — is the principal legislation protecting consumer rights in India.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_139",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Under the Consumer Protection Act 2019, a complaint can be filed at the District Commission if the value of goods/services does NOT exceed:",
    options: ["₹20 lakhs", "₹1 crore", "₹10 lakhs", "₹50 lakhs"],
    correctIndex: 1,
    explanation:
      "Under the CPA 2019, District Commissions have jurisdiction over complaints where the value of goods/services does not exceed ₹1 crore.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_140",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: "How many rights are recognised for consumers under COPRA?",
    options: ["4", "5", "6", "8"],
    correctIndex: 2,
    explanation:
      "COPRA recognises 6 consumer rights: Safety, Information, Choice, Representation/Hearing, Redressal, and Consumer Education.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_141",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question:
      "The three tiers of consumer dispute redressal under COPRA 2019 are:",
    options: [
      "Village, District, State",
      "District Commission, State Commission, National Commission",
      "Tehsil, District, High Court",
      "Consumer Forum, High Court, Supreme Court",
    ],
    correctIndex: 1,
    explanation:
      "The three-tier structure is: District Commission → State Commission → National Commission, with jurisdiction based on the value of the claim.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_142",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Promotion" in the marketing mix includes all EXCEPT:',
    options: [
      "Advertising",
      "Personal selling",
      "Sales promotion",
      "Product design",
    ],
    correctIndex: 3,
    explanation:
      "Promotion covers communication activities — advertising, personal selling, sales promotion, and public relations. Product design is part of the Product element, not Promotion.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_143",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Channels of Distribution" refer to:',
    options: [
      "The advertising media used",
      "The route through which goods pass from producer to final consumer",
      "The pricing strategy",
      "The after-sales service network",
    ],
    correctIndex: 1,
    explanation:
      "Distribution channels are the intermediary paths (agents, wholesalers, retailers) through which products flow from producer to consumer.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_144",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question: '"Right to Safety" as a consumer right means:',
    options: [
      "The right to get compensation for all product defects",
      "Protection against goods and services hazardous to life and property",
      "The right to choose any product",
      "The right to be informed about product quality",
    ],
    correctIndex: 1,
    explanation:
      "Right to Safety protects consumers from marketing of goods and services that are hazardous to their health and safety.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_145",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: '"Marketing" in its modern sense means:',
    options: [
      "Selling products to as many customers as possible",
      "Identifying and satisfying customer needs profitably through the exchange process",
      "Advertising and promotion of products",
      "Distributing goods to retailers",
    ],
    correctIndex: 1,
    explanation:
      "Modern marketing is a comprehensive process of identifying consumer needs, developing products to satisfy them, pricing, distributing, and promoting profitably.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_146",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Labelling" on a product serves to:',
    options: [
      "Increase the cost of the product",
      "Provide information about the product, identify it, and grade it",
      "Make the product heavier",
      "Replace the need for advertising",
    ],
    correctIndex: 1,
    explanation:
      "Labels identify the product, describe it, grade it, and provide legally required information (ingredients, MRP, expiry) to the consumer.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_147",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "A complaint can be filed by a consumer against which of the following?",
    options: [
      "Only manufacturers",
      "Manufacturers, service providers, and sellers for defects/deficiency",
      "Only retailers",
      "Only online sellers",
    ],
    correctIndex: 1,
    explanation:
      "Under COPRA, complaints can be filed against manufacturers, traders, and service providers for defective goods or deficient services.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_148",
    subject: "BusinessStudies",
    difficulty: "Hard",
    question: '"Price" in the marketing mix is unique because:',
    options: [
      "It costs nothing to change",
      "It is the only element that generates revenue; all other Ps are costs",
      "It never affects demand",
      "It is set entirely by the government",
    ],
    correctIndex: 1,
    explanation:
      "Price is the only revenue-generating P — Product, Place, and Promotion all represent costs. Price directly affects profitability and competitive positioning.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
  {
    id: "bst_149",
    subject: "BusinessStudies",
    difficulty: "Easy",
    question: '"Sales Promotion" activities include all EXCEPT:',
    options: [
      "Free samples",
      "Buy one get one free offers",
      "Coupons and discounts",
      "Press conferences for journalists",
    ],
    correctIndex: 3,
    explanation:
      "Press conferences for journalists are a public relations activity. Sales promotion includes short-term incentives like samples, contests, BOGOF, and coupons to boost sales.",
    topic: "Marketing & Consumer Protection",
  },
  {
    id: "bst_150",
    subject: "BusinessStudies",
    difficulty: "Medium",
    question:
      "Consumer Protection Act 2019 introduced which new feature over the 1986 Act?",
    options: [
      "Removed District Forums",
      "Introduced e-commerce consumer protection and a Central Consumer Protection Authority (CCPA)",
      "Reduced compensation limits",
      "Removed the three-tier structure",
    ],
    correctIndex: 1,
    explanation:
      "CPA 2019 extended protection to e-commerce consumers and established the CCPA to promote, protect, and enforce consumer rights — a major update over the 1986 Act.",
    topic: "Marketing & Consumer Protection",
    isPYQ: true,
  },
];
