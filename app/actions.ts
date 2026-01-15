'use server'

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
});

export async function translateJargon(userInput: string) {

    // Define the Prompt with your instruction
    const prompt = ChatPromptTemplate.fromMessages([
        ["system", "You are a populariser of technical language for non-developers. Translate technical terms in such a way that my grandmother could understand them."],
        ["human", "{text}"],
    ]);

    // Prepare the output parser
    const parser = new StringOutputParser();

    // The chain
    const chain = prompt.pipe(model).pipe(parser);

    return await chain.invoke({text: userInput});
}