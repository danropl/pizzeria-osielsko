import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ open, onClose }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-card rounded-3xl border border-border/50 w-full max-w-3xl max-h-[85vh] flex flex-col"
            style={{ boxShadow: "var(--shadow-hover)" }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground">Polityka prywatności</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
                aria-label="Zamknij"
              >
                <svg className="w-5 h-5 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div ref={contentRef} className="overflow-y-auto p-6 font-body text-sm text-foreground/80 leading-relaxed space-y-6">
              <section>
                <h3 className="font-subhead text-lg font-semibold text-foreground mb-2">Oświadczenie o ochronie danych</h3>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">1. Informacje ogólne</h4>
                <p>Witryna jest obsługiwana przez Pizzeria Osielsko, Akacjowa 2, 86-031 Osielsko, Poland, Pizzeriaosielsko@onet.pl (zwaną dalej „my" lub „nam"). W przypadku pytań dotyczących ochrony danych można skontaktować się z nami, korzystając z informacji kontaktowych podanych powyżej.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">2. Przetwarzanie danych osobowych i przesyłanie do osób trzecich</h4>
                <p>Korzystanie z naszej witryny internetowej powoduje automatyczne gromadzenie danych o urządzeniu użytkownika (komputerze, telefonie komórkowym, tablecie itp.). Rejestrowany jest adres IP aktualnie używany przez urządzenie końcowe użytkownika, data i godzina, typ przeglądarki oraz system operacyjny urządzenia końcowego, a także odwiedzane strony. Dane te są gromadzone w celu zapewnienia bezpieczeństwa oraz optymalizacji naszej oferty, a także ulepszania naszej witryny internetowej. Z wyjątkiem analizy do celów statystycznych, która w tym przypadku jest przeprowadzana wyłącznie w formie zanonimizowanej, każda inna analiza jest przeprowadzana ściśle w zakresie tego Oświadczenia o ochronie danych. Przetwarzanie danych osobowych oparto na art. 6 par. 1, zdania 1 litery f) RODO. Ochrona naszej witryny internetowej i optymalizacja naszych usług stanowią nasz uzasadniony interes.</p>
                <p className="mt-2">Jeśli użytkownik się z nami skontaktuje (poprzez zapytanie, korzystając z podanych informacji kontaktowych), przetwarzamy tylko te dane osobowe, które użytkownik nam podał i które są niezbędne do obsługi zapytania i odpowiedzi na nie.</p>
                <p className="mt-2">Aby umożliwić wykonanie operacji dotyczących przetwarzania danych omawiane w niniejszym Oświadczeniu o ochronie danych, np. hosting i obsługę naszej witryny internetowej, korzystamy z pomocy usługodawców.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">3. Pliki cookie</h4>
                <p>Aby uatrakcyjnić nasze usługi i umożliwić korzystanie z określonych funkcji, używamy tzw. plików cookie. Są to niewielkie pliki tekstowe, które zapisywane są na urządzeniu końcowym użytkownika.</p>
                <p className="mt-2">Niektóre z używanych przez nas plików cookie są usuwane po zakończeniu sesji przeglądarki, czyli po zamknięciu przeglądarki przez użytkownika (tzw. sesyjne pliki cookie). Inne pliki cookie pozostają na urządzeniu końcowym użytkownika i umożliwiają nam lub naszym partnerom rozpoznanie jego przeglądarki przy następnej wizycie (trwałe pliki cookie). Użytkownik może dokonać ustawień swojej przeglądarki, tak aby otrzymywać informacje o zapisywaniu plików cookie i decydować pojedynczo o ich zaakceptowaniu lub wykluczyć akceptowanie plików cookie w określonych przypadkach lub zawsze. Więcej informacji na ten temat podano w pomocy przeglądarki internetowej. W przypadku braku akceptacji zapisywania plików cookie nasza witryna może działać w ograniczonym zakresie. Zaakceptowanie powiadomienia dotyczącego plików cookie oznacza wyrażenie zgody na przetwarzanie danych osobowych użytkownika z wykorzystaniem plików cookie. Przetwarzanie danych osobowych oparto na art. 6, par. 1, zdaniu 1, literze a) RODO.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">4. Adobe Analytics</h4>
                <p>Korzystamy z Adobe Analytics, usługi firmy Adobe Systems Software Ireland Limited (4-6 Riverwalk Citywest Business Campus, Dublin 24, Irlandia; „Adobe"). Ta usługa wykorzystuje pliki cookie przechowywane na urządzeniu użytkownika umożliwiające analizę jego sposobu korzystania z witryny internetowej. Informacje wygenerowane przez plik cookie dotyczące sposobu korzystania z tej witryny internetowej przez użytkownika (w tym adres IP) są przesyłane na serwery firmy Adobe w Irlandii, gdzie są anonimizowane, a następnie przesyłane i przechowywane w formie anonimowej w celu dalszego przetwarzania przez serwery w Stanach Zjednoczonych. Firma Adobe wykorzystuje te informacje do oceny sposobu korzystania z witryny internetowej przez użytkownika, tworzenia raportów na temat działań w witrynie internetowej dla jej operatorów, a także do świadczenia innych usług związanych z działaniami w witrynie internetowej oraz korzystaniem z Internetu. Te informacje mogą być przesyłane do innych firm, jeżeli jest to wymagane przez prawo lub o ile inne firmy przetwarzają te dane w imieniu firmy Adobe. W żadnym wypadku adres IP użytkownika nie będzie powiązany z innymi danymi z firmy Adobe. Instalacji plików cookie można zapobiec, wybierając odpowiednie ustawienia przeglądarki; należy jednak pamiętać, że użytkownik może nie być w stanie korzystać ze wszystkich funkcji tej witryny internetowej w pełnym zakresie. Korzystanie z tej witryny internetowej oznacza zgodę na przetwarzanie danych zebranych o użytkowniku w sposób opisany powyżej oraz w wyżej opisanym celu. Zgodę na zbieranie danych przez firmę Adobe można wycofać w dowolnej chwili, co będzie miało skutek w przyszłości.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">5. Google Analytics</h4>
                <p>Korzystamy z Google Analytics, usługi analizy internetowej firmy Google Inc. („Google"). Google Analytics także wykorzystuje pliki cookie. Informacje wygenerowane przez plik cookie dotyczące sposobu korzystania z tej witryny internetowej przez użytkownika są zwykle przesyłane na serwery firmy Google w Stanach Zjednoczonych i tam przechowywane. Jednakże przed przesłaniem adres IP jest skracany przez firmę Google w państwach członkowskich Unii Europejskiej lub innych krajów będących sygnatariuszami Umowy w Europejskim Obszarze Gospodarczym. Pełny adres IP jest przesyłany na serwer firmy Google w Stanach Zjednoczonych i skracany tam tylko w wyjątkowych sytuacjach. W imieniu operatora witryny internetowej firma Google wykorzystuje te informacje do oceny sposobu korzystania z witryny internetowej przez użytkownika, tworzenia raportów dla operatora na temat działań w witrynie internetowej oraz w celu świadczenia innych usług związanych z korzystaniem z witryny internetowej i Internetu. W żadnym wypadku adres IP użytkownika przesyłany przez przeglądarkę internetową w kontekście usługi Google Analytics nie będzie powiązany z innymi danymi z firmy Google. Instalacji plików cookie można zapobiec, wybierając odpowiednie ustawienia przeglądarki. Ponadto użytkownik może uniknąć rejestrowania danych wygenerowanych przez plik cookie odnoszących się do korzystania przez niego ze strony internetowej (wraz z adresem IP) przez Google oraz przetwarzania tych danych przez Google, pobierając i instalując wtyczkę do przeglądarki dostępną pod adresem: https://tools.google.com/dlpage/gaoptout?hl=pl</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">6. Reklamowe pliki cookie i piksel Facebooka</h4>
                <p>W celach reklamowych korzystamy również z reklamowych plików cookie zewnętrznych oferentów. Te pliki cookie umożliwiają nam dostosowanie reklam wyświetlanych w przeglądarce do zainteresowań użytkownika na podstawie jego aktywności podczas wyszukiwań na stronach internetowych.</p>
                <p className="mt-2">Na naszej stronie internetowej używamy piksela Facebooka, narzędzia obsługiwanego przez Facebook Inc, 1 Hacker Way, Menlo Park, CA 94025, USA, lub, jeśli użytkownik jest rezydentem UE, przez Facebook Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irlandia („Facebook"), służącego do analizy, optymalizacji i ekonomicznego działania strony internetowej. Za pomocą tego narzędzia Facebook może również określić osoby odwiedzające naszą stronę internetową jako grupę docelową do wyświetlania reklam na Facebooku. Korzystamy z piksela Facebooka, aby wyświetlać publikowane przez nas reklamy na Facebooku jednak tylko tym użytkownikom Facebooka, którzy wykazali zainteresowanie naszą stroną internetową. Co za tym idzie, używamy piksela Facebooka, aby upewnić się, że nasze reklamy na Facebooku odpowiadają potencjalnym zainteresowaniom użytkowników i nie są uciążliwe. Możemy również używać piksela Facebooka do śledzenia skuteczności reklam na Facebooku w celach statystycznych i do badań rynkowych, sprawdzając, czy użytkownicy zostali przekierowani na naszą stronę internetową po kliknięciu reklamy na Facebooku (tzw. „konwersja" lub „interakcja użytkownika"). W tym przypadku podstawą prawną przetwarzania danych jest artykuł 6 ustęp 1 zd. 1 litera a) RODO.</p>
                <p className="mt-2">Piksel Facebooka jest używany bezpośrednio przez Facebooka w momencie odwiedzania naszej strony internetowej i może ustawić plik cookie na urządzeniu użytkownika. Jeśli następnie użytkownik zaloguje się na Facebooku lub już jest tam zalogowany, wizyta na naszej stronie zostanie zapisana w jego profilu. Dane zebrane o użytkowniku są dla nas anonimowe, więc nie dają nam żadnych odniesień do jego tożsamości. Facebook jednak zapisuje i przetwarza te dane, aby możliwe było powiązanie z danym profilem użytkownika. Oznacza to, że na podstawie przetworzonych danych możliwe jest tworzenie profilów użytkowników. Facebook przetwarza te dane zgodnie ze swoją polityką prywatności.</p>
                <p className="mt-2">Klikając „Akceptuj" na naszym banerze cookie, użytkownik wyraża zgodę na przetwarzanie swoich danych osobowych za pomocą analitycznych i reklamowych plików cookie w wyżej wymienionych celach. Przetwarzanie tych danych osobowych odbywa się na podstawie artykułu 6 ust. 1 zd. 1 litera a) RODO.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">7. Podanie danych osobowych i okresy przechowywania</h4>
                <p>Udostępnienie danych osobowych jest dobrowolne. Przekazanie nam danych osobowych nie jest wymagane przez prawo. Nieprzekazanie danych osobowych nie będzie miało konsekwencji dla użytkownika, ale nie będzie on mógł korzystać z naszych usług. Dane osobowe przesłane do nas za pośrednictwem naszej witryny internetowej będą przechowywane tylko do momentu realizacji celu, w jakim były przetwarzane.</p>
              </section>

              <section>
                <h4 className="font-subhead text-base font-semibold text-foreground mb-2">8. Prawa użytkownika</h4>
                <p className="mb-2">Z tytułu RODO użytkownikowi przysługuje prawo do:</p>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>uzyskania informacji o przetwarzaniu swoich danych osobowych, a także kopii tych danych (art. 15 RODO),</li>
                  <li>skorygowania nieprawidłowych i uzupełnienia niekompletnych danych osobowych (art. 16 RODO),</li>
                  <li>usunięcia swoich danych osobowych (art. 17 RODO),</li>
                  <li>ograniczenia przetwarzania swoich danych osobowych (art. 18 RODO),</li>
                  <li>otrzymania danych osobowych w formacie uporządkowanym i możliwym do odczytu maszynowego (art. 20 RODO),</li>
                  <li>wycofania udzielonej zgody (art. 7 RODO),</li>
                  <li>wniesienia sprzeciwu wobec przetwarzania danych (art. 21 RODO).</li>
                </ul>
                <p className="mt-2">Aby skorzystać z powyższych praw, użytkownik powinien użyć danych kontaktowych wskazanych w punkcie 1. Użytkownik ma także prawo do złożenia skargi do odpowiedniego organu nadzorczego, o ile uzna, że przetwarzanie danych jest niezgodne z RODO (art. 77 RODO).</p>
              </section>

              <p className="text-xs text-muted-foreground pt-4 border-t border-border/30">Stan: maj 2018/AG</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
