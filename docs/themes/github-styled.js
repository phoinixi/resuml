var Li=Object.create;var Le=Object.defineProperty;var Ei=Object.getOwnPropertyDescriptor;var Mi=Object.getOwnPropertyNames;var Ai=Object.getPrototypeOf,Oi=Object.prototype.hasOwnProperty;var pt=(t,e)=>()=>(t&&(e=t(t=0)),e);var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),fr=(t,e)=>{for(var r in e)Le(t,r,{get:e[r],enumerable:!0})},dr=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Mi(e))!Oi.call(t,i)&&i!==r&&Le(t,i,{get:()=>e[i],enumerable:!(n=Ei(e,i))||n.enumerable});return t};var Ii=(t,e,r)=>(r=t!=null?Li(Ai(t)):{},dr(e||!t||!t.__esModule?Le(r,"default",{value:t,enumerable:!0}):r,t)),pr=t=>dr(Le({},"__esModule",{value:!0}),t);var f=pt(()=>{});var Pr={};fr(Pr,{createReadStream:()=>wr,createWriteStream:()=>Cr,default:()=>Ni,existsSync:()=>br,lstatSync:()=>yr,mkdirSync:()=>_r,readFileSync:()=>mr,readdirSync:()=>vr,rmdirSync:()=>Sr,statSync:()=>vt,unlinkSync:()=>xr,writeFileSync:()=>kr});function mt(t){return String(t).replace(/[\\]+/g,"/").replace(/^\/+/,"")}function gr(t){var e=mt(t);if(Ee[e]!==void 0)return Ee[e];for(var r=Object.keys(Ee),n=0;n<r.length;n++)if(e.endsWith("/"+r[n])||e===r[n])return Ee[r[n]]}function gt(t){var e=mt(t);if(Me[e]!==void 0)return Me[e];for(var r=Object.keys(Me),n=0;n<r.length;n++)if(e.endsWith("/"+r[n])||e===r[n])return Me[r[n]]}var Ee,Me,mr,vr,br,kr,_r,vt,yr,xr,Sr,wr,Cr,Ni,Lr=pt(()=>{"use strict";f();Ee={"package.json":`{
  "name": "jsonresume-theme-github-styled",
  "version": "1.4.0",
  "description": "A GitHub-styled JSON Resume theme with dark/light mode support and mobile responsiveness",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [
    "jsonresume",
    "jsonresume-theme",
    "theme",
    "github",
    "dark-mode",
    "responsive",
    "resume",
    "cv"
  ],
  "author": "Roman Pinchuk",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/roman-pinchuk/jsonresume-theme-github-styled.git"
  },
  "bugs": {
    "url": "https://github.com/roman-pinchuk/jsonresume-theme-github-styled/issues"
  },
  "homepage": "https://github.com/roman-pinchuk/jsonresume-theme-github-styled#readme",
  "files": [
    "index.js",
    "resume.hbs",
    "README.md",
    "LICENSE"
  ],
  "dependencies": {
    "handlebars": "^4.7.8"
  }
}
`,"resume.hbs":`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{basics.name}}{{#if basics.label}} &ndash; {{basics.label}}{{/if}}</title>
  {{#if basics.image}}
  <link rel="icon" type="image/png" href="{{basics.image}}">
  {{/if}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com" data-cfasync="false"><\/script>
  <script data-cfasync="false">
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            github: {
              canvas: {
                default: '#ffffff',
                subtle: '#f6f8fa',
                dark: '#22272e',
                'dark-subtle': '#2d333b'
              },
              border: {
                default: '#d0d7de',
                dark: '#444c56'
              },
              fg: {
                default: '#24292f',
                muted: '#57606a',
                dark: '#e6edf3',
                'dark-muted': '#9198a1'
              },
              accent: {
                emphasis: '#0969da',
                dark: '#539bf5'
              }
            }
          }
        }
      }
    }
  <\/script>
  <script data-cfasync="false">
    // Apply theme before body renders to prevent flicker
    // Must run before Tailwind processes the page
    (function() {
      const savedTheme = localStorage.getItem('theme') || 'system';
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        if (systemTheme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }
    })();
  <\/script>
  <style>
    /* Prevent flash of unstyled content */
    html {
      background-color: #ffffff;
      color: #24292f;
    }

    html.dark {
      background-color: rgb(33, 40, 48);
      color: #e6edf3;
    }

    body {
      min-height: 100vh;
      background-color: inherit;
    }

    /* Lighter text colors for dark mode */
    .dark .text-github-fg-dark {
      color: #e6edf3 !important;
    }

    .dark .text-github-fg-dark-muted {
      color: #adbac7 !important;
    }

    .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6 {
      color: #e6edf3 !important;
    }

    .dark .glass-tile {
      color: #e6edf3;
    }

    .dark .glass-tile .text-github-fg-muted {
      color: #adbac7 !important;
    }

    /* GitHub Brand frosted glass tiles */
    .glass-tile {
      background: rgba(246, 248, 250, 0.7) !important;
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(208, 215, 222, 0.5) !important;
      border-radius: 8px !important;
      position: relative;
      z-index: 0;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
    }

    .dark .glass-tile {
      background: rgba(45, 51, 59, 0.7) !important;
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(68, 76, 86, 0.5) !important;
      position: relative;
      z-index: 0;
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.3),
        0 2px 4px -1px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
    }

    ::selection {
      background: rgba(9, 105, 218, 0.3);
    }

    .dark ::selection {
      background: rgba(83, 155, 245, 0.3);
    }

    .theme-switcher {
      background: rgba(246, 248, 250, 0.5);
      backdrop-filter: blur(12px) saturate(150%);
      -webkit-backdrop-filter: blur(12px) saturate(150%);
      border: 1px solid rgba(208, 215, 222, 0.3);
      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.5);
    }

    .dark .theme-switcher {
      background: rgba(45, 51, 59, 0.5);
      backdrop-filter: blur(12px) saturate(150%);
      -webkit-backdrop-filter: blur(12px) saturate(150%);
      border: 1px solid rgba(68, 76, 86, 0.3);
      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
    }

    .font-mono {
      font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
    }

    @media print {
      .no-print {
        display: none !important;
      }
      body {
        background: white !important;
      }
      .glass-tile {
        background: white !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
    }

    .theme-btn {
      color: #57606a;
      background: transparent;
      box-shadow: none;
      transform: translateY(0);
    }

    .theme-btn:hover {
      color: #24292f;
      background: rgba(0, 0, 0, 0.05);
      transform: translateY(-1px);
    }

    .dark .theme-btn {
      color: #9198a1;
    }

    .dark .theme-btn:hover {
      color: #e6edf3;
      background: rgba(255, 255, 255, 0.1);
    }

    .theme-btn[data-active="true"] {
      background: rgba(9, 105, 218, 0.1);
      color: #0969da;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(9, 105, 218, 0.2);
    }

    .dark .theme-btn[data-active="true"] {
      background: rgba(83, 155, 245, 0.15);
      color: #539bf5;
      box-shadow: 0 2px 8px rgba(83, 155, 245, 0.2);
    }

    .theme-btn:active {
      transform: translateY(0);
      background: rgba(9, 105, 218, 0.1);
    }

    .dark .theme-btn:active {
      background: rgba(83, 155, 245, 0.15);
    }
    @media (min-width: 1400px) {
      .theme-switcher-container {
        right: max(1rem, calc(50vw - 640px - 3rem)) !important;
      }
    }
  </style>
</head>
<body class="text-github-fg-default dark:text-github-fg-dark">

  <!-- Theme Toggle Button -->
  <div class="no-print fixed z-40 theme-switcher-container" style="top: max(1rem, env(safe-area-inset-top)); right: 1rem;">
    <div class="theme-switcher flex h-fit items-stretch justify-start overflow-hidden gap-1.5 rounded-2xl p-1" role="radiogroup" aria-label="Theme">
      <button type="button" id="theme-toggle-light" class="theme-btn inline-flex items-center gap-2 rounded-xl border-0 bg-transparent p-1.5 text-sm transition-all" title="Light theme" role="radio" aria-checked="false" data-active="false">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <button type="button" id="theme-toggle-system" class="theme-btn inline-flex items-center gap-2 rounded-xl border-0 bg-transparent p-1.5 text-sm transition-all" title="System theme" role="radio" aria-checked="false" data-active="false">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <button type="button" id="theme-toggle-dark" class="theme-btn inline-flex items-center gap-2 rounded-xl border-0 bg-transparent p-1.5 text-sm transition-all" title="Dark theme" role="radio" aria-checked="false" data-active="false">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
    </div>
  </div>

  <div class="max-w-5xl mx-auto px-4 py-8 md:py-12">

    <!-- Header / Basics Section -->
    {{#if basics}}
    <header class="mb-8 md:mb-12">
      <div class="flex flex-row items-center gap-4 md:gap-6 mb-4">
        {{#if basics.image}}
        <img src="{{basics.image}}" alt="{{basics.name}}" class="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-github-border-default dark:border-github-border-dark flex-shrink-0">
        {{/if}}
        <div class="flex-1 min-w-0">
          <h1 class="text-4xl font-bold mb-2">{{basics.name}}</h1>
          {{#if basics.label}}
          <p class="text-xl text-github-fg-muted dark:text-github-fg-dark-muted">{{basics.label}}</p>
          {{/if}}
        </div>
      </div>
      {{#if basics.summary}}
      <p class="text-base text-github-fg-muted dark:text-github-fg-dark-muted leading-relaxed mb-6">{{basics.summary}}</p>
      {{/if}}

      <!-- Contact Information -->
      <div class="flex flex-wrap gap-3 md:gap-4 text-sm">
        {{#if basics.email}}
        <a href="mailto:{{basics.email}}" class="flex items-center gap-2 text-github-accent-emphasis dark:text-github-accent-dark hover:underline">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          {{basics.email}}
        </a>
        {{/if}}
        {{#if basics.phone}}
        <a href="tel:{{basics.phone}}" class="flex items-center gap-2 text-github-accent-emphasis dark:text-github-accent-dark hover:underline">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          {{basics.phone}}
        </a>
        {{/if}}
        {{#if (or basics.url basics.website)}}
        <a href="{{#if basics.url}}{{basics.url}}{{else}}{{basics.website}}{{/if}}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-github-accent-emphasis dark:text-github-accent-dark hover:underline">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
          </svg>
          {{#if basics.url}}{{basics.url}}{{else}}{{basics.website}}{{/if}}
        </a>
        {{/if}}
        {{#if basics.location}}
        <span class="flex items-center gap-2 text-github-fg-muted dark:text-github-fg-dark-muted">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
          {{#if basics.location.city}}{{basics.location.city}}{{#if basics.location.region}}, {{/if}}{{/if}}{{#if basics.location.region}}{{basics.location.region}}{{/if}}{{#if basics.location.countryCode}} {{basics.location.countryCode}}{{/if}}
        </span>
        {{/if}}
      </div>

      <!-- Profiles -->
      {{#if basics.profiles}}
      <div class="flex flex-wrap gap-3 mt-4">
        {{#each basics.profiles}}
        <a href="{{url}}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-md hover:border-github-accent-emphasis dark:hover:border-github-accent-dark transition-colors" title="{{network}}{{#if username}}: {{username}}{{/if}}">
          <!-- GitHub Icon -->
          {{#if (eq network "GitHub")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {{/if}}
          <!-- LinkedIn Icon -->
          {{#if (eq network "LinkedIn")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {{/if}}
          <!-- Twitter/X Icon -->
          {{#if (eq network "Twitter")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {{/if}}
          {{#if (eq network "X")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {{/if}}
          <!-- Instagram Icon -->
          {{#if (eq network "Instagram")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          {{/if}}
          <!-- Facebook Icon -->
          {{#if (eq network "Facebook")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          {{/if}}
          <!-- YouTube Icon -->
          {{#if (eq network "YouTube")}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {{/if}}
          <!-- Default Icon for other networks -->
          {{#unless (or (eq network "GitHub") (eq network "LinkedIn") (eq network "Twitter") (eq network "X") (eq network "Instagram") (eq network "Facebook") (eq network "YouTube"))}}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          {{/unless}}
          <span>{{network}}</span>
        </a>
        {{/each}}
      </div>
      {{/if}}
    </header>
    {{/if}}

    <!-- Skills -->
    {{#if skills}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {{#each skills}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <h3 class="font-semibold mb-2">{{name}}</h3>
          {{#if keywords}}
          <div class="flex flex-wrap gap-2">
            {{#each keywords}}
            <span class="px-2 py-1 text-sm bg-github-canvas-default dark:bg-github-canvas-dark border border-github-border-default dark:border-github-border-dark rounded font-mono">{{this}}</span>
            {{/each}}
          </div>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Work Experience -->
    {{#if work}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Work Experience</h2>
      <div class="space-y-6">
        {{#each work}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4 md:p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <div>
              <h3 class="text-xl font-semibold">{{position}}</h3>
              <p class="text-github-fg-muted dark:text-github-fg-dark-muted">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{name}}</a>{{else}}{{name}}{{/if}}
                {{#if location}}
                <span class="inline-flex items-center gap-1 ml-2">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                  {{location}}
                </span>
                {{/if}}
              </p>
            </div>
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0 md:text-right">
              {{#if startDate}}{{formatDate startDate}}{{/if}}{{#if endDate}} \u2192 {{formatDate endDate}}{{else}}{{#if startDate}} \u2192 Present{{/if}}{{/if}}
            </div>
          </div>
          {{#if summary}}
          <p class="text-github-fg-muted dark:text-github-fg-dark-muted mb-3">{{summary}}</p>
          {{/if}}
          {{#if highlights}}
          <ul class="list-disc list-outside pl-5 space-y-1 text-github-fg-muted dark:text-github-fg-dark-muted">
            {{#each highlights}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Education -->
    {{#if education}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Education</h2>
      <div class="space-y-4">
        {{#each education}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4 md:p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="text-xl font-semibold">{{studyType}}{{#if area}} in {{area}}{{/if}}</h3>
              <p class="text-github-fg-muted dark:text-github-fg-dark-muted">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{institution}}</a>{{else}}{{institution}}{{/if}}
              </p>
              {{#if (or gpa score)}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1">GPA: {{#if gpa}}{{gpa}}{{else}}{{score}}{{/if}}</p>{{/if}}
            </div>
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">
              {{#if startDate}}{{formatDate startDate}}{{/if}}{{#if endDate}} \u2192 {{formatDate endDate}}{{/if}}
            </div>
          </div>
          {{#if courses}}
          <div class="mt-3">
            <p class="text-sm font-medium mb-2">Relevant Courses:</p>
            <div class="flex flex-wrap gap-2">
              {{#each courses}}
              <span class="px-2 py-1 text-xs bg-github-canvas-default dark:bg-github-canvas-dark border border-github-border-default dark:border-github-border-dark rounded">{{this}}</span>
              {{/each}}
            </div>
          </div>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Projects -->
    {{#if projects}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Projects</h2>
      <div class="space-y-4">
        {{#each projects}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4 md:p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 class="text-xl font-semibold">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{name}}</a>{{else}}{{name}}{{/if}}
              </h3>
              {{#if type}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted">{{type}}</p>{{/if}}
            </div>
            {{#if startDate}}
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">
              {{formatDate startDate}}{{#if endDate}} \u2192 {{formatDate endDate}}{{/if}}
            </div>
            {{/if}}
          </div>
          {{#if description}}
          <p class="text-github-fg-muted dark:text-github-fg-dark-muted mb-2">{{description}}</p>
          {{/if}}
          {{#if highlights}}
          <ul class="list-disc list-outside pl-5 space-y-1 text-sm text-github-fg-muted dark:text-github-fg-dark-muted mb-2">
            {{#each highlights}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
          {{#if keywords}}
          <div class="flex flex-wrap gap-2 mt-3">
            {{#each keywords}}
            <span class="px-2 py-1 text-xs bg-github-canvas-default dark:bg-github-canvas-dark border border-github-border-default dark:border-github-border-dark rounded">{{this}}</span>
            {{/each}}
          </div>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Awards -->
    {{#if awards}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Awards & Honors</h2>
      <div class="space-y-3">
        {{#each awards}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="font-semibold">{{title}}</h3>
              {{#if awarder}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted">{{awarder}}</p>{{/if}}
              {{#if summary}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1">{{summary}}</p>{{/if}}
            </div>
            {{#if date}}
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">{{formatDate date}}</div>
            {{/if}}
          </div>
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Certificates -->
    {{#if certificates}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Certificates</h2>
      <div class="space-y-3">
        {{#each certificates}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="font-semibold">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{name}}</a>{{else}}{{name}}{{/if}}
              </h3>
              {{#if issuer}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted">{{issuer}}</p>{{/if}}
            </div>
            {{#if date}}
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">{{formatDate date}}</div>
            {{/if}}
          </div>
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Publications -->
    {{#if publications}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Publications</h2>
      <div class="space-y-4">
        {{#each publications}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 class="font-semibold">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{name}}</a>{{else}}{{name}}{{/if}}
              </h3>
              {{#if publisher}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted">{{publisher}}</p>{{/if}}
              {{#if summary}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-2">{{summary}}</p>{{/if}}
            </div>
            {{#if releaseDate}}
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">{{formatDate releaseDate}}</div>
            {{/if}}
          </div>
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Volunteer -->
    {{#if volunteer}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Volunteer Experience</h2>
      <div class="space-y-4">
        {{#each volunteer}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4 md:p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 class="text-xl font-semibold">{{position}}</h3>
              <p class="text-github-fg-muted dark:text-github-fg-dark-muted">
                {{#if url}}<a href="{{url}}" target="_blank" rel="noopener noreferrer" class="text-github-accent-emphasis dark:text-github-accent-dark hover:underline">{{organization}}</a>{{else}}{{organization}}{{/if}}
              </p>
            </div>
            <div class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 md:mt-0">
              {{#if startDate}}{{formatDate startDate}}{{/if}}{{#if endDate}} \u2192 {{formatDate endDate}}{{/if}}
            </div>
          </div>
          {{#if summary}}
          <p class="text-github-fg-muted dark:text-github-fg-dark-muted mb-2">{{summary}}</p>
          {{/if}}
          {{#if highlights}}
          <ul class="list-disc list-outside pl-5 space-y-1 text-sm text-github-fg-muted dark:text-github-fg-dark-muted">
            {{#each highlights}}
            <li>{{this}}</li>
            {{/each}}
          </ul>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Languages -->
    {{#if languages}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Languages</h2>
      <div class="flex flex-wrap gap-3">
        {{#each languages}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg px-4 py-2">
          <span class="font-medium">{{language}}</span>
          {{#if fluency}}<span class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted"> - {{fluency}}</span>{{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- Interests -->
    {{#if interests}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">Interests</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {{#each interests}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <h3 class="font-semibold mb-2">{{name}}</h3>
          {{#if keywords}}
          <div class="flex flex-wrap gap-2">
            {{#each keywords}}
            <span class="px-2 py-1 text-sm text-github-fg-muted dark:text-github-fg-dark-muted">{{this}}</span>
            {{/each}}
          </div>
          {{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

    <!-- References -->
    {{#if references}}
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-github-border-default dark:border-github-border-dark">References</h2>
      <div class="space-y-3">
        {{#each references}}
        <div class="glass-tile bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-lg p-4">
          <h3 class="font-semibold">{{name}}</h3>
          {{#if reference}}<p class="text-sm text-github-fg-muted dark:text-github-fg-dark-muted mt-1 italic">"{{reference}}"</p>{{/if}}
        </div>
        {{/each}}
      </div>
    </section>
    {{/if}}

  </div>

  <script>
    const themeToggleLight = document.getElementById('theme-toggle-light');
    const themeToggleSystem = document.getElementById('theme-toggle-system');
    const themeToggleDark = document.getElementById('theme-toggle-dark');

    function applyTheme(theme) {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
      } else {
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }
      updateActiveButton(theme);
    }

    function updateActiveButton(theme) {
      themeToggleLight.setAttribute('data-active', 'false');
      themeToggleSystem.setAttribute('data-active', 'false');
      themeToggleDark.setAttribute('data-active', 'false');

      if (theme === 'light') {
        themeToggleLight.setAttribute('data-active', 'true');
      } else if (theme === 'system') {
        themeToggleSystem.setAttribute('data-active', 'true');
      } else {
        themeToggleDark.setAttribute('data-active', 'true');
      }
    }

    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);

    themeToggleLight.addEventListener('click', function() {
      localStorage.setItem('theme', 'light');
      applyTheme('light');
    });

    themeToggleSystem.addEventListener('click', function() {
      localStorage.setItem('theme', 'system');
      applyTheme('system');
    });

    themeToggleDark.addEventListener('click', function() {
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const savedTheme = localStorage.getItem('theme') || 'system';
      if (savedTheme === 'system') {
        applyTheme('system');
      }
    });
  <\/script>
</body>
</html>
`},Me={".":["LICENSE","README.md","index.js","package.json","resume.hbs"]};mr=function(t,e){var r=gr(t);return r!==void 0?r:""},vr=function(t,e){var r=gt(t);return r===void 0&&(r=[]),e&&e.withFileTypes?r.map(function(n){var i=mt(t)+"/"+n,s=gt(i)!==void 0;return{name:n,isFile:function(){return!s},isDirectory:function(){return s}}}):r},br=function(t){return gr(t)!==void 0||gt(t)!==void 0},kr=function(){},_r=function(){},vt=function(){return{isFile:function(){return!0},isDirectory:function(){return!1},size:0,mtime:new Date}},yr=vt,xr=function(){},Sr=function(){},wr=function(){return{pipe:function(t){return t},on:function(){return this}}},Cr=function(){return{write:function(){},end:function(){},on:function(){return this}}},Ni={readFileSync:mr,readdirSync:vr,existsSync:br,writeFileSync:kr,mkdirSync:_r,statSync:vt,lstatSync:yr,unlinkSync:xr,rmdirSync:Sr,createReadStream:wr,createWriteStream:Cr}});var Rr={};fr(Rr,{basename:()=>Ae,default:()=>Di,dirname:()=>bt,extname:()=>Oe,isAbsolute:()=>Or,join:()=>Er,normalize:()=>Ir,parse:()=>Dr,relative:()=>Nr,resolve:()=>Mr,sep:()=>Ar});var Er,Mr,bt,Ae,Oe,Ar,Or,Ir,Nr,Dr,Di,Br=pt(()=>{"use strict";f();Er=function(){return[].slice.call(arguments).join("/")},Mr=function(){return[].slice.call(arguments).join("/")},bt=function(t){return t.split("/").slice(0,-1).join("/")},Ae=function(t,e){var r=t.split("/").pop()||"";return e&&r.endsWith(e)?r.slice(0,-e.length):r},Oe=function(t){var e=t.match(/\.[^.]+$/);return e?e[0]:""},Ar="/",Or=function(t){return t.charAt(0)==="/"},Ir=function(t){return t},Nr=function(t,e){return e},Dr=function(t){return{root:"",dir:bt(t),base:Ae(t),ext:Oe(t),name:Ae(t,Oe(t))}},Di={join:Er,resolve:Mr,dirname:bt,basename:Ae,extname:Oe,sep:Ar,isAbsolute:Or,normalize:Ir,relative:Nr,parse:Dr}});var P=v(L=>{"use strict";f();L.__esModule=!0;L.extend=qr;L.indexOf=Hi;L.escapeExpression=Fi;L.isEmpty=Vi;L.createFrame=zi;L.blockParams=Gi;L.appendContextPath=Wi;var Ri={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Bi=/[&<>"'`=]/g,qi=/[&<>"'`=]/;function Ti(t){return Ri[t]}function qr(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var _t=Object.prototype.toString;L.toString=_t;var kt=function(e){return typeof e=="function"};kt(/x/)&&(L.isFunction=kt=function(t){return typeof t=="function"&&_t.call(t)==="[object Function]"});L.isFunction=kt;var Tr=Array.isArray||function(t){return t&&typeof t=="object"?_t.call(t)==="[object Array]":!1};L.isArray=Tr;function Hi(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function Fi(t){if(typeof t!="string"){if(t&&t.toHTML)return t.toHTML();if(t==null)return"";if(!t)return t+"";t=""+t}return qi.test(t)?t.replace(Bi,Ti):t}function Vi(t){return!t&&t!==0?!0:!!(Tr(t)&&t.length===0)}function zi(t){var e=qr({},t);return e._parent=t,e}function Gi(t,e){return t.path=e,t}function Wi(t,e){return(t?t+".":"")+e}});var A=v((Ie,Hr)=>{"use strict";f();Ie.__esModule=!0;var yt=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function xt(t,e){var r=e&&e.loc,n=void 0,i=void 0,s=void 0,a=void 0;r&&(n=r.start.line,i=r.end.line,s=r.start.column,a=r.end.column,t+=" - "+n+":"+s);for(var l=Error.prototype.constructor.call(this,t),u=0;u<yt.length;u++)this[yt[u]]=l[yt[u]];Error.captureStackTrace&&Error.captureStackTrace(this,xt);try{r&&(this.lineNumber=n,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:a,enumerable:!0})):(this.column=s,this.endColumn=a))}catch{}}xt.prototype=new Error;Ie.default=xt;Hr.exports=Ie.default});var Vr=v((Ne,Fr)=>{"use strict";f();Ne.__esModule=!0;var St=P();Ne.default=function(t){t.registerHelper("blockHelperMissing",function(e,r){var n=r.inverse,i=r.fn;if(e===!0)return i(this);if(e===!1||e==null)return n(this);if(St.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):n(this);if(r.data&&r.ids){var s=St.createFrame(r.data);s.contextPath=St.appendContextPath(r.data.contextPath,r.name),r={data:s}}return i(e,r)})};Fr.exports=Ne.default});var Gr=v((De,zr)=>{"use strict";f();De.__esModule=!0;function Ui(t){return t&&t.__esModule?t:{default:t}}var ce=P(),Ki=A(),Ji=Ui(Ki);De.default=function(t){t.registerHelper("each",function(e,r){if(!r)throw new Ji.default("Must pass iterator to #each");var n=r.fn,i=r.inverse,s=0,a="",l=void 0,u=void 0;r.data&&r.ids&&(u=ce.appendContextPath(r.data.contextPath,r.ids[0])+"."),ce.isFunction(e)&&(e=e.call(this)),r.data&&(l=ce.createFrame(r.data));function o(b,_,D){l&&(l.key=b,l.index=_,l.first=_===0,l.last=!!D,u&&(l.contextPath=u+b)),a=a+n(e[b],{data:l,blockParams:ce.blockParams([e[b],b],[u+b,null])})}if(e&&typeof e=="object")if(ce.isArray(e))for(var h=e.length;s<h;s++)s in e&&o(s,s,s===e.length-1);else if(typeof Symbol=="function"&&e[Symbol.iterator]){for(var c=[],d=e[Symbol.iterator](),g=d.next();!g.done;g=d.next())c.push(g.value);e=c;for(var h=e.length;s<h;s++)o(s,s,s===e.length-1)}else(function(){var b=void 0;Object.keys(e).forEach(function(_){b!==void 0&&o(b,s-1),b=_,s++}),b!==void 0&&o(b,s-1,!0)})();return s===0&&(a=i(this)),a})};zr.exports=De.default});var Ur=v((Re,Wr)=>{"use strict";f();Re.__esModule=!0;function ji(t){return t&&t.__esModule?t:{default:t}}var Yi=A(),Qi=ji(Yi);Re.default=function(t){t.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new Qi.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})};Wr.exports=Re.default});var Yr=v((Be,jr)=>{"use strict";f();Be.__esModule=!0;function Xi(t){return t&&t.__esModule?t:{default:t}}var Kr=P(),Zi=A(),Jr=Xi(Zi);Be.default=function(t){t.registerHelper("if",function(e,r){if(arguments.length!=2)throw new Jr.default("#if requires exactly one argument");return Kr.isFunction(e)&&(e=e.call(this)),!r.hash.includeZero&&!e||Kr.isEmpty(e)?r.inverse(this):r.fn(this)}),t.registerHelper("unless",function(e,r){if(arguments.length!=2)throw new Jr.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:r.inverse,inverse:r.fn,hash:r.hash})})};jr.exports=Be.default});var Xr=v((qe,Qr)=>{"use strict";f();qe.__esModule=!0;qe.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)e.push(arguments[n]);var i=1;r.hash.level!=null?i=r.hash.level:r.data&&r.data.level!=null&&(i=r.data.level),e[0]=i,t.log.apply(t,e)})};Qr.exports=qe.default});var $r=v((Te,Zr)=>{"use strict";f();Te.__esModule=!0;Te.default=function(t){t.registerHelper("lookup",function(e,r,n){return e&&n.lookupProperty(e,r)})};Zr.exports=Te.default});var tn=v((He,en)=>{"use strict";f();He.__esModule=!0;function $i(t){return t&&t.__esModule?t:{default:t}}var he=P(),es=A(),ts=$i(es);He.default=function(t){t.registerHelper("with",function(e,r){if(arguments.length!=2)throw new ts.default("#with requires exactly one argument");he.isFunction(e)&&(e=e.call(this));var n=r.fn;if(he.isEmpty(e))return r.inverse(this);var i=r.data;return r.data&&r.ids&&(i=he.createFrame(r.data),i.contextPath=he.appendContextPath(r.data.contextPath,r.ids[0])),n(e,{data:i,blockParams:he.blockParams([e],[i&&i.contextPath])})})};en.exports=He.default});var wt=v(Fe=>{"use strict";f();Fe.__esModule=!0;Fe.registerDefaultHelpers=ms;Fe.moveHelperToHooks=vs;function J(t){return t&&t.__esModule?t:{default:t}}var rs=Vr(),ns=J(rs),is=Gr(),ss=J(is),as=Ur(),os=J(as),ls=Yr(),us=J(ls),cs=Xr(),hs=J(cs),fs=$r(),ds=J(fs),ps=tn(),gs=J(ps);function ms(t){ns.default(t),ss.default(t),os.default(t),us.default(t),hs.default(t),ds.default(t),gs.default(t)}function vs(t,e,r){t.helpers[e]&&(t.hooks[e]=t.helpers[e],r||delete t.helpers[e])}});var nn=v((Ve,rn)=>{"use strict";f();Ve.__esModule=!0;var bs=P();Ve.default=function(t){t.registerDecorator("inline",function(e,r,n,i){var s=e;return r.partials||(r.partials={},s=function(a,l){var u=n.partials;n.partials=bs.extend({},u,r.partials);var o=e(a,l);return n.partials=u,o}),r.partials[i.args[0]]=i.fn,s})};rn.exports=Ve.default});var sn=v(Ct=>{"use strict";f();Ct.__esModule=!0;Ct.registerDefaultDecorators=xs;function ks(t){return t&&t.__esModule?t:{default:t}}var _s=nn(),ys=ks(_s);function xs(t){ys.default(t)}});var Pt=v((ze,an)=>{"use strict";f();ze.__esModule=!0;var Ss=P(),te={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if(typeof e=="string"){var r=Ss.indexOf(te.methodMap,e.toLowerCase());r>=0?e=r:e=parseInt(e,10)}return e},log:function(e){if(e=te.lookupLevel(e),typeof console<"u"&&te.lookupLevel(te.level)<=e){var r=te.methodMap[e];console[r]||(r="log");for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];console[r].apply(console,i)}}};ze.default=te;an.exports=ze.default});var on=v(Lt=>{"use strict";f();Lt.__esModule=!0;Lt.createNewLookupObject=Cs;var ws=P();function Cs(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return ws.extend.apply(void 0,[Object.create(null)].concat(e))}});var Et=v(fe=>{"use strict";f();fe.__esModule=!0;fe.createProtoAccessControl=Ms;fe.resultIsAllowed=As;fe.resetLoggedProperties=Is;function Ps(t){return t&&t.__esModule?t:{default:t}}var ln=on(),Ls=Pt(),Es=Ps(Ls),Ge=Object.create(null);function Ms(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:ln.createNewLookupObject(r,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:ln.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}}function As(t,e,r){return un(typeof t=="function"?e.methods:e.properties,r)}function un(t,e){return t.whitelist[e]!==void 0?t.whitelist[e]===!0:t.defaultValue!==void 0?t.defaultValue:(Os(e),!1)}function Os(t){Ge[t]!==!0&&(Ge[t]=!0,Es.default.log("error",'Handlebars: Access has been denied to resolve the property "'+t+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function Is(){Object.keys(Ge).forEach(function(t){delete Ge[t]})}});var Ue=v(B=>{"use strict";f();B.__esModule=!0;B.HandlebarsEnvironment=Ot;function cn(t){return t&&t.__esModule?t:{default:t}}var j=P(),Ns=A(),Mt=cn(Ns),Ds=wt(),Rs=sn(),Bs=Pt(),We=cn(Bs),qs=Et(),Ts="4.7.8";B.VERSION=Ts;var Hs=8;B.COMPILER_REVISION=Hs;var Fs=7;B.LAST_COMPATIBLE_COMPILER_REVISION=Fs;var Vs={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};B.REVISION_CHANGES=Vs;var At="[object Object]";function Ot(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},Ds.registerDefaultHelpers(this),Rs.registerDefaultDecorators(this)}Ot.prototype={constructor:Ot,logger:We.default,log:We.default.log,registerHelper:function(e,r){if(j.toString.call(e)===At){if(r)throw new Mt.default("Arg not supported with multiple helpers");j.extend(this.helpers,e)}else this.helpers[e]=r},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,r){if(j.toString.call(e)===At)j.extend(this.partials,e);else{if(typeof r>"u")throw new Mt.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=r}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,r){if(j.toString.call(e)===At){if(r)throw new Mt.default("Arg not supported with multiple decorators");j.extend(this.decorators,e)}else this.decorators[e]=r},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){qs.resetLoggedProperties()}};var zs=We.default.log;B.log=zs;B.createFrame=j.createFrame;B.logger=We.default});var fn=v((Ke,hn)=>{"use strict";f();Ke.__esModule=!0;function It(t){this.string=t}It.prototype.toString=It.prototype.toHTML=function(){return""+this.string};Ke.default=It;hn.exports=Ke.default});var dn=v(Nt=>{"use strict";f();Nt.__esModule=!0;Nt.wrapHelper=Gs;function Gs(t,e){if(typeof t!="function")return t;var r=function(){var i=arguments[arguments.length-1];return arguments[arguments.length-1]=e(i),t.apply(this,arguments)};return r}});var bn=v(G=>{"use strict";f();G.__esModule=!0;G.checkRevision=Ys;G.template=Qs;G.wrapProgram=Je;G.resolvePartial=Xs;G.invokePartial=Zs;G.noop=mn;function Ws(t){return t&&t.__esModule?t:{default:t}}function Us(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var Ks=P(),H=Us(Ks),Js=A(),F=Ws(Js),V=Ue(),pn=wt(),js=dn(),gn=Et();function Ys(t){var e=t&&t[0]||1,r=V.COMPILER_REVISION;if(!(e>=V.LAST_COMPATIBLE_COMPILER_REVISION&&e<=V.COMPILER_REVISION))if(e<V.LAST_COMPATIBLE_COMPILER_REVISION){var n=V.REVISION_CHANGES[r],i=V.REVISION_CHANGES[e];throw new F.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+i+").")}else throw new F.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}function Qs(t,e){if(!e)throw new F.default("No environment passed to template");if(!t||!t.main)throw new F.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var r=t.compiler&&t.compiler[0]===7;function n(a,l,u){u.hash&&(l=H.extend({},l,u.hash),u.ids&&(u.ids[0]=!0)),a=e.VM.resolvePartial.call(this,a,l,u);var o=H.extend({},u,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),h=e.VM.invokePartial.call(this,a,l,o);if(h==null&&e.compile&&(u.partials[u.name]=e.compile(a,t.compilerOptions,e),h=u.partials[u.name](l,o)),h!=null){if(u.indent){for(var c=h.split(`
`),d=0,g=c.length;d<g&&!(!c[d]&&d+1===g);d++)c[d]=u.indent+c[d];h=c.join(`
`)}return h}else throw new F.default("The partial "+u.name+" could not be compiled when running in runtime-only mode")}var i={strict:function(l,u,o){if(!l||!(u in l))throw new F.default('"'+u+'" not defined in '+l,{loc:o});return i.lookupProperty(l,u)},lookupProperty:function(l,u){var o=l[u];if(o==null||Object.prototype.hasOwnProperty.call(l,u)||gn.resultIsAllowed(o,i.protoAccessControl,u))return o},lookup:function(l,u){for(var o=l.length,h=0;h<o;h++){var c=l[h]&&i.lookupProperty(l[h],u);if(c!=null)return l[h][u]}},lambda:function(l,u){return typeof l=="function"?l.call(u):l},escapeExpression:H.escapeExpression,invokePartial:n,fn:function(l){var u=t[l];return u.decorator=t[l+"_d"],u},programs:[],program:function(l,u,o,h,c){var d=this.programs[l],g=this.fn(l);return u||c||h||o?d=Je(this,l,g,u,o,h,c):d||(d=this.programs[l]=Je(this,l,g)),d},data:function(l,u){for(;l&&u--;)l=l._parent;return l},mergeIfNeeded:function(l,u){var o=l||u;return l&&u&&l!==u&&(o=H.extend({},u,l)),o},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function s(a){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],u=l.data;s._setup(l),!l.partial&&t.useData&&(u=$s(a,u));var o=void 0,h=t.useBlockParams?[]:void 0;t.useDepths&&(l.depths?o=a!=l.depths[0]?[a].concat(l.depths):l.depths:o=[a]);function c(d){return""+t.main(i,d,i.helpers,i.partials,u,h,o)}return c=vn(t.main,c,i,l.depths||[],u,h),c(a,l)}return s.isTop=!0,s._setup=function(a){if(a.partial)i.protoAccessControl=a.protoAccessControl,i.helpers=a.helpers,i.partials=a.partials,i.decorators=a.decorators,i.hooks=a.hooks;else{var l=H.extend({},e.helpers,a.helpers);ea(l,i),i.helpers=l,t.usePartial&&(i.partials=i.mergeIfNeeded(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=H.extend({},e.decorators,a.decorators)),i.hooks={},i.protoAccessControl=gn.createProtoAccessControl(a);var u=a.allowCallsToHelperMissing||r;pn.moveHelperToHooks(i,"helperMissing",u),pn.moveHelperToHooks(i,"blockHelperMissing",u)}},s._child=function(a,l,u,o){if(t.useBlockParams&&!u)throw new F.default("must pass block params");if(t.useDepths&&!o)throw new F.default("must pass parent depths");return Je(i,a,t[a],l,0,u,o)},s}function Je(t,e,r,n,i,s,a){function l(u){var o=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],h=a;return a&&u!=a[0]&&!(u===t.nullContext&&a[0]===null)&&(h=[u].concat(a)),r(t,u,t.helpers,t.partials,o.data||n,s&&[o.blockParams].concat(s),h)}return l=vn(r,l,t,a,n,s),l.program=e,l.depth=a?a.length:0,l.blockParams=i||0,l}function Xs(t,e,r){return t?!t.call&&!r.name&&(r.name=t,t=r.partials[t]):r.name==="@partial-block"?t=r.data["partial-block"]:t=r.partials[r.name],t}function Zs(t,e,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var i=void 0;if(r.fn&&r.fn!==mn&&(function(){r.data=V.createFrame(r.data);var s=r.fn;i=r.data["partial-block"]=function(l){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return u.data=V.createFrame(u.data),u.data["partial-block"]=n,s(l,u)},s.partials&&(r.partials=H.extend({},r.partials,s.partials))})(),t===void 0&&i&&(t=i),t===void 0)throw new F.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)}function mn(){return""}function $s(t,e){return(!e||!("root"in e))&&(e=e?V.createFrame(e):{},e.root=t),e}function vn(t,e,r,n,i,s){if(t.decorator){var a={};e=t.decorator(e,a,r,n&&n[0],i,s,n),H.extend(e,a)}return e}function ea(t,e){Object.keys(t).forEach(function(r){var n=t[r];t[r]=ta(n,e)})}function ta(t,e){var r=e.lookupProperty;return js.wrapHelper(t,function(n){return H.extend({lookupProperty:r},n)})}});var Dt=v((je,kn)=>{"use strict";f();je.__esModule=!0;je.default=function(t){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var e=globalThis.Handlebars;t.noConflict=function(){return globalThis.Handlebars===t&&(globalThis.Handlebars=e),t}};kn.exports=je.default});var wn=v((Ye,Sn)=>{"use strict";f();Ye.__esModule=!0;function Bt(t){return t&&t.__esModule?t:{default:t}}function qt(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var ra=Ue(),_n=qt(ra),na=fn(),ia=Bt(na),sa=A(),aa=Bt(sa),oa=P(),Rt=qt(oa),la=bn(),yn=qt(la),ua=Dt(),ca=Bt(ua);function xn(){var t=new _n.HandlebarsEnvironment;return Rt.extend(t,_n),t.SafeString=ia.default,t.Exception=aa.default,t.Utils=Rt,t.escapeExpression=Rt.escapeExpression,t.VM=yn,t.template=function(e){return yn.template(e,t)},t}var de=xn();de.create=xn;ca.default(de);de.default=de;Ye.default=de;Sn.exports=Ye.default});var Tt=v((Qe,Pn)=>{"use strict";f();Qe.__esModule=!0;var Cn={helpers:{helperExpression:function(e){return e.type==="SubExpression"||(e.type==="MustacheStatement"||e.type==="BlockStatement")&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return e.parts.length===1&&!Cn.helpers.scopedId(e)&&!e.depth}}};Qe.default=Cn;Pn.exports=Qe.default});var En=v((Xe,Ln)=>{"use strict";f();Xe.__esModule=!0;var ha=(function(){var t={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(i,s,a,l,u,o,h){var c=o.length-1;switch(u){case 1:return o[c-1];case 2:this.$=l.prepareProgram(o[c]);break;case 3:this.$=o[c];break;case 4:this.$=o[c];break;case 5:this.$=o[c];break;case 6:this.$=o[c];break;case 7:this.$=o[c];break;case 8:this.$=o[c];break;case 9:this.$={type:"CommentStatement",value:l.stripComment(o[c]),strip:l.stripFlags(o[c],o[c]),loc:l.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[c],value:o[c],loc:l.locInfo(this._$)};break;case 11:this.$=l.prepareRawBlock(o[c-2],o[c-1],o[c],this._$);break;case 12:this.$={path:o[c-3],params:o[c-2],hash:o[c-1]};break;case 13:this.$=l.prepareBlock(o[c-3],o[c-2],o[c-1],o[c],!1,this._$);break;case 14:this.$=l.prepareBlock(o[c-3],o[c-2],o[c-1],o[c],!0,this._$);break;case 15:this.$={open:o[c-5],path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 16:this.$={path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 17:this.$={path:o[c-4],params:o[c-3],hash:o[c-2],blockParams:o[c-1],strip:l.stripFlags(o[c-5],o[c])};break;case 18:this.$={strip:l.stripFlags(o[c-1],o[c-1]),program:o[c]};break;case 19:var d=l.prepareBlock(o[c-2],o[c-1],o[c],o[c],!1,this._$),g=l.prepareProgram([d],o[c-1].loc);g.chained=!0,this.$={strip:o[c-2].strip,program:g,chain:!0};break;case 20:this.$=o[c];break;case 21:this.$={path:o[c-1],strip:l.stripFlags(o[c-2],o[c])};break;case 22:this.$=l.prepareMustache(o[c-3],o[c-2],o[c-1],o[c-4],l.stripFlags(o[c-4],o[c]),this._$);break;case 23:this.$=l.prepareMustache(o[c-3],o[c-2],o[c-1],o[c-4],l.stripFlags(o[c-4],o[c]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[c-3],params:o[c-2],hash:o[c-1],indent:"",strip:l.stripFlags(o[c-4],o[c]),loc:l.locInfo(this._$)};break;case 25:this.$=l.preparePartialBlock(o[c-2],o[c-1],o[c],this._$);break;case 26:this.$={path:o[c-3],params:o[c-2],hash:o[c-1],strip:l.stripFlags(o[c-4],o[c])};break;case 27:this.$=o[c];break;case 28:this.$=o[c];break;case 29:this.$={type:"SubExpression",path:o[c-3],params:o[c-2],hash:o[c-1],loc:l.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[c],loc:l.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:l.id(o[c-2]),value:o[c],loc:l.locInfo(this._$)};break;case 32:this.$=l.id(o[c-1]);break;case 33:this.$=o[c];break;case 34:this.$=o[c];break;case 35:this.$={type:"StringLiteral",value:o[c],original:o[c],loc:l.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[c]),original:Number(o[c]),loc:l.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:o[c]==="true",original:o[c]==="true",loc:l.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:l.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:l.locInfo(this._$)};break;case 40:this.$=o[c];break;case 41:this.$=o[c];break;case 42:this.$=l.preparePath(!0,o[c],this._$);break;case 43:this.$=l.preparePath(!1,o[c],this._$);break;case 44:o[c-2].push({part:l.id(o[c]),original:o[c],separator:o[c-1]}),this.$=o[c-2];break;case 45:this.$=[{part:l.id(o[c]),original:o[c]}];break;case 46:this.$=[];break;case 47:o[c-1].push(o[c]);break;case 48:this.$=[];break;case 49:o[c-1].push(o[c]);break;case 50:this.$=[];break;case 51:o[c-1].push(o[c]);break;case 58:this.$=[];break;case 59:o[c-1].push(o[c]);break;case 64:this.$=[];break;case 65:o[c-1].push(o[c]);break;case 70:this.$=[];break;case 71:o[c-1].push(o[c]);break;case 78:this.$=[];break;case 79:o[c-1].push(o[c]);break;case 82:this.$=[];break;case 83:o[c-1].push(o[c]);break;case 86:this.$=[];break;case 87:o[c-1].push(o[c]);break;case 90:this.$=[];break;case 91:o[c-1].push(o[c]);break;case 94:this.$=[];break;case 95:o[c-1].push(o[c]);break;case 98:this.$=[o[c]];break;case 99:o[c-1].push(o[c]);break;case 100:this.$=[o[c]];break;case 101:o[c-1].push(o[c]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(i,s){throw new Error(i)},parse:function(i){var s=this,a=[0],l=[null],u=[],o=this.table,h="",c=0,d=0,g=0,b=2,_=1;this.lexer.setInput(i),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc>"u"&&(this.lexer.yylloc={});var D=this.lexer.yylloc;u.push(D);var x=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function U(R){a.length=a.length-2*R,l.length=l.length-R,u.length=u.length-R}function we(){var R;return R=s.lexer.lex()||1,typeof R!="number"&&(R=s.symbols_[R]||R),R}for(var C,ht,K,M,Po,ft,ee={},Ce,T,hr,Pe;;){if(K=a[a.length-1],this.defaultActions[K]?M=this.defaultActions[K]:((C===null||typeof C>"u")&&(C=we()),M=o[K]&&o[K][C]),typeof M>"u"||!M.length||!M[0]){var dt="";if(!g){Pe=[];for(Ce in o[K])this.terminals_[Ce]&&Ce>2&&Pe.push("'"+this.terminals_[Ce]+"'");this.lexer.showPosition?dt="Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+Pe.join(", ")+", got '"+(this.terminals_[C]||C)+"'":dt="Parse error on line "+(c+1)+": Unexpected "+(C==1?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(dt,{text:this.lexer.match,token:this.terminals_[C]||C,line:this.lexer.yylineno,loc:D,expected:Pe})}}if(M[0]instanceof Array&&M.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+C);switch(M[0]){case 1:a.push(C),l.push(this.lexer.yytext),u.push(this.lexer.yylloc),a.push(M[1]),C=null,ht?(C=ht,ht=null):(d=this.lexer.yyleng,h=this.lexer.yytext,c=this.lexer.yylineno,D=this.lexer.yylloc,g>0&&g--);break;case 2:if(T=this.productions_[M[1]][1],ee.$=l[l.length-T],ee._$={first_line:u[u.length-(T||1)].first_line,last_line:u[u.length-1].last_line,first_column:u[u.length-(T||1)].first_column,last_column:u[u.length-1].last_column},x&&(ee._$.range=[u[u.length-(T||1)].range[0],u[u.length-1].range[1]]),ft=this.performAction.call(ee,h,d,c,this.yy,M[1],l,u),typeof ft<"u")return ft;T&&(a=a.slice(0,-1*T*2),l=l.slice(0,-1*T),u=u.slice(0,-1*T)),a.push(this.productions_[M[1]][0]),l.push(ee.$),u.push(ee._$),hr=o[a[a.length-2]][a[a.length-1]],a.push(hr);break;case 3:return!0}}return!0}},e=(function(){var n={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(s){return this._input=s,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,l=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a-1),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===u.length?this.yylloc.first_column:0)+u[u.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this},more:function(){return this._more=!0,this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,l,u,o,h;this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),d=0;d<c.length&&(l=this._input.match(this.rules[c[d]]),!(l&&(!a||l[0].length>a[0].length)&&(a=l,u=d,!this.options.flex)));d++);return a?(h=a[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],s=this.performAction.call(this,this.yy,this,c[u],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return typeof s<"u"?s:this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(s){this.begin(s)}};return n.options={},n.performAction=function(s,a,l,u){function o(c,d){return a.yytext=a.yytext.substring(c,a.yyleng-d+c)}var h=u;switch(l){case 0:if(a.yytext.slice(-2)==="\\\\"?(o(0,1),this.begin("mu")):a.yytext.slice(-1)==="\\"?(o(0,1),this.begin("emu")):this.begin("mu"),a.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;break;case 3:return this.begin("raw"),15;break;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(o(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;break;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;break;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;break;case 16:return this.popState(),44;break;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(a.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;break;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;break;case 30:return this.popState(),33;break;case 31:return a.yytext=o(1,2).replace(/\\"/g,'"'),80;break;case 32:return a.yytext=o(1,2).replace(/\\'/g,"'"),80;break;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return a.yytext=a.yytext.replace(/\\([\\\]])/g,"$1"),72;break;case 43:return"INVALID";case 44:return 5}},n.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],n.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},n})();t.lexer=e;function r(){this.yy={}}return r.prototype=t,t.Parser=r,new r})();Xe.default=ha;Ln.exports=Xe.default});var Ft=v((et,On)=>{"use strict";f();et.__esModule=!0;function fa(t){return t&&t.__esModule?t:{default:t}}var da=A(),Ht=fa(da);function Ze(){this.parents=[]}Ze.prototype={constructor:Ze,mutating:!1,acceptKey:function(e,r){var n=this.accept(e[r]);if(this.mutating){if(n&&!Ze.prototype[n.type])throw new Ht.default('Unexpected node type "'+n.type+'" found when accepting '+r+" on "+e.type);e[r]=n}},acceptRequired:function(e,r){if(this.acceptKey(e,r),!e[r])throw new Ht.default(e.type+" requires "+r)},acceptArray:function(e){for(var r=0,n=e.length;r<n;r++)this.acceptKey(e,r),e[r]||(e.splice(r,1),r--,n--)},accept:function(e){if(e){if(!this[e.type])throw new Ht.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var r=this[e.type](e);if(this.current=this.parents.shift(),!this.mutating||r)return r;if(r!==!1)return e}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:$e,Decorator:$e,BlockStatement:Mn,DecoratorBlock:Mn,PartialStatement:An,PartialBlockStatement:function(e){An.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:$e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}};function $e(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")}function Mn(t){$e.call(this,t),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")}function An(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")}et.default=Ze;On.exports=et.default});var Nn=v((tt,In)=>{"use strict";f();tt.__esModule=!0;function pa(t){return t&&t.__esModule?t:{default:t}}var ga=Ft(),ma=pa(ga);function q(){var t=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=t}q.prototype=new ma.default;q.prototype.Program=function(t){var e=!this.options.ignoreStandalone,r=!this.isRootSeen;this.isRootSeen=!0;for(var n=t.body,i=0,s=n.length;i<s;i++){var a=n[i],l=this.accept(a);if(l){var u=Vt(n,i,r),o=zt(n,i,r),h=l.openStandalone&&u,c=l.closeStandalone&&o,d=l.inlineStandalone&&u&&o;l.close&&Y(n,i,!0),l.open&&W(n,i,!0),e&&d&&(Y(n,i),W(n,i)&&a.type==="PartialStatement"&&(a.indent=/([ \t]+$)/.exec(n[i-1].original)[1])),e&&h&&(Y((a.program||a.inverse).body),W(n,i)),e&&c&&(Y(n,i),W((a.inverse||a.program).body))}}return t};q.prototype.BlockStatement=q.prototype.DecoratorBlock=q.prototype.PartialBlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,r=t.program&&t.inverse,n=r,i=r;if(r&&r.chained)for(n=r.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:zt(e.body),closeStandalone:Vt((n||e).body)};if(t.openStrip.close&&Y(e.body,null,!0),r){var a=t.inverseStrip;a.open&&W(e.body,null,!0),a.close&&Y(n.body,null,!0),t.closeStrip.open&&W(i.body,null,!0),!this.options.ignoreStandalone&&Vt(e.body)&&zt(n.body)&&(W(e.body),Y(n.body))}else t.closeStrip.open&&W(e.body,null,!0);return s};q.prototype.Decorator=q.prototype.MustacheStatement=function(t){return t.strip};q.prototype.PartialStatement=q.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}};function Vt(t,e,r){e===void 0&&(e=t.length);var n=t[e-1],i=t[e-2];if(!n)return r;if(n.type==="ContentStatement")return(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original)}function zt(t,e,r){e===void 0&&(e=-1);var n=t[e+1],i=t[e+2];if(!n)return r;if(n.type==="ContentStatement")return(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original)}function Y(t,e,r){var n=t[e==null?0:e+1];if(!(!n||n.type!=="ContentStatement"||!r&&n.rightStripped)){var i=n.value;n.value=n.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.value!==i}}function W(t,e,r){var n=t[e==null?t.length-1:e-1];if(!(!n||n.type!=="ContentStatement"||!r&&n.leftStripped)){var i=n.value;return n.value=n.value.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.value!==i,n.leftStripped}}tt.default=q;In.exports=tt.default});var Dn=v(O=>{"use strict";f();O.__esModule=!0;O.SourceLocation=ka;O.id=_a;O.stripFlags=ya;O.stripComment=xa;O.preparePath=Sa;O.prepareMustache=wa;O.prepareRawBlock=Ca;O.prepareBlock=Pa;O.prepareProgram=La;O.preparePartialBlock=Ea;function va(t){return t&&t.__esModule?t:{default:t}}var ba=A(),Gt=va(ba);function Wt(t,e){if(e=e.path?e.path.original:e,t.path.original!==e){var r={loc:t.path.loc};throw new Gt.default(t.path.original+" doesn't match "+e,r)}}function ka(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function _a(t){return/^\[.*\]$/.test(t)?t.substring(1,t.length-1):t}function ya(t,e){return{open:t.charAt(2)==="~",close:e.charAt(e.length-3)==="~"}}function xa(t){return t.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function Sa(t,e,r){r=this.locInfo(r);for(var n=t?"@":"",i=[],s=0,a=0,l=e.length;a<l;a++){var u=e[a].part,o=e[a].original!==u;if(n+=(e[a].separator||"")+u,!o&&(u===".."||u==="."||u==="this")){if(i.length>0)throw new Gt.default("Invalid path: "+n,{loc:r});u===".."&&s++}else i.push(u)}return{type:"PathExpression",data:t,depth:s,parts:i,original:n,loc:r}}function wa(t,e,r,n,i,s){var a=n.charAt(3)||n.charAt(2),l=a!=="{"&&a!=="&",u=/\*/.test(n);return{type:u?"Decorator":"MustacheStatement",path:t,params:e,hash:r,escaped:l,strip:i,loc:this.locInfo(s)}}function Ca(t,e,r,n){Wt(t,r),n=this.locInfo(n);var i={type:"Program",body:e,strip:{},loc:n};return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:n}}function Pa(t,e,r,n,i,s){n&&n.path&&Wt(t,n);var a=/\*/.test(t.open);e.blockParams=t.blockParams;var l=void 0,u=void 0;if(r){if(a)throw new Gt.default("Unexpected inverse block on decorator",r);r.chain&&(r.program.body[0].closeStrip=n.strip),u=r.strip,l=r.program}return i&&(i=l,l=e,e=i),{type:a?"DecoratorBlock":"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:e,inverse:l,openStrip:t.strip,inverseStrip:u,closeStrip:n&&n.strip,loc:this.locInfo(s)}}function La(t,e){if(!e&&t.length){var r=t[0].loc,n=t[t.length-1].loc;r&&n&&(e={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:n.end.line,column:n.end.column}})}return{type:"Program",body:t,strip:{},loc:e}}function Ea(t,e,r,n){return Wt(t,r),{type:"PartialBlockStatement",name:t.path,params:t.params,hash:t.hash,program:e,openStrip:t.strip,closeStrip:r&&r.strip,loc:this.locInfo(n)}}});var qn=v(pe=>{"use strict";f();pe.__esModule=!0;pe.parseWithoutProcessing=Bn;pe.parse=Ba;function Ma(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function Rn(t){return t&&t.__esModule?t:{default:t}}var Aa=En(),Ut=Rn(Aa),Oa=Nn(),Ia=Rn(Oa),Na=Dn(),Da=Ma(Na),Ra=P();pe.parser=Ut.default;var rt={};Ra.extend(rt,Da);function Bn(t,e){if(t.type==="Program")return t;Ut.default.yy=rt,rt.locInfo=function(n){return new rt.SourceLocation(e&&e.srcName,n)};var r=Ut.default.parse(t);return r}function Ba(t,e){var r=Bn(t,e),n=new Ia.default(e);return n.accept(r)}});var Vn=v(be=>{"use strict";f();be.__esModule=!0;be.Compiler=Kt;be.precompile=Fa;be.compile=Va;function Hn(t){return t&&t.__esModule?t:{default:t}}var qa=A(),me=Hn(qa),ve=P(),Ta=Tt(),ge=Hn(Ta),Ha=[].slice;function Kt(){}Kt.prototype={compiler:Kt,equals:function(e){var r=this.opcodes.length;if(e.opcodes.length!==r)return!1;for(var n=0;n<r;n++){var i=this.opcodes[n],s=e.opcodes[n];if(i.opcode!==s.opcode||!Fn(i.args,s.args))return!1}r=this.children.length;for(var n=0;n<r;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,r){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=r,this.stringParams=r.stringParams,this.trackIds=r.trackIds,r.blockParams=r.blockParams||[],r.knownHelpers=ve.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},r.knownHelpers),this.accept(e)},compileProgram:function(e){var r=new this.compiler,n=r.compile(e,this.options),i=this.guid++;return this.usePartial=this.usePartial||n.usePartial,this.children[i]=n,this.useDepths=this.useDepths||n.useDepths,i},accept:function(e){if(!this[e.type])throw new me.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var r=this[e.type](e);return this.sourceNode.shift(),r},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var r=e.body,n=r.length,i=0;i<n;i++)this.accept(r[i]);return this.options.blockParams.shift(),this.isSimple=n===1,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){Tn(e);var r=e.program,n=e.inverse;r=r&&this.compileProgram(r),n=n&&this.compileProgram(n);var i=this.classifySexpr(e);i==="helper"?this.helperSexpr(e,r,n):i==="simple"?(this.simpleSexpr(e),this.opcode("pushProgram",r),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,r,n),this.opcode("pushProgram",r),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var r=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,r,void 0),i=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,i.original)},PartialStatement:function(e){this.usePartial=!0;var r=e.program;r&&(r=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new me.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var i=e.name.original,s=e.name.type==="SubExpression";s&&this.accept(e.name),this.setupFullMustacheParams(e,r,void 0,!0);var a=e.indent||"";this.options.preventIndent&&a&&(this.opcode("appendContent",a),a=""),this.opcode("invokePartial",s,i,a),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){Tn(e);var r=this.classifySexpr(e);r==="simple"?this.simpleSexpr(e):r==="helper"?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,r,n){var i=e.path,s=i.parts[0],a=r!=null||n!=null;this.opcode("getContext",i.depth),this.opcode("pushProgram",r),this.opcode("pushProgram",n),i.strict=!0,this.accept(i),this.opcode("invokeAmbiguous",s,a)},simpleSexpr:function(e){var r=e.path;r.strict=!0,this.accept(r),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,r,n){var i=this.setupFullMustacheParams(e,r,n),s=e.path,a=s.parts[0];if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",i.length,a);else{if(this.options.knownHelpersOnly)throw new me.default("You specified knownHelpersOnly, but used the unknown helper "+a,e);s.strict=!0,s.falsy=!0,this.accept(s),this.opcode("invokeHelper",i.length,s.original,ge.default.helpers.simpleId(s))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var r=e.parts[0],n=ge.default.helpers.scopedId(e),i=!e.depth&&!n&&this.blockParamIndex(r);i?this.opcode("lookupBlockParam",i,e.parts):r?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var r=e.pairs,n=0,i=r.length;for(this.opcode("pushHash");n<i;n++)this.pushParam(r[n].value);for(;n--;)this.opcode("assignToHash",r[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:Ha.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var r=ge.default.helpers.simpleId(e.path),n=r&&!!this.blockParamIndex(e.path.parts[0]),i=!n&&ge.default.helpers.helperExpression(e),s=!n&&(i||r);if(s&&!i){var a=e.path.parts[0],l=this.options;l.knownHelpers[a]?i=!0:l.knownHelpersOnly&&(s=!1)}return i?"helper":s?"ambiguous":"simple"},pushParams:function(e){for(var r=0,n=e.length;r<n;r++)this.pushParam(e[r])},pushParam:function(e){var r=e.value!=null?e.value:e.original||"";if(this.stringParams)r.replace&&(r=r.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",r,e.type),e.type==="SubExpression"&&this.accept(e);else{if(this.trackIds){var n=void 0;if(e.parts&&!ge.default.helpers.scopedId(e)&&!e.depth&&(n=this.blockParamIndex(e.parts[0])),n){var i=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,i)}else r=e.original||r,r.replace&&(r=r.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,r)}this.accept(e)}},setupFullMustacheParams:function(e,r,n,i){var s=e.params;return this.pushParams(s),this.opcode("pushProgram",r),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",i),s},blockParamIndex:function(e){for(var r=0,n=this.options.blockParams.length;r<n;r++){var i=this.options.blockParams[r],s=i&&ve.indexOf(i,e);if(i&&s>=0)return[r,s]}}};function Fa(t,e,r){if(t==null||typeof t!="string"&&t.type!=="Program")throw new me.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n=r.parse(t,e),i=new r.Compiler().compile(n,e);return new r.JavaScriptCompiler().compile(i,e)}function Va(t,e,r){if(e===void 0&&(e={}),t==null||typeof t!="string"&&t.type!=="Program")throw new me.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=ve.extend({},e),"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var n=void 0;function i(){var a=r.parse(t,e),l=new r.Compiler().compile(a,e),u=new r.JavaScriptCompiler().compile(l,e,void 0,!0);return r.template(u)}function s(a,l){return n||(n=i()),n.call(this,a,l)}return s._setup=function(a){return n||(n=i()),n._setup(a)},s._child=function(a,l,u,o){return n||(n=i()),n._child(a,l,u,o)},s}function Fn(t,e){if(t===e)return!0;if(ve.isArray(t)&&ve.isArray(e)&&t.length===e.length){for(var r=0;r<t.length;r++)if(!Fn(t[r],e[r]))return!1;return!0}}function Tn(t){if(!t.path.parts){var e=t.path;t.path={type:"PathExpression",data:!1,depth:0,parts:[e.original+""],original:e.original+"",loc:e.loc}}}});var Gn=v(Jt=>{f();var zn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");Jt.encode=function(t){if(0<=t&&t<zn.length)return zn[t];throw new TypeError("Must be between 0 and 63: "+t)};Jt.decode=function(t){var e=65,r=90,n=97,i=122,s=48,a=57,l=43,u=47,o=26,h=52;return e<=t&&t<=r?t-e:n<=t&&t<=i?t-n+o:s<=t&&t<=a?t-s+h:t==l?62:t==u?63:-1}});var Qt=v(Yt=>{f();var Wn=Gn(),jt=5,Un=1<<jt,Kn=Un-1,Jn=Un;function za(t){return t<0?(-t<<1)+1:(t<<1)+0}function Ga(t){var e=(t&1)===1,r=t>>1;return e?-r:r}Yt.encode=function(e){var r="",n,i=za(e);do n=i&Kn,i>>>=jt,i>0&&(n|=Jn),r+=Wn.encode(n);while(i>0);return r};Yt.decode=function(e,r,n){var i=e.length,s=0,a=0,l,u;do{if(r>=i)throw new Error("Expected more digits in base 64 VLQ value.");if(u=Wn.decode(e.charCodeAt(r++)),u===-1)throw new Error("Invalid base64 digit: "+e.charAt(r-1));l=!!(u&Jn),u&=Kn,s=s+(u<<a),a+=jt}while(l);n.value=Ga(s),n.rest=r}});var ie=v(w=>{f();function Wa(t,e,r){if(e in t)return t[e];if(arguments.length===3)return r;throw new Error('"'+e+'" is a required argument.')}w.getArg=Wa;var jn=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,Ua=/^data:.+\,.+$/;function ke(t){var e=t.match(jn);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}w.urlParse=ke;function re(t){var e="";return t.scheme&&(e+=t.scheme+":"),e+="//",t.auth&&(e+=t.auth+"@"),t.host&&(e+=t.host),t.port&&(e+=":"+t.port),t.path&&(e+=t.path),e}w.urlGenerate=re;function Xt(t){var e=t,r=ke(t);if(r){if(!r.path)return t;e=r.path}for(var n=w.isAbsolute(e),i=e.split(/\/+/),s,a=0,l=i.length-1;l>=0;l--)s=i[l],s==="."?i.splice(l,1):s===".."?a++:a>0&&(s===""?(i.splice(l+1,a),a=0):(i.splice(l,2),a--));return e=i.join("/"),e===""&&(e=n?"/":"."),r?(r.path=e,re(r)):e}w.normalize=Xt;function Yn(t,e){t===""&&(t="."),e===""&&(e=".");var r=ke(e),n=ke(t);if(n&&(t=n.path||"/"),r&&!r.scheme)return n&&(r.scheme=n.scheme),re(r);if(r||e.match(Ua))return e;if(n&&!n.host&&!n.path)return n.host=e,re(n);var i=e.charAt(0)==="/"?e:Xt(t.replace(/\/+$/,"")+"/"+e);return n?(n.path=i,re(n)):i}w.join=Yn;w.isAbsolute=function(t){return t.charAt(0)==="/"||jn.test(t)};function Ka(t,e){t===""&&(t="."),t=t.replace(/\/$/,"");for(var r=0;e.indexOf(t+"/")!==0;){var n=t.lastIndexOf("/");if(n<0||(t=t.slice(0,n),t.match(/^([^\/]+:\/)?\/*$/)))return e;++r}return Array(r+1).join("../")+e.substr(t.length+1)}w.relative=Ka;var Qn=(function(){var t=Object.create(null);return!("__proto__"in t)})();function Xn(t){return t}function Ja(t){return Zn(t)?"$"+t:t}w.toSetString=Qn?Xn:Ja;function ja(t){return Zn(t)?t.slice(1):t}w.fromSetString=Qn?Xn:ja;function Zn(t){if(!t)return!1;var e=t.length;if(e<9||t.charCodeAt(e-1)!==95||t.charCodeAt(e-2)!==95||t.charCodeAt(e-3)!==111||t.charCodeAt(e-4)!==116||t.charCodeAt(e-5)!==111||t.charCodeAt(e-6)!==114||t.charCodeAt(e-7)!==112||t.charCodeAt(e-8)!==95||t.charCodeAt(e-9)!==95)return!1;for(var r=e-10;r>=0;r--)if(t.charCodeAt(r)!==36)return!1;return!0}function Ya(t,e,r){var n=ne(t.source,e.source);return n!==0||(n=t.originalLine-e.originalLine,n!==0)||(n=t.originalColumn-e.originalColumn,n!==0||r)||(n=t.generatedColumn-e.generatedColumn,n!==0)||(n=t.generatedLine-e.generatedLine,n!==0)?n:ne(t.name,e.name)}w.compareByOriginalPositions=Ya;function Qa(t,e,r){var n=t.generatedLine-e.generatedLine;return n!==0||(n=t.generatedColumn-e.generatedColumn,n!==0||r)||(n=ne(t.source,e.source),n!==0)||(n=t.originalLine-e.originalLine,n!==0)||(n=t.originalColumn-e.originalColumn,n!==0)?n:ne(t.name,e.name)}w.compareByGeneratedPositionsDeflated=Qa;function ne(t,e){return t===e?0:t===null?1:e===null?-1:t>e?1:-1}function Xa(t,e){var r=t.generatedLine-e.generatedLine;return r!==0||(r=t.generatedColumn-e.generatedColumn,r!==0)||(r=ne(t.source,e.source),r!==0)||(r=t.originalLine-e.originalLine,r!==0)||(r=t.originalColumn-e.originalColumn,r!==0)?r:ne(t.name,e.name)}w.compareByGeneratedPositionsInflated=Xa;function Za(t){return JSON.parse(t.replace(/^\)]}'[^\n]*\n/,""))}w.parseSourceMapInput=Za;function $a(t,e,r){if(e=e||"",t&&(t[t.length-1]!=="/"&&e[0]!=="/"&&(t+="/"),e=t+e),r){var n=ke(r);if(!n)throw new Error("sourceMapURL could not be parsed");if(n.path){var i=n.path.lastIndexOf("/");i>=0&&(n.path=n.path.substring(0,i+1))}e=Yn(re(n),e)}return Xt(e)}w.computeSourceURL=$a});var er=v($n=>{f();var Zt=ie(),$t=Object.prototype.hasOwnProperty,Q=typeof Map<"u";function z(){this._array=[],this._set=Q?new Map:Object.create(null)}z.fromArray=function(e,r){for(var n=new z,i=0,s=e.length;i<s;i++)n.add(e[i],r);return n};z.prototype.size=function(){return Q?this._set.size:Object.getOwnPropertyNames(this._set).length};z.prototype.add=function(e,r){var n=Q?e:Zt.toSetString(e),i=Q?this.has(e):$t.call(this._set,n),s=this._array.length;(!i||r)&&this._array.push(e),i||(Q?this._set.set(e,s):this._set[n]=s)};z.prototype.has=function(e){if(Q)return this._set.has(e);var r=Zt.toSetString(e);return $t.call(this._set,r)};z.prototype.indexOf=function(e){if(Q){var r=this._set.get(e);if(r>=0)return r}else{var n=Zt.toSetString(e);if($t.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')};z.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)};z.prototype.toArray=function(){return this._array.slice()};$n.ArraySet=z});var ri=v(ti=>{f();var ei=ie();function eo(t,e){var r=t.generatedLine,n=e.generatedLine,i=t.generatedColumn,s=e.generatedColumn;return n>r||n==r&&s>=i||ei.compareByGeneratedPositionsInflated(t,e)<=0}function nt(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}nt.prototype.unsortedForEach=function(e,r){this._array.forEach(e,r)};nt.prototype.add=function(e){eo(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))};nt.prototype.toArray=function(){return this._sorted||(this._array.sort(ei.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};ti.MappingList=nt});var tr=v(ni=>{f();var _e=Qt(),y=ie(),it=er().ArraySet,to=ri().MappingList;function I(t){t||(t={}),this._file=y.getArg(t,"file",null),this._sourceRoot=y.getArg(t,"sourceRoot",null),this._skipValidation=y.getArg(t,"skipValidation",!1),this._sources=new it,this._names=new it,this._mappings=new to,this._sourcesContents=null}I.prototype._version=3;I.fromSourceMap=function(e){var r=e.sourceRoot,n=new I({file:e.file,sourceRoot:r});return e.eachMapping(function(i){var s={generated:{line:i.generatedLine,column:i.generatedColumn}};i.source!=null&&(s.source=i.source,r!=null&&(s.source=y.relative(r,s.source)),s.original={line:i.originalLine,column:i.originalColumn},i.name!=null&&(s.name=i.name)),n.addMapping(s)}),e.sources.forEach(function(i){var s=i;r!==null&&(s=y.relative(r,i)),n._sources.has(s)||n._sources.add(s);var a=e.sourceContentFor(i);a!=null&&n.setSourceContent(i,a)}),n};I.prototype.addMapping=function(e){var r=y.getArg(e,"generated"),n=y.getArg(e,"original",null),i=y.getArg(e,"source",null),s=y.getArg(e,"name",null);this._skipValidation||this._validateMapping(r,n,i,s),i!=null&&(i=String(i),this._sources.has(i)||this._sources.add(i)),s!=null&&(s=String(s),this._names.has(s)||this._names.add(s)),this._mappings.add({generatedLine:r.line,generatedColumn:r.column,originalLine:n!=null&&n.line,originalColumn:n!=null&&n.column,source:i,name:s})};I.prototype.setSourceContent=function(e,r){var n=e;this._sourceRoot!=null&&(n=y.relative(this._sourceRoot,n)),r!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[y.toSetString(n)]=r):this._sourcesContents&&(delete this._sourcesContents[y.toSetString(n)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))};I.prototype.applySourceMap=function(e,r,n){var i=r;if(r==null){if(e.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);i=e.file}var s=this._sourceRoot;s!=null&&(i=y.relative(s,i));var a=new it,l=new it;this._mappings.unsortedForEach(function(u){if(u.source===i&&u.originalLine!=null){var o=e.originalPositionFor({line:u.originalLine,column:u.originalColumn});o.source!=null&&(u.source=o.source,n!=null&&(u.source=y.join(n,u.source)),s!=null&&(u.source=y.relative(s,u.source)),u.originalLine=o.line,u.originalColumn=o.column,o.name!=null&&(u.name=o.name))}var h=u.source;h!=null&&!a.has(h)&&a.add(h);var c=u.name;c!=null&&!l.has(c)&&l.add(c)},this),this._sources=a,this._names=l,e.sources.forEach(function(u){var o=e.sourceContentFor(u);o!=null&&(n!=null&&(u=y.join(n,u)),s!=null&&(u=y.relative(s,u)),this.setSourceContent(u,o))},this)};I.prototype._validateMapping=function(e,r,n,i){if(r&&typeof r.line!="number"&&typeof r.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!r&&!n&&!i)){if(e&&"line"in e&&"column"in e&&r&&"line"in r&&"column"in r&&e.line>0&&e.column>=0&&r.line>0&&r.column>=0&&n)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:r,name:i}))}};I.prototype._serializeMappings=function(){for(var e=0,r=1,n=0,i=0,s=0,a=0,l="",u,o,h,c,d=this._mappings.toArray(),g=0,b=d.length;g<b;g++){if(o=d[g],u="",o.generatedLine!==r)for(e=0;o.generatedLine!==r;)u+=";",r++;else if(g>0){if(!y.compareByGeneratedPositionsInflated(o,d[g-1]))continue;u+=","}u+=_e.encode(o.generatedColumn-e),e=o.generatedColumn,o.source!=null&&(c=this._sources.indexOf(o.source),u+=_e.encode(c-a),a=c,u+=_e.encode(o.originalLine-1-i),i=o.originalLine-1,u+=_e.encode(o.originalColumn-n),n=o.originalColumn,o.name!=null&&(h=this._names.indexOf(o.name),u+=_e.encode(h-s),s=h)),l+=u}return l};I.prototype._generateSourcesContent=function(e,r){return e.map(function(n){if(!this._sourcesContents)return null;r!=null&&(n=y.relative(r,n));var i=y.toSetString(n);return Object.prototype.hasOwnProperty.call(this._sourcesContents,i)?this._sourcesContents[i]:null},this)};I.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(e.file=this._file),this._sourceRoot!=null&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e};I.prototype.toString=function(){return JSON.stringify(this.toJSON())};ni.SourceMapGenerator=I});var ii=v(X=>{f();X.GREATEST_LOWER_BOUND=1;X.LEAST_UPPER_BOUND=2;function rr(t,e,r,n,i,s){var a=Math.floor((e-t)/2)+t,l=i(r,n[a],!0);return l===0?a:l>0?e-a>1?rr(a,e,r,n,i,s):s==X.LEAST_UPPER_BOUND?e<n.length?e:-1:a:a-t>1?rr(t,a,r,n,i,s):s==X.LEAST_UPPER_BOUND?a:t<0?-1:t}X.search=function(e,r,n,i){if(r.length===0)return-1;var s=rr(-1,r.length,e,r,n,i||X.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&n(r[s],r[s-1],!0)===0;)--s;return s}});var ai=v(si=>{f();function nr(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function ro(t,e){return Math.round(t+Math.random()*(e-t))}function ir(t,e,r,n){if(r<n){var i=ro(r,n),s=r-1;nr(t,i,n);for(var a=t[n],l=r;l<n;l++)e(t[l],a)<=0&&(s+=1,nr(t,s,l));nr(t,s+1,l);var u=s+1;ir(t,e,r,u-1),ir(t,e,u+1,n)}}si.quickSort=function(t,e){ir(t,e,0,t.length-1)}});var li=v(st=>{f();var p=ie(),sr=ii(),se=er().ArraySet,no=Qt(),ye=ai().quickSort;function k(t,e){var r=t;return typeof t=="string"&&(r=p.parseSourceMapInput(t)),r.sections!=null?new N(r,e):new S(r,e)}k.fromSourceMap=function(t,e){return S.fromSourceMap(t,e)};k.prototype._version=3;k.prototype.__generatedMappings=null;Object.defineProperty(k.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}});k.prototype.__originalMappings=null;Object.defineProperty(k.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}});k.prototype._charIsMappingSeparator=function(e,r){var n=e.charAt(r);return n===";"||n===","};k.prototype._parseMappings=function(e,r){throw new Error("Subclasses must implement _parseMappings")};k.GENERATED_ORDER=1;k.ORIGINAL_ORDER=2;k.GREATEST_LOWER_BOUND=1;k.LEAST_UPPER_BOUND=2;k.prototype.eachMapping=function(e,r,n){var i=r||null,s=n||k.GENERATED_ORDER,a;switch(s){case k.GENERATED_ORDER:a=this._generatedMappings;break;case k.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var l=this.sourceRoot;a.map(function(u){var o=u.source===null?null:this._sources.at(u.source);return o=p.computeSourceURL(l,o,this._sourceMapURL),{source:o,generatedLine:u.generatedLine,generatedColumn:u.generatedColumn,originalLine:u.originalLine,originalColumn:u.originalColumn,name:u.name===null?null:this._names.at(u.name)}},this).forEach(e,i)};k.prototype.allGeneratedPositionsFor=function(e){var r=p.getArg(e,"line"),n={source:p.getArg(e,"source"),originalLine:r,originalColumn:p.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var i=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",p.compareByOriginalPositions,sr.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(e.column===void 0)for(var l=a.originalLine;a&&a.originalLine===l;)i.push({line:p.getArg(a,"generatedLine",null),column:p.getArg(a,"generatedColumn",null),lastColumn:p.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var u=a.originalColumn;a&&a.originalLine===r&&a.originalColumn==u;)i.push({line:p.getArg(a,"generatedLine",null),column:p.getArg(a,"generatedColumn",null),lastColumn:p.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return i};st.SourceMapConsumer=k;function S(t,e){var r=t;typeof t=="string"&&(r=p.parseSourceMapInput(t));var n=p.getArg(r,"version"),i=p.getArg(r,"sources"),s=p.getArg(r,"names",[]),a=p.getArg(r,"sourceRoot",null),l=p.getArg(r,"sourcesContent",null),u=p.getArg(r,"mappings"),o=p.getArg(r,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);a&&(a=p.normalize(a)),i=i.map(String).map(p.normalize).map(function(h){return a&&p.isAbsolute(a)&&p.isAbsolute(h)?p.relative(a,h):h}),this._names=se.fromArray(s.map(String),!0),this._sources=se.fromArray(i,!0),this._absoluteSources=this._sources.toArray().map(function(h){return p.computeSourceURL(a,h,e)}),this.sourceRoot=a,this.sourcesContent=l,this._mappings=u,this._sourceMapURL=e,this.file=o}S.prototype=Object.create(k.prototype);S.prototype.consumer=k;S.prototype._findSourceIndex=function(t){var e=t;if(this.sourceRoot!=null&&(e=p.relative(this.sourceRoot,e)),this._sources.has(e))return this._sources.indexOf(e);var r;for(r=0;r<this._absoluteSources.length;++r)if(this._absoluteSources[r]==t)return r;return-1};S.fromSourceMap=function(e,r){var n=Object.create(S.prototype),i=n._names=se.fromArray(e._names.toArray(),!0),s=n._sources=se.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=r,n._absoluteSources=n._sources.toArray().map(function(g){return p.computeSourceURL(n.sourceRoot,g,r)});for(var a=e._mappings.toArray().slice(),l=n.__generatedMappings=[],u=n.__originalMappings=[],o=0,h=a.length;o<h;o++){var c=a[o],d=new oi;d.generatedLine=c.generatedLine,d.generatedColumn=c.generatedColumn,c.source&&(d.source=s.indexOf(c.source),d.originalLine=c.originalLine,d.originalColumn=c.originalColumn,c.name&&(d.name=i.indexOf(c.name)),u.push(d)),l.push(d)}return ye(n.__originalMappings,p.compareByOriginalPositions),n};S.prototype._version=3;Object.defineProperty(S.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function oi(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}S.prototype._parseMappings=function(e,r){for(var n=1,i=0,s=0,a=0,l=0,u=0,o=e.length,h=0,c={},d={},g=[],b=[],_,D,x,U,we;h<o;)if(e.charAt(h)===";")n++,h++,i=0;else if(e.charAt(h)===",")h++;else{for(_=new oi,_.generatedLine=n,U=h;U<o&&!this._charIsMappingSeparator(e,U);U++);if(D=e.slice(h,U),x=c[D],x)h+=D.length;else{for(x=[];h<U;)no.decode(e,h,d),we=d.value,h=d.rest,x.push(we);if(x.length===2)throw new Error("Found a source, but no line and column");if(x.length===3)throw new Error("Found a source and line, but no column");c[D]=x}_.generatedColumn=i+x[0],i=_.generatedColumn,x.length>1&&(_.source=l+x[1],l+=x[1],_.originalLine=s+x[2],s=_.originalLine,_.originalLine+=1,_.originalColumn=a+x[3],a=_.originalColumn,x.length>4&&(_.name=u+x[4],u+=x[4])),b.push(_),typeof _.originalLine=="number"&&g.push(_)}ye(b,p.compareByGeneratedPositionsDeflated),this.__generatedMappings=b,ye(g,p.compareByOriginalPositions),this.__originalMappings=g};S.prototype._findMapping=function(e,r,n,i,s,a){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[i]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[i]);return sr.search(e,r,s,a)};S.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var r=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(r.generatedLine===n.generatedLine){r.lastGeneratedColumn=n.generatedColumn-1;continue}}r.lastGeneratedColumn=1/0}};S.prototype.originalPositionFor=function(e){var r={generatedLine:p.getArg(e,"line"),generatedColumn:p.getArg(e,"column")},n=this._findMapping(r,this._generatedMappings,"generatedLine","generatedColumn",p.compareByGeneratedPositionsDeflated,p.getArg(e,"bias",k.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===r.generatedLine){var s=p.getArg(i,"source",null);s!==null&&(s=this._sources.at(s),s=p.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var a=p.getArg(i,"name",null);return a!==null&&(a=this._names.at(a)),{source:s,line:p.getArg(i,"originalLine",null),column:p.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};S.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return e==null}):!1};S.prototype.sourceContentFor=function(e,r){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var i=e;this.sourceRoot!=null&&(i=p.relative(this.sourceRoot,i));var s;if(this.sourceRoot!=null&&(s=p.urlParse(this.sourceRoot))){var a=i.replace(/^file:\/\//,"");if(s.scheme=="file"&&this._sources.has(a))return this.sourcesContent[this._sources.indexOf(a)];if((!s.path||s.path=="/")&&this._sources.has("/"+i))return this.sourcesContent[this._sources.indexOf("/"+i)]}if(r)return null;throw new Error('"'+i+'" is not in the SourceMap.')};S.prototype.generatedPositionFor=function(e){var r=p.getArg(e,"source");if(r=this._findSourceIndex(r),r<0)return{line:null,column:null,lastColumn:null};var n={source:r,originalLine:p.getArg(e,"line"),originalColumn:p.getArg(e,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",p.compareByOriginalPositions,p.getArg(e,"bias",k.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===n.source)return{line:p.getArg(s,"generatedLine",null),column:p.getArg(s,"generatedColumn",null),lastColumn:p.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}};st.BasicSourceMapConsumer=S;function N(t,e){var r=t;typeof t=="string"&&(r=p.parseSourceMapInput(t));var n=p.getArg(r,"version"),i=p.getArg(r,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new se,this._names=new se;var s={line:-1,column:0};this._sections=i.map(function(a){if(a.url)throw new Error("Support for url field in sections not implemented.");var l=p.getArg(a,"offset"),u=p.getArg(l,"line"),o=p.getArg(l,"column");if(u<s.line||u===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=l,{generatedOffset:{generatedLine:u+1,generatedColumn:o+1},consumer:new k(p.getArg(a,"map"),e)}})}N.prototype=Object.create(k.prototype);N.prototype.constructor=k;N.prototype._version=3;Object.defineProperty(N.prototype,"sources",{get:function(){for(var t=[],e=0;e<this._sections.length;e++)for(var r=0;r<this._sections[e].consumer.sources.length;r++)t.push(this._sections[e].consumer.sources[r]);return t}});N.prototype.originalPositionFor=function(e){var r={generatedLine:p.getArg(e,"line"),generatedColumn:p.getArg(e,"column")},n=sr.search(r,this._sections,function(s,a){var l=s.generatedLine-a.generatedOffset.generatedLine;return l||s.generatedColumn-a.generatedOffset.generatedColumn}),i=this._sections[n];return i?i.consumer.originalPositionFor({line:r.generatedLine-(i.generatedOffset.generatedLine-1),column:r.generatedColumn-(i.generatedOffset.generatedLine===r.generatedLine?i.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}};N.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})};N.prototype.sourceContentFor=function(e,r){for(var n=0;n<this._sections.length;n++){var i=this._sections[n],s=i.consumer.sourceContentFor(e,!0);if(s)return s}if(r)return null;throw new Error('"'+e+'" is not in the SourceMap.')};N.prototype.generatedPositionFor=function(e){for(var r=0;r<this._sections.length;r++){var n=this._sections[r];if(n.consumer._findSourceIndex(p.getArg(e,"source"))!==-1){var i=n.consumer.generatedPositionFor(e);if(i){var s={line:i.line+(n.generatedOffset.generatedLine-1),column:i.column+(n.generatedOffset.generatedLine===i.line?n.generatedOffset.generatedColumn-1:0)};return s}}}return{line:null,column:null}};N.prototype._parseMappings=function(e,r){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var i=this._sections[n],s=i.consumer._generatedMappings,a=0;a<s.length;a++){var l=s[a],u=i.consumer._sources.at(l.source);u=p.computeSourceURL(i.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var o=null;l.name&&(o=i.consumer._names.at(l.name),this._names.add(o),o=this._names.indexOf(o));var h={source:u,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:o};this.__generatedMappings.push(h),typeof h.originalLine=="number"&&this.__originalMappings.push(h)}ye(this.__generatedMappings,p.compareByGeneratedPositionsDeflated),ye(this.__originalMappings,p.compareByOriginalPositions)};st.IndexedSourceMapConsumer=N});var ci=v(ui=>{f();var io=tr().SourceMapGenerator,at=ie(),so=/(\r?\n)/,ao=10,ae="$$$isSourceNode$$$";function E(t,e,r,n,i){this.children=[],this.sourceContents={},this.line=t??null,this.column=e??null,this.source=r??null,this.name=i??null,this[ae]=!0,n!=null&&this.add(n)}E.fromStringWithSourceMap=function(e,r,n){var i=new E,s=e.split(so),a=0,l=function(){var d=b(),g=b()||"";return d+g;function b(){return a<s.length?s[a++]:void 0}},u=1,o=0,h=null;return r.eachMapping(function(d){if(h!==null)if(u<d.generatedLine)c(h,l()),u++,o=0;else{var g=s[a]||"",b=g.substr(0,d.generatedColumn-o);s[a]=g.substr(d.generatedColumn-o),o=d.generatedColumn,c(h,b),h=d;return}for(;u<d.generatedLine;)i.add(l()),u++;if(o<d.generatedColumn){var g=s[a]||"";i.add(g.substr(0,d.generatedColumn)),s[a]=g.substr(d.generatedColumn),o=d.generatedColumn}h=d},this),a<s.length&&(h&&c(h,l()),i.add(s.splice(a).join(""))),r.sources.forEach(function(d){var g=r.sourceContentFor(d);g!=null&&(n!=null&&(d=at.join(n,d)),i.setSourceContent(d,g))}),i;function c(d,g){if(d===null||d.source===void 0)i.add(g);else{var b=n?at.join(n,d.source):d.source;i.add(new E(d.originalLine,d.originalColumn,b,g,d.name))}}};E.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(r){this.add(r)},this);else if(e[ae]||typeof e=="string")e&&this.children.push(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.prepend=function(e){if(Array.isArray(e))for(var r=e.length-1;r>=0;r--)this.prepend(e[r]);else if(e[ae]||typeof e=="string")this.children.unshift(e);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);return this};E.prototype.walk=function(e){for(var r,n=0,i=this.children.length;n<i;n++)r=this.children[n],r[ae]?r.walk(e):r!==""&&e(r,{source:this.source,line:this.line,column:this.column,name:this.name})};E.prototype.join=function(e){var r,n,i=this.children.length;if(i>0){for(r=[],n=0;n<i-1;n++)r.push(this.children[n]),r.push(e);r.push(this.children[n]),this.children=r}return this};E.prototype.replaceRight=function(e,r){var n=this.children[this.children.length-1];return n[ae]?n.replaceRight(e,r):typeof n=="string"?this.children[this.children.length-1]=n.replace(e,r):this.children.push("".replace(e,r)),this};E.prototype.setSourceContent=function(e,r){this.sourceContents[at.toSetString(e)]=r};E.prototype.walkSourceContents=function(e){for(var r=0,n=this.children.length;r<n;r++)this.children[r][ae]&&this.children[r].walkSourceContents(e);for(var i=Object.keys(this.sourceContents),r=0,n=i.length;r<n;r++)e(at.fromSetString(i[r]),this.sourceContents[i[r]])};E.prototype.toString=function(){var e="";return this.walk(function(r){e+=r}),e};E.prototype.toStringWithSourceMap=function(e){var r={code:"",line:1,column:0},n=new io(e),i=!1,s=null,a=null,l=null,u=null;return this.walk(function(o,h){r.code+=o,h.source!==null&&h.line!==null&&h.column!==null?((s!==h.source||a!==h.line||l!==h.column||u!==h.name)&&n.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:r.line,column:r.column},name:h.name}),s=h.source,a=h.line,l=h.column,u=h.name,i=!0):i&&(n.addMapping({generated:{line:r.line,column:r.column}}),s=null,i=!1);for(var c=0,d=o.length;c<d;c++)o.charCodeAt(c)===ao?(r.line++,r.column=0,c+1===d?(s=null,i=!1):i&&n.addMapping({source:h.source,original:{line:h.line,column:h.column},generated:{line:r.line,column:r.column},name:h.name})):r.column++}),this.walkSourceContents(function(o,h){n.setSourceContent(o,h)}),{code:r.code,map:n}};ui.SourceNode=E});var hi=v(ot=>{f();ot.SourceMapGenerator=tr().SourceMapGenerator;ot.SourceMapConsumer=li().SourceMapConsumer;ot.SourceNode=ci().SourceNode});var gi=v((lt,pi)=>{"use strict";f();lt.__esModule=!0;var or=P(),Z=void 0;try{(typeof define!="function"||!define.amd)&&(fi=hi(),Z=fi.SourceNode)}catch{}var fi;Z||(Z=function(t,e,r,n){this.src="",n&&this.add(n)},Z.prototype={add:function(e){or.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){or.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function ar(t,e,r){if(or.isArray(t)){for(var n=[],i=0,s=t.length;i<s;i++)n.push(e.wrap(t[i],r));return n}else if(typeof t=="boolean"||typeof t=="number")return t+"";return t}function di(t){this.srcFile=t,this.source=[]}di.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,r){this.source.unshift(this.wrap(e,r))},push:function(e,r){this.source.push(this.wrap(e,r))},merge:function(){var e=this.empty();return this.each(function(r){e.add(["  ",r,`
`])}),e},each:function(e){for(var r=0,n=this.source.length;r<n;r++)e(this.source[r])},empty:function(){var e=this.currentLocation||{start:{}};return new Z(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var r=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return e instanceof Z?e:(e=ar(e,this,r),new Z(r.start.line,r.start.column,this.srcFile,e))},functionCall:function(e,r,n){return n=this.generateList(n),this.wrap([e,r?"."+r+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var r=this,n=[];Object.keys(e).forEach(function(s){var a=ar(e[s],r);a!=="undefined"&&n.push([r.quotedString(s),":",a])});var i=this.generateList(n);return i.prepend("{"),i.add("}"),i},generateList:function(e){for(var r=this.empty(),n=0,i=e.length;n<i;n++)n&&r.add(","),r.add(ar(e[n],this));return r},generateArray:function(e){var r=this.generateList(e);return r.prepend("["),r.add("]"),r}};lt.default=di;pi.exports=lt.default});var _i=v((ut,ki)=>{"use strict";f();ut.__esModule=!0;function bi(t){return t&&t.__esModule?t:{default:t}}var mi=Ue(),oo=A(),lr=bi(oo),lo=P(),uo=gi(),vi=bi(uo);function oe(t){this.value=t}function le(){}le.prototype={nameLookup:function(e,r){return this.internalNameLookup(e,r)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=mi.COMPILER_REVISION,r=mi.REVISION_CHANGES[e];return[e,r]},appendToBuffer:function(e,r,n){return lo.isArray(e)||(e=[e]),e=this.source.wrap(e,r),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,r){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(r),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,r,n,i){this.environment=e,this.options=r,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,r),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var s=e.opcodes,a=void 0,l=void 0,u=void 0,o=void 0;for(u=0,o=s.length;u<o;u++)a=s[u],this.source.currentLocation=a.loc,l=l||a.loc,this[a.opcode].apply(this,a.args);if(this.source.currentLocation=l,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new lr.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),i?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var h=this.createFunctionContext(i);if(this.isChild)return h;var c={compiler:this.compilerInfo(),main:h};this.decorators&&(c.main_d=this.decorators,c.useDecorators=!0);var d=this.context,g=d.programs,b=d.decorators;for(u=0,o=g.length;u<o;u++)g[u]&&(c[u]=g[u],b[u]&&(c[u+"_d"]=b[u],c.useDecorators=!0));return this.environment.usePartial&&(c.usePartial=!0),this.options.data&&(c.useData=!0),this.useDepths&&(c.useDepths=!0),this.useBlockParams&&(c.useBlockParams=!0),this.options.compat&&(c.compat=!0),i?c.compilerOptions=this.options:(c.compiler=JSON.stringify(c.compiler),this.source.currentLocation={start:{line:1,column:0}},c=this.objectLiteral(c),r.srcName?(c=c.toStringWithSourceMap({file:r.destName}),c.map=c.map&&c.map.toString()):c=c.toString()),c},preamble:function(){this.lastContext=0,this.source=new vi.default(this.options.srcName),this.decorators=new vi.default(this.options.srcName)},createFunctionContext:function(e){var r=this,n="",i=this.stackVars.concat(this.registers.list);i.length>0&&(n+=", "+i.join(", "));var s=0;Object.keys(this.aliases).forEach(function(u){var o=r.aliases[u];o.children&&o.referenceCount>1&&(n+=", alias"+ ++s+"="+u,o.children[0]="alias"+s)}),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var a=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&a.push("blockParams"),this.useDepths&&a.push("depths");var l=this.mergeSource(n);return e?(a.push(l),Function.apply(this,a)):this.source.wrap(["function(",a.join(","),`) {
  `,l,"}"])},mergeSource:function(e){var r=this.environment.isSimple,n=!this.forceBuffer,i=void 0,s=void 0,a=void 0,l=void 0;return this.source.each(function(u){u.appendToBuffer?(a?u.prepend("  + "):a=u,l=u):(a&&(s?a.prepend("buffer += "):i=!0,l.add(";"),a=l=void 0),s=!0,r||(n=!1))}),n?a?(a.prepend("return "),l.add(";")):s||this.source.push('return "";'):(e+=", buffer = "+(i?"":this.initializeBuffer()),a?(a.prepend("return buffer + "),l.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(i?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(e){var r=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var i=this.popStack();n.splice(1,0,i),this.push(this.source.functionCall(r,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)];this.setupHelperArgs("",0,r,!0),this.flushInline();var n=this.topStack();r.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",r),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack(function(r){return[" != null ? ",r,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,r,n,i){var s=0;!i&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(e[s++])):this.pushContext(),this.resolvePath("context",e,s,r,n)},lookupBlockParam:function(e,r){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",r,1)},lookupData:function(e,r,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",r,0,!0,n)},resolvePath:function(e,r,n,i,s){var a=this;if(this.options.strict||this.options.assumeObjects){this.push(co(this.options.strict&&s,this,r,n,e));return}for(var l=r.length;n<l;n++)this.replaceStack(function(u){var o=a.nameLookup(u,r[n],e);return i?[" && ",o]:[" != null ? ",o," : ",u]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,r){this.pushContext(),this.pushString(r),r!=="SubExpression"&&(typeof e=="string"?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,r){var n=this.nameLookup("decorators",r,"decorator"),i=this.setupHelperArgs(r,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",i])," || fn;"])},invokeHelper:function(e,r,n){var i=this.popStack(),s=this.setupHelper(e,r),a=[];n&&a.push(s.name),a.push(i),this.options.strict||a.push(this.aliasable("container.hooks.helperMissing"));var l=["(",this.itemsSeparatedBy(a,"||"),")"],u=this.source.functionCall(l,"call",s.callParams);this.push(u)},itemsSeparatedBy:function(e,r){var n=[];n.push(e[0]);for(var i=1;i<e.length;i++)n.push(r,e[i]);return n},invokeKnownHelper:function(e,r){var n=this.setupHelper(e,r);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,r){this.useRegister("helper");var n=this.popStack();this.emptyHash();var i=this.setupHelper(0,e,r),s=this.lastHelper=this.nameLookup("helpers",e,"helper"),a=["(","(helper = ",s," || ",n,")"];this.options.strict||(a[0]="(helper = ",a.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",a,i.paramsInit?["),(",i.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",i.callParams)," : helper))"])},invokePartial:function(e,r,n){var i=[],s=this.setupParams(r,1,i);e&&(r=this.popStack(),delete s.name),n&&(s.indent=JSON.stringify(n)),s.helpers="helpers",s.partials="partials",s.decorators="container.decorators",e?i.unshift(r):i.unshift(this.nameLookup("partials",r,"partial")),this.options.compat&&(s.depths="depths"),s=this.objectLiteral(s),i.push(s),this.push(this.source.functionCall("container.invokePartial","",i))},assignToHash:function(e){var r=this.popStack(),n=void 0,i=void 0,s=void 0;this.trackIds&&(s=this.popStack()),this.stringParams&&(i=this.popStack(),n=this.popStack());var a=this.hash;n&&(a.contexts[e]=n),i&&(a.types[e]=i),s&&(a.ids[e]=s),a.values[e]=r},pushId:function(e,r,n){e==="BlockParam"?this.pushStackLiteral("blockParams["+r[0]+"].path["+r[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):e==="PathExpression"?this.pushString(r):e==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:le,compileChildren:function(e,r){for(var n=e.children,i=void 0,s=void 0,a=0,l=n.length;a<l;a++){i=n[a],s=new this.compiler;var u=this.matchExistingProgram(i);if(u==null){this.context.programs.push("");var o=this.context.programs.length;i.index=o,i.name="program"+o,this.context.programs[o]=s.compile(i,r,this.context,!this.precompile),this.context.decorators[o]=s.decorators,this.context.environments[o]=i,this.useDepths=this.useDepths||s.useDepths,this.useBlockParams=this.useBlockParams||s.useBlockParams,i.useDepths=this.useDepths,i.useBlockParams=this.useBlockParams}else i.index=u.index,i.name="program"+u.index,this.useDepths=this.useDepths||u.useDepths,this.useBlockParams=this.useBlockParams||u.useBlockParams}},matchExistingProgram:function(e){for(var r=0,n=this.context.environments.length;r<n;r++){var i=this.context.environments[r];if(i&&i.equals(e))return i}},programExpression:function(e){var r=this.environment.children[e],n=[r.index,"data",r.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof oe||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new oe(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var r=["("],n=void 0,i=void 0,s=void 0;if(!this.isInline())throw new lr.default("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof oe)n=[a.value],r=["(",n],s=!0;else{i=!0;var l=this.incrStack();r=["((",this.push(l)," = ",a,")"],n=this.topStack()}var u=e.call(this,n);s||this.popStack(),i&&this.stackSlot--,this.push(r.concat(u,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var r=0,n=e.length;r<n;r++){var i=e[r];if(i instanceof oe)this.compileStack.push(i);else{var s=this.incrStack();this.pushSource([s," = ",i,";"]),this.compileStack.push(s)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var r=this.isInline(),n=(r?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof oe)return n.value;if(!r){if(!this.stackSlot)throw new lr.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,r=e[e.length-1];return r instanceof oe?r.value:r},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var r=this.aliases[e];return r?(r.referenceCount++,r):(r=this.aliases[e]=this.source.wrap(e),r.aliasable=!0,r.referenceCount=1,r)},setupHelper:function(e,r,n){var i=[],s=this.setupHelperArgs(r,e,i,n),a=this.nameLookup("helpers",r,"helper"),l=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:i,paramsInit:s,name:a,callParams:[l].concat(i)}},setupParams:function(e,r,n){var i={},s=[],a=[],l=[],u=!n,o=void 0;u&&(n=[]),i.name=this.quotedString(e),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack());var h=this.popStack(),c=this.popStack();(c||h)&&(i.fn=c||"container.noop",i.inverse=h||"container.noop");for(var d=r;d--;)o=this.popStack(),n[d]=o,this.trackIds&&(l[d]=this.popStack()),this.stringParams&&(a[d]=this.popStack(),s[d]=this.popStack());return u&&(i.args=this.source.generateArray(n)),this.trackIds&&(i.ids=this.source.generateArray(l)),this.stringParams&&(i.types=this.source.generateArray(a),i.contexts=this.source.generateArray(s)),this.options.data&&(i.data="data"),this.useBlockParams&&(i.blockParams="blockParams"),i},setupHelperArgs:function(e,r,n,i){var s=this.setupParams(e,r,n);return s.loc=JSON.stringify(this.source.currentLocation),s=this.objectLiteral(s),i?(this.useRegister("options"),n.push("options"),["options=",s]):n?(n.push(s),""):s}};(function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=le.RESERVED_WORDS={},r=0,n=t.length;r<n;r++)e[t[r]]=!0})();le.isValidJavaScriptVariableName=function(t){return!le.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)};function co(t,e,r,n,i){var s=e.popStack(),a=r.length;for(t&&a--;n<a;n++)s=e.nameLookup(s,r[n],i);return t?[e.aliasable("container.strict"),"(",s,", ",e.quotedString(r[n]),", ",JSON.stringify(e.source.currentLocation)," )"]:s}ut.default=le;ki.exports=ut.default});var Si=v((ct,xi)=>{"use strict";f();ct.__esModule=!0;function xe(t){return t&&t.__esModule?t:{default:t}}var ho=wn(),fo=xe(ho),po=Tt(),go=xe(po),ur=qn(),cr=Vn(),mo=_i(),vo=xe(mo),bo=Ft(),ko=xe(bo),_o=Dt(),yo=xe(_o),xo=fo.default.create;function yi(){var t=xo();return t.compile=function(e,r){return cr.compile(e,r,t)},t.precompile=function(e,r){return cr.precompile(e,r,t)},t.AST=go.default,t.Compiler=cr.Compiler,t.JavaScriptCompiler=vo.default,t.Parser=ur.parser,t.parse=ur.parse,t.parseWithoutProcessing=ur.parseWithoutProcessing,t}var ue=yi();ue.create=yi;yo.default(ue);ue.Visitor=ko.default;ue.default=ue;ct.default=ue;xi.exports=ct.default});var Ci=v((zl,wi)=>{f();var So=(Lr(),pr(Pr)),wo=(Br(),pr(Rr)),Se=Si();Se.registerHelper("eq",function(t,e){return t===e});Se.registerHelper("or",function(){return Array.prototype.slice.call(arguments,0,-1).some(Boolean)});Se.registerHelper("year",function(t){return t?t.substring(0,4):""});Se.registerHelper("formatDate",function(t){return t?t.substring(0,4):""});function Co(t){let e=wo.join("/","resume.hbs"),r=So.readFileSync(e,"utf-8");return Se.compile(r)(t)}wi.exports={render:Co}});f();var $=Ii(Ci(),1),Pi=$.default??$,Wl=Pi.render??$.render,Ul=Pi.pdfRenderOptions??$.pdfRenderOptions;export{Ul as pdfRenderOptions,Wl as render};
