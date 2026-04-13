import type { NoteItem } from "../types/index";

export const accountsNotes: NoteItem[] = [
  {
    id: "note_acc_001",
    subject: "Accounts",
    topic: "Partnership Accounts",
    title: "Partnership Accounts — Fundamentals",
    content: `## Partnership — Definition and Features

A **partnership** is defined under the Indian Partnership Act, 1932 as "the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all."

### Essential Features
1. **Two or more persons** — Minimum 2, maximum 50 (as per Companies Act 2013)
2. **Agreement** — Must be a lawful agreement (oral or written)
3. **Lawful business** — The business must be legal
4. **Sharing of profits** — Partners share profits AND losses
5. **Mutual agency** — Each partner is both an agent and principal

---

## Partnership Deed

A Partnership Deed (also called Articles of Partnership) is a written document containing terms and conditions of partnership. Key contents:
- Name and address of firm and partners
- Nature of business
- Capital contributed by each partner
- Profit and loss sharing ratio (PSR)
- Interest on capital rate
- Interest on drawings rate
- Partners' salary / commission
- Rules for admission, retirement, and dissolution

**Note:** In the absence of a deed, the provisions of Indian Partnership Act, 1932 apply:
- No interest on capital
- No salary to any partner
- Profits shared equally
- Interest on loans @ 6% p.a.

---

## Capital Accounts

### Fixed Capital Method
Under this method, the capital balances remain constant (fixed). Adjustments (interest, drawings, salary) are recorded in a **separate Current Account**.

**Format:**
| Dr | Capital Account | Cr |
|---|---|---|
| Balance c/d | xx | Balance b/d | xx |
| | | Additional Capital | xx |

**Current Account:**
| Dr | Current Account | Cr |
|---|---|---|
| Drawings | xx | Balance b/d | xx |
| Interest on Drawings | xx | Interest on Capital | xx |
| Balance c/d | xx | Salary/Commission | xx |
| | | Share of Profit | xx |

### Fluctuating Capital Method
All entries (interest, drawings, salary, profit share) are made directly in the **Capital Account** itself. No separate current account needed.

| Dr | Capital Account | Cr |
|---|---|---|
| Drawings | xx | Balance b/d | xx |
| Interest on Drawings | xx | Interest on Capital | xx |
| Balance c/d | xx | Salary/Commission | xx |
| | | Share of Profit | xx |

---

## Interest on Capital

**Formula:** Interest on Capital = Capital × Rate/100 × Time

**Example:** If Partner A's capital is ₹1,00,000 at 10% p.a.:
- Interest = 1,00,000 × 10/100 × 1 = **₹10,000**

If capital was introduced mid-year (e.g., on 1st July for a year ending 31st March):
- Time = 9/12 years
- Interest = 1,00,000 × 10/100 × 9/12 = **₹7,500**

---

## Interest on Drawings

**Formula:** Interest on Drawings = Total Drawings × Rate/100 × Average Time Period / 12

| Date of Drawing | Months Remaining | Weight |
|---|---|---|
| 1st April | 12 | Full year |
| 1st July | 9 | 3/4 year |
| 1st October | 6 | Half year |
| 1st January | 3 | 1/4 year |

**If drawings are made at the beginning of each month:** Average period = 6.5 months
**If drawings are made at the end of each month:** Average period = 5.5 months
**If drawings are made in the middle of each month:** Average period = 6 months

**Example:** Drawings of ₹1,000 per month at beginning of each month, rate 12% p.a.
- Total Drawings = 12,000; Average period = 6.5 months
- Interest = 12,000 × 12/100 × 6.5/12 = **₹780**

---

## Partners' Salary and Commission

**Salary** is allowed to working partners as per the partnership deed.

**Commission:**
- On Net Profit (before charging commission): Commission = NP × Rate/100
- On Net Profit (after charging commission): Commission = NP × Rate/(100 + Rate)

**Example:** Net Profit = ₹1,10,000. Commission @ 10% on NP after charging commission:
- Commission = 1,10,000 × 10/110 = **₹10,000**

---

## Profit and Loss Appropriation Account

This account shows how net profit is divided among partners.

| Dr | P&L Appropriation Account | Cr |
|---|---|---|
| Interest on Capital: A | xx | Net Profit b/d | xx |
| Interest on Capital: B | xx | Interest on Drawings: A | xx |
| Salary to Partners | xx | Interest on Drawings: B | xx |
| Commission to Partners | xx | | |
| Profit transferred to Capital/Current A/c: A | xx | | |
| Profit transferred to Capital/Current A/c: B | xx | | |

---

## Guaranteed Profit

When a partner is guaranteed a minimum profit:
- If actual share < guaranteed amount → deficiency borne by guaranteeing partner(s)
- If actual share > guaranteed amount → partner gets only actual share

**Example:** Partner C is guaranteed ₹20,000 profit. Actual share = ₹15,000. Deficiency = ₹5,000 to be borne by A and B in their ratio.`,
    keyPoints: [
      "Fixed Capital: Two accounts (Capital + Current); Fluctuating: One Capital Account only",
      "Interest on Capital = Capital × Rate/100 × Time (in years)",
      "Interest on Drawings: Average period = 6.5 months (start of month), 5.5 (end), 6 (middle)",
      "Commission after charging: NP × Rate/(100 + Rate)",
      "Without deed: Equal profit sharing, no salary, no interest on capital, 6% interest on loans",
      "Guaranteed profit deficiency is borne by guaranteeing partners in their ratio",
      "P&L Appropriation Account shows distribution of profit — not a loss if debit side > credit side, it just reduces profit",
    ],
    tags: [
      "partnership",
      "capital accounts",
      "interest on capital",
      "drawings",
      "profit sharing",
      "PSR",
      "fundamentals",
    ],
  },

  {
    id: "note_acc_002",
    subject: "Accounts",
    topic: "Partnership Accounts",
    title: "Goodwill in Partnership — Valuation Methods",
    content: `## Goodwill — Meaning and Need

**Goodwill** is the value of a firm's reputation, customer relationships, brand, and other intangible advantages that enable it to earn super-normal profits. It is recognised at the time of:
- Admission of a partner
- Retirement / Death of a partner
- Dissolution of the firm
- Change in profit-sharing ratio

**Need for Valuation:** To compensate the sacrificing partner(s) fairly when profit-sharing ratio changes.

---

## Methods of Goodwill Valuation

### 1. Average Profit Method

**Formula:** Goodwill = Average Profit × Number of Years' Purchase

**Step-by-step:**
1. Calculate profits for past years (adjust for abnormal items)
2. Calculate Simple Average Profit = Total Profits / Number of Years
3. Multiply by Number of Years' Purchase

**Example:**
- Profits for last 3 years: ₹40,000; ₹45,000; ₹50,000
- Abnormal loss of ₹5,000 in Year 1 (add back)
- Adjusted profits: ₹45,000; ₹45,000; ₹50,000
- Average Profit = (45,000 + 45,000 + 50,000) / 3 = ₹46,667
- Goodwill at 2 years' purchase = 46,667 × 2 = **₹93,334**

**Weighted Average:** If recent profits are more relevant, assign higher weights:
- Year 1: ₹40,000 × 1 = 40,000
- Year 2: ₹45,000 × 2 = 90,000
- Year 3: ₹50,000 × 3 = 1,50,000
- Weighted Average = 2,80,000 / 6 = ₹46,667
- Goodwill = 46,667 × 2 = **₹93,334**

---

### 2. Super Profit Method

**Formula:** Goodwill = Super Profit × Number of Years' Purchase
**Super Profit = Actual Average Profit − Normal Profit**
**Normal Profit = Capital Employed × Normal Rate of Return / 100**

**Step-by-step:**
1. Calculate Capital Employed = Assets − Liabilities (or Partner's Capital + Reserves)
2. Calculate Normal Profit
3. Calculate Super Profit = Actual Profit − Normal Profit
4. Multiply Super Profit by years of purchase

**Example:**
- Capital Employed = ₹5,00,000
- Normal Rate of Return = 10%
- Normal Profit = 5,00,000 × 10/100 = ₹50,000
- Actual Average Profit = ₹70,000
- Super Profit = 70,000 − 50,000 = ₹20,000
- Goodwill at 3 years' purchase = 20,000 × 3 = **₹60,000**

---

### 3. Capitalisation Method

**Two approaches:**

**A. Capitalisation of Average Profit:**
- Capitalised Value of Firm = (Average Profit / Normal Rate) × 100
- Goodwill = Capitalised Value − Actual Capital Employed

**Example:**
- Average Profit = ₹70,000; Normal Rate = 10%; Capital Employed = ₹5,00,000
- Capitalised Value = (70,000 / 10) × 100 = ₹7,00,000
- Goodwill = 7,00,000 − 5,00,000 = **₹2,00,000**

**B. Capitalisation of Super Profit:**
- Goodwill = (Super Profit / Normal Rate) × 100

**Example:**
- Super Profit = ₹20,000; Normal Rate = 10%
- Goodwill = (20,000 / 10) × 100 = **₹2,00,000**

---

## Treatment of Goodwill in Books

### Premium Method (Most Common)
When new partner pays premium for goodwill in cash:
- Dr: Cash / Bank A/c
- Cr: Old Partners' Capital A/c (in Sacrificing Ratio)

If goodwill already exists in books → write it off first:
- Dr: All partners' Capital A/c (in old PSR)
- Cr: Goodwill A/c

### Raised and Written Off Method
When goodwill is raised at full value and then written off:

**Step 1 — Raise Goodwill:**
Dr: Goodwill A/c → Cr: All Partners' Capital A/c (in OLD ratio)

**Step 2 — Write Off Goodwill:**
Dr: All Partners' Capital A/c (in NEW ratio) → Cr: Goodwill A/c

This effectively transfers goodwill credit from old ratio to new ratio.

---

## Important Notes on Goodwill Treatment

| Situation | Goodwill Written Off By |
|---|---|
| Admission | Sacrificing Partners get credit |
| Retirement | Gaining Partners bear the charge |
| Change in PSR | Gaining Partners compensate Sacrificing Partners |`,
    keyPoints: [
      "Average Profit Method: Goodwill = Avg Profit × Years Purchase",
      "Super Profit = Actual Average Profit − Normal Profit; Normal Profit = Capital Employed × NRR/100",
      "Super Profit Method: Goodwill = Super Profit × Years Purchase",
      "Capitalisation Method: Goodwill = (Super Profit / Normal Rate) × 100",
      "Existing goodwill must be written off in OLD ratio before admission/retirement",
      "Premium for goodwill credited to Sacrificing Partners in Sacrificing Ratio",
      "Raised & Written Off: Raise in old ratio, write off in new ratio",
    ],
    tags: [
      "goodwill",
      "valuation",
      "super profit",
      "capitalisation",
      "average profit",
      "partnership",
      "premium",
    ],
  },

  {
    id: "note_acc_003",
    subject: "Accounts",
    topic: "Partnership Accounts",
    title: "Admission of a Partner — Full Calculations and Entries",
    content: `## Admission of a Partner

A new partner can be admitted with the consent of all existing partners. Upon admission, the following must be settled:
1. New Profit Sharing Ratio
2. Sacrificing Ratio
3. Goodwill Treatment
4. Revaluation of Assets and Liabilities
5. Treatment of Reserves and Accumulated Profits
6. Capital Adjustment

---

## 1. New Profit Sharing Ratio

**Definition:** The ratio in which all partners (old + new) will share future profits.

**Example:** A and B share profits 3:2. C is admitted for 1/5 share.
- Remaining share = 1 − 1/5 = 4/5
- A's new share = 3/5 × 4/5 = 12/25
- B's new share = 2/5 × 4/5 = 8/25
- C's share = 1/5 = 5/25
- New PSR = 12 : 8 : 5

---

## 2. Sacrificing Ratio

**Formula:** Sacrificing Ratio = Old Share − New Share

Using the above example:
- A's sacrifice = 3/5 − 12/25 = 15/25 − 12/25 = 3/25
- B's sacrifice = 2/5 − 8/25 = 10/25 − 8/25 = 2/25
- Sacrificing Ratio = 3:2

*Note: Usually the sacrificing ratio equals the old profit-sharing ratio unless stated otherwise.*

---

## 3. Goodwill Treatment

**Case A: C pays goodwill in cash (premium method)**
- Dr: Cash/Bank → Cr: A's Capital and B's Capital (in Sacrificing Ratio 3:2)

**If goodwill exists in books:**
- Dr: A & B Capital (old PSR) → Cr: Goodwill A/c (write off existing)

**Case B: Hidden/No goodwill adjustment**
Not applicable when new partner pays in cash.

---

## 4. Revaluation of Assets and Liabilities

A **Revaluation Account** (or Profit and Loss Adjustment Account) is opened. Assets and liabilities are revalued.

| Dr | Revaluation Account | Cr |
|---|---|---|
| Decrease in Asset Values | xx | Increase in Asset Values | xx |
| Increase in Liability Values | xx | Decrease in Liability Values | xx |
| Profit to Partners (if Cr > Dr) | xx | Loss to Partners (if Dr > Cr) | xx |

Revaluation profit/loss is transferred to old partners' Capital Accounts in **OLD profit sharing ratio**.

---

## 5. Treatment of Reserves and Accumulated Profits

**General Reserve, Profit & Loss A/c balance, Workmen's Compensation Reserve** etc. are distributed among OLD partners in OLD ratio before admission:
- Dr: General Reserve → Cr: Partners' Capital A/c (old ratio)

**Securities Premium, Capital Reserve** — NOT distributed; these are retained.

---

## 6. Capital Adjustment

After all adjustments, capitals of all partners may need to be equated based on new PSR.

**Step:** 
- Total Capital of firm = New Partner's Capital / New Partner's Share
- Each partner's required capital = Total Capital × Their share
- Difference: bring in cash or withdraw

---

## Worked Numerical Example

**Given:** A and B share profits 3:2. C joins for 1/4 share. C brings ₹40,000 as capital and ₹10,000 as goodwill.
Old capitals: A = ₹60,000, B = ₹40,000.
Assets revalued: Machinery increased by ₹5,000; Stock reduced by ₹2,000.

**Step 1 — New PSR:**
- Remaining = 3/4; A's new = 3/5 × 3/4 = 9/20; B's new = 2/5 × 3/4 = 6/20; C = 5/20
- New PSR = 9:6:5

**Step 2 — Sacrificing Ratio:**
- A: 3/5 − 9/20 = 12/20 − 9/20 = 3/20; B: 2/5 − 6/20 = 8/20 − 6/20 = 2/20
- Sacrificing Ratio = 3:2

**Step 3 — Goodwill:**
- Dr: Cash 10,000 → Cr: A's Capital 6,000 + B's Capital 4,000 (ratio 3:2)

**Step 4 — Revaluation:**
- Dr: Revaluation A/c 2,000 (stock) → Cr: Machinery 2,000... 
- Actually: Dr: Machinery 5,000 → Cr: Revaluation; Dr: Revaluation 2,000 → Cr: Stock
- Net Profit = 5,000 − 2,000 = 3,000
- A gets 3,000 × 3/5 = 1,800; B gets 3,000 × 2/5 = 1,200

**Final Capital Balances:**
| Partner | Opening | Goodwill | Revaluation | Capital Contributed | Closing |
|---|---|---|---|---|---|
| A | 60,000 | +6,000 | +1,800 | — | 67,800 |
| B | 40,000 | +4,000 | +1,200 | — | 45,200 |
| C | — | — | — | +40,000 | 40,000 |`,
    keyPoints: [
      "Sacrificing Ratio = Old Share − New Share; gaining partner sacrifices",
      "Goodwill credit goes to Sacrificing Partners in Sacrificing Ratio",
      "Revaluation profit/loss shared in OLD ratio before admission",
      "General Reserve distributed to OLD partners in old ratio",
      "Securities Premium and Capital Reserve are NOT distributed",
      "Capital Adjustment: Total Capital = New Partners Capital / New Partners Share",
      "New PSR: Remaining Share × Old Individual Share for each old partner",
    ],
    tags: [
      "admission",
      "new partner",
      "sacrificing ratio",
      "new PSR",
      "revaluation",
      "goodwill",
      "reserves",
    ],
  },

  {
    id: "note_acc_004",
    subject: "Accounts",
    topic: "Partnership Accounts",
    title: "Retirement and Death of a Partner — Journal Entries & Calculations",
    content: `## Retirement of a Partner

When a partner retires, the remaining partners gain. The following adjustments are required:
1. Calculate Gaining Ratio
2. Goodwill adjustment
3. Revaluation of assets and liabilities
4. Treatment of reserves and accumulated profits
5. Calculation of amount due to retiring partner
6. Settlement of amount due

---

## 1. Gaining Ratio

**Formula:** Gaining Ratio = New Share − Old Share (for the continuing partners)

**Example:** A, B, C share profits 3:2:1. C retires.
- B and A will gain C's share proportionately (unless otherwise stated).
- A's new share = 3/(3+2) = 3/5; B's new share = 2/5
- A's gain = 3/5 − 3/6 = 18/30 − 15/30 = 3/30
- B's gain = 2/5 − 2/6 = 12/30 − 10/30 = 2/30
- **Gaining Ratio = 3:2**

---

## 2. Goodwill Treatment on Retirement

Continuing partners (who gain) must **compensate** the retiring partner for goodwill.

**Journal Entry:**
- Dr: Gaining Partners' Capital A/c (in Gaining Ratio) → Cr: Retiring Partner's Capital A/c

**Example:** Goodwill of firm = ₹30,000; C's share = 1/6
- C's share of goodwill = 30,000 × 1/6 = ₹5,000
- A bears: 5,000 × 3/5 = ₹3,000; B bears: 5,000 × 2/5 = ₹2,000

---

## 3. Revaluation and Reserves

Same as admission — Revaluation profit/loss is shared by **ALL** partners (including retiring partner) in **OLD ratio**.
Reserves are also distributed to ALL partners in OLD ratio.

---

## 4. Amount Due to Retiring Partner

| Particulars | Amount |
|---|---|
| Capital Balance (after adjustments) | xx |
| Add: Share of Goodwill | xx |
| Add: Share of Revaluation Profit | xx |
| Add: Share of Reserves/Undistributed Profits | xx |
| Less: Drawings (if any) | (xx) |
| **Total Amount Due** | **xx** |

---

## 5. Methods of Payment

**a) Lump Sum Payment:**
- Dr: Retiring Partner's Capital A/c → Cr: Cash/Bank

**b) Partial Payment + Loan Account:**
- Pay part in cash; remaining treated as loan
- Dr: Retiring Partner's Capital A/c → Cr: Cash (partial) + Retiring Partner's Loan A/c (balance)
- Interest on loan: Dr P&L A/c → Cr: Retiring Partner's Loan A/c

**c) Instalments:**
- Paid in equal instalments over agreed period with interest

---

## Death of a Partner

Treatment is same as retirement PLUS:
- Calculate profit up to date of death (proportionate)
- **Executor** of deceased partner is paid the amount due

**Profit up to death:**
- Based on last year's profit OR average profit × months / 12
- Or based on turnover if specified

**Joint Life Policy (JLP):**
- A policy taken on joint lives of all partners
- On death: JLP Surrender Value (SV) exists in books
- Journal: Dr: Cash/Bank → Cr: JLP A/c (SV); Excess credited to all partners in OLD ratio

---

## Worked Example — Retirement

A, B, C share profits in 5:3:2. C retires. New ratio A:B = 3:2.

**Gaining Ratio:**
- A: 3/5 − 5/10 = 6/10 − 5/10 = 1/10
- B: 2/5 − 3/10 = 4/10 − 3/10 = 1/10
- Gaining Ratio = 1:1 (equal)

**Goodwill:** Firm's goodwill = ₹50,000; C's share = 2/10 = ₹10,000
- A bears ₹5,000; B bears ₹5,000 (1:1 ratio)
- Entry: Dr A's Capital 5,000; Dr B's Capital 5,000 → Cr C's Capital 10,000

**Revaluation:** Profit = ₹6,000
- C gets: 6,000 × 2/10 = ₹1,200

**General Reserve:** ₹20,000
- C gets: 20,000 × 2/10 = ₹4,000

**Total due to C:** Capital + Goodwill + Revaluation + Reserve
= (say) 40,000 + 10,000 + 1,200 + 4,000 = **₹55,200**`,
    keyPoints: [
      "Gaining Ratio = New Share − Old Share (for continuing partners)",
      "Retiring partner compensated for goodwill by Gaining Partners in Gaining Ratio",
      "Revaluation and Reserves distributed to ALL partners (incl. retiring) in OLD ratio",
      "Amount due = Capital + Goodwill share + Revaluation profit + Reserve share",
      "Unpaid amount treated as Loan at agreed interest rate",
      "Death: profit till date of death calculated on time/sales basis",
      "JLP excess on death credited to surviving partners in old ratio",
    ],
    tags: [
      "retirement",
      "death of partner",
      "gaining ratio",
      "JLP",
      "settlement",
      "goodwill",
      "revaluation",
    ],
  },

  {
    id: "note_acc_005",
    subject: "Accounts",
    topic: "Partnership Accounts",
    title:
      "Dissolution of Partnership Firm — Realisation Account & Garner vs Murray",
    content: `## Dissolution — Key Concepts

### Dissolution of Partnership vs Dissolution of Firm

| Basis | Dissolution of Partnership | Dissolution of Firm |
|---|---|---|
| Meaning | Reconstitution of firm | Complete winding up |
| Business | Continues | Stopped |
| Settlement | Not required | Required under Sec. 48 |
| Examples | Admission, Retirement | Insolvency, Court order |

---

## Settlement of Accounts — Section 48, Partnership Act 1932

Order of payment:
1. Debts to third parties (outside creditors)
2. Partners' loans
3. Partners' capital
4. Residue (profit) in profit sharing ratio

---

## Realisation Account

All assets (except Cash/Bank and fictitious assets) are transferred to Realisation Account. All liabilities (except partners' capital and loans) are also transferred.

**Format:**

| Dr | Realisation Account | Cr |
|---|---|---|
| Assets (Book Values) | xx | Liabilities (Book Values) | xx |
| Expenses of Realisation | xx | Assets sold (Actual Price) | xx |
| Partners' Liabilities taken over | xx | Creditors settled at less (gain) | xx |
| | | Profit on Realisation | xx |

**Rules:**
- Assets → Dr side at book value; sell proceeds → Cr side at actual realisation
- Liabilities → Cr side at book value; payment → Dr side at actual payment
- Net result = Profit or Loss → distributed in PSR

**Key Journal Entries:**

1. Transfer assets to Realisation:
   - Dr: Realisation A/c → Cr: All Asset A/cs (except cash/bank/fictitious)

2. Transfer liabilities to Realisation:
   - Dr: All Liability A/cs → Cr: Realisation A/c

3. Sale of assets:
   - Dr: Cash/Bank → Cr: Realisation A/c

4. Payment of liabilities:
   - Dr: Realisation A/c → Cr: Cash/Bank

5. Partner takes over an asset:
   - Dr: Partner's Capital A/c → Cr: Realisation A/c

6. Realisation expenses paid:
   - Dr: Realisation A/c → Cr: Cash/Bank

7. Transfer Profit/Loss:
   - Profit: Dr Realisation → Cr Partners' Capital (in PSR)
   - Loss: Dr Partners' Capital → Cr Realisation (in PSR)

8. Partners' Loan repaid:
   - Dr: Partner's Loan A/c → Cr: Cash/Bank

9. Final settlement of capital:
   - If credit balance: Dr Partner's Capital → Cr Cash/Bank
   - If debit balance: Dr Cash/Bank → Cr Partner's Capital

---

## Garner vs Murray Rule (Insolvency of Partner)

When a partner is insolvent (cannot bring in capital deficiency), the deficiency is borne by the **solvent partners in proportion to their CAPITAL balances** (NOT in profit sharing ratio).

**Indian Position:** This rule does NOT apply in India. In India, deficiency of insolvent partner is borne by solvent partners in their **profit sharing ratio** (as per Sec. 48).

*CUET Note: In India = PSR; Garner vs Murray = Capital Ratio. Know both.*

---

## Worked Example

A, B, C share profits 3:2:1. Balance Sheet shows:
- Goodwill ₹6,000; Machinery ₹30,000; Stock ₹12,000; Debtors ₹8,000; Cash ₹4,000
- Creditors ₹10,000; A's Loan ₹5,000; Capitals: A ₹25,000; B ₹15,000; C ₹5,000

Realisation: Machinery sold ₹22,000; Stock sold ₹10,000; Debtors realised ₹7,000; Goodwill nil; Creditors settled ₹9,500; Expenses ₹500

**Realisation A/c:**
- Dr: Goodwill 6,000 + Machinery 30,000 + Stock 12,000 + Debtors 8,000 + Expenses 500 = 56,500
- Cr: Creditors 10,000 + Sale of Machinery 22,000 + Stock 10,000 + Debtors 7,000 = 49,000
- **Loss on Realisation = 56,500 − 49,000 = 7,500** (wait for creditors gain of 500)
- Actually: Creditors credited at 10,000; paid 9,500 → gain 500 added to Cr side
- Net Loss = 56,500 − 49,500 = **7,000**; shared A: 3,500; B: 2,333; C: 1,167

**Payment Order:**
1. Creditors: ₹9,500 (cash)
2. A's Loan: ₹5,000
3. Capital balances after loss adjustment`,
    keyPoints: [
      "Dissolution of Firm = complete winding up; Settlement of accounts as per Sec. 48",
      "Payment order: Outside creditors → Partners' loans → Capital → Profit",
      "Realisation A/c: Assets transferred at book value; proceeds at realisation value",
      "Partner taking over asset: Dr Partner's Capital Cr Realisation A/c",
      "Garner vs Murray: solvent partners bear insolvent partner's deficiency in Capital Ratio",
      "India rule: deficiency borne in Profit Sharing Ratio (not capital ratio)",
      "Fictitious assets and cash/bank NOT transferred to Realisation A/c",
    ],
    tags: [
      "dissolution",
      "realisation account",
      "Garner vs Murray",
      "insolvency",
      "Section 48",
      "winding up",
    ],
  },

  {
    id: "note_acc_006",
    subject: "Accounts",
    topic: "Company Accounts",
    title: "Issue of Shares — Types, Entries, Pro-Rata Allotment",
    content: `## Company — Meaning and Types of Shares

A company is an artificial person, created by law, with a separate legal existence. Share capital is divided into small equal units called **shares**.

### Types of Shares

**1. Equity Shares (Ordinary Shares):**
- No fixed dividend — variable based on profits
- Voting rights
- Residual claim on assets after winding up
- Risk-bearing shareholders

**2. Preference Shares:**
- Fixed rate of dividend
- Priority in dividend payment over equity shares
- Priority in repayment of capital on winding up
- Usually no voting rights (except on matters affecting them)

---

## Types of Share Capital

| Type | Meaning |
|---|---|
| **Authorised Capital** | Maximum capital as per Memorandum of Association |
| **Issued Capital** | Capital offered to public for subscription |
| **Subscribed Capital** | Amount actually applied for by public |
| **Called-up Capital** | Portion of subscribed capital called by company |
| **Paid-up Capital** | Portion of called-up capital actually paid |
| **Uncalled Capital** | Subscribed but not yet called |

---

## Issue of Shares — Three Scenarios

### A. Issue at Par (Face Value = Issue Price)

**Journal Entries:**

1. On Application: Dr Bank → Cr Share Application A/c
2. On Allotment: Dr Share Application → Cr Share Capital (application amount transferred)
   Dr Share Allotment A/c → Cr Share Capital (allotment money due)
3. On Allotment Received: Dr Bank → Cr Share Allotment A/c
4. On Call: Dr Share First Call → Cr Share Capital
5. On Call Received: Dr Bank → Cr Share First Call

**Example:** 1,000 shares of ₹10 each, issued at par: ₹2 on application, ₹3 on allotment, ₹5 on final call.

---

### B. Issue at Premium (Issue Price > Face Value)

Securities Premium is recorded in **Securities Premium Reserve A/c** (under Reserves & Surplus).

**Journal Entry at Allotment:**
Dr: Share Allotment A/c → Cr: Share Capital A/c + Securities Premium Reserve A/c

**Uses of Securities Premium (Sec. 52):**
- Issue of fully paid bonus shares
- Write off preliminary expenses
- Write off discount on issue of shares/debentures
- Premium on redemption of preference shares/debentures

---

### C. Issue at Discount

**Note:** Companies Act 2013 prohibits issue of shares at discount EXCEPT for sweat equity shares.
For CUET: Know this rule; old questions may still have discount issues.

---

## Pro-Rata Allotment

When shares are **oversubscribed** (applications received > shares available):

**Steps:**
1. Calculate allotment ratio = Shares Available : Shares Applied
2. Adjust application money against allotment
3. Excess application money → refunded or adjusted against calls

**Example:**
- Shares available: 1,000; Applied: 1,500 (3:2 ratio... wait, 3:2 means for every 3 applied, 2 allotted)
- Actual ratio = 1000:1500 = 2:3

**Calculation:**
- Applied 1,500 shares; 1,000 allotted; excess 500 applications refunded
- Application money per share: ₹2 per share
- Money received: 1,500 × 2 = ₹3,000
- Allotment due: 1,000 × 3 = ₹3,000 (₹3 per share on allotment)
- Application money adjusted = 1,000 × 2 = ₹2,000
- Balance to collect on allotment = 3,000 − 2,000 = ₹1,000
- Excess application money refunded = 500 × 2 = ₹1,000

---

## Minimum Subscription

SEBI requires minimum 90% of issued amount to be subscribed. If not achieved, entire application money is refunded.

---

## Calls in Arrears and Calls in Advance

- **Calls in Arrears:** Amount called but not yet paid → Interest charged @ 10% p.a.
  - Dr: Calls in Arrears A/c → Cr: Share Capital A/c (amount due but unpaid)
- **Calls in Advance:** Amount received before it is called → Interest paid @ 12% p.a.
  - Dr: Bank → Cr: Calls in Advance A/c`,
    keyPoints: [
      "Authorised > Issued > Subscribed > Called-up > Paid-up capital hierarchy",
      "Securities Premium credited to Securities Premium Reserve A/c (not share capital)",
      "Securities Premium uses: Bonus shares, writing off preliminary expenses, discount on issue",
      "Pro-rata allotment: excess application money adjusted against allotment or refunded",
      "Minimum Subscription = 90% of issued capital (SEBI rule)",
      "Calls in Arrears: interest @ 10% p.a.; Calls in Advance: interest @ 12% p.a.",
      "Issue at discount prohibited under Companies Act 2013 (except sweat equity)",
    ],
    tags: [
      "shares",
      "issue of shares",
      "premium",
      "pro-rata",
      "allotment",
      "share capital",
      "SEBI",
    ],
  },

  {
    id: "note_acc_007",
    subject: "Accounts",
    topic: "Company Accounts",
    title: "Forfeiture and Reissue of Shares — Journal Entries",
    content: `## Forfeiture of Shares

**Forfeiture** means cancellation of shares due to non-payment of calls. The allottee loses all money paid so far.

### Conditions for Forfeiture
- Share must be allotted
- Notice must be given (at least 14 days)
- Amount must remain unpaid after the notice period

---

## Journal Entry for Forfeiture

### Case 1: Shares Issued at Par

**Entry:**
- Dr: Share Capital A/c (Called-up amount per share × no. of shares)
- Cr: Calls in Arrears A/c (unpaid amount)
- Cr: Share Forfeiture A/c (amount already received / paid up)

**Example:** 100 shares of ₹10 each, ₹7 called (₹3 on application, ₹4 on allotment). ₹6 paid (₹3 app + ₹3 allotment). ₹1 allotment unpaid.
- Dr: Share Capital 700 (100 × 7 = 700 called)
- Cr: Calls in Arrears 100 (₹1 unpaid × 100 shares)
- Cr: Share Forfeiture 600 (₹6 already paid × 100 shares)

---

### Case 2: Shares Issued at Premium — Premium Received

**Entry:**
- Dr: Share Capital A/c (Called-up nominal amount)
- Cr: Calls in Arrears A/c
- Cr: Share Forfeiture A/c

*Securities Premium Reserve is NOT debited if premium was already received.*

---

### Case 3: Shares Issued at Premium — Premium NOT Received (in arrears)

**Entry:**
- Dr: Share Capital A/c (Called-up nominal amount)
- Dr: Securities Premium Reserve A/c (premium amount in arrears)
- Cr: Calls in Arrears A/c (total unpaid)
- Cr: Share Forfeiture A/c (amount received so far)

---

## Reissue of Forfeited Shares

The Board of Directors can reissue forfeited shares at any price as long as:
**Issue Price ≥ Original issue price − Amount received on forfeited shares**

**Minimum price condition:** Issue Price ≥ Face Value − Forfeiture amount per share

### Case 1: Reissue at Par

**Entry:**
- Dr: Bank A/c
- Dr: Share Forfeiture A/c (discount = face value − reissue price... but at par, no discount)
- Cr: Share Capital A/c (face value)

### Case 2: Reissue at Discount

**Entry:**
- Dr: Bank A/c (actual cash received)
- Dr: Share Forfeiture A/c (discount amount)
- Cr: Share Capital A/c (face value)

### Case 3: Reissue at Premium

**Entry:**
- Dr: Bank A/c (full amount received)
- Cr: Share Capital A/c (face value)
- Cr: Securities Premium Reserve A/c (premium)

---

## Capital Reserve Calculation

After reissue, any balance remaining in Share Forfeiture A/c is transferred to **Capital Reserve**:

**Formula:** Capital Reserve = Amount received on forfeiture − Discount allowed on reissue

**Or more precisely:**
- Capital Reserve = [Forfeiture A/c balance before reissue] − [Discount given on reissue]
- Any remaining balance in Share Forfeiture A/c = Capital Reserve

**Journal Entry:**
- Dr: Share Forfeiture A/c → Cr: Capital Reserve A/c

---

## Comprehensive Worked Example

100 shares of ₹10 each issued at ₹2 premium. ₹5 called on application/allotment (including ₹2 premium). Holder paid only ₹3.
- Forfeiture: Dr Share Capital 300 (100×3 called on nominal) + Dr Securities Premium 200 → Cr Calls in Arrears 400 + Cr Share Forfeiture 100
- Wait, let's redo: Called-up = ₹5 (₹3 nominal + ₹2 premium). Paid = ₹3 (say application ₹3 only).
- Dr: Share Capital 300 (100 × ₹3 nominal called); Dr: Sec Premium 200 (unpaid premium)
- Cr: Calls in Arrears 400 (₹4 unpaid); Cr: Share Forfeiture 100 (₹1 per share received... ₹3 paid - ₹2 application = just ₹1 remains... )

*Practical Tip:* Always calculate per share first, then multiply.

**Capital Reserve shortcut:** For fully forfeited shares reissued at discount:
- CR = Amount paid at time of forfeiture − Discount on reissue
- If CR = 0 or negative, no capital reserve (should not issue at more discount than received)`,
    keyPoints: [
      "Forfeiture: Dr Share Capital (called-up); Cr Calls in Arrears (unpaid) + Cr Share Forfeiture (paid)",
      "If premium unpaid at forfeiture: Dr Securities Premium Reserve also",
      "Reissue minimum price = Face Value − Amount received per forfeited share",
      "Capital Reserve = Share Forfeiture A/c balance − Discount on reissue",
      "Balance in Share Forfeiture A/c after reissue → transferred to Capital Reserve",
      "Premium on reissue goes to Securities Premium Reserve, not Capital Reserve",
      "Forfeited shares can be reissued at any price (even below face value) within the limit",
    ],
    tags: [
      "forfeiture",
      "reissue",
      "capital reserve",
      "share forfeiture",
      "company accounts",
      "journal entries",
    ],
  },

  {
    id: "note_acc_008",
    subject: "Accounts",
    topic: "Company Accounts",
    title: "Issue and Redemption of Debentures — DRR and Methods",
    content: `## Debentures — Meaning and Types

A **debenture** is a written acknowledgement of debt by a company. It carries a fixed rate of interest.

### Types of Debentures

| Basis | Types |
|---|---|
| Security | Secured (Mortgage) / Unsecured (Naked) |
| Redemption | Redeemable / Irredeemable |
| Records | Registered / Bearer |
| Conversion | Convertible / Non-Convertible |
| Interest | With coupon / Zero coupon |

---

## Issue of Debentures

### At Par, Premium, and Discount

**Scenario 1: At Par, Redeemable at Par**
- Dr: Bank → Cr: Debentures A/c

**Scenario 2: At Premium, Redeemable at Par**
- Dr: Bank (issue + premium) → Cr: Debentures A/c + Securities Premium Reserve

**Scenario 3: At Discount, Redeemable at Par**
- Dr: Bank + Discount on Issue → Cr: Debentures A/c
- (Discount on Issue = Loss, shown as deferred revenue expenditure)

**Scenario 4: At Par, Redeemable at Premium**
- Loss on redemption recognised upfront:
- Dr: Bank + Loss on Issue → Cr: Debentures A/c + Premium on Redemption (Liability)

---

## Journal Entries for Debenture Issue

1. Application received:
   - Dr: Bank → Cr: Debenture Application A/c

2. On Allotment:
   - Dr: Debenture Application → Cr: Debentures A/c

3. For Interest (half-yearly/annually):
   - Dr: Finance Costs → Cr: Debenture Interest Payable
   - Dr: Debenture Interest Payable → Cr: Bank (TDS if applicable)

---

## Debenture Redemption Reserve (DRR)

**Rule (SEBI/Companies Act):**
- Listed companies must create DRR = 25% of outstanding debentures before redemption starts
- Unlisted companies: 25% DRR only for public issue; private placement = no DRR

**Entry for creating DRR:**
- Dr: Statement of Profit & Loss → Cr: DRR A/c
- Also: Dr: DRR Investment A/c → Cr: Bank (invest 15% of debentures maturing within 12 months)

---

## Redemption Methods

### 1. Lump Sum (at Maturity)

**Entry:**
- Dr: Debentures A/c → Cr: Debentureholders A/c
- Dr: Debentureholders A/c → Cr: Bank
- After redemption: Dr: DRR → Cr: General Reserve

### 2. By Annual Drawings (Purchase in Open Market)

Debentures bought in open market at market price:
- Dr: Own Debentures A/c (market price) → Cr: Bank
- Cancel: Dr: Debentures A/c (face value) → Cr: Own Debentures + Profit on Cancellation / Dr: Loss

**Profit on cancellation → Capital Reserve**

### 3. By Conversion into Shares

**Entry:**
- Dr: Debentures A/c (face value) → Cr: Share Capital + Securities Premium (if at premium)

**Example:** ₹1,00,000 12% debentures converted into equity shares of ₹10 each at ₹12.50 per share:
- Number of shares = 1,00,000 / 12.50 = 8,000 shares
- Dr: 12% Debentures 1,00,000 → Cr: Share Capital 80,000 + Securities Premium 20,000

---

## Worked Example — Lump Sum Redemption

Company issued 1,000, 12% Debentures of ₹100 each at par, redeemable at par after 5 years.

**Each year (creating DRR):**
- DRR required = 25% × 1,00,000 = ₹25,000
- Yearly transfer = 25,000 over 5 years = ₹5,000/year
- Entry: Dr P&L → Cr DRR 5,000

**Year 4 (invest 15%):**
- Investment = 15% × 1,00,000 = ₹15,000
- Dr: DRR Investments → Cr: Bank 15,000

**At Redemption:**
- Sell investments: Dr Bank → Cr DRR Investments
- Pay debentureholders: Dr Debentures → Cr Bank
- Transfer DRR to General Reserve: Dr DRR → Cr General Reserve`,
    keyPoints: [
      "Debentures = loan capital; carries fixed interest; does not give ownership",
      "DRR must be created = 25% of outstanding debentures before redemption",
      "DRR Investment: 15% of debentures maturing within next 12 months must be invested",
      "Redemption at premium: Premium on Redemption is a liability; Loss on Issue is a deferred asset",
      "Conversion: face value = share capital + securities premium",
      "Profit on cancellation (open market purchase) → Capital Reserve",
      "After redemption, DRR transferred to General Reserve",
    ],
    tags: [
      "debentures",
      "DRR",
      "redemption",
      "issue at discount",
      "conversion",
      "company accounts",
    ],
  },

  {
    id: "note_acc_009",
    subject: "Accounts",
    topic: "Financial Statements",
    title: "Financial Statements of a Company — Schedule III Format",
    content: `## Financial Statements — Overview

As per Companies Act 2013, every company must prepare:
1. **Balance Sheet** (Schedule III format)
2. **Statement of Profit and Loss**
3. **Cash Flow Statement** (for companies above certain threshold)

---

## Balance Sheet Format (Schedule III)

### EQUITY AND LIABILITIES SIDE

**I. Shareholders' Funds**
- Share Capital
- Reserves and Surplus (General Reserve, Securities Premium, P&L Balance)
- Money received against share warrants

**II. Share Application Money Pending Allotment**

**III. Non-Current Liabilities**
- Long-term borrowings (Debentures, Term loans)
- Deferred tax liabilities (net)
- Long-term provisions (gratuity, leave encashment)

**IV. Current Liabilities**
- Short-term borrowings
- Trade payables (creditors, bills payable)
- Other current liabilities
- Short-term provisions (proposed dividend, provision for tax)

---

### ASSETS SIDE

**I. Non-Current Assets**
- (a) Fixed Assets:
  - Tangible Assets (Land, Building, Plant, Machinery)
  - Intangible Assets (Goodwill, Patents, Trademarks)
  - Capital Work-in-Progress
- (b) Non-current investments
- (c) Long-term loans and advances
- (d) Other non-current assets

**II. Current Assets**
- Current investments
- Inventories (Raw material, WIP, Finished goods)
- Trade receivables (debtors, bills receivable)
- Cash and cash equivalents
- Short-term loans and advances
- Other current assets

---

## Statement of Profit and Loss Format

| Particulars | Current Year | Previous Year |
|---|---|---|
| **Revenue from Operations** | xx | xx |
| Other Income | xx | xx |
| **Total Revenue (I)** | xx | xx |
| Cost of materials consumed | xx | xx |
| Changes in inventories | xx | xx |
| Employee benefits expense | xx | xx |
| Finance costs | xx | xx |
| Depreciation & amortisation | xx | xx |
| Other expenses | xx | xx |
| **Total Expenses (II)** | xx | xx |
| **Profit Before Tax (I − II)** | xx | xx |
| Tax expense | (xx) | (xx) |
| **Profit After Tax** | xx | xx |

---

## Notes to Accounts

**Notes to Accounts** provide detailed break-up of items shown in Financial Statements. Every balance sheet item refers to a Note number.

**Key Notes required:**
- Note 1: Share Capital (Authorised, Issued, Subscribed, Paid-up; changes during year)
- Note 2: Reserves and Surplus (opening, additions, closing)
- Note 3: Long-term Borrowings
- Note 4: Fixed Assets (Gross Block, Depreciation, Net Block)

---

## Treatment of Specific Items

| Item | Treatment |
|---|---|
| **Preliminary Expenses** | Written off against Securities Premium or P&L; shown under Other Non-Current Assets until written off |
| **Discount on Issue of Shares** | Written off immediately against Securities Premium Reserve |
| **Calls in Arrears** | Deducted from Called-up Capital to show Paid-up Capital |
| **Calls in Advance** | Shown under Other Current Liabilities |
| **Proposed Dividend** | Short-term Provision (approved after year end = disclosed in notes only as per revised Schedule III) |
| **Uncalled Capital** | Disclosed in Notes; not shown in Balance Sheet |

---

## Deferred Tax

- **Deferred Tax Asset:** When accounting profit < taxable profit (more tax paid now, benefit in future)
- **Deferred Tax Liability:** When accounting profit > taxable profit (less tax now, more later)
- Both shown in Balance Sheet under respective heads`,
    keyPoints: [
      "Balance Sheet: Equity & Liabilities (top) | Assets (bottom) under Schedule III",
      "Non-current assets: useful life > 1 year; Current assets: realised within 1 year",
      "Calls in Arrears deducted from Called-up Capital to show Paid-up Capital",
      "Calls in Advance: Current Liability; NOT deducted from share capital",
      "Proposed dividend (after Companies Act 2013): disclosed in notes, not as provision",
      "Preliminary expenses written off against Securities Premium Reserve first",
      "Notes to Accounts are integral part of financial statements",
    ],
    tags: [
      "balance sheet",
      "Schedule III",
      "P&L",
      "financial statements",
      "notes to accounts",
      "company accounts",
    ],
  },

  {
    id: "note_acc_010",
    subject: "Accounts",
    topic: "Analysis of Financial Statements",
    title:
      "Analysis of Financial Statements — Comparative and Common-Size Statements",
    content: `## Analysis of Financial Statements

**Meaning:** The process of establishing meaningful relationship between items of financial statements to draw useful conclusions about the financial position and performance of a business.

---

## Objectives of Analysis
1. Assess profitability
2. Assess liquidity (short-term solvency)
3. Assess solvency (long-term stability)
4. Assess efficiency of asset utilisation
5. Compare performance over time (trend analysis)
6. Compare with industry benchmarks

---

## Tools / Techniques of Analysis

1. Comparative Financial Statements
2. Common-Size Financial Statements
3. Ratio Analysis
4. Cash Flow / Funds Flow Analysis
5. Trend Analysis

---

## 1. Comparative Financial Statements

Show figures of two or more years side by side with **Absolute Change** and **Percentage Change**.

**Format — Comparative Income Statement:**

| Particulars | Year 1 (₹) | Year 2 (₹) | Absolute Change (₹) | % Change |
|---|---|---|---|---|
| Revenue from Operations | 5,00,000 | 6,00,000 | +1,00,000 | +20% |
| Less: Cost of Goods Sold | 3,00,000 | 3,60,000 | +60,000 | +20% |
| Gross Profit | 2,00,000 | 2,40,000 | +40,000 | +20% |
| Less: Operating Expenses | 80,000 | 1,00,000 | +20,000 | +25% |
| Operating Profit | 1,20,000 | 1,40,000 | +20,000 | +16.67% |
| Less: Tax | 36,000 | 42,000 | +6,000 | +16.67% |
| Net Profit | 84,000 | 98,000 | +14,000 | +16.67% |

**Formula:**
- Absolute Change = Current Year − Base Year
- % Change = (Absolute Change / Base Year) × 100

**Interpretation:**
- Revenue grew 20% but operating expenses grew 25% → operational efficiency declining
- Net profit grew but at slower rate than revenue → costs rising faster

---

## 2. Common-Size Financial Statements

Each item expressed as **percentage of a base figure:**
- Income Statement: Base = Net Sales / Revenue (= 100%)
- Balance Sheet: Base = Total Assets or Total Capital & Liabilities (= 100%)

**Format — Common-Size Income Statement:**

| Particulars | Amount (₹) | % of Net Sales |
|---|---|---|
| Net Sales | 6,00,000 | 100% |
| Cost of Goods Sold | 3,60,000 | 60% |
| Gross Profit | 2,40,000 | 40% |
| Operating Expenses | 1,00,000 | 16.67% |
| Operating Profit | 1,40,000 | 23.33% |
| Tax | 42,000 | 7% |
| Net Profit | 98,000 | 16.33% |

**Format — Common-Size Balance Sheet:**

| Particulars | Amount (₹) | % of Total |
|---|---|---|
| Share Capital | 2,00,000 | 40% |
| Reserves | 50,000 | 10% |
| Long-term Borrowings | 1,00,000 | 20% |
| Current Liabilities | 1,50,000 | 30% |
| **Total** | **5,00,000** | **100%** |

---

## Comparative vs Common-Size — Key Differences

| Basis | Comparative | Common-Size |
|---|---|---|
| Purpose | Shows year-on-year change | Shows structural composition |
| Base | Previous year values | Net Sales / Total Assets |
| Change shown | Absolute + Percentage | Percentage only |
| Useful for | Trend analysis | Structural/composition analysis |

---

## Limitations of Financial Statement Analysis

1. **Historical data** — reflects past, not future
2. **Price level changes** — inflation distorts comparisons
3. **Window dressing** — companies may manipulate figures
4. **Different accounting policies** — makes comparison difficult
5. **Non-financial factors** ignored (employee morale, R&D)
6. **Seasonal variations** not captured in year-end statements
7. **Qualitative aspects** like management quality, brand value excluded`,
    keyPoints: [
      "Comparative Statements: Absolute Change + % Change for two or more years",
      "Absolute Change = Current Year − Base Year; % Change = (Absolute ÷ Base) × 100",
      "Common-Size Income Statement: each item as % of Net Sales",
      "Common-Size Balance Sheet: each item as % of Total Assets",
      "Comparative shows changes over time; Common-size shows structural composition",
      "Limitation: Historical, ignores qualitative factors, affected by accounting policy differences",
      "Tools of analysis: Comparative, Common-size, Ratio, Cash Flow, Trend",
    ],
    tags: [
      "comparative statements",
      "common-size",
      "financial analysis",
      "trend analysis",
      "tools of analysis",
    ],
  },

  {
    id: "note_acc_011",
    subject: "Accounts",
    topic: "Ratio Analysis",
    title: "Ratio Analysis — Liquidity Ratios with Worked Examples",
    content: `## Ratio Analysis — Introduction

A **financial ratio** is a mathematical relationship between two accounting figures. Ratios help assess liquidity, solvency, profitability, and efficiency.

**Classification of Ratios:**
1. Liquidity Ratios (Short-term solvency)
2. Solvency Ratios (Long-term stability)
3. Profitability Ratios
4. Activity / Turnover Ratios

---

## LIQUIDITY RATIOS

These measure the ability of a firm to meet its short-term obligations.

---

### 1. Current Ratio

**Formula:** Current Ratio = Current Assets / Current Liabilities

**Ideal Ratio:** 2:1 (for every ₹1 of current liability, there are ₹2 of current assets)

**Components:**

*Current Assets include:*
- Cash and cash equivalents
- Marketable securities / Current investments
- Trade receivables (debtors + bills receivable)
- Inventories (stock)
- Prepaid expenses
- Short-term loans and advances
- Other current assets

*Current Liabilities include:*
- Trade payables (creditors + bills payable)
- Short-term borrowings
- Outstanding expenses
- Advance income received
- Short-term provisions (tax, dividend)

**Example:**
- Current Assets: Cash ₹20,000; Debtors ₹40,000; Stock ₹60,000; Prepaid ₹5,000 → Total = ₹1,25,000
- Current Liabilities: Creditors ₹50,000; Bills Payable ₹12,500 → Total = ₹62,500
- **Current Ratio = 1,25,000 / 62,500 = 2:1** (Ideal)

**Interpretation:**
- > 2 : Too much idle funds, poor asset utilisation
- < 2 : Possible liquidity stress
- = 2 : Ideal

---

### 2. Quick Ratio (Acid Test Ratio / Liquid Ratio)

**Formula:** Quick Ratio = Quick Assets / Current Liabilities

**Ideal Ratio:** 1:1

**Quick Assets = Current Assets − Inventories − Prepaid Expenses**
(Inventories and prepaid are excluded because they are NOT quickly convertible to cash)

**Example (continuing above):**
- Quick Assets = 1,25,000 − 60,000 (Stock) − 5,000 (Prepaid) = ₹60,000
- Current Liabilities = ₹62,500
- **Quick Ratio = 60,000 / 62,500 = 0.96:1** (Slightly below ideal — concern)

**Interpretation:**
- > 1 : Good liquidity
- < 1 : May face difficulty meeting immediate obligations

---

### 3. Cash Ratio (Absolute Liquid Ratio)

**Formula:** Cash Ratio = (Cash + Cash Equivalents + Marketable Securities) / Current Liabilities

**Ideal Ratio:** 0.5:1 (0.5 or above is acceptable)

**Cash Equivalents include:** Bank balance, short-term investments, marketable securities

**Example:**
- Cash = ₹20,000; No marketable securities
- Current Liabilities = ₹62,500
- **Cash Ratio = 20,000 / 62,500 = 0.32:1** (Below ideal — limited immediate cash)

---

## Worked Comprehensive Example

**Balance Sheet Extract:**

| Assets | ₹ | Liabilities | ₹ |
|---|---|---|---|
| Goodwill | 50,000 | Equity Share Capital | 3,00,000 |
| Plant | 2,00,000 | Reserves | 50,000 |
| Stock | 80,000 | 10% Debentures | 1,00,000 |
| Debtors | 60,000 | Creditors | 70,000 |
| Prepaid Exp | 5,000 | Outstanding Exp | 10,000 |
| Cash | 25,000 | Provision for Tax | 20,000 |

**Calculate all liquidity ratios:**
- Current Assets = Stock(80K) + Debtors(60K) + Prepaid(5K) + Cash(25K) = **₹1,70,000**
- Current Liabilities = Creditors(70K) + Outstanding(10K) + Provision for Tax(20K) = **₹1,00,000**
- Quick Assets = 1,70,000 − 80,000 − 5,000 = **₹85,000**
- Cash = ₹25,000

**Results:**
- Current Ratio = 1,70,000 / 1,00,000 = **1.7:1** (Below ideal; concern)
- Quick Ratio = 85,000 / 1,00,000 = **0.85:1** (Below ideal; concern)
- Cash Ratio = 25,000 / 1,00,000 = **0.25:1** (Low; immediate liquidity tight)

*Note: Debentures are non-current liabilities — NOT included in current liabilities.*`,
    keyPoints: [
      "Current Ratio = Current Assets ÷ Current Liabilities; Ideal = 2:1",
      "Quick Ratio = Quick Assets ÷ Current Liabilities; Ideal = 1:1",
      "Quick Assets = CA − Stock − Prepaid Expenses (exclude non-liquid items)",
      "Cash Ratio = Cash + Marketable Securities ÷ CL; Ideal = 0.5:1",
      "Debentures are Non-Current Liabilities — never include in CL",
      "Current investments ARE current assets; Long-term investments are non-current",
      "Higher ratio = more liquidity but also may mean idle/unproductive assets",
    ],
    tags: [
      "liquidity ratios",
      "current ratio",
      "quick ratio",
      "acid test",
      "cash ratio",
      "ratio analysis",
    ],
  },

  {
    id: "note_acc_012",
    subject: "Accounts",
    topic: "Ratio Analysis",
    title: "Ratio Analysis — Solvency, Profitability, and Activity Ratios",
    content: `## SOLVENCY RATIOS (Long-term)

These measure a firm's ability to meet long-term obligations.

### 1. Debt-Equity Ratio
**Formula:** Debt-Equity Ratio = Long-term Debt / Shareholders' Funds
- Long-term Debt = Debentures + Long-term loans
- Shareholders' Funds = Share Capital + Reserves & Surplus
- **Ideal:** 2:1 (max 2:1 considered acceptable)
- Lower ratio = less financial risk

### 2. Total Assets to Debt Ratio
**Formula:** Total Assets to Debt = Total Assets / Long-term Debt
- Higher ratio = more assets per unit of debt = safer

### 3. Proprietary Ratio (Equity Ratio)
**Formula:** Proprietary Ratio = Shareholders' Funds / Total Assets
- Ideal: 0.5 or above (50%+ assets financed by equity)

### 4. Interest Coverage Ratio
**Formula:** Interest Coverage = EBIT / Interest Expense
- EBIT = Earnings Before Interest and Tax = Net Profit + Interest + Tax
- **Ideal:** Higher is better; 3+ is considered safe
- Shows how many times interest can be paid from operating profits

**Example:** Net Profit ₹50,000; Interest ₹20,000; Tax ₹15,000
- EBIT = 50,000 + 20,000 + 15,000 = ₹85,000
- Interest Coverage = 85,000 / 20,000 = **4.25 times** (Good)

---

## PROFITABILITY RATIOS

### 1. Gross Profit Ratio
**Formula:** GP Ratio = (Gross Profit / Net Sales) × 100
- Gross Profit = Net Sales − Cost of Goods Sold
- **Ideal:** Higher is better; industry-specific

### 2. Net Profit Ratio
**Formula:** NP Ratio = (Net Profit after Tax / Net Sales) × 100
- Shows final profitability after all expenses

### 3. Operating Profit Ratio
**Formula:** Operating Ratio = (Operating Cost / Net Sales) × 100
OR Operating Profit Ratio = (Operating Profit / Net Sales) × 100
- Operating Cost = COGS + Operating Expenses (excl. interest and tax)

### 4. Return on Investment (ROI) / Return on Capital Employed
**Formula:** ROI = (Net Profit after Tax / Capital Employed) × 100
- Capital Employed = Shareholders' Funds + Long-term Borrowings
- OR Capital Employed = Total Assets − Current Liabilities

### 5. Earnings Per Share (EPS)
**Formula:** EPS = Net Profit after Tax (and Preference Dividend) / Number of Equity Shares

**Example:** Net Profit ₹5,00,000; Preference Dividend ₹50,000; Equity Shares = 1,00,000
- EPS = (5,00,000 − 50,000) / 1,00,000 = **₹4.50 per share**

---

## ACTIVITY / TURNOVER RATIOS

These measure efficiency of asset utilisation.

### 1. Inventory Turnover Ratio
**Formula:** Inventory Turnover = Cost of Goods Sold / Average Inventory
- Average Inventory = (Opening + Closing Stock) / 2
- Higher ratio = faster stock movement = efficient inventory management

**Example:** COGS = ₹6,00,000; Opening Stock = ₹80,000; Closing Stock = ₹1,20,000
- Average Stock = (80,000 + 1,20,000) / 2 = ₹1,00,000
- **Inventory Turnover = 6,00,000 / 1,00,000 = 6 times**
- Inventory Holding Period = 365 / 6 = **61 days**

### 2. Debtors (Trade Receivables) Turnover Ratio
**Formula:** Debtors Turnover = Net Credit Sales / Average Trade Receivables
- Average Trade Receivables = (Opening + Closing) / 2
- Debtors Collection Period = 365 / Debtors Turnover Ratio (in days)
- Lower collection period = faster recovery

### 3. Creditors (Trade Payables) Turnover Ratio
**Formula:** Creditors Turnover = Net Credit Purchases / Average Trade Payables
- Creditors Payment Period = 365 / Creditors Turnover Ratio
- Higher payment period = company using supplier credit longer

### 4. Working Capital Turnover Ratio
**Formula:** Working Capital Turnover = Net Sales / Working Capital
- Working Capital = Current Assets − Current Liabilities
- Higher ratio = more sales generated per rupee of working capital

---

## Summary Table

| Ratio | Formula | Ideal |
|---|---|---|
| Current Ratio | CA / CL | 2:1 |
| Quick Ratio | Quick Assets / CL | 1:1 |
| Debt-Equity | LT Debt / Shareholders' Funds | 2:1 |
| Interest Coverage | EBIT / Interest | 3+ times |
| GP Ratio | GP / Net Sales × 100 | Higher better |
| NP Ratio | PAT / Net Sales × 100 | Higher better |
| ROI | PAT / Capital Employed × 100 | Higher better |
| Inventory Turnover | COGS / Avg Stock | Higher better |
| EPS | PAT − Pref Div / No. of Eq Shares | Higher better |`,
    keyPoints: [
      "Debt-Equity = LT Debt ÷ Shareholders' Funds; ideal 2:1 (max); lower = safer",
      "Interest Coverage = EBIT ÷ Interest; ideal 3+; shows safety margin for lenders",
      "EBIT = Net Profit + Interest + Tax (add back both)",
      "GP Ratio = Gross Profit ÷ Net Sales × 100; NP Ratio uses PAT",
      "ROI / ROCE = PAT ÷ Capital Employed × 100",
      "Capital Employed = Shareholders' Funds + Long-term Debt = Total Assets − CL",
      "Inventory Turnover = COGS ÷ Average Inventory; Holding Period = 365 ÷ Turnover",
    ],
    tags: [
      "solvency ratios",
      "profitability ratios",
      "activity ratios",
      "EPS",
      "ROI",
      "turnover ratios",
      "EBIT",
    ],
  },

  {
    id: "note_acc_013",
    subject: "Accounts",
    topic: "Cash Flow Statement",
    title: "Cash Flow Statement (AS-3) — Indirect Method with Full Format",
    content: `## Cash Flow Statement — Meaning and Purpose

A **Cash Flow Statement** (as per AS-3 Revised) shows the inflows and outflows of cash and cash equivalents during a period, classified under three activities.

**Objectives:**
1. Assess ability to generate cash
2. Assess liquidity and solvency
3. Plan for capital requirements
4. Understand difference between profit and cash

**Cash Equivalents:** Short-term, highly liquid investments (maturity ≤ 3 months) that are readily convertible to cash.

---

## Three Activities

### 1. Operating Activities
Cash flows from the principal revenue-generating activities.

**Examples — Inflows:**
- Cash received from customers (sales)
- Royalties, fees, commission received
- Insurance claims received

**Examples — Outflows:**
- Cash paid to suppliers (purchases)
- Cash paid to employees (salaries, wages)
- Income tax paid (unless specifically identified as financing/investing)
- Interest paid (for non-financial companies, shown here OR financing)

---

### 2. Investing Activities
Cash flows from acquisition and disposal of non-current assets and investments.

**Inflows (Cash Receipts):**
- Sale of fixed assets (tangible or intangible)
- Sale of investments
- Interest received (non-financial companies)
- Dividends received
- Repayment of loans given

**Outflows (Cash Payments):**
- Purchase of fixed assets
- Purchase of investments
- Loans given to other parties

---

### 3. Financing Activities
Cash flows relating to changes in capital structure (equity and borrowed funds).

**Inflows:**
- Issue of shares (cash proceeds)
- Issue of debentures / bonds / loans received

**Outflows:**
- Redemption of debentures / repayment of loans
- Payment of dividends
- Repurchase of own shares
- Interest paid (sometimes classified here)

---

## Methods for Operating Activities

### Direct Method
Lists all actual cash receipts and payments from operations.
(Less commonly used; rarely tested in CUET)

### Indirect Method (CUET Focus)
Starts with **Net Profit before Tax and Extraordinary Items** and adjusts for:
1. Non-cash items
2. Non-operating items
3. Working capital changes

---

## Indirect Method — Full Format

**Cash Flow from Operating Activities:**

| Particulars | ₹ |
|---|---|
| Net Profit before Tax and Extraordinary Items | xx |
| **Add back non-cash/non-operating charges:** | |
| Depreciation | xx |
| Amortisation | xx |
| Loss on Sale of Fixed Assets | xx |
| Provision for Doubtful Debts | xx |
| Interest Expense | xx |
| **Less: non-cash/non-operating credits:** | |
| Profit on Sale of Fixed Assets | (xx) |
| Dividend Received | (xx) |
| Interest Received | (xx) |
| **= Cash Profit from Operations (before WC changes)** | xx |
| **Working Capital Adjustments:** | |
| Increase in Current Assets (excl. cash) | (xx) |
| Decrease in Current Assets (excl. cash) | xx |
| Increase in Current Liabilities | xx |
| Decrease in Current Liabilities | (xx) |
| **= Cash Generated from Operations** | xx |
| Less: Tax Paid | (xx) |
| **Net Cash from Operating Activities (A)** | **xx** |

**Cash Flow from Investing Activities:**

| Sale of Fixed Assets | xx |
|---|---|
| Purchase of Fixed Assets | (xx) |
| Sale of Investments | xx |
| Purchase of Investments | (xx) |
| Interest Received | xx |
| Dividends Received | xx |
| **Net Cash from Investing Activities (B)** | **xx** |

**Cash Flow from Financing Activities:**

| Proceeds from issue of shares | xx |
|---|---|
| Proceeds from debentures/loans | xx |
| Repayment of loans/debentures | (xx) |
| Dividends paid | (xx) |
| Interest paid | (xx) |
| **Net Cash from Financing Activities (C)** | **xx** |

**Net Increase/Decrease in Cash = A + B + C**
**Opening Cash Balance + Net Change = Closing Cash Balance** ✓

---

## Treatment of Special Items

| Item | Treatment |
|---|---|
| Tax paid | Operating (unless specific) |
| Dividend paid | Financing |
| Dividend received | Investing |
| Interest paid | Financing OR Operating |
| Interest received | Investing OR Operating |
| Purchase of fixed assets (credit) | Investing activity; cash not yet paid |

---

## Working Capital Changes — Rule

**Working Capital = Current Assets − Current Liabilities**

| Change | Effect on Cash |
|---|---|
| Current Asset increases | Cash USED (−) |
| Current Asset decreases | Cash GENERATED (+) |
| Current Liability increases | Cash SAVED (+) |
| Current Liability decreases | Cash USED (−) |

*Memory trick: CA up = cash down; CL up = cash up*`,
    keyPoints: [
      "Cash Flow Statement: Three sections — Operating (A), Investing (B), Financing (C)",
      "Indirect Method: Start with Net Profit; add back depreciation and non-cash charges",
      "Increase in CA = cash outflow (−); Increase in CL = cash inflow (+)",
      "Depreciation is added back as it is a non-cash expense",
      "Profit on sale of assets is deducted (added to Investing instead)",
      "Tax paid = Operating activity; Dividends paid = Financing; Dividends received = Investing",
      "Net Cash A + B + C = Net change in cash; Opening + Net Change = Closing balance",
    ],
    tags: [
      "cash flow statement",
      "AS-3",
      "indirect method",
      "operating activities",
      "investing",
      "financing",
      "working capital",
    ],
  },

  {
    id: "note_acc_014",
    subject: "Accounts",
    topic: "Revision",
    title: "Accounts — Key Formulas Cheatsheet (Complete CUET Reference)",
    content: `## PARTNERSHIP FORMULAS

### Capital & Interest
- Interest on Capital = Capital × Rate/100 × Time
- Interest on Drawings (fixed monthly) = Total Drawings × Rate/100 × Avg Period/12
  - Beginning of month: Avg = 6.5 months
  - End of month: Avg = 5.5 months
  - Middle of month: Avg = 6 months
- Commission on NP before commission = NP × Rate/100
- Commission on NP after commission = NP × Rate/(100 + Rate)

### Profit Sharing Ratios
- Sacrificing Ratio = Old Share − New Share
- Gaining Ratio = New Share − Old Share
- New Partner's share = as given; remaining = Old partners share in old ratio (unless stated)

### Goodwill Valuation
- Average Profit Method: Goodwill = Avg Profit × Years' Purchase
- Super Profit Method: Goodwill = Super Profit × Years' Purchase
  - Super Profit = Actual Avg Profit − Normal Profit
  - Normal Profit = Capital Employed × NRR/100
- Capitalisation of Avg Profit: Goodwill = (Avg Profit/NRR) × 100 − Capital Employed
- Capitalisation of Super Profit: Goodwill = (Super Profit/NRR) × 100

---

## COMPANY ACCOUNTS FORMULAS

### Share Capital
- Calls in Arrears Interest = Arrears × 10% p.a.
- Calls in Advance Interest = Advance × 12% p.a.
- Capital Reserve = Forfeiture amount received − Discount on reissue of forfeited shares
- Minimum price of reissue = Face Value − Amount received per forfeited share

### Debentures
- Number of shares on conversion = Debenture face value / Issue price per share
- DRR required = 25% of outstanding debentures
- DRR Investment = 15% of debentures maturing within 12 months
- Premium on Redemption = Liability (non-current); Discount on issue = Asset (amortised)

---

## FINANCIAL STATEMENT ANALYSIS

### Absolute Change = Current Year − Base Year
### % Change = (Absolute Change / Base Year) × 100

---

## RATIO ANALYSIS — ALL FORMULAS

### Liquidity Ratios
| Ratio | Formula | Ideal |
|---|---|---|
| Current Ratio | Current Assets / Current Liabilities | 2:1 |
| Quick Ratio | (CA − Stock − Prepaid) / CL | 1:1 |
| Cash Ratio | (Cash + Equivalents) / CL | 0.5:1 |

### Solvency Ratios
| Ratio | Formula |
|---|---|
| Debt-Equity Ratio | Long-term Debt / Shareholders' Funds |
| Total Assets to Debt | Total Assets / Long-term Debt |
| Proprietary Ratio | Shareholders' Funds / Total Assets |
| Interest Coverage | EBIT / Interest Expense |

### Profitability Ratios
| Ratio | Formula |
|---|---|
| Gross Profit Ratio | (Gross Profit / Net Sales) × 100 |
| Net Profit Ratio | (PAT / Net Sales) × 100 |
| Operating Profit Ratio | (Operating Profit / Net Sales) × 100 |
| Return on Investment | (PAT / Capital Employed) × 100 |
| EPS | (PAT − Preference Dividend) / No. of Equity Shares |

### Activity Ratios
| Ratio | Formula |
|---|---|
| Inventory Turnover | COGS / Average Inventory |
| Inventory Holding Period | 365 / Inventory Turnover |
| Debtors Turnover | Net Credit Sales / Avg Trade Receivables |
| Debtors Collection Period | 365 / Debtors Turnover |
| Creditors Turnover | Net Credit Purchases / Avg Trade Payables |
| Creditors Payment Period | 365 / Creditors Turnover |
| Working Capital Turnover | Net Sales / Working Capital |

---

## CASH FLOW KEY FORMULAS

- EBIT = Net Profit + Interest + Tax
- Capital Employed = Shareholders' Funds + Long-term Debt
  - OR = Total Assets − Current Liabilities
- Working Capital = Current Assets − Current Liabilities
- Net Cash Change = Operating CF + Investing CF + Financing CF
- Closing Cash = Opening Cash + Net Cash Change

---

## QUICK REFERENCE — KEY NUMBERS

| Item | Value |
|---|---|
| Minimum Subscription (SEBI) | 90% of issued capital |
| Calls in Arrears interest | 10% p.a. |
| Calls in Advance interest | 12% p.a. |
| DRR Requirement | 25% of outstanding debentures |
| DRR Investment Requirement | 15% of maturing debentures (within 12 months) |
| Interest on Partner's Loan (without deed) | 6% p.a. |
| Minimum partners in a firm | 2 |
| Maximum partners in a firm | 50 (as per Companies Act 2013) |
| Current Ratio ideal | 2:1 |
| Quick Ratio ideal | 1:1 |
| Cash Ratio ideal | 0.5:1 |`,
    keyPoints: [
      "Super Profit = Actual Avg Profit − (Capital Employed × NRR/100)",
      "Capital Reserve = Forfeiture received − Discount on reissue",
      "EBIT = Net Profit after Tax + Interest + Tax (add back both)",
      "Capital Employed = Shareholders' Funds + Long-term Debt (or Total Assets − CL)",
      "Quick Assets = CA − Stock − Prepaid (do NOT exclude debtors)",
      "DRR = 25%; DRR Investment = 15% of maturing debentures",
      "Interest without deed: Loans 6%; Capital = nil; Drawings = nil",
    ],
    tags: [
      "formulas",
      "cheatsheet",
      "revision",
      "all ratios",
      "partnership formulas",
      "quick reference",
      "CUET",
    ],
  },

  {
    id: "note_acc_015",
    subject: "Accounts",
    topic: "Revision",
    title: "Accounts — Journal Entry Quick Reference for All Topics",
    content: `## PARTNERSHIP — JOURNAL ENTRIES

### Goodwill Entries

**Goodwill raised (for ALL partners in old PSR):**
Dr: Goodwill A/c → Cr: All Partners' Capital A/c (old ratio)

**Goodwill written off (in NEW ratio):**
Dr: All Partners' Capital A/c (new ratio) → Cr: Goodwill A/c

**New partner brings cash for goodwill (premium method):**
Dr: Bank/Cash A/c → Cr: Sacrificing Partners' Capital A/c (sacrificing ratio)

**Existing goodwill write-off before admission:**
Dr: Old Partners' Capital A/c (old ratio) → Cr: Goodwill A/c

---

### Admission Entries

1. New partner brings capital:
   Dr: Cash/Bank → Cr: New Partner's Capital A/c

2. Goodwill treatment (premium method):
   Dr: Cash → Cr: Old Partners' Capital (sacrificing ratio)

3. Revaluation profit:
   Dr: Revaluation A/c → Cr: All Partners' Capital (old PSR)

4. Revaluation loss:
   Dr: All Partners' Capital (old PSR) → Cr: Revaluation A/c

5. Reserve distribution:
   Dr: General Reserve → Cr: Old Partners' Capital (old PSR)

---

### Retirement Entries

1. Goodwill compensation to retiring partner:
   Dr: Continuing Partners' Capital (gaining ratio) → Cr: Retiring Partner's Capital

2. Revaluation profit:
   Dr: Revaluation A/c → Cr: All Partners' Capital (incl. retiring, in old PSR)

3. Reserve distribution to all:
   Dr: Reserve → Cr: All Partners' Capital (old PSR)

4. Payment of amount due:
   Dr: Retiring Partner's Capital → Cr: Bank (cash payment)
   Dr: Retiring Partner's Capital → Cr: Retiring Partner's Loan A/c (if not fully paid)

5. Interest on retiring partner's loan:
   Dr: Profit & Loss A/c → Cr: Retiring Partner's Loan A/c

---

### Dissolution Entries

1. Close assets (transfer to Realisation):
   Dr: Realisation A/c → Cr: All Asset A/cs (except cash/bank/fictitious)

2. Close liabilities (transfer to Realisation):
   Dr: All Liability A/cs → Cr: Realisation A/c

3. Sale of assets for cash:
   Dr: Bank A/c → Cr: Realisation A/c

4. Partner takes over asset:
   Dr: Partner's Capital A/c → Cr: Realisation A/c

5. Payment to creditors:
   Dr: Realisation A/c → Cr: Bank A/c

6. Creditor takes over a liability at less:
   Dr: Realisation A/c → Cr: [relevant liability at reduced amount]

7. Realisation expenses:
   Dr: Realisation A/c → Cr: Bank A/c

8. Profit on realisation (to partners in PSR):
   Dr: Realisation A/c → Cr: Partners' Capital A/c

9. Loss on realisation:
   Dr: Partners' Capital A/c → Cr: Realisation A/c

10. Write off fictitious assets:
    Dr: Partners' Capital A/c → Cr: Fictitious Asset A/c

11. Final settlement:
    Dr: Partners' Capital A/c → Cr: Bank A/c (for credit balance)

---

## COMPANY ACCOUNTS — JOURNAL ENTRIES

### Issue of Shares at Par

1. Application received:
   Dr: Bank → Cr: Share Application A/c

2. Allotment (application money transferred + allotment due):
   Dr: Share Application → Cr: Share Capital (application money)
   Dr: Share Allotment → Cr: Share Capital (allotment money)

3. Cash received on allotment:
   Dr: Bank → Cr: Share Allotment

4. Call made:
   Dr: Share First Call → Cr: Share Capital

5. Call received:
   Dr: Bank → Cr: Share First Call

### Issue at Premium

2a. Allotment entry:
   Dr: Share Allotment → Cr: Share Capital + Securities Premium Reserve

### Forfeiture and Reissue

**Forfeiture (at par, allotment unpaid):**
Dr: Share Capital (called-up) → Cr: Share Allotment (unpaid) + Share Forfeiture (paid)

**Forfeiture (at premium, premium unpaid):**
Dr: Share Capital (called-up) + Dr: Sec Premium Reserve (unpaid premium) → Cr: Share Allotment/Call (unpaid) + Share Forfeiture (paid)

**Reissue at discount:**
Dr: Bank + Dr: Share Forfeiture → Cr: Share Capital

**Reissue at premium:**
Dr: Bank → Cr: Share Capital + Securities Premium Reserve

**Capital Reserve transfer:**
Dr: Share Forfeiture A/c → Cr: Capital Reserve A/c

---

### Debenture Entries

**Issue at par:**
Dr: Bank → Cr: 12% Debentures A/c

**Issue at discount:**
Dr: Bank + Dr: Discount on Issue → Cr: Debentures A/c

**Issue at premium:**
Dr: Bank → Cr: Debentures A/c + Securities Premium Reserve

**Interest accrued:**
Dr: Finance Costs → Cr: Interest Payable

**DRR Creation:**
Dr: Surplus (P&L) → Cr: Debenture Redemption Reserve

**DRR Investment:**
Dr: DRR Investment A/c → Cr: Bank

**Redemption (lump sum):**
Dr: Debentures → Cr: Debentureholders A/c
Dr: Debentureholders → Cr: Bank

**DRR transfer after redemption:**
Dr: DRR → Cr: General Reserve

**Conversion to shares:**
Dr: Debentures (face value) → Cr: Share Capital + Securities Premium Reserve`,
    keyPoints: [
      "Realisation A/c: Assets Dr (book value), Proceeds Cr; Liabilities Cr (book value), Payments Dr",
      "Fictitious assets written off directly to Partners' Capital (not Realisation)",
      "Cash/Bank accounts are NOT transferred to Realisation A/c",
      "Premium for goodwill on admission → Sacrificing Partners' Capital (Sacrificing Ratio)",
      "Goodwill on retirement → Gaining Partners debit, Retiring Partner credit (Gaining Ratio)",
      "DRR → General Reserve (after debentures are redeemed)",
      "Capital Reserve = Share Forfeiture balance after reissue discount adjustment",
    ],
    tags: [
      "journal entries",
      "quick reference",
      "revision",
      "partnership entries",
      "company entries",
      "debentures",
      "shares",
      "dissolution",
    ],
  },
];
