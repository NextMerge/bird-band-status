import { Button } from "@/components/ui/button";
import { createFileRoute, Link, useRouteContext } from "@tanstack/react-router";

export const Route = createFileRoute("/mortalities")({
  component: MortalitiesPage,
});

function MortalitiesPage() {
  const { language } = useRouteContext({ from: "__root__" });

  return (
    <main className="mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center gap-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Button>
        </Link>
      </div>

      <div className="prose prose-slate max-w-none">
        {language === "fr" ? (
          <>
            <h1 className="mb-6 text-3xl font-bold">
              Mortalités d&apos;oiseaux et comment les soumettre
            </h1>

            <p className="mb-6 text-lg leading-relaxed">
              Une mortalité due au baguage est un oiseau, bagué ou non, qui est
              mort (ou a été euthanasié) pendant les opérations de baguage. Un
              oiseau récupéré est un oiseau bagué mort lorsque l&apos;oiseau
              meurt pendant la recapture ou en dehors des opérations de baguage,
              p. ex. un oiseau abattu par un chasseur ou un animal tué sur la
              route. Les bagueurs peuvent signaler toute mortalité ou
              récupération liée au baguage dans le modèle des données de baguage
              ou de recapture, selon ce qui convient le mieux à la situation.
              Lors de la déclaration, donnez des détails sur la mortalité dans
              Remarques, tels que « mort dans le filet », « prédaté par un
              épervier », « euthanasié pour cause de blessure », « mort de
              froid/stress », etc. Voir ci-dessous pour plus de détails sur la
              manière d&apos;enregistrer les mortalités.
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortalité pendant les opérations de baguage avant de recevoir
                  une bague
                </strong>
              </h2>
              <p className="leading-relaxed">
                Soumettez les cas de mortalité d&apos;oiseaux non bagués en
                utilisant le modèle de baguage qui contient au moins un autre
                enregistrement avec un numéro de bague valide. Utilisez le code
                d&apos;état de la bague X (mortalité due au baguage); Statut de
                l&apos;oiseau: ---; laissez le champ du numéro de bague vide et
                incluez les données standard de l&apos;oiseau (bague, espèce,
                âge, sexe, date, lieu) avec Remarques.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortalité pendant les opérations de baguage après avoir reçu
                  une bague
                </strong>
              </h2>
              <p className="leading-relaxed">
                Si un oiseau a été bagué et meurt par la suite, la bague ne doit
                pas être déclarée comme ayant été détruite. Soumettez les
                mortalités d&apos;oiseaux bagués dans le modèle de baguage ou de
                recapture, selon ce qui convient le mieux à la situation. Pour
                une mortalité due au baguage, utilisez le code d&apos;état de la
                bague X (mortalité due au baguage); statut de l&apos;oiseau:
                statut avant la mort; incluez le numéro de la bague et les
                données standard de l&apos;oiseau (espèce, âge, sexe, date,
                lieu) avec les remarques. Le code d&apos;obtention se rapporte à
                la façon dont l&apos;oiseau est mort, par exemple 10 - Mort
                attribuable au baguage: piège, dispositif de retenue ou
                manipulation, 64 - Tué ou capturé par un prédateur autre
                qu&apos;un chat, etc.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortalité d&apos;oiseaux déjà bagués (recaptures)
                </strong>
              </h2>
              <p className="leading-relaxed">
                Signalez tout oiseau{" "}
                <strong>
                  mort bagué rencontré pendant ou en dehors de vos opérations de
                  baguage
                </strong>
                , en utilisant le modèle de recapture, même si vous n&apos;avez
                pas bagué l&apos;oiseau à l&apos;origine. Utilisez le code de
                statut de l&apos;oiseau lors de la récupération et l&apos;état
                actuel: 04 ou 05 (oiseau mort, bague laissée ou enlevée).
                Choisissez le code approprié Comment Obtenu et les données
                standard sur l&apos;oiseau (espèce, âge, sexe, date, lieu) avec
                les remarques.
              </p>
            </section>

            <p className="mt-8 text-lg leading-relaxed">
              Seules les mortalités liées au baguage sont acceptées avec les
              données de baguage ou de recapture. Par exemple, un oiseau non
              bagué qui heurte la fenêtre de votre maison ne doit pas être
              signalé avec les données de baguage ou de recapture.
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-6 text-3xl font-bold">
              Bird mortalities and how to submit them
            </h1>

            <p className="mb-6 text-lg leading-relaxed">
              A banding mortality is a bird either banded or unbanded, that died
              (or was euthanized) during banding operations. A recovery is a
              dead banded bird where the bird dies either during recapture or
              outside of banding operations, e.g., a hunter shot bird or
              roadkill. Banders can report any banding mortality or recovery in
              the Bands or Recaptures template, whichever suits the situation.
              When reporting, provide details about the mortality in Remarks,
              such as &ldquo;died in the net&rdquo;, &ldquo;predated by a
              hawk&rdquo;, &ldquo;euthanized due to injury&rdquo;, &ldquo;died
              from cold/stress&rdquo;, etc. See below for details on how to
              record mortalities.
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortality during banding operations before receiving a band
                </strong>
              </h2>
              <p className="leading-relaxed">
                Submit unbanded bird mortalities using the Banding template that
                contains at least one other record with a valid band number. Use
                disposition code X (banding mortality); Bird Status: ---; leave
                the band number field blank and include standard bird data
                (band, species, age, sex, date, location) with Remarks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortality during banding operations after receiving a band
                </strong>
              </h2>
              <p className="leading-relaxed">
                If a bird has received a band and subsequently dies, the band
                should not be reported as destroyed. Submit mortalities of
                banded birds in the Bandings or Recaptures template, whichever
                suits the situation. For a banding mortality, use Disposition
                code X (banding mortality); Bird Status: status before death;
                include band number and standard bird data (species, age, sex,
                date, location) with Remarks. How Obtained code relates to how
                the bird died, such as 10 – Banding Mortality: due to trap,
                holding device, or handling, 64 – Killed or caught by a predator
                other than a cat, etc. bands that are removed from a bird should
                not be reused.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                <strong>
                  Mortality of previously banded birds (recaptures)
                </strong>
              </h2>
              <p className="leading-relaxed">
                Report any{" "}
                <strong>
                  dead, banded bird encountered during or outside of your
                  banding operations i.e., recoveries
                </strong>
                , using the recapture template, even if you did not band the
                bird originally. Use the Bird Status code at recovery and
                Present Condition: 04 or 05 (bird dead, band left on or
                removed). Choose the appropriate How Obtained code, and standard
                bird data (species, age, sex, date, location) with Remarks.
              </p>
            </section>

            <p className="mt-8 text-lg leading-relaxed">
              Only mortalities related to banding are accepted with your banding
              or recapture data, for example, an unbanded bird striking your
              home&apos;s window should not be reported with your banding or
              recapture data.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
