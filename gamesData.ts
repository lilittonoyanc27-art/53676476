import {
  TrueFalseItem,
  FillBlankItem,
  WhoSaidItItem,
  WordOrderSentence,
  ExpressionMeaningItem
} from './types.ts';

// 1. Verdadero o falso
export const TRUE_FALSE_DATA: TrueFalseItem[] = [
  {
    id: 1,
    statementEs: 'Facundo Arana participa en este episodio como concursante de canto.',
    statementHy: 'Ֆակունդո Արանան այս թողարկմանը մասնակցում է որպես երգի մրցույթի մասնակից:',
    isTrue: false,
    explanationEs: 'Falso: Facundo vino como jurado invitado especial de Got Talent Uruguay.',
    explanationHy: 'Սխալ է. Ֆակունդոն եկել է որպես Got Talent Uruguay-ի հատուկ հրավիրված ժյուրիի անդամ:'
  },
  {
    id: 2,
    statementEs: 'Natalia Oreiro y Facundo Arana protagonizaron juntos la telenovela "Muñeca Brava".',
    statementHy: 'Նատալիա Օրեյրոն և Ֆակունդո Արանան միասին գլխավոր դերերն են խաղացել «Վայրի հրեշտակ» (Muñeca Brava) հեռուստանովելում:',
    isTrue: true,
    explanationEs: 'Verdadero: Ambos dieron vida a los inolvidables personajes de Milagros e Ivo.',
    explanationHy: 'Ճիշտ է. երկուսն էլ կյանք են տվել Միլագրոսի և Իվոյի անմոռանալի կերպարներին:'
  },
  {
    id: 3,
    statementEs: 'Cuando Natalia levantó la mano, Facundo temió en broma que venía un cachetazo.',
    statementHy: 'Երբ Նատալիան բարձրացրեց ձեռքը, Ֆակունդոն կատակով վախեցավ, որ ապտակ է ստանալու:',
    isTrue: true,
    explanationEs: 'Verdadero: Facundo exclamó de forma divertida: "¡Pará! Pensé que venía el cachetazo".',
    explanationHy: 'Ճիշտ է. Ֆակունդոն զվարճալի կերպով բացականչեց. «¡Pará! Pensé que venía el cachetazo»:'
  },
  {
    id: 4,
    statementEs: 'Natalia afirmó que en Got Talent sí se permiten los cachetazos a los miembros del jurado.',
    statementHy: 'Նատալիան պնդեց, որ Got Talent-ում թույլատրվում են ապտակները ժյուրիի անդամներին:',
    isTrue: false,
    explanationEs: 'Falso: Natalia dijo expresamente: "Hoy estamos en Got Talent, acá no hay cachetazos... ¡aunque te lo merecías!".',
    explanationHy: 'Սխալ է. Նատալիան հստակ ասաց. «Այսօր մենք Got Talent-ում ենք, այստեղ ապտակներ չկան... թեև դու դրան արժանի էիր»:'
  },
  {
    id: 5,
    statementEs: 'Facundo utiliza la frase "almas viejas" para referirse a personas con las que siente un lazo profundo y entrañable.',
    statementHy: 'Ֆակունդոն օգտագործում է «almas viejas» (հին հոգիներ) արտահայտությունը այն մարդկանց համար, ում հետ զգում է խորը և հարազատ կապ:',
    isTrue: true,
    explanationEs: 'Verdadero: Se refiere a personas con las que existe una conexión espiritual que trasciende el tiempo.',
    explanationHy: 'Ճիշտ է. նա նկատի ունի այն մարդկանց, ում հետ գոյություն ունի ժամանակը գերազանցող հոգևոր կապ:'
  },
  {
    id: 6,
    statementEs: 'Natalia y Facundo se conocieron recién ese mismo día en los pasillos del canal.',
    statementHy: 'Նատալիան և Ֆակունդոն նոր էին ծանոթացել հենց այդ նույն օրը հեռուստաալիքի միջանցքում:',
    isTrue: false,
    explanationEs: 'Falso: Se conocen desde hace más de 20 años; la frase "¡Si nos acabamos de conocer!" fue solo una broma irónica de Natalia.',
    explanationHy: 'Սխալ է. նրանք ճանաչում են միմյանց ավելի քան 20 տարի. «Չէ՞ որ մենք նոր ենք ծանոթացել» արտահայտությունը Նատալիայի կատակն էր:'
  },
  {
    id: 7,
    statementEs: 'Facundo tiene a su disposición el botón dorado para premiar a un participante destacado.',
    statementHy: 'Ֆակունդոն իր տրամադրության տակ ունի ոսկե կոճակը՝ ակնառու մասնակցին պարգևատրելու համար:',
    isTrue: true,
    explanationEs: 'Verdadero: Como juez invitado cuenta con el botón dorado para enviar directamente a alguien a la siguiente fase.',
    explanationHy: 'Ճիշտ է. որպես հրավիրված ժյուրի՝ նա ունի ոսկե կոճակը՝ որևէ մեկին անմիջապես հաջորդ փուլ ուղարկելու համար:'
  },
  {
    id: 8,
    statementEs: 'En el video, ambos demuestran una gran distancia y frialdad profesional.',
    statementHy: 'Տեսանյութում երկուսն էլ ցուցաբերում են մեծ հեռավորություն և մասնագիտական սառնություն:',
    isTrue: false,
    explanationEs: 'Falso: Al contrario, desbordan cariño, risas, nostalgia y admiración recíproca.',
    explanationHy: 'Սխալ է. ընդհակառակը, նրանք լի են սիրով, ծիծաղով, կարոտախտով և փոխադարձ հիացմունքով:'
  }
];

// 2. Completa la frase
export const FILL_BLANK_DATA: FillBlankItem[] = [
  {
    id: 1,
    sentenceBefore: '¡Buenas noches a todos! ¿En serio? Me la estoy pasando',
    missingWord: 'genial',
    sentenceAfter: 'con ustedes.',
    options: ['genial', 'triste', 'aburrido', 'cansado'],
    fullSentenceEs: '¡Buenas noches a todos! ¿En serio? Me la estoy pasando genial con ustedes.',
    sentenceHy: 'Բարի երեկո բոլորին։ Իսկապե՞ս։ Հիանալի ժամանակ եմ անցկացնում ձեզ հետ։',
    explanationEs: '"Pasarla genial" significa disfrutar al máximo de una experiencia.',
    explanationHy: '«Pasarla genial» նշանակում է լիարժեք հաճույք ստանալ պահից:'
  },
  {
    id: 2,
    sentenceBefore: 'Siempre que vengo me encuentro con',
    missingWord: 'almas',
    sentenceAfter: 'viejas, con gente entrañable.',
    options: ['almas', 'sombras', 'puertas', 'cartas'],
    fullSentenceEs: 'Siempre que vengo me encuentro con almas viejas, con gente entrañable.',
    sentenceHy: 'Ամեն անգամ, երբ գալիս եմ, հանդիպում եմ հին հոգիների՝ հարազատ մարդկանց:',
    explanationEs: 'Facundo utiliza la frase poética "almas viejas" para hablar de sus afectos.',
    explanationHy: 'Ֆակունդոն օգտագործում է «almas viejas» բանաստեղծական արտահայտությունը իր սիրելի մարդկանց մասին:'
  },
  {
    id: 3,
    sentenceBefore: '¿Almas viejas nosotros? ¡Por favor! ¡Si nos acabamos de',
    missingWord: 'conocer',
    sentenceAfter: '!',
    options: ['conocer', 'olvidar', 'pelear', 'dormir'],
    fullSentenceEs: '¿Almas viejas nosotros? ¡Por favor! ¡Si nos acabamos de conocer!',
    sentenceHy: 'Մե՞նք ենք հին հոգիներ։ Խնդրո՛ւմ եմ։ Չէ՞ որ մենք նոր ենք ծանոթացել։',
    explanationEs: 'Natalia finge que recién se conocen con el verbo "conocer".',
    explanationHy: 'Նատալիան ձևացնում է, թե նոր են ծանոթացել՝ օգտագործելով «conocer» բայը:'
  },
  {
    id: 4,
    sentenceBefore: '¡Ay! ¡Pará! Pensé que venía el',
    missingWord: 'cachetazo',
    sentenceAfter: ', como en las grabaciones.',
    options: ['cachetazo', 'regalo', 'silencio', 'reloj'],
    fullSentenceEs: '¡Ay! ¡Pará! Pensé que venía el cachetazo, como en las grabaciones.',
    sentenceHy: 'Վա՛յ։ Սպասի՛ր։ Մտածեցի՝ ապտակն է գալիս, ինչպես նկարահանումների ժամանակ։',
    explanationEs: '"Cachetazo" es la palabra rioplatense para referirse a una bofetada.',
    explanationHy: '«Cachetazo»-ն ռիոպլատենսե բառն է ապտակի համար:'
  },
  {
    id: 5,
    sentenceBefore: 'Cada vez que charlamos me replanteo la',
    missingWord: 'vida',
    sentenceAfter: ', cómo pasa el tiempo.',
    options: ['vida', 'película', 'canción', 'noche'],
    fullSentenceEs: 'Cada vez que charlamos me replanteo la vida, cómo pasa el tiempo.',
    sentenceHy: 'Ամեն անգամ, երբ զրուցում ենք, վերանայում եմ իմ կյանքը. ինչպես է անցնում ժամանակը:',
    explanationEs: '"Replantearse la vida" alude a una profunda introspección.',
    explanationHy: '«Replantearse la vida» ակնարկում է խորը ինքնավերլուծություն:'
  },
  {
    id: 6,
    sentenceBefore: 'Y esta noche en este escenario todo puede',
    missingWord: 'pasar',
    sentenceAfter: 'con los participantes.',
    options: ['pasar', 'terminar', 'cerrar', 'quemar'],
    fullSentenceEs: 'Y esta noche en este escenario todo puede pasar con los participantes.',
    sentenceHy: 'Եվ այս գիշեր այս բեմում մասնակիցների հետ ամեն ինչ կարող է պատահել։',
    explanationEs: '"Todo puede pasar" resalta la imprevisibilidad del escenario en Got Talent.',
    explanationHy: '«Todo puede pasar» ընդգծում է Got Talent-ի բեմի անկանխատեսելիությունը:'
  },
  {
    id: 7,
    sentenceBefore: 'Estoy listo para usar el botón',
    missingWord: 'dorado',
    sentenceAfter: 'si hace falta.',
    options: ['dorado', 'azul', 'negro', 'roto'],
    fullSentenceEs: 'Estoy listo para usar el botón dorado si hace falta.',
    sentenceHy: 'Պատրաստ եմ օգտագործելու ոսկե կոճակը, եթե հարկ լինի։',
    explanationEs: 'El "botón dorado" es el pase de oro característico del programa.',
    explanationHy: '«Botón dorado»-ն հաղորդմանը բնորոշ ոսկե անցաթուղթն է:'
  },
  {
    id: 8,
    sentenceBefore: 'Ya me habías',
    missingWord: 'avisado',
    sentenceAfter: 'que venías hoy.',
    options: ['avisado', 'prohibido', 'dibujado', 'vendido'],
    fullSentenceEs: 'Ya me habías avisado que venías hoy.',
    sentenceHy: 'Դու ինձ արդեն տեղյակ էիր պահել (զգուշացրել էիր), որ գալու ես այսօր։',
    explanationEs: '"Avisar" significa advertir, informar o prevenir con anticipación.',
    explanationHy: '«Avisar» նշանակում է նախապես տեղեկացնել կամ զգուշացնել:'
  }
];

// 3. ¿Quién lo dijo?
export const WHO_SAID_IT_DATA: WhoSaidItItem[] = [
  {
    id: 1,
    quoteEs: '¡Buenas noches! Miren la visita tan especial que tenemos hoy en el estudio.',
    quoteHy: 'Բարի երեկո։ Տեսե՛ք, թե ինչպիսի յուրահատուկ հյուր ունենք այսօր տաղավարում։',
    speaker: 'Natalia Oreiro',
    contextEs: 'Natalia abre el programa presentando la llegada de Facundo Arana.',
    contextHy: 'Նատալիան բացում է հաղորդումը՝ ներկայացնելով Ֆակունդո Արանայի ժամանումը:'
  },
  {
    id: 2,
    quoteEs: '¿En serio? Me la estoy pasando genial con ustedes.',
    quoteHy: 'Իսկապե՞ս։ Հիանալի ժամանակ եմ անցկացնում ձեզ հետ։',
    speaker: 'Facundo Arana',
    contextEs: 'Facundo saluda con emoción y alegría al pisar el plató.',
    contextHy: 'Ֆակունդոն հուզմունքով և ուրախությամբ ողջունում է բեմ բարձրանալիս:'
  },
  {
    id: 3,
    quoteEs: 'Siempre que vengo me encuentro con almas viejas, con gente de toda la vida.',
    quoteHy: 'Ամեն անգամ, երբ գալիս եմ, հանդիպում եմ հին հոգիների՝ մարդկանց, ում ամբողջ կյանքում ճանաչում եմ։',
    speaker: 'Facundo Arana',
    contextEs: 'Facundo expresa el afecto sincero y la hermandad que siente con sus viejos amigos.',
    contextHy: 'Ֆակունդոն արտահայտում է անկեղծ սերն ու եղբայրությունը հին ընկերների նկատմամբ:'
  },
  {
    id: 4,
    quoteEs: '¿Almas viejas nosotros? ¡Por favor! ¡Si nos acabamos de conocer!',
    quoteHy: 'Մե՞նք ենք հին հոգիներ։ Խնդրո՛ւմ եմ։ Չէ՞ որ մենք նոր ենք ծանոթացել։',
    speaker: 'Natalia Oreiro',
    contextEs: 'Natalia responde con una divertida broma fingiendo no conocer a Facundo.',
    contextHy: 'Նատալիան զվարճալի կատակով է արձագանքում՝ ձևացնելով, թե չի ճանաչում Ֆակունդոյին:'
  },
  {
    id: 5,
    quoteEs: '¡Ay! ¡Pará! Pensé que venía el cachetazo, como en las grabaciones.',
    quoteHy: 'Վա՛յ։ Սպասի՛ր։ Մտածեցի՝ ապտակն է գալիս, ինչպես նկարահանումների ժամանակ։',
    speaker: 'Facundo Arana',
    contextEs: 'Facundo reacciona con humor al ademán de la mano de Natalia.',
    contextHy: 'Ֆակունդոն հումորով է արձագանքում Նատալիայի ձեռքի շարժմանը:'
  },
  {
    id: 6,
    quoteEs: 'Hoy estamos en Got Talent, acá no hay cachetazos... ¡aunque te lo merecías!',
    quoteHy: 'Այսօր մենք Got Talent-ում ենք, այստեղ ապտակներ չկան... թեև դու դրան արժանի էիր։',
    speaker: 'Natalia Oreiro',
    contextEs: 'Natalia bromea recordando las escenas de Muñeca Brava tras el segundo 0:56.',
    contextHy: 'Նատալիան կատակում է՝ հիշելով «Վայրի հրեշտակի» տեսարանները 0:56 վայրկյանից հետո:'
  },
  {
    id: 7,
    quoteEs: 'Cada vez que charlamos me replanteo la vida, cómo pasa el tiempo tan rápido.',
    quoteHy: 'Ամեն անգամ, երբ զրուցում ենք, վերանայում եմ իմ կյանքը. որքան արագ է անցնում ժամանակը։',
    speaker: 'Facundo Arana',
    contextEs: 'Facundo comparte su reflexión nostálgica sobre los años transcurridos.',
    contextHy: 'Ֆակունդոն կիսվում է իր կարոտախտային մտորումներով անցած տարիների մասին:'
  },
  {
    id: 8,
    quoteEs: 'Y esta noche en este escenario todo puede pasar con los participantes.',
    quoteHy: 'Եվ այս գիշեր այս բեմում մասնակիցների հետ ամեն ինչ կարող է պատահել։',
    speaker: 'Natalia Oreiro',
    contextEs: 'Natalia recalca la adrenalina del concurso artístico en directo.',
    contextHy: 'Նատալիան ընդգծում է ուղիղ եթերում արվեստի մրցույթի ադրենալինը:'
  }
];

// 4. Ordena las palabras
export const WORD_ORDER_DATA: WordOrderSentence[] = [
  {
    id: 1,
    originalEs: 'Pensé que venía el cachetazo',
    words: ['Pensé', 'que', 'venía', 'el', 'cachetazo'],
    translationHy: 'Մտածեցի՝ ապտակն է գալիս (հիմա ապտակելու ես)',
    hintEs: 'La célebre frase de Facundo ante el gesto de Natalia.',
    hintHy: 'Ֆակունդոյի հայտնի արտահայտությունը Նատալիայի ձեռքի շարժման ժամանակ:'
  },
  {
    id: 2,
    originalEs: 'Me la estoy pasando genial',
    words: ['Me', 'la', 'estoy', 'pasando', 'genial'],
    translationHy: 'Հիանալի ժամանակ եմ անցկացնում',
    hintEs: 'La frase con la que Facundo demuestra lo bien que se siente en Uruguay.',
    hintHy: 'Արտահայտություն, որով Ֆակունդոն ցույց է տալիս, թե որքան լավ է իրեն զգում Ուրուգվայում:'
  },
  {
    id: 3,
    originalEs: 'Nos acabamos de conocer',
    words: ['Nos', 'acabamos', 'de', 'conocer'],
    translationHy: 'Մենք նոր ենք ծանոթացել',
    hintEs: 'La réplica irónica de Natalia a la idea de las almas viejas.',
    hintHy: 'Նատալիայի հեգնական պատասխանը հին հոգիների գաղափարին:'
  },
  {
    id: 4,
    originalEs: 'Me encuentro con almas viejas',
    words: ['Me', 'encuentro', 'con', 'almas', 'viejas'],
    translationHy: 'Հանդիպում եմ հին հոգիների',
    hintEs: 'Expresión afectiva de Facundo sobre las amistades verdaderas.',
    hintHy: 'Ֆակունդոյի զգացմունքային արտահայտությունը իրական ընկերության մասին:'
  },
  {
    id: 5,
    originalEs: 'Cada vez me replanteo la vida',
    words: ['Cada', 'vez', 'me', 'replanteo', 'la', 'vida'],
    translationHy: 'Ամեն անգամ վերանայում եմ իմ կյանքը',
    hintEs: 'Reflexión profunda de Facundo sobre el tiempo.',
    hintHy: 'Ֆակունդոյի խորը մտորումը ժամանակի մասին:'
  },
  {
    id: 6,
    originalEs: 'En este escenario todo puede pasar',
    words: ['En', 'este', 'escenario', 'todo', 'puede', 'pasar'],
    translationHy: 'Այս բեմում ամեն ինչ կարող է պատահել',
    hintEs: 'La advertencia de Natalia sobre las sorpresas de Got Talent.',
    hintHy: 'Նատալիայի զգուշացումը Got Talent-ի անակնկալների մասին:'
  }
];

// 5. Elige el significado
export const EXPRESSION_MEANING_DATA: ExpressionMeaningItem[] = [
  {
    id: 1,
    expressionEs: '¿Qué significa "el cachetazo" en el dialecto rioplatense?',
    expressionHy: 'Ի՞նչ է նշանակում «el cachetazo»-ն ռիոպլատենսե բարբառում:',
    options: [
      {
        id: 'a',
        textEs: 'Una bofetada o golpe dado con la mano abierta en la cara.',
        textHy: 'Ապտակ կամ բաց ափով հարված դեմքին:'
      },
      {
        id: 'b',
        textEs: 'Un piropo romántico al pasar por la calle.',
        textHy: 'Ռոմանտիկ հաճոյախոսություն փողոցով անցնելիս:'
      },
      {
        id: 'c',
        textEs: 'Un abrazo de bienvenida entre actores.',
        textHy: 'Ողջույնի գրկախառնություն դերասանների միջև:'
      },
      {
        id: 'd',
        textEs: 'Un vaso de mate amargo.',
        textHy: 'Մեկ բաժակ դառը մատե:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: '"Cachetazo" deriva de "cachete" (mejilla) y es el término coloquial rioplatense por excelencia para una bofetada.',
    explanationHy: '«Cachetazo» բառը առաջացել է «cachete» (այտ) բառից և ռիոպլատենսեի ամենատարածված խոսակցական բառն է ապտակի համար:'
  },
  {
    id: 2,
    expressionEs: '¿Qué denota la frase "Me la estoy pasando genial"?',
    expressionHy: 'Ի՞նչ է նշանակում «Me la estoy pasando genial» արտահայտությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Que estoy muy aburrido y deseo marcharme.',
        textHy: 'Որ շատ ձանձրացած եմ և ցանկանում եմ հեռանալ:'
      },
      {
        id: 'b',
        textEs: 'Que estoy disfrutando muchísimo y divirtiéndome en grande.',
        textHy: 'Որ ես անչափ վայելում եմ պահը և հիանալի զվարճանում եմ:'
      },
      {
        id: 'c',
        textEs: 'Que olvidé lo que tenía que decir.',
        textHy: 'Որ ես մոռացել եմ այն, ինչ պետք է ասեի:'
      },
      {
        id: 'd',
        textEs: 'Que estoy enfermo y con fiebre.',
        textHy: 'Որ հիվանդ եմ և ջերմություն ունեմ:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: '"Pasarla genial" expresa el más alto grado de disfrute y bienestar en una reunión.',
    explanationHy: '«Pasarla genial»-ը արտահայտում է հանդիպման կամ միջոցառման ժամանակ առավելագույն հաճույքը և բարձր տրամադրությունը:'
  },
  {
    id: 3,
    expressionEs: '¿Qué se quiere decir con "encontrarse con almas viejas"?',
    expressionHy: 'Ի՞նչ ի նկատի ունեն «encontrarse con almas viejas» (հանդիպել հին հոգիների) ասելով:',
    options: [
      {
        id: 'a',
        textEs: 'Conectar con seres con los que se tiene una afinidad tan profunda que parece venir de otras vidas.',
        textHy: 'Կապ հաստատել այնպիսի էակների հետ, որոնց հետ կապվածությունն այնքան խորն է, որ թվում է՝ գալիս է այլ կյանքերից:'
      },
      {
        id: 'b',
        textEs: 'Ir al médico para un chequeo geriátrico.',
        textHy: 'Գնալ բժշկի՝ տարեցների հետազոտության համար:'
      },
      {
        id: 'c',
        textEs: 'Comprar antigüedades en una feria dominical.',
        textHy: 'Կիրակնօրյա տոնավաճառում հնաոճ իրեր գնել:'
      },
      {
        id: 'd',
        textEs: 'Encontrar fotos en blanco y negro en un desván.',
        textHy: 'Ձեղնահարկում սև ու սպիտակ լուսանկարներ գտնել:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'Es un concepto espiritual y poético sobre personas espiritualmente maduras e intrínsecamente unidas a uno.',
    explanationHy: 'Սա հոգևոր և բանաստեղծական հասկացություն է հոգեպես հասուն և ներքուստ մտերիմ մարդկանց մասին:'
  },
  {
    id: 4,
    expressionEs: '¿Qué significa la locución "acabamos de conocer(nos)"?',
    expressionHy: 'Ի՞նչ է նշանակում «acabamos de conocer(nos)» արտահայտությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Que nos presentamos hace apenas unos instantes o muy poco tiempo.',
        textHy: 'Որ մենք ծանոթացել ենք ընդամենը մի քանի ակնթարթ կամ շատ քիչ ժամանակ առաջ:'
      },
      {
        id: 'b',
        textEs: 'Que terminamos de estudiar un libro difícil.',
        textHy: 'Որ ավարտեցինք բարդ գրքի ուսումնասիրությունը:'
      },
      {
        id: 'c',
        textEs: 'Que perdimos el contacto para siempre.',
        textHy: 'Որ մենք ընդմիշտ կորցրինք կապը:'
      },
      {
        id: 'd',
        textEs: 'Que firmamos un contrato laboral.',
        textHy: 'Որ մենք աշխատանքային պայմանագիր կնքեցինք:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'La perífrasis "acabar de + infinitivo" indica una acción inmediatamente anterior al presente.',
    explanationHy: '«Acabar de + infinitivo» կառույցը ցույց է տալիս գործողություն, որը կատարվել է ներկա պահից անմիջապես առաջ:'
  },
  {
    id: 5,
    expressionEs: '¿Qué significa "me replanteo la vida"?',
    expressionHy: 'Ի՞նչ է նշանակում «me replanteo la vida» արտահայտությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Reevalúo mis decisiones, prioridades y el paso del tiempo con asombro.',
        textHy: 'Զարմանքով վերագնահատում եմ իմ որոշումները, առաջնահերթությունները և ժամանակի ընթացքը:'
      },
      {
        id: 'b',
        textEs: 'Compro un boleto de lotería para volverme millonario.',
        textHy: 'Վիճակախաղի տոմս եմ գնում միլիոնատեր դառնալու համար:'
      },
      {
        id: 'c',
        textEs: 'Planto flores y árboles en un jardín nuevo.',
        textHy: 'Ծաղիկներ և ծառեր եմ տնկում նոր պարտեզում:'
      },
      {
        id: 'd',
        textEs: 'Cambio el canal de televisión con el control remoto.',
        textHy: 'Հեռակառավարման վահանակով փոխում եմ հեռուստաալիքը:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: '"Replantear" es volver a examinar los fundamentos de algo vital desde una nueva perspectiva.',
    explanationHy: '«Replantear» նշանակում է նոր տեսանկյունից վերանայել որևէ կենսական հարցի հիմքերը:'
  },
  {
    id: 6,
    expressionEs: '¿Qué connota la expresión rioplatense "¡Tal cual!" usada por Facundo?',
    expressionHy: 'Ի՞նչ է նշանակում ռիոպլատենսե «¡Tal cual!» արտահայտությունը, որն օգտագործում է Ֆակունդոն:',
    options: [
      {
        id: 'a',
        textEs: 'Exactamente así, completamente de acuerdo con lo dicho.',
        textHy: 'Ճիշտ այդպես, լիովին համաձայն ասվածի հետ:'
      },
      {
        id: 'b',
        textEs: 'No entiendo nada de lo que dices.',
        textHy: 'Ոչինչ չեմ հասկանում քո ասածից:'
      },
      {
        id: 'c',
        textEs: 'Es mentira lo que acabas de afirmar.',
        textHy: 'Սուտ է այն, ինչ դու հենց նոր պնդեցիր:'
      },
      {
        id: 'd',
        textEs: 'Tengo que irme rápido.',
        textHy: 'Ես պետք է արագ գնամ:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: '"Tal cual" equivale en el Cono Sur a "exactamente", "así es" o "estoy 100% de acuerdo".',
    explanationHy: '«Tal cual»-ը հարավային Ամերիկայում համարժեք է «հենց այդպես», «լիովին ճիշտ է» կամ «100% համաձայն եմ» իմաստներին:'
  },
  {
    id: 7,
    expressionEs: '¿Qué significa "Ya me habías avisado"?',
    expressionHy: 'Ի՞նչ է նշանակում «Ya me habías avisado» արտահայտությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Ya me habías informado o advertido con antelación.',
        textHy: 'Դու ինձ արդեն նախապես տեղեկացրել կամ զգուշացրել էիր:'
      },
      {
        id: 'b',
        textEs: 'Nunca me dijiste que vendrías.',
        textHy: 'Դու երբեք ինձ չէիր ասել, որ գալու ես:'
      },
      {
        id: 'c',
        textEs: 'Me enviaste un regalo por correo postal.',
        textHy: 'Դու ինձ նվեր ուղարկեցիր փոստով:'
      },
      {
        id: 'd',
        textEs: 'Me pediste que guardara un secreto.',
        textHy: 'Դու խնդրեցիր ինձ գաղտնիք պահել:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'El verbo "avisar" significa notificar o poner al corriente de algo previamente.',
    explanationHy: '«Avisar» բայը նշանակում է նախապես ծանուցել կամ տեղեկացնել ինչ-որ բանի մասին:'
  },
  {
    id: 8,
    expressionEs: '¿Qué sentido tiene la frase "Todo puede pasar" en el contexto de Got Talent?',
    expressionHy: 'Ի՞նչ իմաստ ունի «Todo puede pasar» արտահայտությունը Got Talent-ի համատեքստում:',
    options: [
      {
        id: 'a',
        textEs: 'Cualquier sorpresa extraordinaria o giro inesperado es posible en el escenario.',
        textHy: 'Ցանկացած արտասովոր անակնկալ կամ անսպասելի շրջադարձ հնարավոր է բեմում:'
      },
      {
        id: 'b',
        textEs: 'Todos los participantes van a ser descalificados hoy.',
        textHy: 'Բոլոր մասնակիցներն այսօր որակազրկվելու են:'
      },
      {
        id: 'c',
        textEs: 'El público debe abandonar el auditorio.',
        textHy: 'Հանդիսատեսը պետք է լքի դահլիճը:'
      },
      {
        id: 'd',
        textEs: 'El programa ha sido cancelado.',
        textHy: 'Հաղորդումը չեղարկվել է:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'Subraya la magia del directo y el suspenso ante las presentaciones artísticas.',
    explanationHy: 'Ընդգծում է ուղիղ եթերի կախարդանքը և լարված սպասումը արվեստի ելույթների ժամանակ:'
  }
];
