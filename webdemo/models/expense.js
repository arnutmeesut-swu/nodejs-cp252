class Expense {
  /**
   * Represents a Expense.
   * @constructor
   * @param {date} date - The date of the expense.
   * @param {float} income - The author of the book.
   * @param {number} expense - Expense amount.
   * @param {string} detail - Description of the transaction.
  */	
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

  /**
   * Add an expense record to the list.
   * @param {Expense} expense - Expense object to add.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Get all expense records.
   * @returns {Expense[]} Array of expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate total income from all records.
   * @returns {number} Total income amount.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate total expense from all records.
   * @returns {number} Total expense amount.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate remaining balance (income - expense).
   * @returns {number} Remaining money.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };