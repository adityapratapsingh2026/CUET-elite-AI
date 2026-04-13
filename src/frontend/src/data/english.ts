import type { Idiom, PhrasalVerb, VocabularyWord } from "../types";

export const vocabulary: VocabularyWord[] = [
  {
    word: "Ephemeral",
    meaning: "Lasting for a very short time",
    synonyms: ["Transient", "Fleeting", "Momentary", "Evanescent"],
    antonyms: ["Eternal", "Permanent", "Enduring", "Perpetual"],
    example:
      "The ephemeral beauty of cherry blossoms attracts millions every spring.",
    difficulty: "Hard",
  },
  {
    word: "Benevolent",
    meaning: "Well-meaning and kindly; generous and charitable",
    synonyms: ["Kind", "Generous", "Charitable", "Philanthropic"],
    antonyms: ["Malevolent", "Cruel", "Selfish", "Hostile"],
    example:
      "The benevolent donor funded scholarships for underprivileged students.",
    difficulty: "Medium",
  },
  {
    word: "Pragmatic",
    meaning: "Dealing with things realistically rather than theoretically",
    synonyms: ["Practical", "Realistic", "Sensible", "Down-to-earth"],
    antonyms: ["Idealistic", "Impractical", "Unrealistic", "Theoretical"],
    example:
      "The pragmatic approach to problem-solving helped the team meet its deadline.",
    difficulty: "Medium",
  },
  {
    word: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    synonyms: ["Articulate", "Fluent", "Expressive", "Silver-tongued"],
    antonyms: ["Inarticulate", "Tongue-tied", "Incoherent", "Mumbling"],
    example: "Her eloquent speech moved the entire audience to tears.",
    difficulty: "Easy",
  },
  {
    word: "Ambiguous",
    meaning:
      "Open to more than one interpretation; not having one obvious meaning",
    synonyms: ["Vague", "Unclear", "Equivocal", "Cryptic"],
    antonyms: ["Clear", "Unambiguous", "Explicit", "Definite"],
    example:
      "The ambiguous instructions left students confused about the exam format.",
    difficulty: "Medium",
  },
  {
    word: "Gregarious",
    meaning: "Fond of company; sociable",
    synonyms: ["Sociable", "Outgoing", "Extroverted", "Convivial"],
    antonyms: ["Solitary", "Reserved", "Introverted", "Reclusive"],
    example: "Being gregarious by nature, Priya thrived at networking events.",
    difficulty: "Hard",
  },
  {
    word: "Tenacious",
    meaning: "Holding firmly to something; persistent and determined",
    synonyms: ["Persistent", "Determined", "Resolute", "Dogged"],
    antonyms: ["Irresolute", "Weak-willed", "Vacillating", "Yielding"],
    example:
      "Her tenacious pursuit of excellence earned her the top rank in CUET.",
    difficulty: "Medium",
  },
  {
    word: "Loquacious",
    meaning: "Tending to talk a great deal; talkative",
    synonyms: ["Talkative", "Garrulous", "Verbose", "Chatty"],
    antonyms: ["Taciturn", "Reserved", "Reticent", "Silent"],
    example:
      "The loquacious professor often ran overtime, yet students never complained.",
    difficulty: "Hard",
  },
  {
    word: "Pernicious",
    meaning: "Having a harmful effect, especially in a gradual or subtle way",
    synonyms: ["Harmful", "Destructive", "Damaging", "Detrimental"],
    antonyms: ["Beneficial", "Harmless", "Wholesome", "Salutary"],
    example:
      "The pernicious effects of procrastination can ruin an entire academic year.",
    difficulty: "Hard",
  },
  {
    word: "Candid",
    meaning: "Truthful and straightforward; frank",
    synonyms: ["Frank", "Honest", "Direct", "Forthright"],
    antonyms: ["Devious", "Dishonest", "Evasive", "Secretive"],
    example:
      "The mentor gave candid feedback that helped the student improve rapidly.",
    difficulty: "Easy",
  },
  {
    word: "Audacious",
    meaning: "Showing a willingness to take surprisingly bold risks",
    synonyms: ["Bold", "Daring", "Fearless", "Intrepid"],
    antonyms: ["Timid", "Cowardly", "Cautious", "Meek"],
    example:
      "The audacious entrepreneur launched three startups by age twenty-two.",
    difficulty: "Medium",
  },
  {
    word: "Cacophony",
    meaning: "A harsh, discordant mixture of sounds",
    synonyms: ["Discord", "Noise", "Dissonance", "Din"],
    antonyms: ["Harmony", "Melody", "Euphony", "Silence"],
    example:
      "The cacophony of traffic horns was unbearable during rush hour in Mumbai.",
    difficulty: "Hard",
  },
  {
    word: "Diligent",
    meaning: "Having or showing care and conscientiousness in work or duties",
    synonyms: ["Hardworking", "Assiduous", "Industrious", "Meticulous"],
    antonyms: ["Lazy", "Negligent", "Careless", "Idle"],
    example:
      "Diligent revision in the final week boosted her CUET score significantly.",
    difficulty: "Easy",
  },
  {
    word: "Euphoric",
    meaning: "Intensely happy and excited",
    synonyms: ["Elated", "Ecstatic", "Overjoyed", "Exhilarated"],
    antonyms: ["Despondent", "Miserable", "Depressed", "Disheartened"],
    example: "She was euphoric when she saw her name on the merit list.",
    difficulty: "Medium",
  },
  {
    word: "Frugal",
    meaning: "Sparing or economical in the use of money or resources",
    synonyms: ["Thrifty", "Economical", "Careful", "Prudent"],
    antonyms: ["Wasteful", "Extravagant", "Lavish", "Prodigal"],
    example:
      "His frugal lifestyle allowed him to save enough for an elite coaching program.",
    difficulty: "Easy",
  },
  {
    word: "Garrulous",
    meaning: "Excessively talkative, especially on trivial matters",
    synonyms: ["Verbose", "Loquacious", "Chatty", "Long-winded"],
    antonyms: ["Taciturn", "Concise", "Laconic", "Reticent"],
    example:
      "The garrulous candidate went far beyond the word limit in every answer.",
    difficulty: "Hard",
  },
  {
    word: "Hubris",
    meaning: "Excessive pride or self-confidence leading to downfall",
    synonyms: ["Arrogance", "Conceit", "Vanity", "Insolence"],
    antonyms: ["Humility", "Modesty", "Meekness", "Diffidence"],
    example:
      "His hubris cost him the opportunity to work with seasoned professionals.",
    difficulty: "Hard",
  },
  {
    word: "Insolent",
    meaning: "Showing a rude and arrogant lack of respect",
    synonyms: ["Impudent", "Impertinent", "Rude", "Brazen"],
    antonyms: ["Respectful", "Polite", "Courteous", "Deferential"],
    example: "The insolent student was asked to leave the examination hall.",
    difficulty: "Medium",
  },
  {
    word: "Jovial",
    meaning: "Cheerful and friendly",
    synonyms: ["Merry", "Jolly", "Cheerful", "Genial"],
    antonyms: ["Gloomy", "Morose", "Sullen", "Melancholy"],
    example:
      "The jovial atmosphere at the study group kept everyone motivated.",
    difficulty: "Easy",
  },
  {
    word: "Kindle",
    meaning: "To arouse or inspire an emotion or feeling",
    synonyms: ["Ignite", "Spark", "Stir", "Awaken"],
    antonyms: ["Extinguish", "Quench", "Dampen", "Suppress"],
    example:
      "A single inspiring lecture can kindle a passion for learning that lasts a lifetime.",
    difficulty: "Easy",
  },
  {
    word: "Labyrinthine",
    meaning: "Extremely complex and difficult to understand",
    synonyms: ["Intricate", "Convoluted", "Tortuous", "Complicated"],
    antonyms: ["Simple", "Straightforward", "Clear", "Uncomplicated"],
    example:
      "The labyrinthine bureaucratic process frustrated many applicants.",
    difficulty: "Hard",
  },
  {
    word: "Malleable",
    meaning: "Easily influenced; adaptable",
    synonyms: ["Flexible", "Pliable", "Adaptable", "Yielding"],
    antonyms: ["Rigid", "Inflexible", "Stubborn", "Obstinate"],
    example: "Young minds are malleable and absorb new information rapidly.",
    difficulty: "Medium",
  },
  {
    word: "Nonchalant",
    meaning: "Feeling or appearing casually calm and relaxed",
    synonyms: ["Casual", "Unconcerned", "Indifferent", "Breezy"],
    antonyms: ["Anxious", "Concerned", "Agitated", "Nervous"],
    example:
      "She appeared nonchalant before the results, but was secretly nervous.",
    difficulty: "Medium",
  },
  {
    word: "Oblivious",
    meaning: "Not aware of or concerned about what is happening",
    synonyms: ["Unaware", "Unconscious", "Ignorant", "Heedless"],
    antonyms: ["Aware", "Conscious", "Attentive", "Alert"],
    example:
      "Oblivious to the noise around him, he studied with complete focus.",
    difficulty: "Easy",
  },
  {
    word: "Pedantic",
    meaning: "Overly concerned with formal rules and minor details",
    synonyms: ["Nitpicking", "Fussy", "Didactic", "Punctilious"],
    antonyms: ["Casual", "Informal", "Easygoing", "Flexible"],
    example:
      "The pedantic examiner deducted marks for the smallest formatting errors.",
    difficulty: "Hard",
  },
  {
    word: "Quixotic",
    meaning: "Extremely idealistic and impractical",
    synonyms: ["Idealistic", "Unrealistic", "Romantic", "Visionary"],
    antonyms: ["Pragmatic", "Realistic", "Practical", "Sensible"],
    example:
      "His quixotic plan to study abroad without financial support was abandoned.",
    difficulty: "Hard",
  },
  {
    word: "Resilient",
    meaning: "Able to recover quickly from difficulties",
    synonyms: ["Tough", "Hardy", "Flexible", "Adaptable"],
    antonyms: ["Fragile", "Weak", "Brittle", "Vulnerable"],
    example:
      "Resilient students treat every setback as a stepping stone to success.",
    difficulty: "Easy",
  },
  {
    word: "Sagacious",
    meaning: "Having good judgment and wisdom",
    synonyms: ["Wise", "Shrewd", "Astute", "Perceptive"],
    antonyms: ["Foolish", "Naive", "Imprudent", "Unwise"],
    example:
      "The sagacious mentor foresaw the trend shifts in the exam pattern.",
    difficulty: "Hard",
  },
  {
    word: "Taciturn",
    meaning: "Reserved or uncommunicative in speech; saying little",
    synonyms: ["Silent", "Reserved", "Reticent", "Quiet"],
    antonyms: ["Talkative", "Loquacious", "Garrulous", "Voluble"],
    example:
      "The taciturn professor communicated entirely through written notes.",
    difficulty: "Hard",
  },
  {
    word: "Ubiquitous",
    meaning: "Present, appearing, or found everywhere",
    synonyms: ["Omnipresent", "Pervasive", "Universal", "Widespread"],
    antonyms: ["Rare", "Uncommon", "Scarce", "Absent"],
    example: "Smartphones have become ubiquitous in modern Indian classrooms.",
    difficulty: "Medium",
  },
  {
    word: "Verbose",
    meaning: "Using more words than needed; wordy",
    synonyms: ["Wordy", "Long-winded", "Prolix", "Garrulous"],
    antonyms: ["Concise", "Succinct", "Terse", "Laconic"],
    example:
      "His verbose answers often confused the examiner rather than impressing them.",
    difficulty: "Medium",
  },
  {
    word: "Whimsical",
    meaning: "Playfully quaint or fanciful; unusual in an appealing way",
    synonyms: ["Fanciful", "Playful", "Quirky", "Capricious"],
    antonyms: ["Serious", "Conventional", "Practical", "Predictable"],
    example:
      "Her whimsical writing style made the essay stand out among thousands.",
    difficulty: "Medium",
  },
  {
    word: "Xenophobia",
    meaning: "Fear or dislike of people from other countries",
    synonyms: ["Prejudice", "Intolerance", "Bigotry", "Chauvinism"],
    antonyms: ["Tolerance", "Acceptance", "Openness", "Cosmopolitanism"],
    example:
      "Xenophobia hinders a nation's ability to grow in a globalized world.",
    difficulty: "Hard",
  },
  {
    word: "Zealous",
    meaning: "Having or showing great energy in pursuit of a cause or goal",
    synonyms: ["Enthusiastic", "Passionate", "Fervent", "Ardent"],
    antonyms: ["Apathetic", "Indifferent", "Unenthusiastic", "Lukewarm"],
    example:
      "The zealous student spent weekends in the library preparing for CUET.",
    difficulty: "Easy",
  },
  {
    word: "Amiable",
    meaning: "Having or displaying a friendly and pleasant manner",
    synonyms: ["Friendly", "Pleasant", "Affable", "Genial"],
    antonyms: ["Unfriendly", "Hostile", "Disagreeable", "Surly"],
    example:
      "Her amiable personality made her popular among teachers and peers alike.",
    difficulty: "Easy",
  },
  {
    word: "Banal",
    meaning: "So lacking in originality as to be obvious and boring",
    synonyms: ["Trite", "Cliché", "Hackneyed", "Mundane"],
    antonyms: ["Original", "Fresh", "Novel", "Inventive"],
    example:
      "The essay was filled with banal phrases that failed to impress the evaluator.",
    difficulty: "Medium",
  },
  {
    word: "Clemency",
    meaning: "Mercy and leniency shown towards offenders",
    synonyms: ["Mercy", "Leniency", "Forgiveness", "Compassion"],
    antonyms: ["Severity", "Harshness", "Cruelty", "Strictness"],
    example:
      "The court showed clemency and reduced the fine for the first-time offender.",
    difficulty: "Hard",
  },
  {
    word: "Dauntless",
    meaning: "Showing fearlessness and determination",
    synonyms: ["Fearless", "Undaunted", "Intrepid", "Indomitable"],
    antonyms: ["Timid", "Fearful", "Cowardly", "Apprehensive"],
    example:
      "The dauntless climber reached the Himalayan summit despite the storm.",
    difficulty: "Medium",
  },
  {
    word: "Eminent",
    meaning: "Famous and respected within a particular sphere",
    synonyms: ["Distinguished", "Renowned", "Prominent", "Celebrated"],
    antonyms: ["Unknown", "Obscure", "Insignificant", "Inferior"],
    example:
      "An eminent historian delivered the keynote at the university convocation.",
    difficulty: "Easy",
  },
  {
    word: "Fallacious",
    meaning: "Based on a mistaken belief; misleading",
    synonyms: ["Erroneous", "False", "Misleading", "Deceptive"],
    antonyms: ["True", "Accurate", "Correct", "Valid"],
    example:
      "The fallacious reasoning in his argument was quickly exposed by the teacher.",
    difficulty: "Hard",
  },
  {
    word: "Gullible",
    meaning: "Easily persuaded to believe something; credulous",
    synonyms: ["Naive", "Credulous", "Trusting", "Unsuspecting"],
    antonyms: ["Skeptical", "Suspicious", "Cynical", "Wary"],
    example: "Gullible students often fall prey to online coaching scams.",
    difficulty: "Easy",
  },
  {
    word: "Haughty",
    meaning: "Arrogantly superior and disdainful",
    synonyms: ["Arrogant", "Proud", "Supercilious", "Condescending"],
    antonyms: ["Humble", "Modest", "Meek", "Unassuming"],
    example:
      "Her haughty attitude alienated her classmates despite her brilliance.",
    difficulty: "Medium",
  },
  {
    word: "Impetuous",
    meaning: "Acting or done quickly without thought",
    synonyms: ["Rash", "Impulsive", "Hasty", "Reckless"],
    antonyms: ["Cautious", "Deliberate", "Careful", "Thoughtful"],
    example:
      "His impetuous decision to skip mock tests cost him dearly in the final exam.",
    difficulty: "Medium",
  },
  {
    word: "Judicious",
    meaning: "Having or showing good judgment; wise and sensible",
    synonyms: ["Wise", "Prudent", "Discerning", "Astute"],
    antonyms: ["Foolish", "Rash", "Imprudent", "Unwise"],
    example: "Judicious use of revision time is the key to CUET success.",
    difficulty: "Medium",
  },
  {
    word: "Laconic",
    meaning: "Using very few words; brief and concise",
    synonyms: ["Concise", "Succinct", "Terse", "Brief"],
    antonyms: ["Verbose", "Wordy", "Long-winded", "Prolix"],
    example:
      "His laconic reply — 'I passed' — said everything the family needed to hear.",
    difficulty: "Hard",
  },
  {
    word: "Magnanimous",
    meaning: "Generous or forgiving, especially towards rivals or enemies",
    synonyms: ["Generous", "Forgiving", "Noble", "Charitable"],
    antonyms: ["Petty", "Mean", "Selfish", "Vindictive"],
    example:
      "The magnanimous champion congratulated all competitors after the event.",
    difficulty: "Hard",
  },
  {
    word: "Naïve",
    meaning: "Showing a lack of experience, wisdom, or judgment",
    synonyms: ["Innocent", "Gullible", "Simple", "Unsophisticated"],
    antonyms: ["Sophisticated", "Worldly", "Experienced", "Shrewd"],
    example:
      "It was naïve to think one week of preparation would be enough for CUET.",
    difficulty: "Easy",
  },
  {
    word: "Obstinate",
    meaning: "Stubbornly refusing to change one's opinion or chosen course",
    synonyms: ["Stubborn", "Headstrong", "Tenacious", "Intractable"],
    antonyms: ["Flexible", "Compliant", "Yielding", "Amenable"],
    example:
      "His obstinate refusal to revise his notes ultimately hurt his performance.",
    difficulty: "Medium",
  },
  {
    word: "Pensive",
    meaning: "Engaged in deep or serious thought",
    synonyms: ["Thoughtful", "Reflective", "Contemplative", "Meditative"],
    antonyms: ["Thoughtless", "Carefree", "Frivolous", "Unreflective"],
    example:
      "She sat pensive by the window, planning her study schedule for the week.",
    difficulty: "Easy",
  },
  {
    word: "Querulous",
    meaning: "Complaining in a petulant or whining manner",
    synonyms: ["Complaining", "Grumbling", "Whining", "Peevish"],
    antonyms: ["Content", "Satisfied", "Cheerful", "Pleasant"],
    example:
      "The querulous student blamed every teacher for his poor performance.",
    difficulty: "Hard",
  },
  {
    word: "Reticent",
    meaning: "Not revealing one's thoughts or feelings readily",
    synonyms: ["Reserved", "Quiet", "Withdrawn", "Taciturn"],
    antonyms: ["Forthcoming", "Communicative", "Open", "Outgoing"],
    example:
      "She was reticent about sharing her preparation strategy with competitors.",
    difficulty: "Medium",
  },
  {
    word: "Serendipity",
    meaning: "The occurrence of events by chance in a happy or beneficial way",
    synonyms: ["Luck", "Fortune", "Chance", "Coincidence"],
    antonyms: ["Misfortune", "Design", "Deliberateness", "Planning"],
    example:
      "Pure serendipity led him to the book that changed his study approach forever.",
    difficulty: "Hard",
  },
  {
    word: "Trepidation",
    meaning: "A feeling of fear or agitation about something that may happen",
    synonyms: ["Anxiety", "Apprehension", "Dread", "Nervousness"],
    antonyms: ["Confidence", "Calmness", "Courage", "Assurance"],
    example:
      "She walked into the exam hall with trepidation but emerged with confidence.",
    difficulty: "Hard",
  },
  {
    word: "Unfettered",
    meaning: "Not bound or controlled; free and unrestrained",
    synonyms: ["Free", "Unrestricted", "Liberated", "Unbound"],
    antonyms: ["Restricted", "Limited", "Bound", "Constrained"],
    example:
      "Unfettered access to quality study material is a game-changer for rural students.",
    difficulty: "Medium",
  },
  {
    word: "Vindictive",
    meaning: "Having a strong desire for revenge",
    synonyms: ["Revengeful", "Spiteful", "Resentful", "Vengeful"],
    antonyms: ["Forgiving", "Merciful", "Compassionate", "Magnanimous"],
    example:
      "A vindictive attitude towards failure only blocks future success.",
    difficulty: "Medium",
  },
  {
    word: "Wary",
    meaning: "Feeling or showing caution about possible dangers or problems",
    synonyms: ["Cautious", "Careful", "Watchful", "Vigilant"],
    antonyms: ["Careless", "Reckless", "Heedless", "Unwary"],
    example:
      "Be wary of unofficial mock test platforms that leak incorrect answers.",
    difficulty: "Easy",
  },
  {
    word: "Xenial",
    meaning: "Friendly to strangers; hospitable",
    synonyms: ["Hospitable", "Welcoming", "Cordial", "Generous"],
    antonyms: ["Inhospitable", "Unfriendly", "Cold", "Hostile"],
    example:
      "The xenial faculty made all first-year students feel immediately welcome.",
    difficulty: "Hard",
  },
  {
    word: "Yearning",
    meaning: "A feeling of intense longing for something",
    synonyms: ["Longing", "Craving", "Desire", "Pining"],
    antonyms: ["Indifference", "Apathy", "Aversion", "Disinterest"],
    example:
      "A yearning for academic excellence drove him through countless sleepless nights.",
    difficulty: "Easy",
  },
  {
    word: "Zeal",
    meaning: "Great energy or enthusiasm in pursuit of a cause or an objective",
    synonyms: ["Enthusiasm", "Passion", "Fervor", "Ardor"],
    antonyms: ["Apathy", "Indifference", "Lethargy", "Listlessness"],
    example:
      "Her zeal for learning new vocabulary every day paid off in the English section.",
    difficulty: "Easy",
  },
  {
    word: "Acrimony",
    meaning: "Bitterness or ill feeling, especially in speech or manner",
    synonyms: ["Bitterness", "Hostility", "Rancor", "Animosity"],
    antonyms: ["Goodwill", "Kindness", "Friendliness", "Harmony"],
    example:
      "The acrimony between the rival study groups disrupted the entire batch.",
    difficulty: "Hard",
  },
  {
    word: "Bequeath",
    meaning: "To pass on something (quality or property) to another person",
    synonyms: ["Leave", "Bestow", "Hand down", "Entrust"],
    antonyms: ["Withhold", "Keep", "Retain", "Deny"],
    example:
      "The scholar bequeathed her notes and resources to the next generation of aspirants.",
    difficulty: "Medium",
  },
  {
    word: "Coalesce",
    meaning: "To come together and form one mass or whole",
    synonyms: ["Merge", "Unite", "Combine", "Blend"],
    antonyms: ["Separate", "Divide", "Split", "Disperse"],
    example:
      "Ideas from different subjects coalesce in a well-rounded CUET preparation plan.",
    difficulty: "Hard",
  },
  {
    word: "Dexterity",
    meaning: "Skill in performing tasks, especially with the hands",
    synonyms: ["Skill", "Agility", "Adroitness", "Nimbleness"],
    antonyms: ["Clumsiness", "Incompetence", "Ineptitude", "Awkwardness"],
    example: "Mental dexterity is tested in the quantitative section of CUET.",
    difficulty: "Medium",
  },
  {
    word: "Enervate",
    meaning: "To cause someone to feel drained of energy or vitality",
    synonyms: ["Exhaust", "Drain", "Weaken", "Debilitate"],
    antonyms: ["Energize", "Invigorate", "Refresh", "Fortify"],
    example:
      "Long hours without breaks can enervate even the most focused student.",
    difficulty: "Hard",
  },
  {
    word: "Fastidious",
    meaning: "Very attentive to detail; difficult to please",
    synonyms: ["Meticulous", "Particular", "Fussy", "Punctilious"],
    antonyms: ["Careless", "Sloppy", "Negligent", "Uncritical"],
    example:
      "A fastidious approach to answer presentation earns extra marks from evaluators.",
    difficulty: "Hard",
  },
  {
    word: "Gaiety",
    meaning: "The state of being light-hearted; cheerfulness",
    synonyms: ["Cheerfulness", "Merriment", "Joyfulness", "Mirth"],
    antonyms: ["Sadness", "Gloom", "Misery", "Sorrow"],
    example:
      "The gaiety in the classroom returned after the results were announced.",
    difficulty: "Medium",
  },
  {
    word: "Hapless",
    meaning: "Unfortunate; unlucky",
    synonyms: ["Unfortunate", "Unlucky", "Ill-fated", "Wretched"],
    antonyms: ["Lucky", "Fortunate", "Blessed", "Favored"],
    example:
      "The hapless student discovered an error in his form only after the deadline passed.",
    difficulty: "Medium",
  },
  {
    word: "Idiosyncratic",
    meaning: "Relating to peculiar behavior; distinctive to an individual",
    synonyms: ["Peculiar", "Eccentric", "Quirky", "Distinctive"],
    antonyms: ["Normal", "Conventional", "Ordinary", "Standard"],
    example:
      "His idiosyncratic mnemonic techniques helped him memorize hundreds of vocabulary words.",
    difficulty: "Hard",
  },
  {
    word: "Jocular",
    meaning: "Fond of jokes; playful and humorous",
    synonyms: ["Humorous", "Playful", "Witty", "Facetious"],
    antonyms: ["Serious", "Solemn", "Grave", "Humorless"],
    example:
      "The jocular tone of the essay relaxed the reader and made the arguments more persuasive.",
    difficulty: "Medium",
  },
  {
    word: "Knack",
    meaning: "A special skill or talent for doing something",
    synonyms: ["Skill", "Talent", "Flair", "Aptitude"],
    antonyms: ["Inability", "Ineptitude", "Incompetence", "Clumsiness"],
    example:
      "She had a knack for solving complex RC passages in under three minutes.",
    difficulty: "Easy",
  },
  {
    word: "Listless",
    meaning: "Lacking energy and enthusiasm",
    synonyms: ["Lethargic", "Languid", "Sluggish", "Apathetic"],
    antonyms: ["Energetic", "Active", "Enthusiastic", "Vibrant"],
    example:
      "After three weeks of intensive revision, even the most dedicated students felt listless.",
    difficulty: "Medium",
  },
  {
    word: "Meticulous",
    meaning: "Showing great attention to detail; very careful and precise",
    synonyms: ["Thorough", "Precise", "Careful", "Painstaking"],
    antonyms: ["Careless", "Sloppy", "Casual", "Negligent"],
    example:
      "Meticulous revision of grammar rules improved her score by twelve marks.",
    difficulty: "Easy",
  },
  {
    word: "Nostalgia",
    meaning: "A sentimental longing or wistful affection for the past",
    synonyms: ["Wistfulness", "Longing", "Sentimentality", "Reminiscence"],
    antonyms: [
      "Anticipation",
      "Forward-looking",
      "Contentment",
      "Present-focus",
    ],
    example:
      "She felt a wave of nostalgia re-reading her old school English textbooks.",
    difficulty: "Easy",
  },
  {
    word: "Ostentatious",
    meaning: "Designed to impress or attract notice; showy",
    synonyms: ["Showy", "Flashy", "Pretentious", "Gaudy"],
    antonyms: ["Modest", "Understated", "Subtle", "Simple"],
    example:
      "The ostentatious display of wealth in his essay weakened its moral argument.",
    difficulty: "Hard",
  },
  {
    word: "Placid",
    meaning: "Not easily upset or excited; calm and peaceful",
    synonyms: ["Calm", "Serene", "Tranquil", "Composed"],
    antonyms: ["Agitated", "Turbulent", "Nervous", "Excitable"],
    example:
      "She remained placid during the toughest questions of the mock test.",
    difficulty: "Medium",
  },
  {
    word: "Ramification",
    meaning: "A consequence of an action or event, especially an unwelcome one",
    synonyms: ["Consequence", "Result", "Implication", "Outcome"],
    antonyms: ["Cause", "Source", "Origin", "Antecedent"],
    example:
      "Students failed to anticipate the ramifications of skipping mock tests entirely.",
    difficulty: "Hard",
  },
  {
    word: "Sanguine",
    meaning: "Optimistic, especially in a difficult situation",
    synonyms: ["Optimistic", "Hopeful", "Positive", "Cheerful"],
    antonyms: ["Pessimistic", "Gloomy", "Hopeless", "Despondent"],
    example:
      "She remained sanguine about her chances even after a difficult first paper.",
    difficulty: "Hard",
  },
  {
    word: "Terse",
    meaning: "Sparing in use of words; abruptly brief",
    synonyms: ["Concise", "Laconic", "Succinct", "Curt"],
    antonyms: ["Verbose", "Wordy", "Prolix", "Long-winded"],
    example:
      "Her terse but precise answers earned maximum marks in the written section.",
    difficulty: "Medium",
  },
  {
    word: "Unkempt",
    meaning: "Having an untidy or disheveled appearance",
    synonyms: ["Untidy", "Messy", "Disheveled", "Scruffy"],
    antonyms: ["Neat", "Tidy", "Well-groomed", "Orderly"],
    example:
      "His unkempt notes became impossible to revise the night before the exam.",
    difficulty: "Easy",
  },
  {
    word: "Venerate",
    meaning: "To regard with great respect; to revere",
    synonyms: ["Revere", "Respect", "Honor", "Admire"],
    antonyms: ["Disrespect", "Disdain", "Despise", "Belittle"],
    example:
      "Students venerate teachers whose guidance transforms their academic trajectory.",
    difficulty: "Medium",
  },
  {
    word: "Wistful",
    meaning: "Having or showing a feeling of vague or regretful longing",
    synonyms: ["Yearning", "Longing", "Pensive", "Reflective"],
    antonyms: ["Indifferent", "Content", "Unconcerned", "Joyful"],
    example:
      "He cast a wistful glance at the campus knowing he'd leave after graduation.",
    difficulty: "Medium",
  },
  {
    word: "Acumen",
    meaning: "The ability to make good judgments and quick decisions",
    synonyms: ["Shrewdness", "Wisdom", "Insight", "Astuteness"],
    antonyms: ["Stupidity", "Foolishness", "Ignorance", "Obtuseness"],
    example:
      "His financial acumen helped him earn a scholarship to the top management college.",
    difficulty: "Medium",
  },
  {
    word: "Bolster",
    meaning: "To support or strengthen; to boost morale or confidence",
    synonyms: ["Strengthen", "Support", "Reinforce", "Prop up"],
    antonyms: ["Undermine", "Weaken", "Diminish", "Hinder"],
    example:
      "Daily vocabulary practice can bolster your score in the English section significantly.",
    difficulty: "Easy",
  },
  {
    word: "Convivial",
    meaning: "Friendly, lively, and enjoyable in a social setting",
    synonyms: ["Sociable", "Friendly", "Jovial", "Lively"],
    antonyms: ["Unfriendly", "Reserved", "Antisocial", "Gloomy"],
    example:
      "The convivial atmosphere at the study group made learning feel effortless.",
    difficulty: "Medium",
  },
  {
    word: "Deleterious",
    meaning: "Causing harm or damage",
    synonyms: ["Harmful", "Damaging", "Injurious", "Detrimental"],
    antonyms: ["Beneficial", "Helpful", "Wholesome", "Advantageous"],
    example:
      "Sleep deprivation has a deleterious effect on memory and exam performance.",
    difficulty: "Hard",
  },
  {
    word: "Effervescent",
    meaning: "Full of energy, enthusiasm, and liveliness",
    synonyms: ["Vivacious", "Bubbly", "Lively", "Exuberant"],
    antonyms: ["Dull", "Lifeless", "Lethargic", "Subdued"],
    example:
      "Her effervescent personality energized the entire classroom before the exam.",
    difficulty: "Hard",
  },
  {
    word: "Foreboding",
    meaning: "A feeling that something bad will happen; an omen",
    synonyms: ["Dread", "Apprehension", "Presage", "Premonition"],
    antonyms: ["Optimism", "Hope", "Confidence", "Cheerfulness"],
    example:
      "A sense of foreboding gripped him as he flipped through the question paper.",
    difficulty: "Hard",
  },
  {
    word: "Genteel",
    meaning: "Polite and refined in manner; respectable",
    synonyms: ["Refined", "Polished", "Well-bred", "Cultured"],
    antonyms: ["Crude", "Vulgar", "Coarse", "Uncultured"],
    example: "His genteel manner of speaking impressed the interview panel.",
    difficulty: "Medium",
  },
  {
    word: "Heinous",
    meaning: "Utterly wicked or criminal; morally reprehensible",
    synonyms: ["Wicked", "Atrocious", "Monstrous", "Abominable"],
    antonyms: ["Virtuous", "Admirable", "Noble", "Praiseworthy"],
    example:
      "Cheating in examinations is a heinous act that destroys the spirit of fair competition.",
    difficulty: "Medium",
  },
  {
    word: "Impervious",
    meaning: "Not allowing fluid to pass through; unable to be affected by",
    synonyms: ["Resistant", "Immune", "Unaffected", "Impenetrable"],
    antonyms: ["Vulnerable", "Susceptible", "Penetrable", "Sensitive"],
    example:
      "She seemed impervious to the pressure and answered every question calmly.",
    difficulty: "Hard",
  },
  {
    word: "Jettison",
    meaning: "To abandon or discard someone or something",
    synonyms: ["Discard", "Abandon", "Scrap", "Dump"],
    antonyms: ["Keep", "Retain", "Preserve", "Hold"],
    example:
      "He jettisoned unproductive study habits in the final month before CUET.",
    difficulty: "Hard",
  },
  {
    word: "Kindle",
    meaning: "To arouse or inspire a feeling or passion",
    synonyms: ["Ignite", "Awaken", "Stir", "Evoke"],
    antonyms: ["Quench", "Dampen", "Suppress", "Extinguish"],
    example:
      "Great teachers have the ability to kindle curiosity that lasts a lifetime.",
    difficulty: "Easy",
  },
];

export const phrasalVerbs: PhrasalVerb[] = [
  {
    phrase: "Break down",
    meaning:
      "To stop functioning; to lose emotional control; to analyze in detail",
    example:
      "The negotiations broke down after both sides refused to compromise.",
  },
  {
    phrase: "Call off",
    meaning: "To cancel a planned event",
    example: "The cricket match was called off due to heavy rain.",
  },
  {
    phrase: "Come across",
    meaning: "To find or meet unexpectedly; to appear or seem",
    example: "She came across an old photograph while cleaning her room.",
  },
  {
    phrase: "Give up",
    meaning: "To stop doing something; to abandon an effort",
    example:
      "Never give up on your dreams, no matter how hard the journey becomes.",
  },
  {
    phrase: "Look into",
    meaning: "To investigate or examine carefully",
    example:
      "The committee will look into the allegations of financial misconduct.",
  },
  {
    phrase: "Put off",
    meaning: "To postpone; to delay; to cause to feel disgust",
    example: "Do not put off your CUET preparation — start today!",
  },
  {
    phrase: "Run out of",
    meaning: "To use all of something so none is left",
    example:
      "She ran out of time during the mock test and couldn't attempt 10 questions.",
  },
  {
    phrase: "Set up",
    meaning: "To establish; to arrange; to start an organization",
    example:
      "He set up a study group with classmates to prepare for competitive exams.",
  },
  {
    phrase: "Turn down",
    meaning: "To reject an offer or request",
    example:
      "She turned down the scholarship because it required relocating abroad.",
  },
  {
    phrase: "Take over",
    meaning: "To assume control; to acquire another company",
    example:
      "The multinational company took over the struggling startup for ₹500 crore.",
  },
  {
    phrase: "Back up",
    meaning: "To support; to make a copy of data; to reverse a vehicle",
    example:
      "Always back up your study notes on a cloud drive to avoid losing them.",
  },
  {
    phrase: "Bring about",
    meaning: "To cause something to happen",
    example:
      "Hard work and consistency can bring about remarkable transformations.",
  },
  {
    phrase: "Carry out",
    meaning: "To complete or perform a task",
    example:
      "She carried out the experiment exactly as instructed by the professor.",
  },
  {
    phrase: "Cut down on",
    meaning: "To reduce the amount or frequency of something",
    example: "He cut down on screen time to improve his focus before the exam.",
  },
  {
    phrase: "Deal with",
    meaning: "To handle or cope with a problem or situation",
    example:
      "Toppers know how to deal with exam anxiety through regular practice.",
  },
  {
    phrase: "Drop out",
    meaning: "To withdraw from a course or activity",
    example:
      "Despite pressure, she refused to drop out of the competitive program.",
  },
  {
    phrase: "Fall apart",
    meaning: "To break into pieces; to lose composure",
    example: "His argument fell apart when the teacher asked for evidence.",
  },
  {
    phrase: "Get along with",
    meaning: "To have a friendly relationship with someone",
    example:
      "The ability to get along with classmates helps create a positive study environment.",
  },
  {
    phrase: "Hand in",
    meaning: "To submit work or an assignment",
    example:
      "All assignments must be handed in before the examination registration closes.",
  },
  {
    phrase: "Hold on",
    meaning: "To wait; to grip tightly",
    example:
      "Hold on to your confidence even when the question paper seems tough.",
  },
  {
    phrase: "Keep up with",
    meaning: "To maintain pace with something; to stay updated",
    example:
      "It is difficult to keep up with syllabus changes without a mentor's guidance.",
  },
  {
    phrase: "Let down",
    meaning: "To disappoint someone",
    example:
      "She was determined not to let down her parents after years of preparation.",
  },
  {
    phrase: "Make up for",
    meaning: "To compensate for something",
    example:
      "Extra revision sessions helped her make up for the time lost during illness.",
  },
  {
    phrase: "Narrow down",
    meaning: "To reduce a number of choices to a smaller selection",
    example:
      "Using elimination techniques, she narrowed down the options to two in each question.",
  },
  {
    phrase: "Pass on",
    meaning: "To transmit or convey information to someone else",
    example: "Good teachers pass on not just knowledge but a love of learning.",
  },
  {
    phrase: "Point out",
    meaning: "To indicate or draw attention to something",
    example:
      "The mentor pointed out the common mistakes students make in the English section.",
  },
  {
    phrase: "Pull through",
    meaning: "To recover from a serious illness or difficulty",
    example:
      "Despite the setback, he pulled through and secured a rank in the top 500.",
  },
  {
    phrase: "Rule out",
    meaning: "To eliminate a possibility",
    example: "Rule out the obviously wrong options before guessing in MCQs.",
  },
  {
    phrase: "Sort out",
    meaning: "To resolve a problem or organize things",
    example:
      "She sorted out her revision schedule subject by subject for the last month.",
  },
  {
    phrase: "Stand out",
    meaning: "To be noticed as different or exceptional",
    example:
      "A well-structured answer can make a student stand out among thousands of candidates.",
  },
  {
    phrase: "Take up",
    meaning: "To begin an activity; to occupy time or space",
    example: "She decided to take up meditation to manage pre-exam stress.",
  },
  {
    phrase: "Think over",
    meaning: "To consider carefully before making a decision",
    example:
      "Think over each question carefully before marking the final answer.",
  },
  {
    phrase: "Work out",
    meaning: "To find a solution; to exercise; to develop in a positive way",
    example:
      "Dedicated study and a positive mindset will work out in your favor.",
  },
  {
    phrase: "Write off",
    meaning: "To dismiss as worthless; to accept a loss",
    example:
      "Do not write off any topic — CUET questions can appear from unexpected areas.",
  },
  {
    phrase: "Zero in on",
    meaning: "To focus attention on a specific target",
    example:
      "In the final month, zero in on weak topics to maximize your score improvement.",
  },
  {
    phrase: "Blow up",
    meaning: "To explode; to enlarge; to suddenly become very angry",
    example:
      "The controversy blew up on social media and distracted many students.",
  },
  {
    phrase: "Catch up",
    meaning: "To reach the same level as others; to update oneself",
    example: "She stayed up late to catch up on the chapters she had missed.",
  },
  {
    phrase: "Come up with",
    meaning: "To produce or suggest an idea or plan",
    example:
      "The team came up with an innovative strategy to tackle the general awareness section.",
  },
  {
    phrase: "Die down",
    meaning: "To gradually decrease in strength or intensity",
    example:
      "The anxiety died down once she saw how familiar the first few questions were.",
  },
  {
    phrase: "Figure out",
    meaning: "To solve or understand something through thought",
    example:
      "It took her an hour to figure out the pattern in the data interpretation question.",
  },
  {
    phrase: "Get over",
    meaning: "To recover from something unpleasant; to overcome",
    example:
      "It took her a week to get over the disappointment of a poor mock test result.",
  },
  {
    phrase: "Go through",
    meaning: "To experience; to examine something carefully",
    example:
      "She went through all previous years' question papers before the exam.",
  },
  {
    phrase: "Hang on",
    meaning: "To wait briefly; to persist through difficulty",
    example:
      "Hang on through the toughest revision weeks — the results will reward you.",
  },
  {
    phrase: "Look up to",
    meaning: "To admire or respect someone greatly",
    example:
      "Every student looks up to toppers who have cracked CUET with perfect scores.",
  },
  {
    phrase: "Make out",
    meaning: "To understand; to see or hear with difficulty",
    example: "It was hard to make out the logic in the poorly worded question.",
  },
  {
    phrase: "Open up",
    meaning: "To become more communicative; to become available",
    example:
      "Joining a study group helped the introvert open up and ask more questions.",
  },
  {
    phrase: "Pick up",
    meaning: "To learn quickly; to collect; to improve",
    example:
      "She picked up grammar rules faster by reading quality editorial articles daily.",
  },
  {
    phrase: "Put forward",
    meaning: "To propose or suggest an idea",
    example:
      "The student put forward a detailed argument in her essay to support her thesis.",
  },
  {
    phrase: "Rely on",
    meaning: "To depend on someone or something",
    example:
      "Do not solely rely on coaching — self-study is equally important for CUET.",
  },
  {
    phrase: "Run through",
    meaning: "To rehearse or review something quickly",
    example:
      "He ran through the entire vocabulary list one last time the night before.",
  },
  {
    phrase: "Step up",
    meaning: "To increase efforts; to take a more active role",
    example:
      "With only two months left, it was time to step up the preparation intensity.",
  },
];

export const idioms: Idiom[] = [
  {
    phrase: "Bite the bullet",
    meaning: "To endure a painful situation with courage and determination",
    example:
      "She decided to bite the bullet and study for 10 hours a day before CUET.",
  },
  {
    phrase: "Burn the midnight oil",
    meaning: "To work or study late into the night",
    example:
      "Toppers often burn the midnight oil before competitive examinations.",
  },
  {
    phrase: "Hit the nail on the head",
    meaning: "To describe exactly what is causing a situation or problem",
    example:
      "The teacher hit the nail on the head when she said practice is the key to success.",
  },
  {
    phrase: "A blessing in disguise",
    meaning: "Something that seems bad at first but turns out to be beneficial",
    example:
      "Failing the preliminary round was a blessing in disguise — it pushed him harder.",
  },
  {
    phrase: "Beat around the bush",
    meaning: "To avoid talking about something directly",
    example: "Stop beating around the bush and tell me your score!",
  },
  {
    phrase: "Kill two birds with one stone",
    meaning: "To accomplish two tasks with a single action",
    example:
      "By studying vocab through reading, she killed two birds with one stone.",
  },
  {
    phrase: "Once in a blue moon",
    meaning: "Rarely; very seldom",
    example:
      "He only takes a day off once in a blue moon during exam preparation.",
  },
  {
    phrase: "Piece of cake",
    meaning: "Something very easy to do",
    example:
      "After three months of practice, the English section felt like a piece of cake.",
  },
  {
    phrase: "Under the weather",
    meaning: "Feeling ill or unwell",
    example:
      "Despite being under the weather, she attended the mock test and performed brilliantly.",
  },
  {
    phrase: "The ball is in your court",
    meaning: "It is now your turn to take action or make a decision",
    example:
      "You have all the resources and guidance — the ball is in your court now.",
  },
  {
    phrase: "Barking up the wrong tree",
    meaning: "To pursue a mistaken or misguided line of thought or action",
    example:
      "He was barking up the wrong tree by focusing only on grammar and ignoring vocabulary.",
  },
  {
    phrase: "Bite off more than you can chew",
    meaning: "To take on more responsibility than one can handle",
    example:
      "Attempting all five mock tests in one week was biting off more than he could chew.",
  },
  {
    phrase: "Burn bridges",
    meaning: "To permanently damage a relationship through one's actions",
    example:
      "Arguing with your mentor over study plans is a sure way to burn bridges.",
  },
  {
    phrase: "Cost an arm and a leg",
    meaning: "To be very expensive",
    example:
      "Quality coaching for CUET can cost an arm and a leg in metropolitan cities.",
  },
  {
    phrase: "Crack the whip",
    meaning: "To demand hard work; to use authority to motivate people",
    example:
      "The coach had to crack the whip as the batch grew complacent in the final month.",
  },
  {
    phrase: "Cut to the chase",
    meaning: "To get to the point without wasting time",
    example:
      "The examiner's feedback was to cut to the chase and state the thesis clearly.",
  },
  {
    phrase: "Don't judge a book by its cover",
    meaning: "Do not judge things or people based on appearance alone",
    example:
      "The simple-looking passage turned out to be the most complex — don't judge a book by its cover.",
  },
  {
    phrase: "Every cloud has a silver lining",
    meaning: "Every difficult situation has a positive aspect",
    example:
      "The lockdown had a silver lining — students had more time to prepare for CUET.",
  },
  {
    phrase: "Face the music",
    meaning: "To accept the consequences of one's actions",
    example:
      "After ignoring warnings, she had to face the music and repeat the exam next year.",
  },
  {
    phrase: "Get a taste of your own medicine",
    meaning:
      "To experience the same unpleasant treatment that you have given others",
    example:
      "The bully in the class got a taste of his own medicine when he failed the exam he had mocked others for.",
  },
  {
    phrase: "Hit the books",
    meaning: "To start studying seriously",
    example:
      "With CUET three months away, it was time to hit the books in earnest.",
  },
  {
    phrase: "In the same boat",
    meaning: "In the same difficult situation as someone else",
    example:
      "All aspirants are in the same boat when it comes to managing nervousness on exam day.",
  },
  {
    phrase: "Jump on the bandwagon",
    meaning: "To join a popular trend or activity",
    example:
      "Many students jumped on the bandwagon of online coaching without checking quality first.",
  },
  {
    phrase: "Keep your chin up",
    meaning: "To stay positive despite difficulties",
    example:
      "Keep your chin up — a poor mock score is just data, not a verdict on your potential.",
  },
  {
    phrase: "Leave no stone unturned",
    meaning:
      "To try every possible course of action in order to achieve something",
    example:
      "She left no stone unturned in her preparation, covering even the most obscure topics.",
  },
  {
    phrase: "Let the cat out of the bag",
    meaning: "To reveal a secret accidentally",
    example:
      "He let the cat out of the bag about the surprise test before the teacher announced it.",
  },
  {
    phrase: "Look before you leap",
    meaning: "To think carefully about the consequences before acting",
    example:
      "Look before you leap when choosing between different coaching institutes.",
  },
  {
    phrase: "Miss the boat",
    meaning: "To miss an opportunity; to be too late",
    example:
      "Students who start preparing in the last month often miss the boat entirely.",
  },
  {
    phrase: "Not see the wood for the trees",
    meaning: "To fail to understand the whole because of focusing on details",
    example:
      "Memorizing formulas without conceptual clarity is not seeing the wood for the trees.",
  },
  {
    phrase: "On the fence",
    meaning: "Uncommitted; unable to make a decision",
    example:
      "She was on the fence about choosing Economics or Business Studies as her domain subject.",
  },
  {
    phrase: "Pull someone's leg",
    meaning: "To tease or joke with someone",
    example:
      "He was only pulling your leg — the exam date has not been changed.",
  },
  {
    phrase: "Raining cats and dogs",
    meaning: "Raining very heavily",
    example:
      "The exam center was flooded because it was raining cats and dogs all morning.",
  },
  {
    phrase: "Spill the beans",
    meaning: "To reveal secret information unintentionally",
    example:
      "The topper spilled the beans about the study schedule that helped her ace the exam.",
  },
  {
    phrase: "Steal someone's thunder",
    meaning: "To take credit or attention away from someone else",
    example:
      "His outstanding mock score stole everyone's thunder at the results discussion session.",
  },
  {
    phrase: "The tip of the iceberg",
    meaning: "A small visible part of a much larger problem",
    example:
      "The vocabulary tested in CUET is just the tip of the iceberg compared to full English fluency.",
  },
  {
    phrase: "Through thick and thin",
    meaning: "Under all circumstances; through good and bad times",
    example:
      "Her friends supported her through thick and thin throughout the two-year CUET journey.",
  },
  {
    phrase: "Turn over a new leaf",
    meaning: "To make a fresh start; to change one's behavior for the better",
    example:
      "After a disastrous first attempt, he turned over a new leaf and revised his strategy completely.",
  },
  {
    phrase: "Up in the air",
    meaning: "Uncertain; not yet decided",
    example:
      "The exam schedule for the supplementary papers is still up in the air.",
  },
  {
    phrase: "When in Rome, do as the Romans do",
    meaning: "Adapt to the customs of the place you are in",
    example:
      "When preparing in a group, when in Rome — follow the collective study timetable.",
  },
  {
    phrase: "You can't have your cake and eat it too",
    meaning: "You cannot have two incompatible advantages at the same time",
    example:
      "You can't have your cake and eat it too — either enjoy the holiday or focus on preparation.",
  },
  {
    phrase: "Actions speak louder than words",
    meaning: "What someone does is more important than what they say",
    example:
      "Actions speak louder than words — scoring in mock tests matters more than claiming to study hard.",
  },
  {
    phrase: "A penny for your thoughts",
    meaning: "Used to ask what someone is thinking",
    example:
      "You seem distracted before the session — a penny for your thoughts?",
  },
  {
    phrase: "Bite the hand that feeds you",
    meaning: "To harm or show ingratitude to someone who supports or helps you",
    example:
      "Criticizing your mentor publicly is biting the hand that feeds you.",
  },
  {
    phrase: "Blow hot and cold",
    meaning:
      "To be inconsistent; to alternate between enthusiasm and indifference",
    example:
      "Blowing hot and cold with your study schedule leads to patchy preparation.",
  },
  {
    phrase: "Catch someone red-handed",
    meaning: "To catch a person in the act of doing something wrong",
    example:
      "The invigilator caught two students red-handed trying to cheat in the mock test.",
  },
  {
    phrase: "Cold turkey",
    meaning: "To give up a habit abruptly and completely",
    example:
      "She went cold turkey on social media for the last month before CUET.",
  },
  {
    phrase: "Cross that bridge when you come to it",
    meaning: "To deal with a problem when it arises, not before",
    example:
      "Don't worry about admission processes now — cross that bridge when you come to it.",
  },
  {
    phrase: "Cry over spilled milk",
    meaning: "To express regret about something that cannot be changed",
    example:
      "There is no point crying over spilled milk after submitting the wrong form.",
  },
  {
    phrase: "Down to earth",
    meaning: "Practical, sensible, and realistic; unpretentious",
    example:
      "The most successful toppers are often the most down-to-earth individuals you will meet.",
  },
  {
    phrase: "Draw a blank",
    meaning: "To fail to remember or think of something",
    example:
      "She drew a blank on the idiom in question 42, despite revising it twice.",
  },
];
