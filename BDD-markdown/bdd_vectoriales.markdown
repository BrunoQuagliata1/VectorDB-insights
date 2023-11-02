
---

## **Hoja de Ruta**

### **Elección del tema y organización del trabajo:**
- **Definición**: ¿Por qué es relevante el estudio de bases de datos vectoriales en el contexto actual?
- **Objetivos del proyecto final**
- **Temáticas a abordar**

### **Introducción:**
- **Historia breve** de las bases de datos: ver evolución hasta llegar a las bases de datos vectoriales.
- **Importancia actual**: ¿Por qué las bdd vectoriales son importantes hoy con Big Data y IA?

### **Profundización en bases de datos vectoriales:**
- **Definición y conceptos claves**: Entendimiento de qué es un vector en este contexto y su importancia.
- **Estructura y funcionamiento**: Cómo almacenan la información, algoritmos típicos y tecnologías asociadas.
- **Comparación con otras bases de datos**: ¿En qué se diferencian de las bases de datos relacionales, no relacionales, etc?

### **Aplicaciones prácticas:**
- **Casos de uso**: Ejemplos reales que usen bases de datos vectoriales.
- **Ventajas**: Rendimiento, escalabilidad, velocidad de consulta, etc.
- **Desventajas**: Limitaciones técnicas, casos donde no son ideales, etc.

### **Aspectos técnicos avanzados:**
- **Tecnologías y herramientas asociadas**: Software y hardware típicamente usados en la industria.
- **Integración con otras tecnologías**: Cómo se complementan con IA, sistemas de recomendación, etc.

### **Proyecciones y futuro:**
- **Tendencias**: Evolución esperada en los próximos años.
- **Innovaciones y desarrollos emergentes**: ¿Qué puede esperarse para las bases de datos vectoriales?

### **Conclusiones:**
- **Resumen final** 
- **Recomendaciones** 

### **Proyecto:**
- **Proyecto final** 

### **Bibliografía:**
- [Diving into AI: An exploration of embeddings and vector databases](https://atoonk.medium.com/diving-into-ai-an-exploration-of-embeddings-and-vector-databases-a7611c4ec063)
- [Pinecone: Learn Vector Database](https://www.pinecone.io/learn/vector-database/)
--- 

## **Elección del tema y organización del trabajo**
### ¿Por qué es relevante el estudio de bases de datos vectoriales en el contexto actual? 

Las bases de datos tradicionales son eficientes en muchas tareas. Sin embargo, se pueden encontrar en desventaja con la demanda y complejidad del escenario actual de Big Data y AI. En base a esto, las bases de datos vectoriales aparecieron como una solución que promete mucho. Su capacidad para representar datos como vectores en un espacio multidimensional permite operaciones más eficientes, especialmente cuando se trata de búsquedas basadas en similitudes o cuando los datos tienen una alta dimensionalidad, lo cual es muy común en muchas aplicaciones de Machine Learning.

Las bases de datos vectoriales no solo se adaptan a muchos problemas actuales, sino que también se adelantan hacia las necesidades del futuro. A medida que el mundo se vuelve más conectado y la ingesta de datos sigue creciendo en gran volumen, necesitamos tener herramientas que puedan gestionar, procesar y consultar estos datos de la forma más efectiva posible.

### Objetivos del proyecto final:
Entender a fondo la naturaleza y estructura de las bases de datos vectoriales: Explorar cómo almacenan, indexan y recuperan datos en comparación con las bases de datos tradicionales.

Identificar ventajas y limitaciones: Analizar situaciones y escenarios donde las bases de datos vectoriales tienen ventajas claras, así como identificar situaciones donde podrían no ser la mejor elección.

**Aplicación práctica:** Desarrollar un proyecto que implemente una base de datos vectorial para una aplicación específica. Este proyecto servirá como caso de estudio y demostración de las capacidades de estas bases de datos. Entre los proyectos a ver puede ser un sistema de recomendación que use vectores para encontrar productos similares para los usuarios o una aplicación de reconocimiento de imágenes que use la base de datos vectorial para encontrar imágenes similares rápidamente entre muchas otras posibles aplicaciones.

**Comparación con bases de datos tradicionales:** Implementar la misma aplicación usando una base de datos relacional o no relacional y comparar el rendimiento, facilidad de uso, métricas y otros factores relevantes.

### Temáticas a abordar:
**Conceptos básicos:** Qué son las bases de datos vectoriales, cómo funcionan y cuál es su propósito.

**Historia y evolución:** Rastrear la historia y el desarrollo de estas bases de datos, cómo han evolucionado con el tiempo y qué problemas vinieron a solucionar.

**Tecnologías y herramientas disponibles:** Estudiar las diferentes herramientas y plataformas disponibles en el mercado que ofrecen soluciones de bases de datos vectoriales.

**Casos de uso y aplicaciones reales:** Explorar empresas o proyectos que ya estén utilizando bases de datos vectoriales y analizar los beneficios y desafíos que han enfrentado.

**Tendencias futuras:** Reflexionar sobre el futuro de las bases de datos vectoriales, cómo podrían evolucionar y cuál podría ser su rol en el ecosistema tecnológico del futuro.

Con el desarrollo de este proyecto, no solo buscamos entender las bases de datos vectoriales desde una perspectiva teórica, sino también experimentar con su implementación práctica, para realmente apreciar su potencial y aplicabilidad en el mundo actual.

---
### **Introducción**

Desde el inicio de la informática, el acceso y almacenamiento de los datos han sido un tópico clave de discusión. Desde las tarjetas perforadas hasta las bases de datos relacionales de hoy en día, la evolución en la gestión de los datos siempre ha sido fundamental. Es así como a medida que entramos en esta nueva era de la informática, donde aparecen conceptos como Big Data y AI, donde los volúmenes de datos no solo son gigantes sino también muy complejos necesitamos buscar soluciones que vayan más allá de las más tradicionales. Es así como surge el estudio de las bases de datos vectoriales.

A lo largo de la historia, las bases de datos han evolucionado de estructuras más simples a sistemas relacionales, luego surge el concepto de bases de datos no relacionales donde buscaban poder cumplir las altas demandas de las aplicaciones y los volúmenes de datos. A medida que entramos en la era de Big Data y la Inteligencia Artificial, notamos como la necesidad no es solo manejar grandes volúmenes de datos, sino también poder procesar y consultar esos datos de formas más intuitivas y eficientes. Las bases de datos vectoriales, nos permiten algo muy interesante, poder representar datos en términos de vectores en un espacio multidimensional, lo cual propone una solución factible a nuestro problema.

En los últimos años y más específicamente meses, se ha escuchado mucho el concepto de bases de datos vectoriales y esto se puede analizar por varias razones. 

En un principio, quizá la más evidente es el boom de Big Data. Con las redes sociales y aplicaciones, la cantidad de datos generados diariamente ha llegado a un punto nunca antes visto en la historia y seguirá subiendo cada vez más. Sin embargo, el volumen de los datos no es el único problema. Sino la complejidad de estos datos, muchas veces vienen de tipos y formatos distintos, son de alta dimensionalidad en el contexto del número de atributos que pueden tener, lo que los hace muy difíciles de procesar con bases de datos tradicionales.

Asimismo, la Inteligencia Artificial y Machine Learning han sido claves en la solución de problemas complejos y en la toma de decisiones basadas en datos. Estas tecnologías requieren no solo grandes cantidades de datos, sino también formas eficientes de acceder a ellos. Las bases de datos vectoriales tienen un enfoque que se basa en la similitud y la proximidad en espacios vectoriales lo que nos ofrece muchas ventajas para este ámbito.

En este trabajo buscaremos explorar en profundidad las bases de datos vectoriales, su funcionamiento, ventajas y aplicaciones prácticas en conjunto a un proyecto final donde abordaremos esta tecnología desde un enfoque práctico. 

--- 

### **Profundización en bases de datos vectoriales:**

#### **Definición y conceptos claves:**
Las bases de datos vectoriales buscan representar datos como vectores en un espacio multidimensional. Entonces, decimos que un **vector** es una entidad matemática que tiene magnitud y dirección y puede representar muchos datos diferentes, ya sean números, imágenes o texto, todos codificados en un formato numérico. La principal ventaja de utilizar vectores es que nos permiten hacer comparaciones basadas en la proximidad o similitud de su valor. Por ejemplo, dos vectores que apuntan en direcciones similares y tienen magnitudes parecidas en un espacio vectorial serían similares o relacionados.

La **similitud** entre vectores se mide usando métricas comunmente usadas como la distancia euclidiana o la similitud del coseno. Estas métricas nos garantizan una forma cuantitativa de determinar qué tan cerca están dos vectores entre sí, lo que es esencial para tareas como búsquedas de similitud y sistemas de recomendación.

**Similitud de coseno**

![Alt text](image.png)

**Distancia euclidiana**

![Alt text](image-2.png)


#### **Estructura y funcionamiento:**
La información en una base de datos vectorial no se almacena en tablas o collections como en las bases de datos normales. Si no que cada elemento de datos se convierte en un vector y se almacena en un espacio multidimensional. Para hacer esto eficiente, se emplean **técnicas de indexación** especiales, como los árboles de búsqueda en espacio métrico (M-trees) o las estructuras basadas en hash para facilitar hacer búsquedas rápidas y eficientes.

Los **algoritmos típicos** asociados con bases de datos vectoriales son los que permiten convertir datos en vectores (embeddings), algoritmos para medir similitud o distancia entre vectores y algoritmos para la búsqueda rápida de los vecinos más cercanos (NN search).

En términos de **tecnologías asociadas**, existen varias bibliotecas y sistemas diseñados específicamente para gestionar bases de datos vectoriales, como Faiss de Facebook AI o Annoy de Spotify.

#### **Comparación con otras bases de datos:**
Las bases de datos vectoriales se diferencian en varios aspectos:

- **Bases de datos relacionales**: Estas bases de datos se estructuran en tablas, filas y columnas, centradas en relaciones y esquemas fijos. Las búsquedas se realizan en base a algo exacto y no en similitudes.

- **Bases de datos no relacionales**: Estas pueden tener varias estructuras, desde documentos hasta grafos. Aunque son más flexibles que las bases de datos relacionales en términos de esquemas, la mayoría no está optimizada todavia para búsquedas basadas en similitud.

- **Bases de datos orientadas a grafos**: Están diseñadas para representar relaciones complejas y conexiones entre datos. si bien pueden tener similitudes con las bases de datos vectoriales, su enfoque no está en la representación vectorial ni en la búsqueda de similitudes.

En fin, mientras que otros tipos de bases de datos están diseñados para almacenar y consultar datos basados en estructuras específicas o busquedas exactas, las bases de datos vectoriales están optimizadas para tareas que involucran similitudes y proximidades en un espacio vectorial.

---
### **Aplicaciones prácticas:**

#### **Casos de uso**:

1. **Sistemas de Recomendación**: apps como Netflix o Spotify usan bases de datos vectoriales para recomendar similar content, se basan en la similitud vectorial entre su contenido, ya sean películas, canciones, etc.

2. **Reconocimiento de Imágenes**: Las empresas que ofrecen servicios de imágenes como Google Fotos, hacen uso de bases de datos vectoriales para identificar imágenes que tengan características similares.

3. **Procesamiento de Lenguaje Natural**: En la identificación de documentos o partes de texto parecidas como en motores de búsqueda o en sistemas de detección de plagio.

4. **Publicidad Dirigida**: Las empresas de publicidad pueden usar bases de datos vectoriales para identificar perfiles de usuarios similares y dirigir anuncios personalizados basándose en sus intereses.

#### **Ventajas**:

- **Rendimiento**: Dado que las búsquedas se basan en la similitud vectorial, es posible realizar búsquedas rápidas incluso en grandes conjuntos de datos.
  
- **Escalabilidad**: Muchas soluciones de bases de datos vectoriales están diseñadas para escalar horizontalmente, lo que permite manejar volúmenes grandes de datos fácilmente.

- **Velocidad de Consulta**: La indexación basada en vectores permite tiempos de consulta más rápidos, especialmente cuando se buscan elementos similares en grandes conjuntos de datos.

- **Flexibilidad**: A diferencia de las bases de datos tradicionales que pueden requerir esquemas complejos, las bases de datos vectoriales son muy flexibles y se adaptan a datos heterogéneos y con alta dimensión.

#### **Desventajas**:

- **Limitaciones Técnicas**: Aunque son eficientes para búsquedas basadas en similitud, no siempre son la mejor opción para operaciones más tradicionales de bases de datos, como joins complejos.

- **Complejidad de Implementación**: La configuración y gestión de bases de datos vectoriales puede requerir conocimientos especializados.

- **Costo de Conversión**: Convertir datos existentes en representaciones vectoriales puede ser un proceso costoso en términos de tiempo y recursos.

- **Casos donde no son ideales**: En situaciones donde las búsquedas basadas en similitud no son una prioridad o en aplicaciones que dependen de relaciones e interacciones complejas entre datos, las bases de datos tradicionales o especializadas nos sirven más.

---

### **Aspectos técnicos avanzados:**

#### **Tecnologías y herramientas asociadas**:

- **Faiss**: Ees una biblioteca para la búsqueda de vecinos más cercanos en grandes conjuntos de datos desarrollada por Facebook,ideal para bases de datos vectoriales.

- **Annoy (Approximate Nearest Neighbors Oh Yeah)**: Es una biblioteca de Spotify que permite realizar búsquedas de vecinos más cercanos en grandes conjuntos de datos con un equilibrio entre precisión y rendimiento.

- **Milvus**: Es una plataforma de búsqueda y análisis de vectores de código abierto que admite la detección de vecinos más cercanos.

- **Hardware Específico**: A medida que las búsquedas vectoriales se vuelven más comunes, el hardware se está optimizando aún más para poder llevar estos cálculos. Por ejemplo, las GPU se han mostrado eficaces para operaciones vectoriales.

#### **Integración con otras tecnologías**:

- **Inteligencia Artificial (AI)**: Las bases de datos vectoriales se complementan a algoritmos de AI con datos de forma eficiente. Por ejemplo, en el entrenamiento de modelos de aprendizaje, con datos representados como vectores, estas bases de datos pueden facilitar la manipulación de datos.

- **Sistemas de Recomendación**: Como hablamos anteriormente, al representar productos o contenido como vectores, es posible encontrar rápidamente elementos similares. Esto es esencial para sistemas de recomendación, donde la similitud entre productos o entre un producto y las preferencias del usuario se puede usar para hacer sugerencias.

- **Procesamiento de Lenguaje Natural (PLN)**: Al trabajar con embeddings de palabras o documentos, que son representaciones vectoriales de texto, se puede utilizar bases de datos vectoriales para recuperar rápido documentos o palabras similares.

- **Visión por Computadora**: Al almacenar representaciones vectoriales de imágenes, es posible recuperar imágenes similares o realizar tareas como detección de anomalías de manera más eficiente.

- **Interfaz con APIs**: Dada la creciente demanda de servicios basados en similitud, muchas bases de datos vectoriales ofrecen interfaces API que permiten integrar fácilmente sus capacidades en aplicaciones y sistemas existentes.

En resumen, las bases de datos vectoriales no solo sirven como soluciones para la búsqueda basada en similitud, sino que también se integran perfectamente con una variedad de tecnologías avanzadas para ampliar aún más sus capacidades y aplicaciones.

----
---

### **Proyecciones y futuro:**

#### **Tendencias**:

1. **Integración Profunda con la Cloud**: A medida que las soluciones en la nube se vuelven más comúnes, es probable que veamos una integración más estrecha de bases de datos vectoriales con plataformas de servicios en la nube, permitiendo mayor flexibilidad y escalabilidad.

2. **Uso Extendido en Inteligencia Artificial**: Con la AI convirtiéndose en una parte integral de muchas industrias, la demanda de bases de datos que pueden manejar búsquedas basadas en similitud y otras tareas relacionadas con vectores seguirá creciendo.

3. **Democratización del Acceso**: Las herramientas y plataformas que faciliten el uso y la comprensión de las bases de datos vectoriales se volverán más comunes, lo que permitirá que más desarrolladores y empresas aprovechen su potencia sin necesidad de ser expertos en el tema.

4. **Especialización de Bases de Datos Vectoriales**: Podríamos comenzar a ver bases de datos vectoriales diseñadas para aplicaciones específicas, como apps multimedia.

#### **Innovaciones y desarrollos emergentes**:

1. **Optimización basada en Aprendizaje Automático**: Las técnicas de Machine Learning podrían ser empleadas para optimizar aún más las operaciones en bases de datos vectoriales, desde la indexación hasta las consultas.

2. **Bases de Datos Autónomas**: Inspiradas por los avances en AI, podríamos ver bases de datos vectoriales que se auto optimizan y auto reparan, adaptándose dinámicamente a las cargas de trabajo y las necesidades del usuario.

3. **Interfaz Semántica Mejorada**: Las futuras bases de datos vectoriales podrían ofrecer interfaces semánticas que permitan a los usuarios hacer consultas en lenguaje natural, simplificando la interacción y haciendo la tecnología más accesible.

4. **Incorporación de Grafos en Bases de Datos Vectoriales**: Fusionando las capacidades de las bases de datos orientadas a grafos y las bases de datos vectoriales, podríamos obtener sistemas que aprovechan las ventajas de ambos mundos, permitiendo representaciones de datos más ricas y conexiones complejas entre datos.

5. **Seguridad Avanzada y Preservación de la Privacidad**: Dado el crecimiento constante de las preocupaciones sobre la privacidad y la seguridad, es probable que veamos innovaciones en la manera de proteger los datos almacenados en bases de datos vectoriales, desde técnicas avanzadas de encriptación hasta mecanismos de consulta que preserven la privacidad.

Las bases de datos vectoriales, con su capacidad única para manejar y consultar datos en un espacio multidimensional, están bien posicionadas para ser una herramienta esencial en el paisaje tecnológico del futuro. Las proyecciones indican una evolución constante, con mejoras en eficiencia, seguridad y usabilidad, así como una integración más profunda con otras tecnologías emergentes.

---
### **Conclusiones:**

#### **Resumen final**:

Las bases de datos vectoriales han surgido como una solución innovadora en el paisaje tecnológico actual, ofreciendo respuestas efectivas a las crecientes demandas de la era de Big Data y la Inteligencia Artificial. Su capacidad para representar y gestionar datos en un espacio multidimensional, permitiendo consultas basadas en similitud, las diferencia de las bases de datos tradicionales. A lo largo de este trabajo, exploramos su evolución, estructura, funcionamiento y cómo se diferencian de otros sistemas de bases de datos. Adicionalmente, se discutieron sus aplicaciones prácticas, desde sistemas de recomendación hasta procesamiento de lenguaje natural, así como las tendencias y proyecciones para el futuro. Es evidente que, mientras las demandas de datos sigan creciendo y se vuelvan más complejas, las bases de datos vectoriales continuarán desempeñando un papel fundamental.

#### **Recomendaciones**:

1. **Estudio Profundo de Tecnologías Específicas**: Si bien hemos brindado una visión general de las bases de datos vectoriales, cada tecnología o herramienta asociada (como Faiss, Annoy o Milvus) tiene sus propias peculiaridades y características. Es recomendable profundizar en cada una de ellas para entender completamente sus capacidades y limitaciones.

2. **Práctica Hands-On**: La mejor manera de comprender cualquier tecnología es interactuar con ella directamente. Establecer un entorno de prueba y experimentar con diferentes bases de datos vectoriales puede ofrecer una comprensión más profunda.

3. **Participación en Comunidades**: Las comunidades en línea dedicadas a bases de datos, como foros, grupos de discusión y plataformas de código abierto, son recursos invaluables. A través de la participación activa, se pueden obtener insights, resolver dudas y mantenerse al día con las últimas tendencias y desarrollos.

4. **Asistir a Conferencias y Workshops**: Dado el rápido crecimiento en este campo, hay muchas conferencias y talleres dedicados a bases de datos vectoriales y tecnologías relacionadas. Asistir a estos eventos no solo brinda conocimientos, sino también oportunidades de networking con expertos en el campo.

5. **Investigación Continuada**: La tecnología evoluciona rápidamente. Es clave mantener una actitud de aprendizaje continuo, revisando periódicamente las últimas investigaciones, estudios de caso y avances en el mundo de las bases de datos vectoriales.

En resumen, las bases de datos vectoriales representan un pilar en el ecosistema de la gestión de datos contemporánea. Su adopción y evolución prometen transformar la forma en que interactuamos, consultamos y comprendemos grandes conjuntos de datos en el futuro. Por esto es que es esencial mantenerse informado y activamente involucrado en este fascinante campo.

### Análisis del Proyecto: Comparación entre Bases de Datos Vectorial y Relacional

En este proyecto, decidimos explorar y comparar la eficiencia y efectividad en el manejo de datos vectoriales entre una base de datos vectorial (Vectra) y una relacional (PostgreSQL). Nuestro enfoque principal fue examinar cómo interactuar con vectores y recuperar datos relevantes de ambas bases de datos.

#### Creación de la BBDD, Índices o Estructuras de Almacenamiento

En nuestro proyecto, las estructuras de almacenamiento fueron diseñadas de manera específica para cada tipo de base de datos. En PostgreSQL, creamos tablas que contienen tres columnas: 'question', 'answer' y 'vector'. La columna 'vector' almacena los embeddings generados a partir del texto de las preguntas. Aunque en algunos casos, la columna 'answer' podría estar vacía, el esquema permite la asociación directa entre una pregunta, su respuesta correspondiente, y el vector generado.

![Alt text](image-3.png)

Por otro lado, en Vectra, utilizamos una estructura de almacenamiento diferente. La información se guarda en un archivo local, donde cada ítem tiene metadata asociada que incluye el par 'question' y 'answer', además del vector correspondiente.


#### Preparación de Datos

Para comenzar, partimos de un banco de preguntas y respuestas predefinido. Nuestro objetivo era convertir el texto de estas preguntas y respuestas en vectores utilizando la API de OpenAI. Una vez obtenidos los vectores, procedimos a almacenarlos en nuestras bases de datos, preparándolas para las consultas posteriores.

```javascript
export const qaPairs = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the color of the sky?", answer: "Blue" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
  { question: "Who wrote Romeo and Juliet?", answer: "William Shakespeare" },
  { question: "What is the square root of 64?", answer: "8" },
  ...
  { question: "What is the national bird of the United States?", answer: "Bald Eagle" }
];
```


#### Generación de Embeddings y Inserción de Datos

Para la generación de embeddings, recurrimos a la API de OpenAI, específicamente al modelo [text-embedding-ada-002](https://openai.com/blog/new-and-improved-embedding-model) que está diseñado para convertir texto en vectores de alta dimensión. La utilización de esta API fue crucial para nuestro proyecto, ya que nos permitió obtener representaciones vectoriales precisas y útiles de nuestro texto, facilitando la comparación y recuperación de información relevante en nuestras bases de datos.

```javascript
export async function getVector(text) {
    const response = await openai.embeddings.create({
        'model': 'text-embedding-ada-002',
        'input': text,
    });
    return response.data[0].embedding;
}
```

La inserción de los datos en ambas bases de datos se realizó de manera programática, asegurando que cada ítem en la base de datos tuviera un vector asociado generado por la API de OpenAI.

#### Implementación y Consulta

Con el fin de evaluar la eficiencia en la recuperación de información, establecimos otro banco de consultas, que contenía variaciones o paráfrasis de las preguntas originales. Nuestro objetivo era realizar consultas a las bases de datos para recuperar las respuestas correspondientes y comparar la relevancia y el tiempo de ejecución entre Vectra y PostgreSQL.

```javascript
export const queryVariations = [
  "Tell me the capital of France.",
  "The sky's color is?",
  "Largest ocean on Earth?",
  "Who is the author of Romeo and Juliet?",
  "Calculate the square root of 64.",
  ...
  "What is the national bird of the United States?"
];
```

##### Base de Datos Relacional (PostgreSQL)

En el caso de PostgreSQL, tuvimos que implementar una lógica adicional para calcular la semejanza entre vectores. Inicialmente, utilizamos la distancia euclidiana para medir la semejanza, pero más adelante cambiamos a la similitud del coseno para mantener la consistencia con la metodología utilizada en Vectra.

```sql
CREATE OR REPLACE FUNCTION cosine_similarity(a float[], b float[])
RETURNS float LANGUAGE plpgsql IMMUTABLE AS
$$
DECLARE
    dot_product float := 0;
    norm_a float := 0;
    norm_b float := 0;
    i int;
BEGIN
    FOR i IN 1 .. array_length(a, 1)
    LOOP
        dot_product := dot_product + a[i] * b[i];
        norm_a := norm_a + a[i]^2;
        norm_b := norm_b + b[i]^2;
    END LOOP;
    RETURN dot_product / sqrt(norm_a * norm_b);
END;
$$;

```

##### Base de Datos Vectorial (Vectra)

Con Vectra, la tarea fue más sencilla ya que la biblioteca proporciona funcionalidades incorporadas para manejar la semejanza entre vectores. Sin embargo, personalizamos la estructura de almacenamiento para incluir tanto la pregunta como la respuesta en lugar de un único campo de texto. La documentación de Vectra proporciona detalles sobre cómo se almacenan los datos en un archivo local.

#### Ejecución y Registro de Resultados

Al ejecutar nuestro código mediante el comando `node index.js`, registramos los resultados en la consola. Observamos que aunque los resultados de los vectores eran consistentes entre las bases de datos, los valores numéricos eran distintos. Esto nos llevó a entender que Vectra estaba utilizando similitud del coseno en lugar de distancia euclidiana, lo que nos llevó a ajustar el código de PostgreSQL para utilizar similitud del coseno también.

```plaintext
Querying for 'National flower of Japan?':
Executing (default): SELECT question, answer, cosine_similarity(vector, $1) as similarity 
            FROM "Items" 
            ORDER BY similarity DESC
            LIMIT 3
Query time: 34 ms

Querying for 'What is the national bird of the United States?':
Executing (default): SELECT question, answer, cosine_similarity(vector, $1) as similarity 
            FROM "Items" 
            ORDER BY similarity DESC
            LIMIT 3
Query time: 33 ms
```

```plaintext
Querying for 'At what temperature does water freeze?':
Query time: 1 ms

Querying for 'Boiling point of water?':
Query time: 1 ms

Querying for 'Capital of Germany?':
Query time: 1 ms
```

#### Consultas

Nuestro sistema permite la realización de cualquier tipo de consulta. Sin embargo, es esencial que la información almacenada en las bases de datos sea pertinente a las consultas que se deseen realizar. Por lo tanto, poblamos nuestras bases de datos con información relevante que permitiera responder a un rango diverso de consultas.

Además, exploramos la posibilidad de realizar consultas más divertidas y creativas. Por ejemplo, mediante la consulta por similitud, podemos responder preguntas basándonos en la similitud entre el texto de la consulta y el texto de las preguntas almacenadas en la base de datos.


#### Análisis de Métricas y Visualización

Posteriormente, llevamos a cabo la medición de métricas utilizando Jupyter Notebook. Ejecutamos el script con el banco de consultas y registramos todas las respuestas junto con su tiempo de ejecución en archivos CSV. A través de las visualizaciones generadas (que se mostrarán en las fotos), pudimos observar claramente que el tiempo de ejecución en la base de datos vectorial era considerablemente menor que en la base de datos relacional, con tiempos que oscilaban entre menos de 1 ms a un promedio de 35 ms.

También observamos que los algoritmos de Vectra y nuestro algoritmo personalizado de similitud del coseno o distancia euclidiana funcionaron a la perfección. En ambos casos, los archivos CSV reflejaban que el vector de similitud principal (de los 3 recuperados en cada caso) correspondía al vector correcto, tal como se había establecido inicialmente en el banco de preguntas y respuestas.

(Ver trabajo_integrador.ipynb)

#### Conclusión

Este proyecto nos permitió comprender y demostrar las diferencias significativas en el manejo y recuperación de datos vectoriales entre bases de datos vectoriales y relacionales. Además, pudimos observar la eficiencia y precisión en la recuperación de datos relevantes, lo que nos brindó valiosas perspectivas sobre la utilidad y aplicabilidad de las bases de datos vectoriales en comparación con las bases de datos relacionales tradicionales.
La capacidad de realizar consultas flexibles y la facilidad para insertar y recuperar datos resalta la utilidad y versatilidad de nuestras implementaciones de base de datos. La utilización de la API de OpenAI para la generación de embeddings fue un acierto que elevó la calidad y precisión de nuestras operaciones de búsqueda y recuperación de datos. Además, la estructura de almacenamiento en Vectra y PostgreSQL fue diseñada de manera eficiente para soportar operaciones de consulta rápidas y precisas, demostrando las diferencias y similitudes en el manejo de datos vectoriales entre bases de datos vectoriales y relacionales.
