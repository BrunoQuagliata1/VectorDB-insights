
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
- **Resumen final** de todo.
- **Recomendaciones** para profundizar más.

### **Proyecto:**
- **Proyecto final** para ver más adelante.

### **Bibliografía:**
- [Diving into AI: An exploration of embeddings and vector databases](https://atoonk.medium.com/diving-into-ai-an-exploration-of-embeddings-and-vector-databases-a7611c4ec063)
- [Pinecone: Learn Vector Database](https://www.pinecone.io/learn/vector-database/)
--- 

## **Elección del tema y organización del trabajo**
### ¿Por q  ué es relevante el estudio de bases de datos vectoriales en el contexto actual? 

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

![Alt text](image-1.png)


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