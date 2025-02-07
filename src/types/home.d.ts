export interface Root {
    header: Header;
    banner: Banner[];
    about: About[];
    service: Service[];
  }
  
  export interface Header {
    logo: string;
    menu: Menu[];
  }
  
  export interface Menu {
    label: string;
    link: string;
  }
  
  export interface BannerType {
    length: number;
    image: string;
    title: string;
    subtitle: string;
    button: string;
    href: string;
  }
  
  export interface About {
    label: string;
    description: string;
  }
  
  export interface Service {
    title: string;
    text: string;
  }
  
  export interface Home {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface HomeState {
    status: 'idle' | 'loading' | 'error';
    entries: Home[];
    entry: Home | null;
  }
  