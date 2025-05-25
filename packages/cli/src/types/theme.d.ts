declare module 'jsonresume-theme-mock' {
  export interface Theme {
    render: (resumeData: unknown) => string;
  }
  const theme: Theme;
  export default theme;
}

declare module '@resuml/theme-mock-native' {
  export interface Theme {
    render: (resumeData: unknown, options: unknown) => string;
  }
  const theme: Theme;
  export default theme;
}
