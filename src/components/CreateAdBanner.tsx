import { MagnifyingGlassPlus } from 'phosphor-react';
import { CreateAdBannerButton } from './CreateAdBannerButton/CreateAdBannerButton';

interface CreateAdBannerProps {
    title: string;
    subTitle: string;

}

export function CreateAdBanner(props: CreateAdBannerProps) {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 justify-between flex items-center">
          <div>
            <strong className="text-2xl text-white font-black block">{props.title}</strong>
            <span className="text-zinc-400 ">{props.subTitle}</span>
          </div>
          <CreateAdBannerButton title='Publicar anúncio' icon={<MagnifyingGlassPlus size={24} />}/>
        </div>
      </div>
    )
}