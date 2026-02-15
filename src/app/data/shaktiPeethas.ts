export interface ShaktiPeetha {
  id: number;
  name: string;
  location: string;
  state: string;
  bodyPart: string;
  description: string;
  mantra: string;
  imageUrl?: string;
  shloka?: string;
}

export const shaktiPeethas: ShaktiPeetha[] = [
  {
    id: 1,
    name: "Kamakhya",
    location: "Guwahati",
    state: "Assam",
    bodyPart: "Yoni (Womb)",
    description: "The most sacred Shakti Peetha where the womb of Sati fell. The temple celebrates the divine feminine energy and the power of creation.",
    mantra: "ॐ कामाख्यायै नमः",
    imageUrl: "https://i.pinimg.com/1200x/f6/49/13/f6491310014355de546f01185b1ed95b.jpg"
  },
  {
    id: 2,
    name: "Kalighat",
    location: "Kolkata",
    state: "West Bengal",
    bodyPart: "Right toe",
    description: "Where Maa Kali resides in her fierce form, blessing devotees with protection and liberation from worldly attachments.",
    mantra: "ॐ कालिकायै नमः",
    imageUrl: "https://i.pinimg.com/736x/fa/01/b3/fa01b30026b62b8c88f1bb80c8e863a5.jpg"
  },
  {
    id: 3,
    name: "Vishalakshi",
    location: "Varanasi",
    state: "Uttar Pradesh",
    bodyPart: "Ear rings",
    description: "In the eternal city of Kashi, where the earrings fell, Maa grants divine vision and wisdom to all seekers.",
    mantra: "ॐ विशालाक्ष्यै नमः",
    imageUrl: "https://i.pinimg.com/1200x/b8/b7/4b/b8b74bd5d1609f064601bcc647fa310a.jpg"
  },
  {
    id: 4,
    name: "Jwala Ji",
    location: "Kangra",
    state: "Himachal Pradesh",
    bodyPart: "Tongue",
    description: "The eternal flame temple where fire burns without fuel, representing the divine speech and power of transformation.",
    mantra: "ॐ ज्वालामुखी नमः",
    imageUrl: "https://i.pinimg.com/736x/b5/db/f4/b5dbf41e132353d93866c825a367ec21.jpg"
  },
  {
    id: 5,
    name: "Vaishno Devi",
    location: "Katra",
    state: "Jammu & Kashmir",
    bodyPart: "Arms",
    description: "The cave shrine in the Trikuta mountains where Maa resides in three forms - Mahakali, Mahalakshmi, and Mahasaraswati.",
    mantra: "ॐ वैष्णो देव्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/75/ba/55/75ba550590123802fa8641e73507d190.jpg"
  },
  {
    id: 6,
    name: "Chintpurni",
    location: "Una",
    state: "Himachal Pradesh",
    bodyPart: "Feet",
    description: "The wish-fulfilling goddess who removes all worries and anxieties, blessing devotees with peace of mind.",
    mantra: "ॐ चिन्तपूर्णी नमः",
    imageUrl: "https://i.pinimg.com/736x/54/63/35/546335c1f1d402609920696a11c8095f.jpg"
  },
  {
    id: 7,
    name: "Chamunda Devi",
    location: "Dharamshala",
    state: "Himachal Pradesh",
    bodyPart: "Hair",
    description: "The fierce protector who destroyed demons Chanda and Munda, granting courage and removing obstacles.",
    mantra: "ॐ चामुण्डायै नमः",
    imageUrl: "https://i.pinimg.com/736x/ec/71/c6/ec71c6d7829ed9d02d4e6523feaebb3e.jpg"
  },
  {
    id: 8,
    name: "Mansa Devi",
    location: "Haridwar",
    state: "Uttarakhand",
    bodyPart: "Crown",
    description: "At the foothills of Shivalik ranges, the goddess who fulfills all desires of sincere devotees.",
    mantra: "ॐ मनसा देव्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/57/cc/3a/57cc3a46e984ba1607b6a65135888311.jpg"
  },
  {
    id: 9,
    name: "Naina Devi",
    location: "Bilaspur",
    state: "Himachal Pradesh",
    bodyPart: "Eyes",
    description: "Where the eyes of Sati fell, granting devotees divine vision and protection from evil eye.",
    mantra: "ॐ नयना देव्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/c6/37/cb/c637cb16a4d9b380112074607e17d50c.jpg"
  },
  {
    id: 10,
    name: "Hinglaj",
    location: "Balochistan",
    state: "Pakistan",
    bodyPart: "Cranium",
    description: "The head of Sati fell here, one of the most ancient and revered Shakti Peethas, symbolizing supreme consciousness.",
    mantra: "ॐ हिंगलाज भवान्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/2c/bd/50/2cbd50eb96b6ce1561f2c3e2780d3876.jpg"
  },
  {
    id: 11,
    name: "Sharada Peeth",
    location: "Neelum Valley",
    state: "Kashmir",
    bodyPart: "Right hand",
    description: "The ancient seat of learning and wisdom, where Goddess Saraswati blesses with knowledge.",
    mantra: "ॐ शारदायै नमः",
    imageUrl: "https://i.pinimg.com/736x/f3/95/9f/f3959f6696c9991d7520803e7d0d9fa1.jpg"
  },
  {
    id: 12,
    name: "Kanchi Kamakshi",
    location: "Kanchipuram",
    state: "Tamil Nadu",
    bodyPart: "Waist",
    description: "One of the holiest shrines in South India, where the goddess sits in a peaceful posture blessing devotees.",
    mantra: "ॐ कामाक्षी नमः",
    imageUrl: "https://i.pinimg.com/736x/9a/31/01/9a3101e7c4bd61c34497c8276d196eb9.jpg"
  },
  {
    id: 13,
    name: "Meenakshi",
    location: "Madurai",
    state: "Tamil Nadu",
    bodyPart: "Right shoulder",
    description: "The fish-eyed goddess who rules Madurai, representing beauty, grace and supreme sovereignty.",
    mantra: "ॐ मीनाक्ष्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/05/71/b6/0571b614126816962ec324f476cc40ff.jpg"
  },
  {
    id: 14,
    name: "Bhramari Devi",
    location: "Jalukbari",
    state: "Assam",
    bodyPart: "Left leg",
    description: "The goddess who manifests as the cosmic sound, destroying all negativity with divine vibrations.",
    mantra: "ॐ भ्रामर्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/b9/8b/21/b98b2150badc244c61017c8ba07d6b04.jpg"
  },
  {
    id: 15,
    name: "Kanyakumari",
    location: "Kanyakumari",
    state: "Tamil Nadu",
    bodyPart: "Back",
    description: "At the southern tip where three oceans meet, the virgin goddess grants blessings and purity.",
    mantra: "ॐ कुमारी देव्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/de/2b/9a/de2b9aa84814f1f601f9040f40b4c875.jpg"
  },
  {
    id: 16,
    name: "Avanti",
    location: "Ujjain",
    state: "Madhya Pradesh",
    bodyPart: "Upper lip",
    description: "In the ancient city of Ujjain, where the goddess blesses with divine speech and righteous conduct.",
    mantra: "ॐ अवन्त्यै नमः",
    shloka: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तुते॥"
  },
  {
    id: 17,
    name: "Ujjaini",
    location: "Ujjain",
    state: "Madhya Pradesh",
    bodyPart: "Elbow",
    description: "Another sacred manifestation in Ujjain, representing strength and support.",
    mantra: "ॐ उज्जयिन्यै नमः",
    shloka: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"
  },
  {
    id: 18,
    name: "Ambaji",
    location: "Banaskantha",
    state: "Gujarat",
    bodyPart: "Heart",
    description: "The mother goddess whose heart fell here, spreading infinite love and compassion.",
    mantra: "ॐ अम्बायै नमः",
    imageUrl: "https://i.pinimg.com/736x/f4/a6/82/f4a682b14f46a23bf33c9eb8393f581a.jpg"
  },
  {
    id: 19,
    name: "Arasuri Ambaji",
    location: "Arasur",
    state: "Gujarat",
    bodyPart: "Thigh",
    description: "A powerful manifestation of the mother goddess, granting strength and stability.",
    mantra: "ॐ आरसुरी नमः",
    shloka: "सर्वस्वरूपे सर्वेशे सर्वशक्तिसमन्विते। भयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तुते॥"
  },
  {
    id: 20,
    name: "Yogmaya",
    location: "Mehrauli",
    state: "Delhi",
    bodyPart: "Neck",
    description: "The goddess of divine illusion who protects devotees and reveals ultimate truth.",
    mantra: "ॐ योगमायायै नमः",
    shloka: "ॐ जयन्ती मङ्गला काली भद्रकाली कपालिनी। दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तुते॥"
  },
  {
    id: 21,
    name: "Mahakali",
    location: "Pavagadh",
    state: "Madhya Pradesh",
    bodyPart: "Upper teeth",
    description: "The fierce protector atop the sacred hill, destroying all evil and blessing with fearlessness.",
    mantra: "ॐ महाकाल्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/f4/d1/b8/f4d1b8c8cbfb99bdb2aa398b097d6b04.jpg"
  },
  {
    id: 22,
    name: "Tripura Sundari",
    location: "Udaipur",
    state: "Tripura",
    bodyPart: "Right foot",
    description: "The beautiful goddess of the three worlds, granting beauty, prosperity and divine grace.",
    mantra: "ॐ त्रिपुरसुन्दर्यै नमः",
    shloka: "शरणागतदीनार्तपरित्राणपरायणे। सर्वस्यार्तिहरे देवि नारायणि नमोऽस्तुते॥"
  },
  {
    id: 23,
    name: "Biraja",
    location: "Jajpur",
    state: "Odisha",
    bodyPart: "Navel",
    description: "The goddess who purifies all sins, at the sacred confluence of rivers.",
    mantra: "ॐ बिरजायै नमः",
    shloka: "सर्वबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि। एवमेव त्वया कार्यमस्मद्वैरिविनाशनम्॥"
  },
  {
    id: 24,
    name: "Mangala Devi",
    location: "Gaya",
    state: "Odisha",
    bodyPart: "Left breast",
    description: "The auspicious goddess who grants prosperity and removes all inauspiciousness.",
    mantra: "ॐ मङ्गलायै नमः",
    shloka: "रोगानशेषानपहंसि तुष्टा रुष्टा तु कामान् सकलानभीष्टान्। त्वामाश्रितानां न विपन्नराणां त्वामाश्रिता ह्याश्रयतां प्रयान्ति॥"
  },
  {
    id: 25,
    name: "Bhadra Kali",
    location: "Kurukshetra",
    state: "Haryana",
    bodyPart: "Left ankle",
    description: "Where the great battle of Mahabharata was fought, the protective goddess resides.",
    mantra: "ॐ भद्रकाल्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/6a/f4/9f/6af49f78aab84914710fba1e4f5ba3ae.jpg"
  },
  {
    id: 26,
    name: "Jayanti",
    location: "Chittagong",
    state: "Bangladesh",
    bodyPart: "Left thigh",
    description: "The goddess of victory who grants success in all righteous endeavors.",
    mantra: "ॐ जयन्त्यै नमः",
    shloka: "त्वं वैष्णवी शक्तिरनन्तवीर्या विश्वस्य बीजं परमासि माया। सम्मोहितं देवि समस्तमेतत् त्वं वै प्रसन्ना भुवि मुक्तिहेतुः॥"
  },
  {
    id: 27,
    name: "Sugandha",
    location: "Shikarpur",
    state: "Bangladesh",
    bodyPart: "Nose",
    description: "The fragrant goddess whose divine presence purifies and sanctifies.",
    mantra: "ॐ सुगन्धायै नमः",
    shloka: "विद्यासु शास्त्रेषु विवेकदीप्तौ महाव्रतेषु श्रमदानसम्पत्सु। त्वामाश्रितानां न च कल्पयन्ति त्वामाश्रिता ह्याश्रयतां प्रयान्ति॥"
  },
  {
    id: 28,
    name: "Jessoreswari",
    location: "Jessore",
    state: "Bangladesh",
    bodyPart: "Palm",
    description: "The goddess who blesses with generosity and the power to give.",
    mantra: "ॐ यशोरेश्वर्यै नमः",
    shloka: "पत्नीं मित्रं सखीं माता पित्रुत्वमपि या गता। त्वत्प्रसादाद्भवन्त्येते निःश्रेयसकरा नृणाम्॥"
  },
  {
    id: 29,
    name: "Karna",
    location: "Karnavati",
    state: "Maharashtra",
    bodyPart: "Ears",
    description: "Where the ears fell, the goddess listens to all prayers with compassion.",
    mantra: "ॐ कर्णायै नमः",
    shloka: "देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥"
  },
  {
    id: 30,
    name: "Ratnavali",
    location: "Hooghly",
    state: "West Bengal",
    bodyPart: "Right shoulder",
    description: "The goddess adorned with divine jewels, granting wealth and prosperity.",
    mantra: "ॐ रत्नवाल्यै नमः",
    shloka: "प्रचण्डदैत्यदर्पघ्ने चण्डिके प्रणताय मे। चण्डिके सततं युद्धे जयमुल्का कुरुष्व मे॥"
  },
  {
    id: 31,
    name: "Mithila",
    location: "Janakpur",
    state: "Bihar",
    bodyPart: "Left shoulder",
    description: "In the land of Sita, where the goddess blesses with purity and devotion.",
    mantra: "ॐ मैथिल्यै नमः",
    shloka: "विद्याधरानां भवनं भवनं भवतां प्रभो। विधेहि देवि कल्याणं विधेहि परमं पदम्॥"
  },
  {
    id: 32,
    name: "Sri Sailam",
    location: "Kurnool",
    state: "Andhra Pradesh",
    bodyPart: "Neck",
    description: "On the sacred Srisailam hills, where Shiva and Shakti reside together.",
    mantra: "ॐ श्रीशैलायै नमः",
    shloka: "शूलेन पाहि नो देवि पाहि खड्गेन चाम्बिके। घण्टास्वनेन नः पाहि चापज्यानिःस्वनेन च॥"
  },
  {
    id: 33,
    name: "Bhadrakali",
    location: "Wayanad",
    state: "Kerala",
    bodyPart: "Upper teeth",
    description: "The fierce protector of Kerala, destroying all evil and blessing devotees.",
    mantra: "ॐ भद्रकाल्यै नमः",
    shloka: "प्राच्यां रक्ष प्रतीच्यां च दाक्षिणात्यां तथोत्तरे। ज्वालाकरालं तत्तेजः प्रचण्डं पातु मां प्रभो॥"
  },
  {
    id: 34,
    name: "Kollur Mookambika",
    location: "Udupi",
    state: "Karnataka",
    bodyPart: "Sacral vertebrae",
    description: "The goddess who grants speech to the mute and blesses with divine knowledge.",
    mantra: "ॐ मूकाम्बिकायै नमः",
    shloka: "इन्द्राणीं शाकिनीं चैव ब्रह्माणीं च तथोत्तमाम्। वाराहीं वैष्णवीं चैव कुम्भाणीं च यशस्विनीम्॥"
  },
  {
    id: 35,
    name: "Manasa",
    location: "Bankura",
    state: "West Bengal",
    bodyPart: "Left cheek",
    description: "The serpent goddess who protects from poison and grants healing.",
    mantra: "ॐ मनसायै नमः",
    imageUrl: "https://i.pinimg.com/736x/b3/30/28/b330280d8f02f58a19bdfad57ae747e5.jpg"
  },
  {
    id: 36,
    name: "Kamakshi",
    location: "Kanchipuram",
    state: "Tamil Nadu",
    bodyPart: "Stomach",
    description: "The goddess whose loving gaze fulfills all desires of devotees.",
    mantra: "ॐ कामाक्ष्यै नमः",
    shloka: "नमस्ते रुद्ररूपायै नमस्ते मधुमर्दिनि। नमः कैटभहारिण्यै नमस्ते महिषार्दिनि॥"
  },
  {
    id: 37,
    name: "Baglamukhi",
    location: "Pitambara Peeth",
    state: "Madhya Pradesh",
    bodyPart: "Forehead",
    description: "The goddess who paralyzes enemies and protects devotees from adversaries.",
    mantra: "ॐ बगलामुख्यै नमः",
    shloka: "नमो देव्यै महादेव्यै शिवायै सततं नमः। नमः प्रकृत्यै भद्रायै नियताः प्रणताः स्म ताम्॥"
  },
  {
    id: 38,
    name: "Indrakshi",
    location: "Anuradhapura",
    state: "Sri Lanka",
    bodyPart: "Lower lip",
    description: "The goddess with divine eyes who grants vision and clarity.",
    mantra: "ॐ इन्द्राक्ष्यै नमः",
    shloka: "सृष्टिस्थितिविनाशानां शक्तिभूते सनातनि। गुणाश्रये गुणमये नारायणि नमोऽस्तुते॥"
  },
  {
    id: 39,
    name: "Ugratara",
    location: "Tarapith",
    state: "Assam",
    bodyPart: "Left hand",
    description: "The fierce form of Tara who grants liberation and removes all fears.",
    mantra: "ॐ उग्रतारायै नमः",
    shloka: "शरण्ये त्र्यम्बके देवि नारायणि नमोऽस्तुते। सर्वस्वरूपे सर्वेशे सर्वशक्तिसमन्विते॥"
  },
  {
    id: 40,
    name: "Dakshayani",
    location: "Kannur",
    state: "Kerala",
    bodyPart: "Right heel",
    description: "The original Sati, daughter of Daksha, who blazes with divine shakti.",
    mantra: "ॐ दाक्षायण्यै नमः",
    shloka: "भयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तुते। प्रसीद देवि विश्वार्ते प्रसीद परमेश्वरि॥"
  },
  {
    id: 41,
    name: "Phullara",
    location: "Attabira",
    state: "West Bengal",
    bodyPart: "Upper jaw",
    description: "The blossoming goddess who grants beauty and prosperity like flowers.",
    mantra: "ॐ फुल्लारायै नमः",
    shloka: "त्वमेका जगतः सर्वं कृत्स्नं भर्तृत्वमप्यथ। त्वया जगदिदं सर्वं भूतं भव्यं भविष्यति॥"
  },
  {
    id: 42,
    name: "Kiriteshwari",
    location: "Murshidabad",
    state: "West Bengal",
    bodyPart: "Crown",
    description: "The crowned goddess who grants sovereignty and divine authority.",
    mantra: "ॐ किरीटेश्वर्यै नमः",
    shloka: "या श्रद्धया या च दया या च तुष्टिः क्षमा च या। लज्जा पुष्टिस्तथा चैव त्वमेव मतिरात्मनः॥"
  },
  {
    id: 43,
    name: "Gandaki Chandi",
    location: "Gandaki",
    state: "Nepal",
    bodyPart: "Both feet",
    description: "By the sacred Gandaki river, the goddess grants spiritual progress.",
    mantra: "ॐ गण्डकी चण्डिकायै नमः",
    shloka: "कालरात्रिर्महारात्रिर्मोहरात्रिश्च दारुणा। त्वमेव रात्रिः स्वापान्ता शिवा तु प्रसन्नासुखोदया॥"
  },
  {
    id: 44,
    name: "Chhinnamasta",
    location: "Rajrappa",
    state: "Jharkhand",
    bodyPart: "Chest",
    description: "The self-decapitated goddess who represents supreme sacrifice and kundalini power.",
    mantra: "ॐ छिन्नमस्तायै नमः",
    shloka: "त्वं गौरी हिमवतःपत्नी त्वं विष्णुपत्नी ब्रह्मपत्नी च वेधसः। आदित्यपत्नी तव कर्म सर्वं जगद्विचित्रं जगतः प्ररोहः॥"
  },
  {
    id: 45,
    name: "Bahula",
    location: "Ketugram",
    state: "West Bengal",
    bodyPart: "Left arm",
    description: "The abundant goddess who grants prosperity and removes poverty.",
    mantra: "ॐ बहुलायै नमः",
    shloka: "विद्यासु शास्त्रेषु विवेकदीप्तौ महाव्रतेषु श्रमदानसम्पत्सु। नारायणि त्वं परमा गतिः त्वं विभूतिमतां च पदं पवित्रम्॥"
  },
  {
    id: 46,
    name: "Ujjayini Mahalakshmi",
    location: "Ujjain",
    state: "Madhya Pradesh",
    bodyPart: "Chest",
    description: "The goddess of wealth and prosperity in the sacred city of Ujjain.",
    mantra: "ॐ उज्जयिनी महालक्ष्म्यै नमः",
    shloka: "त्वमेव विश्वं भुवनानि सर्वाण्यप्यन्तरात्मा सकलानुसन्धिः। लक्ष्मीः क्रिया कारणमेव तस्मात् त्वं सर्वमेतत्त्रिगुणात्मकं च॥"
  },
  {
    id: 47,
    name: "Kapurthala Devi",
    location: "Kapurthala",
    state: "Punjab",
    bodyPart: "Lower back",
    description: "The goddess who supports and strengthens devotees like the backbone.",
    mantra: "ॐ कपूरथला देव्यै नमः",
    shloka: "त्वं वेदवेद्या त्वमस्था त्वमेव परब्रह्मणे स्वयंज्योतिः। ज्ञानदाता च ज्ञानगम्या त्वं ज्ञानमेव परब्रह्म त्वमेव॥"
  },
  {
    id: 48,
    name: "Prayag",
    location: "Prayagraj",
    state: "Uttar Pradesh",
    bodyPart: "Fingers",
    description: "At the sacred confluence, where the goddess blesses with spiritual merit.",
    mantra: "ॐ प्रयागायै नमः",
    shloka: "तारिणी दुर्गसंसारसागरस्य नमोऽस्तुते। नमस्ते देवदेवेशि नमस्ते मधुसूदिनि॥"
  },
  {
    id: 49,
    name: "Shondesh",
    location: "Chandranath Hill",
    state: "Bangladesh",
    bodyPart: "Right arm",
    description: "The goddess who grants strength and the power to act righteously.",
    mantra: "ॐ शोन्देश्यै नमः",
    shloka: "नमामि त्वां महादेवीं महाभयविनाशिनीम्। महादुर्गप्रशमनीं महाकारुण्यरूपिणीम्॥"
  },
  {
    id: 50,
    name: "Manibandh",
    location: "Pushkar",
    state: "Rajasthan",
    bodyPart: "Wrist",
    description: "By the sacred Pushkar lake, the goddess adorned with divine ornaments.",
    mantra: "ॐ मणिबन्धायै नमः",
    shloka: "सर्वाबाधाविनिर्मुक्तो धनधान्यसुतान्वितः। मनुष्यो मत्प्रसादेन भविष्यति न संशयः॥"
  },
  {
    id: 51,
    name: "Purnagiri",
    location: "Champawat",
    state: "Uttarakhand",
    bodyPart: "Navel",
    description: "The complete goddess who represents wholeness and fulfillment of all desires.",
    mantra: "ॐ पूर्णगिर्यै नमः",
    imageUrl: "https://i.pinimg.com/736x/3c/6c/5a/3c6c5a170c916f0fe06dde8db6ee8dbf.jpg"
  }
];
