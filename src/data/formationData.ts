export interface FormationCourse {
  code: string;
  title: string;
  stage: 'enquiry' | 'postulancy' | 'novitiate' | 'temporary' | 'perpetual' | 'lifelong';
  part?: string;
  description: string;
  purpose: string;
  principalAreas: string[];
}

export interface AssessmentOutcome {
  code: string;
  label: string;
  description: string;
}

export const ASSESSMENT_OUTCOMES: AssessmentOutcome[] = [
  { code: 'E', label: 'Engaged Satisfactorily', description: 'The candidate has thoughtfully addressed the material and demonstrated sincere engagement.' },
  { code: 'D', label: 'Developing', description: 'Core themes are understood, with areas identified for further integration into lived practice.' },
  { code: 'FR', label: 'Further Reflection Required', description: 'Key questions or spiritual dimensions require deeper personal contemplation and study.' },
  { code: 'R', label: 'Resubmission Required', description: 'The assignment requires substantial reworking or greater attention to specific requirements.' },
  { code: 'FC', label: 'Formation Conversation Required', description: 'The formator and student will discuss the subject directly before moving forward.' }
];

export const CORRESPONDENCE_CYCLE = [
  {
    step: '1. RECEIVE · STUDY · PRAY',
    action: 'Study & Prayer',
    detail: 'Receive structured course books, engage Holy Scripture and Franciscan primary sources, and take the questions into contemplative prayer.'
  },
  {
    step: '2. REFLECT · PRACTISE · SUBMIT',
    action: 'Lived Practice',
    detail: 'Test the teaching in the laboratory of ordinary life (budget, family, workplace, local community) and submit assigned portfolio work.'
  },
  {
    step: '3. FEEDBACK · CONVERSE · APPLY',
    action: 'Accompaniment',
    detail: 'Receive written feedback from your Formation Companion, engage in formation dialogue, and carry an agreed next objective into daily life.'
  }
];

export const FORMATION_COURSES: FormationCourse[] = [
  // Stage 0: Enquiry
  {
    code: 'OSFC-F001',
    title: 'Come and See: Discerning the Franciscan Way',
    stage: 'enquiry',
    description: 'A gentle introductory programme for those exploring whether Franciscan spirituality and OSFC may be a place in which to discern further.',
    purpose: 'To permit informed enquiry without pressure to apply. Clearer discernment is a good outcome whether it leads towards Postulancy or elsewhere.',
    principalAreas: [
      'What Franciscan spirituality is',
      'Meeting Francis and Clare',
      'Christ and the Gospel',
      'Dispersed religious life',
      'Prayer and fraternity',
      'Simplicity, service and peace',
      'Family, work and ordinary responsibility',
      'Understanding the formation journey'
    ]
  },

  // Stage I: Postulancy (Certificate in Franciscan Foundations)
  {
    code: 'OSFC-101',
    title: 'Vocation, Discernment and the Franciscan Call',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Establishes a mature theology and practice of vocation.',
    purpose: 'To replace romantic certainty with free, grounded and ecclesial discernment.',
    principalAreas: [
      'Baptismal vocation',
      'Attraction, calling and aptitude',
      'Mixed motives and purification',
      'Personal history and self-knowledge',
      'Freedom and informed consent',
      'Family, work, health and finance',
      'Ecclesial discernment',
      'The Formator relationship'
    ]
  },
  {
    code: 'OSFC-102',
    title: 'Jesus Christ and the Holy Gospel',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Places Christ, rather than religious identity itself, at the centre of the Franciscan vocation.',
    purpose: 'To form candidates who read Scripture responsibly, pray carefully and translate the Gospel into ordinary conduct.',
    principalAreas: [
      'Incarnation and hidden life',
      'Kingdom of God',
      'Beatitudes and Sermon on the Mount',
      'Parables and healing',
      'Calling and formation of disciples',
      'Cross and Resurrection',
      'Responsible interpretation of Scripture',
      'Lectio divina and Gospel ethics'
    ]
  },
  {
    code: 'OSFC-103',
    title: 'Francis of Assisi: Conversion and Gospel Life',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Studies Francis historically, spiritually and practically rather than as a romanticised symbol.',
    purpose: 'To move from admiration of Francis to appropriation of Gospel movements such as mercy, simplicity, minority, fraternity, peace, service and continual conversion.',
    principalAreas: [
      'Medieval Assisi context',
      'Crisis and conversion',
      'Mercy and encounter with the outcast',
      'San Damiano and the call to repair',
      'Poverty and minority',
      'Fraternity received as gift',
      'Work and mission',
      'Peace, creation and the Church'
    ]
  },
  {
    code: 'OSFC-104',
    title: 'Clare of Assisi: Contemplation and Courage',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Introduces a complementary Franciscan school of contemplation, steadfastness, poverty and communal care.',
    purpose: 'To show that Clarean contemplation leads to imitation of Christ, faithful community, endurance and courageous responsibility.',
    principalAreas: [
      'Clare’s vocation and escape',
      'San Damiano convent of San Damiano',
      'Poverty and the poor Christ',
      'The Mirror of Christ (Speculum)',
      'Clare’s letters, Rule and Testament',
      'Tender maternal mutual care',
      'Authority and ecclesial courage',
      'Perseverance against opposition'
    ]
  },
  {
    code: 'OSFC-105',
    title: 'Learning to Pray as a Franciscan',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Builds a prayer life capable of surviving ordinary circumstances.',
    purpose: 'To move prayer from aspiration into stable, adaptable practice.',
    principalAreas: [
      'Morning and Evening Prayer rhythm',
      'Psalms and the Divine Office',
      'Scripture and lectio divina',
      'Silence and contemplation',
      'Intercession for fraternity and world',
      'Eucharistic spirituality',
      'Navigating dryness and distraction',
      'Prayer during illness and busy seasons',
      'A sustainable personal rhythm'
    ]
  },
  {
    code: 'OSFC-106',
    title: 'Understanding OSFC Religious Life',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Explains the specific form of religious life into which the student is discerning.',
    purpose: 'To support informed consent and responsible understanding of profession, authority and ordinary civil, Church and family responsibilities.',
    principalAreas: [
      'Religious life rooted in baptism',
      'The Franciscan charism',
      'Dispersed OSFC identity',
      'The Rule, Constitutions and Customary',
      'The Personal Rule of Life',
      'Religious profession and promises',
      'Authority, obedience and conscience',
      'Habit and insignia norms',
      'Individual financial responsibility'
    ]
  },
  {
    code: 'OSFC-107',
    title: 'Fraternity, Family, Work and Dispersed Life',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Locates Franciscan vocation within ordinary relationships and responsibilities.',
    purpose: 'To test whether Franciscan commitment strengthens responsible household, work and fraternal life.',
    principalAreas: [
      'Fraternity received as gift',
      'Communication and mutual care',
      'Digital fraternity & online presence',
      'Conflict, correction and reconciliation',
      'Marriage, partners and dependants',
      'Caregiving as authentic worship',
      'Employment, ethics and retirement',
      'Sabbath rest and recreation',
      'Hospitality with safeguarding',
      'The home as friary of the heart'
    ]
  },
  {
    code: 'OSFC-108',
    title: 'Safe, Healthy and Accountable Religious Life',
    stage: 'postulancy',
    part: 'Certificate in Franciscan Foundations',
    description: 'Establishes the safety culture required before deeper religious formation.',
    purpose: 'To establish safeguarding, boundaries and accountability as part of Franciscan spirituality itself.',
    principalAreas: [
      'Christian dignity and power imbalances',
      'Consent and relational boundaries',
      'Spiritual authority vs. manipulation',
      'Privacy, confidentiality and secrecy',
      'Safeguarding and mandatory reporting',
      'Pastoral and digital boundaries',
      'Financial transparency and limits',
      'Complaints and fair due process',
      'Fraternal correction and accountability',
      'Health and appropriate professional help'
    ]
  },

  // Stage II: Novitiate (Diploma in Franciscan Formation)
  // Part I: Franciscan Sources
  {
    code: 'OSFC-201',
    title: 'The Earlier Rule (Regula non Bullata)',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'The developing Franciscan form of life in its evangelical and historical setting.',
    purpose: 'To deepen the novice’s ability to receive the Franciscan tradition faithfully and embody it safely in contemporary dispersed life.',
    principalAreas: ['Early fraternity dynamics', 'Evangelical radicalism', 'Movement without legal privilege', 'Proper-law context', 'Practical dispersed application']
  },
  {
    code: 'OSFC-202',
    title: 'The Later Rule (Regula Bullata 1223)',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'The mature canonical Rule and faithful contemporary appropriation.',
    purpose: 'To deepen the novice’s understanding of stable communal structures under papal and ecclesial recognition.',
    principalAreas: ['Canonical structure', 'Gospel obedience', 'Poverty and money prohibitions', 'Ministers as servants', 'Contemporary living in OSFC']
  },
  {
    code: 'OSFC-203',
    title: 'The Testament of Saint Francis',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'Francis’s vocational memory of mercy, brothers, Church and Gospel life.',
    purpose: 'To anchor identity in Francis’s final spiritual testimony and clarity of vision.',
    principalAreas: ['Memory of conversion', 'The leper encounter', 'Reverence for poor priests and Eucharist', 'Manual labor insistence', 'The blessing of the brothers']
  },
  {
    code: 'OSFC-204',
    title: 'The Admonitions and Prayers of Francis',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'Interior poverty, humility, knowledge, correction, praise and prayer.',
    purpose: 'To examine interior motivations, spiritual pride, and true evangelical minority.',
    principalAreas: ['The 28 Admonitions', 'Praise of God and virtues', 'True obedience and humility', 'Not appropriating God’s goods', 'San Damiano prayer & Canticle']
  },
  {
    code: 'OSFC-205',
    title: 'The Writings of Saint Clare',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'Clare in her own voice through letters, Rule and Testament.',
    purpose: 'To ground the novice in Clarean contemplative theology and the privilege of highest poverty.',
    principalAreas: ['Letters to Agnes of Prague', 'Form of Life (First Rule written by a woman)', 'Clare’s Testament and Blessing', 'The Mirror of Eternity', 'Motherly fraternity']
  },
  {
    code: 'OSFC-206',
    title: 'Early Franciscan History and Development',
    stage: 'novitiate',
    part: 'Part I — Franciscan Sources',
    description: 'Growth, tensions, ecclesial recognition and diversity in the early movement.',
    purpose: 'To provide historical grounding for navigating tensions between charism and institution.',
    principalAreas: ['The primitive fraternity', 'Spirituals and Conventuals', 'Early expansion and mission', 'The Second and Third Orders', 'Origins of dispersed Franciscanism']
  },

  // Part II: Franciscan Theology and Spirituality
  {
    code: 'OSFC-301',
    title: 'The Incarnation and Franciscan Christology',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Contemplation of the humble and self-giving Christ.',
    purpose: 'To explore Franciscan theology (Duns Scotus, Bonaventure) centered on the primacy of Christ in creation.',
    principalAreas: ['Christ the firstborn of creation', 'The crib, cross, and altar', 'Kenosis and divine humility', 'Bonaventure’s Soul’s Journey', 'Contemplative action']
  },
  {
    code: 'OSFC-302',
    title: 'Prayer, Psalms and the Divine Office',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Mature common and personal liturgical prayer.',
    purpose: 'To deepen liturgical literacy and rhythmic immersion in the Psalter.',
    principalAreas: ['Structure of the Liturgy of the Hours', 'Praying the Psalms in Christ', 'Adapting the Office to secular shifts', 'Prayers of praise and thanksgiving']
  },
  {
    code: 'OSFC-303',
    title: 'Lectio Divina and Contemplative Prayer',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Attentive Scripture-based contemplation.',
    purpose: 'To form habitual practices of slow, meditative listening to the Word of God.',
    principalAreas: ['Lectio, Meditatio, Oratio, Contemplatio', 'Gazing in Clare’s mirror', 'Silence as prayerful availability', 'Centering and interior recollection']
  },
  {
    code: 'OSFC-304',
    title: 'Eucharistic Spirituality',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Sacramental reverence joined to self-giving service.',
    purpose: 'To connect contemplation of Christ in bread and wine with recognition of Christ in the poor.',
    principalAreas: ['Sacramental theology in LCAC', 'Reverence for holy mysteries', 'Spiritual communion during isolation', 'Eucharist as mission']
  },
  {
    code: 'OSFC-305',
    title: 'Conversion, Penance and Reconciliation',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Repentance, repair, mercy and beginning again.',
    purpose: 'To demystify penance as joyful conversion rather than self-inflicted burden.',
    principalAreas: ['Doing penance (poenitentiam agere)', 'Sacramental confession and spiritual direction', 'Restitution and reparation', 'Avoiding scrupulosity']
  },
  {
    code: 'OSFC-306',
    title: 'Discernment and Conscience',
    stage: 'novitiate',
    part: 'Part II — Franciscan Theology and Spirituality',
    description: 'Mature moral and spiritual judgement.',
    purpose: 'To cultivate moral maturity, conscience formation, and communal discernment.',
    principalAreas: ['Formation of conscience', 'Ignatian & Franciscan discernment', 'The Franciscan Test questions', 'Dealing with ambiguity and compromise']
  },

  // Part III: The Evangelical Life
  {
    code: 'OSFC-401',
    title: 'Simplicity and Poverty of Spirit',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'Possessions, money, stewardship, generosity and freedom from possessiveness.',
    purpose: 'To cultivate non-possessiveness in a consumerist society.',
    principalAreas: ['Sine proprio (without anything of our own)', 'Ethical consumerism and budgeting', 'Solidarity with the poor', 'Sufficiency vs. display']
  },
  {
    code: 'OSFC-402',
    title: 'Chastity According to State of Life',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'Truthful, faithful and appropriately bounded relationships suited to one’s state of life.',
    purpose: 'To foster mature, reverent relationships free from exploitation or manipulation.',
    principalAreas: ['Chastity in marriage', 'Chastity in single life', 'Consecrated celibacy discernment', 'Healthy intimacy and boundaries']
  },
  {
    code: 'OSFC-403',
    title: 'Obedience and Responsible Freedom',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'Listening, conscience, legitimate authority and accountability held together.',
    purpose: 'To integrate attentive listening with mature conscience and canonical due process.',
    principalAreas: ['Attentive listening to God and fraternity', 'Limits of religious obedience', 'Conscience protection and civil law', 'Dialogue and mutual submission']
  },
  {
    code: 'OSFC-404',
    title: 'Minority and Servant Authority',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'Leadership that refuses domination, clericalism and status-seeking.',
    purpose: 'To embody the status of "lesser brothers and sisters" (fratres minores).',
    principalAreas: ['Washing feet in spirit', 'Dismantling clericalism and privilege', 'Servant leadership in Council', 'Preferential option for the quiet']
  },
  {
    code: 'OSFC-405',
    title: 'Fraternity and Mutual Care',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'The discipline of enduring communion, correction and care.',
    purpose: 'To maintain loving communion across geographic distance and natural human differences.',
    principalAreas: ['Fraternal correction without humiliation', 'Pastoral welfare circles', 'Overcoming cliques and isolation', 'Clarean tenderness in illness']
  },
  {
    code: 'OSFC-406',
    title: 'The Personal Rule of Life',
    stage: 'novitiate',
    part: 'Part III — The Evangelical Life',
    description: 'Drafting, testing and revising the pattern by which the common Rule becomes daily life.',
    purpose: 'To finalize an approved, realistic Personal Rule ready for temporary profession.',
    principalAreas: ['Achievable commitments', 'Alternative plans for crisis and illness', 'Annual review process', 'Covenant signing']
  },

  // Part IV: Franciscan Life in the World
  {
    code: 'OSFC-501',
    title: 'Marriage, Family and Household',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Integrating profession with legitimate family bonds and responsibilities.',
    purpose: 'To safeguard household harmony and ensure religious observance never rivals domestic duties.',
    principalAreas: ['Respecting non-member spouses and children', 'Domestic prayer corner', 'Family finances and consent', 'Caregiving as Gospel witness']
  },
  {
    code: 'OSFC-502',
    title: 'Work, Vocation and Stewardship',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Franciscan discipleship through ordinary labour, duty and responsible use of resources.',
    purpose: 'To sanctify secular careers and professional callings as fields of quiet Christian presence.',
    principalAreas: ['Work as grace and praise', 'Professional ethics and fairness', 'Avoiding workplace burnout', 'Voluntary non-stipendiary service']
  },
  {
    code: 'OSFC-503',
    title: 'Service, Mission and the Works of Mercy',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Mission expressed through proportionate, competent and accountable service.',
    purpose: 'To engage in effective, humble community service without saviourism or dependency.',
    principalAreas: ['Presence before programme', 'Immediate mercy and systemic justice', 'Confidentiality and competence limits', 'Cooperating with local charities']
  },
  {
    code: 'OSFC-504',
    title: 'Peace, Reconciliation and Non-Domination',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Peacemaking that joins mercy, truth, justice and safe boundaries.',
    purpose: 'To announce peace through non-defensive heart, disciplined speech, and reconciliation.',
    principalAreas: ['The Franciscan greeting of peace', 'Disciplined speech in online debates', 'Repairing harm without compromising safety', 'Peaceful advocacy']
  },
  {
    code: 'OSFC-505',
    title: 'Care of Creation (Laudato Si’ & Canticle)',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Franciscan kinship with creation translated into attainable practice.',
    purpose: 'To ground ecological responsibility in brotherly and sisterly love for all creatures.',
    principalAreas: ['The Canticle of Brother Sun', 'Ecological conversion', 'Practical household carbon & waste reduction', 'Eco-justice for marginalized humans']
  },
  {
    code: 'OSFC-506',
    title: 'Church, Parish and Local Community',
    stage: 'novitiate',
    part: 'Part IV — Franciscan Life in the World',
    description: 'Living the charism in communion, service and responsible local belonging.',
    purpose: 'To serve the local church humbly as loyal brothers and sisters in the LCAC and ecumenical settings.',
    principalAreas: ['Ecclesial communion in LCAC', 'Parish participation without superiority', 'Apostolic succession and sacramental reality', 'Interfaith bridge-building']
  },

  // Part V: Safe and Accountable Religious Life
  {
    code: 'OSFC-601',
    title: 'Safeguarding and Boundaries',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Safeguarding culture, consent, boundaries and reporting.',
    purpose: 'To ensure a transparent safeguarding culture protecting children and vulnerable adults.',
    principalAreas: ['Recognizing grooming, coercion, and abuse', 'Immediate civil and canonical reporting', 'Safe church policies', 'No obedience to suppress safeguarding']
  },
  {
    code: 'OSFC-602',
    title: 'Authority, Conscience and Accountability',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Responsible exercise and reception of authority.',
    purpose: 'To examine servant governance, recusal, and protection of conscience.',
    principalAreas: ['Minister General and Council collegiality', 'Conflict of interest and recusal', 'Proper law order of norms', 'Right to explanation and appeal']
  },
  {
    code: 'OSFC-603',
    title: 'Conflict, Correction and Fair Process',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Healthy disagreement, correction, complaint and procedural fairness.',
    purpose: 'To equip novices with natural justice principles and restorative resolution practices.',
    principalAreas: ['Direct private conversation', 'Guardian mediation limits', 'Formal investigation and due process', 'Balance of probabilities standard']
  },
  {
    code: 'OSFC-604',
    title: 'Pastoral and Digital Conduct',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Safe presence in pastoral, online and communications settings.',
    purpose: 'To ensure digital restraint, privacy protection, and non-exploitative online communication.',
    principalAreas: ['Social media guidelines', 'Disclaimers on personal opinions', 'MFA and password succession', 'Protecting vulnerable individuals online']
  },
  {
    code: 'OSFC-605',
    title: 'Health, Dependency and Appropriate Help',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Truthful limits, support and appropriate professional help.',
    purpose: 'To normalize seeking medical, psychological, and spiritual direction support without shame.',
    principalAreas: ['Illness does not suspend vocation', 'Reasonable adjustments for disability', 'Distinguishing formation from therapy', 'Leave and reduced observance']
  },
  {
    code: 'OSFC-606',
    title: 'Integration and Novitiate Review',
    stage: 'novitiate',
    part: 'Part V — Safe and Accountable Religious Life',
    description: 'Drawing together evidence of growth, difficulty and readiness.',
    purpose: 'To synthesize the entire novitiate journey prior to petition for temporary profession.',
    principalAreas: ['Portfolio compilation', 'Four pillars assessment', 'Formator written review', 'Preparation for clothing and profession rite']
  }
];
