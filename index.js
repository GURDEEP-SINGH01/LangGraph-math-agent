import readlineSync from "readline-sync";
import "dotenv/config";

import { HumanMessage } from "@langchain/core/messages";

import { graph } from "./src/graph.js";

const main = async () => {

    while (true) {

        const query = readlineSync.question("\n>> ");

        if (query.toLowerCase() === "exit") {
            process.exit(0);
        }

        const stream = await graph.streamEvents(
            {
                messages: [
                    new HumanMessage(query),
                ],
            },
            {
                version: "v2",
            }
        );

        console.log("\n");

        for await (const event of stream) {

            // LLM streaming tokens
            if (
                event.event === "on_chat_model_stream"
            ) {

                const chunk =
                    event.data.chunk.content;

                process.stdout.write(chunk);
            }

            // Tool start
            if (
                event.event === "on_tool_start"
            ) {

                console.log("\n");
                console.log(
                    "====== TOOL START ======"
                );

                console.log(
                    "Tool:",
                    event.name
                );

                console.log(
                    "Input:",
                    event.data.input
                );
            }

            // Tool end
            if (
                event.event === "on_tool_end"
            ) {

                console.log("\n");

                console.log(
                    "====== TOOL RESULT ======"
                );

                console.log(
                    event.data.output
                );
            }
        }

        console.log("\n");
    }
};

main();