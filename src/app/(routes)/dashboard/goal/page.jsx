"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button"; // shadcn button component
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"; // shadcn card component
import { Input } from "../../../../components/ui/input"; // shadcn input component

const FinancialGoalPage = () => {
  const [goal, setGoal] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [displayGoal, setDisplayGoal] = useState("");

  const handleSubmit = () => {
    if (goal) {
      setDisplayGoal(goal);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setGoal(displayGoal);
  };

  const handleDelete = () => {
    setDisplayGoal("");
    setGoal("");
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h2 className="text-2xl font-bold">Set your Financial Goal</h2>
      
      <Input
        type="text"
        placeholder="Write your financial goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full max-w-md"
      />

      <div className="flex space-x-4">
        <Button onClick={handleSubmit} className="bg-blue-500 text-white">
          Submit
        </Button>
        <Button onClick={handleEdit} className="bg-yellow-500 text-white" disabled={!displayGoal}>
          Edit
        </Button>
        <Button onClick={handleDelete} className="bg-red-500 text-white" disabled={!displayGoal}>
          Delete
        </Button>
      </div>

      {displayGoal && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Your Financial Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{displayGoal}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FinancialGoalPage;
