import * as readline from "readline";

type YesNO = "yes" | "no";

interface BillData {
  check: number;
  tipPercent: number;
  shouldSplit: boolean;
  numberOfPeople: number;
}

interface CalculationResult {
  tipAmount: number;
  totalBill: number;
  perPerson: number;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n Welcome to the Tip Calculator!\n");

rl.question("How high is the check? (e.g., 50.00): ", (checkInput) => {
  const check = parseFloat(checkInput.replace(",", "."));
  if (isNaN(check) || check < 0) {
    console.log(" Invalid input. Please enter a valid number.");
    rl.close();
    return;
  }

  rl.question(
    "What percentage of tip will you give? (e.g., 15 for 15%): ",
    (tipInput) => {
      const tipPercent = parseFloat(tipInput.replace(",", "."));
      if (isNaN(tipPercent) || tipPercent < 0) {
        console.log(" Invalid input. Please enter a valid percentage.");
        rl.close();
        return;
      }

      rl.question(
        "Should the bill be split among multiple people? (yes/no): ",
        (splitInput) => {
          const split = splitInput.trim().toLowerCase();
          const shouldSplit = ["yes", "y"].includes(split);
          console.log(splitInput);

          const finishCalculation = (data: BillData) => {
            const result: CalculationResult = {
              tipAmount: (data.check * data.tipPercent) / 100,
              totalBill: data.check + (data.check * data.tipPercent) / 100,
              perPerson:
                (data.check + (data.check * data.tipPercent) / 100) /
                data.numberOfPeople,
            };

            console.log("\n --- Tip Calculation Summary ---");
            console.log(`Check Amount: $${data.check.toFixed(2)}`);
            console.log(`Tip Percentage: ${data.tipPercent.toFixed(2)}%`);
            console.log(`Tip Amount: $${result.tipAmount.toFixed(2)}`);
            console.log(`Total Bill: $${result.totalBill.toFixed(2)}`);

            if (data.shouldSplit) {
              console.log(`\n Split among people:  Yes`);
              console.log(`Split between how many: ${data.numberOfPeople}`);
              console.log(`Each person pays: $${result.perPerson.toFixed(2)}`);
            }

            console.log("\n Thank you for using the Tip Calculator!\n");
            rl.close();
          };
          if (shouldSplit) {
            rl.question(
              "How many people will split the bill? ",
              (peopleInput) => {
                let numberOfPeople = parseInt(peopleInput.trim(), 10);
                if (isNaN(numberOfPeople) || numberOfPeople < 1) {
                  console.log(
                    "Invalid number of people. Using 1 person by default."
                  );
                  numberOfPeople = 1;
                }
                const billData: BillData = {
                  check,
                  tipPercent,
                  shouldSplit,
                  numberOfPeople,
                };
                finishCalculation(billData);
              }
            );
          } else {
            const billData: BillData = {
              check,
              tipPercent,
              shouldSplit,
              numberOfPeople: 1,
            };
            finishCalculation(billData);
          }
        }
      );
    }
  );
});
