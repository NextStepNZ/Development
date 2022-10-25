import React, { useEffect, useState } from 'react';
import Timer from "./Timer";

function Test1() {
	const questionList = [
		{
			question: 'C is a: ',
			answers: [
				{ answer: 'General-purpose programming language', correctOrNot: true },
				{ answer: 'Photo editing program', correctOrNot: false },
				{ answer: 'Client-side scripting language', correctOrNot: false },

			],
		},
		{
			question: 'Which of the following are valid data types in C?',
			answers: [
				{ answer: 'int, double, char, boolean', correctOrNot: false },
				{ answer: 'int, bool, string', correctOrNot: false },
				{ answer: 'int, float, double, char', correctOrNot: true },
			],
		},
		{
			question: 'What does a leading 0x or 0X means?',
			answers: [
				{ answer: 'Decimal', correctOrNot: false },
				{ answer: 'Binary', correctOrNot: false },
				{ answer: 'Hexadecimal', correctOrNot: true },

			],
		},
		{
			question: 'C does not have a boolean type?',
			answers: [
				{ answer: 'True', correctOrNot: true },
				{ answer: 'False', correctOrNot: false },

			],
		},
	];

	const [Question, setQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	useEffect(() => {
		setInterval(() => {
			setShowScore(true);
		}, timerendPersecond)
	}, []);
	const [score, setScore] = useState(0);

	const AnswerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = Question + 1;
		if (nextQuestion < questionList.length) {
			setQuestion(nextQuestion);
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
				<div>
					<h3>Timer:</h3><div><h3>{timer}</h3></div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {Question + 1}</span>/{questionList.length}
						</div>
						<div className='question-text'>{questionList[Question].question}</div>
					</div>
					<div className='answer-section'>
						{questionList[Question].answers.map((answerOption) => (
							<button onClick={() => AnswerClick(answerOption.correctOrNot)}>{answerOption.answer}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
export default Test1;