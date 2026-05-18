import {
    StateGraph,
    START,
    END,
    MemorySaver,
} from "@langchain/langgraph";

import { ChatOllama } from "@langchain/ollama";

import { GraphState } from "./state.js";

import {
    toolNode,
    shouldContinue,
} from "./node.js";

import { tools } from "./tools.js";

const llm = new ChatOllama({
    model: "qwen2.5:3b",
    temperature: 0,
});

const llmWithTools = llm.bindTools(tools);

const chatbotNode = async (state) => {
    // console.log("\n====== CHATBOT NODE ======");

    // console.log("CURRENT STATE:");
    // console.log(
    //     JSON.stringify(state.messages, null, 2)
    // );
    const response = await llmWithTools.invoke(
        state.messages
    );
    // console.log("\nLLM RESPONSE:");
    // console.log(
    //     JSON.stringify(response, null, 2)
    // );
    return {
        messages: [response],
    };
};
const memory = new MemorySaver();
const graphBuilder = new StateGraph(GraphState);

graphBuilder.addNode("chatbot", chatbotNode);

graphBuilder.addNode("tools", toolNode);

graphBuilder.addEdge(START, "chatbot");

graphBuilder.addConditionalEdges(
    "chatbot",
    shouldContinue
);

graphBuilder.addEdge("tools", "chatbot");

graphBuilder.addEdge("chatbot", END);


export const graph = graphBuilder.compile({
    checkpointer: memory,
});
