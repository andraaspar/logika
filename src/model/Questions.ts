import { makeQuestion } from './Question'

export const Questions = [
	makeQuestion({ text: 'i ⇒ i', answer: 'i', }),
	makeQuestion({ text: 'i ⇒ h', answer: 'h', }),
	makeQuestion({ text: 'h ⇒ i', answer: 'i', }),
	makeQuestion({ text: 'h ⇒ h', answer: 'i', }),
	
	makeQuestion({ text: 'i ⇏ i', answer: 'h', }),
	makeQuestion({ text: 'i ⇏ h', answer: 'i', }),
	makeQuestion({ text: 'h ⇏ i', answer: 'h', }),
	makeQuestion({ text: 'h ⇏ h', answer: 'h', }),
	
	makeQuestion({ text: 'i ⇐ i', answer: 'i', }),
	makeQuestion({ text: 'i ⇐ h', answer: 'i', }),
	makeQuestion({ text: 'h ⇐ i', answer: 'h', }),
	makeQuestion({ text: 'h ⇐ h', answer: 'i', }),
	
	makeQuestion({ text: 'i ⇍ i', answer: 'h', }),
	makeQuestion({ text: 'i ⇍ h', answer: 'h', }),
	makeQuestion({ text: 'h ⇍ i', answer: 'i', }),
	makeQuestion({ text: 'h ⇍ h', answer: 'h', }),
	
	makeQuestion({ text: 'i ⇔ i', answer: 'i', }),
	makeQuestion({ text: 'i ⇔ h', answer: 'h', }),
	makeQuestion({ text: 'h ⇔ i', answer: 'h', }),
	makeQuestion({ text: 'h ⇔ h', answer: 'i', }),
	
	makeQuestion({ text: 'i ∧ i', answer: 'i', }),
	makeQuestion({ text: 'i ∧ h', answer: 'h', }),
	makeQuestion({ text: 'h ∧ i', answer: 'h', }),
	makeQuestion({ text: 'h ∧ h', answer: 'h', }),
	
	makeQuestion({ text: 'i ∨ i', answer: 'i', }),
	makeQuestion({ text: 'i ∨ h', answer: 'i', }),
	makeQuestion({ text: 'h ∨ i', answer: 'i', }),
	makeQuestion({ text: 'h ∨ h', answer: 'h', }),
	
	makeQuestion({ text: 'i ⊕ i', answer: 'h', }),
	makeQuestion({ text: 'i ⊕ h', answer: 'i', }),
	makeQuestion({ text: 'h ⊕ i', answer: 'i', }),
	makeQuestion({ text: 'h ⊕ h', answer: 'h', }),
	
	makeQuestion({ text: 'i | i', answer: 'h', }),
	makeQuestion({ text: 'i | h', answer: 'i', }),
	makeQuestion({ text: 'h | i', answer: 'i', }),
	makeQuestion({ text: 'h | h', answer: 'i', }),
	
	makeQuestion({ text: 'i ⊽ i', answer: 'h', }),
	makeQuestion({ text: 'i ⊽ h', answer: 'h', }),
	makeQuestion({ text: 'h ⊽ i', answer: 'h', }),
	makeQuestion({ text: 'h ⊽ h', answer: 'i', }),
	
	makeQuestion({ text: '¬i', answer: 'h', }),
	makeQuestion({ text: '¬h', answer: 'i', }),
]
