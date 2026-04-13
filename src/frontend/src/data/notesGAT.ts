import type { NoteItem } from "../types/index";

export const gatNotes: NoteItem[] = [
  {
    id: "note_gat_001",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Number System and Number Theory",
    difficulty: "Medium",
    content: `NUMBER SYSTEM — CUET GAT COMPLETE GUIDE

TYPES OF NUMBERS:
• Natural Numbers (N): 1, 2, 3, 4, ... (counting numbers, no zero)
• Whole Numbers (W): 0, 1, 2, 3, ... (natural numbers + zero)
• Integers (Z): ..., -3, -2, -1, 0, 1, 2, 3, ... (positive, negative, zero)
• Rational Numbers (Q): p/q form where q ≠ 0. Example: 1/2, 3/4, 0.25, 0.333...
• Irrational Numbers: Cannot be expressed as p/q. Example: √2, √3, π, e
• Real Numbers (R): All rational + irrational numbers combined

Key: Every natural number is whole, every whole is integer, every integer is rational, every rational is real.

HCF (Highest Common Factor) — METHODS:
Method 1 – Prime Factorisation: Find all prime factors of each number, multiply COMMON factors with LOWEST powers.
Example: HCF(12, 18) = HCF(2²×3, 2×3²) = 2¹×3¹ = 6

Method 2 – Division Method (Euclid): Divide larger by smaller, then divide previous divisor by remainder. Repeat until remainder = 0. Last divisor = HCF.
Example: HCF(48, 36) → 48 = 1×36 + 12 → 36 = 3×12 + 0 → HCF = 12

LCM (Lowest Common Multiple):
Prime Factorisation method: Multiply ALL prime factors with HIGHEST powers.
Example: LCM(12, 18) = LCM(2²×3, 2×3²) = 2²×3² = 36

GOLDEN FORMULA: HCF × LCM = Product of the two numbers
Verification: 6 × 36 = 12 × 18 → 216 = 216 ✓

DIVISIBILITY RULES (Must memorise):
• ÷2: Last digit is even (0,2,4,6,8)
• ÷3: Sum of digits divisible by 3. Example: 123 → 1+2+3=6, divisible by 3 ✓
• ÷4: Last two digits divisible by 4. Example: 1324 → 24÷4=6 ✓
• ÷5: Last digit is 0 or 5
• ÷6: Divisible by both 2 and 3
• ÷7: Double last digit, subtract from remaining number, result divisible by 7. Example: 161 → 16-(2×1)=14, divisible by 7 ✓
• ÷8: Last three digits divisible by 8
• ÷9: Sum of digits divisible by 9
• ÷10: Last digit is 0
• ÷11: Alternating sum (odd positions - even positions) divisible by 11. Example: 1331 → (1+3)-(3+1)=0 ✓

UNIT DIGIT CALCULATIONS:
For aⁿ, unit digit follows cyclicity:
• Powers of 2: 2→4→8→6→2 (cycle of 4)
• Powers of 3: 3→9→7→1→3 (cycle of 4)
• Powers of 4: 4→6→4→6 (cycle of 2: even power=6, odd=4)
• Powers of 5: always 5
• Powers of 6: always 6
• Powers of 7: 7→9→3→1→7 (cycle of 4)
• Powers of 8: 8→4→2→6→8 (cycle of 4)
• Powers of 9: 9→1→9→1 (cycle of 2: even=1, odd=9)
Trick: For cycles of 4, divide exponent by 4 and use remainder (if remainder=0, use the 4th value).

REMAINDER THEOREM:
Remainder of (aⁿ)/m — use Euler's theorem and cyclicity.
Example: Remainder of 7²³/4 → 7≡3(mod4) → 3²³/4 → cycle of 3: 3¹=3, 3²=1, cycle=2 → 23 is odd → remainder = 3

WORKED EXAMPLES:
Q: HCF and LCM of 72 and 120?
→ 72 = 2³×3², 120 = 2³×3×5
→ HCF = 2³×3 = 24, LCM = 2³×3²×5 = 360
→ Check: 24×360 = 8640 = 72×120 ✓

Q: Unit digit of 3⁴⁷?
→ Cycle of 3 is 4. 47÷4 = 11 remainder 3. 3rd in cycle = 7. Answer: 7

Q: Find the smallest number divisible by 12, 15, 20, and 35.
→ LCM(12,15,20,35) = LCM using prime factors = 2²×3×5×7 = 420`,
    keyPoints: [
      "HCF × LCM = Product of two numbers — always verify with this formula",
      "Divisibility by 3 and 9: sum of digits test — fastest method in exams",
      "Unit digit cyclicity: cycle of 4 for 2,3,7,8; cycle of 2 for 4,9; constant for 5,6",
      "For HCF use common factors with lowest powers, for LCM use all factors with highest powers",
      "Euclid's division lemma: a = bq + r, where 0 ≤ r < b",
      "Composite numbers have more than 2 factors; 1 is neither prime nor composite",
      "Co-prime numbers: HCF = 1 (not necessarily both prime)",
    ],
    tags: [
      "numbers",
      "HCF",
      "LCM",
      "divisibility",
      "unit digit",
      "remainder",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_002",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Percentage, Profit and Loss",
    difficulty: "Medium",
    content: `PERCENTAGE — CORE FORMULAS

BASIC PERCENTAGE:
Percentage = (Part / Whole) × 100
Part = (Percentage × Whole) / 100
Whole = (Part × 100) / Percentage

% Change = [(New Value - Old Value) / Old Value] × 100
If positive → % increase; if negative → % decrease

FRACTION-PERCENTAGE CONVERSIONS (memorise these!):
1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%
1/6 = 16.67%, 1/7 ≈ 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/10 = 10%
1/11 ≈ 9.09%, 1/12 = 8.33%, 1/15 = 6.67%, 1/20 = 5%

SUCCESSIVE PERCENTAGE CHANGE SHORTCUT:
Two successive changes of a% and b%: Net effect = a + b + ab/100
Example: Price increases 20% then decreases 10%:
Net = 20 + (-10) + (20×-10)/100 = 20 - 10 - 2 = 8% net increase

Three successive changes: Apply formula twice.

PROFIT AND LOSS:
CP = Cost Price, SP = Selling Price, MP = Marked Price
Profit = SP - CP (when SP > CP)
Loss = CP - SP (when CP > SP)

Profit% = (Profit / CP) × 100
Loss% = (Loss / CP) × 100

SP = CP × (100 + P%) / 100 [for profit]
SP = CP × (100 - L%) / 100 [for loss]
CP = SP × 100 / (100 + P%) [for profit]
CP = SP × 100 / (100 - L%) [for loss]

MARKED PRICE AND DISCOUNT:
Discount = MP - SP
Discount% = (Discount / MP) × 100
SP = MP × (100 - Discount%) / 100

Combined Profit% when bought at discount d% and profit p%:
Actual profit% on CP = [(100-d+p)/(100-d) - 1] × 100

DISHONEST DEALER SHORTCUT:
If a dealer uses false weight and claims to sell at CP:
Gain% = (True Weight - False Weight) / False Weight × 100
Example: Dealer uses 900g weight instead of 1000g:
Gain% = (1000-900)/900 × 100 = 11.11%

FALSE WEIGHT WITH PROFIT:
If dealer claims x% profit but uses false weight:
Actual gain% = [(100+x) × True weight / False weight] - 100

TWO ITEMS PROBLEM:
Item 1 sold at a% profit, Item 2 at a% loss (same selling price):
Always results in LOSS = (a/10)² % of total CP
Example: Both articles sold at 20% profit and 20% loss → net loss = 4% of CP

WORKED EXAMPLES:
Q: A shopkeeper marks goods 25% above CP and gives 10% discount. Find profit%.
→ Let CP = 100, MP = 125, SP = 125×90/100 = 112.5
→ Profit% = 12.5%

Q: Successive discounts of 20% and 25%:
→ Net discount = 20 + 25 - (20×25)/100 = 45 - 5 = 40%
→ Final SP = 60% of MP

Q: If CP = ₹480 and SP = ₹600, find profit%.
→ Profit = 120, Profit% = (120/480)×100 = 25%

Q: A TV bought for ₹15000 and sold at 12% loss. Find SP.
→ SP = 15000 × 88/100 = ₹13200

PERCENTAGE POINT vs PERCENTAGE:
If interest rate changes from 8% to 12%: it increased by 4 percentage points but by 50% in percentage terms.`,
    keyPoints: [
      "Successive % change formula: a + b + ab/100 — saves time vs step-by-step calculation",
      "SP = CP(100±P%)/100 — most used formula, memorise both variants",
      "Dishonest dealer gain% = (Error in weight / False weight) × 100",
      "Same % profit and loss on SAME SP → always a net loss = (a²/100)%",
      "Discount% is always calculated on MP, not CP",
      "Two successive discounts of 20% and 30% ≠ 50%; use net formula: 44%",
      "Profit% and loss% are ALWAYS on CP, never on SP",
    ],
    tags: [
      "percentage",
      "profit",
      "loss",
      "discount",
      "marked price",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_003",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Ratio, Proportion and Mixture",
    difficulty: "Medium",
    content: `RATIO — FUNDAMENTALS

A ratio a:b represents the relationship between two quantities.
• Equivalent ratios: a:b = ka:kb for any k ≠ 0
• Compound ratio: (a:b) and (c:d) → compound ratio = ac:bd
• Duplicate ratio of a:b = a²:b²
• Sub-duplicate ratio of a:b = √a:√b
• Triplicate ratio of a:b = a³:b³
• Sub-triplicate ratio of a:b = ∛a:∛b
• Inverse ratio of a:b = b:a

Dividing a quantity in ratio a:b:
• First part = Total × a/(a+b)
• Second part = Total × b/(a+b)
Example: Divide ₹2400 in ratio 3:5 → ₹900 and ₹1500

PROPORTION:
a:b = c:d is a proportion → a/b = c/d → ad = bc (cross multiplication rule)
• a and d are EXTREMES; b and c are MEANS
• Product of extremes = Product of means: ad = bc

Types of proportion:
• Continued proportion: a:b = b:c → b² = ac (b is mean proportional)
• Fourth proportional: a:b = c:x → x = bc/a
• Third proportional: a:b = b:x → x = b²/a
• Mean proportional between a and b = √(ab)

COMPONENDO-DIVIDENDO RULE:
If a/b = c/d, then:
(a+b)/(a-b) = (c+d)/(c-d)
This is extremely useful in CUET — saves multiple steps.

ALLIGATION / MIXTURE:
Visual alligation rule diagram:
Cheaper (c) ........ Mean price (m) ........ Dearer (d)

Cheaper quantity / Dearer quantity = (d - m) / (m - c)

Steps: 1) Write cheaper cost on left, dearer on right, mean price in middle
       2) Cross subtract: (dearer - mean) and (mean - cheaper)
       3) Ratio = (d-m) : (m-c)

Example: Milk at ₹20/L and water (₹0) mixed to give mixture at ₹16/L.
→ Milk:Water = (16-0):(20-16) = 16:4 = 4:1
→ To get 50L of mixture at ₹16: Milk = 40L, Water = 10L

VESSEL PROBLEMS (Replacement):
If a vessel has x litres of liquid A, n litres removed and replaced with liquid B (done k times):
Amount of A remaining = x × [(x-n)/x]^k

Example: 40L milk vessel, 10L replaced with water twice:
→ Milk = 40 × (30/40)² = 40 × 9/16 = 22.5L

PARTNERS AND INVESTMENT:
If A invests ₹a for t₁ months and B invests ₹b for t₂ months:
Profit ratio = a×t₁ : b×t₂

WORKED EXAMPLES:
Q: A mixture of 40L contains milk and water in ratio 7:3. How much water to add to make ratio 7:5?
→ Milk = 28L, Water = 12L. New water = w+12, Milk unchanged = 28.
→ 28/(w+12) = 7/5 → 140 = 84 + 7w → w = 8L. Add 8L water.

Q: Alligation — In what ratio must rice at ₹80/kg be mixed with rice at ₹120/kg to get ₹100/kg?
→ (120-100):(100-80) = 20:20 = 1:1

Q: If 2:3 = 4:x, find x.
→ 2x = 12 → x = 6`,
    keyPoints: [
      "Alligation rule: cheaper:dearer = (d-m):(m-c) — draw the cross diagram for clarity",
      "Componendo-Dividendo: if a/b=c/d then (a+b)/(a-b)=(c+d)/(c-d)",
      "Replacement formula: A remaining = x × [(x-n)/x]^k after k replacements",
      "Mean proportional between a and b = √(ab)",
      "Profit sharing ratio = Capital × Time for each partner",
      "Duplicate ratio of a:b = a²:b², sub-duplicate = √a:√b",
      "In proportion ad = bc (product of extremes = product of means)",
    ],
    tags: [
      "ratio",
      "proportion",
      "mixture",
      "alligation",
      "vessel problems",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_004",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Time, Work and Pipes",
    difficulty: "Medium",
    content: `TIME AND WORK — COMPLETE GUIDE

BASIC FORMULAS:
• If A can do a work in n days → A's 1-day work = 1/n
• Total Work = Efficiency × Time
• If A takes 'a' days and B takes 'b' days working alone:
  Together they complete in = ab/(a+b) days
  Their combined 1-day work = 1/a + 1/b = (a+b)/ab

LCM METHOD (Fastest for CUET):
1) Take LCM of all given days as Total Work units
2) Find individual daily work rates
3) Add rates for combined workers
4) Time = Total Work / Combined rate

Example: A can do in 12 days, B in 15 days. Find time working together.
LCM(12,15) = 60 units
A's rate = 60/12 = 5 units/day
B's rate = 60/15 = 4 units/day
Combined = 9 units/day
Time = 60/9 = 6⅔ days = 6 days 16 hours

WORK DONE BY A ALONE AFTER B LEAVES:
If A and B work together for t days, then B leaves, A finishes alone:
Work done in t days together = t × (1/a + 1/b)
Remaining work = 1 - [t × (1/a + 1/b)]
A's additional time = Remaining work / (1/a)

NEGATIVE WORK (Opposing):
If A builds a wall in 'a' days and B demolishes in 'b' days:
Net work per day = 1/a - 1/b
If 1/a > 1/b → net building happens
Time to complete = 1 / (1/a - 1/b)

PIPES AND CISTERNS:
• Inlet pipe fills in 'a' hours → work rate = +1/a per hour
• Outlet pipe empties in 'b' hours → work rate = -1/b per hour
• Net rate = 1/a - 1/b
• Cistern fills in = ab/(b-a) hours (when b > a for filling)

Example: Pipe A fills in 6 hours, Pipe B empties in 10 hours. Both open:
Net = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15 per hour
Time to fill = 15 hours

CISTERN HALF FULL:
If cistern is half full and an inlet and outlet are opened, time to empty/fill depends on net rate.

WORK AND WAGES:
Wages are distributed in the ratio of work done (rate × time).
If A works 'a' days and B works 'b' days for the same daily wages:
A:B wages = a:b

If different efficiencies (A twice as efficient as B):
A:B wage ratio = (2×days_A) : (1×days_B)

VARIATION IN WORKERS:
• M₁ × D₁ = M₂ × D₂ (when amount of work is same)
• M₁ × D₁ × H₁ / W₁ = M₂ × D₂ × H₂ / W₂ (general formula)
  where M=men, D=days, H=hours/day, W=work

WORKED EXAMPLES:
Q: A can do a work in 20 days, B in 30 days. Both start together but A leaves 5 days before completion. In how many days is work completed?
Let total days = d. Both work for (d-5) days, B works for d days.
(d-5)/20 + d/30 = 1
3(d-5) + 2d = 60
5d = 75, d = 15 days

Q: Two pipes fill a tank in 15 min and 20 min. Third pipe empties it in 30 min. All three open simultaneously. In what time will tank be filled?
Net rate = 1/15 + 1/20 - 1/30 = 4/60 + 3/60 - 2/60 = 5/60 = 1/12
Time = 12 minutes

Q: 10 men complete a work in 8 days. How many men needed to complete same work in 5 days?
M₁×D₁ = M₂×D₂ → 10×8 = M₂×5 → M₂ = 16 men`,
    keyPoints: [
      "LCM method: set Total Work = LCM of days, compute unit rates, add them",
      "Combined time for A and B = ab/(a+b) — standard formula",
      "Negative work: net rate = filling rate - emptying rate",
      "M₁D₁H₁/W₁ = M₂D₂H₂/W₂ — the work equivalence formula",
      "Wages split in ratio of work done = rate × time for each person",
      "Pipes: inlet = positive rate, outlet = negative rate",
      "If A leaves early, set up equation with A's partial + B's full time = 1",
    ],
    tags: [
      "time",
      "work",
      "pipes",
      "cisterns",
      "efficiency",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_005",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Time, Speed and Distance",
    difficulty: "Medium",
    content: `TIME, SPEED AND DISTANCE — COMPLETE GUIDE

BASIC FORMULA:
Distance = Speed × Time
Speed = Distance / Time
Time = Distance / Speed

UNIT CONVERSIONS (Very important):
km/hr → m/s: Multiply by 5/18
m/s → km/hr: Multiply by 18/5
Example: 72 km/hr = 72 × 5/18 = 20 m/s
Example: 25 m/s = 25 × 18/5 = 90 km/hr

RELATIVE SPEED:
• Same direction: Relative speed = |S₁ - S₂| (subtract)
• Opposite direction: Relative speed = S₁ + S₂ (add)
Time to meet = Distance between them / Relative speed

TRAIN PROBLEMS:
• Train crossing a pole or person: Distance = Length of train
• Train crossing a platform/bridge: Distance = Length of train + Length of platform
• Two trains crossing each other:
  - Opposite direction: Distance = L₁+L₂, Speed = S₁+S₂
  - Same direction: Distance = L₁+L₂, Speed = S₁-S₂

Example: Train 200m long at 72 km/hr crosses a platform 300m long.
Convert: 72 km/hr = 20 m/s
Time = (200+300)/20 = 25 seconds

BOAT AND STREAM:
• u = speed of boat in still water, v = speed of current/stream
• Downstream speed = u + v (stream helps)
• Upstream speed = u - v (stream opposes)
• u = (Downstream + Upstream) / 2
• v = (Downstream - Upstream) / 2

Example: Downstream speed = 18 km/hr, Upstream = 12 km/hr
Boat speed = (18+12)/2 = 15 km/hr, Stream speed = (18-12)/2 = 3 km/hr

AVERAGE SPEED:
• When DISTANCE is equal for each segment: Average speed = 2ab/(a+b) (harmonic mean)
• When TIME is equal for each segment: Average speed = (a+b)/2 (arithmetic mean)

NEVER add speeds and divide by 2 when distance is equal — this is a trap question!
Example: Journey of 100km at 40 km/hr and return at 60 km/hr:
Average speed = 2×40×60/(40+60) = 4800/100 = 48 km/hr (NOT 50)

CIRCULAR TRACK PROBLEMS:
• Two people A and B on a circular track of length L:
  Same direction → Time to meet = L / |Sa - Sb|
  Opposite direction → Time to meet = L / (Sa + Sb)
• Three people: Find pairwise meeting times, then LCM of those times = all three meet time

CATCHUP PROBLEMS:
A starts at speed Sa, B starts t hours later at speed Sb (Sb > Sa):
Time for B to catch A = Sa × t / (Sb - Sa)

WORKED EXAMPLES:
Q: A thief runs at 10 km/hr. Police start 15 min later at 15 km/hr. When will police catch thief?
Head start of thief = 10 × (15/60) = 2.5 km
Time = 2.5 / (15-10) = 0.5 hours = 30 minutes after police start

Q: A man rows 16 km downstream and 8 km upstream in 4 hours each. Find speed of stream.
Downstream speed = 16/4 = 4 km/hr; Upstream = 8/4 = 2 km/hr
Stream speed = (4-2)/2 = 1 km/hr

Q: Two trains 250m and 200m long approach at 72 km/hr and 54 km/hr. Time to cross?
Relative speed = 72+54 = 126 km/hr = 126×5/18 = 35 m/s
Time = (250+200)/35 = 450/35 ≈ 12.86 seconds`,
    keyPoints: [
      "km/hr to m/s: multiply by 5/18; m/s to km/hr: multiply by 18/5",
      "Same direction: relative speed = difference; Opposite: relative speed = sum",
      "Average speed for equal distances = 2ab/(a+b) — harmonic mean, NOT arithmetic",
      "Boat downstream = u+v, upstream = u-v; boat speed = (D+U)/2, stream = (D-U)/2",
      "Train crossing platform: distance = train length + platform length",
      "Circular track same direction: meet time = Length / speed difference",
      "Catchup time = Head start distance / (Chaser speed - Runaway speed)",
    ],
    tags: [
      "speed",
      "distance",
      "time",
      "trains",
      "boats",
      "streams",
      "circular track",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_006",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Simple Interest and Compound Interest",
    difficulty: "Medium",
    content: `SIMPLE INTEREST AND COMPOUND INTEREST — COMPLETE GUIDE

SIMPLE INTEREST (SI):
SI = (P × R × T) / 100
A = P + SI = P(1 + RT/100)
Where: P = Principal, R = Rate% per annum, T = Time in years

Finding unknowns:
P = (SI × 100) / (R × T)
R = (SI × 100) / (P × T)
T = (SI × 100) / (P × R)

COMPOUND INTEREST (CI):
A = P × (1 + R/100)ⁿ
CI = A - P = P[(1 + R/100)ⁿ - 1]
Where n = number of compounding periods

COMPOUNDING FREQUENCY:
• Annually: A = P(1 + R/100)ⁿ
• Half-yearly: A = P(1 + R/200)²ⁿ (rate halved, periods doubled)
• Quarterly: A = P(1 + R/400)⁴ⁿ (rate quartered, periods quadrupled)
• Monthly: A = P(1 + R/1200)¹²ⁿ

Example: ₹5000 at 10% for 2 years compounded half-yearly:
A = 5000 × (1 + 10/200)⁴ = 5000 × (1.05)⁴ = 5000 × 1.2155 = ₹6077.5

DIFFERENCE BETWEEN CI AND SI:
For 2 years: CI - SI = P(R/100)²
For 3 years: CI - SI = P(R/100)²(3 + R/100) = SI × (R/100) × (3 + R/100)/3... 
Simplified: CI - SI (3 years) = P(R/100)²(R/100 + 3)

Example: P=₹1000, R=5%, T=2 years
SI = 1000×5×2/100 = ₹100
CI = 1000[(1.05)² - 1] = 1000×0.1025 = ₹102.5
Difference = 2.5 = 1000×(5/100)² = 1000×0.0025 ✓

EFFECTIVE ANNUAL RATE:
When compounding is more frequent, effective rate > nominal rate.
Effective rate = [(1 + R/n)ⁿ - 1] × 100
where n = number of compounding periods per year

POPULATION GROWTH AND DECAY:
Population after n years = P₀ × (1 + r/100)ⁿ (growth)
Population after n years = P₀ × (1 - r/100)ⁿ (decay)

Example: Town has 20,000 people. Population grows at 5% per year. After 2 years:
= 20000 × (1.05)² = 20000 × 1.1025 = 22,050

DEPRECIATION:
Value after n years = P × (1 - r/100)ⁿ
Example: Machine worth ₹80,000 depreciates at 10% annually. Value after 3 years:
= 80000 × (0.9)³ = 80000 × 0.729 = ₹58,320

IMPORTANT SHORTCUTS:
• Sum doubles in n years at SI: n = 100/R
• Sum doubles in n years at CI: use rule of 72: n ≈ 72/R
• At R=10% CI, money doubles in approximately 7.2 years

AMOUNT TABLE FOR QUICK REFERENCE (R=10%):
n=1: A = 1.1P, CI = 0.1P
n=2: A = 1.21P, CI = 0.21P
n=3: A = 1.331P, CI = 0.331P

WORKED EXAMPLES:
Q: At what rate will ₹2500 amount to ₹3600 in 2 years at CI?
3600 = 2500(1+R/100)²
(1+R/100)² = 1.44
1+R/100 = 1.2
R = 20%

Q: What is CI on ₹8000 for 3/2 years at 10% p.a. compounded half-yearly?
A = 8000(1+10/200)³ = 8000(1.05)³ = 8000×1.157625 = ₹9261
CI = 9261-8000 = ₹1261

Q: SI on a sum for 3 years at 12% is ₹5400. Find the sum.
P = (5400×100)/(12×3) = ₹15,000`,
    keyPoints: [
      "SI = PRT/100; CI = P[(1+R/100)ⁿ - 1] — two core formulas",
      "CI - SI for 2 years = P(R/100)² — saves all calculation",
      "Half-yearly: rate ÷ 2, years × 2; Quarterly: rate ÷ 4, years × 4",
      "Rule of 72: money doubles in 72/R years at compound interest",
      "Depreciation: multiply by (1 - r/100)ⁿ, population growth by (1 + r/100)ⁿ",
      "Effective annual rate > nominal rate when compounding is more frequent",
      "SI doubles in 100/R years; easily derivable from SI formula",
    ],
    tags: [
      "simple interest",
      "compound interest",
      "CI",
      "SI",
      "depreciation",
      "population growth",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_007",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "Average, Mean, Median and Mode",
    difficulty: "Easy",
    content: `AVERAGE AND MEASURES OF CENTRAL TENDENCY — COMPLETE GUIDE

ARITHMETIC AVERAGE (Mean):
Average = Sum of all values / Number of values
Sum = Average × Number of values
Number = Sum / Average

WEIGHTED AVERAGE:
When items have different frequencies/weights:
Weighted Average = Σ(wᵢ × xᵢ) / Σwᵢ
Example: Average marks of 30 students = 60, and 20 students = 70:
Overall avg = (30×60 + 20×70)/(30+20) = (1800+1400)/50 = 3200/50 = 64

EFFECT OF ADDING/REMOVING A NUMBER:
If a new number x is added to a group of n numbers with avg A:
New avg = (nA + x) / (n+1)

If a number x is removed:
New avg = (nA - x) / (n-1)

If avg of n numbers is A and all are increased by k:
New avg = A + k

AGE-BASED PROBLEMS (Very common in CUET):
If avg age of group increases by k years after y years:
Each person ages by y years, so avg also increases by y.
"4 years ago, avg was X" → Current avg = X + 4

DEVIATION METHOD (Shortcut):
Choose a base value near the mean. Find deviations, compute avg of deviations, add to base.
Example: Find avg of 78, 82, 86, 91, 83. Base = 80.
Deviations: -2, 2, 6, 11, 3. Sum = 20. Avg deviation = 4.
Actual avg = 80 + 4 = 84.

ARITHMETIC MEAN (AM), GEOMETRIC MEAN (GM), HARMONIC MEAN (HM):
AM = (a + b) / 2
GM = √(ab)
HM = 2ab / (a + b)

Relationship: AM ≥ GM ≥ HM (for positive numbers)
AM × HM = GM² → HM = GM²/AM

When to use which:
• AM: simple averaging of values
• GM: growth rates, ratios, percentages
• HM: speeds, rates (time × rate = distance type problems)

MEDIAN:
Arrange data in ascending/descending order.
• Odd count (n): Median = [(n+1)/2]th term
• Even count (n): Median = Average of (n/2)th and (n/2+1)th terms

Example: Data: 3, 7, 2, 9, 5. Sorted: 2, 3, 5, 7, 9. n=5 (odd). Median = 3rd term = 5.
Example: Data: 4, 8, 2, 6. Sorted: 2, 4, 6, 8. n=4 (even). Median = (4+6)/2 = 5.

Mode:
Mode = value that appears most frequently.
No mode if all values appear once.
Bimodal if two values tie for most frequent.

Empirical relationship (for moderately skewed distributions):
Mode = 3 × Median - 2 × Mean

RANGE: Range = Maximum value - Minimum value

WORKED EXAMPLES:
Q: Average of 10 numbers is 15. If one number is replaced by 25 (replacing 5), what is new avg?
New sum = 10×15 - 5 + 25 = 150 + 20 = 170
New avg = 170/10 = 17

Q: Average salary of 20 workers = ₹8000, manager's salary = ₹15000. Average with manager?
= (20×8000 + 15000) / 21 = (160000+15000)/21 = 175000/21 ≈ ₹8333

Q: Avg of 5 consecutive even numbers = 40. Find smallest.
Middle number = 40, so sequence is 36, 38, 40, 42, 44. Smallest = 36.

Q: Find median of: 12, 15, 11, 16, 8, 19, 14, 13. n=8 (even).
Sorted: 8, 11, 12, 13, 14, 15, 16, 19
Median = (13+14)/2 = 13.5`,
    keyPoints: [
      "Average = Sum/Count; if all values shift by k, average also shifts by k",
      "AM ≥ GM ≥ HM for positive numbers; AM × HM = GM²",
      "Median for odd n = middle term; even n = average of two middle terms",
      "Weighted average: Σ(w×x)/Σw — key for mixed groups",
      "Mode = 3 Median - 2 Mean (empirical formula for skewed distributions)",
      "Deviation method: subtract base, average deviations, add back to base",
      "Avg of n consecutive numbers = middle number (or avg of first and last)",
    ],
    tags: [
      "average",
      "mean",
      "median",
      "mode",
      "weighted average",
      "AM",
      "GM",
      "HM",
      "quantitative",
      "GAT",
    ],
  },

  {
    id: "note_gat_008",
    subject: "GeneralTest",
    topic: "Logical Reasoning",
    title: "Series and Analogy",
    difficulty: "Medium",
    content: `SERIES AND ANALOGY — CUET GAT COMPLETE GUIDE

NUMBER SERIES — TYPES AND PATTERNS:

1. ARITHMETIC SERIES: Constant difference between terms.
   Example: 3, 7, 11, 15, 19... (difference = +4)
   Strategy: Check consecutive differences first.

2. GEOMETRIC SERIES: Constant ratio between terms.
   Example: 2, 6, 18, 54, 162... (ratio = ×3)
   Strategy: Check ratios of consecutive terms.

3. SQUARE SERIES: Terms are perfect squares.
   Example: 1, 4, 9, 16, 25, 36... (1², 2², 3², ...)
   Variant: 2, 5, 10, 17, 26... (n² + 1)

4. CUBE SERIES: Terms are perfect cubes.
   Example: 1, 8, 27, 64, 125... (1³, 2³, 3³, ...)

5. FIBONACCI-TYPE: Each term = sum of two preceding terms.
   Example: 1, 1, 2, 3, 5, 8, 13, 21...

6. DIFFERENCE SERIES: Differences themselves form a pattern.
   Example: 2, 3, 5, 8, 12, 17... (differences: 1, 2, 3, 4, 5)
   Example: 3, 7, 13, 21, 31... (differences: 4, 6, 8, 10 → AP)

7. MIXED/ALTERNATING SERIES: Two interleaved series.
   Example: 2, 3, 4, 6, 8, 12, 16... (×2: 2,4,8,16 and +3: 3,6,12)

8. PRIME NUMBER SERIES: 2, 3, 5, 7, 11, 13, 17, 19, 23...

SERIES SOLVING STRATEGY:
Step 1: Check if it's arithmetic (constant difference)
Step 2: Check if it's geometric (constant ratio)
Step 3: Check squares or cubes
Step 4: Check differences of differences (2nd differences)
Step 5: Check for two alternating patterns

LETTER SERIES:
Alphabet positions: A=1, B=2, C=3... Z=26
EJOT Rule: Every 5th letter — E(5), J(10), O(15), T(20)
BFJNRV Rule: +4 each time starting from B

Types:
• Skip 1: ACE (skip B,D) — odd positions
• Skip 2: ADF (skip 2 each time: B,C then E... wait: A+3=D, D+3=G... no)
  Actually ADF = A+3=D, D+2=F? Check pattern carefully each time.
• Reversal: ZYX, WVU (reverse alphabet)
• Position patterns: A(1)C(3)F(6)J(10)... (differences 2,3,4...)

ALPHANUMERIC SERIES:
Mix of letters and numbers.
Example: A1B3C5D7... → letters sequential, numbers +2 each time
Always separate the letter pattern from number pattern.

ANALOGY TYPES:

1. WORD ANALOGY (Semantic):
   Tool : Function :: Pen : Writing
   Animal : Sound :: Dog : Bark
   Part : Whole :: Finger : Hand
   Common relationship types: cause-effect, tool-use, object-material, word-antonym/synonym

2. NUMBER ANALOGY:
   16:4 :: 25:5 (relationship: √)
   6:36 :: 8:64 (relationship: ²)
   Find the mathematical operation linking first pair, apply to third term.

3. LETTER ANALOGY:
   AC:EG :: IK:MO (relationship: skip one letter, each pair advances by 4)
   Position-based: ABCD:DCBA (reversal) :: EFGH:HGFE

4. CLASSIFICATION (Odd One Out):
   Dog, Cat, Lion, Sparrow → Sparrow (only bird)
   Square, Triangle, Rectangle, Cube → Cube (3D, others are 2D)
   
   In CUET: look for the unique property. May be semantic, category, or mathematical.

ANALOGY SOLVING STRATEGY:
1. State the relationship clearly: "A is to B because..."
2. Apply exact same relationship to C to find D
3. If two relationships seem to fit, look for the MORE SPECIFIC one
4. Check all options before finalising

WORKED EXAMPLES:
Q: 2, 6, 12, 20, 30, 42, ?
Differences: 4, 6, 8, 10, 12 → next diff = 14 → answer = 56
Pattern: n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20...

Q: Book : Library :: Painting : ?
(A) Author (B) Museum (C) Gallery (D) Artist → Gallery (a collection place, like library for books)

Q: 144:12 :: 256:?
144 = 12², √144=12. Similarly, √256=16. Answer: 16`,
    keyPoints: [
      "Always check: arithmetic → geometric → squares/cubes → differences of differences",
      "Two alternating patterns: separate odd-position and even-position terms",
      "A=1, B=2... Z=26 — memorise positions of J(10), M(13), P(16), S(19), T(20)",
      "Analogy: state the relationship precisely before looking at options",
      "Odd one out: look for the unique property — may be category, shape type, or mathematical",
      "Fibonacci: each term = sum of two preceding (1,1,2,3,5,8,13,21...)",
      "2nd differences constant → quadratic series (n²-type pattern)",
    ],
    tags: [
      "series",
      "analogy",
      "letter series",
      "number series",
      "classification",
      "logical reasoning",
      "GAT",
    ],
  },

  {
    id: "note_gat_009",
    subject: "GeneralTest",
    topic: "Logical Reasoning",
    title: "Blood Relations and Direction Sense",
    difficulty: "Medium",
    content: `BLOOD RELATIONS AND DIRECTION SENSE — COMPLETE GUIDE

BLOOD RELATIONS — FAMILY TREE NOTATION:
Standard symbols:
• □ = Male, ○ = Female
• —— = Married couple (horizontal line)
• | = Parent-child link (vertical line)
• = = Siblings (horizontal line connecting siblings)

KEY RELATIONSHIPS TO MEMORISE:
Upward: Parent, Grandparent, Great-grandparent, Uncle/Aunt
Downward: Son/Daughter, Grandson/Granddaughter, Nephew/Niece
Same level: Brother, Sister, Spouse, Brother-in-law, Sister-in-law, Cousin

RELATIONSHIP CHAINS:
• Father's brother = Uncle (Paternal)
• Mother's brother = Maternal Uncle (Mama in Hindi)
• Father's sister = Paternal Aunt (Bua)
• Mother's sister = Maternal Aunt (Mausi)
• Uncle/Aunt's child = Cousin
• Brother's/Sister's child = Nephew (if male) / Niece (if female)
• Spouse's parent = Father-in-law / Mother-in-law
• Child's spouse = Son-in-law / Daughter-in-law
• Sibling's spouse = Brother-in-law / Sister-in-law

POINTING PROBLEMS — STRATEGY:
"A points to B and says B is the [relationship] of my [relationship]."
Translate each statement carefully. Draw a small tree.
Example: "She is the daughter of my father's only son" → father's only son = myself → She is my daughter.

CODED BLOOD RELATIONS:
When symbols replace relationship words:
A + B = A is father of B
A - B = A is wife of B
A × B = A is brother of B
etc.
Decode the expression by replacing symbols with words, then draw the tree.

CONVERSATION-BASED:
"A says to B: Your mother's husband's sister is my aunt."
→ B's mother's husband = B's father
→ B's father's sister = B's aunt (paternal)
→ A says this is A's aunt too → A and B share the same paternal aunt → A and B are cousins

DIRECTION SENSE — 8 DIRECTIONS:
           N
    NW          NE
  W                  E
    SW          SE
           S

TURNS:
• Right turn from North → East
• Left turn from North → West
• Right turn from East → South
• Right turn = 90° clockwise
• Left turn = 90° anti-clockwise
• About turn / U-turn = 180°

DISPLACEMENT CALCULATION:
Draw all movements on a rough diagram. Final displacement = straight line from start to end.
Use Pythagoras for perpendicular movements:
Displacement = √(East-West component² + North-South component²)

Example: Person walks 3km North, 4km East.
Displacement = √(3² + 4²) = √25 = 5 km (NE direction)

SHADOW PROBLEMS:
• Morning sun is in East → shadows fall towards WEST
• Evening sun is in West → shadows fall towards EAST
• Noon sun is overhead → very short shadows, typically ignored
• If sun is in East and person faces North → shadow falls to person's left (West)

WORKED EXAMPLES:
Q: A is B's sister. C is B's father. D is C's father. E is D's wife. How is A related to E?
C is B's father → C is also A's father (since A is B's sister)
D is C's father → D is A's grandfather
E is D's wife → E is A's grandmother

Q: A walks 10m North, turns right, walks 5m, turns right, walks 10m, turns left, walks 3m. Where is A from start?
North 10, East 5, South 10 (now at start N-S but 5E), East 3 more = 8m East of start.

Q: Facing north, turn left twice. Now facing?
Left from North = West. Left from West = South. Facing South.`,
    keyPoints: [
      "Draw a family tree — never try to solve blood relation problems mentally",
      "Father's brother = Uncle (paternal), Mother's brother = Maternal Uncle",
      "Right turn = 90° clockwise; Left turn = 90° anti-clockwise",
      "Morning shadows → West; Evening shadows → East",
      "Displacement for perpendicular path = √(x² + y²) via Pythagoras",
      '"Pointing problems": decode relationship chain step by step from the known end',
      "8 directions: N, NE, E, SE, S, SW, W, NW — always draw when solving",
    ],
    tags: [
      "blood relations",
      "family tree",
      "direction sense",
      "shadows",
      "displacement",
      "logical reasoning",
      "GAT",
    ],
  },

  {
    id: "note_gat_010",
    subject: "GeneralTest",
    topic: "Logical Reasoning",
    title: "Coding-Decoding and Syllogisms",
    difficulty: "Hard",
    content: `CODING-DECODING AND SYLLOGISMS — COMPLETE GUIDE

CODING-DECODING TYPES:

1. LETTER SHIFTING:
   Forward shift: Each letter shifted n positions forward.
   Example (shift +3): A→D, B→E, C→F, CAT → FDW
   Reverse shift: Decode by going backwards.
   
   Reverse coding: A↔Z, B↔Y, C↔X... (opposite positions)
   ABCD → ZYXW

2. POSITIONAL CODING:
   Code based on position: A=1, B=2, Z=26 OR A=26, B=25 (reversed)
   Words coded as numbers based on letter positions.
   SUN → 19+21+14 = 54 (sum of positions)

3. MIXED LETTER CODING:
   If TIGER = GRIFT (letters rearranged), find the pattern.
   Strategy: Compare corresponding positions in original and code.

4. SYMBOL CODING:
   Each letter replaced by a symbol. Decode systematically.
   If A=@ and B=# and CAB is coded: → decode as letters.

5. NUMBER CODING:
   ROSE = 6351. What does 1536 mean?
   R=6, O=3, S=5, E=1 → 1536 → E=1, S=5, R=6, O=3... → wait, read each digit:
   1=E, 5=S, 3=O, 6=R → ESOR? Check the logic carefully each time.

CODING-DECODING STRATEGY:
1. Identify if it's shift coding (look for constant offset)
2. Try the code on 2-3 known words before applying
3. Look for patterns in letter positions relative to original

SYLLOGISMS — VENN DIAGRAM METHOD:

STANDARD STATEMENT FORMS:
• All A are B: A circle completely inside B circle
• No A is B: A and B circles completely separate (no overlap)
• Some A are B: A and B circles partially overlapping
• Some A are not B: Part of A is outside B

DRAWING RULES:
Always draw multiple valid diagrams when "Some" is involved.

VALID CONCLUSION RULES:
• From "All A are B" + "All B are C" → "All A are C" (valid)
• From "All A are B" + "No B is C" → "No A is C" (valid)
• From "Some A are B" + "All B are C" → "Some A are C" (valid)
• From "No A is B" + "Some B are C" → "Some C are not A" (valid)
• Cannot conclude "All" from "Some"
• Negative + Negative → no valid conclusion
• Two particulars → no definite conclusion usually

POSSIBILITY CASES:
"Some A are B" — possible that all A are B, or just some
"No A is B" is definite — cannot say "some A may be B"

COMPLEMENTARY PAIRS:
• "All A are B" and "Some A are not B" → complementary (one must be true)
• "Some A are B" and "No A is B" → complementary (one must be true)
• In MCQs: if asked which conclusion definitely follows, use Venn diagram to check each.

SHORTCUT FOR CUET SYLLOGISMS:
Step 1: Draw all valid Venn diagrams for the premises.
Step 2: Check if each conclusion holds in ALL diagrams (definite) or just some (possible).
Step 3: A conclusion that holds in ALL valid diagrams → it definitely follows.

WORKED EXAMPLES:
Q: Code for MONDAY if FRIDAY = HTKFCA (each letter +2)?
F+2=H, R+2=T, I+2=K, D+2=F, A+2=C, Y+2=A → MONDAY: M+2=O, O+2=Q, N+2=P, D+2=F, A+2=C, Y+2=A → OQPFCA

Q: Premises: All cats are dogs. Some dogs are birds. Conclusions:
(i) Some cats are birds. (ii) Some birds are cats.
Draw: Cats inside Dogs. Birds partially overlap with Dogs.
Can cats overlap with birds? Maybe yes, maybe no — not definite.
NEITHER conclusion definitely follows.

Q: Premises: No teacher is a student. Some students are engineers.
Conclusion: Some engineers are not teachers.
Teachers and students are separate. Some students = engineers. Those student-engineers are NOT teachers.
→ Conclusion FOLLOWS ✓`,
    keyPoints: [
      "Shift coding: find offset by comparing one known letter pair, then apply consistently",
      "Reverse coding: A↔Z, B↔Y — opposite of alphabet position",
      "Syllogisms: draw Venn diagram for ALL valid arrangements before checking conclusions",
      "All A→B = A inside B; No A→B = separate circles; Some A→B = partial overlap",
      "Conclusion follows only if it holds in EVERY valid Venn diagram",
      "Two negative premises → no valid conclusion; Two particular premises → usually none",
      '"Some A are not B" and "All A are B" are complementary pairs',
    ],
    tags: [
      "coding",
      "decoding",
      "syllogisms",
      "Venn diagram",
      "letter coding",
      "logical reasoning",
      "GAT",
    ],
  },

  {
    id: "note_gat_011",
    subject: "GeneralTest",
    topic: "Data Interpretation",
    title: "Data Interpretation — Charts and Tables",
    difficulty: "Hard",
    content: `DATA INTERPRETATION — CHARTS, GRAPHS AND TABLES

BAR CHARTS:
Vertical Bar Chart: X-axis = categories, Y-axis = values. Read value at top of each bar.
Horizontal Bar Chart: X-axis = values, Y-axis = categories.
Stacked Bar Chart: Each bar divided into segments; read total height AND individual segments.
Grouped Bar Chart: Multiple bars per category; compare groups.

Reading strategy:
1. Read title, both axis labels, and scale carefully
2. Note the unit (thousands, lakhs, millions, %)
3. For comparison questions: subtract bar heights
4. For ratio questions: divide the bar heights
5. For % change: (New - Old)/Old × 100

PIE CHARTS:
Total always = 360° = 100%
Value of a sector = (Angle/360) × Total
% of a sector = (Angle/360) × 100
Angle of a sector = (Value/Total) × 360

Example: In a pie chart of total sales ₹6 lakhs, if a sector is 72°:
Value = (72/360) × 6,00,000 = ₹1,20,000 = 20% of total

Two pie charts comparison: Never compare sector sizes visually — calculate values first.

LINE CHARTS:
X-axis usually = time (years/months), Y-axis = value.
Steepest slope = highest rate of change.
Flat line = no change.
Intersecting lines = values are equal at that point.

For "percentage growth" questions on line charts:
Growth% = (Value at year 2 - Value at year 1) / Value at year 1 × 100

TABLES:
Row data: same attribute across different entities
Column data: different attributes of same entity
Read the question carefully: which row, which column, what operation?

MIXED DI: Two sources given (table + pie, or bar + table).
Strategy: Identify which source gives which information. Combine with multiplication/division.

APPROXIMATION TECHNIQUES FOR SPEED:
• Multiplying by 1.25 = multiply by 5 then divide by 4 (×5/4)
• Multiplying by 0.75 = multiply by 3 then divide by 4 (×3/4)
• Multiplying by 1.2 = multiply by 6 then divide by 5
• Dividing by 1.25 = multiply by 4 then divide by 5
• To find 37.5%: multiply by 3 then divide by 8

PERCENTAGE SHORTCUT TABLE:
• 10% of X = X/10
• 5% = X/20
• 15% = 10% + 5%
• 20% = X/5
• 25% = X/4
• 331/3% = X/3
• 50% = X/2
• 662/3% = 2X/3
• 75% = 3X/4

COMMON DI CALCULATIONS:
Total = Sum of all parts
Average = Total / Count
Ratio = A/B (simplify or compute decimal)
Percentage share = (Part/Total) × 100
Absolute change = New - Old
Percentage change = (Change/Old) × 100
CAGR (Compound Annual Growth Rate) ≈ (Final/Initial)^(1/n) - 1

WORKED DI EXAMPLE SET:
Table: Production (in thousands) of 5 companies A, B, C, D, E over 2 years:
        Year1  Year2
A:       40     50
B:       60     72
C:       80     88
D:       30     36
E:       50     55

Q1: Which company had highest % growth?
A: (50-40)/40×100 = 25%; B: 20%; C: 10%; D: 20%; E: 10%
Answer: Company A (25%)

Q2: Total production in Year 1?
40+60+80+30+50 = 260 thousand

Q3: What % is B's Year2 production of total Year2 production?
Year2 total = 50+72+88+36+55 = 301
B's share = 72/301 × 100 ≈ 23.9% ≈ 24%`,
    keyPoints: [
      "Pie chart: value = (angle/360) × total; % = (angle/360) × 100",
      "Bar/Line charts: always note units carefully — thousands, lakhs matter",
      "% change = (New-Old)/Old × 100 — most common DI formula",
      "10% of X = X/10; build other percentages from this: 15% = 10% + 5%",
      "Mixed DI: identify which data source answers which part of the question",
      "Steepest slope on line chart = highest rate of change in that period",
      "For fast calculation: ×1.25 = ×5÷4; ×0.75 = ×3÷4",
    ],
    tags: [
      "data interpretation",
      "bar chart",
      "pie chart",
      "line chart",
      "tables",
      "DI",
      "GAT",
    ],
  },

  {
    id: "note_gat_012",
    subject: "GeneralTest",
    topic: "Verbal Ability",
    title: "Para Jumbles and Sentence Completion",
    difficulty: "Hard",
    content: `PARA JUMBLES AND SENTENCE COMPLETION — CUET VERBAL GUIDE

PARA JUMBLES — STRATEGY:

STEP 1 — FIND THE OPENING SENTENCE:
The opening sentence typically:
• Introduces the topic without using pronouns (he, she, it, they) that refer to nothing yet
• Doesn't start with a connector like "however", "therefore", "but", "also", "moreover"
• Often has a broad, general statement about the topic
• May use the exact noun that later sentences use pronouns for

STEP 2 — FIND MANDATORY PAIRS:
Look for:
• Pronoun → Antecedent: If sentence B says "he said this", find the sentence that introduces the person
• Connector pairs: "on one hand" → "on the other hand"; "firstly" → "secondly" → "finally"
• Demonstrative pronouns: "this", "that", "these", "those" refer to something specific in an adjacent sentence
• Cause → Effect: Identify the event before the consequence

STEP 3 — FIND THE CONCLUSION:
The closing sentence typically:
• Uses a conclusive connector: "therefore", "thus", "hence", "in conclusion", "finally"
• Summarises the overall message
• May provide a resolution or recommendation

STEP 4 — BUILD THE CHAIN:
Once you have opening and ending + some mandatory pairs, fill in the middle.
Verify by reading the entire assembled paragraph for logical flow.

COMMON CONNECTORS AND THEIR SIGNALS:
Contrast: however, but, yet, although, nevertheless, on the contrary, in spite of
Addition: moreover, furthermore, also, in addition, besides, and
Cause: because, since, as, due to, owing to
Effect: therefore, thus, hence, consequently, as a result
Example: for instance, for example, such as, namely
Sequence: first, then, next, finally, subsequently, later
Emphasis: indeed, in fact, certainly, above all, primarily

SENTENCE COMPLETION — TYPES:

1. VOCABULARY-BASED: Blank needs a specific word by meaning.
Strategy: Identify what kind of word (positive/negative, specific meaning), eliminate wrong options by tone.

2. GRAMMAR-BASED: Blank needs correct grammatical form.
Look at: subject-verb agreement, tense consistency, preposition choice, article (a/an/the).

3. CONTEXTUAL: Meaning of surrounding sentences determines the blank.
Strategy: Read both sentences before and after the blank. Identify the tone and logical relationship.

TONE MATCHING:
Formal context (academic/scientific) → formal vocabulary (utilise, ascertain, ameliorate)
Informal context (casual writing) → simple words (use, find, improve)
Never put a very formal word in an informal context or vice versa.

FILLER WORDS STRATEGY:
For "which of these fits the blank" questions:
1. Cover the options, predict your own word
2. Find the option closest to your predicted word in meaning and tone
3. This avoids being influenced by plausible-sounding wrong options

ERROR SPOTTING IN SENTENCES:
Common errors:
• Subject-verb disagreement: "The team of players are..." should be "is" (team = singular subject)
• Wrong pronoun: "Everyone must bring their..." vs "Everyone must bring his/her..."
• Double negative: "I don't have nothing" (incorrect) → "I don't have anything"
• Misplaced modifier: "Barking loudly, I heard the dog" → "I heard the dog barking loudly"
• Wrong preposition: comply with (not comply to), differ from (not differ with)
• Article errors: use "an" before vowel sounds: an honest man (h is silent), an hour

WORKED EXAMPLES:
Q: Para jumble — A,B,C,D,E sentences given:
A: The ancient Romans were great builders.
B: They constructed roads, aqueducts, and amphitheaters.
C: Many of these structures survive today.
D: One of the most famous is the Colosseum.
E: It was completed in 80 AD and could hold 50,000 spectators.
Order: A(intro, no pronoun) → B(they = Romans) → C(structures mentioned) → D(one of these = Colosseum named) → E(it = Colosseum details) → Final: ABCDE

Q: Fill in: The scientist's theory was met with _____ by his colleagues, who demanded more evidence.
Options: (A) admiration (B) skepticism (C) enthusiasm (D) approval
Context: "demanded more evidence" = doubt. Answer: (B) skepticism`,
    keyPoints: [
      "Opening sentence: introduces topic, no pronoun referring to unknown antecedent, no connectors",
      'Mandatory pairs: pronoun→antecedent; "on one hand"→"on the other hand"',
      "Closing sentence: conclusive connectors (therefore, thus, hence, in conclusion)",
      "Predict your own word before looking at sentence completion options",
      "Tone matching: formal/academic context needs formal vocabulary",
      "Error spotting: team/committee = singular verb; everyone/anyone = singular pronoun",
      '"An" before vowel SOUNDS (not just vowel letters): an hour, an honest, a university',
    ],
    tags: [
      "para jumbles",
      "sentence completion",
      "verbal ability",
      "connectors",
      "grammar",
      "error spotting",
      "GAT",
    ],
  },

  {
    id: "note_gat_013",
    subject: "GeneralTest",
    topic: "Logical Reasoning",
    title: "Critical Thinking and Puzzles",
    difficulty: "Hard",
    content: `CRITICAL THINKING AND PUZZLES — CUET GAT GUIDE

SEATING ARRANGEMENTS:

LINEAR ARRANGEMENT (One Row):
Setup: Draw n blank seats. Use clues to fix positions.
Key phrases:
• "sits at one end" → position 1 or n
• "sits second from left" → position 2 (left-most = 1)
• "sits between A and B" → A _ B or B _ A
• "immediate left of A" → sits adjacent to A on the left side
• "not adjacent to A" → at least one seat gap

Strategy:
1. Start with the most specific clue (absolute position given)
2. Build from fixed points outward
3. Use elimination: if A,B,C are placed, the remaining person must go in remaining seat

LINEAR ARRANGEMENT (Two Rows Facing Each Other):
Rows: Row 1 faces North (so their left is East), Row 2 faces South (their left is West).
CRITICAL: When two people "face each other", they are in opposite rows at the same column position.
"To the immediate left of person facing A" — depends on which row the person is in.

CIRCULAR ARRANGEMENT:
In a circular table, there is no absolute left or right — it's relative.
"Clockwise neighbor" vs "Anti-clockwise neighbor"
STANDARD CONVENTION: When people face the center:
• Neighbor to left = anti-clockwise neighbor
• Neighbor to right = clockwise neighbor

Steps: 1) Fix one person (arbitrary position), 2) Place others using relative clues, 3) Verify all clues

FLOOR-BASED PUZZLES:
"A lives above B", "C lives on the 3rd floor" — assign floors systematically.
Draw a table with floor numbers and fill in as clues give information.

COMPARISON PUZZLES:
"A is taller than B", "C is shorter than D", "B is taller than E"
Strategy: Build a ranking chain. Combine all chains into one linear order.
Example: A>B>E and C<D and B>C → combined: A>B>C<D and B>E → A>B>D? Check...
Be careful: not all positions can always be determined.

SCHEDULING PROBLEMS:
Days/months assigned to tasks or people.
Strategy: Make a table (days × tasks), fill in constraints one by one.

INPUT-OUTPUT MACHINES:
A sequence of operations on a number/word until it reaches a final state.
Find the pattern at each step. Usually involves sorting, rearranging, or arithmetic operations.

MATRIX-BASED REASONING:
3×3 grid of figures — find the missing piece (bottom-right usually).
Patterns: row-wise, column-wise, diagonal patterns.
Look for: rotation, reflection, element count, shape type changes.
Rule verification: test your rule on ALL rows/columns before committing.

GENERAL PUZZLE APPROACH:
1. READ all clues first. Mark definite clues separately.
2. Draw a TABLE or DIAGRAM suited to the puzzle type.
3. Apply the most restrictive clue first (gives absolute position).
4. Use negative information: "not in position X" → eliminate.
5. VERIFY final arrangement against ALL clues.

WORKED EXAMPLES:
Q: Circular arrangement of 6 people A,B,C,D,E,F around a table.
Clue 1: A sits directly opposite D.
Clue 2: B sits to the immediate right of A.
Clue 3: C sits to the immediate left of D.
Clue 4: F sits between E and C.

Fix A at top. D is directly opposite (bottom).
B is to right of A (clockwise from A).
C is to immediate left of D (anti-clockwise from D, when facing center).
So going clockwise: A, B, ?, D, C, ?
F is between E and C. The remaining positions are spots 3 and 6.
Spot 3 (between B and D) and Spot 6 (between C and A).
F between E and C: F must be at spot 6 (adjacent to C at spot 5). Then E at spot 3.
Final: A(1) - B(2) - E(3) - D(4) - C(5) - F(6) ✓

Q: 5 people have weights: A>B, C>D, B>C, A<E.
Rank from heaviest: E>A>B>C>D`,
    keyPoints: [
      "Circular arrangement: fix one person first, then place others relative to them",
      "Two-row facing: left of Person A depends on which row A sits in",
      "Comparison puzzles: build all chains, combine into single ranking where possible",
      "Matrix reasoning: test your rule on at least 2 rows/columns before answering",
      "Always apply the most specific/restrictive clue first",
      "Floor puzzles: draw a table with floors and fill systematically",
      "Verify EVERY clue after completing the arrangement — one violation = wrong answer",
    ],
    tags: [
      "puzzles",
      "seating arrangement",
      "circular",
      "linear",
      "floor puzzle",
      "critical thinking",
      "logical reasoning",
      "GAT",
    ],
  },

  {
    id: "note_gat_014",
    subject: "GeneralTest",
    topic: "General Awareness",
    title: "Static GK — Indian Constitution, History, Geography and Science",
    difficulty: "Easy",
    content: `STATIC GK QUICK FACTS — CUET GAT

INDIAN CONSTITUTION — KEY ARTICLES:
• Article 12-35: Fundamental Rights
  - Art 14: Right to Equality (equality before law)
  - Art 15: No discrimination on religion, race, caste, sex, place of birth
  - Art 16: Equal opportunity in public employment
  - Art 19: Right to Freedom (6 freedoms including speech, expression, movement)
  - Art 21: Right to Life and Personal Liberty (most important FR)
  - Art 21A: Right to Education (added by 86th Amendment, 2002)
  - Art 22: Protection against arrest and detention
  - Art 23: Prohibition of trafficking and forced labour
  - Art 24: No child labour below 14 years in factories/hazardous work
  - Art 25-28: Freedom of Religion
  - Art 32: Right to Constitutional Remedies (Dr Ambedkar called it "heart and soul of Constitution")

• Key Directive Principles (Art 36-51):
  - Art 39: Equal pay for equal work
  - Art 44: Uniform Civil Code
  - Art 45: Free and compulsory education for children (now FR via 21A)
  - Art 48: Prohibition of cow slaughter
  - Art 51: International peace and security

• Other Important Articles:
  - Art 112: Annual Financial Statement (Union Budget)
  - Art 123: Presidential Ordinances
  - Art 148: Comptroller and Auditor General (CAG)
  - Art 280: Finance Commission
  - Art 324: Election Commission of India
  - Art 356: President's Rule (President's Rule imposed in state)
  - Art 360: Financial Emergency
  - Art 368: Amendment procedure

SCHEDULES OF CONSTITUTION:
• 1st: States and UTs
• 3rd: Forms of Oaths
• 6th: Tribal Areas (NE states)
• 7th: Union, State, Concurrent lists
• 8th: 22 recognized languages
• 9th: Acts not challengeable in court
• 10th: Anti-Defection Law
• 12th: Municipal Corporations

INDIAN HISTORY — KEY DATES:
• 1757: Battle of Plassey (British control begins)
• 1857: First War of Independence (Sepoy Mutiny)
• 1885: Indian National Congress founded (A.O. Hume)
• 1905: Partition of Bengal (Lord Curzon)
• 1919: Jallianwala Bagh Massacre (April 13), Rowlatt Act
• 1920: Non-Cooperation Movement started
• 1930: Civil Disobedience Movement, Dandi March (March 12)
• 1942: Quit India Movement (August 8)
• 1947: Independence (August 15)
• 1950: Republic Day (January 26), Constitution adopted

GEOGRAPHY — RIVERS AND MOUNTAINS:
Major Rivers: Ganga (source: Gangotri), Yamuna (Yamunotri), Brahmaputra (Tibet→Arunachal→Assam), Indus (Tibet→Kashmir→Pakistan), Krishna (Western Ghats), Godavari (longest Peninsular river, Maharashtra)

Mountain Peaks: Mt Everest (8848.86m, Nepal-Tibet), K2 (8611m, Pakistan-controlled Kashmir), Kangchenjunga (3rd highest, Sikkim), Nanda Devi (highest peak fully in India)

IMPORTANT ORGANIZATIONS AND HEADQUARTERS:
• UN: New York, USA (founded 1945)
• WHO: Geneva, Switzerland
• UNESCO: Paris, France
• UNICEF: New York, USA
• IMF: Washington D.C., USA
• World Bank: Washington D.C., USA
• WTO: Geneva, Switzerland
• NATO: Brussels, Belgium
• G20: No permanent HQ (rotating presidency)
• SAARC: Kathmandu, Nepal
• BRICS: No permanent HQ
• SCO: Beijing, China
• ASEAN: Jakarta, Indonesia

NATIONAL SYMBOLS OF INDIA:
• National Animal: Bengal Tiger
• National Bird: Indian Peacock
• National Flower: Lotus
• National Tree: Indian Banyan
• National Fruit: Mango
• National River: Ganga
• National Emblem: Lion Capital of Ashoka (Sarnath)
• National Song: Vande Mataram (Bankim Chandra Chattopadhyay)
• National Anthem: Jana Gana Mana (Rabindranath Tagore)
• National Calendar: Saka Calendar
• National Currency: Indian Rupee (₹)

SCIENCE — INVENTIONS AND DISCOVERERS:
• Gravity: Isaac Newton
• Evolution: Charles Darwin
• Penicillin: Alexander Fleming (1928)
• X-ray: Wilhelm Röntgen (1895)
• DNA structure: Watson and Crick (1953)
• Telephone: Alexander Graham Bell (1876)
• Radio: Guglielmo Marconi
• Computer: Charles Babbage (analytical engine concept)
• WWW: Tim Berners-Lee (1989)
• Raman Effect: C.V. Raman (1928) — Nobel Prize 1930`,
    keyPoints: [
      "Art 21 = Right to Life (most litigated FR); Art 32 = Heart and Soul of Constitution",
      "Art 356 = President's Rule; Art 360 = Financial Emergency; Art 368 = Amendment",
      "7th Schedule: Union list (97 subjects), State list (66), Concurrent list (47)",
      "1857 = First War of Independence; 1885 = INC founded; 1947 = Independence",
      "Godavari = longest Peninsular river; Ganga source = Gangotri; K2 = second highest peak",
      "IMF + World Bank HQ = Washington D.C.; WTO + WHO = Geneva; UN + UNICEF = New York",
      "National Animal = Tiger; National Anthem = Jana Gana Mana; National Song = Vande Mataram",
    ],
    tags: [
      "static GK",
      "constitution",
      "articles",
      "history",
      "geography",
      "organizations",
      "national symbols",
      "general awareness",
      "GAT",
    ],
  },

  {
    id: "note_gat_015",
    subject: "GeneralTest",
    topic: "Quantitative Aptitude",
    title: "GAT Quick Shortcut Formulas — Last Minute Revision",
    difficulty: "Easy",
    content: `GAT SHORTCUT FORMULAS — COMPLETE LAST MINUTE REVISION SHEET

PERCENTAGE SHORTCUTS:
• To find X% of Y = Y% of X (commutative property)
  Example: 18% of 50 = 50% of 18 = 9
• Increase A by X% then decrease by X% → net change = -X²/100 % (always a loss)
• If A is X% more than B, then B is less than A by [X/(100+X)] × 100 %
• If A is X% less than B, then B is more than A by [X/(100-X)] × 100 %

SQUARES UP TO 30:
11²=121, 12²=144, 13²=169, 14²=196, 15²=225
16²=256, 17²=289, 18²=324, 19²=361, 20²=400
21²=441, 22²=484, 23²=529, 24²=576, 25²=625
26²=676, 27²=729, 28²=784, 29²=841, 30²=900

CUBES UP TO 15:
1³=1, 2³=8, 3³=27, 4³=64, 5³=125
6³=216, 7³=343, 8³=512, 9³=729, 10³=1000
11³=1331, 12³=1728, 13³=2197, 14³=2744, 15³=3375

SQUARE ROOTS TO KNOW:
√2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236, √6 ≈ 2.449
√7 ≈ 2.646, √8 ≈ 2.828, √10 ≈ 3.162, √11 ≈ 3.317
√12 ≈ 3.464, √13 ≈ 3.606, √15 ≈ 3.873

VEDIC MATHS TRICKS:

Squaring numbers ending in 5:
n5² = n(n+1) | 25
Example: 35² = 3×4 | 25 = 1225; 65² = 6×7|25 = 4225

Multiplying numbers close to 100:
97 × 96 = (97-4)(96-3) | 4×3 ... better method:
Deficits: 97 = 100-3, 96 = 100-4
Product = (100 - 3 - 4) | (3×4) = 93|12 = 9312

Multiplying two numbers between 90-100:
x × y = (x + y - 100) × 100 + (100-x)(100-y)

SPECIAL PRODUCTS (Algebraic Identities):
(a+b)² = a² + 2ab + b²
(a-b)² = a² - 2ab + b²
(a+b)(a-b) = a² - b²
(a+b)³ = a³ + 3a²b + 3ab² + b³
(a-b)³ = a³ - 3a²b + 3ab² - b³
a³ + b³ = (a+b)(a² - ab + b²)
a³ - b³ = (a-b)(a² + ab + b²)

IMPORTANT NUMBER SHORTCUTS:
• Sum of first n natural numbers = n(n+1)/2
• Sum of first n odd numbers = n² (so 1+3+5+...+(2n-1) = n²)
• Sum of first n even numbers = n(n+1) (so 2+4+6+...+2n = n(n+1))
• Sum of squares of first n naturals = n(n+1)(2n+1)/6
• Sum of cubes of first n naturals = [n(n+1)/2]²

TIME-SPEED SHORTCUTS:
• 36 km/hr = 10 m/s; 18 km/hr = 5 m/s; 72 km/hr = 20 m/s; 90 km/hr = 25 m/s
• Train 100m crossing a pole at 36 km/hr: time = 100/10 = 10 seconds

WORK SHORTCUTS:
• A in 'a' days, B in 'b' days → together in ab/(a+b) days
• A,B,C together: 1/(1/a + 1/b + 1/c) = abc/(ab+bc+ca) days

SI/CI SHORTCUTS:
• SI for 2 years vs CI for 2 years: CI - SI = P(R/100)²
• CI for 3 years vs SI for 3 years: CI - SI = P(R²/100²)(3 + R/100)
• At 10% CI, amount after 3 years = 1.331P; after 2 years = 1.21P

RATIO AND PROPORTION:
• If a:b = c:d then (a+b):(a-b) = (c+d):(c-d) (componendo-dividendo)
• If a/b = k, then (pa+qb)/(ra+sb) = (pk+q)/(rk+s)

STANDARD RESULTS (Save Calculation Time):
• HCF × LCM = product of numbers
• For 3 numbers: HCF(a,b,c) × LCM(a,b,c) ≠ a×b×c (this doesn't hold for 3+ numbers)
• Prime factorisation: use sieve of Eratosthenes for numbers up to 100
• Primes up to 50: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47`,
    keyPoints: [
      "X% of Y = Y% of X — fastest percentage trick for calculation",
      "Increase then decrease by same % → net change = -(X²/100)% loss always",
      "Sum of first n odd numbers = n² — instant result",
      "Vedic trick for n5²: n(n+1) append 25 — e.g. 75² = 7×8|25 = 5625",
      "CI-SI for 2 years = P(R/100)² — memorise for MCQ shortcuts",
      "Combined work time = ab/(a+b) for two workers A and B",
      "Squares up to 30 and cubes up to 15 must be memorised for speed",
    ],
    tags: [
      "shortcuts",
      "formulas",
      "revision",
      "vedic maths",
      "squares",
      "cubes",
      "quick reference",
      "quantitative",
      "GAT",
    ],
  },
];
