import React, { useState, useEffect } from 'react';
import Timer from "./Timer";

function Test2() {
	const questionList = [
		{
			question: 'What is <div>?',
			answers: [
				{ answer: 'Tag for a paragraph', correctOrNot: false },
				{ answer: 'Tag for a box', correctOrNot: true },
				{ answer: 'Tag for a link', correctOrNot: false },
			],
		},
		{
			question: 'What is <img>?',
			answers: [
				{ answer: 'Tag for an image', correctOrNot: true },
				{ answer: 'Tag for the page title', correctOrNot: false },
				{ answer: 'Tag for bold text', correctOrNot: false },

			],
		},
		{
			question: 'What is <body>?',
			answers: [
				{ answer: 'Tag to embed CSS into HTML', correctOrNot: false },
				{ answer: 'Contains all the content of a page', correctOrNot: true },
				{ answer: 'Contains most of the unseen information', correctOrNot: false },

			],
		},
		{
			question: 'What is <!DOCTYPE>?',
			answers: [
				{ answer: 'Tag for an unordered list', correctOrNot: false },
				{ answer: 'Tag for a line break (enter)', correctOrNot: false },
				{ answer: 'Tag to identify the type of document', correctOrNot: true },

			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
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
				<div>
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
				</div>
			)}
		</div>
	);
}
export default Test2;