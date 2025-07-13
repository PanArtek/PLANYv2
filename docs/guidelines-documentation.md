# Documentation Guidelines - PLANY Project

## 📋 Overview

Ten dokument zawiera standardowe templates i workflow dla dokumentowania pracy w projekcie PLANY. **Używaj tych templates po każdym ukończonym zadaniu.**

## 🔄 Workflow po ukończonym zadaniu

### Post-Task Checklist ✅
Po ukończeniu każdego zadania wykonaj:

1. ✅ **Update CLAUDE.md** - Dodaj entry w sekcji "Ostatnie zmiany"
2. ✅ **Create completion log** - Stwórz plik w docs/archive/
3. ✅ **Archive planning docs** - Przenieś plan-[task].md do docs/archive/
4. ✅ **Test build** - Uruchom `npm run build` i sprawdź wyniki
5. ✅ **Update current-state.md** - Zaktualizuj status w docs/notes/
6. ✅ **Commit changes** - Scommituj wszystkie zmiany

## 📝 CLAUDE.md Update Templates

### Template 1: Aktywne zadanie (dodaj do "Ostatnie zmiany")
```markdown
### [DATE] - [TASK_NAME] ([STATUS])
• **Status**: [🔄 W TRAKCIE / ✅ UKOŃCZONE / ❌ PROBLEM]
• **Problem**: [Opis problemu jeśli dotyczy]
• **Rozwiązanie**: [Opis rozwiązania]
• **Pliki zmodyfikowane**:
  - `[file_path]` - [opis zmian]
  - `[file_path]` - [opis zmian]
• **Build Result**: [✅ SUCCESS (X.XXs) / ❌ FAILED - error details]
• **Console Errors**: [✅ RESOLVED / ❌ STILL PRESENT - details]
• **Deployment**: [✅ Live na URL / 🔄 PENDING / ❌ FAILED]
```

### Template 2: Ukończone zadanie (przykład z projektu)
```markdown
### 2025-01-13 - Documentation Creation (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: Brak kompletnej dokumentacji projektu
• **Rozwiązanie**: 
  - Utworzono 5 plików dokumentacji w docs/
  - Przeprowadzono analizę całego projektu
  - Udokumentowano wszystkie komponenty i API
• **Pliki zmodyfikowane**:
  - `docs/specs/project-overview.md` - architektura i tech stack
  - `docs/specs/api-endpoints.md` - warstwa danych i konfiguracje
  - `docs/specs/components.md` - katalog komponentów z interfaces
  - `docs/specs/build-deploy.md` - komendy build i deployment
  - `docs/notes/current-state.md` - aktualny status projektu
• **Build Result**: ✅ SUCCESS (14.49s)
• **Console Errors**: ✅ RESOLVED - no issues
• **Deployment**: ✅ Live na https://panartek.github.io/PLANYv2
```

## 📋 Completion Log Templates

### Template completion log (docs/archive/completion-[task]-[date].md)
```markdown
# Task Completion Log: [TASK_NAME]

**Date**: [YYYY-MM-DD]
**Time Spent**: [X hours Y minutes]
**Status**: ✅ COMPLETED

## Problems Fixed
- [Problem 1]: [Solution description]
- [Problem 2]: [Solution description]

## Files Modified
### Created
- `[file_path]` - [description]
- `[file_path]` - [description]

### Modified
- `[file_path]` - [specific changes made]
- `[file_path]` - [specific changes made]

## Build Result
```bash
npm run build
# Build time: X.XXs
# Bundle size: XXXkB
# Status: SUCCESS/FAILED
```

## Next Steps
- [ ] [Next action item]
- [ ] [Next action item]

## Notes
[Any additional notes or observations]
```

### Przykład z projektu PLANY
```markdown
# Task Completion Log: GSAP Refactor

**Date**: 2025-01-13
**Time Spent**: 2 hours 30 minutes
**Status**: ✅ COMPLETED

## Problems Fixed
- GSAP console errors: `target .geometric-shape not found`
- Missing CSS classes for geometric button variants

## Files Modified
### Modified
- `src/styles/global.css:400-460` - added geometric button variants
- `src/components/sections/Services.astro:187-213` - updated hover animations
- `src/components/sections/Services.astro:324-339` - fixed GSAP selectors

## Build Result
```bash
npm run build
# Build time: 14.49s
# Bundle size: 187kB
# Status: SUCCESS
```

## Next Steps
- [x] Deploy to production
- [x] Monitor console for errors
- [x] Update documentation

## Notes
All GSAP animations now working correctly. No console errors in production.
```

## 📁 File Naming Conventions

### Planning Documents
```
plan-[feature-name].md              # Active planning document
plan-gsap-refactor.md              # Example
plan-contact-form-validation.md    # Example
```

### Specifications
```
spec-[module-name].md              # Technical specifications
spec-components.md                 # Example
spec-animation-system.md           # Example
```

### Debug Logs
```
debug-[issue-name].md              # Debugging documentation
debug-gsap-console-errors.md       # Example
debug-build-failures.md            # Example
```

### Completion Logs
```
completion-[task]-[date].md        # Task completion documentation
completion-gsap-refactor-2025-01-13.md     # Example
completion-documentation-2025-01-13.md     # Example
```

## 📂 File Organization Structure

```
PLANYv2/
├── CLAUDE.md                      # ✅ Active project instructions
├── plan-[current-task].md         # ✅ Current planning document
├── docs/
│   ├── plans/                     # 📋 Planning documents
│   │   ├── plan-feature-a.md
│   │   └── plan-feature-b.md
│   ├── specs/                     # 📚 Technical specifications
│   │   ├── project-overview.md
│   │   ├── components.md
│   │   └── build-deploy.md
│   ├── debug/                     # 🐛 Debug logs and issue tracking
│   │   ├── debug-gsap-errors.md
│   │   └── debug-build-issues.md
│   ├── notes/                     # 📝 Project notes and status
│   │   ├── current-state.md
│   │   └── meeting-notes.md
│   └── archive/                   # 📦 Completed documents
│       ├── completion-gsap-refactor-2025-01-13.md
│       ├── plan-initial-setup.md
│       └── debug-resolved-issues.md
```

### Reguły organizacji
- **Root directory** - tylko aktywne dokumenty (CLAUDE.md, aktualny plan)
- **docs/plans/** - planowanie przyszłych features
- **docs/specs/** - dokumentacja techniczna i specyfikacje
- **docs/debug/** - aktywne problemy i debugging
- **docs/notes/** - notatki projektowe i status
- **docs/archive/** - ukończone zadania i rozwiązane problemy

## 🎯 Template Prompts (Copy-Paste Ready)

### Prompt 1: Sprawdzenie dokumentacji przed zadaniem
```
Check docs/ for [TASK_NAME]. Review existing documentation, current-state.md, and any related specs before starting. Create plan-[task].md if needed.
```

### Prompt 2: Po ukończeniu zadania
```
Task [TASK_NAME] done. Follow documentation guidelines:
1. Update CLAUDE.md "Ostatnie zmiany" section
2. Create completion log in docs/archive/
3. Archive planning documents
4. Test build and verify results
5. Update current-state.md
```

### Prompt 3: Debugging session
```
Debug issue: [ISSUE_DESCRIPTION]. Create debug-[issue].md, document findings, and update when resolved.
```

### Prompt 4: Feature planning
```
Plan new feature: [FEATURE_NAME]. Create plan-[feature].md with requirements, technical approach, and implementation steps.
```

## 🔧 Practical Copy-Paste Templates

### Quick CLAUDE.md Update
```markdown
### 2025-[MM-DD] - [TASK] (COMPLETED)
• **Status**: ✅ UKOŃCZONE
• **Problem**: [Brief description]
• **Rozwiązanie**: [Solution implemented]
• **Pliki zmodyfikowane**:
  - `[file]` - [changes]
• **Build Result**: ✅ SUCCESS ([X]s)
• **Console Errors**: ✅ RESOLVED
• **Deployment**: ✅ Live na [URL]
```

### Quick Completion Log Header
```markdown
# Task Completion Log: [TASK]

**Date**: 2025-[MM-DD]
**Time Spent**: [duration]
**Status**: ✅ COMPLETED

## Problems Fixed
- 

## Files Modified
### Created
- 

### Modified
- 

## Build Result
npm run build # [result]

## Next Steps
- [ ] 
```

### Quick Plan Template
```markdown
# Plan: [FEATURE_NAME]

## Requirements
- 

## Technical Approach
- 

## Implementation Steps
1. 
2. 
3. 

## Files to Modify
- 

## Testing Plan
- 

## Success Criteria
- 
```

## 💡 Best Practices

### 1. Timing
- **Update documentation immediately** po ukończeniu zadania
- **Nie batch multiple tasks** - dokumentuj każde zadanie osobno
- **Archive completed plans** - utrzymuj porządek w docs/

### 2. Detail Level
- **Specific file paths** - nie ogólniki jak "components updated"
- **Exact error messages** - copy-paste console errors
- **Build times and sizes** - measurable metrics
- **Deployment URLs** - konkretne linki

### 3. Status Tracking
- **Use emoji indicators** - ✅ ❌ 🔄 dla szybkiej identyfikacji
- **Consistent format** - używaj templates, nie improvise
- **Update current-state.md** - sync with CLAUDE.md changes

## 🎯 Example Workflow

### Starting new task:
1. Check `docs/notes/current-state.md` for project status
2. Review relevant specs in `docs/specs/`
3. Create `plan-[task].md` if complex task
4. Begin implementation

### Completing task:
1. Test build: `npm run build`
2. Update CLAUDE.md with completion entry
3. Create `docs/archive/completion-[task]-[date].md`
4. Move `plan-[task].md` to `docs/archive/`
5. Update `docs/notes/current-state.md`
6. Commit all changes

### Example commit message:
```
feat: complete [task name]

- [specific changes made]
- Update documentation following guidelines
- Build: SUCCESS (14.5s), Bundle: 187KB
- Deployment: Live at [URL]

🤖 Generated with Claude Code
```

---

## 📋 Recent Refactors

### About Section "Eliminujemy chaos koordynacji" Refactor (2025-01-13)

**Completed**: Comprehensive layout and hierarchy refactor of About.astro section

**Problems Fixed**:
- **Monotonous layout** - Broke uniform grid into 3 distinct content blocks
- **Weak typography hierarchy** - Implemented proper scale: USP headings (text-2xl), values (text-3xl), supporting text (text-base)
- **Missing key USPs** - Added prominent showcase for: Wizja lokalna, Wycena 24h, Gwarancja 24 miesiące
- **No interactive elements** - Added dual CTAs with geometric icons and hover animations
- **Poor information architecture** - Restructured into logical flow: story → USPs → stats → benefits

**New Structure**:
1. **Block A**: Company story & main message (centered, clear hierarchy)
2. **Block B**: Key USPs showcase (3-column grid with geometric icons, hover effects)
3. **Block C**: Stats & supporting benefits (asymmetric 2-column layout)

**Visual Improvements**:
- Typography scale: text-3xl/4xl headings, text-2xl USP titles, text-lg supporting
- Color hierarchy: primary-dark (headings), accent-orange (highlights), neutral-dark (body)
- Geometric icons: Different shapes per USP (diamond/MapPin, hexagon/Clock, pentagon/Shield)
- Interactive hover: scale(1.05) transforms on USP cards, shadow-lg on CTAs
- Responsive design: md:grid-cols-3 → stacks on mobile, flex CTAs

**Technical Details**:
- Enhanced GSAP animations with staggered reveals (0.15s USPs, 0.1s stats)
- Proper semantic structure with h3/h4 hierarchy
- Mobile-first responsive breakpoints
- Accessibility: proper contrast ratios, semantic elements

**Files Modified**:
- `src/components/sections/About.astro` - Complete content restructure and animation updates

---

## ⚠️ Important Reminder

**Po każdym completed task przeczytaj ten plik i postępuj według wytycznych.**

Consistent documentation saves time, prevents confusion, and maintains project quality. Use these templates religiously for best results.