type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InverstmentRessult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};

type CalculationResult = InverstmentRessult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;
  if (initialAmount < 0) {
    return "Initial amount cannot be negative.";
  }
  if (duration <= 0) {
    return "No valid duration provided.";
  }
  if (expectedReturn < 0) {
    return "Expected return cannot be negative.";
  }

  let total = initialAmount;
  let totalContribution = 0;
  let totalInterestEarned = 0;

  const annualResults: InverstmentRessult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContribution - initialAmount;
    totalContribution = totalContribution + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContribution,
    });
  }
  return annualResults;
}
function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(2)}`);
    console.log(
      `Total Contribution: ${yearEndResult.totalContribution.toFixed(2)}`
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(2)}`
    );
    console.log("-------------------------");
  }
}

const investmentData: InvestmentData = {
  initialAmount: 1000,
  annualContribution: 100,
  expectedReturn: 0.05, // 5% annual return
  duration: 10, // 10 years
};
const results = calculateInvestment(investmentData);
printResults(results);
