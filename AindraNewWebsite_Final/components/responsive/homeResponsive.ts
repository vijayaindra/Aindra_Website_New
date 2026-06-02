import { useEffect, useState } from 'react';

export const HOME_DESKTOP_MIN_WIDTH = 1024;
export const HOME_SHORT_DESKTOP_MAX_HEIGHT = 800;
export const HOME_VERY_SHORT_DESKTOP_MAX_HEIGHT = 720;
export const HOME_ULTRA_SHORT_DESKTOP_MAX_HEIGHT = 680;

export type HomeDesktopTier = 'normal' | 'short' | 'veryShort' | 'ultraShort';

export interface HomeResponsiveState {
  width: number;
  height: number;
  isDesktop: boolean;
  isShortDesktop: boolean;
  isVeryShortDesktop: boolean;
  isUltraShortDesktop: boolean;
  desktopTier: HomeDesktopTier;
}

type ResponsivePreset<T> = {
  normal: T;
  short: T;
  veryShort?: T;
  ultraShort?: T;
};

export function resolveHomeResponsiveValue<T>(
  responsive: HomeResponsiveState,
  preset: ResponsivePreset<T>
): T {
  if (responsive.isUltraShortDesktop && preset.ultraShort !== undefined) {
    return preset.ultraShort;
  }

  if (responsive.isVeryShortDesktop && preset.veryShort !== undefined) {
    return preset.veryShort;
  }

  if (responsive.isShortDesktop) {
    if (responsive.isVeryShortDesktop && preset.veryShort !== undefined) {
      return preset.veryShort;
    }
    return preset.short;
  }

  return preset.normal;
}

function getViewport() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useHomeResponsive(): HomeResponsiveState {
  const [viewport, setViewport] = useState(getViewport);

  useEffect(() => {
    const updateViewport = () => setViewport(getViewport());

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const isDesktop = viewport.width >= HOME_DESKTOP_MIN_WIDTH;
  const isShortDesktop = isDesktop && viewport.height <= HOME_SHORT_DESKTOP_MAX_HEIGHT;
  const isVeryShortDesktop = isDesktop && viewport.height <= HOME_VERY_SHORT_DESKTOP_MAX_HEIGHT;
  const isUltraShortDesktop = isDesktop && viewport.height <= HOME_ULTRA_SHORT_DESKTOP_MAX_HEIGHT;

  let desktopTier: HomeDesktopTier = 'normal';
  if (isUltraShortDesktop) {
    desktopTier = 'ultraShort';
  } else if (isVeryShortDesktop) {
    desktopTier = 'veryShort';
  } else if (isShortDesktop) {
    desktopTier = 'short';
  }

  return {
    width: viewport.width,
    height: viewport.height,
    isDesktop,
    isShortDesktop,
    isVeryShortDesktop,
    isUltraShortDesktop,
    desktopTier,
  };
}

export const homeResponsiveConfig = {
  hero: {
    sectionClass: {
      normal:
        'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[clamp(420px,60vh,760px)] py-4 md:py-8 max-[900px]:min-h-[520px] max-[900px]:py-3',
      short:
        'grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative min-h-[500px] py-2 max-[900px]:min-h-[520px] max-[900px]:py-3',
      veryShort:
        'grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center relative min-h-[460px] py-1.5 max-[900px]:min-h-[520px] max-[900px]:py-3',
      ultraShort:
        'grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative min-h-[430px] py-1 max-[900px]:min-h-[520px] max-[900px]:py-3',
    },
    headingClass: {
      normal: 'text-[clamp(2rem,6vw,4.1rem)] font-bold leading-[1.1] tracking-tight text-[#111d3a] text-balance max-w-4xl',
      short: 'text-[clamp(2.5rem,4.7vw,3.75rem)] font-bold leading-[1.02] tracking-tight text-[#111d3a] text-balance max-w-[38rem]',
      veryShort: 'text-[clamp(2.25rem,4.35vw,3.35rem)] font-bold leading-[1.02] tracking-tight text-[#111d3a] text-balance max-w-[34rem]',
      ultraShort: 'text-[clamp(2.05rem,3.95vw,3rem)] font-bold leading-[1.02] tracking-tight text-[#111d3a] text-balance max-w-[32rem]',
    },
    bodyClass: {
      normal: 'mt-6 md:mt-8 text-[clamp(1rem,2.3vw,2rem)] text-[#6f8098] max-w-3xl leading-relaxed',
      short: 'mt-4 text-[clamp(0.95rem,1.7vw,1.35rem)] text-[#6f8098] max-w-[30rem] leading-relaxed',
      veryShort: 'mt-3 text-[clamp(0.92rem,1.55vw,1.2rem)] text-[#6f8098] max-w-[28rem] leading-relaxed',
      ultraShort: 'mt-3 text-[clamp(0.88rem,1.45vw,1.08rem)] text-[#6f8098] max-w-[26rem] leading-relaxed',
    },
    imageWrapClass: {
      normal:
        'relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[560px] max-[900px]:max-w-[460px] aspect-square flex items-center justify-center',
      short:
        'relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[450px] max-[900px]:max-w-[460px] aspect-square flex items-center justify-center',
      veryShort:
        'relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[400px] max-[900px]:max-w-[460px] aspect-square flex items-center justify-center',
      ultraShort:
        'relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[360px] max-[900px]:max-w-[460px] aspect-square flex items-center justify-center',
    },
    missionWrapClass: {
      normal: 'mt-6 md:mt-10 lg:max-w-[420px] text-center lg:text-right z-20',
      short: 'mt-4 lg:max-w-[320px] text-center lg:text-right z-20',
      veryShort: 'mt-3 lg:max-w-[280px] text-center lg:text-right z-20',
      ultraShort: 'mt-2.5 lg:max-w-[260px] text-center lg:text-right z-20',
    },
    missionTextClass: {
      normal: 'text-base sm:text-lg md:text-xl lg:text-2xl text-[#7b8ca2] font-light leading-snug',
      short: 'text-base sm:text-lg md:text-xl lg:text-[1.15rem] text-[#7b8ca2] font-light leading-snug',
      veryShort: 'text-base sm:text-lg md:text-xl lg:text-[1rem] text-[#7b8ca2] font-light leading-snug',
      ultraShort: 'text-base sm:text-lg md:text-lg lg:text-[0.95rem] text-[#7b8ca2] font-light leading-snug',
    },
  },
  whyChooseUs: {
    sceneHeightVh: {
      normal: 280,
      short: 262,
      veryShort: 246,
      ultraShort: 225,
    },
    stickyClass: {
      normal:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[700px] xl:min-h-[740px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      short:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-[610px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      veryShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1 min-h-[580px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      ultraShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-0 w-full flex items-start justify-start overflow-visible lg:overflow-hidden',
    },
    containerClass: {
      normal: 'pt-10 xl:pt-12',
      short: 'pt-1',
      veryShort: 'pt-1',
      ultraShort: 'pt-3',
    },
    headerGapClass: {
      normal: 'mb-8 md:mb-12',
      short: 'mb-5 md:mb-6',
      veryShort: 'mb-4 md:mb-5',
      ultraShort: 'mb-3',
    },
    contentGapClass: {
      normal: 'gap-8 lg:gap-16 xl:gap-24 items-center',
      short: 'gap-8 lg:gap-12 items-center',
      veryShort: 'gap-7 lg:gap-10 items-center',
      ultraShort: 'gap-4 lg:gap-6 items-start',
    },
    leftColumnClass: {
      normal: 'justify-center',
      short: 'justify-center',
      veryShort: 'justify-center',
      ultraShort: 'justify-start pt-2',
    },
    rightColumnClass: {
      normal: 'items-center justify-center lg:justify-end py-2 md:py-4',
      short: 'items-center justify-center lg:justify-end py-1.5',
      veryShort: 'items-center justify-center lg:justify-end py-1',
      ultraShort: 'items-start justify-center lg:justify-end pt-2',
    },
    headingClass: {
      normal: 'text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] max-w-4xl tracking-tight text-balance',
      short: 'text-[clamp(2.55rem,4vw,3.2rem)] leading-[1.03] max-w-[54rem] font-medium text-slate-900 tracking-tight text-balance',
      veryShort: 'text-[clamp(2.35rem,3.75vw,2.95rem)] leading-[1.03] max-w-[50rem] font-medium text-slate-900 tracking-tight text-balance',
      ultraShort: 'text-[clamp(1.95rem,3.2vw,2.45rem)] leading-[1.03] max-w-[48rem] font-medium text-slate-900 tracking-tight text-balance',
    },
    tabRowClass: {
      normal: 'py-4 md:py-6',
      short: 'py-4',
      veryShort: 'py-3.5',
      ultraShort: 'py-2',
    },
    tabLabelClass: {
      normal: 'text-xl md:text-2xl font-semibold transition-all duration-500',
      short: 'text-xl md:text-[1.7rem] font-semibold transition-all duration-500',
      veryShort: 'text-xl md:text-[1.55rem] font-semibold transition-all duration-500',
      ultraShort: 'text-lg md:text-[1.15rem] font-semibold transition-all duration-500',
    },
    visualClass: {
      normal: 'relative w-full max-w-[560px] xl:max-w-[580px] aspect-square bg-white overflow-hidden flex items-center justify-center max-h-[58vh]',
      short: 'relative w-full max-w-[600px] aspect-square bg-white overflow-hidden flex items-center justify-center max-h-[54vh]',
      veryShort: 'relative w-full max-w-[560px] aspect-square bg-white overflow-hidden flex items-center justify-center max-h-[50vh]',
      ultraShort: 'relative w-full max-w-[440px] aspect-square bg-white overflow-hidden flex items-center justify-center max-h-[36vh]',
    },
  },
  solutionsShowcase: {
    sceneHeightVh: {
      normal: 370,
      short: 324,
      veryShort: 306,
      ultraShort: 285,
    },
    stickyClass: {
      normal:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[700px] xl:min-h-[740px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      short:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-[610px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      veryShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1 min-h-[580px] w-full flex items-center justify-center overflow-visible lg:overflow-hidden',
      ultraShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-0 w-full flex items-start justify-start overflow-visible lg:overflow-hidden',
    },
    containerClass: {
      normal: '',
      short: 'pt-1',
      veryShort: 'pt-1',
      ultraShort: 'pt-4',
    },
    headerGapClass: {
      normal: 'mb-8 lg:mb-14',
      short: 'mb-6 lg:mb-8',
      veryShort: 'mb-5 lg:mb-6',
      ultraShort: 'mb-2.5',
    },
    contentGapClass: {
      normal: 'gap-10 items-center',
      short: 'gap-8 items-center',
      veryShort: 'gap-7 items-center',
      ultraShort: 'gap-4 items-start',
    },
    leftColumnClass: {
      normal: 'justify-center',
      short: 'justify-center',
      veryShort: 'justify-center',
      ultraShort: 'justify-start pt-2',
    },
    visualColumnClass: {
      normal: 'items-center',
      short: 'items-center',
      veryShort: 'items-center',
      ultraShort: 'items-start',
    },
    timelineHeightClass: {
      normal: 'h-[500px]',
      short: 'h-[430px]',
      veryShort: 'h-[390px]',
      ultraShort: 'h-[290px]',
    },
    timelineSpacingClass: {
      normal: 'space-y-5',
      short: 'space-y-4',
      veryShort: 'space-y-3.5',
      ultraShort: 'space-y-2',
    },
    solutionNameClass: {
      normal: 'text-xl md:text-2xl font-semibold tracking-tight transition-all duration-500',
      short: 'text-[1.28rem] font-semibold tracking-tight transition-all duration-500',
      veryShort: 'text-[1.16rem] font-semibold tracking-tight transition-all duration-500',
      ultraShort: 'text-[0.95rem] font-semibold tracking-tight transition-all duration-500',
    },
    descriptionMinHeightClass: {
      normal: 'min-h-[220px]',
      short: 'min-h-[170px]',
      veryShort: 'min-h-[150px]',
      ultraShort: 'min-h-[104px]',
    },
    descriptionTextClass: {
      normal: 'text-base lg:text-lg text-slate-500 leading-relaxed font-light max-w-md',
      short: 'text-[15px] text-slate-500 leading-[1.6] font-light max-w-md',
      veryShort: 'text-[14px] text-slate-500 leading-[1.58] font-light max-w-md',
      ultraShort: 'text-[11px] text-slate-500 leading-relaxed font-light max-w-md',
    },
    visualClass: {
      normal: 'relative lg:translate-x-10 xl:translate-x-24 2xl:translate-x-32 aspect-[11/6] max-h-[50vh]',
      short: 'relative lg:translate-x-8 xl:translate-x-20 2xl:translate-x-28 aspect-[11/6] max-h-[52vh]',
      veryShort: 'relative lg:translate-x-6 xl:translate-x-16 2xl:translate-x-22 aspect-[11/6] max-h-[48vh]',
      ultraShort: 'relative lg:translate-x-4 xl:translate-x-10 aspect-[11/6] max-h-[35vh]',
    },
    headingClass: {
      normal: 'text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] max-w-4xl',
      short: 'text-[clamp(2.55rem,4vw,3.2rem)] max-w-[56rem] leading-[1.03] font-medium text-slate-900',
      veryShort: 'text-[clamp(2.3rem,3.75vw,2.95rem)] max-w-[52rem] leading-[1.03] font-medium text-slate-900',
      ultraShort: 'text-[clamp(1.85rem,3.1vw,2.45rem)] max-w-[46rem] leading-[1.03] font-medium text-slate-900',
    },
  },
  productsShowcase: {
    sceneHeightVh: {
      normal: 400,
      short: 345,
      veryShort: 320,
      ultraShort: 300,
    },
    stickyClass: {
      normal:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[620px] xl:min-h-[660px] 2xl:min-h-[740px] w-full overflow-visible lg:overflow-hidden flex flex-col bg-white isolate',
      short:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-2.5 min-h-0 w-full overflow-visible lg:overflow-hidden flex flex-col bg-white isolate',
      veryShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-2 min-h-0 w-full overflow-visible lg:overflow-hidden flex flex-col bg-white isolate',
      ultraShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-0 w-full overflow-visible lg:overflow-hidden flex flex-col bg-white isolate',
    },
    containerClass: {
      normal: '',
      short: 'pt-6',
      veryShort: 'pt-5',
      ultraShort: 'pt-4',
    },
    headerGapClass: {
      normal: 'mb-5 xl:mb-7 2xl:mb-14',
      short: 'mb-4',
      veryShort: 'mb-3',
      ultraShort: 'mb-1.5',
    },
    headingClass: {
      normal: 'text-3xl md:text-5xl xl:text-[56px] 2xl:text-6xl font-medium text-slate-900 leading-[1.08] max-w-4xl',
      short: 'text-[clamp(2.2rem,3.65vw,3rem)] max-w-[56rem] font-medium text-slate-900 leading-[1.04]',
      veryShort: 'text-[clamp(2rem,3.35vw,2.65rem)] max-w-[50rem] font-medium text-slate-900 leading-[1.04]',
      ultraShort: 'text-[clamp(1.85rem,3vw,2.4rem)] max-w-[46rem] font-medium text-slate-900 leading-[1.04]',
    },
    contentGapClass: {
      normal: 'gap-4 xl:gap-6 2xl:gap-10 items-center',
      short: 'gap-5 xl:gap-6 items-start',
      veryShort: 'gap-4 xl:gap-5 items-start',
      ultraShort: 'gap-3 items-start',
    },
    leftColumnClass: {
      normal: 'items-center',
      short: 'items-start pt-10',
      veryShort: 'items-start pt-8',
      ultraShort: 'items-start pt-5',
    },
    visualColumnClass: {
      normal: 'items-center',
      short: 'items-start pt-6',
      veryShort: 'items-start pt-5',
      ultraShort: 'items-start pt-2',
    },
    visualStageClass: {
      normal: 'relative h-full w-full',
      short: 'grid h-full w-full place-items-start',
      veryShort: 'grid h-full w-full place-items-start',
      ultraShort: 'grid h-full w-full place-items-start',
    },
    visualLayerClass: {
      normal: 'absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out',
      short: 'col-start-1 row-start-1 flex items-start justify-center pointer-events-none transition-all duration-300 ease-out',
      veryShort: 'col-start-1 row-start-1 flex items-start justify-center pointer-events-none transition-all duration-300 ease-out',
      ultraShort: 'col-start-1 row-start-1 flex items-start justify-center pointer-events-none transition-all duration-300 ease-out',
    },
    rightColumnClass: {
      normal: 'items-center',
      short: 'items-start pt-10',
      veryShort: 'items-start pt-8',
      ultraShort: 'items-start pt-5',
    },
    rightPanelsHostClass: {
      normal: 'relative w-full h-full',
      short: 'grid w-full',
      veryShort: 'grid w-full',
      ultraShort: 'grid w-full',
    },
    rightPanelClass: {
      normal: 'absolute inset-x-0 xl:left-2 2xl:left-8',
      short: 'col-start-1 row-start-1 inset-auto xl:left-0 2xl:left-0',
      veryShort: 'col-start-1 row-start-1 inset-auto xl:left-0 2xl:left-0',
      ultraShort: 'col-start-1 row-start-1 inset-auto xl:left-0 2xl:left-0',
    },
    stepperItemHeight: {
      normal: 80,
      short: 70,
      veryShort: 68,
      ultraShort: 58,
    },
    stepperIdClass: {
      normal: 'text-lg font-black tracking-tighter mb-0.5 transition-colors duration-500',
      short: 'text-[15px] font-black tracking-tighter mb-0.5 transition-colors duration-500',
      veryShort: 'text-[14px] font-black tracking-tighter mb-0.5 transition-colors duration-500',
      ultraShort: 'text-[13px] font-black tracking-tighter mb-0.5 transition-colors duration-500',
    },
    stepperLabelClass: {
      normal: 'text-sm lg:text-[15px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500',
      short: 'text-[13px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500',
      veryShort: 'text-[12px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500',
      ultraShort: 'text-[11px] font-black uppercase tracking-tight block leading-[1.2] transition-colors duration-500',
    },
    imageShellClass: {
      normal: 'relative w-full max-w-[700px] xl:max-w-[760px] 2xl:max-w-[860px]',
      short: 'relative w-full max-w-[700px]',
      veryShort: 'relative w-full max-w-[680px]',
      ultraShort: 'relative w-full max-w-[580px]',
    },
    imageClass: {
      normal: 'relative z-10 w-full h-auto max-h-[40vh] xl:max-h-[46vh] 2xl:max-h-[56vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]',
      short: 'relative z-10 w-full h-auto max-h-[44vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]',
      veryShort: 'relative z-10 w-full h-auto max-h-[43vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]',
      ultraShort: 'relative z-10 w-full h-auto max-h-[36vh] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]',
    },
    titleClass: {
      normal: 'text-[50px] xl:text-[56px] 2xl:text-6xl font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-1.5 xl:pb-3',
      short: 'text-[42px] font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-1.5',
      veryShort: 'text-[42px] font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-1.5',
      ultraShort: 'text-[33px] font-bold text-slate-900 tracking-tighter border-b-[4px] border-[#00a3ff]/20 inline-block pb-1',
    },
    descriptionClass: {
      normal: 'text-base xl:text-lg 2xl:text-xl text-slate-500 leading-[1.35] font-light max-w-md',
      short: 'text-[15px] text-slate-500 leading-[1.35] font-light max-w-md',
      veryShort: 'text-[15px] text-slate-500 leading-[1.35] font-light max-w-md',
      ultraShort: 'text-[13px] text-slate-500 leading-[1.35] font-light max-w-md',
    },
    ctaClass: {
      normal: 'group inline-flex items-center space-x-4 px-7 xl:px-9 2xl:px-12 py-3 xl:py-3.5 2xl:py-4 bg-slate-900 text-white rounded-full font-bold text-[11px] xl:text-[12px] 2xl:text-[13px] tracking-widest uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95',
      short: 'group inline-flex items-center space-x-4 px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95',
      veryShort: 'group inline-flex items-center space-x-4 px-5 py-2 bg-slate-900 text-white rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95',
      ultraShort: 'group inline-flex items-center space-x-3 px-5 py-2 bg-slate-900 text-white rounded-full font-bold text-[9px] tracking-[0.18em] uppercase hover:bg-[#00a3ff] transition-all shadow-xl shadow-slate-200 active:scale-95',
    },
    rightPanelSpacingClass: {
      normal: 'space-y-4 xl:space-y-5 2xl:space-y-9',
      short: 'space-y-3',
      veryShort: 'space-y-2.5',
      ultraShort: 'space-y-2',
    },
  },
  unifiedWorkflow: {
    sceneHeightVh: {
      normal: 480,
      short: 380,
      veryShort: 360,
      ultraShort: 340,
    },
    stickyClass: {
      normal:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[700px] xl:min-h-[740px] w-full flex flex-col items-center justify-center overflow-visible lg:overflow-hidden',
      short:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-2.5 min-h-0 w-full flex flex-col items-start justify-start overflow-visible lg:overflow-hidden',
      veryShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-2 min-h-0 w-full flex flex-col items-start justify-start overflow-visible lg:overflow-hidden',
      ultraShort:
        'top-20 sm:top-24 h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] py-1.5 min-h-0 w-full flex flex-col items-start justify-start overflow-visible lg:overflow-hidden',
    },
    introClass: {
      normal: 'absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none transition-transform duration-75 ease-out',
      short: 'absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none transition-transform duration-75 ease-out',
      veryShort: 'absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none transition-transform duration-75 ease-out',
      ultraShort: 'absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none transition-transform duration-75 ease-out',
    },
    introTextClass: {
      normal: 'max-w-5xl text-center',
      short: 'max-w-[60rem] text-center',
      veryShort: 'max-w-[54rem] text-center',
      ultraShort: 'max-w-[50rem] text-center',
    },
    introHeadingClass: {
      normal: 'text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-slate-900 text-balance px-4',
      short: 'text-[clamp(1.9rem,3.25vw,2.55rem)] leading-[1.08] font-medium text-slate-900 text-balance px-4',
      veryShort: 'text-[clamp(1.7rem,2.95vw,2.25rem)] leading-[1.08] font-medium text-slate-900 text-balance px-4',
      ultraShort: 'text-[clamp(1.5rem,2.7vw,2rem)] leading-[1.08] font-medium text-slate-900 text-balance px-4',
    },
    stepperTopClass: {
      normal: 'top-24 md:top-32',
      short: 'top-10',
      veryShort: 'top-8',
      ultraShort: 'top-7',
    },
    slidesViewportClass: {
      normal: 'relative w-full max-w-6xl px-6 md:px-12 h-[80vh] flex flex-col justify-center',
      short: 'relative w-full max-w-6xl px-6 md:px-12 h-[44vh] scale-[0.76] origin-top mt-6 flex flex-col justify-center',
      veryShort: 'relative w-full max-w-6xl px-6 md:px-12 h-[40vh] scale-[0.72] origin-top mt-4 flex flex-col justify-center',
      ultraShort: 'relative w-full max-w-6xl px-6 md:px-12 h-[36vh] scale-[0.68] origin-top mt-3 flex flex-col justify-center',
    },
    stepIdClass: {
      normal: 'text-7xl md:text-[140px] font-bold text-[#00a3ff] leading-[0.8] tracking-tight mb-2 opacity-90 select-none',
      short: 'text-7xl md:text-[84px] font-bold text-[#00a3ff] leading-[0.8] tracking-tight mb-2 opacity-90 select-none',
      veryShort: 'text-7xl md:text-[72px] font-bold text-[#00a3ff] leading-[0.8] tracking-tight mb-2 opacity-90 select-none',
      ultraShort: 'text-6xl md:text-[64px] font-bold text-[#00a3ff] leading-[0.8] tracking-tight mb-2 opacity-90 select-none',
    },
    stepTitleClass: {
      normal: 'text-xl md:text-4xl font-medium text-slate-900 mb-4 md:mb-6',
      short: 'text-xl md:text-3xl font-medium text-slate-900 mb-3',
      veryShort: 'text-xl md:text-[1.7rem] font-medium text-slate-900 mb-2.5',
      ultraShort: 'text-lg md:text-[1.5rem] font-medium text-slate-900 mb-2',
    },
  },
} as const;
