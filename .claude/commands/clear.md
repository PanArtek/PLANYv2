# RESET KONTEKSTU - POWRÓT DO GAÓWNYCH ZADAC

## = Instrukcje Reset

Cze[ Claude! Wykonujesz komend `/clear` - czas wróci do gBównych zadaD projektu.

### NAJPIERW - PRZECZYTAJ KOMPLETNIE:

1. **Odczytaj i przeanalizuj plik `claude.md`** - to gBówna specyfikacja projektu
2. **Odczytaj aktualny stan z `doc.md`** - sprawdz gdzie jeste[ w implementacji
3. **Zsynchronizuj si z aktualnym kodem** - przejrzyj struktur projektu

### THINK DEEPLY o aktualnym stanie:
- Które zadania z claude.md zostaBy ukoDczone?
- Co jest obecnie w trakcie implementacji?
- Jakie s nastpne priorytety zgodnie z fazami?
- Czy s jakie[ problemy do rozwizania?

## =Ë Po analizie plików - WYKONAJ:

### 1. AKTUALIZUJ doc.md
```markdown
## Current Status - [DATA]
- Completed: [lista ukoDczonych zadaD]
- In Progress: [obecne zadania]
- Next Priority: [nastpne zadania z claude.md]

## Issues Found
- [wszelkie problemy znalezione w kodzie]

## Immediate Next Steps
1. [najwa|niejsze zadanie do wykonania teraz]
2. [drugie w kolejno[ci]
3. [trzecie w kolejno[ci]
```

### 2. PRZEDSTAW STATUS REPORT
Podsumuj w 3-4 punktach:

 Co zostaBo zrobione (odwoBaj si do faz z claude.md)
= Co jest w trakcie
<¯ Co jest next (zgodnie z priorytetami z claude.md)
  Problemy do rozwizania (je[li jakie[)

### 3. ZAPROPONUJ AKCJ
Na podstawie analizy zaproponuj konkretn akcj:

- Kontynuowa implementacj konkretnego komponentu?
- Rozwiza znaleziony problem?
- Przej[ do nastpnej fazy z claude.md?
- Poprawi istniejcy kod?

## <¯ KLUCZOWE ZASADY:

### ZAWSZE SPRAWDy:
- [ ] GitHub Pages deployment status
- [ ] Czy build przechodzi bez bBdów
- [ ] Lighthouse performance score
- [ ] Mobile responsiveness
- [ ] GSAP animations performance

### PRIORYTETYZUJ ZGODNIE Z claude.md:
1. Hero Section z animacjami
2. Portfolio Grid (10 projektów + filtry)
3. Services Section (6 specjalizacji)
4. Contact Form (B2B optimized)
5. Performance & SEO

### BUSINESS GOALS:
Pamitaj - to strona lead generation dla firmy fit-out:

- **Target**: 15-25 leadów miesicznie
- **Audience**: B2B (zarzdcy, wBa[ciciele placówek, fundusze)
- **USP**: WBasny zespóB, kompleksowo[, elastyczno[

## ¡ GOTOWY DO DZIAAANIA

Po wykonaniu powy|szych kroków jeste[ ready do kontynuowania pracy zgodnie z planem z claude.md!

**Remember**: Aktualizuj doc.md po ka|dym significant progress!

---

## <® Jak u|ywa komendy /clear

### W Claude Code wpisz:
```bash
/clear
```

Claude automatycznie:

 Przeczyta claude.md (gBówn specyfikacj)
 Przeczyta doc.md (aktualny status)
 Przeanalizuje kod projektu
 Zaktualizuje doc.md z aktualnym statusem
 Przedstawi clear action plan
 Zaproponuje nastpne konkretne kroki

## = Kiedy u|ywa /clear:

- Po dBugiej przerwie w projekcie
- Gdy Claude "zgubiB wtek" podczas implementacji
- Po merge conflicts lub wikszych zmianach
- Na pocztku nowej sesji kodowania
- Gdy chcesz sprawdzi overall progress

## =Ë Alternatywna komenda - /status

Mo|esz te| stworzy `.claude/commands/status.md`:

```markdown
# QUICK STATUS CHECK

Przeczytaj `doc.md` i podaj krótki status:
- Current phase z claude.md
- Last completed task  
- Next immediate action
- Any blockers

Bez aktualizacji, tylko quick overview.
```

Wtedy komenda `/status` da Ci szybki overview, a `/clear` peBny reset z aktualizacj dokumentacji.

## =€ Setup Instructions

1. Skopiuj zawarto[ do `.claude/commands/clear.md`
2. Restart Claude Code (je[li byBa uruchomiona)
3. Test komendy: wpisz `/clear`
4. Verify: Claude powinien przeczyta oba pliki i da status report

**Ready!** <¯ Teraz masz zawsze dostp do reset kontekstu jedn komend!