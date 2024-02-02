import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HandPalm, Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContexts'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'A tarefa precisa ter pelo menos 1 caractere'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo deve durar entre 1 e 60 minutos')
    .max(60, 'O ciclo deve durar entre 1 e 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptActiveCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptActiveCycle} type="button">
            <HandPalm size={24}></HandPalm>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitButtonDisabled} type="submit">
            <Play size={24}></Play>
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
