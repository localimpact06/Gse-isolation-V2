'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Question = {
  id: string
  question: string
  options: { label: string; score: number }[]
}

const questions: Question[] = [
  {
    id: 'annee',
    question: 'De quelle année date votre logement ?',
    options: [
      { label: 'Avant 1975', score: 4 },
      { label: 'Entre 1975 et 2000', score: 3 },
      { label: 'Entre 2000 et 2012', score: 2 },
      { label: 'Après 2012', score: 1 },
    ],
  },
  {
    id: 'chauffage',
    question: 'Quel est votre système de chauffage actuel ?',
    options: [
      { label: 'Fioul ou électrique ancien', score: 4 },
      { label: 'Gaz (chaudière classique)', score: 3 },
      { label: 'Pompe à chaleur ou gaz récent', score: 1 },
      { label: 'Je ne sais pas', score: 2 },
    ],
  },
  {
    id: 'combles',
    question: 'Vos combles sont-ils isolés ?',
    options: [
      { label: 'Non, pas du tout', score: 4 },
      { label: 'Partiellement / ancienne isolation', score: 3 },
      { label: 'Oui, isolation récente', score: 1 },
      { label: 'Je ne sais pas', score: 2 },
    ],
  },
  {
    id: 'facture',
    question: 'Comment trouvez-vous votre facture énergétique ?',
    options: [
      { label: 'Très élevée, ça m\'inquiète', score: 4 },
      { label: 'Plutôt élevée', score: 3 },
      { label: 'Raisonnable', score: 1 },
      { label: 'Je n\'ai pas vraiment regardé', score: 2 },
    ],
  },
]

function getResult(totalScore: number) {
  if (totalScore >= 13) {
    return {
      titre: 'Potentiel d\'économies très élevé',
      pourcentage: '60 à 80%',
      texte: 'Votre logement présente un fort potentiel d\'amélioration. Une rénovation globale (isolation + chauffage) pourrait considérablement réduire vos factures, avec des aides de l\'État pouvant couvrir une grande partie des travaux.',
    }
  }
  if (totalScore >= 9) {
    return {
      titre: 'Bon potentiel d\'économies',
      pourcentage: '30 à 50%',
      texte: 'Quelques travaux ciblés, comme l\'isolation des combles ou des murs, pourraient déjà faire une vraie différence sur votre facture. Un audit permet de préciser où concentrer votre budget.',
    }
  }
  return {
    titre: 'Potentiel d\'optimisation',
    pourcentage: '10 à 25%',
      texte: 'Votre logement est plutôt bien parti, mais quelques ajustements ciblés restent souvent rentables. Un audit permet de vérifier s\'il reste des économies faciles à aller chercher.',
  }
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<number[]>([])

  function answer(score: number) {
    const next = [...scores, score]
    setScores(next)
    setStep(step + 1)
  }

  function restart() {
    setScores([])
    setStep(0)
  }

  const isFinished = step >= questions.length
  const total = scores.reduce((a, b) => a + b, 0)
  const result = isFinished ? getResult(total) : null

  return (
    <div className="max-w-xl mx-auto bg-paper rounded-2xl p-8 md:p-10">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] uppercase tracking-[0.12em] text-ink/40">Question {step + 1} / {questions.length}</span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full ${i <= step ? 'bg-green' : 'bg-ink/10'}`} />
                ))}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-7 tracking-tightest">{questions[step].question}</h3>
            <div className="space-y-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(opt.score)}
                  className="w-full text-left bg-white hover:bg-ink hover:text-white transition-colors border border-ink/10 rounded-xl px-5 py-4 text-[15px] font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
            <span className="text-green text-[12px] uppercase tracking-[0.2em] block mb-3">Résultat</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tightest mb-3">{result!.titre}</h3>
            <div className="text-5xl font-extrabold text-green mb-5">{result!.pourcentage}</div>
            <p className="text-[15px] text-ink/60 leading-relaxed mb-8 max-w-md mx-auto">{result!.texte}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 rounded-full">
                Demander mon audit
              </a>
              <button onClick={restart} className="border border-ink/15 hover:border-ink/40 transition-colors text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 rounded-full">
                Refaire le quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
