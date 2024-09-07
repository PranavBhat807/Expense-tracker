"use client";
import React from 'react'
import axios from 'axios';

const getFinancialAdvice = async(totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget,totalIncome,totalSpend);
 
  const question = `
    Based on the following financial data:
    - Total Budget: ${totalBudget} USD 
    - Expenses: ${totalSpend} USD 
    - Incomes: ${totalIncome} USD
    Act as a 30 years experienced Financial Advisor and Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively. Give suggestions about what to reduce and what to increase
  `;
  
  const response = await axios({
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDJcGOPzHGsCXdUwHcET-Ssk3MyNCoaOcI",
    method: "post",
    data: {
      contents: [
        { parts: [{ text: question }]}
      ],
    },
  });
  const result = response['data']['candidates'][0]['content']['parts'][0]['text']
  return result;
  
}

export default getFinancialAdvice
