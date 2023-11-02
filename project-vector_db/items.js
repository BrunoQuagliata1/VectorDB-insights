import { OpenAIApi, Configuration } from 'openai';
import { qaPairs } from '../datasets/queries.js';



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const api = new OpenAIApi(configuration);

export async function getVector(text) {
    const response = await api.createEmbedding({
        'model': 'text-embedding-ada-002',
        'input': text,
    });
    return response.data.data[0].embedding;
}

export async function populateVectra(index) {
    for (const pair of qaPairs) {
        const metadata = { text: pair.question, answer: pair.answer };
        await addItem(pair.question, index, metadata);
    }
    console.log('Vectra populated successfully.');
}

export async function addItem(text, index, metadata = { text }) {
    try {
        const vector = await getVector(text);
        const similarItems = await index.queryItems(vector, 5);
        const itemExists = similarItems.some(item => item.item.metadata.text === text);
        
        if (!itemExists) {
            await index.insertItem({
                vector: vector,
                metadata: metadata
            });
            console.log(`Added item: ${text}`);
        } else {
            console.log(`Item '${text}' already exists in the index.`);
        }
    } catch (error) {
        console.error('Error adding item:', error.message);
    }
}


export async function query(text, index) {
    try {

        const vector = await getVector(text);

        const startTime = Date.now();  // start time

        const results = await index.queryItems(vector, 3);  // grab top 3

        const endTime = Date.now();  // end time
        const elapsedTime = endTime - startTime;  // elapsed time
        console.log(`Query time: ${elapsedTime} ms`)

        return {
            query: text,
            executionTime: elapsedTime,
            // No relevance score calculation for now
            results: results.map(result => ({
                score: result.score,
                question: result.item.metadata.text,  // Store the question text
                answer: result.item.metadata.answer,  // Store the answer text
                vector: result.item.vector  // Store the vector
            }))
        };

    } catch (error) {
        console.error('Error querying items:', error.message);
        return null;  // return null on error
    }
}
