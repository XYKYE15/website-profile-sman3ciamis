
declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      once?: boolean;
      offset?: number;
      delay?: number;
      easing?: string;
      mirror?: boolean;
    }) => void;
    refresh: () => void;
    refreshHard: () => void;
    remove: () => void;
  };

  export default AOS;
}
