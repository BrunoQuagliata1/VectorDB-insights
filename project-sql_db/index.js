import { config } from 'dotenv';
config();
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

import { addItem, query, populateVectra } from './pg_items_sequelize.js';
import sequelize from './sequelize_setup.js';
import { fileURLToPath } from 'url';
import { queryVariations } from '../datasets/queries.js';
import path from 'path';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    console.log('jola')
    await sequelize.sync();

    // await addItem('apple');
    // await addItem('oranges');
    // await addItem('red');
    // await addItem('blue');

    //await populateVectra();

    const csvData = [];

    for (const queryText of queryVariations) {
        console.log(`\nQuerying for '${queryText}':`);
        const queryResult = await query(queryText);

        if (queryResult) {
            const row = {
                query: queryText,
                answer1: queryResult.results[0] ? queryResult.results[0].answer : '',
                similarityScore1: queryResult.results[0] ? queryResult.results[0].similarity : '',
                answer2: queryResult.results[1] ? queryResult.results[1].answer : '',
                similarityScore2: queryResult.results[1] ? queryResult.results[1].similarity : '',
                answer3: queryResult.results[2] ? queryResult.results[2].answer : '',
                similarityScore3: queryResult.results[2] ? queryResult.results[2].similarity : '',
                time: queryResult.executionTime 
            };
            csvData.push(row);
        } else {
            console.log(`No results for query: ${queryText}`);
        }
    }

    if (csvData.length > 0) {
        const header = Object.keys(csvData[0]).join(',');
        const rows = csvData.map(row => {
            return [
                `"${row.query}"`,
                `"${row.answer1}"`,
                row.similarityScore1,
                `"${row.answer2}"`,
                row.similarityScore2,
                `"${row.answer3}"`,
                row.similarityScore3,
                row.time
            ].join(',');
        }).join('\n');
        fs.writeFileSync('results.csv', `${header}\n${rows}`);
    } else {
        console.log('No data to write to CSV.');
    }
    
}

main();
