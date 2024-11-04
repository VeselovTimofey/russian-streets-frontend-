export interface IMember {
  id: string,
  name: string,
  description: string,
  role: string,
  imageUrl: string,
}

export interface IPartner {
  name: string,
  imageUrl: string,
}

export interface IAboutUs {
  ourMember: IMember[],
  partners: IPartner[],
  videoUrl: string,
}

export interface IAboutUsState {
  aboutUs: IAboutUs,
  isLoaded: boolean,
  isLoading: boolean,
  error: string | undefined,
}