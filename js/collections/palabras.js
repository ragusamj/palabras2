/**
 * Created by alexbol on 1/8/2015.
 */
define([],
function () {
    var palabras = new Backbone.Collection([
        { category: "La casa", spanish: "la entrada", russian: "вход"},
        { category: "La casa", spanish: "el salon", russian: "салон"},
        { category: "La casa", spanish: "la cocina", russian: "кухня"},
        { category: "La casa", spanish: "el comedor", russian: "столовая"},
        { category: "La casa", spanish: "el pasillo", russian: "коридор"},
        { category: "La casa", spanish: "el corredor", russian: "коридор"},
        { category: "La casa", spanish: "la habitacion", russian: "комната"},
        { category: "La casa", spanish: "el dormitorio", russian: "спальня"},
        { category: "La casa", spanish: "la recamara", russian: "спальня"},
        { category: "La casa", spanish: "el cuarto de baño", russian: "ванная комната"},
        { category: "La casa", spanish: "el estudio", russian: "рабочая комната"},
        { category: "La casa", spanish: "el balcon", russian: "балкон"},
        { category: "La casa", spanish: "las escaleras", russian: "лестница"},

        { category: "La casa", spanish: "el jardin", russian: "сад"},
        { category: "La casa", spanish: "al ascensor", russian: "лифт"},
        { category: "La casa", spanish: "el parqueadero", russian: "парковка"},
        { category: "La casa", spanish: "el garaje", russian: "гараж"},
        { category: "La casa", spanish: "el suelo", russian: "пол"},
        { category: "La casa", spanish: "el techo", russian: "потолок"},
        { category: "La casa", spanish: "el tejado", russian: "крыша"},
        { category: "La casa", spanish: "la ventana", russian: "окно"},
        { category: "La casa", spanish: "la piscina", russian: "бассейн"},
        { category: "La casa", spanish: "la pileta", russian: "бассейн"},

        { category: "La casa", spanish: "el lavabo", russian: "раковина"},
        { category: "La casa", spanish: "el lavamanos", russian: "раковина"},
        { category: "La casa", spanish: "el inodoro", russian: "унитаз"},
        { category: "La casa", spanish: "la bañera", russian: "ванна"},
        { category: "La casa", spanish: "la ducha", russian: "душ"},
        { category: "La casa", spanish: "el espejo", russian: "зеркало"},
        { category: "La casa", spanish: "la toalla", russian: "полотенце"},

        { category: "La casa", spanish: "el sofa", russian: "софа"},
        { category: "La casa", spanish: "el sillon", russian: "кресло"},
        { category: "La casa", spanish: "la lampara", russian: "лампа"},
        { category: "La casa", spanish: "el cuadro", russian: "картина"},
        { category: "La casa", spanish: "el tapete", russian: "ковер"},
        { category: "La casa", spanish: "el alfombra", russian: "ковер"},
        { category: "La casa", spanish: "la cortina", russian: "шторы"},
        { category: "La casa", spanish: "la mesa", russian: "стол"},
        { category: "La casa", spanish: "la silla", russian: "стул"},
        { category: "La casa", spanish: "el aire acondicionado", russian: "кондиционер"},
        { category: "La casa", spanish: "el cojin", russian: "подушка (на диван)"},

        { category: "La casa", spanish: "la cama", russian: "кровать"},
        { category: "La casa", spanish: "la almohada", russian: "подушка"},
        { category: "La casa", spanish: "la messila de noche", russian: "тумбочка"},
        { category: "La casa", spanish: "el armario", russian: "шкаф"},
        { category: "La casa", spanish: "la estanteria", russian: "полка"},
        { category: "La casa", spanish: "la cajonera", russian: "ящик"},

        { category: "La casa", spanish: "la nevera", russian: "холодильник"},
        { category: "La casa", spanish: "el frigorifico", russian: "холодильник"},
        { category: "La casa", spanish: "el horno", russian: "печь"},
        { category: "La casa", spanish: "los hornillos", russian: "плита"},
        { category: "La casa", spanish: "el micro", russian: "микроволновка"},
        { category: "La casa", spanish: "el lavaplatos", russian: "посудомойка"},
        { category: "La casa", spanish: "la lavadora", russian: "стиральная машина"},
        { category: "La casa", spanish: "la secadora", russian: "сушилка"},
        { category: "La casa", spanish: "el hornito", russian: "тостер"},

        { category: "Posicion", spanish: "a la izquierda de", russian: "слева"},
        { category: "Posicion", spanish: "a la derecha de", russian: "справа"},
        { category: "Posicion", spanish: "encima de", russian: "на"},
        { category: "Posicion", spanish: "debajo de", russian: "под"},
        { category: "Posicion", spanish: "delante de", russian: "перед"},
        { category: "Posicion", spanish: "detras de", russian: "после"},
        { category: "Posicion", spanish: "fuera de", russian: "снаружи"},
        { category: "Posicion", spanish: "dentro de", russian: "внутри"},
        { category: "Posicion", spanish: "entre la .. y ..", russian: "между"},
        { category: "Posicion", spanish: "al lado de", russian: "рядом"},
        { category: "Posicion", spanish: "cerca de", russian: "близко"},
        { category: "Posicion", spanish: "lejos de", russian: "далеко"},
        { category: "Posicion", spanish: "abajo", russian: "внизу"},
        { category: "Posicion", spanish: "arriba", russian: "вверху"},
        { category: "Posicion", spanish: "al final de", russian: "в конце"},
        { category: "Posicion", spanish: "al fondo de", russian: "в конце"},
        { category: "Posicion", spanish: "al frente de", russian: "напротив"},
        { category: "Posicion", spanish: "aqui/aca", russian: "здесь"},
        { category: "Posicion", spanish: "ahi/alla/alli", russian: "там"},
        { category: "Posicion", spanish: "colgado/a en", russian: "висящий"},
        { category: "Posicion", spanish: "a mi lado", russian: "возле меня"},
        { category: "Posicion", spanish: "cerca de mi", russian: "близко ко мне"},
        { category: "Posicion", spanish: "lejos de mi", russian: "далеко от меня"},
        { category: "Posicion", spanish: "detras de mi", russian: "за мной"},
        { category: "Posicion", spanish: "delante de mi", russian: "передо мной"},
        { category: "Posicion", spanish: "a mi derecha", russian: "справа от меня"},
        { category: "Posicion", spanish: "a mi izquierda", russian: "слева от меня"},
        { category: "Posicion", spanish: "al frente de mi", russian: "напротив меня"},

        { category: "Adjectivos para descibir una vivenda", spanish: "grande", russian: "большой"},
        { category: "Adjectivos para descibir una vivenda", spanish: "pequeño", russian: "маленький"},
        { category: "Adjectivos para descibir una vivenda", spanish: "moderno", russian: "современный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "antiguo", russian: "старый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "nuevo", russian: "новый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "viejo", russian: "старый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "bonito", russian: "красивый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "feo", russian: "уродливый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "amplio", russian: "широкий"},
        { category: "Adjectivos para descibir una vivenda", spanish: "estrecho", russian: "узкий"},
        { category: "Adjectivos para descibir una vivenda", spanish: "luminoso", russian: "светлый"},
        { category: "Adjectivos para descibir una vivenda", spanish: "oscuro", russian: "темный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "comodo", russian: "удобный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "incomodo", russian: "неудобный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "tranquilo", russian: "спокойный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "ruidoso", russian: "шумный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "exterior", russian: "внешний"},
        { category: "Adjectivos para descibir una vivenda", spanish: "interior", russian: "внутренний"},
        { category: "Adjectivos para descibir una vivenda", spanish: "frio", russian: "холодный"},
        { category: "Adjectivos para descibir una vivenda", spanish: "caluroso", russian: "теплый"},

        { category: "Interrogativos", spanish: "quien", russian: "кто"},
        { category: "Interrogativos", spanish: "como", russian: "как"},
        { category: "Interrogativos", spanish: "que", russian: "что"},
        { category: "Interrogativos", spanish: "cual", russian: "какой"},
        { category: "Interrogativos", spanish: "donde", russian: "где"},
        { category: "Interrogativos", spanish: "de donde", russian: "откуда"},
        { category: "Interrogativos", spanish: "a donde", russian: "куда"},
        { category: "Interrogativos", spanish: "cuanto", russian: "сколько"},
        { category: "Interrogativos", spanish: "cuando", russian: "когда"},
        { category: "Interrogativos", spanish: "por que", russian: "почему"},

        { category: "Verbos regulares", spanish: "trabajar", russian: "работать"},
        { category: "Verbos regulares", spanish: "leer", russian: "читать"},
        { category: "Verbos regulares", spanish: "vivir", russian: "жить"},
        { category: "Verbos regulares", spanish: "estudiar", russian: "учить"},
        { category: "Verbos regulares", spanish: "comer", russian: "есть"},
        { category: "Verbos regulares", spanish: "escribir", russian: "писать"},
        { category: "Verbos regulares", spanish: "hablar", russian: "говорить"},
        { category: "Verbos regulares", spanish: "escuchar", russian: "слушать"},
        { category: "Verbos regulares", spanish: "comprender", russian: "понимать"},
        { category: "Verbos regulares", spanish: "utilizar", russian: "использовать"},
        { category: "Verbos regulares", spanish: "viajar", russian: "путешествовать"},
        { category: "Verbos regulares", spanish: "preguntar", russian: "спрашивать"},
        { category: "Verbos regulares", spanish: "responder", russian: "отвечать"},
        { category: "Verbos regulares", spanish: "contestar", russian: "отвечать"},
        { category: "Verbos regulares", spanish: "preparar", russian: "готовить"},
        { category: "Verbos regulares", spanish: "ayudar", russian: "помогать"},
        { category: "Verbos regulares", spanish: "señalar", russian: "обозначать(?)"},
        { category: "Verbos regulares", spanish: "beber", russian: "пить"},
        { category: "Verbos regulares", spanish: "tomar", russian: "брать/пить"},
        { category: "Verbos regulares", spanish: "mirar", russian: "смотреть"},
        { category: "Verbos regulares", spanish: "meter", russian: "положить (?) להכניס"},
        { category: "Verbos regulares", spanish: "sacar", russian: "привлечь (?) להוציא"},
        { category: "Verbos regulares", spanish: "abrir", russian: "открывать"},
        { category: "Verbos regulares", spanish: "buscar", russian: "искать"},

        { category: "Verbos irregulares", spanish: "ser", russian: "быть, являться"},
        { category: "Verbos irregulares", spanish: "estar", russian: "быть, находиться"},
        { category: "Verbos irregulares", spanish: "tener", russian: "иметь"},
        { category: "Verbos irregulares", spanish: "querer", russian: "хотеть"},
        { category: "Verbos irregulares", spanish: "pensar", russian: "думать"},
        { category: "Verbos irregulares", spanish: "encontrar", russian: "находить"},
        { category: "Verbos irregulares", spanish: "cerrar", russian: "закрывать"},
        { category: "Verbos irregulares", spanish: "preferir", russian: "предпочитать"},
        { category: "Verbos irregulares", spanish: "poder", russian: "мочь"},
        { category: "Verbos irregulares", spanish: "entender", russian: "понять"},
        { category: "Verbos irregulares", spanish: "ir", russian: "идти"},
        { category: "Verbos irregulares", spanish: "venir", russian: "приходить"},
        { category: "Verbos irregulares", spanish: "decir", russian: "сказать"},
        { category: "Verbos irregulares", spanish: "jugar", russian: "играть"},
        { category: "Verbos irregulares", spanish: "pedir", russian: "просить"},
        { category: "Verbos irregulares", spanish: "volver", russian: "возвращаться"},
        { category: "Verbos irregulares", spanish: "recordar", russian: "записывать"},
        { category: "Verbos irregulares", spanish: "saber", russian: "знать"},
        { category: "Verbos irregulares", spanish: "hacer", russian: "делать"},
        { category: "Verbos irregulares", spanish: "dar", russian: "давать"},
        { category: "Verbos irregulares", spanish: "poner", russian: "класть"},
        { category: "Verbos irregulares", spanish: "salir", russian: "выходить"},
        { category: "Verbos irregulares", spanish: "conoсer", russian: "быть знакомым"},
        { category: "Verbos irregulares", spanish: "traducir", russian: "переводить"}

    ]);

    return palabras;
});
