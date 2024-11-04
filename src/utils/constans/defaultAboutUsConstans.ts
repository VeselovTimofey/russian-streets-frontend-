import { type IAboutUs } from "../interface/aboutUsInterface";

const DEFAULT_ABOUT_US: IAboutUs = {
  ourMember: [
    {
      id: '-1',
      name: '',
      description: '',
      role: '',
      imageUrl: '',
    },
  ],
  partners: [
    {
      name: '',
      imageUrl: '',
    },
  ],
  videoUrl: '',
}

export { DEFAULT_ABOUT_US };