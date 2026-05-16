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

        const result = await graph.invoke({
            messages: [
                new HumanMessage(query),
            ],
        });

        const lastMessage =
            result.messages[result.messages.length - 1];

        console.log("\n");
        console.log(lastMessage.content);
    }
};

main();