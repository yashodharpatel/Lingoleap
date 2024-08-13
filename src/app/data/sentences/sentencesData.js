
const sentencesData = [
    {
        lessonNumber: 1,
        url: 'lesson-1',
        title: 'Ordering in a Cafe',
        backgroundColor: 'bg-gradient-to-r from-blue-600 to-blue-500',
        backgroundImage: 'bg-curtain',
        sentences:[
            { sentence: 'कृपया मुझे एक कॉफ़ी दीजिए।', pronunciation: 'Krupaya mujhe ek coffee dijiye.' }, // Please give me a coffee.
            { sentence: 'आपका आर्डर क्या है?', pronunciation: 'Aapka order kya hai?' }, // What is your order?
            { sentence: 'मुझे एक चाय मिल सकती है?', pronunciation: 'Mujhe ek chai mil sakti hai?' }, // Can I get a tea?
            { sentence: 'ठंडी द्रिंक कहाँ है?', pronunciation: 'Thandi drink kahan hai?' }, // Where is the cold drink?
            { sentence: 'सैंडविच और बर्गर लाइए।', pronunciation: 'Sandwich aur burger laiye.' }, // Bring a sandwich and a burger.
            { sentence: 'पानी मिलेगा?', pronunciation: 'Paani milega?' }, // Will I get water?
            { sentence: 'बिल कहाँ चुकाऊं?', pronunciation: 'Bill kahan chukaoon?' }, // Where should I pay the bill?
            { sentence: 'टिप दूँ?', pronunciation: 'Tip doon?' }, // Should I give a tip?
            { sentence: 'इसमें शीशा है?', pronunciation: 'Ismein sheesha hai?' }, // Does it have shisha?
            { sentence: 'बदला दो, कृपया।', pronunciation: 'Badla do, krupaya.' }, // Give me change, please.
            { sentence: 'किसी और चीज़ चाहिए?', pronunciation: 'Kisi aur cheez chahiye?' }, // Do you want anything else?
            { sentence: 'बहुत स्वादिष्ट था।', pronunciation: 'Bahut swadisht tha.' }, // It was very delicious.
            { sentence: 'होममेड डिश है?', pronunciation: 'Homemade dish hai?' }, // Is it a homemade dish?
            { sentence: 'स्पाइसी खाना पसंद है।', pronunciation: 'Spicy khana pasand hai.' }, // I like spicy food.
            { sentence: 'मुझे एक मीडियम साइज़ पिज़्ज़ा चाहिए।', pronunciation: 'Mujhe ek medium size pizza chahiye.' }, // I want a medium-sized pizza.
            { sentence: 'मिल्क कॉफ़ी बनाइए, प्लीज़।', pronunciation: 'Milk coffee banaiye, please.' }, // Make a milk coffee, please.
            { sentence: 'ग्रेवी वाला कुरमा लाइए।', pronunciation: 'Gravy wala kurma laiye.' }, // Bring curry with gravy.
            { sentence: 'फास्ट फूड चाहिए मुझे।', pronunciation: 'Fast food chahiye mujhe.' }, // I want fast food.
            { sentence: 'टेक आवे पैक करो।', pronunciation: 'Take away pack karo.' }, // Pack it for take away.
            { sentence: 'डाइन इन का बिल दो।', pronunciation: 'Dine in ka bill do.' }, // Give the bill for dine-in.
            { sentence: 'मेरा कैफ़े लाया जाए।', pronunciation: 'Mera cafe laya jaye.' }, // Bring my cafe.
            { sentence: 'बढ़िया था, धन्यवाद।', pronunciation: 'Badiya tha, dhanyavad.' }, // It was good, thank you.
            { sentence: 'अच्छा लगा, बहुत धन्यवाद।', pronunciation: 'Accha laga, bahut dhanyavad.' }, // I enjoyed it, thank you very much.
            { sentence: 'कितना हुआ?', pronunciation: 'Kitna hua?' }, // How much is it?
            { sentence: 'कैश ले लो।', pronunciation: 'Cash le lo.' }, // Take cash.
            { sentence: 'क्रेडिट कार्ड चलेगा?', pronunciation: 'Credit card chalega?' }, // Can I pay by credit card?
            { sentence: 'डेबिट कार्ड से चुका दो।', pronunciation: 'Debit card se chuka do.' }, // Pay with a debit card.
            { sentence: 'ब्रेकफ़ास्ट में क्या है?', pronunciation: 'Breakfast mein kya hai?' }, // What is there for breakfast?
            { sentence: 'लंच में क्या स्पेशल है?', pronunciation: 'Lunch mein kya special hai?' }, // What is special for lunch?
            { sentence: 'डिनर का मेनू दिखाओ।', pronunciation: 'Dinner ka menu dikhao.' }, // Show the menu for dinner.
            { sentence: 'खुश रहो, धन्यवाद।', pronunciation: 'Khush raho, dhanyavad.' }, // Stay happy, thank you.
            { sentence: 'मैनू का मेनू दिखाइए।', pronunciation: 'Mainu ka menu dikhaiye.' }, // Show me the menu.
        ],
    },
    {
        lessonNumber: 2,
        url: 'lesson-2',
        title: "Greeting People",
        backgroundColor: 'bg-gradient-to-r from-orange-600 to-orange-500',
        backgroundImage: 'bg-circles',
        sentences:[
            { sentence: 'नमस्कार।', pronunciation: 'Namaskar.' }, // Greetings.
            { sentence: 'प्रणाम।', pronunciation: 'Pranam.' }, // Salutations.
            { sentence: 'आप कैसे हैं?', pronunciation: 'Aap kaise hain?' }, // How are you?
            { sentence: 'मैं ठीक हूँ, धन्यवाद।', pronunciation: 'Main theek hoon, dhanyavad.' }, // I am fine, thank you.
            { sentence: 'कैसे हो आप?', pronunciation: 'Kaise ho aap?' }, // How are you?
            { sentence: 'शुभ प्रभात।', pronunciation: 'Shubh Prabhat.' }, // Good morning.
            { sentence: 'शुभ संध्या।', pronunciation: 'Shubh Sandhya.' }, // Good evening.
            { sentence: 'शुभ रात्रि।', pronunciation: 'Shubh Ratri.' }, // Good night.
            { sentence: 'आपका स्वागत है।', pronunciation: 'Aapka swagat hai.' }, // Welcome.
            { sentence: 'हाय।', pronunciation: 'Hay.' }, // Hi.
            { sentence: 'सुप्रभात।', pronunciation: 'Suprabhat.' }, // Good morning.
            { sentence: 'सुसंध्या।', pronunciation: 'Susandhya.' }, // Good evening.
            { sentence: 'आपको मिलकर खुशी हुई।', pronunciation: 'Aapko milkar khushi hui.' }, // Nice to meet you.
            { sentence: 'कैसे चल रहा है?', pronunciation: 'Kaise chal raha hai?' }, // How is it going?
            { sentence: 'धन्यवाद।', pronunciation: 'Dhanyavad.' }, // Thank you.
            { sentence: 'कृपया।', pronunciation: 'Krupaya.' }, // Please.
            { sentence: 'क्षमा करें।', pronunciation: 'Kshama karein.' }, // Excuse me.
            { sentence: 'शुभकामनाएँ।', pronunciation: 'Shubhkaamnayein.' }, // Best wishes.
            { sentence: 'ज़िंदगी कैसी चल रही है?', pronunciation: 'Zindagi kaisi chal rahi hai?' }, // How is life going?
            { sentence: 'मैं ठीक हूँ, शुक्रिया।', pronunciation: 'Main theek hoon, shukriya.' }, // I am fine, thank you.
            { sentence: 'सब कुछ बढ़िया है।', pronunciation: 'Sab kuch badiya hai.' }, // Everything is good.
            { sentence: 'बहुत आभास हुआ।', pronunciation: 'Bahut aabhaas hua.' }, // Nice to meet you.
            { sentence: 'समय कैसा चल रहा है?', pronunciation: 'Samay kaisa chal raha hai?' }, // How is time going?
            { sentence: 'बहुत धन्यवाद।', pronunciation: 'Bahut dhanyavad.' }, // Thank you very much.
            { sentence: 'शुभ सप्ताह।', pronunciation: 'Shubh Saptah.' }, // Have a good week.
            { sentence: 'खुदा हाफ़िज़।', pronunciation: 'Khuda Hafiz.' }, // Goodbye.
            { sentence: 'नमस्ते।', pronunciation: 'Namaste.' }, // Hello.
        ],
    },
    {
        lessonNumber: 3,
        url: 'lesson-3',
        title: 'Describe Yourself',
        backgroundColor: 'bg-gradient-to-r from-lime-600 to-lime-400',
        backgroundImage: 'bg-autumn',
        sentences:[
            { sentence: 'मैं दिल्ली से हूँ।', pronunciation: 'Main Delhi se hoon.' }, // I am from Delhi.
            { sentence: 'मेरा जन्म पहले जनवरी को हुआ था।', pronunciation: 'Mera janm pehle Janvari ko hua tha.' }, // I was born on the first of January.
            { sentence: 'मेरी उम्र पच्चीस साल है।', pronunciation: 'Meri umr pachchis saal hai.' }, // I am twenty-five years old.
            { sentence: 'मैंने इंजीनियरिंग की है।', pronunciation: 'Maine engineering ki hai.' }, // I have studied engineering.
            { sentence: 'मैं IT क्षेत्र में काम करता हूँ।', pronunciation: 'Main IT kshetra mein kaam karta hoon.' }, // I work in the IT sector.
            { sentence: 'मुझे गाने गाना पसंद है।', pronunciation: 'Mujhe gane gana pasand hai.' }, // I like singing songs.
            { sentence: 'मैंने भारतीय संगीत में विशेषज्ञता प्राप्त की है।', pronunciation: 'Maine Bharatiya sangeet mein visheshgyata prapt ki hai.' }, // I have specialized in Indian music.
            { sentence: 'मैं तीन भाषाएँ बोल सकता हूँ: हिन्दी, अंग्रेज़ी, और स्पैनिश।', pronunciation: 'Main teen bhashayen bol sakta hoon: Hindi, Angrezi, aur Spanish.' }, // I can speak three languages: Hindi, English, and Spanish.
            { sentence: 'मैं भारत से हूँ।', pronunciation: 'Main Bharat se hoon.' }, // I am from India.
            { sentence: 'मैं अपने परिवार के साथ रहता हूँ।', pronunciation: 'Main apne parivaar ke saath rahta hoon.' }, // I live with my family.
            { sentence: 'मैंने यहाँ दो साल से रहा हूँ।', pronunciation: 'Maine yahan do saal se raha hoon.' }, // I have been here for two years.
            { sentence: 'मेरा पास बहुत कम समय है।', pronunciation: 'Mera paas bahut kam samay hai.' }, // I have very little time.
            { sentence: 'मैं दिल्ली में रहता हूँ और मैं यहाँ अपने दोस्तों के साथ हूँ।', pronunciation: 'Main Delhi mein rahta hoon aur main yahan apne doston ke saath hoon.' }, // I live in Delhi, and I am here with my friends.
            { sentence: 'मैं यहाँ नौकरी के लिए आया हूँ।', pronunciation: 'Main yahan naukri ke liye aaya hoon.' }, // I am here for a job.
            { sentence: 'मैं एक उच्चतम शिक्षित और सच्चे व्यक्ति हूँ।', pronunciation: 'Main ek uchchhatam shikshit aur sachche vyakti hoon.' }, // I am highly educated and an honest person.
            { sentence: 'मैंने एक किताब लिखी है।', pronunciation: 'Maine ek kitaab likhi hai.' }, // I have written a book.
            { sentence: 'मैंने अपना उच्च शिक्षा विदेश में पूरा किया है।', pronunciation: 'Maine apna uchch shiksha videsh mein poora kiya hai.' }, // I completed my higher education abroad.
            { sentence: 'मैंने तीन महीने का योजना बनाया है।', pronunciation: 'Maine teen mahine ka yojana banaya hai.' }, // I have made a three-month plan.
            { sentence: 'मैं पंद्रह लाख रुपए कमाता हूँ।', pronunciation: 'Main pandrah lakh rupees kamata hoon.' }, // I earn fifteen lakhs rupees.
            { sentence: 'मैंने एक साल में पाँच किताबें पढ़ीं हैं।', pronunciation: 'Maine ek saal mein paanch kitaabein padhi hain.' }, // I have read five books in one year.
            { sentence: 'मैं दस दिन में दो किलो वजन कम किया हूँ।', pronunciation: 'Main das din mein do kilo vajan kam kiya hoon.' }, // I have lost two kilograms in ten days.
            { sentence: 'मेरे पास छह महीने की बचत है।', pronunciation: 'Mere paas chhah mahine ki bachat hai.' }, // I have six months of savings.
            { sentence: 'मैं प्रतिवर्ष दो बार विदेश यात्रा करता हूँ।', pronunciation: 'Main prativarsh do baar videsh yatra karta hoon.' }, // I travel abroad twice a year.
            { sentence: 'मैंने पाँच साल तक एक कंपनी में काम किया है।', pronunciation: 'Maine paanch saal tak ek company mein kaam kiya hai.' }, // I have worked in a company for five years.
            { sentence: 'मैंने दस लाख रुपए का ऋण लिया है।', pronunciation: 'Maine das lakh rupees ka rin liya hai.' }, // I have taken a loan of ten lakhs rupees.
            { sentence: 'मेरे दो बच्चे हैं।', pronunciation: 'Mere do bachche hain.' }, // I have two children.
            { sentence: 'मैंने तीन दिन में तीन किताबें पढ़ीं हैं।', pronunciation: 'Maine teen din mein teen kitaabein padhi hain.' }, // I have read three books in three days.
            { sentence: 'मेरा आजादी दिवस का योजना बना है।', pronunciation: 'Mera Azadi Divas ka yojana bana hai.' }, // I have made plans for Independence Day.
            { sentence: 'मैंने सौ रुपए खोये हैं।', pronunciation: 'Maine sau rupees khoye hain.' }, // I lost one hundred rupees.
            { sentence: 'मैं पंद्रह साल से यहीं रहता हूँ।', pronunciation: 'Main pandrah saal se yahi rahta hoon.' }, // I have been living here for fifteen years.
            { sentence: 'मैं दो हफ्ते से बीमार हूँ।', pronunciation: 'Main do hafto se bimaar hoon.' }, // I have been ill for two weeks.
            { sentence: 'मेरा नया गाड़ी लेने का योजना है।', pronunciation: 'Mera naya gaadi lene ka yojana hai.' }, // I plan to buy a new car.
            { sentence: 'मैंने आज तीन घंटे पढ़ाई की है।', pronunciation: 'Maine aaj teen ghante padhai ki hai.' }, // I studied for three hours today.
            { sentence: 'मैंने बीस साल से यहीं काम कर रहा हूँ।', pronunciation: 'Maine bees saal se yahi kaam kar raha hoon.' }, // I have been working here for twenty years.
            { sentence: 'मैं दो दिन में छह बजे उठता हूँ।', pronunciation: 'Main do din mein chhah baje uthta hoon.' }, // I wake up at six o'clock in two days.
            { sentence: 'मैंने पाँच लाख रुपए की बचत की है।', pronunciation: 'Maine paanch lakh rupees ki bachat ki hai.' }, // I have saved five lakh rupees.
            { sentence: 'मैं पूरे साल में एक महीने के लिए बाहर गया हूँ।', pronunciation: 'Main poore saal mein ek mahine ke liye bahar gaya hoon.' }, // I went out for a month in the whole year.
            { sentence: 'मेरा सातवाँ विवाह वर्षहै।', pronunciation: 'Mera saatwaan vivah varsha hai.' }, // It is my seventh wedding anniversary.
            { sentence: 'मैंने तीन हफ्ते में तीन किताबें लिखीं हैं।', pronunciation: 'Maine teen hafto mein teen kitaabein likhi hain.' }, // I have written three books in three weeks.
            { sentence: 'मैंने तीस रुपए का खर्च किया है।', pronunciation: 'Maine tees rupees ka kharch kiya hai.' }, // I spent thirty rupees.
            { sentence: 'मैंने अब तक तीन सौ पाँचतालिस पत्र लिखे हैं।', pronunciation: 'Maine ab tak teen sau panchatlis patra likhe hain.' }, // I have written three hundred and forty-five letters so far.
            { sentence: 'मैं अर्जुन हूँ।', pronunciation: 'Main Arjun hoon.' }, // I am Arjun.
        ]
    },
    {
        lessonNumber: 4,
        url: 'lesson-4',
        title: 'Asking for Directions',
        backgroundColor: 'bg-gradient-to-r from-[#c20323] to-[#ef233c]',
        backgroundImage: 'bg-i-like-food',
        sentences:[
            { sentence: 'मुझे यहाँ कैसे पहुँचा जा सकता है?', pronunciation: 'Mujhe yahan kaise pahuncha ja sakta hai?' }, // How can I reach here?
            { sentence: 'यहाँ सबसे नजदीक का बस स्टैंड कहाँ है?', pronunciation: 'Yahan sabse najdeek ka bus stand kahan hai?' }, // Where is the nearest bus stand?
            { sentence: 'सड़क का विवरण दीजिए।', pronunciation: 'Sarak ka vivaran dijiye' }, // Please give me directions to the street.
            { sentence: 'मुझे नजदीकी पार्क कैसे मिलेगा?', pronunciation: 'Mujhe najdeeki park kaise milega?' }, // How can I find the nearby park?
            { sentence: 'क्या यहाँ कोई मेट्रो स्टेशन है?', pronunciation: 'Kya yahan koi metro station hai?' }, // Is there a metro station here?
            { sentence: 'कृपया, बाजार का मार्गदर्शन करें।', pronunciation: 'Krupaya, bazaar ka margdarshan karein' }, // Please guide me to the market.
            { sentence: 'मेरे लिए सबसे सुरक्षित रास्ता कौन-सा है?', pronunciation: 'Mere liye sabse surakshit rasta kaun-sa hai?' }, // Which is the safest route for me?
            { sentence: 'यहाँ के आस-पास के प्रमुख स्थानों का सूचीबद्ध मार्गदर्शन करें।', pronunciation: 'Yahan ke aas-paas ke pramukh sthanon ka suchibaddh margdarshan karein' }, // Provide directions to the major places around here.
            { sentence: 'आप यहाँ से बैंक कैसे पहुँच सकते हैं?', pronunciation: 'Aap yahan se bank kaise pahunch sakte hain?' }, // How can you reach the bank from here?
            { sentence: 'इस रास्ते पर सफलता के लिए कौन सा मार्ग सर्वश्रेष्ठ है?', pronunciation: 'Is raaste par safalta ke liye kaun sa marg sarvashreshth hai?' }, // Which route is the best for success on this road?
            { sentence: 'क्या आप मुझे सड़क के पार के खास दुकानों का पता बता सकते हैं?', pronunciation: 'Kya aap mujhe sarak ke paar ke khaas dukaanon ka pata bata sakte hain?' }, // Can you tell me the address of special shops across the road?
            { sentence: 'मेरे लिए नजदीकी पुस्तकालय कहाँ है?', pronunciation: 'Mere liye najdeeki pustakalay kahan hai?' }, // Where is the nearby library for me?
            { sentence: 'इस जगह से रेलवे स्टेशन कितनी दूर है?', pronunciation: 'Is jagah se railway station kitni door hai?' }, // How far is the railway station from this place?
            { sentence: 'क्या आप मुझे यहाँ से राजा बाजार का रास्ता दिखा सकते हैं?', pronunciation: 'Kya aap mujhe yahan se Raja Bazar ka rasta dikha sakte hain?' }, // Can you show me the way to Raja Bazar from here?
            { sentence: 'इस बड़े पर्वत को चढ़ने का सही तरीका क्या है?', pronunciation: 'Is bade parvat ko chadhne ka sahi tareeka kya hai?' }, // What is the right way to climb this big mountain?
            { sentence: 'क्या आप मुझे यहाँ से सफ़लता की ऊँचाई तक पहुँचने का रास्ता दिखा सकते हैं?', pronunciation: 'Kya aap mujhe yahan se safalta ki unchai tak pahunchne ka rasta dikha sakte hain?' }, // Can you show me the way to reach the height of success from here?
            { sentence: 'इस छोटे गाँव को कैसे पहुँचा जा सकता है?', pronunciation: 'Is chhote gaav ko kaise pahuncha ja sakta hai?' }, // How can one reach this small village?
            { sentence: 'कृपया, मुझे नजदीकी स्टेशन बताएं।', pronunciation: 'Krupaya, mujhe najdeeki station bataen.' }, // Please tell me the nearby station.
            { sentence: 'इस स्थान से सबसे तेज़ रास्ता कौन-सा है?', pronunciation: 'Is sthan se sabse tez raasta kaun-sa hai?' }, // Which is the fastest route from this place?
            { sentence: 'क्या यहाँ पार्किंग की सुविधा है?', pronunciation: 'Kya yahan parking ki suvidha hai?' }, // Is there a parking facility here?
            { sentence: 'इस चौराहे पर कौन-कौन से बड़े दुकानें हैं?', pronunciation: 'Is chaurahae par kaun-kaun se bade dukaanen hain?' }, // Which big shops are there at this intersection?
            { sentence: 'कृपया, मुझे सफर के लिए सर्वश्रेष्ठ रास्ता बताएं।', pronunciation: 'Krupaya, mujhe safar ke liye sarvashreshth raasta bataen.' }, // Please tell me the best route for the journey.
            { sentence: 'यहाँ से सबसे करीबी बस स्टैंड कितना दूर है?', pronunciation: 'Yahan se sabse kareebi bus stand kitna door hai?' }, // How far is the nearest bus stand from here?
            { sentence: 'मेरे लिए सबसे सुरक्षित रास्ता बताएं।', pronunciation: 'Mere liye sabse surakshit rasta bataen.' }, // Tell me the safest route for me.
            { sentence: 'क्या इस इलाके में एक हस्पताल है?', pronunciation: 'Kya is ilake mein ek hospital hai?' }, // Is there a hospital in this area?
            { sentence: 'मुझे यहाँ से निकलने का सबसे शीघ्र रास्ता दिखाएं।', pronunciation: 'Mujhe yahan se nikalne ka sabse sheeghra raasta dikhayen.' }, // Show me the quickest way to exit from here.
            { sentence: 'इस स्थान से नजदीकी बूटिक्स कहाँ हैं?', pronunciation: 'Is sthan se najdeeki boutiques kahan hain?' }, // Where are the nearby boutiques from this place?
            { sentence: 'आप यहाँ से सड़क के दूसरे पक्ष कैसे पहुँच सकते हैं?', pronunciation: 'Aap yahan se sarak ke doosre paksh kaise pahunch sakte hain?' }, // How can you reach the other side of the road from here?
            { sentence: 'मुझे यहाँ से सबसे नजदीकी बंदूक की दुकान कहाँ मिलेगी?', pronunciation: 'Mujhe yahan se sabse najdeeki bandook ki dukaan kahan milegi?' }, // Where can I find the nearest gun store from here?
            { sentence: 'क्या इस जगह के चारों ओर एक पार्क है?', pronunciation: 'Kya is jagah ke charon or ek park hai?' }, // Is there a park around this place?
            { sentence: 'क्या आप मुझे इस स्थान का मार्गदर्शन कर सकते हैं?', pronunciation: 'Kya aap mujhe is sthan ka margdarshan kar sakte hain?' }, // Can you guide me to this place?
        ]
    }
]

export default sentencesData;