(function(){
"use strict";

/* ============ LATTICE STRIP (signature motif, echoes the Education building brick screen) ============ */
function buildLattice(){
  const row = document.getElementById('latticeRow');
  if(!row) return;
  const colors = ['#F0B92C','#A6472C','#3E6BC2','#F7F2E6'];
  let svg = '';
  for(let rep=0; rep<2; rep++){
    for(let i=0;i<40;i++){
      const c = colors[i % colors.length];
      const op = (i % 5 === 0) ? '1' : '0.28';
      svg += `<svg width="46" height="46" viewBox="0 0 46 46" style="opacity:${op}"><path d="M23 4 L42 23 L23 42 L4 23 Z" fill="none" stroke="${c}" stroke-width="2"/></svg>`;
    }
  }
  row.innerHTML = svg;
}

/* ============ i18n ============ */
const I18N = {
  en: {
    tag_nav:"Chatbot", nav_fac:"Faculties", nav_how:"How it works", nav_community:"Campus", nav_advisor:"Meet the Chatbot", nav_cta:"Ask the Chatbot",
    hero_eyebrow:"Intelligent Qualification Recommendation System",
    hero_title:"Your subjects already know<br>where they <em>belong.</em>",
    hero_lead:"Tell the UNIZULU Chatbot what you're studying in Grade 12 — in English or isiZulu — and get matched to real qualifications across all four faculties, with the entry requirements explained in plain language.",
    hero_cta1:"Chat with the Chatbot", hero_cta2:"Browse the 4 faculties",
    stat_fac:"Faculties", stat_prog:"Qualifications mapped", stat_lang:"11 South African languages", stat_time:"Always available",
    fac_eyebrow:"Where your subjects can take you", fac_title:"Four faculties, one campus",
    fac_lead:"Every qualification at UNIZULU sits inside one of these four faculties. The Chatbot uses this exact structure to line up your subjects with real study options.",
    how_eyebrow:"Three steps", how_title:"How the Chatbot matches you",
    step1_t:"Tell it your subjects", step1_d:"Pick your Grade 12 subjects and an honest sense of your marks — by chip, by typing, or by speaking, in English or isiZulu.",
    step2_t:"It weighs the fit", step2_d:"The Chatbot checks your subjects and marks against the indicative APS and subject requirements for programmes in all 4 faculties.",
    step3_t:"You explore, in plain language", step3_d:"You get 2–3 ranked qualifications with why they fit, what they require, and what to ask next — no jargon, no dead ends.",
    comm_eyebrow:"A node for African thought",
    comm_quote:"\u201CDiligentia Cresco — I grow through diligence.\u201D The same motto on the crest is the whole point of the Chatbot: it doesn't choose for you, it just makes the path easier to see.",
    adv_eyebrow:"Meet the chatbot", adv_title:"The Chatbot speaks your language — both of them", adv_status:"UNIZULU Chatbot",
    feat1_t:"Bilingual by design", feat1_d:"Ask in any of 11 South African languages — including code-switching — and the Chatbot responds naturally in your dominant language.",
    feat2_t:"Voice in, voice out", feat2_d:"Tap the microphone to speak your subjects instead of typing, and let the Chatbot read recommendations back to you.",
    feat3_t:"Grounded in real requirements", feat3_d:"Every suggestion is tied to an indicative APS band and subject minimum — flagged clearly as \u201Cconfirm in the official prospectus\u201D where numbers vary.",
    feat4_t:"11-language support", feat4_d:"Supports isiZulu, isiXhosa, Sesotho, Setswana, Sepedi, Afrikaans, siSwati, Tshivenda, Xitsonga, isiNdebele and English.",
    preview_bot1:"Sawubona! I'm your Chatbot \uD83D\uDC4B What are you studying in Grade 12?",
    preview_user1:"Mathematics, Physical Sciences, Life Sciences, English",
    preview_bot2:"Lovely combination! With solid Maths and Physical Sciences, here's where you'd fit well:",
    preview_chip1:"BSc: Mainstream · FSAE", preview_chip2:"BSc: Agriculture · FSAE", preview_chip3:"BEd MSTE · FE",
    preview_cta:"Try it for real →",
    foot_tag:"An intelligent qualification recommendation system built for high school learners exploring study options at the University of Zululand.",
    foot_h1:"Faculties", foot_h2:"Chatbot", foot_h3:"Campus",
    foot_l1:"How it works", foot_l2:"Voice & language", foot_l3:"Subject matching", foot_l4:"KwaZulu-Natal, South Africa",
    foot_disclaimer:"Qualification titles, durations and minimum admission points (APS) are sourced from the official UNIZULU Prospectus. Requirements can change between intakes and meeting the minimum APS does not guarantee a place, so always confirm against the current-year prospectus at unizulu.ac.za before applying.",
    foot_bottom:"Student project prototype — Intelligent Qualification Recommendation System",
    chat_intro1: marked.parse("**Welcome to Maticbot, your Unizulu virtual study assistant!**"),
    chip_recommend:"Recommend for me",
    chip_reset:"Start over",
    input_placeholder:"Ask anything about University of Zululand",
    voice_listening:"Listening… speak now.",
    voice_unsupported:"Voice input isn't supported in this browser — you can still type.",
    no_subjects:"Tap at least one subject chip (or type them) so I have something to match against \uD83D\uDE4F",
    rec_intro:(n)=>`Based on ${n}, here's what lines up well:`,
    rec_why:"Why it fits:",
    rec_aps:"Min. APS",
    rec_entry:"Entry requirements:",
    rec_careers:"Careers:",
    rec_industry:"Industry:",
    rec_salary:"Salary:",
    rec_opportunities:"Job opportunities:",
    rec_closing:"Want the full entry requirements, or should I look at a different subject mix?",
    greeting_reply:["Hi!, what do you want to know about universty of Zululand today"],
    thanks_reply:"You're very welcome! Happy to help anytime.",
    fallback:"I'm best with study options right now — try telling me your subjects (e.g. \u201CMaths, Life Sciences, Geography\u201D) or tap a chip below.",
    aps_used:"APS used:",
    aps_your:"Your APS:",
    aps_meets:"Meets minimum",
    aps_below:"Below minimum",
    no_lang_detected:"I couldn't confidently identify your language. Please choose your preferred language from the selector above.",
    enter_aps_first:"Please enter an APS score first.",
    salary_junior:"Junior", salary_mid:"Mid-career", salary_senior:"Senior",
    english_fallback_note:"(Detailed career info for this language is shown in English for now.)",
    your_marks:"your marks",
    aps_word:"APS", lo_included:" including Life Orientation", lo_excluded:" excluding Life Orientation",
  },
  zu: {
    tag_nav:"I-Chatbot", nav_fac:"Iminyango", nav_how:"Kusebenza kanjani", nav_community:"Ikhampasi", nav_advisor:"Hlangana ne-Chatbot", nav_cta:"Buza i-Chatbot",
    hero_eyebrow:"Uhlelo Olucondile Lokuncoma Iziqu",
    hero_title:"Izifundo zakho sezazi kakade<br>lapho <em>ezikhona.</em>",
    hero_lead:"Tshela i-Chatbot ye-UNIZULU ozifundayo eBangeni le-12 — ngesiNgisi noma ngesiZulu — bese uthola iziqu ezikulungele kuyo yonke imiyango emine, kuhunyushwa nezidingo zokungena ngolimi olulula.",
    hero_cta1:"Xoxa ne-Chatbot", hero_cta2:"Buka iminyango emine",
    stat_fac:"Iminyango", stat_prog:"Iziqu ezihlelwe", stat_lang:"Izilimi ezimbili", stat_time:"Ikhona njalo",
    fac_eyebrow:"Lapho izifundo zakho zingakuyisa khona", fac_title:"Iminyango emine, ikhampasi eyodwa",
    fac_lead:"Zonke iziqu e-UNIZULU zitholakala kwenye yale minyango emine. I-Chatbot isebenzisa lolu hlelo ukuqondanisa izifundo zakho nezinketho zangempela zokufunda.",
    how_eyebrow:"Izinyathelo ezintathu", how_title:"I-Chatbot iqondanisa kanjani",
    step1_t:"Mtshele izifundo zakho", step1_d:"Khetha izifundo zakho zeBanga le-12 kanye nokuqonda kwakho amamaki akho — ngokuchofoza, ukubhala, noma ukukhuluma, ngesiNgisi noma ngesiZulu.",
    step2_t:"Uyahlola ukulingana", step2_d:"I-Chatbot ihlola izifundo namamaki akho ngokumelene ne-APS ecatshangelwayo nezidingo zezifundo kuzo zonke iminyango emine.",
    step3_t:"Uyahlola, ngolimi olucacile", step3_d:"Uthola iziqu ezingu-2–3 ezihlelwe ngokobubaluleki, kanye nesizathu, izidingo, nokubuza okulandelayo — akukho ndlela evalekile.",
    comm_eyebrow:"Isikhungo semicabango yase-Afrika",
    comm_quote:"\u201CDiligentia Cresco — Ngikhula ngenxa yokukhuthala.\u201D Leso siqubulo esikuhlangothini efanayo nomklomelo yiyona nkolelo ye-Chatbot: ayikukhetheli, yenza kuphela indlela ibonakale kalula.",
    adv_eyebrow:"Hlangana ne-Chatbot", adv_title:"I-Chatbot ikhuluma ulimi lwakho — zombili", adv_status:"I-Chatbot Yezifundo ye-UNIZULU",
    feat1_t:"Wakhelwe izilimi ezimbili", feat1_d:"Buza ngesiNgisi noma ngesiZulu — i-Chatbot iyazazi izibingelelo, izifundo namamaki kuzo zombili izilimi, aphendule ngolimi olusebenzisile.",
    feat2_t:"Izwi ngena, izwi phuma", feat2_d:"Cindezela imakrofoni ukukhuluma izifundo zakho esikhundleni sokubhala, futhi uvumele i-Chatbot ikufundele iziqu eziphakanyisiwe.",
    feat3_t:"Kususelwa ezidingweni zangempela", feat3_d:"Isiphakamiso ngasinye sihambisana ne-APS ecatshangelwayo nesidingo esiphansi sesifundo — kuvezwa ngokucacile lapho amanani ehlukahluka.",
    feat4_t:"Wakhelwe ukukhula", feat4_d:"Injini yolimi yakhiwe ukuze isiXhosa, iSesotho ne-Afrikaans zingafakwa njengezilimi ezengeziwe, hhayi ukwakhiwa kabusha.",
    preview_bot1:"Sawubona! Ngiyi-Chatbot yakho \uD83D\uDC4B Ufunda ziphi izifundo eBangeni le-12?",
    preview_user1:"IMathematics, ISayensi Yefiziki, ISayensi Yempilo, ISingisi",
    preview_bot2:"Inhlanganisela emnandi! Ngokuqinile kweMathematics neSayensi Yefiziki, nazi lapho ungalingana khona kahle:",
    preview_chip1:"I-BSc: Mainstream · FSAE", preview_chip2:"I-BSc: Agriculture · FSAE", preview_chip3:"I-BEd MSTE · FE",
    preview_cta:"Zama ngempela →",
    foot_tag:"Uhlelo olucondile lokuncoma iziqu olwakhelwe abafundi bezikole ezisezingeni eliphezulu abafuna izinketho zokufunda e-UNIZULU.",
    foot_h1:"Iminyango", foot_h2:"I-Chatbot", foot_h3:"Ikhampasi",
    foot_l1:"Kusebenza kanjani", foot_l2:"Izwi nolimi", foot_l3:"Ukuqondaniswa kwezifundo", foot_l4:"KwaZulu-Natal, iNingizimu Afrika",
    foot_disclaimer:"Amagama eziqu, iminyaka yokufunda, namaphuzu amancane okungena (i-APS) kususelwa kuNcwadi esemthethweni ye-UNIZULU (Prospectus). Izidingo zingaguquka phakathi kokungena kwabafundi, ngakho hlala uqinisekisa ku-unizulu.ac.za ngaphambi kokufaka isicelo.",
    foot_bottom:"Iphrojekthi yomfundi — Uhlelo Olucondile Lokuncoma Iziqu",
    chat_intro1:" Welcome to Maticbot, your Unizulu virtual study assistant!",
    chip_reset:"Qala phansi",
    input_placeholder:"Bhala izifundo zakho, isb. iMathematics, iSayensi Yefiziki…",
    voice_listening:"Ngiyalalela… khuluma manje.",
    voice_unsupported:"Ukungena ngezwi akusekelwe kule bhrawuza — ungabhala.",
    no_subjects:"Chofoza okungenani isifundo esisodwa (noma sibhale) ukuze ngibe nengqondanisa \uD83D\uDE4F",
    rec_intro:(n)=>`Ngokusekelwe ku-${n}, nazi ezihambelana kahle:`,
    rec_why:"Kungani kulingana:",
    rec_aps:"I-APS Encane",
    rec_entry:"Izidingo zokungena:",
    rec_industry:"Imboni:",
    rec_salary:"Iholo:",
    rec_opportunities:"Amathuba omsebenzi:",
    rec_closing:"Ufuna izidingo eziphelele zokungena, noma ngibheke enye inhlanganisela yezifundo?",
    greeting_reply:"Sawubona! \uD83D\uDC4B Sengikulungele — yiziphi izifundo ozithathile?",
    thanks_reply:"Kuhle kakhulu! Ngiyakusiza noma nini.",
    fallback:"Okwamanje ngazi kangcono ngezinketho zokufunda — ngitshele izifundo zakho (isb. \u201CMathematics, Life Sciences, Geography\u201D) noma uchofoze i-chip engezansi.",
    aps_used:"I-APS esetshenzisiwe:",
    aps_your:"I-APS yakho:",
    aps_meets:"Iyafinyelela iminimamu",
    aps_below:"Ngaphansi kweminimamu",
    no_lang_detected:"Angikwazanga ukuqiniseka ngolimi lwakho. Sicela ukhethe ulimi olulifisayo kusikhethi olungenhla.",
    enter_aps_first:"Sicela ufake amaphuzu e-APS kuqala.",
    your_marks:"amamaki akho",
    aps_word:"I-APS", lo_included:" kufaka i-Life Orientation", lo_excluded:" ngaphandle kwe-Life Orientation",
    salary_junior:"Osafunda", salary_mid:"Onolwazi oluphakathi", salary_senior:"Onolwazi olunzulu",
    english_fallback_note:"(Imininingwane yemisebenzi yalolu limi itshengiswa ngesiNgisi okwamanje.)",
  },
  xh: { chat_intro1:"Molo! Ndingu-Chatbot wakho we-UNIZULU.", chat_intro2:"Ndixelele izifundo zakho zeBanga 12, amanqaku okanye i-APS, ndize ndikuncede ufumane izifundo ozifaneleyo.", chip_recommend:"Ndincomele", chip_reset:"Qala kwakhona", input_placeholder:"Bhala izifundo, amanqaku okanye i-APS…", greeting_reply:"Molo! 👋 Ziziphi izifundo ozifundayo?", thanks_reply:"Wamkelekile! Ndihlala ndikulungele ukukunceda.", fallback:"Ndixelele izifundo zakho, amanqaku okanye i-APS ukuze ndikwazi ukukunceda.", rec_intro:n=>`Ngokusekelwe ku-${n}, ezi zezona ndlela zihambelana nawe:`, rec_why:"Kutheni kufanelekile:", rec_aps:"I-APS encinci", rec_entry:"Iimfuno zokungena:", rec_careers:"Imisebenzi:", rec_industry:"Ishishini:", rec_salary:"Umvuzo:", rec_opportunities:"Amathuba omsebenzi:", rec_closing:"Ungathanda iinkcukacha ezipheleleyo zokwamkelwa?", no_subjects:"Faka isifundo okanye i-APS yakho.", aps_used:"I-APS esetyenzisiweyo:", aps_your:"I-APS yakho:", aps_meets:"Iyafikelela kumlinganiselo", aps_below:"Ingaphantsi komlinganiselo", no_lang_detected:"Andiqinisekanga ngolwimi lwakho. Nceda ukhethe ulwimi olukhethwayo ngasentla.", enter_aps_first:"Nceda ufake inqaku le-APS kuqala.", salary_junior:"Osakhulayo", salary_mid:"Ophakathi", salary_senior:"Onamava", english_fallback_note:"(Iinkcukacha zomsebenzi kolu lwimi zibonakaliswa ngesiNgesi okwangoku.)" },
  st: { chat_intro1:"Dumela! Ke Chatbot ya hao ya UNIZULU.", chat_intro2:"Mpolelle dithuto tsa hao tsa Kereiti ya 12, matshwao kapa APS.", chip_recommend:"Nkgothaletse", chip_reset:"Qala hape", input_placeholder:"Kenya dithuto, matshwao kapa APS…", greeting_reply:"Dumela! 👋 O ithuta dithuto dife?", thanks_reply:"O amohelehile!", fallback:"Mpolelle dithuto, matshwao kapa APS ya hao.", rec_intro:n=>`Ho latela ${n}, tsena ke dikgetho tse o loketseng:`, rec_why:"Lebaka:", rec_aps:"APS e tlase", rec_entry:"Ditlhoko tsa ho kena:", rec_careers:"Mesebetsi:", rec_industry:"Indasteri:", rec_salary:"Moputso:", rec_opportunities:"Menyetla ya mosebetsi:", rec_closing:"Na o batla ditlhoko tse felletseng tsa kamohelo?", no_subjects:"Kenya thuto kapa APS.", aps_used:"APS e sebedisitsweng:", aps_your:"APS ya hao:", aps_meets:"E fihlella tekanyo e tlase", aps_below:"E ka tlase ho tekanyo", no_lang_detected:"Ha ke a kgona ho tseba puo ya hao ka botlalo. Ka kopo, kgetha puo eo o e ratang ka holimo.", enter_aps_first:"Ka kopo, kenya lenane la APS pele.", salary_junior:"Ya qalang", salary_mid:"Ya bohareng", salary_senior:"E phahameng", english_fallback_note:"(Lintlha tsa mosebetsi bakeng sa puo ena di bontshitswe ka Senyesemane hajwale.)" },
  tn: { chat_intro1:"Dumela! Ke Chatbot ya gago ya UNIZULU.", chat_intro2:"Mpolelele dithuto tsa gago tsa Mophato wa 12, maduo kgotsa APS.", chip_recommend:"Nkgothaletse", chip_reset:"Simolola gape", input_placeholder:"Kwala dithuto, maduo kgotsa APS…", greeting_reply:"Dumela! 👋 O ithuta dithuto dife?", thanks_reply:"O amogetswe!", fallback:"Mpolelele dithuto, maduo kgotsa APS ya gago.", rec_intro:n=>`Go ya ka ${n}, tseno ke dikgetho tse di go tshwanetseng:`, rec_why:"Goreng e go tshwanela:", rec_aps:"APS e e kwa tlase", rec_entry:"Ditlhokego tsa go tsena:", rec_careers:"Ditiro:", rec_industry:"Indasteri:", rec_salary:"Moputso:", rec_opportunities:"Ditshono tsa tiro:", rec_closing:"A o batla ditlhokego tsotlhe tsa go amogelwa?", no_subjects:"Tsenya thuto kgotsa APS.", aps_used:"APS e e dirisitsweng:", aps_your:"APS ya gago:", aps_meets:"E fitlhelela bonnye", aps_below:"E kwa tlase ga bonnye", no_lang_detected:"Ga ke a kgona go itse puo ya gago sentle. Tswee-tswee tlhopha puo e o e ratang kwa godimo.", enter_aps_first:"Tswee-tswee tsenya matshwao a APS pele.", salary_junior:"Yo mosha", salary_mid:"Wa bogareng", salary_senior:"Yo o maitemogelo", english_fallback_note:"(Dintlha tsa tiro tsa puo eno di bontshiwa ka Seesemane ka nako eno.)" },
  nso: { chat_intro1:"Thobela! Ke Chatbot ya gago ya UNIZULU.", chat_intro2:"Mpolelele dithuto tsa gago tsa Kereiti ya 12, meputso kgotsa APS.", chip_recommend:"Nkgothaletse", chip_reset:"Thoma gape", input_placeholder:"Tsenya dithuto, meputso kgotsa APS…", greeting_reply:"Thobela! 👋 O ithuta dithuto dife?", thanks_reply:"O amogetswe!", fallback:"Mpolelele dithuto, meputso kgotsa APS ya gago.", rec_intro:n=>`Go ya ka ${n}, tše ke dikgetho tšeo di go swanelago:`, rec_why:"Lebaka:", rec_aps:"APS ya fase", rec_entry:"Dinyakwa tša go tsena:", rec_careers:"Mešomo:", rec_industry:"Intasteri:", rec_salary:"Moputso:", rec_opportunities:"Menyetla ya mešomo:", rec_closing:"Na o nyaka dinyakwa tša kamogelo ka botlalo?", no_subjects:"Tsenya thuto goba APS.", aps_used:"APS e šomišitšwego:", aps_your:"APS ya gago:", aps_meets:"E fihlelela bonyenyane", aps_below:"E ka fase ga bonyenyane", no_lang_detected:"Ga se ka kgona go tseba polelo ya gago gabotse. Hle kgetha polelo yeo o e ratago ka mo godimo.", enter_aps_first:"Hle tsenya dintlha tša APS pele.", salary_junior:"Yo mofsa", salary_mid:"Wa magareng", salary_senior:"Yo bogolo bja maitemogelo", english_fallback_note:"(Dintlha tša mošomo tša polelo ye di bontšhwa ka Seisimane ga bjale.)" },
  af: { chat_intro1:"Hallo! Ek is jou UNIZULU-studie-chatbot.", chat_intro2:"Vertel my jou Graad 12-vakke, punte of APS, en ek help jou met kwalifikasies waarvoor jy moontlik kwalifiseer.", chip_recommend:"Beveel aan", chip_reset:"Begin oor", input_placeholder:"Tik vakke, punte of APS…", greeting_reply:"Hallo! 👋 Watter vakke neem jy?", thanks_reply:"Groot plesier!", fallback:"Vertel my jou vakke, punte of APS.", rec_intro:n=>`Gebaseer op ${n}, pas hierdie opsies goed:`, rec_why:"Hoekom dit pas:", rec_aps:"Minimum APS", rec_entry:"Toelatingsvereistes:", rec_careers:"Loopbane:", rec_industry:"Bedryf:", rec_salary:"Salaris:", rec_opportunities:"Werksgeleenthede:", rec_closing:"Wil jy die volledige toelatingsvereistes sien?", no_subjects:"Voer minstens een vak of jou APS in.", aps_used:"APS gebruik:", aps_your:"Jou APS:", aps_meets:"Voldoen aan minimum", aps_below:"Onder die minimum", no_lang_detected:"Ek kon nie jou taal met sekerheid identifiseer nie. Kies asseblief jou voorkeurtaal uit die kieslys hierbo.", enter_aps_first:"Voer asseblief eers 'n APS-telling in.", salary_junior:"Junior", salary_mid:"Middelloopbaan", salary_senior:"Senior", english_fallback_note:"(Loopbaanbesonderhede vir hierdie taal word tans in Engels gewys.)" },
  ss: { chat_intro1:"Sawubona! Ngingu-Chatbot wakho wase-UNIZULU.", chat_intro2:"Ngitshele tifundvo takho teBanga 12, emamaki noma APS.", chip_recommend:"Ngincomele", chip_reset:"Calisa kabusha", input_placeholder:"Bhala tifundvo, emamaki noma APS…", greeting_reply:"Sawubona! 👋 Ufunda ziphi tifundvo?", thanks_reply:"Wemukelekile!", fallback:"Ngitshele tifundvo, emamaki noma APS yakho.", rec_intro:n=>`Ngokusho kwe-${n}, leti tinketho letikufanele:`, rec_why:"Kungani kufanelekile:", rec_aps:"APS lencane", rec_entry:"Tidzingo tekungena:", rec_careers:"Imisebenti:", rec_industry:"Imboni:", rec_salary:"Umholo:", rec_opportunities:"Emathuba emsebenti:", rec_closing:"Ufuna tinkhomba letiphelele tekungeniswa?", no_subjects:"Faka tifundvo noma APS.", aps_used:"I-APS lesetjentiswe:", aps_your:"I-APS yakho:", aps_meets:"Iyawafikelela emalucezu lamancane", aps_below:"Ngephasi kwemalucezu lamancane", no_lang_detected:"Angikange ngiciniseke ngelulwimi lwakho. Ngicela ukhetse lulwimi loluthandzako etulu.", enter_aps_first:"Ngicela ufake emanumbha e-APS kucala.", salary_junior:"Losafundzako", salary_mid:"Losemkhatsini", salary_senior:"Lonelwati", english_fallback_note:"(Imininingwane yemsebenti yalolu lulwimi ikhonjiswa ngesiNgisi njengamanje.)" },
  ve: { chat_intro1:"Ndaa! Ndi Chatbot yaṋu ya UNIZULU.", chat_intro2:"Mmbudzeni zwikolo zwaṋu zwa Gireidi ya 12, maraga kana APS.", chip_recommend:"Nanganyeleni", chip_reset:"Thomani hafhu", input_placeholder:"Ṅwalani zwikolo, maraga kana APS…", greeting_reply:"Ndaa! 👋 Ni khou guda zwikolo zwifhio?", thanks_reply:"Ni a ṱanganedzwa!", fallback:"Mmbudzeni zwikolo, maraga kana APS yaṋu.", rec_intro:n=>`U ya nga ${n}, hezwi ndi zwipfunzo zwine zwa ni lingana:`, rec_why:"Zwi ni linganela ngani:", rec_aps:"APS ya fhasi", rec_entry:"Zwilavhelelwa zwa u dzhena:", rec_careers:"Mishumo:", rec_industry:"Indasitiri:", rec_salary:"Mulambo:", rec_opportunities:"Zwibuli zwa mushumo:", rec_closing:"Ni ṱoḓa zwidodombedzwa zwa u ṱanganedza?", no_subjects:"Dzhenisani tshikolo kana APS.", aps_used:"APS yo shumiswaho:", aps_your:"APS yaṋu:", aps_meets:"I swikelela tshikalo tshi si na', tshiṱuku", aps_below:"I fhasi ha tshikalo tshi ṱuku", no_lang_detected:"A thi ngo kona u ḓivha luambo lwaṋu nga vhukhwiṱisi. Ni khou kombelwa u khetha luambo lune na lu funa nṱha uko.", enter_aps_first:"Ni khou kombelwa u dzhenisa mbalo ya APS u thoma.", salary_junior:"Wa u thoma", salary_mid:"Wa vhukati", salary_senior:"Wa zwenzhelo", english_fallback_note:"(Mafhungo a mushumo a luambo ulu a khou sumbedzwa nga Luisimane zwazwino.)" },
  ts: { chat_intro1:"Avuxeni! Hi Chatbot ya wena ya UNIZULU.", chat_intro2:"Mpfumele swikolo swa wena swa Grade 12, timaraka kumbe APS.", chip_recommend:"Ndikombisele", chip_reset:"Sungula nakambe", input_placeholder:"Tsala swikolo, timaraka kumbe APS…", greeting_reply:"Avuxeni! 👋 Hi swikolo swihi leswi u swi dyondzaka?", thanks_reply:"U amukelekile!", fallback:"Mpfumele swikolo, timaraka kumbe APS ya wena.", rec_intro:n=>`Hi ku ya hi ${n}, leswi hi swona leswi ku faneleke:`, rec_why:"Ha yini swi ku fanele:", rec_aps:"APS ya le hansi", rec_entry:"Swilaveko swa ku nghena:", rec_careers:"Mintirho:", rec_industry:"Indastri:", rec_salary:"Muholo:", rec_opportunities:"Minkarhi ya mintirho:", rec_closing:"U lava swilaveko leswi heleleke swa ku amukeriwile?", no_subjects:"Nghenisa xikolo kumbe APS.", aps_used:"APS leyi tirhisiweke:", aps_your:"APS ya wena:", aps_meets:"Yi fikelela mpimo lowu tsongo", aps_below:"Ehansi ka mpimo lowu tsongo", no_lang_detected:"A ndzi swi kotanga ku tiva ririmi ra wena hi ku tiyiseka. Nkombeni hlawula ririmi leri u ri rhandzaka laha henhla.", enter_aps_first:"Nkombeni nghenisa manumbara ya APS ku sungula.", salary_junior:"Muswa", salary_mid:"Wa xikarhi", salary_senior:"Wa ntokoto", english_fallback_note:"(Vuxokoxoko bya mintirho bya ririmi leri byi kombisiwa hi Xinghezi sweswi.)" },
  nr: { chat_intro1:"Lotjhani! Ngingu-Chatbot yakho ye-UNIZULU.", chat_intro2:"Ngitjele ngeemfundo zakho zeGreyidi 12, amamaki nofana i-APS.", chip_recommend:"Ngincomele", chip_reset:"Thoma godu", input_placeholder:"Tlola iimfundo, amamaki nofana i-APS…", greeting_reply:"Lotjhani! 👋 Ufunda ziphi iimfundo?", thanks_reply:"Wamukelekile!", fallback:"Ngitjele iimfundo, amamaki nofana i-APS yakho.", rec_intro:n=>`Ngokuya nge-${n}, lezi ziinketho ezingakulungela:`, rec_why:"Kubayini kukufanele:", rec_aps:"APS ephasi", rec_entry:"Iimfuneko zokungena:", rec_careers:"Imisebenzi:", rec_industry:"Imboni:", rec_salary:"Umholo:", rec_opportunities:"Amathuba omsebenzi:", rec_closing:"Ufuna iimfuneko eziphelele zokwamukelwa?", no_subjects:"Faka isifundo nofana i-APS.", aps_used:"I-APS esetjenzisiweko:", aps_your:"I-APS yakho:", aps_meets:"Iyayifinyelela iminciphiso", aps_below:"Ngaphasi kweminciphiso", no_lang_detected:"Angizange ngikwazi ukuqiniseka ngelimi lakho. Khetha ilimi olithandako ngehla.", enter_aps_first:"Ngibawa ufake amanani we-APS tjhogo.", salary_junior:"Osafundako", salary_mid:"Osephakathi", salary_senior:"Onelwazi elinabileko", english_fallback_note:"(Imininingwana yomsebenzi yelimi eli itjengiswa ngeSewula njengamanje.)" }
};

/* ============ HOME PAGE TRANSLATIONS ============
   The chatbot language selector controls BOTH the chatbot and the landing page. */
const PAGE_I18N = {
  xh:{tag_nav:"I-Chatbot",nav_fac:"Iifakhalthi",nav_how:"Isebenza njani",nav_community:"Ikhampasi",nav_advisor:"Dibana ne-Chatbot",nav_cta:"Buza i-Chatbot",hero_eyebrow:"Inkqubo eBukrelekrele yokuNcoma iiKwalifikeshini",hero_title:"Izifundo zakho sele ziyazi<br>apho <em>zifanele khona.</em>",hero_lead:"Xelela i-UNIZULU Chatbot ngezifundo zakho zeBanga 12 uze ufumane iikwalifikeshini ezihambelana nawe kuzo zonke iifakhalthi ezine.",hero_cta1:"Thetha ne-Chatbot",hero_cta2:"Jonga iifakhalthi ezi-4",stat_fac:"Iifakhalthi",stat_prog:"Iikwalifikeshini",stat_lang:"Iilwimi zaseMzantsi Afrika ezili-11",stat_time:"Ifumaneka 24/7",fac_eyebrow:"Apho izifundo zakho zingakusa khona",fac_title:"Iifakhalthi ezine, ikhampasi enye",fac_lead:"I-Chatbot idibanisa izifundo zakho neemfuno zokwamkelwa kweziqinisekiso zokufunda e-UNIZULU.",how_eyebrow:"Amanyathelo amathathu",how_title:"I-Chatbot ikutshatisa njani",step1_t:"Xela izifundo zakho",step2_t:"Ihlola ukuhambelana",step3_t:"Hlola iinketho zakho",comm_eyebrow:"Ingcinga yaseAfrika",adv_eyebrow:"Dibana ne-Chatbot",adv_title:"I-Chatbot ithetha ulwimi lwakho",adv_status:"UNIZULU Chatbot",feat1_t:"Iilwimi ezili-11",feat2_t:"Ilizwi ngaphakathi nangaphandle",feat3_t:"Isekelwe kwiimfuno zokwamkelwa",feat4_t:"Yenzelwe ukukhula",preview_cta:"Yizame ngoku",foot_h1:"Iifakhalthi",foot_h2:"Chatbot",foot_h3:"Ikhampasi",foot_l1:"Isebenza njani",foot_l2:"Ilizwi nolwimi",foot_l3:"Ukutshatisa izifundo",foot_l4:"KwaZulu-Natal, eMzantsi Afrika",foot_bottom:"Iprojekthi yabafundi — Inkqubo eBukrelekrele yokuNcoma iiKwalifikeshini"},
  st:{tag_nav:"Chatbot",nav_fac:"Mafapha",nav_how:"E sebetsa jwang",nav_community:"Khampase",nav_advisor:"Kopana le Chatbot",nav_cta:"Botsa Chatbot",hero_eyebrow:"Tsamaiso e Bohlale ya ho Kgothaletsa Dithuto",hero_title:"Dithuto tsa hao di se di tseba<br>moo di <em>lokelang teng.</em>",hero_lead:"Bolella UNIZULU Chatbot dithuto tsa hao tsa Kereiti ya 12 mme o fumane dithuto tsa univesithi tse o loketseng mafapheng ohle a mane.",hero_cta1:"Bua le Chatbot",hero_cta2:"Sheba mafapha a 4",stat_fac:"Mafapha",stat_prog:"Dithuto tse hlophisitsweng",stat_lang:"Dipuo tse 11 tsa Afrika Borwa",stat_time:"E fumaneha 24/7",fac_eyebrow:"Moo dithuto tsa hao di ka o isang teng",fac_title:"Mafapha a mane, khampase e le nngwe",fac_lead:"Chatbot e bapisa dithuto tsa hao le ditlhoko tsa ho amohelwa dithutong tsa UNIZULU.",how_eyebrow:"Mehato e meraro",how_title:"Chatbot e o bapisa jwang",step1_t:"Bolella dithuto tsa hao",step2_t:"E lekola ho tshwaneleha",step3_t:"Hlahloba dikgetho tsa hao",comm_eyebrow:"Mohopolo wa Afrika",adv_eyebrow:"Kopana le Chatbot",adv_title:"Chatbot e bua puo ya hao",adv_status:"UNIZULU Chatbot",feat1_t:"Dipuo tse 11",feat2_t:"Lentswe le a tshehetswa",feat3_t:"E thehilwe ditlhokong tsa kamohelo",feat4_t:"E etseditswe ho hola",preview_cta:"E leke hona jwale",foot_h1:"Mafapha",foot_h2:"Chatbot",foot_h3:"Khampase",foot_l1:"E sebetsa jwang",foot_l2:"Lentswe le puo",foot_l3:"Ho bapisa dithuto",foot_l4:"KwaZulu-Natal, Afrika Borwa",foot_bottom:"Porojeke ya baithuti — Tsamaiso e Bohlale ya ho Kgothaletsa Dithuto"},
  tn:{tag_nav:"Chatbot",nav_fac:"Mafapha",nav_how:"E dira jang",nav_community:"Khamphase",nav_advisor:"Kopana le Chatbot",nav_cta:"Botsa Chatbot",hero_eyebrow:"Tsamaiso ya Botlhale ya go Akantsha Dithuto",hero_title:"Dithuto tsa gago di setse di itse<br>kwa di <em>lekanang teng.</em>",hero_lead:"Bolelela UNIZULU Chatbot dithuto tsa gago tsa Mophato wa 12 mme o bone dithuto tsa yunibesithi tse di go tshwanetseng mo mafapheng otlhe a mane.",hero_cta1:"Bua le Chatbot",hero_cta2:"Bona mafapha a 4",stat_fac:"Mafapha",stat_prog:"Dithuto tse di beilweng",stat_lang:"Dipuo tse 11 tsa Aforika Borwa",stat_time:"E teng 24/7",fac_eyebrow:"Kwa dithuto tsa gago di ka go isang teng",fac_title:"Mafapha a mane, khamphase e le nngwe",fac_lead:"Chatbot e bapisa dithuto tsa gago le ditlhokego tsa go amogelwa kwa UNIZULU.",how_eyebrow:"Dikgato tse tharo",how_title:"Chatbot e go bapisa jang",step1_t:"Bolelela dithuto tsa gago",step2_t:"E lekola go tshwanela",step3_t:"Sekaseka ditlhopho tsa gago",comm_eyebrow:"Kgopolo ya Aforika",adv_eyebrow:"Kopana le Chatbot",adv_title:"Chatbot e bua puo ya gago",adv_status:"UNIZULU Chatbot",feat1_t:"Dipuo tse 11",feat2_t:"Lentswe le a tshegediwa",feat3_t:"E ikaegile ka ditlhokego tsa kamohelo",feat4_t:"E agilwe gore e gole",preview_cta:"E leke jaanong",foot_h1:"Mafapha",foot_h2:"Chatbot",foot_h3:"Khamphase",foot_l1:"E dira jang",foot_l2:"Lentswe le puo",foot_l3:"Go bapisa dithuto",foot_l4:"KwaZulu-Natal, Aforika Borwa",foot_bottom:"Porojeke ya baithuti — Tsamaiso ya Botlhale ya go Akantsha Dithuto"},
  nso:{tag_nav:"Chatbot",nav_fac:"Mafapha",nav_how:"E šoma bjang",nav_community:"Khamphase",nav_advisor:"Kopana le Chatbot",nav_cta:"Botšiša Chatbot",hero_eyebrow:"Tshepedišo ya Bohlale ya go Šišinya Dithuto",hero_title:"Dithuto tša gago di šetše di tseba<br>moo di <em>swanelago.</em>",hero_lead:"Botša UNIZULU Chatbot dithuto tša gago tša Kereiti ya 12 gomme o hwetše dithuto tša yunibesithi tšeo di go swanelago mafapheng a mane.",hero_cta1:"Bua le Chatbot",hero_cta2:"Bona mafapha a 4",stat_fac:"Mafapha",stat_prog:"Dithuto tše di beakantšwego",stat_lang:"Dipuo tše 11 tša Afrika Borwa",stat_time:"E hwetšagala 24/7",fac_eyebrow:"Moo dithuto tša gago di ka go išago gona",fac_title:"Mafapha a mane, khamphase e tee",fac_lead:"Chatbot e bapetša dithuto tša gago le dinyakwa tša kamogelo tša UNIZULU.",how_eyebrow:"Dikgato tše tharo",how_title:"Chatbot e go bapetša bjang",step1_t:"Botša dithuto tša gago",step2_t:"E lekola go swanelega",step3_t:"Lekola dikgetho tša gago",comm_eyebrow:"Kgopolo ya Afrika",adv_eyebrow:"Kopana le Chatbot",adv_title:"Chatbot e bolela polelo ya gago",adv_status:"UNIZULU Chatbot",feat1_t:"Dipuo tše 11",feat2_t:"Lentšu le a thekgwa",feat3_t:"E theilwe dinyakweng tša kamogelo",feat4_t:"E diretšwe go gola",preview_cta:"E leke gona bjale",foot_h1:"Mafapha",foot_h2:"Chatbot",foot_h3:"Khamphase",foot_l1:"E šoma bjang",foot_l2:"Lentšu le polelo",foot_l3:"Go bapetša dithuto",foot_l4:"KwaZulu-Natal, Afrika Borwa",foot_bottom:"Porojeke ya baithuti — Tshepedišo ya Bohlale ya go Šišinya Dithuto"},
  af:{tag_nav:"Chatbot",nav_fac:"Fakulteite",nav_how:"Hoe dit werk",nav_community:"Kampus",nav_advisor:"Ontmoet die Chatbot",nav_cta:"Vra die Chatbot",hero_eyebrow:"Intelligente Kwalifikasie-aanbevelingstelsel",hero_title:"Jou vakke weet reeds<br>waar hulle <em>pas.</em>",hero_lead:"Vertel die UNIZULU Chatbot van jou Graad 12-vakke en kry kwalifikasies wat by jou pas oor al vier fakulteite.",hero_cta1:"Gesels met die Chatbot",hero_cta2:"Blaai deur die 4 fakulteite",stat_fac:"Fakulteite",stat_prog:"Kwalifikasies gekoppel",stat_lang:"11 Suid-Afrikaanse tale",stat_time:"24/7 beskikbaar",fac_eyebrow:"Waarheen jou vakke jou kan neem",fac_title:"Vier fakulteite, een kampus",fac_lead:"Die Chatbot vergelyk jou vakke met toelatingsvereistes vir kwalifikasies by UNIZULU.",how_eyebrow:"Drie stappe",how_title:"Hoe die Chatbot jou pas",step1_t:"Vertel jou vakke",step2_t:"Dit bepaal die passing",step3_t:"Verken jou opsies",comm_eyebrow:"Afrikaanse denke",adv_eyebrow:"Ontmoet die Chatbot",adv_title:"Die Chatbot praat jou taal",adv_status:"UNIZULU Chatbot",feat1_t:"11 tale",feat2_t:"Stemondersteuning",feat3_t:"Gebaseer op toelatingsvereistes",feat4_t:"Gebou om te groei",preview_cta:"Probeer dit nou",foot_h1:"Fakulteite",foot_h2:"Chatbot",foot_h3:"Kampus",foot_l1:"Hoe dit werk",foot_l2:"Stem en taal",foot_l3:"Vakpassing",foot_l4:"KwaZulu-Natal, Suid-Afrika",foot_bottom:"Studentprojek — Intelligente Kwalifikasie-aanbevelingstelsel"},
  ss:{tag_nav:"Chatbot",nav_fac:"Emakhono",nav_how:"Isebenta njani",nav_community:"Ikhampasi",nav_advisor:"Hlangana ne-Chatbot",nav_cta:"Buza i-Chatbot",hero_eyebrow:"Luhlelo Loluhlakaniphile Lwekuncuma Ticu",hero_title:"Tifundvo takho setiyati<br>lapho <em>tifanele khona.</em>",hero_lead:"Tjela i-UNIZULU Chatbot ngetifundvo takho teBanga 12 futsi utfole ticu letikufanele kuwo onkhe emakhono lamane.",hero_cta1:"Khuluma ne-Chatbot",hero_cta2:"Buka emakhono la-4",stat_fac:"Emakhono",stat_prog:"Ticu letihlelwe",stat_lang:"Tilwimi leti-11 taseNingizimu Afrika",stat_time:"Itholakala 24/7",fac_eyebrow:"Lapho tifundvo takho tingakusa khona",fac_title:"Emakhono lamane, ikhampasi yinye",fac_lead:"I-Chatbot icatsanisa tifundvo takho netidzingo tekungena e-UNIZULU.",how_eyebrow:"Tinyatselo letintsatfu",how_title:"I-Chatbot ikucatsanisa njani",step1_t:"Tjela ngetifundvo takho",step2_t:"Ihlola kutsi kuyafanelana",step3_t:"Hlola tinketho takho",comm_eyebrow:"Umcabango wase-Afrika",adv_eyebrow:"Hlangana ne-Chatbot",adv_title:"I-Chatbot ikhuluma lulwimi lwakho",adv_status:"UNIZULU Chatbot",feat1_t:"Tilwimi leti-11",feat2_t:"Kusekelwa kwelivi",feat3_t:"Isekelwe etidzingeni tekungena",feat4_t:"Yakhiwe kutsi ikhule",preview_cta:"Yizame nyalo",foot_h1:"Emakhono",foot_h2:"Chatbot",foot_h3:"Ikhampasi",foot_l1:"Isebenta njani",foot_l2:"Livi nelulwimi",foot_l3:"Kucatsanisa tifundvo",foot_l4:"KwaZulu-Natal, eNingizimu Afrika",foot_bottom:"Iphrojekthi yebafundzi — Luhlelo Loluhlakaniphile Lwekuncuma Ticu"},
  ve:{tag_nav:"Chatbot",nav_fac:"Fakhalithi",nav_how:"I shuma hani",nav_community:"Khamphasi",nav_advisor:"Ṱangana na Chatbot",nav_cta:"Vhudzisa Chatbot",hero_eyebrow:"Maitele a Vhuṱali a u Khethela Kwalifikheishini",hero_title:"Zwikolo zwaṋu zwi a zwi ḓivha<br>hune zwa <em>lingana.</em>",hero_lead:"Ambani na UNIZULU Chatbot nga ha zwikolo zwaṋu zwa Gireidi ya 12 nahone ni wane zwikolo zwa yunivesithi zwi no ni fanele.",hero_cta1:"Ambani na Chatbot",hero_cta2:"Vhonani fakhalithi dza 4",stat_fac:"Fakhalithi",stat_prog:"Kwalifikheishini dzo khethwaho",stat_lang:"Nyambo dza 11 dza Afrika Tshipembe",stat_time:"I wanala 24/7",fac_eyebrow:"Hune zwikolo zwaṋu zwa nga ni isa hone",fac_title:"Fakhalithi dzaṋa, khamphasi nthihi",fac_lead:"Chatbot i vhambedza zwikolo zwaṋu na zwilavhelelwa zwa u dzhena UNIZULU.",how_eyebrow:"Vhukati ha maga mararu",how_title:"Chatbot i ni vhambedza hani",step1_t:"Ambani zwikolo zwaṋu",step2_t:"I sedza u lingana",step3_t:"Sedzani zwikhetho zwaṋu",comm_eyebrow:"Mihumbulo ya Afrika",adv_eyebrow:"Ṱanganani na Chatbot",adv_title:"Chatbot i amba luambo lwaṋu",adv_status:"UNIZULU Chatbot",feat1_t:"Nyambo dza 11",feat2_t:"Thusedzo ya ipfi",feat3_t:"Yo thewa kha zwilavhelelwa zwa u dzhena",feat4_t:"Yo itelwa u aluwa",preview_cta:"I lingedzeni zwino",foot_h1:"Fakhalithi",foot_h2:"Chatbot",foot_h3:"Khamphasi",foot_l1:"I shuma hani",foot_l2:"Ipfi na luambo",foot_l3:"U vhambedza zwikolo",foot_l4:"KwaZulu-Natal, Afrika Tshipembe",foot_bottom:"Mushumo wa vhafunzi — Maitele a Vhuṱali a u Khethela Kwalifikheishini"},
  ts:{tag_nav:"Chatbot",nav_fac:"Tifakhalithi",nav_how:"Swi tirha njani",nav_community:"Khamphasi",nav_advisor:"Hlangana na Chatbot",nav_cta:"Vutisa Chatbot",hero_eyebrow:"Endlelo ra Vutlhari ro Ringanyeta Tifundzo",hero_title:"Tifundzo ta wena se ti tiva<br>laha ti <em>faneleke.</em>",hero_lead:"Byela UNIZULU Chatbot hi tifundzo ta wena ta Grade 12 kutani u kuma tifundzo ta yunivhesiti leti ku faneleke eka tona eka tifakhalithi ta mune.",hero_cta1:"Vulavula na Chatbot",hero_cta2:"Languta tifakhalithi ta 4",stat_fac:"Tifakhalithi",stat_prog:"Tifundzo leti hlanganisiweke",stat_lang:"Tindzimi ta 11 ta Afrika Dzonga",stat_time:"Yi kumeka 24/7",fac_eyebrow:"Laha tifundzo ta wena ti nga ku yisaka kona",fac_title:"Tifakhalithi ta mune, khamphasi yin'we",fac_lead:"Chatbot yi fananisa tifundzo ta wena na swilaveko swo amukeriwile e-UNIZULU.",how_eyebrow:"Magoza manharhu",how_title:"Chatbot yi ku fananisa njani",step1_t:"Byela hi tifundzo ta wena",step2_t:"Yi kambela ku faneleka",step3_t:"Kambisisa swihlawulekisi swa wena",comm_eyebrow:"Miehleketo ya Afrika",adv_eyebrow:"Hlangana na Chatbot",adv_title:"Chatbot yi vula ririmi ra wena",adv_status:"UNIZULU Chatbot",feat1_t:"Tindzimi ta 11",feat2_t:"Nseketelo wa rito",feat3_t:"Yi sekeriwe eka swilaveko swo amukeriwile",feat4_t:"Yi endleriwe ku kula",preview_cta:"Yi ringe sweswi",foot_h1:"Tifakhalithi",foot_h2:"Chatbot",foot_h3:"Khamphasi",foot_l1:"Swi tirha njani",foot_l2:"Rito na ririmi",foot_l3:"Ku fananisa tifundzo",foot_l4:"KwaZulu-Natal, Afrika Dzonga",foot_bottom:"Phurojeke ya vadyondzi — Endlelo ra Vutlhari ro Ringanyeta Tifundzo"},
  nr:{tag_nav:"Chatbot",nav_fac:"AmaFakhalthi",nav_how:"Isebenza njani",nav_community:"Ikhamphasi",nav_advisor:"Hlangana ne-Chatbot",nav_cta:"Buza i-Chatbot",hero_eyebrow:"Indlela Ehlakaniphileko Yokuphakamisa AmaKwalifikheyiseni",hero_title:"Iimfundo zakho sezivele ziyazi<br>lapho <em>zifanele khona.</em>",hero_lead:"Tjela i-UNIZULU Chatbot ngeemfundo zakho zeGreyidi 12 bese uthola iinketho zokufunda ezikufaneleko kumaFakhalthi amane.",hero_cta1:"Khuluma ne-Chatbot",hero_cta2:"Bona amaFakhalthi ama-4",stat_fac:"AmaFakhalthi",stat_prog:"AmaKwalifikheyiseni",stat_lang:"Ilimi ezili-11 zeSewula Afrika",stat_time:"Itholakala 24/7",fac_eyebrow:"Lapho iimfundo zakho zingakusa khona",fac_title:"AmaFakhalthi amane, ikhamphasi yinye",fac_lead:"I-Chatbot iqathanisa iimfundo zakho neemfuneko zokwamukelwa e-UNIZULU.",how_eyebrow:"Amagadango amathathu",how_title:"I-Chatbot ikuqathanisa njani",step1_t:"Tjela ngeemfundo zakho",step2_t:"Ihlola ukufaneleka",step3_t:"Hlola iinketho zakho",comm_eyebrow:"Umcabango we-Afrika",adv_eyebrow:"Hlangana ne-Chatbot",adv_title:"I-Chatbot ikhuluma ilimi lakho",adv_status:"UNIZULU Chatbot",feat1_t:"Ilimi ezili-11",feat2_t:"Isekela ilizwi",feat3_t:"Isekelwe eemfunekweni zokwamukelwa",feat4_t:"Yenzelwe ukukhula",preview_cta:"Yizame nje",foot_h1:"AmaFakhalthi",foot_h2:"Chatbot",foot_h3:"Ikhamphasi",foot_l1:"Isebenza njani",foot_l2:"Ilizwi nelimi",foot_l3:"Ukuqathanisa iimfundo",foot_l4:"KwaZulu-Natal, eSewula Afrika",foot_bottom:"Iphrojekthi yabafundi — Indlela Ehlakaniphileko Yokuphakamisa AmaKwalifikheyiseni"}
};
let LANG = 'en';
const LANG_CODES = ['en','zu','xh','st','tn','nso','af','ss','ve','ts','nr'];
const LANG_NAMES = {en:'English',zu:'isiZulu',xh:'isiXhosa',st:'Sesotho',tn:'Setswana',nso:'Sepedi',af:'Afrikaans',ss:'siSwati',ve:'Tshivenda',ts:'itsonga',nr:'isiNdebele'};
function t(key){ return PAGE_I18N[LANG]?.[key] ?? I18N[LANG]?.[key] ?? I18N.en[key] ?? key; }

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.getElementById('chatInput').placeholder = t('input_placeholder');
  renderFacGrid();
  renderFootFac();
}

/* ============ FACULTY / PROGRAMME DATASET ============ */
/* Loaded at runtime from data/qualifications.json (see loadFaculties() below).
   Sourced from the official UNIZULU Prospectus plus the CAO Handbook Entry 2027 Engineering
   section (ZU-R programme codes) for the B Eng qualifications. Fee/date figures in the source
   booklets were for an earlier intake, so this build only uses the durable parts: qualification
   titles, duration, minimum admission points (APS), subject requirements and indicative salary
   bands. Always confirm against the current-year prospectus before applying. */
let FACULTIES = [];
let ALL_PROGRAMMES = [];

async function loadFaculties(){
  try{
    const res = await fetch('data/qualifications.json');
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const json = await res.json();
    FACULTIES = json.faculties || [];
  }catch(err){
    console.error('Could not load data/qualifications.json — is this being served over http(s)? Opening index.html directly via file:// blocks fetch() in most browsers.', err);
    FACULTIES = [];
  }
  ALL_PROGRAMMES = FACULTIES.flatMap(f => f.programmes.map(p => ({...p, faculty:f})));
}

function renderFacGrid(){
  const grid = document.getElementById('facGrid');
  if(!grid) return;
  grid.innerHTML = FACULTIES.map(f=>{
    const chips = f.programmes.slice(0,3).map(p=>`<span>${p.name}</span>`).join('');
    return `<div class="fac-card">
      <span class="bar" style="background:${f.color}"></span>
      <div class="mono-icon" style="background:${f.color}">${f.code[0]}</div>
      <h3>${LANG==='zu'?f.name_zu:f.name_en}</h3>
      <span class="zulu-name">${f.code} · ${LANG==='zu'?f.name_en:f.name_zu}</span>
      <p>${LANG==='zu'?f.blurb_zu:f.blurb_en}</p>
      <div class="chips">${chips}</div>
      <button class="explore" data-fac="${f.code}">${LANG==='zu'?'Xoxa ngaloku':'Ask about this'} →</button>
    </div>`;
  }).join('');
  grid.querySelectorAll('.explore').forEach(b=>{
    b.addEventListener('click', ()=>{
      openChat();
      const f = FACULTIES.find(x=>x.code===b.dataset.fac);
      pushBot(LANG==='zu' ? `Kuhle! I-${f.name_zu} inaleziqu ezinjenge-${f.programmes[0].name}. Ufunda ziphi izifundo? Ngingakusiza ngiqonde ukuthi ulingana kanjani.` : `Great choice! ${f.name_en} includes qualifications like ${f.programmes[0].name}. What subjects are you taking? I can check how well you'd fit.`);
    });
  });
}
function renderFootFac(){
  const ul = document.getElementById('footFacList');
  if(!ul) return;
  ul.innerHTML = FACULTIES.map(f=>`<li>${f.code} — ${LANG==='zu'?f.name_zu:f.name_en}</li>`).join('');
}

/* ============ CHAT ENGINE ============ */
/* ALL_PROGRAMMES is (re)built inside loadFaculties() once data/qualifications.json has loaded. */

const SUBJECT_LIST = [
  {key:"mathematics", en:"Mathematics", zu:"iMathematics"},
  {key:"physical sciences", en:"Physical Sciences", zu:"iSayensi Yefiziki"},
  {key:"life sciences", en:"Life Sciences", zu:"iSayensi Yempilo"},
  {key:"accounting", en:"Accounting", zu:"i-Accounting"},
  {key:"business studies", en:"Business Studies", zu:"iBusiness Studies"},
  {key:"economics", en:"Economics", zu:"i-Economics"},
  {key:"geography", en:"Geography", zu:"iGeography"},
  {key:"history", en:"History", zu:"iHistory"},
  {key:"isizulu", en:"isiZulu Home Language", zu:"isiZulu Ulimi Lwasekhaya"},
  {key:"english", en:"English", zu:"iSingisi"},
  {key:"agricultural sciences", en:"Agricultural Sciences", zu:"iSayensi Yezolimo"},
  {key:"information technology", en:"Information Technology", zu:"i-IT"},
  {key:"tourism", en:"Tourism", zu:"iTourism"},
  {key:"life orientation", en:"Life Orientation", zu:"iLife Orientation"},
];

// isiZulu keyword aliases -> subject key, plus intent words
const ZU_SUBJECT_ALIASES = {
  "izibalo":"mathematics","imathematika":"mathematics","imathematics":"mathematics",
  "isayensi yefiziki":"physical sciences","ifiziki":"physical sciences",
  "isayensi yempilo":"life sciences","ibhayoloji":"life sciences",
  "iakhawunti":"accounting","i-accounting":"accounting",
  "ibhizinisi":"business studies",
  "umnotho":"economics",
  "ijografi":"geography",
  "umlando":"history",
  "isizulu":"isizulu",
  "isingisi":"english",
  "ezolimo":"agricultural sciences",
  "ikhompyutha":"information technology",
  "ezokuvakasha":"tourism",
};
const GREETINGS_ZU = ["sawubona","yebo","unjani","sanibonani","ngiyabonga","ngicela","ngicela usizo"];
const GREETINGS_EN = ["hi","hello","hey","good morning","good afternoon","good day"];
const THANKS = ["thanks","thank you","ngiyabonga","siyabonga"];

let selectedSubjects = new Set();
let speaking = false;

function levelFromMark(mark){
  const m=Number(mark); if(!Number.isFinite(m)) return 0;
  if(m>=80)return 7; if(m>=70)return 6; if(m>=60)return 5; if(m>=50)return 4; if(m>=40)return 3; if(m>=30)return 2; return 1;
}
function calculateAPS(marks, includeLO=false){
  let total=0; Object.entries(marks).forEach(([key,val])=>{ if(key==='life orientation' && !includeLO) return; total += levelFromMark(val); }); return total;
}
function extractMarks(text){
  const out={};
  const aliases={maths:'mathematics',math:'mathematics','mathematics':'mathematics','physical sciences':'physical sciences','physics':'physical sciences','life sciences':'life sciences','biology':'life sciences','geography':'geography','history':'history','english':'english','accounting':'accounting','business studies':'business studies','economics':'economics','life orientation':'life orientation','tourism':'tourism','agricultural sciences':'agricultural sciences','information technology':'information technology','computer applications technology':'information technology'};
  for(const [alias,key] of Object.entries(aliases)){
    const re=new RegExp(alias.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*(?:[:=-]|is|at)?\\s*(\\d{1,3})\\s*%?','i');
    const m=text.match(re); if(m) out[key]=Number(m[1]);
  }
  return out;
}
function extractAPS(text){ const m=text.match(/(?:aps|a\.p\.s)\s*(?:is|of|=|:)??\s*(\d{1,2})/i); return m?Number(m[1]):null; }
const CAREER_CATEGORY_I18N = {
  accounting: {
    en:{careers:['Accountant','Auditor','Finance officer'], industry:'This qualification provides the academic foundation for accounting, auditing and finance roles. Actual work depends on the employer, registration requirements (e.g. SAICA/SAIPA) and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['U-Accountant','U-Auditor','Isikhulu sezezimali'], industry:'Le ziqu inikeza isisekelo semfundo yemisebenzi ye-accounting, ye-auditing kanye nezezimali. Umsebenzi wangempela uncike kumqashi, izidingo zokubhaliswa (isb. i-SAICA/SAIPA) kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  it: {
    en:{careers:['IT specialist','Systems analyst','Data/Information professional'], industry:'This qualification provides the academic foundation for IT, systems and information-management roles. Actual work depends on the employer, registration requirements and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Ochwepheshe be-IT','Umhlaziyi wamasistimu','Ongoti wolwazi/imininingwane'], industry:'Le ziqu inikeza isisekelo semfundo yemisebenzi ye-IT, amasistimu kanye nokuphathwa kolwazi. Umsebenzi wangempela uncike kumqashi, izidingo zokubhaliswa kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  law: {
    en:{careers:['Attorney','Legal adviser','Compliance officer'], industry:'This qualification provides the academic foundation for legal practice and compliance roles. Actual work depends on articles/pupillage, admission as an attorney/advocate and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Ummeli','Umeluleki wezomthetho','Isikhulu sokuthobela imithetho'], industry:'Le ziqu inikeza isisekelo semfundo yomsebenzi wezomthetho. Umsebenzi wangempela uncike ekuqeqeshweni (articles), ukubhaliswa njengommeli/i-advocate kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  education: {
    en:{careers:['Teacher','Education officer','Curriculum specialist'], industry:'This qualification provides the academic foundation for teaching and education-support roles. Actual work depends on SACE registration, the phase/subject specialisation and the employer (public or private school).', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Uthisha','Isikhulu sezemfundo','Ongoti wekharikhulamu'], industry:'Le ziqu inikeza isisekelo semfundo yomsebenzi wokufundisa nokusekela imfundo. Umsebenzi wangempela uncike ekubhalisweni kwe-SACE, isigaba/isifundo osikhethile kanye nomqashi (isikole sikahulumeni noma esizimele).', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  tourism: {
    en:{careers:['Tourism professional','Hotel/operations manager','Events professional'], industry:'This qualification provides the academic foundation for tourism, hospitality and events roles. Actual work depends on the employer and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Ochwepheshe bezokuvakasha','Umphathi wehhotela/wemisebenzi','Ochwepheshe bemicimbi'], industry:'Le ziqu inikeza isisekelo semfundo yemisebenzi yezokuvakasha, ukungenisa izivakashi kanye nemicimbi. Umsebenzi wangempela uncike kumqashi nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  agriculture: {
    en:{careers:['Agricultural scientist/technician','Farm or agribusiness manager','Agricultural adviser'], industry:'This qualification provides the academic foundation for agricultural science and agribusiness roles. Actual work depends on the employer, sector (crops/livestock/agribusiness) and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Usosayensi/uchwepheshe wezolimo','Umphathi wepulazi/webhizinisi lezolimo','Umeluleki wezolimo'], industry:'Le ziqu inikeza isisekelo semfundo yemisebenzi yesayensi yezolimo kanye namabhizinisi ezolimo. Umsebenzi wangempela uncike kumqashi, umkhakha (izitshalo/imfuyo/ibhizinisi lezolimo) kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  psychology: {
    en:{careers:['Psychology-related support roles','HR/people roles','Community services'], industry:'This qualification provides the academic foundation for people-facing, HR and community-service roles, or further study towards registration as a psychologist. Actual work depends on the employer and further qualifications.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Imisebenzi esekela isayensi yengqondo','Imisebenzi ye-HR/yabantu','Izinsiza zomphakathi'], industry:'Le ziqu inikeza isisekelo semfundo yemisebenzi yokusiza abantu, i-HR kanye nezinsiza zomphakathi, noma ukuqhubeka nokufunda ukuze ubhaliswe njengodokotela wengqondo. Umsebenzi wangempela uncike kumqashi neziqu ezengeziwe.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  engineering: {
    en:{careers:['Engineering professional','Technical specialist','Project/operations roles'], industry:'This qualification provides the academic foundation for professional engineering practice. Actual work depends on the employer, ECSA registration (Candidate Engineer → Professional Engineer) and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Ongcweti wezobunjiniyela','Ongoti wezobuchwepheshe','Imisebenzi yephrojekthi/yokusebenza'], industry:'Le ziqu inikeza isisekelo semfundo yomsebenzi wobunjiniyela wobungcweti. Umsebenzi wangempela uncike kumqashi, ukubhaliswa kwe-ECSA (Candidate Engineer → Professional Engineer) kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
  general: {
    en:{careers:['Graduate professional','Research/administration roles','Community or industry roles'], industry:'This qualification provides a broad academic foundation for graduate-level roles. Actual work depends on the employer, sector and specialisation.', opportunities:'Job opportunities vary by sector, location, experience and professional registration. Treat this as guidance, not a job guarantee.'},
    zu:{careers:['Umsebenzi wongcweti onezifundo zaseNyuvesi','Imisebenzi yocwaningo/yokuphatha','Imisebenzi yomphakathi noma yemboni'], industry:'Le ziqu inikeza isisekelo esibanzi semfundo yemisebenzi yabaneziqu zaseNyuvesi. Umsebenzi wangempela uncike kumqashi, umkhakha kanye nokukhethiwe kwakho.', opportunities:'Amathuba omsebenzi ahluka ngokwemboni, indawo, ulwazi kanye nokubhaliswa kobungcweti. Lokhu kuwuhlahlandlela, hhayi isiqinisekiso somsebenzi.'},
  },
};

function careerCategory(name){
  const n = name.toLowerCase();
  if(n.includes('account')) return 'accounting';
  if(n.includes('computer')||n.includes('information')) return 'it';
  if(n.includes('law')) return 'law';
  if(n.includes('education')||n.includes('bed')) return 'education';
  if(n.includes('tourism')||n.includes('hospitality')) return 'tourism';
  if(n.includes('agriculture')) return 'agriculture';
  if(n.includes('psychology')) return 'psychology';
  if(n.includes('engineering')) return 'engineering';
  return 'general';
}

/* Renders a salary band ({per_month, per_annum}) using the right currency unit words for the
   current chat language, instead of trusting any pre-baked English text in the data file — this
   is what stops "/month · .../year" leaking into a Zulu (or other) sentence. */
const MONEY_UNITS = {
  en:{month:'/month', year:'/year'},
  zu:{month:'/ngenyanga', year:'/ngonyaka'},
};
function formatZAR(n){ return 'R' + Number(n).toLocaleString('en-ZA'); }
function salaryBandLabel(band){
  const units = MONEY_UNITS[LANG] || MONEY_UNITS.en;
  return `${formatZAR(band.per_month)}${units.month} · ${formatZAR(band.per_annum)}${units.year}`;
}

function adviceForProgramme(p){
  const cat = careerCategory(p.name);
  const bank = CAREER_CATEGORY_I18N[cat];
  const usingFallback = !bank[LANG];
  const copy = bank[LANG] || bank.en; // graceful same-language-labelled fallback, never a silent mix
  const salaryLabel = p.salary
    ? `${t('salary_junior')}: ${salaryBandLabel(p.salary.junior)} · ${t('salary_mid')}: ${salaryBandLabel(p.salary.mid)} · ${t('salary_senior')}: ${salaryBandLabel(p.salary.senior)}`
    : null;
  const opportunities = usingFallback ? `${copy.opportunities} ${t('english_fallback_note')}` : copy.opportunities;
  return {careers: copy.careers, salary: salaryLabel || copy.salary, industry: copy.industry, opportunities};
}

function extractSubjects(text){
  const lower = text.toLowerCase();
  const found = new Set();
  SUBJECT_LIST.forEach(s=>{ if(lower.includes(s.key)) found.add(s.key); });
  Object.entries(ZU_SUBJECT_ALIASES).forEach(([alias,key])=>{ if(lower.includes(alias)) found.add(key); });
  return found;
}

function scoreProgrammes(subjectKeys, aps=null, marks={}){

  return ALL_PROGRAMMES.map(p=>{

    const overlap = p.tags.filter(tag => subjectKeys.has(tag)).length;

    const minAPS = Number(p.aps) || 0;

    const apsOK = aps === null ? true : aps >= minAPS;

    const markLevels = Object.fromEntries(
      Object.entries(marks).map(([k,v]) => [k, levelFromMark(v)])
    );

    const subsText = (p.subs_en || '').toLowerCase();

    let subjectChecks = 0;

    // Mathematics match
    if(subjectKeys.has('mathematics') && /mathematics|maths/.test(subsText)){
      subjectChecks += 3;
    }

    // Physical Sciences match
    if(subjectKeys.has('physical sciences') && /physical sciences|physics/.test(subsText)){
      subjectChecks += 3;
    }

    // Life Sciences match
    if(subjectKeys.has('life sciences') && /life sciences|biology/.test(subsText)){
      subjectChecks += 3;
    }

    // Accounting match
    if(subjectKeys.has('accounting') && /accounting/.test(subsText)){
      subjectChecks += 3;
    }

    // Business Studies match
    if(subjectKeys.has('business studies') && /business studies/.test(subsText)){
      subjectChecks += 3;
    }

    // Economics match
    if(subjectKeys.has('economics') && /economics/.test(subsText)){
      subjectChecks += 3;
    }

    // Geography match
    if(subjectKeys.has('geography') && /geography/.test(subsText)){
      subjectChecks += 3;
    }

    // History match
    if(subjectKeys.has('history') && /history/.test(subsText)){
      subjectChecks += 3;
    }

    // Information Technology match
    if(subjectKeys.has('information technology') && /information technology|computer science|it/.test(subsText)){
      subjectChecks += 3;
    }

    const score =
      overlap * 5 +
      subjectChecks *2 +
      (apsOK ? 4 : -8);

    return {
      p,
      overlap,
      apsOK,
      score,
      markLevels
    };

  })
  .filter(x => x.overlap > 0 || (aps !== null && x.apsOK))
  .sort((a,b) => b.score - a.score)
  .slice(0,5);

}

function subjectLabel(key){
  const s = SUBJECT_LIST.find(x=>x.key===key);
  if(!s) return key;
  return LANG==='zu' ? s.zu : s.en;
}

/* ---- UI ---- */
const chatBody = ()=>document.getElementById('chatBody');
function scrollBottom(){ const b=chatBody(); b.scrollTop = b.scrollHeight; }

function pushUser(text){
  const div = document.createElement('div');
  div.className='msg user';
  div.textContent = text;
  chatBody().appendChild(div);
  scrollBottom();
}
function pushBot(text, html, fromVoice=false){
  const typing = document.createElement('div');
  typing.className='msg bot';
  typing.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  chatBody().appendChild(typing);
  scrollBottom();

  const delay = 420 + Math.random()*380;

  return new Promise(resolve=>{
    setTimeout(async ()=>{
      console.log("Bot reply:", text);
      typing.innerHTML = html ? html : marked.parse(String(text));

      if (window.MathJax) {
        await MathJax.typesetPromise([typing]);
      }
      scrollBottom();
      if(fromVoice && voiceMode && text) speak(text.replace(/<[^>]+>/g,''));     
      resolve();
    }, delay);
  });
}

function escapeHtml(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

function renderChips(){
  const row = document.getElementById('subjectChips');
  if(row) row.innerHTML = '';
}

async function handleRecommend(){
  if(selectedSubjects.size===0){ await pushBot(t('no_subjects')); return; }
  const names = [...selectedSubjects].map(subjectLabel).join(', ');
  pushUser(names);
  await runRecommendation(selectedSubjects, names);
}

async function runRecommendation(subjectKeys, label, aps=null, marks={}){
  const matches = scoreProgrammes(subjectKeys, aps, marks);
  console.log("MaticBot recommendation matches:", matches);
  if(matches.length === 0){
    await pushBot(t('fallback'));
    return;
  }
  const cardsHtml = matches.map(({p, apsOK}) => {
    const why =
      (LANG === 'zu' && p.why_zu)
        ? p.why_zu
        : (p.why_en || p.why_zu || '');
    const status =
      aps === null
        ? ''
        : `<span class="aps ${apsOK ? 'aps-ok' : 'aps-no'}">
            ${t('aps_your')} ${aps} · ${apsOK ? t('aps_meets') : t('aps_below')} ${p.aps}
          </span>`;

    return `
      <div class="rec-card">

        <b>${escapeHtml(p.name)}</b> · ${p.faculty.code}

        ${status}

        <span class="aps">
          ${t('rec_aps')}: ${p.aps} · ${p.years} yrs
        </span>

        <p>
          <strong>${t('rec_why')}</strong>
          ${escapeHtml(why)}
        </p>

      </div>
    `;

  }).join('');

  await pushBot(
    t('rec_intro')(label),
    `${escapeHtml(t('rec_intro')(label))}
     ${aps !== null ? `<p><strong>${t('aps_used')}</strong> ${aps}</p>` : ''}
     ${cardsHtml}`
  );

  await pushBot(t('rec_closing'));
}
async function handleFreeText(raw, fromVoice = false){
  if(!fromVoice){
    voiceMode = false;
  }
  const text=raw.trim(); if(!text) return;
  let detected = null;
if(!langLocked){
  detected = await detectLanguageWithGemini(text);
}

if(detected){
  setLang(detected, {fromUser:false});
  console.log("Detected language:", detected);
  console.log("Current language:", LANG);
}

  pushUser(text);
  const lower=text.toLowerCase();

  // Detect what the user wants to do
  const isRecommendationRequest =
    lower.includes('what can i study') ||
    lower.includes('what should i study') ||
    lower.includes('what can i do with') ||
    lower.includes('which course') ||
    lower.includes('which programme') ||
    lower.includes('which program') ||
    lower.includes('recommend') ||
    lower.includes('suggest a course') ||
    lower.includes('suggest a programme') ||
    lower.includes('suggest a program') ||
    lower.includes('ngingafunda ini') ||
    lower.includes('yini engingayifunda');

  if(
  GREETINGS_EN.some(g => lower === g) ||
  GREETINGS_ZU.some(g => lower === g)
){
  const greetings = t('greeting_reply') ;
  console.log("Greeting detected:", greetings);
  const reply = greetings;
  console.log("GREETING REPLY:", reply);
  await pushBot(reply);
  return;
}

if(
  lower.includes('how are you') ||
  lower.includes('how are u') ||
  lower.includes('unjani') ||
  lower.includes('unjani maticbot')
){
  await pushBot(
    LANG === 'zu'
      ? 'Ngikhona, ngiyabonga! Ngingakusiza ngani namhlanje?'
      : "I'm doing well, thank you! What can I help you with today?"
  );
  return;
}
if(
  lower.includes('who are you') ||
  lower.includes('what are you') ||
  lower.includes('ubani wena') ||
  lower.includes('ungubani')
){
  await pushBot(
    LANG === 'zu'
      ? 'NginguMaticBot, i-chatbot yeNyuvesi yaseZululand (UNIZULU). 🎓 Ngingakusiza ngolwazi ngezinhlelo zokufunda, izifundo, izidingo zokwamukelwa, ama-APS kanye nolunye ulwazi oluhlobene nokufunda e-UNIZULU.'
      : 'I’m MaticBot, the chatbot for the University of Zululand (UNIZULU). 🎓 I can help you with programmes, subjects, admission requirements, APS information, and other study-related information at UNIZULU.'
  );
  return;
}

if(
  lower.includes('what can you do') ||
  lower.includes('what can you help me with') ||
  lower.includes('what can you help me') ||
  lower.includes('help me') ||
  lower.includes('yini ongayenza') ||
  lower.includes('ungangisiza ngani')
){
  await pushBot(
  LANG === 'zu'
    ? 'Ngingakusiza ngolwazi ngeNyuvesi yaseZululand (UNIZULU), okuhlanganisa izinhlelo zokufunda, izifundo, izidingo zokwamukelwa, ama-APS kanye nezincomo zezinhlelo ongazifundela. Yini ongathanda ukuyazi nge-UNIZULU?'
    : 'I can help you with information about the University of Zululand (UNIZULU), including programmes, subjects, admission requirements, APS information, and study recommendations. What would you like to know about UNIZULU?'
  );
  return;
}
  if(THANKS.some(g=>lower.includes(g))){ await pushBot(t('thanks_reply')); return; }
  const marks=extractMarks(text); const explicitAPS=extractAPS(text);
  if(explicitAPS!==null || Object.keys(marks).length>=2){
    const includeLO=document.getElementById('includeLO')?.checked || /including\s+lo|including\s+life orientation|ne-lo|nge-lo|life orientation.*include/i.test(lower);
    const aps=explicitAPS!==null?explicitAPS:calculateAPS(marks,includeLO);
    const found=extractSubjects(text); found.forEach(k=>selectedSubjects.add(k)); renderChips();
    const label=found.size?[...found].map(subjectLabel).join(', '):t('your_marks');
    await runRecommendation(found,label,aps,marks); return;
  }
  let found = new Set();

if(isRecommendationRequest){

  found = extractSubjects(text);

  console.log("Detected subjects:", [...found]);

  found = await detectSubjectsWithGemini(text);

}

if(isRecommendationRequest && found.size > 0){
  found.forEach(k => selectedSubjects.add(k));
  renderChips();

  const label = [...found].map(subjectLabel).join(', ');

  await runRecommendation(found, label, null, {});
  return;
}
if(found.size === 0){
  await askGemini(text, fromVoice);
  return;
}

found.forEach(k=>selectedSubjects.add(k));
renderChips();

const label=[...found].map(subjectLabel).join(', ');

await runRecommendation(found,label,null,{});
}

async function askGemini(message, fromVoice = false){
  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      message: message,
      language: LANG
    })
    });

    const data = await response.json();

    if(data.reply){
      await pushBot(data.reply, null, fromVoice);
    } else {
      await pushBot("Sorry, I couldn't quite get that. Try asking anything relevant to UNIZULU or your studies.");
    }

  } catch(error) {
    console.error("Gemini error:", error);
    await pushBot("VOICE ERROR: "+ error.message);
  }

}
async function detectLanguageWithGemini(message){

  try {

    const response = await fetch('https://maticbots.onrender.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        language: LANG
      })
    });

    const data = await response.json();
    console.log("Language detector response:", data);

    console.log("Gemini detected language:", data.language);

    if(data.language){
      return data.language;
    }

  } catch(error) {

    console.error("Language detection error:", error);

  }

  return null;
}

async function detectSubjectsWithGemini(message){

  try {

    const response = await fetch('http://localhost:3000/detect-subjects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        subjects: SUBJECT_LIST.map(s => s.key)
      })
    });

    const data = await response.json();

    if(data.subjects && Array.isArray(data.subjects)){
      return new Set(data.subjects);
    }

  }catch(error) {

    console.error("Subject detection error:", error);

  }

  return new Set();
}

/* ---- language switching ----
   langLocked is set the moment the learner explicitly picks a language (via a language button
   or either dropdown). Once locked, free-text language auto-detection is disabled, so the
   chatbot keeps replying in the chosen language only until the learner explicitly changes it
   again — it will no longer silently switch language mid-conversation based on typed text. */
let langLocked = false;
function setLang(lang, opts={}){
  const fromUser = opts.fromUser !== false;
  LANG = lang;
  console.log("Lang is now ",LANG);
  if(fromUser) langLocked = true;
  document.querySelectorAll('.lang-btn, .mini-lang-btn').forEach(b=>{ b.classList.toggle('active', b.dataset.lang===lang); });
  const ls=document.getElementById('languageSelect'); if(ls) ls.value=lang;
  const cls=document.getElementById('chatLanguageSelect'); if(cls) cls.value=lang;
  applyI18n();
  renderChips();
 const chatStatus = document.getElementById('chatStatus');
if (chatStatus) {
  chatStatus.textContent = LANG==='zu'
    ? 'Iku-inthanethi · I-Chatbot ye-UNIZULU'
    : `Online · UNIZULU Chatbot · ${LANG_NAMES[LANG]||'English'}`;
  }
}

/* ---- panel open/close ---- */
let chatStarted = false;
function openChat(){
  document.getElementById('chatPanel').classList.add('open');
  document.getElementById('launcher').classList.remove('show');
  if(!chatStarted){
    chatStarted = true;
    (async ()=>{
      await pushBot(t('chat_intro1'));
    })();
  }
}
function closeChat(){ document.getElementById('chatPanel').classList.remove('open'); }
function hideChat(){ document.getElementById('chatPanel').classList.remove('open'); document.getElementById('launcher').classList.add('show'); }

function toggleMaximize(){
  const panel = document.getElementById('chatPanel');
  const btn = document.getElementById('maximizeChat');
  const isMax = panel.classList.toggle('maximized');
  btn.textContent = isMax ? '⤡' : '⤢';
  const title = isMax
    ? (LANG==='zu' ? 'Buyisela usayizi' : 'Restore size')
    : (LANG==='zu' ? 'Khulisa isikrini' : 'Maximize');
  btn.title = title;
  btn.setAttribute('aria-label', title);
  scrollBottom();
}

/* ---- voice: speech recognition + synthesis ---- */
let recognizing = false;
let recognizer = null;
let voiceMode = false;

function setupRecognition(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR) return null;
  const r = new SR();
  r.continuous = false;
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}
function toggleMic(){
  voiceMode = !voiceMode;
  const hint = document.getElementById('voiceHint');
  const micBtn = document.getElementById('micBtn');
  if(!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)){
    pushBot(t('voice_unsupported'));
    return;
  }
  if(recognizing){
    voiceMode = false
    if(recognizer){
      recognizer.stop();
    }
    recognizer && recognizer.stop();
    return;
  }

  recognizer = setupRecognition();
  recognizer.lang = LANG === 'zu' ? 'zu-ZA' :
                  LANG === 'xh' ? 'xh-ZA' :
                  LANG === 'st' ? 'st-ZA' :
                  LANG === 'tn' ? 'tn-ZA' :
                  LANG === 'nso' ? 'nso-ZA' :
                  LANG === 'af' ? 'af-ZA' :
                  LANG === 'ss' ? 'ss-ZA' :
                  LANG === 've' ? 've-ZA' :
                  LANG === 'ts' ? 'ts-ZA' :
                  LANG === 'nr' ? 'nr-ZA' :
                  'en-ZA';
  recognizer.onstart = ()=>{recognizing=true;speaking=true;micBtn.classList.add('listening');hint.classList.add('show');hint.textContent=t('voice_listening');};
  recognizer.onend = ()=>{recognizing = false;speaking = false;micBtn.classList.remove('listening');hint.classList.remove('show');};
  recognizer.onerror = ()=>{ recognizing=false; micBtn.classList.remove('listening'); hint.classList.remove('show'); };
  recognizer.onresult = (e)=>{const text = e.results[0][0].transcript;
    console.log("Voice input:" ,text);
    handleFreeText(text, voiceMode);};
  try{ recognizer.start(); }catch(e){ /* already started */ }}

document.getElementById('micBtn').addEventListener('click', () => {
  console.log("MIC BUTTON CLICKED");
});
window.toggleMic = toggleMic;

function speak(text){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = ({en:'en-ZA',zu:'zu-ZA',xh:'xh-ZA',st:'st-ZA',tn:'tn-ZA',nso:'nso-ZA',af:'af-ZA',ss:'ss-ZA',ve:'ve-ZA',ts:'ts-ZA',nr:'nr-ZA'})[LANG] || 'en-ZA';
  u.rate = 1;
  const voices = window.speechSynthesis.getVoices();
  const prefix=({en:'en',zu:'zu',xh:'xh',st:'st',tn:'tn',nso:'nso',af:'af',ss:'ss',ve:'ve',ts:'ts',nr:'nr'})[LANG]||'en';
  const match=voices.find(v=>v.lang && v.lang.toLowerCase().startsWith(prefix)) || voices.find(v=>v.lang && v.lang.toLowerCase().startsWith('en'));
  if(match) u.voice = match;
  window.speechSynthesis.speak(u);
}

/* wire up event listeners */
document.addEventListener('DOMContentLoaded', async ()=>{
  buildLattice();
  await loadFaculties();
  applyI18n();
  renderChips();

  document.getElementById('launcher').addEventListener('click', openChat);
  document.getElementById('openChatNav').addEventListener('click', openChat);
  document.getElementById('openChatHero').addEventListener('click', openChat);
  document.getElementById('openChatCard').addEventListener('click', openChat);
  document.getElementById('closeChat').addEventListener('click', closeChat);
  document.getElementById('hideChat')?.addEventListener('click', hideChat);
  document.getElementById('maximizeChat')?.addEventListener('click', toggleMaximize);

  document.querySelectorAll('.lang-btn, .mini-lang-btn').forEach(b=>{ b.addEventListener('click', ()=> setLang(b.dataset.lang)); });
  document.getElementById('languageSelect')?.addEventListener('change', e=>setLang(e.target.value));
  document.getElementById('chatLanguageSelect')?.addEventListener('change', e=>setLang(e.target.value));
  document.getElementById('apsRecommend')?.addEventListener('click', async ()=>{
    const value=Number(document.getElementById('apsInput').value);
    if(!value){ await pushBot(t('enter_aps_first')); return; }
    const includeLO=document.getElementById('includeLO')?.checked;
    const label=`${t('aps_word')} ${value}${includeLO?t('lo_included'):t('lo_excluded')}`;
    await pushBot(label);
    await runRecommendation(selectedSubjects,label,value,{});
  });

  const input = document.getElementById('chatInput');

document.getElementById('sendBtn').addEventListener('click', async () => {
  const v = input.value.trim();

  if (!v) return;

  input.value = '';

  await handleFreeText(v);
});

input.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' && !e.shiftKey){
    e.preventDefault();
    const v = input.value;
    input.value='';
    handleFreeText(v);
  }
});
  if('speechSynthesis' in window){
    window.speechSynthesis.onvoiceschanged = ()=>{};
  }
});

})();
