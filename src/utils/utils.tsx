import { Facebook, Github, Instagram, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";

export const getPlatformIconByName = (platformName: string): React.ReactNode | null => {
    switch (platformName) {
        case 'facebook': {
            return <Facebook size={24} className='min-w-fit' />;
        }
        case 'github': {
            return <Github size={24} className='min-w-fit' />;
        }
        case 'instagram': {
            return <Instagram size={24} className='min-w-fit' />;
        }
        case 'linkedin': {
            return <Linkedin size={24} className='min-w-fit' />;
        }
        case 'threads': {
            return <MessageCircle size={24} className='min-w-fit' />;
        }
        case 'twitter': {
            return <Twitter size={24} className='min-w-fit' />;
        } 
        case 'youtube': {
            return <Youtube size={24} className='min-w-fit' />;
        }
        case 'x': {
            return <Twitter size={24} className='min-w-fit' />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}