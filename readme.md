# LangGraph Math Agent

A local AI agent built using LangGraph, LangChain, Ollama, and tool calling.

This project demonstrates how modern AI agents work internally using:

* Graph-based orchestration
* Tool execution
* Multi-step reasoning
* Local LLMs
* Stateful workflows
* Agent loops
* LangSmith tracing

---

# Features

* Local LLM execution using Ollama
* Tool calling with LangChain tools
* Graph-based orchestration using LangGraph
* Multi-step reasoning workflows
* Dynamic tool selection
* Arithmetic tools:

  * Add
  * Multiply
  * Divide
* Interactive CLI interface
* LangSmith monitoring/tracing
* Fully local execution

---

# Tech Stack

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| LangGraph  | Workflow orchestration           |
| LangChain  | Tool calling + abstractions      |
| Ollama     | Local LLM runtime                |
| Qwen 2.5   | Tool-calling capable local model |
| Zod        | Schema validation                |
| LangSmith  | Observability + tracing          |
| Node.js    | Runtime                          |

---

# Project Structure

```text
src/
│
├── index.js
│
├── graph/
│   ├── graph.js
│   ├── nodes.js
│   └── state.js
│
└── tools/
    └── tools.js
```

---

# How The Agent Works

The agent works as a graph-based execution loop.

Example Input:

```text
Add 10 and 20 then multiply by 5
```

Execution Flow:

```text
START
  ↓
Chatbot Node (LLM reasoning)
  ↓
Tool Call → add(10,20)
  ↓
Tool Result → 30
  ↓
Chatbot Node (reason again)
  ↓
Tool Call → multiply(30,5)
  ↓
Tool Result → 150
  ↓
Final Response
  ↓
END
```

The LLM itself does not perform the math.

Instead:

* The LLM decides which tool to call
* The tool executes the logic
* The result is fed back into the graph state
* The LLM reasons again

This is the core architecture behind modern AI agents.

---

# Concepts You Will Learn

This project teaches:

## 1. AI Agent Architecture

Understanding:

* Planning
* Reasoning
* Tool orchestration
* State management
* Agent loops

---

## 2. LangGraph Workflows

Learn:

* Nodes
* Edges
* Conditional routing
* State transitions
* Graph execution

---

## 3. Tool Calling

Learn how LLMs:

* Select tools
* Generate tool arguments
* Chain multiple tool calls
* Use tool results

---

## 4. Local LLM Development

Learn:

* Running models locally
* Ollama setup
* Local inference
* Model limitations
* Tool-calling models

---

## 5. LangSmith Monitoring

Learn:

* AI observability
* Graph tracing
* Tool inspection
* State debugging
* Execution monitoring

---

# Installation

## 1. Install Ollama

Download and install:

[https://ollama.com/](https://ollama.com/)

---

## 2. Pull Model

```bash
ollama pull qwen2.5:3b
```

---

## 3. Start Ollama

```bash
ollama serve
```

---

## 4. Install Dependencies

```bash
npm install
```

or manually:

```bash
npm install @langchain/langgraph
npm install @langchain/core
npm install @langchain/ollama
npm install zod
npm install readline-sync
npm install dotenv
npm install langsmith
```

---

# Environment Variables

Create a `.env` file:

```env
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your_langsmith_api_key
LANGCHAIN_PROJECT=llama-agent
```

---

# Running The Project

```bash
node index.js
```

---

# Example Queries

```text
Add 10 and 20
```

```text
Multiply 5 and 8
```

```text
Add 10 and 20 then multiply by 5
```

```text
Divide 100 by 4
```

---

# LangSmith Tracing

Open:

[https://smith.langchain.com/](https://smith.langchain.com/)

You can monitor:

* Node execution
* Tool calls
* Graph state
* Timing
* Agent reasoning flow

---

# Important Notes
