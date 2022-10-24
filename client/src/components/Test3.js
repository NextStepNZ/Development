import React, { useState, useEffect } from 'react';
import Timer
 from './Timer';
function Test3() {
	const questionList = [
		{
			question: 'Which of the following is not a primary trait of malware?',
			answers: [
				{ answer: 'diffusion', correctOrNot: true },
				{ answer: 'circulation', correctOrNot: false },
				{ answer: 'infection', correctOrNot: false },
				{ answer: 'concealment', correctOrNot: false },

			],
		},
		{
			question: 'Which type of malware requires a user to transport it from one computer to another?',
			answers: [
				{ answer: 'worm', correctOrNot: false },
				{ answer: 'rootkit', correctOrNot: false },
				{ answer: 'adware', correctOrNot: true },
				{ answer: 'virus', correctOrNot: false },
			],
		},
		{
			question: '_____ sends phishing messages only to wealthy individuals.',
			answers: [
				{ answer: 'Target phishing', correctOrNot: false },
				{ answer: 'Whaling', correctOrNot: true },
				{ answer: 'Spear phishing', correctOrNot: false },
				{ answer: 'Microing', correctOrNot: false },
			],
		},
		{
			question: 'What is the term used for a threat actor who controls multiple bots in a botnet?',
			answers: [
				{ answer: 'zombie shepherd', correctOrNot: false },
				{ answer: 'bot herder', correctOrNot: true },
				{ answer: 'rogue IRC', correctOrNot: false },
				{ answer: 'cyber-robot', correctOrNot: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setShowScore(true);
		}, timerendPersecond)
	}, []);

	const AnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionList.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const timerend = 100;
	const timerendPersecond = timerend * 1000;
	const timer = useState(<Timer max={timerend} />);

	return (
		<div className='test'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questionList.length}
				</div>
			) : (
				<>
					<h3>Timer:</h3><div><h3>{timer}</h3></div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questionList.length}
						</div>
						<div className='question-text'>{questionList[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{questionList[currentQuestion].answers.map((answerOption) => (
							<button onClick={() => AnswerClick(answerOption.correctOrNot)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default Test3;