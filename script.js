/**
 * NTA Mock Test Logic - Embedded Version
 */

// Full Question Bank (60 Questions)
const QUESTION_BANK = [
  {"id": 1, "question": "According to Mehrabian, only ______ of a message’s effect is carried by words.", "options": ["30%", "7%", "50%", "65%"], "answer": 1},
  {"id": 2, "question": "Birdwhistell suggested that spoken words account for not more than ______ of social interactions.", "options": ["10–15%", "30–35%", "50–60%", "70–80%"], "answer": 1},
  {"id": 3, "question": "Message reinforcement is a function of:", "options": ["Verbal communication", "Written communication", "Nonverbal communication", "Mass communication"], "answer": 2},
  {"id": 4, "question": "Kinesics refers to the study of:", "options": ["Space", "Time", "Body language", "Smell"], "answer": 2},
  {"id": 5, "question": "Civil inattention means:", "options": ["Ignoring someone rudely", "Polite ignoring to respect privacy", "Avoiding communication", "Looking angrily"], "answer": 1},
  {"id": 6, "question": "Artifactual communication includes:", "options": ["Voice tone", "Touch", "Clothing and jewellery", "Silence"], "answer": 2},
  {"id": 7, "question": "Paralanguage refers to:", "options": ["Written symbols", "Vocal cues accompanying speech", "Facial expressions", "Body posture"], "answer": 1},
  {"id": 8, "question": "Pitch refers to the ______ of the voice.", "options": ["Loudness", "Speed", "Highness or lowness", "Clarity"], "answer": 2},
  {"id": 9, "question": "Proxemics is the study of:", "options": ["Touch", "Space", "Time", "Smell"], "answer": 1},
  {"id": 10, "question": "Intimate distance ranges from:", "options": ["0–18 inches", "2–5 feet", "4–12 feet", "12–20 feet"], "answer": 0},
  {"id": 11, "question": "Social distance ranges from:", "options": ["0–18 inches", "18 inches–4 feet", "4–12 feet", "12 feet to sight"], "answer": 2},
  {"id": 12, "question": "Chronemics is the study of:", "options": ["Color", "Time use", "Touch", "Distance"], "answer": 1},
  {"id": 13, "question": "Haptics refers to the study of:", "options": ["Touch", "Smell", "Sound", "Space"], "answer": 0},
  {"id": 14, "question": "Olfactics refers to the study of:", "options": ["Color", "Smell", "Voice", "Gesture"], "answer": 1},
  {"id": 15, "question": "Visual dominance compares looking while speaking with looking while:", "options": ["Writing", "Listening", "Reading", "Walking"], "answer": 1},
  {"id": 16, "question": "Technological advances have made workplaces more:", "options": ["Isolated", "Traditional", "Global", "Local"], "answer": 2},
  {"id": 17, "question": "Avoiding double questions is a suggestion for:", "options": ["Public speaking", "Intercultural communication", "Written exams", "Debate"], "answer": 1},
  {"id": 18, "question": "Diversity means:", "options": ["Ignoring differences", "Recognition and valuing of difference", "Cultural superiority", "Assimilation"], "answer": 1},
  {"id": 19, "question": "Cultural imperialism refers to:", "options": ["Respecting cultures", "Expansion of one culture over another", "Cultural exchange", "Cultural equality"], "answer": 1},
  {"id": 20, "question": "Intercultural communication is interacting with individuals from different:", "options": ["Families", "Cultures", "Cities", "Schools"], "answer": 1},
  {"id": 21, "question": "Assimilation means:", "options": ["Resisting dominant culture", "Fitting into dominant culture", "Ignoring culture", "Creating new culture"], "answer": 1},
  {"id": 22, "question": "Ethnocentrism is the tendency to view one’s culture as:", "options": ["Equal", "Inferior", "Superior", "Different"], "answer": 2},
  {"id": 23, "question": "Cultural relativism means:", "options": ["Judging others", "Accepting other cultures as equal", "Rejecting traditions", "Cultural domination"], "answer": 1},
  {"id": 24, "question": "Individualistic cultures stress:", "options": ["Group goals", "Family control", "Individual goals", "Government rules"], "answer": 2},
  {"id": 25, "question": "High-context communication depends on:", "options": ["Direct speech", "Indirectness", "Written messages", "Technology"], "answer": 1},
  {"id": 26, "question": "Low-context communication encourages:", "options": ["Silence", "Indirect hints", "Directness", "Symbolism"], "answer": 2},
  {"id": 27, "question": "High power distance cultures believe:", "options": ["Everyone is equal", "Subordinates defer to superiors", "No authority", "Power is unnecessary"], "answer": 1},
  {"id": 28, "question": "Masculine cultures value:", "options": ["Tenderness only", "Aggressiveness and material success", "Silence", "Equality only"], "answer": 1},
  {"id": 29, "question": "Stereotypes are:", "options": ["Scientific facts", "Mental images or shortcuts", "Laws", "Emotions"], "answer": 1},
  {"id": 30, "question": "Digital divide refers to:", "options": ["Cultural conflict", "Information gap", "Language barrier", "Gender bias"], "answer": 1},
  {"id": 31, "question": "Which of the following is defined as communication that uses words, originating from the Latin 'verbum'?", "options": ["Non-Verbal Communication", "Verbal Communication", "Intrapersonal Communication", "Mass Communication"], "answer": 1},
  {"id": 32, "question": "According to the lecture, what percentage of social meaning in interactions is conveyed by non-verbal communication?", "options": ["10% to 20%", "30% to 40%", "65% to 93%", "50% to 60%"], "answer": 2},
  {"id": 33, "question": "Which of the following is NOT one of the eight essential components of communication discussed in the lecture?", "options": ["People", "Noise", "Technology", "Message"], "answer": 2},
  {"id": 34, "question": "The 'Triangle of Meaning' model explains the relationship between which three elements?", "options": ["Sender, Receiver, Message", "Word, Thought, Thing", "Verbal, Non-Verbal, Context", "Denotative, Connotative, Symbolic"], "answer": 1},
  {"id": 35, "question": "What is the primary purpose of the informal communication network (grapevine)?", "options": ["Disseminate official instructions", "Build relationships and provide rapid unofficial communication", "Document formal communication", "Ensure etiquette"], "answer": 1},
  {"id": 36, "question": "What is the belief that one's own culture is superior to others?", "options": ["Cultural Relativism", "Ethnocentrism", "Cultural Pluralism", "Linguistic Determinism"], "answer": 1},
  {"id": 37, "question": "Which is NOT recommended when answering 'What are your weaknesses?", "options": ["Presenting a hidden strength", "Citing a corrected weakness", "Confessing a major flaw", "Learning from past mistake"], "answer": 2},
  {"id": 38, "question": "What causes the communicator-communicatee gap in 'Counting the F's' activity?", "options": ["Low intelligence", "Misleading communication", "Reading inefficiency and time pressure", "Human inability"], "answer": 2},
  {"id": 39, "question": "Study of space and distance communication is called:", "options": ["Kinesics", "Chronemics", "Proxemics", "Haptics"], "answer": 2},
  {"id": 40, "question": "Which is considered the most crucial LSRW skill?", "options": ["Speaking", "Reading", "Writing", "Listening"], "answer": 3},
  {"id": 41, "question": "In 'Jaws of Death', who was sacrificed?", "options": ["Pushpa Sagar", "Premanand Bhandari", "Deepa Behn", "Peter"], "answer": 1},
  {"id": 42, "question": "According to Deborah Tannen, women use language to:", "options": ["Give commands", "Build connection", "Assert dominance", "Present facts"], "answer": 1},
  {"id": 43, "question": "Dictionary meaning of a word is called:", "options": ["Connotative Meaning", "Symbolic Meaning", "Denotative Meaning", "Abstract Meaning"], "answer": 2},
  {"id": 44, "question": "What does 'E' stand for in HURIER model?", "options": ["Empathizing", "Explaining", "Evaluating", "Engaging"], "answer": 2},
  {"id": 45, "question": "Most overlooked communication barrier:", "options": ["Physical noise", "Physiological noise", "Psychological noise", "Semantic noise"], "answer": 2},
  {"id": 46, "question": "Which resume is optimized for ATS systems?", "options": ["Paper Resume", "Functional Resume", "Electronic Resume", "Chronological Resume"], "answer": 2},
  {"id": 47, "question": "Punctuation after salutation in formal letter:", "options": ["Comma", "Semicolon", "Colon", "Exclamation"], "answer": 2},
  {"id": 48, "question": "Chinese Whispers teaches:", "options": ["More accuracy", "Distortion of message", "Perfect retention", "Only emotion remains"], "answer": 1},
  {"id": 49, "question": "Study of body language is:", "options": ["Proxemics", "Kinesics", "Vocalics", "Chronemics"], "answer": 1},
  {"id": 50, "question": "Constellation Principle means:", "options": ["Single gesture meaning", "Cluster of signals", "Astrology-based meaning", "Ignore non-verbal"], "answer": 1},
  {"id": 51, "question": "Resisting dominant culture is called:", "options": ["Accommodation", "Assimilation", "Separation", "Pluralism"], "answer": 2},
  {"id": 52, "question": "Which is NOT part of employment communication process?", "options": ["CV", "Group Discussion", "Interview", "Aptitude Test"], "answer": 3},
  {"id": 53, "question": "Parallel structure in CV means:", "options": ["Multiple columns", "Same grammatical format", "Alignment of text", "Two languages"], "answer": 1},
  {"id": 54, "question": "Anupam Dash strategy in interview:", "options": ["Confess weakness", "Align values with company", "Avoid question", "Use humor"], "answer": 1},
  {"id": 55, "question": "Goal of meditation:", "options": ["Money", "Thoughtlessness", "Time mastery", "Strength"], "answer": 1},
  {"id": 56, "question": "Ritika's idea in GD shows:", "options": ["Dominance", "Lack of knowledge", "Analytical ability", "Emotion"], "answer": 2},
  {"id": 57, "question": "Purpose of stress interview:", "options": ["Test knowledge", "Test composure", "Test salary", "Test history"], "answer": 1},
  {"id": 58, "question": "Large ball in activity symbolizes:", "options": ["Routine", "Work", "Family/relationships", "Failure"], "answer": 2},
  {"id": 59, "question": "Most destructive noise is:", "options": ["Physical", "Physiological", "Semantic", "Psychological (EGO)"], "answer": 3},
  {"id": 60, "question": "The \"Triangle of Meaning\" model, proposed by Ogden and Richards, explains the relationship between which three elements?", "options": ["Sender, Receiver, Message", "Word, Thought, Thing", "Verbal, Non-Verbal, Context", "Denotative, Connotative, Symbolic"], "answer": 1},
  {"id": 61, "question": "In the context of workplace communication, what is the primary purpose of the \"informal network\" or \"grapevine\"?", "options": ["To disseminate official instructions and policies from top management.", "To build relationships, affect employee morale, and serve as a rapid, unofficial information channel.", "To formally document all inter-departmental projects and collaborations.", "To ensure all external operational communication adheres to company etiquette."], "answer": 1},
  {"id": 62, "question": "What is the term for the belief that one's own culture is superior to all others, and is considered the single greatest barrier to effective intercultural communication?", "options": ["Cultural Relativism", "Ethnocentrism", "Cultural Pluralism", "Linguistic Determinism"], "answer": 1},
  {"id": 63, "question": "Which of the following is NOT a recommended strategy for answering the \"What are your weaknesses?\" question in an interview?", "options": ["Presenting a hidden strength.", "Citing a corrected weakness.", "Directly confessing a major, unaddressed flaw.", "Recalling a lesson learned from a past mistake."], "answer": 2},
  {"id": 64, "question": "According to the lecture, what is the primary reason for the \"communicator-communicatee gap\" observed in the \"Counting the F's\" activity?", "options": ["The communicatee's lack of intelligence.", "The communicator's deliberate attempt to mislead.", "The inefficiency of reading text in all capital letters, combined with time pressure and task complexity.", "The inherent inability of humans to count accurately under any circumstances."], "answer": 2},
  {"id": 65, "question": "What is the study of how we use space and distance to communicate called?", "options": ["Kinesics", "Chronemics", "Proxemics", "Haptics"], "answer": 2},
  {"id": 66, "question": "Which of the following is considered the \"mother of all speaking\" and the most crucial of the four LSRW skills, warranting dedicated lecture and lab time?", "options": ["Speaking", "Reading", "Writing", "Listening"], "answer": 3},
  {"id": 67, "question": "In the \"Jaws of Death\" activity, which character was ultimately chosen for sacrifice by the group, based on a utilitarian argument?", "options": ["Ms. Pushpa Sagar, the nurse.", "Mr. Premanand Bhandari, the village teacher with terminal illness.", "Deepa Behn, the altruistic widow.", "Peter, the mysterious American foreigner."], "answer": 1},
  {"id": 68, "question": "Deborah Tannen's concept of \"Gender-lects\" posits that women often use language for which primary purpose, in contrast to men's focus on status and power?", "options": ["To issue direct commands and instructions.", "To build connection and intimacy.", "To assert dominance in group settings.", "To present objective, factual information without emotional cues."], "answer": 1},
  {"id": 69, "question": "What is the objective, descriptive, or dictionary definition of a word called?", "options": ["Connotative Meaning", "Symbolic Meaning", "Denotative Meaning", "Abstract Meaning"], "answer": 2},
  {"id": 70, "question": "The HURIER model outlines the six stages of effective listening. What does the \"E\" in HURIER stand for?", "options": ["Empathizing", "Explaining", "Evaluating", "Engaging"], "answer": 2},
  {"id": 71, "question": "According to the lecture, what is the most significant and overlooked barrier to successful communication among the types of noise?", "options": ["Physical noise (external sounds).", "Physiological noise (bodily issues like illness).", "Psychological noise (internal mental states like demotivation or prejudice).", "Semantic noise (misunderstanding of words)."], "answer": 2},
  {"id": 72, "question": "Which type of resume is designed to be scanned by an Applicant Tracking System (ATS) and relies heavily on keywords from the job description?", "options": ["Paper Resume", "Functional Resume", "Electronic (Scannable) Resume", "Chronological Resume"], "answer": 2},
  {"id": 73, "question": "When crafting a cover letter, what is the recommended punctuation to use after the salutation (e.g., \"Dear Mr. Guthrie\") in a formal business context?", "options": ["A comma (,)", "A semicolon (;)", "A colon (:)", "An exclamation mark (!)"], "answer": 2},
  {"id": 74, "question": "In the \"Chinese Whispers\" activity, what was the primary lesson learned about information transmission through a communication chain?", "options": ["Information becomes more detailed and accurate with each transfer.", "Information is not just lost, but actively distorted, simplified, and even invented.", "The message remains largely intact if the participants are highly intelligent.", "Only the emotional tone of the message is preserved, not the facts."], "answer": 1},
  {"id": 75, "question": "What is the term for the study of human body motion, popularly known as \"Body Language\"?", "options": ["Proxemics", "Kinesics", "Vocalics", "Chronemics"], "answer": 1},
  {"id": 76, "question": "According to the lecture, what is the \"Constellation Principle\" in interpreting body language?", "options": ["Focusing on a single, dominant gesture to understand a person's true feelings.", "Interpreting individual body language cues as part of a larger cluster of signals.", "Analyzing body language based on astrological signs.", "Ignoring all non-verbal cues and focusing only on verbal communication."], "answer": 1},
  {"id": 77, "question": "When a co-cultural group resists integration and maintains distance from the mainstream culture, which communication strategy are they employing, according to the lecture?", "options": ["Accommodation", "Assimilation", "Separation", "Cultural Pluralism"], "answer": 2},
  {"id": 78, "question": "Which of the following is NOT one of the three stages of the \"Employment Communication Process\" outlined in Lecture 1?", "options": ["CV/Resume", "Group Discussion", "Personal Interview", "Aptitude Test"], "answer": 3},
  {"id": 79, "question": "In the context of CV writing, what does \"parallel structure\" primarily refer to?", "options": ["Using multiple columns to organize information on the page.", "Ensuring all items in a list are presented in the same grammatical format, such as starting with action verbs.", "Aligning all dates and numbers perfectly on the left and right margins.", "Writing the CV in two different languages side-by-side."], "answer": 1},
  {"id": 80, "question": "In the mock interview for \"Chief Fun Officer,\" what was Anupam Dash's sophisticated strategy for answering the \"Why shouldn't we hire you?\" question?", "options": ["He confessed a genuine, unaddressed weakness and promised to improve.", "He stated he shouldn't be hired if the company was purely profit-driven or required pre-existing corporate strategy experience, thereby reaffirming his values.", "He pivoted to discuss his strengths, avoiding the question entirely.", "He used humor to deflect the question, without providing a substantive answer."], "answer": 1},
  {"id": 81, "question": "According to the lecture, what is the ultimate goal of long-term meditation practice, leading to profound peace and freedom from mental trouble?", "options": ["Achieving financial success", "A state of thoughtlessness", "Becoming a master of time", "Enhancing physical strength"], "answer": 1},
  {"id": 82, "question": "Which of the following is a key characteristic of \"Masculine Cultures\" as described in the lecture on intercultural communication?", "options": ["Valuing relationships, tenderness, and a high quality of life for all.", "Stressing group goals and harmony.", "Valuing male aggressiveness, assertiveness, and material symbols of success.", "Believing power should only be used when legitimate, with less deference between ranks."], "answer": 2},
  {"id": 83, "question": "In the \"Marquee Cutlery\" GD, Ritika introduced the idea that the \"non-cooperation\" of the Korean firm might stem from cultural differences rather than simple defiance. This demonstrates which GD quality?", "options": ["Dominance in argument.", "Lack of subject knowledge.", "Analytical ability and problem reframing.", "Emotional attachment to a viewpoint."], "answer": 2},
  {"id": 84, "question": "What is the primary purpose of a \"stress interview\"?", "options": ["To assess a candidate's technical skills under timed conditions.", "To evaluate a candidate's composure, resilience, and ability to think on their feet under pressure.", "To determine a candidate's salary expectations by putting them on the spot.", "To test a candidate's knowledge of company history under rapid-fire questioning."], "answer": 1},
  {"id": 85, "question": "In the \"Life is a Ball Game\" activity, what did the large ball primarily symbolize?", "options": ["Daily routines and small tasks.", "Work responsibilities.", "Family/Relationships, requiring significant focus.", "Unexpected setbacks or failures."], "answer": 2},
  {"id": 86, "question": "According to the course wrap-up, what is the most destructive form of noise in communication, which the professor memorably defines as \"Edge God Out\"?", "options": ["Physical noise", "Physiological noise", "Semantic noise", "Psychological noise (EGO)"], "answer": 3},
  {"id": 87, "question": "Which of the following communication skills is highlighted as the \"mother of all speaking\" and the most crucial in Lecture 1?", "options": ["Speaking", "Reading", "Writing", "Listening"], "answer": 3},
  {"id": 88, "question": "According to Lecture 2, what is the etymological root of the word \"communication\"?", "options": ["From the Greek \"koinonia\" meaning community", "From the Latin \"communicare\" meaning \"to make common", "From the Old English \"cuman\" meaning to come together", "From the French \"communiquer\" meaning to share"], "answer": 1},
  {"id": 89, "question": "In the context of workplace communication, what is the \"grapevine\"?", "options": ["The official communication channel for policy dissemination.", "The formal network for upward communication.", "The complex and dynamic web of personal communication among colleagues.", "A structured meeting for strategic planning."], "answer": 2},
  {"id": 90, "question": "What is the primary difference between denotative and connotative meaning as discussed in Lecture 4?", "options": ["Denotative meaning is subjective and emotional, while connotative meaning is objective and literal.", "Denotative meaning is objective and literal, while connotative meaning is subjective and emotional.", "Denotative meaning refers to abstract concepts, while connotative meaning refers to concrete objects.", "Denotative meaning is culturally specific, while connotative meaning is universal."], "answer": 1},
  {"id": 91, "question": "The Sapir-Whorf Hypothesis, discussed in Lecture 5, proposes two main components. What are they?", "options": ["Linguistic Determinism and Linguistic Ambiguity", "Linguistic Relativity and Linguistic Universality", "Linguistic Determinism and Linguistic Relativity", "Linguistic Pragmatism and Linguistic Semantics"], "answer": 2},
  {"id": 92, "question": "According to Lecture 6, what percentage of social meaning in interactions is conveyed by non-verbal communication?", "options": ["10% to 30%", "35% to 50%", "65% to 93%", "95% to 100%"], "answer": 2},
  {"id": 93, "question": "Which of the following is NOT one of the 8 major types of Non-Verbal Communication listed in Lecture 6 and 7?", "options": ["Kinesics", "Paralanguage", "Chronemics", "Telepathy"], "answer": 3},
  {"id": 94, "question": "What is considered the single greatest barrier to effective intercultural communication, according to Lecture 8?", "options": ["Language differences", "Non-verbal communication discrepancies", "Ethnocentrism", "Lack of empathy"], "answer": 2},
  {"id": 95, "question": "In the context of intercultural communication, what is the difference between \"Melting Pot\" and \"Cultural Pluralism\"?", "options": ["Melting Pot values diversity as a strength, while Cultural Pluralism aims for assimilation.", "Melting Pot aims for assimilation into a dominant culture, while Cultural Pluralism allows co-cultures to thrive and coexist.", "Melting Pot focuses on individual achievement, while Cultural Pluralism focuses on group harmony.", "Melting Pot is characteristic of high-context cultures, while Cultural Pluralism is characteristic of low-context cultures."], "answer": 1},
  {"id": 96, "question": "In the \"Counting the F's\" activity from Practice Session 0, what was the primary reason for participants missing some 'F's?", "options": ["Lack of intelligence", "Poor eyesight", "All caps typography and time pressure", "Intentional misdirection by the instructor"], "answer": 2},
  {"id": 97, "question": "According to Lecture 11, what does a \"Fugitive (Back & Closed)\" posture indicate?", "options": ["Active engagement and readiness to connect.", "Thoughtful processing of the message.", "Disengagement, boredom, or rejection of the message.", "Aggression, impatience, or readiness for confrontation."], "answer": 2},
  {"id": 98, "question": "In the context of handshakes, what does a \"tight grasp\" often indicate, according to Lecture 12?", "options": ["An inferiority complex and lack of confidence.", "A desire for equality and mutual respect.", "A superiority complex and an attempt to dominate.", "Informality and playfulness."], "answer": 2},
  {"id": 99, "question": "What is the primary distinction between \"hearing\" and \"listening\" as defined in Lecture 13?", "options": ["Hearing is psychological, listening is physiological.", "Hearing is voluntary, listening is involuntary.", "Hearing is physiological and involuntary, listening is psychological and deliberate.", "Hearing involves sound waves, listening involves visual cues."], "answer": 2},
  {"id": 100, "question": "In the \"Face to Face with a Man-Eater\" activity from Practice Session 1, what non-verbal strategy did the Indian sailor use to establish common ground with the Aborigine?", "options": ["Mimicking holding a child and pointing to elderly figures.", "Aggressively showing he had no weapons.", "Offering a trade of personal belongings.", "Attempting to speak in a universal language."], "answer": 0},
  {"id": 101, "question": "According to Lecture 16, what percentage of a message's value can body language transmit?", "options": ["Up to 25%", "Up to 40%", "Up to 65%", "Up to 90%"], "answer": 2},
  {"id": 102, "question": "What is the primary purpose of an \"Electronic Resume\" as described in Lecture 17?", "options": ["To be visually appealing to human recruiters.", "To be scanned by an Optical Character Recognition (OCR) system for keywords.", "To provide a detailed chronological history of employment.", "To serve as a portfolio of creative work."], "answer": 1},
  {"id": 103, "question": "The \"Chinese Whispers\" activity in Lecture 18 demonstrated what concept regarding communication chains?", "options": ["The importance of non-verbal cues.", "The natural degradation and distortion of a message.", "The effectiveness of selective listening.", "The power of positive feedback."], "answer": 1},
  {"id": 104, "question": "What is the main goal of your CV, according to Lecture 19?", "options": ["To get you the job.", "To provide a complete history of your life.", "To secure an interview.", "To impress with fancy formatting."], "answer": 2},
  {"id": 105, "question": "When crafting a cover letter, what is the significance of using a colon after the salutation (e.g., \"Dear Mr. Guthrie:\")?", "options": ["It indicates an informal greeting.", "It is a formal business convention indicating important information will follow.", "It is used only when the recipient's name is unknown.", "It is a stylistic choice with no specific meaning."], "answer": 1},
  {"id": 106, "question": "In CV writing, what is the \"Phrase Principle\" and why is it important?", "options": ["Using full sentences to provide complete context for each achievement.", "Using meaningful phrases instead of full sentences to make the CV scannable and impactful.", "Writing in a conversational tone to build rapport with the reader.", "Employing complex vocabulary to demonstrate linguistic prowess."], "answer": 1},
  {"id": 107, "question": "What is the industry standard order for listing experiences (work, education) on a CV?", "options": ["Alphabetical order", "Reverse chronological order (most recent first)", "Chronological order (earliest first)", "Order of relevance to the job"], "answer": 1},
  {"id": 108, "question": "Which of the following is NOT one of the five qualities recruiters evaluate in a Group Discussion (GD), according to Lecture 24?", "options": ["Leadership Quality", "Knowledge of Subject", "Personal Wealth", "Analytical Ability"], "answer": 2},
  {"id": 109, "question": "In a Group Discussion, what is meant by a \"Positive Talk-Listen Ratio\"?", "options": ["Speaking more than listening to dominate the conversation.", "Listening more than speaking to gather information.", "A strategic balance between speaking and actively listening, making quality contributions.", "Speaking only when directly asked a question by the moderator."], "answer": 2},
  {"id": 110, "question": "What is the primary advantage of a \"Fishbowl GD\" format, as discussed in Lecture 26?", "options": ["It allows for larger number of participants to speak simultaneously.", "It creates a dynamic learning environment with structured peer feedback and deep, student-led learning.", "It eliminates the need for a moderator.", "It focuses solely on individual performance without group interaction."], "answer": 1},
  {"id": 111, "question": "In the Marquee Cutlery GD (Lecture 27), what critical factor did Ritika introduce to reframe the \"non-cooperation\" problem of the Korean firm?", "options": ["Financial incentives for integration.", "The need for stricter management control.", "Cultural differences in work styles.", "Legal implications of the takeover."], "answer": 2},
  {"id": 112, "question": "According to Lecture 30, what is the primary goal of a \"Hiring Interview\"?", "options": ["To test the candidate's general knowledge.", "To select the right person for a job vacancy.", "To provide career counseling.", "To practice public speaking."], "answer": 1},
  {"id": 113, "question": "When asked \"What are your weaknesses?\" in an interview, which strategy is recommended in Lecture 31?", "options": ["Confessing a major flaw that impacts job performance.", "Stating you have no weaknesses.", "Presenting a hidden strength or a corrected weakness.", "Blaming a previous employer for your weaknesses."], "answer": 2},
  {"id": 114, "question": "In the PI Practice Session II (Lecture 33) for the Chief Fun Officer role, Aritra Lahiri proposed what practical, low-cost solution to gather data on employee morale?", "options": ["Implementing a mandatory weekly team-building retreat.", "Conducting expensive external consultant surveys.", "Using pulse surveys to gather data.", "Organizing a large-scale, company-wide talent show."], "answer": 2},
  {"id": 115, "question": "What is the STAR technique primarily used for in interviews, as described in Lecture 37?", "options": ["To ask interviewers questions about the company.", "To structure answers to behavioral questions.", "To evaluate the interviewer's performance.", "To negotiate salary and benefits."], "answer": 1},
  {"id": 116, "question": "Lecture 39 proposes meditation as a critical life skill to combat what \"modern ill\"?", "options": ["Physical inactivity and poor diet.", "Lack of technical proficiency.", "Profound sense of disconnection and loneliness driven by over-digitalization.", "Financial instability."], "answer": 2},
  {"id": 117, "question": "According to Lecture 1, which of the following is considered the \"mother of all speaking\" and the most crucial of the four LSRW skills?", "options": ["Writing", "Speaking", "Reading", "Listening"], "answer": 3},
  {"id": 118, "question": "The Latin verb 'communicare', from which \"communication\" is derived, means what?", "options": ["To speak loudly", "To make common", "To exchange thoughts", "To send messages"], "answer": 1},
  {"id": 119, "question": "Which type of workplace communication is described as the \"veins\" of the organization, reflecting employee sentiment and moving spontaneously?", "options": ["Formal Network", "Internal Operational Communication", "External Operational Communication", "Informal Network (The Grapevine)"], "answer": 3},
  {"id": 120, "question": "According to Deborah Tannen, which term describes language differences attributed to gender, where women often use language for connection and men for status?", "options": ["Linguistic Determinism", "Prejudiced Talk", "Gender-lects", "Bypassing"], "answer": 2},
  {"id": 121, "question": "What is the study of human body motion, including facial expressions, posture, and gestures, commonly known as \"body language\"?", "options": ["Proxemics", "Paralanguage", "Kinesics", "Chronemics"], "answer": 2},
  {"id": 122, "question": "In the context of non-verbal communication, what is \"Visual Dominance\" primarily used to signal?", "options": ["Emotional distress", "Social status or power", "Cultural background", "Active listening"], "answer": 1},
  {"id": 123, "question": "When navigating intercultural communication, which of the following is identified as the single greatest barrier to effective communication?", "options": ["Language differences", "Non-verbal misunderstandings", "Ethnocentrism", "Lack of empathy"], "answer": 2},
  {"id": 124, "question": "A co-cultural group that attempts to be absorbed into the dominant culture, sometimes at the expense of its original identity, is employing which strategy?", "options": ["Separation", "Accommodation", "Assimilation", "Cultural Pluralism"], "answer": 2},
  {"id": 125, "question": "In the \"Jaws of Death\" activity, the group ultimately decided to sacrifice Mr. Premanand Bhandari. What was the primary utilitarian argument for this decision?", "options": ["He was disliked by the villagers", "He had a terminal illness and limited time to live", "He had four unmarried daughters", "He was not a verified citizen"], "answer": 1},
  {"id": 126, "question": "According to John Mole's framework, which posture indicates a person is actively engaged and readiness to connect, often by leaning forward with open arms?", "options": ["Reflective", "Fugitive", "Combative", "Responsive"], "answer": 3},
  {"id": 127, "question": "The \"Constellation Principle\" in body language suggests that:", "options": ["All gestures have universal meanings", "Individual cues should be interpreted as part of a larger cluster of signals", "Eye contact is the most important nonverbal cue", "Body language is harder to fake than verbal communication"], "answer": 1},
  {"id": 128, "question": "In the HURIER model of listening, which stage involves judging the content's value, truthfulness, and logic?", "options": ["Understanding", "Remembering", "Interpreting", "Evaluating"], "answer": 3},
  {"id": 129, "question": "In the \"On the Roads\" activity, the \"typical Indian\" response to a red light at 2 AM with no traffic was to cross the intersection. This behavior reflects a cultural attitude towards:", "options": ["Individualism", "Low-context communication", "Situational rules and efficiency (chronemics)", "High-power distance"], "answer": 2},
  {"id": 130, "question": "According to the lecture, what percentage of a message's value can body language transmit?", "options": ["Up to 35%", "Up to 50%", "Up to 65%", "Up to 93%"], "answer": 3},
  {"id": 131, "question": "What is the term for the continuous, self-motivated pursuit of knowledge for personal or professional reasons, which employers seek in candidates?", "options": ["Networking", "Flexible Employment", "Lifelong Learning", "Global Village"], "answer": 2},
  {"id": 132, "question": "The \"Chinese Whispers\" activity demonstrated that information is not just lost but actively distorted and simplified as it passes through multiple listeners. What was the approximate percentage of original content retained in the final message?", "options": ["Barely 50%", "Barely 25%", "Barely 10%", "Barely 5%"], "answer": 2},
  {"id": 133, "question": "Which CV format organizes work and academic history by date, starting with the most recent experiences first?", "options": ["Chronological", "Functional", "Combination", "Reverse-chronological"], "answer": 3},
  {"id": 134, "question": "In a professional cover letter, what punctuation mark should follow the salutation (e.g., \"Dear Mr. Guthrie:\") for a formal business context?", "options": ["Comma", "Period", "Semicolon", "Colon"], "answer": 3},
  {"id": 135, "question": "In the CV Writing Lab, what was the primary critique of Mr. Kaustav Sengupta's \"Roles and Responsibilities\" section?", "options": ["Lack of quantifiable achievements", "Use of passive voice", "Lack of parallel structure", "Excessive use jargon"], "answer": 2},
  {"id": 136, "question": "Which of the following is NOT recommended for inclusion in a modern CV?", "options": ["Reverse chronological order", "Communicative phrases", "A declaration statement", "Transferable skills"], "answer": 2},
  {"id": 137, "question": "Which content generation framework for Group Discussions involves asking \"Why, What, Where, When, Who, How\"?", "options": ["PESTEL", "CHM", "SAPADAPA", "W5H"], "answer": 3},
  {"id": 138, "question": "Which of the following is NOT one of the three pillars of evaluation for candidates in a Group Discussion, according to the lecture?", "options": ["Communication & Interpersonal Skills", "Cognitive & Analytical Skills", "Technical Proficiency", "Leadership & Group Dynamics"], "answer": 2},
  {"id": 139, "question": "What is the primary benefit of the \"Fishbowl GD\" format in a learning environment, as described in the lecture?", "options": ["It allows for rapid decision-making by a small group", "It provides immediate, structured peer feedback and promotes deep, student-led learning", "It reduces the pressure on participants by having observers", "It is the most common GD format used by recruiters"], "answer": 1},
  {"id": 140, "question": "In GD2 (Marquee Cutlery), Ritika introduced the idea that the \"non-cooperation\" of the Korean firm might stem from cultural differences. This demonstrates which key concept?", "options": ["Market Diversification", "Strategic Collaboration", "Cross-Cultural Integration", "Balanced Centralization"], "answer": 2},
  {"id": 141, "question": "In the Plastic Bottle Company (PBC) GD, Kaustuv suggested that the company's low-profile location might be a deliberate strategy to keep its B2B contracts private. This demonstrated which skill?", "options": ["Facilitation", "Strategic Counterargument", "Analytical Depth", "Consensus Building"], "answer": 2},
  {"id": 142, "question": "Which type of interview asks for specific examples of how you've demonstrated certain skills or handled past situations, based on the premise that past behavior predicts future performance?", "options": ["Case Interview", "Stress Interview", "Behavioral Interview", "Telephonic Interview"], "answer": 2},
  {"id": 143, "question": "In the PI Practice Session I, Reetika Dasgupta successfully bridged her technical background to an HR role by linking her analytical mindset to which growing field?", "options": ["Gig Economy", "Internal Marketing", "HR Analytics", "Equity over Equality"], "answer": 2},
  {"id": 144, "question": "What is the term for follow-up questions that ask for clarification or elaboration on a previous answer during an interview?", "options": ["Open questions", "Closed questions", "Primary questions", "Secondary (Probing) questions"], "answer": 3},
  {"id": 145, "question": "According to the lecture, what is the primary outcome or product of a successful meditation practice that helps one become a \"master of time\"?", "options": ["Empathy", "Digital Detox", "Concentration", "State of Thoughtlessness"], "answer": 2},
  {"id": 146, "question": "Communication is defined as the ______.", "options": ["transfer of goods", "transfer of meaning", "transfer of money", "transfer of technology"], "answer": 1},
  {"id": 147, "question": "Communication may occur ______.", "options": ["deliberately only", "accidentally only", "both deliberately and accidentally", "only through speech"], "answer": 2},
  {"id": 148, "question": "The statement “We cannot not communicate” implies that communication is ______.", "options": ["optional", "unavoidable", "difficult", "unnecessary"], "answer": 1},
  {"id": 149, "question": "Communication with oneself is called ______ communication.", "options": ["interpersonal", "group", "intrapersonal", "mass"], "answer": 2},
  {"id": 150, "question": "Communication between two individuals is known as ______ communication.", "options": ["interpersonal", "intrapersonal", "mass", "public"], "answer": 0},
  {"id": 151, "question": "Interaction among a limited number of people is called ______ communication.", "options": ["group", "public", "mass", "digital"], "answer": 0},
  {"id": 152, "question": "Communication intended to inform or persuade an audience is called ______ communication.", "options": ["intrapersonal", "interpersonal", "public", "private"], "answer": 2},
  {"id": 153, "question": "Communication using computers and the Internet is known as ______ communication.", "options": ["group", "online", "interpersonal", "public"], "answer": 1},
  {"id": 154, "question": "Communication that reaches large audiences through media channels is called ______ communication.", "options": ["public", "group", "mass", "interpersonal"], "answer": 2},
  {"id": 155, "question": "In communication, the person who sends the message is called the ______.", "options": ["receiver", "sender", "interpreter", "channel"], "answer": 1},
  {"id": 156, "question": "The person who receives and interprets a message is the ______.", "options": ["sender", "receiver", "channel", "context"], "answer": 1},
  {"id": 157, "question": "The content of a communicative act is called the ______.", "options": ["context", "message", "feedback", "channel"], "answer": 1},
  {"id": 158, "question": "The medium used to transmit a message is called the ______.", "options": ["context", "channel", "feedback", "noise"], "answer": 1},
  {"id": 159, "question": "Anything that interferes with communication is called ______.", "options": ["context", "feedback", "noise", "message"], "answer": 2},
  {"id": 160, "question": "The setting or environment in which communication takes place is called ______.", "options": ["context", "channel", "feedback", "noise"], "answer": 0},
  {"id": 161, "question": "Information returned to the sender after receiving a message is called ______.", "options": ["response", "feedback", "context", "message"], "answer": 1},
  {"id": 162, "question": "Feedback that strengthens or encourages behavior is called ______ feedback.", "options": ["internal", "negative", "positive", "external"], "answer": 2},
  {"id": 163, "question": "Communication within an organization for conducting work is known as ______ communication.", "options": ["internal operational", "external operational", "personal", "public"], "answer": 0},
  {"id": 164, "question": "Work-related communication with people outside the organization is called ______ communication.", "options": ["internal operational", "external operational", "personal", "group"], "answer": 1},
  {"id": 165, "question": "Non-business related communication among employees is called ______ communication.", "options": ["internal", "external", "personal", "formal"], "answer": 2},
  {"id": 166, "question": "A planned communication network within an organization is called a ______ network.", "options": ["informal", "formal", "external", "digital"], "answer": 1},
  {"id": 167, "question": "A dynamic and unplanned communication system within an organization is known as ______ network.", "options": ["formal", "external", "informal", "mass"], "answer": 2},
  {"id": 168, "question": "The theory stating that language influences how people perceive the world is called the ______.", "options": ["Feedback Theory", "Sapir–Whorf Hypothesis", "Communication Theory", "Network Theory"], "answer": 1},
  {"id": 169, "question": "The protocol of informality used in electronic communication is known as ______.", "options": ["netiquette", "onlinespeak", "cyberspeech", "digital grammar"], "answer": 1},
  {"id": 170, "question": "What does the Sapir-Whorf hypothesis primarily propose about language?", "options": ["Language is a unified system of symbols", "Words have both denotative and connotative meanings", "Labels we use shape our thinking and worldview", "Communication requires shared meanings between people"], "answer": 2},
  {"id": 171, "question": "Which characteristic best describes \"bypassing\" in communication?", "options": ["Using euphemisms to avoid offensive language", "Individuals believe they understand each other but miss each other's meaning", "Communication that follows the formal structure of business", "The substitution of symbols for actual objects"], "answer": 1},
  {"id": 172, "question": "What is the primary distinction between \"snarl words\" and \"purr words\"?", "options": ["Snarl words are abstract while purr words are concrete", "Snarl words are formal while purr words are informal", "Snarl words are denotative while purr words are connotative", "Snarl words have negative connotations while purr words have positive connotations"], "answer": 3},
  {"id": 173, "question": "What does the \"need for control\" represent in the functions of communication?", "options": ["The need to express and receive love", "The need for social contact with others", "The need to feel capable and responsible", "The need to influence and persuade others"], "answer": 2},
  {"id": 174, "question": "How does written communication primarily differ from oral communication?", "options": ["Written communication uses more complex vocabulary", "Written communication has longer cycles and fewer cycles", "Written communication is more formal and structured", "Written communication requires less creative effort"], "answer": 1},
  {"id": 175, "question": "What characterizes \"linguistic determinism\" as a component of the Sapir-Whorf hypothesis?", "options": ["Different languages create different worldviews", "Language influences how we interpret the world", "Cultural differences lead to translation confusion", "Language shapes social hierarchies"], "answer": 1},
  {"id": 176, "question": "What function does a euphemism serve in communication?", "options": ["It emphasizes negative aspects to create impact", "It substitutes a pleasant word in place of a less pleasant one", "It creates politically neutral language", "It enhances clarity in communication"], "answer": 1},
  {"id": 177, "question": "What characterizes \"tag questions\" in gendered speech patterns?", "options": ["Questions positioned between outright statements and yes/no questions", "Tentative phrases that weaken statements", "Remarks that diminish a statement's importance", "Questions that assert power and control"], "answer": 0},
  {"id": 178, "question": "What does \"adaptation\" represent as an underlying principle in communication study?", "options": ["The ability to use multiple communication channels", "Adjusting communication based on the communication process and audience needs", "The evolution of language over time", "Cultural sensitivity in cross-cultural exchanges"], "answer": 1},
  {"id": 179, "question": "In a telephonic interview, what is a key strategy to manage the absence of visual cues?", "options": ["Speak as quickly as possible to convey information efficiently.", "Ask 'Would you like more information?' to manage pauses and detail.", "Use complex vocabulary to demonstrate intelligence.", "Avoid smiling, as it won't be seen."], "answer": 1},
  {"id": 180, "question": "What is the significance of the 'Life is a Ball Game' activity in Lecture 38?", "options": ["To demonstrate the importance of physical fitness in the workplace.", "To symbolize managing multiple responsibilities and handling pressure with focus.", "To illustrate the competitive nature of team sports.", "To teach the rules of various ball games."], "answer": 1},
  {"id": 181, "question": "According to Lecture 39, what is the 'Law of the Buddha' that underscores the power of the mind?", "options": ["Right thought leads to right action, which leads to the right result.", "Meditation is the only path to enlightenment.", "Digital detox is essential for inner peace.", "All actions have equal and opposite reactions."], "answer": 0},
  {"id": 182, "question": "According to Lecture 22, what is the 'Phrase Principle' in CV writing?", "options": ["Using full sentences to provide complete information.", "Omitting full stops and using meaningful phrases instead of full sentences.", "Starting every bullet point with a noun.", "Using only technical jargon to impress the recruiter."], "answer": 1},
  {"id": 183, "question": "What is the 'throwaway line' concept in interviews, as described by recruiter Carolyn Murray in Lecture 36?", "options": ["A question the interviewer asks to quickly end the conversation.", "A casual remark that reveals the truth behind a scripted reply.", "A compliment given to the candidate to make them feel at ease.", "A phrase used by candidates to transition between topics."], "answer": 1},
  {"id": 184, "question": "Which of the following is essential when preparing for behavioral interviews?", "options": ["Memorizing generic answers", "Thinking about transferable skills", "Avoiding company research", "Giving one-word responses"], "answer": 1},
  {"id": 185, "question": "In situational interviews, candidates should follow which structure?", "options": ["Focus only on outcomes", "Describe situation, action, and outcome", "Avoid discussing implications", "Give vague answers"], "answer": 1},
  {"id": 186, "question": "Video interviews in the modern workplace can be of which two types?", "options": ["Recorded and live", "Written and oral", "Group and individual", "Technical and HR"], "answer": 0},
  {"id": 187, "question": "When preparing for a videotape interview, one must:", "options": ["Keep answers vague", "Tape only once", "Be specific and detailed", "Avoid smiling"], "answer": 2},
  {"id": 188, "question": "Successful interviewees are typically characterized by being:", "options": ["Vague about job positions", "Consistent and specific about desired roles", "Neutral in tone", "Silent about company knowledge"], "answer": 1},
  {"id": 189, "question": "Unsuccessful interviewees often exhibit which behavior regarding the company they are applying to?", "options": ["Use company name frequently", "Smile often", "Rarely use company name", "Ask personalized questions"], "answer": 2},
  {"id": 190, "question": "Successful candidates demonstrate enthusiasm during an interview by:", "options": ["Saying 'Okay' neutrally", "Expressing approval verbally and nonverbally", "Avoiding eye contact", "Giving short answers"], "answer": 1},
  {"id": 191, "question": "Successful interviewees use which type of language to show expertise?", "options": ["No technical jargon", "General responses only", "Industry terms and technical jargon", "One-word answers"], "answer": 2},
  {"id": 192, "question": "Which of the following is considered a defensive nonverbal cue in an interview?", "options": ["Comfortable eye contact", "Pointing gestures", "Forward lean", "Head nodding"], "answer": 1},
  {"id": 193, "question": "Which of the following is considered a supportive nonverbal cue in an interview?", "options": ["Shaking the head", "Arms crossed", "Forward lean", "Prolonged eye contact"], "answer": 2},
  {"id": 194, "question": "Empathy in body language is primarily shown by which gesture?", "options": ["Leaning back", "Head nodding", "Hands on hips", "Staring elsewhere"], "answer": 1},
  {"id": 195, "question": "Equality in interviews is reflected by which spatial arrangement?", "options": ["Maintaining higher elevation", "Hands on hips", "Same elevation as interviewer", "Extended eye contact aggressively"], "answer": 2},
  {"id": 196, "question": "Provisionalism in an interview is often indicated by which nonverbal cue?", "options": ["Arms crossed", "Head tilted to one side", "Shaking index finger", "Monotone voice"], "answer": 1},
  {"id": 197, "question": "The opening of an interview should ideally include:", "options": ["Silence", "Sincere pleasantries", "Avoiding tone setting", "Jumping directly to questions"], "answer": 1},
  {"id": 198, "question": "In the body of an interview, the interviewer's primary responsibility is to:", "options": ["Ask random questions", "Cover all content areas", "Avoid probing", "Ignore misunderstandings"], "answer": 1},
  {"id": 199, "question": "During an interview, the interviewee should proactively:", "options": ["Give vague answers", "Keep off subject", "Correct misunderstandings", "Resist topic shifts"], "answer": 2},
  {"id": 200, "question": "The closing of an interview should involve:", "options": ["Ignoring results", "Reviewing results and future relationship", "Ending abruptly", "Avoiding pleasantries"], "answer": 1},
  {"id": 201, "question": "Which interviewer technique helps ensure success by eliciting more detail?", "options": ["Avoiding feedback", "Using probes like repetition and silence", "Giving one-word questions", "Ignoring interviewee goals"], "answer": 1},
  {"id": 202, "question": "Life Skills Lab Activity 2 focused on which important area?", "options": ["Writing CVs", "Being prepared to save lives", "Tackling GDs", "Digital detox"], "answer": 1},
  {"id": 203, "question": "The 'Student Speak' sessions in the course aimed at:", "options": ["Memorizing answers", "Providing feedback and suggestions", "Avoiding improvement ideas", "Practicing silence"], "answer": 1},
  {"id": 204, "question": "Which of the following songs was NOT mentioned as being used in the Life Skills Lab?", "options": ["Sugar Boats – Modest Mouse", "Carmen – Stromae", "Connection – OneRepublic", "Bohemian Rhapsody - Queen"], "answer": 3},
  {"id": 205, "question": "Meditation was described in the course as a 'panacea for all ills,' meaning it is a:", "options": ["Waste of time", "Universal remedy", "Physical exercise", "Secret ritual"], "answer": 1},
  {"id": 206, "question": "What was the total number of lectures and modules covered in this communication course?", "options": ["20 lectures, 5 modules", "30 lectures, 6 modules", "40 lectures, 8 modules", "50 lectures, 10 modules"], "answer": 2},
  {"id": 207, "question": "What did the final message of the course emphasize for professional success?", "options": ["Unrestrained competition", "Balance in life, personal and professional", "Avoiding spirituality", "Memorization of answers"], "answer": 1},
  {"id": 208, "question": "When organizing a chronological résumé, what is the primary emphasis?", "options": ["Skills over experience", "Work history in reverse time order", "Personal interests", "Academic achievements only"], "answer": 1},
  {"id": 209, "question": "A functional résumé is most suitable for candidates who want to highlight:", "options": ["Continuous employment history", "Career gaps", "Skills and competencies", "Age and personal details"], "answer": 2},
  {"id": 210, "question": "Which of the following is NOT considered a standard résumé component?", "options": ["Employment history", "Political affiliation", "Career objective", "Academic credentials"], "answer": 1},
  {"id": 211, "question": "In professional résumé writing, a career objective should ideally be:", "options": ["Vague and general", "Tailored to the job applied for", "Focused on personal hobbies", "Lengthy and descriptive"], "answer": 1},
  {"id": 212, "question": "What is the recommended margin size for a paper résumé?", "options": ["0.2 inches", "About one inch", "2.5 inches", "No margins required"], "answer": 1},
  {"id": 213, "question": "A serif font of at least 11 points is recommended for résumés because it:", "options": ["Saves space", "Is decorative", "Enhances readability", "Looks stylish"], "answer": 2},
  {"id": 214, "question": "When documenting employment history, dates should be:", "options": ["Hidden in paragraphs", "Highlighted separately for easy identification", "Omitted for brevity", "Written informally"], "answer": 1},
  {"id": 215, "question": "For additional pages of a multi-page résumé, it is recommended to:", "options": ["Leave them blank", "Fold them", "Include first initial, last name, and page number on top right", "Staple multiple times"], "answer": 2},
  {"id": 216, "question": "Which formatting feature should be strictly avoided in scannable résumés?", "options": ["Standard fonts", "One-inch margins", "Italics, graphics, and horizontal lines", "Plain text"], "answer": 2},
  {"id": 217, "question": "When emailing a scannable résumé, in what format should it be saved?", "options": ["PDF with graphics", "HTML with images", "ASCII or plain text format", "JPEG format"], "answer": 2},
  {"id": 218, "question": "In the 'Power of Words' for CV writing, the word 'ran' could be improved by replacing it with:", "options": ["Tried", "Assisted", "Created and developed", "Helped"], "answer": 2},
  {"id": 219, "question": "Which of the following is considered a strong action verb for a CV?", "options": ["Tried", "Assisted", "Initiated", "Helped"], "answer": 2},
  {"id": 220, "question": "In CV writing, 'fudging' periods of employment is considered:", "options": ["Strategic writing", "Acceptable practice", "Dishonest and forbidden", "Functional formatting"], "answer": 2},
  {"id": 221, "question": "Using words like 'charismatic' and 'leadership' in a CV should be avoided because they:", "options": ["Are too simple", "Sound self-regarding", "Are technical terms", "Reduce impact"], "answer": 1},
  {"id": 222, "question": "What is the primary purpose of a well-designed CV as a marketing tool?", "options": ["To provide an autobiography", "To secure an interview opportunity", "To entertain recruiters", "To showcase personal beliefs"], "answer": 1},
  {"id": 223, "question": "The term 'fishbowl' discussion refers to a format where:", "options": ["Quiet participants observe fish", "Active participants are surrounded by observers", "The discussion happens in water", "Participants are limited to 2-3 minutes"], "answer": 1},
  {"id": 224, "question": "In a fishbowl activity, who primarily evaluates the dynamics of the group?", "options": ["The instructor only", "The active participants", "The surrounding observers", "External recruiters"], "answer": 2},
  {"id": 225, "question": "What is the typical size of a fishbowl active group?", "options": ["2 to 3 students", "5 to 6 students", "7 to 8 students", "12 to 15 students"], "answer": 2},
  {"id": 226, "question": "What is the primary role of the facilitator in a fishbowl discussion?", "options": ["To provide all the answers", "To introduce the topic and keep the dialogue moving", "To grade observers", "To remain silent"], "answer": 1},
  {"id": 227, "question": "How much time is typically allotted for a participant’s final statement in a fishbowl?", "options": ["10 seconds", "30 seconds", "2 minutes", "5 minutes"], "answer": 1},
  {"id": 228, "question": "Statistically, students adept in interpersonal skills are:", "options": ["Likely to work in isolation", "More apt to be hired and successful on the job", "Less likely to need research skills", "Unaffected in their career progression"], "answer": 1},
  {"id": 229, "question": "How is an 'interview' formally defined in professional communication?", "options": ["An informal chat", "Purposeful, planned, decision-making, person-to-person communication", "A one-way interrogation", "A random meeting"], "answer": 1},
  {"id": 230, "question": "Which interview type is designed specifically to collect data or opinions?", "options": ["Appraisal interview", "Exit interview", "Information-gathering interview", "Counseling interview"], "answer": 2},
  {"id": 231, "question": "An Exit interview is primarily conducted to:", "options": ["Hire a replacement", "Determine why an employee is leaving the position", "Provide psychological therapy", "Conduct a background check"], "answer": 1},
  {"id": 232, "question": "In a 'Stress interview', what is a common tactic used by interviewers?", "options": ["The candidate is left in a dark room", "Multiple interviewers fire questions rapidly at the candidate", "The candidate is asked to perform physical tasks", "No questions are asked at all"], "answer": 1},
  {"id": 233, "question": "Which body issued guidelines regarding illegal interview questions (e.g., about marital status)?", "options": ["FBI", "EEOC (Equal Employment Opportunity Commission)", "NASA", "The Department of Education"], "answer": 1},
  {"id": 234, "question": "If asked an illegal question during an interview, what is the most diplomatic strategy?", "options": ["Walk out immediately", "Respond politely with only legally relevant information", "Lie to the interviewer", "File a lawsuit immediately"], "answer": 1},
  {"id": 235, "question": "Impression management in an interview is the responsibility of:", "options": ["Only the applicant", "Only the interviewer", "Both the applicant and the interviewer", "Neither party"], "answer": 2},
  {"id": 236, "question": "Group Discussions are conducted primarily to test which candidate qualities?", "options": ["Height and weight", "Communication, analytical, and interpersonal skills", "Memory power", "Financial status"], "answer": 1},
  {"id": 237, "question": "What is the typical number of participants in a standard Group Discussion group?", "options": ["2-3", "4-6", "8-10", "20-30"], "answer": 2},
  {"id": 238, "question": "Which quality is essential for effective leadership during a Group Discussion?", "options": ["Interrupting others frequently", "Giving direction and taking the group along", "Speaking as fast as possible", "Being aggressive"], "answer": 1},
  {"id": 239, "question": "In a Group Discussion, 'analytical ability' is primarily demonstrated through:", "options": ["Avoiding examples", "Logical reasoning and uses of arguments", "Speaking loudly", "Memorizing definitions"], "answer": 1},
  {"id": 240, "question": "The 'KISS rule' in Group Discussions stands for:", "options": ["Know It Soonest", "Keep It Short & Simple", "Keep It Secret & Silent", "Key Information Sharing System"], "answer": 1},
  {"id": 241, "question": "What is a recommended way to initiate a Group Discussion successfully?", "options": ["Shouting to get attention", "Using relevant quotes, definitions, or questions", "Interrupting the first speaker", "Discussing unrelated anecdotes"], "answer": 1},
  {"id": 242, "question": "What is the suggested hand placement in 'Body Sport' for Group Discussions?", "options": ["Waving hands constantly for emphasis", "Hands on lap, right atop the left", "Hands in the air", "Hands hidden in pockets"], "answer": 1},
  {"id": 243, "question": "Which of the following is categorized as a 'factual' topic for a Group Discussion?", "options": ["A is an alphabet", "Reservations should be removed", "Education Policy of India", "Women make better managers"], "answer": 2},
  {"id": 244, "question": "Which of the following is categorized as an 'abstract' topic for a Group Discussion?", "options": ["Tourism in India", "Inflation", "A is an alphabet", "Unemployment"], "answer": 2},
  {"id": 245, "question": "Flexibility in a Group Discussion means:", "options": ["Accepting other viewpoints when they are logical", "Always disagreeing to show strength", "Avoiding participation", "Speaking aggressively"], "answer": 0},
  {"id": 246, "question": "What is the key objective of the Fishbowl Group Discussion format?", "options": ["To improve grammar skills", "To enhance interpersonal and discussion skills", "To test knowledge of technical subjects", "To practice giving presentations"], "answer": 1},
  {"id": 247, "question": "What is a rationale for conducting Fishbowl GDs?", "options": ["Reducing the teacher’s role in discussions", "Introducing competitive behavior in teams", "Encouraging informal debates", "Improving technical writing"], "answer": 0},
  {"id": 248, "question": "What was a significant challenge faced by Encore Battery Company?", "options": ["Decline in raw material supply", "Dependency of consumers on their products", "Fierce competition in the battery market", "Lack of trained workers"], "answer": 2},
  {"id": 249, "question": "What strategy was suggested for the Encore Battery Company to tackle competition?", "options": ["Increase battery prices", "Focus on R&D to innovate", "Stop renewal battery production", "Shift operations to Europe"], "answer": 1},
  {"id": 250, "question": "What issue did the Plastic Bottle Company face regarding its head office?", "options": ["High rental costs", "A dull and dirty building", "Poor location in a remote area", "Insufficient staff"], "answer": 1},
  {"id": 251, "question": "Which argument was made for keeping the head office of the Plastic Bottle Company in Mumbai?", "options": ["Proximity to the port", "Presence of major clients", "Low operational costs", "High consumer footfall"], "answer": 1},
  {"id": 252, "question": "What percentage of the training budget was spent on handling policies and claims at Bajaj Allianz?", "options": ["25%", "19%", "15%", "10%"], "answer": 1},
  {"id": 253, "question": "What was a suggested improvement for training budgets at Bajaj Allianz?", "options": ["Increase the focus on aesthetic training", "Remove all language training", "Shift resources to computer skills and financial management", "Add more courses on tennis and physical activities"], "answer": 2},
  {"id": 254, "question": "What is one advantage of case study-based GDs in management education?", "options": ["Improving coding skills", "Practicing public speaking", "Enhancing analytical skills", "Learning new languages"], "answer": 2},
  {"id": 255, "question": "Why are feedback sessions critical in group discussions?", "options": ["They ensure every participant wins", "They allow facilitators to dominate", "They highlight areas of improvement", "They replace evaluations"], "answer": 2},
  {"id": 256, "question": "What factor often determines the location of a company’s head office?", "options": ["Proximity to competitors", "Access to natural resources", "Strategic and client-focused location", "Availability of recreational facilities"], "answer": 2},
  {"id": 257, "question": "How can an organization improve its renewal market share?", "options": ["By reducing product prices", "By increasing advertising spend", "By halting R&D activities", "By outsourcing production"], "answer": 0},
  {"id": 258, "question": "What is the primary purpose of an evaluation sheet in a GD?", "options": ["To decide a winner", "To document positive and negative behaviors", "To create case studies", "To assess writing skills"], "answer": 1},
  {"id": 259, "question": "Why is cultural understanding essential when expanding into foreign markets?", "options": ["To reduce production costs", "To avoid language barriers", "To align business practices with local norms", "To identify new revenue streams"], "answer": 2},
  {"id": 260, "question": "What was a key suggestion for improving Encore Battery Company’s market presence?", "options": ["Launch a new advertising campaign", "Collaborate with research institutes", "Reduce focus on quality", "Exit the automotive battery market"], "answer": 1},
  {"id": 261, "question": "What is the primary purpose of the warm-up phase in an interview?", "options": ["To test technical skills", "To establish first impressions and rapport", "To discuss salary expectations", "To present project details"], "answer": 1},
  {"id": 262, "question": "Which type of interview involves multiple candidates being assessed together?", "options": ["Structured interview", "Stress interview", "Group interview", "Open-ended interview"], "answer": 2},
  {"id": 263, "question": "What is a key component of pre-employment testing?", "options": ["Job skills test", "Teamwork assessment", "Personal networking test", "Cultural fit evaluation"], "answer": 0},
  {"id": 264, "question": "Which of the following is an effective follow-up after an interview?", "options": ["Sending a thank-you note", "Calling the employer repeatedly", "Asking about other candidates' performance", "Visiting the office unannounced"], "answer": 0},
  {"id": 265, "question": "What do employers primarily seek in a candidate during an interview?", "options": ["Confidence and appearance", "Alignment with organizational goals and job requirements", "Strong negotiation skills", "High academic performance"], "answer": 1},
  {"id": 266, "question": "What is the purpose of pre-interview research on an organization?", "options": ["To develop potential questions for the interviewer", "To find flaws in the company", "To decide which competitors to apply to", "To prepare complaints for the interview"], "answer": 0},
  {"id": 267, "question": "Why might an interviewer ask a candidate to describe their weaknesses?", "options": ["To identify reasons to reject the candidate", "To evaluate honesty and self-awareness", "To assess problem-solving skills", "To compare weaknesses with other candidates"], "answer": 1},
  {"id": 268, "question": "Which response is most appropriate when asked about salary expectations?", "options": ["I will accept anything you offer.", "I expect a salary higher than anyone else.", "Based on industry standards and my skills, I expect a range between X and Y.", "I will decide after joining."], "answer": 2},
  {"id": 269, "question": "If asked how you handle conflict at work, which response demonstrates competence?", "options": ["I avoid conflict at all costs.", "I focus on identifying the root cause and work collaboratively to resolve it.", "I let my manager handle all conflicts.", "I confront people aggressively to get quick results."], "answer": 1},
  {"id": 270, "question": "A company organizes fun activities during work hours, but participation is low. What is a likely cause?", "options": ["Employees feel unmotivated due to work stress.", "The activities are too expensive.", "The events are held outside the office.", "There is no announcement about the activities."], "answer": 0},
  {"id": 271, "question": "How should a candidate demonstrate adaptability during an interview?", "options": ["By refusing to discuss weaknesses", "By sharing examples of adjusting to new roles or situations", "By highlighting only technical achievements", "By stating a strong preference for a fixed routine"], "answer": 1},
  {"id": 272, "question": "Which activity is most likely to reduce stress and boost productivity in a workplace?", "options": ["Random performance reviews", "Monthly team-building exercises", "Extended overtime shifts", "Mandatory weekend workshops"], "answer": 1},
  {"id": 273, "question": "What is the primary reason for organizations to conduct stress interviews?", "options": ["To create discomfort for candidates", "To evaluate how candidates perform under pressure", "To assess technical skills", "To ensure only experienced candidates apply"], "answer": 1},
  {"id": 274, "question": "Why is active listening critical during an interview?", "options": ["To respond quickly without thinking", "To understand questions fully and provide relevant answers", "To memorize the interviewer’s speech", "To avoid asking questions"], "answer": 1},
  {"id": 275, "question": "How can a candidate best conclude an interview?", "options": ["By leaving without saying much", "By expressing gratitude and asking about next steps", "By asking the interviewer for feedback on performance", "By negotiating salary immediately"], "answer": 1},
  {"id": 276, "question": "Which type of interview questions evaluates communication skills through open-ended scenarios?", "options": ["Closed questions", "Behavioral questions", "Open questions", "Situational questions"], "answer": 2},
  {"id": 277, "question": "What does the STAR technique stand for in behavioral interviews?", "options": ["Situation, Tactics, Actions, Results", "Scenario, Tasks, Analysis, Reflection", "Situation, Task, Action, Result", "Setup, Thought, Action, Reason"], "answer": 2},
  {"id": 278, "question": "Which of the following is a limitation of telephonic interviews?", "options": ["Lack of technical equipment", "Inability to see body language", "Restricted question types", "Difficulty in recording responses"], "answer": 1},
  {"id": 279, "question": "In a video interview, what is recommended to convey confidence and energy?", "options": ["Using elaborate hand gestures", "Smiling", "Standing upright throughout", "Wearing bright clothing"], "answer": 1},
  {"id": 280, "question": "In the \"Life is a Ball Game\" activity, what did the largest ball represent?", "options": ["Play", "Work", "Family", "Travel"], "answer": 2},
  {"id": 281, "question": "What percentage of communication in interviews is conveyed through nonverbal cues?", "options": ["7%", "38%", "55%", "65%"], "answer": 2},
  {"id": 282, "question": "What is the primary purpose of behavioral interview questions?", "options": ["To test technical knowledge", "To evaluate past experiences and responses", "To assess cultural fit", "To analyze academic achievements"], "answer": 1},
  {"id": 283, "question": "If asked, \"What would you do if you had to manage multiple deadlines?\" which STAR response is most appropriate?", "options": ["Situation: Assigned multiple projects; Task: Prioritize and plan; Action: Used project management", "Situation: Missed deadlines previously; Task: Improve performance; Action: Delegate work;", "Situation: Assigned one task; Task: Complete it; Action: Worked as usual; Result: Success.", "None of the options"], "answer": 0},
  {"id": 284, "question": "Which is an effective way to demonstrate enthusiasm in an interview?", "options": ["Responding neutrally to all questions", "Explicitly stating desire to work for the company", "Asking no questions", "Avoiding eye contact"], "answer": 1},
  {"id": 285, "question": "If a candidate describes a conflict with a teammate, what kind of response indicates poor behavior?", "options": ["Saying they refused to help the team", "Explaining steps taken to resolve the conflict", "Avoiding the topic entirely", "Blaming the leader for the conflict"], "answer": 0},
  {"id": 286, "question": "During a video interview, if the interviewer pauses, what should the candidate do?", "options": ["Continue speaking until interrupted", "Wait silently or ask if further explanation is needed", "End the call", "Change the topic"], "answer": 1},
  {"id": 287, "question": "For successful participation in \"Life is a Ball Game,\" what is essential?", "options": ["Ignoring others", "Focusing on one's own role", "Anticipating and coordinating with others", "Catching all balls at once"], "answer": 2},
  {"id": 288, "question": "Why is it important for a candidate to practice responses for behavioral interview questions?", "options": ["To memorize answers", "To effectively showcase past experiences and transferable skills", "To avoid answering spontaneously", "To impress the interviewer with rehearsed answers"], "answer": 1},
  {"id": 289, "question": "How can an interviewee improve their performance in telephonic interviews?", "options": ["Speaking loudly throughout", "Practicing short and concise answers beforehand", "Ignoring silence from the interviewer", "Using elaborate technical jargon"], "answer": 1},
  {"id": 290, "question": "What is the primary takeaway from the analogy used in the \"Life is a Ball Game\" activity?", "options": ["Focus on one task at a time", "Prioritize based on the situation and handle pressure effectively", "Always multitask", "Avoid working in teams"], "answer": 1},
  {"id": 291, "question": "The verbal and nonverbal messages that a person consciously or unconsciously sends in response to another person's communication are called", "options": ["feedback", "serial communication", "channel", "loop"], "answer": 0},
  {"id": 292, "question": "When a message generated by one culture needs to be processed by a member of another culture, the interactants are communicating", "options": ["inter-culturally", "inter-nationally", "intra-culturally", "inter-ethnically"], "answer": 0},
  {"id": 293, "question": "Which of the following is an open question?", "options": ["How old are you?", "What college did you attend?", "Would you tell me about yourself?", "Would you work for the salary offered?"], "answer": 2},
  {"id": 294, "question": "Which of the following is a secondary question?", "options": ["What is your favorite hobby?", "Would you please describe your last job?", "How would you define \"success\"?", "Could you give me an example?"], "answer": 3},
  {"id": 295, "question": "During the body of a hiring interview, interviewer and interviewee typically", "options": ["use icebreakers", "use orientation statements", "discuss the applicant and his or her accomplishments", "review and summarize their discussion"], "answer": 2},
  {"id": 296, "question": "Unlike hearing, listening", "options": ["is automatic", "requires no conscious effort", "is a deliberate process", "is both automatic and a deliberate proce"], "answer": 2},
  {"id": 297, "question": "The fact that we have cell phones, instant messages, digital television sets, high-speed Internet hook up, and more indicates that we may be in an era of", "options": ["technophobia", "technocrats", "technopoly", "techie geeks"], "answer": 2},
  {"id": 298, "question": "What are the three key types of questions in group discussions?", "options": ["group structure, group norms, group climate", "decision-making strategies, decision-making styles, decision-making structure", "fact, value, policy", "observations, facts, inferences"], "answer": 2},
  {"id": 299, "question": "You need to send an urgent email to your manager at 11 PM. What should you consider?", "options": ["send it immediately without thinking", "use all caps to show urgency", "write it clearly and consider if it can wait until morning", "send multiple emails to ensure they see it"], "answer": 2},
  {"id": 300, "question": "During a presentation, someone asks a question you cannot answer. What should you do?", "options": ["make up an answer to sound smart", "tell them their question is stupid", "honestly say you don't know but will find out and follow up", "ignore the question and continue"], "answer": 2},
  {"id": 301, "question": "You need to give feedback to a team member whose work needs improvement. How should you approach this?", "options": ["criticize them in front of the entire team", "schedule a private conversation and be specific and constructive", "send an angry email listing all their faults", "gossip about them with other colleagues"], "answer": 1},
  {"id": 302, "question": "You are working from home and have a video call. How should you prepare your environment?", "options": ["sit anywhere with any background", "ensure good lighting, quiet space, and professional background", "keep the camera off always", "have the TV on in the background"], "answer": 1},
  {"id": 303, "question": "A colleague sends you a document to review. What is the most helpful way to provide feedback?", "options": ["say \"it's fine\" without reading it", "rewrite the entire document yourself", "provide specific comments on what works and what needs improvement", "point out only negative aspects"], "answer": 2},
  {"id": 304, "question": "You accidentally sent a message meant for your friend to your work group chat. What should you do?", "options": ["delete it and pretend nothing happened", "immediately apologize and clarify it was sent by mistake", "blame someone else for using your account", "leave the group chat"], "answer": 1},
  {"id": 305, "question": "You need to schedule a meeting with five people. What is the best approach?", "options": ["pick any random time and inform everyone", "check availability and propose 2-3 time slots", "expect people to adjust to your only available time", "schedule it without informing anyone"], "answer": 1},
  {"id": 306, "question": "According to the triangle of meaning model, what relationship does it primarily explain?", "options": ["The connection between senders and receivers", "The interaction between words, things, and thoughts", "The difference between formal and informal networks", "The relationship between culture and language"], "answer": 1},
  {"id": 307, "question": "What distinguishes internal-operational communication from external-operational communication?", "options": ["Internal uses written forms while external uses oral forms", "Internal involves work conducted within the business while external involves", "Internal is informal while external is formal", "Internal is upward while external is downward"], "answer": 1},
  {"id": 308, "question": "In Deborah Tannen's framework, what does the term \"gender-lects\" refer to?", "options": ["The use of qualifiers and disclaimers in speech", "Language differences attributed to gender", "Sexist language patterns in professional settings", "The power dynamics in male-female communication"], "answer": 2},
  {"id": 309, "question": "What type of feedback occurs when you evaluate your own message during communication?", "options": ["Positive feedback", "External feedback", "Negative feedback", "Internal feedback"], "answer": 3},
  {"id": 310, "question": "What best describes the \"informal network\" in organizational communication?", "options": ["A complex and dynamic secondary network similar to veins in a body", "Communication that follows established operational lines", "Personal communication unrelated to business operations", "External communication with suppliers and customers"], "answer": 0},
  {"id": 311, "question": "What distinguishes denotative meaning from connotative meaning?", "options": ["Denotative is context-dependent while connotative is universal", "Denotative is spoken while connotative is written", "Denotative is objective dictionary meaning while connotative is subjective personal", "Denotative changes over time while connotative remains stable"], "answer": 2},
  {"question": "What is the primary goal of the \"Employment Communication Process\" as outlined in Lecture 1?", "options": ["To teach advanced grammar.", "To secure employment.", "To improve public speaking.", "To understand global cultures."], "answer": 1, "id": 312},
  {"question": "Which of the following is NOT one of the 8 components of communication discussed in Lecture 2?", "options": ["Message", "Channel", "Technology", "Noise"], "answer": 2, "id": 313},
  {"question": "According to Lecture 3, which type of communication network is described as the \"arteries\" of an organization?", "options": ["Personal Communication", "Informal Network", "External Operational Communication", "Formal Network"], "answer": 3, "id": 314},
  {"question": "The Latin word `verbum`, meaning \"word,\" is the origin of which communication term?", "options": ["Non-Verbal Communication", "Verbal Communication", "Intrapersonal Communication", "Mass Communication"], "answer": 1, "id": 315},
  {"question": "The Sapir-Whorf Hypothesis, discussed in Lecture 5, states that the language we use shapes our:", "options": ["Physical appearance and health.", "Perception of the world and behavior.", "Ability to learn new languages.", "Social status and economic standing."], "answer": 1, "id": 316},
  {"question": "According to Lecture 6, what percentage of the social meaning in our interactions is conveyed non-verbally?", "options": ["Less than 10%", "Approximately 25%", "As much as 65% to 93%", "Exactly 50%"], "answer": 2, "id": 317},
  {"question": "In the context of non-verbal communication, what does \"Visual Dominance\" primarily signal?", "options": ["", "person's artistic ability.", "Social status or power.", "The ability to see in the dark."], "answer": 1, "id": 318},
  {"question": "What is defined as the inherent belief that one's own culture is superior to all others, and is considered the greatest barrier to effective intercultural communication?", "options": ["Cultural Relativism", "Ethnocentrism", "Cultural Pluralism", "Subculture"], "answer": 1, "id": 319},
  {"question": "Which strategy of marginalized groups involves maintaining its unique cultural identity while also establishing relationships with the dominant culture?", "options": ["Separation", "Assimilation", "Accommodation", "Melting Pot"], "answer": 2, "id": 320},
  {"question": "According to Lecture 11, what is the study of eye movement and eye behavior called?", "options": ["Kinesics", "Proxemics", "Oculesics", "Haptics"], "answer": 2, "id": 321},
  {"question": "The \"Constellation Principle\" in body language interpretation states that:", "options": ["All gestures have universal meanings.", "Individual body language cues should be interpreted as part of a larger cluster of signals.", "Eye contact is the most important non-verbal cue.", "Body language is harder to fake than verbal communication."], "answer": 1, "id": 322},
  {"question": "What is the average listening efficiency cited in Lecture 13?", "options": ["100%", "75%", "45%", "20%"], "answer": 2, "id": 323},
  {"question": "In the \"Chinese Whispers\" activity, what was the primary lesson demonstrated about message transmission?", "options": ["People tend to add details to make stories more interesting.", "Information is not just lost but actively distorted and simplified as it passes through multiple listeners.", "Visual cues are more reliable than verbal cues.", "Complex messages are always remembered perfectly by the first receiver."], "answer": 1, "id": 324},
  {"question": "What is the primary goal of your CV, according to Lecture 19?", "options": ["To get you the job.", "To secure an interview.", "To list all your academic achievements.", "To demonstrate your writing skills."], "answer": 1, "id": 325},
  {"question": "According to Lecture 20, what punctuation should be used after the salutation in a formal business cover letter (e.g., \"Dear Mr. Guthrie:\")?", "options": ["Comma", "Semicolon", "Colon", "Period"], "answer": 2, "id": 326},
  {"question": "Which of the following is NOT recommended for a modern CV, according to Lecture 22?", "options": ["Using communicative phrases instead of full sentences.", "Including a \"Declaration\" section.", "Maintaining parallel structure in bullet points.", "Being specific with dates and details."], "answer": 1, "id": 327},
  {"question": "In a Group Discussion, what does the acronym KISS stand for?", "options": ["Keep It Short and Simple.", "Know Important Subject Statistics.", "Kindly Include Silent Speakers.", "Keep Individual Scores Secret."], "answer": 0, "id": 328},
  {"question": "What is the primary purpose of a \"Fishbowl GD\" as described in Lecture 26?", "options": ["To allow only the most confident speakers to participate.", "To provide immediate, structured peer feedback and promote deep, student-led learning.", "To eliminate candidates quickly based on their initial performance.", "To simulate a chaotic, unstructured meeting environment."], "answer": 1, "id": 329},
  {"question": "In the Marquee Cutlery G", "options": ["(Lecture 27), Ritika introduced the idea that the \"non-cooperation\" of the Korean firm might stem from:", "Financial mismanagement.", "", "lack of clear directives from headquarters."], "answer": 2, "id": 330},
  {"question": "During the Bajaj Allianz G", "options": ["(Lecture 29), what was a pivotal moment that shifted the conversation from general ideas to a focused analysis of resource allocation?", "The introduction of a new marketing strategy.", "Tirtho's questioning of the previous year's budget allocation using specific numbers.", "Aritra's summary of the group's recommendations."], "answer": 1, "id": 331},
  {"question": "Which type of interview asks for specific examples of how you've demonstrated certain skills or handled past situations?", "options": ["Stress Interview", "Case Interview", "Behavioral Interview", "Panel Interview"], "answer": 2, "id": 332},
  {"question": "When asked about your weaknesses in an interview, which strategy is NOT recommended by Lecture 31?", "options": ["Presenting a hidden strength.", "Citing a corrected weakness.", "Directly confessing a major, unaddressed flaw.", "Framing a past mistake as a valuable learning experience."], "answer": 2, "id": 333},
  {"question": "In the PI Practice Session I (Lecture 32), Reetika Dasgupta successfully bridged her technical background to an HR role by leveraging her analytical mindset for which emerging HR field?", "options": ["Employee Relations Management", "HR Analytics", "Talent Acquisition Strategy", "Compensation and Benefits"], "answer": 1, "id": 334},
  {"question": "In PI Practice Session II (Lecture 33), what was Akshay Thorat's honest but potentially risky answer when questioned about managing both his startup and a full-time job?", "options": ["I am very good at time management.", "My startup is a hobby, not a business.", "I love making money.", "I plan to hire someone to manage the startup."], "answer": 2, "id": 335},
  {"question": "In PI Practice Session III (Lecture 34), Mohammad Hashim Ali suggested a mimicry competition for freshers to relieve stress. What crucial caveat did he immediately add to balance creativity with practical risk assessment?", "options": ["He would ensure it was voluntary.", "He would first consult senior HR to gauge if the organizational culture was mature enough.", "He would only allow imitation of fictional characters.", "He would make sure it was a team-based activity."], "answer": 1, "id": 336},
  {"question": "In PI Practice Session IV (Lecture 35), what critical, foundational rule did Tirtha Nandi stumble on, despite a strong interview, when asked about company leadership?", "options": ["He failed to articulate his career vision.", "He couldn't name the CHRO of his former company or the interviewing company.", "He used too much industry jargon.", "He failed to ask insightful questions at the end."], "answer": 1, "id": 337},
  {"question": "According to Lecture 39, what is the primary outcome or product of a successful meditation practice?", "options": ["Physical strength", "Social popularity", "Concentration", "Financial wealth"], "answer": 2, "id": 338},
  {"question": "What is the most destructive form of noise in communication, according to Lecture 40?", "options": ["Physical Noise", "Physiological Noise", "Psychological Noise", "Environmental Noise"], "answer": 2, "id": 339},
  {"question": "In the \"Marquee Cutlery\" GD, Ritika introduced the idea that the \"non-cooperation\" of the Korean firm might stem from cultural differences rather than simple defiance. This demonstrates which G", "options": ["quality?", "Dominance in argument.", "Lack of subject knowledge.", "Analytical ability and problem reframing."], "answer": 2, "id": 340},
  {"question": "Which of the following is NOT one of the five qualities recruiters evaluate in a Group Discussion (G", "options": [", according to Lecture 24?", "Leadership Quality", "Knowledge of Subject", "Personal Wealth"], "answer": 2, "id": 341},
  {"question": "According to John Mole's framework, which posture indicates a person is actively engaged and ready to connect, often by leaning forward with open arms?", "options": ["Reflective", "Fugitive", "Combative", "Responsive"], "answer": 3, "id": 342},
  {"question": "In the Plastic Bottle Company (PB", "options": ["GD, Kaustuv suggested that the company's low-profile location might be a deliberate strategy to keep its B2", "contracts private. This demonstrated which skill?", "Facilitation", "Strategic Counterargument"], "answer": 2, "id": 343},
  {"question": "Which of the following is NOT one of the three stages of the Employment Communication Process as outlined in Lecture 1?", "options": ["CV/Resume", "Group Discussion", "Aptitude Test", "Personal Interview"], "answer": 2, "id": 344},
  {"question": "According to Lecture 2, what is the Latin root of the word 'communication' and its meaning?", "options": ["Communis', meaning 'community", "Communicare', meaning 'to make common", "Communico', meaning 'to share ideas", "Verbum', meaning 'word"], "answer": 1, "id": 345},
  {"question": "Which type of communication involves exchanges of information and feelings among employees that are NOT directly business-related?", "options": ["Internal Operational Communication", "External Operational Communication", "Personal Communication", "Formal Network Communication"], "answer": 2, "id": 346},
  {"question": "What is the objective, descriptive, or dictionary definition of a word, as discussed in Lecture 4?", "options": ["Connotative Meaning", "Symbolic Meaning", "Denotative Meaning", "Linguistic Meaning"], "answer": 2, "id": 347},
  {"question": "Which term describes the rules of etiquette for communicating over the internet, especially in professional contexts?", "options": ["Cyber-ethics", "Webiquette", "Netiquette", "Digital Protocol"], "answer": 2, "id": 348},
  {"question": "What is the term for the study of how we use and structure time in communication?", "options": ["Proxemics", "Haptics", "Chronemics", "Olfactics"], "answer": 2, "id": 349},
  {"question": "What is the single greatest barrier to effective intercultural communication, as stated in Lecture 8?", "options": ["Linguistic Relativity", "Ethnocentrism", "Cultural Pluralism", "Subcultural Differences"], "answer": 1, "id": 350},
  {"question": "Which of the following is NOT a core concept of kinesics as discussed in Lecture 16?", "options": ["Facial Expressions", "Posture", "Paralanguage", "Gestures"], "answer": 2, "id": 351},
  {"question": "In the 'Jaws of Death' activity, which character was ultimately chosen to be sacrificed by the group, and why?", "options": ["Peter, because he was a mysterious foreigner and potential spy.", "Mr. Premanand Bhandari, because he had a terminal illness and limited time left.", "Anand Tiwari, because he was disliked for a past crime.", "Ms. Pushpa Sagar, because she was perceived as lazy."], "answer": 1, "id": 352},
  {"question": "The 'Triangle of Meaning' model explains the relationship between which three components?", "options": ["Sender, Receiver, Message", "Word, Thought, Thing", "Verbal, Non-Verbal, Context", "Denotation, Connotation, Symbol"], "answer": 1, "id": 353},
  {"question": "What is the primary function of the 'grapevine' or informal network in a workplace, according to Lecture 3?", "options": ["To disseminate official policies and instructions from top management.", "To build relationships and gauge employee sentiment.", "To conduct external operational communication with clients.", "To formally report ground-level realities to senior management."], "answer": 1, "id": 354},
  {"question": "When verbal and non-verbal signals contradict each other, what is this called, and which signal do people usually believe?", "options": ["Message Negation; they believe the verbal signal.", "Mixed Message; they believe the non-verbal signal.", "Message Substitution; they believe the verbal signal.", "Message Reinforcement; they believe both equally."], "answer": 1, "id": 355},
  {"question": "Which of the following is NOT a characteristic of a 'low-contact culture' as described in Lecture 7?", "options": ["Maintaining more physical distance during interactions.", "Discouraging public displays of affection.", "Promoting interaction and public displays of warmth.", "Examples include many Asian nations."], "answer": 2, "id": 356},
  {"question": "According to the HURIER model of listening, what is the final stage of effective listening?", "options": ["Interpreting", "Evaluating", "Responding", "Remembering"], "answer": 2, "id": 357},
  {"question": "What is the primary reason for using a 'scannable resume' when applying for jobs online?", "options": ["It is visually more appealing to human recruiters.", "It is optimized for keyword matching by Applicant Tracking Systems (ATS).", "It allows for complex formatting and graphics.", "It is easier to print and distribute at career fairs."], "answer": 1, "id": 358},
  {"question": "Which of the following is a recommended 'DO' for a Group Discussion, according to Lecture 24?", "options": ["Dominate the conversation to show leadership.", "Fidget to release nervous energy.", "Substantiate your points with logic and examples.", "Engage in personal, one-on-one arguments. Source: Lecture_W5L52_Lecture_24___Fundamentals_of_Group_Discussions__G"], "answer": 2, "id": 359},
  {"question": "In the 'Counting the F's' activity, what was identified as a primary reason for participants missing some 'F's?", "options": ["The use of a serif font, which is harder to read.", "The sentence was too long to process in the given time.", "The use of all capital letters, which makes text less efficient to read.", "Participants were intentionally trying to mislead the instructor."], "answer": 2, "id": 360},
  {"question": "Which of John Mole's postural cues indicates a person is 'disengaged, bored, or rejecting the message'?", "options": ["Responsive (Forward & Open)", "Reflective (Open & Back)", "Fugitive (Back & Closed)", "Combative (Forward & Closed)"], "answer": 2, "id": 361},
  {"question": "In the 'Chinese Whispers' activity, what was the most significant outcome regarding the original message?", "options": ["The message remained largely intact, proving the reliability of verbal chains.", "The message was only slightly shortened but retained all key details.", "The message was not just lost but actively distorted, simplified, and invented.", "The message became more detailed and accurate with each retelling."], "answer": 2, "id": 362},
  {"question": "In the PI Practice Session I, how did Reetika Dasgupta successfully bridge her technical background as a Programmer Analyst to an HR Generalist role?", "options": ["By stating she was tired of technical work and wanted a change.", "By highlighting her analytical mindset and linking it to HR Analytics.", "By claiming she had always wanted to work in HR despite her technical degree.", "By downplaying her programming experience as irrelevant."], "answer": 1, "id": 363},
  {"question": "In the PI Practice Session IV, when asked 'Why shouldn't we hire you?', how did Anupam Dash provide a sophisticated response?", "options": ["He confessed to a minor weakness that he was actively working on.", "He stated he shouldn't be hired if the company was purely profit-driven or required pre-existing corporate strategy experience.", "He humorously deflected the question without giving a direct answer.", "He claimed he had no weaknesses relevant to the job."], "answer": 1, "id": 364},
  {"question": "According to Lecture 40, what is the most destructive form of noise in communication, defined as 'Edge God Out'?", "options": ["Physical Noise", "Physiological Noise", "Psychological Noise", "Semantic Noise"], "answer": 2, "id": 365},
  {"question": "A cover letter written in direct response to a specific job advertisement is known as a:", "options": ["Prospecting letter.", "Unsolicited letter.", "Cold application.", "Solicited letter."], "answer": 3, "id": 366},
  {"question": "In the Marquee Cutlery GD (Lecture 27), Ritika introduced the idea that the \"non-cooperation\" of the Korean firm might stem from:", "options": ["Financial mismanagement.", "A lack of clear directives from headquarters.", "Cultural differences in work styles.", "A desire to merge with a competitor."], "answer": 2, "id": 367},
  {"question": "During the Bajaj Allianz GD (Lecture 29), what was a pivotal moment that shifted the conversation from general ideas to a focused analysis of resource allocation?", "options": ["The introduction of a new marketing strategy.", "Tirtho's questioning of the previous year's budget allocation using specific numbers.", "Aritra's summary of the group's recommendations.", "A debate about the best location for the new European office."], "answer": 1, "id": 368},
  {"question": "The term communication comes from the Latin word ______.", "options": ["Communicare", "Commune", "Communis", "Communicationis"], "answer": 0, "id": 369},
  {"question": "The Latin word communicare means ______.", "options": ["to divide", "to inform", "to make common", "to translate"], "answer": 2, "id": 370},
  {"question": "Feedback that a person gives to himself or herself is called ______ feedback.", "options": ["external", "internal", "negative", "positive"], "answer": 1, "id": 371},
  {"question": "The dictionary meaning of a word is known as ______ meaning.", "options": ["connotative", "denotative", "cultural", "linguistic"], "answer": 1, "id": 372},
  {"question": "Personal or emotional meaning associated with a word is called ______ meaning.", "options": ["denotative", "connotative", "objective", "literal"], "answer": 1, "id": 373},
  {"question": "Rules governing proper behavior on the Internet are known as ______.", "options": ["cyber law", "internet rules", "netiquette", "web policy"], "answer": 2, "id": 374},
  {"question": "In situational interviews, candidates should:", "options": ["Focus only on outcomes", "Describe situation, action, and outcome", "Avoid discussing implications", "Give vague answers"], "answer": 1, "id": 375},
  {"question": "Which phrase is recommended during phone interviews after a short answer?", "options": ["“That’s all.”", "“Would you like more information?”", "“I don’t know.”", "“Next question please.”"], "answer": 1, "id": 376},
  {"question": "Video interviews can be of two types:", "options": ["Recorded and live", "Written and oral", "Group and individual", "Technical and HR"], "answer": 0, "id": 377},
  {"question": "When preparing a videotape interview, one must:", "options": ["Keep answers vague", "Tape only once", "Be specific and detailed", "Avoid smiling"], "answer": 2, "id": 378},
  {"question": "Successful interviewees are usually:", "options": ["Vague about job positions", "Consistent and specific about desired roles", "Neutral in tone", "Silent about company knowledge"], "answer": 1, "id": 379},
  {"question": "Unsuccessful interviewees often:", "options": ["Use company name frequently", "Smile often", "Rarely use company name", "Ask personalized questions"], "answer": 2, "id": 380},
  {"question": "Successful candidates demonstrate enthusiasm by:", "options": ["Saying “Okay” neutrally", "Expressing approval verbally and nonverbally", "Avoiding eye contact", "Giving short answers"], "answer": 1, "id": 381},
  {"question": "Which nonverbal cue is linked to success?", "options": ["Little eye contact", "Smiling infrequently", "Frequent eye contact and smiling", "Crossing arms away from interviewer"], "answer": 2, "id": 382},
  {"question": "Successful interviewees use:", "options": ["No technical jargon", "General responses only", "Industry terms and technical jargon", "One-word answers"], "answer": 2, "id": 383},
  {"question": "Defensive nonverbal cue includes:", "options": ["Comfortable eye contact", "Pointing gestures", "Forward lean", "Head nodding"], "answer": 1, "id": 384},
  {"question": "Supportive nonverbal cue includes:", "options": ["Shaking the head", "Arms crossed", "Forward lean", "Prolonged eye contact"], "answer": 2, "id": 385},
  {"question": "Empathy in body language is shown by:", "options": ["Leaning back", "Head nodding", "Hands on hips", "Staring elsewhere"], "answer": 1, "id": 386},
  {"question": "Equality in interviews is reflected by:", "options": ["Maintaining higher elevation", "Hands on hips", "Same elevation as interviewer", "Extended eye contact aggressively"], "answer": 2, "id": 387},
  {"question": "Provisionalism is indicated by:", "options": ["Arms crossed", "Head tilted to one side", "Shaking index finger", "Monotone voice"], "answer": 1, "id": 388},
  {"question": "Opening of an interview should include:", "options": ["Silence", "Sincere pleasantries", "Avoiding tone setting", "Jumping directly to questions"], "answer": 1, "id": 389},
  {"question": "In the body of an interview, the interviewer should:", "options": ["Ask random questions", "Cover all content areas", "Avoid probing", "Ignore misunderstandings"], "answer": 1, "id": 390},
  {"question": "Interviewee should:", "options": ["Give vague answers", "Keep off subject", "Correct misunderstandings", "Resist topic shifts"], "answer": 2, "id": 391},
  {"question": "Closing of an interview involves:", "options": ["Ignoring results", "Reviewing results and future relationship", "Ending abruptly", "Avoiding pleasantries"], "answer": 1, "id": 392},
  {"question": "Which technique ensures interviewer success?", "options": ["Avoiding feedback", "Using probes like repetition and silence", "Giving one-word questions", "Ignoring interviewee goals"], "answer": 1, "id": 393},
  {"question": "Life Skills Lab Activity 1 was titled:", "options": ["Life is a ball game", "Save lives", "Digital detox", "Meditation practice"], "answer": 0, "id": 394},
  {"question": "Life Skills Lab Activity 2 focused on:", "options": ["Writing CVs", "Being prepared to save lives", "Tackling GDs", "Digital detox"], "answer": 1, "id": 395},
  {"question": "Student Speak sessions aimed at:", "options": ["Memorizing answers", "Providing feedback and suggestions", "Avoiding improvement ideas", "Practicing silence"], "answer": 1, "id": 396},
  {"question": "Which song was used in Life Skills Lab?", "options": ["Sugar Boats – Modest Mouse", "Carmen – Stromae", "Connection – OneRepublic", "All of the above"], "answer": 3, "id": 397},
  {"question": "Meditation was described as:", "options": ["A panacea for all ills", "A waste of time", "Only for monks", "A physical exercise only"], "answer": 0, "id": 398},
  {"question": "Total lectures in the course were:", "options": ["20", "30", "40", "50"], "answer": 2, "id": 399},
  {"question": "Number of modules covered:", "options": ["5", "6", "8", "10"], "answer": 2, "id": 400},
  {"question": "Assignments included in the course:", "options": ["2", "5", "8", "12"], "answer": 2, "id": 401},
  {"question": "End term evaluation included:", "options": ["Only interviews", "Only CV writing", "An End Term Test", "Group discussions only"], "answer": 2, "id": 402},
  {"question": "Final message of the course emphasized:", "options": ["Competition only", "Balance in life, personal and professional", "Avoiding spirituality", "Memorization of answers"], "answer": 1, "id": 403},
];

// Configuration
const TEST_DURATION_MINS = 30;
const TOTAL_QUESTIONS_TO_SELECT = 30;

// State Variables
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = {}; 
let questionStatus = {}; 
let timeRemaining = TEST_DURATION_MINS * 60;
let timerInterval;

// DOM Elements
const timerDisplay = document.getElementById('timer');
const questionNumberText = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const paletteGrid = document.getElementById('question-palette');
const submitModal = document.getElementById('submit-modal');

/**
 * Initialize the Exam
 */
function init() {
    // Check if we're on the exam page
    if (!document.querySelector('.exam-body')) return;

    try {
        // Randomly select 30 questions if not already in localStorage
        const storedQuestions = localStorage.getItem('selectedQuestions');
        if (storedQuestions) {
            questions = JSON.parse(storedQuestions);
        } else {
            questions = getRandomQuestions(QUESTION_BANK, TOTAL_QUESTIONS_TO_SELECT);
            localStorage.setItem('selectedQuestions', JSON.stringify(questions));
        }

        // Restore state if available
        const storedAnswers = localStorage.getItem('userAnswers');
        if (storedAnswers) userAnswers = JSON.parse(storedAnswers);

        const storedStatus = localStorage.getItem('questionStatus');
        if (storedStatus) questionStatus = JSON.parse(storedStatus);

        const storedTime = localStorage.getItem('timeRemaining');
        if (storedTime) timeRemaining = parseInt(storedTime);

        // Map initial statuses
        questions.forEach(q => {
            if (!questionStatus[q.id]) {
                questionStatus[q.id] = 'not-visited';
            }
        });

        renderPalette();
        showQuestion(currentQuestionIndex);
        startTimer();
        updateLegend();

    } catch (error) {
        console.error('Error initializing exam:', error);
        questionText.innerText = "Error initializing exam. Please refresh the page.";
    }
}

/**
 * Randomize questions
 */
function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

/**
 * Display a question
 */
function showQuestion(index) {
    currentQuestionIndex = index;
    const q = questions[index];
    
    // Update labels
    questionNumberText.innerText = `Question No. ${index + 1}`;
    questionText.innerText = q.question;
    
    // Mark as visited if it was not visited
    if (questionStatus[q.id] === 'not-visited') {
        questionStatus[q.id] = 'not-answered';
    }

    // Render options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = `option-item ${userAnswers[q.id] === idx ? 'selected' : ''}`;
        div.innerHTML = `
            <input type="radio" name="option" value="${idx}" id="opt-${idx}" ${userAnswers[q.id] === idx ? 'checked' : ''}>
            <label for="opt-${idx}">${opt}</label>
        `;
        div.onclick = () => selectOption(idx);
        optionsContainer.appendChild(div);
    });

    // Update UI highlights
    updatePaletteHighlights();
    saveState();
}

/**
 * Handle option selection
 */
function selectOption(index) {
    const q = questions[currentQuestionIndex];
    userAnswers[q.id] = index;
    
    // Visually update
    const items = document.querySelectorAll('.option-item');
    items.forEach((item, idx) => {
        if (idx === index) item.classList.add('selected');
        else item.classList.remove('selected');
    });
    
    const radios = document.querySelectorAll('input[name="option"]');
    radios[index].checked = true;

    saveState();
}

/**
 * Timer Logic
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        if (timerDisplay) {
            timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        }

        // Save time state
        if (timeRemaining % 5 === 0) {
            localStorage.setItem('timeRemaining', timeRemaining);
        }
    }, 1000);
}

/**
 * Palette Logic
 */
function renderPalette() {
    if (!paletteGrid) return;
    paletteGrid.innerHTML = '';
    questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = `palette-btn ${questionStatus[q.id]}`;
        btn.innerText = idx + 1;
        btn.onclick = () => showQuestion(idx);
        paletteGrid.appendChild(btn);
    });
}

function updatePaletteHighlights() {
    if (!paletteGrid) return;
    const buttons = paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
        const qId = questions[idx].id;
        btn.className = `palette-btn ${questionStatus[qId]}`;
        if (idx === currentQuestionIndex) btn.classList.add('current');
    });
    updateLegend();
}

function updateLegend() {
    const statuses = Object.values(questionStatus);
    const legendBadges = document.querySelectorAll('.legend-item .badge');
    if (legendBadges.length < 4) return;
    
    const counts = {
        'answered': statuses.filter(s => s === 'answered').length,
        'not-answered': statuses.filter(s => s === 'not-answered').length,
        'marked': statuses.filter(s => s === 'marked').length,
        'not-visited': statuses.filter(s => s === 'not-visited').length
    };

    legendBadges[0].innerText = counts['answered'];
    legendBadges[1].innerText = counts['not-answered'];
    legendBadges[2].innerText = counts['marked'];
    legendBadges[3].innerText = counts['not-visited'];
}

/**
 * Button Handlers
 */
document.getElementById('save-next-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    if (userAnswers[q.id] !== undefined) {
        questionStatus[q.id] = 'answered';
    } else {
        questionStatus[q.id] = 'not-answered';
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        showQuestion(currentQuestionIndex); 
    }
});

document.getElementById('mark-review-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    questionStatus[q.id] = 'marked';
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        showQuestion(currentQuestionIndex);
    }
});

document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
});

document.getElementById('clear-response-btn')?.addEventListener('click', () => {
    const q = questions[currentQuestionIndex];
    delete userAnswers[q.id];
    questionStatus[q.id] = 'not-answered';
    showQuestion(currentQuestionIndex);
});

document.getElementById('submit-test-btn')?.addEventListener('click', () => {
    submitModal.classList.add('active');
});

document.getElementById('cancel-submit')?.addEventListener('click', () => {
    submitModal.classList.remove('active');
});

document.getElementById('confirm-submit')?.addEventListener('click', () => {
    calculateResults();
});

/**
 * Final Calculation
 */
function calculateResults() {
    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    const detailedResults = questions.map(q => {
        const userChoice = userAnswers[q.id];
        const status = questionStatus[q.id];
        const isCorrect = userChoice === q.answer;

        if (userChoice !== undefined) {
            attempted++;
            if (isCorrect) correct++;
            else wrong++;
        }

        return {
            ...q,
            userChoice,
            status,
            isCorrect
        };
    });

    const percentage = ((correct / questions.length) * 100).toFixed(2);

    const examResults = {
        total: questions.length,
        attempted,
        correct,
        wrong,
        percentage
    };

    localStorage.setItem('examResults', JSON.stringify(examResults));
    localStorage.setItem('detailedResults', JSON.stringify(detailedResults));
    window.location.href = 'result.html';
}

/**
 * Result Page Logic
 */
function initResultPage() {
    const results = JSON.parse(localStorage.getItem('examResults'));
    const detailedData = JSON.parse(localStorage.getItem('detailedResults'));
    
    if (!results || !detailedData) return;

    // Summary stats
    document.getElementById('score-percentage').innerText = results.percentage + '%';
    document.getElementById('total-questions').innerText = results.total;
    document.getElementById('attempted').innerText = results.attempted;
    document.getElementById('correct-answers').innerText = results.correct;
    document.getElementById('wrong-answers').innerText = results.wrong;

    // View Answer Key Toggle
    const viewBtn = document.getElementById('view-answers-btn');
    const section = document.getElementById('answer-key-section');
    
    if (viewBtn && section) {
        viewBtn.onclick = () => {
            section.classList.toggle('hidden');
            if (!section.classList.contains('hidden')) {
                renderAnswerKey(detailedData);
                viewBtn.innerText = "Hide Detailed Answers";
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                viewBtn.innerText = "View Detailed Answers";
            }
        };
    }
}

function renderAnswerKey(data) {
    const list = document.getElementById('answer-key-list');
    if (!list) return;
    list.innerHTML = '';

    data.forEach((q, idx) => {
        const isAttempted = q.userChoice !== undefined;
        const isCorrect = q.isCorrect;
        const correctLetter = String.fromCharCode(65 + q.answer);
        
        const card = document.createElement('div');
        card.className = 'answer-item';
        if (!isAttempted) card.classList.add('not-attempted');
        else if (isCorrect) card.classList.add('correct');
        else card.classList.add('wrong');

        let statusHtml = '';
        if (!isAttempted) {
            statusHtml = `<span class="status-badge orange">Not Attempted – Correct answer is ${correctLetter}</span>`;
        } else if (isCorrect) {
            statusHtml = `<span class="status-badge green">Correct</span>`;
        } else {
            statusHtml = `<span class="status-badge red">Wrong – Correct answer is ${correctLetter}</span>`;
        }

        let optionsHtml = '<ul class="review-options">';
        q.options.forEach((opt, oIdx) => {
            const letter = String.fromCharCode(65 + oIdx);
            let optClass = '';
            if (oIdx === q.answer) optClass = 'correct';
            else if (isAttempted && oIdx === q.userChoice && !isCorrect) optClass = 'wrong';
            
            optionsHtml += `
                <li class="${optClass}">
                    <span class="opt-letter">${letter}</span>
                    <span class="opt-text">${opt}</span>
                    ${oIdx === q.answer ? '<span class="label-correct">Correct Answer</span>' : ''}
                    ${isAttempted && oIdx === q.userChoice && !isCorrect ? '<span class="label-your">Your Choice</span>' : ''}
                </li>`;
        });
        optionsHtml += '</ul>';

        card.innerHTML = `
            <div class="q-header">
                <span class="q-num">Question ${idx + 1}</span>
                ${statusHtml}
            </div>
            <p class="q-text-full">${q.question}</p>
            ${optionsHtml}
        `;
        list.appendChild(card);
    });
}

function autoSubmit() {
    alert("Time is up! Your responses are being submitted.");
    calculateResults();
}

function saveState() {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('questionStatus', JSON.stringify(questionStatus));
}

// Start Initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.classList.contains('exam-body')) init();
        if (document.body.classList.contains('result-body')) initResultPage();
    });
} else {
    if (document.body.classList.contains('exam-body')) init();
    if (document.body.classList.contains('result-body')) initResultPage();
}
