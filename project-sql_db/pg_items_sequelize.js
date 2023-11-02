import Item from './item_model.js';
import { getVector } from './items.js';
import sequelize from './sequelize_setup.js';
import { qaPairs } from '../datasets/queries.js';


export async function addItem(question, answer = null) {
  try {
      const vector = await getVector(question);
      await Item.findOrCreate({
          where: { question: question },
          defaults: { vector: vector, answer: answer }
      });
      console.log(`Added item: ${question}`);
  } catch (error) {
      console.error('Error adding item:', error.message);
  }
}

export async function populateVectra() {
  for (const pair of qaPairs) {
      await addItem(pair.question, pair.answer);
  }
  console.log('postgresDB populated successfully.');
}

export async function query(text) {
    try {
        const vector = await getVector(text);

        const startTime = Date.now();

        const queryText = `
            SELECT question, answer, cosine_similarity(vector, $1) as similarity 
            FROM "Items" 
            ORDER BY similarity DESC
            LIMIT 3
        `;

        const results = await sequelize.query(
            queryText,
            {
                bind: [vector],
                type: sequelize.QueryTypes.SELECT
            }
        );

        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`Query time: ${elapsedTime} ms`);

        return {
            executionTime: elapsedTime,
            results: results.map(result => ({
                answer: result.answer,
                similarity: result.similarity
            }))
        };

    } catch (error) {
        console.error('Error querying items:', error.message);
        return null;
    }
}
