# Conceptos

- One Way Data Binding / Two Way
La vinculación de datos unidireccional(oneway) y bidireccional(twoway) son dos de las formas importantes por las que podemos intercambiar datos desde el componente al DOM y viceversa. El intercambio de datos entre el componente y la vista nos ayudará a construir aplicaciones web dinámicas e interactivas.

La vinculación de datos unidireccional vinculará los datos del componente a la vista (DOM) o de la vista al componente. La vinculación de datos unidireccional es unidireccional. Sólo se pueden vincular los datos del componente a la vista o de la vista al componente.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

- Del componente a la vista/From Component to View
Existen diferentes técnicas de vinculación de datos que utilizan la vinculación de datos unidireccional para vincular datos de un componente a una vista. A continuación se muestran algunas de las técnicas que utilizan la vinculación de datos unidireccional.

- Enlace por interpolación/Interpolation Binding: 
La interpolación se refiere a la vinculación de expresiones en lenguaje marcado.
Enlace de propiedades: La vinculación de propiedades se utiliza para establecer una propiedad de un elemento de la vista. La vinculación establece la propiedad en el valor de una expresión de plantilla.
Vinculación de atributos: La vinculación de atributos se utiliza para establecer una propiedad de atributo de un elemento de la vista.
- Clase/Class Binding: 
El enlace de clase se utiliza para establecer una propiedad de clase de un elemento de la vista.
- Estilo/Style Binding: 
La vinculación de estilo se utiliza para establecer el estilo de un elemento de la vista.

- Creacion de componentes de forma automática

comando + directorio + nombre componente
ng g c heroes/listado

- Directiva ngFor

La directiva ngForOf se utiliza generalmente en la forma abreviada *ngFor. En esta forma, la plantilla que se renderiza para cada iteración es el contenido de un elemento ancla que contiene la directiva.


- Directiva ngIF - else

Generalmente se utiliza una forma abreviada de la directiva, *ngIf="condition", proporcionada como un atributo del elemento ancla para la plantilla insertada. Angular amplía esto a una versión más explícita, en la que el elemento de anclaje está contenido en un elemento <ng-template>.

La directiva *ngIf se utiliza más comúnmente para mostrar condicionalmente una plantilla en línea. La plantilla else por defecto está en blanco.

- Módulos


