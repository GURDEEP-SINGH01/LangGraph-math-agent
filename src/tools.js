import { tool } from "@langchain/core/tools";
import { z } from "zod";

const add = tool(
    async ({ a, b }) => a + b,
    {
        name: "add",
        description: "Add two numbers",
        schema: z.object({
            a: z.number().describe("First number"),
            b: z.number().describe("Second number"),
        }),
    }
);

const multiply = tool(
    async ({ a, b }) => a * b,
    {
        name: "multiply",
        description: "Multiply two numbers",
        schema: z.object({
            a: z.number().describe("First number"),
            b: z.number().describe("Second number"),
        }),
    }
);

const divide = tool(
    async ({ a, b }) => a / b,
    {
        name: "divide",
        description: "Divide first number by second number",
        schema: z.object({
            a: z.number().describe("Dividend"),
            b: z.number().describe("Divisor"),
        }),
    }
);

const substract = tool(
    async ({ a, b }) => a - b,
    {
        name: "substract",
        description: "Substract second number from first",
        schema: z.object({
            a: z.number().describe("First number"),
            b: z.number().describe("Second number"),
        }),
    }
);

export const tools = [add, multiply, divide, substract];