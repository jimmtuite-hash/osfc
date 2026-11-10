export interface ParagraphItem {
  number: number;
  section: 'intro' | 'rule' | 'constitutions' | 'customary' | 'conclusion';
  chapterOrPart: string;
  title?: string;
  quote?: {
    text: string;
    source: string;
  };
  content: string;
}

export interface DayReflection {
  day: number;
  reading: string;
  paragraphs: number[];
  theme: string;
  reflection: string;
  practice: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface IndexTopic {
  topic: string;
  paragraphs: string;
}

export interface ObservanceRow {
  rhythm: string;
  practices: string[];
}

export const OBSERVANCE_MATRIX: ObservanceRow[] = [
  {
    rhythm: 'Daily',
    practices: [
      'Morning Prayer (or adapted Office in demanding schedules)',
      'Evening Prayer and a brief examination before rest',
      'Scripture reading or spiritual lectio divina',
      'Personal prayer and contemplative silence (10+ mins)',
      'Daily intercession for the fraternity, the Church, and the world'
    ]
  },
  {
    rhythm: 'Weekly',
    practices: [
      'Sunday Eucharist where reasonably possible (or spiritual communion)',
      'A concrete act of mercy or creation care in the neighbourhood',
      'Franciscan or theological study and reflection',
      'Friday penitential observance (simplicity in food, restraint, or charity)',
      'Protected Sabbath rest and weekly balance review'
    ]
  },
  {
    rhythm: 'Monthly',
    practices: [
      'Fraternity gathering (local, regional, or digital/online)',
      'Extended recollection and silence',
      'Check-in and review of the Personal Rule of Life'
    ]
  },
  {
    rhythm: 'Annually',
    practices: [
      'Annual retreat (residential, local, online, or at home friary)',
      'Formal Personal Rule review with appointed companion or Guardian',
      'Participation in General Chapter or regional Franciscan assembly',
      'Annual Covenant affirmation and renewal of Franciscan commitment'
    ]
  }
];

export const FRANCISCAN_TEST_QUESTIONS = [
  {
    question: 'Is it Gospel?',
    description: 'Does this decision or action conform to the words, deeds, and self-emptying compassion of Jesus Christ?'
  },
  {
    question: 'Is it loving and truthful?',
    description: 'Does it embody unfeigned charity and transparent honesty, free from manipulation, flattery, or hostility?'
  },
  {
    question: 'Is it simple and humble?',
    description: 'Does it choose restraint and modesty over ostentation, possessiveness, or self-aggrandizement?'
  },
  {
    question: 'Does it make peace?',
    description: 'Does it reconcile division and soothe contention, or does it inflame rancor and provoke rivalry?'
  },
  {
    question: 'Does it respect another person’s dignity?',
    description: 'Does it honour the sacred worth of every person, especially the vulnerable, the burdened, and the quiet?'
  },
  {
    question: 'Does it serve rather than dominate?',
    description: 'Is power exercised by washing feet as a lesser brother/sister, resisting clericalism and entitlement?'
  },
  {
    question: 'Could I do it openly before my brothers and sisters?',
    description: 'Does it welcome the light of accountability and fraternity, refusing unhealthy secrecy?'
  },
  {
    question: 'Would Francis and Clare recognise Christ in this choice?',
    description: 'Would the Little Poor Man of Assisi and the Lady Clare of San Damiano find the authentic mirror of Christ in it?'
  }
];

export const THIRTY_DAY_PLAN: DayReflection[] = [
  {
    day: 1,
    reading: '¶¶ 1–8',
    paragraphs: [1, 2, 3, 4, 5, 6, 7, 8],
    theme: 'Receiving the Vocation',
    reflection: 'How do the Rule, Constitutions and Customary together lead me towards Christ rather than mere regulation?',
    practice: 'Offer the month to God. Write one sentence naming what you hope to receive.'
  },
  {
    day: 2,
    reading: '¶¶ 9–18',
    paragraphs: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    theme: 'Franciscan Identity & Fraternity',
    reflection: 'Which mark—humility, mercy, simplicity, joy, reverence or practical love—most needs to deepen in me?',
    practice: 'Perform one quiet act of fraternal care without seeking recognition.'
  },
  {
    day: 3,
    reading: '¶¶ 19–26',
    paragraphs: [19, 20, 21, 22, 23, 24, 25, 26],
    theme: 'Prayer and Conversion',
    reflection: 'What pattern of prayer can I live faithfully in my actual circumstances?',
    practice: 'Keep ten minutes of silence and end with a simple examination of the day.'
  },
  {
    day: 4,
    reading: '¶¶ 27–34',
    paragraphs: [27, 28, 29, 30, 31, 32, 33, 34],
    theme: 'The Evangelical Counsels',
    reflection: 'Where am I being invited into greater freedom from possessiveness, control or self-will?',
    practice: 'Choose one unnecessary possession, indulgence or demand to release.'
  },
  {
    day: 5,
    reading: '¶¶ 35–42',
    paragraphs: [35, 36, 37, 38, 39, 40, 41, 42],
    theme: 'Family, Work & Dispersed Life',
    reflection: 'How can my home or workplace become a place of prayer, peace and reliable service?',
    practice: 'Bless your home or workspace and make one practical act of reconciliation or support.'
  },
  {
    day: 6,
    reading: '¶¶ 43–51',
    paragraphs: [43, 44, 45, 46, 47, 48, 49, 50, 51],
    theme: 'Mission, Peace and Creation',
    reflection: 'Does my witness begin with listening, humility and service?',
    practice: 'Undertake one act of mercy or creation care suited to your circumstances.'
  },
  {
    day: 7,
    reading: '¶¶ 52–62',
    paragraphs: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
    theme: 'Formation, Profession & Perseverance',
    reflection: 'What support or correction would help me persevere truthfully?',
    practice: 'Review one part of your Personal Rule, or draft a first practical commitment.'
  },
  {
    day: 8,
    reading: '¶¶ 63–74',
    paragraphs: [63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
    theme: 'Nature, Charism & Proper Law',
    reflection: 'How do law, pastoral safety and Franciscan minority serve the Gospel together?',
    practice: 'Pray for those entrusted with ecclesial and religious authority.'
  },
  {
    day: 9,
    reading: '¶¶ 75–84',
    paragraphs: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84],
    theme: 'Membership, Dignity & Authority',
    reflection: 'Do I honour different states of life without creating grades of spiritual worth?',
    practice: 'Give thanks for a vocation different from your own and affirm its dignity.'
  },
  {
    day: 10,
    reading: '¶¶ 85–97',
    paragraphs: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
    theme: 'Admission, Formation & Profession',
    reflection: 'What signs reveal readiness, freedom, maturity and safe participation?',
    practice: 'Pray for inquirers, postulants, novices and those discerning profession.'
  },
  {
    day: 11,
    reading: '¶¶ 98–110',
    paragraphs: [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
    theme: 'Chapter, Council & Servant Government',
    reflection: 'How can consultation, records and recusal protect communion and trust?',
    practice: 'Examine one responsibility you hold: is it exercised transparently and accountably?'
  },
  {
    day: 12,
    reading: '¶¶ 111–120',
    paragraphs: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
    theme: 'Fraternity, Prayer & Stewardship',
    reflection: 'Does my use of time, money and property strengthen communion and mission?',
    practice: 'Review one regular expense or use of time in the light of simplicity.'
  },
  {
    day: 13,
    reading: '¶¶ 121–133',
    paragraphs: [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133],
    theme: 'Apostolate, Conduct & Safeguarding',
    reflection: 'How do boundaries and due process express love rather than distrust?',
    practice: 'Read your current safeguarding guidance or identify where it is kept.'
  },
  {
    day: 14,
    reading: '¶¶ 134–146',
    paragraphs: [134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146],
    theme: 'Leave, Records & Promulgation',
    reflection: 'How can governance remain truthful, humane and orderly during change?',
    practice: 'Pray for members who are ill, on leave, departing or carrying difficult decisions.'
  },
  {
    day: 15,
    reading: '¶¶ 147–155',
    paragraphs: [147, 148, 149, 150, 151, 152, 153, 154, 155],
    theme: 'The Franciscan Day',
    reflection: 'Which daily rhythm would make me more attentive to God and neighbour?',
    practice: 'Practise the adapted daily Office and protect a short period from messages and media.'
  },
  {
    day: 16,
    reading: '¶¶ 156–165',
    paragraphs: [156, 157, 158, 159, 160, 161, 162, 163, 164, 165],
    theme: 'The Week, Sacraments & Devotion',
    reflection: 'How can worship continue in thanksgiving, penance and works of mercy?',
    practice: 'Plan one Friday discipline and prepare intentionally for the Eucharist.'
  },
  {
    day: 17,
    reading: '¶¶ 166–175',
    paragraphs: [166, 167, 168, 169, 170, 171, 172, 173, 174, 175],
    theme: 'Home, Hospitality & Possessions',
    reflection: 'Is my hospitality safe, consensual and sustainable, and do my possessions serve love?',
    practice: 'Make one place more prayerful and pass on one useful item you no longer need.'
  },
  {
    day: 18,
    reading: '¶¶ 176–186',
    paragraphs: [176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186],
    theme: 'Work and Fraternity',
    reflection: 'Where do reliability, rest, direct speech and mutual care need strengthening?',
    practice: 'Contact a member who may be isolated, burdened or absent.'
  },
  {
    day: 19,
    reading: '¶¶ 187–200',
    paragraphs: [187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
    theme: 'Habit, Insignia & Formation Customs',
    reflection: 'Do outward signs correspond to humility, safety, truthfulness and readiness?',
    practice: 'Examine one outward sign, title or role: does it clarify service or seek status?'
  },
  {
    day: 20,
    reading: '¶¶ 201–209',
    paragraphs: [201, 202, 203, 204, 205, 206, 207, 208, 209],
    theme: 'Feasts, Retreat & Annual Review',
    reflection: 'How can the Franciscan calendar and Personal Rule sustain lifelong conversion?',
    practice: 'Choose a date for retreat or extended recollection and note one annual priority.'
  },
  {
    day: 21,
    reading: '¶¶ 210–218',
    paragraphs: [210, 211, 212, 213, 214, 215, 216, 217, 218],
    theme: 'Digital Life, Service & Mission',
    reflection: 'Does my online and public conduct reveal truthfulness, restraint and peace?',
    practice: 'Observe a period of digital restraint and review one public profile or account.'
  },
  {
    day: 22,
    reading: '¶¶ 219–226',
    paragraphs: [219, 220, 221, 222, 223, 224, 225, 226],
    theme: 'Health, Disability, Boundaries & Complaints',
    reflection: 'How can compassion, accessibility, immediate safety and fairness be held together?',
    practice: 'Identify one reasonable adjustment or pastoral support that could widen participation.'
  },
  {
    day: 23,
    reading: '¶¶ 227–236',
    paragraphs: [227, 228, 229, 230, 231, 232, 233, 234, 235, 236],
    theme: 'Administration, Personal Vocational Costs & Death',
    reflection: 'What practical order is needed so that ministry remains accountable and care continues well?',
    practice: 'Update one record, handover note, funeral wish or next-of-kin detail.'
  },
  {
    day: 24,
    reading: '¶¶ 237–241',
    paragraphs: [237, 238, 239, 240, 241],
    theme: 'The Whole Vocation Gathered in Christ',
    reflection: 'Which sentence from the General Conclusion best expresses the life I am called to live?',
    practice: 'Copy that sentence by hand and use it as your prayer throughout the day.'
  },
  {
    day: 25,
    reading: 'Re-read ¶¶ 1–18',
    paragraphs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    theme: 'Gospel Identity & Belonging',
    reflection: 'What has become clearer since the first days of the plan?',
    practice: 'Write a brief personal statement of Franciscan intention.'
  },
  {
    day: 26,
    reading: 'Re-read ¶¶ 19–34',
    paragraphs: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    theme: 'Prayer, Conversion & Freedom',
    reflection: 'Which counsel requires a concrete next step?',
    practice: 'Choose one realistic practice for prayer, simplicity, chastity, obedience or minority.'
  },
  {
    day: 27,
    reading: 'Re-read ¶¶ 35–62',
    paragraphs: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
    theme: 'Ordinary Life, Mission & Perseverance',
    reflection: 'Where is Christ asking to be served in my present circumstances?',
    practice: 'Make a specific commitment of service for the coming month.'
  },
  {
    day: 28,
    reading: 'Re-read ¶¶ 63–146',
    paragraphs: [63, 75, 80, 85, 98, 104, 111, 117, 121, 127],
    theme: 'Healthy Structures for Gospel Life',
    reflection: 'Which constitutional safeguard most protects people, vocation and trust?',
    practice: 'Note one governance or safeguarding question to discuss with an appropriate officer.'
  },
  {
    day: 29,
    reading: 'Re-read ¶¶ 147–236',
    paragraphs: [147, 150, 156, 161, 166, 171, 176, 180, 187, 207, 214, 219],
    theme: 'Embodied & Sustainable Observance',
    reflection: 'Which customs are essential for your Personal Rule, and what adaptations are honestly needed?',
    practice: 'Draft or revise a sustainable daily, weekly, monthly and annual rhythm.'
  },
  {
    day: 30,
    reading: 'Re-read ¶¶ 237–241 & Glossary',
    paragraphs: [237, 238, 239, 240, 241],
    theme: 'Beginning Again',
    reflection: 'What grace, challenge and practical commitment will I carry beyond these thirty days?',
    practice: 'Give thanks, pray for the Order, and record three commitments for the next ninety days.'
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Adaptation',
    definition: 'A prudent adjustment of observance to health, disability, family, employment, poverty, travel or genuine necessity. Adaptation preserves the spirit and essential obligations of the vocation rather than abandoning them.'
  },
  {
    term: 'Annual Covenant',
    definition: 'A pastoral and accountability statement made at annual review, affirming adherence to the Rule, Constitutions, Customary, Code of Conduct and safeguarding requirements. It is not a renewal of perpetual profession.'
  },
  {
    term: 'Apostolate',
    definition: 'A work or pattern of Christian service through which a member or fraternity shares in the mission of Christ, including mercy, pastoral care, caregiving, chaplaincy, intercession, peace-making and care for creation.'
  },
  {
    term: 'Apostolic Succession',
    definition: 'The ecclesial continuity of ordained ministry through episcopal consecration, received within the LCAC’s sacramental understanding. Membership or profession in OSFC does not itself confer Holy Orders or sacramental authority.'
  },
  {
    term: 'Associate or Companion',
    definition: 'A person who shares in OSFC spirituality or works without making religious profession and without acquiring the rights and duties proper to professed members.'
  },
  {
    term: 'Balance of Probabilities',
    definition: 'The ordinary internal standard of proof under which a fact is found when it is more likely than not to have occurred, unless higher law requires another standard.'
  },
  {
    term: 'Canon Law',
    definition: 'The body of ecclesiastical law governing the LCAC and matters within its lawful authority. OSFC proper law remains subject to applicable LCAC Canon Law.'
  },
  {
    term: 'Canonical',
    definition: 'Relating to the law, discipline, records, authority or recognised ordering of the Church.'
  },
  {
    term: 'Charism',
    definition: 'A gift of the Holy Spirit entrusted to a person or community for the good of the Church. The OSFC charism is Franciscan Gospel life expressed through prayer, simplicity, humility, minority, fraternity, reconciliation, service and reverence for creation.'
  },
  {
    term: 'Chastity According to State of Life',
    definition: 'Integrated, truthful and non-exploitative love lived faithfully within marriage, single life or a freely undertaken commitment to consecrated celibacy.'
  },
  {
    term: 'Civil Authority',
    definition: 'A lawful public authority, including police, courts, safeguarding bodies, regulators or emergency services. Internal church processes must not obstruct duties owed to civil authority.'
  },
  {
    term: 'Clarean',
    definition: 'Relating to Saint Clare of Assisi and her spirituality, especially contemplation of Christ, evangelical poverty, steadfastness and tender mutual care.'
  },
  {
    term: 'Code of Conduct',
    definition: 'The applicable LCAC or OSFC standards governing behaviour, boundaries, public witness, safeguarding, confidentiality and accountability.'
  },
  {
    term: 'Common Good',
    definition: 'The conditions and decisions that protect dignity, justice, safety, participation and flourishing for the fraternity, the Church and wider society rather than advancing merely private interests.'
  },
  {
    term: 'Competent Authority',
    definition: 'The person, council, Chapter, church officer or civil body lawfully empowered to decide or act in a particular matter.'
  },
  {
    term: 'Compline',
    definition: 'The Church’s night prayer, used to commend the day and the sleeper to God.'
  },
  {
    term: 'Conflict of Interest',
    definition: 'A personal, financial, familial, pastoral or other interest that may impair, or reasonably appear to impair, impartial judgement. It must be disclosed and may require recusal.'
  },
  {
    term: 'Consecrated Celibacy',
    definition: 'A freely discerned and distinct commitment to celibate life for God and service. It is not automatically required of every single or ordained OSFC member.'
  },
  {
    term: 'Constitutions',
    definition: 'The part of OSFC proper law that gives stable juridical and communal form to the Rule by regulating membership, formation, profession, government, safeguarding, individual responsibility for financing vocation and administration.'
  },
  {
    term: 'Contemplation',
    definition: 'Prayerful, loving attention to God, especially through Christ, Scripture, silence and the Sacraments, which leads to conversion and loving action.'
  },
  {
    term: 'Conversion',
    definition: 'The lifelong turning of mind, heart and conduct towards God. In Franciscan life it includes repentance, amendment, reconciliation and renewed conformity to Christ.'
  },
  {
    term: 'Customary',
    definition: 'The practical part of OSFC proper law describing the ordinary embodiment of the Rule and Constitutions in daily, weekly, sacramental, fraternal and administrative life.'
  },
  {
    term: 'Directory',
    definition: 'A body of subsidiary practical regulations or guidance adopted under the Constitutions for matters requiring more detail or periodic revision.'
  },
  {
    term: 'Discernment',
    definition: 'Prayerful and evidence-based seeking of God’s will through Scripture, conscience, counsel, lived fruit, circumstances and the judgement of the Church or fraternity.'
  },
  {
    term: 'Dismissal',
    definition: 'The involuntary ending of membership for sufficiently grave cause through a lawful process that includes notice, opportunity to respond, a reasoned decision and appeal.'
  },
  {
    term: 'Dispersed Life',
    definition: 'A form of religious life in which members ordinarily live in their own homes, families and local communities rather than in one common residence, while remaining united by profession, prayer, formation, mutual care and mission.'
  },
  {
    term: 'Due Process',
    definition: 'A fair procedure including clear notice, a meaningful opportunity to respond, impartial consideration, proportionate action, reasons and an appropriate right of review or appeal.'
  },
  {
    term: 'Ecclesial',
    definition: 'Relating to the Church as the Body of Christ, its sacramental communion, mission, ministry, authority and discipline.'
  },
  {
    term: 'Evangelical Counsels',
    definition: 'The Gospel disciplines of poverty or simplicity, chastity and obedience. OSFC also stresses minority as the characteristic Franciscan form of humble service.'
  },
  {
    term: 'Faculties',
    definition: 'Formal ecclesiastical permissions granted by competent church authority to exercise specified ordained or pastoral ministries. Profession and office in OSFC do not automatically confer faculties.'
  },
  {
    term: 'Formator or Formation Companion',
    definition: 'A person appointed to accompany, teach, assess and review someone in formation while respecting boundaries, confidentiality, freedom and the distinction between formation and therapy.'
  },
  {
    term: 'Franciscan',
    definition: 'Relating to the Gospel way associated with Saint Francis and Saint Clare of Assisi, marked by humility, poverty of spirit, fraternity, peace, joy, reverence, contemplation and service.'
  },
  {
    term: 'Franciscan Crown',
    definition: 'A traditional Franciscan rosary-like devotion honouring seven joys of the Blessed Virgin Mary.'
  },
  {
    term: 'Fraternity',
    definition: 'The spiritual family and concrete network of mutual responsibility formed by OSFC members. It may be local, regional, national or digital.'
  },
  {
    term: 'Friar',
    definition: 'A male member of the Franciscan religious family. Within OSFC, friars and sisters share equal religious dignity.'
  },
  {
    term: 'General Chapter',
    definition: 'The principal deliberative and elective assembly of OSFC, responsible for elections, major policy, reports, formation, amendments and future direction, subject to lawful LCAC authority.'
  },
  {
    term: 'General Council',
    definition: 'The collegial governing body that assists the Minister General and shares responsibility for significant decisions, oversight and administration.'
  },
  {
    term: 'Guardian or Local Minister',
    definition: 'A member entrusted with pastoral and administrative service within a local or regional fraternity. The role does not confer unrestricted authority.'
  },
  {
    term: 'Habit',
    definition: 'Approved Franciscan religious dress worn as a sign of simplicity, fraternity and witness, never as proof of sacramental authority or personal superiority.'
  },
  {
    term: 'Holy Orders',
    definition: 'The sacrament of ordained ministry. Religious profession neither confers nor removes Holy Orders, and ordained status does not automatically confer OSFC office.'
  },
  {
    term: 'Inquirer',
    definition: 'A person exploring the OSFC vocation before formal admission to postulancy.'
  },
  {
    term: 'LCAC',
    definition: 'The Liberal Catholic Apostolic Church, within which OSFC lives its sacramental, liturgical and ecclesial vocation and whose lawful Canon Law and competent authority bind the Order where applicable.'
  },
  {
    term: 'Lectio Divina',
    definition: 'A prayerful reading of Scripture involving attentive reading, meditation, prayer and contemplation, allowing the Word to shape life.'
  },
  {
    term: 'Leave',
    definition: 'A temporary, recorded adjustment or pause in ordinary participation because of illness, bereavement, family responsibility, work, crisis or vocational discernment. It is not punishment.'
  },
  {
    term: 'Legitimate Authority',
    definition: 'Authority lawfully conferred and exercised within its proper limits, consistently with the Gospel, conscience, safeguarding, civil law and the rights of persons.'
  },
  {
    term: 'Minority',
    definition: 'The Franciscan choice to be a lesser brother or sister: serving without domination, privilege, entitlement or status, and standing in solidarity with people who are overlooked or excluded.'
  },
  {
    term: 'Minister General',
    definition: 'The principal religious superior and servant of OSFC, guardian of the Rule and representative of the Order, acting within the Constitutions and with appropriate collegial accountability.'
  },
  {
    term: 'Natural Justice',
    definition: 'Basic procedural fairness, especially impartial decision-making, the opportunity to know and answer a case, and freedom from conflicts of interest.'
  },
  {
    term: 'Necrology',
    definition: 'The official record of deceased members maintained so that they may be remembered in prayer.'
  },
  {
    term: 'Novice',
    definition: 'A person formally admitted to the novitiate for systematic formation and discernment before any religious profession.'
  },
  {
    term: 'Novitiate',
    definition: 'The structured period, ordinarily at least twelve months, in which a novice studies, prays, serves, participates in fraternity and tests readiness for profession.'
  },
  {
    term: 'Obedience',
    definition: 'Attentive listening to God through the Gospel, prayer, conscience, Church, Rule, legitimate authority and fraternity. It never requires unlawful, abusive, degrading or unsafe conduct.'
  },
  {
    term: 'Oblation',
    definition: 'A voluntary gift or offering. OSFC does not impose compulsory oblations, and no Sacrament, pastoral care or admission decision may be made conditional upon payment.'
  },
  {
    term: 'Office',
    definition: 'A defined role of service, authority or administration within OSFC. Office is limited by its mandate, requires accountability and may be held by suitable lay or ordained members unless ordination is intrinsic to the role.'
  },
  {
    term: 'OSFC',
    definition: 'The Order of Saints Francis and Clare, a Franciscan religious order of the LCAC governed by its Rule, Constitutions, Customary and other lawful norms.'
  },
  {
    term: 'Pastoral Boundaries',
    definition: 'Limits that keep ministry purposeful, safe, non-exploitative and free from secrecy, dependency, coercion, inappropriate intimacy or personal gain.'
  },
  {
    term: 'Pastoral Care',
    definition: 'Prayerful, compassionate accompaniment offered within competence and authority, with truthful explanation of confidentiality, safeguarding and referral limits.'
  },
  {
    term: 'Penance',
    definition: 'Practices of repentance, self-restraint, almsgiving, service and amendment of life that express conversion without harming health or becoming a measure of status.'
  },
  {
    term: 'Perpetual Profession',
    definition: 'A lifelong, freely made public commitment to live the Holy Gospel according to the OSFC Rule and proper law.'
  },
  {
    term: 'Personal Rule of Life',
    definition: 'An individual, reviewed application of the common Rule to prayer, Eucharist, Scripture, simplicity, family, work, penance, fraternity, service, rest, study and health. It does not replace the common Rule.'
  },
  {
    term: 'Portiuncula',
    definition: 'The small chapel of Our Lady of the Angels closely associated with Saint Francis and the beginnings of the Franciscan movement; its observance recalls humility, fraternity and mission.'
  },
  {
    term: 'Postulant',
    definition: 'A person formally admitted to an introductory period of prayer, participation, formation and vocational discernment before the novitiate.'
  },
  {
    term: 'Profession',
    definition: 'The public and ecclesially received promise to live the Gospel according to the Rule in simplicity, chastity according to state of life, obedience, minority, fraternity and service.'
  },
  {
    term: 'Promulgation',
    definition: 'The formal act by which a duly approved law or text is officially issued and given effect.'
  },
  {
    term: 'Proper Law',
    definition: 'The internal law particular to OSFC, principally the Rule, Constitutions, Customary, Directory and lawful decisions or regulations adopted under them, subject to higher applicable law.'
  },
  {
    term: 'Protective Measure',
    definition: 'A temporary, neutral restriction imposed to protect persons or processes while a serious concern is assessed or investigated. It is not itself a finding of guilt.'
  },
  {
    term: 'Quorum',
    definition: 'The minimum number or proportion of eligible participants required for an assembly to transact valid business.'
  },
  {
    term: 'Reasonable Adjustment',
    definition: 'A practicable change to communication, timing, access, format or participation that enables a disabled or otherwise limited person to take part safely and fairly.'
  },
  {
    term: 'Recusal',
    definition: 'Withdrawal from discussion, investigation or decision-making because of a conflict of interest, prior involvement or reasonable concern about impartiality.'
  },
  {
    term: 'Reconciliation',
    definition: 'The restoration of right relationship through truth, repentance, forgiveness, reparation and peace where possible and safe. It never requires concealment of harm or resumption of unsafe contact.'
  },
  {
    term: 'Register of Professions',
    definition: 'The secure official record of temporary and perpetual professions, including the person, date, rite and receiving authority.'
  },
  {
    term: 'Release',
    definition: 'The lawful freeing of a perpetually professed member from the obligations of profession following petition and any required ecclesiastical process.'
  },
  {
    term: 'Restorative Steps',
    definition: 'Proportionate actions intended to acknowledge harm, repair what can be repaired, protect those affected, change conduct and rebuild trust where truthful and safe.'
  },
  {
    term: 'Rule',
    definition: 'The foundational spiritual form of OSFC life, setting forth the Gospel vision by which the Constitutions, Customary and all practice are interpreted.'
  },
  {
    term: 'Sacramental Seal',
    definition: 'The absolute confidentiality attached, under applicable church law, to sacramental confession heard by an authorised cleric. It is distinct from ordinary pastoral confidentiality.'
  },
  {
    term: 'Safeguarding',
    definition: 'The policies, duties and actions by which children, vulnerable adults and others are protected from abuse, grooming, coercion, exploitation, neglect and avoidable harm.'
  },
  {
    term: 'Safeguarding Lead',
    definition: 'The designated person responsible for receiving concerns, coordinating appropriate church action and ensuring referral to civil authorities where law or safety requires.'
  },
  {
    term: 'San Damiano Cross',
    definition: 'The icon cross associated with Saint Francis’s call to rebuild Christ’s Church and often used as a Franciscan focus for prayer.'
  },
  {
    term: 'Scrupulosity',
    definition: 'An unhealthy pattern of excessive moral or religious anxiety. The document rejects observance that feeds fear, false precision or self-accusation rather than trust and conversion.'
  },
  {
    term: 'Simplicity',
    definition: 'Franciscan freedom from possessiveness, excess, display and greed, joined to prudent provision, stewardship, generosity and solidarity with people who are poor.'
  },
  {
    term: 'Sister',
    definition: 'A female member of the Franciscan religious family. Within OSFC, sisters and friars share equal religious dignity.'
  },
  {
    term: 'Spiritual Communion',
    definition: 'Prayerful union with Christ in the Eucharist when sacramental reception is not possible, practised according to LCAC usage.'
  },
  {
    term: 'Spiritual Direction',
    definition: 'Confidential spiritual accompaniment helping a person attend to God’s action and discern faithful response. It must respect competence, boundaries and safeguarding.'
  },
  {
    term: 'Subsidiary Norms',
    definition: 'Formation, safeguarding, liturgical, electoral or other regulations adopted under the Constitutions and consistent with higher law, including provisions for individual responsibility for financing vocation.'
  },
  {
    term: 'Tau',
    definition: 'The T-shaped biblical and Franciscan cross used as a sign of repentance, blessing and belonging to Christ.'
  },
  {
    term: 'Temporary Profession',
    definition: 'A time-limited religious profession, ordinarily renewed annually, through which a member lives the professed vocation while continuing discernment before perpetual profession.'
  },
  {
    term: 'Transitus',
    definition: 'The Franciscan commemoration of the passing of Saint Francis from death to eternal life, customarily observed on the evening before his feast.'
  },
  {
    term: 'Vulnerable Adult',
    definition: 'An adult who, because of care needs, disability, illness, circumstances, dependency or another factor recognised by law or policy, may be at increased risk of abuse or unable to protect themselves adequately.'
  }
];

export const SUBJECT_INDEX: IndexTopic[] = [
  { topic: 'Accessibility and reasonable adjustments', paragraphs: '4, 114, 158–159, 219–222' },
  { topic: 'Financing vocation: individual responsibility', paragraphs: '117–120, 227–230' },
  { topic: 'Admission and suitability', paragraphs: '68, 75–79, 85–92, 200' },
  { topic: 'Annual covenant and review', paragraphs: '146, 174, 206–209' },
  { topic: 'Appeals', paragraphs: '33, 78, 110, 128, 132–133, 136' },
  { topic: 'Apostolate and mission', paragraphs: '43–47, 121–122, 214–218' },
  { topic: 'Associates and Companions', paragraphs: '76' },
  { topic: 'Authority, servant exercise of', paragraphs: '4, 16–18, 32–34, 104–110, 124, 238–239' },
  { topic: 'Authorisation and representation', paragraphs: '84, 95, 122, 126, 178, 192–193, 211–212, 217' },
  { topic: 'Boundaries, pastoral and relational', paragraphs: '30–31, 54, 90–91, 124–125, 169, 175, 199, 213, 223–226' },
  { topic: 'Care of creation', paragraphs: '1, 12, 43, 50–51, 53, 121, 162, 174, 201, 205–207, 214–217' },
  { topic: 'Celibacy', paragraphs: '3, 30, 82, 189' },
  { topic: 'Chastity', paragraphs: '4, 27, 30–31, 57, 82, 189' },
  { topic: 'Church, ecclesial life and LCAC', paragraphs: '1, 5, 15, 63–74, 80, 84, 125–130, 137, 140–146, 165, 201, 209, 240, 242' },
  { topic: 'Clare of Assisi', paragraphs: '1–2, 6, 8, 12–14, 18–22, 28, 52–53, 60, 162, 184, 201–203, 237–241' },
  { topic: 'Common life', paragraphs: '2–4, 16–18, 41–42, 111–114, 147–149, 180–186, 237–241' },
  { topic: 'Complaints', paragraphs: '78, 110, 128–133, 185, 223–226, 239' },
  { topic: 'Confidentiality and data protection', paragraphs: '42, 47, 54, 78–79, 90, 109, 114, 125–126, 130–133, 138–140, 160, 170, 178, 198, 212–213, 225–230, 235' },
  { topic: 'Conflict of interest and recusal', paragraphs: '33, 110, 120, 178, 186, 199, 228' },
  { topic: 'Conscience', paragraphs: '4–5, 15, 32–33, 45, 49, 74, 161, 218' },
  { topic: 'Constitutions, function and authority', paragraphs: '2, 5, 61, 63–74, 141–146, 147, 195, 209, 237, 242' },
  { topic: 'Conversion and penance', paragraphs: '1, 6, 19, 24–26, 52–61, 154, 157–161, 207, 237–241' },
  { topic: 'Correction, discipline and restoration', paragraphs: '17, 24, 31, 33, 54, 59–61, 68, 79, 91–92, 110, 127–137, 185, 199–200, 239–240' },
  { topic: 'Council, General', paragraphs: '74, 100, 103–110, 118–120, 146, 186, 228' },
  { topic: 'Customary, use and adaptation', paragraphs: '2, 5, 70, 147–149, 209, 237' },
  { topic: 'Death, funeral and remembrance', paragraphs: '138, 160, 191, 231–235' },
  { topic: 'Digital life and communication', paragraphs: '42, 49, 54, 99, 103, 111, 126, 155, 160, 170, 178, 181, 193, 203–204, 207, 210–213, 225, 227, 230, 235' },
  { topic: 'Disability', paragraphs: '3–4, 21, 29, 39, 42, 114, 116, 147, 155, 158–159, 172, 219–222' },
  { topic: 'Dispersed life', paragraphs: '3, 7, 27, 35, 41–42, 57, 111–114, 147–149, 181, 202' },
  { topic: 'Dissolution', paragraphs: '103, 141–143' },
  { topic: 'Ecological responsibility', paragraphs: '50–51, 121, 162, 174, 201, 205–207, 216–217' },
  { topic: 'Equality and dignity', paragraphs: '4, 16, 31, 34, 46–47, 68, 77–84, 91, 106, 124, 128–140, 183, 219–226, 238–239' },
  { topic: 'Eucharist', paragraphs: '1, 8, 15, 22–23, 55, 113, 156, 164–165, 197, 207, 240' },
  { topic: 'Evangelical counsels', paragraphs: '4, 8, 27–34, 53–59, 87, 115–120, 171–175, 189, 237–241' },
  { topic: 'Family, marriage and dependants', paragraphs: '3–4, 7, 21, 28, 30, 35–37, 40, 55–56, 58, 79, 81–84, 90, 116, 134, 147, 151, 158–159, 167–170, 172, 179, 207–208, 217, 219–222, 231–235, 238' },
  { topic: 'Fasting and Friday observance', paragraphs: '25–26, 55, 157–159, 207' },
  { topic: 'Formation, initial and continuing', paragraphs: '3, 42, 52–56, 61, 75, 78–79, 85–97, 100, 106, 109, 112, 121, 133, 146, 180, 194–200, 203–209, 240' },
  { topic: 'Francis of Assisi', paragraphs: '1–2, 6, 8–15, 18–28, 34, 38, 43–50, 52–53, 57, 60, 62, 69, 147, 162, 189, 201–203, 237–241' },
  { topic: 'Fraternity', paragraphs: '1–9, 13, 16–18, 27, 32–34, 35–42, 52–61, 75–79, 98–114, 123–126, 147–149, 160, 180–186, 200, 203–209, 214–215, 219–222, 231–241' },
  { topic: 'General Chapter', paragraphs: '70, 72, 98–103, 105–108, 118, 141–143, 146, 203, 242' },
  { topic: 'Gifts, borrowing and fundraising', paragraphs: '29, 119–120, 126, 173–175, 229' },
  { topic: 'Gospel, Holy', paragraphs: '1–15, 19, 22, 27, 32, 35, 43, 45, 52–62, 63–74, 147–149, 163–165, 205–209, 237–241' },
  { topic: 'Government and office', paragraphs: '4–5, 32–34, 63, 70–74, 78–84, 95, 98–110, 120, 122, 137–146, 183, 186, 192–193, 212, 217, 227–230, 239' },
  { topic: 'Guardian or Local Minister', paragraphs: '88, 108, 185, 206' },
  { topic: 'Habit and insignia', paragraphs: '119, 137, 187–198, 232, 234' },
  { topic: 'Health and wellbeing', paragraphs: '3–4, 7, 21, 25–26, 28, 35, 39, 42, 44, 55–56, 61, 116, 134, 147–159, 172, 179, 204, 207–208, 217, 219–222, 231' },
  { topic: 'Hospitality', paragraphs: '40, 62, 147, 155, 166–170, 173' },
  { topic: 'Human dignity', paragraphs: '4, 16, 31, 34, 46–49, 68, 74, 77–84, 124, 128–140, 218, 223–226, 239' },
  { topic: 'Inquirer', paragraphs: '75' },
  { topic: 'Interpretation of proper law', paragraphs: '2, 4–5, 7, 10–11, 63, 70–74, 141–149' },
  { topic: 'Leave and reduced observance', paragraphs: '61, 129, 134–137, 192, 219–222' },
  { topic: 'Liturgical and sacramental authority', paragraphs: '15, 22–23, 80, 84, 95, 113, 119, 125, 137, 144, 156, 161, 164–165, 191, 197, 201–203, 231' },
  { topic: 'Mercy and service', paragraphs: '1, 6, 9–18, 23–26, 34, 38–51, 59–62, 69, 121, 133, 168, 173, 184, 203, 214–218, 231, 237–241' },
  { topic: 'Minister General', paragraphs: '74, 95, 100, 104–110, 135, 242' },
  { topic: 'Minority', paragraphs: '4, 9, 12, 27, 34, 57, 69, 74, 238' },
  { topic: 'Missionary manner', paragraphs: '43–49, 121–126, 177–178, 210–218' },
  { topic: 'Morning and Evening Prayer', paragraphs: '20–21, 113, 150–154' },
  { topic: 'Mutual care', paragraphs: '3, 16–18, 37, 41–42, 59–61, 112–114, 134, 149, 160, 179–186, 219–226, 231–241' },
  { topic: 'Novice and novitiate', paragraphs: '55, 75, 87–92, 94, 194–200' },
  { topic: 'Obedience', paragraphs: '4, 8, 27, 32–34, 57, 127, 189' },
  { topic: 'Ordained members', paragraphs: '3, 16, 30, 35, 80, 83–84, 137, 165, 177–178, 183, 190–193, 200, 236, 238' },
  { topic: 'OSFC name, nature and charism', paragraphs: '1–5, 63–69' },
  { topic: 'Pastoral care', paragraphs: '18, 21, 33, 42, 54, 58, 61, 78, 88–92, 109, 114, 119, 124–125, 133–140, 160, 169, 175, 184–185, 198–200, 213, 223–226, 231–235, 239–240' },
  { topic: 'Peace and reconciliation', paragraphs: '1, 6, 9, 12, 17, 24, 43–51, 53, 59–62, 69, 121, 123, 126, 147, 154, 162, 175, 180, 185, 201–203, 205–207, 210, 218, 237–241' },
  { topic: 'Personal Rule of Life', paragraphs: '51, 55–56, 58, 89, 94, 113, 147–149, 157, 174, 198, 206–209, 240' },
  { topic: 'Postulant and postulancy', paragraphs: '75, 86, 88, 194, 198–200' },
  { topic: 'Poverty of spirit and simplicity', paragraphs: '4, 8–9, 12, 25–29, 51, 55, 57, 69, 115–120, 147, 157, 171–175, 187–193, 207, 216, 237–241' },
  { topic: 'Prayer and contemplation', paragraphs: '1–14, 18–26, 35, 41–44, 52–62, 69, 86–89, 112–114, 121, 147–165, 180, 184, 194–209, 214, 219–231, 237–241' },
  { topic: 'Profession', paragraphs: '3, 52–61, 75–84, 89–97, 103, 135–140, 187–200, 209, 232–236, 238, 242' },
  { topic: 'Property and stewardship', paragraphs: '28–29, 34, 56, 84, 115–120, 137, 171–175, 227–230, 234, 238' },
  { topic: 'Protective measures', paragraphs: '129–133, 192, 224–226' },
  { topic: 'Public witness and speech', paragraphs: '35, 38–39, 43–49, 62, 122–126, 177–178, 187, 190–193, 210–218, 235' },
  { topic: 'Records and registers', paragraphs: '33, 42, 54, 58, 65, 90, 95, 103, 109, 118–120, 125, 130–140, 143, 146, 160, 186, 198, 203, 212–213, 222, 224–230, 233–235, 239, 242' },
  { topic: 'Retreat', paragraphs: '113, 191, 204, 209' },
  { topic: 'Rule, function and authority', paragraphs: '1–62, 63, 70–74, 89, 144–149, 195, 207–209, 237–242' },
  { topic: 'Sabbath, rest and recreation', paragraphs: '39, 55, 159, 179, 207' },
  { topic: 'Sacred Scripture', paragraphs: '1, 5–15, 21, 23, 53–54, 62, 87, 150–165, 180, 205–207, 240' },
  { topic: 'Safeguarding', paragraphs: '4–5, 17, 31–33, 40, 47, 49, 54, 58–61, 63, 73–74, 78–79, 85–92, 103, 109–110, 124–140, 146–149, 160, 165, 168–170, 178, 185, 192–200, 209, 212–213, 217, 223–230, 235, 239' },
  { topic: 'Service', paragraphs: '1, 6, 9, 12, 18, 22–23, 26, 34–51, 53–62, 69, 121, 133, 147, 157, 168, 173, 177, 180, 184, 201–218, 231, 237–241' },
  { topic: 'Single members', paragraphs: '3, 30, 35, 82–84, 236' },
  { topic: 'Spiritual direction and accompaniment', paragraphs: '21, 24, 31, 55–56, 61, 88, 149, 161, 199, 223' },
  { topic: 'Study and lifelong formation', paragraphs: '13–14, 53–56, 61, 87, 112, 147, 163, 180, 194–209, 240' },
  { topic: 'Temporary profession', paragraphs: '57–58, 75, 93, 96–97, 135, 196' },
  { topic: 'Work and employment', paragraphs: '1, 3–4, 7, 29, 35, 38–39, 42, 55–56, 62, 79, 84, 134, 147, 151, 159, 172, 176–179, 200, 207–208, 217, 222, 236, 238, 241' }
];

export const PRAYERS_AND_SOURCES = [
  {
    id: 'peace-prayer',
    title: 'The Peace Prayer of Saint Francis',
    attribution: 'Attributed to Saint Francis of Assisi',
    latinTitle: 'Instrumentum Pacis Tuae',
    text: `Lord, make me an instrument of your peace:
where there is hatred, let me sow love;
where there is injury, pardon;
where there is doubt, faith;
where there is despair, hope;
where there is darkness, light;
and where there is sadness, joy.

O Divine Master, grant that I may not so much seek
to be consoled as to console,
to be understood as to understand,
to be loved as to love.
For it is in giving that we receive,
it is in pardoning that we are pardoned,
and it is in dying that we are born to eternal life. Amen.`
  },
  {
    id: 'clare-mirror',
    title: 'The Mirror of Eternity',
    attribution: 'Saint Clare of Assisi, Second and Third Letters to Agnes of Prague',
    latinTitle: 'Speculum Aeternitatis',
    text: `“Gaze upon Him, consider Him, contemplate Him, as you desire to imitate Him.”

“Place your mind before the mirror of eternity; place your soul in the brilliance of glory, and transform your entire being into the image of the Godhead Itself through contemplation!

Look at the parameters of this mirror: that is, the poverty of Him who was placed in a manger and wrapped in swaddling clothes. O marvelous humility, O astonishing poverty! The King of the angels, the Lord of heaven and earth, is laid in a crib!

Then contemplate in the surface of the mirror His ineffable charity, by which He chose to suffer upon the tree of the Cross and die there the most shameful kind of death.

We become what we love and who we love shapes what we become.”`
  },
  {
    id: 'canticle-creatures',
    title: 'The Canticle of the Creatures',
    attribution: 'Saint Francis of Assisi (1224)',
    latinTitle: 'Canticum Fratris Solis',
    text: `Most High, all-powerful, good Lord,
Yours are the praises, the glory, and the honor, and all blessing,
To You alone, Most High, do they belong,
and no human is worthy to mention Your name.

Praised be You, my Lord, with all Your creatures,
especially Sir Brother Sun,
who is the day and through whom You give us light.
And he is beautiful and radiant with great splendor;
and bears a likeness of You, Most High.

Praised be You, my Lord, through Sister Moon and the stars,
in heaven You have formed them clear and precious and beautiful.

Praised be You, my Lord, through Brother Wind,
and through the air, cloudy and serene, and every kind of weather,
through whom You give sustenance to Your creatures.

Praised be You, my Lord, through Sister Water,
who is very useful and humble and precious and chaste.

Praised be You, my Lord, through Brother Fire,
through whom You light the night,
and he is beautiful and playful and robust and strong.

Praised be You, my Lord, through our Sister Mother Earth,
who sustains and governs us,
and who produces various fruit with colored flowers and herbs.

Praised be You, my Lord, through those who give pardon for Your love,
and bear infirmity and tribulation.
Blessed are those who endure in peace
for by You, Most High, shall they be crowned.

Praised be You, my Lord, through our Sister Bodily Death,
from whom no one living can escape.
Blessed are those whom death will find in Your most holy will,
for the second death shall do them no harm.

Praise and bless my Lord and give Him thanks
and serve Him with great humility.`
  },
  {
    id: 'san-damiano',
    title: 'Prayer Before the Crucifix at San Damiano',
    attribution: 'Saint Francis of Assisi (1205)',
    latinTitle: 'Oratio coram Cruce',
    text: `Most High, glorious God,
enlighten the darkness of my heart
and give me true faith, certain hope, and perfect charity,
sense and knowledge, Lord,
that I may carry out Your holy and true command. Amen.`
  },
  {
    id: 'franciscan-crown',
    title: 'The Franciscan Crown (Rosary of the Seven Joys)',
    attribution: 'Franciscan Seraphic Tradition (1422)',
    latinTitle: 'Corona Seraphica',
    text: `The Franciscan Crown meditates on the Seven Joys of the Blessed Virgin Mary:

1. The Annunciation of the Archangel Gabriel to Mary
2. The Visitation of Mary to her cousin Saint Elizabeth
3. The Nativity of Our Lord Jesus Christ in Bethlehem
4. The Adoration of the Christ Child by the Magi
5. The Finding of the Child Jesus in the Temple of Jerusalem
6. The Resurrection of Our Lord Jesus Christ on Easter Morning
7. The Assumption and Coronation of Mary in Heaven

Concluding with two additional Hail Marys to complete 72 years of Mary's earthly tradition, and prayers for the intentions of the Church and fraternity.`
  }
];

export const GOVERNING_PARAGRAPHS: ParagraphItem[] = [
  // GENERAL INTRODUCTION (1-5)
  {
    number: 1,
    section: 'intro',
    chapterOrPart: 'General Introduction',
    content: 'The Rule, Constitutions and Customary of the Order of Saints Francis and Clare form a single, ordered expression of one vocation: to follow Jesus Christ according to the Holy Gospel in the spirit of Saint Francis and Saint Clare of Assisi. They are offered not simply as regulations for an organisation, but as instruments of conversion by which a fraternity may receive the Gospel more deeply, embody it more faithfully and bear its peace more generously within the Church and the world. Their purpose is to help each brother and sister recognise the call of Christ in prayer, Sacrament, Scripture, fraternity, ordinary labour, family life, service of people who are poor or excluded, and reverent care for the whole created order.'
  },
  {
    number: 2,
    section: 'intro',
    chapterOrPart: 'General Introduction',
    content: 'These three texts possess distinct but complementary functions. The Rule sets forth the spiritual form of life and names the evangelical vision by which all other provisions are to be judged. The Constitutions give that vision stable juridical and communal expression, defining the responsibilities, structures, safeguards and processes necessary for a healthy religious order. The Customary translates both into an ordinary rhythm of prayer, formation, fraternity, work, simplicity, mission and mutual care. None should therefore be read in isolation: the Rule gives the Constitutions and Customary their soul; the Constitutions protect the integrity and accountability of the common life; and the Customary ensures that the professed vocation is embodied in concrete, sustainable practice.'
  },
  {
    number: 3,
    section: 'intro',
    chapterOrPart: 'General Introduction',
    content: 'The Order is principally dispersed. Its members may be lay or ordained, married or single, employed or retired, living alone, within a family, or in an intentional religious household. This diversity does not weaken the common vocation, but reveals how Franciscan life may sanctify the varied circumstances in which God’s people are called to holiness. The home may become a little friary or convent of the heart; the workplace a field of honest witness; the local church a place of sacramental communion; and the neighbourhood a school of mercy, peace and attentive presence. Dispersion must never become isolation: members are bound together by profession, prayer, formation, accountable relationships, practical care and a shared mission.'
  },
  {
    number: 4,
    section: 'intro',
    chapterOrPart: 'General Introduction',
    content: 'The texts are to be received with evangelical seriousness and pastoral wisdom. Fidelity is not measured by rigid uniformity, nor may adaptation become an excuse for indifference. Health, disability, family responsibility, employment, poverty, age and genuine necessity require compassion and prudent accommodation, while the essential spirit of prayer, simplicity, chastity according to one’s state of life, obedience, minority, fraternity and service remains binding upon all. Authority within the Order is always ministerial: it exists to guard vocation, protect persons, promote justice, sustain communion and help the least voice to be heard. No appeal to obedience, custom, office or spiritual intimacy may override conscience properly formed, safeguarding, civil law, human dignity or the Gospel of Christ.'
  },
  {
    number: 5,
    section: 'intro',
    chapterOrPart: 'General Introduction',
    content: 'Those who read this document for discernment, formation, profession, government or review are invited to do so prayerfully. Its provisions are not a substitute for the living voice of the Holy Spirit, the discernment of the Church, mature conscience or fraternal charity. Rather, they provide a trustworthy framework within which these may flourish without arbitrariness or confusion. The true interpretation of every paragraph will be seen in its fruits: deeper love of God, greater conformity to Christ, reverence for the Sacraments and Holy Scripture, humility in authority, safety for the vulnerable, tenderness within fraternity, integrity in public and private life, and joyful service without desire for status or reward.'
  },

  // THE RULE - PREAMBLE (6-8)
  {
    number: 6,
    section: 'rule',
    chapterOrPart: 'Preamble to the Rule',
    title: 'The Rule and Life',
    content: 'The Rule and Life of the brothers and sisters of the Order of Saints Francis and Clare is to observe the Holy Gospel of Our Lord Jesus Christ, following in the footsteps of Christ after the examples of Saint Francis and Saint Clare of Assisi. This Gospel life is received as a gift before it is undertaken as a duty: the Lord calls each member to conversion, gathers the fraternity, and sends it to become an instrument of mercy, reconciliation and peace. Members therefore promise to seek Christ in prayer and Sacrament, in the Church and Holy Scripture, in one another, in people who are poor or excluded, and in the whole created order.'
  },
  {
    number: 7,
    section: 'rule',
    chapterOrPart: 'Preamble to the Rule',
    title: 'Dispersed Vocation',
    content: 'Members may be married or single, lay or ordained, celibate or living faithfully within marriage, employed or retired, living alone, with family, or in an intentional religious household. The ordinary form of the Order is dispersed life, yet no member is to live the vocation in isolation. Physical distance is overcome by common profession, prayer, fellowship, formation, mutual care and shared mission. Each member shall interpret this Rule with evangelical seriousness and pastoral wisdom, adapting its observance to health, family, work and genuine necessity without losing its spirit.'
  },
  {
    number: 8,
    section: 'rule',
    chapterOrPart: 'Preamble to the Rule',
    title: 'Trinitarian & Incarnational Root',
    content: 'This form of life is rooted in the mystery of the Most Holy Trinity and in the humility of the Incarnate Word. With Saint Francis and Saint Clare, members shall contemplate the Son of God who emptied himself, became poor for our sake, washed the feet of his disciples and gave himself in the Eucharist and upon the Cross. Led by the Holy Spirit, they shall return every good to the Father, from whom all goodness comes, and seek to become conformed to Christ in humility, poverty, obedience and self-giving love.'
  },

  // THE RULE - CHAPTER I: PURPOSE AND FRANCISCAN IDENTITY (9-18)
  {
    number: 9,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    content: 'The vocation of the Order begins not with a programme of religious activity but with the person of Jesus Christ. As Francis heard the Lord address him through the Gospel, so each member is called to receive the words and deeds of Christ as a living summons. Franciscan identity is therefore evangelical, ecclesial, fraternal and missionary. It is recognised not chiefly by dress, title or office, but by humility, mercy, simplicity, joy, reverence and practical love.'
  },
  {
    number: 10,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: '1. The Holy Gospel',
    content: 'The Gospel of Jesus Christ is the first and highest rule of the Order, and all proper law, custom and personal discipline shall serve this Gospel purpose. Members shall receive the Gospel not merely as teaching but as the revelation of the living Christ, poor, humble, crucified and risen. They shall read the Gospels frequently, hear them within the liturgy, receive their words with a humble and ready heart, and ask how Christ is to be followed here and now. They shall move continually from Gospel to life and from life to Gospel, allowing the Word to judge, console and convert them, so that the life of Jesus may become visible in their prayer, relationships, work and service.'
  },
  {
    number: 11,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: 'Observing the Gospel in Concrete Choices',
    quote: {
      text: 'The Rule and life of the Lesser Brothers is this: to observe the Holy Gospel of our Lord Jesus Christ.',
      source: 'Saint Francis, Later Rule, I'
    },
    content: 'To observe the Gospel means more than admiring it. Members shall hear it in the liturgy, study it personally and in fraternity, meditate upon it prayerfully and translate it into concrete choices. In discernment they shall attend especially to the life and teaching of Jesus, his poverty and humility, his compassion for the vulnerable, his truthfulness before power, his forgiveness of enemies, his table fellowship, his prayer to the Father and his self-offering upon the Cross. No interpretation of this Rule may be used to excuse conduct plainly contrary to the spirit of Christ.'
  },
  {
    number: 12,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: '2. Francis and Clare',
    quote: {
      text: 'Gaze upon Him, consider Him, contemplate Him, as you desire to imitate Him.',
      source: 'Saint Clare, Second Letter to Agnes of Prague'
    },
    content: 'Members shall follow Christ after the examples of Saint Francis and Saint Clare, cherishing poverty of spirit, contemplation, minority, peace, joy, service and reverence for creation. They shall learn from Francis that conversion begins when the Lord leads a person towards those whom fear or society has kept at a distance, so that what was bitter may, through mercy, become sweetness. They shall learn from Clare to gaze upon Christ, ponder his life, contemplate his humility and desire to imitate him with an undivided heart.'
  },
  {
    number: 13,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: 'Franciscan Sources',
    content: 'Members shall become familiar with the principal Franciscan sources, especially the Earlier Rule, the Later Rule, the Testament of Saint Francis, his Admonitions and Praises, and the writings and witness of Saint Clare. They shall receive these sources neither as museum pieces nor as texts to be copied without regard to circumstance, but as authoritative witnesses to a charism that must be embodied faithfully in the present age. Francis’s insistence that the Lord gave him brothers shall shape the Order’s understanding that fraternity is received, not selected only according to preference.'
  },
  {
    number: 14,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: 'Contemplation and Transformation',
    quote: {
      text: 'After the Lord gave me some brothers, no one showed me what I had to do, but the Most High Himself revealed to me that I should live according to the pattern of the Holy Gospel.',
      source: 'Saint Francis, Testament'
    },
    content: 'After the example of Saint Clare, members shall contemplate Christ as the mirror in whom the poverty of the manger, the humility of public ministry, the charity of the Cross and the glory of resurrection are revealed. Contemplation shall lead to transformation: what members gaze upon in Christ they shall seek to embody in their own lives. They shall hold together contemplation and loving service, guarding the interior dwelling place of the heart while allowing prayer to make them more available to the needs of others.'
  },
  {
    number: 15,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: '3. Ecclesial Life',
    content: 'The Order lives within the Liberal Catholic Apostolic Church and receives the sacramental, liturgical and apostolic life of the Church with gratitude and reverence. Following Saint Francis and Saint Clare, members shall love the Church not as an abstract institution but as the Body of Christ in which the Gospel is proclaimed, the Sacraments are celebrated and diverse vocations are gathered into communion. They shall show particular reverence for the Holy Eucharist, the words of Scripture and those entrusted with sacramental and teaching ministry. They shall work humbly for the Church’s holiness and renewal, remaining faithful to the Gospel, properly formed conscience, safeguarding obligations and lawful ecclesiastical discipline.'
  },
  {
    number: 16,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: '4. One Fraternity',
    content: 'Friars and sisters form one spiritual family, received from the Lord as gift and responsibility. Ordination, gender, marital status, occupation, wealth, education, health or office establish no higher grade of religious dignity. Members shall honour one another’s gifts, bear one another’s burdens, correct with gentleness, rejoice in another’s good and ensure that no one is abandoned in sickness, poverty, grief or isolation.'
  },
  {
    number: 17,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: 'Fraternal Communication & Consultation',
    content: 'Fraternity requires regular presence, truthful communication and a willingness to remain in relationship when differences arise. Members shall avoid cliques, favouritism and competition. Decisions affecting common life should be approached through prayer, consultation and attention to quieter voices. Where tension occurs, members shall distinguish ordinary disagreement from misconduct, seek direct and charitable conversation where appropriate, and use safeguarding or formal procedures whenever protection, justice or accountability require them.'
  },
  {
    number: 18,
    section: 'rule',
    chapterOrPart: 'Chapter I: Purpose and Franciscan Identity',
    title: 'Clarean Tenderness & Mutual Care',
    content: 'Following Saint Clare’s form of life, members shall make known their needs to one another with confidence and shall respond with the tenderness of a mother caring for her child. Fraternal love shall be practical as well as affectionate, attentive to food, shelter, illness, grief, loneliness, disability and spiritual distress. Those who receive care shall do so without shame, and those who give it shall avoid possessiveness or control. In this way the fraternity shall become a place where the charity of Christ is both proclaimed and experienced.'
  },

  // THE RULE - CHAPTER II: PRAYER AND CONVERSION (19-26)
  {
    number: 19,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    quote: {
      text: 'Let them desire above all things to have the Spirit of the Lord and His holy activity.',
      source: 'Saint Francis, Later Rule, X'
    },
    content: 'Prayer is the breath of the Franciscan life and conversion its daily movement. Following Francis, members shall desire above all things to possess the Spirit of the Lord and his holy activity. Devotion is not withdrawn from life: it purifies desire, orders action, exposes self-deception and makes the heart available for mercy. The disciplines of this chapter are therefore means of communion, freedom and renewal rather than measures of spiritual status.'
  },
  {
    number: 20,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: '5. Daily Prayer',
    quote: {
      text: 'Place your mind before the mirror of eternity; place your soul in the brilliance of glory.',
      source: 'Saint Clare, Third Letter to Agnes of Prague'
    },
    content: 'Members shall maintain a faithful rhythm of Morning and Evening Prayer, Scripture, personal prayer, intercession and recollection, adapted reasonably to health, family and work. Prayer shall not be treated merely as a task completed, but as the daily turning of the whole person towards God. When the full Office cannot be prayed, a simpler form shall be used faithfully rather than prayer being abandoned.'
  },
  {
    number: 21,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: 'Ordinary Pattern of Devotion',
    content: 'The ordinary pattern shall include an offering of the day, Morning and Evening Prayer, a passage of Holy Scripture, intercession for the Church, the world, the Order and those in need, and a brief examination before rest. Members should cultivate periods of silence, lectio divina and contemplative prayer according to capacity. Persistent difficulty in prayer should be shared honestly with a suitable companion; dryness is not failure, and illness, disability, caring duties or crisis call for compassionate adaptation rather than abandonment of the life of prayer.'
  },
  {
    number: 22,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: '6. Eucharist',
    content: 'The Holy Eucharist shall stand at the heart of the Order’s life. Members shall participate regularly according to opportunity and ecclesiastical discipline, preparing with recollection and responding with thanksgiving and service. With Saint Francis, they shall contemplate in the Eucharist the same humility by which the Son of God descended into the poverty of human flesh and continues to give himself under humble signs. They shall reverence Christ’s sacramental presence and allow his self-emptying love to shape their use of time, possessions and authority, their relationships with others, and their willingness to become lesser ones in service.'
  },
  {
    number: 23,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: 'Eucharistic Reverence & Fruit',
    quote: {
      text: 'In this world, I see nothing materially of the most high Son of God except His most holy Body and Blood.',
      source: 'Saint Francis, Testament'
    },
    content: 'In the Eucharist members contemplate the humility of God, who gives himself under ordinary signs and gathers many into one Body. They shall approach with faith, prepare by reconciliation where needed, participate attentively and continue the liturgy through works of mercy. Churches, vessels, reserved Sacrament and the written words by which the mysteries are celebrated shall be treated with fitting care. Eucharistic devotion must bear fruit in reverence for Christ present in people who are hungry, wounded, rejected or forgotten.'
  },
  {
    number: 24,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: '7. Conversion and Penance',
    quote: {
      text: 'The Lord gave me, Brother Francis, thus to begin doing penance.',
      source: 'Saint Francis, Testament'
    },
    content: 'The Franciscan life is a continuing return to God. Members shall practise honest examination of life, repentance, forgiveness, restitution where harm has been done, and reconciliation wherever possible. They shall make responsible use of sacramental confession, spiritual direction and pastoral counsel, avoiding both complacency and scrupulosity, and trusting that mercy calls the sinner not to shame but to renewed faithfulness.'
  },
  {
    number: 25,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: '8. Contemplation, Fasting and Praise',
    content: 'Members shall safeguard silence and contemplation so that action may arise from prayer and prayer may open the heart to service. They shall practise suitable fasting or another penitential discipline, particularly on Fridays and in the Church’s penitential seasons, with due regard for health and family duties. In every circumstance they shall cultivate gratitude and praise, recognising every good as coming from God and returning all honour to him.'
  },
  {
    number: 26,
    section: 'rule',
    chapterOrPart: 'Chapter II: Prayer and Conversion',
    title: 'The Sign of a Changed Life',
    content: 'Penance shall ordinarily include moderation, almsgiving, voluntary service, restraint in speech and consumption, and willing acceptance of the ordinary costs of faithful love. Members shall not undertake extreme practices without prudent advice, nor impose private disciplines upon others. The fullest sign of penance is a changed life: pride yielding to humility, resentment to forgiveness, wastefulness to stewardship, avoidance to compassionate presence, and self-protection to responsible service.'
  },

  // THE RULE - CHAPTER III: THE EVANGELICAL COUNSELS (27-34)
  {
    number: 27,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    content: 'The evangelical counsels conform the member to Christ in freedom and love. In a dispersed order they are not reduced to monastic forms, nor diluted into vague aspiration. Simplicity orders the use of goods; chastity orders love and relationship; obedience orders freedom towards God and the common good; minority orders power as service. Each counsel shall be interpreted according to vocation and circumstance, but all members are accountable for its sincere practice.'
  },
  {
    number: 28,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: '9. Simplicity and Poverty of Spirit',
    quote: {
      text: 'Those who came to receive life gave whatever they had to the poor… We desired nothing more.',
      source: 'Saint Francis, Testament'
    },
    content: 'Members may own property, earn income and provide prudently for spouses, children, dependants, health and old age. Yet, in the spirit of Saint Francis and Saint Clare, they shall seek to live without anything of their own: not by denying lawful ownership or family responsibility, but by refusing possessiveness and receiving all things as gifts entrusted by God for responsible use and generous sharing. They shall hold all goods as stewards, resist the illusion that possessions confer security, worth or superiority, review their consumption, avoid needless luxury and remain ready to give. Franciscan poverty shall be expressed through simplicity, gratitude, solidarity with people who are poor, freedom from greed and dependence upon divine providence, so that concern for property never closes the heart to a neighbour in need.'
  },
  {
    number: 29,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: 'Ethical Stewardship & Consumption',
    content: 'Members shall make periodic, honest review of income, expenditure, possessions, debt, investments and patterns of consumption. They shall seek lawful and ethical use of resources, avoid waste and ostentation, and practise regular giving proportionate to means. Decisions about housing, transport, technology, clothing and leisure should reflect sufficiency rather than display. Those with abundance should ask how it may serve others; those experiencing poverty shall not be shamed, and receiving assistance shall never be treated as failure in Franciscan life.'
  },
  {
    number: 30,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: '10. Chastity',
    content: 'Members shall live chastity according to their state of life as an integrated love of God, self and neighbour. Married members live faithful and mutual self-giving within marriage; single members live integrity, friendship and responsible boundaries; those freely called to consecrated celibacy shall be faithful to that commitment. All shall reject exploitation, manipulation and secrecy, and shall treat every person with reverence rather than possession.'
  },
  {
    number: 31,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: 'Boundaries, Freedom & Safeguarding',
    content: 'Chastity requires truthfulness, consent, fidelity, appropriate boundaries and freedom from every form of coercion, harassment, grooming or abuse. Members shall cultivate mature friendship and shall not use spiritual authority to create emotional dependency. They shall respect privacy without permitting secrecy to conceal harm. Where relationships become disordered or boundaries fail, members shall seek prompt pastoral and, where appropriate, professional help, always observing safeguarding duties.'
  },
  {
    number: 32,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: '11. Obedience',
    content: 'Obedience is attentive listening to God through the Gospel, prayer, conscience, the Church, this Rule, legitimate authority and the voice of fraternity. It requires members to lay aside self-will, speak truthfully, listen patiently and seek the common good. Ministers shall command nothing contrary to the Gospel, civil law, safeguarding, conscience or reasonable family obligation; no obedience may require unlawful, abusive, degrading or unsafe conduct.'
  },
  {
    number: 33,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: 'Conscience & Accountability in Governance',
    content: 'A member who receives a direction that appears imprudent shall seek clarification respectfully and may request review. A direction contrary to law, safeguarding, conscience properly formed, professional duty or the welfare of a dependant must not be obeyed. Superiors shall give reasons for significant decisions, keep appropriate records, avoid conflicts of interest and provide access to appeal. Members, for their part, shall not invoke conscience casually to avoid every inconvenience, but shall discern prayerfully, seek counsel and accept legitimate communal obligations.'
  },
  {
    number: 34,
    section: 'rule',
    chapterOrPart: 'Chapter III: The Evangelical Counsels',
    title: '12. Minority and Authority',
    content: 'Members shall be lesser ones among the people of God, following the humility of Christ and choosing service over privilege, solidarity over social distance and companionship over domination. They shall willingly associate with those whom society overlooks, fears or excludes, and shall resist clericalism, prestige, entitlement and every use of religion to secure influence. Those entrusted with authority shall wash the feet of the fraternity in spirit: consulting, encouraging, correcting with mercy, remaining accountable and seeking the good of the least. No member shall use religious profession, ordination, knowledge, title or office for status, control or personal advantage.'
  },

  // THE RULE - CHAPTER IV: FAMILY, WORK AND DISPERSED LIFE (35-42)
  {
    number: 35,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    content: 'The dispersed Franciscan vocation is ordinarily lived in households, workplaces, neighbourhoods and local churches. These are not interruptions to religious life but its primary field. Members shall resist a division between sacred observance and ordinary responsibility. The quality of their presence at home, reliability at work, use of time, care of health and fidelity to fraternity are essential expressions of profession.'
  },
  {
    number: 36,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: '13. Family',
    content: 'Marriage and family responsibilities are integral to the Franciscan vocation of members who are spouses, parents or carers. The Order shall not become a rival to the family, nor shall religious activity be used to evade ordinary duties of love, presence and provision. Members shall seek consent and understanding within the household, practise patience in domestic life and recognise care given at home as authentic service of Christ.'
  },
  {
    number: 37,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: 'Household Respect & Non-Member Spouses',
    content: 'Members shall plan observance with realistic regard to spouses, partners, children, dependants and shared finances. Major religious commitments affecting the household should be discussed openly. Care work, domestic labour and faithful presence during illness or crisis may properly take precedence over optional gatherings. The fraternity should support, rather than burden, households and shall never presume authority over a non-member spouse or family member.'
  },
  {
    number: 38,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: '14. Work',
    quote: {
      text: 'I worked with my hands, and I still desire to work; and I earnestly desire all brothers to give themselves to honest work.',
      source: 'Saint Francis, Testament'
    },
    content: 'Honest secular or ministerial work is received as grace and offered to God. Members shall work faithfully and humbly, not extinguishing the spirit of prayer and devotion to which all other things must contribute. They shall act with integrity, diligence, fairness and compassion, refuse exploitative gain, respect the dignity of colleagues and share from the fruits of labour according to their means.'
  },
  {
    number: 39,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: 'Dignity of All Labour & Sabbath Rest',
    content: 'Members shall not despise manual, domestic, professional or unpaid work. They shall observe lawful and ethical standards, honour agreements, safeguard confidential information and resist discrimination, corruption and exploitation. Rest, recreation and Sabbath are necessary to sustainable service and shall not be treated as laziness. Unemployment, retirement or incapacity do not diminish vocation; prayer, neighbourliness, caregiving and patient endurance may become the member’s principal work.'
  },
  {
    number: 40,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: '15. The Home and Hospitality',
    content: 'Each home may become a little place of prayer, hospitality, simplicity and peace. Members shall welcome others according to their means, with prudence, safeguarding and the consent of those with whom they live. They shall never impose religious obligations upon family members who have not undertaken them, but shall witness chiefly through gentleness, service, forgiveness and joy.'
  },
  {
    number: 41,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: '16. Fraternity in Dispersion',
    content: 'Members shall maintain active contact with the Order through local, regional or digital fraternities, annual gatherings, correspondence and mutual prayer. They shall not absent themselves through indifference, nor allow another member to disappear unnoticed. Fraternal contact shall include prayer, formation, honest sharing of life, practical assistance and discerning together how the Gospel is to be lived.'
  },
  {
    number: 42,
    section: 'rule',
    chapterOrPart: 'Chapter IV: Family, Work and Dispersed Life',
    title: 'Pastoral Care Circles & Accommodations',
    content: 'Every member shall belong to an identifiable circle of pastoral care and shall maintain agreed contact. Fraternities should keep a simple pattern of gathering, attendance and welfare contact, while respecting privacy and data protection. Absence caused by illness, cost, disability, work or family duty shall be met with accommodation. Persistent disengagement should prompt gentle enquiry, not judgement. Members shall notify an appropriate officer when circumstances seriously affect observance, so that support and suitable adaptation can be arranged.'
  },

  // THE RULE - CHAPTER V: MISSION, PEACE AND CREATION (43-51)
  {
    number: 43,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    content: 'Francis sent the brothers among the people to bear peace rather than contention. The mission of the Order is therefore exercised by presence before programme, example before claim, and service before status. Members shall proclaim Christ in ways suited to their vocation, respecting conscience and never exploiting vulnerability. Works of mercy and justice, care for creation and reconciliation belong to one mission because all arise from the Gospel of peace.'
  },
  {
    number: 44,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: '17. Service and Mercy',
    content: 'Every member shall undertake service appropriate to gifts, health and circumstances. Following Francis, members shall not remain at a safe distance from suffering but shall allow the Lord to lead them into merciful encounter. Hidden service, caregiving, listening, intercession and ordinary acts of kindness possess genuine apostolic value and shall not be considered lesser than public ministry.'
  },
  {
    number: 45,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: 'Two Ways of Going Among Others',
    content: 'Following the Earlier Rule, members shall recognise two complementary ways of going among others. The first is to avoid quarrels and disputes, to be subject to every human creature for God’s sake, and to confess by their manner of life that they are Christians. The second, when they discern that it pleases God, is to proclaim the Word openly. In both forms, mission shall arise from prayer, humility and charity; it shall never rely upon coercion, spiritual superiority or contempt for another person’s conscience.'
  },
  {
    number: 46,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: '18. The Poor and Excluded',
    content: 'Members shall encounter people experiencing poverty, exclusion, illness or suffering as brothers and sisters bearing God-given dignity, never merely as objects of charity. They shall listen before presuming to speak, receive as well as give, and resist attitudes or structures that humiliate or discard. Where possible, service shall include both immediate mercy and patient work for justice.'
  },
  {
    number: 47,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: 'Service Shaped With Others',
    content: 'Service shall be shaped with, and not merely for, the people concerned. Members shall learn the realities of their locality and cooperate with competent churches, charities and public services. They shall guard against saviourism, dependency and intrusive curiosity; preserve confidentiality; recognise professional limits; and refer needs responsibly. Advocacy shall be truthful, non-partisan in the proper ecclesial sense, attentive to those directly affected and directed towards the dignity and common good of all.'
  },
  {
    number: 48,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: '19. Peace',
    quote: {
      text: 'As they announce peace with their lips, let them be careful to have it even more within their own hearts.',
      source: 'Saint Francis, Legend of the Three Companions'
    },
    content: 'Members shall announce peace first by becoming peaceable in heart, speech and conduct. They shall resist hatred, vengeance, dehumanising speech, factionalism and needless conflict, and shall seek reconciliation wherever truth and safety permit. When entering any place or conversation, they should bear the Franciscan greeting of peace in spirit, refusing quarrelsome witness and speaking with humility even amid disagreement.'
  },
  {
    number: 49,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: 'Peacemaking, Digital Speech & Truth',
    content: 'Peace-making includes disciplined speech, patient listening, refusal of contempt and willingness to repair harm. Members shall be cautious in public controversy and online communication, verify claims before sharing them and avoid language that strips opponents of dignity. Reconciliation does not require a victim to resume unsafe contact, conceal wrongdoing or abandon lawful protection. Where grave injustice persists, members may engage in peaceful advocacy, protest and non-cooperation consistent with conscience, charity and law.'
  },
  {
    number: 50,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: '20. Creation',
    content: 'Members shall receive creation as gift, kin and summons to praise the Creator. With Saint Francis they shall address the elements and creatures not as possessions without limit but as brothers and sisters that reveal God’s goodness and sustain the common household of life. They shall practise gratitude, restraint, responsible consumption and practical ecological care in food, travel, energy, purchasing and waste. Love for creation shall remain inseparable from love for people, especially those who bear the heaviest burdens of environmental harm, and from praise of the Most High to whom every creature ultimately belongs.'
  },
  {
    number: 51,
    section: 'rule',
    chapterOrPart: 'Chapter V: Mission, Peace and Creation',
    title: 'Sister Earth & Practical Ecological Care',
    content: 'Each member shall include attainable creation-care commitments within the Personal Rule and review them without rivalry or perfectionism. Fraternities should consider a shared environmental work or practical act of restoration. Ecological choices shall take account of disability, income, location and family need. Members shall connect environmental responsibility with concern for workers, communities and future generations, recognising that care for Sister Earth is inseparable from justice for people made vulnerable by pollution, scarcity and climate disruption.'
  },

  // THE RULE - CHAPTER VI: FORMATION, PROFESSION AND PERSEVERANCE (52-62)
  {
    number: 52,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    content: 'Formation enables a free and mature response to grace. It shall test desire, deepen understanding, cultivate habits and reveal whether the candidate can live fraternity responsibly. Profession then gathers prayer, counsel, service and common life into a stable promise. Because no profession removes human limitation, the Order shall unite high expectation with mercy, accountability with due process, and perseverance with prudent adaptation.'
  },
  {
    number: 53,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: '21. Formation',
    content: 'Formation is lifelong because conversion is never finished. Members shall study Scripture, the Earlier and Later Rules, the Testament and other Franciscan sources, together with theology, Church life, ethics, safeguarding, peace, justice and care for creation. Study shall lead to prayer and practice rather than pride, and members shall remain teachable, ready to receive wisdom from the learned, the poor, the young, the old and one another.'
  },
  {
    number: 54,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: 'Holistic Formation & Standards',
    content: 'Initial and continuing formation shall include guided reading, prayer, written reflection, practical service, participation in fraternity and regular conversation with a formator. It shall address emotional and spiritual maturity, healthy boundaries, safeguarding, conflict, digital conduct, family responsibilities and the distinction between religious and ordained authority. Progress shall be reviewed honestly and recorded appropriately. Time frames are minimums rather than entitlements: admission to each stage depends upon readiness, freedom, compatibility with the charism and the good of both person and fraternity.'
  },
  {
    number: 55,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: '22. Personal Rule',
    content: 'Each novice and professed member shall keep a Personal Rule of Life adapted to actual circumstances. It shall ordinarily address prayer, Eucharist, Scripture, simplicity, family and work, fasting or penance, fraternity, service, rest, study and care of health. It shall be reviewed regularly with an appointed companion so that it remains demanding enough to foster growth, merciful enough to be sustainable and faithful to this common Rule.'
  },
  {
    number: 56,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: 'Adaptability of Personal Rule',
    content: 'The Personal Rule shall state normal practices, reasonable alternatives for disrupted circumstances and a process of review. Commitments should be specific enough to guide conduct without becoming a source of anxiety or false precision. Material changes in marriage, employment, health, caring duty, residence or ministry shall prompt revision in consultation with the appointed companion. The common Rule remains normative; the Personal Rule applies it and may not remove its essential requirements without proper dispensation.'
  },
  {
    number: 57,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: '23. Profession',
    content: 'Temporary and perpetual profession are free commitments to live the Holy Gospel according to this Rule in obedience, without anything of one’s own, and in chastity according to each member’s state of life. Within the dispersed character of the Order, these promises are expressed through prayer, fraternity, simplicity, responsible stewardship, minority and service. Profession is not a claim to perfection but a public self-offering and a promise to persevere in conversion with the help of divine grace and the fraternity. Members shall renew the spirit of their profession frequently and shall neither seek privileges from it nor judge those whose vocation differs from their own.'
  },
  {
    number: 58,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: 'Discernment & Reception of Profession',
    content: 'Before profession, the candidate shall understand the promises, the proper law of the Order, the forms of authority and accountability, the provision for departure and the continuing responsibilities of family and civil life. The fraternity shall discern without haste and shall neither reward conformity of personality nor overlook serious concerns from a desire to increase numbers. Profession should be received publicly in prayer, recorded accurately and accompanied by continuing pastoral care. Anniversaries may be occasions for thanksgiving, examination and renewal.'
  },
  {
    number: 59,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: '24. Perseverance and Correction',
    quote: {
      text: 'What you hold, may you always hold. What you do, may you always do and never abandon.',
      source: 'Saint Clare, Second Letter to Agnes of Prague'
    },
    content: 'Members shall persevere in the promised life with patience, guarding against discouragement, spiritual pride and hardness of heart. Failure shall be met first with truth, repentance, mercy, practical amendment and renewed effort. Fraternal correction shall be private where possible, proportionate and directed towards restoration; discipline, where required, shall protect persons, observe due process and never become humiliation or revenge.'
  },
  {
    number: 60,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: 'Guarding Gospel Joy',
    content: 'Members shall guard the joy of the Gospel, not as constant cheerfulness but as grateful confidence that every good comes from God. In trial they shall resist bitterness, self-pity and the temptation to abandon fraternity. They shall give thanks for grace received through others, rejoice in the good done by another, and return all praise to God. Joy, humility and gratitude shall be signs that perseverance is becoming evangelical rather than merely stubborn.'
  },
  {
    number: 61,
    section: 'rule',
    chapterOrPart: 'Chapter VI: Formation, Profession and Perseverance',
    title: 'Truthful Perseverance & Restoration',
    content: 'Perseverance does not mean remaining unchanged or concealing difficulty. Members shall ask for help early and receive appropriate spiritual, medical, psychological or safeguarding support. The fraternity should distinguish temporary weakness, persistent neglect and serious misconduct, responding proportionately. Restoration requires acknowledgement of harm, protection of those affected, changed behaviour and reasonable accountability; forgiveness must never be demanded as a substitute for justice. Where continued membership is no longer truthful or safe, leave, release or dismissal may be pursued according to the Constitutions without denying the person’s dignity.'
  },
  {
    number: 62,
    section: 'rule',
    chapterOrPart: 'Conclusion of the Rule',
    title: 'Pax et Bonum',
    content: 'Let the brothers and sisters remember that the Lord has called them together and entrusted them with this form of Gospel life. Let them love one another in deed, be gentle with the burdened, courageous before injustice, reverent in worship, faithful in prayer, honest in work, simple in possessions, careful in speech and joyful in service. Let them begin again each day in penance and gratitude; go among others without quarrelling or claiming superiority; honour the Body of Christ, the words of Scripture and the dignity of every person; and receive the whole creation as a song of praise. Let every home become a place of prayer, every table a place of welcome, every workplace a field of witness, every wound an invitation to mercy and every encounter an opportunity to recognise and serve Christ. Peace and all good.'
  },

  // THE CONSTITUTIONS (63-146)
  {
    number: 63,
    section: 'constitutions',
    chapterOrPart: 'Preamble to the Constitutions',
    content: 'These Constitutions give practical and juridical expression to the Rule. They regulate membership, formation, profession, government, fraternity, safeguarding, individual responsibility for financing vocation and administration. They shall be interpreted according to the Gospel, the Franciscan spirit, charity, responsible freedom, the Rule and the lawful discipline of the Liberal Catholic Apostolic Church.'
  },
  {
    number: 64,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.1 Name',
    content: 'The community is the Order of Saints Francis and Clare and may use the abbreviation OSFC.'
  },
  {
    number: 65,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.2 Nature',
    content: 'OSFC is a Franciscan religious order of the Liberal Catholic Apostolic Church, possessing its own Rule, Constitutions, government, formation, customs, registers and forms of profession.'
  },
  {
    number: 66,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.3 Patrons',
    content: 'Saint Francis and Saint Clare are the principal patrons.'
  },
  {
    number: 67,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.5 Ecclesial Character and Inclusion',
    content: 'OSFC shares the inclusive, progressive and liberal Catholic character of the LCAC, its sacramental life and Apostolic Succession. Admission, formation, profession, office and participation shall be open without discrimination unrelated to genuine suitability, vocation, safeguarding or the essential requirements of the Rule.'
  },
  {
    number: 68,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.6 Suitability and Dignity',
    content: 'Radical inclusion does not remove standards. Every person shall be treated with dignity, while suitability for profession or office shall be discerned by consistent criteria of emotional and human maturity, spiritual accountability, pastoral and psychological safety, and demonstrated practical fruit. Title, ordination, friendship, seniority, wealth or personal influence shall never substitute for suitability.'
  },
  {
    number: 69,
    section: 'constitutions',
    chapterOrPart: 'Article I: Name, Nature and Charism',
    title: '1.4 Charism',
    content: 'The charism is to follow Jesus Christ according to the Holy Gospel through prayer, simplicity, humility, minority, fraternity, reconciliation, service and reverence for creation.'
  },
  {
    number: 70,
    section: 'constitutions',
    chapterOrPart: 'Article II: Proper Law',
    title: '2.1 Order of Norms',
    content: 'The Order is governed by applicable LCAC Canon Law, the Rule, these Constitutions, the Customary and Directory, and lawful decisions of the General Chapter.'
  },
  {
    number: 71,
    section: 'constitutions',
    chapterOrPart: 'Article II: Proper Law',
    title: '2.2 Rule and Constitutions',
    content: 'The Rule expresses the spiritual form of life; the Constitutions regulate its practical implementation.'
  },
  {
    number: 72,
    section: 'constitutions',
    chapterOrPart: 'Article II: Proper Law',
    title: '2.3 Subsidiary Norms',
    content: 'The General Chapter may adopt formation, safeguarding, liturgical and electoral regulations consistent with the Rule and Constitutions.'
  },
  {
    number: 73,
    section: 'constitutions',
    chapterOrPart: 'Article II: Proper Law',
    title: '2.4 Binding Standards',
    content: 'All members, officers, fraternities and ministries of OSFC are bound by applicable civil law, the LCAC Canons and Code of Conduct, safeguarding requirements, lawful decrees of competent LCAC authority, and the proper law of the Order. No custom, private agreement or local practice may excuse non-compliance.'
  },
  {
    number: 74,
    section: 'constitutions',
    chapterOrPart: 'Article II: Proper Law',
    title: '2.5 Interpretation and Conflict',
    content: 'These Constitutions shall be interpreted in favour of the Gospel, Franciscan minority, human dignity, pastoral safety, natural justice and the common good. Where norms conflict, the higher lawful norm prevails. Questions of interpretation shall first be considered by the Minister General and Council and, where they concern LCAC authority, doctrine, safeguarding or discipline, referred to the competent LCAC authority.'
  },
  {
    number: 75,
    section: 'constitutions',
    chapterOrPart: 'Article III: Membership',
    title: '3.1 Stages',
    content: 'The stages are Inquirer, Postulant, Novice, Temporary Profession and Perpetual Profession.'
  },
  {
    number: 76,
    section: 'constitutions',
    chapterOrPart: 'Article III: Membership',
    title: '3.2 Associates',
    content: 'Companions or Associates may share the spirituality and works of OSFC without religious profession.'
  },
  {
    number: 77,
    section: 'constitutions',
    chapterOrPart: 'Article III: Membership',
    title: '3.3 Equality',
    content: 'The Order is one family of friars and sisters. No separate class of religious dignity arises from ordination, gender or marital status.'
  },
  {
    number: 78,
    section: 'constitutions',
    chapterOrPart: 'Article III: Membership',
    title: '3.4 Rights of Members',
    content: 'Every member has the right to receive the Rule and proper law, participate according to status, receive appropriate formation and pastoral care, be heard before adverse decisions, make a complaint without retaliation, have personal information handled responsibly, and appeal as provided by these Constitutions.'
  },
  {
    number: 79,
    section: 'constitutions',
    chapterOrPart: 'Article III: Membership',
    title: '3.5 Duties of Members',
    content: 'Every member shall live the Rule honestly, maintain contact with the fraternity, complete required formation, observe safeguarding and confidentiality, disclose relevant conflicts or restrictions, cooperate with lawful oversight, protect the reputation of the Church and Order, and report serious risk, abuse or misconduct through the proper channels.'
  },
  {
    number: 80,
    section: 'constitutions',
    chapterOrPart: 'Article IV: Lay, Ordained, Married and Single Members',
    title: '4.1 Ordained Members',
    content: 'Ordination confers sacramental responsibilities but does not create a higher grade of OSFC membership. Religious government and episcopal jurisdiction shall remain properly distinguished. In accordance with the LCAC model of clergy service, every LCAC cleric within the Order serves as a volunteer, non-stipendiary minister, not as an employee of the LCAC or OSFC under the intended ecclesiastical arrangement. Ordination, licensing, religious profession and appointment to religious office do not of themselves constitute a contract of employment or confer entitlement to a salary or stipend. This statement describes the intended arrangement; any employment or worker status and statutory rights shall be determined by applicable civil law and the actual circumstances, not by designation alone.'
  },
  {
    number: 81,
    section: 'constitutions',
    chapterOrPart: 'Article IV: Lay, Ordained, Married and Single Members',
    title: '4.2 Marriage',
    content: 'Marriage and profession are compatible vocations. The care of spouse, children and dependants is integral to the member’s Franciscan life.'
  },
  {
    number: 82,
    section: 'constitutions',
    chapterOrPart: 'Article IV: Lay, Ordained, Married and Single Members',
    title: '4.3 Single Life',
    content: 'Single members live chastity appropriate to their state and remain free to discern marriage unless they have separately and freely undertaken consecrated celibacy.'
  },
  {
    number: 83,
    section: 'constitutions',
    chapterOrPart: 'Article IV: Lay, Ordained, Married and Single Members',
    title: '4.4 Offices',
    content: 'Except where an office intrinsically requires ordination, suitable lay or ordained perpetually professed members may hold office.'
  },
  {
    number: 84,
    section: 'constitutions',
    chapterOrPart: 'Article IV: Lay, Ordained, Married and Single Members',
    title: '4.5 Distinction of Authority',
    content: 'Religious profession does not confer Holy Orders, sacramental faculties, civil employment, episcopal jurisdiction or authority over a member’s spouse, family, employer or private property. Ordination does not by itself confer religious office. Every ministry shall operate only within the authority actually granted.'
  },
  {
    number: 85,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.1 Admission',
    content: 'Candidates shall be baptised Christians of sincere faith, appropriate maturity and willingness to live the Rule, undertake formation and comply with safeguarding requirements.'
  },
  {
    number: 86,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.2 Postulancy',
    content: 'Postulancy ordinarily lasts six to twelve months and introduces Franciscan spirituality, prayer, fraternity, LCAC life, safeguarding and discernment.'
  },
  {
    number: 87,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.3 Novitiate',
    content: 'The novitiate ordinarily lasts at least twelve months and provides systematic formation in Scripture, Franciscan sources, prayer, evangelical counsels, fraternity, peace, creation care, ecclesiology, ethics and safeguarding.'
  },
  {
    number: 88,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.4 Formation Companion',
    content: 'Each postulant and novice should have an appointed formator, Guardian or Formation Companion.'
  },
  {
    number: 89,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.5 Personal Rule',
    content: 'During the novitiate the candidate develops a Personal Rule of Life adapted to actual circumstances.'
  },
  {
    number: 90,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.6 Application and References',
    content: 'An applicant shall provide the information reasonably required to discern vocation and safety, including identity, baptismal status, ecclesial history, relevant references, criminal-record or safeguarding checks where required, and candid disclosure of any restriction, investigation or circumstance materially affecting suitability. Information shall be proportionate, confidential and lawfully handled.'
  },
  {
    number: 91,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.7 Four Pillars of Formation',
    content: 'Formation and review shall address: emotional and human maturity, including self-awareness and healthy conflict; spiritual accountability, including prayer and servant leadership; pastoral and psychological safety, including boundaries and use of power; and practical fruit, shown through reliable service. Serious narcissistic, exploitative, coercive, deceptive or persistently volatile conduct is incompatible with admission or advancement while it remains unaddressed.'
  },
  {
    number: 92,
    section: 'constitutions',
    chapterOrPart: 'Article V: Admission and Formation',
    title: '5.8 Assessment and Review',
    content: 'Admission to each stage requires a written recommendation from the formator and a reasoned decision by the competent authority. The candidate shall receive constructive notice of areas requiring growth. A stage may be extended, paused or ended where readiness is not established; completion of a minimum period creates no entitlement to profession.'
  },
  {
    number: 93,
    section: 'constitutions',
    chapterOrPart: 'Article VI: Profession',
    title: '6.1 Temporary Profession',
    content: 'After satisfactory novitiate a candidate may make temporary profession, ordinarily for one year at a time.'
  },
  {
    number: 94,
    section: 'constitutions',
    chapterOrPart: 'Article VI: Profession',
    title: '6.2 Perpetual Profession',
    content: 'Perpetual profession is a lifelong commitment and requires freedom, maturity, completed formation, faithful fraternity and an approved Personal Rule.'
  },
  {
    number: 95,
    section: 'constitutions',
    chapterOrPart: 'Article VI: Profession',
    title: '6.3 Reception',
    content: 'Profession is normally received by the Minister General or a duly authorised delegate and entered in the Register of Professions.'
  },
  {
    number: 96,
    section: 'constitutions',
    chapterOrPart: 'Article VI: Profession',
    title: '6.4 Freedom',
    content: 'No person shall be pressured to renew temporary profession or proceed to perpetual profession.'
  },
  {
    number: 97,
    section: 'constitutions',
    chapterOrPart: 'Article VI: Profession',
    title: '6.5 Conditions for Valid Profession',
    content: 'Profession requires adequate age and capacity, freedom from coercion, completion of the required formation, informed assent to the Rule and proper law, acceptance by competent authority, and use of the approved rite before appropriate witnesses. The act and its date shall be recorded promptly.'
  },
  {
    number: 98,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.1 Nature',
    content: 'The General Chapter is the principal deliberative and elective assembly of OSFC, subject to lawful LCAC ecclesiastical authority.'
  },
  {
    number: 99,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.2 Voice and Vote',
    content: 'Perpetually professed members ordinarily possess voice and vote. Participation may be in person or by an authorised electronic means.'
  },
  {
    number: 100,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.3 Competence',
    content: 'The Chapter elects the Minister General, receives reports, reviews formation, determines major policy, considers amendments and discerns the future direction of the Order.'
  },
  {
    number: 101,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.4 Decisions',
    content: 'Prayer, consultation and consensus are preferred; formal voting is used when needed.'
  },
  {
    number: 102,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.5 Convocation and Notice',
    content: 'An ordinary General Chapter shall be held at intervals determined by proper law and at least once during each term of the Minister General. Reasonable written notice shall state the date, means of participation, agenda, elections and proposed constitutional amendments. An extraordinary Chapter may be convoked for urgent grave business.'
  },
  {
    number: 103,
    section: 'constitutions',
    chapterOrPart: 'Article VII: General Chapter',
    title: '7.6 Quorum and Voting',
    content: 'Unless a higher threshold is specified, quorum shall be a majority of those entitled to vote and decisions shall be by a majority of votes cast. Constitutional amendment, dissolution, removal from elected office and other reserved matters require the stated qualified majority. Electronic participation and secure electronic voting are valid when identity, fairness and an adequate record are maintained.'
  },
  {
    number: 104,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.1 Minister General',
    content: 'The Minister General is the principal religious superior and servant of the fraternity, guardian of the Rule and representative of the Order.'
  },
  {
    number: 105,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.2 Term',
    content: 'The Minister General serves for three years and may be re-elected once consecutively.'
  },
  {
    number: 106,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.3 Council',
    content: 'The General Council ordinarily includes the Minister General, Deputy Minister General, Secretary, Director of Formation and additional Councillors as determined by Chapter.'
  },
  {
    number: 107,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.4 Collegiality',
    content: 'Important decisions affecting the whole Order should ordinarily be made collegially with the Council.'
  },
  {
    number: 108,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.5 Guardians',
    content: 'Local or regional fraternities may have Guardians or Local Ministers who exercise pastoral and administrative service, not unrestricted authority.'
  },
  {
    number: 109,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.6 Duties of Office-Holders',
    content: 'Office-holders act as servants of the Order. They shall pray, consult, keep proper records, safeguard confidential information, communicate decisions, remain within delegated authority, avoid favouritism and ensure that pastoral, safeguarding and legal matters are referred to competent persons.'
  },
  {
    number: 110,
    section: 'constitutions',
    chapterOrPart: 'Article VIII: Minister General and Council',
    title: '8.7 Conflicts, Recusal and Accountability',
    content: 'A person with a personal, financial, familial, pastoral or other material conflict shall disclose it and withdraw from decision-making where impartiality could reasonably be questioned. The Council may require recusal. No person shall determine a complaint or appeal concerning their own conduct or a matter in which they were substantially involved.'
  },
  {
    number: 111,
    section: 'constitutions',
    chapterOrPart: 'Article IX: Fraternity and Prayer',
    title: '9.1 Dispersed Character',
    content: 'Common residence is not required. Members may belong to local, regional, national or digital fraternities.'
  },
  {
    number: 112,
    section: 'constitutions',
    chapterOrPart: 'Article IX: Fraternity and Prayer',
    title: '9.2 Meetings',
    content: 'Fraternities gather regularly for prayer, formation, fellowship, mutual support and service.'
  },
  {
    number: 113,
    section: 'constitutions',
    chapterOrPart: 'Article IX: Fraternity and Prayer',
    title: '9.3 Prayer',
    content: 'Morning and Evening Prayer, regular Eucharistic participation, Scripture, contemplation and annual retreat form the ordinary spiritual rhythm, adapted by the Personal Rule.'
  },
  {
    number: 114,
    section: 'constitutions',
    chapterOrPart: 'Article IX: Fraternity and Prayer',
    title: '9.4 Pastoral Care and Attendance',
    content: 'Each member shall belong to an identifiable fraternity or pastoral-care arrangement. Absence caused by health, disability, cost, work or family duty shall be accommodated. Persistent unexplained absence shall prompt discreet welfare contact. Participation records shall be minimal and used for pastoral and administrative purposes only.'
  },
  {
    number: 115,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.1 Simplicity',
    content: 'Members normally retain personal property and income while living simply, generously and responsibly.'
  },
  {
    number: 116,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.2 Family Provision',
    content: 'Members shall make prudent provision for family, housing, health, disability needs and old age.'
  },
  {
    number: 117,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.3 Individual Responsibility',
    content: 'Each individual member is expected to finance his or her own vocation, including personal living costs and the costs of formation, habit, books, travel, retreats and ministry, according to actual circumstances and without neglecting family responsibilities.'
  },
  {
    number: 118,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.4 Personal Provision & Non-Stipendiary Service',
    content: 'All members of the Order, ordained and lay alike, serve on a voluntary, unpaid and non-stipendiary basis. Each member is responsible for supporting himself or herself from his or her own lawful income and financial resources and for financing his or her own vocation. Membership and profession do not create an entitlement to financial maintenance, a stipend, reimbursement or payment of personal expenses by the Order. Members remain responsible for their own income, expenditure and financial commitments. This voluntary arrangement applies equally to religious office, formation and authorised ministry; the Order does not undertake to employ or financially maintain its members. The civil-law safeguard in paragraph 80 applies equally to ordained and lay members. Nothing in this provision excludes any statutory right or obligation arising under applicable civil law.'
  },
  {
    number: 119,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.5 Personal Costs and Sacramental Ministry',
    content: 'Members shall arrange and pay directly for the goods and services needed for their vocation. The Order shall not impose compulsory oblations upon members. No Sacrament, pastoral care or admission decision shall be made conditional upon payment.'
  },
  {
    number: 120,
    section: 'constitutions',
    chapterOrPart: 'Article X: Evangelical Counsels and Property',
    title: '10.6 Sustainable Observance',
    content: 'Members shall plan vocational commitments realistically within their means. Where cost prevents participation in a particular activity, an appropriate low-cost or no-cost alternative should be agreed, consistent with the Rule and family responsibilities. Such accommodation does not transfer responsibility for financing the member’s vocation to the Order.'
  },
  {
    number: 121,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.1 Apostolate',
    content: 'Members undertake suitable works of mercy, ministry, caregiving, intercession, peace-making or creation care according to capacity.'
  },
  {
    number: 122,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.2 Public Witness',
    content: 'Members shall distinguish personal views from official OSFC positions and shall not claim authority to speak for the Order without authorisation.'
  },
  {
    number: 123,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.3 Fraternal Conduct',
    content: 'Members shall avoid gossip, humiliation and factionalism and seek to address ordinary disagreements directly and charitably.'
  },
  {
    number: 124,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.4 Pastoral Boundaries and Use of Power',
    content: 'Members shall recognise the imbalance of power in pastoral, formational and supervisory relationships. They shall not exploit another person for emotional, spiritual, financial or personal benefit; create dependency; seek gifts or favours improperly; or use religious language, office, threats, secrecy or claims of obedience to control another person. Physical contact shall be appropriate, explained and consensual.'
  },
  {
    number: 125,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.5 Confidentiality and Information',
    content: 'Pastoral information shall be kept confidential except where disclosure is required by law, safeguarding, immediate safety or proper ecclesiastical process. The sacramental seal, where applicable to an authorised cleric, shall be governed by LCAC Canon Law. Members shall explain the limits of ordinary pastoral confidentiality and keep notes only where necessary, securely and factually.'
  },
  {
    number: 126,
    section: 'constitutions',
    chapterOrPart: 'Article XI: Apostolate and Conduct',
    title: '11.6 Public Communication and Digital Conduct',
    content: 'No member may speak officially for OSFC or the LCAC without authorisation. Personal public statements shall be clearly identified as such and, where confusion is reasonably possible, accompanied by an appropriate disclaimer. Members shall communicate truthfully and peaceably, respect privacy and copyright, protect confidential information, avoid harassment and dehumanising speech, and never use OSFC platforms for unauthorised fundraising or personal commercial gain.'
  },
  {
    number: 127,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.1 Safeguarding',
    content: 'All members shall observe applicable civil law, LCAC requirements and OSFC safeguarding policies. Religious obedience may never be used to suppress legitimate safeguarding action.'
  },
  {
    number: 128,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.2 Discipline',
    content: 'Formal discipline requires clear notice, reasonable opportunity to respond, impartial consideration, proportionate action, a reasoned decision and a right of appeal.'
  },
  {
    number: 129,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.3 Protective Measures',
    content: 'Temporary restrictions may be imposed when necessary to protect others while a serious matter is investigated; they do not themselves determine guilt.'
  },
  {
    number: 130,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.4 Reporting and Referral',
    content: 'A concern involving a child, vulnerable adult, abuse, grooming, coercion, serious risk, criminal conduct or immediate danger shall be reported without delay to the OSFC Safeguarding Lead, the competent LCAC authority and civil authorities where law or safety requires. Internal procedure shall never delay emergency action or lawful reporting. Retaliation against a person who raises a concern in good faith is prohibited.'
  },
  {
    number: 131,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.5 Complaints and Triage',
    content: 'Complaints may be made in writing or, where necessary, received orally and recorded. They shall be acknowledged, risk-assessed and assigned promptly. A matter may be directed to pastoral resolution, formal investigation, safeguarding procedure, independent review of alleged financial misconduct, or competent LCAC or civil authority. Such review concerns alleged misconduct, not the administration of funds held by the Order, and does not create responsibility for financing a member’s vocation. Mediation shall not be used where there is alleged abuse, coercion, serious power imbalance or risk of further harm.'
  },
  {
    number: 132,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.6 Investigation and Determination',
    content: 'A formal investigation shall be impartial, proportionate and appropriately confidential. The respondent shall receive sufficient particulars and reasonable opportunity to answer, subject to protective needs and lawful restrictions. Relevant evidence shall be considered fairly. The decision shall state findings, reasons, action and appeal rights. The standard of proof for internal disciplinary findings is the balance of probabilities unless higher law requires otherwise.'
  },
  {
    number: 133,
    section: 'constitutions',
    chapterOrPart: 'Article XII: Safeguarding and Discipline',
    title: '12.7 Outcomes and Appeal',
    content: 'Outcomes may include no further action, advice, formation, supervision, apology, restorative steps, warning, restriction, suspension from office or ministry, removal from office, recommendation concerning membership, or referral to LCAC authority. An appeal must identify material procedural error, unreasonable finding, disproportionate outcome or significant new evidence, and shall be determined by a person or panel not previously responsible for the decision.'
  },
  {
    number: 134,
    section: 'constitutions',
    chapterOrPart: 'Article XIII: Leave, Departure and Dismissal',
    title: '13.1 Leave',
    content: 'A member may request temporary leave for illness, bereavement, family responsibility, work, caring duties or vocational discernment.'
  },
  {
    number: 135,
    section: 'constitutions',
    chapterOrPart: 'Article XIII: Leave, Departure and Dismissal',
    title: '13.2 Departure',
    content: 'A temporarily professed member may decline renewal. A perpetually professed member seeking release shall petition the Minister General and any applicable LCAC requirements shall be observed.'
  },
  {
    number: 136,
    section: 'constitutions',
    chapterOrPart: 'Article XIII: Leave, Departure and Dismissal',
    title: '13.3 Dismissal',
    content: 'Dismissal is reserved for sufficiently grave cause and shall follow due process and provide a right of appeal.'
  },
  {
    number: 137,
    section: 'constitutions',
    chapterOrPart: 'Article XIII: Leave, Departure and Dismissal',
    title: '13.4 Pastoral and Administrative Consequences',
    content: 'Leave, departure, release or dismissal shall be recorded clearly, including the effect upon office, representation, habit, insignia, access to records and OSFC platforms. Departure from the Order does not of itself alter Holy Orders or LCAC faculties, which belong to the competent ecclesiastical authority. The Order shall communicate only what is necessary, lawful and pastorally responsible.'
  },
  {
    number: 138,
    section: 'constitutions',
    chapterOrPart: 'Article XIV: Registers',
    title: '14.1 Registers',
    content: 'OSFC shall maintain secure registers of postulants, novices, temporary professions, perpetual professions, offices, transfers, releases, departures, dismissals and deceased members.'
  },
  {
    number: 139,
    section: 'constitutions',
    chapterOrPart: 'Article XIV: Registers',
    title: '14.2 Privacy',
    content: 'Access to personal records shall be limited to proper pastoral, canonical, safeguarding or administrative purposes.'
  },
  {
    number: 140,
    section: 'constitutions',
    chapterOrPart: 'Article XIV: Registers',
    title: '14.3 Record Standards and Retention',
    content: 'Records shall be accurate, dated, attributable, secure and retained for a period proportionate to canonical, safeguarding, legal and administrative need. Safeguarding and disciplinary records shall not be destroyed merely because a person departs. Access, correction, sharing and disposal shall comply with applicable data-protection law and LCAC policy.'
  },
  {
    number: 141,
    section: 'constitutions',
    chapterOrPart: 'Article XV: Amendment and Dissolution',
    title: '15.1 Amendment',
    content: 'Constitutional amendments require appropriate notice and a two-thirds majority at a duly constituted General Chapter, together with any ecclesiastical approval required by LCAC law.'
  },
  {
    number: 142,
    section: 'constitutions',
    chapterOrPart: 'Article XV: Amendment and Dissolution',
    title: '15.2 Dissolution',
    content: 'Lawful dissolution shall be recorded and communicated to members and the competent LCAC authority, with appropriate arrangements for the custody of official records and the pastoral consequences for members.'
  },
  {
    number: 143,
    section: 'constitutions',
    chapterOrPart: 'Article XV: Amendment and Dissolution',
    title: '15.3 Consultation and Approval',
    content: 'Proposed amendments shall be circulated with reasons and sufficient time for prayerful consideration. No text marked draft or proposed shall bind until lawfully adopted and, where required, approved and promulgated by competent LCAC authority. Amendments shall be dated, version-controlled and deposited with the official records.'
  },
  {
    number: 144,
    section: 'constitutions',
    chapterOrPart: 'Article XVI: Promulgation',
    title: '16.1 Effect',
    content: 'These Constitutions, together with the Rule, constitute the proper law governing OSFC religious life, subject to the lawful authority and Canon Law of the Liberal Catholic Apostolic Church.'
  },
  {
    number: 145,
    section: 'constitutions',
    chapterOrPart: 'Article XVI: Promulgation',
    title: '16.2 Spirit',
    content: 'They shall be administered as instruments of Gospel life, never as substitutes for charity, mercy, justice or pastoral wisdom.'
  },
  {
    number: 146,
    section: 'constitutions',
    chapterOrPart: 'Article XVI: Promulgation',
    title: '16.3 Annual Affirmation and Review',
    content: 'Office-holders and those carrying authorised pastoral, formational or representative responsibilities shall affirm compliance with the Rule, these Constitutions, the LCAC Code of Conduct and safeguarding requirements at appointment and thereafter as directed. The Council shall review implementation annually and report material risks, policy gaps and recommended amendments to the General Chapter and competent LCAC authority.'
  },

  // THE CUSTOMARY (147-236)
  {
    number: 147,
    section: 'customary',
    chapterOrPart: 'Foreword to the Customary',
    content: 'The Customary describes how the Rule and Constitutions are ordinarily embodied in daily life. It is a school of Gospel freedom rather than a catalogue of burdens, and it gives the fraternity a recognisable common rhythm without demanding uniform circumstances. Because OSFC is principally dispersed, every custom shall be interpreted with evangelical seriousness, Franciscan simplicity, pastoral wisdom and due regard for health, disability, marriage, family, employment, caring duties, poverty and local opportunity. The Rule remains the spiritual norm, the Constitutions the juridical norm, and the Customary their ordinary practical expression.'
  },
  {
    number: 148,
    section: 'customary',
    chapterOrPart: 'Foreword to the Customary',
    content: 'The Customary exists to serve the Franciscan vocation; the Franciscan vocation does not exist to serve the Customary.'
  },
  {
    number: 149,
    section: 'customary',
    chapterOrPart: 'Foreword to the Customary',
    title: 'Use and Adaptation',
    content: 'No member should multiply observances beyond what can be lived faithfully, peacefully and without neglect of another vocation. A temporary adaptation made for illness, crisis, family care, work or travel does not diminish profession. Where an essential practice is persistently impossible, the member should review the Personal Rule with the appointed companion and agree a sustainable equivalent.'
  },
  {
    number: 150,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'Beginning the Day',
    content: 'Beginning the day. Members should begin with a conscious offering to God before becoming absorbed in ordinary activity. Morning Prayer should ordinarily be prayed each day.'
  },
  {
    number: 151,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'Adapted Office',
    content: 'Where illness, shift work, childcare or serious responsibility prevents the full Office, a shorter form may include an invocation, Psalm, Scripture, intercession and the Lord’s Prayer.'
  },
  {
    number: 152,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'During the Day',
    content: 'Brief recollection, thanksgiving, the Jesus Prayer, the Angelus or silent intercession may be used as circumstances allow.'
  },
  {
    number: 153,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'Evening',
    content: 'Evening Prayer and a brief examination of the day should ordinarily conclude the active day. Compline or a simple commendation to God may be used before sleep.'
  },
  {
    number: 154,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'Examination and Thanksgiving',
    content: 'The evening review should begin with thanksgiving, then consider where grace was received, where love was refused, whether anyone was harmed, and what amendment or reconciliation is needed. It should end in trust rather than self-accusation. Members should seek prompt repair when words, neglect or conduct have caused harm.'
  },
  {
    number: 155,
    section: 'customary',
    chapterOrPart: 'Part I: The Franciscan Day',
    title: 'Silence and Availability',
    content: 'Members should protect at least a brief daily period free from messages, media and unnecessary speech. Silence is not withdrawal from responsibility but attention to God and neighbour. Phones and devices should ordinarily be silenced during prayer, fraternity meetings, pastoral conversation and meals shared as intentional hospitality.'
  },
  {
    number: 156,
    section: 'customary',
    chapterOrPart: 'Part II: The Franciscan Week',
    title: 'Sunday',
    content: 'Sunday Eucharist should ordinarily stand at the centre of the sacramental week.'
  },
  {
    number: 157,
    section: 'customary',
    chapterOrPart: 'Part II: The Franciscan Week',
    title: 'Friday',
    content: 'Friday should normally retain a penitential character through simplicity in food, restraint, prayer, almsgiving, service or another practice stated in the Personal Rule.'
  },
  {
    number: 158,
    section: 'customary',
    chapterOrPart: 'Part II: The Franciscan Week',
    title: 'Health and Fasting',
    content: 'Fasting shall never be practised in a way that damages health. Members for whom dietary fasting is unsuitable should choose another penitential practice.'
  },
  {
    number: 159,
    section: 'customary',
    chapterOrPart: 'Part II: The Franciscan Week',
    title: 'Weekly Review and Sabbath',
    content: 'Once each week members should review the balance of prayer, family, work, rest, service and fraternity. A reasonable period of Sabbath rest should be protected from avoidable work and constant digital activity. Those whose employment prevents Sunday rest should identify another period for worship, renewal, family presence and recreation.'
  },
  {
    number: 160,
    section: 'customary',
    chapterOrPart: 'Part II: The Franciscan Week',
    title: 'Intercession for the Fraternity',
    content: 'Each member should keep the Order, its ministers, those in formation, the sick, the departed and persons commended for prayer within the weekly intercessions. Prayer lists containing sensitive information shall be shared only with consent or in a suitably general form.'
  },
  {
    number: 161,
    section: 'customary',
    chapterOrPart: 'Part III: Sacramental and Devotional Life',
    title: 'Reconciliation',
    content: 'Regular examination of conscience, sacramental reconciliation where available, and spiritual direction or pastoral conversation are encouraged without scrupulosity.'
  },
  {
    number: 162,
    section: 'customary',
    chapterOrPart: 'Part III: Sacramental and Devotional Life',
    title: 'Franciscan Devotions',
    content: 'Members may use the Franciscan Crown, the San Damiano Cross, Stations of the Cross, the Canticle of the Creatures, prayers of Francis and Clare, Nativity devotions and prayers for peace and creation.'
  },
  {
    number: 163,
    section: 'customary',
    chapterOrPart: 'Part III: Sacramental and Devotional Life',
    title: 'Scripture',
    content: 'Regular reading of the Gospels is expected. Members should ask not only what the Gospel means, but how it is to be lived today.'
  },
  {
    number: 164,
    section: 'customary',
    chapterOrPart: 'Part III: Sacramental and Devotional Life',
    title: 'Eucharistic Preparation and Thanksgiving',
    content: 'Members should prepare for the Eucharist by recollection, reconciliation where needed and attention to the readings. After Communion they should allow a period of thanksgiving and ask how Christ’s self-giving is to be continued through service. Those unable to receive sacramentally should remain united through prayer, Scripture and spiritual communion according to LCAC practice.'
  },
  {
    number: 165,
    section: 'customary',
    chapterOrPart: 'Part III: Sacramental and Devotional Life',
    title: 'Holy Scripture and Sacred Things',
    content: 'Bibles, liturgical books, vessels, vesture and places reserved for worship shall be treated with reverence and kept in good order. Damaged sacred items should be repaired or disposed of respectfully. No member may reserve the Blessed Sacrament, celebrate a Sacrament or exercise liturgical ministry without the authority and faculties required by LCAC law.'
  },
  {
    number: 166,
    section: 'customary',
    chapterOrPart: 'Part IV: The Home as Friary',
    title: 'Prayer Place',
    content: 'Where practicable, members may create a simple place for prayer containing a cross, Bible, candle, sacred image, Rule and Office.'
  },
  {
    number: 167,
    section: 'customary',
    chapterOrPart: 'Part IV: The Home as Friary',
    title: 'Family Home',
    content: 'The home of a married member remains first a family home. Spouses and children who are not members shall not be expected to live as if they had entered the Order.'
  },
  {
    number: 168,
    section: 'customary',
    chapterOrPart: 'Part IV: The Home as Friary',
    title: 'Hospitality',
    content: 'Hospitality may be expressed through meals, conversation, practical assistance, prayer, befriending or welcome, always with proper safeguarding and family consent.'
  },
  {
    number: 169,
    section: 'customary',
    chapterOrPart: 'Part IV: The Home as Friary',
    title: 'Boundaries of Hospitality',
    content: 'Hospitality shall never place a spouse, child, dependant, guest or member at avoidable risk. Overnight accommodation, transport of children or vulnerable adults, and private pastoral meetings in the home shall follow LCAC safeguarding requirements. Members should avoid creating dependency, making promises beyond their capacity or allowing the home to become an unauthorised institution or ministry base.'
  },
  {
    number: 170,
    section: 'customary',
    chapterOrPart: 'Part IV: The Home as Friary',
    title: 'Household Consent and Privacy',
    content: 'Religious symbols, meetings, visiting members and online broadcasting from a shared home should be arranged with the knowledge and reasonable consent of the household. Photographs, addresses and details of family life shall not be published as part of OSFC activity without appropriate permission.'
  },
  {
    number: 171,
    section: 'customary',
    chapterOrPart: 'Part V: Simplicity and Possessions',
    title: 'Poverty in Dispersion',
    content: 'Members normally retain income and personal property. The guiding question is not simply what one owns, but whether possessions dominate the heart.'
  },
  {
    number: 172,
    section: 'customary',
    chapterOrPart: 'Part V: Simplicity and Possessions',
    title: 'Provision',
    content: 'Reasonable provision for accommodation, family, healthcare, transport, education, disability needs and retirement is compatible with Franciscan simplicity.'
  },
  {
    number: 173,
    section: 'customary',
    chapterOrPart: 'Part V: Simplicity and Possessions',
    title: 'Giving',
    content: 'Generosity should be proportionate to actual means and may include money, time, skills, hospitality, goods, service and prayer.'
  },
  {
    number: 174,
    section: 'customary',
    chapterOrPart: 'Part V: Simplicity and Possessions',
    title: 'Annual Simplicity Review',
    content: 'At least annually, members should review possessions, subscriptions, debts, savings, investments, charitable giving, energy use and patterns of consumption. The purpose is freedom and gratitude, not comparison. Items no longer needed should be shared, sold responsibly, recycled or disposed of appropriately; financial decisions affecting a household remain subject to family duties and lawful ownership.'
  },
  {
    number: 175,
    section: 'customary',
    chapterOrPart: 'Part V: Simplicity and Possessions',
    title: 'Borrowing and Gifts',
    content: 'Members shall not borrow from, lend money to, solicit gifts from or enter business arrangements with persons to whom they minister unless the arrangement is ordinary, transparent and free from pastoral influence. Substantial gifts connected with ministry should be declined or referred for independent consideration. Personal need shall not be concealed, but assistance should be sought through safe and accountable channels.'
  },
  {
    number: 176,
    section: 'customary',
    chapterOrPart: 'Part VI: Work and Secular Life',
    title: 'Work & Voluntary Non-Stipendiary Service',
    content: 'Secular and ministerial work form part of the vocation. Members should be honest, dependable, fair, compassionate and diligent. All ordained and lay members undertake their service, ministry and religious office within OSFC as volunteers on an unpaid, non-stipendiary basis and rely upon their own lawful income and financial resources for personal support and vocational costs, as provided in paragraph 118. Members should plan ministry realistically alongside their livelihood, family duties, health and rest. This voluntary character does not remove requirements for lawful authorisation, safeguarding, formation or accountability, and does not alter the terms or rights of any separate secular employment.'
  },
  {
    number: 177,
    section: 'customary',
    chapterOrPart: 'Part VI: Work and Secular Life',
    title: 'Witness',
    content: 'Members shall not use OSFC membership to seek status or advantage at work. The workplace may itself become a field of quiet Christian presence.'
  },
  {
    number: 178,
    section: 'customary',
    chapterOrPart: 'Part VI: Work and Secular Life',
    title: 'Integrity and Conflicts',
    content: 'Members shall honour professional standards, contracts, confidentiality and lawful management. They should disclose to the relevant employer or OSFC officer any conflict between religious office and employment. OSFC titles, contacts, mailing lists, platforms or insignia shall not be used to obtain customers, influence, preferential treatment or private financial gain.'
  },
  {
    number: 179,
    section: 'customary',
    chapterOrPart: 'Part VI: Work and Secular Life',
    title: 'Rest and Wellbeing',
    content: 'Work and ministry shall be ordered so that chronic overwork is not praised as holiness. Members should take reasonable leave, maintain healthcare, seek professional assistance when needed and inform an appropriate officer where exhaustion, illness or distress materially affects ministry or observance. The fraternity should help members recognise limits before crisis occurs.'
  },
  {
    number: 180,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Meeting Pattern',
    content: 'An ordinary fraternity meeting may include welcome, opening prayer, Scripture, Franciscan formation, discussion, apostolic review, necessary business, intercessions and fellowship.'
  },
  {
    number: 181,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Digital Fraternity',
    content: 'Online gatherings are a genuine means of sustaining common life where geography prevents frequent physical meeting.'
  },
  {
    number: 182,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Conduct',
    content: 'Speak to the person rather than about the person. This does not prevent safeguarding reports, formal complaints or necessary disclosure to competent authorities.'
  },
  {
    number: 183,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Titles',
    content: 'Professed members are fundamentally brothers and sisters. Ecclesiastical titles may be used appropriately but must not create an artificial hierarchy within fraternity.'
  },
  {
    number: 184,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Mutual Care',
    content: 'Members should make reasonable needs known without shame and respond to one another with Clarean tenderness. A fraternity should appoint or identify a person responsible for welfare contact, especially for isolated, elderly, ill or newly professed members. Practical support may include transport, meals, accompaniment, technology assistance, prayer and referral to competent services. This fraternal care does not create an entitlement to financial maintenance, reimbursement or payment of personal expenses by the Order; each ordained or lay member remains responsible for personal support and vocational costs under paragraphs 117–120.'
  },
  {
    number: 185,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Ordinary Disagreement',
    content: 'Where safe and appropriate, a member should address a minor grievance directly, privately and promptly, describing conduct and its effect without accusation. If unresolved, the Guardian may facilitate a conversation. Mediation is voluntary and shall not be used for alleged abuse, coercion, serious misconduct, safeguarding concerns or a material power imbalance.'
  },
  {
    number: 186,
    section: 'customary',
    chapterOrPart: 'Part VII: Fraternity',
    title: 'Fraternity Business',
    content: 'Agendas should distinguish prayer, formation, pastoral sharing and formal business. Decisions shall be recorded with responsible persons and review dates, while confidential pastoral detail is omitted from ordinary minutes. A member with a conflict of interest shall declare it and withdraw where required. Meetings should end with a clear summary of agreed actions.'
  },
  {
    number: 187,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Principle',
    content: 'Franciscan dress is a sign of simplicity, fraternity and witness, never superiority.'
  },
  {
    number: 188,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Full Habit & Personal Expense',
    content: 'The approved full habit may consist of a simple brown or earth-toned tunic, approved hood or capuche, Franciscan cord, simple footwear and Tau or OSFC cross. Sisters may wear an approved veil optionally; a veil is not required merely by profession. Given the small and dispersed nature of the Order, each member is expected to purchase his or her own approved habit and any related items required for the stage being entered, at personal expense, and have them ready in good time for clothing, reception into the novitiate or profession, as applicable. The member shall confirm the required items and approved design with the formator or competent superior before purchasing, allowing sufficient time for delivery and fitting. Ceremonial reception of a habit or insignia does not mean that the Order supplies or pays for it. Any difficulty in obtaining the required items should be raised in advance so that a simple, affordable arrangement may be agreed in accordance with paragraphs 117–120.'
  },
  {
    number: 189,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Cord',
    content: 'Where three knots are used they may signify Simplicity, Chastity according to State of Life, and Obedience.'
  },
  {
    number: 190,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Simplified Dress',
    content: 'For everyday ministry, approved alternatives may include an OSFC shirt, clerical shirt where appropriate, Tau cross, cord, lapel badge or other approved insignia.'
  },
  {
    number: 191,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Use',
    content: 'The habit may appropriately be worn at Chapters, retreats, professions, Franciscan feasts, liturgies, pilgrimages, funerals, authorised ministry and suitable public service, subject to safety and professional requirements.'
  },
  {
    number: 192,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Custody and Restraint',
    content: 'Habit and insignia remain signs of vocation and shall be clean, simple and used with dignity. They shall not be worn to imply faculties, office, endorsement or authority that the member does not possess. A member subject to restriction, leave or investigation shall follow any direction concerning their use. Alterations, decorations or commercial reproductions require approval.'
  },
  {
    number: 193,
    section: 'customary',
    chapterOrPart: 'Part VIII: Habit and Insignia',
    title: 'Safety and Context',
    content: 'Habit shall not be worn where it creates a foreseeable safety risk, breaches lawful workplace requirements, compromises safeguarding, or confuses the wearer with an authorised chaplain, cleric or public officer. Simpler insignia may be used when full habit would distract from service or place another person under pressure.'
  },
  {
    number: 194,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Postulant',
    content: 'Postulants ordinarily wear no habit but may receive an approved small cross or badge.'
  },
  {
    number: 195,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Novice',
    content: 'At reception into the novitiate, a novice may receive the Rule, Constitutions, Customary, approved novice insignia and, if desired, a religious name. The member shall obtain any required habit and insignia beforehand at personal expense under paragraph 188; their ceremonial reception does not mean that the Order supplies or pays for them.'
  },
  {
    number: 196,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Temporary Profession',
    content: 'Temporary profession normally includes reception of the insignia proper to professed members.'
  },
  {
    number: 197,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Perpetual Profession',
    content: 'Perpetual profession should normally be celebrated in the Eucharist and in the presence of the fraternity where reasonably possible.'
  },
  {
    number: 198,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Formation File and Reviews',
    content: 'Each stage should have agreed learning outcomes, regular meetings and a written review recording strengths, evidence of growth, concerns, accommodations and the recommendation made. The candidate should ordinarily see and discuss the review. Sensitive information shall be restricted to those with a proper role and retained in accordance with the Constitutions.'
  },
  {
    number: 199,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Formation Relationship',
    content: 'A formator accompanies discernment but shall not demand disclosure beyond what is relevant, practise therapy without qualification, create dependency or promise advancement. Significant concerns shall be addressed honestly and promptly. Where the formator also holds another role that creates conflict, a separate reviewer should be appointed.'
  },
  {
    number: 200,
    section: 'customary',
    chapterOrPart: 'Part IX: Formation Customs',
    title: 'Readiness for Profession',
    content: 'Discernment should consider sustained prayer, honest self-knowledge, capacity for fraternity, responsible boundaries, acceptance of correction, family and work stability, reliable service, financial realism and freedom from coercion. Charisma, theological knowledge, ordination or enthusiasm shall not compensate for serious deficits in safety, truthfulness or accountability.'
  },
  {
    number: 201,
    section: 'customary',
    chapterOrPart: 'Part X: Feasts and Observances',
    title: 'Principal Feasts',
    content: 'OSFC gives particular honour to Saint Francis of Assisi and Saint Clare of Assisi and may observe the Stigmata of Saint Francis, Our Lady of the Angels of the Portiuncula, the Transitus and suitable commemorations of the Franciscan family, harmonised with the authorised LCAC calendar.'
  },
  {
    number: 202,
    section: 'customary',
    chapterOrPart: 'Part X: Feasts and Observances',
    title: 'Transitus',
    content: 'The Transitus may include subdued lighting, Scripture, a reading concerning the death of Francis, silence, psalmody, prayers for departed Franciscans and renewal of commitment. Dispersed members may participate online.'
  },
  {
    number: 203,
    section: 'customary',
    chapterOrPart: 'Part X: Feasts and Observances',
    title: 'Calendar and Local Observance',
    content: 'The Secretary or another appointed member should publish the annual OSFC calendar in harmony with the authorised LCAC calendar. Fraternities may add local Franciscan commemorations provided they do not displace principal ecclesial observances. Feasts should combine worship, formation, fraternity and, where possible, an act of generosity or service.'
  },
  {
    number: 204,
    section: 'customary',
    chapterOrPart: 'Part XI: Retreat, Study and Review',
    title: 'Annual Retreat',
    content: 'Every professed member should seek an annual retreat, residential, local, online, individually directed or at home. Financial hardship should not bar observance: a suitable low-cost or no-cost form should be chosen under paragraph 120. Any costs remain the member’s responsibility under paragraphs 117–118; this provision does not require the Order to fund a retreat.'
  },
  {
    number: 205,
    section: 'customary',
    chapterOrPart: 'Part XI: Retreat, Study and Review',
    title: 'Study',
    content: 'Continuing formation should include Scripture, Franciscan sources, theology, Church history, pastoral practice, safeguarding, justice, peace and creation care.'
  },
  {
    number: 206,
    section: 'customary',
    chapterOrPart: 'Part XI: Retreat, Study and Review',
    title: 'Annual Review',
    content: 'Each professed member should review prayer, Gospel living, simplicity, relationships, fraternity, service, reconciliation, formation, creation care and wellbeing with an appropriate companion or Guardian.'
  },
  {
    number: 207,
    section: 'customary',
    chapterOrPart: 'Part XII: The Personal Rule and Annual Covenant',
    title: 'Content of Personal Rule',
    content: 'The Personal Rule should ordinarily state achievable commitments for daily and weekly prayer, Eucharist, Scripture, penance, simplicity, family, work, rest, fraternity, service, study, creation care, health and digital restraint. It should name reasonable alternatives for disrupted circumstances and identify the person with whom it will be reviewed.'
  },
  {
    number: 208,
    section: 'customary',
    chapterOrPart: 'Part XII: The Personal Rule and Annual Covenant',
    title: 'Review of Personal Rule',
    content: 'The Personal Rule shall be reviewed at least annually and after a material change of health, household, employment, ministry or caring responsibility. Review should ask what bears evangelical fruit, what has become unrealistic, what is being avoided and what new grace is inviting. Revision is not failure; concealment and chronic imprudence are greater concerns than honest adaptation.'
  },
  {
    number: 209,
    section: 'customary',
    chapterOrPart: 'Part XII: The Personal Rule and Annual Covenant',
    title: 'Annual Covenant',
    content: 'At the annual review, a professed member may sign a short covenant affirming continued adherence to the Rule, Constitutions, Customary, LCAC Code of Conduct and safeguarding requirements, noting agreed priorities for the coming year. This is a pastoral and accountability instrument, not a renewal of perpetual profession.'
  },
  {
    number: 210,
    section: 'customary',
    chapterOrPart: 'Part XIII: Digital Life and Public Communication',
    title: 'Conduct Online',
    content: 'Truthfulness, courtesy, restraint, privacy and peace-making apply online. Members should resist the need to answer every provocation.'
  },
  {
    number: 211,
    section: 'customary',
    chapterOrPart: 'Part XIII: Digital Life and Public Communication',
    title: 'Representation',
    content: 'Members shall clearly distinguish personal opinions from positions formally adopted by OSFC.'
  },
  {
    number: 212,
    section: 'customary',
    chapterOrPart: 'Part XIII: Digital Life and Public Communication',
    title: 'Official Accounts and Access',
    content: 'OSFC websites, social channels, mailing lists and shared drives shall have named administrators, secure passwords, appropriate multi-factor authentication and an agreed succession arrangement. Personal accounts shall not be the sole repository of official records. Access shall be removed promptly when an office or authorised role ends.'
  },
  {
    number: 213,
    section: 'customary',
    chapterOrPart: 'Part XIII: Digital Life and Public Communication',
    title: 'Images, Messages and Pastoral Contact',
    content: 'Consent shall be obtained before publishing identifiable photographs or personal testimony. Private messaging with children or vulnerable adults shall comply with safeguarding policy and use accountable channels. Pastoral conversations online remain subject to boundaries, confidentiality limits, record requirements and referral duties.'
  },
  {
    number: 214,
    section: 'customary',
    chapterOrPart: 'Part XIV: Service, Mission and Creation',
    title: 'Personal Apostolate',
    content: 'Each professed member should maintain an appropriate expression of service, which may include pastoral care, food relief, community work, chaplaincy, environmental work, befriending, family caregiving or intercession.'
  },
  {
    number: 215,
    section: 'customary',
    chapterOrPart: 'Part XIV: Service, Mission and Creation',
    title: 'Corporate Apostolate',
    content: 'Where practicable, fraternities should undertake or support a common work of mercy.'
  },
  {
    number: 216,
    section: 'customary',
    chapterOrPart: 'Part XIV: Service, Mission and Creation',
    title: 'Creation Care',
    content: 'Members should consider the effects of consumption, travel, energy, waste, food and purchasing choices without adopting competitive or self-righteous attitudes.'
  },
  {
    number: 217,
    section: 'customary',
    chapterOrPart: 'Part XIV: Service, Mission and Creation',
    title: 'Discernment of Apostolate',
    content: 'A proposed ministry should answer a real need, be within the member’s competence, respect existing services, have appropriate permission and insurance where required, include safeguarding and risk assessment, and remain proportionate to family, work and health. OSFC endorsement shall be explicit; personal initiatives shall not be presented as official works.'
  },
  {
    number: 218,
    section: 'customary',
    chapterOrPart: 'Part XIV: Service, Mission and Creation',
    title: 'Missionary Manner',
    content: 'Members should first witness through peaceable presence, service and humility. Explicit proclamation shall be offered only with respect for conscience and without exploiting need, grief or dependence. Members shall not promise healing, protection, financial benefit or ecclesiastical status, and shall refer matters beyond their competence.'
  },
  {
    number: 219,
    section: 'customary',
    chapterOrPart: 'Part XV: Health, Age, Disability and Leave',
    title: 'Adaptation',
    content: 'Illness does not suspend vocation. Prayer and service obligations should adapt mercifully to health and capacity.'
  },
  {
    number: 220,
    section: 'customary',
    chapterOrPart: 'Part XV: Health, Age, Disability and Leave',
    title: 'Elder Members',
    content: 'Older and less mobile members should be honoured for prayer, experience and perseverance, and participation should be adapted rather than withdrawn.'
  },
  {
    number: 221,
    section: 'customary',
    chapterOrPart: 'Part XV: Health, Age, Disability and Leave',
    title: 'Reasonable Adjustments',
    content: 'Meetings, formation, liturgy and communication should be made accessible so far as reasonably practicable through suitable timing, breaks, captions, large print, remote access, mobility arrangements or other adjustments. A member should not be required to disclose more medical detail than is necessary to arrange support or assess safety.'
  },
  {
    number: 222,
    section: 'customary',
    chapterOrPart: 'Part XV: Health, Age, Disability and Leave',
    title: 'Leave and Reduced Observance',
    content: 'A member facing significant illness, bereavement, caring duty, crisis or vocational uncertainty may request leave or an agreed period of reduced observance. Contact, expectations, office, representation, review date and pastoral support should be recorded. Leave is not punishment and should not result in abandonment by the fraternity.'
  },
  {
    number: 223,
    section: 'customary',
    chapterOrPart: 'Part XVI: Pastoral Conduct, Safeguarding and Complaints',
    title: 'Pastoral Boundaries',
    content: 'Pastoral contact shall have a clear purpose, suitable setting and appropriate duration. Members shall not foster exclusivity, dependency or secrecy; enter romantic or financial relationships arising from a current pastoral relationship; use confession, spiritual direction or formation to obtain personal benefit; or exceed their competence. Touch shall be appropriate, non-coercive and sensitive to the other person.'
  },
  {
    number: 224,
    section: 'customary',
    chapterOrPart: 'Part XVI: Pastoral Conduct, Safeguarding and Complaints',
    title: 'Immediate Safeguarding Action',
    content: 'Where a child, vulnerable adult or any person may be in immediate danger, safety and civil reporting take precedence over internal consultation. The member shall not investigate, confront an alleged perpetrator or promise secrecy, but shall preserve available information, record facts promptly and contact the designated safeguarding and civil authorities as required.'
  },
  {
    number: 225,
    section: 'customary',
    chapterOrPart: 'Part XVI: Pastoral Conduct, Safeguarding and Complaints',
    title: 'Receiving a Complaint',
    content: 'The recipient shall listen without defensiveness, thank the person for speaking, clarify immediate safety, explain next steps and confidentiality limits, and make a factual dated record. No member shall retaliate, pressure withdrawal, organise informal reputation management or circulate allegations beyond those who need to know.'
  },
  {
    number: 226,
    section: 'customary',
    chapterOrPart: 'Part XVI: Pastoral Conduct, Safeguarding and Complaints',
    title: 'Support and Fairness',
    content: 'Complainants, respondents, witnesses and affected fraternities should be offered appropriate pastoral support from persons not deciding the matter. Protective measures are neutral and temporary. Information shall be shared on a need-to-know basis, but confidentiality shall not be misrepresented as secrecy or used to prevent lawful disclosure.'
  },
  {
    number: 227,
    section: 'customary',
    chapterOrPart: 'Part XVII: Office, Administration and Personal Vocational Costs',
    title: 'Handover',
    content: 'On appointment, an office-holder should receive a written description of authority, responsibilities, policies, current actions, records and access credentials. On leaving office, all official property, records and access shall be transferred promptly. Personal copies of confidential material shall be securely deleted unless lawful retention is required.'
  },
  {
    number: 228,
    section: 'customary',
    chapterOrPart: 'Part XVII: Office, Administration and Personal Vocational Costs',
    title: 'Council Practice',
    content: 'Council papers should be circulated securely in sufficient time. Minutes shall record attendance, conflicts, decisions, reasons where material, responsible persons and review dates. Executive action between meetings shall be reported and ratified where required. Confidential sessions should be exceptional and separately recorded.'
  },
  {
    number: 229,
    section: 'customary',
    chapterOrPart: 'Part XVII: Office, Administration and Personal Vocational Costs',
    title: 'Financing the Vocation',
    content: 'Each member shall budget for his or her own vocation and pay providers directly for personal purchases, formation materials, travel, retreats and ministry expenses. Shared activities should be arranged with clear individual costs and direct payment to the provider, rather than through money held by the Order. Commitments should remain affordable, with suitable alternatives where necessary.'
  },
  {
    number: 230,
    section: 'customary',
    chapterOrPart: 'Part XVII: Office, Administration and Personal Vocational Costs',
    title: 'Records and Data',
    content: 'Official records shall be factual, dated, attributable and stored in an approved location. Access shall follow role and need. Sensitive information shall not be kept in private messaging threads, unsecured devices or personal cloud storage. Corrections shall preserve an audit trail. Retention and disposal shall follow LCAC policy, civil law and the Constitutions.'
  },
  {
    number: 231,
    section: 'customary',
    chapterOrPart: 'Part XVIII: Death, Remembrance and Pastoral Care of the Bereaved',
    title: 'Dying',
    content: 'Where desired and possible, the Order should offer prayer, pastoral presence, Sacraments and support for family.'
  },
  {
    number: 232,
    section: 'customary',
    chapterOrPart: 'Part XVIII: Death, Remembrance and Pastoral Care of the Bereaved',
    title: 'Funeral',
    content: 'A professed member may be buried or cremated accompanied by approved habit, cord, Tau or insignia, subject to the member’s wishes and lawful rights of family.'
  },
  {
    number: 233,
    section: 'customary',
    chapterOrPart: 'Part XVIII: Death, Remembrance and Pastoral Care of the Bereaved',
    title: 'Necrology',
    content: 'The Order shall maintain a Necrology and remember departed brothers and sisters in prayer.'
  },
  {
    number: 234,
    section: 'customary',
    chapterOrPart: 'Part XVIII: Death, Remembrance and Pastoral Care of the Bereaved',
    title: 'Wishes and Next of Kin',
    content: 'Members are encouraged to record funeral wishes, next-of-kin details and any lawful preference concerning habit or insignia, and to ensure that executors and family know where these wishes are kept. OSFC shall respect the lawful rights and pastoral needs of family and shall not claim property or precedence because of profession.'
  },
  {
    number: 235,
    section: 'customary',
    chapterOrPart: 'Part XVIII: Death, Remembrance and Pastoral Care of the Bereaved',
    title: 'Remembrance',
    content: 'The death should be communicated with verified facts and suitable consent. Fraternities should pray promptly, support the bereaved, and remember the member annually where practicable. Public tributes shall avoid disclosing private pastoral, medical, safeguarding or disciplinary information.'
  },
  {
    number: 236,
    section: 'customary',
    chapterOrPart: 'Conclusion of the Customary',
    title: 'Friary of the Heart',
    content: 'Let the married Franciscan find Christ at the family table; the single Franciscan in generous availability; the worker in ordinary labour; the ordained member at the altar and among the people; the lay religious in the fullness of baptismal vocation; the sick in patient endurance; and the elderly in the treasury of prayer. Let every home become in some small way a friary or convent of the heart. Pax et Bonum.'
  },

  // GENERAL CONCLUSION (237-241)
  {
    number: 237,
    section: 'conclusion',
    chapterOrPart: 'General Conclusion',
    title: 'Simplicity and Gospel Calling',
    content: 'The Rule, Constitutions and Customary now return the reader to the simplicity from which they began: the call to observe the Holy Gospel of Our Lord Jesus Christ after the examples of Saint Francis and Saint Clare. Every chapter, article, custom and safeguard serves this one end. The value of the document will not finally be measured by the fullness of its provisions, but by whether it assists real people to become more prayerful, truthful, humble, free, merciful and steadfast; whether it forms fraternities in which the vulnerable are protected, authority is exercised as service, difference is held within charity, and the gifts of every member are received for the common good.'
  },
  {
    number: 238,
    section: 'conclusion',
    chapterOrPart: 'General Conclusion',
    title: 'Finding Christ in Everyday Reality',
    content: 'Profession within the Order is therefore neither an escape from ordinary life nor a claim to spiritual distinction. It is a promise to find Christ and serve him precisely within the circumstances entrusted to each person: at the altar and the family table, in silence and public ministry, in paid work and hidden service, in strength and illness, in confident action and patient waiting. Members are called to hold possessions without possessiveness, exercise gifts without domination, speak truth without contempt, receive correction without despair and offer service without making another person dependent. They are to become lesser ones, not by denying their dignity, but by following the humility of the Incarnate Word.'
  },
  {
    number: 239,
    section: 'conclusion',
    chapterOrPart: 'General Conclusion',
    title: 'Uniting Mercy and Accountability',
    content: 'The common life must always unite mercy and accountability. Mercy without truth can leave harm unaddressed; accountability without mercy can become punishment without hope. The Order is therefore to correct fraternally, safeguard diligently, govern transparently, keep faithful records, hear complaints impartially and seek restoration wherever restoration is truthful and safe. At the same time, it must remain a place where weakness can be acknowledged, help requested, burdens shared and a person permitted to begin again. In all things, the dignity of those affected, the protection of the vulnerable, the requirements of justice and the possibility of conversion are to be held together.'
  },
  {
    number: 240,
    section: 'conclusion',
    chapterOrPart: 'General Conclusion',
    title: 'Grace and Fraternal Fellowship',
    content: 'No member lives this vocation by personal strength alone. The grace of Christ is given through the Holy Spirit, the Sacraments, Holy Scripture, the communion of the Church, the witness of Francis and Clare, the patience of brothers and sisters, and the needs of those whom the Order is called to serve. For this reason, members should return often to the Gospel, renew the spirit of profession, review the Personal Rule honestly, seek reconciliation promptly and receive formation throughout life. When observance becomes difficult, they should neither conceal the struggle nor abandon the path, but ask for the wisdom, accommodation, correction or support needed for faithful perseverance.'
  },
  {
    number: 241,
    section: 'conclusion',
    chapterOrPart: 'General Conclusion',
    title: 'Concluding Blessing',
    content: 'May all who receive this form of life do so freely, live it generously and hand it on faithfully. May their prayer become compassion, their simplicity become freedom, their fraternity become reconciliation, their work become praise, and their service become a credible sign of the Kingdom of God. May every household, fraternity and ministry of the Order be marked by peace and all good; and may the brothers and sisters, conscious of their limitations yet confident in divine mercy, begin again each day to follow the poor, humble, crucified and risen Christ, to whom with the Father and the Holy Spirit be all honour, glory and thanksgiving, now and for ever. Amen.'
  }
];

export const VOCATION_STAGES = [
  {
    id: 'inquirer',
    title: '1. Inquirer',
    duration: 'Preliminary Period',
    dress: 'No religious dress',
    description: 'An informal period of mutual discovery, prayer, and reading. The inquirer learns about Franciscan spirituality, gets to know members of the Order, and explores whether the dispersed Franciscan charism resonates with their life circumstances.'
  },
  {
    id: 'postulant',
    title: '2. Postulant',
    duration: '6 to 12 months',
    dress: 'Approved small cross or lapel badge',
    description: 'Formal admission to introductory formation. The postulant is paired with a Formation Companion, begins a structured rhythm of prayer, studies the Franciscan charism and LCAC life, and begins testing their vocational desire in real life.'
  },
  {
    id: 'novice',
    title: '3. Novice',
    duration: 'At least 12 months',
    dress: 'Novice habit (brown tunic, cord, Tau cross) & optional religious name',
    description: 'Systematic formation in Scripture, Franciscan sources (Earlier & Later Rules, Testament, St. Clare’s writings), evangelical counsels, and drafting of the Personal Rule of Life. Habits are purchased privately by the novice.'
  },
  {
    id: 'temporary-profession',
    title: '4. Temporary Profession',
    duration: 'Ordinarily 1 year at a time (repeated as discerned)',
    dress: 'Full habit and insignia proper to professed members',
    description: 'Initial public commitment to live the Holy Gospel in obedience, poverty/simplicity, and chastity according to state of life. The friar or sister lives out the Personal Rule actively within their family, workplace, and fraternity.'
  },
  {
    id: 'perpetual-profession',
    title: '5. Perpetual Profession',
    duration: 'Lifelong consecration',
    dress: 'Perpetual profession cross, habit, cord with three knots',
    description: 'A lifelong, mature public offering received in the Eucharist. Members hold voice and vote in General Chapter, can serve in leadership or formation, and live as consecrated brothers and sisters in the world.'
  },
  {
    id: 'companion-associate',
    title: 'Companions & Associates',
    duration: 'Ongoing fellowship',
    dress: 'Tau cross or badge',
    description: 'For those who love Franciscan spirituality, attend gatherings, and share in works of mercy and prayer alongside OSFC members without undertaking religious vows.'
  }
];

export const FOUR_PILLARS = [
  {
    title: 'Emotional & Human Maturity',
    focus: 'Self-awareness, emotional balance, healthy handling of conflict, and freedom from manipulative or volatile behaviors.'
  },
  {
    title: 'Spiritual Accountability',
    focus: 'Sustained prayer life, regular Eucharistic communion, fidelity to the Gospel, and servant-hearted obedience.'
  },
  {
    title: 'Pastoral & Psychological Safety',
    focus: 'Respect for boundaries, appropriate exercise of power, safeguarding vigilance, and non-coercive relationships.'
  },
  {
    title: 'Practical Fruit & Reliability',
    focus: 'Dependable service, faithful fraternity attendance, ethical secular employment, and realistic financial stewardship.'
  }
];
