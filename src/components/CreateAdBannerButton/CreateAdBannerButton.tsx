import { ReactNode } from "react";

interface CreateAdBannerButtonProps {
    icon?: ReactNode;
    title: string;
}

export function CreateAdBannerButton(props: CreateAdBannerButtonProps){
    return (
        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
         {props.icon}   
        {props.title}
      </button>
    )
}