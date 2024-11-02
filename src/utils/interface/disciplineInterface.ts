export interface IDiscipline {
  name: string,
  imagesUrl: string[],
  description: string,
  rules: string,
  isfull?: boolean,
  isCurrentDiscipline?: boolean,
}

export interface IDisciplineState {
  disciplines: IDiscipline[],
  currentDiscipline: IDiscipline,
  isLoading: boolean,
  error: string | undefined,
}

export interface IDisciplinesButtons {
  name: string,
  to: string,
}