import 'bulma/css/bulma.css'
import { get } from 'illa/FunctionUtil'
import { Component, createElement, Fragment } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { makeActionGetNextQuestion } from '../model/ActionGetNextQuestion'
import { Question } from '../model/Question'
import { Questions } from '../model/Questions'
import { State } from '../model/State'
import './AppComp.css'

export interface AppCompPropsFromStore {
	questionNumber: number
	question: Question
}
export interface AppCompPropsDispatch {
	nextQuestion: () => void
}
export interface AppCompPropsOwn { }
export interface AppCompProps extends AppCompPropsOwn, AppCompPropsFromStore, AppCompPropsDispatch, DispatchProp<State> { }
export interface AppCompState {
	answer: string
	isChecked: boolean
}

class AppCompPure extends Component<AppCompProps, AppCompState> {
	static displayName = __filename

	inputRef: HTMLInputElement | null = null

	constructor(props: AppCompProps) {
		super(props)
		this.state = {
			isChecked: false,
			answer: '',
		}
	}
	// componentWillMount() {}
	// componentWillReceiveProps(nextProps: AppCompProps) {}
	// shouldComponentUpdate(nextProps: AppCompProps, nextState: AppCompState): boolean {}
	// componentWillUpdate(nextProps: AppCompProps, nextState: AppCompState) {}
	render() {
		const isAnswerCorrect = this.state.answer.trim().replace(/\s+/g, ' ') === get(() => this.props.question.answer)
		return (
			<section className='section'>
				<div className='container'>
					{this.props.question ?
						<Fragment>
							<h1 className='title'>
								{`Logika`}
							</h1>
							<p className='subtitle'>
								{`${this.props.questionNumber}. kérdés`}
							</p>
							<p className='is-size-4'>
								{this.props.question.text}
							</p>
							<div className='field has-addons'>
								<div className='control'>
									<input
										ref={newRef => {
											const prevRef = this.inputRef
											this.inputRef = newRef
											if (!prevRef && newRef) {
												this.focusInput()
											}
										}}
										className='input'
										placeholder='A válaszod'
										value={this.state.answer}
										onInput={e => this.setState({
											...this.state,
											answer: e.currentTarget.value,
										})}
										onKeyDown={e => {
											if (e.key === 'Enter') {
												if (this.state.isChecked) {
													this.nextQuestion()
												} else {
													this.check()
												}
											}
										}}
									/>
									{this.state.isChecked ?
										isAnswerCorrect ?
											<p className='help is-success'>
												{`A válaszod helyes.`}
											</p>
											:
											<p className='help is-danger'>
												{`A válaszod helytelen. A helyes válasz: ${this.props.question.answer}`}
											</p>
										:
										<p className='help'>
											{`Írd ide a válaszod, és nyomd meg az „Ellenőrizd” gombot!`}
										</p>
									}
								</div>
								<div className='control'>
									<button
										className='button is-info'
										disabled={!this.state.answer.trim() || this.state.isChecked}
										onClick={() => {
											this.check()
											this.focusInput()
										}}
									>
										{`Ellenőrizd`}
									</button>
								</div>
							</div>
							<p>
								<button
									className={`button is-primary`}
									onClick={() => {
										this.nextQuestion()
										this.focusInput()
									}}
									disabled={!this.state.isChecked}
								>
									{`Add a következőt`}
								</button>
							</p>
						</Fragment>
						:
						<p className='has-text-centered'>
							{`⌚ Egy pillanat...`}
						</p>
					}
				</div>
			</section>
		)
	}
	componentDidMount() {
		if (!this.props.question) {
			this.nextQuestion()
		}
	}
	// componentDidUpdate(prevProps: AppCompProps, prevState: AppCompState) {}
	// componentWillUnmount() {}

	check() {
		this.setState({
			...this.state,
			isChecked: true,
		})
	}

	nextQuestion() {
		this.setState({
			...this.state,
			answer: '',
			isChecked: false,
		})
		this.props.nextQuestion()
	}

	focusInput() {
		if (this.inputRef) {
			this.inputRef.focus()
		}
	}
}

export const AppComp = connect<AppCompPropsFromStore, AppCompPropsDispatch, AppCompPropsOwn, State>(
	({
		questionNumber,
		questionIndex,
	}, ownProps) => ({
		questionNumber,
		question: Questions[questionIndex],
	}),
	(dispatch: Dispatch<State>, ownProps) => ({
		nextQuestion: () => dispatch(makeActionGetNextQuestion({})),
	}),
)(AppCompPure)
