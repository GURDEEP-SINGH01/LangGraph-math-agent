import { AIMessage } from "@langchain/core/messages";
import { ToolNode } from "@langchain/langgraph/prebuilt";

import { tools } from "./tools.js";

export const toolNode = new ToolNode(tools);

export const shouldContinue = (state) => {
    // console.log("\n====== SHOULD CONTINUE ======");

    const lastMessage = state.messages[state.messages.length - 1];
    // console.log(
    //     JSON.stringify(lastMessage, null, 2)
    // );

    // If tool calls exist → continue to tool node
    if (lastMessage.tool_calls?.length) {
        // console.log("→ GOING TO TOOLS NODE");
        return "tools";
    }
    // console.log("→ ENDING GRAPH");

    // Otherwise end graph
    return "__end__";
};