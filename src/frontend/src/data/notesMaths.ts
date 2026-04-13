import type { NoteItem } from "../types";

export const mathsNotes: NoteItem[] = [
  {
    id: "note_mat_001",
    subject: "Maths",
    topic: "Relations and Functions",
    title: "Relations and Functions — Types, Composition & Inverse",
    content: `A Relation R from set A to set B is a subset of A×B. A Function is a special relation where every element of domain has exactly one image in codomain.

TYPES OF RELATIONS:
• Reflexive Relation: (a, a) ∈ R for every a ∈ A. Example: R = {(1,1),(2,2),(3,3)} on A = {1,2,3}.
• Symmetric Relation: If (a, b) ∈ R then (b, a) ∈ R. Example: "is a sibling of" relation.
• Transitive Relation: If (a,b) ∈ R and (b,c) ∈ R, then (a,c) ∈ R. Example: "less than" (<) is transitive.
• Equivalence Relation: Relation that is simultaneously reflexive, symmetric, and transitive. Example: "is congruent to" on triangles.

TYPES OF FUNCTIONS:
• One-One (Injective): f(a₁) = f(a₂) ⟹ a₁ = a₂. No two different inputs give same output. Test: Assume f(x₁) = f(x₂) → if x₁ = x₂ always, function is injective. Example: f(x) = 2x + 3 is one-one; f(x) = x² is NOT one-one since f(2) = f(-2) = 4.
• Onto (Surjective): Range = Codomain. Every element in codomain has at least one preimage. Test: Solve f(x) = y for x — if solution exists for all y in codomain, function is onto. Example: f: R → R, f(x) = 2x + 1 is onto.
• Bijective: Both one-one and onto. Such functions have inverses. Example: f(x) = x³ from R to R is bijective.

COMPOSITION OF FUNCTIONS:
If f: A → B and g: B → C, then gof: A → C is defined as (gof)(x) = g(f(x)).
• (fog)(x) ≠ (gof)(x) in general — composition is NOT commutative.
• (fog)(x) = (gof)(x) if f and g are both inverse functions.
• Associativity: ho(gof) = (hog)of always holds.
Example: Let f(x) = x + 2, g(x) = x². Then gof(x) = g(f(x)) = g(x+2) = (x+2)², and fog(x) = f(g(x)) = f(x²) = x² + 2.

INVERTIBLE FUNCTIONS:
A function f: A → B is invertible if and only if it is bijective. The inverse function f⁻¹: B → A satisfies f⁻¹(f(x)) = x and f(f⁻¹(y)) = y.
Finding inverse: Replace f(x) with y, solve for x in terms of y, then replace y with x.
Example: f(x) = 3x - 5. Let y = 3x - 5 → x = (y+5)/3. So f⁻¹(x) = (x+5)/3.

BINARY OPERATIONS:
A binary operation * on set A is a function *: A × A → A.
• Commutative: a * b = b * a for all a, b ∈ A
• Associative: (a*b)*c = a*(b*c) for all a,b,c ∈ A
• Identity element e: a*e = e*a = a
• Inverse: a*b = b*a = e (b is inverse of a)

DOMAIN AND RANGE:
• For f(x) = √(x-2): Domain = [2,∞), Range = [0,∞)
• For f(x) = 1/(x-3): Domain = R - {3}, Range = R - {0}
• For f(x) = log(x): Domain = (0,∞), Range = R`,
    keyPoints: [
      "Equivalence relation = Reflexive + Symmetric + Transitive (all three together)",
      "Bijective function = One-One + Onto; only bijective functions have inverses",
      "Composition gof(x) = g(f(x)); apply f first, then g — right to left",
      "Test one-one: f(x₁) = f(x₂) ⟹ x₁ = x₂; test onto: solve f(x)=y, check all y in codomain have solution",
      "To find inverse: replace f(x) by y, solve for x, then replace y by x",
      "Identity for addition: 0; identity for multiplication: 1",
      "f(x) = x² is neither injective (f(2)=f(-2)) nor surjective if codomain = R (no negative images)",
    ],
    tags: [
      "Relations",
      "Functions",
      "Bijective",
      "Composition",
      "Inverse",
      "Algebra",
    ],
  },
  {
    id: "note_mat_002",
    subject: "Maths",
    topic: "Inverse Trigonometric Functions",
    title: "Inverse Trigonometric Functions — Domain, Range & Identities",
    content: `Inverse trigonometric functions are defined by restricting the domains of trigonometric functions to make them bijective. The restricted domain becomes the Principal Value Branch (PVB).

DOMAIN AND RANGE TABLE:
| Function  | Domain        | Principal Value Branch (Range) |
|-----------|--------------|-------------------------------|
| sin⁻¹x   | [-1, 1]      | [-π/2, π/2]                   |
| cos⁻¹x   | [-1, 1]      | [0, π]                        |
| tan⁻¹x   | R (all reals)| (-π/2, π/2)                   |
| cosec⁻¹x | R-(-1,1)     | [-π/2, π/2] - {0}             |
| sec⁻¹x   | R-(-1,1)     | [0, π] - {π/2}                |
| cot⁻¹x   | R (all reals)| (0, π)                        |

FUNDAMENTAL IDENTITIES:
Odd/Even properties:
• sin⁻¹(-x) = -sin⁻¹x (for x ∈ [-1,1])
• tan⁻¹(-x) = -tan⁻¹x (for x ∈ R)
• cosec⁻¹(-x) = -cosec⁻¹x
• cos⁻¹(-x) = π - cos⁻¹x
• sec⁻¹(-x) = π - sec⁻¹x
• cot⁻¹(-x) = π - cot⁻¹x

Complementary angle identities:
• sin⁻¹x + cos⁻¹x = π/2 (for x ∈ [-1,1])
• tan⁻¹x + cot⁻¹x = π/2 (for x ∈ R)
• sec⁻¹x + cosec⁻¹x = π/2 (for |x| ≥ 1)

ADDITION FORMULAS:
• tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)), when xy < 1
• tan⁻¹x + tan⁻¹y = π + tan⁻¹((x+y)/(1-xy)), when x>0, y>0, xy > 1
• tan⁻¹x - tan⁻¹y = tan⁻¹((x-y)/(1+xy)), when xy > -1

DOUBLE ANGLE FORMULAS:
• 2tan⁻¹x = sin⁻¹(2x/(1+x²)) for |x| ≤ 1
• 2tan⁻¹x = cos⁻¹((1-x²)/(1+x²)) for x ≥ 0
• 2tan⁻¹x = tan⁻¹(2x/(1-x²)) for -1 < x < 1

WORKED EXAMPLES:
Example 1: Find the principal value of sin⁻¹(√3/2).
We need θ ∈ [-π/2, π/2] such that sin θ = √3/2. Since sin(π/3) = √3/2 and π/3 ∈ [-π/2, π/2], answer = π/3.

Example 2: Find the value of tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3).
tan⁻¹(2) + tan⁻¹(3) = π + tan⁻¹((2+3)/(1-6)) = π + tan⁻¹(-1) = π - π/4 = 3π/4.
So total = π/4 + 3π/4 = π.

Example 3: Simplify sin⁻¹(sin(7π/6)).
7π/6 ∉ [-π/2, π/2], so sin⁻¹(sin(7π/6)) = sin⁻¹(sin(π - 7π/6)) = sin⁻¹(sin(-π/6)) = -π/6.

Example 4: Prove sin⁻¹x + cos⁻¹x = π/2.
Let sin⁻¹x = θ, so sinθ = x. Then cosθ = x means θ = cos⁻¹x. Now sin(π/2 - θ) = cosθ = x, so cos⁻¹x = π/2 - θ = π/2 - sin⁻¹x. Hence sin⁻¹x + cos⁻¹x = π/2.`,
    keyPoints: [
      "sin⁻¹x range: [-π/2, π/2]; cos⁻¹x range: [0, π]; tan⁻¹x range: (-π/2, π/2)",
      "sin⁻¹(-x) = -sin⁻¹x but cos⁻¹(-x) = π - cos⁻¹x (opposite signs, different formulas!)",
      "sin⁻¹x + cos⁻¹x = π/2 — most frequently tested identity",
      "tan⁻¹x + tan⁻¹y formula changes when xy > 1 (add π for positive x,y)",
      "2tan⁻¹x = sin⁻¹(2x/(1+x²)) valid only for |x| ≤ 1",
      "Always check if angle is in principal value branch before writing final answer",
    ],
    tags: [
      "Inverse Trig",
      "Principal Value",
      "Identities",
      "sin⁻¹",
      "cos⁻¹",
      "tan⁻¹",
    ],
  },
  {
    id: "note_mat_003",
    subject: "Maths",
    topic: "Matrices",
    title: "Matrices — Types, Operations & Properties",
    content: `A matrix is a rectangular array of numbers arranged in rows and columns. An m×n matrix has m rows and n columns. The element in the iᵗʰ row and jᵗʰ column is denoted aᵢⱼ.

TYPES OF MATRICES:
• Zero Matrix (O): All elements are 0. O + A = A for any matrix A.
• Identity Matrix (I): Square matrix with 1s on main diagonal, 0s elsewhere. AI = IA = A.
• Diagonal Matrix: Square matrix with non-zero elements only on main diagonal.
• Scalar Matrix: Diagonal matrix with all diagonal elements equal. kI form.
• Symmetric Matrix: A = Aᵀ, i.e., aᵢⱼ = aⱼᵢ. Example: [1 2; 2 3].
• Skew-Symmetric Matrix: A = -Aᵀ, i.e., aᵢⱼ = -aⱼᵢ. All diagonal elements must be 0. Example: [0 3; -3 0].
• Triangular Matrix: Upper triangular — all elements below main diagonal are 0. Lower triangular — all elements above main diagonal are 0.

MATRIX ADDITION:
• A + B is defined only when A and B have the same order.
• Commutative: A + B = B + A
• Associative: (A + B) + C = A + (B + C)
• A + O = O + A = A (O is additive identity)
• A + (-A) = O (additive inverse)

SCALAR MULTIPLICATION:
• k(A + B) = kA + kB
• (k + l)A = kA + lA
• k(lA) = (kl)A

MATRIX MULTIPLICATION:
• AB is defined only when the number of columns in A = number of rows in B.
• If A is m×n and B is n×p, then AB is m×p.
• NOT commutative: AB ≠ BA in general.
• Associative: (AB)C = A(BC)
• Distributive: A(B + C) = AB + AC
• AI = IA = A

TRANSPOSE PROPERTIES:
• (Aᵀ)ᵀ = A
• (A + B)ᵀ = Aᵀ + Bᵀ
• (kA)ᵀ = kAᵀ
• (AB)ᵀ = BᵀAᵀ (note reversal of order!)

KEY THEOREM: Every square matrix A can be expressed as A = P + Q, where P = (A + Aᵀ)/2 is symmetric and Q = (A - Aᵀ)/2 is skew-symmetric.

ELEMENTARY ROW OPERATIONS (used in finding inverse):
• Rᵢ ↔ Rⱼ: Interchange rows i and j
• Rᵢ → kRᵢ: Multiply row i by scalar k ≠ 0
• Rᵢ → Rᵢ + kRⱼ: Add k times row j to row i

WORKED EXAMPLE — Matrix Multiplication:
Let A = [1 2; 3 4] and B = [5 6; 7 8].
AB = [1×5+2×7, 1×6+2×8; 3×5+4×7, 3×6+4×8] = [5+14, 6+16; 15+28, 18+32] = [19, 22; 43, 50].
BA = [5×1+6×3, 5×2+6×4; 7×1+8×3, 7×2+8×4] = [5+18, 10+24; 7+24, 14+32] = [23, 34; 31, 46].
Clearly AB ≠ BA, confirming non-commutativity.

WORKED EXAMPLE — Decomposition:
A = [2 3; 1 5]. Symmetric part P = (A+Aᵀ)/2 = ([2 3;1 5]+[2 1;3 5])/2 = [2 2; 2 5].
Skew-symmetric part Q = (A-Aᵀ)/2 = ([2 3;1 5]-[2 1;3 5])/2 = [0 1;-1 0].
Verify: P + Q = [2 2;2 5] + [0 1;-1 0] = [2 3;1 5] = A. ✓`,
    keyPoints: [
      "Matrix multiplication AB defined only when columns of A = rows of B; result has rows of A and columns of B",
      "Matrix multiplication is NOT commutative: AB ≠ BA in general",
      "(AB)ᵀ = BᵀAᵀ — order reverses on transposing a product",
      "Skew-symmetric matrix: aᵢⱼ = -aⱼᵢ, all diagonal elements MUST be 0",
      "Every square matrix = symmetric part + skew-symmetric part: A = (A+Aᵀ)/2 + (A-Aᵀ)/2",
      "Identity matrix I: square matrix with 1s on diagonal; AI = IA = A",
      "For symmetric A: A = Aᵀ; for skew-symmetric A: A = -Aᵀ",
    ],
    tags: [
      "Matrices",
      "Transpose",
      "Symmetric",
      "Multiplication",
      "Operations",
    ],
  },
  {
    id: "note_mat_004",
    subject: "Maths",
    topic: "Determinants",
    title: "Determinants — Properties, Adjoint, Inverse & Cramer's Rule",
    content: `The determinant of a square matrix is a scalar value that encodes many geometric and algebraic properties. For a 2×2 matrix A = [a b; c d], det(A) = |A| = ad - bc.

EXPANSION OF 3×3 DETERMINANT:
Along Row 1: |A| = a₁₁(a₂₂a₃₃ - a₂₃a₃₂) - a₁₂(a₂₁a₃₃ - a₂₃a₃₁) + a₁₃(a₂₁a₃₂ - a₂₂a₃₁)
The signs alternate as +, -, + along any row or column.

PROPERTIES OF DETERMINANTS (6 Key Properties):
1. |Aᵀ| = |A| — transpose doesn't change the determinant value.
2. If any two rows (or columns) are interchanged, determinant changes sign. R₁ ↔ R₂ ⟹ |A| → -|A|.
3. If any two rows (or columns) are identical (or proportional), |A| = 0.
4. If a row is multiplied by scalar k, the determinant is multiplied by k. So |kA| = kⁿ|A| for n×n matrix.
5. |AB| = |A|·|B| — multiplicative property.
6. Rᵢ → Rᵢ + kRⱼ does NOT change the value of the determinant.

MINORS AND COFACTORS:
• Minor Mᵢⱼ: Determinant of the submatrix obtained by deleting row i and column j.
• Cofactor Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ.
• Sign matrix for 3×3: [+ - +; - + -; + - +].

ADJOINT OF A MATRIX:
adj(A) = Transpose of the cofactor matrix.
If A = [a b c; d e f; g h i], cofactor matrix has Cᵢⱼ at position (i,j), then adj(A) = [cofactors]ᵀ.
Key property: A · adj(A) = adj(A) · A = |A| · I.

INVERSE OF A MATRIX:
A⁻¹ = adj(A)/|A|, provided |A| ≠ 0.
If |A| = 0, matrix A is called Singular and has NO inverse.
Properties: (A⁻¹)⁻¹ = A; (AB)⁻¹ = B⁻¹A⁻¹; (Aᵀ)⁻¹ = (A⁻¹)ᵀ.

AREA OF TRIANGLE:
Δ = ½ |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|
Using determinant form: Δ = ½ |x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1|
If three points are collinear, area = 0, so the determinant = 0.

CRAMER'S RULE:
For system a₁x + b₁y = c₁ and a₂x + b₂y = c₂:
D = |a₁ b₁; a₂ b₂|, D₁ = |c₁ b₁; c₂ b₂|, D₂ = |a₁ c₁; a₂ c₂|
x = D₁/D, y = D₂/D (provided D ≠ 0).
For 3×3: Similarly define D, Dₓ, Dᵧ, D_z; x = Dₓ/D, y = Dᵧ/D, z = D_z/D.

CONSISTENCY:
• D ≠ 0: Unique solution exists — system is CONSISTENT.
• D = 0 and D₁ = D₂ = 0: Infinite solutions or no solution — check by substitution.
• D = 0 and at least one of D₁, D₂ ≠ 0: NO solution — system is INCONSISTENT.

WORKED EXAMPLE:
Find inverse of A = [2 1; 5 3].
|A| = 2×3 - 1×5 = 6 - 5 = 1.
adj(A) = [3 -1; -5 2] (swap diagonal, negate off-diagonal for 2×2).
A⁻¹ = adj(A)/|A| = [3 -1; -5 2]/1 = [3 -1; -5 2].
Verify: AA⁻¹ = [2 1;5 3][3 -1;-5 2] = [6-5, -2+2; 15-15, -5+6] = [1 0; 0 1] = I. ✓`,
    keyPoints: [
      "For 2×2 matrix A=[a b;c d]: |A| = ad - bc; A⁻¹ = [d -b; -c a]/|A|",
      "If two rows are identical or proportional, determinant = 0",
      "A⁻¹ = adj(A)/|A| — only exists when |A| ≠ 0 (non-singular matrix)",
      "|AB| = |A|·|B|; |kA| = kⁿ|A| for n×n matrix (k comes out n times!)",
      "Cofactor Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ; adj(A) = transpose of cofactor matrix",
      "Three points collinear ⟺ determinant of the 3×3 position matrix = 0",
      "Cramer's Rule: x = D₁/D, y = D₂/D — requires D ≠ 0 for unique solution",
    ],
    tags: [
      "Determinants",
      "Inverse",
      "Adjoint",
      "Cramer's Rule",
      "Cofactors",
      "Area",
    ],
  },
  {
    id: "note_mat_005",
    subject: "Maths",
    topic: "Continuity and Differentiability",
    title: "Continuity, Differentiability & Mean Value Theorems",
    content: `Continuity and differentiability are fundamental concepts describing the "smoothness" of functions. Differentiability is a stronger condition than continuity.

LIMITS AND CONTINUITY:
A function f is continuous at x = a if all three conditions hold:
1. f(a) is defined (function exists at a)
2. lim(x→a) f(x) exists (left limit = right limit)
3. lim(x→a) f(x) = f(a) (limit equals function value)

Types of discontinuity:
• Removable discontinuity: limit exists but ≠ f(a), or f(a) not defined.
• Jump discontinuity: left limit ≠ right limit (both finite).
• Infinite discontinuity: limit is ±∞.

ALGEBRA OF CONTINUOUS FUNCTIONS:
If f and g are continuous at x = a, then:
• f + g, f - g, f·g are continuous at x = a.
• f/g is continuous at x = a provided g(a) ≠ 0.
• Composition fog is continuous if g is continuous at a and f is continuous at g(a).

DIFFERENTIABILITY:
f is differentiable at x = a if f'(a) = lim(h→0) [f(a+h) - f(a)]/h exists.
• LHD = lim(h→0⁻) [f(a+h) - f(a)]/h; RHD = lim(h→0⁺) [f(a+h) - f(a)]/h
• Differentiable at a ⟺ LHD = RHD.
• Every differentiable function is continuous, but NOT vice versa.
• f(x) = |x| is continuous at x = 0 but NOT differentiable (LHD = -1, RHD = +1).

CHAIN RULE:
If y = f(u) and u = g(x), then dy/dx = (dy/du)·(du/dx).
Example: y = sin(x²). Let u = x², y = sin u.
dy/dx = cos u · 2x = 2x cos(x²).

IMPLICIT DIFFERENTIATION:
When y is not isolated, differentiate both sides w.r.t. x, using chain rule for y terms (dy/dx appears as a factor).
Example: x² + y² = 25. Differentiating: 2x + 2y(dy/dx) = 0. So dy/dx = -x/y.

LOGARITHMIC DIFFERENTIATION:
Used when function has variable in both base and exponent, or is a complex product/quotient.
Step 1: Take log of both sides. Step 2: Differentiate implicitly.
Example: y = xˣ. ln y = x ln x. (1/y)(dy/dx) = ln x + 1. dy/dx = xˣ(ln x + 1).

PARAMETRIC DIFFERENTIATION:
If x = f(t) and y = g(t), then dy/dx = (dy/dt)/(dx/dt) = g'(t)/f'(t).
Example: x = a cosθ, y = a sinθ. dx/dθ = -a sinθ, dy/dθ = a cosθ.
dy/dx = a cosθ/(-a sinθ) = -cosθ/sinθ = -cotθ.

ROLLE'S THEOREM:
If f is (i) continuous on [a,b], (ii) differentiable on (a,b), (iii) f(a) = f(b), then there exists c ∈ (a,b) such that f'(c) = 0. Geometric meaning: there is a point with horizontal tangent between a and b.

MEAN VALUE THEOREM (Lagrange's):
If f is (i) continuous on [a,b] and (ii) differentiable on (a,b), then there exists c ∈ (a,b) such that:
f'(c) = [f(b) - f(a)]/(b - a).
Geometric meaning: there is a point where the tangent is parallel to the chord joining (a, f(a)) and (b, f(b)).

Example of MVT: f(x) = x² on [1,3]. f(1) = 1, f(3) = 9. [f(3)-f(1)]/(3-1) = 8/2 = 4.
f'(x) = 2x = 4 gives x = 2. Since 2 ∈ (1,3), MVT is verified with c = 2.`,
    keyPoints: [
      "Continuity at a: f(a) defined + lim exists + lim = f(a) — all 3 must hold",
      "Differentiability implies continuity; continuity does NOT imply differentiability",
      "f(x)=|x| is continuous but not differentiable at x=0 (LHD=-1, RHD=+1)",
      "Chain rule: d/dx[f(g(x))] = f'(g(x))·g'(x)",
      "Logarithmic differentiation: for yˣ or xʸ type, take ln both sides then differentiate",
      "Rolle's Theorem requires f(a) = f(b); MVT has no such restriction",
      "Parametric: dy/dx = (dy/dt)/(dx/dt)",
    ],
    tags: [
      "Continuity",
      "Differentiability",
      "Chain Rule",
      "MVT",
      "Rolle's Theorem",
      "Limits",
    ],
  },
  {
    id: "note_mat_006",
    subject: "Maths",
    topic: "Differentiation",
    title: "Derivatives — Complete Formula Table & Rules",
    content: `Differentiation measures the rate of change of a function. Every CUET student must memorize the standard derivatives and the three main rules.

STANDARD DERIVATIVES TABLE:
| Function       | Derivative               |
|----------------|--------------------------|
| xⁿ            | nxⁿ⁻¹                    |
| eˣ            | eˣ                       |
| aˣ            | aˣ ln a                  |
| ln x           | 1/x                      |
| logₐ x         | 1/(x ln a)               |
| sin x          | cos x                    |
| cos x          | -sin x                   |
| tan x          | sec² x                   |
| cot x          | -cosec² x                |
| sec x          | sec x · tan x            |
| cosec x        | -cosec x · cot x         |
| sin⁻¹x         | 1/√(1-x²)                |
| cos⁻¹x         | -1/√(1-x²)               |
| tan⁻¹x         | 1/(1+x²)                 |
| cot⁻¹x         | -1/(1+x²)                |
| sec⁻¹x         | 1/(x√(x²-1))             |
| cosec⁻¹x       | -1/(x√(x²-1))            |
| √x             | 1/(2√x)                  |
| 1/x            | -1/x²                    |

PRODUCT RULE (UV Rule):
d/dx(uv) = u(dv/dx) + v(du/dx)
Memory: "uv' + vu'"
Example: y = x² · sin x. dy/dx = x²·cos x + sin x·2x = x²cosx + 2x sinx.

QUOTIENT RULE:
d/dx(u/v) = [v(du/dx) - u(dv/dx)] / v²
Memory: "low-D-high minus high-D-low, square the bottom and off you go"
Example: y = sin x / x. dy/dx = (x·cos x - sin x·1) / x² = (x cosx - sinx)/x².

CHAIN RULE:
d/dx[f(g(x))] = f'(g(x)) · g'(x)
Example 1: y = (3x² + 5)⁴. dy/dx = 4(3x²+5)³ · 6x = 24x(3x²+5)³.
Example 2: y = e^(sin x). dy/dx = e^(sinx) · cos x.
Example 3: y = ln(x² + 1). dy/dx = 1/(x²+1) · 2x = 2x/(x²+1).

COMPOSITE EXAMPLES WITH MULTIPLE RULES:
Example 4 (Product + Chain): y = x² · e^(2x).
dy/dx = x² · 2e^(2x) + e^(2x) · 2x = 2x²e^(2x) + 2xe^(2x) = 2xe^(2x)(x+1).

Example 5 (Quotient + Chain): y = (x²+1)/(x²-1).
dy/dx = [(x²-1)·2x - (x²+1)·2x]/(x²-1)² = [2x(x²-1-x²-1)]/(x²-1)² = [2x(-2)]/(x²-1)² = -4x/(x²-1)².

Example 6 (Inverse trig): y = sin⁻¹(2x). dy/dx = 1/√(1-(2x)²) · 2 = 2/√(1-4x²).

HIGHER ORDER DERIVATIVES:
Second derivative: d²y/dx² = d/dx(dy/dx). Denoted y'' or f''(x).
Example: y = x³ + 2x² - 5x + 1. y' = 3x² + 4x - 5. y'' = 6x + 4. y''' = 6.`,
    keyPoints: [
      "d/dx(xⁿ) = nxⁿ⁻¹; d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x — learn by heart",
      "d/dx(sin x) = cos x; d/dx(cos x) = -cos x — note the negative sign for cosine!",
      "d/dx(tan x) = sec²x; d/dx(cot x) = -cosec²x",
      "d/dx(sin⁻¹x) = 1/√(1-x²); d/dx(tan⁻¹x) = 1/(1+x²)",
      "Product rule: (uv)' = uv' + vu'; Quotient rule: (u/v)' = (vu'-uv')/v²",
      "Chain rule: differentiate outer function, keep inner same, then multiply by derivative of inner",
      "d/dx(aˣ) = aˣ ln a — don't forget the ln a factor",
    ],
    tags: [
      "Derivatives",
      "Differentiation",
      "Product Rule",
      "Chain Rule",
      "Standard Formulas",
    ],
  },
  {
    id: "note_mat_007",
    subject: "Maths",
    topic: "Applications of Derivatives",
    title: "Applications of Derivatives — Tangents, Maxima & Optimisation",
    content: `Derivatives have powerful geometric and practical applications in finding rates, tangent lines, and optimal values.

RATE OF CHANGE:
dy/dx represents the instantaneous rate of change of y with respect to x.
Example: A sphere's radius increases at 0.5 cm/s. Find rate of increase of volume when r = 3 cm.
V = (4/3)πr³. dV/dt = 4πr² · (dr/dt) = 4π(9)(0.5) = 18π cm³/s.

INCREASING AND DECREASING FUNCTIONS:
• f is increasing on (a,b) if f'(x) > 0 for all x ∈ (a,b).
• f is decreasing on (a,b) if f'(x) < 0 for all x ∈ (a,b).
• f is constant on (a,b) if f'(x) = 0 for all x ∈ (a,b).
Example: f(x) = x³ - 3x² + 4. f'(x) = 3x² - 6x = 3x(x-2).
f'(x) > 0 when x < 0 or x > 2 → increasing on (-∞,0) ∪ (2,∞).
f'(x) < 0 when 0 < x < 2 → decreasing on (0,2).

TANGENT AND NORMAL:
• Slope of tangent at point (x₀, y₀): m = f'(x₀).
• Equation of tangent: y - y₀ = m(x - x₀).
• Slope of normal: -1/m (since tangent ⊥ normal).
• Equation of normal: y - y₀ = (-1/m)(x - x₀).
Example: y = x² at x = 2. f'(x) = 2x, slope at x=2: m = 4. Point: (2, 4).
Tangent: y - 4 = 4(x - 2) → y = 4x - 4.
Normal: y - 4 = -¼(x - 2) → 4y - 16 = -(x-2) → x + 4y = 18.

MAXIMA AND MINIMA — FIRST DERIVATIVE TEST:
1. Find f'(x) = 0; solve for critical points x = c.
2. Check sign change of f'(x) around c:
   • f'(x) changes from + to -: Local Maximum at x = c.
   • f'(x) changes from - to +: Local Minimum at x = c.
   • No sign change: Point of Inflection.

SECOND DERIVATIVE TEST:
1. Find critical points from f'(c) = 0.
2. Compute f''(c):
   • f''(c) < 0: Local Maximum.
   • f''(c) > 0: Local Minimum.
   • f''(c) = 0: Test is inconclusive; use first derivative test.

Example: f(x) = x³ - 6x² + 9x + 1.
f'(x) = 3x² - 12x + 9 = 3(x-1)(x-3). Critical points: x = 1 and x = 3.
f''(x) = 6x - 12. f''(1) = -6 < 0 → Local max at x = 1; f(1) = 1-6+9+1 = 5.
f''(3) = 6 > 0 → Local min at x = 3; f(3) = 27-54+27+1 = 1.

ABSOLUTE MAXIMA/MINIMA ON CLOSED INTERVAL [a, b]:
1. Find all critical points in (a,b) where f'(x) = 0 or f'(x) doesn't exist.
2. Evaluate f at all critical points and at endpoints a and b.
3. Largest value = absolute maximum; smallest value = absolute minimum.

APPROXIMATIONS USING DIFFERENTIALS:
Δy ≈ dy = f'(x) · Δx.
Example: Approximate √(26). f(x) = √x. Take x = 25, Δx = 1.
f'(x) = 1/(2√x). f'(25) = 1/10. dy = (1/10)(1) = 0.1.
√26 ≈ √25 + 0.1 = 5.1.

OPTIMISATION PROBLEM EXAMPLE:
A box with square base and no top. Material = 108 cm². Maximise volume.
Let base side = x, height = h. Surface area: x² + 4xh = 108 → h = (108-x²)/(4x).
V = x²h = x²·(108-x²)/(4x) = x(108-x²)/4 = 27x - x³/4.
dV/dx = 27 - 3x²/4 = 0 → x² = 36 → x = 6. d²V/dx² = -3x/2 = -9 < 0 → Maximum.
V_max = 27(6) - 216/4 = 162 - 54 = 108 cm³.`,
    keyPoints: [
      "f'(x) > 0 → increasing; f'(x) < 0 → decreasing — determine sign of f'(x) on intervals",
      "Second derivative test: f''(c) < 0 → local max; f''(c) > 0 → local min",
      "Tangent slope = f'(x₀); Normal slope = -1/f'(x₀) (negative reciprocal)",
      "For absolute extrema on [a,b]: evaluate f at all critical points AND at endpoints",
      "Approximation: √(a² + Δ) ≈ a + Δ/(2a) using differentials",
      "Rate of change: use chain rule d/dt; identify the given rate and the required rate",
    ],
    tags: [
      "Applications",
      "Derivatives",
      "Maxima",
      "Minima",
      "Tangent",
      "Rate of Change",
      "Optimisation",
    ],
  },
  {
    id: "note_mat_008",
    subject: "Maths",
    topic: "Integration",
    title: "Indefinite Integration — Formulas, Substitution & By Parts",
    content: `Integration is the reverse process of differentiation. The indefinite integral ∫f(x)dx represents the family of antiderivatives F(x) + C, where F'(x) = f(x).

STANDARD INTEGRATION FORMULAS:
| Integrand        | Integral                        |
|------------------|---------------------------------|
| xⁿ (n ≠ -1)     | xⁿ⁺¹/(n+1) + C                 |
| 1/x              | ln|x| + C                       |
| eˣ               | eˣ + C                          |
| aˣ               | aˣ/(ln a) + C                   |
| sin x            | -cos x + C                      |
| cos x            | sin x + C                       |
| tan x            | ln|sec x| + C = -ln|cos x| + C  |
| cot x            | ln|sin x| + C                   |
| sec x            | ln|sec x + tan x| + C           |
| cosec x          | ln|cosec x - cot x| + C         |
| sec²x            | tan x + C                       |
| cosec²x          | -cot x + C                      |
| sec x tan x      | sec x + C                       |
| cosec x cot x    | -cosec x + C                    |
| 1/√(1-x²)        | sin⁻¹x + C                      |
| 1/(1+x²)         | tan⁻¹x + C                      |
| 1/(x²+a²)        | (1/a)tan⁻¹(x/a) + C            |
| 1/√(a²-x²)       | sin⁻¹(x/a) + C                 |
| 1/(x²-a²)        | (1/2a)ln|(x-a)/(x+a)| + C      |
| 1/(a²-x²)        | (1/2a)ln|(a+x)/(a-x)| + C      |
| √(x²+a²)         | (x√(x²+a²))/2 + (a²/2)ln|x+√(x²+a²)| + C |

METHOD 1 — SUBSTITUTION:
Replace a part of the integrand with t, then express dx in terms of dt.
Example 1: ∫2x(x²+3)⁴ dx. Let t = x²+3, dt = 2x dx.
∫t⁴ dt = t⁵/5 + C = (x²+3)⁵/5 + C.

Example 2: ∫cos x · e^(sinx) dx. Let t = sin x, dt = cos x dx.
∫eᵗ dt = eᵗ + C = e^(sinx) + C.

Example 3: ∫tan x dx = ∫sin x/cos x dx. Let t = cos x, dt = -sin x dx.
∫-dt/t = -ln|t| + C = -ln|cos x| + C = ln|sec x| + C.

METHOD 2 — INTEGRATION BY PARTS (ILATE Rule):
∫u dv = uv - ∫v du.
ILATE Order (choose u first): Inverse trig → Logarithm → Algebraic → Trigonometric → Exponential.
Example 1: ∫x eˣ dx. u = x (Algebraic), dv = eˣ dx. du = dx, v = eˣ.
∫x eˣ dx = x eˣ - ∫eˣ dx = x eˣ - eˣ + C = eˣ(x-1) + C.

Example 2: ∫x² ln x dx. u = ln x (Logarithm), dv = x² dx. du = 1/x dx, v = x³/3.
∫x² ln x dx = (x³/3)ln x - ∫(x³/3)(1/x) dx = (x³/3)ln x - ∫x²/3 dx = (x³/3)ln x - x³/9 + C.

Special case: ∫eˣ[f(x) + f'(x)] dx = eˣ f(x) + C — extremely useful shortcut!
Example: ∫eˣ(sin x + cos x)dx = eˣ sin x + C [since f(x)=sinx, f'(x)=cosx].

PARTIAL FRACTIONS:
Used to integrate rational functions (proper fractions where degree of numerator < denominator).
Type 1 — Linear factors: (x+a)(x+b) → A/(x+a) + B/(x+b).
Type 2 — Repeated factor: (x+a)² → A/(x+a) + B/(x+a)².
Type 3 — Irreducible quadratic: (x²+bx+c) → (Ax+B)/(x²+bx+c).
Example: ∫1/((x-1)(x+2)) dx. 1/((x-1)(x+2)) = A/(x-1) + B/(x+2).
Multiply: 1 = A(x+2) + B(x-1). At x=1: 1 = 3A → A=1/3. At x=-2: 1 = -3B → B=-1/3.
∫[1/(3(x-1)) - 1/(3(x+2))] dx = (1/3)ln|x-1| - (1/3)ln|x+2| + C = (1/3)ln|(x-1)/(x+2)| + C.`,
    keyPoints: [
      "∫xⁿdx = xⁿ⁺¹/(n+1) + C for n ≠ -1; ∫1/x dx = ln|x| + C for n = -1",
      "ILATE rule for integration by parts: Inverse trig first, Exponential last",
      "∫eˣ[f(x)+f'(x)]dx = eˣf(x) + C — very powerful shortcut formula",
      "∫1/(x²+a²) dx = (1/a)tan⁻¹(x/a) + C; ∫1/√(a²-x²) dx = sin⁻¹(x/a) + C",
      "Substitution: identify the inner function, let t = inner part, find dt",
      "Partial fractions: for distinct linear factors, use A/(x-a) + B/(x-b) form",
    ],
    tags: [
      "Integration",
      "Indefinite",
      "Substitution",
      "By Parts",
      "ILATE",
      "Partial Fractions",
    ],
  },
  {
    id: "note_mat_009",
    subject: "Maths",
    topic: "Definite Integrals",
    title: "Definite Integrals & Properties — King Property & Applications",
    content: `The definite integral ∫ₐᵇ f(x) dx represents the signed area bounded by y = f(x), the x-axis, and the vertical lines x = a and x = b.

FUNDAMENTAL THEOREM OF CALCULUS:
If F is the antiderivative of f (F'(x) = f(x)), then:
∫ₐᵇ f(x) dx = F(b) - F(a) = [F(x)]ₐᵇ

DEFINITE INTEGRAL AS LIMIT OF SUM:
∫ₐᵇ f(x) dx = lim(n→∞) h · Σᵢ₌₁ⁿ f(a + ih), where h = (b-a)/n.

PROPERTIES OF DEFINITE INTEGRALS:
Property 1: ∫ₐᵇ f(x) dx = -∫ᵦₐ f(x) dx. Swapping limits changes sign.
Property 2: ∫ₐᵃ f(x) dx = 0. When limits are equal, integral = 0.
Property 3 (Additive): ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵦ f(x) dx for any c ∈ [a,b].
Property 4: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b-x) dx. Replace x by (a+b-x), same integral!
Property 5 (King Property — MOST IMPORTANT): ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a-x) dx.
Property 6: ∫₀²ᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f(2a-x) = f(x) (even about a).
            ∫₀²ᵃ f(x) dx = 0 if f(2a-x) = -f(x) (odd about a).
Property 7 (Even/Odd functions): 
   If f(-x) = f(x) (even): ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx.
   If f(-x) = -f(x) (odd): ∫₋ₐᵃ f(x) dx = 0.

WORKED EXAMPLES USING PROPERTIES:
Example 1 (King Property): Evaluate ∫₀^(π/2) sin x/(sin x + cos x) dx.
Let I = ∫₀^(π/2) sin x/(sin x + cos x) dx.
Using King Property (replace x with π/2 - x):
I = ∫₀^(π/2) cos x/(cos x + sin x) dx.
Adding both: 2I = ∫₀^(π/2) (sinx+cosx)/(sinx+cosx) dx = ∫₀^(π/2) 1 dx = π/2.
So I = π/4.

Example 2 (Even/Odd): ∫₋₂² (x³ + x cos x) dx.
f(x) = x³ + x cos x. f(-x) = -x³ + (-x)cos(-x) = -x³ - x cos x = -f(x). Odd function!
Therefore, ∫₋₂² f(x) dx = 0.

Example 3: ∫₀^π x sin x dx using by parts.
u = x, dv = sin x dx. du = dx, v = -cos x.
= [-x cos x]₀^π + ∫₀^π cos x dx = [-π(-1) - 0] + [sin x]₀^π = π + [0 - 0] = π.

Example 4: ∫₁² (2x + 3)/(x² + 3x + 2) dx.
Note: d/dx(x²+3x+2) = 2x+3. So this is ∫f'(x)/f(x) dx = ln|f(x)| + C.
= [ln|x²+3x+2|]₁² = ln|4+6+2| - ln|1+3+2| = ln 12 - ln 6 = ln(12/6) = ln 2.

AREA UNDER CURVES:
Area between y = f(x) and x-axis from a to b: A = ∫ₐᵇ |f(x)| dx.
Area between curves y = f(x) and y = g(x): A = ∫ₐᵇ |f(x) - g(x)| dx.`,
    keyPoints: [
      "King Property: ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx — most powerful tool for CUET integrals",
      "Odd function over symmetric interval [-a,a]: integral = 0 always",
      "Even function over [-a,a]: ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx",
      "∫ₐᵇ f(x)dx = -∫ᵦₐ f(x)dx — swapping limits changes the sign",
      "If numerator = derivative of denominator: ∫f'(x)/f(x)dx = ln|f(x)| + C",
      "Area = ∫|f(x)|dx — use modulus, split at zeros of f(x) if function changes sign",
    ],
    tags: [
      "Definite Integrals",
      "King Property",
      "Properties",
      "Area",
      "Fundamental Theorem",
    ],
  },
  {
    id: "note_mat_010",
    subject: "Maths",
    topic: "Differential Equations",
    title: "Differential Equations — Formation, Types & Solution Methods",
    content: `A differential equation is an equation involving derivatives of an unknown function. They model real-world phenomena like population growth, cooling, decay, and circuits.

BASIC DEFINITIONS:
• Order: The order of the highest-order derivative present. y'' + y' + y = 0 has order 2.
• Degree: The power of the highest-order derivative, after clearing fractions/radicals (and equation must be polynomial in derivatives). y''' + 3y' = 0 has degree 1.
• General Solution: Solution containing arbitrary constants equal to the order of the DE.
• Particular Solution: General solution with constants determined by initial conditions.

FORMATION OF DIFFERENTIAL EQUATIONS:
To form a DE from a relation, differentiate and eliminate the arbitrary constants.
Example: y = A cos x + B sin x (two constants → second-order DE).
y' = -A sin x + B cos x. y'' = -A cos x - B sin x = -y.
So the DE is y'' + y = 0.

TYPE 1 — VARIABLE SEPARABLE:
Form: f(x) dx + g(y) dy = 0, or dy/dx = f(x)/g(y).
Method: Separate variables — all x's and dx on one side, all y's and dy on other. Then integrate both sides.
Example: dy/dx = (1+y²)/(1+x²).
Separate: dy/(1+y²) = dx/(1+x²).
Integrate: tan⁻¹y = tan⁻¹x + C. Or tan⁻¹y - tan⁻¹x = C.

Example 2: dy/dx = eˣ⁺ʸ = eˣ·eʸ.
Separate: e⁻ʸ dy = eˣ dx.
Integrate: -e⁻ʸ = eˣ + C, i.e., eˣ + e⁻ʸ = -C (rename as C).

TYPE 2 — HOMOGENEOUS DIFFERENTIAL EQUATIONS:
Form: dy/dx = f(y/x), i.e., the equation is homogeneous of degree 0 in x and y.
Method: Substitute y = vx, so dy/dx = v + x(dv/dx). Then separate variables in v and x.
Example: x dy/dx = y + x. dy/dx = y/x + 1.
Substitute y = vx: v + x dv/dx = v + 1.
x dv/dx = 1. dv = dx/x.
Integrate: v = ln|x| + C. Replace v = y/x: y/x = ln|x| + C. So y = x(ln|x| + C).

TYPE 3 — LINEAR DIFFERENTIAL EQUATIONS:
Standard form: dy/dx + P(x)y = Q(x).
Integrating Factor (IF) = e^(∫P dx).
Solution: y · (IF) = ∫Q · (IF) dx + C.
Also written as: y · e^(∫P dx) = ∫Q e^(∫P dx) dx + C.

Example: dy/dx + (2/x)y = x².
P = 2/x, Q = x². IF = e^(∫2/x dx) = e^(2 ln x) = x².
Solution: y·x² = ∫x²·x² dx = ∫x⁴ dx = x⁵/5 + C.
So y = x³/5 + C/x².

Example 2 (in terms of x): dx/dy + Px = Q.
Can also handle linear DE in x as a function of y by using IF = e^(∫P dy).

APPLICATIONS OF DEs:
Growth/Decay: dN/dt = kN → N = N₀ eᵏᵗ (k>0 for growth, k<0 for decay).
Newton's Cooling: dT/dt = -k(T - T₀). Separate and integrate to get T = T₀ + (T_init - T₀)e^(-kt).`,
    keyPoints: [
      "Order = highest derivative; Degree = power of highest derivative (in polynomial form)",
      "Variable separable: separate f(x)dx = g(y)dy, then integrate both sides independently",
      "Homogeneous DE: substitute y = vx; dy/dx = v + x(dv/dx), then separate v and x",
      "Linear DE (dy/dx + Py = Q): IF = e^(∫Pdx); solution: y·IF = ∫Q·IF dx + C",
      "Exponential growth/decay model: dN/dt = kN → N = N₀eᵏᵗ",
      "To form DE: count constants n; differentiate n times; eliminate all constants",
    ],
    tags: [
      "Differential Equations",
      "Variable Separable",
      "Homogeneous",
      "Linear DE",
      "Integrating Factor",
    ],
  },
  {
    id: "note_mat_011",
    subject: "Maths",
    topic: "Vectors",
    title: "Vectors — Dot Product, Cross Product & Applications",
    content: `Vectors have both magnitude and direction. Scalars have only magnitude. Vector algebra is fundamental to 3D geometry, physics, and engineering.

TYPES OF VECTORS:
• Zero Vector (0⃗): Magnitude = 0. Direction indeterminate.
• Unit Vector: Magnitude = 1. â = a⃗/|a⃗|.
• Coinitial Vectors: Same initial point.
• Collinear/Parallel Vectors: Same or opposite direction (one is scalar multiple of other).
• Equal Vectors: Same magnitude and same direction.

POSITION VECTOR:
Position vector of point P(x,y,z) with respect to origin O: OP⃗ = xî + yĵ + zk̂.
|OP⃗| = √(x² + y² + z²).

VECTOR ADDITION:
• Triangle Law: If a⃗ = AB⃗ and b⃗ = BC⃗, then a⃗ + b⃗ = AC⃗.
• Parallelogram Law: If ABCD is a parallelogram with AB⃗ = a⃗ and AD⃗ = b⃗, then AC⃗ = a⃗ + b⃗.
• Properties: Commutative (a⃗+b⃗ = b⃗+a⃗), Associative, a⃗+0⃗ = a⃗.
• Section formula: Point dividing AB in ratio m:n is (ma⃗ + nb⃗)/(m+n) (internally).

DOT PRODUCT (Scalar Product):
a⃗ · b⃗ = |a⃗||b⃗|cosθ, where θ is angle between the vectors.
• a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ (component form).
• a⃗ · a⃗ = |a⃗|² = a₁² + a₂² + a₃².
• î·î = ĵ·ĵ = k̂·k̂ = 1; î·ĵ = ĵ·k̂ = k̂·î = 0.
• Commutative: a⃗·b⃗ = b⃗·a⃗.
• If a⃗ ⊥ b⃗ (non-zero vectors): a⃗·b⃗ = 0.
• Angle between vectors: cosθ = (a⃗·b⃗)/(|a⃗||b⃗|).
• Projection of a⃗ on b⃗ = (a⃗·b⃗)/|b⃗|.

Example: a⃗ = 2î - 3ĵ + k̂, b⃗ = î + 2ĵ - 4k̂.
a⃗·b⃗ = 2(1)+(-3)(2)+(1)(-4) = 2-6-4 = -8.
|a⃗| = √(4+9+1) = √14. |b⃗| = √(1+4+16) = √21. cosθ = -8/√(14×21) = -8/√294.

CROSS PRODUCT (Vector Product):
a⃗ × b⃗ = |a⃗||b⃗|sinθ n̂, where n̂ is perpendicular to both (right-hand rule).
• a⃗ × b⃗ = |î  ĵ  k̂; a₁ a₂ a₃; b₁ b₂ b₃| (determinant form).
• a⃗ × a⃗ = 0⃗ (always).
• NOT commutative: a⃗ × b⃗ = -(b⃗ × a⃗).
• î×ĵ = k̂; ĵ×k̂ = î; k̂×î = ĵ; ĵ×î = -k̂ etc.
• If a⃗ ∥ b⃗ (non-zero vectors): a⃗ × b⃗ = 0⃗.
• Area of parallelogram = |a⃗ × b⃗|.
• Area of triangle with sides a⃗ and b⃗ = ½|a⃗ × b⃗|.
• Area of triangle with vertices A, B, C = ½|AB⃗ × AC⃗|.

SCALAR TRIPLE PRODUCT:
[a⃗ b⃗ c⃗] = a⃗ · (b⃗ × c⃗) = |a₁ a₂ a₃; b₁ b₂ b₃; c₁ c₂ c₃|.
• Volume of parallelepiped = |[a⃗ b⃗ c⃗]|.
• Three vectors are coplanar ⟺ [a⃗ b⃗ c⃗] = 0.
• [a⃗ b⃗ c⃗] = [b⃗ c⃗ a⃗] = [c⃗ a⃗ b⃗] (cyclic permutation doesn't change value).

Example — Cross Product: a⃗ = î + 2ĵ + 3k̂, b⃗ = 2î - ĵ + k̂.
a⃗ × b⃗ = |î ĵ k̂; 1 2 3; 2 -1 1| = î(2·1-3·(-1)) - ĵ(1·1-3·2) + k̂(1·(-1)-2·2)
= î(2+3) - ĵ(1-6) + k̂(-1-4) = 5î + 5ĵ - 5k̂.
|a⃗ × b⃗| = √(25+25+25) = 5√3. Area of parallelogram = 5√3.`,
    keyPoints: [
      "Dot product: a⃗·b⃗ = |a||b|cosθ = a₁b₁+a₂b₂+a₃b₃; zero means perpendicular",
      "Cross product: |a⃗×b⃗| = |a||b|sinθ; zero means parallel",
      "î·î = 1, î·ĵ = 0; î×ĵ = k̂, î×î = 0⃗",
      "Area of parallelogram = |a⃗×b⃗|; area of triangle = ½|a⃗×b⃗|",
      "Scalar triple product = 0 ⟺ vectors are coplanar",
      "a⃗×b⃗ = -(b⃗×a⃗): cross product is anti-commutative (order matters!)",
      "Unit vector â = a⃗/|a⃗|; |â| = 1 always",
    ],
    tags: [
      "Vectors",
      "Dot Product",
      "Cross Product",
      "Scalar Triple Product",
      "Area",
    ],
  },
  {
    id: "note_mat_012",
    subject: "Maths",
    topic: "Three Dimensional Geometry",
    title: "3D Geometry — Lines, Planes, Distance & Angles",
    content: `Three Dimensional Geometry extends coordinate geometry to space. Every point is defined by three coordinates (x, y, z).

DIRECTION COSINES AND DIRECTION RATIOS:
Direction cosines (l, m, n) are the cosines of angles α, β, γ that a line makes with positive x, y, z axes respectively.
• l = cosα, m = cosβ, n = cosγ.
• Key relation: l² + m² + n² = 1 (always true for direction cosines).
• Direction ratios (a, b, c): proportional to direction cosines. l/a = m/b = n/c = 1/√(a²+b²+c²).
• Conversion: l = a/√(a²+b²+c²), m = b/√(a²+b²+c²), n = c/√(a²+b²+c²).

EQUATIONS OF A LINE:
Vector form: r⃗ = a⃗ + λb⃗, where a⃗ = position vector of a point on the line, b⃗ = direction vector.
Cartesian form: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c = λ (symmetric form).
Two-point form: (x-x₁)/(x₂-x₁) = (y-y₁)/(y₂-y₁) = (z-z₁)/(z₂-z₁).

ANGLE BETWEEN TWO LINES:
If direction vectors are b₁⃗ and b₂⃗:
cosθ = |b₁⃗ · b₂⃗| / (|b₁⃗| · |b₂⃗|) = |a₁a₂+b₁b₂+c₁c₂| / √(a₁²+b₁²+c₁²) · √(a₂²+b₂²+c₂²).
Parallel lines: a₁/a₂ = b₁/b₂ = c₁/c₂.
Perpendicular lines: a₁a₂ + b₁b₂ + c₁c₂ = 0.

SKEW LINES AND SHORTEST DISTANCE:
Two lines not intersecting and not parallel are called skew lines.
Shortest distance (SD) between r⃗ = a₁⃗ + λb₁⃗ and r⃗ = a₂⃗ + μb₂⃗:
SD = |(a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗)| / |b₁⃗ × b₂⃗|.
Coplanar (intersecting) lines: SD = 0, i.e., (a₂⃗ - a₁⃗) · (b₁⃗ × b₂⃗) = 0.

EQUATIONS OF A PLANE:
1. Vector form: r⃗ · n̂ = d, where n̂ is unit normal to the plane.
2. General form: ax + by + cz = d (a, b, c are direction ratios of normal).
3. Normal form: lx + my + nz = p (l, m, n are direction cosines, p = perpendicular distance from origin).
4. Intercept form: x/a + y/b + z/c = 1 (intercepts a, b, c on axes).
5. Through three points: Use the determinant |x-x₁ y-y₁ z-z₁; x₂-x₁ y₂-y₁ z₂-z₁; x₃-x₁ y₃-y₁ z₃-z₁| = 0.

ANGLE BETWEEN TWO PLANES:
cosθ = |n₁⃗ · n₂⃗| / (|n₁⃗| · |n₂⃗|) = |a₁a₂+b₁b₂+c₁c₂| / √(a₁²+b₁²+c₁²) · √(a₂²+b₂²+c₂²).
Parallel planes: a₁/a₂ = b₁/b₂ = c₁/c₂.
Perpendicular planes: a₁a₂ + b₁b₂ + c₁c₂ = 0.

ANGLE BETWEEN LINE AND PLANE:
sinθ = |b⃗ · n⃗| / (|b⃗| · |n⃗|) (use sin, not cos!).
Line is in plane: b⃗ · n⃗ = 0. Line ⊥ plane: b⃗ ∥ n⃗.

DISTANCE FROM POINT TO PLANE:
Distance from point P(x₁, y₁, z₁) to plane ax + by + cz + d = 0:
D = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²).
Distance from origin to plane ax+by+cz = d: D = |d|/√(a²+b²+c²).

Example: Distance from (2, 3, -5) to plane 3x - 4y + 12z - 17 = 0.
D = |3(2) - 4(3) + 12(-5) - 17| / √(9+16+144) = |6-12-60-17| / √169 = |-83|/13 = 83/13.`,
    keyPoints: [
      "l²+m²+n² = 1 always (direction cosines); direction ratios (a,b,c) are proportional",
      "Line: r⃗ = a⃗+λb⃗ (vector); (x-x₁)/a = (y-y₁)/b = (z-z₁)/c (Cartesian)",
      "Parallel lines: ratio of DRs equal; perpendicular lines: a₁a₂+b₁b₂+c₁c₂ = 0",
      "Angle between planes: use cos with normal vectors; angle between line and plane: use sin",
      "Distance from point (x₁,y₁,z₁) to plane ax+by+cz+d=0: |ax₁+by₁+cz₁+d|/√(a²+b²+c²)",
      "Coplanar lines condition: (a₂⃗-a₁⃗)·(b₁⃗×b₂⃗) = 0",
    ],
    tags: [
      "3D Geometry",
      "Direction Cosines",
      "Lines",
      "Planes",
      "Distance",
      "Angle",
    ],
  },
  {
    id: "note_mat_013",
    subject: "Maths",
    topic: "Linear Programming",
    title: "Linear Programming — Formulation, Graphical Method & Optimisation",
    content: `Linear Programming Problem (LPP) involves optimising (maximising or minimising) a linear objective function subject to linear constraints.

TERMINOLOGY:
• Objective Function: Linear function Z = ax + by to be maximised or minimised.
• Constraints: Linear inequalities that the variables must satisfy.
• Decision Variables: Variables x and y (typically ≥ 0) representing quantities to decide.
• Feasible Region: Set of all points satisfying ALL constraints simultaneously.
• Feasible Solution: Any point in the feasible region.
• Optimal Solution: Feasible solution that gives the best (max/min) value of Z.
• Corner Points (Vertices): Points where boundary lines of constraints intersect; the optimal solution always occurs at a corner point.

GRAPHICAL METHOD — STEPS:
1. Formulate the LPP: Define variables, write objective function and constraints.
2. Plot the constraints: Draw boundary lines as equalities. Use two points per line.
3. Identify feasible region: Use test point (0,0) or check which side satisfies all inequalities. Shade the feasible region.
4. Find corner points: Solve pairs of boundary equations simultaneously to find vertices of the feasible region. Include intercepts with axes.
5. Evaluate Z at every corner point.
6. Identify optimal value: Maximum or minimum of Z values obtained.

TYPES OF FEASIBLE REGIONS:
• Bounded: Enclosed region (finite area). Both max and min exist.
• Unbounded: Open region extending to infinity. May or may not have an optimal solution.

SPECIAL CASES:
• Infeasible LPP: No point satisfies all constraints → no feasible region.
• Multiple Optimal Solutions: Z is constant on one entire side of the feasible region (optimal occurs along an edge, not just a point).

WORKED EXAMPLE 1 — Profit Maximisation:
A factory makes desks (D) and chairs (C). Each desk needs 4 hours carpentry, 2 hours painting. Each chair needs 3 hours carpentry, 1 hour painting. Constraints: ≤40 hours carpentry, ≤20 hours painting. Profit: ₹180 per desk, ₹120 per chair. Maximise Z.
Let x = desks, y = chairs.
Objective: Maximise Z = 180x + 120y.
Constraints: 4x + 3y ≤ 40, 2x + y ≤ 20, x ≥ 0, y ≥ 0.
Corner points: (0,0), (10,0), (5,10/3) → no, solve properly.
4x+3y=40 and 2x+y=20: From second, y=20-2x. Substitute: 4x+3(20-2x)=40 → 4x+60-6x=40 → -2x=-20 → x=10. Then y=0.
Check (0,0): Z=0. Check (10,0): Z=1800. Check (0,40/3)≈(0,13.3): Z=120(13.3)=1600. Corner points: (0,0),(10,0),(0,40/3).
Actually vertex of intersection at (10,0), so: Z(0,0)=0, Z(10,0)=1800, Z(0,40/3)=1600. Maximum Z = 1800 at (10,0) → make 10 desks, 0 chairs.

WORKED EXAMPLE 2 — Cost Minimisation:
Minimise Z = 6x + 5y subject to: x + y ≥ 6, 3x + y ≥ 9, x ≥ 0, y ≥ 0.
Corner points of feasible region: Intersection of x+y=6 and 3x+y=9: subtract to get 2x=3 → x=1.5, y=4.5.
Corner points: (0,9), (1.5, 4.5), (6,0).
Z(0,9)=45. Z(1.5,4.5)=9+22.5=31.5. Z(6,0)=36. Minimum Z = 31.5 at x=1.5, y=4.5.

FORMULATION TIPS:
• Read the problem carefully to identify what the variables represent.
• Constraints come from resource limitations ("at most", "at least", "exactly").
• Non-negativity constraints x ≥ 0, y ≥ 0 are almost always present.
• The phrase "maximise profit" or "minimise cost/resources" identifies the objective function.`,
    keyPoints: [
      "Optimal solution of LPP always occurs at a corner (vertex) of the feasible region",
      "Graphical method: plot constraints → shade feasible region → find corner points → evaluate Z",
      "Bounded feasible region → both max and min exist; unbounded → may not have both",
      "x ≥ 0 and y ≥ 0 (non-negativity constraints) must always be included",
      "Find corner points by solving pairs of constraint equations simultaneously",
      "If Z is same at two adjacent corners, optimal solution is the entire edge between them",
    ],
    tags: [
      "Linear Programming",
      "LPP",
      "Graphical Method",
      "Optimisation",
      "Constraints",
      "Feasible Region",
    ],
  },
  {
    id: "note_mat_014",
    subject: "Maths",
    topic: "Probability",
    title: "Probability — Conditional, Bayes' Theorem & Binomial Distribution",
    content: `Probability measures the likelihood of events. CUET probability section tests conditional probability, Bayes' theorem, and distribution functions.

CONDITIONAL PROBABILITY:
P(A|B) = P(A ∩ B) / P(B), provided P(B) ≠ 0.
Read as "probability of A given B has occurred."
P(A ∩ B) = P(A|B) · P(B) = P(B|A) · P(A). This is the Multiplication Theorem.

INDEPENDENT EVENTS:
A and B are independent if P(A ∩ B) = P(A) · P(B).
For independent events: P(A|B) = P(A) and P(B|A) = P(B).
Mutually exclusive ≠ independent! (Mutually exclusive means P(A∩B) = 0.)

TOTAL PROBABILITY THEOREM:
If B₁, B₂, ..., Bₙ are mutually exclusive and exhaustive events (partition of sample space), then:
P(A) = P(B₁)·P(A|B₁) + P(B₂)·P(A|B₂) + ... + P(Bₙ)·P(A|Bₙ) = Σᵢ P(Bᵢ)·P(A|Bᵢ).

BAYES' THEOREM:
P(Bᵢ|A) = P(Bᵢ) · P(A|Bᵢ) / Σⱼ P(Bⱼ) · P(A|Bⱼ).
This gives the posterior probability of hypothesis Bᵢ given evidence A.

WORKED EXAMPLE — Bayes' Theorem:
Bag I: 3 red, 4 black. Bag II: 5 red, 6 black. A bag is selected at random and a ball drawn is red. Find probability it came from Bag I.
Let B₁ = Bag I chosen, B₂ = Bag II chosen, A = red ball drawn.
P(B₁) = P(B₂) = 1/2.
P(A|B₁) = 3/7. P(A|B₂) = 5/11.
P(A) = (1/2)(3/7) + (1/2)(5/11) = 3/14 + 5/22 = 33/154 + 35/154 = 68/154.
P(B₁|A) = [(1/2)(3/7)] / [68/154] = (3/14) / (68/154) = (3/14) × (154/68) = 33/68.

RANDOM VARIABLE AND PROBABILITY DISTRIBUTION:
A random variable X assigns a numerical value to each outcome of an experiment.
The probability distribution lists all values of X with their probabilities.
Requirements: Σ P(xᵢ) = 1 and all P(xᵢ) ≥ 0.

Mean (Expected Value): E(X) = Σ xᵢ P(xᵢ).
Variance: Var(X) = E(X²) - [E(X)]² = Σ xᵢ² P(xᵢ) - [Σ xᵢ P(xᵢ)]².
Standard Deviation: σ = √Var(X).

BINOMIAL DISTRIBUTION:
Conditions: n independent trials, each trial has only two outcomes (success/failure), constant probability p of success on each trial.
P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ, where q = 1 - p, r = 0, 1, 2, ..., n.
Mean = np.
Variance = npq.
Standard Deviation = √(npq).

Example: A fair coin is tossed 6 times. Find P(exactly 4 heads).
n=6, p=1/2, q=1/2, r=4.
P(X=4) = ⁶C₄ (1/2)⁴ (1/2)² = 15 × (1/16) × (1/4) = 15/64.
Mean = np = 6×(1/2) = 3. Variance = npq = 6×(1/2)×(1/2) = 3/2.

CONDITIONAL PROBABILITY EXAMPLE:
A die is rolled twice. Find probability that second roll is 6, given first roll was even.
Sample space of first roll being even: {2,4,6} — 3 outcomes.
For each, second roll can be anything — 6 outcomes. Total: 18 equally likely outcomes.
Favourable: first roll ∈ {2,4,6}, second roll = 6 → 3 outcomes.
P = 3/18 = 1/6. Note: this equals P(second = 6) = 1/6, confirming independence of two dice rolls.`,
    keyPoints: [
      "P(A|B) = P(A∩B)/P(B) — conditional probability formula",
      "Multiplication theorem: P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)",
      "Independent events: P(A∩B) = P(A)·P(B) — not the same as mutually exclusive!",
      "Total probability: P(A) = Σ P(Bᵢ)·P(A|Bᵢ) — weighted average over partition",
      "Binomial: P(X=r) = ⁿCᵣpʳqⁿ⁻ʳ; mean = np; variance = npq",
      "E(X) = Σxᵢ P(xᵢ); Var(X) = E(X²) - [E(X)]²",
      "Σ P(xᵢ) = 1 must hold for any valid probability distribution",
    ],
    tags: [
      "Probability",
      "Conditional",
      "Bayes Theorem",
      "Binomial Distribution",
      "Random Variable",
      "Expected Value",
    ],
  },
  {
    id: "note_mat_015",
    subject: "Maths",
    topic: "Formula Cheatsheet",
    title: "Complete CUET Maths Formula Cheatsheet — Last-Minute Revision",
    content: `This is your complete formula revision sheet for CUET Maths. Study this before the exam.

━━━ ALGEBRA — MATRICES & DETERMINANTS ━━━
• (AB)ᵀ = BᵀAᵀ (order reverses)
• A⁻¹ = adj(A)/|A|; valid only when |A| ≠ 0
• adj(A) = transpose of cofactor matrix
• |AB| = |A||B|; |kA| = kⁿ|A| for n×n matrix
• Cofactor Cᵢⱼ = (-1)^(i+j) Mᵢⱼ
• Cramer's Rule: x = Dₓ/D, y = Dᵧ/D (D ≠ 0)
• Area of triangle = ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|

━━━ DERIVATIVES TABLE ━━━
• d/dx(xⁿ) = nxⁿ⁻¹
• d/dx(eˣ) = eˣ; d/dx(aˣ) = aˣ ln a
• d/dx(ln x) = 1/x; d/dx(logₐx) = 1/(x ln a)
• d/dx(sin x) = cos x; d/dx(cos x) = -sin x
• d/dx(tan x) = sec²x; d/dx(cot x) = -cosec²x
• d/dx(sec x) = sec x tan x; d/dx(cosec x) = -cosec x cot x
• d/dx(sin⁻¹x) = 1/√(1-x²); d/dx(cos⁻¹x) = -1/√(1-x²)
• d/dx(tan⁻¹x) = 1/(1+x²); d/dx(cot⁻¹x) = -1/(1+x²)
• Product Rule: (uv)' = uv' + vu'
• Quotient Rule: (u/v)' = (vu'-uv')/v²
• Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)

━━━ INTEGRALS TABLE ━━━
• ∫xⁿdx = xⁿ⁺¹/(n+1)+C (n ≠ -1)
• ∫1/x dx = ln|x|+C; ∫eˣdx = eˣ+C
• ∫sin x dx = -cos x+C; ∫cos x dx = sin x+C
• ∫sec²x dx = tan x+C; ∫cosec²x dx = -cot x+C
• ∫1/(x²+a²) dx = (1/a)tan⁻¹(x/a)+C
• ∫1/√(a²-x²) dx = sin⁻¹(x/a)+C
• ∫1/(x²-a²) dx = (1/2a)ln|(x-a)/(x+a)|+C
• ∫eˣ[f(x)+f'(x)]dx = eˣf(x)+C
• IBP: ∫u dv = uv - ∫v du (ILATE order)
• King Property: ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx

━━━ DIFFERENTIAL EQUATIONS ━━━
• Variable Separable: separate f(x)dx = g(y)dy, integrate both sides
• Homogeneous: y = vx → v + x dv/dx = f(v), separate v and x
• Linear dy/dx + Py = Q: IF = e^(∫Pdx); y·IF = ∫Q·IF dx+C
• Exponential model: dN/dt = kN → N = N₀eᵏᵗ

━━━ VECTORS ━━━
• a⃗·b⃗ = |a||b|cosθ = a₁b₁+a₂b₂+a₃b₃
• |a⃗×b⃗| = |a||b|sinθ; direction by right-hand rule
• a⃗×b⃗ = |î ĵ k̂; a₁ a₂ a₃; b₁ b₂ b₃|
• Area of parallelogram = |a⃗×b⃗|; Area of △ = ½|a⃗×b⃗|
• Scalar triple product [a b c] = 0 ⟺ coplanar
• Unit vector: â = a⃗/|a⃗|; î·î = 1; î·ĵ = 0; î×ĵ = k̂

━━━ 3D GEOMETRY ━━━
• l²+m²+n² = 1 (direction cosines)
• Line: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c
• Plane: ax+by+cz = d; distance from origin = d/√(a²+b²+c²)
• Distance from (x₁,y₁,z₁) to ax+by+cz+d=0: |ax₁+by₁+cz₁+d|/√(a²+b²+c²)
• Angle between planes: cosθ = |n₁·n₂|/(|n₁||n₂|)
• Angle between line and plane: sinθ = |b⃗·n⃗|/(|b⃗||n⃗|)

━━━ PROBABILITY ━━━
• P(A|B) = P(A∩B)/P(B)
• Independent events: P(A∩B) = P(A)·P(B)
• Total probability: P(A) = Σ P(Bᵢ)·P(A|Bᵢ)
• Bayes: P(Bᵢ|A) = P(Bᵢ)·P(A|Bᵢ) / ΣP(Bⱼ)·P(A|Bⱼ)
• Binomial: P(X=r) = ⁿCᵣpʳqⁿ⁻ʳ; mean=np; variance=npq
• E(X) = Σxᵢ P(xᵢ); Var(X) = E(X²) - [E(X)]²

━━━ INVERSE TRIG IDENTITIES ━━━
• sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2
• sin⁻¹(-x) = -sin⁻¹x; cos⁻¹(-x) = π-cos⁻¹x
• tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)) when xy < 1
• 2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))

━━━ APPLICATIONS OF DERIVATIVES ━━━
• f'(x) > 0 → increasing; f'(x) < 0 → decreasing
• Second derivative test: f''(c) < 0 → max; f''(c) > 0 → min
• Tangent at (x₀,y₀): y-y₀ = f'(x₀)(x-x₀)
• Normal at (x₀,y₀): y-y₀ = -1/f'(x₀) · (x-x₀)
• MVT: f'(c) = [f(b)-f(a)]/(b-a) for some c ∈ (a,b)
• Approximation: Δy ≈ f'(x)·Δx`,
    keyPoints: [
      "ALWAYS check: if f'(c)=0 and f''(c)<0 → max; f''(c)>0 → min; f''(c)=0 → inconclusive",
      "King property ∫₀ᵃf(x)dx = ∫₀ᵃf(a-x)dx — can solve many CUET definite integrals instantly",
      "Linear DE: identify P and Q, compute IF = e^(∫Pdx), then multiply through and integrate",
      "Bayes theorem: posterior ∝ prior × likelihood — always use total probability in denominator",
      "Binomial mean = np; variance = npq = np(1-p) — easy to remember, often tested",
      "l²+m²+n²=1 for direction cosines; convert DRs by dividing by magnitude √(a²+b²+c²)",
      "Cross product magnitude = area of parallelogram; half = area of triangle",
    ],
    tags: [
      "Formula Sheet",
      "Revision",
      "Cheatsheet",
      "All Topics",
      "CUET",
      "Quick Reference",
    ],
  },
];
