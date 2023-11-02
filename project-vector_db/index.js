import { config } from 'dotenv';
config();
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

import { LocalIndex } from 'vectra';
import { addItem, query, populateVectra } from './items.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { queryVariations } from '../datasets/queries.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexFolderPath = path.join(__dirname, '..', 'index');
const index = new LocalIndex(indexFolderPath);


async function main() {
    if (!await index.isIndexCreated()) {
        await index.createIndex();
    }

    //populateVectra(index);

    let csvData = [];
    for (const queryText of queryVariations) {
        console.log(`\nQuerying for '${queryText}':`);
        const queryResult = await query(queryText, index);

        const queryData = {
            query: `"${queryText}"`,  // Enclose in double quotes
            answer1: '',
            similarityScore1: '',
            answer2: '',
            similarityScore2: '',
            answer3: '',
            similarityScore3: '',
            time: queryResult.executionTime  // Include execution time
        };
        
        // Process the result data
        for (let i = 0; i < queryResult.results.length; i++) {
            const result = queryResult.results[i];
            queryData[`answer${i + 1}`] = `"${result.answer}"`;  // Enclose in double quotes
            queryData[`similarityScore${i + 1}`] = result.score;
        }
        
        // Push to the array
        csvData.push(queryData);
    }
    
    // Manually construct CSV data
    const header = Object.keys(csvData[0]).join(',');
    const rows = csvData.map(row => Object.values(row).join(',')).join('\n');
    const csv = `${header}\n${rows}`;

    // Save it to a file
    fs.writeFileSync('results.csv', csv);
}

main();


