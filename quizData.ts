import { QuizQuestion } from './types.ts';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionEs: '¿Cuál es el rol de Facundo Arana en este programa especial de Got Talent Uruguay?',
    questionHy: 'Ի՞նչ դեր ունի Ֆակունդո Արանան Got Talent Uruguay-ի այս հատուկ թողարկման մեջ:',
    options: [
      {
        id: 'a',
        textEs: 'Es un participante que vino a cantar una balada.',
        textHy: 'Նա մասնակից է, ով եկել է բալլադ երգելու:'
      },
      {
        id: 'b',
        textEs: 'Es el jurado invitado especial del programa.',
        textHy: 'Նա հաղորդման հատուկ հրավիրված ժյուրիի անդամն է:'
      },
      {
        id: 'c',
        textEs: 'Es el nuevo camarógrafo del canal de televisión.',
        textHy: 'Նա հեռուստաալիքի նոր օպերատորն է:'
      },
      {
        id: 'd',
        textEs: 'Es el director general del canal 10.',
        textHy: 'Նա 10-րդ ալիքի գլխավոր տնօրենն է:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'Natalia Oreiro presenta con gran entusiasmo a Facundo Arana como el jurado invitado especial para el corte de jurado en Got Talent Uruguay.',
    explanationHy: 'Նատալիա Օրեյրոն մեծ ոգևորությամբ Ֆակունդո Արանային ներկայացնում է որպես Got Talent Uruguay-ի հատուկ հրավիրված ժյուրի:'
  },
  {
    id: 2,
    questionEs: '¿Qué denota la expresión "¿En serio?" de Facundo al iniciar su saludo?',
    questionHy: 'Ի՞նչ է արտահայտում Ֆակունդոյի «¿En serio?» (Իսկապե՞ս) արտահայտությունը ողջույնի սկզբում:',
    options: [
      {
        id: 'a',
        textEs: 'Enojo porque el público hacía demasiado ruido.',
        textHy: 'Զայրույթ, որովհետև հանդիսատեսը չափազանց մեծ աղմուկ էր հանում:'
      },
      {
        id: 'b',
        textEs: 'Sorpresa alegre y complicidad ante el recibimiento tan cariñoso.',
        textHy: 'Ուրախ զարմանք և մտերմություն այդքան ջերմ ընդունելության առթիվ:'
      },
      {
        id: 'c',
        textEs: 'Duda de si realmente estaba en el programa correcto.',
        textHy: 'Կասկած, թե արդյոք նա իսկապես ճիշտ հաղորդման մեջ է գտնվում:'
      },
      {
        id: 'd',
        textEs: 'Preocupación porque no había estudiado el guion.',
        textHy: 'Անհանգստություն, որ նա չէր սովորել սցենարը:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'En el habla coloquial rioplatense, "¿En serio?" expresa aquí una sorpresa cariñosa y festiva ante la ovación del estudio.',
    explanationHy: 'Ռիոպլատենսե խոսակցական լեզվում «¿En serio?»-ն այստեղ արտահայտում է սիրալիր և տոնական զարմանք՝ տաղավարի ծափահարությունների ներքո:'
  },
  {
    id: 3,
    questionEs: '¿A qué legendaria telenovela hacen referencia Natalia y Facundo durante su charla?',
    questionHy: 'Ո՞ր լեգենդար հեռուստանովելին են ակնարկում Նատալիան և Ֆակունդոն իրենց զրույցի ընթացքում:',
    options: [
      {
        id: 'a',
        textEs: 'Pasión de Gavilanes',
        textHy: '«Գիշատիչների կիրքը» (Pasión de Gavilanes)'
      },
      {
        id: 'b',
        textEs: 'Muñeca Brava',
        textHy: '«Վայրի հրեշտակ» (Muñeca Brava)'
      },
      {
        id: 'c',
        textEs: 'Betty la Fea',
        textHy: '«Տգեղ Բեթին» (Betty la Fea)'
      },
      {
        id: 'd',
        textEs: 'Rebelde Way',
        textHy: '«Ապստամբ ոգի» (Rebelde Way)'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'Natalia Oreiro y Facundo Arana protagonizaron la mundialmente famosa telenovela "Muñeca Brava" (1998-1999) interpretando a Mili e Ivo.',
    explanationHy: 'Նատալիա Օրեյրոն և Ֆակունդո Արանան գլխավոր դերերն են խաղացել աշխարհահռչակ «Վայրի հրեշտակ» (Muñeca Brava) սերիալում՝ մարմնավորելով Միլիին և Իվոյին:'
  },
  {
    id: 4,
    questionEs: '¿Por qué Natalia Oreiro responde con ironía: "¡Si nos acabamos de conocer!"?',
    questionHy: 'Ինչո՞ւ է Նատալիա Օրեյրոն հեգնանքով պատասխանում. «¡Si nos acabamos de conocer!» (Չէ՞ որ մենք նոր ենք ծանոթացել):',
    options: [
      {
        id: 'a',
        textEs: 'Porque realmente nunca antes se habían visto en persona.',
        textHy: 'Քանի որ նրանք նախկինում իրականում երբեք անձամբ չէին հանդիպել:'
      },
      {
        id: 'b',
        textEs: 'Porque es una broma irónica, ya que son amigos y colegas hace más de dos décadas.',
        textHy: 'Քանի որ դա հեգնական կատակ է. նրանք ավելի քան երկու տասնամյակ է, ինչ մտերիմ ընկերներ և գործընկերներ են:'
      },
      {
        id: 'c',
        textEs: 'Porque había olvidado el nombre de Facundo Arana.',
        textHy: 'Քանի որ նա մոռացել էր Ֆակունդո Արանայի անունը:'
      },
      {
        id: 'd',
        textEs: 'Porque estaba confundida con otro actor del jurado.',
        textHy: 'Քանի որ նրան շփոթել էր ժյուրիի մեկ այլ դերասանի հետ:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'Es un recurso cómico habitual entre amigos íntimos: fingir distancia o desconocimiento cuando se conocen a la perfección.',
    explanationHy: 'Սա մտերիմ ընկերների միջև տարածված կատակային ձև է՝ ձևացնել, թե հազիվ են ճանաչում միմյանց, երբ իրականում գիտեն ամեն ինչ:'
  },
  {
    id: 5,
    questionEs: '¿Qué significado tiene la metáfora "Me encuentro con almas viejas" usada por Facundo?',
    questionHy: 'Ի՞նչ իմաստ ունի Ֆակունդոյի կողմից օգտագործված «Me encuentro con almas viejas» (Հանդիպում եմ հին հոգիների) փոխաբերությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Que las personas del estudio son ancianas y están cansadas.',
        textHy: 'Որ տաղավարի մարդիկ ծեր են և հոգնած:'
      },
      {
        id: 'b',
        textEs: 'Que siente una conexión profunda, espiritual y eterna con ellos, como si se conocieran de siempre.',
        textHy: 'Որ նրանց հետ զգում է խորը, հոգևոր և հավերժական կապ, կարծես միշտ ճանաչել են միմյանց:'
      },
      {
        id: 'c',
        textEs: 'Que vio fantasmas en los pasillos del teatro.',
        textHy: 'Որ թատրոնի միջանցքներում ուրվականներ է տեսել:'
      },
      {
        id: 'd',
        textEs: 'Que extrañaba los programas de televisión antiguos.',
        textHy: 'Որ նա կարոտել էր հին հեռուստահաղորդումները:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: '"Almas viejas" describe vínculos especiales con personas con quienes existe una afinidad y madurez emocional inmediata.',
    explanationHy: '«Հին հոգիներ» արտահայտությունը նկարագրում է հատուկ կապ այն մարդկանց հետ, ում հետ կա ակնթարթային խորը փոխըմբռնում և էմոցիոնալ մտերմություն:'
  },
  {
    id: 6,
    questionEs: '¿Qué reacción física tuvo Facundo cuando Natalia levantó la mano cerca de él?',
    questionHy: 'Ի՞նչ ֆիզիկական արձագանք ունեցավ Ֆակունդոն, երբ Նատալիան իր կողքին ձեռքը բարձրացրեց:',
    options: [
      {
        id: 'a',
        textEs: 'Se agachó asustado pensando en broma que le iba a dar un cachetazo.',
        textHy: 'Կատակով կռացավ՝ վախենալով, որ նա հիմա ապտակելու է իրեն:'
      },
      {
        id: 'b',
        textEs: 'Salió corriendo del escenario hacia los camerinos.',
        textHy: 'Բեմից վազելով հեռացավ դեպի հանդերձարաններ:'
      },
      {
        id: 'c',
        textEs: 'Le estrechó la mano con mucha seriedad.',
        textHy: 'Շատ լրջորեն սեղմեց նրա ձեռքը:'
      },
      {
        id: 'd',
        textEs: 'Se puso a llorar de tristeza.',
        textHy: 'Տխրությունից սկսեց լաց լինել:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'Facundo se echó hacia atrás y exclamó divertido: "¡Ay! ¡Pará! Pensé que venía el cachetazo".',
    explanationHy: 'Ֆակունդոն հետ քաշվեց ու զվարճացած բացականչեց. «¡Ay! ¡Pará! Pensé que venía el cachetazo» (Վա՛յ, սպասի՛ր, մտածեցի ապտակն է գալիս):'
  },
  {
    id: 7,
    questionEs: 'En el lunfardo y español rioplatense, ¿qué es exactamente un "cachetazo"?',
    questionHy: 'Լունֆարդոյում և ռիոպլատենսե իսպաներենում ի՞նչ է իրականում «cachetazo»-ն:',
    options: [
      {
        id: 'a',
        textEs: 'Un abrazo afectuoso.',
        textHy: 'Ջերմ գրկախառնություն:'
      },
      {
        id: 'b',
        textEs: 'Una bofetada o golpe en la mejilla/cara con la mano abierta.',
        textHy: 'Ապտակ կամ բաց ափով հարված այտին/դեմքին:'
      },
      {
        id: 'c',
        textEs: 'Un tipo de sombrero típico uruguayo.',
        textHy: 'Ուրուգվայական ավանդական գլխարկի տեսակ:'
      },
      {
        id: 'd',
        textEs: 'Un postre de dulce de leche.',
        textHy: 'Դուլսե դե լեչեով աղանդեր:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'El término "cachetazo" proviene de "cachete" (mejilla) y significa bofetada dada con la mano.',
    explanationHy: '«Cachetazo» բառը առաջացել է «cachete» (այտ) բառից և նշանակում է ապտակ՝ տրված ձեռքի ափով:'
  },
  {
    id: 8,
    questionEs: '¿Por qué el "cachetazo" era tan representativo entre Mili e Ivo en "Muñeca Brava"?',
    questionHy: 'Ինչո՞ւ էր «ապտակը» այդքան բնորոշ Միլիի և Իվոյի հարաբերություններին «Վայրի հրեշտակում»:',
    options: [
      {
        id: 'a',
        textEs: 'Porque Mili era rebelde y respondía con una bofetada a las bromas o avances de Ivo.',
        textHy: 'Որովհետև Միլին ըմբոստ էր և Իվոյի կատակներին կամ առաջարկներին պատասխանում էր ապտակով:'
      },
      {
        id: 'b',
        textEs: 'Porque Ivo era profesor de boxeo en la mansión.',
        textHy: 'Քանի որ Իվոն բռնցքամարտի ուսուցիչ էր առանձնատանը:'
      },
      {
        id: 'c',
        textEs: 'Porque formaba parte de una coreografía musical de cumbia.',
        textHy: 'Քանի որ դա կումբիա երաժշտական պարի մաս էր կազմում:'
      },
      {
        id: 'd',
        textEs: 'Porque nunca se llevaron bien durante las grabaciones.',
        textHy: 'Քանի որ նրանք երբեք լավ չեն հարմարվել նկարահանումների ժամանակ:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'En la trama de la telenovela, el personaje de Milagros tenía un fuerte temperamento y frecuentemente abofeteaba a Ivo ante sus descaros.',
    explanationHy: 'Սերիալի սյուժեում Միլագրոսի կերպարն ուներ խիստ և անկոտրում բնավորություն և հաճախ ապտակում էր Իվոյին նրա համարձակությունների համար:'
  },
  {
    id: 9,
    questionEs: '¿Qué dijo Natalia después del segundo 0:56 para calmar a Facundo?',
    questionHy: 'Ի՞նչ ասաց Նատալիան 0:56 վայրկյանից հետո՝ Ֆակունդոյին հանգստացնելու համար:',
    options: [
      {
        id: 'a',
        textEs: 'Que hoy están en Got Talent y no hay cachetazos... ¡aunque se lo merecía!',
        textHy: 'Որ այսօր նրանք Got Talent-ում են և ապտակներ չկան... թեև նա դրան արժանի էր:'
      },
      {
        id: 'b',
        textEs: 'Que llamaría a seguridad para retirarlo del escenario.',
        textHy: 'Որ կկանչի անվտանգության աշխատակիցներին՝ նրան բեմից հեռացնելու համար:'
      },
      {
        id: 'c',
        textEs: 'Que nunca más volverían a trabajar juntos en la televisión.',
        textHy: 'Որ նրանք այլևս երբեք միասին չեն աշխատի հեռուստատեսությունում:'
      },
      {
        id: 'd',
        textEs: 'Que se sentara de inmediato sin hablar.',
        textHy: 'Որ նա անմիջապես նստի առանց որևէ բառ ասելու:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'Natalia remató la broma con mucha gracia: "Hoy estamos en Got Talent, acá no hay cachetazos... ¡aunque te lo merecías!"',
    explanationHy: 'Նատալիան կատակը շարունակեց հումորով. «Այսօր մենք Got Talent-ում ենք, այստեղ ապտակներ չկան... թեև դու դրան արժանի էիր»:'
  },
  {
    id: 10,
    questionEs: '¿Qué expresa Facundo cuando dice: "Me replanteo la vida"?',
    questionHy: 'Ի՞նչ է արտահայտում Ֆակունդոն, երբ ասում է. «Me replanteo la vida» (Վերանայում եմ իմ կյանքը):',
    options: [
      {
        id: 'a',
        textEs: 'Que quiere cambiar de profesión y dedicarse a la cocina.',
        textHy: 'Որ նա ցանկանում է փոխել մասնագիտությունը և զբաղվել խոհարարությամբ:'
      },
      {
        id: 'b',
        textEs: 'Una reflexión profunda y nostálgica sobre cómo vuela el tiempo mientras su cariño sigue intacto.',
        textHy: 'Խորը և կարոտախտով լի մտորում այն մասին, թե որքան արագ է թռչում ժամանակը, իսկ իրենց ջերմությունը մնում է անփոփոխ:'
      },
      {
        id: 'c',
        textEs: 'Que está enojado con el canal de televisión.',
        textHy: 'Որ նա զայրացած է հեռուստաալիքի վրա:'
      },
      {
        id: 'd',
        textEs: 'Que ha decidido mudarse a otro continente.',
        textHy: 'Որ նա որոշել է տեղափոխվել մեկ այլ մայրցամաք:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: '"Replantearse la vida" alude a meditar con asombro sobre el paso de los años, su juventud compartida y el presente.',
    explanationHy: '«Կյանքը վերանայել» արտահայտությունը նշանակում է զարմանքով և հուզմունքով մտորել անցած տարիների, ընդհանուր երիտասարդության և ներկայի մասին:'
  },
  {
    id: 11,
    questionEs: '¿Qué significa la afirmación de Natalia: "Todo puede pasar"?',
    questionHy: 'Ի՞նչ է նշանակում Նատալիայի «Todo puede pasar» (Ամեն ինչ կարող է պատահել) արտահայտությունը:',
    options: [
      {
        id: 'a',
        textEs: 'Que las audiciones de talentos son impredecibles y llenas de sorpresas.',
        textHy: 'Որ տաղանդների ելույթները անկանխատեսելի են և լի անակնկալներով:'
      },
      {
        id: 'b',
        textEs: 'Que el estudio se quedó sin electricidad.',
        textHy: 'Որ տաղավարում էլեկտրականությունն անջատվել է:'
      },
      {
        id: 'c',
        textEs: 'Que no sabe qué participantes van a actuar.',
        textHy: 'Որ նա չգիտի, թե որ մասնակիցներն են ելույթ ունենալու:'
      },
      {
        id: 'd',
        textEs: 'Que el programa va a terminar antes de tiempo.',
        textHy: 'Որ հաղորդումը ժամանակից շուտ է ավարտվելու:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'En los programas de talento en directo, "todo puede pasar" destaca la emoción de lo inesperado.',
    explanationHy: 'Ուղիղ եթերում տաղանդների շոուներում «ամեն ինչ կարող է պատահել»-ը ընդգծում է անսպասելի և հուզիչ զարգացումների հնարավորությունը:'
  },
  {
    id: 12,
    questionEs: '¿Qué poder especial tiene Facundo Arana como jurado en Got Talent?',
    questionHy: 'Ի՞նչ հատուկ լիազորություն ունի Ֆակունդո Արանան՝ որպես ժյուրի Got Talent-ում:',
    options: [
      {
        id: 'a',
        textEs: 'El botón dorado (botón de oro) para enviar a un participante directo a la semifinal.',
        textHy: 'Ոսկե կոճակը (botón dorado)՝ մասնակցին ուղիղ կիսաեզրափակիչ ուղարկելու համար:'
      },
      {
        id: 'b',
        textEs: 'Poder cantar una canción en cada pausa comercial.',
        textHy: 'Յուրաքանչյուր գովազդային դադարին երգ երգելու հնարավորություն:'
      },
      {
        id: 'c',
        textEs: 'Elegir la comida para todo el equipo técnico.',
        textHy: 'Ամբողջ տեխնիկական անձնակազմի համար սնունդ ընտրելու իրավունք:'
      },
      {
        id: 'd',
        textEs: 'Eliminar a los otros miembros del jurado.',
        textHy: 'Ժյուրիի մյուս անդամներին հեռացնելու իրավունք:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'El "botón dorado" es la herramienta más codiciada de Got Talent, permitiendo a los jueces clasificar directamente a su concursante favorito.',
    explanationHy: '«Ոսկե կոճակը» Got Talent-ի ամենացանկալի գործիքն է, որը թույլ է տալիս ժյուրիին իր սիրելի մասնակցին ուղիղ ուղարկել հաջորդ կարևոր փուլ:'
  },
  {
    id: 13,
    questionEs: '¿Qué rasgo lingüístico del voseo rioplatense se escucha cuando Natalia dice: "¡Y yo a vos!"?',
    questionHy: 'Ի՞նչ լեզվական առանձնահատկություն է լսվում, երբ Նատալիան ասում է. «¡Y yo a vos!» (Ես էլ քեզ):',
    options: [
      {
        id: 'a',
        textEs: 'El uso del pronombre "vos" en lugar del pronombre "ti" o "tú" propio de Argentina y Uruguay.',
        textHy: '«Vos» դերանվան գործածությունը «ti» կամ «tú»-ի փոխարեն, որը բնորոշ է Արգենտինային և Ուրուգվային:'
      },
      {
        id: 'b',
        textEs: 'El uso de modismos catalanes.',
        textHy: 'Կատալոներեն դարձվածքների կիրառումը:'
      },
      {
        id: 'c',
        textEs: 'La conjugación en pretérito pluscuamperfecto.',
        textHy: 'Վաղակատար անցյալ ժամանակաձևի խոնարհումը:'
      },
      {
        id: 'd',
        textEs: 'Un error gramatical involuntario.',
        textHy: 'Անկանխամտածված քերականական սխալ:'
      }
    ],
    correctOptionId: 'a',
    explanationEs: 'En el español del Río de la Plata se utiliza "a vos" en vez de "a ti", siendo la norma culta y coloquial de la región.',
    explanationHy: 'Ռիո դե լա Պլատայի իսպաներենում «a ti»-ի փոխարեն օգտագործվում է «a vos», որը տարածաշրջանի գրական և խոսակցական նորմն է:'
  },
  {
    id: 14,
    questionEs: '¿Cómo se describe la química y relación entre Natalia y Facundo en el video?',
    questionHy: 'Ինչպե՞ս կարելի է բնութագրել Նատալիայի և Ֆակունդոյի միջև եղած մտերմությունն ու կապը տեսանյութում:',
    options: [
      {
        id: 'a',
        textEs: 'Tensa, fría y puramente comercial.',
        textHy: 'Լարված, սառը և զուտ առևտրային:'
      },
      {
        id: 'b',
        textEs: 'Extremadamente afectuosa, llena de complicidad, humor y respeto mutuo.',
        textHy: 'Չափազանց ջերմ, լի մտերմությամբ, հումորով և փոխադարձ հարգանքով:'
      },
      {
        id: 'c',
        textEs: 'Distante porque no se recordaban bien.',
        textHy: 'Հեռու և օտար, որովհետև լավ չէին հիշում միմյանց:'
      },
      {
        id: 'd',
        textEs: 'Competitiva y de rivalidad profesional.',
        textHy: 'Մրցակցային և մասնագիտական թշնամանքով:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'Tanto sus palabras como su lenguaje corporal reflejan una amistad sincera construida a lo largo de décadas de trabajo exitoso juntos.',
    explanationHy: 'Ինչպես նրանց խոսքերը, այնպես էլ ժեստերն արտահայտում են անկեղծ ընկերություն՝ կառուցված տասնամյակների համատեղ հաջող աշխատանքի ընթացքում:'
  },
  {
    id: 15,
    questionEs: '¿Qué pide Natalia Oreiro para cerrar la presentación al público y al jurado?',
    questionHy: 'Ի՞նչ է խնդրում Նատալիա Օրեյրոն ներկայացման ավարտին հանդիսատեսից և ժյուրիից:',
    options: [
      {
        id: 'a',
        textEs: 'Un minuto de silencio total.',
        textHy: 'Մեկ րոպե լիակատար լռություն:'
      },
      {
        id: 'b',
        textEs: 'Un fuerte aplauso para Facundo Arana y para todo el jurado.',
        textHy: 'Բուռն ծափահարություններ Ֆակունդո Արանայի և ամբողջ ժյուրիի համար:'
      },
      {
        id: 'c',
        textEs: 'Que todos apaguen sus teléfonos móviles.',
        textHy: 'Որ բոլորն անջատեն իրենց բջջային հեռախոսները:'
      },
      {
        id: 'd',
        textEs: 'Que voten por su actor preferido en redes sociales.',
        textHy: 'Որ սոցիալական ցանցերում քվեարկեն իրենց նախընտրած դերասանի օգտին:'
      }
    ],
    correctOptionId: 'b',
    explanationEs: 'Natalia anima al público diciendo: "¡Que empiece la función! ¡Fuerte el aplauso para Facundo Arana y para todo el jurado!"',
    explanationHy: 'Նատալիան ոգևորում է դահլիճին՝ ասելով. «Թող սկսվի շոուն։ Բուռն ծափահարություններ Ֆակունդո Արանայի և ամբողջ ժյուրիի համար»:'
  }
];
